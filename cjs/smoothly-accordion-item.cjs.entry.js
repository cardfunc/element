'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');

const styleCss = ".sc-smoothly-accordion-item-h{display:block}[hidden].sc-smoothly-accordion-item-h{display:none}details.sc-smoothly-accordion-item{padding:0}details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item>span.sc-smoothly-accordion-item{float:right;margin:.2em;font-size:60%}details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item{font-size:120%;list-style-type:none;cursor:pointer;padding:.4em;color:rgb(var(--smoothly-text-tint))}details.sc-smoothly-accordion-item>fieldset.sc-smoothly-accordion-item{border:none;margin:0;padding:0}[open].sc-smoothly-accordion-item-h>details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item{color:rgb(var(--smoothly-primary-contrast));background:rgb(var(--smoothly-primary-color))}details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item::-webkit-details-marker{display:none}details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item>svg.sc-smoothly-accordion-item{width:1em;height:auto;margin-bottom:-.2em;margin-right:.4em}[open].sc-smoothly-accordion-item-h>details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item>svg.sc-smoothly-accordion-item{fill:rgb(var(--smoothly-primary-contrast))}.sc-smoothly-accordion-item-h:not([open])>details.sc-smoothly-accordion-item>summary.sc-smoothly-accordion-item>svg.sc-smoothly-accordion-item{fill:rgb(var(--smoothly-text-tint))}";

class SmoothlyAccordionItem {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.smoothlyAccordionItemDidLoad = index.createEvent(this, "smoothlyAccordionItemDidLoad", 7);
        this.smoothlyAccordionItemDidUnload = index.createEvent(this, "smoothlyAccordionItemDidUnload", 7);
        this.smoothlyOpen = index.createEvent(this, "smoothlyOpen", 7);
        this.smoothlyClose = index.createEvent(this, "smoothlyClose", 7);
    }
    openChanged(isChecked) {
        this.open = isChecked;
        if (isChecked) {
            this.smoothlyOpen.emit({
                open: true,
                name: this.name,
            });
        }
    }
    componentDidLoad() {
        const summary = this.me.getElementsByTagName("summary");
        if (summary.length > 0) {
            const onClick = (e) => {
                if (this.open)
                    this.smoothlyClose.emit({ open: this.open, name: this.name });
                else
                    this.open = true;
                e.preventDefault();
            };
            summary[0].addEventListener("click", onClick);
            summary[0].addEventListener("touch", onClick);
        }
        this.smoothlyAccordionItemDidLoad.emit();
    }
    componentDidUnload() {
        this.smoothlyAccordionItemDidUnload.emit();
    }
    render() {
        return (index.h("details", { open: this.open }, index.h("summary", null, this.open ?
            index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { d: "M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm-42.7 318.9L106.7 260.3l29.9-29.9 76.8 76.8 162.1-162.1 29.9 29.9-192.1 191.9z" })) :
            index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { d: "M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z" })), this.name, typeof (this.brand) == "string" ? index.h("span", { class: this.brand.toLowerCase() }, this.brand) :
            Array.isArray(this.brand) ? this.brand.map(b => index.h("span", { class: b.toLowerCase() }, b)) :
                []), index.h("fieldset", { disabled: !this.open, name: this.name }, index.h("slot", null))));
    }
    get me() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["openChanged"]
    }; }
}
SmoothlyAccordionItem.style = styleCss;

exports.smoothly_accordion_item = SmoothlyAccordionItem;
