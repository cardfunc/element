import { Component, Event, EventEmitter, Method as Method, Listen, Prop } from '@stencil/core'
import { Trigger } from "smoothly"
import { Currency } from "isoly"
import { Payment } from "@certitrade/card3-model"
import "smoothly"

@Component({
  tag: 'card3-form',
  styleUrl: 'style.css',
  shadow: true
})
export class Form {
	frame: HTMLSmoothlyFrameElement
	@Prop() url: string
	@Prop({ reflectToAttr: true, mutable: true }) state: "failed" | "succeeded" | "processing" | "created" = "created"
	@Prop({ mutable: true }) value?: Payment
	@Event() changed: EventEmitter<Payment>
	@Listen("trigger")
	async handleTrigger(event: CustomEvent<Trigger>) {
		console.log("card3-form", event)
		this.changed.emit(this.value = event.detail.value)
		this.state = event.detail.name == "cardPaymentSuccess" ? "succeeded" : "failed"
	}
	@Method()
	submit(method: string, amount: number, currency: Currency, order?: string, reference?: string, description?: string) {
		console.log("frame submit")
		if (this.frame) {
			this.frame.send("card", { name: "submit", value: { method, amount, currency, order, reference, description } })
			this.state = "processing"
		}
	}
  render() {
		return <smoothly-frame url={ this.url } name="card" ref={ (element: HTMLSmoothlyFrameElement) => this.frame = element }></smoothly-frame>
  }
}
