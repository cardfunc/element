import { r as registerInstance } from './index-ef082d98.js';

const styleCss = ".sc-smoothly-display-date-time-h{display:block}[hidden].sc-smoothly-display-date-time-h{display:none}";

class SmoothlyDisplayDateTime {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const datetime = this.datetime.split("T");
        return [
            datetime[0],
            " ",
            datetime[1],
        ];
    }
}
SmoothlyDisplayDateTime.style = styleCss;

export { SmoothlyDisplayDateTime as smoothly_display_date_time };
