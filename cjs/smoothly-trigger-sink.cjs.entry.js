'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');
require('./index-c77b5414.js');
const index$2 = require('./index-1a7e22f1.js');

const styleCss = ".sc-smoothly-trigger-sink-h{display:block}[hidden].sc-smoothly-trigger-sink-h{display:none}";

class SmoothlyTriggerSink {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get filters() {
        if (!this.filtersValue)
            this.filtersValue = this.filter ? this.filter.split(" ") : [];
        return this.filtersValue;
    }
    TriggerListener(event) {
        if (index$2.dist_3.is(event.detail) && this.filters.some(f => f == event.detail.name)) {
            index$2.dist_6.send(this.destination, event.detail, this.context || window);
            event.preventDefault();
            event.stopPropagation();
        }
    }
    render() {
        return index.h("slot", null);
    }
}
SmoothlyTriggerSink.style = styleCss;

exports.smoothly_trigger_sink = SmoothlyTriggerSink;
