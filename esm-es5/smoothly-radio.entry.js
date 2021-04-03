var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h } from './index-ef082d98.js';
var styleCss = ".sc-smoothly-radio-h{display:block;position:relative}[hidden].sc-smoothly-radio-h{display:none}label.sc-smoothly-radio{display:block;width:calc(100% - 2 * .4em);padding:.2em .4em .2em .4em}input[type=\"radio\"].sc-smoothly-radio{position:absolute;left:0;top:0;width:calc(100%);height:100%;margin:0;-moz-appearance:none;appearance:none;-webkit-appearance:none}input[type=\"radio\"].sc-smoothly-radio~label.sc-smoothly-radio{border:1px solid rgb(var(--smoothly-color-shade));color:rgb(var(--smoothly-color-tint));background:rgb(var(--smoothly-color-shade))}input[type=\"radio\"].sc-smoothly-radio:checked~label.sc-smoothly-radio{background-color:rgb(var(--smoothly-color));color:rgb(var(--smoothly-color-contrast))}";
var SmoothlyRadio = /** @class */ (function () {
    function SmoothlyRadio(hostRef) {
        registerInstance(this, hostRef);
        this.smoothlySelected = createEvent(this, "smoothlySelected", 7);
    }
    SmoothlyRadio.prototype.onInput = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (e.target && e.target.value && (this.checked = e.target.checked))
                    this.smoothlySelected.emit({ name: this.name, value: this.value });
                return [2 /*return*/, true];
            });
        });
    };
    SmoothlyRadio.prototype.render = function () {
        var _this = this;
        return [
            h("input", { type: "radio", name: this.name, id: this.value, tabindex: this.tabIndex, checked: this.checked, value: this.value, onChange: function (e) { return _this.onInput(e); } }),
            h("label", { htmlFor: this.value }, h("slot", null)),
        ];
    };
    return SmoothlyRadio;
}());
SmoothlyRadio.style = styleCss;
export { SmoothlyRadio as smoothly_radio };
