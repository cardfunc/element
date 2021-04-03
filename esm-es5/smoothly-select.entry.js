import { r as registerInstance, c as createEvent, h } from './index-ef082d98.js';
var styleCss = ".sc-smoothly-select-h{display:block}[hidden].sc-smoothly-select-h{display:none}select.sc-smoothly-select{background-color:inherit;padding:0 0.2em;border:none;-webkit-appearance:none;background-color:rgb(var(--smoothly-color))}select.sc-smoothly-select>option.sc-smoothly-select{background-color:inherit}";
var SmoothlySelect = /** @class */ (function () {
    function SmoothlySelect(hostRef) {
        registerInstance(this, hostRef);
        this.selectionChanged = createEvent(this, "selectionChanged", 7);
    }
    SmoothlySelect.prototype.optionSelected = function () {
        var _a;
        this.selectionChanged.emit({ identifier: this.identifier, value: (_a = document.getElementById(this.identifier)) === null || _a === void 0 ? void 0 : _a.value });
    };
    SmoothlySelect.prototype.render = function () {
        var _this = this;
        return [
            h("select", { id: this.identifier, onChange: function () { return _this.optionSelected(); } }, h("slot", null))
        ];
    };
    return SmoothlySelect;
}());
SmoothlySelect.style = styleCss;
export { SmoothlySelect as smoothly_select };
