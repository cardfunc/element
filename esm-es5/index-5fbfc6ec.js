var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { c as createCommonjsModule, u as unwrapExports, a as commonjsGlobal, d as dist$2 } from './index-e351faa0.js';
if (!Uint8Array.__proto__.from) {
    (function () {
        Uint8Array.__proto__.from = function (object, theFunction, thisObject) {
            var typedArrayClass = Uint8Array.__proto__;
            if (typeof this !== 'function') {
                throw new TypeError('# is not a constructor');
            }
            if (this.__proto__ !== typedArrayClass) {
                throw new TypeError('this is not a typed array.');
            }
            theFunction = theFunction || (function (element) { return element; });
            if (typeof theFunction !== 'function') {
                throw new TypeError('specified argument is not a function');
            }
            object = Object(object);
            if (!object.length) {
                return new this(0);
            }
            var copyData = [];
            for (var _i = 0, copyData_1 = copyData; _i < copyData_1.length; _i++) {
                var data = copyData_1[_i];
                copyData.push(data);
            }
            copyData = copyData.map(theFunction, thisObject);
            var typedArray = new this(copyData.length);
            for (var i = 0; i < typedArray.length; i++) {
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
    var TextEncoder = /** @class */ (function () {
        function TextEncoder() {
            this.encoding = "utf-8";
        }
        TextEncoder.prototype.encode = function (data) {
            return Uint8Array.from(unescape(encodeURIComponent(data)).split(""), function (c) { return c.charCodeAt(0); });
        };
        return TextEncoder;
    }());
    exports.TextEncoder = TextEncoder;
});
unwrapExports(TextEncoder_1);
var Base64 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decode = exports.encode = void 0;
    var tables = {
        standard: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        url: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    };
    function encode(value, standard, padding) {
        if (standard === void 0) { standard = "standard"; }
        if (padding === void 0) { padding = ""; }
        if (typeof (value) == "string")
            value = new TextEncoder_1.TextEncoder().encode(value);
        var table = tables[standard];
        var result = [];
        for (var c = 0; c < value.length; c += 3) {
            var c0 = value[c];
            var c1 = c + 1 < value.length ? value[c + 1] : 0;
            var c2 = c + 2 < value.length ? value[c + 2] : 0;
            result.push(table[c0 >>> 2]);
            result.push(table[(c0 & 3) << 4 | (c1 >>> 4)]);
            result.push(table[((c1 & 15) << 2) | (c2 >>> 6)]);
            result.push(table[c2 & 63]);
        }
        var length = Math.ceil(value.length / 3 * 4);
        return result.join("").substr(0, length) + padding.repeat(result.length - length);
    }
    exports.encode = encode;
    function decode(value, standard) {
        if (standard === void 0) { standard = "standard"; }
        while (value.endsWith("=") && value.length > 0)
            value = value.substr(0, value.length - 1);
        var table = tables[standard];
        var data = value.split("").map(function (c) { return table.indexOf(c); });
        var result = new Uint8Array(Math.floor(data.length / 4 * 3));
        for (var c = 0; c < result.length; c += 3) {
            var d0 = data.shift() || 0;
            var d1 = data.shift() || 0;
            var d2 = data.shift() || 0;
            var d3 = data.shift() || 0;
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
    var TextDecoder = /** @class */ (function () {
        function TextDecoder() {
            this.encoding = "utf-8";
        }
        TextDecoder.prototype.decode = function (view, options) {
            return !view ? "" : decodeURIComponent(escape(Array.from(new Uint8Array(view.buffer, view.byteOffset, view.byteLength), function (c) { return String.fromCharCode(c); }).join("")));
        };
        return TextDecoder;
    }());
    exports.TextDecoder = TextDecoder;
});
unwrapExports(TextDecoder_1);
var PropertyCrypto_1 = createCommonjsModule(function (module, exports) {
    var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PropertyCrypto = void 0;
    var PropertyCrypto = /** @class */ (function () {
        function PropertyCrypto(secret) {
            var properties = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                properties[_i - 1] = arguments[_i];
            }
            this.secret = secret;
            this.encoder = new TextEncoder_1.TextEncoder();
            this.decoder = new TextDecoder_1.TextDecoder();
            this.properties = properties.map(function (p) { return p.split("."); });
        }
        PropertyCrypto.prototype.encrypt = function (payload) {
            var _this = this;
            return this.process(payload, function (value) { return _this.encoder.encode(JSON.stringify(value)); }, function (value) { return Base64.encode(value, "url"); });
        };
        PropertyCrypto.prototype.decrypt = function (payload) {
            var _this = this;
            return this.process(payload, function (value) { return typeof (value) == "string" ? Base64.decode(value, "url") : new Uint8Array(); }, function (value) { return JSON.parse(_this.decoder.decode(value)); });
        };
        PropertyCrypto.prototype.process = function (payload, preprocess, postprocess) {
            return __awaiter(this, void 0, void 0, function () {
                var secret, _i, _b, property;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            secret = this.secret + payload.sub + payload.iat;
                            _i = 0, _b = this.properties;
                            _c.label = 1;
                        case 1:
                            if (!(_i < _b.length)) return [3 /*break*/, 4];
                            property = _b[_i];
                            return [4 /*yield*/, this.processProperty(payload, property, secret + property.join("."), preprocess, postprocess)];
                        case 2:
                            payload = _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/, payload];
                    }
                });
            });
        };
        PropertyCrypto.prototype.processProperty = function (payload, property, secret, preprocess, postprocess) {
            return __awaiter(this, void 0, void 0, function () {
                var result, data, key, _b, processed, index, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            result = Object.assign({}, payload);
                            if (!result[property[0]]) return [3 /*break*/, 4];
                            if (!(property.length == 1)) return [3 /*break*/, 2];
                            data = preprocess(payload[property[0]]);
                            _b = Uint8Array.bind;
                            return [4 /*yield*/, crypto_browser.crypto.subtle.digest("SHA-512", this.encoder.encode(secret))];
                        case 1:
                            key = new (_b.apply(Uint8Array, [void 0, _e.sent()]))();
                            processed = new Uint8Array(data.length);
                            for (index = 0; index < data.length; index++)
                                processed[index] = data[index] ^ key[index];
                            result[property[0]] = postprocess(processed);
                            return [3 /*break*/, 4];
                        case 2:
                            _c = result;
                            _d = property[0];
                            return [4 /*yield*/, this.processProperty(result[property[0]], property.slice(1), secret, preprocess, postprocess)];
                        case 3:
                            _c[_d] = _e.sent();
                            _e.label = 4;
                        case 4: return [2 /*return*/, result];
                    }
                });
            });
        };
        PropertyCrypto.create = function (secret) {
            var properties = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                properties[_i - 1] = arguments[_i];
            }
            return secret && new (PropertyCrypto.bind.apply(PropertyCrypto, __spreadArrays([void 0, secret], properties)))() || undefined;
        };
        return PropertyCrypto;
    }());
    exports.PropertyCrypto = PropertyCrypto;
});
unwrapExports(PropertyCrypto_1);
var Actor_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Actor = void 0;
    var Actor = /** @class */ (function () {
        function Actor(id) {
            this.id = id;
            this.cryptos = [];
        }
        Actor.prototype.add = function (secret) {
            var _b;
            var properties = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                properties[_i - 1] = arguments[_i];
            }
            var crypto = (_b = PropertyCrypto_1.PropertyCrypto).create.apply(_b, __spreadArrays([secret], properties));
            if (crypto)
                this.cryptos.push(crypto);
            return this;
        };
        return Actor;
    }());
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
        var Symmetric;
        (function (Symmetric) {
            Symmetric.is = Symmetric_1.Symmetric.is;
        })(Symmetric = Name.Symmetric || (Name.Symmetric = {}));
        var Asymmetric;
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
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.register = exports.Algorithm = void 0;
    var Algorithm = /** @class */ (function () {
        function Algorithm() {
        }
        Algorithm.prototype.sign = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            if (!(typeof (data) == "string")) return [3 /*break*/, 2];
                            _d = (_c = Base64).encode;
                            return [4 /*yield*/, this.signBinary(new TextEncoder_1.TextEncoder().encode(data))];
                        case 1:
                            _b = _d.apply(_c, [_e.sent(), "url"]);
                            return [3 /*break*/, 3];
                        case 2:
                            _b = this.signBinary(data);
                            _e.label = 3;
                        case 3: return [2 /*return*/, _b];
                    }
                });
            });
        };
        Algorithm.prototype.verify = function (data, signature) {
            if (typeof (signature) == "string")
                signature = Base64.decode(signature, "url");
            return typeof (data) == "string" ? this.verifyBinary(new TextEncoder_1.TextEncoder().encode(data), signature) : this.verifyBinary(data, signature);
        };
        Algorithm.create = function (name, publicKey, privateKey) {
            var create = algorithms[name];
            return create && create([publicKey, privateKey]);
        };
        Algorithm.none = function () {
            return Algorithm.create("none");
        };
        Algorithm.HS256 = function (key) {
            return Algorithm.create("HS256", key);
        };
        Algorithm.HS384 = function (key) {
            return Algorithm.create("HS384", key);
        };
        Algorithm.HS512 = function (key) {
            return Algorithm.create("HS512", key);
        };
        Algorithm.RS256 = function (publicKey, privateKey) {
            return Algorithm.create("RS256", publicKey, privateKey);
        };
        Algorithm.RS384 = function (publicKey, privateKey) {
            return Algorithm.create("RS384", publicKey, privateKey);
        };
        Algorithm.RS512 = function (publicKey, privateKey) {
            return Algorithm.create("RS512", publicKey, privateKey);
        };
        Algorithm.ES256 = function (publicKey, privateKey) {
            return Algorithm.create("ES256", publicKey, privateKey);
        };
        Algorithm.ES384 = function (publicKey, privateKey) {
            return Algorithm.create("ES384", publicKey, privateKey);
        };
        Algorithm.ES512 = function (publicKey, privateKey) {
            return Algorithm.create("ES512", publicKey, privateKey);
        };
        Algorithm.PS256 = function (publicKey, privateKey) {
            return Algorithm.create("PS256", publicKey, privateKey);
        };
        Algorithm.PS384 = function (publicKey, privateKey) {
            return Algorithm.create("PS384", publicKey, privateKey);
        };
        Algorithm.PS512 = function (publicKey, privateKey) {
            return Algorithm.create("PS512", publicKey, privateKey);
        };
        return Algorithm;
    }());
    exports.Algorithm = Algorithm;
    var algorithms = {};
    function register(name, create) {
        algorithms[name] = create;
    }
    exports.register = register;
    (function (Algorithm) {
        var Name;
        (function (Name) {
            Name.is = Name_1.Name.is;
            var Symmetric;
            (function (Symmetric) {
                Symmetric.is = Name_1.Name.Symmetric.is;
            })(Symmetric = Name.Symmetric || (Name.Symmetric = {}));
            var Asymmetric;
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
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Symmetric = void 0;
    var Symmetric = /** @class */ (function (_super) {
        __extends(Symmetric, _super);
        function Symmetric() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Symmetric.prototype.verifyBinary = function (data, signature) {
            return __awaiter(this, void 0, void 0, function () {
                var _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _c = (_b = Base64).encode;
                            return [4 /*yield*/, this.signBinary(data)];
                        case 1: return [2 /*return*/, _c.apply(_b, [_d.sent(), "url"]) == Base64.encode(signature, "url")];
                    }
                });
            });
        };
        return Symmetric;
    }(Algorithm_1.Algorithm));
    exports.Symmetric = Symmetric;
});
unwrapExports(Symmetric_1$1);
var None_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.None = void 0;
    var None = /** @class */ (function (_super) {
        __extends(None, _super);
        function None() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(None.prototype, "name", {
            get: function () { return "none"; },
            enumerable: false,
            configurable: true
        });
        None.prototype.signBinary = function (_) { return Promise.resolve(new Uint8Array(0)); };
        return None;
    }(Symmetric_1$1.Symmetric));
    exports.None = None;
    Algorithm_1.register("none", function (_) { return new None(); });
});
unwrapExports(None_1);
var HS_1 = createCommonjsModule(function (module, exports) {
    var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HS = void 0;
    var HS = /** @class */ (function (_super) {
        __extends(HS, _super);
        function HS(length, key) {
            var _this = _super.call(this) || this;
            _this.length = length;
            if (typeof (key) == "string")
                key = Base64.decode(key, "url");
            _this.key = crypto_browser.crypto.subtle.importKey("raw", key, { name: "HMAC", hash: { name: "SHA-" + _this.length } }, false, ["sign", "verify"]);
            return _this;
        }
        Object.defineProperty(HS.prototype, "name", {
            get: function () { return "HS" + this.length; },
            enumerable: false,
            configurable: true
        });
        HS.prototype.signBinary = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            _b = Uint8Array.bind;
                            _d = (_c = crypto_browser.crypto.subtle).sign;
                            _e = ["HMAC"];
                            return [4 /*yield*/, this.key];
                        case 1: return [4 /*yield*/, _d.apply(_c, _e.concat([_f.sent(), data]))];
                        case 2: return [2 /*return*/, new (_b.apply(Uint8Array, [void 0, _f.sent()]))()];
                    }
                });
            });
        };
        return HS;
    }(Symmetric_1$1.Symmetric));
    exports.HS = HS;
    Algorithm_1.register("HS256", function (keys) { return keys[0] && new HS("256", keys[0]) || undefined; });
    Algorithm_1.register("HS384", function (keys) { return keys[0] && new HS("384", keys[0]) || undefined; });
    Algorithm_1.register("HS512", function (keys) { return keys[0] && new HS("512", keys[0]) || undefined; });
});
unwrapExports(HS_1);
var RS_1 = createCommonjsModule(function (module, exports) {
    var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RS = void 0;
    var RS = /** @class */ (function (_super) {
        __extends(RS, _super);
        function RS(length, publicKey, privateKey) {
            var _this = _super.call(this) || this;
            _this.length = length;
            if (publicKey) {
                if (typeof (publicKey) == "string")
                    publicKey = Base64.decode(publicKey);
                _this.publicKey = crypto_browser.crypto.subtle.importKey("spki", publicKey, { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-" + _this.length } }, false, ["verify"]);
            }
            if (privateKey) {
                if (typeof (privateKey) == "string")
                    privateKey = Base64.decode(privateKey);
                _this.privateKey = crypto_browser.crypto.subtle.importKey("pkcs8", privateKey, { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-" + _this.length } }, true, ["sign", "verify"]);
            }
            return _this;
        }
        Object.defineProperty(RS.prototype, "name", {
            get: function () { return "RS" + this.length; },
            enumerable: false,
            configurable: true
        });
        RS.prototype.signBinary = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            _b = Uint8Array.bind;
                            _d = (_c = crypto_browser.crypto.subtle).sign;
                            _e = ["RSASSA-PKCS1-v1_5"];
                            return [4 /*yield*/, this.privateKey];
                        case 1: return [4 /*yield*/, _d.apply(_c, _e.concat([_f.sent(), data]))];
                        case 2: return [2 /*return*/, new (_b.apply(Uint8Array, [void 0, _f.sent()]))()];
                    }
                });
            });
        };
        RS.prototype.verifyBinary = function (data, signature) {
            return __awaiter(this, void 0, void 0, function () {
                var _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _c = (_b = crypto_browser.crypto.subtle).verify;
                            _d = ["RSASSA-PKCS1-v1_5"];
                            return [4 /*yield*/, this.publicKey];
                        case 1: return [2 /*return*/, _c.apply(_b, _d.concat([_e.sent(), signature, data]))];
                    }
                });
            });
        };
        return RS;
    }(Algorithm_1.Algorithm));
    exports.RS = RS;
    Algorithm_1.register("RS256", function (keys) { return new RS("256", keys[0], keys[1]); });
    Algorithm_1.register("RS384", function (keys) { return new RS("384", keys[0], keys[1]); });
    Algorithm_1.register("RS512", function (keys) { return new RS("512", keys[0], keys[1]); });
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
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Issuer = void 0;
    var Issuer = /** @class */ (function (_super) {
        __extends(Issuer, _super);
        function Issuer(issuer, algorithm) {
            var _this = _super.call(this, issuer) || this;
            _this.algorithm = algorithm;
            return _this;
        }
        Object.defineProperty(Issuer.prototype, "header", {
            get: function () {
                return {
                    alg: this.algorithm.name,
                    typ: "JWT",
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Issuer.prototype, "payload", {
            get: function () {
                var result = { iss: this.id, iat: Issuer.issuedAt };
                if (this.audience)
                    result.aud = this.audience;
                if (this.duration && result.iat)
                    result.exp = result.iat + this.duration;
                return result;
            },
            enumerable: false,
            configurable: true
        });
        Issuer.prototype.sign = function (payload, issuedAt) {
            return __awaiter(this, void 0, void 0, function () {
                var data, _b;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            payload = Object.assign(Object.assign({}, this.payload), payload);
                            if (issuedAt)
                                payload.iat = typeof (issuedAt) == "number" ? issuedAt : issuedAt.getTime();
                            return [4 /*yield*/, this.cryptos.reduce(function (p, c) { return __awaiter(_this, void 0, void 0, function () { var _b, _c; return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            _c = (_b = c).encrypt;
                                            return [4 /*yield*/, p];
                                        case 1: return [2 /*return*/, _c.apply(_b, [_d.sent()])];
                                    }
                                }); }); }, Promise.resolve(payload))];
                        case 1:
                            payload = _c.sent();
                            data = Base64.encode(new TextEncoder_1.TextEncoder().encode(JSON.stringify(this.header)), "url") + "." + Base64.encode(new TextEncoder_1.TextEncoder().encode(JSON.stringify(payload)), "url");
                            _b = data + ".";
                            return [4 /*yield*/, this.algorithm.sign(data)];
                        case 2: return [2 /*return*/, _b + (_c.sent())];
                    }
                });
            });
        };
        Object.defineProperty(Issuer, "issuedAt", {
            get: function () {
                return Issuer.defaultIssuedAt == undefined ? Date.now() :
                    typeof (Issuer.defaultIssuedAt) == "number" ? Issuer.defaultIssuedAt :
                        Issuer.defaultIssuedAt.getTime();
            },
            enumerable: false,
            configurable: true
        });
        Issuer.create = function (issuer, algorithm) {
            return algorithm && new Issuer(issuer, algorithm) || undefined;
        };
        return Issuer;
    }(Actor_1.Actor));
    exports.Issuer = Issuer;
});
unwrapExports(Issuer_1);
var Password_1 = createCommonjsModule(function (module, exports) {
    var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
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
            return __awaiter(this, void 0, void 0, function () {
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!salt)
                                salt = Base64.encode(crypto_browser.crypto.getRandomValues(new Uint8Array(64)));
                            _b = {};
                            return [4 /*yield*/, algorithm.sign(salt + password)];
                        case 1: return [2 /*return*/, (_b.hash = _c.sent(),
                                _b.salt = salt,
                                _b)];
                    }
                });
            });
        }
        Password.hash = hash;
        function verify(algorithm, hash, password) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Password.hash(algorithm, password, hash.salt)];
                        case 1: return [2 /*return*/, (_b.sent()).hash == hash.hash];
                    }
                });
            });
        }
        Password.verify = verify;
        var Hashed;
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
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Verifier = void 0;
    var Verifier = /** @class */ (function (_super) {
        __extends(Verifier, _super);
        function Verifier(audience) {
            var algorithms = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                algorithms[_i - 1] = arguments[_i];
            }
            var _this = _super.call(this, audience) || this;
            if (algorithms.length > 0) {
                _this.algorithms = {};
                for (var _b = 0, algorithms_1 = algorithms; _b < algorithms_1.length; _b++) {
                    var algorithm = algorithms_1[_b];
                    _this.algorithms[algorithm.name] = algorithm;
                }
            }
            else
                _this.algorithms = undefined;
            return _this;
        }
        Verifier.prototype.verify = function (token) {
            return __awaiter(this, void 0, void 0, function () {
                var result, splitted, oldDecoder, header, algorithm, _b, _a_1, now;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!token) return [3 /*break*/, 9];
                            splitted = token.split(".", 3);
                            if (!(splitted.length < 2)) return [3 /*break*/, 1];
                            result = undefined;
                            return [3 /*break*/, 7];
                        case 1:
                            _c.trys.push([1, 5, , 6]);
                            oldDecoder = token.includes("/") || token.includes("+");
                            header = JSON.parse(new TextDecoder_1.TextDecoder().decode(Base64.decode(splitted[0], oldDecoder ? "standard" : "url")));
                            result = JSON.parse(new TextDecoder_1.TextDecoder().decode(Base64.decode(splitted[1], oldDecoder ? "standard" : "url")));
                            if (!this.algorithms) return [3 /*break*/, 4];
                            algorithm = this.algorithms[header.alg];
                            _b = splitted.length == 3 && algorithm;
                            if (!_b) return [3 /*break*/, 3];
                            return [4 /*yield*/, algorithm.verify(splitted[0] + "." + splitted[1], splitted[2])];
                        case 2:
                            _b = (_c.sent());
                            _c.label = 3;
                        case 3:
                            result = _b ? result : undefined;
                            _c.label = 4;
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            _a_1 = _c.sent();
                            result = undefined;
                            return [3 /*break*/, 6];
                        case 6:
                            now = Date.now();
                            result = result &&
                                (result.exp == undefined || result.exp > now) &&
                                (result.iat == undefined || result.iat <= now) &&
                                this.verifyAudience(result.aud) ?
                                result : undefined;
                            _c.label = 7;
                        case 7:
                            if (!result) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.cryptos.reduce(function (p, c) { return __awaiter(_this, void 0, void 0, function () { var _b, _c; return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            _c = (_b = c).decrypt;
                                            return [4 /*yield*/, p];
                                        case 1: return [2 /*return*/, _c.apply(_b, [_d.sent()])];
                                    }
                                }); }); }, Promise.resolve(result))];
                        case 8:
                            result = _c.sent();
                            _c.label = 9;
                        case 9: return [2 /*return*/, result];
                    }
                });
            });
        };
        Verifier.prototype.verifyAudience = function (audience) {
            var _this = this;
            return audience == undefined || typeof (audience) == "string" && audience == this.id || Array.isArray(audience) && audience.some(function (a) { return a == _this.id; });
        };
        Verifier.prototype.authenticate = function (authorization) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, authorization && authorization.startsWith("Bearer ") ? this.verify(authorization.substr(7)) : undefined];
                });
            });
        };
        Verifier.create = function (audience) {
            var algorithms = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                algorithms[_i - 1] = arguments[_i];
            }
            return (algorithms.length == 0 || algorithms.some(function (a) { return !!a; })) && new (Verifier.bind.apply(Verifier, __spreadArrays([void 0, audience], algorithms.filter(function (a) { return !!a; }))))() || undefined;
        };
        return Verifier;
    }(Actor_1.Actor));
    exports.Verifier = Verifier;
});
unwrapExports(Verifier_1);
var Identifier_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Identifier = void 0;
    var Identifier;
    (function (Identifier) {
        function is(value, length) {
            return typeof (value) == "string" && (length == undefined || value.length == length) && Array.from(value).every(function (c) { return c >= "0" && c <= "9" || c >= "A" && c <= "Z" || c >= "a" && c <= "z" || c == "-" || c == "_"; });
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
            var result = new Uint8Array(identifier.length / 2);
            for (var index = 0; index < result.length; index++)
                result[index] = Number.parseInt(identifier[index * 2], 16) * 16 + Number.parseInt(identifier[index * 2 + 1], 16);
            return fromBinary(result);
        }
        Identifier.fromHexadecimal = fromHexadecimal;
        function toHexadecimal(identifier, length) {
            var data = Base64.decode(identifier, "url");
            var result = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var d = data_1[_i];
                result.push(Math.floor(d / 16).toString(16), (d % 16).toString(16));
            }
            if (length)
                result = result.slice(0, length);
            return result.join("");
        }
        Identifier.toHexadecimal = toHexadecimal;
        Identifier.length = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128];
        var Length;
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
            var result;
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
        var FI;
        (function (FI) {
            FI.is = FI_1.FI.is;
            FI.create = FI_1.FI.create;
        })(FI = Address.FI || (Address.FI = {}));
        var SE;
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
        function get(value) {
            var type = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                type[_i - 1] = arguments[_i];
            }
            var result;
            if (Address_1.Address.is(value))
                result = value;
            else if (Addresses.is(value)) {
                if (type.length == 0)
                    type = Addresses.types;
                for (var _b = 0, type_1 = type; _b < type_1.length; _b++) {
                    var t = type_1[_b];
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
            return Addresses.types.filter(function (type) { return addresses[type] != undefined; }).map(function (type) { return mapping(type, addresses[type]); });
        }
        Addresses.map = map;
    })(Addresses = exports.Addresses || (exports.Addresses = {}));
});
unwrapExports(Addresses_1);
var ClientIdentifier_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClientIdentifier = void 0;
    var ClientIdentifier = /** @class */ (function () {
        function ClientIdentifier() {
        }
        Object.defineProperty(ClientIdentifier, "value", {
            get: function () {
                ClientIdentifier.valueCache = localStorage.getItem("clientIdentifier") || undefined;
                if (!ClientIdentifier.valueCache) {
                    ClientIdentifier.valueCache = dist.Identifier.generate(12);
                    localStorage.setItem("clientIdentifier", ClientIdentifier.valueCache);
                }
                return ClientIdentifier.valueCache;
            },
            enumerable: false,
            configurable: true
        });
        return ClientIdentifier;
    }());
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
        function get(value) {
            var type = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                type[_i - 1] = arguments[_i];
            }
            var result;
            if (typeof (value) == "string")
                result = value;
            else if (EmailAddresses.is(value)) {
                if (type.length == 0)
                    type = EmailAddresses.types;
                for (var _b = 0, type_2 = type; _b < type_2.length; _b++) {
                    var t = type_2[_b];
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
            return EmailAddresses.types.filter(function (type) { return addresses[type] != undefined; }).map(function (type) { return mapping(type, addresses[type]); });
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
            var v = parseInt(value);
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
            var sum = 0;
            var index = 0;
            while (true) {
                var v = Number.parseInt(value[index++]) * 2;
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
        var SE;
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
    var Message = /** @class */ (function () {
        function Message() {
        }
        Message.is = function (value) {
            return typeof (value) == "object" &&
                typeof (value.destination) == "string" &&
                value.content != undefined;
        };
        Message.send = function (message, content, context) {
            if (Message.is(message) && context == undefined) {
                context = content;
                if (!context)
                    context = window;
                var destination = message.destination.split("#", 2);
                message = { destination: destination[1], content: message.content };
                context.postMessage(message, destination[0]);
            }
            else if (typeof (context) != "string") {
                if (!context)
                    context = window;
                if (typeof (message) == "string")
                    Message.send({ destination: message, content: content }, context);
            }
        };
        Message.listen = function (origin, handle, context) {
            var splitted = origin.split("#", 2);
            var destination = "";
            if (splitted.length == 2) {
                origin = splitted[0];
                destination = splitted[1];
            }
            (context || window).addEventListener("message", function (e) {
                var message = e.data;
                if (Message.is(message) && (origin == "*" || e.origin == origin) && (destination == "" || message.destination == destination))
                    handle(message.destination, message.content);
            });
        };
        return Message;
    }());
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
                typeof (name) == "object" ? [name.first, name.last].filter(function (n) { return !!n; }).join(" ") :
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
        function get(value) {
            var type = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                type[_i - 1] = arguments[_i];
            }
            var result;
            if (typeof (value) == "string")
                result = value;
            else if (PhoneNumbers.is(value)) {
                if (type.length == 0)
                    type = PhoneNumbers.types;
                for (var _b = 0, type_3 = type; _b < type_3.length; _b++) {
                    var t = type_3[_b];
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
            return PhoneNumbers.types.filter(function (type) { return numbers[type] != undefined; }).map(function (type) { return mapping(type, numbers[type]); });
        }
        PhoneNumbers.map = map;
    })(PhoneNumbers = exports.PhoneNumbers || (exports.PhoneNumbers = {}));
});
unwrapExports(PhoneNumbers_1);
var Trigger_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Trigger = void 0;
    var Trigger = /** @class */ (function () {
        function Trigger() {
        }
        Trigger.is = function (value) {
            return typeof (value) == "object" &&
                typeof (value.name) == "string";
        };
        return Trigger;
    }());
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
        function as(value, fallback) {
            if (fallback === void 0) { fallback = "text"; }
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
