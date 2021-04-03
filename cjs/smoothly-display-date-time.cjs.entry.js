'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');

const styleCss = ".sc-smoothly-display-date-time-h{display:block}[hidden].sc-smoothly-display-date-time-h{display:none}";

class SmoothlyDisplayDateTime {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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

exports.smoothly_display_date_time = SmoothlyDisplayDateTime;
