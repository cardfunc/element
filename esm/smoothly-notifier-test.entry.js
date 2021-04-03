import { r as registerInstance, h } from './index-ef082d98.js';

const styleCss = ".sc-smoothly-notifier-test-h{display:block}[hidden].sc-smoothly-notifier-test-h{display:none}";

class NotifierTest {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.notice = { type: "warning", message: "This is a warning notice." };
    }
    render() {
        return [
            h("smoothly-notifier", { notice: this.notice })
        ];
    }
}
NotifierTest.style = styleCss;

export { NotifierTest as smoothly_notifier_test };
