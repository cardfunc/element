import{r as t,h as e,c as s,H as o}from"./p-7fe28151.js";import{e as i,c as n,u as r,d as l}from"./p-94c2b65f.js";import{c}from"./p-93a05e9c.js";class a{constructor(e){t(this,e)}render(){const t="string"==typeof this.value?JSON.parse(this.value):this.value;return c.SE.is(t)||c.FI.is(t)?[e("address",null,t.street,e("br",null),t.zipCode," ",t.city,e("br",null),i.Name.from("en",t.countryCode))]:e("p",null,"Unknown address country: ",JSON.stringify(t))}}a.style=".sc-smoothly-address-display-h{display:block;border-top:1px solid rgb(var(--smoothly-medium-color));border-bottom:1px solid rgb(var(--smoothly-medium-color))}";class u{constructor(e){t(this,e),this.change=s(this,"change",7)}get address(){return"string"==typeof this.value?JSON.parse(this.value):this.value}onTrigger(t){"cancel"==t.detail.name&&this.change.emit(this.address)}onSubmit(t){t.stopPropagation();const e=Object.assign(Object.assign({},t.detail),{countryCode:i.Name.parse(t.detail.country),country:void 0});this.change.emit(e)}render(){return c.SE.is(this.address)||c.FI.is(this.address)?[e("form",null,e("smoothly-input",{type:"text",name:"street",value:this.address.street},"Street"),e("smoothly-input",{type:"postal-code",name:"zipCode",value:this.address.zipCode},"Zip"),e("smoothly-input",{type:"text",name:"city",value:this.address.city},"City"),e("smoothly-input",{type:"text",name:"country",value:i.Name.from("en",this.address.countryCode)},"Country"),e("div",null,e("smoothly-submit",{color:"primary",fill:"clear",prevent:!0,onSubmit:t=>this.onSubmit(t)},"Save"),e("smoothly-trigger",{color:"primary",fill:"clear",name:"cancel"},"Cancel")))]:e("p",null,"Unknown address country: ",JSON.stringify(this.address))}}u.style=".sc-smoothly-address-edit-h{display:block;border-top:1px solid rgb(var(--smoothly-medium-color));border-bottom:1px solid rgb(var(--smoothly-medium-color))}[hidden].sc-smoothly-address-edit-h{display:none}form.sc-smoothly-address-edit{display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row;-ms-flex-wrap:wrap;flex-wrap:wrap}form.sc-smoothly-address-edit>*.sc-smoothly-address-edit{width:100%}smoothly-input.sc-smoothly-address-edit{border-bottom:1px solid rgb(var(--smoothly-medium-color))}smoothly-input[name=zipCode].sc-smoothly-address-edit{width:calc(30% - 1px)}smoothly-input[name=city].sc-smoothly-address-edit{width:calc(70% - 1px);border-left:1px solid rgb(var(--smoothly-medium-color))}smoothly-submit.sc-smoothly-address-edit,smoothly-trigger.sc-smoothly-address-edit{width:auto;float:right;margin:5px}";var h=n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.State=void 0,(e.State||(e.State={})).copy=function(t){return{value:t.value,selection:{start:t.selection.start,end:t.selection.end}}}}));r(h);var d=n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.StateEditor=void 0;class s{constructor(t){this.value=t.value,this.selection={start:t.selection.start,end:t.selection.end}}get(t){return this.value[t]}is(t,...e){const s=this.get(t);return e.some(t=>s==t)}isDigit(t){const e=this.get(t);return e>="0"&&e<="9"}match(t){return this.value.match(t)}replace(t,e,o){let i;if("string"==typeof t&&"string"==typeof e){let s;for(i=this;(s=i.value.search(t))>-1;)i=i.replace(s,s+t.length,e)}else if("number"==typeof t&&"number"==typeof e){const n={value:this.value,selection:{start:this.selection.start,end:this.selection.end}};o||(o=""),n.value=this.value.slice(0,t)+o+this.value.slice(e,this.value.length),this.selection.start>=e?n.selection.start=this.selection.start+o.length-e+t:this.selection.start>t&&this.selection.start<e&&(n.selection.start=Math.min(this.selection.start,t+o.length)),this.selection.end>=e?n.selection.end=this.selection.end+o.length-e+t:this.selection.end>t&&this.selection.end<e&&(n.selection.end=Math.min(this.selection.end,t+o.length)),i=new s(n)}return i||this}insert(t,e){return this.replace(t,t,e)}append(t){return this.insert(this.value.length,t)}prepend(t){return this.insert(0,t)}suffix(t){return new s({value:this.value+t,selection:this.selection})}delete(t,e){let s;if(this.value)if("string"==typeof t){let e;for(s=this;(e=s.value.search(t))>-1;)s=s.delete(e,e+t.length)}else s=this.replace(t,e||t+1,"");else s=this;return s}truncate(t){return this.value.length>=t?this.delete(t,this.value.length):this}pad(t,e,s){let o=this;for(;t>o.value.length+e.length;)o=o.insert(s,e);return t>o.value.length&&(o=o.insert(s,e.substring(0,t-o.value.length))),o}padEnd(t,e){return this.pad(t,e,this.value.length)}padStart(t,e){return this.pad(t,e,0)}map(t){let e=this,s=0;for(let o=0;o<this.value.length;o++){const i=t(this.get(o),o);e=e.replace(s,s+1,i),s+=i.length}return e}static copy(t){return new s(Object.assign({},t))}static create(){return new s({value:"",selection:{start:0,end:0}})}static modify(t){return new s("string"==typeof t?{value:t,selection:{start:t.length,end:t.length}}:t)}}e.StateEditor=s}));r(d);var m=n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Action=void 0,(e.Action||(e.Action={})).apply=function(t,e,s){const o=h.State.copy(t.unformat(d.StateEditor.copy(e)));if(s)if("ArrowLeft"==s.key)o.selection.start-=o.selection.start>0?1:0,s.shiftKey||(o.selection.end=o.selection.start);else if("ArrowRight"==s.key)o.selection.end+=o.selection.end<o.value.length?1:0,s.shiftKey||(o.selection.start=o.selection.end);else if("Home"==s.key)o.selection.start=0,s.shiftKey||(o.selection.end=o.selection.start);else if("End"==s.key)o.selection.end=o.value.length,s.shiftKey||(o.selection.start=o.selection.end);else if(s.ctrlKey)switch(s.key){case"a":o.selection.start=0,o.selection.end=o.value.length}else{if(o.selection.start!=o.selection.end){switch(s.key){case"Delete":case"Backspace":s=void 0}o.value=o.value.substring(0,o.selection.start)+o.value.substring(o.selection.end),o.selection.end=o.selection.start}if(s)switch(s.key){case"Unidentified":break;case"Backspace":o.selection.start>0&&(o.value=o.value.substring(0,o.selection.start-1)+o.value.substring(o.selection.start),o.selection.start=--o.selection.end);break;case"Delete":o.selection.start<o.value.length&&(o.value=o.value.substring(0,o.selection.start)+o.value.substring(o.selection.start+1));break;default:t.allowed(s.key,o)&&(o.value=o.value.substring(0,o.selection.start)+s.key+o.value.substring(o.selection.start),o.selection.start=o.selection.end+=s.key.length)}}return t.format(d.StateEditor.copy(o))}}));r(m);var f=n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.parse=e.format=e.get=e.add=void 0;const s={};function o(t,...e){const o=s[t];return o&&o(e)}e.add=function(t,e){s[t]=e},e.get=o,e.format=function(t,e,...s){const i=o(e,s);return i?i.format(d.StateEditor.modify(i.toString(t))).value:""},e.parse=function(t,e,...s){const i=o(e,s);return i?i.fromString(i.unformat(d.StateEditor.modify(t)).value):void 0}}));r(f),r(n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});class s{toString(t){return"string"==typeof t?t:""}fromString(t){return"string"==typeof t?t:void 0}format(t){return Object.assign(Object.assign({},t),{type:"text",autocomplete:"cc-csc",length:[3,3],pattern:/^\d{3}$/})}unformat(t){return t}allowed(t,e){return e.value.length<3&&t>="0"&&t<="9"}}f.add("card-csc",()=>new s)}))),r(n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});class s{toString(t){return Array.isArray(t)&&2==t.length&&"number"==typeof t[0]&&"number"==typeof t[1]?t[0].toString().padStart(2," ")+t[1].toString().padStart(2," "):""}fromString(t){return"string"==typeof t&&4==t.length?[Number.parseInt(t.slice(0,2)),Number.parseInt(t.slice(2))]:void 0}format(t){let e=t;return t.value.length>0&&!t.is(0,"0","1")&&(e=e.prepend("0")),e.value.length>1&&(e=e.insert(2," / ")),Object.assign(Object.assign({},e),{type:"text",autocomplete:"cc-exp",length:[7,7],pattern:/^(0[1-9]|1[012]) \/ \d\d$/})}unformat(t){return t.delete(" / ")}allowed(t,e){return e.value.length<4&&t>="0"&&t<="9"}}f.add("card-expires",()=>new s)}))),r(n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});class s{toString(t){return"string"==typeof t?t:""}fromString(t){return"string"==typeof t?t:void 0}format(t){const e=o(t.value),s=t.map((t,s)=>t+(s%4==3&&s+1<e.length[0]?" ":""));return Object.assign(Object.assign({},s),{type:"text",autocomplete:"cc-number",length:e.length.slice(1),pattern:e.verification,classes:["issuer-"+e.icon]})}unformat(t){return t.delete(" ")}allowed(t,e){const s=o(e.value);return t>="0"&&t<="9"&&e.value.length<s.length[0]}}function o(t){let e=i;for(const s in n)if(n.hasOwnProperty(s)&&n[s].identification.test(t)){e=Object.assign(Object.assign(Object.assign({},i),{name:s}),n[s]);break}return e}f.add("card-number",()=>new s);const i={name:"unknown",verification:/^\d{19}$/,identification:/^\d/,length:[16,16,19],icon:"generic"},n={amex:{verification:/^3[47][0-9]{2}\s[0-9]{4}\s[0-9]{4}\s[0-9]{3}$/,identification:/^3[47]/,length:[15,18,18],icon:"amex"},dankort:{verification:/^(5019)\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/,identification:/^(5019)\d+/,length:[16,19,19],icon:"generic"},diners:{verification:/^3(?:0[0-5]|[68][0-9])[0-9]\s[0-9]{4}\s[0-9]{4}\s[0-9]{2}$/,identification:/^3(?:0[0-5]|[68][0-9])/,length:[14,17,17],icon:"diners"},discover:{verification:/^6(?:011|5[0-9]{2})\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/,identification:/^6(?:011|5[0-9]{2})/,length:[16,19,19],icon:"generic"},electron:{verification:/^((4026|4405|4508|4844|4913|4917)\s[0-9]{4}\s[0-9]{4}\s[0-9]{4})|((4175)\s(00)[0-9]{2}\s[0-9]{4}\s[0-9]{4})$/,identification:/^(4026|417500|4405|4508|4844|4913|4917)/,length:[16,19,19],icon:"generic"},interpayment:{verification:/^(636)[0-9]\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/,identification:/^(636)/,length:[16,19,19],icon:"generic"},jcb:{verification:/^((?:2131|1800)\s[0-9]{4}\s[0-9]{4}\s[0-9]{4})|(35[0-9]{2}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4})$/,identification:/^(?:2131|1800|35\d{3})/,length:[16,19,19],icon:"generic"},unionpay:{verification:/^(62|88)[0-9]{2}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/,identification:/^(62|88)/,length:[16,19,19],icon:"generic"},maestro:{verification:/^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/,identification:/^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)/,length:[16,19,19],icon:"maestro"},mastercard:{verification:/^5[1-5][0-9]{2}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/,identification:/^5[1-5][0-9]/,length:[16,19,19],icon:"mastercard"},visa:{verification:/^4[0-9]{3}\s[0-9]{4}\s[0-9]{4}\s[0-9](?:[0-9]{3})?$/,identification:/^4[0-9]/,length:[16,16,19],icon:"visa"}}}))),r(n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});class s{toString(t){return"string"==typeof t?t:""}fromString(t){return"string"==typeof t?t:void 0}format(t){return Object.assign(Object.assign({},t),{type:"password",autocomplete:"current-password"})}unformat(t){return t}allowed(t,e){return!0}}f.add("password",()=>new s)}))),r(n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});class s{toString(t){return t&&"number"==typeof t?(100*t).toString():""}fromString(t){return"string"==typeof t&&Number.parseFloat(t)?Number.parseFloat(t)/100:void 0}format(t){return Object.assign(Object.assign({},t.value?t.suffix(" %"):t),{type:"text",length:[3,void 0],pattern:/^\d+(.\d)? %+$/})}unformat(t){return t.delete(" %")}allowed(t,e){return t>="0"&&t<="9"||"."==t&&!e.value.includes(".")}}f.add("percent",()=>new s)})));var p=n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.phonePrefix=void 0,e.phonePrefix=[{countryCode:"+46",areaCodes:["011","0120","0121","0122","0123","0125","013","0140","0141","0142","0143","0144","0150","0151","0152","0155","0156","0157","0158","0159","016","0171","0173","0174","0175","0176","018","019","021","0220","0221","0222","0223","0224","0225","0226","0227","023","0240","0241","0243","0246","0247","0248","0250","0251","0253","0258","026","0270","0271","0278","0280","0281","0290","0291","0292","0293","0294","0295","0297","0300","0301","0302","0303","0304","031","0320","0321","0322","0325","033","0340","0345","0346","035","036","0370","0371","0372","0380","0381","0382","0383","0390","0392","0393","040","0410","0411","0413","0414","0415","0416","0417","0418","042","0430","0431","0433","0435","044","0451","0454","0455","0456","0457","0459","046","0470","0471","0472","0474","0476","0477","0478","0479","0480","0481","0485","0486","0490","0491","0492","0493","0494","0495","0496","0498","0499","0500","0501","0502","0503","0504","0505","0506","0510","0511","0512","0513","0514","0515","0520","0521","0522","0523","0524","0525","0526","0528","0530","0531","0532","0533","0534","054","0550","0551","0552","0553","0554","0555","0560","0563","0564","0565","0570","0571","0573","0580","0581","0582","0583","0584","0585","0586","0587","0589","0590","0591","060","0611","0612","0613","0620","0621","0622","0623","0624","063","0640","0642","0643","0644","0645","0647","0650","0651","0652","0653","0657","0660","0661","0662","0663","0670","0671","0672","0680","0682","0684","0687","0690","0691","0692","0693","0695","0696","08","090","0910","0911","0912","0913","0914","0915","0916","0918","0920","0921","0922","0923","0924","0925","0926","0927","0928","0929","0930","0932","0933","0934","0935","0940","0941","0942","0943","0950","0951","0952","0953","0954","0960","0961","0970","0971","0973","0975","0976","0977","0978","0980","0981","010","020","0378","070","072","073","076","079","0710","0740","0746","0749","0741","0742","0743","0744","0745","0747","075","077","078","0900","0939","0944","0969","099"]}]}));r(p),r(n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});class s{toString(t){return"string"==typeof t?t:""}fromString(t){return"string"==typeof t?t:void 0}format(t){let e=t;if(e.value.startsWith("+")){for(const s of p.phonePrefix)if(e.value.startsWith(s.countryCode))for(let t of s.areaCodes)t=t.substring(1),e.value.startsWith(s.countryCode+t)&&!e.value.includes("-")&&(e=e.insert(s.countryCode.length+t.length,"-"))}else{const t=p.phonePrefix[0];for(const s of t.areaCodes)e.value.startsWith(s)&&!e.value.includes("-")&&(e=e.insert(s.length,"-"),e=e.delete(0),e=e.insert(0,t.countryCode))}if(e.value.includes("-")){const t=e.value.indexOf("-")+1,s=e.value.substring(t,e.value.length+1).length;switch(s){case 4:e=e.insert(t+2," ");break;case 5:e=e.insert(t+3," ");break;case 6:e=e.insert(t+2," "),e=e.insert(t+5," ");break;case 7:e=e.insert(t+3," "),e=e.insert(t+6," ");break;case 8:case 9:e=e.insert(t+3," "),e=e.insert(t+7," ")}if(s>9){const o=Math.ceil(s/3)-1;if(o>0)for(let s=0;s<o;s++)e=e.insert(3*s+3+s+t," ")}}return Object.assign(Object.assign({},e),{type:"text",autocomplete:"tel"})}unformat(t){return t.delete(" ").delete("-")}allowed(t,e){return t>="0"&&t<="9"||0==e.selection.start&&"+"==t&&!e.value.includes("+")}}f.add("phone",()=>new s)}))),r(n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});class s{constructor(t){this.country=t}toString(t){return"string"==typeof t?t:""}fromString(t){return"string"==typeof t?t:void 0}format(t){const e=!t.value.includes(" ")&&t.value.length>=4?t.insert(3," "):t;return Object.assign(Object.assign({},e.truncate(6)),{type:"text",autocomplete:"postal-code",length:[6,6],pattern:/^\d{3} \d{2}$/})}unformat(t){return t.delete(" ")}allowed(t,e){return e.value.length<=5&&t>="0"&&t<="9"}}f.add("postal-code",t=>new s(t&&t.length>0?t[0]:void 0))}))),r(n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});class s{constructor(t){this.currency=t}toString(t){return"string"==typeof t?t:""}fromString(t){return"string"==typeof t?Number(t):void 0}format(t){let e=t.value.includes(".")?t.value.indexOf("."):t.value.length,s=d.StateEditor.copy(t);const o=this.currency&&null!=l.Currency.decimalDigits(this.currency)?l.Currency.decimalDigits(this.currency):2;s=s.truncate(e+o+1);const i=e<=0?0:Math.ceil(e/3)-1;for(let n=0;n<i;n++)s=s.insert(e-3*(i-n)," "),e++;return s=this.currency&&(s.value.length>1||1==s.value.length&&"."!=s.value.charAt(0))?s.suffix(" "+this.currency):s,Object.assign(Object.assign({},s),{type:"text",length:[3,void 0],pattern:new RegExp("^(\\d{0,3})( \\d{3})*(\\.\\d+)?"+(this.currency?" "+this.currency:"")+"$")})}unformat(t){return this.currency?t.delete(" ").delete(""+this.currency):t.delete(" ")}allowed(t,e){return t>="0"&&t<="9"||"."==t&&!e.value.includes(".")}}f.add("price",t=>new s(t&&t.length>0?t[0]:void 0))}))),r(n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});class s{constructor(t){this.settings=t}toString(t){return"string"==typeof t?t:""}fromString(t){return"string"==typeof t?t:void 0}format(t){return Object.assign(Object.assign(Object.assign({},t),{type:"text"}),this.settings)}unformat(t){return t}allowed(t,e){return null==this.settings.length||null==this.settings.length[1]||e.value.length<this.settings.length[1]}}f.add("text",t=>new s(t||{}))})));var b=n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.parse=e.format=e.get=void 0,Object.defineProperty(e,"get",{enumerable:!0,get:function(){return f.get}}),Object.defineProperty(e,"format",{enumerable:!0,get:function(){return f.format}}),Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return f.parse}})}));r(b);var y=n((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.parse=e.format=e.get=e.StateEditor=e.State=e.Action=void 0,Object.defineProperty(e,"Action",{enumerable:!0,get:function(){return m.Action}}),Object.defineProperty(e,"State",{enumerable:!0,get:function(){return h.State}}),Object.defineProperty(e,"StateEditor",{enumerable:!0,get:function(){return d.StateEditor}}),Object.defineProperty(e,"get",{enumerable:!0,get:function(){return b.get}}),Object.defineProperty(e,"format",{enumerable:!0,get:function(){return b.format}}),Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return b.parse}})}));r(y);var g=y.get,v=y.StateEditor,w=y.Action;class j{constructor(e){t(this,e),this.type="text",this.required=!1,this.minLength=0,this.maxLength=Number.POSITIVE_INFINITY,this.autocomplete="on",this.disabled=!1,this.smoothlyChanged=s(this,"smoothlyChanged",7)}get formatter(){let t;switch(this.type){case"price":t=g("price",this.currency);break;default:t=g(this.type)}return t||g("text")}valueWatcher(t,e){this.lastValue!=t&&(this.lastValue=t,this.state=Object.assign(Object.assign({},this.state),{value:this.formatter.format(v.copy(this.formatter.unformat(v.copy({value:t,selection:this.state.selection})))).value})),t!=e&&this.smoothlyChanged.emit({name:this.name,value:t})}componentWillLoad(){const t=this.formatter,e=t.toString(this.value)||"",s=e.length;this.state=t.format(v.copy(t.unformat(v.copy({value:e,selection:{start:s,end:s}}))))}onBlur(t){}onFocus(t){const e=this.formatter.format(v.copy(this.formatter.unformat(v.copy(Object.assign({},this.state)))));t.target&&this.updateBackend(e,t.target)}onClick(t){const e=t.target;this.state=Object.assign(Object.assign({},this.state),{value:e.value,selection:{start:null!=e.selectionStart?e.selectionStart:e.value.length,end:null!=e.selectionEnd?e.selectionEnd:e.value.length}});const s=this.formatter.format(v.copy(this.formatter.unformat(v.copy(Object.assign({},this.state)))));this.updateBackend(s,e)}onKeyDown(t){if(t.key&&"Unidentified"!=t.key){const e=t.target;this.state=Object.assign(Object.assign({},this.state),{value:e.value,selection:{start:null!=e.selectionStart?e.selectionStart:e.value.length,end:null!=e.selectionEnd?e.selectionEnd:e.value.length}}),(t.ctrlKey&&"v"==t.key||1!=t.key.length)&&"ArrowLeft"!=t.key&&"ArrowRight"!=t.key&&"Delete"!=t.key&&"Backspace"!=t.key&&"Home"!=t.key&&"End"!=t.key||(t.preventDefault(),this.processKey(t,e))}}onPaste(t){t.preventDefault();const e=t.clipboardData?t.clipboardData.getData("text"):"",s=t.target;for(const o of e)this.processKey({key:o},s)}onInput(t){const e=t.target,s=e.value;if(s){t.preventDefault(),this.processKey({key:"a",ctrlKey:!0},e);for(const t of s)this.processKey({key:t},e)}}processKey(t,e){const s=w.apply(this.formatter,this.state,t);this.updateBackend(s,e)}updateBackend(t,e){t.value!=e.value&&(e.value=t.value),null!=e.selectionStart&&t.selection.start!=e.selectionStart&&(e.selectionStart=t.selection.start),null!=e.selectionEnd&&t.selection.end!=e.selectionEnd&&(e.selectionEnd=t.selection.end),this.state=t,this.value=this.lastValue=this.formatter.fromString(this.formatter.unformat(v.copy(Object.assign({},this.state))).value)}hostData(){var t;return{class:{"has-value":null===(t=this.state)||void 0===t?void 0:t.value}}}__stencil_render(){return[e("input",{name:this.name,type:this.state.type,placeholder:this.placeholder,required:this.required,autocomplete:this.state.autocomplete,disabled:this.disabled,pattern:this.state.pattern&&this.state.pattern.source,value:this.state.value,onInput:t=>this.onInput(t),onFocus:t=>this.onFocus(t),onClick:t=>this.onClick(t),onBlur:t=>this.onBlur(t),onKeyDown:t=>this.onKeyDown(t),onPaste:t=>this.onPaste(t)}),e("label",{htmlFor:this.name},e("slot",null))]}static get watchers(){return{value:["valueWatcher"]}}render(){return e(o,this.hostData(),this.__stencil_render())}}j.style=".sc-smoothly-input-h{display:block;position:relative}[hidden].sc-smoothly-input-h{display:none}label.sc-smoothly-input{position:absolute;left:.4em;top:.6em;color:rgb(var(--smoothly-text-tint));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;z-index:-1;-webkit-transition:font-size .1s;transition:font-size .1s;-webkit-transition-timing-function:ease;transition-timing-function:ease}input.sc-smoothly-input{padding:1em .4em .2em .4em;width:calc(100% - 2 * .4em - 2px);background:none;border:0}.has-value.sc-smoothly-input-h>label.sc-smoothly-input{top:.3em;top:.4em;font-size:60%;z-index:0}.sc-smoothly-input-h:focus-within>label.sc-smoothly-input{top:.3em;top:.4em;font-size:60%;z-index:0}input.sc-smoothly-input:focus{outline:none}input.sc-smoothly-input:-webkit-autofill,input.sc-smoothly-input:-webkit-autofill:hover,input.sc-smoothly-input:-webkit-autofill:focus,input.sc-smoothly-input:-webkit-autofill:active{box-shadow:0 0 0 30px unset inset !important;-webkit-box-shadow:0 0 0 30px unset inset !important}input.sc-smoothly-input:-webkit-autofill{-webkit-text-fill-color:unset !important}input.sc-smoothly-input:-internal-autofill-previewed,input.sc-smoothly-input:-internal-autofill-selected,textarea.sc-smoothly-input:-internal-autofill-previewed,textarea.sc-smoothly-input:-internal-autofill-selected,select.sc-smoothly-input:-internal-autofill-previewed,select.sc-smoothly-input:-internal-autofill-selected{background-color:none !important;background-image:none !important;color:unset !important}";class O{constructor(e){t(this,e),this.disabled=!1,this.submitEvent=s(this,"submit",7)}get form(){return this.button&&this.button.form||void 0}async handleSubmit(t){if(!this.processing){this.processing=!0,this.prevent&&t.preventDefault();const e={};if(this.form){const t=this.form.elements;for(let o=0;o<t.length;o++){const s=t.item(o);x(s)&&s.name&&(e[s.name]=s.value)}const s=this.form.getElementsByTagName("smoothly-input");for(let o=0;o<s.length;o++){const t=s.item(o);x(t)&&t.name&&(e[t.name]=t.value)}}const s=this.submitEvent.emit(e);console.log("smoothly-submit",s),this.processing=!1}}async submit(){let t;return(t=!!this.form)&&this.form.submit(),t}render(){return[e("smoothly-spinner",{active:this.processing}),e("button",{type:"submit",disabled:this.disabled||this.processing,ref:t=>this.button=t},e("slot",null))]}}function x(t){return"string"==typeof t.name&&"string"==typeof t.value}O.style=".sc-smoothly-submit-h{display:block;border-width:1px;border-style:solid;border-radius:3px}[hidden].sc-smoothly-submit-h{display:none}[disabled].sc-smoothly-submit-h{opacity:.5}button.sc-smoothly-submit{padding:.2em .3em;font-size:110%;font-weight:400}[processing].sc-smoothly-submit-h{border-color:rgb(var(--smoothly-light-color))}[processing].sc-smoothly-submit-h>button.sc-smoothly-submit{color:rgb(var(--smoothly-light-contrast));background:rgb(var(--smoothly-light-color))}.sc-smoothly-submit-h:not([processing]):not([disabled]):hover,.sc-smoothly-submit-h:not([processing]):not([disabled]):focus,.sc-smoothly-submit-h:not([processing]):not([disabled]):active{border-color:rgb(var(--smoothly-submit-border))}[expand=fill].sc-smoothly-submit-h>button.sc-smoothly-submit,[expand=block].sc-smoothly-submit-h>button.sc-smoothly-submit{width:100%}[expand=fill].sc-smoothly-submit-h{border-left:none;border-right:none}";export{a as smoothly_address_display,u as smoothly_address_edit,j as smoothly_input,O as smoothly_submit}