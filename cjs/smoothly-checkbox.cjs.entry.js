'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');

const styleCss = ".sc-smoothly-checkbox-h{display:block;position:relative}[hidden].sc-smoothly-checkbox-h{display:none}";

class SmoothlyCheckbox {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.smoothlyChecked = index.createEvent(this, "smoothlyChecked", 7);
    }
    async onInput(e) {
        if (e.target && e.target.value && (this.checked = e.target.checked))
            this.smoothlyChecked.emit({ name: this.name, value: this.value });
        return true;
    }
    render() {
        return [
            index.h("input", { type: "checkbox", name: this.name, value: this.value, title: this.label, checked: this.checked, onChange: e => this.onInput(e) }),
        ];
    }
}
SmoothlyCheckbox.style = styleCss;

exports.smoothly_checkbox = SmoothlyCheckbox;
