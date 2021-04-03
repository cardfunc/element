import { r as registerInstance, h } from './index-ef082d98.js';

class SmoothlyTuple {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("b", null, this.tuple[0]),
            ": ",
            this.tuple[1],
            h("br", null),
        ];
    }
}

export { SmoothlyTuple as smoothly_tuple };
