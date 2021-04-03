import { r as registerInstance, h } from './index-ef082d98.js';

const styleCss = ".sc-smoothly-select-test-h{display:block}[hidden].sc-smoothly-select-test-h{display:none}";

class SmoothlySelectTest {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.currencies = ["SEK", "EUR"];
        this.currency = "SEK";
    }
    handleSelectionChanged(event) {
        console.log("selectionChanged", event.detail);
    }
    render() {
        return [
            h("smoothly-select", { identifier: "currency" }, this.currencies.map(option => this.currency == option ? h("option", { value: option, selected: true }, option) : h("option", { value: option }, option))),
            h("smoothly-select", { identifier: "language" }, h("optgroup", { label: "Nordic" }, h("option", { value: "sv" }, "Swedish"), h("option", { value: "da", selected: true }, "Danish"), h("option", { value: "no" }, "Norwegian")), h("optgroup", { label: "Other" }, h("option", { value: "en" }, "English")))
        ];
    }
}
SmoothlySelectTest.style = styleCss;

export { SmoothlySelectTest as smoothly_select_test };
