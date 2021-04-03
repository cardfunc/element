import { r as registerInstance } from './index-ef082d98.js';
import { b as dist_5 } from './index-e351faa0.js';

const styleCss = ".sc-smoothly-display-amount-h{display:block}[hidden].sc-smoothly-display-amount-h{display:none}";

class SmoothlyDisplayAmount {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    format(amount) {
        const digitsPerGroup = 3;
        const defaultDecimals = 2;
        const maxDecimals = (dist_5.decimalDigits(this.currency) ? dist_5.decimalDigits(this.currency) : defaultDecimals);
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

export { SmoothlyDisplayAmount as smoothly_display_amount };
