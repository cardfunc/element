'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');

class Urlencoded {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const pairs = this.data.split("&");
        const decoded = [];
        for (const p of pairs) {
            const pair = p.split("=");
            decoded.push([pair[0], pair[1]]);
        }
        return [
            decoded.map(tuple => index.h("smoothly-tuple", { tuple: tuple })),
        ];
    }
}

exports.smoothly_urlencoded = Urlencoded;
