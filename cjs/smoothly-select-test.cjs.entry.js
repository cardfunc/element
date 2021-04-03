'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');

const styleCss = ".sc-smoothly-select-test-h{display:block}[hidden].sc-smoothly-select-test-h{display:none}";

class SmoothlySelectTest {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.currencies = ["SEK", "EUR"];
        this.currency = "SEK";
    }
    handleSelectionChanged(event) {
        console.log("selectionChanged", event.detail);
    }
    render() {
        return [
            index.h("smoothly-select", { identifier: "currency" }, this.currencies.map(option => this.currency == option ? index.h("option", { value: option, selected: true }, option) : index.h("option", { value: option }, option))),
            index.h("smoothly-select", { identifier: "language" }, index.h("optgroup", { label: "Nordic" }, index.h("option", { value: "sv" }, "Swedish"), index.h("option", { value: "da", selected: true }, "Danish"), index.h("option", { value: "no" }, "Norwegian")), index.h("optgroup", { label: "Other" }, index.h("option", { value: "en" }, "English")))
        ];
    }
}
SmoothlySelectTest.style = styleCss;

exports.smoothly_select_test = SmoothlySelectTest;
