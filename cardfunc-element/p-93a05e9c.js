import{c as t,u as n,a as e,d as r}from"./p-94c2b65f.js";Uint8Array.__proto__.from||(Uint8Array.__proto__.from=function(t,n,e){const r=Uint8Array.__proto__;if("function"!=typeof this)throw new TypeError("# is not a constructor");if(this.__proto__!==r)throw new TypeError("this is not a typed array.");if("function"!=typeof(n=n||(t=>t)))throw new TypeError("specified argument is not a function");if(!(t=Object(t)).length)return new this(0);let i=[];for(const u of i)i.push(u);i=i.map(n,e);const o=new this(i.length);for(let u=0;u<o.length;u++)o[u]=i[u];return o}),n(t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0})})));var i=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.crypto=void 0,n.crypto=window.crypto||window.msCrypto}));n(i);var o=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.TextEncoder=void 0,n.TextEncoder=class{constructor(){this.encoding="utf-8"}encode(t){return Uint8Array.from(unescape(encodeURIComponent(t)).split(""),t=>t.charCodeAt(0))}}}));n(o);var u=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.decode=n.encode=void 0;const e={standard:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",url:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};n.encode=function(t,n="standard",r=""){"string"==typeof t&&(t=(new o.TextEncoder).encode(t));const i=e[n],u=[];for(let e=0;e<t.length;e+=3){const n=t[e],r=e+1<t.length?t[e+1]:0,o=e+2<t.length?t[e+2]:0;u.push(i[n>>>2]),u.push(i[(3&n)<<4|r>>>4]),u.push(i[(15&r)<<2|o>>>6]),u.push(i[63&o])}const c=Math.ceil(t.length/3*4);return u.join("").substr(0,c)+r.repeat(u.length-c)},n.decode=function(t,n="standard"){for(;t.endsWith("=")&&t.length>0;)t=t.substr(0,t.length-1);const r=e[n],i=t.split("").map(t=>r.indexOf(t)),o=new Uint8Array(Math.floor(i.length/4*3));for(let e=0;e<o.length;e+=3){const t=i.shift()||0,n=i.shift()||0,r=i.shift()||0,u=i.shift()||0;o[e]=t<<2|n>>>4,o[e+1]=(15&n)<<4|r>>>2,o[e+2]=(3&r)<<6|u}return o}}));n(u);var c=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.TextDecoder=void 0,n.TextDecoder=class{constructor(){this.encoding="utf-8"}decode(t,n){return t?decodeURIComponent(escape(Array.from(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),t=>String.fromCharCode(t)).join(""))):""}}}));n(c);var s=t((function(t,n){var r=e&&e.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function u(t){try{s(r.next(t))}catch(n){o(n)}}function c(t){try{s(r.throw(t))}catch(n){o(n)}}function s(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}s((r=r.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.PropertyCrypto=void 0;class s{constructor(t,...n){this.secret=t,this.encoder=new o.TextEncoder,this.decoder=new c.TextDecoder,this.properties=n.map(t=>t.split("."))}encrypt(t){return this.process(t,t=>this.encoder.encode(JSON.stringify(t)),t=>u.encode(t,"url"))}decrypt(t){return this.process(t,t=>"string"==typeof t?u.decode(t,"url"):new Uint8Array,t=>JSON.parse(this.decoder.decode(t)))}process(t,n,e){return r(this,void 0,void 0,(function*(){const r=this.secret+t.sub+t.iat;for(const i of this.properties)t=yield this.processProperty(t,i,r+i.join("."),n,e);return t}))}processProperty(t,n,e,o,u){return r(this,void 0,void 0,(function*(){const r=Object.assign({},t);if(r[n[0]])if(1==n.length){const c=o(t[n[0]]),s=new Uint8Array(yield i.crypto.subtle.digest("SHA-512",this.encoder.encode(e))),f=new Uint8Array(c.length);for(let t=0;t<c.length;t++)f[t]=c[t]^s[t];r[n[0]]=u(f)}else r[n[0]]=yield this.processProperty(r[n[0]],n.slice(1),e,o,u);return r}))}static create(t,...n){return t&&new s(t,...n)||void 0}}n.PropertyCrypto=s}));n(s);var f=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Actor=void 0,n.Actor=class{constructor(t){this.id=t,this.cryptos=[]}add(t,...n){const e=s.PropertyCrypto.create(t,...n);return e&&this.cryptos.push(e),this}}}));n(f);var a=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Symmetric=void 0,(n.Symmetric||(n.Symmetric={})).is=function(t){return"HS256"==t||"HS384"==t||"HS512"==t}}));n(a);var l=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Asymmetric=void 0,(n.Asymmetric||(n.Asymmetric={})).is=function(t){return"RS256"==t||"RS384"==t||"RS512"==t||"ES256"==t||"ES384"==t||"ES512"==t||"PS256"==t||"PS384"==t||"PS512"==t}}));n(l);var d=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Name=void 0,function(t){let n,e;t.is=function(t){return"none"==t||a.Symmetric.is(t)||l.Asymmetric.is(t)},function(t){t.is=a.Symmetric.is}(n=t.Symmetric||(t.Symmetric={})),function(t){t.is=l.Asymmetric.is}(e=t.Asymmetric||(t.Asymmetric={}))}(n.Name||(n.Name={}))}));n(d);var v=t((function(t,n){var r=e&&e.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function u(t){try{s(r.next(t))}catch(n){o(n)}}function c(t){try{s(r.throw(t))}catch(n){o(n)}}function s(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}s((r=r.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.register=n.Algorithm=void 0;class i{sign(t){return r(this,void 0,void 0,(function*(){return"string"==typeof t?u.encode(yield this.signBinary((new o.TextEncoder).encode(t)),"url"):this.signBinary(t)}))}verify(t,n){return"string"==typeof n&&(n=u.decode(n,"url")),this.verifyBinary("string"==typeof t?(new o.TextEncoder).encode(t):t,n)}static create(t,n,e){const r=c[t];return r&&r([n,e])}static none(){return i.create("none")}static HS256(t){return i.create("HS256",t)}static HS384(t){return i.create("HS384",t)}static HS512(t){return i.create("HS512",t)}static RS256(t,n){return i.create("RS256",t,n)}static RS384(t,n){return i.create("RS384",t,n)}static RS512(t,n){return i.create("RS512",t,n)}static ES256(t,n){return i.create("ES256",t,n)}static ES384(t,n){return i.create("ES384",t,n)}static ES512(t,n){return i.create("ES512",t,n)}static PS256(t,n){return i.create("PS256",t,n)}static PS384(t,n){return i.create("PS384",t,n)}static PS512(t,n){return i.create("PS512",t,n)}}n.Algorithm=i;const c={};n.register=function(t,n){c[t]=n},function(t){let n;!function(t){let n,e;t.is=d.Name.is,function(t){t.is=d.Name.Symmetric.is}(n=t.Symmetric||(t.Symmetric={})),function(t){t.is=d.Name.Asymmetric.is}(e=t.Asymmetric||(t.Asymmetric={}))}(n=t.Name||(t.Name={}))}(i=n.Algorithm||(n.Algorithm={}))}));n(v);var y=t((function(t,n){var r=e&&e.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function u(t){try{s(r.next(t))}catch(n){o(n)}}function c(t){try{s(r.throw(t))}catch(n){o(n)}}function s(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}s((r=r.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.Symmetric=void 0,n.Symmetric=class extends v.Algorithm{verifyBinary(t,n){return r(this,void 0,void 0,(function*(){return u.encode(yield this.signBinary(t),"url")==u.encode(n,"url")}))}}}));n(y),n(t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.None=void 0;class e extends y.Symmetric{get name(){return"none"}signBinary(t){return Promise.resolve(new Uint8Array(0))}}n.None=e,v.register("none",()=>new e)}))),n(t((function(t,n){var r=e&&e.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function u(t){try{s(r.next(t))}catch(n){o(n)}}function c(t){try{s(r.throw(t))}catch(n){o(n)}}function s(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}s((r=r.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.HS=void 0;class o extends y.Symmetric{constructor(t,n){super(),this.length=t,"string"==typeof n&&(n=u.decode(n,"url")),this.key=i.crypto.subtle.importKey("raw",n,{name:"HMAC",hash:{name:"SHA-"+this.length}},!1,["sign","verify"])}get name(){return"HS"+this.length}signBinary(t){return r(this,void 0,void 0,(function*(){return new Uint8Array(yield i.crypto.subtle.sign("HMAC",yield this.key,t))}))}}n.HS=o,v.register("HS256",t=>t[0]&&new o("256",t[0])||void 0),v.register("HS384",t=>t[0]&&new o("384",t[0])||void 0),v.register("HS512",t=>t[0]&&new o("512",t[0])||void 0)}))),n(t((function(t,n){var r=e&&e.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function u(t){try{s(r.next(t))}catch(n){o(n)}}function c(t){try{s(r.throw(t))}catch(n){o(n)}}function s(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}s((r=r.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.RS=void 0;class o extends v.Algorithm{constructor(t,n,e){super(),this.length=t,n&&("string"==typeof n&&(n=u.decode(n)),this.publicKey=i.crypto.subtle.importKey("spki",n,{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-"+this.length}},!1,["verify"])),e&&("string"==typeof e&&(e=u.decode(e)),this.privateKey=i.crypto.subtle.importKey("pkcs8",e,{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-"+this.length}},!0,["sign","verify"]))}get name(){return"RS"+this.length}signBinary(t){return r(this,void 0,void 0,(function*(){return new Uint8Array(yield i.crypto.subtle.sign("RSASSA-PKCS1-v1_5",yield this.privateKey,t))}))}verifyBinary(t,n){return r(this,void 0,void 0,(function*(){return i.crypto.subtle.verify("RSASSA-PKCS1-v1_5",yield this.publicKey,n,t)}))}}n.RS=o,v.register("RS256",t=>new o("256",t[0],t[1])),v.register("RS384",t=>new o("384",t[0],t[1])),v.register("RS512",t=>new o("512",t[0],t[1]))})));var b=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Algorithm",{enumerable:!0,get:function(){return v.Algorithm}})}));n(b);var h=t((function(t,n){var r=e&&e.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function u(t){try{s(r.next(t))}catch(n){o(n)}}function c(t){try{s(r.throw(t))}catch(n){o(n)}}function s(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}s((r=r.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.Issuer=void 0;class i extends f.Actor{constructor(t,n){super(t),this.algorithm=n}get header(){return{alg:this.algorithm.name,typ:"JWT"}}get payload(){const t={iss:this.id,iat:i.issuedAt};return this.audience&&(t.aud=this.audience),this.duration&&t.iat&&(t.exp=t.iat+this.duration),t}sign(t,n){return r(this,void 0,void 0,(function*(){t=Object.assign(Object.assign({},this.payload),t),n&&(t.iat="number"==typeof n?n:n.getTime()),t=yield this.cryptos.reduce((t,n)=>r(this,void 0,void 0,(function*(){return n.encrypt(yield t)})),Promise.resolve(t));const e=`${u.encode((new o.TextEncoder).encode(JSON.stringify(this.header)),"url")}.${u.encode((new o.TextEncoder).encode(JSON.stringify(t)),"url")}`;return`${e}.${yield this.algorithm.sign(e)}`}))}static get issuedAt(){return null==i.defaultIssuedAt?Date.now():"number"==typeof i.defaultIssuedAt?i.defaultIssuedAt:i.defaultIssuedAt.getTime()}static create(t,n){return n&&new i(t,n)||void 0}}n.Issuer=i}));n(h);var p=t((function(t,n){var r=e&&e.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function u(t){try{s(r.next(t))}catch(n){o(n)}}function c(t){try{s(r.throw(t))}catch(n){o(n)}}function s(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}s((r=r.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.Password=void 0,function(t){let n;t.is=function(t){return"string"==typeof t||"object"==typeof t&&"string"==typeof t.hash&&"string"==typeof t.salt},t.hash=function(t,n,e){return r(this,void 0,void 0,(function*(){return e||(e=u.encode(i.crypto.getRandomValues(new Uint8Array(64)))),{hash:yield t.sign(e+n),salt:e}}))},t.verify=function(n,e,i){return r(this,void 0,void 0,(function*(){return(yield t.hash(n,i,e.salt)).hash==e.hash}))},function(t){t.is=function(t){return"object"==typeof t&&"string"==typeof t.hash&&"string"==typeof t.salt}}(n=t.Hashed||(t.Hashed={}))}(n.Password||(n.Password={}))}));n(p);var g=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Token=void 0,(n.Token||(n.Token={})).is=function(t){return"string"==typeof t&&/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(t)}}));n(g);var _=t((function(t,n){var r=e&&e.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function u(t){try{s(r.next(t))}catch(n){o(n)}}function c(t){try{s(r.throw(t))}catch(n){o(n)}}function s(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}s((r=r.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.Verifier=void 0;class i extends f.Actor{constructor(t,...n){if(super(t),n.length>0){this.algorithms={};for(const t of n)this.algorithms[t.name]=t}else this.algorithms=void 0}verify(t){return r(this,void 0,void 0,(function*(){let n;if(t){const i=t.split(".",3);if(i.length<2)n=void 0;else{try{const e=t.includes("/")||t.includes("+"),r=JSON.parse((new c.TextDecoder).decode(u.decode(i[0],e?"standard":"url")));if(n=JSON.parse((new c.TextDecoder).decode(u.decode(i[1],e?"standard":"url"))),this.algorithms){const t=this.algorithms[r.alg];n=3==i.length&&t&&(yield t.verify(`${i[0]}.${i[1]}`,i[2]))?n:void 0}}catch(e){n=void 0}const r=Date.now();n=n&&(null==n.exp||n.exp>r)&&(null==n.iat||n.iat<=r)&&this.verifyAudience(n.aud)?n:void 0}n&&(n=yield this.cryptos.reduce((t,n)=>r(this,void 0,void 0,(function*(){return n.decrypt(yield t)})),Promise.resolve(n)))}return n}))}verifyAudience(t){return null==t||"string"==typeof t&&t==this.id||Array.isArray(t)&&t.some(t=>t==this.id)}authenticate(t){return r(this,void 0,void 0,(function*(){return t&&t.startsWith("Bearer ")?this.verify(t.substr(7)):void 0}))}static create(t,...n){return(0==n.length||n.some(t=>!!t))&&new i(t,...n.filter(t=>!!t))||void 0}}n.Verifier=i}));n(_);var S=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Identifier=void 0,function(t){function n(t){return u.encode(t,"url")}let e;t.is=function(t,n){return"string"==typeof t&&(null==n||t.length==n)&&Array.from(t).every(t=>t>="0"&&t<="9"||t>="A"&&t<="Z"||t>="a"&&t<="z"||"-"==t||"_"==t)},t.fromBinary=n,t.toBinary=function(t){return u.decode(t,"url")},t.generate=function(t){return n(i.crypto.getRandomValues(new Uint8Array(t/4*3)))},t.fromHexadecimal=function(t){t.length%2==1&&(t+="0");const e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++)e[n]=16*Number.parseInt(t[2*n],16)+Number.parseInt(t[2*n+1],16);return n(e)},t.toHexadecimal=function(t,n){const e=u.decode(t,"url");let r=[];for(const i of e)r.push(Math.floor(i/16).toString(16),(i%16).toString(16));return n&&(r=r.slice(0,n)),r.join("")},t.length=[4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128],function(t){t.is=function(t){return"number"==typeof t&&t>=4&&t<=128&&(252&t)==t}}(e=t.Length||(t.Length={}))}(n.Identifier||(n.Identifier={}))}));n(S);var j=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Identifier=n.Verifier=n.Token=n.TextEncoder=n.TextDecoder=n.PropertyCrypto=n.Password=n.Issuer=n.Base64=n.Algorithm=n.Actor=void 0,Object.defineProperty(n,"Actor",{enumerable:!0,get:function(){return f.Actor}}),Object.defineProperty(n,"Algorithm",{enumerable:!0,get:function(){return b.Algorithm}}),n.Base64=u,Object.defineProperty(n,"Issuer",{enumerable:!0,get:function(){return h.Issuer}}),Object.defineProperty(n,"Password",{enumerable:!0,get:function(){return p.Password}}),Object.defineProperty(n,"PropertyCrypto",{enumerable:!0,get:function(){return s.PropertyCrypto}}),Object.defineProperty(n,"TextDecoder",{enumerable:!0,get:function(){return c.TextDecoder}}),Object.defineProperty(n,"TextEncoder",{enumerable:!0,get:function(){return o.TextEncoder}}),Object.defineProperty(n,"Token",{enumerable:!0,get:function(){return g.Token}}),Object.defineProperty(n,"Verifier",{enumerable:!0,get:function(){return _.Verifier}}),Object.defineProperty(n,"Identifier",{enumerable:!0,get:function(){return S.Identifier}})}));n(j);var m=t((function(t,n){var e;Object.defineProperty(n,"__esModule",{value:!0}),n.SE=void 0,(e=n.SE||(n.SE={})).is=function(t){return"object"==typeof t&&"string"==typeof t.street&&"string"==typeof t.zipCode&&"string"==typeof t.city&&"SE"==t.countryCode},e.create=function(){return{street:"",zipCode:"",city:"",countryCode:"SE"}}}));n(m);var w=t((function(t,n){var e;Object.defineProperty(n,"__esModule",{value:!0}),n.FI=void 0,(e=n.FI||(n.FI={})).is=function(t){return"object"==typeof t&&"string"==typeof t.street&&"string"==typeof t.zipCode&&"string"==typeof t.city&&"FI"==t.countryCode},e.create=function(){return{street:"",zipCode:"",city:"",countryCode:"FI"}}}));n(w);var O=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Address=void 0,function(t){let n,e;t.is=function(t){return"object"==typeof t&&r.CountryCode.Alpha2.is(t.countryCode)&&("FI"==t.countryCode&&w.FI.is(t)||"SE"==t.countryCode&&m.SE.is(t))},t.create=function(t){let n;switch(t){case"FI":n=w.FI.create();break;default:case"SE":n=m.SE.create()}return n},function(t){t.is=w.FI.is,t.create=w.FI.create}(n=t.FI||(t.FI={})),function(t){t.is=m.SE.is,t.create=m.SE.create}(e=t.SE||(t.SE={}))}(n.Address||(n.Address={}))}));n(O);var A=t((function(t,n){var e;Object.defineProperty(n,"__esModule",{value:!0}),n.Addresses=void 0,(e=n.Addresses||(n.Addresses={})).types=["primary","billing","delivery","visit"],e.is=function(t){return"object"==typeof t&&(O.Address.is(t.primary)||null==t.primary)&&(O.Address.is(t.billing)||null==t.billing)&&(O.Address.is(t.delivery)||null==t.delivery)&&(O.Address.is(t.visit)||null==t.visit)&&(O.Address.is(t.primary)||O.Address.is(t.billing)||O.Address.is(t.delivery)||O.Address.is(t.visit))},e.get=function(t,...n){let r;if(O.Address.is(t))r=t;else if(e.is(t)){0==n.length&&(n=e.types);for(const e of n){switch(e){case"primary":r=t.primary;break;case"billing":r=t.billing;break;case"delivery":r=t.delivery;break;case"visit":r=t.visit}if(r)break}}return r},e.map=function(t,n){return e.types.filter(n=>null!=t[n]).map(e=>n(e,t[e]))}}));n(A);var M=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.ClientIdentifier=void 0;class e{constructor(){}static get value(){return e.valueCache=localStorage.getItem("clientIdentifier")||void 0,e.valueCache||(e.valueCache=j.Identifier.generate(12),localStorage.setItem("clientIdentifier",e.valueCache)),e.valueCache}}n.ClientIdentifier=e}));n(M);var P=t((function(t,n){var e;Object.defineProperty(n,"__esModule",{value:!0}),n.EmailAddresses=void 0,(e=n.EmailAddresses||(n.EmailAddresses={})).types=["primary","billing"],e.is=function(t){return!("object"!=typeof t||"string"!=typeof t.primary&&null!=t.primary||"string"!=typeof t.billing&&null!=t.billing||"string"!=typeof t.primary&&"string"!=typeof t.billing)},e.get=function(t,...n){let r;if("string"==typeof t)r=t;else if(e.is(t)){0==n.length&&(n=e.types);for(const e of n){switch(e){case"primary":r=t.primary;break;case"billing":r=t.billing}if(r)break}}return r},e.map=function(t,n){return e.types.filter(n=>null!=t[n]).map(e=>n(e,t[e]))}}));n(P);var E=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Type=void 0,function(t){function n(t){return"number"==typeof t&&(0==t||1==t||2==t||3==t||5==t||6==t||7==t||8==t||9==t)}t.is=n,t.parse=function(t){const e=parseInt(t);return n(e)?e:void 0}}(n.Type||(n.Type={}))}));n(E);var H=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.SE=void 0,function(t){function n(t){return"string"==typeof t&&/^(16|18|19|20)\d{10}$/.test(t)}function e(t){return n(t)?t.substring(2):t}function r(t){return e(t)[2]>"1"}function i(t){t=e(t);let n=0,r=0;for(;;){const e=2*Number.parseInt(t[r++]);if(n+=e<10?e:1+e-10,r>=9)break;n+=Number.parseInt(t[r++])}return(10-n%10)%10}function o(t){return t=e(t),Number.parseInt(t[9])==i(t)}t.is=function(t){return"string"==typeof t&&/^(16|18|19|20)?\d{10}$/.test(t)&&o(t)},t.is10=function(t){return"string"==typeof t&&/\d{10}$/.test(t)},t.is12=n,t.as10=e,t.isOrganisation=r,t.isTemporary=function(t){return!r(t)&&e(t)[4]>"5"},t.type=function(t){return r(t=e(t))&&E.Type.parse(t[0])||0},t.parse=function(n){return/^(16|18|19|20)?(\d{6}([-+]|\s)\d{4})$/.test(n)?n.substring(0,n.length-5)+n.substring(n.length-4):t.is(n)?n:void 0},t.format=function(t){return t.substring(0,t.length-4)+"-"+t.substring(t.length-4)},t.calculateChecksum=i,t.verifyChecksum=o}(n.SE||(n.SE={}))}));n(H);var R=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.IdentityNumber=void 0,function(t){let n;t.is=function(t,n){return"SE"==n&&H.SE.is(t)||null==n&&H.SE.is(t)},function(t){t.is=H.SE.is,t.is10=H.SE.is10,t.is12=H.SE.is12,t.as10=H.SE.as10,t.isOrganisation=H.SE.isOrganisation,t.isTemporary=H.SE.isTemporary,t.type=H.SE.type,t.parse=H.SE.parse,t.format=H.SE.format,t.calculateChecksum=H.SE.calculateChecksum,t.verifyChecksum=H.SE.verifyChecksum}(n=t.SE||(t.SE={}))}(n.IdentityNumber||(n.IdentityNumber={}))}));n(R);var U=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Message=void 0;class e{static is(t){return"object"==typeof t&&"string"==typeof t.destination&&null!=t.content}static send(t,n,r){if(e.is(t)&&null==r){(r=n)||(r=window);const e=t.destination.split("#",2);r.postMessage(t={destination:e[1],content:t.content},e[0])}else"string"!=typeof r&&(r||(r=window),"string"==typeof t&&e.send({destination:t,content:n},r))}static listen(t,n,r){const i=t.split("#",2);let o="";2==i.length&&(t=i[0],o=i[1]),(r||window).addEventListener("message",r=>{const i=r.data;!e.is(i)||"*"!=t&&r.origin!=t||""!=o&&i.destination!=o||n(i.destination,i.content)})}}n.Message=e}));n(U);var k=t((function(t,n){var e;Object.defineProperty(n,"__esModule",{value:!0}),n.Name=void 0,(e=n.Name||(n.Name={})).is=function(t){return!("string"!=typeof t.first&&null!=t.first||"string"!=typeof t.last&&null!=t.last)},e.get=function(t){return"string"==typeof t?t:"object"==typeof t?[t.first,t.last].filter(t=>!!t).join(" "):""}}));n(k);var N=t((function(t,n){var e;Object.defineProperty(n,"__esModule",{value:!0}),n.PhoneNumbers=void 0,(e=n.PhoneNumbers||(n.PhoneNumbers={})).types=["primary","cellphone","landline"],e.is=function(t){return"object"==typeof t&&("string"==typeof t.primary||null==t.primary)&&("string"==typeof t.cellphone||null==t.cellphone)&&("string"==typeof t.landline||null==t.landline)&&(t.primary||t.cellphone||t.landline)},e.get=function(t,...n){let r;if("string"==typeof t)r=t;else if(e.is(t)){0==n.length&&(n=e.types);for(const e of n){switch(e){case"primary":r=t.primary;break;case"cellphone":r=t.cellphone;break;case"landline":r=t.landline}if(r)break}}return r},e.map=function(t,n){return e.types.filter(n=>null!=t[n]).map(e=>n(e,t[e]))}}));n(N);var C=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Trigger=void 0,n.Trigger=class{static is(t){return"object"==typeof t&&"string"==typeof t.name}}}));n(C);var I=t((function(t,n){var e;Object.defineProperty(n,"__esModule",{value:!0}),n.Type=void 0,(e=n.Type||(n.Type={})).is=function(t){return"string"==typeof t&&("button"==t||"checkbox"==t||"color"==t||"date"==t||"datetime-local"==t||"email"==t||"file"==t||"hidden"==t||"image"==t||"month"==t||"number"==t||"password"==t||"radio"==t||"range"==t||"reset"==t||"search"==t||"submit"==t||"tel"==t||"text"==t||"time"==t||"url"==t||"week"==t)},e.as=function(t,n="text"){return e.is(t)?t:n}}));n(I);var x=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Notice=void 0,(n.Notice||(n.Notice={})).is=function(t){return!("object"!=typeof t||"success"!=t.type&&"warning"!=t.type&&"danger"!=t.type&&"default"!=t.type||"string"!=typeof t.message||null!=t.remain&&1!=t.remain||null!=t.timeout&&"number"!=typeof t.timeout)}}));n(x);var T=t((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Notice=n.Type=n.Trigger=n.PhoneNumbers=n.Name=n.Message=n.IdentityNumber=n.EmailAddresses=n.ClientIdentifier=n.Addresses=n.Address=void 0,Object.defineProperty(n,"Address",{enumerable:!0,get:function(){return O.Address}}),Object.defineProperty(n,"Addresses",{enumerable:!0,get:function(){return A.Addresses}}),Object.defineProperty(n,"ClientIdentifier",{enumerable:!0,get:function(){return M.ClientIdentifier}}),Object.defineProperty(n,"EmailAddresses",{enumerable:!0,get:function(){return P.EmailAddresses}}),Object.defineProperty(n,"IdentityNumber",{enumerable:!0,get:function(){return R.IdentityNumber}}),Object.defineProperty(n,"Message",{enumerable:!0,get:function(){return U.Message}}),Object.defineProperty(n,"Name",{enumerable:!0,get:function(){return k.Name}}),Object.defineProperty(n,"PhoneNumbers",{enumerable:!0,get:function(){return N.PhoneNumbers}}),Object.defineProperty(n,"Trigger",{enumerable:!0,get:function(){return C.Trigger}}),Object.defineProperty(n,"Type",{enumerable:!0,get:function(){return I.Type}}),Object.defineProperty(n,"Notice",{enumerable:!0,get:function(){return x.Notice}})}));n(T);var $=T.Notice,J=T.Trigger,z=T.Message,B=T.Addresses,F=T.Address;export{J as a,z as b,F as c,j as d,B as e,$ as f}