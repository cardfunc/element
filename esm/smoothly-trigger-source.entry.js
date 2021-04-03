import { r as registerInstance, c as createEvent, h, g as getElement } from './index-ef082d98.js';
import './index-e351faa0.js';
import { b as dist_6, a as dist_3 } from './index-5fbfc6ec.js';

const styleCss = ".sc-smoothly-trigger-source-h{display:block}[hidden].sc-smoothly-trigger-source-h{display:none}";

class SmoothlyTriggerSource {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.trigger = createEvent(this, "trigger", 7);
        this.message = createEvent(this, "message", 7);
    }
    componentDidLoad() {
        dist_6.listen(this.listen, (destination, content) => {
            if (dist_3.is(content))
                this.trigger.emit(content);
            else
                this.message.emit({ destination, content });
        }, window);
    }
    render() {
        return h("slot", null);
    }
    get element() { return getElement(this); }
}
SmoothlyTriggerSource.style = styleCss;

export { SmoothlyTriggerSource as smoothly_trigger_source };
