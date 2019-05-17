import { Component, Event, EventEmitter, Method as Method, Listen, Prop } from "@stencil/core"
import { Trigger } from "smoothly"
import { Currency } from "isoly"
import { Payment } from "@certitrade/card3-model"
import { PaymentMethod } from "../../model"

@Component({
	tag: "card3-form",
	styleUrl: "style.css",
	shadow: true,
})
export class Form {
	frame: HTMLSmoothlyFrameElement
	@Prop() url: string
	@Prop({ reflectToAttr: true, mutable: true }) state: "failed" | "succeeded" | "processing" | "created" = "created"
	@Prop({ mutable: true }) value?: Payment
	@Event() changed: EventEmitter<Payment>
	private received?: (state: "succeeded" | "failed", payment: Payment) => void
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
	submit(method: PaymentMethod, amount: number, currency: Currency, order?: string, reference?: string, description?: string): Promise<Payment> {
		return new Promise(callback => {
			console.log("frame submit")
			if (this.frame) {
				this.received = (_, payment) => callback(payment)
				this.frame.send("card", { name: "submit", value: { method, amount, currency, order, reference, description} })
				this.state = "processing"
			}
		})
	}
	render() {
		return <smoothly-frame url={ this.url } name="card" ref={ (element: HTMLSmoothlyFrameElement) => this.frame = element }></smoothly-frame>
	}
}
