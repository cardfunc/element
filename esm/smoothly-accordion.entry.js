import { r as registerInstance, h, g as getElement } from './index-ef082d98.js';

const styleCss = "smoothly-accordion-item.sc-smoothly-accordion{border:1px solid rgb(var(--smoothly-dark-color));border-bottom:none}smoothly-accordion-item.sc-smoothly-accordion:first-of-type{border-top-left-radius:4px;border-top-right-radius:4px;margin-top:.4em}smoothly-accordion-item.sc-smoothly-accordion:last-of-type{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:1px solid rgb(var(--smoothly-dark-color));margin-bottom:.6em}smoothly-accordion-item[open].sc-smoothly-accordion{border-color:rgb(var(--smoothly-primary-color));border-bottom:1px solid rgb(var(--smoothly-primary-color))}smoothly-accordion-item[open].sc-smoothly-accordion+smoothly-accordion-item.sc-smoothly-accordion{border-top:none}";

class SmoothlyAccordion {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.items = [];
    }
    valueChanged(value) {
        this.updateItems();
    }
    handleOpenClose(event) {
        if (event.detail.open)
            this.value = event.detail.name;
        else if (this.value == event.detail.name)
            this.value = undefined;
    }
    onAccordionItemDidLoad(ev) {
        const item = ev.target;
        this.items.push(item);
        if (this.value == undefined && item.open)
            this.value = item.name;
        else
            this.updateItems();
    }
    onAccordionItemDidUnload(ev) {
        const index = this.items.indexOf(ev.target);
        if (index > -1)
            this.items.splice(index, 1);
    }
    componentDidLoad() {
        this.updateItems();
    }
    updateItems() {
        let hasChecked = false;
        for (const item of this.items)
            if (item.open = (!hasChecked && item.name == this.value))
                hasChecked = true;
    }
    render() {
        return [
            h("slot", null),
        ];
    }
    get me() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
}
SmoothlyAccordion.style = styleCss;

export { SmoothlyAccordion as smoothly_accordion };
