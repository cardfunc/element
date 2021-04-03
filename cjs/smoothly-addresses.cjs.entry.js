'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');
require('./index-c77b5414.js');
const index$2 = require('./index-1a7e22f1.js');

const styleCss = ".sc-smoothly-addresses-h{display:block}smoothly-trigger.sc-smoothly-addresses{display:inline-block;margin:5px}";

class SmoothlyAddresses {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.allowed = [];
        this.editing = undefined;
        this.change = index.createEvent(this, "change", 7);
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
    get addresses() { return index$2.dist_11.is(this.address) ? { primary: this.address } : Object.assign({}, this.address); }
    onChange(e) {
        if (index$2.dist_11.is(e.detail)) {
            this.editing = undefined;
            const type = e.detail.type;
            delete (e.detail.type);
            let result;
            if (type == "primary" && index$2.dist_11.is(this.address))
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
            const added = index$2.dist_11.create("SE");
            const type = e.detail.value;
            result[type] = added;
            this.value = result;
            this.editing = type;
        }
    }
    render() {
        const allowed = this.allowedArray.filter(type => index$2.dist_10.is(this.address) ? this.address[type] == undefined : type != "primary");
        return [
            index$2.dist_11.is(this.address) ? index.h("smoothly-address", { editable: this.editable, value: this.address, onChange: (e) => this.onChange(e) }) :
                index$2.dist_10.map(this.address, (type, address) => index.h("smoothly-address", { mode: type == this.editing ? "edit" : "display", editable: this.editable, type: type, value: address, onChange: (e) => this.onChange(e) })),
            allowed.map(type => index.h("smoothly-trigger", { color: "primary", fill: "clear", name: "add", value: type }, "+", type)),
        ];
    }
}
SmoothlyAddresses.style = styleCss;

exports.smoothly_addresses = SmoothlyAddresses;
