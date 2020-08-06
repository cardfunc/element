// tslint:disable-next-line:no-implicit-dependencies
import { Component, Event, EventEmitter, Method, Listen, Prop, State, h } from "@stencil/core"
import { Token } from "authly"
import { Error } from "gracely"
import { Trigger } from "smoothly-model"
import { AuthorizationCreatableSafe, MerchantKeyInfo, MerchantKeyInfoUnpack } from "../model"

@Component({
	tag: "cardfunc-element",
	styleUrl: "style.css",
	shadow: true,
})
export class Form {
	frame: HTMLSmoothlyFrameElement
	@Prop() apiKey: string
	@Prop({ reflectToAttr: true, mutable: true }) state: "failed" | "succeeded" | "processing" | "created" = "created"
	@Prop({ reflectToAttr: true, mutable: true }) state3d: "failed" | "succeeded" | "processing" | "created" = "created"
	@Prop({ mutable: true }) value?: AuthorizationCreatableSafe
	@Prop({ mutable: true }) value3d?: AuthorizationCreatableSafe
	@State() theme?: string
	@State() verify?: { pareq: string, url: string, issuer: string }
	@State() authorization?: AuthorizationCreatableSafe
	@Event() changed: EventEmitter<AuthorizationCreatableSafe>
	@Event() changed3d: EventEmitter<AuthorizationCreatableSafe>
	private received?: (state: "succeeded" | "failed", authorization: AuthorizationCreatableSafe | Error | Token) => void
	private received3d?: (state3d: "succeeded" | "failed", authorization: AuthorizationCreatableSafe | Error | Token) => void
	@State() merchant?: MerchantKeyInfo
	async componentWillLoad() {
		this.merchant = await MerchantKeyInfoUnpack(this.apiKey, "public")
		const styleLink = document.querySelector("link[rel=stylesheet][href^='https://theme.payfunc.com/']") as HTMLLinkElement
		if (styleLink) {
			const themeLink = styleLink.href.substring(26)
			this.theme = themeLink.substring(0, themeLink.indexOf("/"))
		}
	}
	@Listen("trigger")
	async handleTrigger(event: CustomEvent<Trigger>) {
		if (event.detail.value && event.detail.value.status == 400 && event.detail.value.type == "missing property" && event.detail.value.content && event.detail.value.content.property == "pares")
			this.verify = { pareq: event.detail.value.content.pareq, url: event.detail.value.content.url, issuer: this.merchant?.card.url ?? "" }
		else if (event.detail.name == "pares" || event.detail.name == "card") {
			this.verify = undefined
			if (this.authorization)
				this.frame.send("card", { name: "do3d", value: { authorization: this.authorization, key: this.apiKey, parent: window.location.origin } })
		}
		else {
			this.verify = undefined
			this.changed.emit(this.value = event.detail.value)
			this.state = event.detail.name == "cardPaymentSuccess" ? "succeeded" : "failed"
			if (this.received) {
				this.received(this.state, event.detail.value)
				this.received = undefined
			}
			this.changed3d.emit(this.value3d = event.detail.value)
			this.state3d = event.detail.name == "cardAuthorizationSuccess" ? "succeeded" : "failed"
			if (this.received3d) {
				this.received3d(this.state3d, event.detail.value)
				this.received3d = undefined
			}
		}
	}
	@Method()
	submit(authorization: AuthorizationCreatableSafe): Promise<AuthorizationCreatableSafe | Error | Token> {
		this.authorization = authorization
		return new Promise(callback => {
			if (this.frame) {
				this.received = (_, response) => callback(response)
				this.frame.send("card", { name: "submitVersion1", value: { authorization, key: this.apiKey, parent: window.location.origin } })
				this.state = "processing"
			}
		})
	}
	@Method()
	do3d(authorization: AuthorizationCreatableSafe, error?: Error): Promise<AuthorizationCreatableSafe | Error | Token> {
		this.authorization = authorization
		return new Promise(callback => {
			if (this.frame) {
				this.received3d = (_, response) => callback(response)
				let value: any = { authorization, key: this.apiKey, parent: window.location.origin }
				if (error)
					value = { ...value, error }
				this.frame.send("card", { name: "do3d", value })
				this.state3d = "processing"
			}
		})
	}
	render() {
		return [
			this.merchant ? <smoothly-frame url={ this.merchant.card.url + "/ui/web-app/" + (this.theme ? "?theme=" + this.theme : "") } name="card" ref={ (element: HTMLSmoothlyFrameElement) => this.frame = element }></smoothly-frame> : [],
			this.verify ?
			<smoothly-dialog closable>
				<smoothly-frame
					url={ `${ this.verify.issuer }/redirect/post?target=${ encodeURIComponent(this.verify.url) }&PaReq=${ encodeURIComponent(this.verify.pareq) }&MD=MD&TermUrl=${ encodeURIComponent(`${ this.verify.issuer }/emv3d1/done?merchant=${ this.merchant?.card.id ?? this.merchant?.sub ?? "error" }&token=${ this.authorization?.card ?? "error" }&parent=${ window.location.origin }`) }` }
					name="parent"
					style={{ height: "90vh" }}
				></smoothly-frame>
			</smoothly-dialog> :
			[],
		]
	}
}
