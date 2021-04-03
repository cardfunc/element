import { r as registerInstance, h } from './index-ef082d98.js';
import './index-e351faa0.js';
import { a as dist_3, b as dist_6 } from './index-5fbfc6ec.js';

const styleCss = ".sc-smoothly-trigger-sink-h{display:block}[hidden].sc-smoothly-trigger-sink-h{display:none}";

class SmoothlyTriggerSink {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get filters() {
        if (!this.filtersValue)
            this.filtersValue = this.filter ? this.filter.split(" ") : [];
        return this.filtersValue;
    }
    TriggerListener(event) {
        if (dist_3.is(event.detail) && this.filters.some(f => f == event.detail.name)) {
            dist_6.send(this.destination, event.detail, this.context || window);
            event.preventDefault();
            event.stopPropagation();
        }
    }
    render() {
        return h("slot", null);
    }
}
SmoothlyTriggerSink.style = styleCss;

export { SmoothlyTriggerSink as smoothly_trigger_sink };
