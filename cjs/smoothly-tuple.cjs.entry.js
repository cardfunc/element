'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');

class SmoothlyTuple {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return [
            index.h("b", null, this.tuple[0]),
            ": ",
            this.tuple[1],
            index.h("br", null),
        ];
    }
}

exports.smoothly_tuple = SmoothlyTuple;
