import { r as registerInstance } from './index-ef082d98.js';
var styleCss = ".sc-smoothly-display-date-time-h{display:block}[hidden].sc-smoothly-display-date-time-h{display:none}";
var SmoothlyDisplayDateTime = /** @class */ (function () {
    function SmoothlyDisplayDateTime(hostRef) {
        registerInstance(this, hostRef);
    }
    SmoothlyDisplayDateTime.prototype.render = function () {
        var datetime = this.datetime.split("T");
        return [
            datetime[0],
            " ",
            datetime[1],
        ];
    };
    return SmoothlyDisplayDateTime;
}());
SmoothlyDisplayDateTime.style = styleCss;
export { SmoothlyDisplayDateTime as smoothly_display_date_time };
