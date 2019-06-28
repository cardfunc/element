// tslint:disable-next-line:no-implicit-dependencies
import { Component, Event, EventEmitter, Method as Method, Listen, Prop, State, h } from "@stencil/core"
import { Payload, Verifier } from "authly"
import { Trigger } from "smoothly"
import { Currency } from "isoly"
import { Payment } from "@certitrade/card3-model"

@Component({
	tag: "card3-form",
	styleUrl: "style.css",
	shadow: true,
})
export class Form {
	frame: any
	@Prop() token: string
	@Prop({ reflectToAttr: true, mutable: true }) state: "failed" | "succeeded" | "processing" | "created" = "created"
	@Prop({ mutable: true }) value?: Payment
	@Event() changed: EventEmitter<Payment>
	private received?: (state: "succeeded" | "failed", payment: Payment) => void
	@State() payload?: Payload
	componentWillLoad() {
		new Verifier("public").verify(this.token).then(payload => this.payload = payload)
	}
	@Listen("trigger")
	async handleTrigger(event: CustomEvent<Trigger>) {
		console.log("card3-form", event)
		this.changed.emit(this.value = event.detail.value)
		this.state = event.detail.name == "cardPaymentSuccess" ? "succeeded" : "failed"
		if (this.received) {
			this.received(this.state, event.detail.value)
			this.received = undefined
		}
	}
	@Method()
	submit(method: "card" | "one-click" |	"init-recurring" | "recurring", amount: number, currency: Currency, order?: string, reference?: string, description?: string): Promise<Payment> {
		return new Promise(callback => {
			console.log("frame submit")
			if (this.frame) {
				this.received = (_, payment) => callback(payment)
				this.frame.send("card", { name: "submit", value: { method, amount, currency, order, reference, description, token: this.token, parent: window.location.origin } })
				this.state = "processing"
			}
		})
	}
	render() {
		return [
			this.payload ? <smoothly-frame url={ this.payload.iss + "/card3-web/" } name="card" ref={ (element: HTMLElement) => this.frame = element }></smoothly-frame> : [],
			this.payload && this.value && this.value.verify ?
			<smoothly-dialog closable>
				<smoothly-frame url={ `${ this.payload.iss }/api/redirect/post?target=${ this.value.verify.location }&PaReq=${ this.value.verify.pareq }` } name="parent"></smoothly-frame>
			</smoothly-dialog> :
			[],
		]
	}
}
