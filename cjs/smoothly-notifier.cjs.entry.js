'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');
require('./index-c77b5414.js');
const index$2 = require('./index-1a7e22f1.js');

const styleCss = ".sc-smoothly-notifier-h{display:block}[hidden].sc-smoothly-notifier-h{display:none}smoothly-trigger.sc-smoothly-notifier{float:right;text-align:right;margin-right:-1em}aside.sc-smoothly-notifier{position:relative;text-align:center;width:calc(100% - 2em);padding:0 1em;border-style:solid;border-width:1px;border-radius:5px}aside.warning.sc-smoothly-notifier{background-color:rgb(var(--smoothly-warning-tint));border-color:rgb(var(--smoothly-warning-shade));color:rgb(var(--smoothly-warning-contrast))}aside.success.sc-smoothly-notifier{background-color:rgb(var(--smoothly-success-color));border-color:rgb(var(--smoothly-success-shade));color:rgb(var(--smoothly-success-contrast))}aside.danger.sc-smoothly-notifier{background-color:rgb(var(--smoothly-danger-tint));border-color:rgb(var(--smoothly-danger-shade));color:rgb(var(--smoothly-danger-contrast))}aside.default.sc-smoothly-notifier{background-color:rgb(var(--smoothly-primary-tint));border-color:rgb(var(--smoothly-primary-shade));color:rgb(var(--smoothly-primary-contrast))}";

class Notifier {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    onTrigger(event) {
        if (event.detail.name == "close") {
            event.stopPropagation();
            this.notice = undefined;
        }
    }
    onUpdatedNotice(newValue) {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = undefined;
        }
        if (newValue != undefined && !(index$2.dist_1.is(newValue) && newValue.remain)) {
            this.timer = window.setTimeout(() => {
                this.notice = undefined;
                this.timer = undefined;
            }, index$2.dist_1.is(newValue) && newValue.timeout ? newValue.timeout : 5000);
        }
    }
    onNotice(event) {
        this.notice = event.detail;
    }
    render() {
        const notice = !this.notice ? undefined : typeof (this.notice) == "string" ? JSON.parse(this.notice) : this.notice;
        const color = notice && notice.type != "default" ? notice.type : "primary";
        return notice == undefined ? index.h("slot", null) :
            [
                index.h("slot", null),
                index.h("aside", { class: notice.type }, index.h("smoothly-trigger", { color: color, fill: "clear", name: "close" }, index.h("smoothly-icon", { name: "close-circle-outline", color: color })), index.h("p", null, notice.message)),
            ];
    }
    static get watchers() { return {
        "notice": ["onUpdatedNotice"]
    }; }
}
Notifier.style = styleCss;

exports.smoothly_notifier = Notifier;
