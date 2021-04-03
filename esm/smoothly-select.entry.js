import { r as registerInstance, c as createEvent, h } from './index-ef082d98.js';

const styleCss = ".sc-smoothly-select-h{display:block}[hidden].sc-smoothly-select-h{display:none}select.sc-smoothly-select{background-color:inherit;padding:0 0.2em;border:none;-webkit-appearance:none;background-color:rgb(var(--smoothly-color))}select.sc-smoothly-select>option.sc-smoothly-select{background-color:inherit}";

class SmoothlySelect {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectionChanged = createEvent(this, "selectionChanged", 7);
    }
    optionSelected() {
        var _a;
        this.selectionChanged.emit({ identifier: this.identifier, value: (_a = document.getElementById(this.identifier)) === null || _a === void 0 ? void 0 : _a.value });
    }
    render() {
        return [
            h("select", { id: this.identifier, onChange: () => this.optionSelected() }, h("slot", null))
        ];
    }
}
SmoothlySelect.style = styleCss;

export { SmoothlySelect as smoothly_select };
