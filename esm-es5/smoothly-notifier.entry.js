import { r as registerInstance, h } from './index-ef082d98.js';
import './index-e351faa0.js';
import { f as dist_1 } from './index-5fbfc6ec.js';
var styleCss = ".sc-smoothly-notifier-h{display:block}[hidden].sc-smoothly-notifier-h{display:none}smoothly-trigger.sc-smoothly-notifier{float:right;text-align:right;margin-right:-1em}aside.sc-smoothly-notifier{position:relative;text-align:center;width:calc(100% - 2em);padding:0 1em;border-style:solid;border-width:1px;border-radius:5px}aside.warning.sc-smoothly-notifier{background-color:rgb(var(--smoothly-warning-tint));border-color:rgb(var(--smoothly-warning-shade));color:rgb(var(--smoothly-warning-contrast))}aside.success.sc-smoothly-notifier{background-color:rgb(var(--smoothly-success-color));border-color:rgb(var(--smoothly-success-shade));color:rgb(var(--smoothly-success-contrast))}aside.danger.sc-smoothly-notifier{background-color:rgb(var(--smoothly-danger-tint));border-color:rgb(var(--smoothly-danger-shade));color:rgb(var(--smoothly-danger-contrast))}aside.default.sc-smoothly-notifier{background-color:rgb(var(--smoothly-primary-tint));border-color:rgb(var(--smoothly-primary-shade));color:rgb(var(--smoothly-primary-contrast))}";
var Notifier = /** @class */ (function () {
    function Notifier(hostRef) {
        registerInstance(this, hostRef);
    }
    Notifier.prototype.onTrigger = function (event) {
        if (event.detail.name == "close") {
            event.stopPropagation();
            this.notice = undefined;
        }
    };
    Notifier.prototype.onUpdatedNotice = function (newValue) {
        var _this = this;
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = undefined;
        }
        if (newValue != undefined && !(dist_1.is(newValue) && newValue.remain)) {
            this.timer = window.setTimeout(function () {
                _this.notice = undefined;
                _this.timer = undefined;
            }, dist_1.is(newValue) && newValue.timeout ? newValue.timeout : 5000);
        }
    };
    Notifier.prototype.onNotice = function (event) {
        this.notice = event.detail;
    };
    Notifier.prototype.render = function () {
        var notice = !this.notice ? undefined : typeof (this.notice) == "string" ? JSON.parse(this.notice) : this.notice;
        var color = notice && notice.type != "default" ? notice.type : "primary";
        return notice == undefined ? h("slot", null) :
            [
                h("slot", null),
                h("aside", { class: notice.type }, h("smoothly-trigger", { color: color, fill: "clear", name: "close" }, h("smoothly-icon", { name: "close-circle-outline", color: color })), h("p", null, notice.message)),
            ];
    };
    Object.defineProperty(Notifier, "watchers", {
        get: function () {
            return {
                "notice": ["onUpdatedNotice"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return Notifier;
}());
Notifier.style = styleCss;
export { Notifier as smoothly_notifier };
