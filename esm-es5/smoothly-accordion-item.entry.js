import { r as registerInstance, c as createEvent, h, g as getElement } from './index-ef082d98.js';
var styleCss = ".sc-smoothly-accordion-item-h{display:block}[hidden].sc-smoothly-accordion-item-h{display:none}details.sc-smoothly-accordion-item{padding:0}details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item>span.sc-smoothly-accordion-item{float:right;margin:.2em;font-size:60%}details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item{font-size:120%;list-style-type:none;cursor:pointer;padding:.4em;color:rgb(var(--smoothly-text-tint))}details.sc-smoothly-accordion-item>fieldset.sc-smoothly-accordion-item{border:none;margin:0;padding:0}[open].sc-smoothly-accordion-item-h>details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item{color:rgb(var(--smoothly-primary-contrast));background:rgb(var(--smoothly-primary-color))}details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item::-webkit-details-marker{display:none}details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item>svg.sc-smoothly-accordion-item{width:1em;height:auto;margin-bottom:-.2em;margin-right:.4em}[open].sc-smoothly-accordion-item-h>details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item>svg.sc-smoothly-accordion-item{fill:rgb(var(--smoothly-primary-contrast))}.sc-smoothly-accordion-item-h:not([open])>details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item>svg.sc-smoothly-accordion-item{fill:rgb(var(--smoothly-text-tint))}";
var SmoothlyAccordionItem = /** @class */ (function () {
    function SmoothlyAccordionItem(hostRef) {
        registerInstance(this, hostRef);
        this.smoothlyAccordionItemDidLoad = createEvent(this, "smoothlyAccordionItemDidLoad", 7);
        this.smoothlyAccordionItemDidUnload = createEvent(this, "smoothlyAccordionItemDidUnload", 7);
        this.smoothlyOpen = createEvent(this, "smoothlyOpen", 7);
        this.smoothlyClose = createEvent(this, "smoothlyClose", 7);
    }
    SmoothlyAccordionItem.prototype.openChanged = function (isChecked) {
        this.open = isChecked;
        if (isChecked) {
            this.smoothlyOpen.emit({
                open: true,
                name: this.name,
            });
        }
    };
    SmoothlyAccordionItem.prototype.componentDidLoad = function () {
        var _this = this;
        var summary = this.me.getElementsByTagName("summary");
        if (summary.length > 0) {
            var onClick = function (e) {
                if (_this.open)
                    _this.smoothlyClose.emit({ open: _this.open, name: _this.name });
                else
                    _this.open = true;
                e.preventDefault();
            };
            summary[0].addEventListener("click", onClick);
            summary[0].addEventListener("touch", onClick);
        }
        this.smoothlyAccordionItemDidLoad.emit();
    };
    SmoothlyAccordionItem.prototype.componentDidUnload = function () {
        this.smoothlyAccordionItemDidUnload.emit();
    };
    SmoothlyAccordionItem.prototype.render = function () {
        return (h("details", { open: this.open }, h("summary", null, this.open ?
            h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { d: "M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm-42.7 318.9L106.7 260.3l29.9-29.9 76.8 76.8 162.1-162.1 29.9 29.9-192.1 191.9z" })) :
            h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { d: "M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z" })), this.name, typeof (this.brand) == "string" ? h("span", { class: this.brand.toLowerCase() }, this.brand) :
            Array.isArray(this.brand) ? this.brand.map(function (b) { return h("span", { class: b.toLowerCase() }, b); }) :
                []), h("fieldset", { disabled: !this.open, name: this.name }, h("slot", null))));
    };
    Object.defineProperty(SmoothlyAccordionItem.prototype, "me", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SmoothlyAccordionItem, "watchers", {
        get: function () {
            return {
                "open": ["openChanged"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return SmoothlyAccordionItem;
}());
SmoothlyAccordionItem.style = styleCss;
export { SmoothlyAccordionItem as smoothly_accordion_item };
