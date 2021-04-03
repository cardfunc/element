import { r as registerInstance, h, g as getElement } from './index-ef082d98.js';
var styleCss = "smoothly-accordion-item.sc-smoothly-accordion{border:1px solid rgb(var(--smoothly-dark-color));border-bottom:none}smoothly-accordion-item.sc-smoothly-accordion:first-of-type{border-top-left-radius:4px;border-top-right-radius:4px;margin-top:.4em}smoothly-accordion-item.sc-smoothly-accordion:last-of-type{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:1px solid rgb(var(--smoothly-dark-color));margin-bottom:.6em}smoothly-accordion-item[open].sc-smoothly-accordion{border-color:rgb(var(--smoothly-primary-color));border-bottom:1px solid rgb(var(--smoothly-primary-color))}smoothly-accordion-item[open].sc-smoothly-accordion+smoothly-accordion-item.sc-smoothly-accordion{border-top:none}";
var SmoothlyAccordion = /** @class */ (function () {
    function SmoothlyAccordion(hostRef) {
        registerInstance(this, hostRef);
        this.items = [];
    }
    SmoothlyAccordion.prototype.valueChanged = function (value) {
        this.updateItems();
    };
    SmoothlyAccordion.prototype.handleOpenClose = function (event) {
        if (event.detail.open)
            this.value = event.detail.name;
        else if (this.value == event.detail.name)
            this.value = undefined;
    };
    SmoothlyAccordion.prototype.onAccordionItemDidLoad = function (ev) {
        var item = ev.target;
        this.items.push(item);
        if (this.value == undefined && item.open)
            this.value = item.name;
        else
            this.updateItems();
    };
    SmoothlyAccordion.prototype.onAccordionItemDidUnload = function (ev) {
        var index = this.items.indexOf(ev.target);
        if (index > -1)
            this.items.splice(index, 1);
    };
    SmoothlyAccordion.prototype.componentDidLoad = function () {
        this.updateItems();
    };
    SmoothlyAccordion.prototype.updateItems = function () {
        var hasChecked = false;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.open = (!hasChecked && item.name == this.value))
                hasChecked = true;
        }
    };
    SmoothlyAccordion.prototype.render = function () {
        return [
            h("slot", null),
        ];
    };
    Object.defineProperty(SmoothlyAccordion.prototype, "me", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SmoothlyAccordion, "watchers", {
        get: function () {
            return {
                "value": ["valueChanged"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return SmoothlyAccordion;
}());
SmoothlyAccordion.style = styleCss;
export { SmoothlyAccordion as smoothly_accordion };
