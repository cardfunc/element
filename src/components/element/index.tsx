// tslint:disable-next-line:no-implicit-dependencies
import { Component, Event, EventEmitter, Method, Listen, Prop, State, h } from "@stencil/core"
import { Payload, Verifier, Token } from "authly"
import { Error } from "gracely"
import { Trigger } from "smoothly-model"
import { Authorization } from "@cardfunc/model"
import { AuthorizationCreatableSafe } from "../model"

@Component({
	tag: "cardfunc-element",
	styleUrl: "style.css",
	shadow: true,
})
export class Form {
	frame: HTMLSmoothlyFrameElement
	@Prop() apiKey: string
	@Prop({ reflectToAttr: true, mutable: true }) state: "failed" | "succeeded" | "processing" | "created" = "created"
	@Prop({ mutable: true }) value?: AuthorizationCreatableSafe
	@State() theme?: string
	@State() verify?: { pareq: string, url: string, issuer: string }
	@State() authorization?: AuthorizationCreatableSafe
	@Event() changed: EventEmitter<Authorization>
	private received?: (state: "succeeded" | "failed", authorization: Authorization | Error | Token) => void
	@State() payload?: Payload
	componentWillLoad() {
		Verifier.create("public").verify(this.apiKey).then(payload => this.payload = payload)
		const styleLink = document.querySelector("link[rel=stylesheet][href^='https://theme.payfunc.com/']") as HTMLLinkElement
		if (styleLink) {
			const themeLink = styleLink.href.substring(26)
			this.theme = themeLink.substring(0, themeLink.indexOf("/"))
		}
	}
	@Listen("trigger")
	async handleTrigger(event: CustomEvent<Trigger>) {
		if (event.detail.value && event.detail.value.status == 400 && event.detail.value.type == "missing property" && event.detail.value.content && event.detail.value.content.property == "pares") {
			this.verify = { pareq: event.detail.value.content.pareq, url: event.detail.value.content.url, issuer: this.payload ? this.payload.iss ? this.payload.iss : "" : "" }
		}
		else if (event.detail.name == "pares") {
			this.verify = undefined
			if (this.authorization)
				this.frame.send("card", { name: "submit", value: { authorization: this.authorization, key: this.apiKey, parent: window.location.origin } })
		}
		else {
			this.verify = undefined
			this.changed.emit(this.value = event.detail.value)
			this.state = event.detail.name == "cardPaymentSuccess" ? "succeeded" : "failed"
			if (this.received) {
				this.received(this.state, event.detail.value)
				this.received = undefined
			}
		}
	}
	@Method()
	submit(authorization: AuthorizationCreatableSafe): Promise<Authorization | Error | Token> {
		this.authorization = authorization
		return new Promise(callback => {
			if (this.frame) {
				this.received = (_, response) => callback(response)
				this.frame.send("card", { name: "submit", value: { authorization, key: this.apiKey, parent: window.location.origin } })
				this.state = "processing"
			}
		})
	}
	render() {
		return [
			this.payload ? <smoothly-frame url={ this.payload.iss + "/ui/web-app/" + (this.theme ? "?theme=" + this.theme : "") } name="card" ref={ (element: HTMLSmoothlyFrameElement) => this.frame = element }></smoothly-frame> : [],
			this.verify ?
			<smoothly-dialog closable>
				<smoothly-frame
					url={ `${ this.verify.issuer }/redirect/post?target=${ encodeURIComponent(this.verify.url) }&PaReq=${ encodeURIComponent(this.verify.pareq) }&MD=MD&TermUrl=${ encodeURIComponent(`${ this.verify.issuer }/emv3d/done?parent=${ window.location.origin }`) }` } name="parent" style={{ height: "90vh" }}
				></smoothly-frame>
			</smoothly-dialog> :
			[],
		]
	}
}
