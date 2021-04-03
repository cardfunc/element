import { r as registerInstance, c as createEvent, h } from './index-ef082d98.js';

const styleCss = ".sc-smoothly-checkbox-h{display:block;position:relative}[hidden].sc-smoothly-checkbox-h{display:none}";

class SmoothlyCheckbox {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.smoothlyChecked = createEvent(this, "smoothlyChecked", 7);
    }
    async onInput(e) {
        if (e.target && e.target.value && (this.checked = e.target.checked))
            this.smoothlyChecked.emit({ name: this.name, value: this.value });
        return true;
    }
    render() {
        return [
            h("input", { type: "checkbox", name: this.name, value: this.value, title: this.label, checked: this.checked, onChange: e => this.onInput(e) }),
        ];
    }
}
SmoothlyCheckbox.style = styleCss;

export { SmoothlyCheckbox as smoothly_checkbox };
