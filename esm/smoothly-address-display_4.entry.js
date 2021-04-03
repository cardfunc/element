import { r as registerInstance, h, c as createEvent, H as Host } from './index-ef082d98.js';
import { e as dist_6$1, c as createCommonjsModule, u as unwrapExports, d as dist$1 } from './index-e351faa0.js';
import { c as dist_11 } from './index-5fbfc6ec.js';

const styleCss = ".sc-smoothly-address-display-h{display:block;border-top:1px solid rgb(var(--smoothly-medium-color));border-bottom:1px solid rgb(var(--smoothly-medium-color))}";

class AddressDisplay {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const value = typeof (this.value) == "string" ? JSON.parse(this.value) : this.value;
        return dist_11.SE.is(value) || dist_11.FI.is(value) ?
            [
                h("address", null, value.street, h("br", null), value.zipCode, " ", value.city, h("br", null), dist_6$1.Name.from("en", value.countryCode)),
            ] :
            h("p", null, "Unknown address country: ", JSON.stringify(value));
    }
}
AddressDisplay.style = styleCss;

const styleCss$1 = ".sc-smoothly-address-edit-h{display:block;border-top:1px solid rgb(var(--smoothly-medium-color));border-bottom:1px solid rgb(var(--smoothly-medium-color))}[hidden].sc-smoothly-address-edit-h{display:none}form.sc-smoothly-address-edit{display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row;-ms-flex-wrap:wrap;flex-wrap:wrap}form.sc-smoothly-address-edit>*.sc-smoothly-address-edit{width:100%}smoothly-input.sc-smoothly-address-edit{border-bottom:1px solid rgb(var(--smoothly-medium-color))}smoothly-input[name=zipCode].sc-smoothly-address-edit{width:calc(30% - 1px)}smoothly-input[name=city].sc-smoothly-address-edit{width:calc(70% - 1px);border-left:1px solid rgb(var(--smoothly-medium-color))}smoothly-submit.sc-smoothly-address-edit,smoothly-trigger.sc-smoothly-address-edit{width:auto;float:right;margin:5px}";

class AddressEdit {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.change = createEvent(this, "change", 7);
    }
    get address() { return typeof (this.value) == "string" ? JSON.parse(this.value) : this.value; }
    onTrigger(e) {
        if (e.detail.name == "cancel") {
            this.change.emit(this.address);
        }
    }
    onSubmit(e) {
        e.stopPropagation();
        const result = Object.assign(Object.assign({}, e.detail), { countryCode: dist_6$1.Name.parse(e.detail.country), country: undefined });
        this.change.emit(result);
    }
    render() {
        return dist_11.SE.is(this.address) || dist_11.FI.is(this.address) ?
            [
                h("form", null, h("smoothly-input", { type: "text", name: "street", value: this.address.street }, "Street"), h("smoothly-input", { type: "postal-code", name: "zipCode", value: this.address.zipCode }, "Zip"), h("smoothly-input", { type: "text", name: "city", value: this.address.city }, "City"), h("smoothly-input", { type: "text", name: "country", value: dist_6$1.Name.from("en", this.address.countryCode) }, "Country"), h("div", null, h("smoothly-submit", { color: "primary", fill: "clear", prevent: true, onSubmit: (e) => this.onSubmit(e) }, "Save"), h("smoothly-trigger", { color: "primary", fill: "clear", name: "cancel" }, "Cancel"))),
            ] :
            h("p", null, "Unknown address country: ", JSON.stringify(this.address));
    }
}
AddressEdit.style = styleCss$1;

var State_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
var State;
(function (State) {
    function copy(state) {
        return { value: state.value, selection: { start: state.selection.start, end: state.selection.end } };
    }
    State.copy = copy;
})(State = exports.State || (exports.State = {}));

});

unwrapExports(State_1);

var StateEditor_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateEditor = void 0;
class StateEditor {
    constructor(state) {
        this.value = state.value;
        this.selection = { start: state.selection.start, end: state.selection.end };
    }
    get(index) {
        return this.value[index];
    }
    is(index, ...character) {
        const c = this.get(index);
        return character.some(d => c == d);
    }
    isDigit(index) {
        const character = this.get(index);
        return character >= "0" && character <= "9";
    }
    match(matcher) {
        return this.value.match(matcher);
    }
    replace(start, end, value) {
        let result;
        if (typeof start == "string" && typeof end == "string") {
            let s;
            result = this;
            while ((s = result.value.search(start)) > -1)
                result = result.replace(s, s + start.length, end);
        }
        else if (typeof start == "number" && typeof end == "number") {
            const state = { value: this.value, selection: { start: this.selection.start, end: this.selection.end } };
            if (!value)
                value = "";
            state.value = this.value.slice(0, start) + value + this.value.slice(end, this.value.length);
            if (this.selection.start >= end)
                state.selection.start = this.selection.start + value.length - end + start;
            else if (this.selection.start > start && this.selection.start < end)
                state.selection.start = Math.min(this.selection.start, start + value.length);
            if (this.selection.end >= end)
                state.selection.end = this.selection.end + value.length - end + start;
            else if (this.selection.end > start && this.selection.end < end)
                state.selection.end = Math.min(this.selection.end, start + value.length);
            result = new StateEditor(state);
        }
        return result || this;
    }
    insert(index, value) {
        return this.replace(index, index, value);
    }
    append(value) {
        return this.insert(this.value.length, value);
    }
    prepend(value) {
        return this.insert(0, value);
    }
    suffix(value) {
        return new StateEditor({ value: this.value + value, selection: this.selection });
    }
    delete(start, end) {
        let result;
        if (!this.value)
            result = this;
        else if (typeof start == "string") {
            let s;
            result = this;
            while ((s = result.value.search(start)) > -1)
                result = result.delete(s, s + start.length);
        }
        else
            result = this.replace(start, end || start + 1, "");
        return result;
    }
    truncate(end) {
        return this.value.length >= end ? this.delete(end, this.value.length) : this;
    }
    pad(length, padding, index) {
        let result = this;
        while (length > result.value.length + padding.length)
            result = result.insert(index, padding);
        if (length > result.value.length)
            result = result.insert(index, padding.substring(0, length - result.value.length));
        return result;
    }
    padEnd(length, padding) {
        return this.pad(length, padding, this.value.length);
    }
    padStart(length, padding) {
        return this.pad(length, padding, 0);
    }
    map(mapping) {
        let result = this;
        let j = 0;
        for (let i = 0; i < this.value.length; i++) {
            const replacement = mapping(this.get(i), i);
            result = result.replace(j, j + 1, replacement);
            j += replacement.length;
        }
        return result;
    }
    static copy(state) {
        return new StateEditor(Object.assign({}, state));
    }
    static create() {
        return new StateEditor({ value: "", selection: { start: 0, end: 0 } });
    }
    static modify(state) {
        return new StateEditor(typeof state == "string" ? { value: state, selection: { start: state.length, end: state.length } } : state);
    }
}
exports.StateEditor = StateEditor;

});

unwrapExports(StateEditor_1);

var Action_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;


var Action;
(function (Action) {
    function apply(formatter, state, action) {
        const result = State_1.State.copy(formatter.unformat(StateEditor_1.StateEditor.copy(state)));
        if (action) {
            if (action.key == "ArrowLeft") {
                result.selection.start -= result.selection.start > 0 ? 1 : 0;
                if (!action.shiftKey)
                    result.selection.end = result.selection.start;
            }
            else if (action.key == "ArrowRight") {
                result.selection.end += result.selection.end < result.value.length ? 1 : 0;
                if (!action.shiftKey)
                    result.selection.start = result.selection.end;
            }
            else if (action.key == "Home") {
                result.selection.start = 0;
                if (!action.shiftKey)
                    result.selection.end = result.selection.start;
            }
            else if (action.key == "End") {
                result.selection.end = result.value.length;
                if (!action.shiftKey)
                    result.selection.start = result.selection.end;
            }
            else if (action.ctrlKey) {
                switch (action.key) {
                    case "a":
                        result.selection.start = 0;
                        result.selection.end = result.value.length;
                }
            }
            else {
                if (result.selection.start != result.selection.end) {
                    switch (action.key) {
                        case "Delete":
                        case "Backspace":
                            action = undefined;
                            break;
                    }
                    result.value = result.value.substring(0, result.selection.start) + result.value.substring(result.selection.end);
                    result.selection.end = result.selection.start;
                }
                if (action)
                    switch (action.key) {
                        case "Unidentified": break;
                        case "Backspace":
                            if (result.selection.start > 0) {
                                result.value = result.value.substring(0, result.selection.start - 1) + result.value.substring(result.selection.start);
                                result.selection.start = --result.selection.end;
                            }
                            break;
                        case "Delete":
                            if (result.selection.start < result.value.length)
                                result.value = result.value.substring(0, result.selection.start) + result.value.substring(result.selection.start + 1);
                            break;
                        default:
                            if (formatter.allowed(action.key, result)) {
                                result.value = result.value.substring(0, result.selection.start) + action.key + result.value.substring(result.selection.start);
                                result.selection.start = result.selection.end += action.key.length;
                            }
                    }
            }
        }
        return formatter.format(StateEditor_1.StateEditor.copy(result));
    }
    Action.apply = apply;
})(Action = exports.Action || (exports.Action = {}));

});

unwrapExports(Action_1);

var base = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.format = exports.get = exports.add = void 0;

const handlers = {};
function add(type, create) {
    handlers[type] = create;
}
exports.add = add;
function get(type, ...argument) {
    const create = handlers[type];
    return create && create(argument);
}
exports.get = get;
function format(data, type, ...argument) {
    const handler = get(type, argument);
    return handler ? handler.format(StateEditor_1.StateEditor.modify(handler.toString(data))).value : "";
}
exports.format = format;
function parse(value, type, ...argument) {
    const handler = get(type, argument);
    return handler ? handler.fromString(handler.unformat(StateEditor_1.StateEditor.modify(value)).value) : undefined;
}
exports.parse = parse;

});

unwrapExports(base);

var cardCsc = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class Handler {
    toString(data) {
        return typeof data == "string" ? data : "";
    }
    fromString(value) {
        return typeof value == "string" ? value : undefined;
    }
    format(unformated) {
        return Object.assign(Object.assign({}, unformated), { type: "text", autocomplete: "cc-csc", length: [3, 3], pattern: /^\d{3}$/ });
    }
    unformat(formated) {
        return formated;
    }
    allowed(symbol, state) {
        return state.value.length < 3 && symbol >= "0" && symbol <= "9";
    }
}
base.add("card-csc", () => new Handler());

});

unwrapExports(cardCsc);

var cardExpires = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class Handler {
    toString(data) {
        return Array.isArray(data) && data.length == 2 && typeof data[0] == "number" && typeof data[1] == "number" ? data[0].toString().padStart(2, " ") + data[1].toString().padStart(2, " ") : "";
    }
    fromString(value) {
        return typeof value == "string" && value.length == 4 ? [Number.parseInt(value.slice(0, 2)), Number.parseInt(value.slice(2))] : undefined;
    }
    format(unformated) {
        let result = unformated;
        if (unformated.value.length > 0 && !unformated.is(0, "0", "1"))
            result = result.prepend("0");
        if (result.value.length > 1)
            result = result.insert(2, " / ");
        return Object.assign(Object.assign({}, result), { type: "text", autocomplete: "cc-exp", length: [7, 7], pattern: /^(0[1-9]|1[012]) \/ \d\d$/ });
    }
    unformat(formated) {
        return formated.delete(" / ");
    }
    allowed(symbol, state) {
        return state.value.length < 4 && symbol >= "0" && symbol <= "9";
    }
}
base.add("card-expires", () => new Handler());

});

unwrapExports(cardExpires);

var cardNumber = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class Handler {
    toString(data) {
        return typeof data == "string" ? data : "";
    }
    fromString(value) {
        return typeof value == "string" ? value : undefined;
    }
    format(unformated) {
        const issuer = getIssuer(unformated.value);
        const result = unformated.map((symbol, index) => symbol + (index % 4 == 3 && index + 1 < issuer.length[0] ? " " : ""));
        return Object.assign(Object.assign({}, result), { type: "text", autocomplete: "cc-number", length: issuer.length.slice(1), pattern: issuer.verification, classes: ["issuer-" + issuer.icon] });
    }
    unformat(formated) {
        return formated.delete(" ");
    }
    allowed(symbol, state) {
        const issuer = getIssuer(state.value);
        return symbol >= "0" && symbol <= "9" && state.value.length < issuer.length[0];
    }
}
base.add("card-number", () => new Handler());
function getIssuer(value) {
    let result = defaultIssuer;
    for (const key in issuers)
        if (issuers.hasOwnProperty(key) && issuers[key].identification.test(value)) {
            result = Object.assign(Object.assign(Object.assign({}, defaultIssuer), { name: key }), issuers[key]);
            break;
        }
    return result;
}
const defaultIssuer = { name: "unknown", verification: /^\d{19}$/, identification: /^\d/, length: [16, 16, 19], icon: "generic" };
const issuers = {
    amex: { verification: /^3[47][0-9]{2}\s[0-9]{4}\s[0-9]{4}\s[0-9]{3}$/, identification: /^3[47]/, length: [15, 18, 18], icon: "amex" },
    dankort: { verification: /^(5019)\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/, identification: /^(5019)\d+/, length: [16, 19, 19], icon: "generic" },
    diners: { verification: /^3(?:0[0-5]|[68][0-9])[0-9]\s[0-9]{4}\s[0-9]{4}\s[0-9]{2}$/, identification: /^3(?:0[0-5]|[68][0-9])/, length: [14, 17, 17], icon: "diners" },
    discover: { verification: /^6(?:011|5[0-9]{2})\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/, identification: /^6(?:011|5[0-9]{2})/, length: [16, 19, 19], icon: "generic" },
    electron: { verification: /^((4026|4405|4508|4844|4913|4917)\s[0-9]{4}\s[0-9]{4}\s[0-9]{4})|((4175)\s(00)[0-9]{2}\s[0-9]{4}\s[0-9]{4})$/, identification: /^(4026|417500|4405|4508|4844|4913|4917)/, length: [16, 19, 19], icon: "generic" },
    interpayment: { verification: /^(636)[0-9]\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/, identification: /^(636)/, length: [16, 19, 19], icon: "generic" },
    jcb: { verification: /^((?:2131|1800)\s[0-9]{4}\s[0-9]{4}\s[0-9]{4})|(35[0-9]{2}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4})$/, identification: /^(?:2131|1800|35\d{3})/, length: [16, 19, 19], icon: "generic" },
    unionpay: { verification: /^(62|88)[0-9]{2}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/, identification: /^(62|88)/, length: [16, 19, 19], icon: "generic" },
    maestro: { verification: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/, identification: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)/, length: [16, 19, 19], icon: "maestro" },
    mastercard: { verification: /^5[1-5][0-9]{2}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/, identification: /^5[1-5][0-9]/, length: [16, 19, 19], icon: "mastercard" },
    visa: { verification: /^4[0-9]{3}\s[0-9]{4}\s[0-9]{4}\s[0-9](?:[0-9]{3})?$/, identification: /^4[0-9]/, length: [16, 16, 19], icon: "visa" },
};

});

unwrapExports(cardNumber);

var password = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class Handler {
    toString(data) {
        return typeof data == "string" ? data : "";
    }
    fromString(value) {
        return typeof value == "string" ? value : undefined;
    }
    format(unformated) {
        return Object.assign(Object.assign({}, unformated), { type: "password", autocomplete: "current-password" });
    }
    unformat(formated) {
        return formated;
    }
    allowed(symbol, state) {
        return true;
    }
}
base.add("password", () => new Handler());

});

unwrapExports(password);

var percent = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class Handler {
    toString(data) {
        return data && typeof data == "number" ? (data * 100).toString() : "";
    }
    fromString(value) {
        return typeof value != "string" || !Number.parseFloat(value) ? undefined : Number.parseFloat(value) / 100;
    }
    format(unformated) {
        return Object.assign(Object.assign({}, (unformated.value ? unformated.suffix(" %") : unformated)), { type: "text", length: [3, undefined], pattern: /^\d+(.\d)? %+$/ });
    }
    unformat(formated) {
        return formated.delete(" %");
    }
    allowed(symbol, state) {
        return symbol >= "0" && symbol <= "9" || symbol == "." && !state.value.includes(".");
    }
}
base.add("percent", () => new Handler());

});

unwrapExports(percent);

var phonePrefix = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.phonePrefix = void 0;
exports.phonePrefix = [{ countryCode: "+46", areaCodes: [
            "011", "0120", "0121", "0122", "0123", "0125", "013", "0140", "0141", "0142", "0143", "0144",
            "0150", "0151", "0152", "0155", "0156", "0157", "0158", "0159", "016",
            "0171", "0173", "0174", "0175", "0176", "018", "019", "021", "0220",
            "0221", "0222", "0223", "0224", "0225", "0226", "0227", "023",
            "0240", "0241", "0243", "0246", "0247", "0248", "0250", "0251", "0253", "0258",
            "026", "0270", "0271", "0278", "0280", "0281", "0290", "0291", "0292", "0293", "0294", "0295", "0297",
            "0300", "0301", "0302", "0303", "0304", "031", "0320", "0321", "0322", "0325", "033",
            "0340", "0345", "0346", "035", "036", "0370", "0371", "0372", "0380", "0381", "0382", "0383",
            "0390", "0392", "0393", "040", "0410", "0411", "0413", "0414", "0415", "0416", "0417", "0418", "042",
            "0430", "0431", "0433", "0435", "044", "0451", "0454", "0455", "0456", "0457", "0459", "046",
            "0470", "0471", "0472", "0474", "0476", "0477", "0478", "0479", "0480", "0481", "0485", "0486",
            "0490", "0491", "0492", "0493", "0494", "0495", "0496", "0498", "0499",
            "0500", "0501", "0502", "0503", "0504", "0505", "0506", "0510", "0511", "0512", "0513", "0514", "0515",
            "0520", "0521", "0522", "0523", "0524", "0525", "0526", "0528", "0530", "0531", "0532", "0533", "0534",
            "054", "0550", "0551", "0552", "0553", "0554", "0555", "0560", "0563", "0564", "0565",
            "0570", "0571", "0573", "0580", "0581", "0582", "0583", "0584", "0585", "0586", "0587", "0589",
            "0590", "0591", "060", "0611", "0612", "0613", "0620", "0621", "0622", "0623", "0624", "063",
            "0640", "0642", "0643", "0644", "0645", "0647", "0650", "0651", "0652", "0653", "0657",
            "0660", "0661", "0662", "0663", "0670", "0671", "0672", "0680", "0682", "0684", "0687",
            "0690", "0691", "0692", "0693", "0695", "0696", "08",
            "090", "0910", "0911", "0912", "0913", "0914", "0915", "0916", "0918",
            "0920", "0921", "0922", "0923", "0924", "0925", "0926", "0927", "0928", "0929",
            "0930", "0932", "0933", "0934", "0935", "0940", "0941", "0942", "0943",
            "0950", "0951", "0952", "0953", "0954", "0960", "0961",
            "0970", "0971", "0973", "0975", "0976", "0977", "0978", "0980", "0981",
            "010",
            "020",
            "0378",
            "070", "072", "073", "076", "079",
            "0710",
            "0740", "0746", "0749",
            "0741", "0742", "0743", "0744", "0745", "0747",
            "075",
            "077",
            "078",
            "0900", "0939", "0944",
            "0969",
            "099",
        ] }];

});

unwrapExports(phonePrefix);

var phone = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


class Handler {
    toString(data) {
        return typeof data == "string" ? data : "";
    }
    fromString(value) {
        return typeof value == "string" ? value : undefined;
    }
    format(unformated) {
        let result = unformated;
        if (result.value.startsWith("+")) {
            for (const country of phonePrefix.phonePrefix)
                if (result.value.startsWith(country.countryCode))
                    for (let prefix of country.areaCodes) {
                        prefix = prefix.substring(1);
                        if (result.value.startsWith(country.countryCode + prefix) && !result.value.includes("-"))
                            result = result.insert(country.countryCode.length + prefix.length, "-");
                    }
        }
        else {
            const first = phonePrefix.phonePrefix[0];
            for (const prefix of first.areaCodes)
                if (result.value.startsWith(prefix) && !result.value.includes("-")) {
                    result = result.insert(prefix.length, "-");
                    result = result.delete(0);
                    result = result.insert(0, first.countryCode);
                }
        }
        if (result.value.includes("-")) {
            const digitIndex = result.value.indexOf("-") + 1;
            const digitCount = result.value.substring(digitIndex, result.value.length + 1).length;
            switch (digitCount) {
                case 4:
                    result = result.insert(digitIndex + 2, " ");
                    break;
                case 5:
                    result = result.insert(digitIndex + 3, " ");
                    break;
                case 6:
                    result = result.insert(digitIndex + 2, " ");
                    result = result.insert(digitIndex + 5, " ");
                    break;
                case 7:
                    result = result.insert(digitIndex + 3, " ");
                    result = result.insert(digitIndex + 6, " ");
                    break;
                case 8:
                case 9:
                    result = result.insert(digitIndex + 3, " ");
                    result = result.insert(digitIndex + 7, " ");
            }
            if (digitCount > 9) {
                const spaces = Math.ceil(digitCount / 3) - 1;
                if (spaces > 0) {
                    for (let i = 0; i < spaces; i++) {
                        const position = i * 3 + 3 + i;
                        result = result.insert(position + digitIndex, " ");
                    }
                }
            }
        }
        return Object.assign(Object.assign({}, result), { type: "text", autocomplete: "tel" });
    }
    unformat(formated) {
        return formated.delete(" ").delete("-");
    }
    allowed(symbol, state) {
        return symbol >= "0" && symbol <= "9" || state.selection.start == 0 && symbol == "+" && !state.value.includes("+");
    }
}
base.add("phone", () => new Handler());

});

unwrapExports(phone);

var postalCode = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class Handler {
    constructor(country) {
        this.country = country;
    }
    toString(data) {
        return typeof data == "string" ? data : "";
    }
    fromString(value) {
        return typeof value == "string" ? value : undefined;
    }
    format(unformated) {
        const result = !unformated.value.includes(" ") && unformated.value.length >= 4 ? unformated.insert(3, " ") : unformated;
        return Object.assign(Object.assign({}, result.truncate(6)), { type: "text", autocomplete: "postal-code", length: [6, 6], pattern: /^\d{3} \d{2}$/ });
    }
    unformat(formated) {
        return formated.delete(" ");
    }
    allowed(symbol, state) {
        return state.value.length <= 5 && symbol >= "0" && symbol <= "9";
    }
}
base.add("postal-code", (argument) => new Handler(argument && argument.length > 0 ? argument[0] : undefined));

});

unwrapExports(postalCode);

var price = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



class Handler {
    constructor(currency) {
        this.currency = currency;
    }
    toString(data) {
        return typeof data == "string" ? data : "";
    }
    fromString(value) {
        return typeof value == "string" ? Number(value) : undefined;
    }
    format(unformated) {
        let separator = unformated.value.includes(".") ? unformated.value.indexOf(".")
            : unformated.value.length;
        let result = StateEditor_1.StateEditor.copy(unformated);
        const maxDecimals = !this.currency || dist$1.Currency.decimalDigits(this.currency) == undefined ? 2 : dist$1.Currency.decimalDigits(this.currency);
        result = result.truncate(separator + maxDecimals + 1);
        const spaces = separator <= 0 ? 0 : Math.ceil(separator / 3) - 1;
        for (let i = 0; i < spaces; i++) {
            const position = separator - (spaces - i) * 3;
            result = result.insert(position, " ");
            separator++;
        }
        result = this.currency && (result.value.length > 1 || result.value.length == 1 && result.value.charAt(0) != ".") ? result.suffix(" " + this.currency) : result;
        return Object.assign(Object.assign({}, result), { type: "text", length: [3, undefined], pattern: new RegExp("^(\\d{0,3})( \\d{3})*(\\.\\d+)?" + (this.currency ? " " + this.currency : "") + "$") });
    }
    unformat(formated) {
        return this.currency ? formated.delete(" ").delete("" + this.currency) : formated.delete(" ");
    }
    allowed(symbol, state) {
        return symbol >= "0" && symbol <= "9" || symbol == "." && !state.value.includes(".");
    }
}
base.add("price", (argument) => new Handler(argument && argument.length > 0 ? argument[0] : undefined));

});

unwrapExports(price);

var text = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class Handler {
    constructor(settings) {
        this.settings = settings;
    }
    toString(data) {
        return typeof data == "string" ? data : "";
    }
    fromString(value) {
        return typeof value == "string" ? value : undefined;
    }
    format(unformated) {
        return Object.assign(Object.assign(Object.assign({}, unformated), { type: "text" }), this.settings);
    }
    unformat(formated) {
        return formated;
    }
    allowed(symbol, state) {
        return this.settings.length == undefined || this.settings.length[1] == undefined || state.value.length < this.settings.length[1];
    }
}
base.add("text", (settings) => new Handler(settings || {}));

});

unwrapExports(text);

var Handler = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.format = exports.get = void 0;










Object.defineProperty(exports, "get", { enumerable: true, get: function () { return base.get; } });
Object.defineProperty(exports, "format", { enumerable: true, get: function () { return base.format; } });
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return base.parse; } });

});

unwrapExports(Handler);

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.format = exports.get = exports.StateEditor = exports.State = exports.Action = void 0;

Object.defineProperty(exports, "Action", { enumerable: true, get: function () { return Action_1.Action; } });

Object.defineProperty(exports, "State", { enumerable: true, get: function () { return State_1.State; } });

Object.defineProperty(exports, "StateEditor", { enumerable: true, get: function () { return StateEditor_1.StateEditor; } });

Object.defineProperty(exports, "get", { enumerable: true, get: function () { return Handler.get; } });
Object.defineProperty(exports, "format", { enumerable: true, get: function () { return Handler.format; } });
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return Handler.parse; } });

});

unwrapExports(dist);
var dist_3 = dist.get;
var dist_4 = dist.StateEditor;
var dist_6 = dist.Action;

const styleCss$2 = ".sc-smoothly-input-h{display:block;position:relative}[hidden].sc-smoothly-input-h{display:none}label.sc-smoothly-input{position:absolute;left:.4em;top:.6em;color:rgb(var(--smoothly-text-tint));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;z-index:-1;-webkit-transition:font-size .1s;transition:font-size .1s;-webkit-transition-timing-function:ease;transition-timing-function:ease}input.sc-smoothly-input{padding:1em .4em .2em .4em;width:calc(100% - 2 * .4em - 2px);background:none;border:0}.has-value.sc-smoothly-input-h>label.sc-smoothly-input{top:.3em;top:.4em;font-size:60%;z-index:0}.sc-smoothly-input-h:focus-within>label.sc-smoothly-input{top:.3em;top:.4em;font-size:60%;z-index:0}input.sc-smoothly-input:focus{outline:none}input.sc-smoothly-input:-webkit-autofill,input.sc-smoothly-input:-webkit-autofill:hover,input.sc-smoothly-input:-webkit-autofill:focus,input.sc-smoothly-input:-webkit-autofill:active{box-shadow:0 0 0 30px unset inset !important;-webkit-box-shadow:0 0 0 30px unset inset !important}input.sc-smoothly-input:-webkit-autofill{-webkit-text-fill-color:unset !important}input.sc-smoothly-input:-internal-autofill-previewed,input.sc-smoothly-input:-internal-autofill-selected,textarea.sc-smoothly-input:-internal-autofill-previewed,textarea.sc-smoothly-input:-internal-autofill-selected,select.sc-smoothly-input:-internal-autofill-previewed,select.sc-smoothly-input:-internal-autofill-selected{background-color:none !important;background-image:none !important;color:unset !important}";

class SmoothlyInput {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = "text";
        this.required = false;
        this.minLength = 0;
        this.maxLength = Number.POSITIVE_INFINITY;
        this.autocomplete = "on";
        this.disabled = false;
        this.smoothlyChanged = createEvent(this, "smoothlyChanged", 7);
    }
    get formatter() {
        let result;
        switch (this.type) {
            case "price":
                result = dist_3("price", this.currency);
                break;
            default:
                result = dist_3(this.type);
                break;
        }
        return result || dist_3("text");
    }
    valueWatcher(value, before) {
        if (this.lastValue != value) {
            this.lastValue = value;
            this.state = Object.assign(Object.assign({}, this.state), { value: this.formatter.format(dist_4.copy(this.formatter.unformat(dist_4.copy({ value, selection: this.state.selection })))).value });
        }
        if (value != before)
            this.smoothlyChanged.emit({ name: this.name, value });
    }
    componentWillLoad() {
        const formatter = this.formatter;
        const value = formatter.toString(this.value) || "";
        const start = value.length;
        this.state = formatter.format(dist_4.copy(formatter.unformat(dist_4.copy({
            value,
            selection: { start, end: start },
        }))));
    }
    onBlur(event) {
    }
    onFocus(event) {
        const after = this.formatter.format(dist_4.copy(this.formatter.unformat(dist_4.copy(Object.assign({}, this.state)))));
        if (event.target)
            this.updateBackend(after, event.target);
    }
    onClick(event) {
        const backend = event.target;
        this.state = Object.assign(Object.assign({}, this.state), { value: backend.value, selection: {
                start: backend.selectionStart != undefined ? backend.selectionStart : backend.value.length,
                end: backend.selectionEnd != undefined ? backend.selectionEnd : backend.value.length,
            } });
        const after = this.formatter.format(dist_4.copy(this.formatter.unformat(dist_4.copy(Object.assign({}, this.state)))));
        this.updateBackend(after, backend);
    }
    onKeyDown(event) {
        if (event.key && !(event.key == "Unidentified")) {
            const backend = event.target;
            this.state = Object.assign(Object.assign({}, this.state), { value: backend.value, selection: {
                    start: backend.selectionStart != undefined ? backend.selectionStart : backend.value.length,
                    end: backend.selectionEnd != undefined ? backend.selectionEnd : backend.value.length,
                } });
            if (!(event.ctrlKey && event.key == "v") &&
                event.key.length == 1 || event.key == "ArrowLeft" || event.key == "ArrowRight" ||
                event.key == "Delete" || event.key == "Backspace" || event.key == "Home" || event.key == "End") {
                event.preventDefault();
                this.processKey(event, backend);
            }
        }
    }
    onPaste(event) {
        event.preventDefault();
        const pasted = event.clipboardData ? event.clipboardData.getData("text") : "";
        const backend = event.target;
        for (const letter of pasted)
            this.processKey({ key: letter }, backend);
    }
    onInput(event) {
        const backend = event.target;
        const data = backend.value;
        if (data) {
            event.preventDefault();
            this.processKey({ key: "a", ctrlKey: true }, backend);
            for (const letter of data)
                this.processKey({ key: letter }, backend);
        }
    }
    processKey(event, backend) {
        const after = dist_6.apply(this.formatter, this.state, event);
        this.updateBackend(after, backend);
    }
    updateBackend(after, backend) {
        if (after.value != backend.value)
            backend.value = after.value;
        if (backend.selectionStart != undefined && (after.selection.start != backend.selectionStart)) {
            backend.selectionStart = after.selection.start;
        }
        if (backend.selectionEnd != undefined && (after.selection.end != backend.selectionEnd)) {
            backend.selectionEnd = after.selection.end;
        }
        this.state = after;
        this.value = this.lastValue = this.formatter.fromString(this.formatter.unformat(dist_4.copy(Object.assign({}, this.state))).value);
    }
    hostData() {
        var _a;
        return { class: { "has-value": (_a = this.state) === null || _a === void 0 ? void 0 : _a.value } };
    }
    __stencil_render() {
        return [
            h("input", { name: this.name, type: this.state.type, placeholder: this.placeholder, required: this.required, autocomplete: this.state.autocomplete, disabled: this.disabled, pattern: this.state.pattern && this.state.pattern.source, value: this.state.value, onInput: (e) => this.onInput(e), onFocus: e => this.onFocus(e), onClick: e => this.onClick(e), onBlur: e => this.onBlur(e), onKeyDown: e => this.onKeyDown(e), onPaste: e => this.onPaste(e) }),
            h("label", { htmlFor: this.name }, h("slot", null)),
        ];
    }
    static get watchers() { return {
        "value": ["valueWatcher"]
    }; }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
}
SmoothlyInput.style = styleCss$2;

const styleCss$3 = ".sc-smoothly-submit-h{display:block;border-width:1px;border-style:solid;border-radius:3px}[hidden].sc-smoothly-submit-h{display:none}[disabled].sc-smoothly-submit-h{opacity:.5}button.sc-smoothly-submit{padding:.2em .3em;font-size:110%;font-weight:400}[processing].sc-smoothly-submit-h{border-color:rgb(var(--smoothly-light-color))}[processing].sc-smoothly-submit-h>button.sc-smoothly-submit{color:rgb(var(--smoothly-light-contrast));background:rgb(var(--smoothly-light-color))}.sc-smoothly-submit-h:not([processing]):not([disabled]):hover,.sc-smoothly-submit-h:not([processing]):not([disabled]):focus,.sc-smoothly-submit-h:not([processing]):not([disabled]):active{border-color:rgb(var(--smoothly-submit-border))}[expand=fill].sc-smoothly-submit-h>button.sc-smoothly-submit,[expand=block].sc-smoothly-submit-h>button.sc-smoothly-submit{width:100%}[expand=fill].sc-smoothly-submit-h{border-left:none;border-right:none}";

class SmoothlySubmit {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.submitEvent = createEvent(this, "submit", 7);
    }
    get form() { return this.button && this.button.form || undefined; }
    async handleSubmit(event) {
        if (!this.processing) {
            this.processing = true;
            if (this.prevent)
                event.preventDefault();
            const result = {};
            if (this.form) {
                const elements = this.form.elements;
                for (let i = 0; i < elements.length; i++) {
                    const element = elements.item(i);
                    if (hasNameAndValue(element) && element.name)
                        result[element.name] = element.value;
                }
                const smoothlyInputs = this.form.getElementsByTagName("smoothly-input");
                for (let i = 0; i < smoothlyInputs.length; i++) {
                    const element = smoothlyInputs.item(i);
                    if (hasNameAndValue(element) && element.name)
                        result[element.name] = element.value;
                }
            }
            const innerEvent = this.submitEvent.emit(result);
            console.log("smoothly-submit", innerEvent);
            this.processing = false;
        }
    }
    async submit() {
        let result;
        if (result = !!this.form)
            this.form.submit();
        return result;
    }
    render() {
        return [
            h("smoothly-spinner", { active: this.processing }),
            h("button", { type: "submit", disabled: this.disabled || this.processing, ref: (element) => this.button = element }, h("slot", null)),
        ];
    }
}
function hasNameAndValue(element) {
    return typeof (element.name) == "string" && typeof (element.value) == "string";
}
SmoothlySubmit.style = styleCss$3;

export { AddressDisplay as smoothly_address_display, AddressEdit as smoothly_address_edit, SmoothlyInput as smoothly_input, SmoothlySubmit as smoothly_submit };
