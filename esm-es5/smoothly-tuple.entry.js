import { r as registerInstance, h } from './index-ef082d98.js';
var SmoothlyTuple = /** @class */ (function () {
    function SmoothlyTuple(hostRef) {
        registerInstance(this, hostRef);
    }
    SmoothlyTuple.prototype.render = function () {
        return [
            h("b", null, this.tuple[0]),
            ": ",
            this.tuple[1],
            h("br", null),
        ];
    };
    return SmoothlyTuple;
}());
export { SmoothlyTuple as smoothly_tuple };
