import { r as registerInstance, h } from './index-ef082d98.js';
var Urlencoded = /** @class */ (function () {
    function Urlencoded(hostRef) {
        registerInstance(this, hostRef);
    }
    Urlencoded.prototype.render = function () {
        var pairs = this.data.split("&");
        var decoded = [];
        for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
            var p = pairs_1[_i];
            var pair = p.split("=");
            decoded.push([pair[0], pair[1]]);
        }
        return [
            decoded.map(function (tuple) { return h("smoothly-tuple", { tuple: tuple }); }),
        ];
    };
    return Urlencoded;
}());
export { Urlencoded as smoothly_urlencoded };
