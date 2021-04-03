import { r as registerInstance, h } from './index-ef082d98.js';
var styleCss = ".sc-smoothly-spinner-h{display:block;position:relative}[hidden].sc-smoothly-spinner-h{display:none}.sc-smoothly-spinner-h:not([active]){display:none}.sc-smoothly-spinner-h{position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(var(--smoothly-default-color), var(--smoothly-semitransparent))}.sc-smoothly-spinner-h>div.sc-smoothly-spinner{opacity:1;position:absolute;left:calc(50% - 5em + 1.1em);top:calc(50% - 5em + 1.1em)}.sc-smoothly-spinner-h>div.sc-smoothly-spinner,.sc-smoothly-spinner-h>div.sc-smoothly-spinner:after{border-radius:50%;width:5em;height:5em}.sc-smoothly-spinner-h>div.sc-smoothly-spinner{content:\"\";color:transparent;position:relative;border-top:1.1em solid rgb(var(--smoothly-primary-tint));border-right:1.1em solid rgb(var(--smoothly-primary-tint));border-bottom:1.1em solid rgb(var(--smoothly-primary-tint));border-left:1.1em solid rgb(var(--smoothly-primary-color));-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:load8 1.1s infinite linear;animation:load8 1.1s infinite linear}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
var SmoothlySpinner = /** @class */ (function () {
    function SmoothlySpinner(hostRef) {
        registerInstance(this, hostRef);
    }
    SmoothlySpinner.prototype.render = function () {
        return h("div", null, "Loading...");
    };
    return SmoothlySpinner;
}());
SmoothlySpinner.style = styleCss;
export { SmoothlySpinner as smoothly_spinner };
