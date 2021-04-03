'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');

const styleCss = ".sc-smoothly-notifier-test-h{display:block}[hidden].sc-smoothly-notifier-test-h{display:none}";

class NotifierTest {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.notice = { type: "warning", message: "This is a warning notice." };
    }
    render() {
        return [
            index.h("smoothly-notifier", { notice: this.notice })
        ];
    }
}
NotifierTest.style = styleCss;

exports.smoothly_notifier_test = NotifierTest;
