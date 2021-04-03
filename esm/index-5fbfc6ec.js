import { c as createCommonjsModule, u as unwrapExports, a as commonjsGlobal, d as dist$2 } from './index-e351faa0.js';

if (!Uint8Array.__proto__.from) {
    (() => {
        Uint8Array.__proto__.from = function (object, theFunction, thisObject) {
            const typedArrayClass = Uint8Array.__proto__;
            if (typeof this !== 'function') {
                throw new TypeError('# is not a constructor');
            }
            if (this.__proto__ !== typedArrayClass) {
                throw new TypeError('this is not a typed array.');
            }
            theFunction = theFunction || (element => element);
            if (typeof theFunction !== 'function') {
                throw new TypeError('specified argument is not a function');
            }
            object = Object(object);
            if (!object.length) {
                return new this(0);
            }
            let copyData = [];
            for (const data of copyData) {
                copyData.push(data);
            }
            copyData = copyData.map(theFunction, thisObject);
            const typedArray = new this(copyData.length);
            for (let i = 0; i < typedArray.length; i++) {
                typedArray[i] = copyData[i];
            }
            return typedArray;
        };
    })();
}

var shim = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


});

unwrapExports(shim);

var crypto_browser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.crypto = void 0;
exports.crypto = window.crypto || window.msCrypto;

});

unwrapExports(crypto_browser);

var TextEncoder_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextEncoder = void 0;
class TextEncoder {
    constructor() {
        this.encoding = "utf-8";
    }
    encode(data) {
        return Uint8Array.from(unescape(encodeURIComponent(data)).split(""), c => c.charCodeAt(0));
    }
}
exports.TextEncoder = TextEncoder;

});

unwrapExports(TextEncoder_1);

var Base64 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;

const tables = {
    standard: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    url: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
};
function encode(value, standard = "standard", padding = "") {
    if (typeof (value) == "string")
        value = new TextEncoder_1.TextEncoder().encode(value);
    const table = tables[standard];
    const result = [];
    for (let c = 0; c < value.length; c += 3) {
        const c0 = value[c];
        const c1 = c + 1 < value.length ? value[c + 1] : 0;
        const c2 = c + 2 < value.length ? value[c + 2] : 0;
        result.push(table[c0 >>> 2]);
        result.push(table[(c0 & 3) << 4 | (c1 >>> 4)]);
        result.push(table[((c1 & 15) << 2) | (c2 >>> 6)]);
        result.push(table[c2 & 63]);
    }
    const length = Math.ceil(value.length / 3 * 4);
    return result.join("").substr(0, length) + padding.repeat(result.length - length);
}
exports.encode = encode;
function decode(value, standard = "standard") {
    while (value.endsWith("=") && value.length > 0)
        value = value.substr(0, value.length - 1);
    const table = tables[standard];
    const data = value.split("").map(c => table.indexOf(c));
    const result = new Uint8Array(Math.floor(data.length / 4 * 3));
    for (let c = 0; c < result.length; c += 3) {
        const d0 = data.shift() || 0;
        const d1 = data.shift() || 0;
        const d2 = data.shift() || 0;
        const d3 = data.shift() || 0;
        result[c] = (d0 << 2) | (d1 >>> 4);
        result[c + 1] = ((d1 & 15) << 4) | (d2 >>> 2);
        result[c + 2] = ((d2 & 3) << 6) | d3;
    }
    return result;
}
exports.decode = decode;

});

unwrapExports(Base64);

var TextDecoder_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDecoder = void 0;
class TextDecoder {
    constructor() {
        this.encoding = "utf-8";
    }
    decode(view, options) {
        return !view ? "" : decodeURIComponent(escape(Array.from(new Uint8Array(view.buffer, view.byteOffset, view.byteLength), c => String.fromCharCode(c)).join("")));
    }
}
exports.TextDecoder = TextDecoder;

});

unwrapExports(TextDecoder_1);

var PropertyCrypto_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCrypto = void 0;




class PropertyCrypto {
    constructor(secret, ...properties) {
        this.secret = secret;
        this.encoder = new TextEncoder_1.TextEncoder();
        this.decoder = new TextDecoder_1.TextDecoder();
        this.properties = properties.map(p => p.split("."));
    }
    encrypt(payload) {
        return this.process(payload, value => this.encoder.encode(JSON.stringify(value)), value => Base64.encode(value, "url"));
    }
    decrypt(payload) {
        return this.process(payload, value => typeof (value) == "string" ? Base64.decode(value, "url") : new Uint8Array(), value => JSON.parse(this.decoder.decode(value)));
    }
    process(payload, preprocess, postprocess) {
        return __awaiter(this, void 0, void 0, function* () {
            const secret = this.secret + payload.sub + payload.iat;
            for (const property of this.properties)
                payload = yield this.processProperty(payload, property, secret + property.join("."), preprocess, postprocess);
            return payload;
        });
    }
    processProperty(payload, property, secret, preprocess, postprocess) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = Object.assign({}, payload);
            if (result[property[0]])
                if (property.length == 1) {
                    const data = preprocess(payload[property[0]]);
                    const key = new Uint8Array(yield crypto_browser.crypto.subtle.digest("SHA-512", this.encoder.encode(secret)));
                    const processed = new Uint8Array(data.length);
                    for (let index = 0; index < data.length; index++)
                        processed[index] = data[index] ^ key[index];
                    result[property[0]] = postprocess(processed);
                }
                else
                    result[property[0]] = yield this.processProperty(result[property[0]], property.slice(1), secret, preprocess, postprocess);
            return result;
        });
    }
    static create(secret, ...properties) {
        return secret && new PropertyCrypto(secret, ...properties) || undefined;
    }
}
exports.PropertyCrypto = PropertyCrypto;

});

unwrapExports(PropertyCrypto_1);

var Actor_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;

class Actor {
    constructor(id) {
        this.id = id;
        this.cryptos = [];
    }
    add(secret, ...properties) {
        const crypto = PropertyCrypto_1.PropertyCrypto.create(secret, ...properties);
        if (crypto)
            this.cryptos.push(crypto);
        return this;
    }
}
exports.Actor = Actor;

});

unwrapExports(Actor_1);

var Symmetric_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symmetric = void 0;
var Symmetric;
(function (Symmetric) {
    function is(value) {
        return value == "HS256" ||
            value == "HS384" ||
            value == "HS512";
    }
    Symmetric.is = is;
})(Symmetric = exports.Symmetric || (exports.Symmetric = {}));

});

unwrapExports(Symmetric_1);

var Asymmetric_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asymmetric = void 0;
var Asymmetric;
(function (Asymmetric) {
    function is(value) {
        return value == "RS256" ||
            value == "RS384" ||
            value == "RS512" ||
            value == "ES256" ||
            value == "ES384" ||
            value == "ES512" ||
            value == "PS256" ||
            value == "PS384" ||
            value == "PS512";
    }
    Asymmetric.is = is;
})(Asymmetric = exports.Asymmetric || (exports.Asymmetric = {}));

});

unwrapExports(Asymmetric_1);

var Name_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;


var Name;
(function (Name) {
    function is(value) {
        return value == "none" || Symmetric_1.Symmetric.is(value) || Asymmetric_1.Asymmetric.is(value);
    }
    Name.is = is;
    let Symmetric;
    (function (Symmetric) {
        Symmetric.is = Symmetric_1.Symmetric.is;
    })(Symmetric = Name.Symmetric || (Name.Symmetric = {}));
    let Asymmetric;
    (function (Asymmetric) {
        Asymmetric.is = Asymmetric_1.Asymmetric.is;
    })(Asymmetric = Name.Asymmetric || (Name.Asymmetric = {}));
})(Name = exports.Name || (exports.Name = {}));

});

unwrapExports(Name_1);

var Algorithm_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.Algorithm = void 0;



class Algorithm {
    sign(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return typeof (data) == "string" ? Base64.encode(yield this.signBinary(new TextEncoder_1.TextEncoder().encode(data)), "url") : this.signBinary(data);
        });
    }
    verify(data, signature) {
        if (typeof (signature) == "string")
            signature = Base64.decode(signature, "url");
        return typeof (data) == "string" ? this.verifyBinary(new TextEncoder_1.TextEncoder().encode(data), signature) : this.verifyBinary(data, signature);
    }
    static create(name, publicKey, privateKey) {
        const create = algorithms[name];
        return create && create([publicKey, privateKey]);
    }
    static none() {
        return Algorithm.create("none");
    }
    static HS256(key) {
        return Algorithm.create("HS256", key);
    }
    static HS384(key) {
        return Algorithm.create("HS384", key);
    }
    static HS512(key) {
        return Algorithm.create("HS512", key);
    }
    static RS256(publicKey, privateKey) {
        return Algorithm.create("RS256", publicKey, privateKey);
    }
    static RS384(publicKey, privateKey) {
        return Algorithm.create("RS384", publicKey, privateKey);
    }
    static RS512(publicKey, privateKey) {
        return Algorithm.create("RS512", publicKey, privateKey);
    }
    static ES256(publicKey, privateKey) {
        return Algorithm.create("ES256", publicKey, privateKey);
    }
    static ES384(publicKey, privateKey) {
        return Algorithm.create("ES384", publicKey, privateKey);
    }
    static ES512(publicKey, privateKey) {
        return Algorithm.create("ES512", publicKey, privateKey);
    }
    static PS256(publicKey, privateKey) {
        return Algorithm.create("PS256", publicKey, privateKey);
    }
    static PS384(publicKey, privateKey) {
        return Algorithm.create("PS384", publicKey, privateKey);
    }
    static PS512(publicKey, privateKey) {
        return Algorithm.create("PS512", publicKey, privateKey);
    }
}
exports.Algorithm = Algorithm;
const algorithms = {};
function register(name, create) {
    algorithms[name] = create;
}
exports.register = register;
(function (Algorithm) {
    let Name;
    (function (Name) {
        Name.is = Name_1.Name.is;
        let Symmetric;
        (function (Symmetric) {
            Symmetric.is = Name_1.Name.Symmetric.is;
        })(Symmetric = Name.Symmetric || (Name.Symmetric = {}));
        let Asymmetric;
        (function (Asymmetric) {
            Asymmetric.is = Name_1.Name.Asymmetric.is;
        })(Asymmetric = Name.Asymmetric || (Name.Asymmetric = {}));
    })(Name = Algorithm.Name || (Algorithm.Name = {}));
})(Algorithm = exports.Algorithm || (exports.Algorithm = {}));

});

unwrapExports(Algorithm_1);

var Symmetric_1$1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symmetric = void 0;


class Symmetric extends Algorithm_1.Algorithm {
    verifyBinary(data, signature) {
        return __awaiter(this, void 0, void 0, function* () {
            return Base64.encode(yield this.signBinary(data), "url") == Base64.encode(signature, "url");
        });
    }
}
exports.Symmetric = Symmetric;

});

unwrapExports(Symmetric_1$1);

var None_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.None = void 0;


class None extends Symmetric_1$1.Symmetric {
    get name() { return "none"; }
    signBinary(_) { return Promise.resolve(new Uint8Array(0)); }
}
exports.None = None;
Algorithm_1.register("none", (_) => new None());

});

unwrapExports(None_1);

var HS_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HS = void 0;




class HS extends Symmetric_1$1.Symmetric {
    constructor(length, key) {
        super();
        this.length = length;
        if (typeof (key) == "string")
            key = Base64.decode(key, "url");
        this.key = crypto_browser.crypto.subtle.importKey("raw", key, { name: "HMAC", hash: { name: "SHA-" + this.length } }, false, ["sign", "verify"]);
    }
    get name() { return "HS" + this.length; }
    signBinary(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Uint8Array(yield crypto_browser.crypto.subtle.sign("HMAC", yield this.key, data));
        });
    }
}
exports.HS = HS;
Algorithm_1.register("HS256", (keys) => keys[0] && new HS("256", keys[0]) || undefined);
Algorithm_1.register("HS384", (keys) => keys[0] && new HS("384", keys[0]) || undefined);
Algorithm_1.register("HS512", (keys) => keys[0] && new HS("512", keys[0]) || undefined);

});

unwrapExports(HS_1);

var RS_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RS = void 0;



class RS extends Algorithm_1.Algorithm {
    constructor(length, publicKey, privateKey) {
        super();
        this.length = length;
        if (publicKey) {
            if (typeof (publicKey) == "string")
                publicKey = Base64.decode(publicKey);
            this.publicKey = crypto_browser.crypto.subtle.importKey("spki", publicKey, { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-" + this.length } }, false, ["verify"]);
        }
        if (privateKey) {
            if (typeof (privateKey) == "string")
                privateKey = Base64.decode(privateKey);
            this.privateKey = crypto_browser.crypto.subtle.importKey("pkcs8", privateKey, { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-" + this.length } }, true, ["sign", "verify"]);
        }
    }
    get name() { return "RS" + this.length; }
    signBinary(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Uint8Array(yield crypto_browser.crypto.subtle.sign("RSASSA-PKCS1-v1_5", yield this.privateKey, data));
        });
    }
    verifyBinary(data, signature) {
        return __awaiter(this, void 0, void 0, function* () {
            return crypto_browser.crypto.subtle.verify("RSASSA-PKCS1-v1_5", yield this.publicKey, signature, data);
        });
    }
}
exports.RS = RS;
Algorithm_1.register("RS256", (keys) => new RS("256", keys[0], keys[1]));
Algorithm_1.register("RS384", (keys) => new RS("384", keys[0], keys[1]));
Algorithm_1.register("RS512", (keys) => new RS("512", keys[0], keys[1]));

});

unwrapExports(RS_1);

var Algorithm = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

Object.defineProperty(exports, "Algorithm", { enumerable: true, get: function () { return Algorithm_1.Algorithm; } });




});

unwrapExports(Algorithm);

var Issuer_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issuer = void 0;



class Issuer extends Actor_1.Actor {
    constructor(issuer, algorithm) {
        super(issuer);
        this.algorithm = algorithm;
    }
    get header() {
        return {
            alg: this.algorithm.name,
            typ: "JWT",
        };
    }
    get payload() {
        const result = { iss: this.id, iat: Issuer.issuedAt };
        if (this.audience)
            result.aud = this.audience;
        if (this.duration && result.iat)
            result.exp = result.iat + this.duration;
        return result;
    }
    sign(payload, issuedAt) {
        return __awaiter(this, void 0, void 0, function* () {
            payload = Object.assign(Object.assign({}, this.payload), payload);
            if (issuedAt)
                payload.iat = typeof (issuedAt) == "number" ? issuedAt : issuedAt.getTime();
            payload = yield this.cryptos.reduce((p, c) => __awaiter(this, void 0, void 0, function* () { return c.encrypt(yield p); }), Promise.resolve(payload));
            const data = `${Base64.encode(new TextEncoder_1.TextEncoder().encode(JSON.stringify(this.header)), "url")}.${Base64.encode(new TextEncoder_1.TextEncoder().encode(JSON.stringify(payload)), "url")}`;
            return `${data}.${yield this.algorithm.sign(data)}`;
        });
    }
    static get issuedAt() {
        return Issuer.defaultIssuedAt == undefined ? Date.now() :
            typeof (Issuer.defaultIssuedAt) == "number" ? Issuer.defaultIssuedAt :
                Issuer.defaultIssuedAt.getTime();
    }
    static create(issuer, algorithm) {
        return algorithm && new Issuer(issuer, algorithm) || undefined;
    }
}
exports.Issuer = Issuer;

});

unwrapExports(Issuer_1);

var Password_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;


var Password;
(function (Password) {
    function is(value) {
        return typeof (value) == "string" || (typeof (value) == "object" &&
            typeof (value.hash) == "string" &&
            typeof (value.salt) == "string");
    }
    Password.is = is;
    function hash(algorithm, password, salt) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!salt)
                salt = Base64.encode(crypto_browser.crypto.getRandomValues(new Uint8Array(64)));
            return {
                hash: yield algorithm.sign(salt + password),
                salt,
            };
        });
    }
    Password.hash = hash;
    function verify(algorithm, hash, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield Password.hash(algorithm, password, hash.salt)).hash == hash.hash;
        });
    }
    Password.verify = verify;
    let Hashed;
    (function (Hashed) {
        function is(value) {
            return typeof (value) == "object" &&
                typeof (value.hash) == "string" &&
                typeof (value.salt) == "string";
        }
        Hashed.is = is;
    })(Hashed = Password.Hashed || (Password.Hashed = {}));
})(Password = exports.Password || (exports.Password = {}));

});

unwrapExports(Password_1);

var Token_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
var Token;
(function (Token) {
    function is(value) {
        return typeof (value) == "string" && /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(value);
    }
    Token.is = is;
})(Token = exports.Token || (exports.Token = {}));

});

unwrapExports(Token_1);

var Verifier_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verifier = void 0;



class Verifier extends Actor_1.Actor {
    constructor(audience, ...algorithms) {
        super(audience);
        if (algorithms.length > 0) {
            this.algorithms = {};
            for (const algorithm of algorithms)
                this.algorithms[algorithm.name] = algorithm;
        }
        else
            this.algorithms = undefined;
    }
    verify(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            if (token) {
                const splitted = token.split(".", 3);
                if (splitted.length < 2)
                    result = undefined;
                else {
                    try {
                        const oldDecoder = token.includes("/") || token.includes("+");
                        const header = JSON.parse(new TextDecoder_1.TextDecoder().decode(Base64.decode(splitted[0], oldDecoder ? "standard" : "url")));
                        result = JSON.parse(new TextDecoder_1.TextDecoder().decode(Base64.decode(splitted[1], oldDecoder ? "standard" : "url")));
                        if (this.algorithms) {
                            const algorithm = this.algorithms[header.alg];
                            result = splitted.length == 3 && algorithm && (yield algorithm.verify(`${splitted[0]}.${splitted[1]}`, splitted[2])) ? result : undefined;
                        }
                    }
                    catch (_a) {
                        result = undefined;
                    }
                    const now = Date.now();
                    result = result &&
                        (result.exp == undefined || result.exp > now) &&
                        (result.iat == undefined || result.iat <= now) &&
                        this.verifyAudience(result.aud) ?
                        result : undefined;
                }
                if (result)
                    result = yield this.cryptos.reduce((p, c) => __awaiter(this, void 0, void 0, function* () { return c.decrypt(yield p); }), Promise.resolve(result));
            }
            return result;
        });
    }
    verifyAudience(audience) {
        return audience == undefined || typeof (audience) == "string" && audience == this.id || Array.isArray(audience) && audience.some(a => a == this.id);
    }
    authenticate(authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            return authorization && authorization.startsWith("Bearer ") ? this.verify(authorization.substr(7)) : undefined;
        });
    }
    static create(audience, ...algorithms) {
        return (algorithms.length == 0 || algorithms.some(a => !!a)) && new Verifier(audience, ...algorithms.filter(a => !!a)) || undefined;
    }
}
exports.Verifier = Verifier;

});

unwrapExports(Verifier_1);

var Identifier_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identifier = void 0;


var Identifier;
(function (Identifier) {
    function is(value, length) {
        return typeof (value) == "string" && (length == undefined || value.length == length) && Array.from(value).every(c => c >= "0" && c <= "9" || c >= "A" && c <= "Z" || c >= "a" && c <= "z" || c == "-" || c == "_");
    }
    Identifier.is = is;
    function fromBinary(identifier) {
        return Base64.encode(identifier, "url");
    }
    Identifier.fromBinary = fromBinary;
    function toBinary(identifier) {
        return Base64.decode(identifier, "url");
    }
    Identifier.toBinary = toBinary;
    function generate(length) {
        return fromBinary(crypto_browser.crypto.getRandomValues(new Uint8Array(length / 4 * 3)));
    }
    Identifier.generate = generate;
    function fromHexadecimal(identifier) {
        if (identifier.length % 2 == 1)
            identifier += "0";
        const result = new Uint8Array(identifier.length / 2);
        for (let index = 0; index < result.length; index++)
            result[index] = Number.parseInt(identifier[index * 2], 16) * 16 + Number.parseInt(identifier[index * 2 + 1], 16);
        return fromBinary(result);
    }
    Identifier.fromHexadecimal = fromHexadecimal;
    function toHexadecimal(identifier, length) {
        const data = Base64.decode(identifier, "url");
        let result = [];
        for (const d of data)
            result.push(Math.floor(d / 16).toString(16), (d % 16).toString(16));
        if (length)
            result = result.slice(0, length);
        return result.join("");
    }
    Identifier.toHexadecimal = toHexadecimal;
    Identifier.length = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128];
    let Length;
    (function (Length) {
        function is(value) {
            return typeof (value) == "number" &&
                value >= 4 &&
                value <= 128 &&
                (value & 252) == value;
        }
        Length.is = is;
    })(Length = Identifier.Length || (Identifier.Length = {}));
})(Identifier = exports.Identifier || (exports.Identifier = {}));

});

unwrapExports(Identifier_1);

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identifier = exports.Verifier = exports.Token = exports.TextEncoder = exports.TextDecoder = exports.PropertyCrypto = exports.Password = exports.Issuer = exports.Base64 = exports.Algorithm = exports.Actor = void 0;


Object.defineProperty(exports, "Actor", { enumerable: true, get: function () { return Actor_1.Actor; } });

Object.defineProperty(exports, "Algorithm", { enumerable: true, get: function () { return Algorithm.Algorithm; } });

exports.Base64 = Base64;

Object.defineProperty(exports, "Issuer", { enumerable: true, get: function () { return Issuer_1.Issuer; } });

Object.defineProperty(exports, "Password", { enumerable: true, get: function () { return Password_1.Password; } });

Object.defineProperty(exports, "PropertyCrypto", { enumerable: true, get: function () { return PropertyCrypto_1.PropertyCrypto; } });

Object.defineProperty(exports, "TextDecoder", { enumerable: true, get: function () { return TextDecoder_1.TextDecoder; } });

Object.defineProperty(exports, "TextEncoder", { enumerable: true, get: function () { return TextEncoder_1.TextEncoder; } });

Object.defineProperty(exports, "Token", { enumerable: true, get: function () { return Token_1.Token; } });

Object.defineProperty(exports, "Verifier", { enumerable: true, get: function () { return Verifier_1.Verifier; } });

Object.defineProperty(exports, "Identifier", { enumerable: true, get: function () { return Identifier_1.Identifier; } });

});

unwrapExports(dist);

var SE_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SE = void 0;
var SE;
(function (SE) {
    function is(value) {
        return typeof (value) == "object" &&
            typeof (value.street) == "string" &&
            typeof (value.zipCode) == "string" &&
            typeof (value.city) == "string" &&
            value.countryCode == "SE";
    }
    SE.is = is;
    function create() {
        return { street: "", zipCode: "", city: "", countryCode: "SE" };
    }
    SE.create = create;
})(SE = exports.SE || (exports.SE = {}));

});

unwrapExports(SE_1);

var FI_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.FI = void 0;
var FI;
(function (FI) {
    function is(value) {
        return typeof (value) == "object" &&
            typeof (value.street) == "string" &&
            typeof (value.zipCode) == "string" &&
            typeof (value.city) == "string" &&
            value.countryCode == "FI";
    }
    FI.is = is;
    function create() {
        return { street: "", zipCode: "", city: "", countryCode: "FI" };
    }
    FI.create = create;
})(FI = exports.FI || (exports.FI = {}));

});

unwrapExports(FI_1);

var Address_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;



var Address;
(function (Address) {
    function is(value) {
        return typeof (value) == "object" &&
            dist$2.CountryCode.Alpha2.is(value.countryCode) &&
            (value.countryCode == "FI" && FI_1.FI.is(value) ||
                value.countryCode == "SE" && SE_1.SE.is(value));
    }
    Address.is = is;
    function create(countryCode) {
        let result;
        switch (countryCode) {
            case "FI":
                result = FI_1.FI.create();
                break;
            default:
            case "SE":
                result = SE_1.SE.create();
                break;
        }
        return result;
    }
    Address.create = create;
    let FI;
    (function (FI) {
        FI.is = FI_1.FI.is;
        FI.create = FI_1.FI.create;
    })(FI = Address.FI || (Address.FI = {}));
    let SE;
    (function (SE) {
        SE.is = SE_1.SE.is;
        SE.create = SE_1.SE.create;
    })(SE = Address.SE || (Address.SE = {}));
})(Address = exports.Address || (exports.Address = {}));

});

unwrapExports(Address_1);

var Addresses_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addresses = void 0;

var Addresses;
(function (Addresses) {
    Addresses.types = ["primary", "billing", "delivery", "visit"];
    function is(value) {
        return typeof (value) == "object" &&
            (Address_1.Address.is(value.primary) || value.primary == undefined) &&
            (Address_1.Address.is(value.billing) || value.billing == undefined) &&
            (Address_1.Address.is(value.delivery) || value.delivery == undefined) &&
            (Address_1.Address.is(value.visit) || value.visit == undefined) &&
            (Address_1.Address.is(value.primary) || Address_1.Address.is(value.billing) || Address_1.Address.is(value.delivery) || Address_1.Address.is(value.visit));
    }
    Addresses.is = is;
    function get(value, ...type) {
        let result;
        if (Address_1.Address.is(value))
            result = value;
        else if (Addresses.is(value)) {
            if (type.length == 0)
                type = Addresses.types;
            for (const t of type) {
                switch (t) {
                    case "primary":
                        result = value.primary;
                        break;
                    case "billing":
                        result = value.billing;
                        break;
                    case "delivery":
                        result = value.delivery;
                        break;
                    case "visit":
                        result = value.visit;
                        break;
                }
                if (result)
                    break;
            }
        }
        return result;
    }
    Addresses.get = get;
    function map(addresses, mapping) {
        return Addresses.types.filter(type => addresses[type] != undefined).map(type => mapping(type, addresses[type]));
    }
    Addresses.map = map;
})(Addresses = exports.Addresses || (exports.Addresses = {}));

});

unwrapExports(Addresses_1);

var ClientIdentifier_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientIdentifier = void 0;

class ClientIdentifier {
    constructor() { }
    static get value() {
        ClientIdentifier.valueCache = localStorage.getItem("clientIdentifier") || undefined;
        if (!ClientIdentifier.valueCache) {
            ClientIdentifier.valueCache = dist.Identifier.generate(12);
            localStorage.setItem("clientIdentifier", ClientIdentifier.valueCache);
        }
        return ClientIdentifier.valueCache;
    }
}
exports.ClientIdentifier = ClientIdentifier;

});

unwrapExports(ClientIdentifier_1);

var EmailAddresses_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAddresses = void 0;
var EmailAddresses;
(function (EmailAddresses) {
    EmailAddresses.types = ["primary", "billing"];
    function is(value) {
        return typeof (value) == "object" &&
            (typeof (value.primary) == "string" || value.primary == undefined) &&
            (typeof (value.billing) == "string" || value.billing == undefined) &&
            (typeof (value.primary) == "string" || typeof (value.billing) == "string");
    }
    EmailAddresses.is = is;
    function get(value, ...type) {
        let result;
        if (typeof (value) == "string")
            result = value;
        else if (EmailAddresses.is(value)) {
            if (type.length == 0)
                type = EmailAddresses.types;
            for (const t of type) {
                switch (t) {
                    case "primary":
                        result = value.primary;
                        break;
                    case "billing":
                        result = value.billing;
                        break;
                }
                if (result)
                    break;
            }
        }
        return result;
    }
    EmailAddresses.get = get;
    function map(addresses, mapping) {
        return EmailAddresses.types.filter(type => addresses[type] != undefined).map(type => mapping(type, addresses[type]));
    }
    EmailAddresses.map = map;
})(EmailAddresses = exports.EmailAddresses || (exports.EmailAddresses = {}));

});

unwrapExports(EmailAddresses_1);

var Type_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type;
(function (Type) {
    function is(value) {
        return typeof (value) == "number" &&
            (value == 0 || value == 1 || value == 2 || value == 3 || value == 5 || value == 6 || value == 7 || value == 8 || value == 9);
    }
    Type.is = is;
    function parse(value) {
        const v = parseInt(value);
        return is(v) ? v : undefined;
    }
    Type.parse = parse;
})(Type = exports.Type || (exports.Type = {}));

});

unwrapExports(Type_1);

var SE_1$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SE = void 0;

var SE;
(function (SE) {
    function is(value) {
        return typeof (value) == "string" &&
            /^(16|18|19|20)?\d{10}$/.test(value) &&
            verifyChecksum(value);
    }
    SE.is = is;
    function is10(value) {
        return typeof (value) == "string" &&
            /\d{10}$/.test(value);
    }
    SE.is10 = is10;
    function is12(value) {
        return typeof (value) == "string" &&
            /^(16|18|19|20)\d{10}$/.test(value);
    }
    SE.is12 = is12;
    function as10(value) {
        return is12(value) ? value.substring(2) : value;
    }
    SE.as10 = as10;
    function isOrganisation(value) {
        return as10(value)[2] > "1";
    }
    SE.isOrganisation = isOrganisation;
    function isTemporary(value) {
        return !isOrganisation(value) && as10(value)[4] > "5";
    }
    SE.isTemporary = isTemporary;
    function type(value) {
        value = as10(value);
        return isOrganisation(value) ? Type_1.Type.parse(value[0]) || 0 : 0;
    }
    SE.type = type;
    function parse(value) {
        return /^(16|18|19|20)?(\d{6}([-+]|\s)\d{4})$/.test(value) ? value.substring(0, value.length - 5) + value.substring(value.length - 4) :
            SE.is(value) ? value :
                undefined;
    }
    SE.parse = parse;
    function format(value) {
        return value.substring(0, value.length - 4) + "-" + value.substring(value.length - 4);
    }
    SE.format = format;
    function calculateChecksum(value) {
        value = as10(value);
        let sum = 0;
        let index = 0;
        while (true) {
            const v = Number.parseInt(value[index++]) * 2;
            sum += v < 10 ? v : 1 + v - 10;
            if (index >= 9)
                break;
            sum += Number.parseInt(value[index++]);
        }
        return (10 - (sum % 10)) % 10;
    }
    SE.calculateChecksum = calculateChecksum;
    function verifyChecksum(value) {
        value = as10(value);
        return Number.parseInt(value[9]) == calculateChecksum(value);
    }
    SE.verifyChecksum = verifyChecksum;
})(SE = exports.SE || (exports.SE = {}));

});

unwrapExports(SE_1$1);

var IdentityNumber_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityNumber = void 0;

var IdentityNumber;
(function (IdentityNumber) {
    function is(value, countryCode) {
        return countryCode == "SE" && SE_1$1.SE.is(value) ||
            countryCode == undefined && SE_1$1.SE.is(value);
    }
    IdentityNumber.is = is;
    let SE;
    (function (SE) {
        SE.is = SE_1$1.SE.is;
        SE.is10 = SE_1$1.SE.is10;
        SE.is12 = SE_1$1.SE.is12;
        SE.as10 = SE_1$1.SE.as10;
        SE.isOrganisation = SE_1$1.SE.isOrganisation;
        SE.isTemporary = SE_1$1.SE.isTemporary;
        SE.type = SE_1$1.SE.type;
        SE.parse = SE_1$1.SE.parse;
        SE.format = SE_1$1.SE.format;
        SE.calculateChecksum = SE_1$1.SE.calculateChecksum;
        SE.verifyChecksum = SE_1$1.SE.verifyChecksum;
    })(SE = IdentityNumber.SE || (IdentityNumber.SE = {}));
})(IdentityNumber = exports.IdentityNumber || (exports.IdentityNumber = {}));

});

unwrapExports(IdentityNumber_1);

var Message_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    static is(value) {
        return typeof (value) == "object" &&
            typeof (value.destination) == "string" &&
            value.content != undefined;
    }
    static send(message, content, context) {
        if (Message.is(message) && context == undefined) {
            context = content;
            if (!context)
                context = window;
            const destination = message.destination.split("#", 2);
            message = { destination: destination[1], content: message.content };
            context.postMessage(message, destination[0]);
        }
        else if (typeof (context) != "string") {
            if (!context)
                context = window;
            if (typeof (message) == "string")
                Message.send({ destination: message, content }, context);
        }
    }
    static listen(origin, handle, context) {
        const splitted = origin.split("#", 2);
        let destination = "";
        if (splitted.length == 2) {
            origin = splitted[0];
            destination = splitted[1];
        }
        (context || window).addEventListener("message", (e) => {
            const message = e.data;
            if (Message.is(message) && (origin == "*" || e.origin == origin) && (destination == "" || message.destination == destination))
                handle(message.destination, message.content);
        });
    }
}
exports.Message = Message;

});

unwrapExports(Message_1);

var Name_1$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
var Name;
(function (Name) {
    function is(value) {
        return (typeof (value.first) == "string" || value.first == undefined) &&
            (typeof (value.last) == "string" || value.last == undefined);
    }
    Name.is = is;
    function get(name) {
        return typeof (name) == "string" ? name :
            typeof (name) == "object" ? [name.first, name.last].filter(n => !!n).join(" ") :
                "";
    }
    Name.get = get;
})(Name = exports.Name || (exports.Name = {}));

});

unwrapExports(Name_1$1);

var PhoneNumbers_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumbers = void 0;
var PhoneNumbers;
(function (PhoneNumbers) {
    PhoneNumbers.types = ["primary", "cellphone", "landline"];
    function is(value) {
        return typeof (value) == "object" &&
            (typeof (value.primary) == "string" || value.primary == undefined) &&
            (typeof (value.cellphone) == "string" || value.cellphone == undefined) &&
            (typeof (value.landline) == "string" || value.landline == undefined) &&
            (value.primary || value.cellphone || value.landline);
    }
    PhoneNumbers.is = is;
    function get(value, ...type) {
        let result;
        if (typeof (value) == "string")
            result = value;
        else if (PhoneNumbers.is(value)) {
            if (type.length == 0)
                type = PhoneNumbers.types;
            for (const t of type) {
                switch (t) {
                    case "primary":
                        result = value.primary;
                        break;
                    case "cellphone":
                        result = value.cellphone;
                        break;
                    case "landline":
                        result = value.landline;
                        break;
                }
                if (result)
                    break;
            }
        }
        return result;
    }
    PhoneNumbers.get = get;
    function map(numbers, mapping) {
        return PhoneNumbers.types.filter(type => numbers[type] != undefined).map(type => mapping(type, numbers[type]));
    }
    PhoneNumbers.map = map;
})(PhoneNumbers = exports.PhoneNumbers || (exports.PhoneNumbers = {}));

});

unwrapExports(PhoneNumbers_1);

var Trigger_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trigger = void 0;
class Trigger {
    static is(value) {
        return typeof (value) == "object" &&
            typeof (value.name) == "string";
    }
}
exports.Trigger = Trigger;

});

unwrapExports(Trigger_1);

var Type_1$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type;
(function (Type) {
    function is(value) {
        return typeof (value) == "string" && (value == "button" ||
            value == "checkbox" ||
            value == "color" ||
            value == "date" ||
            value == "datetime-local" ||
            value == "email" ||
            value == "file" ||
            value == "hidden" ||
            value == "image" ||
            value == "month" ||
            value == "number" ||
            value == "password" ||
            value == "radio" ||
            value == "range" ||
            value == "reset" ||
            value == "search" ||
            value == "submit" ||
            value == "tel" ||
            value == "text" ||
            value == "time" ||
            value == "url" ||
            value == "week");
    }
    Type.is = is;
    function as(value, fallback = "text") {
        return Type.is(value) ? value : fallback;
    }
    Type.as = as;
})(Type = exports.Type || (exports.Type = {}));

});

unwrapExports(Type_1$1);

var Notice_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = void 0;
var Notice;
(function (Notice) {
    function is(value) {
        return typeof (value) == "object" &&
            (value.type == "success" || value.type == "warning" || value.type == "danger" || value.type == "default") &&
            typeof (value.message) == "string" &&
            (value.remain == undefined || value.remain == true) &&
            (value.timeout == undefined || typeof (value.timeout) == "number");
    }
    Notice.is = is;
})(Notice = exports.Notice || (exports.Notice = {}));

});

unwrapExports(Notice_1);

var dist$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = exports.Type = exports.Trigger = exports.PhoneNumbers = exports.Name = exports.Message = exports.IdentityNumber = exports.EmailAddresses = exports.ClientIdentifier = exports.Addresses = exports.Address = void 0;

Object.defineProperty(exports, "Address", { enumerable: true, get: function () { return Address_1.Address; } });

Object.defineProperty(exports, "Addresses", { enumerable: true, get: function () { return Addresses_1.Addresses; } });

Object.defineProperty(exports, "ClientIdentifier", { enumerable: true, get: function () { return ClientIdentifier_1.ClientIdentifier; } });

Object.defineProperty(exports, "EmailAddresses", { enumerable: true, get: function () { return EmailAddresses_1.EmailAddresses; } });

Object.defineProperty(exports, "IdentityNumber", { enumerable: true, get: function () { return IdentityNumber_1.IdentityNumber; } });

Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return Message_1.Message; } });

Object.defineProperty(exports, "Name", { enumerable: true, get: function () { return Name_1$1.Name; } });

Object.defineProperty(exports, "PhoneNumbers", { enumerable: true, get: function () { return PhoneNumbers_1.PhoneNumbers; } });

Object.defineProperty(exports, "Trigger", { enumerable: true, get: function () { return Trigger_1.Trigger; } });

Object.defineProperty(exports, "Type", { enumerable: true, get: function () { return Type_1$1.Type; } });

Object.defineProperty(exports, "Notice", { enumerable: true, get: function () { return Notice_1.Notice; } });

});

unwrapExports(dist$1);
var dist_1 = dist$1.Notice;
var dist_3 = dist$1.Trigger;
var dist_6 = dist$1.Message;
var dist_10 = dist$1.Addresses;
var dist_11 = dist$1.Address;

export { dist_3 as a, dist_6 as b, dist_11 as c, dist as d, dist_10 as e, dist_1 as f };
