// tslint:disable-next-line:no-implicit-dependencies
import { Component, Event, EventEmitter, Method, Listen, Prop, State, h } from "@stencil/core"
import { Payload, Verifier, Token } from "authly"
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
	@Event() changed: EventEmitter<Authorization>
	private received?: (state: "succeeded" | "failed", authorization: Authorization | Token) => void
	@State() payload?: Payload
	componentWillLoad() {
		new Verifier("public").verify(this.apiKey).then(payload => this.payload = payload)
	}
	@Listen("trigger")
	async handleTrigger(event: CustomEvent<Trigger>) {
		console.log("cardfunc-element", event)
		this.changed.emit(this.value = event.detail.value)
		this.state = event.detail.name == "cardPaymentSuccess" ? "succeeded" : "failed"
		if (this.received) {
			this.received(this.state, event.detail.value)
			this.received = undefined
		}
	}
	@Method()
	submit(authorization: AuthorizationCreatableSafe): Promise<Authorization | Token> {
		return new Promise(callback => {
			console.log("frame submit")
			if (this.frame) {
				this.received = (_, response) => callback(response)
				this.frame.send("card", { name: "submit", value: { authorization, key: this.apiKey, parent: window.location.origin } })
				this.state = "processing"
			}
		})
	}
	render() {
		return [
			this.payload ? <smoothly-frame url={ this.payload.iss + "/web-app/" } name="card" ref={ (element: HTMLSmoothlyFrameElement) => this.frame = element }></smoothly-frame> : [],
			// TODO: Reenable 3D Secure
			// this.payload && this.value && this.value.verify ?
			// <smoothly-dialog closable>
			// 	<smoothly-frame url={ `${ this.payload.iss }/redirect/post?target=${ this.value.verify.location }&PaReq=${ this.value.verify.pareq }` } name="parent"></smoothly-frame>
			// </smoothly-dialog> :
			// [],
		]
	}
}
