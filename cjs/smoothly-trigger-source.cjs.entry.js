'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');
require('./index-c77b5414.js');
const index$2 = require('./index-1a7e22f1.js');

const styleCss = ".sc-smoothly-trigger-source-h{display:block}[hidden].sc-smoothly-trigger-source-h{display:none}";

class SmoothlyTriggerSource {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.trigger = index.createEvent(this, "trigger", 7);
        this.message = index.createEvent(this, "message", 7);
    }
    componentDidLoad() {
        index$2.dist_6.listen(this.listen, (destination, content) => {
            if (index$2.dist_3.is(content))
                this.trigger.emit(content);
            else
                this.message.emit({ destination, content });
        }, window);
    }
    render() {
        return index.h("slot", null);
    }
    get element() { return index.getElement(this); }
}
SmoothlyTriggerSource.style = styleCss;

exports.smoothly_trigger_source = SmoothlyTriggerSource;
