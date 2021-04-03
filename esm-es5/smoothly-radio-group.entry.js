import { r as registerInstance, h } from './index-ef082d98.js';
var styleCss = "smoothly-radio-group{display:-ms-flexbox;display:flex;position:relative;color:none !important;background:none !important;margin:.5em 0}smoothly-radio-group[hidden]{display:none}smoothly-radio-group[orientation=vertical] *:not(:first-of-type)>input[type=\"radio\"]~label{border-top:none}smoothly-radio-group:not([orientation=vertical]) *:not(:first-of-type)>input[type=\"radio\"]~label{border-left:none}smoothly-radio-group[orientation=vertical]{-ms-flex-direction:column;flex-direction:column}smoothly-radio-group[orientation=vertical] :first-of-type>input[type=\"radio\"]~label{border-radius:4px 4px 0 0}smoothly-radio-group[orientation=vertical] :last-of-type>input[type=\"radio\"]~label{border-radius:0 0 4px 4px}smoothly-radio-group:not([orientation=vertical]){-ms-flex-direction:row;flex-direction:row}smoothly-radio-group:not([orientation=vertical]) :first-of-type>input[type=\"radio\"]~label{border-radius:4px 0 0 4px}smoothly-radio-group:not([orientation=vertical]) :last-of-type>input[type=\"radio\"]~label{border-radius:0 4px 4px 0}";
var SmoothlyToggleGroup = /** @class */ (function () {
    function SmoothlyToggleGroup(hostRef) {
        registerInstance(this, hostRef);
        this.orientation = "horizontal";
    }
    SmoothlyToggleGroup.prototype.render = function () {
        return h("slot", null);
    };
    return SmoothlyToggleGroup;
}());
SmoothlyToggleGroup.style = styleCss;
export { SmoothlyToggleGroup as smoothly_radio_group };
