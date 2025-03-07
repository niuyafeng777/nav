import{_ as mt}from"./chunk-BAI2P7E6.js";import{Jd as O,Kd as V,Yd as G,a as J,b as q,d as pt,f as Q,fe as R,ge as B,le as C,oe as X}from"./chunk-WKCFAT67.js";var K=pt((P,z)=>{"use strict";(function(n,u){typeof P=="object"&&typeof z=="object"?z.exports=u():typeof define=="function"&&define.amd?define([],u):typeof P=="object"?P.ClipboardJS=u():n.ClipboardJS=u()})(P,function(){return function(){var s={686:function(i,a,t){"use strict";t.d(a,{default:function(){return dt}});var c=t(279),e=t.n(c),m=t(370),g=t.n(m),v=t(817),w=t.n(v);function y(p){try{return document.execCommand(p)}catch{return!1}}var f=function(o){var r=w()(o);return y("cut"),r},b=f;function E(p){var o=document.documentElement.getAttribute("dir")==="rtl",r=document.createElement("textarea");r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[o?"right":"left"]="-9999px";var l=window.pageYOffset||document.documentElement.scrollTop;return r.style.top="".concat(l,"px"),r.setAttribute("readonly",""),r.value=p,r}var L=function(o,r){var l=E(o);r.container.appendChild(l);var d=w()(l);return y("copy"),l.remove(),d},U=function(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},l="";return typeof o=="string"?l=L(o,r):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o?.type)?l=L(o.value,r):(l=w()(o),y("copy")),l},A=U;function I(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?I=function(r){return typeof r}:I=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},I(p)}var M=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=o.action,l=r===void 0?"copy":r,d=o.container,h=o.target,_=o.text;if(l!=="copy"&&l!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(h!==void 0)if(h&&I(h)==="object"&&h.nodeType===1){if(l==="copy"&&h.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(l==="cut"&&(h.hasAttribute("readonly")||h.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return A(_,{container:d});if(h)return l==="cut"?b(h):A(h,{container:d})},F=M;function T(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(r){return typeof r}:T=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},T(p)}function x(p,o){if(!(p instanceof o))throw new TypeError("Cannot call a class as a function")}function S(p,o){for(var r=0;r<o.length;r++){var l=o[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,l.key,l)}}function it(p,o,r){return o&&S(p.prototype,o),r&&S(p,r),p}function at(p,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(o&&o.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),o&&W(p,o)}function W(p,o){return W=Object.setPrototypeOf||function(l,d){return l.__proto__=d,l},W(p,o)}function ct(p){var o=ft();return function(){var l=D(p),d;if(o){var h=D(this).constructor;d=Reflect.construct(l,arguments,h)}else d=l.apply(this,arguments);return st(this,d)}}function st(p,o){return o&&(T(o)==="object"||typeof o=="function")?o:ut(p)}function ut(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function D(p){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},D(p)}function Y(p,o){var r="data-clipboard-".concat(p);if(o.hasAttribute(r))return o.getAttribute(r)}var lt=function(p){at(r,p);var o=ct(r);function r(l,d){var h;return x(this,r),h=o.call(this),h.resolveOptions(d),h.listenClick(l),h}return it(r,[{key:"resolveOptions",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof d.action=="function"?d.action:this.defaultAction,this.target=typeof d.target=="function"?d.target:this.defaultTarget,this.text=typeof d.text=="function"?d.text:this.defaultText,this.container=T(d.container)==="object"?d.container:document.body}},{key:"listenClick",value:function(d){var h=this;this.listener=g()(d,"click",function(_){return h.onClick(_)})}},{key:"onClick",value:function(d){var h=d.delegateTarget||d.currentTarget,_=this.action(h)||"copy",k=F({action:_,container:this.container,target:this.target(h),text:this.text(h)});this.emit(k?"success":"error",{action:_,text:k,trigger:h,clearSelection:function(){h&&h.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(d){return Y("action",d)}},{key:"defaultTarget",value:function(d){var h=Y("target",d);if(h)return document.querySelector(h)}},{key:"defaultText",value:function(d){return Y("text",d)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(d){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return A(d,h)}},{key:"cut",value:function(d){return b(d)}},{key:"isSupported",value:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],h=typeof d=="string"?[d]:d,_=!!document.queryCommandSupported;return h.forEach(function(k){_=_&&!!document.queryCommandSupported(k)}),_}}]),r}(e()),dt=lt},828:function(i){var a=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(e,m){for(;e&&e.nodeType!==a;){if(typeof e.matches=="function"&&e.matches(m))return e;e=e.parentNode}}i.exports=c},438:function(i,a,t){var c=t(828);function e(v,w,y,f,b){var E=g.apply(this,arguments);return v.addEventListener(y,E,b),{destroy:function(){v.removeEventListener(y,E,b)}}}function m(v,w,y,f,b){return typeof v.addEventListener=="function"?e.apply(null,arguments):typeof y=="function"?e.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(E){return e(E,w,y,f,b)}))}function g(v,w,y,f){return function(b){b.delegateTarget=c(b.target,w),b.delegateTarget&&f.call(v,b)}}i.exports=m},879:function(i,a){a.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},a.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||a.node(t[0]))},a.string=function(t){return typeof t=="string"||t instanceof String},a.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(i,a,t){var c=t(879),e=t(438);function m(y,f,b){if(!y&&!f&&!b)throw new Error("Missing required arguments");if(!c.string(f))throw new TypeError("Second argument must be a String");if(!c.fn(b))throw new TypeError("Third argument must be a Function");if(c.node(y))return g(y,f,b);if(c.nodeList(y))return v(y,f,b);if(c.string(y))return w(y,f,b);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function g(y,f,b){return y.addEventListener(f,b),{destroy:function(){y.removeEventListener(f,b)}}}function v(y,f,b){return Array.prototype.forEach.call(y,function(E){E.addEventListener(f,b)}),{destroy:function(){Array.prototype.forEach.call(y,function(E){E.removeEventListener(f,b)})}}}function w(y,f,b){return e(document.body,y,f,b)}i.exports=m},817:function(i){function a(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var e=t.hasAttribute("readonly");e||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var m=window.getSelection(),g=document.createRange();g.selectNodeContents(t),m.removeAllRanges(),m.addRange(g),c=m.toString()}return c}i.exports=a},279:function(i){function a(){}a.prototype={on:function(t,c,e){var m=this.e||(this.e={});return(m[t]||(m[t]=[])).push({fn:c,ctx:e}),this},once:function(t,c,e){var m=this;function g(){m.off(t,g),c.apply(e,arguments)}return g._=c,this.on(t,g,e)},emit:function(t){var c=[].slice.call(arguments,1),e=((this.e||(this.e={}))[t]||[]).slice(),m=0,g=e.length;for(m;m<g;m++)e[m].fn.apply(e[m].ctx,c);return this},off:function(t,c){var e=this.e||(this.e={}),m=e[t],g=[];if(m&&c)for(var v=0,w=m.length;v<w;v++)m[v].fn!==c&&m[v].fn._!==c&&g.push(m[v]);return g.length?e[t]=g:delete e[t],this}},i.exports=a,i.exports.TinyEmitter=a}},n={};function u(i){if(n[i])return n[i].exports;var a=n[i]={exports:{}};return s[i](a,a.exports,u),a.exports}return function(){u.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return u.d(a,{a}),a}}(),function(){u.d=function(i,a){for(var t in a)u.o(a,t)&&!u.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:a[t]})}}(),function(){u.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)}}(),u(686)}().default})});var nt=Q(mt(),1),rt=Q(K(),1);var Z=(e=>(e[e.All=1]="All",e[e.Title=2]="Title",e[e.Desc=3]="Desc",e[e.Url=4]="Url",e[e.Current=5]="Current",e[e.Quick=6]="Quick",e[e.Id=7]="Id",e))(Z||{});function gt(s){return Math.floor(Math.random()*s)}function Tt(s,n){if(!n.trim())return[];n=n.toLowerCase();let{type:u,id:i}=H(),{oneIndex:a,twoIndex:t}=ot(i),c=Number(u)||1,e=[],m=[{nav:e,id:-1,title:""}],g=new Map;function v(w){w=w||s;t:for(let y=0;y<w.length;y++){let f=w[y];if(Array.isArray(f.nav)&&v(f.nav),f.name){f.name=et(f.name),f.desc=et(f.desc);let b=f.name.toLowerCase(),E=f.desc.toLowerCase(),L=f.url.toLowerCase();if(E[0]===V)continue;let A=()=>{if(b.includes(n)){let x=f,S=new RegExp(`(${n})`,"i");if(x.__name__=x.name,x.name=x.name.replace(S,"<b>$1</b>"),!g.has(x.id))return g.set(x.id,!0),e.push(x),!0}return!1},I=()=>{if(L.includes(n)&&!g.has(f.id)||f.tags.some(S=>S.url?.includes(n))&&!g.has(f.id))return g.set(f.id,!0),e.push(f),!0},M=()=>{if(E.includes(n)){let x=f,S=new RegExp(`(${n})`,"i");if(x.__desc__=x.desc,x.desc=x.desc.replace(S,"<b>$1</b>"),!g.has(x.id))return g.set(x.id,!0),e.push(x),!0}return!1},F=()=>{if(f.top&&b.includes(n)){let x=f,S=new RegExp(`(${n})`,"i");if(x.__name__=x.name,x.name=x.name.replace(S,"<b>$1</b>"),!g.has(x.id))return g.set(x.id,!0),e.push(x),!0}return!1},T=()=>f.id==n?(e.push(f),!0):!1;try{switch(c){case 4:I();break;case 2:A();break;case 3:M();break;case 6:F();break;case 7:if(T())break t;break;default:A(),M(),I()}}catch(x){console.error(x)}}}}return c===5?v(s[a].nav[t].nav):v(),e.length<=0?[]:m}function $(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}var N;function Ct(){if(tt())return;N&&clearInterval(N);let s="random-light-bg",n=document.getElementById(s)||document.createElement("div"),u=gt(360);n.id=s,n.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -3;
    transition: 1s linear;
  `,n.style.backgroundImage=`linear-gradient(${u}deg, ${$()} 0%, ${$()} 100%)`,document.body.appendChild(n),N=setInterval(()=>{if(tt()){N&&(clearInterval(N),N=null);return}let a=`linear-gradient(${u}deg, ${$()} 0%, ${$()} 100%)`;n.style.opacity="0.3",setTimeout(()=>{n.style.backgroundImage=a,n.style.opacity="1"},1e3)},1e4)}function H(){let{href:s}=window.location,n=s.split("?")[1]||"",u=nt.default.parse(n),i=u.id;if(u.id==null)try{let a=window.localStorage.getItem(O.location);a&&(i=JSON.parse(a).id)}catch{}return q(J({},u),{type:u.type,q:u.q||"",id:i})}function At(){let{id:s}=H();window.localStorage.setItem(O.location,JSON.stringify({id:s}))}function Ot(){let s=B[0]||{};try{let n=window.localStorage.getItem(O.engine);if(n){let u=JSON.parse(n),i=B.find(a=>a.name===u.name);i&&(s=i)}}catch{}return s}function Nt(s){window.localStorage.setItem(O.engine,JSON.stringify(s))}function tt(){let s=window.localStorage.getItem(O.isDark),n=window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches;return!s&&n?n:!!Number(s)}function Pt(s,n){let u=s.target,i=`copy-${Date.now()}`;return u.id=i,u.setAttribute("data-clipboard-text",n),new Promise(a=>{let t=new rt.default(`#${i}`);t.on("success",function(){t.destroy(),a(!0)}),t.on("error",function(){t.destroy(),a(!1)})})}function et(s=""){return s?s.replace(/<b>|<\/b>/g,""):""}function Lt(){let{id:s}=H(),{oneIndex:n,twoIndex:u}=ot(s),i=[];try{C[n]&&C[n]?.nav?.length>0&&(G||!C[n].nav[u].ownVisible)?i=C[n].nav[u].nav:i=[]}catch{i=[]}return i}function j(s){return String(s).padStart(2,"0")}function Mt(s){let n=document.querySelectorAll(s),u=Number.MAX_SAFE_INTEGER;if(n.length<=0)return u;let a=n[0].parentNode.clientWidth,t=0;for(let c=0;c<n.length;c++){let e=n[c];if(t+=e.clientWidth,t>a){u=c-1;break}}return u}function ht(){return"ontouchstart"in window}function Dt(){let s=new Date,n=new Date(s.getFullYear(),0,0),u=s-n,i=1e3*60*60*24;return Math.floor(u/i)}function kt(){let s=X("_weeks"),n=new Date,u=n.getFullYear(),i=j(n.getHours()),a=j(n.getMinutes()),t=j(n.getSeconds()),c=n.getMonth()+1,e=n.getDate(),m=n.getDay(),g=j(e);return{year:u,hours:i,minutes:a,seconds:t,month:c,date:e,zeroDate:g,dayText:s[m]}}function Rt(){let s=ht()?R.appTheme:R.theme;return s==="Current"?R.theme:s}function ot(s,n=0){s=Number(s);let u=n,i=n,a=n,t=[];t:for(let c=0;c<C.length;c++){let e=C[c];if(e.title&&e.id===s){u=c,t.push(e.title);break}if(Array.isArray(e.nav))for(let m=0;m<e.nav.length;m++){let g=e.nav[m];if(g.title&&g.id===s){u=c,i=m,t.push(e.title);break t}if(Array.isArray(g.nav)){for(let v=0;v<g.nav.length;v++)if(g.nav[v].id===s){u=c,i=m,a=v,t.push(e.title);break t}}}}return{oneIndex:u,twoIndex:i,threeIndex:a,breadcrumb:t}}export{Z as a,Tt as b,$ as c,Ct as d,H as e,At as f,Ot as g,Nt as h,tt as i,Pt as j,et as k,Lt as l,Mt as m,ht as n,Dt as o,kt as p,Rt as q,ot as r};
