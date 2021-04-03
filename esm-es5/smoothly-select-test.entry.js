import { r as registerInstance, h } from './index-ef082d98.js';
var styleCss = ".sc-smoothly-select-test-h{display:block}[hidden].sc-smoothly-select-test-h{display:none}";
var SmoothlySelectTest = /** @class */ (function () {
    function SmoothlySelectTest(hostRef) {
        registerInstance(this, hostRef);
        this.currencies = ["SEK", "EUR"];
        this.currency = "SEK";
    }
    SmoothlySelectTest.prototype.handleSelectionChanged = function (event) {
        console.log("selectionChanged", event.detail);
    };
    SmoothlySelectTest.prototype.render = function () {
        var _this = this;
        return [
            h("smoothly-select", { identifier: "currency" }, this.currencies.map(function (option) { return _this.currency == option ? h("option", { value: option, selected: true }, option) : h("option", { value: option }, option); })),
            h("smoothly-select", { identifier: "language" }, h("optgroup", { label: "Nordic" }, h("option", { value: "sv" }, "Swedish"), h("option", { value: "da", selected: true }, "Danish"), h("option", { value: "no" }, "Norwegian")), h("optgroup", { label: "Other" }, h("option", { value: "en" }, "English")))
        ];
    };
    return SmoothlySelectTest;
}());
SmoothlySelectTest.style = styleCss;
export { SmoothlySelectTest as smoothly_select_test };
