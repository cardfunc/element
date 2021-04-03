'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f69b5b3.js');
const index$1 = require('./index-c77b5414.js');

const styleCss = ".sc-smoothly-display-amount-h{display:block}[hidden].sc-smoothly-display-amount-h{display:none}";

class SmoothlyDisplayAmount {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    format(amount) {
        const digitsPerGroup = 3;
        const defaultDecimals = 2;
        const maxDecimals = (index$1.dist_5.decimalDigits(this.currency) ? index$1.dist_5.decimalDigits(this.currency) : defaultDecimals);
        let beforeSeparator = amount.length;
        let separator;
        let result = amount;
        if (result == "")
            result = "0";
        if (amount.includes(".")) {
            separator = amount.indexOf(".");
            if (separator == 0) {
                result = "0" + result;
                separator++;
            }
            beforeSeparator = separator;
            result = result.padEnd(separator + maxDecimals + 1, "0");
            result = result.substring(0, separator + maxDecimals + 1);
        }
        else {
            result = result + ".";
            separator = result.length - 1;
            result = result.padEnd(separator + maxDecimals + 1, "0");
        }
        const spaces = Math.ceil(beforeSeparator / digitsPerGroup) - 1;
        if (spaces > 0) {
            for (let i = 0; i < spaces; i++) {
                const position = beforeSeparator - (spaces - i) * digitsPerGroup;
                result = result.slice(0, position) + " " + result.slice(position, result.length);
                beforeSeparator++;
            }
        }
        return result;
    }
    render() {
        return [
            typeof this.amount == "number" ? this.format(this.amount.toString()) : this.format(this.amount),
            " ",
            this.currency,
        ];
    }
}
SmoothlyDisplayAmount.style = styleCss;

exports.smoothly_display_amount = SmoothlyDisplayAmount;
