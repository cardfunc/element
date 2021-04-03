import { r as registerInstance, c as createEvent, h } from './index-ef082d98.js';
var styleCss = ".sc-smoothly-address-h{display:block;position:relative}[hidden].sc-smoothly-address-h{display:none}smoothly-submit.sc-smoothly-address{float:right}label.sc-smoothly-address{display:block;-webkit-margin-before:.6em;margin-block-start:.6em;-webkit-margin-after:.2em;margin-block-end:.2em}";
var SmoothlyAddress = /** @class */ (function () {
    function SmoothlyAddress(hostRef) {
        registerInstance(this, hostRef);
        this.type = "primary";
        this.mode = "display";
        this.change = createEvent(this, "change", 7);
    }
    SmoothlyAddress.prototype.onChange = function (event) {
        event.stopPropagation();
        this.value = event.detail;
        this.mode = "display";
        this.change.emit(Object.assign({ type: this.type }, this.value));
    };
    SmoothlyAddress.prototype.render = function () {
        var _this = this;
        return this.mode == "edit" ?
            [
                h("label", null, this.type),
                h("smoothly-address-edit", { onChange: function (e) { return _this.onChange(e); }, value: this.value }),
            ] :
            [
                h("label", null, this.type),
                this.editable ? h("smoothly-submit", { color: "primary", fill: "clear", prevent: true, onSubmit: function () { return _this.mode = "edit"; } }, "Edit") : [],
                h("smoothly-address-display", { value: this.value }),
            ];
    };
    return SmoothlyAddress;
}());
SmoothlyAddress.style = styleCss;
export { SmoothlyAddress as smoothly_address };
