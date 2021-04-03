'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');

const styleCss = "smoothly-radio-group{display:-ms-flexbox;display:flex;position:relative;color:none !important;background:none !important;margin:.5em 0}smoothly-radio-group[hidden]{display:none}smoothly-radio-group[orientation=vertical] *:not(:first-of-type)>input[type=\"radio\"]~label{border-top:none}smoothly-radio-group:not([orientation=vertical]) *:not(:first-of-type)>input[type=\"radio\"]~label{border-left:none}smoothly-radio-group[orientation=vertical]{-ms-flex-direction:column;flex-direction:column}smoothly-radio-group[orientation=vertical] :first-of-type>input[type=\"radio\"]~label{border-radius:4px 4px 0 0}smoothly-radio-group[orientation=vertical] :last-of-type>input[type=\"radio\"]~label{border-radius:0 0 4px 4px}smoothly-radio-group:not([orientation=vertical]){-ms-flex-direction:row;flex-direction:row}smoothly-radio-group:not([orientation=vertical]) :first-of-type>input[type=\"radio\"]~label{border-radius:4px 0 0 4px}smoothly-radio-group:not([orientation=vertical]) :last-of-type>input[type=\"radio\"]~label{border-radius:0 4px 4px 0}";

class SmoothlyToggleGroup {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.orientation = "horizontal";
    }
    render() {
        return index.h("slot", null);
    }
}
SmoothlyToggleGroup.style = styleCss;

exports.smoothly_radio_group = SmoothlyToggleGroup;
