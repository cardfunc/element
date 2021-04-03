import { r as registerInstance, c as createEvent, h } from './index-ef082d98.js';
import './index-e351faa0.js';
import { c as dist_11, e as dist_10 } from './index-5fbfc6ec.js';

const styleCss = ".sc-smoothly-addresses-h{display:block}smoothly-trigger.sc-smoothly-addresses{display:inline-block;margin:5px}";

class SmoothlyAddresses {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.allowed = [];
        this.editing = undefined;
        this.change = createEvent(this, "change", 7);
    }
    get allowedArray() {
        if (!this.allowedArrayValue)
            this.allowedArrayValue = Array.isArray(this.allowed) ? this.allowed : this.allowed.split(" ");
        return this.allowedArrayValue;
    }
    get address() {
        if (typeof (this.value) == "string")
            this.value = JSON.parse(this.value);
        return this.value;
    }
    get addresses() { return dist_11.is(this.address) ? { primary: this.address } : Object.assign({}, this.address); }
    onChange(e) {
        if (dist_11.is(e.detail)) {
            this.editing = undefined;
            const type = e.detail.type;
            delete (e.detail.type);
            let result;
            if (type == "primary" && dist_11.is(this.address))
                result = Object.assign({}, e.detail);
            else {
                result = Object.assign({}, this.addresses);
                result[type] = e.detail;
            }
            this.change.emit(this.value = result);
        }
    }
    onTrigger(e) {
        if (e.detail.name == "add" && typeof (this.value) != "string") {
            const result = this.addresses;
            const added = dist_11.create("SE");
            const type = e.detail.value;
            result[type] = added;
            this.value = result;
            this.editing = type;
        }
    }
    render() {
        const allowed = this.allowedArray.filter(type => dist_10.is(this.address) ? this.address[type] == undefined : type != "primary");
        return [
            dist_11.is(this.address) ? h("smoothly-address", { editable: this.editable, value: this.address, onChange: (e) => this.onChange(e) }) :
                dist_10.map(this.address, (type, address) => h("smoothly-address", { mode: type == this.editing ? "edit" : "display", editable: this.editable, type: type, value: address, onChange: (e) => this.onChange(e) })),
            allowed.map(type => h("smoothly-trigger", { color: "primary", fill: "clear", name: "add", value: type }, "+", type)),
        ];
    }
}
SmoothlyAddresses.style = styleCss;

export { SmoothlyAddresses as smoothly_addresses };
