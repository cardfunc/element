'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');

const styleCss = ".sc-smoothly-address-h{display:block;position:relative}[hidden].sc-smoothly-address-h{display:none}smoothly-submit.sc-smoothly-address{float:right}label.sc-smoothly-address{display:block;-webkit-margin-before:.6em;margin-block-start:.6em;-webkit-margin-after:.2em;margin-block-end:.2em}";

class SmoothlyAddress {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.type = "primary";
        this.mode = "display";
        this.change = index.createEvent(this, "change", 7);
    }
    onChange(event) {
        event.stopPropagation();
        this.value = event.detail;
        this.mode = "display";
        this.change.emit(Object.assign({ type: this.type }, this.value));
    }
    render() {
        return this.mode == "edit" ?
            [
                index.h("label", null, this.type),
                index.h("smoothly-address-edit", { onChange: (e) => this.onChange(e), value: this.value }),
            ] :
            [
                index.h("label", null, this.type),
                this.editable ? index.h("smoothly-submit", { color: "primary", fill: "clear", prevent: true, onSubmit: () => this.mode = "edit" }, "Edit") : [],
                index.h("smoothly-address-display", { value: this.value }),
            ];
    }
}
SmoothlyAddress.style = styleCss;

exports.smoothly_address = SmoothlyAddress;
