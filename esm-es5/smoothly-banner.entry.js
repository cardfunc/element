import { r as registerInstance, h } from './index-ef082d98.js';
var styleCss = "smoothly-banner{display:block;height:4em}smoothly-banner[hidden]{display:none}smoothly-banner>header{position:fixed;top:0;left:0;width:calc(100vw - 2em);z-index:1;height:4em;padding:0 1em;background-color:rgb(var(--smoothly-primary-color));color:rgb(var(--smoothly-primary-contrast));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(var(--smoothly-dark-shade));box-shadow:0 2px 5px 0 rgba(var(--smoothly-dark-shade))}smoothly-banner>header>h1{-ms-flex-positive:1;flex-grow:1}smoothly-banner>header>nav{display:-ms-flexbox;display:flex;height:100%}smoothly-banner>header>nav>ul{display:-ms-flexbox;display:flex;height:100%;margin:0}smoothly-banner>header>nav>ul>li{display:block;height:100%}smoothly-banner>header>nav>ul>li>a{display:inline-block;line-height:4em;height:100%;padding:0 1em;color:rgb(var(--smoothly-primary-contrast));text-decoration:none;font-weight:bold}smoothly-banner>header>nav>ul>li>a:hover{background-color:rgb(var(--smoothly-secondary-color));color:rgb(var(--smoothly-secondary-contrast))}";
var Banner = /** @class */ (function () {
    function Banner(hostRef) {
        registerInstance(this, hostRef);
    }
    Banner.prototype.render = function () {
        return [
            h("header", null, h("h1", null, this.heading), h("slot", null)),
        ];
    };
    return Banner;
}());
Banner.style = styleCss;
export { Banner as smoothly_banner };
