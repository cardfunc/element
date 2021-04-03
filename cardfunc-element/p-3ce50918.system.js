var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(e){return function(t){return c([e,t])}}function c(u){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;i=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(u[0]===6&&r.label<o[1]){r.label=o[1];o=u;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(u);break}if(o[2])r.ops.pop();r.trys.pop();continue}u=t.call(e,r)}catch(a){u=[6,a];i=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var o=arguments[t],u=0,a=o.length;u<a;u++,i++)n[i]=o[u];return n};System.register(["./p-ce763cc0.system.js"],(function(e){"use strict";var t,r,n,i;return{setters:[function(e){t=e.c;r=e.u;n=e.a;i=e.d}],execute:function(){if(!Uint8Array.__proto__.from){(function(){Uint8Array.__proto__.from=function(e,t,r){var n=Uint8Array.__proto__;if(typeof this!=="function"){throw new TypeError("# is not a constructor")}if(this.__proto__!==n){throw new TypeError("this is not a typed array.")}t=t||function(e){return e};if(typeof t!=="function"){throw new TypeError("specified argument is not a function")}e=Object(e);if(!e.length){return new this(0)}var i=[];for(var o=0,u=i;o<u.length;o++){var a=u[o];i.push(a)}i=i.map(t,r);var c=new this(i.length);for(var s=0;s<c.length;s++){c[s]=i[s]}return c}})()}var o=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true})}));r(o);var u=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.crypto=void 0;t.crypto=window.crypto||window.msCrypto}));r(u);var a=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.TextEncoder=void 0;var r=function(){function e(){this.encoding="utf-8"}e.prototype.encode=function(e){return Uint8Array.from(unescape(encodeURIComponent(e)).split(""),(function(e){return e.charCodeAt(0)}))};return e}();t.TextEncoder=r}));r(a);var c=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.decode=t.encode=void 0;var r={standard:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",url:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function n(e,t,n){if(t===void 0){t="standard"}if(n===void 0){n=""}if(typeof e=="string")e=(new a.TextEncoder).encode(e);var i=r[t];var o=[];for(var u=0;u<e.length;u+=3){var c=e[u];var s=u+1<e.length?e[u+1]:0;var f=u+2<e.length?e[u+2]:0;o.push(i[c>>>2]);o.push(i[(c&3)<<4|s>>>4]);o.push(i[(s&15)<<2|f>>>6]);o.push(i[f&63])}var d=Math.ceil(e.length/3*4);return o.join("").substr(0,d)+n.repeat(o.length-d)}t.encode=n;function i(e,t){if(t===void 0){t="standard"}while(e.endsWith("=")&&e.length>0)e=e.substr(0,e.length-1);var n=r[t];var i=e.split("").map((function(e){return n.indexOf(e)}));var o=new Uint8Array(Math.floor(i.length/4*3));for(var u=0;u<o.length;u+=3){var a=i.shift()||0;var c=i.shift()||0;var s=i.shift()||0;var f=i.shift()||0;o[u]=a<<2|c>>>4;o[u+1]=(c&15)<<4|s>>>2;o[u+2]=(s&3)<<6|f}return o}t.decode=i}));r(c);var s=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.TextDecoder=void 0;var r=function(){function e(){this.encoding="utf-8"}e.prototype.decode=function(e,t){return!e?"":decodeURIComponent(escape(Array.from(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),(function(e){return String.fromCharCode(e)})).join("")))};return e}();t.TextDecoder=r}));r(s);var f=t((function(e,t){var r=n&&n.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function u(e){try{c(n.next(e))}catch(t){o(t)}}function a(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?r(e.value):i(e.value).then(u,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.PropertyCrypto=void 0;var i=function(){function e(e){var t=[];for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}this.secret=e;this.encoder=new a.TextEncoder;this.decoder=new s.TextDecoder;this.properties=t.map((function(e){return e.split(".")}))}e.prototype.encrypt=function(e){var t=this;return this.process(e,(function(e){return t.encoder.encode(JSON.stringify(e))}),(function(e){return c.encode(e,"url")}))};e.prototype.decrypt=function(e){var t=this;return this.process(e,(function(e){return typeof e=="string"?c.decode(e,"url"):new Uint8Array}),(function(e){return JSON.parse(t.decoder.decode(e))}))};e.prototype.process=function(e,t,n){return r(this,void 0,void 0,(function(){var r,i,o,u;return __generator(this,(function(a){switch(a.label){case 0:r=this.secret+e.sub+e.iat;i=0,o=this.properties;a.label=1;case 1:if(!(i<o.length))return[3,4];u=o[i];return[4,this.processProperty(e,u,r+u.join("."),t,n)];case 2:e=a.sent();a.label=3;case 3:i++;return[3,1];case 4:return[2,e]}}))}))};e.prototype.processProperty=function(e,t,n,i,o){return r(this,void 0,void 0,(function(){var r,a,c,s,f,d,l,p;return __generator(this,(function(y){switch(y.label){case 0:r=Object.assign({},e);if(!r[t[0]])return[3,4];if(!(t.length==1))return[3,2];a=i(e[t[0]]);s=Uint8Array.bind;return[4,u.crypto.subtle.digest("SHA-512",this.encoder.encode(n))];case 1:c=new(s.apply(Uint8Array,[void 0,y.sent()]));f=new Uint8Array(a.length);for(d=0;d<a.length;d++)f[d]=a[d]^c[d];r[t[0]]=o(f);return[3,4];case 2:l=r;p=t[0];return[4,this.processProperty(r[t[0]],t.slice(1),n,i,o)];case 3:l[p]=y.sent();y.label=4;case 4:return[2,r]}}))}))};e.create=function(t){var r=[];for(var n=1;n<arguments.length;n++){r[n-1]=arguments[n]}return t&&new(e.bind.apply(e,__spreadArrays([void 0,t],r)))||undefined};return e}();t.PropertyCrypto=i}));r(f);var d=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Actor=void 0;var r=function(){function e(e){this.id=e;this.cryptos=[]}e.prototype.add=function(e){var t;var r=[];for(var n=1;n<arguments.length;n++){r[n-1]=arguments[n]}var i=(t=f.PropertyCrypto).create.apply(t,__spreadArrays([e],r));if(i)this.cryptos.push(i);return this};return e}();t.Actor=r}));r(d);var l=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Symmetric=void 0;var r;(function(e){function t(e){return e=="HS256"||e=="HS384"||e=="HS512"}e.is=t})(r=t.Symmetric||(t.Symmetric={}))}));r(l);var p=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Asymmetric=void 0;var r;(function(e){function t(e){return e=="RS256"||e=="RS384"||e=="RS512"||e=="ES256"||e=="ES384"||e=="ES512"||e=="PS256"||e=="PS384"||e=="PS512"}e.is=t})(r=t.Asymmetric||(t.Asymmetric={}))}));r(p);var y=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Name=void 0;var r;(function(e){function t(e){return e=="none"||l.Symmetric.is(e)||p.Asymmetric.is(e)}e.is=t;var r;(function(e){e.is=l.Symmetric.is})(r=e.Symmetric||(e.Symmetric={}));var n;(function(e){e.is=p.Asymmetric.is})(n=e.Asymmetric||(e.Asymmetric={}))})(r=t.Name||(t.Name={}))}));r(y);var v=t((function(e,t){var r=n&&n.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function u(e){try{c(n.next(e))}catch(t){o(t)}}function a(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?r(e.value):i(e.value).then(u,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.register=t.Algorithm=void 0;var i=function(){function e(){}e.prototype.sign=function(e){return r(this,void 0,void 0,(function(){var t,r,n;return __generator(this,(function(i){switch(i.label){case 0:if(!(typeof e=="string"))return[3,2];n=(r=c).encode;return[4,this.signBinary((new a.TextEncoder).encode(e))];case 1:t=n.apply(r,[i.sent(),"url"]);return[3,3];case 2:t=this.signBinary(e);i.label=3;case 3:return[2,t]}}))}))};e.prototype.verify=function(e,t){if(typeof t=="string")t=c.decode(t,"url");return typeof e=="string"?this.verifyBinary((new a.TextEncoder).encode(e),t):this.verifyBinary(e,t)};e.create=function(e,t,r){var n=o[e];return n&&n([t,r])};e.none=function(){return e.create("none")};e.HS256=function(t){return e.create("HS256",t)};e.HS384=function(t){return e.create("HS384",t)};e.HS512=function(t){return e.create("HS512",t)};e.RS256=function(t,r){return e.create("RS256",t,r)};e.RS384=function(t,r){return e.create("RS384",t,r)};e.RS512=function(t,r){return e.create("RS512",t,r)};e.ES256=function(t,r){return e.create("ES256",t,r)};e.ES384=function(t,r){return e.create("ES384",t,r)};e.ES512=function(t,r){return e.create("ES512",t,r)};e.PS256=function(t,r){return e.create("PS256",t,r)};e.PS384=function(t,r){return e.create("PS384",t,r)};e.PS512=function(t,r){return e.create("PS512",t,r)};return e}();t.Algorithm=i;var o={};function u(e,t){o[e]=t}t.register=u;(function(e){var t;(function(e){e.is=y.Name.is;var t;(function(e){e.is=y.Name.Symmetric.is})(t=e.Symmetric||(e.Symmetric={}));var r;(function(e){e.is=y.Name.Asymmetric.is})(r=e.Asymmetric||(e.Asymmetric={}))})(t=e.Name||(e.Name={}))})(i=t.Algorithm||(t.Algorithm={}))}));r(v);var h=t((function(e,t){var r=n&&n.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function u(e){try{c(n.next(e))}catch(t){o(t)}}function a(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?r(e.value):i(e.value).then(u,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.Symmetric=void 0;var i=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.verifyBinary=function(e,t){return r(this,void 0,void 0,(function(){var r,n;return __generator(this,(function(i){switch(i.label){case 0:n=(r=c).encode;return[4,this.signBinary(e)];case 1:return[2,n.apply(r,[i.sent(),"url"])==c.encode(t,"url")]}}))}))};return t}(v.Algorithm);t.Symmetric=i}));r(h);var g=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.None=void 0;var r=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}Object.defineProperty(t.prototype,"name",{get:function(){return"none"},enumerable:false,configurable:true});t.prototype.signBinary=function(e){return Promise.resolve(new Uint8Array(0))};return t}(h.Symmetric);t.None=r;v.register("none",(function(e){return new r}))}));r(g);var m=t((function(e,t){var r=n&&n.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function u(e){try{c(n.next(e))}catch(t){o(t)}}function a(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?r(e.value):i(e.value).then(u,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.HS=void 0;var i=function(e){__extends(t,e);function t(t,r){var n=e.call(this)||this;n.length=t;if(typeof r=="string")r=c.decode(r,"url");n.key=u.crypto.subtle.importKey("raw",r,{name:"HMAC",hash:{name:"SHA-"+n.length}},false,["sign","verify"]);return n}Object.defineProperty(t.prototype,"name",{get:function(){return"HS"+this.length},enumerable:false,configurable:true});t.prototype.signBinary=function(e){return r(this,void 0,void 0,(function(){var t,r,n,i;return __generator(this,(function(o){switch(o.label){case 0:t=Uint8Array.bind;n=(r=u.crypto.subtle).sign;i=["HMAC"];return[4,this.key];case 1:return[4,n.apply(r,i.concat([o.sent(),e]))];case 2:return[2,new(t.apply(Uint8Array,[void 0,o.sent()]))]}}))}))};return t}(h.Symmetric);t.HS=i;v.register("HS256",(function(e){return e[0]&&new i("256",e[0])||undefined}));v.register("HS384",(function(e){return e[0]&&new i("384",e[0])||undefined}));v.register("HS512",(function(e){return e[0]&&new i("512",e[0])||undefined}))}));r(m);var b=t((function(e,t){var r=n&&n.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function u(e){try{c(n.next(e))}catch(t){o(t)}}function a(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?r(e.value):i(e.value).then(u,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.RS=void 0;var i=function(e){__extends(t,e);function t(t,r,n){var i=e.call(this)||this;i.length=t;if(r){if(typeof r=="string")r=c.decode(r);i.publicKey=u.crypto.subtle.importKey("spki",r,{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-"+i.length}},false,["verify"])}if(n){if(typeof n=="string")n=c.decode(n);i.privateKey=u.crypto.subtle.importKey("pkcs8",n,{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-"+i.length}},true,["sign","verify"])}return i}Object.defineProperty(t.prototype,"name",{get:function(){return"RS"+this.length},enumerable:false,configurable:true});t.prototype.signBinary=function(e){return r(this,void 0,void 0,(function(){var t,r,n,i;return __generator(this,(function(o){switch(o.label){case 0:t=Uint8Array.bind;n=(r=u.crypto.subtle).sign;i=["RSASSA-PKCS1-v1_5"];return[4,this.privateKey];case 1:return[4,n.apply(r,i.concat([o.sent(),e]))];case 2:return[2,new(t.apply(Uint8Array,[void 0,o.sent()]))]}}))}))};t.prototype.verifyBinary=function(e,t){return r(this,void 0,void 0,(function(){var r,n,i;return __generator(this,(function(o){switch(o.label){case 0:n=(r=u.crypto.subtle).verify;i=["RSASSA-PKCS1-v1_5"];return[4,this.publicKey];case 1:return[2,n.apply(r,i.concat([o.sent(),t,e]))]}}))}))};return t}(v.Algorithm);t.RS=i;v.register("RS256",(function(e){return new i("256",e[0],e[1])}));v.register("RS384",(function(e){return new i("384",e[0],e[1])}));v.register("RS512",(function(e){return new i("512",e[0],e[1])}))}));r(b);var _=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"Algorithm",{enumerable:true,get:function(){return v.Algorithm}})}));r(_);var S=t((function(e,t){var r=n&&n.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function u(e){try{c(n.next(e))}catch(t){o(t)}}function a(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?r(e.value):i(e.value).then(u,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.Issuer=void 0;var i=function(e){__extends(t,e);function t(t,r){var n=e.call(this,t)||this;n.algorithm=r;return n}Object.defineProperty(t.prototype,"header",{get:function(){return{alg:this.algorithm.name,typ:"JWT"}},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"payload",{get:function(){var e={iss:this.id,iat:t.issuedAt};if(this.audience)e.aud=this.audience;if(this.duration&&e.iat)e.exp=e.iat+this.duration;return e},enumerable:false,configurable:true});t.prototype.sign=function(e,t){return r(this,void 0,void 0,(function(){var n,i;var o=this;return __generator(this,(function(u){switch(u.label){case 0:e=Object.assign(Object.assign({},this.payload),e);if(t)e.iat=typeof t=="number"?t:t.getTime();return[4,this.cryptos.reduce((function(e,t){return r(o,void 0,void 0,(function(){var r,n;return __generator(this,(function(i){switch(i.label){case 0:n=(r=t).encrypt;return[4,e];case 1:return[2,n.apply(r,[i.sent()])]}}))}))}),Promise.resolve(e))];case 1:e=u.sent();n=c.encode((new a.TextEncoder).encode(JSON.stringify(this.header)),"url")+"."+c.encode((new a.TextEncoder).encode(JSON.stringify(e)),"url");i=n+".";return[4,this.algorithm.sign(n)];case 2:return[2,i+u.sent()]}}))}))};Object.defineProperty(t,"issuedAt",{get:function(){return t.defaultIssuedAt==undefined?Date.now():typeof t.defaultIssuedAt=="number"?t.defaultIssuedAt:t.defaultIssuedAt.getTime()},enumerable:false,configurable:true});t.create=function(e,r){return r&&new t(e,r)||undefined};return t}(d.Actor);t.Issuer=i}));r(S);var w=t((function(e,t){var r=n&&n.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function u(e){try{c(n.next(e))}catch(t){o(t)}}function a(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?r(e.value):i(e.value).then(u,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.Password=void 0;var i;(function(e){function t(e){return typeof e=="string"||typeof e=="object"&&typeof e.hash=="string"&&typeof e.salt=="string"}e.is=t;function n(e,t,n){return r(this,void 0,void 0,(function(){var r;return __generator(this,(function(i){switch(i.label){case 0:if(!n)n=c.encode(u.crypto.getRandomValues(new Uint8Array(64)));r={};return[4,e.sign(n+t)];case 1:return[2,(r.hash=i.sent(),r.salt=n,r)]}}))}))}e.hash=n;function i(t,n,i){return r(this,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:return[4,e.hash(t,i,n.salt)];case 1:return[2,r.sent().hash==n.hash]}}))}))}e.verify=i;var o;(function(e){function t(e){return typeof e=="object"&&typeof e.hash=="string"&&typeof e.salt=="string"}e.is=t})(o=e.Hashed||(e.Hashed={}))})(i=t.Password||(t.Password={}))}));r(w);var A=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Token=void 0;var r;(function(e){function t(e){return typeof e=="string"&&/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(e)}e.is=t})(r=t.Token||(t.Token={}))}));r(A);var P=t((function(e,t){var r=n&&n.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function u(e){try{c(n.next(e))}catch(t){o(t)}}function a(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?r(e.value):i(e.value).then(u,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.Verifier=void 0;var i=function(e){__extends(t,e);function t(t){var r=[];for(var n=1;n<arguments.length;n++){r[n-1]=arguments[n]}var i=e.call(this,t)||this;if(r.length>0){i.algorithms={};for(var o=0,u=r;o<u.length;o++){var a=u[o];i.algorithms[a.name]=a}}else i.algorithms=undefined;return i}t.prototype.verify=function(e){return r(this,void 0,void 0,(function(){var t,n,i,o,u,a,f,d;var l=this;return __generator(this,(function(p){switch(p.label){case 0:if(!e)return[3,9];n=e.split(".",3);if(!(n.length<2))return[3,1];t=undefined;return[3,7];case 1:p.trys.push([1,5,,6]);i=e.includes("/")||e.includes("+");o=JSON.parse((new s.TextDecoder).decode(c.decode(n[0],i?"standard":"url")));t=JSON.parse((new s.TextDecoder).decode(c.decode(n[1],i?"standard":"url")));if(!this.algorithms)return[3,4];u=this.algorithms[o.alg];a=n.length==3&&u;if(!a)return[3,3];return[4,u.verify(n[0]+"."+n[1],n[2])];case 2:a=p.sent();p.label=3;case 3:t=a?t:undefined;p.label=4;case 4:return[3,6];case 5:f=p.sent();t=undefined;return[3,6];case 6:d=Date.now();t=t&&(t.exp==undefined||t.exp>d)&&(t.iat==undefined||t.iat<=d)&&this.verifyAudience(t.aud)?t:undefined;p.label=7;case 7:if(!t)return[3,9];return[4,this.cryptos.reduce((function(e,t){return r(l,void 0,void 0,(function(){var r,n;return __generator(this,(function(i){switch(i.label){case 0:n=(r=t).decrypt;return[4,e];case 1:return[2,n.apply(r,[i.sent()])]}}))}))}),Promise.resolve(t))];case 8:t=p.sent();p.label=9;case 9:return[2,t]}}))}))};t.prototype.verifyAudience=function(e){var t=this;return e==undefined||typeof e=="string"&&e==this.id||Array.isArray(e)&&e.some((function(e){return e==t.id}))};t.prototype.authenticate=function(e){return r(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,e&&e.startsWith("Bearer ")?this.verify(e.substr(7)):undefined]}))}))};t.create=function(e){var r=[];for(var n=1;n<arguments.length;n++){r[n-1]=arguments[n]}return(r.length==0||r.some((function(e){return!!e})))&&new(t.bind.apply(t,__spreadArrays([void 0,e],r.filter((function(e){return!!e})))))||undefined};return t}(d.Actor);t.Verifier=i}));r(P);var j=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Identifier=void 0;var r;(function(e){function t(e,t){return typeof e=="string"&&(t==undefined||e.length==t)&&Array.from(e).every((function(e){return e>="0"&&e<="9"||e>="A"&&e<="Z"||e>="a"&&e<="z"||e=="-"||e=="_"}))}e.is=t;function r(e){return c.encode(e,"url")}e.fromBinary=r;function n(e){return c.decode(e,"url")}e.toBinary=n;function i(e){return r(u.crypto.getRandomValues(new Uint8Array(e/4*3)))}e.generate=i;function o(e){if(e.length%2==1)e+="0";var t=new Uint8Array(e.length/2);for(var n=0;n<t.length;n++)t[n]=Number.parseInt(e[n*2],16)*16+Number.parseInt(e[n*2+1],16);return r(t)}e.fromHexadecimal=o;function a(e,t){var r=c.decode(e,"url");var n=[];for(var i=0,o=r;i<o.length;i++){var u=o[i];n.push(Math.floor(u/16).toString(16),(u%16).toString(16))}if(t)n=n.slice(0,t);return n.join("")}e.toHexadecimal=a;e.length=[4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128];var s;(function(e){function t(e){return typeof e=="number"&&e>=4&&e<=128&&(e&252)==e}e.is=t})(s=e.Length||(e.Length={}))})(r=t.Identifier||(t.Identifier={}))}));r(j);var O=e("d",t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Identifier=t.Verifier=t.Token=t.TextEncoder=t.TextDecoder=t.PropertyCrypto=t.Password=t.Issuer=t.Base64=t.Algorithm=t.Actor=void 0;Object.defineProperty(t,"Actor",{enumerable:true,get:function(){return d.Actor}});Object.defineProperty(t,"Algorithm",{enumerable:true,get:function(){return _.Algorithm}});t.Base64=c;Object.defineProperty(t,"Issuer",{enumerable:true,get:function(){return S.Issuer}});Object.defineProperty(t,"Password",{enumerable:true,get:function(){return w.Password}});Object.defineProperty(t,"PropertyCrypto",{enumerable:true,get:function(){return f.PropertyCrypto}});Object.defineProperty(t,"TextDecoder",{enumerable:true,get:function(){return s.TextDecoder}});Object.defineProperty(t,"TextEncoder",{enumerable:true,get:function(){return a.TextEncoder}});Object.defineProperty(t,"Token",{enumerable:true,get:function(){return A.Token}});Object.defineProperty(t,"Verifier",{enumerable:true,get:function(){return P.Verifier}});Object.defineProperty(t,"Identifier",{enumerable:true,get:function(){return j.Identifier}})})));r(O);var E=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.SE=void 0;var r;(function(e){function t(e){return typeof e=="object"&&typeof e.street=="string"&&typeof e.zipCode=="string"&&typeof e.city=="string"&&e.countryCode=="SE"}e.is=t;function r(){return{street:"",zipCode:"",city:"",countryCode:"SE"}}e.create=r})(r=t.SE||(t.SE={}))}));r(E);var x=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.FI=void 0;var r;(function(e){function t(e){return typeof e=="object"&&typeof e.street=="string"&&typeof e.zipCode=="string"&&typeof e.city=="string"&&e.countryCode=="FI"}e.is=t;function r(){return{street:"",zipCode:"",city:"",countryCode:"FI"}}e.create=r})(r=t.FI||(t.FI={}))}));r(x);var I=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Address=void 0;var r;(function(e){function t(e){return typeof e=="object"&&i.CountryCode.Alpha2.is(e.countryCode)&&(e.countryCode=="FI"&&x.FI.is(e)||e.countryCode=="SE"&&E.SE.is(e))}e.is=t;function r(e){var t;switch(e){case"FI":t=x.FI.create();break;default:case"SE":t=E.SE.create();break}return t}e.create=r;var n;(function(e){e.is=x.FI.is;e.create=x.FI.create})(n=e.FI||(e.FI={}));var o;(function(e){e.is=E.SE.is;e.create=E.SE.create})(o=e.SE||(e.SE={}))})(r=t.Address||(t.Address={}))}));r(I);var T=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Addresses=void 0;var r;(function(e){e.types=["primary","billing","delivery","visit"];function t(e){return typeof e=="object"&&(I.Address.is(e.primary)||e.primary==undefined)&&(I.Address.is(e.billing)||e.billing==undefined)&&(I.Address.is(e.delivery)||e.delivery==undefined)&&(I.Address.is(e.visit)||e.visit==undefined)&&(I.Address.is(e.primary)||I.Address.is(e.billing)||I.Address.is(e.delivery)||I.Address.is(e.visit))}e.is=t;function r(t){var r=[];for(var n=1;n<arguments.length;n++){r[n-1]=arguments[n]}var i;if(I.Address.is(t))i=t;else if(e.is(t)){if(r.length==0)r=e.types;for(var o=0,u=r;o<u.length;o++){var a=u[o];switch(a){case"primary":i=t.primary;break;case"billing":i=t.billing;break;case"delivery":i=t.delivery;break;case"visit":i=t.visit;break}if(i)break}}return i}e.get=r;function n(t,r){return e.types.filter((function(e){return t[e]!=undefined})).map((function(e){return r(e,t[e])}))}e.map=n})(r=t.Addresses||(t.Addresses={}))}));r(T);var M=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.ClientIdentifier=void 0;var r=function(){function e(){}Object.defineProperty(e,"value",{get:function(){e.valueCache=localStorage.getItem("clientIdentifier")||undefined;if(!e.valueCache){e.valueCache=O.Identifier.generate(12);localStorage.setItem("clientIdentifier",e.valueCache)}return e.valueCache},enumerable:false,configurable:true});return e}();t.ClientIdentifier=r}));r(M);var C=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.EmailAddresses=void 0;var r;(function(e){e.types=["primary","billing"];function t(e){return typeof e=="object"&&(typeof e.primary=="string"||e.primary==undefined)&&(typeof e.billing=="string"||e.billing==undefined)&&(typeof e.primary=="string"||typeof e.billing=="string")}e.is=t;function r(t){var r=[];for(var n=1;n<arguments.length;n++){r[n-1]=arguments[n]}var i;if(typeof t=="string")i=t;else if(e.is(t)){if(r.length==0)r=e.types;for(var o=0,u=r;o<u.length;o++){var a=u[o];switch(a){case"primary":i=t.primary;break;case"billing":i=t.billing;break}if(i)break}}return i}e.get=r;function n(t,r){return e.types.filter((function(e){return t[e]!=undefined})).map((function(e){return r(e,t[e])}))}e.map=n})(r=t.EmailAddresses||(t.EmailAddresses={}))}));r(C);var N=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Type=void 0;var r;(function(e){function t(e){return typeof e=="number"&&(e==0||e==1||e==2||e==3||e==5||e==6||e==7||e==8||e==9)}e.is=t;function r(e){var r=parseInt(e);return t(r)?r:undefined}e.parse=r})(r=t.Type||(t.Type={}))}));r(N);var k=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.SE=void 0;var r;(function(e){function t(e){return typeof e=="string"&&/^(16|18|19|20)?\d{10}$/.test(e)&&d(e)}e.is=t;function r(e){return typeof e=="string"&&/\d{10}$/.test(e)}e.is10=r;function n(e){return typeof e=="string"&&/^(16|18|19|20)\d{10}$/.test(e)}e.is12=n;function i(e){return n(e)?e.substring(2):e}e.as10=i;function o(e){return i(e)[2]>"1"}e.isOrganisation=o;function u(e){return!o(e)&&i(e)[4]>"5"}e.isTemporary=u;function a(e){e=i(e);return o(e)?N.Type.parse(e[0])||0:0}e.type=a;function c(t){return/^(16|18|19|20)?(\d{6}([-+]|\s)\d{4})$/.test(t)?t.substring(0,t.length-5)+t.substring(t.length-4):e.is(t)?t:undefined}e.parse=c;function s(e){return e.substring(0,e.length-4)+"-"+e.substring(e.length-4)}e.format=s;function f(e){e=i(e);var t=0;var r=0;while(true){var n=Number.parseInt(e[r++])*2;t+=n<10?n:1+n-10;if(r>=9)break;t+=Number.parseInt(e[r++])}return(10-t%10)%10}e.calculateChecksum=f;function d(e){e=i(e);return Number.parseInt(e[9])==f(e)}e.verifyChecksum=d})(r=t.SE||(t.SE={}))}));r(k);var H=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.IdentityNumber=void 0;var r;(function(e){function t(e,t){return t=="SE"&&k.SE.is(e)||t==undefined&&k.SE.is(e)}e.is=t;var r;(function(e){e.is=k.SE.is;e.is10=k.SE.is10;e.is12=k.SE.is12;e.as10=k.SE.as10;e.isOrganisation=k.SE.isOrganisation;e.isTemporary=k.SE.isTemporary;e.type=k.SE.type;e.parse=k.SE.parse;e.format=k.SE.format;e.calculateChecksum=k.SE.calculateChecksum;e.verifyChecksum=k.SE.verifyChecksum})(r=e.SE||(e.SE={}))})(r=t.IdentityNumber||(t.IdentityNumber={}))}));r(H);var R=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Message=void 0;var r=function(){function e(){}e.is=function(e){return typeof e=="object"&&typeof e.destination=="string"&&e.content!=undefined};e.send=function(t,r,n){if(e.is(t)&&n==undefined){n=r;if(!n)n=window;var i=t.destination.split("#",2);t={destination:i[1],content:t.content};n.postMessage(t,i[0])}else if(typeof n!="string"){if(!n)n=window;if(typeof t=="string")e.send({destination:t,content:r},n)}};e.listen=function(t,r,n){var i=t.split("#",2);var o="";if(i.length==2){t=i[0];o=i[1]}(n||window).addEventListener("message",(function(n){var i=n.data;if(e.is(i)&&(t=="*"||n.origin==t)&&(o==""||i.destination==o))r(i.destination,i.content)}))};return e}();t.Message=r}));r(R);var U=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Name=void 0;var r;(function(e){function t(e){return(typeof e.first=="string"||e.first==undefined)&&(typeof e.last=="string"||e.last==undefined)}e.is=t;function r(e){return typeof e=="string"?e:typeof e=="object"?[e.first,e.last].filter((function(e){return!!e})).join(" "):""}e.get=r})(r=t.Name||(t.Name={}))}));r(U);var B=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.PhoneNumbers=void 0;var r;(function(e){e.types=["primary","cellphone","landline"];function t(e){return typeof e=="object"&&(typeof e.primary=="string"||e.primary==undefined)&&(typeof e.cellphone=="string"||e.cellphone==undefined)&&(typeof e.landline=="string"||e.landline==undefined)&&(e.primary||e.cellphone||e.landline)}e.is=t;function r(t){var r=[];for(var n=1;n<arguments.length;n++){r[n-1]=arguments[n]}var i;if(typeof t=="string")i=t;else if(e.is(t)){if(r.length==0)r=e.types;for(var o=0,u=r;o<u.length;o++){var a=u[o];switch(a){case"primary":i=t.primary;break;case"cellphone":i=t.cellphone;break;case"landline":i=t.landline;break}if(i)break}}return i}e.get=r;function n(t,r){return e.types.filter((function(e){return t[e]!=undefined})).map((function(e){return r(e,t[e])}))}e.map=n})(r=t.PhoneNumbers||(t.PhoneNumbers={}))}));r(B);var F=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Trigger=void 0;var r=function(){function e(){}e.is=function(e){return typeof e=="object"&&typeof e.name=="string"};return e}();t.Trigger=r}));r(F);var K=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Type=void 0;var r;(function(e){function t(e){return typeof e=="string"&&(e=="button"||e=="checkbox"||e=="color"||e=="date"||e=="datetime-local"||e=="email"||e=="file"||e=="hidden"||e=="image"||e=="month"||e=="number"||e=="password"||e=="radio"||e=="range"||e=="reset"||e=="search"||e=="submit"||e=="tel"||e=="text"||e=="time"||e=="url"||e=="week")}e.is=t;function r(t,r){if(r===void 0){r="text"}return e.is(t)?t:r}e.as=r})(r=t.Type||(t.Type={}))}));r(K);var D=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Notice=void 0;var r;(function(e){function t(e){return typeof e=="object"&&(e.type=="success"||e.type=="warning"||e.type=="danger"||e.type=="default")&&typeof e.message=="string"&&(e.remain==undefined||e.remain==true)&&(e.timeout==undefined||typeof e.timeout=="number")}e.is=t})(r=t.Notice||(t.Notice={}))}));r(D);var z=t((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t.Notice=t.Type=t.Trigger=t.PhoneNumbers=t.Name=t.Message=t.IdentityNumber=t.EmailAddresses=t.ClientIdentifier=t.Addresses=t.Address=void 0;Object.defineProperty(t,"Address",{enumerable:true,get:function(){return I.Address}});Object.defineProperty(t,"Addresses",{enumerable:true,get:function(){return T.Addresses}});Object.defineProperty(t,"ClientIdentifier",{enumerable:true,get:function(){return M.ClientIdentifier}});Object.defineProperty(t,"EmailAddresses",{enumerable:true,get:function(){return C.EmailAddresses}});Object.defineProperty(t,"IdentityNumber",{enumerable:true,get:function(){return H.IdentityNumber}});Object.defineProperty(t,"Message",{enumerable:true,get:function(){return R.Message}});Object.defineProperty(t,"Name",{enumerable:true,get:function(){return U.Name}});Object.defineProperty(t,"PhoneNumbers",{enumerable:true,get:function(){return B.PhoneNumbers}});Object.defineProperty(t,"Trigger",{enumerable:true,get:function(){return F.Trigger}});Object.defineProperty(t,"Type",{enumerable:true,get:function(){return K.Type}});Object.defineProperty(t,"Notice",{enumerable:true,get:function(){return D.Notice}})}));r(z);var J=e("f",z.Notice);var V=e("a",z.Trigger);var L=e("b",z.Message);var Z=e("e",z.Addresses);var W=e("c",z.Address)}}}));