import { r as registerInstance, h } from './index-ef082d98.js';
var styleCss = ".sc-smoothly-notifier-test-h{display:block}[hidden].sc-smoothly-notifier-test-h{display:none}";
var NotifierTest = /** @class */ (function () {
    function NotifierTest(hostRef) {
        registerInstance(this, hostRef);
        this.notice = { type: "warning", message: "This is a warning notice." };
    }
    NotifierTest.prototype.render = function () {
        return [
            h("smoothly-notifier", { notice: this.notice })
        ];
    };
    return NotifierTest;
}());
NotifierTest.style = styleCss;
export { NotifierTest as smoothly_notifier_test };
