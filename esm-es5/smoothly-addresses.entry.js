import { r as registerInstance, c as createEvent, h } from './index-ef082d98.js';
import './index-e351faa0.js';
import { c as dist_11, e as dist_10 } from './index-5fbfc6ec.js';
var styleCss = ".sc-smoothly-addresses-h{display:block}smoothly-trigger.sc-smoothly-addresses{display:inline-block;margin:5px}";
var SmoothlyAddresses = /** @class */ (function () {
    function SmoothlyAddresses(hostRef) {
        registerInstance(this, hostRef);
        this.allowed = [];
        this.editing = undefined;
        this.change = createEvent(this, "change", 7);
    }
    Object.defineProperty(SmoothlyAddresses.prototype, "allowedArray", {
        get: function () {
            if (!this.allowedArrayValue)
                this.allowedArrayValue = Array.isArray(this.allowed) ? this.allowed : this.allowed.split(" ");
            return this.allowedArrayValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SmoothlyAddresses.prototype, "address", {
        get: function () {
            if (typeof (this.value) == "string")
                this.value = JSON.parse(this.value);
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SmoothlyAddresses.prototype, "addresses", {
        get: function () { return dist_11.is(this.address) ? { primary: this.address } : Object.assign({}, this.address); },
        enumerable: false,
        configurable: true
    });
    SmoothlyAddresses.prototype.onChange = function (e) {
        if (dist_11.is(e.detail)) {
            this.editing = undefined;
            var type = e.detail.type;
            delete (e.detail.type);
            var result = void 0;
            if (type == "primary" && dist_11.is(this.address))
                result = Object.assign({}, e.detail);
            else {
                result = Object.assign({}, this.addresses);
                result[type] = e.detail;
            }
            this.change.emit(this.value = result);
        }
    };
    SmoothlyAddresses.prototype.onTrigger = function (e) {
        if (e.detail.name == "add" && typeof (this.value) != "string") {
            var result = this.addresses;
            var added = dist_11.create("SE");
            var type = e.detail.value;
            result[type] = added;
            this.value = result;
            this.editing = type;
        }
    };
    SmoothlyAddresses.prototype.render = function () {
        var _this = this;
        var allowed = this.allowedArray.filter(function (type) { return dist_10.is(_this.address) ? _this.address[type] == undefined : type != "primary"; });
        return [
            dist_11.is(this.address) ? h("smoothly-address", { editable: this.editable, value: this.address, onChange: function (e) { return _this.onChange(e); } }) :
                dist_10.map(this.address, function (type, address) { return h("smoothly-address", { mode: type == _this.editing ? "edit" : "display", editable: _this.editable, type: type, value: address, onChange: function (e) { return _this.onChange(e); } }); }),
            allowed.map(function (type) { return h("smoothly-trigger", { color: "primary", fill: "clear", name: "add", value: type }, "+", type); }),
        ];
    };
    return SmoothlyAddresses;
}());
SmoothlyAddresses.style = styleCss;
export { SmoothlyAddresses as smoothly_addresses };
