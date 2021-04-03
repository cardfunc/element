import { r as registerInstance, c as createEvent, h, g as getElement } from './index-ef082d98.js';
import './index-e351faa0.js';
import { b as dist_6, a as dist_3 } from './index-5fbfc6ec.js';
var styleCss = ".sc-smoothly-trigger-source-h{display:block}[hidden].sc-smoothly-trigger-source-h{display:none}";
var SmoothlyTriggerSource = /** @class */ (function () {
    function SmoothlyTriggerSource(hostRef) {
        registerInstance(this, hostRef);
        this.trigger = createEvent(this, "trigger", 7);
        this.message = createEvent(this, "message", 7);
    }
    SmoothlyTriggerSource.prototype.componentDidLoad = function () {
        var _this = this;
        dist_6.listen(this.listen, function (destination, content) {
            if (dist_3.is(content))
                _this.trigger.emit(content);
            else
                _this.message.emit({ destination: destination, content: content });
        }, window);
    };
    SmoothlyTriggerSource.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(SmoothlyTriggerSource.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return SmoothlyTriggerSource;
}());
SmoothlyTriggerSource.style = styleCss;
export { SmoothlyTriggerSource as smoothly_trigger_source };
