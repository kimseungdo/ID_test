(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var h=this||self;function aa(){}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}} 
function p(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p=ba:p=ca;return p.apply(null,arguments)}var da=Date.now;function q(a,b){function c(){}c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a};function r(a,b){Array.prototype.forEach.call(a,b,void 0)};function ha(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var v=class{constructor(a,b){this.a=a===u&&b||"";this.b=ia}};v.prototype.f=!0;v.prototype.c=function(){return this.a.toString()};var ja=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ia={},u={};function w(a){w[" "](a);return a}w[" "]=aa;function x(){}var ka="function"==typeof Uint8Array;function la(a,b,c){a.a=null;b||(b=[]);a.l=void 0;a.f=-1;a.b=b;a:{if(b=a.b.length){--b;var d=a.b[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||ka&&d instanceof Uint8Array)){a.h=b-a.f;a.c=d;break a}}a.h=Number.MAX_VALUE}a.j={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.h)d+=a.f,a.b[d]=a.b[d]||z;else{var e=a.h+a.f;a.b[e]||(a.c=a.b[e]={});a.c[d]=a.c[d]||z}}var z=[]; 
function A(a,b){if(b<a.h){b+=a.f;var c=a.b[b];return c===z?a.b[b]=[]:c}if(a.c)return c=a.c[b],c===z?a.c[b]=[]:c}function C(a,b,c){a=A(a,b);return null==a?c:a}function D(a,b){a=A(a,b);a=null==a?a:!!a;return null==a?!1:a}function ma(a){var b=na;a.a||(a.a={});if(!a.a[1]){var c=A(a,1);c&&(a.a[1]=new b(c))}return a.a[1]}function oa(a){var b=pa;a.a||(a.a={});if(!a.a[1]){for(var c=A(a,1),d=[],e=0;e<c.length;e++)d[e]=new b(c[e]);a.a[1]=d}b=a.a[1];b==z&&(b=a.a[1]=[]);return b}x.prototype.toString=function(){return this.b.toString()};function na(a){la(this,a,qa)}q(na,x);function pa(a){la(this,a,null)}q(pa,x);var qa=[1];function ra(a){la(this,a,null)}q(ra,x);var sa={capture:!0},ta={passive:!0},ua=ha(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});h.addEventListener("test",null,b)}catch(b){}return a});function va(a){return a?a.passive&&ua()?a:a.capture||!1:!1}function E(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,va(d))};function wa(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)wa(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};function xa(){var a=G;try{var b;if(b=!!a&&null!=a.location.href)a:{try{w(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}let H=[];const ya=()=>{const a=H;H=[];for(const b of a)try{b()}catch(c){}};var za=a=>{var b=I;"complete"===b.readyState||"interactive"===b.readyState?(H.push(a),1==H.length&&(window.Promise?Promise.resolve().then(ya):window.setImmediate?setImmediate(ya):setTimeout(ya,0))):b.addEventListener("DOMContentLoaded",a)};var Aa=(a=null)=>a&&23==a.getAttribute("data-jc")?a:document.querySelector('[data-jc="23"]');var I=document,J=window;function K(){this.b=this.b;this.c=this.c}K.prototype.b=!1;function Ba(a){a.b||(a.b=!0,a.f())}K.prototype.f=function(){if(this.c)for(;this.c.length;)this.c.shift()()};var L={};var Ca=class{},M=class extends Ca{constructor(a,b){super();if(b!==L)throw Error("Bad secret");this.a=a}toString(){return this.a}};new M("about:blank",L);var Da=new M("about:invalid#zTSz",L);const Ea="DATA HTTP HTTPS MAILTO FTP RELATIVE".split(" ");function Fa(a=Ea){var b;var c="#".substring(0,11).indexOf(":");c=null!==(b=Ga[0>c?"":"#".substr(0,c).toLowerCase()])&&void 0!==b?b:Ha;if(a.includes(c.scheme)&&c.g("#"))return new M("#",L)}function Ia(a=Ea){return Fa(a)||Da} 
const Ha={scheme:"RELATIVE",g:a=>/^[^:/?#]*(?:[/?#]|$)/i.test(a)},Ga={tel:{scheme:"TEL",g:N("tel:")},callto:{scheme:"CALLTO",g:a=>/^callto:\+?\d*$/i.test(a)},ssh:{scheme:"SSH",g:N("ssh://")},rtsp:{scheme:"RTSP",g:N("rtsp://")},data:{scheme:"DATA",g:a=>{{const b=a.match(/^data:(.*);base64,[a-z0-9+\/]+=*$/i);if(a=2===(null===b||void 0===b?void 0:b.length))a=b[1].match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),a=2===(null===a||void 0===a?void 0:a.length)&&(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(a[1])|| 
/^video\/(?:mpeg|mp4|ogg|webm|x-matroska)$/i.test(a[1])||/^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(a[1]))}return a}},http:{scheme:"HTTP",g:N("http:")},https:{scheme:"HTTPS",g:N("https:")},ftp:{scheme:"FTP",g:N("ftp:")},mailto:{scheme:"MAILTO",g:N("mailto:")},intent:{scheme:"INTENT",g:N("intent:")},market:{scheme:"MARKET",g:N("market:")},itms:{scheme:"ITMS",g:N("itms:")},"itms-appss":{scheme:"ITMS_APPSS",g:N("itms-appss:")}}; 
function N(a){return b=>b.substr(0,a.length).toLowerCase()===a};const Ja="HTTP HTTPS MAILTO FTP RELATIVE MARKET ITMS INTENT ITMS_APPSS".split(" "); 
var Ka=()=>{var a=`${"http:"===J.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return b=>{b={id:"unsafeurl",ctx:625,url:b};var c=[];for(d in b)wa(d,b[d],c);var d=c.join("&");if(d){b=a.indexOf("#");0>b&&(b=a.length);c=a.indexOf("?");if(0>c||c>b){c=b;var e=""}else e=a.substring(c+1,b);b=[a.substr(0,c),e,a.substr(b)];c=b[1];b[1]=d?c?c+"&"+d:d:c;d=b[0]+(b[1]?"?"+b[1]:"")+b[2]}else d=a;navigator.sendBeacon&&navigator.sendBeacon(d,"")}};var La=(a,b)=>{if(a)for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Ma=!!window.google_async_iframe_id;let G=Ma&&window.parent||window;var Na=()=>{var a=I;try{return a.querySelectorAll("*[data-ifc]")}catch(b){return[]}},Oa=(a,b)=>{a&&La(b,(c,d)=>{a.style[d]=c})},Pa=a=>{var b=I.body;const c=document.createDocumentFragment(),d=a.length;for(let e=0;e<d;++e)c.appendChild(a[e]);b.appendChild(c)};var Qa=(a=[])=>{h.google_logging_queue||(h.google_logging_queue=[]);h.google_logging_queue.push([12,a])};let O=null;class Ra{constructor(a,b,c,d=0,e){this.label=a;this.type=b;this.value=c;this.duration=d;this.uniqueId=Math.random();this.slotId=e}};const P=h.performance,Sa=!!(P&&P.mark&&P.measure&&P.clearMarks),Q=ha(()=>{var a;if(a=Sa){var b;if(null===O){O="";try{a="";try{a=h.top.location.hash}catch(c){a=h.location.hash}a&&(O=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=O;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Ta(a){a&&P&&Q()&&(P.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),P.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class Ua{constructor(a,b){this.a=[];this.c=b||h;let c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.a=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.b=Q()||(null!=c?c:Math.random()<a)}start(a,b){if(!this.b)return null;var c=(c=h.performance)&&c.now?c.now():null;c||(c=(c=h.performance)&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):da());a=new Ra(a,b,c);b=`goog_${a.label}_${a.uniqueId}_start`;P&&Q()&&P.mark(b);return a}};var R;if(Ma&&!xa()){let a="."+I.domain;try{for(;2<a.split(".").length&&!xa();)I.domain=a=a.substr(a.indexOf(".")+1),G=window.parent}catch(b){}xa()||(G=window)}R=G;const S=new Ua(1,R);var Va=()=>{R.google_measure_js_timing||(S.b=!1,S.a!=S.c.google_js_reporting_queue&&(Q()&&r(S.a,Ta),S.a.length=0))};"number"!==typeof R.google_srt&&(R.google_srt=Math.random());"complete"==R.document.readyState?Va():S.b&&E(R,"load",()=>{Va()});var Wa=a=>{E(J,"message",b=>{let c;try{c=JSON.parse(b.data)}catch(d){return}!c||"ig"!==c.googMsgType||a(c,b)})};function X(a,b,c){K.call(this);this.h=a;this.u=b||0;this.j=c;this.l=p(this.s,this)}q(X,K);X.prototype.a=0;X.prototype.f=function(){X.C.f.call(this);this.stop();delete this.h;delete this.j}; 
X.prototype.start=function(a){this.stop();var b=this.l;a=void 0!==a?a:this.u;var c=typeof b;if("function"!=("object"!=c?c:b?Array.isArray(b)?"array":c:"null"))if(b&&"function"==typeof b.handleEvent)b=p(b.handleEvent,b);else throw Error("Invalid listener argument");this.a=2147483647<Number(a)?-1:h.setTimeout(b,a||0)};X.prototype.stop=function(){0!=this.a&&h.clearTimeout(this.a);this.a=0};X.prototype.s=function(){this.a=0;this.h&&this.h.call(this.j)};const Xa={display:"inline-block",position:"absolute"},Ya={display:"none",width:"100%",height:"100%",top:"0",left:"0"},Y=(a,b)=>{a&&(a.style.display=b?"inline-block":"none")};function Za(a=""){const b={top:0,right:0,bottom:0,left:0};a&&(a=a.split(","),4===a.length&&a.reduce((c,d)=>c&&!isNaN(+d),!0)&&([b.top,b.right,b.bottom,b.left]=a.map(c=>+c)));return b} 
function $a(a,b,c=2147483647){const d=I.createElement("DIV");Oa(d,Object.assign(Xa,{"z-index":c},b));D(a.data,10)&&E(d,"click",aa);if(D(a.data,11)){a=b=I.createElement("A");{c=Ka();const e=Ia(Ja);e===Da&&c("#");if(!(e instanceof M))throw Error("wrong type");c=new v(u,e.a)}c instanceof v||c instanceof v||(c="object"==typeof c&&c.f?c.c():String(c),ja.test(c)||(c="about:invalid#zClosurez"),c=new v(u,c));a.href=c instanceof v&&c.constructor===v&&c.b===ia?c.a:"type_error:SafeUrl";b.appendChild(d);return b}return d} 
function ab(a,b){var c,d,e,k,f=window;switch(C(b.i,5,1)){case 2:null===(d=null===(c=f.AFMA_Communicator)||void 0===c?void 0:c.addEventListener)||void 0===d?void 0:d.call(c,"onshow",()=>{Z(a,b)});break;case 10:E(J,"i-creative-view",()=>{Z(a,b)});break;case 4:E(I,"DOMContentLoaded",()=>{Z(a,b)});break;case 8:Wa(g=>{g.rr&&Z(a,b)});break;case 9:"IntersectionObserver"in J&&(f=new IntersectionObserver(g=>{for(const l of g)if(0<l.intersectionRatio){Z(a,b);break}}),f.observe(I.body),a.B.push(f));break;case 11:null=== 
(k=null===(e=f.AFMA_Communicator)||void 0===e?void 0:e.addEventListener)||void 0===k?void 0:k.call(e,"onAdVisibilityChanged",()=>{Z(a,b)})}}function bb(a,b){b=Za(b);const c=C(a.data,9,0);a.c=[{width:"100%",height:b.top+c+"px",top:-c+"px",left:"0"},{width:b.right+c+"px",height:"100%",top:"0",right:-c+"px"},{width:"100%",height:b.bottom+c+"px",bottom:-c+"px",left:"0"},{width:b.left+c+"px",height:"100%",top:"0",left:-c+"px"}].map(d=>$a(a,d,9019))} 
function cb(a){var b=0;for(const d of a.u){const e=d.i,k=a.l[C(e,5,1)];d.m||void 0===k||(b=Math.max(b,k+C(e,2,0)))}a.f&&Ba(a.f);b-=Date.now();const c=a.a;0<b?(Y(c,!0),a.f=new X(()=>{Y(c,!1)},b),a.f.start()):Y(c,!1)}function Z(a,b){if(!b.m){var c=C(b.i,5,1);a.l[c]=Date.now();D(b.i,9)&&(a.u.push(b),cb(a))}};window.googqscp=new class{constructor(){this.c=[];this.f=this.a=null;this.u=[];this.data=null;this.s=[];this.b=[];this.j=[];this.l={};this.B=[];this.h=null}init(a){Qa([a]);this.data=new ra(a);a=ma(this.data);r(oa(a),e=>{this.j.push({v:0,m:!1,A:0,i:e,o:-1})});this.b=Na();let b=!1;a=this.b.length;for(let e=0;e<a;++e){var c=new na(JSON.parse(this.b[e].getAttribute("data-ifc")||"[]"));r(oa(c),k=>{this.j.push({v:0,m:!1,A:0,i:k,o:e});1===C(k,4,1)&&(b=!0)})}a=!1;for(var d of this.j)c=d.i,0<C(c,2,0)&&0<C(c, 
5,1)?(!this.a&&D(c,9)&&(this.a=$a(this,Ya)),ab(this,d)):C(c,1,"")&&D(c,9)&&bb(this,C(c,1,"")),C(c,1,"")&&(a=!0);d=[];this.a&&d.push(this.a);!b&&d.push(...this.c);I.body&&Pa(d);D(this.data,13)&&za(()=>{const e=I.body.querySelectorAll(".amp-fcp, .amp-bcp");for(let f=0;f<e.length;++f){var k=(k=e[f])?J.getComputedStyle(k).getPropertyValue("position"):void 0;"absolute"===k&&Y(e[f],!1)}});E(I,"click",e=>{var k=-1,f=[];for(const y of this.j){var g=y.o,l=-1!==g;if(!(C(y.i,3,0)<=k||y.m||l&&!1===f[g])){var n= 
!l||f[g]||this.b[g].contains(e.target);l&&n&&(f[g]=!0);if(g=n)if(g=e,n=y,l=n.i,0<C(l,2,0)&&0<C(l,5,1))g=this.l[C(l,5,1)],g=void 0!==g&&Date.now()<g+C(l,2,0);else if(C(l,1,"")){{l=(0<=n.o?this.b[n.o]:I.body).getBoundingClientRect();var F=Number;var B=(B=I.body)?J.getComputedStyle(B).getPropertyValue("zoom"):void 0;F=F(B||"1");const [db,eb]=[g.clientX,g.clientY],[T,U,ea,fa]=[db/F-l.left,eb/F-l.top,l.width,l.height];if(!(0<ea&&0<fa)||isNaN(T)||isNaN(U)||0>T||0>U)g=!1;else{n=Za(C(n.i,1,""));B=!(T>=n.left&& 
ea-T>n.right&&U>=n.top&&fa-U>n.bottom);if(this.h&&D(this.data,12)&&500>g.timeStamp-this.h.timeStamp){g=this.h.changedTouches[0];const [V,W]=[g.clientX/F-l.left,g.clientY/F-l.top];!isNaN(V)&&!isNaN(W)&&0<=V&&0<=W&&(B=B||!(V>=n.left&&ea-V>n.right&&W>=n.top&&fa-W>n.bottom))}g=B}}}else g=!0;if(g){var m=y;k=C(y.i,3,0)}}}if(m)switch(k=m.i,C(k,4,1)){case 2:case 3:e.preventDefault?e.preventDefault():e.returnValue=!1;f=Date.now();500<f-m.A&&(m.A=f,++m.v);f=m.i;if(C(f,8,0)&&m.v>=C(f,8,0))if(m.m=!0,this.a&& 
0<C(f,2,0))cb(this);else if(0<this.c.length&&C(f,1,""))for(var t of this.c)Y(t,!1);if(!(.01<Math.random())){t=(t=Aa(document.currentScript))&&t.getAttribute("data-jc-version")||"unknown";t=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${23}&version=${t}&sample=${.01}`;m=window;if(f=m.navigator)f=m.navigator.userAgent,f=/Chrome/.test(f)&&!/Edge/.test(f)?!0:!1;f&&m.navigator.sendBeacon?m.navigator.sendBeacon(t):(m.google_image_requests||(m.google_image_requests=[]),f=m.document.createElement("img"), 
f.src=t,m.google_image_requests.push(f))}t=k.b;for(const y of this.s)y(e,t)}},sa);a&&D(this.data,12)&&E(I,"touchend",e=>{this.h=e},ta)}registerCallback(a){this.s.push(a)}};}).call(this);
