import { r as registerInstance, h } from './index-ef082d98.js';
import './index-e351faa0.js';
import { a as dist_3, b as dist_6 } from './index-5fbfc6ec.js';
var styleCss = ".sc-smoothly-trigger-sink-h{display:block}[hidden].sc-smoothly-trigger-sink-h{display:none}";
var SmoothlyTriggerSink = /** @class */ (function () {
    function SmoothlyTriggerSink(hostRef) {
        registerInstance(this, hostRef);
    }
    Object.defineProperty(SmoothlyTriggerSink.prototype, "filters", {
        get: function () {
            if (!this.filtersValue)
                this.filtersValue = this.filter ? this.filter.split(" ") : [];
            return this.filtersValue;
        },
        enumerable: false,
        configurable: true
    });
    SmoothlyTriggerSink.prototype.TriggerListener = function (event) {
        if (dist_3.is(event.detail) && this.filters.some(function (f) { return f == event.detail.name; })) {
            dist_6.send(this.destination, event.detail, this.context || window);
            event.preventDefault();
            event.stopPropagation();
        }
    };
    SmoothlyTriggerSink.prototype.render = function () {
        return h("slot", null);
    };
    return SmoothlyTriggerSink;
}());
SmoothlyTriggerSink.style = styleCss;
export { SmoothlyTriggerSink as smoothly_trigger_sink };
