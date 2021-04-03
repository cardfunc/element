import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-ef082d98.js';
import { c as createCommonjsModule, u as unwrapExports, a as commonjsGlobal, d as dist$3 } from './index-e351faa0.js';
import { d as dist$2, a as dist_3$1, b as dist_6 } from './index-5fbfc6ec.js';

var verify_1 = createCommonjsModule(function (module, exports) {
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
exports.verify = void 0;

const productionVerifier = dist$2.Verifier.create("production", dist$2.Algorithm.RS256("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArZFavKxpyvdY5hv1ZKegVXPfcoI0Tx4CIN7lAxdW80M9bROncr3tVngC48iWzbX/6ziw5xGwujXG/j1qSNIZlTOWx2imlWCl5doTSPb1yt0CX3pREdlBfR5RJGQHRhGpiQA51HO9wA9Y9OAq4kqaFcCkEpJeqvNjvXPJSTM97x4rksil63WalUFSjmWK6lEiQIo/cnLCi6l6MkSxYBZTwS6jGjGvBcYeNPwVHToRLl4Yz0KRdYFyMcO5wk9B6hQ+fA3rkhXezU0squlzPCBZnoyp2T+OqM/ztLuykVlQjVN5RNP89O02jcmsviYH3aRxtYmnaoRKlhXtBmiXmi873wIDAQAB"));
const developmentVerifier = dist$2.Verifier.create("development", dist$2.Algorithm.RS256("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzWkKmoMsdU6TRKeMYFlwwRxb7uuA3Xh1zsya9m9QLcF7FhSLxsaDF7hHWmbBLsKBCDT35hl8mIxOssQGcq5CvhntAmI7RgWExs/VgtyJK1uRxgUKS7wCuWxlB3akXY4f2UXcFn+wOqBdhh1yep726MvB/Jh4nDusXb5G4evVJLIrMKc8vvLqmEo9x8wuXz5s6qvIlHf6h7KLICNsX0ZCv6Tf3OYbZlfd0us+gQTvqhk+dj6P2UaUlQmsEAOerLvSKWDa1KNe0i58/aoDgC9FZGCmpg1mtPegQ09IAVgCaqQ6zqA1wPIWiOO89pWWne28tRCNYGvNY0eXUSG6qXv5LQIDAQAB"));
function verify(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return productionVerifier && (yield productionVerifier.verify(token)) || developmentVerifier && developmentVerifier.verify(token);
    });
}
exports.verify = verify;

});

unwrapExports(verify_1);

var Account_1 = createCommonjsModule(function (module, exports) {
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
exports.Account = void 0;


var Account;
(function (Account) {
    function is(value) {
        return typeof value == "object" &&
            dist$2.Identifier.is(value.id) &&
            (value.reference == undefined || typeof value.reference == "string");
    }
    Account.is = is;
    function verify(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield verify_1.verify(token);
            return is(result) ? result : undefined;
        });
    }
    Account.verify = verify;
})(Account = exports.Account || (exports.Account = {}));

});

unwrapExports(Account_1);

var Result_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var Result;
(function (Result) {
    function is(value) {
        return typeof (value) == "object" &&
            typeof (value.status) == "number";
    }
    Result.is = is;
    function hasBody(value) {
        return typeof (value) == "object" &&
            typeof (value.status) == "number" &&
            value.body != undefined && value.body != null;
    }
    Result.hasBody = hasBody;
    function getBody(value, fallback) {
        return hasBody(value) ? value.body : fallback;
    }
    Result.getBody = getBody;
})(Result = exports.Result || (exports.Result = {}));

});

unwrapExports(Result_1);

var _Error = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;

var Error;
(function (Error) {
    function is(value) {
        return typeof (value) == "object" &&
            typeof (value.type) == "string" &&
            Result_1.Result.is(value) && value.status >= 400;
    }
    Error.is = is;
})(Error = exports.Error || (exports.Error = {}));

});

unwrapExports(_Error);

var Flaw_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flaw = void 0;
var Flaw;
(function (Flaw) {
    function is(value) {
        return typeof (value) == "object" &&
            (value.property == undefined || typeof (value.property) == "string") &&
            typeof (value.type) == "string" &&
            (value.flaws == undefined || Array.isArray(value.flaws) && value.flaws.every(Flaw.is)) &&
            (value.condition == undefined || typeof (value.condition) == "string");
    }
    Flaw.is = is;
})(Flaw = exports.Flaw || (exports.Flaw = {}));

});

unwrapExports(Flaw_1);

var created_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.created = void 0;

function created(body) {
    return { status: 201, body };
}
exports.created = created;
(function (created) {
    function is(value) {
        return typeof (value) == "object" &&
            value.body &&
            Result_1.Result.is(value) &&
            value.status == 201;
    }
    created.is = is;
})(created = exports.created || (exports.created = {}));

});

unwrapExports(created_1);

var noContent_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.noContent = void 0;

function noContent() {
    return { status: 204 };
}
exports.noContent = noContent;
(function (noContent) {
    function is(value) {
        return Result_1.Result.is(value) && value.status == 204;
    }
    noContent.is = is;
})(noContent = exports.noContent || (exports.noContent = {}));

});

unwrapExports(noContent_1);

var ok_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = void 0;

function ok(body) {
    return { status: 200, body };
}
exports.ok = ok;
(function (ok) {
    function is(value) {
        return typeof (value) == "object" &&
            value.body &&
            Result_1.Result.is(value) &&
            value.status == 200;
    }
    ok.is = is;
})(ok = exports.ok || (exports.ok = {}));

});

unwrapExports(ok_1);

var success = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = exports.noContent = exports.created = void 0;

Object.defineProperty(exports, "created", { enumerable: true, get: function () { return created_1.created; } });

Object.defineProperty(exports, "noContent", { enumerable: true, get: function () { return noContent_1.noContent; } });

Object.defineProperty(exports, "ok", { enumerable: true, get: function () { return ok_1.ok; } });

});

unwrapExports(success);

var permanent_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.permanent = void 0;

function permanent(location) {
    return { status: 301, location };
}
exports.permanent = permanent;
(function (permanent) {
    function is(value) {
        return Result_1.Result.is(value) && value.status == 301;
    }
    permanent.is = is;
})(permanent = exports.permanent || (exports.permanent = {}));

});

unwrapExports(permanent_1);

var found_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.found = void 0;

function found(location) {
    return { status: 302, location };
}
exports.found = found;
(function (found) {
    function is(value) {
        return Result_1.Result.is(value) && value.status == 302;
    }
    found.is = is;
})(found = exports.found || (exports.found = {}));

});

unwrapExports(found_1);

var redirect = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.found = exports.permanent = void 0;

Object.defineProperty(exports, "permanent", { enumerable: true, get: function () { return permanent_1.permanent; } });

Object.defineProperty(exports, "found", { enumerable: true, get: function () { return found_1.found; } });

});

unwrapExports(redirect);

var flawedContent_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.flawedContent = void 0;

function flawedContent(content) {
    return { status: 400, type: "flawed content", content };
}
exports.flawedContent = flawedContent;
(function (flawedContent) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 400 && value.type == "flawed content";
    }
    flawedContent.is = is;
})(flawedContent = exports.flawedContent || (exports.flawedContent = {}));

});

unwrapExports(flawedContent_1);

var invalidContent_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidContent = void 0;

function invalidContent(type, description, details) {
    return { status: 400, type: "invalid content", content: { type, description, details } };
}
exports.invalidContent = invalidContent;
(function (invalidContent) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 400 && value.type == "invalid content";
    }
    invalidContent.is = is;
})(invalidContent = exports.invalidContent || (exports.invalidContent = {}));

});

unwrapExports(invalidContent_1);

var invalidPathArgument_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidPathArgument = void 0;

function invalidPathArgument(pattern, name, type, description) {
    return { status: 400, type: "invalid path argument", pattern, argument: { name, type, description } };
}
exports.invalidPathArgument = invalidPathArgument;
(function (invalidPathArgument) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 400 && value.type == "invalid path argument";
    }
    invalidPathArgument.is = is;
})(invalidPathArgument = exports.invalidPathArgument || (exports.invalidPathArgument = {}));

});

unwrapExports(invalidPathArgument_1);

var invalidQueryArgument_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidQueryArgument = void 0;

function invalidQueryArgument(name, type, description) {
    return { status: 400, type: "invalid query argument", argument: { name, type, description } };
}
exports.invalidQueryArgument = invalidQueryArgument;
(function (invalidQueryArgument) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 400 && value.type == "invalid query argument";
    }
    invalidQueryArgument.is = is;
})(invalidQueryArgument = exports.invalidQueryArgument || (exports.invalidQueryArgument = {}));

});

unwrapExports(invalidQueryArgument_1);

var malformedContent_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.malformedContent = void 0;

function malformedContent(property, type, description, details) {
    return { status: 400, type: "malformed content", content: { property, type, description } };
}
exports.malformedContent = malformedContent;
(function (malformedContent) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 400 && value.type == "malformed content";
    }
    malformedContent.is = is;
})(malformedContent = exports.malformedContent || (exports.malformedContent = {}));

});

unwrapExports(malformedContent_1);

var methodNotAllowed_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.methodNotAllowed = void 0;

const methods = ["GET", "POST", "DELETE", "HEAD", "PATCH", "PUT", "OPTIONS", "TRACE", "CONNECT"];
function methodNotAllowed(...allow) {
    return { status: 405, type: "method not allowed", header: { allow } };
}
exports.methodNotAllowed = methodNotAllowed;
(function (methodNotAllowed) {
    function is(value) {
        return typeof value == "object" &&
            value.status == 405 &&
            value.type == "method not allowed" &&
            typeof value.header == "object" &&
            Array.isArray(value.header.allow) &&
            value.header.allow.every((m) => methods.some(m)) &&
            _Error.Error.is(value);
    }
    methodNotAllowed.is = is;
})(methodNotAllowed = exports.methodNotAllowed || (exports.methodNotAllowed = {}));

});

unwrapExports(methodNotAllowed_1);

var missingProperty_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingProperty = void 0;

function missingProperty(property, type, description) {
    return { status: 400, type: "missing property", content: typeof description == "string" ? { property, type, description } : Object.assign({ property, type }, description) };
}
exports.missingProperty = missingProperty;
(function (missingProperty) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 400 && value.type == "missing property";
    }
    missingProperty.is = is;
})(missingProperty = exports.missingProperty || (exports.missingProperty = {}));

});

unwrapExports(missingProperty_1);

var missingQueryArgument_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingQueryArgument = void 0;

function missingQueryArgument(name, type, description) {
    return { status: 400, type: "missing query argument", argument: { name, type, description } };
}
exports.missingQueryArgument = missingQueryArgument;
(function (missingQueryArgument) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 400 && value.type == "missing query argument";
    }
    missingQueryArgument.is = is;
})(missingQueryArgument = exports.missingQueryArgument || (exports.missingQueryArgument = {}));

});

unwrapExports(missingQueryArgument_1);

var notFound_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;

function notFound() {
    return { status: 404, type: "not found" };
}
exports.notFound = notFound;
(function (notFound) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 404 && value.type == "not found";
    }
    notFound.is = is;
})(notFound = exports.notFound || (exports.notFound = {}));

});

unwrapExports(notFound_1);

var unauthorized_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorized = void 0;

function unauthorized() {
    return { status: 401, type: "not authorized" };
}
exports.unauthorized = unauthorized;
(function (unauthorized) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 401 && value.type == "not authorized";
    }
    unauthorized.is = is;
})(unauthorized = exports.unauthorized || (exports.unauthorized = {}));

});

unwrapExports(unauthorized_1);

var client = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

Object.defineProperty(exports, "flawedContent", { enumerable: true, get: function () { return flawedContent_1.flawedContent; } });

Object.defineProperty(exports, "invalidContent", { enumerable: true, get: function () { return invalidContent_1.invalidContent; } });

Object.defineProperty(exports, "invalidPathArgument", { enumerable: true, get: function () { return invalidPathArgument_1.invalidPathArgument; } });

Object.defineProperty(exports, "invalidQueryArgument", { enumerable: true, get: function () { return invalidQueryArgument_1.invalidQueryArgument; } });

Object.defineProperty(exports, "malformedContent", { enumerable: true, get: function () { return malformedContent_1.malformedContent; } });

Object.defineProperty(exports, "methodNotAllowed", { enumerable: true, get: function () { return methodNotAllowed_1.methodNotAllowed; } });

Object.defineProperty(exports, "missingProperty", { enumerable: true, get: function () { return missingProperty_1.missingProperty; } });

Object.defineProperty(exports, "missingQueryArgument", { enumerable: true, get: function () { return missingQueryArgument_1.missingQueryArgument; } });

Object.defineProperty(exports, "notFound", { enumerable: true, get: function () { return notFound_1.notFound; } });

Object.defineProperty(exports, "unauthorized", { enumerable: true, get: function () { return unauthorized_1.unauthorized; } });

});

unwrapExports(client);

var backendFailure_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendFailure = void 0;

function backendFailure(backend, details, reference) {
    if (backend != "string" && details == undefined && reference == undefined) {
        details = backend;
        backend = "unknown";
    }
    return { status: 502, type: "backend failure", backend, details, reference };
}
exports.backendFailure = backendFailure;
(function (backendFailure) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 502 && value.type == "backend failure" && typeof value.backend == "string";
    }
    backendFailure.is = is;
})(backendFailure = exports.backendFailure || (exports.backendFailure = {}));

});

unwrapExports(backendFailure_1);

var backendTimeout_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendTimeout = void 0;

function backendTimeout() {
    return { status: 504, type: "backend timeout" };
}
exports.backendTimeout = backendTimeout;
(function (backendTimeout) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 504 && value.type == "backend timeout";
    }
    backendTimeout.is = is;
})(backendTimeout = exports.backendTimeout || (exports.backendTimeout = {}));

});

unwrapExports(backendTimeout_1);

var databaseFailure_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseFailure = void 0;

function databaseFailure(details) {
    return { status: 502, type: "database failure", details };
}
exports.databaseFailure = databaseFailure;
(function (databaseFailure) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 502 && value.type == "database failure";
    }
    databaseFailure.is = is;
})(databaseFailure = exports.databaseFailure || (exports.databaseFailure = {}));

});

unwrapExports(databaseFailure_1);

var databaseTimeout_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseTimeout = void 0;

function databaseTimeout() {
    return { status: 504, type: "database timeout" };
}
exports.databaseTimeout = databaseTimeout;
(function (databaseTimeout) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 504 && value.type == "database timeout";
    }
    databaseTimeout.is = is;
})(databaseTimeout = exports.databaseTimeout || (exports.databaseTimeout = {}));

});

unwrapExports(databaseTimeout_1);

var missconfigured_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.missconfigured = void 0;

function missconfigured(key, description) {
    return { status: 503, type: "missing configuration", key, description };
}
exports.missconfigured = missconfigured;
(function (missconfigured) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 503 && value.type == "missing configuration";
    }
    missconfigured.is = is;
})(missconfigured = exports.missconfigured || (exports.missconfigured = {}));

});

unwrapExports(missconfigured_1);

var unavailable_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.unavailable = void 0;

function unavailable() {
    return { status: 503, type: "service unavailable" };
}
exports.unavailable = unavailable;
(function (unavailable) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 503 && value.type == "service unavailable";
    }
    unavailable.is = is;
})(unavailable = exports.unavailable || (exports.unavailable = {}));

});

unwrapExports(unavailable_1);

var unknown_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknown = void 0;

function unknown(error) {
    return { status: 500, type: "unknown error", error };
}
exports.unknown = unknown;
(function (unknown) {
    function is(value) {
        return _Error.Error.is(value) && value.status == 500 && value.type == "unknown error";
    }
    unknown.is = is;
})(unknown = exports.unknown || (exports.unknown = {}));

});

unwrapExports(unknown_1);

var server = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknown = exports.unavailable = exports.missconfigured = exports.databaseTimeout = exports.databaseFailure = exports.backendTimeout = exports.backendFailure = void 0;

Object.defineProperty(exports, "backendFailure", { enumerable: true, get: function () { return backendFailure_1.backendFailure; } });

Object.defineProperty(exports, "backendTimeout", { enumerable: true, get: function () { return backendTimeout_1.backendTimeout; } });

Object.defineProperty(exports, "databaseFailure", { enumerable: true, get: function () { return databaseFailure_1.databaseFailure; } });

Object.defineProperty(exports, "databaseTimeout", { enumerable: true, get: function () { return databaseTimeout_1.databaseTimeout; } });

Object.defineProperty(exports, "missconfigured", { enumerable: true, get: function () { return missconfigured_1.missconfigured; } });

Object.defineProperty(exports, "unavailable", { enumerable: true, get: function () { return unavailable_1.unavailable; } });

Object.defineProperty(exports, "unknown", { enumerable: true, get: function () { return unknown_1.unknown; } });

});

unwrapExports(server);

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.client = exports.redirect = exports.success = exports.Result = exports.Flaw = exports.Error = void 0;

Object.defineProperty(exports, "Error", { enumerable: true, get: function () { return _Error.Error; } });

Object.defineProperty(exports, "Flaw", { enumerable: true, get: function () { return Flaw_1.Flaw; } });

Object.defineProperty(exports, "Result", { enumerable: true, get: function () { return Result_1.Result; } });

exports.success = success;

exports.redirect = redirect;

exports.client = client;

exports.server = server;

});

unwrapExports(dist);

var Bin_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bin = void 0;

var Bin;
(function (Bin) {
    function is(value) {
        return typeof (value) == "object" &&
            (value.amex == undefined || typeof value.amex == "string") &&
            (value.dankort == undefined || typeof value.dankort == "string") &&
            (value.diners == undefined || typeof value.diners == "string") &&
            (value.discover == undefined || typeof value.discover == "string") &&
            (value.electron == undefined || typeof value.electron == "string") &&
            (value.interpayment == undefined || typeof value.interpayment == "string") &&
            (value.jcb == undefined || typeof value.jcb == "string") &&
            (value.maestro == undefined || typeof value.maestro == "string") &&
            (value.mastercard == undefined || typeof value.mastercard == "string") &&
            (value.unionpay == undefined || typeof value.unionpay == "string") &&
            (value.visa == undefined || typeof value.visa == "string");
    }
    Bin.is = is;
    function flaw(value) {
        return {
            type: "model.Acquirer.Bin",
            flaws: typeof value.bin != "object" ? undefined :
                [
                    typeof value.bin.amex == "string" || value.bin.amex == undefined || { property: "amex", type: "string | undefined" },
                    typeof value.bin.dankort == "string" || value.bin.dankort == undefined || { property: "dankort", type: "string | undefined" },
                    typeof value.bin.diners == "string" || value.bin.diners == undefined || { property: "diners", type: "string | undefined" },
                    typeof value.bin.discover == "string" || value.bin.discover == undefined || { property: "discover", type: "string | undefined" },
                    typeof value.bin.electron == "string" || value.bin.electron == undefined || { property: "electron", type: "string | undefined" },
                    typeof value.bin.interpayment == "string" || value.bin.interpayment == undefined || { property: "interpayment", type: "string | undefined" },
                    typeof value.bin.jcb == "string" || value.bin.jcb == undefined || { property: "jcb", type: "string | undefined" },
                    typeof value.bin.maestro == "string" || value.bin.maestro == undefined || { property: "maestro", type: "string | undefined" },
                    typeof value.bin.mastercard == "string" || value.bin.mastercard == undefined || { property: "mastercard", type: "string | undefined" },
                    typeof value.bin.unionpay == "string" || value.bin.unionpay == undefined || { property: "unionpay", type: "string | undefined" },
                    typeof value.bin.visa == "string" || value.bin.visa == undefined || { property: "visa", type: "string | undefined" },
                ].filter(dist.Flaw.is),
        };
    }
    Bin.flaw = flaw;
})(Bin = exports.Bin || (exports.Bin = {}));

});

unwrapExports(Bin_1);

var Protocol_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Protocol = void 0;
var Protocol;
(function (Protocol) {
    function is(value) {
        return typeof (value) == "string" && (value == "clearhaus");
    }
    Protocol.is = is;
})(Protocol = exports.Protocol || (exports.Protocol = {}));

});

unwrapExports(Protocol_1);

var Acquirer_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acquirer = void 0;


var Acquirer;
(function (Acquirer) {
    function is(value) {
        return typeof value == "object" &&
            (value.id == undefined || typeof value.id == "string") &&
            Protocol_1.Protocol.is(value.protocol) &&
            typeof value.url == "string" &&
            typeof value.key == "string" &&
            (value.bin == undefined || Bin_1.Bin.is(value.bin));
    }
    Acquirer.is = is;
    let Bin;
    (function (Bin) {
        Bin.is = Bin_1.Bin.is;
        Bin.flaw = Bin_1.Bin.flaw;
    })(Bin = Acquirer.Bin || (Acquirer.Bin = {}));
})(Acquirer = exports.Acquirer || (exports.Acquirer = {}));

});

unwrapExports(Acquirer_1);

var Address_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;

var Address;
(function (Address) {
    function is(value) {
        return typeof value == "object" &&
            (value.city == undefined || typeof value.city == "string" && value.city.length <= 50) &&
            (value.country == undefined || typeof value.country == "string" && (value.country.length == 2 || value.country.length == 3) &&
                (dist$3.CountryCode.Numeric.is(value.country.toLocaleUpperCase()) || dist$3.CountryCode.Numeric.from(value.country.toLocaleUpperCase()))) &&
            (value.line1 == undefined || typeof value.line1 == "string" && value.line1.length <= 50) &&
            (value.line2 == undefined || typeof value.line2 == "string" && value.line2.length <= 50) &&
            (value.line3 == undefined || typeof value.line3 == "string" && value.line3.length <= 50) &&
            (value.postCode == undefined || typeof value.postCode == "string" && value.postCode.length <= 16) &&
            (value.state == undefined || typeof value.state == "string" && value.state.length <= 3);
    }
    Address.is = is;
    function compare(first, second) {
        return !first && !second ? undefined : !first || !second ? false :
            compareOneProperty(first.city, second.city) &&
                compareOneProperty(first.country, second.country) &&
                compareOneProperty(first.line1, second.line1) &&
                compareOneProperty(first.line2, second.line2) &&
                compareOneProperty(first.line3, second.line3) &&
                compareOneProperty(first.postCode, second.postCode) &&
                compareOneProperty(first.state, second.state);
    }
    Address.compare = compare;
    function compareOneProperty(first, second) {
        var _a;
        return !first && !second || (first === null || first === void 0 ? void 0 : first.trim().toLocaleUpperCase().localeCompare((_a = second === null || second === void 0 ? void 0 : second.trim().toLocaleUpperCase()) !== null && _a !== void 0 ? _a : "")) == 0;
    }
})(Address = exports.Address || (exports.Address = {}));

});

unwrapExports(Address_1);

var Cancel_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancel = void 0;


var Cancel;
(function (Cancel) {
    function is(value) {
        return typeof value == "object" &&
            dist$2.Identifier.is(value.id) &&
            (value.descriptor == undefined || typeof value.descriptor == "string") &&
            typeof value.reference == "string" &&
            dist$3.DateTime.is(value.created);
    }
    Cancel.is = is;
})(Cancel = exports.Cancel || (exports.Cancel = {}));

});

unwrapExports(Cancel_1);

var Creatable_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creatable = void 0;
var Creatable;
(function (Creatable) {
    function is(value) {
        return typeof (value) == "object" &&
            (value.descriptor == undefined || typeof (value.descriptor) == "string") &&
            (value.amount == undefined || typeof (value.amount) == "number");
    }
    Creatable.is = is;
})(Creatable = exports.Creatable || (exports.Creatable = {}));

});

unwrapExports(Creatable_1);

var Capture_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Capture = void 0;



var Capture;
(function (Capture) {
    function is(value) {
        return typeof (value) == "object" &&
            dist$2.Identifier.is(value.id) &&
            typeof (value.reference) == "string" &&
            (value.descriptor == undefined || typeof (value.descriptor) == "string") &&
            dist$3.DateTime.is(value.created) &&
            typeof (value.amount) == "number";
    }
    Capture.is = is;
    let Creatable;
    (function (Creatable) {
        Creatable.is = Creatable_1.Creatable.is;
    })(Creatable = Capture.Creatable || (Capture.Creatable = {}));
})(Capture = exports.Capture || (exports.Capture = {}));

});

unwrapExports(Capture_1);

var Month_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Month = void 0;
var Month;
(function (Month) {
    function is(value) {
        return value == 1 || value == 2 || value == 3 || value == 4 ||
            value == 5 || value == 6 || value == 7 || value == 8 ||
            value == 9 || value == 10 || value == 11 || value == 12;
    }
    Month.is = is;
})(Month = exports.Month || (exports.Month = {}));

});

unwrapExports(Month_1);

var Year_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Year = void 0;
var Year;
(function (Year) {
    function is(value) {
        return value == 0 || value == 1 || value == 2 || value == 3 || value == 4 || value == 5 || value == 6 || value == 7 || value == 8 || value == 9 ||
            value == 10 || value == 11 || value == 12 || value == 13 || value == 14 || value == 15 || value == 16 || value == 17 || value == 18 || value == 19 ||
            value == 20 || value == 21 || value == 22 || value == 23 || value == 24 || value == 25 || value == 26 || value == 27 || value == 28 || value == 29 ||
            value == 30 || value == 31 || value == 32 || value == 33 || value == 34 || value == 35 || value == 36 || value == 37 || value == 38 || value == 39 ||
            value == 40 || value == 41 || value == 42 || value == 43 || value == 44 || value == 45 || value == 46 || value == 47 || value == 48 || value == 49 ||
            value == 50 || value == 51 || value == 52 || value == 53 || value == 54 || value == 55 || value == 56 || value == 57 || value == 58 || value == 59 ||
            value == 60 || value == 61 || value == 62 || value == 63 || value == 64 || value == 65 || value == 66 || value == 67 || value == 68 || value == 69 ||
            value == 70 || value == 71 || value == 72 || value == 73 || value == 74 || value == 75 || value == 76 || value == 77 || value == 78 || value == 79 ||
            value == 80 || value == 81 || value == 82 || value == 83 || value == 84 || value == 85 || value == 86 || value == 87 || value == 88 || value == 89 ||
            value == 90 || value == 91 || value == 92 || value == 93 || value == 94 || value == 95 || value == 96 || value == 97 || value == 98 || value == 99;
    }
    Year.is = is;
})(Year = exports.Year || (exports.Year = {}));

});

unwrapExports(Year_1);

var Expires_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expires = void 0;


var Expires;
(function (Expires) {
    function is(value) {
        return Array.isArray(value) &&
            value.length == 2 &&
            Month_1.Month.is(value[0]) &&
            Year_1.Year.is(value[1]);
    }
    Expires.is = is;
    let Month;
    (function (Month) {
        Month.is = Month_1.Month.is;
    })(Month = Expires.Month || (Expires.Month = {}));
    let Year;
    (function (Year) {
        Year.is = Year_1.Year.is;
    })(Year = Expires.Year || (Expires.Year = {}));
})(Expires = exports.Expires || (exports.Expires = {}));

});

unwrapExports(Expires_1);

var Change_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Change = void 0;


var Change;
(function (Change) {
    function is(value) {
        return typeof (value) == "object" &&
            (value.pan == undefined || typeof (value.pan) == "string") &&
            (value.expires == undefined || Expires_1.Expires.is(value.expires)) &&
            (value.csc == undefined || typeof (value.csc) == "string") &&
            (value.pares == undefined || typeof (value.pares) == "string");
    }
    Change.is = is;
    function flaw(value) {
        return {
            type: "model.Card.Change",
            flaws: typeof value != "object" ? undefined :
                [
                    value.pan == undefined || typeof (value.pan) == "string" || { property: "pan", type: "string | undefined" },
                    value.expires == undefined || Expires_1.Expires.is(value.expires) || { property: "expires", type: "string | undefined" },
                    value.csc == undefined || typeof (value.csc) == "string" || { property: "csc", type: "string | undefined" },
                    value.pares == undefined || typeof (value.pares) == "string" || { property: "pares", type: "string | undefined" },
                ].filter(dist.Flaw.is),
        };
    }
    Change.flaw = flaw;
})(Change = exports.Change || (exports.Change = {}));

});

unwrapExports(Change_1);

var Creatable_1$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creatable = void 0;

var Creatable;
(function (Creatable) {
    function is(value) {
        return typeof (value) == "object" &&
            typeof (value.pan) == "string" &&
            Expires_1.Expires.is(value.expires) &&
            (value.csc == undefined || typeof (value.csc) == "string") &&
            (value.pares == undefined || typeof (value.pares) == "string");
    }
    Creatable.is = is;
})(Creatable = exports.Creatable || (exports.Creatable = {}));

});

unwrapExports(Creatable_1$1);

var Scheme_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheme = void 0;
var Scheme;
(function (Scheme) {
    function is(value) {
        return typeof (value) == "string" && (value == "unknown" ||
            value == "amex" ||
            value == "dankort" ||
            value == "diners" ||
            value == "discover" ||
            value == "electron" ||
            value == "interpayment" ||
            value == "jcb" ||
            value == "maestro" ||
            value == "mastercard" ||
            value == "unionpay" ||
            value == "visa");
    }
    Scheme.is = is;
})(Scheme = exports.Scheme || (exports.Scheme = {}));

});

unwrapExports(Scheme_1);

var Pan_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pan = void 0;

var Pan;
(function (Pan) {
    function is(value) {
        return typeof (value) == "string" &&
            value.length >= 12 && value.length <= 19 &&
            Array.from(value).every(c => c >= "0" && c <= "9");
    }
    Pan.is = is;
    function scheme(pan) {
        let result = "unknown";
        for (const key in schemes)
            if (schemes.hasOwnProperty(key) && schemes[key].identification.test(pan) && Scheme_1.Scheme.is(key)) {
                result = key;
                break;
            }
        return result;
    }
    Pan.scheme = scheme;
    function valid(pan) {
        const s = scheme(pan);
        return s != undefined && schemes[s].verification.test(pan);
    }
    Pan.valid = valid;
    function iin(pan) {
        return pan.substring(0, 6);
    }
    Pan.iin = iin;
    function last4(pan) {
        return pan.substring(pan.length - 4);
    }
    Pan.last4 = last4;
})(Pan = exports.Pan || (exports.Pan = {}));
const schemes = {
    amex: { verification: /^3[47][0-9]{13}$/, identification: /^3[47]/, length: 18, icon: "amex" },
    dankort: { verification: /^(5019)\d+$/, identification: /^(5019)\d+/, length: 19, icon: "generic" },
    diners: { verification: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/, identification: /^3(?:0[0-5]|[68][0-9])/, length: 14, icon: "diners" },
    discover: { verification: /^6(?:011|5[0-9]{2})[0-9]{12}$/, identification: /^6(?:011|5[0-9]{2})/, length: 19, icon: "generic" },
    electron: { verification: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/, identification: /^(4026|417500|4405|4508|4844|4913|4917)/, length: 19, icon: "generic" },
    interpayment: { verification: /^(636)\d+$/, identification: /^(636)/, length: 19, icon: "generic" },
    jcb: { verification: /^(?:2131|1800|35\d{3})\d{11}$/, identification: /^(?:2131|1800|35\d{3})/, length: 19, icon: "generic" },
    maestro: { verification: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/, identification: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)/, length: 19, icon: "maestro" },
    mastercard: { verification: /^5[1-5][0-9]{14}$/, identification: /^5[1-5][0-9]/, length: 19, icon: "mastercard" },
    unionpay: { verification: /^(62|88)\d+$/, identification: /^(62|88)/, length: 19, icon: "generic" },
    visa: { verification: /^4[0-9]{12}(?:[0-9]{3})?$/, identification: /^4[0-9]/, length: 16, icon: "visa" },
};

});

unwrapExports(Pan_1);

var Type_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type;
(function (Type) {
    function is(value) {
        return typeof (value) == "string" && (value == "debit" ||
            value == "credit");
    }
    Type.is = is;
})(Type = exports.Type || (exports.Type = {}));

});

unwrapExports(Type_1);

var Token_1 = createCommonjsModule(function (module, exports) {
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
exports.Token = void 0;




var Token;
(function (Token) {
    function is(value) {
        return typeof value == "object" &&
            (value.type == "single use" || value.type == "recurring") &&
            dist$2.Identifier.is(value.card) &&
            (value.scheme == undefined || Scheme_1.Scheme.is(value.scheme)) &&
            (value.iin == undefined || typeof value.iin == "string" && value.iin.length == 6) &&
            (value.last4 == undefined || typeof value.last4 == "string" && value.last4.length == 4) &&
            (value.expires == undefined || Expires_1.Expires.is(value.expires));
    }
    Token.is = is;
    function hasInfo(value) {
        return is(value) &&
            Scheme_1.Scheme.is(value.scheme) &&
            typeof value.iin == "string" && value.iin.length == 6 &&
            typeof value.last4 == "string" && value.last4.length == 4 &&
            Expires_1.Expires.is(value.expires);
    }
    Token.hasInfo = hasInfo;
    function verify(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield verify_1.verify(token);
            return is(result) ? result : undefined;
        });
    }
    Token.verify = verify;
})(Token = exports.Token || (exports.Token = {}));

});

unwrapExports(Token_1);

var Card_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;








var Card;
(function (Card) {
    function is(value) {
        return typeof value == "object" &&
            dist$2.Identifier.is(value.id) &&
            (value.reference == undefined || typeof value.reference == "string") &&
            (value.account == undefined || dist$2.Token.is(value.account)) &&
            Scheme_1.Scheme.is(value.scheme) &&
            typeof value.iin == "string" && value.iin.length == 6 &&
            typeof value.last4 == "string" && value.last4.length == 4 &&
            Expires_1.Expires.is(value.expires) &&
            (value.type == undefined || Type_1.Type.is(value.type));
    }
    Card.is = is;
    function from(value) {
        let result;
        if (Creatable_1$1.Creatable.is(value))
            result = {
                scheme: Pan_1.Pan.scheme(value.pan),
                iin: Pan_1.Pan.iin(value.pan),
                last4: Pan_1.Pan.last4(value.pan),
                expires: value.expires,
            };
        else {
            result = {};
            if (value.pan) {
                result = Object.assign(Object.assign({}, result), { scheme: Pan.scheme(value.pan), iin: Pan.iin(value.pan), last4: Pan.last4(value.pan) });
            }
            if (value.expires)
                result = Object.assign(Object.assign({}, result), { expires: value.expires });
        }
        return result;
    }
    Card.from = from;
    function generateId() {
        return dist$2.Identifier.generate(8);
    }
    Card.generateId = generateId;
    let Change;
    (function (Change) {
        Change.is = Change_1.Change.is;
    })(Change = Card.Change || (Card.Change = {}));
    let Creatable;
    (function (Creatable) {
        Creatable.is = Creatable_1$1.Creatable.is;
    })(Creatable = Card.Creatable || (Card.Creatable = {}));
    let Pan;
    (function (Pan) {
        Pan.is = Pan_1.Pan.is;
        Pan.scheme = Pan_1.Pan.scheme;
        Pan.valid = Pan_1.Pan.valid;
        Pan.iin = Pan_1.Pan.iin;
        Pan.last4 = Pan_1.Pan.last4;
    })(Pan = Card.Pan || (Card.Pan = {}));
    let Scheme;
    (function (Scheme) {
        Scheme.is = Scheme_1.Scheme.is;
    })(Scheme = Card.Scheme || (Card.Scheme = {}));
    let Expires;
    (function (Expires) {
        Expires.is = Expires_1.Expires.is;
        let Month;
        (function (Month) {
            Month.is = Expires_1.Expires.Month.is;
        })(Month = Expires.Month || (Expires.Month = {}));
        let Year;
        (function (Year) {
            Year.is = Expires_1.Expires.Year.is;
        })(Year = Expires.Year || (Expires.Year = {}));
        let Type;
        (function (Type) {
            Type.is = Type_1.Type.is;
        })(Type = Expires.Type || (Expires.Type = {}));
    })(Expires = Card.Expires || (Card.Expires = {}));
    let Token;
    (function (Token) {
        Token.is = Token_1.Token.is;
        Token.hasInfo = Token_1.Token.hasInfo;
        Token.verify = Token_1.Token.verify;
    })(Token = Card.Token || (Card.Token = {}));
})(Card = exports.Card || (exports.Card = {}));

});

unwrapExports(Card_1);

var Base_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;


var Base;
(function (Base) {
    function is(value) {
        return typeof value == "object" &&
            (value.number == undefined || typeof value.number == "string") &&
            (value.descriptor == undefined || typeof value.descriptor == "string") &&
            (value.ip == undefined || typeof value.ip == "string") &&
            (value.amount == undefined && value.currency == undefined ||
                typeof (value.amount) == "number" && dist$3.Currency.is(value.currency)) &&
            (value.account == "create" || value.account == undefined || dist$2.Token.is(value.account)) &&
            (value.pares == undefined || typeof value.pares == "string") &&
            (value.callback == undefined || typeof (value.callback) == "string");
    }
    Base.is = is;
})(Base = exports.Base || (exports.Base = {}));

});

unwrapExports(Base_1);

var Safe_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Safe = void 0;


var Safe;
(function (Safe) {
    function is(value) {
        return typeof value == "object" &&
            (value.card == undefined || dist$2.Token.is(value.card)) &&
            Base_1.Base.is(value);
    }
    Safe.is = is;
})(Safe = exports.Safe || (exports.Safe = {}));

});

unwrapExports(Safe_1);

var Unsafe_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unsafe = void 0;




var Unsafe;
(function (Unsafe) {
    function is(value) {
        return typeof (value) == "object" &&
            (typeof (value.amount) == "number" && dist$3.Currency.is(value.currency) &&
                (Card_1.Card.Creatable.is(value.card) && (value.account == "create" || value.account == undefined) ||
                    dist$2.Token.is(value.account)) ||
                value.amount == undefined && value.currency == undefined && Card_1.Card.Creatable.is(value.card) && value.account == "create") && Base_1.Base.is(value);
    }
    Unsafe.is = is;
})(Unsafe = exports.Unsafe || (exports.Unsafe = {}));

});

unwrapExports(Unsafe_1);

var Creatable_1$2 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creatable = void 0;



var Creatable;
(function (Creatable) {
    function is(value) {
        return Safe_1.Safe.is(value) || Unsafe_1.Unsafe.is(value);
    }
    Creatable.is = is;
    let Base;
    (function (Base) {
        Base.is = Base_1.Base.is;
    })(Base = Creatable.Base || (Creatable.Base = {}));
    let Safe;
    (function (Safe) {
        Safe.is = Safe_1.Safe.is;
    })(Safe = Creatable.Safe || (Creatable.Safe = {}));
    let Unsafe;
    (function (Unsafe) {
        Unsafe.is = Unsafe_1.Unsafe.is;
    })(Unsafe = Creatable.Unsafe || (Creatable.Unsafe = {}));
})(Creatable = exports.Creatable || (exports.Creatable = {}));

});

unwrapExports(Creatable_1$2);

var Creatable_1$3 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creatable = void 0;
var Creatable;
(function (Creatable) {
    function is(value) {
        return (value.amount == undefined || typeof value.amount == "number") &&
            (value.descriptor == undefined || typeof value.descriptor == "string") &&
            Object.keys(value).every(key => key == "amount" || key == "descriptor");
    }
    Creatable.is = is;
})(Creatable = exports.Creatable || (exports.Creatable = {}));

});

unwrapExports(Creatable_1$3);

var Refund_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refund = void 0;



var Refund;
(function (Refund) {
    function is(value) {
        return typeof value == "object" &&
            dist$2.Identifier.is(value.id) &&
            typeof value.amount == "number" &&
            (value.descriptor == undefined || typeof value.descriptor == "string") &&
            dist$3.DateTime.is(value.created);
    }
    Refund.is = is;
    let Creatable;
    (function (Creatable) {
        Creatable.is = Creatable_1$3.Creatable.is;
    })(Creatable = Refund.Creatable || (Refund.Creatable = {}));
})(Refund = exports.Refund || (exports.Refund = {}));

});

unwrapExports(Refund_1);

var Authorization_1 = createCommonjsModule(function (module, exports) {
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
exports.Authorization = void 0;








var Authorization;
(function (Authorization) {
    function is(value) {
        return typeof (value) == "object" &&
            dist$2.Identifier.is(value.id) &&
            (value.number == undefined || typeof (value.number) == "string") &&
            typeof (value.reference) == "string" &&
            (value.descriptor == undefined || typeof (value.descriptor) == "string") &&
            (value.ip == undefined || typeof (value.ip) == "string") &&
            dist$3.DateTime.is(value.created) &&
            (typeof (value.amount) == "number" && dist$3.Currency.is(value.currency) ||
                value.amount == undefined && value.currency == undefined) &&
            Card_1.Card.is(value.card) &&
            Array.isArray(value.capture) && value.capture.every(Capture_1.Capture.is) &&
            Array.isArray(value.refund) && value.refund.every(Refund_1.Refund.is) &&
            (value.cancel == undefined || Cancel_1.Cancel.is(value.cancel)) &&
            (value.callback == undefined || typeof (value.callback) == "string");
    }
    Authorization.is = is;
    function verify(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield verify_1.verify(token);
            return is(result) ? result : undefined;
        });
    }
    Authorization.verify = verify;
    let Creatable;
    (function (Creatable) {
        Creatable.is = Creatable_1$2.Creatable.is;
        let Base;
        (function (Base) {
            Base.is = Creatable_1$2.Creatable.Base.is;
        })(Base = Creatable.Base || (Creatable.Base = {}));
        let Safe;
        (function (Safe) {
            Safe.is = Creatable_1$2.Creatable.Safe.is;
        })(Safe = Creatable.Safe || (Creatable.Safe = {}));
        let Unsafe;
        (function (Unsafe) {
            Unsafe.is = Creatable_1$2.Creatable.Unsafe.is;
        })(Unsafe = Creatable.Unsafe || (Creatable.Unsafe = {}));
    })(Creatable = Authorization.Creatable || (Authorization.Creatable = {}));
})(Authorization = exports.Authorization || (exports.Authorization = {}));

});

unwrapExports(Authorization_1);

var PhoneNumber_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumber = void 0;
var PhoneNumber;
(function (PhoneNumber) {
    function is(value) {
        return typeof value == "object" &&
            /^\d{1,3}$/.test(value.country) &&
            /^\d{1,12}$/.test(value.number);
    }
    PhoneNumber.is = is;
})(PhoneNumber = exports.PhoneNumber || (exports.PhoneNumber = {}));

});

unwrapExports(PhoneNumber_1);

var Email_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
var Email;
(function (Email) {
    function is(value) {
        return typeof value.email == "string" && value.email.length <= 254 && /\S+@\S+/.test(value.email);
    }
    Email.is = is;
})(Email = exports.Email || (exports.Email = {}));

});

unwrapExports(Email_1);

var Customer_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;



var Customer;
(function (Customer) {
    function is(value) {
        return typeof (value) == "object" &&
            (value.billing == undefined || Address_1.Address.is(value.billing)) &&
            (value.shipping == undefined || Address_1.Address.is(value.shipping)) &&
            (value.email == undefined || Email_1.Email.is(value.email)) &&
            (value.homePhone == undefined || PhoneNumber_1.PhoneNumber.is(value.homePhone)) &&
            (value.mobilePhone == undefined || PhoneNumber_1.PhoneNumber.is(value.mobilePhone)) &&
            (value.workPhone == undefined || PhoneNumber_1.PhoneNumber.is(value.workPhone));
    }
    Customer.is = is;
})(Customer = exports.Customer || (exports.Customer = {}));

});

unwrapExports(Customer_1);

var CategoryCode_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCode = void 0;
var CategoryCode;
(function (CategoryCode) {
    function is(value) {
        return typeof (value) == "string" &&
            value.length == 4 &&
            Array.from(value).every(c => c >= "0" && c <= "9");
    }
    CategoryCode.is = is;
    function flaw(value) {
        return { type: "string", condition: "Four digits." };
    }
    CategoryCode.flaw = flaw;
})(CategoryCode = exports.CategoryCode || (exports.CategoryCode = {}));

});

unwrapExports(CategoryCode_1);

var Protocol_1$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Protocol = void 0;
var Protocol;
(function (Protocol) {
    function is(value) {
        return value == "ch3d1" || value == "ch3d2";
    }
    Protocol.is = is;
    function flaw(value) {
        return { type: "model.Merchant.Emv3d.Protocol", property: '"ch3d1" | "ch3d2"' };
    }
    Protocol.flaw = flaw;
})(Protocol = exports.Protocol || (exports.Protocol = {}));

});

unwrapExports(Protocol_1$1);

var Emv3d_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emv3d = void 0;


var Emv3d;
(function (Emv3d) {
    function is(value) {
        return typeof value == "object" && Protocol_1$1.Protocol.is(value.protocol) && typeof value.url == "string" && typeof value.key == "string";
    }
    Emv3d.is = is;
    function flaw(value) {
        return {
            type: "model.Merchant.Emv3d",
            flaws: typeof value.emv3d != "object" ? undefined :
                [
                    Protocol_1$1.Protocol.is(value.protocol) || Protocol_1$1.Protocol.flaw(value.protocol),
                    typeof value.url == "string" || { property: "url", type: "string" },
                    typeof value.key == "string" || { property: "key", type: "string" },
                ].filter(dist.Flaw.is),
        };
    }
    Emv3d.flaw = flaw;
})(Emv3d = exports.Emv3d || (exports.Emv3d = {}));

});

unwrapExports(Emv3d_1);

var KeyInfo_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyInfo = void 0;



var KeyInfo;
(function (KeyInfo) {
    function is(value) {
        return typeof value == "object" &&
            (value.descriptor == undefined || typeof value.descriptor == "string") &&
            dist$3.CountryCode.Alpha2.is(value.country) &&
            typeof value.acquirer == "string" &&
            (value.mid == undefined || typeof value.mid == "string") &&
            (value.mcc == undefined || CategoryCode_1.CategoryCode.is(value.mcc)) &&
            (value.emv3d == undefined || typeof value.emv3d == "string");
    }
    KeyInfo.is = is;
    function flaw(value) {
        return {
            type: "model.Merchant.Configuration.Card.KeyInfo",
            flaws: typeof value != "object" ? undefined :
                [
                    (value.descriptor == undefined || typeof value.descriptor == "string") || { property: "descriptor", type: "string" },
                    dist$3.CountryCode.Alpha2.is(value.country) || { property: "country", type: "isoly.CountryCode" },
                    typeof value.acquirer == "string" || { property: "acquirer", type: "encrypted model.Acquirer.Settings as string" },
                    value.mid == undefined || typeof value.mid == "string" || { property: "mid", type: "string" },
                    value.mcc == undefined || CategoryCode_1.CategoryCode.is(value.mcc) || { property: "mcc", type: "model.Merchant.CategoryCode" },
                    value.emv3d == undefined || typeof value.emv3d == "string" || { property: "emv3d", type: "encrypted model.Merchant.Emv3d as string" },
                ].filter(dist.Flaw.is),
        };
    }
    KeyInfo.flaw = flaw;
})(KeyInfo = exports.KeyInfo || (exports.KeyInfo = {}));

});

unwrapExports(KeyInfo_1);

var Card_1$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;






var Card;
(function (Card) {
    function is(value) {
        return typeof value == "object" &&
            (value.descriptor == undefined || typeof value.descriptor == "string") &&
            dist$3.CountryCode.Alpha2.is(value.country) &&
            Acquirer_1.Acquirer.is(value.acquirer) &&
            (value.mid == undefined || typeof value.mid == "string") &&
            (value.mcc == undefined || CategoryCode_1.CategoryCode.is(value.mcc)) &&
            (value.emv3d == undefined || Emv3d_1.Emv3d.is(value.emv3d));
    }
    Card.is = is;
    function flaw(value) {
        return {
            type: "model.Merchant.Configuration.Card",
            flaws: typeof value != "object" ? undefined :
                [
                    (value.descriptor == undefined || typeof value.descriptor == "string") || { property: "descriptor", type: "string" },
                    dist$3.CountryCode.Alpha2.is(value.country) || { property: "country", type: "isoly.CountryCode" },
                    Acquirer_1.Acquirer.is(value.acquirer) || { property: "acquirer", type: "model.Acquirer.Settings" },
                    value.mid == undefined || typeof value.mid == "string" || { property: "mid", type: "string" },
                    value.mcc == undefined || CategoryCode_1.CategoryCode.is(value.mcc) || { property: "mcc", type: "model.Merchant.CategoryCode" },
                    value.emv3d == undefined || Emv3d_1.Emv3d.is(value.emv3d) || Object.assign({ property: "emv3d" }, Emv3d_1.Emv3d.flaw(value.emv3d)),
                ].filter(dist.Flaw.is),
        };
    }
    Card.flaw = flaw;
    let KeyInfo;
    (function (KeyInfo) {
        KeyInfo.is = KeyInfo_1.KeyInfo.is;
        KeyInfo.flaw = KeyInfo_1.KeyInfo.flaw;
    })(KeyInfo = Card.KeyInfo || (Card.KeyInfo = {}));
})(Card = exports.Card || (exports.Card = {}));

});

unwrapExports(Card_1$1);

var Override_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Override = void 0;


var Override;
(function (Override) {
    function is(value) {
        return typeof value == "object" &&
            typeof value.url == "string" &&
            (value.id == undefined || dist$2.Identifier.is(value.id));
    }
    Override.is = is;
    function flaw(value) {
        return {
            type: "model.Merchant.Configuration.Override",
            flaws: typeof value != "object" ? undefined :
                [
                    typeof value.url == "string" || { property: "url", type: "string" },
                    value.id == undefined || dist$2.Identifier.is(value.id) || { property: "id", type: "string | undefined" },
                ].filter(dist.Flaw.is),
        };
    }
    Override.flaw = flaw;
})(Override = exports.Override || (exports.Override = {}));

});

unwrapExports(Override_1);

var KeyInfo_2 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyInfo = void 0;



var KeyInfo;
(function (KeyInfo) {
    function is(value) {
        return typeof value == "object" &&
            KeyInfo_1.KeyInfo.is(value) &&
            Override_1.Override.is(value);
    }
    KeyInfo.is = is;
    function flaw(value) {
        var _a, _b;
        return {
            type: "model.Merchant.Configuration.KeyInfo",
            flaws: typeof value != "object" ? undefined :
                [
                    ...((_a = KeyInfo_1.KeyInfo.flaw(value).flaws) !== null && _a !== void 0 ? _a : []),
                    ...((_b = Override_1.Override.flaw(value).flaws) !== null && _b !== void 0 ? _b : []),
                ].filter(dist.Flaw.is),
        };
    }
    KeyInfo.flaw = flaw;
})(KeyInfo = exports.KeyInfo || (exports.KeyInfo = {}));

});

unwrapExports(KeyInfo_2);

var Configuration_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;




var Configuration;
(function (Configuration) {
    function is(value) {
        return typeof value == "object" &&
            Card_1$1.Card.is(value) &&
            Override_1.Override.is(value);
    }
    Configuration.is = is;
    function flaw(value) {
        var _a, _b;
        return {
            type: "model.Merchant.Configuration",
            flaws: typeof value != "object" ? undefined :
                [
                    ...((_a = Card_1$1.Card.flaw(value).flaws) !== null && _a !== void 0 ? _a : []),
                    ...((_b = Override_1.Override.flaw(value).flaws) !== null && _b !== void 0 ? _b : []),
                ].filter(dist.Flaw.is),
        };
    }
    Configuration.flaw = flaw;
    let Card;
    (function (Card) {
        Card.is = Card_1$1.Card.is;
        Card.flaw = Card_1$1.Card.flaw;
        let KeyInfo;
        (function (KeyInfo) {
            KeyInfo.is = Card_1$1.Card.KeyInfo.is;
            KeyInfo.flaw = Card_1$1.Card.KeyInfo.flaw;
        })(KeyInfo = Card.KeyInfo || (Card.KeyInfo = {}));
    })(Card = Configuration.Card || (Configuration.Card = {}));
    let Override;
    (function (Override) {
        Override.is = Override_1.Override.is;
        Override.flaw = Override_1.Override.flaw;
    })(Override = Configuration.Override || (Configuration.Override = {}));
    let KeyInfo;
    (function (KeyInfo) {
        KeyInfo.is = KeyInfo_2.KeyInfo.is;
        KeyInfo.flaw = KeyInfo_2.KeyInfo.flaw;
    })(KeyInfo = Configuration.KeyInfo || (Configuration.KeyInfo = {}));
})(Configuration = exports.Configuration || (exports.Configuration = {}));

});

unwrapExports(Configuration_1);

var KeyInfo_2$1 = createCommonjsModule(function (module, exports) {
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
exports.KeyInfo = void 0;




var KeyInfo;
(function (KeyInfo) {
    function is(value) {
        return typeof value == "object" &&
            dist$2.Identifier.is(value.sub) &&
            typeof value.iss == "string" &&
            (value.aud == "public" || value.aud == "private") &&
            typeof value.iat == "number" &&
            typeof value.name == "string" &&
            typeof value.url == "string" &&
            (value.mixed == undefined || dist$2.Token.is(value.mixed)) &&
            KeyInfo_2.KeyInfo.is(value.card);
    }
    KeyInfo.is = is;
    function flaw(value) {
        var _a;
        return {
            type: "model.Merchant.Key.KeyInfo",
            flaws: typeof value != "object" ? undefined :
                [
                    typeof value.sub == "string" || { property: "sub", type: "authly.Identifier", condition: "Merchant identifier." },
                    typeof value.iss == "string" || { property: "iss", type: "string", condition: "Key issuer." },
                    typeof value.aud == "string" || { property: "aud", type: `"public" | "private"`, condition: "Key audience." },
                    typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
                    typeof value.name == "string" || { property: "name", type: "string" },
                    typeof value.url == "string" || { property: "url", type: "string" },
                    value.mixed == undefined || typeof value.mixed == "string" || { property: "mixed", type: "authly.Token", condition: "Alternate key." },
                    ...((_a = KeyInfo_2.KeyInfo.flaw(value.card).flaws) !== null && _a !== void 0 ? _a : [{ property: "card", type: "model.Merchant.Configuration.KeyInfo", flaws: undefined }]),
                ].filter(dist.Flaw.is),
        };
    }
    KeyInfo.flaw = flaw;
    function upgrade(key) {
        return key == undefined
            ? undefined
            : is(key)
                ? key
                : {
                    sub: key.sub,
                    iss: key.iss,
                    aud: key.aud,
                    iat: key.iat,
                    name: key.name,
                    url: key.url,
                    card: {
                        url: key.iss,
                        id: key.sub,
                        country: key.country,
                        acquirer: key.acquirer,
                        mid: key.mid,
                        mcc: key.mcc,
                        emv3d: key.emv3d,
                    }
                };
    }
    KeyInfo.upgrade = upgrade;
    function unpack(key, audience) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            if (key) {
                result = yield dist$2.Verifier.create(audience).verify(key);
                if (result && ((_a = result.option) === null || _a === void 0 ? void 0 : _a.card)) {
                    const cardKey = yield dist$2.Verifier.create(audience).verify(result.option.card);
                    result = cardKey && dist$1.Merchant.V1.Key.KeyInfo.is(cardKey) ? upgrade(cardKey) : undefined;
                }
                else {
                    if (dist$1.Merchant.V1.Key.KeyInfo.is(result))
                        result = dist$1.Merchant.Key.KeyInfo.upgrade(result);
                    if (!dist$1.Merchant.Key.KeyInfo.is(result))
                        result = undefined;
                }
            }
            return result;
        });
    }
    KeyInfo.unpack = unpack;
})(KeyInfo = exports.KeyInfo || (exports.KeyInfo = {}));

});

unwrapExports(KeyInfo_2$1);

var Key_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;




var Key;
(function (Key) {
    function is(value) {
        return typeof value == "object" &&
            dist$2.Identifier.is(value.sub) &&
            typeof value.iss == "string" &&
            (value.aud == "public" || value.aud == "private") &&
            typeof value.iat == "number" &&
            typeof value.name == "string" &&
            typeof value.url == "string" &&
            (value.mixed == undefined || dist$2.Token.is(value.mixed)) &&
            Configuration_1.Configuration.is(value.card);
    }
    Key.is = is;
    function flaw(value) {
        var _a;
        return {
            type: "model.Merchant.Key",
            flaws: typeof value != "object" ? undefined :
                [
                    typeof value.sub == "string" || { property: "sub", type: "authly.Identifier", condition: "Merchant identifier." },
                    typeof value.iss == "string" || { property: "iss", type: "string", condition: "Key issuer." },
                    typeof value.aud == "string" || { property: "aud", type: `"public" | "private"`, condition: "Key audience." },
                    typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
                    typeof value.name == "string" || { property: "name", type: "string" },
                    typeof value.url == "string" || { property: "url", type: "string" },
                    value.mixed == undefined || typeof value.mixed == "string" || { property: "mixed", type: "authly.Token", condition: "Alternate key." },
                    ...((_a = Configuration_1.Configuration.flaw(value.card).flaws) !== null && _a !== void 0 ? _a : [{ property: "card", type: "model.Merchant.Configuration", flaws: undefined }]),
                ].filter(dist.Flaw.is),
        };
    }
    Key.flaw = flaw;
    function upgrade(key) {
        return key == undefined
            ? undefined
            : is(key)
                ? key
                : {
                    sub: key.sub,
                    iss: key.iss,
                    aud: key.aud,
                    iat: key.iat,
                    name: key.name,
                    url: key.url,
                    card: {
                        url: key.iss,
                        id: key.sub,
                        country: key.country,
                        acquirer: key.acquirer,
                        mid: key.mid,
                        mcc: key.mcc,
                        emv3d: key.emv3d,
                    }
                };
    }
    Key.upgrade = upgrade;
    let KeyInfo;
    (function (KeyInfo) {
        KeyInfo.is = KeyInfo_2$1.KeyInfo.is;
        KeyInfo.flaw = KeyInfo_2$1.KeyInfo.flaw;
        KeyInfo.unpack = KeyInfo_2$1.KeyInfo.unpack;
        KeyInfo.upgrade = KeyInfo_2$1.KeyInfo.upgrade;
    })(KeyInfo = Key.KeyInfo || (Key.KeyInfo = {}));
})(Key = exports.Key || (exports.Key = {}));

});

unwrapExports(Key_1);

var KeyInfo_2$2 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyInfo = void 0;



var KeyInfo;
(function (KeyInfo) {
    function is(value) {
        return typeof value == "object" &&
            dist$2.Identifier.is(value.sub) &&
            typeof value.iss == "string" &&
            typeof value.iat == "number" &&
            (value.aud == "public" || value.aud == "private") &&
            typeof value.name == "string" &&
            typeof value.url == "string" &&
            KeyInfo_1.KeyInfo.is(value);
    }
    KeyInfo.is = is;
    function flaw(value) {
        return {
            type: "model.Merchant.V1.Key.KeyInfo",
            flaws: typeof (value) != "object" ? undefined :
                [
                    typeof value.sub == "string" || { property: "sub", type: "authly.Identifier", condition: "Merchant identifier." },
                    typeof value.iss == "string" || { property: "iss", type: "string", condition: "Key issuer." },
                    typeof value.aud == "string" || { property: "aud", type: `"public" | "private"`, condition: "Key audience." },
                    typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
                    typeof value.name == "string" || { property: "name", type: "string" },
                    typeof value.url == "string" || { property: "url", type: "string" },
                    ...(KeyInfo_1.KeyInfo.flaw(value).flaws || []),
                ].filter(dist.Flaw.is),
        };
    }
    KeyInfo.flaw = flaw;
})(KeyInfo = exports.KeyInfo || (exports.KeyInfo = {}));

});

unwrapExports(KeyInfo_2$2);

var Key_1$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;




var Key;
(function (Key) {
    function is(value) {
        return typeof value == "object" &&
            dist$2.Identifier.is(value.sub) &&
            typeof value.iss == "string" &&
            typeof value.iat == "number" &&
            (value.aud == "public" || value.aud == "private") &&
            typeof value.name == "string" &&
            typeof value.url == "string" &&
            Card_1$1.Card.is(value);
    }
    Key.is = is;
    function flaw(value) {
        return {
            type: "model.Merchant.V1.Key",
            flaws: typeof (value) != "object" ? undefined :
                [
                    typeof value.sub == "string" || { property: "sub", type: "authly.Identifier", condition: "Merchant identifier." },
                    typeof value.iss == "string" || { property: "iss", type: "string", condition: "Key issuer." },
                    typeof value.aud == "string" || { property: "aud", type: `"public" | "private"`, condition: "Key audience." },
                    typeof value.iat == "number" || { property: "iat", type: "number", condition: "Issued timestamp." },
                    typeof value.name == "string" || { property: "name", type: "string" },
                    typeof value.url == "string" || { property: "url", type: "string" },
                    ...(Card_1$1.Card.flaw(value).flaws || []),
                ].filter(dist.Flaw.is),
        };
    }
    Key.flaw = flaw;
    let KeyInfo;
    (function (KeyInfo) {
        KeyInfo.is = KeyInfo_2$2.KeyInfo.is;
        KeyInfo.flaw = KeyInfo_2$2.KeyInfo.flaw;
    })(KeyInfo = Key.KeyInfo || (Key.KeyInfo = {}));
})(Key = exports.Key || (exports.Key = {}));

});

unwrapExports(Key_1$1);

var V1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;

Object.defineProperty(exports, "Key", { enumerable: true, get: function () { return Key_1$1.Key; } });

});

unwrapExports(V1);

var Merchant_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merchant = void 0;





var Merchant;
(function (Merchant) {
    function is(value) {
        return typeof value == "object" &&
            dist$2.Identifier.is(value.id) &&
            typeof value.name == "string" &&
            typeof value.url == "string" &&
            Configuration_1.Configuration.is(value.card) &&
            typeof value.card.url == "string" &&
            (value.card.id == undefined || dist$2.Identifier.is(value.card.id));
    }
    Merchant.is = is;
    function flaw(value) {
        var _a;
        return {
            type: "model.Merchant",
            flaws: typeof value != "object" ? undefined :
                [
                    dist$2.Identifier.is(value.id) || { property: "id", type: "authly.Identifier" },
                    typeof value.name == "string" || { property: "name", type: "string" },
                    typeof value.url == "string" || { property: "url", type: "string" },
                    ...((_a = Configuration_1.Configuration.flaw(value.card).flaws) !== null && _a !== void 0 ? _a : [{ property: "card", type: "model.Merchant.Configuration", flaws: undefined }]),
                ].filter(dist.Flaw.is),
        };
    }
    Merchant.flaw = flaw;
    let Configuration;
    (function (Configuration) {
        Configuration.is = Configuration_1.Configuration.is;
        Configuration.flaw = Configuration_1.Configuration.flaw;
        let Card;
        (function (Card) {
            Card.is = Configuration_1.Configuration.Card.is;
            Card.flaw = Configuration_1.Configuration.Card.flaw;
            let KeyInfo;
            (function (KeyInfo) {
                KeyInfo.is = Configuration_1.Configuration.Card.KeyInfo.is;
                KeyInfo.flaw = Configuration_1.Configuration.Card.KeyInfo.flaw;
            })(KeyInfo = Card.KeyInfo || (Card.KeyInfo = {}));
        })(Card = Configuration.Card || (Configuration.Card = {}));
        let Override;
        (function (Override) {
            Override.is = Configuration_1.Configuration.Override.is;
            Override.flaw = Configuration_1.Configuration.Override.flaw;
        })(Override = Configuration.Override || (Configuration.Override = {}));
        let KeyInfo;
        (function (KeyInfo) {
            KeyInfo.is = Configuration_1.Configuration.KeyInfo.is;
            KeyInfo.flaw = Configuration_1.Configuration.KeyInfo.flaw;
        })(KeyInfo = Configuration.KeyInfo || (Configuration.KeyInfo = {}));
    })(Configuration = Merchant.Configuration || (Merchant.Configuration = {}));
    let Key;
    (function (Key) {
        Key.is = Key_1.Key.is;
        Key.flaw = Key_1.Key.flaw;
        Key.upgrade = Key_1.Key.upgrade;
        let KeyInfo;
        (function (KeyInfo) {
            KeyInfo.is = Key_1.Key.KeyInfo.is;
            KeyInfo.flaw = Key_1.Key.KeyInfo.flaw;
            KeyInfo.unpack = Key_1.Key.KeyInfo.unpack;
            KeyInfo.upgrade = Key_1.Key.KeyInfo.upgrade;
        })(KeyInfo = Key.KeyInfo || (Key.KeyInfo = {}));
    })(Key = Merchant.Key || (Merchant.Key = {}));
    let V1$1;
    (function (V1$1) {
        let Key;
        (function (Key) {
            Key.is = V1.Key.is;
            Key.flaw = V1.Key.flaw;
            let KeyInfo;
            (function (KeyInfo) {
                KeyInfo.is = V1.Key.KeyInfo.is;
                KeyInfo.flaw = V1.Key.KeyInfo.flaw;
            })(KeyInfo = Key.KeyInfo || (Key.KeyInfo = {}));
        })(Key = V1$1.Key || (V1$1.Key = {}));
    })(V1$1 = Merchant.V1 || (Merchant.V1 = {}));
})(Merchant = exports.Merchant || (exports.Merchant = {}));

});

unwrapExports(Merchant_1);

var dist$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refund = exports.PhoneNumber = exports.Merchant = exports.Email = exports.Customer = exports.Card = exports.Cancel = exports.Capture = exports.Authorization = exports.Address = exports.Acquirer = exports.Account = void 0;

Object.defineProperty(exports, "Account", { enumerable: true, get: function () { return Account_1.Account; } });

Object.defineProperty(exports, "Acquirer", { enumerable: true, get: function () { return Acquirer_1.Acquirer; } });

Object.defineProperty(exports, "Address", { enumerable: true, get: function () { return Address_1.Address; } });

Object.defineProperty(exports, "Authorization", { enumerable: true, get: function () { return Authorization_1.Authorization; } });

Object.defineProperty(exports, "Capture", { enumerable: true, get: function () { return Capture_1.Capture; } });

Object.defineProperty(exports, "Cancel", { enumerable: true, get: function () { return Cancel_1.Cancel; } });

Object.defineProperty(exports, "Card", { enumerable: true, get: function () { return Card_1.Card; } });

Object.defineProperty(exports, "Customer", { enumerable: true, get: function () { return Customer_1.Customer; } });

Object.defineProperty(exports, "Email", { enumerable: true, get: function () { return Email_1.Email; } });

Object.defineProperty(exports, "Merchant", { enumerable: true, get: function () { return Merchant_1.Merchant; } });

Object.defineProperty(exports, "PhoneNumber", { enumerable: true, get: function () { return PhoneNumber_1.PhoneNumber; } });

Object.defineProperty(exports, "Refund", { enumerable: true, get: function () { return Refund_1.Refund; } });

});

unwrapExports(dist$1);
var dist_3 = dist$1.Merchant;

const MerchantKeyInfoUnpack = dist_3.Key.KeyInfo.unpack;

const styleCss = ":host{display:block;height:calc(5em - 3px);overflow:hidden;width:100%}:host[hidden]{display:none}:host>smoothly-dialog>header>smoothly-trigger{z-index:1}";

class Form {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.state = "created";
        this.state3d = "created";
        this.changed = createEvent(this, "changed", 7);
        this.changed3d = createEvent(this, "changed3d", 7);
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
                h("smoothly-dialog", { closable: true }, h("smoothly-frame", { url: `${this.verify.issuer}/redirect/post?target=${encodeURIComponent(this.verify.url)}&PaReq=${encodeURIComponent(this.verify.pareq)}&MD=MD&TermUrl=${encodeURIComponent(`${this.verify.issuer}/emv3d1/done?merchant=${(_d = (_b = (_a = this.merchant) === null || _a === void 0 ? void 0 : _a.card.id) !== null && _b !== void 0 ? _b : (_c = this.merchant) === null || _c === void 0 ? void 0 : _c.sub) !== null && _d !== void 0 ? _d : "error"}&token=${(_f = (_e = this.authorization) === null || _e === void 0 ? void 0 : _e.card) !== null && _f !== void 0 ? _f : "error"}&parent=${window.location.origin}`)}`, name: "parent", style: { height: "90vh" } })) :
                [],
        ];
    }
}
Form.style = styleCss;

const styleCss$1 = ".sc-smoothly-dialog-h{display:block;position:fixed;left:0;top:0;width:100%;height:100%;z-index:1;background:rgba(var(--smoothly-default-color), var(--smoothly-semitransparent)) !important}[hidden].sc-smoothly-dialog-h{display:none}.sc-smoothly-dialog-h>header.sc-smoothly-dialog{border-top-left-radius:8px;border-top-right-radius:8px;margin-top:2em;color:rgb(var(--smoothly-primary-contrast));background:rgb(var(--smoothly-primary-color))}.sc-smoothly-dialog-h>*.sc-smoothly-dialog{position:relative;color:rgb(var(--smoothly-default-contrast));background-color:rgb(var(--smoothly-default-color));border-color:rgb(var(--smoothly-color));border-width:1px;border-style:solid;max-width:40em;width:calc(100vw - 4em - 2px);max-height:calc(100vh - 6em - 2px);height:auto;margin-left:auto;margin-right:auto;border-collapse:collapse}.sc-smoothly-dialog-h>main.sc-smoothly-dialog{border-bottom-left-radius:8px;border-bottom-right-radius:8px;margin-bottom:2em}.sc-smoothly-dialog-h>*.sc-smoothly-dialog>smoothly-trigger.sc-smoothly-dialog{position:absolute;right:-2em;top:-2em}.sc-smoothly-dialog-h>*.sc-smoothly-dialog>*.sc-smoothly-dialog{margin:10px}";

class SmoothlyDialog {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = true;
        this.closable = false;
    }
    TriggerListener(event) {
        if (dist_3$1.is(event.detail) && event.detail.name == "close")
            this.open = false;
    }
    hostData() {
        return {
            style: {
                display: this.open ? "block" : "none",
            },
        };
    }
    __stencil_render() {
        return [
            h("header", null, this.closable ? h("smoothly-trigger", { fill: "clear", name: "close" }, h("smoothly-icon", { name: "close-circle", fill: "solid", color: this.color })) : [], this.header ? h("h1", null, this.header) : h("slot", { name: "header" })),
            h("main", null, h("slot", null))
        ];
    }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
}
SmoothlyDialog.style = styleCss$1;

const styleCss$2 = ".sc-smoothly-frame-h{display:block;width:100%;height:100%}[hidden].sc-smoothly-frame-h{display:none}.sc-smoothly-frame-h>iframe.sc-smoothly-frame{border:none;padding:none;margin:none}";

class SmoothlyFrame {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.trigger = createEvent(this, "trigger", 7);
        this.message = createEvent(this, "message", 7);
    }
    get contentWindow() {
        const iframe = this.element && this.element.firstElementChild ? this.element.firstElementChild : undefined;
        return iframe && iframe.contentWindow || undefined;
    }
    get urlOrigin() {
        const match = this.url.match(/^(([a-z]+\+)*[a-z]+:\/\/)?[^\/^\n]+/);
        return match ? match[0] : "*";
    }
    componentDidLoad() {
        if (this.contentWindow)
            dist_6.listen(this.urlOrigin, (destination, content) => {
                if (destination == this.name)
                    if (dist_3$1.is(content))
                        this.trigger.emit(content);
                    else
                        this.message.emit({ destination, content });
            }, window);
    }
    async send(message, content) {
        if (typeof (message) == "string")
            dist_6.send(this.urlOrigin + "#" + message, content, this.contentWindow);
        else if (dist_6.is(message) && this.contentWindow)
            dist_6.send({ destination: this.urlOrigin + "#" + message.destination, content: message.destination }, this.contentWindow);
    }
    render() {
        return h("iframe", { src: this.url + "#" + window.location.origin, height: "100%", width: "100%" });
    }
    get element() { return getElement(this); }
}
SmoothlyFrame.style = styleCss$2;

const styleCss$3 = ".sc-smoothly-icon-h{display:block;background:none !important}[hidden].sc-smoothly-icon-h{display:none}[size=small].sc-smoothly-icon-h{width:1.4em;height:1.4em}[size=medium].sc-smoothly-icon-h{width:1.8em;height:1.8em}[size=large].sc-smoothly-icon-h{width:2.8em;height:2.8em}[size=xlarge].sc-smoothly-icon-h{width:4em;height:4em}";

class SmoothlyIcon {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fill = "solid";
        this.size = "medium";
    }
    async loadDocument() {
        if (this.name) {
            const url = `https://unpkg.com/ionicons@5.0.0/dist/svg/${this.name}.svg`;
            const response = await fetch(url);
            this.document = response.ok ? (await response.text()).replace(/(<title>)[\w\d\s\-]*(<\/title>)/, `<title>${this.toolTip || ""}</title>`) : undefined;
        }
    }
    async componentWillLoad() {
        await this.loadDocument();
    }
    hostData() {
        return {
            innerHTML: this.document ? this.document.replace(` width="512" height="512"`, "") : undefined,
        };
    }
    __stencil_render() {
        return [];
    }
    static get watchers() { return {
        "name": ["loadDocument"]
    }; }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
}
SmoothlyIcon.style = styleCss$3;

const styleCss$4 = ".sc-smoothly-trigger-h{display:block;border-style:solid;border-width:1px;border-radius:3px}[hidden].sc-smoothly-trigger-h{display:none}[disabled].sc-smoothly-trigger-h{opacity:.5}button.sc-smoothly-trigger{border-color:transparent;padding:.2em .3em;font-size:110%;font-weight:400}.sc-smoothly-trigger-h:not([processing]):not([disabled]):hover,.sc-smoothly-trigger-h:not([processing]):not([disabled]):focus,.sc-smoothly-trigger-h:not([processing]):not([disabled]):active{border-color:var(--smoothly-trigger-border)}[expand=fill].sc-smoothly-trigger-h>button.sc-smoothly-trigger,[expand=block].sc-smoothly-trigger-h>button.sc-smoothly-trigger{width:100%}[expand=fill].sc-smoothly-trigger-h{border-left:none;border-right:none}";

class SmoothlyTrigger {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.trigger = createEvent(this, "trigger", 7);
    }
    onClick(e) {
        this.trigger.emit({ name: this.name, value: this.value });
        e.stopPropagation();
        e.preventDefault();
    }
    render() {
        return h("button", { disabled: this.disabled, name: this.name }, h("slot", null));
    }
}
SmoothlyTrigger.style = styleCss$4;

export { Form as cardfunc_element, SmoothlyDialog as smoothly_dialog, SmoothlyFrame as smoothly_frame, SmoothlyIcon as smoothly_icon, SmoothlyTrigger as smoothly_trigger };
