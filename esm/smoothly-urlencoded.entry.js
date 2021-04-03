import { r as registerInstance, h } from './index-ef082d98.js';

class Urlencoded {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const pairs = this.data.split("&");
        const decoded = [];
        for (const p of pairs) {
            const pair = p.split("=");
            decoded.push([pair[0], pair[1]]);
        }
        return [
            decoded.map(tuple => h("smoothly-tuple", { tuple: tuple })),
        ];
    }
}

export { Urlencoded as smoothly_urlencoded };
