import { Component, Event, Method, Listen, Prop, State, h } from "@stencil/core";
import { MerchantKeyInfoUnpack } from "../model";
export class Form {
    constructor() {
        this.state = "created";
        this.state3d = "created";
    }
    async componentWillLoad() {
        this.merchant = await MerchantKeyInfoUnpack(this.apiKey, "public");
        const styleLink = document.querySelector("link[rel=stylesheet][href^='https://theme.payfunc.com/']");
        if (styleLink) {
            const themeLink = styleLink.href.substring(26);
            this.theme = themeLink.substring(0, themeLink.indexOf("/"));
        }
    }
    async handleTrigger(event) {
        var _a, _b;
        if (event.detail.value && event.detail.value.status == 400 && event.detail.value.type == "missing property" && event.detail.value.content && event.detail.value.content.property == "pares")
            this.verify = { pareq: event.detail.value.content.pareq, url: event.detail.value.content.url, issuer: (_b = (_a = this.merchant) === null || _a === void 0 ? void 0 : _a.card.url) !== null && _b !== void 0 ? _b : "" };
        else if (event.detail.name == "pares" || event.detail.name == "card") {
            this.verify = undefined;
            if (this.authorization)
                this.frame.send("card", { name: "do3d", value: { authorization: this.authorization, key: this.apiKey, parent: window.location.origin } });
        }
        else {
            this.verify = undefined;
            this.changed.emit(this.value = event.detail.value);
            this.state = event.detail.name == "cardPaymentSuccess" ? "succeeded" : "failed";
            if (this.received) {
                this.received(this.state, event.detail.value);
                this.received = undefined;
            }
            this.changed3d.emit(this.value3d = event.detail.value);
            this.state3d = event.detail.name == "cardAuthorizationSuccess" ? "succeeded" : "failed";
            if (this.received3d) {
                this.received3d(this.state3d, event.detail.value);
                this.received3d = undefined;
            }
        }
    }
    submit(authorization) {
        this.authorization = authorization;
        return new Promise(callback => {
            if (this.frame) {
                this.received = (_, response) => callback(response);
                this.frame.send("card", { name: "submitVersion1", value: { authorization, key: this.apiKey, parent: window.location.origin } });
                this.state = "processing";
            }
        });
    }
    do3d(authorization, error) {
        this.authorization = authorization;
        return new Promise(callback => {
            if (this.frame) {
                this.received3d = (_, response) => callback(response);
                let value = { authorization, key: this.apiKey, parent: window.location.origin };
                if (error)
                    value = Object.assign(Object.assign({}, value), { error });
                this.frame.send("card", { name: "do3d", value });
                this.state3d = "processing";
            }
        });
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        return [
            this.merchant ? h("smoothly-frame", { url: this.merchant.card.url + "/ui/web-app/" + (this.theme ? "?theme=" + this.theme : ""), name: "card", ref: (element) => this.frame = element }) : [],
            this.verify ?
                h("smoothly-dialog", { closable: true },
                    h("smoothly-frame", { url: `${this.verify.issuer}/redirect/post?target=${encodeURIComponent(this.verify.url)}&PaReq=${encodeURIComponent(this.verify.pareq)}&MD=MD&TermUrl=${encodeURIComponent(`${this.verify.issuer}/emv3d1/done?merchant=${(_d = (_b = (_a = this.merchant) === null || _a === void 0 ? void 0 : _a.card.id) !== null && _b !== void 0 ? _b : (_c = this.merchant) === null || _c === void 0 ? void 0 : _c.sub) !== null && _d !== void 0 ? _d : "error"}&token=${(_f = (_e = this.authorization) === null || _e === void 0 ? void 0 : _e.card) !== null && _f !== void 0 ? _f : "error"}&parent=${window.location.origin}`)}`, name: "parent", style: { height: "90vh" } })) :
                [],
        ];
    }
    static get is() { return "cardfunc-element"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["style.css"]
    }; }
    static get styleUrls() { return {
        "$": ["style.css"]
    }; }
    static get properties() { return {
        "apiKey": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "api-key",
            "reflect": false
        },
        "state": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"failed\" | \"succeeded\" | \"processing\" | \"created\"",
                "resolved": "\"created\" | \"failed\" | \"processing\" | \"succeeded\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "state",
            "reflect": true,
            "defaultValue": "\"created\""
        },
        "state3d": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"failed\" | \"succeeded\" | \"processing\" | \"created\"",
                "resolved": "\"created\" | \"failed\" | \"processing\" | \"succeeded\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "state-3d",
            "reflect": true,
            "defaultValue": "\"created\""
        },
        "value": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "AuthorizationCreatableSafe",
                "resolved": "AuthorizationCreatableSafe | undefined",
                "references": {
                    "AuthorizationCreatableSafe": {
                        "location": "import",
                        "path": "../model"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "value3d": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "AuthorizationCreatableSafe",
                "resolved": "AuthorizationCreatableSafe | undefined",
                "references": {
                    "AuthorizationCreatableSafe": {
                        "location": "import",
                        "path": "../model"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get states() { return {
        "theme": {},
        "verify": {},
        "authorization": {},
        "merchant": {}
    }; }
    static get events() { return [{
            "method": "changed",
            "name": "changed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "AuthorizationCreatableSafe",
                "resolved": "AuthorizationCreatableSafe",
                "references": {
                    "AuthorizationCreatableSafe": {
                        "location": "import",
                        "path": "../model"
                    }
                }
            }
        }, {
            "method": "changed3d",
            "name": "changed3d",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "AuthorizationCreatableSafe",
                "resolved": "AuthorizationCreatableSafe",
                "references": {
                    "AuthorizationCreatableSafe": {
                        "location": "import",
                        "path": "../model"
                    }
                }
            }
        }]; }
    static get methods() { return {
        "submit": {
            "complexType": {
                "signature": "(authorization: AuthorizationCreatableSafe) => Promise<AuthorizationCreatableSafe | Error | Token>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "AuthorizationCreatableSafe": {
                        "location": "import",
                        "path": "../model"
                    },
                    "Error": {
                        "location": "import",
                        "path": "gracely"
                    },
                    "Token": {
                        "location": "import",
                        "path": "authly"
                    }
                },
                "return": "Promise<string | AuthorizationCreatableSafe | Error>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "do3d": {
            "complexType": {
                "signature": "(authorization: AuthorizationCreatableSafe, error?: Error | undefined) => Promise<AuthorizationCreatableSafe | Error | Token>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "AuthorizationCreatableSafe": {
                        "location": "import",
                        "path": "../model"
                    },
                    "Error": {
                        "location": "import",
                        "path": "gracely"
                    },
                    "Token": {
                        "location": "import",
                        "path": "authly"
                    }
                },
                "return": "Promise<string | AuthorizationCreatableSafe | Error>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get listeners() { return [{
            "name": "trigger",
            "method": "handleTrigger",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
