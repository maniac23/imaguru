<<<<<<< HEAD
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e,t){t=t||J;var n=t.createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}function i(e){var t=!!e&&"length"in e&&e.length,n=pe.type(e);return"function"!==n&&!pe.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function o(e,t,n){if(pe.isFunction(t))return pe.grep(e,function(e,i){return!!t.call(e,i,e)!==n});if(t.nodeType)return pe.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(ke.test(t))return pe.filter(t,e,n);t=pe.filter(t,e)}return pe.grep(e,function(e){return oe.call(t,e)>-1!==n&&1===e.nodeType})}function r(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function s(e){var t={};return pe.each(e.match(Ae)||[],function(e,n){t[n]=!0}),t}function a(e){return e}function l(e){throw e}function c(e,t,n){var i;try{e&&pe.isFunction(i=e.promise)?i.call(e).done(t).fail(n):e&&pe.isFunction(i=e.then)?i.call(e,t,n):t.call(void 0,e)}catch(e){n.call(void 0,e)}}function d(){J.removeEventListener("DOMContentLoaded",d),e.removeEventListener("load",d),pe.ready()}function u(){this.expando=pe.expando+u.uid++}function p(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Ne,"-$&").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Ie.test(n)?JSON.parse(n):n)}catch(e){}He.set(e,t,n)}else n=void 0;return n}function f(e,t,n,i){var o,r=1,s=20,a=i?function(){return i.cur()}:function(){return pe.css(e,t,"")},l=a(),c=n&&n[3]||(pe.cssNumber[t]?"":"px"),d=(pe.cssNumber[t]||"px"!==c&&+l)&&qe.exec(pe.css(e,t));if(d&&d[3]!==c){c=c||d[3],n=n||[],d=+l||1;do r=r||".5",d/=r,pe.style(e,t,d+c);while(r!==(r=a()/l)&&1!==r&&--s)}return n&&(d=+d||+l||0,o=n[1]?d+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=d,i.end=o)),o}function h(e){var t,n=e.ownerDocument,i=e.nodeName,o=We[i];return o?o:(t=n.body.appendChild(n.createElement(i)),o=pe.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),We[i]=o,o)}function m(e,t){for(var n,i,o=[],r=0,s=e.length;r<s;r++)i=e[r],i.style&&(n=i.style.display,t?("none"===n&&(o[r]=Le.get(i,"display")||null,o[r]||(i.style.display="")),""===i.style.display&&Fe(i)&&(o[r]=h(i))):"none"!==n&&(o[r]="none",Le.set(i,"display",n)));for(r=0;r<s;r++)null!=o[r]&&(e[r].style.display=o[r]);return e}function g(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&pe.nodeName(e,t)?pe.merge([e],n):n}function v(e,t){for(var n=0,i=e.length;n<i;n++)Le.set(e[n],"globalEval",!t||Le.get(t[n],"globalEval"))}function y(e,t,n,i,o){for(var r,s,a,l,c,d,u=t.createDocumentFragment(),p=[],f=0,h=e.length;f<h;f++)if(r=e[f],r||0===r)if("object"===pe.type(r))pe.merge(p,r.nodeType?[r]:r);else if(Ye.test(r)){for(s=s||u.appendChild(t.createElement("div")),a=(Be.exec(r)||["",""])[1].toLowerCase(),l=Xe[a]||Xe._default,s.innerHTML=l[1]+pe.htmlPrefilter(r)+l[2],d=l[0];d--;)s=s.lastChild;pe.merge(p,s.childNodes),s=u.firstChild,s.textContent=""}else p.push(t.createTextNode(r));for(u.textContent="",f=0;r=p[f++];)if(i&&pe.inArray(r,i)>-1)o&&o.push(r);else if(c=pe.contains(r.ownerDocument,r),s=g(u.appendChild(r),"script"),c&&v(s),n)for(d=0;r=s[d++];)Ue.test(r.type||"")&&n.push(r);return u}function w(){return!0}function b(){return!1}function x(){try{return J.activeElement}catch(e){}}function k(e,t,n,i,o,r){var s,a;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(a in t)k(e,a,n,i,t[a],r);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),o===!1)o=b;else if(!o)return e;return 1===r&&(s=o,o=function(e){return pe().off(e),s.apply(this,arguments)},o.guid=s.guid||(s.guid=pe.guid++)),e.each(function(){pe.event.add(this,t,o,i,n)})}function T(e,t){return pe.nodeName(e,"table")&&pe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e:e}function C(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function S(e){var t=tt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function $(e,t){var n,i,o,r,s,a,l,c;if(1===t.nodeType){if(Le.hasData(e)&&(r=Le.access(e),s=Le.set(t,r),c=r.events)){delete s.handle,s.events={};for(o in c)for(n=0,i=c[o].length;n<i;n++)pe.event.add(t,o,c[o][n])}He.hasData(e)&&(a=He.access(e),l=pe.extend({},a),He.set(t,l))}}function E(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Re.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function A(e,t,i,o){t=ne.apply([],t);var r,s,a,l,c,d,u=0,p=e.length,f=p-1,h=t[0],m=pe.isFunction(h);if(m||p>1&&"string"==typeof h&&!de.checkClone&&et.test(h))return e.each(function(n){var r=e.eq(n);m&&(t[0]=h.call(this,n,r.html())),A(r,t,i,o)});if(p&&(r=y(t,e[0].ownerDocument,!1,e,o),s=r.firstChild,1===r.childNodes.length&&(r=s),s||o)){for(a=pe.map(g(r,"script"),C),l=a.length;u<p;u++)c=r,u!==f&&(c=pe.clone(c,!0,!0),l&&pe.merge(a,g(c,"script"))),i.call(e[u],c,u);if(l)for(d=a[a.length-1].ownerDocument,pe.map(a,S),u=0;u<l;u++)c=a[u],Ue.test(c.type||"")&&!Le.access(c,"globalEval")&&pe.contains(d,c)&&(c.src?pe._evalUrl&&pe._evalUrl(c.src):n(c.textContent.replace(nt,""),d))}return e}function j(e,t,n){for(var i,o=t?pe.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||pe.cleanData(g(i)),i.parentNode&&(n&&pe.contains(i.ownerDocument,i)&&v(g(i,"script")),i.parentNode.removeChild(i));return e}function O(e,t,n){var i,o,r,s,a=e.style;return n=n||rt(e),n&&(s=n.getPropertyValue(t)||n[t],""!==s||pe.contains(e.ownerDocument,e)||(s=pe.style(e,t)),!de.pixelMarginRight()&&ot.test(s)&&it.test(t)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function P(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function D(e){if(e in dt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=ct.length;n--;)if(e=ct[n]+t,e in dt)return e}function L(e,t,n){var i=qe.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function H(e,t,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===t?1:0,s=0;r<4;r+=2)"margin"===n&&(s+=pe.css(e,n+ze[r],!0,o)),i?("content"===n&&(s-=pe.css(e,"padding"+ze[r],!0,o)),"margin"!==n&&(s-=pe.css(e,"border"+ze[r]+"Width",!0,o))):(s+=pe.css(e,"padding"+ze[r],!0,o),"padding"!==n&&(s+=pe.css(e,"border"+ze[r]+"Width",!0,o)));return s}function I(e,t,n){var i,o=!0,r=rt(e),s="border-box"===pe.css(e,"boxSizing",!1,r);if(e.getClientRects().length&&(i=e.getBoundingClientRect()[t]),i<=0||null==i){if(i=O(e,t,r),(i<0||null==i)&&(i=e.style[t]),ot.test(i))return i;o=s&&(de.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+H(e,t,n||(s?"border":"content"),o,r)+"px"}function N(e,t,n,i,o){return new N.prototype.init(e,t,n,i,o)}function M(){pt&&(e.requestAnimationFrame(M),pe.fx.tick())}function q(){return e.setTimeout(function(){ut=void 0}),ut=pe.now()}function z(e,t){var n,i=0,o={height:e};for(t=t?1:0;i<4;i+=2-t)n=ze[i],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function F(e,t,n){for(var i,o=(R.tweeners[t]||[]).concat(R.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,t,e))return i}function _(e,t,n){var i,o,r,s,a,l,c,d,u="width"in t||"height"in t,p=this,f={},h=e.style,g=e.nodeType&&Fe(e),v=Le.get(e,"fxshow");n.queue||(s=pe._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always(function(){p.always(function(){s.unqueued--,pe.queue(e,"fx").length||s.empty.fire()})}));for(i in t)if(o=t[i],ft.test(o)){if(delete t[i],r=r||"toggle"===o,o===(g?"hide":"show")){if("show"!==o||!v||void 0===v[i])continue;g=!0}f[i]=v&&v[i]||pe.style(e,i)}if(l=!pe.isEmptyObject(t),l||!pe.isEmptyObject(f)){u&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],c=v&&v.display,null==c&&(c=Le.get(e,"display")),d=pe.css(e,"display"),"none"===d&&(c?d=c:(m([e],!0),c=e.style.display||c,d=pe.css(e,"display"),m([e]))),("inline"===d||"inline-block"===d&&null!=c)&&"none"===pe.css(e,"float")&&(l||(p.done(function(){h.display=c}),null==c&&(d=h.display,c="none"===d?"":d)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),l=!1;for(i in f)l||(v?"hidden"in v&&(g=v.hidden):v=Le.access(e,"fxshow",{display:c}),r&&(v.hidden=!g),g&&m([e],!0),p.done(function(){g||m([e]),Le.remove(e,"fxshow");for(i in f)pe.style(e,i,f[i])})),l=F(g?v[i]:0,i,p),i in v||(v[i]=l.start,g&&(l.end=l.start,l.start=0))}}function W(e,t){var n,i,o,r,s;for(n in e)if(i=pe.camelCase(n),o=t[i],r=e[n],pe.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),s=pe.cssHooks[i],s&&"expand"in s){r=s.expand(r),delete e[i];for(n in r)n in e||(e[n]=r[n],t[n]=o)}else t[i]=o}function R(e,t,n){var i,o,r=0,s=R.prefilters.length,a=pe.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var t=ut||q(),n=Math.max(0,c.startTime+c.duration-t),i=n/c.duration||0,r=1-i,s=0,l=c.tweens.length;s<l;s++)c.tweens[s].run(r);return a.notifyWith(e,[c,r,n]),r<1&&l?n:(a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:pe.extend({},t),opts:pe.extend(!0,{specialEasing:{},easing:pe.easing._default},n),originalProperties:t,originalOptions:n,startTime:ut||q(),duration:n.duration,tweens:[],createTween:function(t,n){var i=pe.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(o)return this;for(o=!0;n<i;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),d=c.props;for(W(d,c.opts.specialEasing);r<s;r++)if(i=R.prefilters[r].call(c,e,d,c.opts))return pe.isFunction(i.stop)&&(pe._queueHooks(c.elem,c.opts.queue).stop=pe.proxy(i.stop,i)),i;return pe.map(d,F,c),pe.isFunction(c.opts.start)&&c.opts.start.call(e,c),pe.fx.timer(pe.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function B(e){return e.getAttribute&&e.getAttribute("class")||""}function U(e,t,n,i){var o;if(pe.isArray(t))pe.each(t,function(t,o){n||$t.test(e)?i(e,o):U(e+"["+("object"==typeof o&&null!=o?t:"")+"]",o,n,i)});else if(n||"object"!==pe.type(t))i(e,t);else for(o in t)U(e+"["+o+"]",t[o],n,i)}function X(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,o=0,r=t.toLowerCase().match(Ae)||[];if(pe.isFunction(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function Y(e,t,n,i){function o(a){var l;return r[a]=!0,pe.each(e[a]||[],function(e,a){var c=a(t,n,i);return"string"!=typeof c||s||r[c]?s?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)}),l}var r={},s=e===qt;return o(t.dataTypes[0])||!r["*"]&&o("*")}function G(e,t){var n,i,o=pe.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&pe.extend(!0,e,i),e}function V(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}s||(s=o)}r=r||s}if(r)return r!==l[0]&&l.unshift(r),n[r]}function K(e,t,n,i){var o,r,s,a,l,c={},d=e.dataTypes.slice();if(d[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(r=d.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=d.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(s=c[l+" "+r]||c["* "+r],!s)for(o in c)if(a=o.split(" "),a[1]===r&&(s=c[l+" "+a[0]]||c["* "+a[0]])){s===!0?s=c[o]:c[o]!==!0&&(r=a[0],d.unshift(a[1]));break}if(s!==!0)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}function Q(e){return pe.isWindow(e)?e:9===e.nodeType&&e.defaultView}var Z=[],J=e.document,ee=Object.getPrototypeOf,te=Z.slice,ne=Z.concat,ie=Z.push,oe=Z.indexOf,re={},se=re.toString,ae=re.hasOwnProperty,le=ae.toString,ce=le.call(Object),de={},ue="3.1.0",pe=function(e,t){return new pe.fn.init(e,t)},fe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,he=/^-ms-/,me=/-([a-z])/g,ge=function(e,t){return t.toUpperCase()};pe.fn=pe.prototype={jquery:ue,constructor:pe,length:0,toArray:function(){return te.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:te.call(this)},pushStack:function(e){var t=pe.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return pe.each(this,e)},map:function(e){return this.pushStack(pe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(te.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:ie,sort:Z.sort,splice:Z.splice},pe.extend=pe.fn.extend=function(){var e,t,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||pe.isFunction(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(c&&i&&(pe.isPlainObject(i)||(o=pe.isArray(i)))?(o?(o=!1,r=n&&pe.isArray(n)?n:[]):r=n&&pe.isPlainObject(n)?n:{},s[t]=pe.extend(c,r,i)):void 0!==i&&(s[t]=i));return s},pe.extend({expando:"jQuery"+(ue+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===pe.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=pe.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==se.call(e))&&(!(t=ee(e))||(n=ae.call(t,"constructor")&&t.constructor,"function"==typeof n&&le.call(n)===ce))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?re[se.call(e)]||"object":typeof e},globalEval:function(e){n(e)},camelCase:function(e){return e.replace(he,"ms-").replace(me,ge)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,o=0;if(i(e))for(n=e.length;o<n&&t.call(e[o],o,e[o])!==!1;o++);else for(o in e)if(t.call(e[o],o,e[o])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(fe,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(i(Object(e))?pe.merge(n,"string"==typeof e?[e]:e):ie.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:oe.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){for(var i,o=[],r=0,s=e.length,a=!n;r<s;r++)i=!t(e[r],r),i!==a&&o.push(e[r]);return o},map:function(e,t,n){var o,r,s=0,a=[];if(i(e))for(o=e.length;s<o;s++)r=t(e[s],s,n),null!=r&&a.push(r);else for(s in e)r=t(e[s],s,n),null!=r&&a.push(r);return ne.apply([],a)},guid:1,proxy:function(e,t){var n,i,o;if("string"==typeof t&&(n=e[t],t=e,e=n),pe.isFunction(e))return i=te.call(arguments,2),o=function(){return e.apply(t||this,i.concat(te.call(arguments)))},o.guid=e.guid=e.guid||pe.guid++,o},now:Date.now,support:de}),"function"==typeof Symbol&&(pe.fn[Symbol.iterator]=Z[Symbol.iterator]),pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){re["[object "+t+"]"]=t.toLowerCase()});var ve=function(e){function t(e,t,n,i){var o,r,s,a,l,c,d,p=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!i&&((t?t.ownerDocument||t:_)!==L&&D(t),t=t||L,I)){if(11!==h&&(l=ve.exec(e)))if(o=l[1]){if(9===h){if(!(s=t.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(p&&(s=p.getElementById(o))&&z(t,s)&&s.id===o)return n.push(s),n}else{if(l[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((o=l[3])&&k.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(o)),n}if(k.qsa&&!X[e+" "]&&(!N||!N.test(e))){if(1!==h)p=t,d=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(xe,ke):t.setAttribute("id",a=F),c=$(e),r=c.length;r--;)c[r]="#"+a+" "+f(c[r]);d=c.join(","),p=ye.test(e)&&u(t.parentNode)||t}if(d)try{return Z.apply(n,p.querySelectorAll(d)),n}catch(e){}finally{a===F&&t.removeAttribute("id")}}}return A(e.replace(ae,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[F]=!0,e}function o(e){var t=L.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var n=e.split("|"),i=n.length;i--;)T.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return function(t){return"label"in t&&t.disabled===e||"form"in t&&t.disabled===e||"form"in t&&t.disabled===!1&&(t.isDisabled===e||t.isDisabled!==!e&&("label"in t||!Ce(t))!==e)}}function d(e){return i(function(t){return t=+t,i(function(n,i){for(var o,r=e([],n.length,t),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function u(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function p(){}function f(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function h(e,t,n){var i=t.dir,o=t.next,r=o||i,s=n&&"parentNode"===r,a=R++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,o)}:function(t,n,l){var c,d,u,p=[W,a];if(l){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||s)if(u=t[F]||(t[F]={}),d=u[t.uniqueID]||(u[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[i]||t;else{if((c=d[r])&&c[0]===W&&c[1]===a)return p[2]=c[2];if(d[r]=p,p[2]=e(t,n,l))return!0}}}function m(e){return e.length>1?function(t,n,i){for(var o=e.length;o--;)if(!e[o](t,n,i))return!1;return!0}:e[0]}function g(e,n,i){for(var o=0,r=n.length;o<r;o++)t(e,n[o],i);return i}function v(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(r=e[a])&&(n&&!n(r,i,o)||(s.push(r),c&&t.push(a)));return s}function y(e,t,n,o,r,s){return o&&!o[F]&&(o=y(o)),r&&!r[F]&&(r=y(r,s)),i(function(i,s,a,l){var c,d,u,p=[],f=[],h=s.length,m=i||g(t||"*",a.nodeType?[a]:a,[]),y=!e||!i&&t?m:v(m,p,e,a,l),w=n?r||(i?e:h||o)?[]:s:y;if(n&&n(y,w,a,l),o)for(c=v(w,f),o(c,[],a,l),d=c.length;d--;)(u=c[d])&&(w[f[d]]=!(y[f[d]]=u));if(i){if(r||e){if(r){for(c=[],d=w.length;d--;)(u=w[d])&&c.push(y[d]=u);r(null,w=[],c,l)}for(d=w.length;d--;)(u=w[d])&&(c=r?ee(i,u):p[d])>-1&&(i[c]=!(s[c]=u))}}else w=v(w===s?w.splice(h,w.length):w),r?r(null,s,w,l):Z.apply(s,w)})}function w(e){for(var t,n,i,o=e.length,r=T.relative[e[0].type],s=r||T.relative[" "],a=r?1:0,l=h(function(e){return e===t},s,!0),c=h(function(e){return ee(t,e)>-1},s,!0),d=[function(e,n,i){var o=!r&&(i||n!==j)||((t=n).nodeType?l(e,n,i):c(e,n,i));return t=null,o}];a<o;a++)if(n=T.relative[e[a].type])d=[h(m(d),n)];else{if(n=T.filter[e[a].type].apply(null,e[a].matches),n[F]){for(i=++a;i<o&&!T.relative[e[i].type];i++);return y(a>1&&m(d),a>1&&f(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),n,a<i&&w(e.slice(a,i)),i<o&&w(e=e.slice(i)),i<o&&f(e))}d.push(n)}return m(d)}function b(e,n){var o=n.length>0,r=e.length>0,s=function(i,s,a,l,c){var d,u,p,f=0,h="0",m=i&&[],g=[],y=j,w=i||r&&T.find.TAG("*",c),b=W+=null==y?1:Math.random()||.1,x=w.length;for(c&&(j=s===L||s||c);h!==x&&null!=(d=w[h]);h++){if(r&&d){for(u=0,s||d.ownerDocument===L||(D(d),a=!I);p=e[u++];)if(p(d,s||L,a)){l.push(d);break}c&&(W=b)}o&&((d=!p&&d)&&f--,i&&m.push(d))}if(f+=h,o&&h!==f){for(u=0;p=n[u++];)p(m,g,s,a);if(i){if(f>0)for(;h--;)m[h]||g[h]||(g[h]=K.call(l));g=v(g)}Z.apply(l,g),c&&!i&&g.length>0&&f+n.length>1&&t.uniqueSort(l)}return c&&(W=b,j=y),m};return o?i(s):s}var x,k,T,C,S,$,E,A,j,O,P,D,L,H,I,N,M,q,z,F="sizzle"+1*new Date,_=e.document,W=0,R=0,B=n(),U=n(),X=n(),Y=function(e,t){return e===t&&(P=!0),0},G={}.hasOwnProperty,V=[],K=V.pop,Q=V.push,Z=V.push,J=V.slice,ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",oe="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",re=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),ue=new RegExp(re),pe=new RegExp("^"+ie+"$"),fe={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),be=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},xe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ke=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},Te=function(){D()},Ce=h(function(e){return e.disabled===!0},{dir:"parentNode",next:"legend"});try{Z.apply(V=J.call(_.childNodes),_.childNodes),V[_.childNodes.length].nodeType}catch(e){Z={apply:V.length?function(e,t){Q.apply(e,J.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}k=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},D=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:_;return i!==L&&9===i.nodeType&&i.documentElement?(L=i,H=L.documentElement,I=!S(L),_!==L&&(n=L.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),k.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),k.getElementsByTagName=o(function(e){return e.appendChild(L.createComment("")),!e.getElementsByTagName("*").length}),k.getElementsByClassName=ge.test(L.getElementsByClassName),k.getById=o(function(e){return H.appendChild(e).id=F,!L.getElementsByName||!L.getElementsByName(F).length}),k.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&I){var n=t.getElementById(e);return n?[n]:[]}},T.filter.ID=function(e){var t=e.replace(we,be);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(we,be);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=k.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):k.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},T.find.CLASS=k.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&I)return t.getElementsByClassName(e)},M=[],N=[],(k.qsa=ge.test(L.querySelectorAll))&&(o(function(e){H.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&N.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||N.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+F+"-]").length||N.push("~="),e.querySelectorAll(":checked").length||N.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||N.push(".#.+[+~]")}),o(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=L.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&N.push("name"+ne+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&N.push(":enabled",":disabled"),H.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&N.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),N.push(",.*:")})),(k.matchesSelector=ge.test(q=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){k.disconnectedMatch=q.call(e,"*"),q.call(e,"[s!='']:x"),M.push("!=",re)}),N=N.length&&new RegExp(N.join("|")),M=M.length&&new RegExp(M.join("|")),t=ge.test(H.compareDocumentPosition),z=t||ge.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Y=t?function(e,t){if(e===t)return P=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!k.sortDetached&&t.compareDocumentPosition(e)===n?e===L||e.ownerDocument===_&&z(_,e)?-1:t===L||t.ownerDocument===_&&z(_,t)?1:O?ee(O,e)-ee(O,t):0:4&n?-1:1)}:function(e,t){if(e===t)return P=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,a=[e],l=[t];if(!o||!r)return e===L?-1:t===L?1:o?-1:r?1:O?ee(O,e)-ee(O,t):0;if(o===r)return s(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?s(a[i],l[i]):a[i]===_?-1:l[i]===_?1:0},L):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&D(e),n=n.replace(de,"='$1']"),k.matchesSelector&&I&&!X[n+" "]&&(!M||!M.test(n))&&(!N||!N.test(n)))try{var i=q.call(e,n);if(i||k.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&D(e),z(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&D(e);var n=T.attrHandle[t.toLowerCase()],i=n&&G.call(T.attrHandle,t.toLowerCase())?n(e,t,!I):void 0;return void 0!==i?i:k.attributes||!I?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.escape=function(e){return(e+"").replace(xe,ke)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,o=0;if(P=!k.detectDuplicates,O=!k.sortStable&&e.slice(0),e.sort(Y),P){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return O=null,e},C=t.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:i,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,be),e[3]=(e[3]||e[4]||e[5]||"").replace(we,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ue.test(n)&&(t=$(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,be).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=B[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(o){var r=t.attr(o,e);return null==r?"!="===n:!n||(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(r===i||r.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,o){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===o?function(e){return!!e.parentNode}:function(t,n,l){var c,d,u,p,f,h,m=r!==s?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,w=!1;if(g){if(r){for(;m;){for(p=t;p=p[m];)if(a?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&y){for(p=g,u=p[F]||(p[F]={}),d=u[p.uniqueID]||(u[p.uniqueID]={}),c=d[e]||[],f=c[0]===W&&c[1],w=f&&c[2],p=f&&g.childNodes[f];p=++f&&p&&p[m]||(w=f=0)||h.pop();)if(1===p.nodeType&&++w&&p===t){d[e]=[W,f,w];break}}else if(y&&(p=t,u=p[F]||(p[F]={}),d=u[p.uniqueID]||(u[p.uniqueID]={}),c=d[e]||[],f=c[0]===W&&c[1],w=f),w===!1)for(;(p=++f&&p&&p[m]||(w=f=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++w||(y&&(u=p[F]||(p[F]={}),d=u[p.uniqueID]||(u[p.uniqueID]={}),d[e]=[W,w]),p!==t)););return w-=o,w===i||w%i===0&&w/i>=0}}},PSEUDO:function(e,n){var o,r=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return r[F]?r(n):r.length>1?(o=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,o=r(e,n),s=o.length;s--;)i=ee(e,o[s]),e[i]=!(t[i]=o[s])}):function(e){return r(e,0,o)}):r}},pseudos:{not:i(function(e){var t=[],n=[],o=E(e.replace(ae,"$1"));return o[F]?i(function(e,t,n,i){for(var r,s=o(e,null,i,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))}):function(e,i,r){return t[0]=e,o(t,null,r,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(we,be),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:i(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,be).toLowerCase(),function(t){var n;do if(n=I?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:c(!1),disabled:c(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;
return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:d(function(){return[0]}),last:d(function(e,t){return[t-1]}),eq:d(function(e,t,n){return[n<0?n+t:n]}),even:d(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:d(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:d(function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e}),gt:d(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}},T.pseudos.nth=T.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[x]=a(x);for(x in{submit:!0,reset:!0})T.pseudos[x]=l(x);return p.prototype=T.filters=T.pseudos,T.setFilters=new p,$=t.tokenize=function(e,n){var i,o,r,s,a,l,c,d=U[e+" "];if(d)return n?0:d.slice(0);for(a=e,l=[],c=T.preFilter;a;){i&&!(o=le.exec(a))||(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=ce.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(ae," ")}),a=a.slice(i.length));for(s in T.filter)!(o=fe[s].exec(a))||c[s]&&!(o=c[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?t.error(e):U(e,l).slice(0)},E=t.compile=function(e,t){var n,i=[],o=[],r=X[e+" "];if(!r){for(t||(t=$(e)),n=t.length;n--;)r=w(t[n]),r[F]?i.push(r):o.push(r);r=X(e,b(o,i)),r.selector=e}return r},A=t.select=function(e,t,n,i){var o,r,s,a,l,c="function"==typeof e&&e,d=!i&&$(e=c.selector||e);if(n=n||[],1===d.length){if(r=d[0]=d[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&k.getById&&9===t.nodeType&&I&&T.relative[r[1].type]){if(t=(T.find.ID(s.matches[0].replace(we,be),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=fe.needsContext.test(e)?0:r.length;o--&&(s=r[o],!T.relative[a=s.type]);)if((l=T.find[a])&&(i=l(s.matches[0].replace(we,be),ye.test(r[0].type)&&u(t.parentNode)||t))){if(r.splice(o,1),e=i.length&&f(r),!e)return Z.apply(n,i),n;break}}return(c||E(e,d))(i,t,!I,n,!t||ye.test(e)&&u(t.parentNode)||t),n},k.sortStable=F.split("").sort(Y).join("")===F,k.detectDuplicates=!!P,D(),k.sortDetached=o(function(e){return 1&e.compareDocumentPosition(L.createElement("fieldset"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),k.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||r(te,function(e,t,n){var i;if(!n)return e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e);pe.find=ve,pe.expr=ve.selectors,pe.expr[":"]=pe.expr.pseudos,pe.uniqueSort=pe.unique=ve.uniqueSort,pe.text=ve.getText,pe.isXMLDoc=ve.isXML,pe.contains=ve.contains,pe.escapeSelector=ve.escape;var ye=function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&pe(e).is(n))break;i.push(e)}return i},we=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},be=pe.expr.match.needsContext,xe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,ke=/^.[^:#\[\.,]*$/;pe.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?pe.find.matchesSelector(i,e)?[i]:[]:pe.find.matches(e,pe.grep(t,function(e){return 1===e.nodeType}))},pe.fn.extend({find:function(e){var t,n,i=this.length,o=this;if("string"!=typeof e)return this.pushStack(pe(e).filter(function(){for(t=0;t<i;t++)if(pe.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)pe.find(e,o[t],n);return i>1?pe.uniqueSort(n):n},filter:function(e){return this.pushStack(o(this,e||[],!1))},not:function(e){return this.pushStack(o(this,e||[],!0))},is:function(e){return!!o(this,"string"==typeof e&&be.test(e)?pe(e):e||[],!1).length}});var Te,Ce=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Se=pe.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||Te,"string"==typeof e){if(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Ce.exec(e),!i||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof pe?t[0]:t,pe.merge(this,pe.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),xe.test(i[1])&&pe.isPlainObject(t))for(i in t)pe.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return o=J.getElementById(i[2]),o&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):pe.isFunction(e)?void 0!==n.ready?n.ready(e):e(pe):pe.makeArray(e,this)};Se.prototype=pe.fn,Te=pe(J);var $e=/^(?:parents|prev(?:Until|All))/,Ee={children:!0,contents:!0,next:!0,prev:!0};pe.fn.extend({has:function(e){var t=pe(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(pe.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,o=this.length,r=[],s="string"!=typeof e&&pe(e);if(!be.test(e))for(;i<o;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&pe.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(r.length>1?pe.uniqueSort(r):r)},index:function(e){return e?"string"==typeof e?oe.call(pe(e),this[0]):oe.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(pe.uniqueSort(pe.merge(this.get(),pe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),pe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ye(e,"parentNode")},parentsUntil:function(e,t,n){return ye(e,"parentNode",n)},next:function(e){return r(e,"nextSibling")},prev:function(e){return r(e,"previousSibling")},nextAll:function(e){return ye(e,"nextSibling")},prevAll:function(e){return ye(e,"previousSibling")},nextUntil:function(e,t,n){return ye(e,"nextSibling",n)},prevUntil:function(e,t,n){return ye(e,"previousSibling",n)},siblings:function(e){return we((e.parentNode||{}).firstChild,e)},children:function(e){return we(e.firstChild)},contents:function(e){return e.contentDocument||pe.merge([],e.childNodes)}},function(e,t){pe.fn[e]=function(n,i){var o=pe.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=pe.filter(i,o)),this.length>1&&(Ee[e]||pe.uniqueSort(o),$e.test(e)&&o.reverse()),this.pushStack(o)}});var Ae=/\S+/g;pe.Callbacks=function(e){e="string"==typeof e?s(e):pe.extend({},e);var t,n,i,o,r=[],a=[],l=-1,c=function(){for(o=e.once,i=t=!0;a.length;l=-1)for(n=a.shift();++l<r.length;)r[l].apply(n[0],n[1])===!1&&e.stopOnFalse&&(l=r.length,n=!1);e.memory||(n=!1),t=!1,o&&(r=n?[]:"")},d={add:function(){return r&&(n&&!t&&(l=r.length-1,a.push(n)),function t(n){pe.each(n,function(n,i){pe.isFunction(i)?e.unique&&d.has(i)||r.push(i):i&&i.length&&"string"!==pe.type(i)&&t(i)})}(arguments),n&&!t&&c()),this},remove:function(){return pe.each(arguments,function(e,t){for(var n;(n=pe.inArray(t,r,n))>-1;)r.splice(n,1),n<=l&&l--}),this},has:function(e){return e?pe.inArray(e,r)>-1:r.length>0},empty:function(){return r&&(r=[]),this},disable:function(){return o=a=[],r=n="",this},disabled:function(){return!r},lock:function(){return o=a=[],n||t||(r=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||c()),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!i}};return d},pe.extend({Deferred:function(t){var n=[["notify","progress",pe.Callbacks("memory"),pe.Callbacks("memory"),2],["resolve","done",pe.Callbacks("once memory"),pe.Callbacks("once memory"),0,"resolved"],["reject","fail",pe.Callbacks("once memory"),pe.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function(){return i},always:function(){return r.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},pipe:function(){var e=arguments;return pe.Deferred(function(t){pe.each(n,function(n,i){var o=pe.isFunction(e[i[4]])&&e[i[4]];r[i[1]](function(){var e=o&&o.apply(this,arguments);e&&pe.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[i[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(t,i,o){function r(t,n,i,o){return function(){var c=this,d=arguments,u=function(){var e,u;if(!(t<s)){if(e=i.apply(c,d),e===n.promise())throw new TypeError("Thenable self-resolution");u=e&&("object"==typeof e||"function"==typeof e)&&e.then,pe.isFunction(u)?o?u.call(e,r(s,n,a,o),r(s,n,l,o)):(s++,u.call(e,r(s,n,a,o),r(s,n,l,o),r(s,n,a,n.notifyWith))):(i!==a&&(c=void 0,d=[e]),(o||n.resolveWith)(c,d))}},p=o?u:function(){try{u()}catch(e){pe.Deferred.exceptionHook&&pe.Deferred.exceptionHook(e,p.stackTrace),t+1>=s&&(i!==l&&(c=void 0,d=[e]),n.rejectWith(c,d))}};t?p():(pe.Deferred.getStackHook&&(p.stackTrace=pe.Deferred.getStackHook()),e.setTimeout(p))}}var s=0;return pe.Deferred(function(e){n[0][3].add(r(0,e,pe.isFunction(o)?o:a,e.notifyWith)),n[1][3].add(r(0,e,pe.isFunction(t)?t:a)),n[2][3].add(r(0,e,pe.isFunction(i)?i:l))}).promise()},promise:function(e){return null!=e?pe.extend(e,o):o}},r={};return pe.each(n,function(e,t){var s=t[2],a=t[5];o[t[1]]=s.add,a&&s.add(function(){i=a},n[3-e][2].disable,n[0][2].lock),s.add(t[3].fire),r[t[0]]=function(){return r[t[0]+"With"](this===r?void 0:this,arguments),this},r[t[0]+"With"]=s.fireWith}),o.promise(r),t&&t.call(r,r),r},when:function(e){var t=arguments.length,n=t,i=Array(n),o=te.call(arguments),r=pe.Deferred(),s=function(e){return function(n){i[e]=this,o[e]=arguments.length>1?te.call(arguments):n,--t||r.resolveWith(i,o)}};if(t<=1&&(c(e,r.done(s(n)).resolve,r.reject),"pending"===r.state()||pe.isFunction(o[n]&&o[n].then)))return r.then();for(;n--;)c(o[n],s(n),r.reject);return r.promise()}});var je=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;pe.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&je.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},pe.readyException=function(t){e.setTimeout(function(){throw t})};var Oe=pe.Deferred();pe.fn.ready=function(e){return Oe.then(e).catch(function(e){pe.readyException(e)}),this},pe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?pe.readyWait++:pe.ready(!0)},ready:function(e){(e===!0?--pe.readyWait:pe.isReady)||(pe.isReady=!0,e!==!0&&--pe.readyWait>0||Oe.resolveWith(J,[pe]))}}),pe.ready.then=Oe.then,"complete"===J.readyState||"loading"!==J.readyState&&!J.documentElement.doScroll?e.setTimeout(pe.ready):(J.addEventListener("DOMContentLoaded",d),e.addEventListener("load",d));var Pe=function(e,t,n,i,o,r,s){var a=0,l=e.length,c=null==n;if("object"===pe.type(n)){o=!0;for(a in n)Pe(e,t,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,pe.isFunction(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(pe(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return o?e:c?t.call(e):l?t(e[0],n):r},De=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};u.uid=1,u.prototype={cache:function(e){var t=e[this.expando];return t||(t={},De(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);if("string"==typeof t)o[pe.camelCase(t)]=n;else for(i in t)o[pe.camelCase(i)]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][pe.camelCase(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){pe.isArray(t)?t=t.map(pe.camelCase):(t=pe.camelCase(t),t=t in i?[t]:t.match(Ae)||[]),n=t.length;for(;n--;)delete i[t[n]]}(void 0===t||pe.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!pe.isEmptyObject(t)}};var Le=new u,He=new u,Ie=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ne=/[A-Z]/g;pe.extend({hasData:function(e){return He.hasData(e)||Le.hasData(e)},data:function(e,t,n){return He.access(e,t,n)},removeData:function(e,t){He.remove(e,t)},_data:function(e,t,n){return Le.access(e,t,n)},_removeData:function(e,t){Le.remove(e,t)}}),pe.fn.extend({data:function(e,t){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===e){if(this.length&&(o=He.get(r),1===r.nodeType&&!Le.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=pe.camelCase(i.slice(5)),p(r,i,o[i])));Le.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){He.set(this,e)}):Pe(this,function(t){var n;if(r&&void 0===t){if(n=He.get(r,e),void 0!==n)return n;if(n=p(r,e),void 0!==n)return n}else this.each(function(){He.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){He.remove(this,e)})}}),pe.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=Le.get(e,t),n&&(!i||pe.isArray(n)?i=Le.access(e,t,pe.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=pe.queue(e,t),i=n.length,o=n.shift(),r=pe._queueHooks(e,t),s=function(){pe.dequeue(e,t)};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Le.get(e,n)||Le.access(e,n,{empty:pe.Callbacks("once memory").add(function(){Le.remove(e,[t+"queue",n])})})}}),pe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?pe.queue(this[0],e):void 0===t?this:this.each(function(){var n=pe.queue(this,e,t);pe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&pe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){pe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,o=pe.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=Le.get(r[s],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(t)}});var Me=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,qe=new RegExp("^(?:([+-])=|)("+Me+")([a-z%]*)$","i"),ze=["Top","Right","Bottom","Left"],Fe=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&pe.contains(e.ownerDocument,e)&&"none"===pe.css(e,"display")},_e=function(e,t,n,i){var o,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];o=n.apply(e,i||[]);for(r in t)e.style[r]=s[r];return o},We={};pe.fn.extend({show:function(){return m(this,!0)},hide:function(){return m(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Fe(this)?pe(this).show():pe(this).hide()})}});var Re=/^(?:checkbox|radio)$/i,Be=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Ue=/^$|\/(?:java|ecma)script/i,Xe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Xe.optgroup=Xe.option,Xe.tbody=Xe.tfoot=Xe.colgroup=Xe.caption=Xe.thead,Xe.th=Xe.td;var Ye=/<|&#?\w+;/;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),de.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",de.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Ge=J.documentElement,Ve=/^key/,Ke=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Qe=/^([^.]*)(?:\.(.+)|)/;pe.event={global:{},add:function(e,t,n,i,o){var r,s,a,l,c,d,u,p,f,h,m,g=Le.get(e);if(g)for(n.handler&&(r=n,n=r.handler,o=r.selector),o&&pe.find.matchesSelector(Ge,o),n.guid||(n.guid=pe.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return"undefined"!=typeof pe&&pe.event.triggered!==t.type?pe.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Ae)||[""],c=t.length;c--;)a=Qe.exec(t[c])||[],f=m=a[1],h=(a[2]||"").split(".").sort(),f&&(u=pe.event.special[f]||{},f=(o?u.delegateType:u.bindType)||f,u=pe.event.special[f]||{},d=pe.extend({type:f,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&pe.expr.match.needsContext.test(o),namespace:h.join(".")},r),(p=l[f])||(p=l[f]=[],p.delegateCount=0,u.setup&&u.setup.call(e,i,h,s)!==!1||e.addEventListener&&e.addEventListener(f,s)),u.add&&(u.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,d):p.push(d),pe.event.global[f]=!0)},remove:function(e,t,n,i,o){var r,s,a,l,c,d,u,p,f,h,m,g=Le.hasData(e)&&Le.get(e);if(g&&(l=g.events)){for(t=(t||"").match(Ae)||[""],c=t.length;c--;)if(a=Qe.exec(t[c])||[],f=m=a[1],h=(a[2]||"").split(".").sort(),f){for(u=pe.event.special[f]||{},f=(i?u.delegateType:u.bindType)||f,p=l[f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=p.length;r--;)d=p[r],!o&&m!==d.origType||n&&n.guid!==d.guid||a&&!a.test(d.namespace)||i&&i!==d.selector&&("**"!==i||!d.selector)||(p.splice(r,1),d.selector&&p.delegateCount--,u.remove&&u.remove.call(e,d));s&&!p.length&&(u.teardown&&u.teardown.call(e,h,g.handle)!==!1||pe.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)pe.event.remove(e,f+t[c],n,i,!0);pe.isEmptyObject(l)&&Le.remove(e,"handle events")}},dispatch:function(e){var t,n,i,o,r,s,a=pe.event.fix(e),l=new Array(arguments.length),c=(Le.get(this,"events")||{})[a.type]||[],d=pe.event.special[a.type]||{};for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];if(a.delegateTarget=this,!d.preDispatch||d.preDispatch.call(this,a)!==!1){for(s=pe.event.handlers.call(this,a,c),t=0;(o=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,i=((pe.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,l),void 0!==i&&(a.result=i)===!1&&(a.preventDefault(),a.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,i,o,r,s=[],a=t.delegateCount,l=e.target;if(a&&l.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(i=[],n=0;n<a;n++)r=t[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?pe(o,this).index(l)>-1:pe.find(o,this,null,[l]).length),i[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},addProp:function(e,t){Object.defineProperty(pe.Event.prototype,e,{enumerable:!0,configurable:!0,get:pe.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[pe.expando]?e:new pe.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==x()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===x()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&pe.nodeName(this,"input"))return this.click(),!1},_default:function(e){return pe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},pe.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},pe.Event=function(e,t){return this instanceof pe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?w:b,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&pe.extend(this,t),this.timeStamp=e&&e.timeStamp||pe.now(),void(this[pe.expando]=!0)):new pe.Event(e,t)},pe.Event.prototype={constructor:pe.Event,isDefaultPrevented:b,isPropagationStopped:b,isImmediatePropagationStopped:b,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=w,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=w,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=w,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},pe.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ve.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ke.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},pe.event.addProp),pe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){pe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,o=e.relatedTarget,r=e.handleObj;return o&&(o===i||pe.contains(i,o))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),pe.fn.extend({on:function(e,t,n,i){return k(this,e,t,n,i)},one:function(e,t,n,i){return k(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,pe(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=b),this.each(function(){pe.event.remove(this,e,n,t)})}});var Ze=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Je=/<script|<style|<link/i,et=/checked\s*(?:[^=]|=\s*.checked.)/i,tt=/^true\/(.*)/,nt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;pe.extend({htmlPrefilter:function(e){return e.replace(Ze,"<$1></$2>")},clone:function(e,t,n){var i,o,r,s,a=e.cloneNode(!0),l=pe.contains(e.ownerDocument,e);if(!(de.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||pe.isXMLDoc(e)))for(s=g(a),r=g(e),i=0,o=r.length;i<o;i++)E(r[i],s[i]);if(t)if(n)for(r=r||g(e),s=s||g(a),i=0,o=r.length;i<o;i++)$(r[i],s[i]);else $(e,a);return s=g(a,"script"),s.length>0&&v(s,!l&&g(e,"script")),a},cleanData:function(e){for(var t,n,i,o=pe.event.special,r=0;void 0!==(n=e[r]);r++)if(De(n)){if(t=n[Le.expando]){if(t.events)for(i in t.events)o[i]?pe.event.remove(n,i):pe.removeEvent(n,i,t.handle);n[Le.expando]=void 0}n[He.expando]&&(n[He.expando]=void 0)}}}),pe.fn.extend({detach:function(e){return j(this,e,!0)},remove:function(e){return j(this,e)},text:function(e){return Pe(this,function(e){return void 0===e?pe.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return A(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.appendChild(e)}})},prepend:function(){return A(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return A(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return A(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(pe.cleanData(g(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return pe.clone(this,e,t)})},html:function(e){return Pe(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Je.test(e)&&!Xe[(Be.exec(e)||["",""])[1].toLowerCase()]){e=pe.htmlPrefilter(e);try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(pe.cleanData(g(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return A(this,arguments,function(t){var n=this.parentNode;pe.inArray(this,e)<0&&(pe.cleanData(g(this)),n&&n.replaceChild(t,this))},e)}}),pe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){pe.fn[e]=function(e){for(var n,i=[],o=pe(e),r=o.length-1,s=0;s<=r;s++)n=s===r?this:this.clone(!0),pe(o[s])[t](n),ie.apply(i,n.get());return this.pushStack(i)}});var it=/^margin/,ot=new RegExp("^("+Me+")(?!px)[a-z%]+$","i"),rt=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)};!function(){function t(){if(a){a.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Ge.appendChild(s);var t=e.getComputedStyle(a);n="1%"!==t.top,r="2px"===t.marginLeft,i="4px"===t.width,a.style.marginRight="50%",o="4px"===t.marginRight,Ge.removeChild(s),a=null}}var n,i,o,r,s=J.createElement("div"),a=J.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",de.clearCloneStyle="content-box"===a.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(a),pe.extend(de,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return t(),i},pixelMarginRight:function(){return t(),o},reliableMarginLeft:function(){return t(),r}}))}();var st=/^(none|table(?!-c[ea]).+)/,at={position:"absolute",visibility:"hidden",display:"block"},lt={letterSpacing:"0",fontWeight:"400"},ct=["Webkit","Moz","ms"],dt=J.createElement("div").style;pe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=O(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=pe.camelCase(t),l=e.style;return t=pe.cssProps[a]||(pe.cssProps[a]=D(a)||a),s=pe.cssHooks[t]||pe.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:l[t]:(r=typeof n,"string"===r&&(o=qe.exec(n))&&o[1]&&(n=f(e,t,o),r="number"),null!=n&&n===n&&("number"===r&&(n+=o&&o[3]||(pe.cssNumber[a]?"":"px")),de.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l[t]=n)),void 0)}},css:function(e,t,n,i){var o,r,s,a=pe.camelCase(t);return t=pe.cssProps[a]||(pe.cssProps[a]=D(a)||a),s=pe.cssHooks[t]||pe.cssHooks[a],s&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=O(e,t,i)),"normal"===o&&t in lt&&(o=lt[t]),""===n||n?(r=parseFloat(o),n===!0||isFinite(r)?r||0:o):o}}),pe.each(["height","width"],function(e,t){pe.cssHooks[t]={get:function(e,n,i){if(n)return!st.test(pe.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?I(e,t,i):_e(e,at,function(){return I(e,t,i)})},set:function(e,n,i){var o,r=i&&rt(e),s=i&&H(e,t,i,"border-box"===pe.css(e,"boxSizing",!1,r),r);return s&&(o=qe.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=pe.css(e,t)),L(e,n,s)}}}),pe.cssHooks.marginLeft=P(de.reliableMarginLeft,function(e,t){if(t)return(parseFloat(O(e,"marginLeft"))||e.getBoundingClientRect().left-_e(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),pe.each({margin:"",padding:"",border:"Width"},function(e,t){pe.cssHooks[e+t]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];i<4;i++)o[e+ze[i]+t]=r[i]||r[i-2]||r[0];return o}},it.test(e)||(pe.cssHooks[e+t].set=L)}),pe.fn.extend({css:function(e,t){return Pe(this,function(e,t,n){var i,o,r={},s=0;if(pe.isArray(t)){for(i=rt(e),o=t.length;s<o;s++)r[t[s]]=pe.css(e,t[s],!1,i);return r}return void 0!==n?pe.style(e,t,n):pe.css(e,t)},e,t,arguments.length>1)}}),pe.Tween=N,N.prototype={constructor:N,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||pe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(pe.cssNumber[n]?"":"px")},cur:function(){var e=N.propHooks[this.prop];return e&&e.get?e.get(this):N.propHooks._default.get(this)},run:function(e){var t,n=N.propHooks[this.prop];return this.options.duration?this.pos=t=pe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):N.propHooks._default.set(this),this}},N.prototype.init.prototype=N.prototype,N.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=pe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){pe.fx.step[e.prop]?pe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[pe.cssProps[e.prop]]&&!pe.cssHooks[e.prop]?e.elem[e.prop]=e.now:pe.style(e.elem,e.prop,e.now+e.unit)}}},N.propHooks.scrollTop=N.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},pe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},pe.fx=N.prototype.init,pe.fx.step={};var ut,pt,ft=/^(?:toggle|show|hide)$/,ht=/queueHooks$/;pe.Animation=pe.extend(R,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return f(n.elem,e,qe.exec(t),n),n}]},tweener:function(e,t){pe.isFunction(e)?(t=e,e=["*"]):e=e.match(Ae);for(var n,i=0,o=e.length;i<o;i++)n=e[i],R.tweeners[n]=R.tweeners[n]||[],R.tweeners[n].unshift(t)},prefilters:[_],prefilter:function(e,t){t?R.prefilters.unshift(e):R.prefilters.push(e)}}),pe.speed=function(e,t,n){var i=e&&"object"==typeof e?pe.extend({},e):{complete:n||!n&&t||pe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!pe.isFunction(t)&&t};return pe.fx.off||J.hidden?i.duration=0:i.duration="number"==typeof i.duration?i.duration:i.duration in pe.fx.speeds?pe.fx.speeds[i.duration]:pe.fx.speeds._default,null!=i.queue&&i.queue!==!0||(i.queue="fx"),i.old=i.complete,i.complete=function(){pe.isFunction(i.old)&&i.old.call(this),i.queue&&pe.dequeue(this,i.queue)},i},pe.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Fe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var o=pe.isEmptyObject(e),r=pe.speed(t,n,i),s=function(){var t=R(this,pe.extend({},e),r);(o||Le.get(this,"finish"))&&t.stop(!0)};return s.finish=s,o||r.queue===!1?this.each(s):this.queue(r.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=pe.timers,s=Le.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&ht.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(n),t=!1,r.splice(o,1));!t&&n||pe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Le.get(this),i=n[e+"queue"],o=n[e+"queueHooks"],r=pe.timers,s=i?i.length:0;for(n.finish=!0,pe.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);
delete n.finish})}}),pe.each(["toggle","show","hide"],function(e,t){var n=pe.fn[t];pe.fn[t]=function(e,i,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(z(t,!0),e,i,o)}}),pe.each({slideDown:z("show"),slideUp:z("hide"),slideToggle:z("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){pe.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),pe.timers=[],pe.fx.tick=function(){var e,t=0,n=pe.timers;for(ut=pe.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||pe.fx.stop(),ut=void 0},pe.fx.timer=function(e){pe.timers.push(e),e()?pe.fx.start():pe.timers.pop()},pe.fx.interval=13,pe.fx.start=function(){pt||(pt=e.requestAnimationFrame?e.requestAnimationFrame(M):e.setInterval(pe.fx.tick,pe.fx.interval))},pe.fx.stop=function(){e.cancelAnimationFrame?e.cancelAnimationFrame(pt):e.clearInterval(pt),pt=null},pe.fx.speeds={slow:600,fast:200,_default:400},pe.fn.delay=function(t,n){return t=pe.fx?pe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,i){var o=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(o)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"));e.type="checkbox",de.checkOn=""!==e.value,de.optSelected=n.selected,e=J.createElement("input"),e.value="t",e.type="radio",de.radioValue="t"===e.value}();var mt,gt=pe.expr.attrHandle;pe.fn.extend({attr:function(e,t){return Pe(this,pe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){pe.removeAttr(this,e)})}}),pe.extend({attr:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return"undefined"==typeof e.getAttribute?pe.prop(e,t,n):(1===r&&pe.isXMLDoc(e)||(o=pe.attrHooks[t.toLowerCase()]||(pe.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void pe.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(i=o.get(e,t))?i:(i=pe.find.attr(e,t),null==i?void 0:i))},attrHooks:{type:{set:function(e,t){if(!de.radioValue&&"radio"===t&&pe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,o=t&&t.match(Ae);if(o&&1===e.nodeType)for(;n=o[i++];)e.removeAttribute(n)}}),mt={set:function(e,t,n){return t===!1?pe.removeAttr(e,n):e.setAttribute(n,n),n}},pe.each(pe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=gt[t]||pe.find.attr;gt[t]=function(e,t,i){var o,r,s=t.toLowerCase();return i||(r=gt[s],gt[s]=o,o=null!=n(e,t,i)?s:null,gt[s]=r),o}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;pe.fn.extend({prop:function(e,t){return Pe(this,pe.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[pe.propFix[e]||e]})}}),pe.extend({prop:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&pe.isXMLDoc(e)||(t=pe.propFix[t]||t,o=pe.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=pe.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),de.optSelected||(pe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),pe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){pe.propFix[this.toLowerCase()]=this});var wt=/[\t\r\n\f]/g;pe.fn.extend({addClass:function(e){var t,n,i,o,r,s,a,l=0;if(pe.isFunction(e))return this.each(function(t){pe(this).addClass(e.call(this,t,B(this)))});if("string"==typeof e&&e)for(t=e.match(Ae)||[];n=this[l++];)if(o=B(n),i=1===n.nodeType&&(" "+o+" ").replace(wt," ")){for(s=0;r=t[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");a=pe.trim(i),o!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,o,r,s,a,l=0;if(pe.isFunction(e))return this.each(function(t){pe(this).removeClass(e.call(this,t,B(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(Ae)||[];n=this[l++];)if(o=B(n),i=1===n.nodeType&&(" "+o+" ").replace(wt," ")){for(s=0;r=t[s++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");a=pe.trim(i),o!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):pe.isFunction(e)?this.each(function(n){pe(this).toggleClass(e.call(this,n,B(this),t),t)}):this.each(function(){var t,i,o,r;if("string"===n)for(i=0,o=pe(this),r=e.match(Ae)||[];t=r[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||(t=B(this),t&&Le.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Le.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+B(n)+" ").replace(wt," ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g,xt=/[\x20\t\r\n\f]+/g;pe.fn.extend({val:function(e){var t,n,i,o=this[0];{if(arguments.length)return i=pe.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,pe(this).val()):e,null==o?o="":"number"==typeof o?o+="":pe.isArray(o)&&(o=pe.map(o,function(e){return null==e?"":e+""})),t=pe.valHooks[this.type]||pe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))});if(o)return t=pe.valHooks[o.type]||pe.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(bt,""):null==n?"":n)}}}),pe.extend({valHooks:{option:{get:function(e){var t=pe.find.attr(e,"value");return null!=t?t:pe.trim(pe.text(e)).replace(xt," ")}},select:{get:function(e){for(var t,n,i=e.options,o=e.selectedIndex,r="select-one"===e.type,s=r?null:[],a=r?o+1:i.length,l=o<0?a:r?o:0;l<a;l++)if(n=i[l],(n.selected||l===o)&&!n.disabled&&(!n.parentNode.disabled||!pe.nodeName(n.parentNode,"optgroup"))){if(t=pe(n).val(),r)return t;s.push(t)}return s},set:function(e,t){for(var n,i,o=e.options,r=pe.makeArray(t),s=o.length;s--;)i=o[s],(i.selected=pe.inArray(pe.valHooks.option.get(i),r)>-1)&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),pe.each(["radio","checkbox"],function(){pe.valHooks[this]={set:function(e,t){if(pe.isArray(t))return e.checked=pe.inArray(pe(e).val(),t)>-1}},de.checkOn||(pe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var kt=/^(?:focusinfocus|focusoutblur)$/;pe.extend(pe.event,{trigger:function(t,n,i,o){var r,s,a,l,c,d,u,p=[i||J],f=ae.call(t,"type")?t.type:t,h=ae.call(t,"namespace")?t.namespace.split("."):[];if(s=a=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!kt.test(f+pe.event.triggered)&&(f.indexOf(".")>-1&&(h=f.split("."),f=h.shift(),h.sort()),c=f.indexOf(":")<0&&"on"+f,t=t[pe.expando]?t:new pe.Event(f,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:pe.makeArray(n,[t]),u=pe.event.special[f]||{},o||!u.trigger||u.trigger.apply(i,n)!==!1)){if(!o&&!u.noBubble&&!pe.isWindow(i)){for(l=u.delegateType||f,kt.test(l+f)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(i.ownerDocument||J)&&p.push(a.defaultView||a.parentWindow||e)}for(r=0;(s=p[r++])&&!t.isPropagationStopped();)t.type=r>1?l:u.bindType||f,d=(Le.get(s,"events")||{})[t.type]&&Le.get(s,"handle"),d&&d.apply(s,n),d=c&&s[c],d&&d.apply&&De(s)&&(t.result=d.apply(s,n),t.result===!1&&t.preventDefault());return t.type=f,o||t.isDefaultPrevented()||u._default&&u._default.apply(p.pop(),n)!==!1||!De(i)||c&&pe.isFunction(i[f])&&!pe.isWindow(i)&&(a=i[c],a&&(i[c]=null),pe.event.triggered=f,i[f](),pe.event.triggered=void 0,a&&(i[c]=a)),t.result}},simulate:function(e,t,n){var i=pe.extend(new pe.Event,n,{type:e,isSimulated:!0});pe.event.trigger(i,null,t)}}),pe.fn.extend({trigger:function(e,t){return this.each(function(){pe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return pe.event.trigger(e,t,n,!0)}}),pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){pe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),pe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),de.focusin="onfocusin"in e,de.focusin||pe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){pe.event.simulate(t,e.target,pe.event.fix(e))};pe.event.special[t]={setup:function(){var i=this.ownerDocument||this,o=Le.access(i,t);o||i.addEventListener(e,n,!0),Le.access(i,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=Le.access(i,t)-1;o?Le.access(i,t,o):(i.removeEventListener(e,n,!0),Le.remove(i,t))}}});var Tt=e.location,Ct=pe.now(),St=/\?/;pe.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||pe.error("Invalid XML: "+t),n};var $t=/\[\]$/,Et=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;pe.param=function(e,t){var n,i=[],o=function(e,t){var n=pe.isFunction(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(pe.isArray(e)||e.jquery&&!pe.isPlainObject(e))pe.each(e,function(){o(this.name,this.value)});else for(n in e)U(n,e[n],t,o);return i.join("&")},pe.fn.extend({serialize:function(){return pe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=pe.prop(this,"elements");return e?pe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!pe(this).is(":disabled")&&jt.test(this.nodeName)&&!At.test(e)&&(this.checked||!Re.test(e))}).map(function(e,t){var n=pe(this).val();return null==n?null:pe.isArray(n)?pe.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Ot=/%20/g,Pt=/#.*$/,Dt=/([?&])_=[^&]*/,Lt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ht=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,It=/^(?:GET|HEAD)$/,Nt=/^\/\//,Mt={},qt={},zt="*/".concat("*"),Ft=J.createElement("a");Ft.href=Tt.href,pe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:Ht.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":pe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?G(G(e,pe.ajaxSettings),t):G(pe.ajaxSettings,e)},ajaxPrefilter:X(Mt),ajaxTransport:X(qt),ajax:function(t,n){function i(t,n,i,a){var c,p,f,b,x,k=n;d||(d=!0,l&&e.clearTimeout(l),o=void 0,s=a||"",T.readyState=t>0?4:0,c=t>=200&&t<300||304===t,i&&(b=V(h,T,i)),b=K(h,b,T,c),c?(h.ifModified&&(x=T.getResponseHeader("Last-Modified"),x&&(pe.lastModified[r]=x),x=T.getResponseHeader("etag"),x&&(pe.etag[r]=x)),204===t||"HEAD"===h.type?k="nocontent":304===t?k="notmodified":(k=b.state,p=b.data,f=b.error,c=!f)):(f=k,!t&&k||(k="error",t<0&&(t=0))),T.status=t,T.statusText=(n||k)+"",c?v.resolveWith(m,[p,k,T]):v.rejectWith(m,[T,k,f]),T.statusCode(w),w=void 0,u&&g.trigger(c?"ajaxSuccess":"ajaxError",[T,h,c?p:f]),y.fireWith(m,[T,k]),u&&(g.trigger("ajaxComplete",[T,h]),--pe.active||pe.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var o,r,s,a,l,c,d,u,p,f,h=pe.ajaxSetup({},n),m=h.context||h,g=h.context&&(m.nodeType||m.jquery)?pe(m):pe.event,v=pe.Deferred(),y=pe.Callbacks("once memory"),w=h.statusCode||{},b={},x={},k="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(d){if(!a)for(a={};t=Lt.exec(s);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return d?s:null},setRequestHeader:function(e,t){return null==d&&(e=x[e.toLowerCase()]=x[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==d&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(d)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||k;return o&&o.abort(t),i(0,t),this}};if(v.promise(T),h.url=((t||h.url||Tt.href)+"").replace(Nt,Tt.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Ae)||[""],null==h.crossDomain){c=J.createElement("a");try{c.href=h.url,c.href=c.href,h.crossDomain=Ft.protocol+"//"+Ft.host!=c.protocol+"//"+c.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=pe.param(h.data,h.traditional)),Y(Mt,h,n,T),d)return T;u=pe.event&&h.global,u&&0===pe.active++&&pe.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!It.test(h.type),r=h.url.replace(Pt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Ot,"+")):(f=h.url.slice(r.length),h.data&&(r+=(St.test(r)?"&":"?")+h.data,delete h.data),h.cache===!1&&(r=r.replace(Dt,""),f=(St.test(r)?"&":"?")+"_="+Ct++ +f),h.url=r+f),h.ifModified&&(pe.lastModified[r]&&T.setRequestHeader("If-Modified-Since",pe.lastModified[r]),pe.etag[r]&&T.setRequestHeader("If-None-Match",pe.etag[r])),(h.data&&h.hasContent&&h.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",h.contentType),T.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+zt+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)T.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(h.beforeSend.call(m,T,h)===!1||d))return T.abort();if(k="abort",y.add(h.complete),T.done(h.success),T.fail(h.error),o=Y(qt,h,n,T)){if(T.readyState=1,u&&g.trigger("ajaxSend",[T,h]),d)return T;h.async&&h.timeout>0&&(l=e.setTimeout(function(){T.abort("timeout")},h.timeout));try{d=!1,o.send(b,i)}catch(e){if(d)throw e;i(-1,e)}}else i(-1,"No Transport");return T},getJSON:function(e,t,n){return pe.get(e,t,n,"json")},getScript:function(e,t){return pe.get(e,void 0,t,"script")}}),pe.each(["get","post"],function(e,t){pe[t]=function(e,n,i,o){return pe.isFunction(n)&&(o=o||i,i=n,n=void 0),pe.ajax(pe.extend({url:e,type:t,dataType:o,data:n,success:i},pe.isPlainObject(e)&&e))}}),pe._evalUrl=function(e){return pe.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},pe.fn.extend({wrapAll:function(e){var t;return this[0]&&(pe.isFunction(e)&&(e=e.call(this[0])),t=pe(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return pe.isFunction(e)?this.each(function(t){pe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=pe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=pe.isFunction(e);return this.each(function(n){pe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){pe(this).replaceWith(this.childNodes)}),this}}),pe.expr.pseudos.hidden=function(e){return!pe.expr.pseudos.visible(e)},pe.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},pe.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},Wt=pe.ajaxSettings.xhr();de.cors=!!Wt&&"withCredentials"in Wt,de.ajax=Wt=!!Wt,pe.ajaxTransport(function(t){var n,i;if(de.cors||Wt&&!t.crossDomain)return{send:function(o,r){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest");for(s in o)a.setRequestHeader(s,o[s]);n=function(e){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(_t[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&i()})},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),pe.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),pe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return pe.globalEval(e),e}}}),pe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),pe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=pe("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Rt=[],Bt=/(=)\?(?=&|$)|\?\?/;pe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Rt.pop()||pe.expando+"_"+Ct++;return this[e]=!0,e}}),pe.ajaxPrefilter("json jsonp",function(t,n,i){var o,r,s,a=t.jsonp!==!1&&(Bt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return o=t.jsonpCallback=pe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Bt,"$1"+o):t.jsonp!==!1&&(t.url+=(St.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||pe.error(o+" was not called"),s[0]},t.dataTypes[0]="json",r=e[o],e[o]=function(){s=arguments},i.always(function(){void 0===r?pe(e).removeProp(o):e[o]=r,t[o]&&(t.jsonpCallback=n.jsonpCallback,Rt.push(o)),s&&pe.isFunction(r)&&r(s[0]),s=r=void 0}),"script"}),de.createHTMLDocument=function(){var e=J.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),pe.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,r;return t||(de.createHTMLDocument?(t=J.implementation.createHTMLDocument(""),i=t.createElement("base"),i.href=J.location.href,t.head.appendChild(i)):t=J),o=xe.exec(e),r=!n&&[],o?[t.createElement(o[1])]:(o=y([e],t,r),r&&r.length&&pe(r).remove(),pe.merge([],o.childNodes))},pe.fn.load=function(e,t,n){var i,o,r,s=this,a=e.indexOf(" ");return a>-1&&(i=pe.trim(e.slice(a)),e=e.slice(0,a)),pe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),s.length>0&&pe.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){r=arguments,s.html(i?pe("<div>").append(pe.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},pe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){pe.fn[t]=function(e){return this.on(t,e)}}),pe.expr.pseudos.animated=function(e){return pe.grep(pe.timers,function(t){return e===t.elem}).length},pe.offset={setOffset:function(e,t,n){var i,o,r,s,a,l,c,d=pe.css(e,"position"),u=pe(e),p={};"static"===d&&(e.style.position="relative"),a=u.offset(),r=pe.css(e,"top"),l=pe.css(e,"left"),c=("absolute"===d||"fixed"===d)&&(r+l).indexOf("auto")>-1,c?(i=u.position(),s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),pe.isFunction(t)&&(t=t.call(e,n,pe.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+o),"using"in t?t.using.call(e,p):u.css(p)}},pe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){pe.offset.setOffset(this,e,t)});var t,n,i,o,r=this[0];if(r)return r.getClientRects().length?(i=r.getBoundingClientRect(),i.width||i.height?(o=r.ownerDocument,n=Q(o),t=o.documentElement,{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):{top:0,left:0}},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0};return"fixed"===pe.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),pe.nodeName(e[0],"html")||(i=e.offset()),i={top:i.top+pe.css(e[0],"borderTopWidth",!0),left:i.left+pe.css(e[0],"borderLeftWidth",!0)}),{top:t.top-i.top-pe.css(n,"marginTop",!0),left:t.left-i.left-pe.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===pe.css(e,"position");)e=e.offsetParent;return e||Ge})}}),pe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;pe.fn[e]=function(i){return Pe(this,function(e,i,o){var r=Q(e);return void 0===o?r?r[t]:e[i]:void(r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):e[i]=o)},e,i,arguments.length)}}),pe.each(["top","left"],function(e,t){pe.cssHooks[t]=P(de.pixelPosition,function(e,n){if(n)return n=O(e,t),ot.test(n)?pe(e).position()[t]+"px":n})}),pe.each({Height:"height",Width:"width"},function(e,t){pe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){pe.fn[i]=function(o,r){var s=arguments.length&&(n||"boolean"!=typeof o),a=n||(o===!0||r===!0?"margin":"border");return Pe(this,function(t,n,o){var r;return pe.isWindow(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===o?pe.css(t,n,a):pe.style(t,n,o,a)},t,s?o:void 0,s)}})}),pe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),pe.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return pe});var Ut=e.jQuery,Xt=e.$;return pe.noConflict=function(t){return e.$===pe&&(e.$=Xt),t&&e.jQuery===pe&&(e.jQuery=Ut),pe},t||(e.jQuery=e.$=pe),pe}),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var t=window.Slick||{};t=function(){function t(t,i){var o,r=this;r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,n){return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.focussed=!1,r.interrupted=!1,r.hidden="hidden",r.paused=!0,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=e(t),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,o=e(t).data("slick")||{},r.options=e.extend({},r.defaults,i,o),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,"undefined"!=typeof document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=e.proxy(r.autoPlay,r),r.autoPlayClear=e.proxy(r.autoPlayClear,r),r.autoPlayIterator=e.proxy(r.autoPlayIterator,r),r.changeSlide=e.proxy(r.changeSlide,r),r.clickHandler=e.proxy(r.clickHandler,r),r.selectHandler=e.proxy(r.selectHandler,r),r.setPosition=e.proxy(r.setPosition,r),r.swipeHandler=e.proxy(r.swipeHandler,r),r.dragHandler=e.proxy(r.dragHandler,r),r.keyHandler=e.proxy(r.keyHandler,r),r.instanceUid=n++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.registerBreakpoints(),r.init(!0)}var n=0;return t}(),t.prototype.activateADA=function(){var e=this;e.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.addSlide=t.prototype.slickAdd=function(t,n,i){var o=this;if("boolean"==typeof n)i=n,n=null;else if(n<0||n>=o.slideCount)return!1;o.unload(),"number"==typeof n?0===n&&0===o.$slides.length?e(t).appendTo(o.$slideTrack):i?e(t).insertBefore(o.$slides.eq(n)):e(t).insertAfter(o.$slides.eq(n)):i===!0?e(t).prependTo(o.$slideTrack):e(t).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each(function(t,n){e(n).attr("data-slick-index",t)}),o.$slidesCache=o.$slides,o.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,n){var i={},o=this;o.animateHeight(),o.options.rtl===!0&&o.options.vertical===!1&&(t=-t),o.transformsEnabled===!1?o.options.vertical===!1?o.$slideTrack.animate({left:t},o.options.speed,o.options.easing,n):o.$slideTrack.animate({top:t},o.options.speed,o.options.easing,n):o.cssTransitions===!1?(o.options.rtl===!0&&(o.currentLeft=-o.currentLeft),e({animStart:o.currentLeft}).animate({animStart:t},{duration:o.options.speed,easing:o.options.easing,step:function(e){e=Math.ceil(e),o.options.vertical===!1?(i[o.animType]="translate("+e+"px, 0px)",o.$slideTrack.css(i)):(i[o.animType]="translate(0px,"+e+"px)",o.$slideTrack.css(i))},complete:function(){n&&n.call()}})):(o.applyTransition(),t=Math.ceil(t),o.options.vertical===!1?i[o.animType]="translate3d("+t+"px, 0px, 0px)":i[o.animType]="translate3d(0px,"+t+"px, 0px)",o.$slideTrack.css(i),n&&setTimeout(function(){o.disableTransition(),n.call()},o.options.speed))},t.prototype.getNavTarget=function(){var t=this,n=t.options.asNavFor;return n&&null!==n&&(n=e(n).not(t.$slider)),n},t.prototype.asNavFor=function(t){var n=this,i=n.getNavTarget();null!==i&&"object"==typeof i&&i.each(function(){var n=e(this).slick("getSlick");n.unslicked||n.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,n={};t.options.fade===!1?n[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:n[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,t.options.fade===!1?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(e.options.infinite===!1&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1===0&&(e.direction=1))),e.slideHandler(t))},t.prototype.buildArrows=function(){var t=this;t.options.arrows===!0&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),t.options.infinite!==!0&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,n,i=this;if(i.options.dots===!0&&i.slideCount>i.options.slidesToShow){for(i.$slider.addClass("slick-dotted"),n=e("<ul />").addClass(i.options.dotsClass),t=0;t<=i.getDotCount();t+=1)n.append(e("<li />").append(i.options.customPaging.call(this,i,t)));i.$dots=n.appendTo(i.options.appendDots),i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,n){e(n).attr("data-slick-index",t).data("originalStyling",e(n).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),t.options.centerMode!==!0&&t.options.swipeToSlide!==!0||(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.options.draggable===!0&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,n,i,o,r,s,a=this;if(i=document.createDocumentFragment(),r=a.$slider.children(),a.options.rows>1){for(s=a.options.slidesPerRow*a.options.rows,o=Math.ceil(r.length/s),e=0;e<o;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var c=document.createElement("div");for(n=0;n<a.options.slidesPerRow;n++){var d=e*s+(t*a.options.slidesPerRow+n);r.get(d)&&c.appendChild(r.get(d))}l.appendChild(c)}i.appendChild(l)}a.$slider.empty().append(i),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,n){var i,o,r,s=this,a=!1,l=s.$slider.width(),c=window.innerWidth||e(window).width();if("window"===s.respondTo?r=c:"slider"===s.respondTo?r=l:"min"===s.respondTo&&(r=Math.min(c,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){o=null;for(i in s.breakpoints)s.breakpoints.hasOwnProperty(i)&&(s.originalSettings.mobileFirst===!1?r<s.breakpoints[i]&&(o=s.breakpoints[i]):r>s.breakpoints[i]&&(o=s.breakpoints[i]));null!==o?null!==s.activeBreakpoint?(o!==s.activeBreakpoint||n)&&(s.activeBreakpoint=o,
"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t),a=o),t||a===!1||s.$slider.trigger("breakpoint",[s,a])}},t.prototype.changeSlide=function(t,n){var i,o,r,s=this,a=e(t.currentTarget);switch(a.is("a")&&t.preventDefault(),a.is("li")||(a=a.closest("li")),r=s.slideCount%s.options.slidesToScroll!==0,i=r?0:(s.slideCount-s.currentSlide)%s.options.slidesToScroll,t.data.message){case"previous":o=0===i?s.options.slidesToScroll:s.options.slidesToShow-i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide-o,!1,n);break;case"next":o=0===i?s.options.slidesToScroll:i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide+o,!1,n);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*s.options.slidesToScroll;s.slideHandler(s.checkNavigable(l),!1,n),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,n,i=this;if(t=i.getNavigableIndexes(),n=0,e>t[t.length-1])e=t[t.length-1];else for(var o in t){if(e<t[o]){e=n;break}n=t[o]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),t.$slider.off("focus.slick blur.slick"),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide)),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),t.options.accessibility===!0&&t.$list.off("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).off("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>1&&(e=t.$slides.children().children(),e.removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){var t=this;t.shouldClick===!1&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),e(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.$slider.removeClass("slick-dotted"),n.unslicked=!0,t||n.$slider.trigger("destroy",[n])},t.prototype.disableTransition=function(e){var t=this,n={};n[t.transitionType]="",t.options.fade===!1?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.fadeSlide=function(e,t){var n=this;n.cssTransitions===!1?(n.$slides.eq(e).css({zIndex:n.options.zIndex}),n.$slides.eq(e).animate({opacity:1},n.options.speed,n.options.easing,t)):(n.applyTransition(e),n.$slides.eq(e).css({opacity:1,zIndex:n.options.zIndex}),t&&setTimeout(function(){n.disableTransition(e),t.call()},n.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;t.cssTransitions===!1?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(n){n.stopImmediatePropagation();var i=e(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=i.is(":focus"),t.autoPlay())},0)})},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){var e=this;return e.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,n=0,i=0;if(e.options.infinite===!0)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(e.options.centerMode===!0)i=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else i=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return i-1},t.prototype.getLeft=function(e){var t,n,i,o=this,r=0;return o.slideOffset=0,n=o.$slides.first().outerHeight(!0),o.options.infinite===!0?(o.slideCount>o.options.slidesToShow&&(o.slideOffset=o.slideWidth*o.options.slidesToShow*-1,r=n*o.options.slidesToShow*-1),o.slideCount%o.options.slidesToScroll!==0&&e+o.options.slidesToScroll>o.slideCount&&o.slideCount>o.options.slidesToShow&&(e>o.slideCount?(o.slideOffset=(o.options.slidesToShow-(e-o.slideCount))*o.slideWidth*-1,r=(o.options.slidesToShow-(e-o.slideCount))*n*-1):(o.slideOffset=o.slideCount%o.options.slidesToScroll*o.slideWidth*-1,r=o.slideCount%o.options.slidesToScroll*n*-1))):e+o.options.slidesToShow>o.slideCount&&(o.slideOffset=(e+o.options.slidesToShow-o.slideCount)*o.slideWidth,r=(e+o.options.slidesToShow-o.slideCount)*n),o.slideCount<=o.options.slidesToShow&&(o.slideOffset=0,r=0),o.options.centerMode===!0&&o.options.infinite===!0?o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)-o.slideWidth:o.options.centerMode===!0&&(o.slideOffset=0,o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)),t=o.options.vertical===!1?e*o.slideWidth*-1+o.slideOffset:e*n*-1+r,o.options.variableWidth===!0&&(i=o.slideCount<=o.options.slidesToShow||o.options.infinite===!1?o.$slideTrack.children(".slick-slide").eq(e):o.$slideTrack.children(".slick-slide").eq(e+o.options.slidesToShow),t=o.options.rtl===!0?i[0]?(o.$slideTrack.width()-i[0].offsetLeft-i.width())*-1:0:i[0]?i[0].offsetLeft*-1:0,o.options.centerMode===!0&&(i=o.slideCount<=o.options.slidesToShow||o.options.infinite===!1?o.$slideTrack.children(".slick-slide").eq(e):o.$slideTrack.children(".slick-slide").eq(e+o.options.slidesToShow+1),t=o.options.rtl===!0?i[0]?(o.$slideTrack.width()-i[0].offsetLeft-i.width())*-1:0:i[0]?i[0].offsetLeft*-1:0,t+=(o.$list.width()-i.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){var t=this;return t.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,n=0,i=0,o=[];for(t.options.infinite===!1?e=t.slideCount:(n=t.options.slidesToScroll*-1,i=t.options.slidesToScroll*-1,e=2*t.slideCount);n<e;)o.push(n),n=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return o},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,n,i,o=this;return i=o.options.centerMode===!0?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,o.options.swipeToSlide===!0?(o.$slideTrack.find(".slick-slide").each(function(t,r){if(r.offsetLeft-i+e(r).outerWidth()/2>o.swipeLeft*-1)return n=r,!1}),t=Math.abs(e(n).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){var n=this;n.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var n=this;e(n.$slider).hasClass("slick-initialized")||(e(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateArrows(),n.updateDots(),n.checkResponsive(!0),n.focusHandler()),t&&n.$slider.trigger("init",[n]),n.options.accessibility===!0&&n.initADA(),n.options.autoplay&&(n.paused=!1,n.autoPlay())},t.prototype.initADA=function(){var t=this;t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),t.$slideTrack.attr("role","listbox"),t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n){e(this).attr({role:"option","aria-describedby":"slick-slide"+t.instanceUid+n})}),null!==t.$dots&&t.$dots.attr("role","tablist").find("li").each(function(n){e(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+t.instanceUid+n,id:"slick-slide"+t.instanceUid+n})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),t.activateADA()},t.prototype.initArrowEvents=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide))},t.prototype.initDotEvents=function(){var t=this;t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),t.options.dots===!0&&t.options.pauseOnDotsHover===!0&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),t.options.accessibility===!0&&t.$list.on("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).on("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.initUI=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&t.options.accessibility===!0?t.changeSlide({data:{message:t.options.rtl===!0?"next":"previous"}}):39===e.keyCode&&t.options.accessibility===!0&&t.changeSlide({data:{message:t.options.rtl===!0?"previous":"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),n=e(this).attr("data-lazy"),i=document.createElement("img");i.onload=function(){t.animate({opacity:0},100,function(){t.attr("src",n).animate({opacity:1},200,function(){t.removeAttr("data-lazy").removeClass("slick-loading")}),s.$slider.trigger("lazyLoaded",[s,t,n])})},i.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,t,n])},i.src=n})}var n,i,o,r,s=this;s.options.centerMode===!0?s.options.infinite===!0?(o=s.currentSlide+(s.options.slidesToShow/2+1),r=o+s.options.slidesToShow+2):(o=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),r=2+(s.options.slidesToShow/2+1)+s.currentSlide):(o=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide,r=Math.ceil(o+s.options.slidesToShow),s.options.fade===!0&&(o>0&&o--,r<=s.slideCount&&r++)),n=s.$slider.find(".slick-slide").slice(o,r),t(n),s.slideCount<=s.options.slidesToShow?(i=s.$slider.find(".slick-slide"),t(i)):s.currentSlide>=s.slideCount-s.options.slidesToShow?(i=s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow),t(i)):0===s.currentSlide&&(i=s.$slider.find(".slick-cloned").slice(s.options.slidesToShow*-1),t(i))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){var e=this;e.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&t.initADA())},t.prototype.prev=t.prototype.slickPrev=function(){var e=this;e.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(t){t=t||1;var n,i,o,r=this,s=e("img[data-lazy]",r.$slider);s.length?(n=s.first(),i=n.attr("data-lazy"),o=document.createElement("img"),o.onload=function(){n.attr("src",i).removeAttr("data-lazy").removeClass("slick-loading"),r.options.adaptiveHeight===!0&&r.setPosition(),r.$slider.trigger("lazyLoaded",[r,n,i]),r.progressiveLazyLoad()},o.onerror=function(){t<3?setTimeout(function(){r.progressiveLazyLoad(t+1)},500):(n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,n,i]),r.progressiveLazyLoad())},o.src=i):r.$slider.trigger("allImagesLoaded",[r])},t.prototype.refresh=function(t){var n,i,o=this;i=o.slideCount-o.options.slidesToShow,!o.options.infinite&&o.currentSlide>i&&(o.currentSlide=i),o.slideCount<=o.options.slidesToShow&&(o.currentSlide=0),n=o.currentSlide,o.destroy(!0),e.extend(o,o.initials,{currentSlide:n}),o.init(),t||o.changeSlide({data:{message:"index",index:n}},!1)},t.prototype.registerBreakpoints=function(){var t,n,i,o=this,r=o.options.responsive||null;if("array"===e.type(r)&&r.length){o.respondTo=o.options.respondTo||"window";for(t in r)if(i=o.breakpoints.length-1,n=r[t].breakpoint,r.hasOwnProperty(t)){for(;i>=0;)o.breakpoints[i]&&o.breakpoints[i]===n&&o.breakpoints.splice(i,1),i--;o.breakpoints.push(n),o.breakpointSettings[n]=r[t].settings}o.breakpoints.sort(function(e,t){return o.options.mobileFirst?e-t:t-e})}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,n){var i=this;return"boolean"==typeof e?(t=e,e=t===!0?0:i.slideCount-1):e=t===!0?--e:e,!(i.slideCount<1||e<0||e>i.slideCount-1)&&(i.unload(),n===!0?i.$slideTrack.children().remove():i.$slideTrack.children(this.options.slide).eq(e).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,void i.reinit())},t.prototype.setCSS=function(e){var t,n,i=this,o={};i.options.rtl===!0&&(e=-e),t="left"==i.positionProp?Math.ceil(e)+"px":"0px",n="top"==i.positionProp?Math.ceil(e)+"px":"0px",o[i.positionProp]=e,i.transformsEnabled===!1?i.$slideTrack.css(o):(o={},i.cssTransitions===!1?(o[i.animType]="translate("+t+", "+n+")",i.$slideTrack.css(o)):(o[i.animType]="translate3d("+t+", "+n+", 0px)",i.$slideTrack.css(o)))},t.prototype.setDimensions=function(){var e=this;e.options.vertical===!1?e.options.centerMode===!0&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),e.options.centerMode===!0&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),e.options.vertical===!1&&e.options.variableWidth===!1?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):e.options.variableWidth===!0?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();e.options.variableWidth===!1&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,n=this;n.$slides.each(function(i,o){t=n.slideWidth*i*-1,n.options.rtl===!0?e(o).css({position:"relative",right:t,top:0,zIndex:n.options.zIndex-2,opacity:0}):e(o).css({position:"relative",left:t,top:0,zIndex:n.options.zIndex-2,opacity:0})}),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(){var t,n,i,o,r,s=this,a=!1;if("object"===e.type(arguments[0])?(i=arguments[0],a=arguments[1],r="multiple"):"string"===e.type(arguments[0])&&(i=arguments[0],o=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===e.type(arguments[1])?r="responsive":"undefined"!=typeof arguments[1]&&(r="single")),"single"===r)s.options[i]=o;else if("multiple"===r)e.each(i,function(e,t){s.options[e]=t});else if("responsive"===r)for(n in o)if("array"!==e.type(s.options.responsive))s.options.responsive=[o[n]];else{for(t=s.options.responsive.length-1;t>=0;)s.options.responsive[t].breakpoint===o[n].breakpoint&&s.options.responsive.splice(t,1),t--;s.options.responsive.push(o[n])}a&&(s.unload(),s.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),e.options.fade===!1?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=e.options.vertical===!0?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||e.options.useCSS===!0&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&e.animType!==!1&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&e.animType!==!1},t.prototype.setSlideClasses=function(e){var t,n,i,o,r=this;n=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),r.$slides.eq(e).addClass("slick-current"),r.options.centerMode===!0?(t=Math.floor(r.options.slidesToShow/2),r.options.infinite===!0&&(e>=t&&e<=r.slideCount-1-t?r.$slides.slice(e-t,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(i=r.options.slidesToShow+e,n.slice(i-t+1,i+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?n.eq(n.length-1-r.options.slidesToShow).addClass("slick-center"):e===r.slideCount-1&&n.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(e).addClass("slick-center")):e>=0&&e<=r.slideCount-r.options.slidesToShow?r.$slides.slice(e,e+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=r.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(o=r.slideCount%r.options.slidesToShow,i=r.options.infinite===!0?r.options.slidesToShow+e:e,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-e<r.options.slidesToShow?n.slice(i-(r.options.slidesToShow-o),i+o).addClass("slick-active").attr("aria-hidden","false"):n.slice(i,i+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===r.options.lazyLoad&&r.lazyLoad()},t.prototype.setupInfinite=function(){var t,n,i,o=this;if(o.options.fade===!0&&(o.options.centerMode=!1),o.options.infinite===!0&&o.options.fade===!1&&(n=null,o.slideCount>o.options.slidesToShow)){for(i=o.options.centerMode===!0?o.options.slidesToShow+1:o.options.slidesToShow,t=o.slideCount;t>o.slideCount-i;t-=1)n=t-1,e(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(t=0;t<i;t+=1)n=t,e(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.interrupt=function(e){var t=this;e||t.autoPlay(),t.interrupted=e},t.prototype.selectHandler=function(t){var n=this,i=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),o=parseInt(i.attr("data-slick-index"));return o||(o=0),n.slideCount<=n.options.slidesToShow?(n.setSlideClasses(o),void n.asNavFor(o)):void n.slideHandler(o)},t.prototype.slideHandler=function(e,t,n){var i,o,r,s,a,l=null,c=this;if(t=t||!1,(c.animating!==!0||c.options.waitForAnimate!==!0)&&!(c.options.fade===!0&&c.currentSlide===e||c.slideCount<=c.options.slidesToShow))return t===!1&&c.asNavFor(e),i=e,l=c.getLeft(i),s=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?s:c.swipeLeft,c.options.infinite===!1&&c.options.centerMode===!1&&(e<0||e>c.getDotCount()*c.options.slidesToScroll)?void(c.options.fade===!1&&(i=c.currentSlide,n!==!0?c.animateSlide(s,function(){c.postSlide(i)}):c.postSlide(i))):c.options.infinite===!1&&c.options.centerMode===!0&&(e<0||e>c.slideCount-c.options.slidesToScroll)?void(c.options.fade===!1&&(i=c.currentSlide,n!==!0?c.animateSlide(s,function(){c.postSlide(i)}):c.postSlide(i))):(c.options.autoplay&&clearInterval(c.autoPlayTimer),o=i<0?c.slideCount%c.options.slidesToScroll!==0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+i:i>=c.slideCount?c.slideCount%c.options.slidesToScroll!==0?0:i-c.slideCount:i,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,o]),r=c.currentSlide,c.currentSlide=o,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&(a=c.getNavTarget(),a=a.slick("getSlick"),a.slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide)),c.updateDots(),c.updateArrows(),c.options.fade===!0?(n!==!0?(c.fadeSlideOut(r),c.fadeSlide(o,function(){c.postSlide(o)})):c.postSlide(o),void c.animateHeight()):void(n!==!0?c.animateSlide(l,function(){c.postSlide(o)}):c.postSlide(o)))},t.prototype.startLoad=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,n,i,o=this;return e=o.touchObject.startX-o.touchObject.curX,t=o.touchObject.startY-o.touchObject.curY,n=Math.atan2(t,e),i=Math.round(180*n/Math.PI),i<0&&(i=360-Math.abs(i)),i<=45&&i>=0?o.options.rtl===!1?"left":"right":i<=360&&i>=315?o.options.rtl===!1?"left":"right":i>=135&&i<=225?o.options.rtl===!1?"right":"left":o.options.verticalSwiping===!0?i>=35&&i<=135?"down":"up":"vertical"},t.prototype.swipeEnd=function(e){var t,n,i=this;if(i.dragging=!1,i.interrupted=!1,i.shouldClick=!(i.touchObject.swipeLength>10),void 0===i.touchObject.curX)return!1;if(i.touchObject.edgeHit===!0&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(t),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(t.options.swipe===!1||"ontouchend"in document&&t.options.swipe===!1||t.options.draggable===!1&&e.type.indexOf("mouse")!==-1))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,t.options.verticalSwiping===!0&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,n,i,o,r,s=this;return r=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!s.dragging||r&&1!==r.length)&&(t=s.getLeft(s.currentSlide),s.touchObject.curX=void 0!==r?r[0].pageX:e.clientX,s.touchObject.curY=void 0!==r?r[0].pageY:e.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),s.options.verticalSwiping===!0&&(s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curY-s.touchObject.startY,2)))),n=s.swipeDirection(),"vertical"!==n?(void 0!==e.originalEvent&&s.touchObject.swipeLength>4&&e.preventDefault(),o=(s.options.rtl===!1?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),s.options.verticalSwiping===!0&&(o=s.touchObject.curY>s.touchObject.startY?1:-1),i=s.touchObject.swipeLength,s.touchObject.edgeHit=!1,s.options.infinite===!1&&(0===s.currentSlide&&"right"===n||s.currentSlide>=s.getDotCount()&&"left"===n)&&(i=s.touchObject.swipeLength*s.options.edgeFriction,s.touchObject.edgeHit=!0),s.options.vertical===!1?s.swipeLeft=t+i*o:s.swipeLeft=t+i*(s.$list.height()/s.listWidth)*o,s.options.verticalSwiping===!0&&(s.swipeLeft=t+i*o),s.options.fade!==!0&&s.options.touchMove!==!1&&(s.animating===!0?(s.swipeLeft=null,!1):void s.setCSS(s.swipeLeft))):void 0)},t.prototype.swipeStart=function(e){var t,n=this;return n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow?(n.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==t?t.pageX:e.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(n.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e,t=this;e=Math.floor(t.options.slidesToShow/2),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&t.options.centerMode===!1?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&t.options.centerMode===!0&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,n,i=this,o=arguments[0],r=Array.prototype.slice.call(arguments,1),s=i.length;
for(e=0;e<s;e++)if("object"==typeof o||"undefined"==typeof o?i[e].slick=new t(i[e],o):n=i[e].slick[o].apply(i[e].slick,r),"undefined"!=typeof n)return n;return i}}),!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,n,i,o,r,s,a="Close",l="BeforeClose",c="AfterClose",d="BeforeAppend",u="MarkupParse",p="Open",f="Change",h="mfp",m="."+h,g="mfp-ready",v="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,x=e(window),k=function(e,n){t.ev.on(h+e+m,n)},T=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},C=function(n,i){t.ev.triggerHandler(h+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},S=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},$=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},E=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=E(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,a=n.items;for(o=0;o<a.length;o++)if(s=a[o],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=o;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return void t.updateItemHTML();t.types=[],r="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=T("bg").on("click"+m,function(){t.close()}),t.wrap=T("wrap").attr("tabindex",-1).on("click"+m,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=T("container",t.wrap)),t.contentContainer=T("content"),t.st.preloader&&(t.preloader=T("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(o=0;o<l.length;o++){var c=l[o];c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}C("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(k(u,function(e,t,n,i){n.close_replaceWith=S(i.type)}),r+=" mfp-close-btn-in"):t.wrap.append(S())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:x.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup"+m,function(e){27===e.keyCode&&t.close()}),x.on("resize"+m,function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var d=t.wH=x.height(),f={};if(t.fixedContentPos&&t._hasScrollBar(d)){var h=t._getScrollbarSize();h&&(f.marginRight=h)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):f.overflow="hidden");var v=t.st.mainClass;return t.isIE7&&(v+=" mfp-ie7"),v&&t._addClassToMFP(v),t.updateItemHTML(),C("BuildControls"),e("html").css(f),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(g),t._setFocus()):t.bgOverlay.addClass(g),i.on("focusin"+m,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(d),C(p),n},close:function(){t.isOpen&&(C(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(v),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){C(a);var n=v+" "+g+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup"+m+" focusin"+m),t.ev.off(m),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,C(c)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||x.height();t.fixedContentPos||t.wrap.css("height",t.wH),C("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(C("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var r=!!t.st[i]&&t.st[i].markup;C("FirstMarkupParse",r),r?t.currTemplate[i]=e(r):t.currTemplate[i]=!0}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder");var s=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(s,i),n.preloaded=!0,C(f,n),o=n.type,t.container.prepend(t.contentContainer),C("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(S()):t.content=e:t.content="",C(d),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,s=0;s<r.length;s++)if(o.el.hasClass("mfp-"+r[s])){i=r[s];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,C("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var s=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(s)if(e.isFunction(s)){if(!s.call(t))return!0}else if(x.width()<s)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};C("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||x.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),C(u,[t,n,i]),e.each(n,function(n,i){if(void 0===i||i===!1)return!0;if(o=n.split("_"),o.length>1){var r=t.find(m+"-"+o[0]);if(r.length>0){var s=o[1];"replaceWith"===s?r[0]!==i[0]&&r.replaceWith(i):"img"===s?r.is("img")?r.attr("src",i):r.replaceWith(e("<img>").attr("src",i).attr("class",r.attr("class"))):r.attr(o[1],i)}}else t.find(m+"-"+n).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return $(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(n){$();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,s=parseInt(arguments[1],10)||0;r.items?o=r.items[s]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(s)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var A,j,O,P="inline",D=function(){O&&(j.after(O.addClass(A)).detach(),O=null)};e.magnificPopup.registerModule(P,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(P),k(a+"."+P,function(){D()})},getInline:function(n,i){if(D(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var s=r[0].parentNode;s&&s.tagName&&(j||(A=o.hiddenClass,j=T(A),A="mfp-"+A),O=r.after(j).detach().removeClass(A)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var L,H="ajax",I=function(){L&&e(document.body).removeClass(L)},N=function(){I(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),L=t.st.ajax.cursor,k(a+"."+H,N),k("BeforeChange."+H,N)},getAjax:function(n){L&&e(document.body).addClass(L),t.updateStatus("loading");var i=e.extend({url:n.src,success:function(i,o,r){var s={data:i,xhr:r};C("ParseAjax",s),t.appendContent(e(s.data),H),n.finished=!0,I(),t._setFocus(),setTimeout(function(){t.wrap.addClass(g)},16),t.updateStatus("ready"),C("AjaxContentAdded")},error:function(){I(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(i),""}}});var M,q=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image";t.types.push("image"),k(p+i,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),k(a+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),x.off("resize"+m)}),k("Resize"+i,t.resizeImage),t.isLowIE&&k("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,M&&clearInterval(M),e.isCheckingImgSize=!1,C("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){M&&clearInterval(M),M=setInterval(function(){return i.naturalWidth>0?void t._onImageHasSize(e):(n>200&&clearInterval(M),n++,void(3===n?o(10):40===n?o(50):100===n&&o(500)))},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,C("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):s()))},s=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",a.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},a=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.el&&n.el.find("img").length&&(c.alt=n.el.find("img").attr("alt")),n.img=e(c).on("load.mfploader",r).on("error.mfploader",s),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:q(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(M&&clearInterval(M),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",a.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var z,F=function(){return void 0===z&&(z=void 0!==document.createElement("p").style.MozTransform),z};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,s=n.duration,c=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};k("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return void d();r=c(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,C("ZoomAnimationEnded")},16)},s)},16)}}),k(l+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=s,!e){if(e=t._getItemToZoom(),!e)return;r=c(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),k(a+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),s=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var a={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-s-r};return F()?a["-moz-transform"]=a.transform="translate("+o.left+"px,"+o.top+"px)":(a.left=o.left,a.top=o.top),a}}});var _="iframe",W="//about:blank",R=function(e){if(t.currTemplate[_]){var n=t.currTemplate[_].find("iframe");n.length&&(e||(n[0].src=W),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(_,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(_),k("BeforeChange",function(e,t,n){t!==n&&(t===_?R():n===_&&R(!0))}),k(a+"."+_,function(){R()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var s={};return r.srcAction&&(s[r.srcAction]=o),t._parseMarkup(i,s,n),t.updateStatus("ready"),i}}});var B=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},U=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,o=".mfp-gallery";return t.direction=!0,!(!n||!n.enabled)&&(r+=" mfp-gallery",k(p+o,function(){n.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),i.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),k("UpdateStatus"+o,function(e,n){n.text&&(n.text=U(n.text,t.currItem.index,t.items.length))}),k(u+o,function(e,i,o,r){var s=t.items.length;o.counter=s>1?U(n.tCounter,r.index,s):""}),k("BuildControls"+o,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),r=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y);o.click(function(){t.prev()}),r.click(function(){t.next()}),t.container.append(o.add(r))}}),k(f+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),void k(a+o,function(){i.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=B(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=B(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=B(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),C("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,C("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var X="retina";e.magnificPopup.registerModule(X,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(k("ImageHasSize."+X,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),k("ElementParse."+X,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),$()}),$(document).ready(function(){$(".menu-icon").click(function(){$(".menu").slideToggle()}),$(".search-icon").click(function(){$(".menu__search").slideToggle("slow")}),$(".slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,vertical:!0,dots:!0,verticalSwiping:!0,arrows:!1,responsive:[{breakpoint:1200,settings:{vertical:!1,verticalSwiping:!1}}]}),$("#events-timetable").slick({slidesToShow:2,slidesToScroll:1,vertical:!0,dots:!1,arrows:!0,draggable:!0,infinite:!1,responsive:[{breakpoint:800,settings:{slidesToShow:3}},{breakpoint:640,settings:{slidesToShow:1}}]}),$(".main-text--slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,autoplay:!0}),$(".events-gallery__list--slider").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,dots:!1,arrows:!0,autoplay:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),$(".event-gallery__item").magnificPopup({type:"image",gallery:{enabled:!0},removalDelay:300,mainClass:"mfp-fade"}),$(".blog-archive__slider").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,dots:!1,arrows:!0,autoplay:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),$(".blog-archive__subscribe").click(function(e){e.preventDefault(),$(".blog-subscribe").slideToggle()}),$("#show").click(function(e){e.preventDefault(),$(".blog-archive--hidden").animate({height:"100%"},"slow")}),$("#comments__btn").click(function(e){e.preventDefault(),$(".comments__form").slideToggle()}),$(".reviews").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}),$("#junior .course-tab__links").click(function(){var e=$(this).attr("data-tab");$("#junior .course-tab__links").removeClass("course-tab__links--active"),$(".course--junior").removeClass("course--is-active"),$(this).addClass("course-tab__links--active"),$("#"+e).addClass("course--is-active")}),$("#senior .course-tab__links").click(function(){var e=$(this).attr("data-tab");$("#senior .course-tab__links").removeClass("course-tab__links--active"),$(".course--senior").removeClass("course--is-active"),$(this).addClass("course-tab__links--active"),$("#"+e).addClass("course--is-active")}),$("#children .course-tab__links").click(function(){var e=$(this).attr("data-tab");$("#children .course-tab__links").removeClass("course-tab__links--active"),$(".course--children").removeClass("course--is-active"),$(this).addClass("course-tab__links--active"),$("#"+e).addClass("course--is-active")}),function(){var e=$(".moveAfterWelcome"),t=$(".lScrBefEl"),n=$(".sScrBefEl"),i=function(){window.matchMedia("(max-width: 768px)").matches&&e.prev().is(t)?e.insertAfter(n):!window.matchMedia("(max-width: 768px)").matches&&e.prev().is(n)&&e.insertAfter(t)};e&&t&&n&&(i(),$(window).on("resize",i))}()});
=======
<<<<<<< HEAD
/*
 * Third party
 */
 /*eslint-disable no-unused-vars*/
 /*!
  * jQuery JavaScript Library v3.1.0
  * https://jquery.com/
  *
  * Includes Sizzle.js
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * https://jquery.org/license
  *
  * Date: 2016-07-07T21:44Z
  */
 ( function( global, factory ) {
 
 	"use strict";
 
 	if ( typeof module === "object" && typeof module.exports === "object" ) {
 
 		// For CommonJS and CommonJS-like environments where a proper `window`
 		// is present, execute the factory and get jQuery.
 		// For environments that do not have a `window` with a `document`
 		// (such as Node.js), expose a factory as module.exports.
 		// This accentuates the need for the creation of a real `window`.
 		// e.g. var jQuery = require("jquery")(window);
 		// See ticket #14549 for more info.
 		module.exports = global.document ?
 			factory( global, true ) :
 			function( w ) {
 				if ( !w.document ) {
 					throw new Error( "jQuery requires a window with a document" );
 				}
 				return factory( w );
 			};
 	} else {
 		factory( global );
 	}
 
 // Pass this if window is not defined yet
 } )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
 
 // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
 // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
 // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
 // enough that all such attempts are guarded in a try block.
 "use strict";
 
 var arr = [];
 
 var document = window.document;
 
 var getProto = Object.getPrototypeOf;
 
 var slice = arr.slice;
 
 var concat = arr.concat;
 
 var push = arr.push;
 
 var indexOf = arr.indexOf;
 
 var class2type = {};
 
 var toString = class2type.toString;
 
 var hasOwn = class2type.hasOwnProperty;
 
 var fnToString = hasOwn.toString;
 
 var ObjectFunctionString = fnToString.call( Object );
 
 var support = {};
 
 
 
 	function DOMEval( code, doc ) {
 		doc = doc || document;
 
 		var script = doc.createElement( "script" );
 
 		script.text = code;
 		doc.head.appendChild( script ).parentNode.removeChild( script );
 	}
 /* global Symbol */
 // Defining this global in .eslintrc would create a danger of using the global
 // unguarded in another place, it seems safer to define global only for this module
 
 
 
 var
 	version = "3.1.0",
 
 	// Define a local copy of jQuery
 	jQuery = function( selector, context ) {
 
 		// The jQuery object is actually just the init constructor 'enhanced'
 		// Need init if jQuery is called (just allow error to be thrown if not included)
 		return new jQuery.fn.init( selector, context );
 	},
 
 	// Support: Android <=4.0 only
 	// Make sure we trim BOM and NBSP
 	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
 
 	// Matches dashed string for camelizing
 	rmsPrefix = /^-ms-/,
 	rdashAlpha = /-([a-z])/g,
 
 	// Used by jQuery.camelCase as callback to replace()
 	fcamelCase = function( all, letter ) {
 		return letter.toUpperCase();
 	};
 
 jQuery.fn = jQuery.prototype = {
 
 	// The current version of jQuery being used
 	jquery: version,
 
 	constructor: jQuery,
 
 	// The default length of a jQuery object is 0
 	length: 0,
 
 	toArray: function() {
 		return slice.call( this );
 	},
 
 	// Get the Nth element in the matched element set OR
 	// Get the whole matched element set as a clean array
 	get: function( num ) {
 		return num != null ?
 
 			// Return just the one element from the set
 			( num < 0 ? this[ num + this.length ] : this[ num ] ) :
 
 			// Return all the elements in a clean array
 			slice.call( this );
 	},
 
 	// Take an array of elements and push it onto the stack
 	// (returning the new matched element set)
 	pushStack: function( elems ) {
 
 		// Build a new jQuery matched element set
 		var ret = jQuery.merge( this.constructor(), elems );
 
 		// Add the old object onto the stack (as a reference)
 		ret.prevObject = this;
 
 		// Return the newly-formed element set
 		return ret;
 	},
 
 	// Execute a callback for every element in the matched set.
 	each: function( callback ) {
 		return jQuery.each( this, callback );
 	},
 
 	map: function( callback ) {
 		return this.pushStack( jQuery.map( this, function( elem, i ) {
 			return callback.call( elem, i, elem );
 		} ) );
 	},
 
 	slice: function() {
 		return this.pushStack( slice.apply( this, arguments ) );
 	},
 
 	first: function() {
 		return this.eq( 0 );
 	},
 
 	last: function() {
 		return this.eq( -1 );
 	},
 
 	eq: function( i ) {
 		var len = this.length,
 			j = +i + ( i < 0 ? len : 0 );
 		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
 	},
 
 	end: function() {
 		return this.prevObject || this.constructor();
 	},
 
 	// For internal use only.
 	// Behaves like an Array's method, not like a jQuery method.
 	push: push,
 	sort: arr.sort,
 	splice: arr.splice
 };
 
 jQuery.extend = jQuery.fn.extend = function() {
 	var options, name, src, copy, copyIsArray, clone,
 		target = arguments[ 0 ] || {},
 		i = 1,
 		length = arguments.length,
 		deep = false;
 
 	// Handle a deep copy situation
 	if ( typeof target === "boolean" ) {
 		deep = target;
 
 		// Skip the boolean and the target
 		target = arguments[ i ] || {};
 		i++;
 	}
 
 	// Handle case when target is a string or something (possible in deep copy)
 	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
 		target = {};
 	}
 
 	// Extend jQuery itself if only one argument is passed
 	if ( i === length ) {
 		target = this;
 		i--;
 	}
 
 	for ( ; i < length; i++ ) {
 
 		// Only deal with non-null/undefined values
 		if ( ( options = arguments[ i ] ) != null ) {
 
 			// Extend the base object
 			for ( name in options ) {
 				src = target[ name ];
 				copy = options[ name ];
 
 				// Prevent never-ending loop
 				if ( target === copy ) {
 					continue;
 				}
 
 				// Recurse if we're merging plain objects or arrays
 				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
 					( copyIsArray = jQuery.isArray( copy ) ) ) ) {
 
 					if ( copyIsArray ) {
 						copyIsArray = false;
 						clone = src && jQuery.isArray( src ) ? src : [];
 
 					} else {
 						clone = src && jQuery.isPlainObject( src ) ? src : {};
 					}
 
 					// Never move original objects, clone them
 					target[ name ] = jQuery.extend( deep, clone, copy );
 
 				// Don't bring in undefined values
 				} else if ( copy !== undefined ) {
 					target[ name ] = copy;
 				}
 			}
 		}
 	}
 
 	// Return the modified object
 	return target;
 };
 
 jQuery.extend( {
 
 	// Unique for each copy of jQuery on the page
 	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
 
 	// Assume jQuery is ready without the ready module
 	isReady: true,
 
 	error: function( msg ) {
 		throw new Error( msg );
 	},
 
 	noop: function() {},
 
 	isFunction: function( obj ) {
 		return jQuery.type( obj ) === "function";
 	},
 
 	isArray: Array.isArray,
 
 	isWindow: function( obj ) {
 		return obj != null && obj === obj.window;
 	},
 
 	isNumeric: function( obj ) {
 
 		// As of jQuery 3.0, isNumeric is limited to
 		// strings and numbers (primitives or objects)
 		// that can be coerced to finite numbers (gh-2662)
 		var type = jQuery.type( obj );
 		return ( type === "number" || type === "string" ) &&
 
 			// parseFloat NaNs numeric-cast false positives ("")
 			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
 			// subtraction forces infinities to NaN
 			!isNaN( obj - parseFloat( obj ) );
 	},
 
 	isPlainObject: function( obj ) {
 		var proto, Ctor;
 
 		// Detect obvious negatives
 		// Use toString instead of jQuery.type to catch host objects
 		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
 			return false;
 		}
 
 		proto = getProto( obj );
 
 		// Objects with no prototype (e.g., `Object.create( null )`) are plain
 		if ( !proto ) {
 			return true;
 		}
 
 		// Objects with prototype are plain iff they were constructed by a global Object function
 		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
 		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
 	},
 
 	isEmptyObject: function( obj ) {
 
 		/* eslint-disable no-unused-vars */
 		// See https://github.com/eslint/eslint/issues/6125
 		var name;
 
 		for ( name in obj ) {
 			return false;
 		}
 		return true;
 	},
 
 	type: function( obj ) {
 		if ( obj == null ) {
 			return obj + "";
 		}
 
 		// Support: Android <=2.3 only (functionish RegExp)
 		return typeof obj === "object" || typeof obj === "function" ?
 			class2type[ toString.call( obj ) ] || "object" :
 			typeof obj;
 	},
 
 	// Evaluates a script in a global context
 	globalEval: function( code ) {
 		DOMEval( code );
 	},
 
 	// Convert dashed to camelCase; used by the css and data modules
 	// Support: IE <=9 - 11, Edge 12 - 13
 	// Microsoft forgot to hump their vendor prefix (#9572)
 	camelCase: function( string ) {
 		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
 	},
 
 	nodeName: function( elem, name ) {
 		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
 	},
 
 	each: function( obj, callback ) {
 		var length, i = 0;
 
 		if ( isArrayLike( obj ) ) {
 			length = obj.length;
 			for ( ; i < length; i++ ) {
 				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
 					break;
 				}
 			}
 		} else {
 			for ( i in obj ) {
 				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
 					break;
 				}
 			}
 		}
 
 		return obj;
 	},
 
 	// Support: Android <=4.0 only
 	trim: function( text ) {
 		return text == null ?
 			"" :
 			( text + "" ).replace( rtrim, "" );
 	},
 
 	// results is for internal usage only
 	makeArray: function( arr, results ) {
 		var ret = results || [];
 
 		if ( arr != null ) {
 			if ( isArrayLike( Object( arr ) ) ) {
 				jQuery.merge( ret,
 					typeof arr === "string" ?
 					[ arr ] : arr
 				);
 			} else {
 				push.call( ret, arr );
 			}
 		}
 
 		return ret;
 	},
 
 	inArray: function( elem, arr, i ) {
 		return arr == null ? -1 : indexOf.call( arr, elem, i );
 	},
 
 	// Support: Android <=4.0 only, PhantomJS 1 only
 	// push.apply(_, arraylike) throws on ancient WebKit
 	merge: function( first, second ) {
 		var len = +second.length,
 			j = 0,
 			i = first.length;
 
 		for ( ; j < len; j++ ) {
 			first[ i++ ] = second[ j ];
 		}
 
 		first.length = i;
 
 		return first;
 	},
 
 	grep: function( elems, callback, invert ) {
 		var callbackInverse,
 			matches = [],
 			i = 0,
 			length = elems.length,
 			callbackExpect = !invert;
 
 		// Go through the array, only saving the items
 		// that pass the validator function
 		for ( ; i < length; i++ ) {
 			callbackInverse = !callback( elems[ i ], i );
 			if ( callbackInverse !== callbackExpect ) {
 				matches.push( elems[ i ] );
 			}
 		}
 
 		return matches;
 	},
 
 	// arg is for internal usage only
 	map: function( elems, callback, arg ) {
 		var length, value,
 			i = 0,
 			ret = [];
 
 		// Go through the array, translating each of the items to their new values
 		if ( isArrayLike( elems ) ) {
 			length = elems.length;
 			for ( ; i < length; i++ ) {
 				value = callback( elems[ i ], i, arg );
 
 				if ( value != null ) {
 					ret.push( value );
 				}
 			}
 
 		// Go through every key on the object,
 		} else {
 			for ( i in elems ) {
 				value = callback( elems[ i ], i, arg );
 
 				if ( value != null ) {
 					ret.push( value );
 				}
 			}
 		}
 
 		// Flatten any nested arrays
 		return concat.apply( [], ret );
 	},
 
 	// A global GUID counter for objects
 	guid: 1,
 
 	// Bind a function to a context, optionally partially applying any
 	// arguments.
 	proxy: function( fn, context ) {
 		var tmp, args, proxy;
 
 		if ( typeof context === "string" ) {
 			tmp = fn[ context ];
 			context = fn;
 			fn = tmp;
 		}
 
 		// Quick check to determine if target is callable, in the spec
 		// this throws a TypeError, but we will just return undefined.
 		if ( !jQuery.isFunction( fn ) ) {
 			return undefined;
 		}
 
 		// Simulated bind
 		args = slice.call( arguments, 2 );
 		proxy = function() {
 			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
 		};
 
 		// Set the guid of unique handler to the same of original handler, so it can be removed
 		proxy.guid = fn.guid = fn.guid || jQuery.guid++;
 
 		return proxy;
 	},
 
 	now: Date.now,
 
 	// jQuery.support is not used in Core but other projects attach their
 	// properties to it so it needs to exist.
 	support: support
 } );
 
 if ( typeof Symbol === "function" ) {
 	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
 }
 
 // Populate the class2type map
 jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
 function( i, name ) {
 	class2type[ "[object " + name + "]" ] = name.toLowerCase();
 } );
 
 function isArrayLike( obj ) {
 
 	// Support: real iOS 8.2 only (not reproducible in simulator)
 	// `in` check used to prevent JIT error (gh-2145)
 	// hasOwn isn't used here due to false negatives
 	// regarding Nodelist length in IE
 	var length = !!obj && "length" in obj && obj.length,
 		type = jQuery.type( obj );
 
 	if ( type === "function" || jQuery.isWindow( obj ) ) {
 		return false;
 	}
 
 	return type === "array" || length === 0 ||
 		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
 }
 var Sizzle =
 /*!
  * Sizzle CSS Selector Engine v2.3.0
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-01-04
  */
 (function( window ) {
 
 var i,
 	support,
 	Expr,
 	getText,
 	isXML,
 	tokenize,
 	compile,
 	select,
 	outermostContext,
 	sortInput,
 	hasDuplicate,
 
 	// Local document vars
 	setDocument,
 	document,
 	docElem,
 	documentIsHTML,
 	rbuggyQSA,
 	rbuggyMatches,
 	matches,
 	contains,
 
 	// Instance-specific data
 	expando = "sizzle" + 1 * new Date(),
 	preferredDoc = window.document,
 	dirruns = 0,
 	done = 0,
 	classCache = createCache(),
 	tokenCache = createCache(),
 	compilerCache = createCache(),
 	sortOrder = function( a, b ) {
 		if ( a === b ) {
 			hasDuplicate = true;
 		}
 		return 0;
 	},
 
 	// Instance methods
 	hasOwn = ({}).hasOwnProperty,
 	arr = [],
 	pop = arr.pop,
 	push_native = arr.push,
 	push = arr.push,
 	slice = arr.slice,
 	// Use a stripped-down indexOf as it's faster than native
 	// https://jsperf.com/thor-indexof-vs-for/5
 	indexOf = function( list, elem ) {
 		var i = 0,
 			len = list.length;
 		for ( ; i < len; i++ ) {
 			if ( list[i] === elem ) {
 				return i;
 			}
 		}
 		return -1;
 	},
 
 	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
 
 	// Regular expressions
 
 	// http://www.w3.org/TR/css3-selectors/#whitespace
 	whitespace = "[\\x20\\t\\r\\n\\f]",
 
 	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
 	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
 
 	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
 	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
 		// Operator (capture 2)
 		"*([*^$|!~]?=)" + whitespace +
 		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
 		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
 		"*\\]",
 
 	pseudos = ":(" + identifier + ")(?:\\((" +
 		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
 		// 1. quoted (capture 3; capture 4 or capture 5)
 		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
 		// 2. simple (capture 6)
 		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
 		// 3. anything else (capture 2)
 		".*" +
 		")\\)|)",
 
 	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
 	rwhitespace = new RegExp( whitespace + "+", "g" ),
 	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
 
 	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
 	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
 
 	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
 
 	rpseudo = new RegExp( pseudos ),
 	ridentifier = new RegExp( "^" + identifier + "$" ),
 
 	matchExpr = {
 		"ID": new RegExp( "^#(" + identifier + ")" ),
 		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
 		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
 		"ATTR": new RegExp( "^" + attributes ),
 		"PSEUDO": new RegExp( "^" + pseudos ),
 		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
 			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
 			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
 		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
 		// For use in libraries implementing .is()
 		// We use this for POS matching in `select`
 		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
 			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
 	},
 
 	rinputs = /^(?:input|select|textarea|button)$/i,
 	rheader = /^h\d$/i,
 
 	rnative = /^[^{]+\{\s*\[native \w/,
 
 	// Easily-parseable/retrievable ID or TAG or CLASS selectors
 	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
 
 	rsibling = /[+~]/,
 
 	// CSS escapes
 	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
 	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
 	funescape = function( _, escaped, escapedWhitespace ) {
 		var high = "0x" + escaped - 0x10000;
 		// NaN means non-codepoint
 		// Support: Firefox<24
 		// Workaround erroneous numeric interpretation of +"0x"
 		return high !== high || escapedWhitespace ?
 			escaped :
 			high < 0 ?
 				// BMP codepoint
 				String.fromCharCode( high + 0x10000 ) :
 				// Supplemental Plane codepoint (surrogate pair)
 				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
 	},
 
 	// CSS string/identifier serialization
 	// https://drafts.csswg.org/cssom/#common-serializing-idioms
 	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
 	fcssescape = function( ch, asCodePoint ) {
 		if ( asCodePoint ) {
 
 			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
 			if ( ch === "\0" ) {
 				return "\uFFFD";
 			}
 
 			// Control characters and (dependent upon position) numbers get escaped as code points
 			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
 		}
 
 		// Other potentially-special ASCII characters get backslash-escaped
 		return "\\" + ch;
 	},
 
 	// Used for iframes
 	// See setDocument()
 	// Removing the function wrapper causes a "Permission Denied"
 	// error in IE
 	unloadHandler = function() {
 		setDocument();
 	},
 
 	disabledAncestor = addCombinator(
 		function( elem ) {
 			return elem.disabled === true;
 		},
 		{ dir: "parentNode", next: "legend" }
 	);
 
 // Optimize for push.apply( _, NodeList )
 try {
 	push.apply(
 		(arr = slice.call( preferredDoc.childNodes )),
 		preferredDoc.childNodes
 	);
 	// Support: Android<4.0
 	// Detect silently failing push.apply
 	arr[ preferredDoc.childNodes.length ].nodeType;
 } catch ( e ) {
 	push = { apply: arr.length ?
 
 		// Leverage slice if possible
 		function( target, els ) {
 			push_native.apply( target, slice.call(els) );
 		} :
 
 		// Support: IE<9
 		// Otherwise append directly
 		function( target, els ) {
 			var j = target.length,
 				i = 0;
 			// Can't trust NodeList.length
 			while ( (target[j++] = els[i++]) ) {}
 			target.length = j - 1;
 		}
 	};
 }
 
 function Sizzle( selector, context, results, seed ) {
 	var m, i, elem, nid, match, groups, newSelector,
 		newContext = context && context.ownerDocument,
 
 		// nodeType defaults to 9, since context defaults to document
 		nodeType = context ? context.nodeType : 9;
 
 	results = results || [];
 
 	// Return early from calls with invalid selector or context
 	if ( typeof selector !== "string" || !selector ||
 		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
 
 		return results;
 	}
 
 	// Try to shortcut find operations (as opposed to filters) in HTML documents
 	if ( !seed ) {
 
 		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
 			setDocument( context );
 		}
 		context = context || document;
 
 		if ( documentIsHTML ) {
 
 			// If the selector is sufficiently simple, try using a "get*By*" DOM method
 			// (excepting DocumentFragment context, where the methods don't exist)
 			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
 
 				// ID selector
 				if ( (m = match[1]) ) {
 
 					// Document context
 					if ( nodeType === 9 ) {
 						if ( (elem = context.getElementById( m )) ) {
 
 							// Support: IE, Opera, Webkit
 							// TODO: identify versions
 							// getElementById can match elements by name instead of ID
 							if ( elem.id === m ) {
 								results.push( elem );
 								return results;
 							}
 						} else {
 							return results;
 						}
 
 					// Element context
 					} else {
 
 						// Support: IE, Opera, Webkit
 						// TODO: identify versions
 						// getElementById can match elements by name instead of ID
 						if ( newContext && (elem = newContext.getElementById( m )) &&
 							contains( context, elem ) &&
 							elem.id === m ) {
 
 							results.push( elem );
 							return results;
 						}
 					}
 
 				// Type selector
 				} else if ( match[2] ) {
 					push.apply( results, context.getElementsByTagName( selector ) );
 					return results;
 
 				// Class selector
 				} else if ( (m = match[3]) && support.getElementsByClassName &&
 					context.getElementsByClassName ) {
 
 					push.apply( results, context.getElementsByClassName( m ) );
 					return results;
 				}
 			}
 
 			// Take advantage of querySelectorAll
 			if ( support.qsa &&
 				!compilerCache[ selector + " " ] &&
 				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
 
 				if ( nodeType !== 1 ) {
 					newContext = context;
 					newSelector = selector;
 
 				// qSA looks outside Element context, which is not what we want
 				// Thanks to Andrew Dupont for this workaround technique
 				// Support: IE <=8
 				// Exclude object elements
 				} else if ( context.nodeName.toLowerCase() !== "object" ) {
 
 					// Capture the context ID, setting it first if necessary
 					if ( (nid = context.getAttribute( "id" )) ) {
 						nid = nid.replace( rcssescape, fcssescape );
 					} else {
 						context.setAttribute( "id", (nid = expando) );
 					}
 
 					// Prefix every selector in the list
 					groups = tokenize( selector );
 					i = groups.length;
 					while ( i-- ) {
 						groups[i] = "#" + nid + " " + toSelector( groups[i] );
 					}
 					newSelector = groups.join( "," );
 
 					// Expand context for sibling selectors
 					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
 						context;
 				}
 
 				if ( newSelector ) {
 					try {
 						push.apply( results,
 							newContext.querySelectorAll( newSelector )
 						);
 						return results;
 					} catch ( qsaError ) {
 					} finally {
 						if ( nid === expando ) {
 							context.removeAttribute( "id" );
 						}
 					}
 				}
 			}
 		}
 	}
 
 	// All others
 	return select( selector.replace( rtrim, "$1" ), context, results, seed );
 }
 
 /**
  * Create key-value caches of limited size
  * @returns {function(string, object)} Returns the Object data after storing it on itself with
  *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
  *	deleting the oldest entry
  */
 function createCache() {
 	var keys = [];
 
 	function cache( key, value ) {
 		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
 		if ( keys.push( key + " " ) > Expr.cacheLength ) {
 			// Only keep the most recent entries
 			delete cache[ keys.shift() ];
 		}
 		return (cache[ key + " " ] = value);
 	}
 	return cache;
 }
 
 /**
  * Mark a function for special use by Sizzle
  * @param {Function} fn The function to mark
  */
 function markFunction( fn ) {
 	fn[ expando ] = true;
 	return fn;
 }
 
 /**
  * Support testing using an element
  * @param {Function} fn Passed the created element and returns a boolean result
  */
 function assert( fn ) {
 	var el = document.createElement("fieldset");
 
 	try {
 		return !!fn( el );
 	} catch (e) {
 		return false;
 	} finally {
 		// Remove from its parent by default
 		if ( el.parentNode ) {
 			el.parentNode.removeChild( el );
 		}
 		// release memory in IE
 		el = null;
 	}
 }
 
 /**
  * Adds the same handler for all of the specified attrs
  * @param {String} attrs Pipe-separated list of attributes
  * @param {Function} handler The method that will be applied
  */
 function addHandle( attrs, handler ) {
 	var arr = attrs.split("|"),
 		i = arr.length;
 
 	while ( i-- ) {
 		Expr.attrHandle[ arr[i] ] = handler;
 	}
 }
 
 /**
  * Checks document order of two siblings
  * @param {Element} a
  * @param {Element} b
  * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
  */
 function siblingCheck( a, b ) {
 	var cur = b && a,
 		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
 			a.sourceIndex - b.sourceIndex;
 
 	// Use IE sourceIndex if available on both nodes
 	if ( diff ) {
 		return diff;
 	}
 
 	// Check if b follows a
 	if ( cur ) {
 		while ( (cur = cur.nextSibling) ) {
 			if ( cur === b ) {
 				return -1;
 			}
 		}
 	}
 
 	return a ? 1 : -1;
 }
 
 /**
  * Returns a function to use in pseudos for input types
  * @param {String} type
  */
 function createInputPseudo( type ) {
 	return function( elem ) {
 		var name = elem.nodeName.toLowerCase();
 		return name === "input" && elem.type === type;
 	};
 }
 
 /**
  * Returns a function to use in pseudos for buttons
  * @param {String} type
  */
 function createButtonPseudo( type ) {
 	return function( elem ) {
 		var name = elem.nodeName.toLowerCase();
 		return (name === "input" || name === "button") && elem.type === type;
 	};
 }
 
 /**
  * Returns a function to use in pseudos for :enabled/:disabled
  * @param {Boolean} disabled true for :disabled; false for :enabled
  */
 function createDisabledPseudo( disabled ) {
 	// Known :disabled false positives:
 	// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
 	// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
 	return function( elem ) {
 
 		// Check form elements and option elements for explicit disabling
 		return "label" in elem && elem.disabled === disabled ||
 			"form" in elem && elem.disabled === disabled ||
 
 			// Check non-disabled form elements for fieldset[disabled] ancestors
 			"form" in elem && elem.disabled === false && (
 				// Support: IE6-11+
 				// Ancestry is covered for us
 				elem.isDisabled === disabled ||
 
 				// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
 				/* jshint -W018 */
 				elem.isDisabled !== !disabled &&
 					("label" in elem || !disabledAncestor( elem )) !== disabled
 			);
 	};
 }
 
 /**
  * Returns a function to use in pseudos for positionals
  * @param {Function} fn
  */
 function createPositionalPseudo( fn ) {
 	return markFunction(function( argument ) {
 		argument = +argument;
 		return markFunction(function( seed, matches ) {
 			var j,
 				matchIndexes = fn( [], seed.length, argument ),
 				i = matchIndexes.length;
 
 			// Match elements found at the specified indexes
 			while ( i-- ) {
 				if ( seed[ (j = matchIndexes[i]) ] ) {
 					seed[j] = !(matches[j] = seed[j]);
 				}
 			}
 		});
 	});
 }
 
 /**
  * Checks a node for validity as a Sizzle context
  * @param {Element|Object=} context
  * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
  */
 function testContext( context ) {
 	return context && typeof context.getElementsByTagName !== "undefined" && context;
 }
 
 // Expose support vars for convenience
 support = Sizzle.support = {};
 
 /**
  * Detects XML nodes
  * @param {Element|Object} elem An element or a document
  * @returns {Boolean} True iff elem is a non-HTML XML node
  */
 isXML = Sizzle.isXML = function( elem ) {
 	// documentElement is verified for cases where it doesn't yet exist
 	// (such as loading iframes in IE - #4833)
 	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
 	return documentElement ? documentElement.nodeName !== "HTML" : false;
 };
 
 /**
  * Sets document-related variables once based on the current document
  * @param {Element|Object} [doc] An element or document object to use to set the document
  * @returns {Object} Returns the current document
  */
 setDocument = Sizzle.setDocument = function( node ) {
 	var hasCompare, subWindow,
 		doc = node ? node.ownerDocument || node : preferredDoc;
 
 	// Return early if doc is invalid or already selected
 	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
 		return document;
 	}
 
 	// Update global variables
 	document = doc;
 	docElem = document.documentElement;
 	documentIsHTML = !isXML( document );
 
 	// Support: IE 9-11, Edge
 	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
 	if ( preferredDoc !== document &&
 		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
 
 		// Support: IE 11, Edge
 		if ( subWindow.addEventListener ) {
 			subWindow.addEventListener( "unload", unloadHandler, false );
 
 		// Support: IE 9 - 10 only
 		} else if ( subWindow.attachEvent ) {
 			subWindow.attachEvent( "onunload", unloadHandler );
 		}
 	}
 
 	/* Attributes
 	---------------------------------------------------------------------- */
 
 	// Support: IE<8
 	// Verify that getAttribute really returns attributes and not properties
 	// (excepting IE8 booleans)
 	support.attributes = assert(function( el ) {
 		el.className = "i";
 		return !el.getAttribute("className");
 	});
 
 	/* getElement(s)By*
 	---------------------------------------------------------------------- */
 
 	// Check if getElementsByTagName("*") returns only elements
 	support.getElementsByTagName = assert(function( el ) {
 		el.appendChild( document.createComment("") );
 		return !el.getElementsByTagName("*").length;
 	});
 
 	// Support: IE<9
 	support.getElementsByClassName = rnative.test( document.getElementsByClassName );
 
 	// Support: IE<10
 	// Check if getElementById returns elements by name
 	// The broken getElementById methods don't pick up programmatically-set names,
 	// so use a roundabout getElementsByName test
 	support.getById = assert(function( el ) {
 		docElem.appendChild( el ).id = expando;
 		return !document.getElementsByName || !document.getElementsByName( expando ).length;
 	});
 
 	// ID find and filter
 	if ( support.getById ) {
 		Expr.find["ID"] = function( id, context ) {
 			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
 				var m = context.getElementById( id );
 				return m ? [ m ] : [];
 			}
 		};
 		Expr.filter["ID"] = function( id ) {
 			var attrId = id.replace( runescape, funescape );
 			return function( elem ) {
 				return elem.getAttribute("id") === attrId;
 			};
 		};
 	} else {
 		// Support: IE6/7
 		// getElementById is not reliable as a find shortcut
 		delete Expr.find["ID"];
 
 		Expr.filter["ID"] =  function( id ) {
 			var attrId = id.replace( runescape, funescape );
 			return function( elem ) {
 				var node = typeof elem.getAttributeNode !== "undefined" &&
 					elem.getAttributeNode("id");
 				return node && node.value === attrId;
 			};
 		};
 	}
 
 	// Tag
 	Expr.find["TAG"] = support.getElementsByTagName ?
 		function( tag, context ) {
 			if ( typeof context.getElementsByTagName !== "undefined" ) {
 				return context.getElementsByTagName( tag );
 
 			// DocumentFragment nodes don't have gEBTN
 			} else if ( support.qsa ) {
 				return context.querySelectorAll( tag );
 			}
 		} :
 
 		function( tag, context ) {
 			var elem,
 				tmp = [],
 				i = 0,
 				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
 				results = context.getElementsByTagName( tag );
 
 			// Filter out possible comments
 			if ( tag === "*" ) {
 				while ( (elem = results[i++]) ) {
 					if ( elem.nodeType === 1 ) {
 						tmp.push( elem );
 					}
 				}
 
 				return tmp;
 			}
 			return results;
 		};
 
 	// Class
 	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
 		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
 			return context.getElementsByClassName( className );
 		}
 	};
 
 	/* QSA/matchesSelector
 	---------------------------------------------------------------------- */
 
 	// QSA and matchesSelector support
 
 	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
 	rbuggyMatches = [];
 
 	// qSa(:focus) reports false when true (Chrome 21)
 	// We allow this because of a bug in IE8/9 that throws an error
 	// whenever `document.activeElement` is accessed on an iframe
 	// So, we allow :focus to pass through QSA all the time to avoid the IE error
 	// See https://bugs.jquery.com/ticket/13378
 	rbuggyQSA = [];
 
 	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
 		// Build QSA regex
 		// Regex strategy adopted from Diego Perini
 		assert(function( el ) {
 			// Select is set to empty string on purpose
 			// This is to test IE's treatment of not explicitly
 			// setting a boolean content attribute,
 			// since its presence should be enough
 			// https://bugs.jquery.com/ticket/12359
 			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
 				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
 				"<option selected=''></option></select>";
 
 			// Support: IE8, Opera 11-12.16
 			// Nothing should be selected when empty strings follow ^= or $= or *=
 			// The test attribute must be unknown in Opera but "safe" for WinRT
 			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
 			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
 				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
 			}
 
 			// Support: IE8
 			// Boolean attributes and "value" are not treated correctly
 			if ( !el.querySelectorAll("[selected]").length ) {
 				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
 			}
 
 			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
 			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
 				rbuggyQSA.push("~=");
 			}
 
 			// Webkit/Opera - :checked should return selected option elements
 			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
 			// IE8 throws error here and will not see later tests
 			if ( !el.querySelectorAll(":checked").length ) {
 				rbuggyQSA.push(":checked");
 			}
 
 			// Support: Safari 8+, iOS 8+
 			// https://bugs.webkit.org/show_bug.cgi?id=136851
 			// In-page `selector#id sibling-combinator selector` fails
 			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
 				rbuggyQSA.push(".#.+[+~]");
 			}
 		});
 
 		assert(function( el ) {
 			el.innerHTML = "<a href='' disabled='disabled'></a>" +
 				"<select disabled='disabled'><option/></select>";
 
 			// Support: Windows 8 Native Apps
 			// The type and name attributes are restricted during .innerHTML assignment
 			var input = document.createElement("input");
 			input.setAttribute( "type", "hidden" );
 			el.appendChild( input ).setAttribute( "name", "D" );
 
 			// Support: IE8
 			// Enforce case-sensitivity of name attribute
 			if ( el.querySelectorAll("[name=d]").length ) {
 				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
 			}
 
 			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
 			// IE8 throws error here and will not see later tests
 			if ( el.querySelectorAll(":enabled").length !== 2 ) {
 				rbuggyQSA.push( ":enabled", ":disabled" );
 			}
 
 			// Support: IE9-11+
 			// IE's :disabled selector does not pick up the children of disabled fieldsets
 			docElem.appendChild( el ).disabled = true;
 			if ( el.querySelectorAll(":disabled").length !== 2 ) {
 				rbuggyQSA.push( ":enabled", ":disabled" );
 			}
 
 			// Opera 10-11 does not throw on post-comma invalid pseudos
 			el.querySelectorAll("*,:x");
 			rbuggyQSA.push(",.*:");
 		});
 	}
 
 	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
 		docElem.webkitMatchesSelector ||
 		docElem.mozMatchesSelector ||
 		docElem.oMatchesSelector ||
 		docElem.msMatchesSelector) )) ) {
 
 		assert(function( el ) {
 			// Check to see if it's possible to do matchesSelector
 			// on a disconnected node (IE 9)
 			support.disconnectedMatch = matches.call( el, "*" );
 
 			// This should fail with an exception
 			// Gecko does not error, returns false instead
 			matches.call( el, "[s!='']:x" );
 			rbuggyMatches.push( "!=", pseudos );
 		});
 	}
 
 	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
 	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
 
 	/* Contains
 	---------------------------------------------------------------------- */
 	hasCompare = rnative.test( docElem.compareDocumentPosition );
 
 	// Element contains another
 	// Purposefully self-exclusive
 	// As in, an element does not contain itself
 	contains = hasCompare || rnative.test( docElem.contains ) ?
 		function( a, b ) {
 			var adown = a.nodeType === 9 ? a.documentElement : a,
 				bup = b && b.parentNode;
 			return a === bup || !!( bup && bup.nodeType === 1 && (
 				adown.contains ?
 					adown.contains( bup ) :
 					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
 			));
 		} :
 		function( a, b ) {
 			if ( b ) {
 				while ( (b = b.parentNode) ) {
 					if ( b === a ) {
 						return true;
 					}
 				}
 			}
 			return false;
 		};
 
 	/* Sorting
 	---------------------------------------------------------------------- */
 
 	// Document order sorting
 	sortOrder = hasCompare ?
 	function( a, b ) {
 
 		// Flag for duplicate removal
 		if ( a === b ) {
 			hasDuplicate = true;
 			return 0;
 		}
 
 		// Sort on method existence if only one input has compareDocumentPosition
 		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
 		if ( compare ) {
 			return compare;
 		}
 
 		// Calculate position if both inputs belong to the same document
 		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
 			a.compareDocumentPosition( b ) :
 
 			// Otherwise we know they are disconnected
 			1;
 
 		// Disconnected nodes
 		if ( compare & 1 ||
 			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
 
 			// Choose the first element that is related to our preferred document
 			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
 				return -1;
 			}
 			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
 				return 1;
 			}
 
 			// Maintain original order
 			return sortInput ?
 				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
 				0;
 		}
 
 		return compare & 4 ? -1 : 1;
 	} :
 	function( a, b ) {
 		// Exit early if the nodes are identical
 		if ( a === b ) {
 			hasDuplicate = true;
 			return 0;
 		}
 
 		var cur,
 			i = 0,
 			aup = a.parentNode,
 			bup = b.parentNode,
 			ap = [ a ],
 			bp = [ b ];
 
 		// Parentless nodes are either documents or disconnected
 		if ( !aup || !bup ) {
 			return a === document ? -1 :
 				b === document ? 1 :
 				aup ? -1 :
 				bup ? 1 :
 				sortInput ?
 				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
 				0;
 
 		// If the nodes are siblings, we can do a quick check
 		} else if ( aup === bup ) {
 			return siblingCheck( a, b );
 		}
 
 		// Otherwise we need full lists of their ancestors for comparison
 		cur = a;
 		while ( (cur = cur.parentNode) ) {
 			ap.unshift( cur );
 		}
 		cur = b;
 		while ( (cur = cur.parentNode) ) {
 			bp.unshift( cur );
 		}
 
 		// Walk down the tree looking for a discrepancy
 		while ( ap[i] === bp[i] ) {
 			i++;
 		}
 
 		return i ?
 			// Do a sibling check if the nodes have a common ancestor
 			siblingCheck( ap[i], bp[i] ) :
 
 			// Otherwise nodes in our document sort first
 			ap[i] === preferredDoc ? -1 :
 			bp[i] === preferredDoc ? 1 :
 			0;
 	};
 
 	return document;
 };
 
 Sizzle.matches = function( expr, elements ) {
 	return Sizzle( expr, null, null, elements );
 };
 
 Sizzle.matchesSelector = function( elem, expr ) {
 	// Set document vars if needed
 	if ( ( elem.ownerDocument || elem ) !== document ) {
 		setDocument( elem );
 	}
 
 	// Make sure that attribute selectors are quoted
 	expr = expr.replace( rattributeQuotes, "='$1']" );
 
 	if ( support.matchesSelector && documentIsHTML &&
 		!compilerCache[ expr + " " ] &&
 		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
 		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
 
 		try {
 			var ret = matches.call( elem, expr );
 
 			// IE 9's matchesSelector returns false on disconnected nodes
 			if ( ret || support.disconnectedMatch ||
 					// As well, disconnected nodes are said to be in a document
 					// fragment in IE 9
 					elem.document && elem.document.nodeType !== 11 ) {
 				return ret;
 			}
 		} catch (e) {}
 	}
 
 	return Sizzle( expr, document, null, [ elem ] ).length > 0;
 };
 
 Sizzle.contains = function( context, elem ) {
 	// Set document vars if needed
 	if ( ( context.ownerDocument || context ) !== document ) {
 		setDocument( context );
 	}
 	return contains( context, elem );
 };
 
 Sizzle.attr = function( elem, name ) {
 	// Set document vars if needed
 	if ( ( elem.ownerDocument || elem ) !== document ) {
 		setDocument( elem );
 	}
 
 	var fn = Expr.attrHandle[ name.toLowerCase() ],
 		// Don't get fooled by Object.prototype properties (jQuery #13807)
 		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
 			fn( elem, name, !documentIsHTML ) :
 			undefined;
 
 	return val !== undefined ?
 		val :
 		support.attributes || !documentIsHTML ?
 			elem.getAttribute( name ) :
 			(val = elem.getAttributeNode(name)) && val.specified ?
 				val.value :
 				null;
 };
 
 Sizzle.escape = function( sel ) {
 	return (sel + "").replace( rcssescape, fcssescape );
 };
 
 Sizzle.error = function( msg ) {
 	throw new Error( "Syntax error, unrecognized expression: " + msg );
 };
 
 /**
  * Document sorting and removing duplicates
  * @param {ArrayLike} results
  */
 Sizzle.uniqueSort = function( results ) {
 	var elem,
 		duplicates = [],
 		j = 0,
 		i = 0;
 
 	// Unless we *know* we can detect duplicates, assume their presence
 	hasDuplicate = !support.detectDuplicates;
 	sortInput = !support.sortStable && results.slice( 0 );
 	results.sort( sortOrder );
 
 	if ( hasDuplicate ) {
 		while ( (elem = results[i++]) ) {
 			if ( elem === results[ i ] ) {
 				j = duplicates.push( i );
 			}
 		}
 		while ( j-- ) {
 			results.splice( duplicates[ j ], 1 );
 		}
 	}
 
 	// Clear input after sorting to release objects
 	// See https://github.com/jquery/sizzle/pull/225
 	sortInput = null;
 
 	return results;
 };
 
 /**
  * Utility function for retrieving the text value of an array of DOM nodes
  * @param {Array|Element} elem
  */
 getText = Sizzle.getText = function( elem ) {
 	var node,
 		ret = "",
 		i = 0,
 		nodeType = elem.nodeType;
 
 	if ( !nodeType ) {
 		// If no nodeType, this is expected to be an array
 		while ( (node = elem[i++]) ) {
 			// Do not traverse comment nodes
 			ret += getText( node );
 		}
 	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
 		// Use textContent for elements
 		// innerText usage removed for consistency of new lines (jQuery #11153)
 		if ( typeof elem.textContent === "string" ) {
 			return elem.textContent;
 		} else {
 			// Traverse its children
 			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
 				ret += getText( elem );
 			}
 		}
 	} else if ( nodeType === 3 || nodeType === 4 ) {
 		return elem.nodeValue;
 	}
 	// Do not include comment or processing instruction nodes
 
 	return ret;
 };
 
 Expr = Sizzle.selectors = {
 
 	// Can be adjusted by the user
 	cacheLength: 50,
 
 	createPseudo: markFunction,
 
 	match: matchExpr,
 
 	attrHandle: {},
 
 	find: {},
 
 	relative: {
 		">": { dir: "parentNode", first: true },
 		" ": { dir: "parentNode" },
 		"+": { dir: "previousSibling", first: true },
 		"~": { dir: "previousSibling" }
 	},
 
 	preFilter: {
 		"ATTR": function( match ) {
 			match[1] = match[1].replace( runescape, funescape );
 
 			// Move the given value to match[3] whether quoted or unquoted
 			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
 
 			if ( match[2] === "~=" ) {
 				match[3] = " " + match[3] + " ";
 			}
 
 			return match.slice( 0, 4 );
 		},
 
 		"CHILD": function( match ) {
 			/* matches from matchExpr["CHILD"]
 				1 type (only|nth|...)
 				2 what (child|of-type)
 				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
 				4 xn-component of xn+y argument ([+-]?\d*n|)
 				5 sign of xn-component
 				6 x of xn-component
 				7 sign of y-component
 				8 y of y-component
 			*/
 			match[1] = match[1].toLowerCase();
 
 			if ( match[1].slice( 0, 3 ) === "nth" ) {
 				// nth-* requires argument
 				if ( !match[3] ) {
 					Sizzle.error( match[0] );
 				}
 
 				// numeric x and y parameters for Expr.filter.CHILD
 				// remember that false/true cast respectively to 0/1
 				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
 				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
 
 			// other types prohibit arguments
 			} else if ( match[3] ) {
 				Sizzle.error( match[0] );
 			}
 
 			return match;
 		},
 
 		"PSEUDO": function( match ) {
 			var excess,
 				unquoted = !match[6] && match[2];
 
 			if ( matchExpr["CHILD"].test( match[0] ) ) {
 				return null;
 			}
 
 			// Accept quoted arguments as-is
 			if ( match[3] ) {
 				match[2] = match[4] || match[5] || "";
 
 			// Strip excess characters from unquoted arguments
 			} else if ( unquoted && rpseudo.test( unquoted ) &&
 				// Get excess from tokenize (recursively)
 				(excess = tokenize( unquoted, true )) &&
 				// advance to the next closing parenthesis
 				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
 
 				// excess is a negative index
 				match[0] = match[0].slice( 0, excess );
 				match[2] = unquoted.slice( 0, excess );
 			}
 
 			// Return only captures needed by the pseudo filter method (type and argument)
 			return match.slice( 0, 3 );
 		}
 	},
 
 	filter: {
 
 		"TAG": function( nodeNameSelector ) {
 			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
 			return nodeNameSelector === "*" ?
 				function() { return true; } :
 				function( elem ) {
 					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
 				};
 		},
 
 		"CLASS": function( className ) {
 			var pattern = classCache[ className + " " ];
 
 			return pattern ||
 				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
 				classCache( className, function( elem ) {
 					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
 				});
 		},
 
 		"ATTR": function( name, operator, check ) {
 			return function( elem ) {
 				var result = Sizzle.attr( elem, name );
 
 				if ( result == null ) {
 					return operator === "!=";
 				}
 				if ( !operator ) {
 					return true;
 				}
 
 				result += "";
 
 				return operator === "=" ? result === check :
 					operator === "!=" ? result !== check :
 					operator === "^=" ? check && result.indexOf( check ) === 0 :
 					operator === "*=" ? check && result.indexOf( check ) > -1 :
 					operator === "$=" ? check && result.slice( -check.length ) === check :
 					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
 					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
 					false;
 			};
 		},
 
 		"CHILD": function( type, what, argument, first, last ) {
 			var simple = type.slice( 0, 3 ) !== "nth",
 				forward = type.slice( -4 ) !== "last",
 				ofType = what === "of-type";
 
 			return first === 1 && last === 0 ?
 
 				// Shortcut for :nth-*(n)
 				function( elem ) {
 					return !!elem.parentNode;
 				} :
 
 				function( elem, context, xml ) {
 					var cache, uniqueCache, outerCache, node, nodeIndex, start,
 						dir = simple !== forward ? "nextSibling" : "previousSibling",
 						parent = elem.parentNode,
 						name = ofType && elem.nodeName.toLowerCase(),
 						useCache = !xml && !ofType,
 						diff = false;
 
 					if ( parent ) {
 
 						// :(first|last|only)-(child|of-type)
 						if ( simple ) {
 							while ( dir ) {
 								node = elem;
 								while ( (node = node[ dir ]) ) {
 									if ( ofType ?
 										node.nodeName.toLowerCase() === name :
 										node.nodeType === 1 ) {
 
 										return false;
 									}
 								}
 								// Reverse direction for :only-* (if we haven't yet done so)
 								start = dir = type === "only" && !start && "nextSibling";
 							}
 							return true;
 						}
 
 						start = [ forward ? parent.firstChild : parent.lastChild ];
 
 						// non-xml :nth-child(...) stores cache data on `parent`
 						if ( forward && useCache ) {
 
 							// Seek `elem` from a previously-cached index
 
 							// ...in a gzip-friendly way
 							node = parent;
 							outerCache = node[ expando ] || (node[ expando ] = {});
 
 							// Support: IE <9 only
 							// Defend against cloned attroperties (jQuery gh-1709)
 							uniqueCache = outerCache[ node.uniqueID ] ||
 								(outerCache[ node.uniqueID ] = {});
 
 							cache = uniqueCache[ type ] || [];
 							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
 							diff = nodeIndex && cache[ 2 ];
 							node = nodeIndex && parent.childNodes[ nodeIndex ];
 
 							while ( (node = ++nodeIndex && node && node[ dir ] ||
 
 								// Fallback to seeking `elem` from the start
 								(diff = nodeIndex = 0) || start.pop()) ) {
 
 								// When found, cache indexes on `parent` and break
 								if ( node.nodeType === 1 && ++diff && node === elem ) {
 									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
 									break;
 								}
 							}
 
 						} else {
 							// Use previously-cached element index if available
 							if ( useCache ) {
 								// ...in a gzip-friendly way
 								node = elem;
 								outerCache = node[ expando ] || (node[ expando ] = {});
 
 								// Support: IE <9 only
 								// Defend against cloned attroperties (jQuery gh-1709)
 								uniqueCache = outerCache[ node.uniqueID ] ||
 									(outerCache[ node.uniqueID ] = {});
 
 								cache = uniqueCache[ type ] || [];
 								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
 								diff = nodeIndex;
 							}
 
 							// xml :nth-child(...)
 							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
 							if ( diff === false ) {
 								// Use the same loop as above to seek `elem` from the start
 								while ( (node = ++nodeIndex && node && node[ dir ] ||
 									(diff = nodeIndex = 0) || start.pop()) ) {
 
 									if ( ( ofType ?
 										node.nodeName.toLowerCase() === name :
 										node.nodeType === 1 ) &&
 										++diff ) {
 
 										// Cache the index of each encountered element
 										if ( useCache ) {
 											outerCache = node[ expando ] || (node[ expando ] = {});
 
 											// Support: IE <9 only
 											// Defend against cloned attroperties (jQuery gh-1709)
 											uniqueCache = outerCache[ node.uniqueID ] ||
 												(outerCache[ node.uniqueID ] = {});
 
 											uniqueCache[ type ] = [ dirruns, diff ];
 										}
 
 										if ( node === elem ) {
 											break;
 										}
 									}
 								}
 							}
 						}
 
 						// Incorporate the offset, then check against cycle size
 						diff -= last;
 						return diff === first || ( diff % first === 0 && diff / first >= 0 );
 					}
 				};
 		},
 
 		"PSEUDO": function( pseudo, argument ) {
 			// pseudo-class names are case-insensitive
 			// http://www.w3.org/TR/selectors/#pseudo-classes
 			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
 			// Remember that setFilters inherits from pseudos
 			var args,
 				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
 					Sizzle.error( "unsupported pseudo: " + pseudo );
 
 			// The user may use createPseudo to indicate that
 			// arguments are needed to create the filter function
 			// just as Sizzle does
 			if ( fn[ expando ] ) {
 				return fn( argument );
 			}
 
 			// But maintain support for old signatures
 			if ( fn.length > 1 ) {
 				args = [ pseudo, pseudo, "", argument ];
 				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
 					markFunction(function( seed, matches ) {
 						var idx,
 							matched = fn( seed, argument ),
 							i = matched.length;
 						while ( i-- ) {
 							idx = indexOf( seed, matched[i] );
 							seed[ idx ] = !( matches[ idx ] = matched[i] );
 						}
 					}) :
 					function( elem ) {
 						return fn( elem, 0, args );
 					};
 			}
 
 			return fn;
 		}
 	},
 
 	pseudos: {
 		// Potentially complex pseudos
 		"not": markFunction(function( selector ) {
 			// Trim the selector passed to compile
 			// to avoid treating leading and trailing
 			// spaces as combinators
 			var input = [],
 				results = [],
 				matcher = compile( selector.replace( rtrim, "$1" ) );
 
 			return matcher[ expando ] ?
 				markFunction(function( seed, matches, context, xml ) {
 					var elem,
 						unmatched = matcher( seed, null, xml, [] ),
 						i = seed.length;
 
 					// Match elements unmatched by `matcher`
 					while ( i-- ) {
 						if ( (elem = unmatched[i]) ) {
 							seed[i] = !(matches[i] = elem);
 						}
 					}
 				}) :
 				function( elem, context, xml ) {
 					input[0] = elem;
 					matcher( input, null, xml, results );
 					// Don't keep the element (issue #299)
 					input[0] = null;
 					return !results.pop();
 				};
 		}),
 
 		"has": markFunction(function( selector ) {
 			return function( elem ) {
 				return Sizzle( selector, elem ).length > 0;
 			};
 		}),
 
 		"contains": markFunction(function( text ) {
 			text = text.replace( runescape, funescape );
 			return function( elem ) {
 				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
 			};
 		}),
 
 		// "Whether an element is represented by a :lang() selector
 		// is based solely on the element's language value
 		// being equal to the identifier C,
 		// or beginning with the identifier C immediately followed by "-".
 		// The matching of C against the element's language value is performed case-insensitively.
 		// The identifier C does not have to be a valid language name."
 		// http://www.w3.org/TR/selectors/#lang-pseudo
 		"lang": markFunction( function( lang ) {
 			// lang value must be a valid identifier
 			if ( !ridentifier.test(lang || "") ) {
 				Sizzle.error( "unsupported lang: " + lang );
 			}
 			lang = lang.replace( runescape, funescape ).toLowerCase();
 			return function( elem ) {
 				var elemLang;
 				do {
 					if ( (elemLang = documentIsHTML ?
 						elem.lang :
 						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
 
 						elemLang = elemLang.toLowerCase();
 						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
 					}
 				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
 				return false;
 			};
 		}),
 
 		// Miscellaneous
 		"target": function( elem ) {
 			var hash = window.location && window.location.hash;
 			return hash && hash.slice( 1 ) === elem.id;
 		},
 
 		"root": function( elem ) {
 			return elem === docElem;
 		},
 
 		"focus": function( elem ) {
 			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
 		},
 
 		// Boolean properties
 		"enabled": createDisabledPseudo( false ),
 		"disabled": createDisabledPseudo( true ),
 
 		"checked": function( elem ) {
 			// In CSS3, :checked should return both checked and selected elements
 			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
 			var nodeName = elem.nodeName.toLowerCase();
 			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
 		},
 
 		"selected": function( elem ) {
 			// Accessing this property makes selected-by-default
 			// options in Safari work properly
 			if ( elem.parentNode ) {
 				elem.parentNode.selectedIndex;
 			}
 
 			return elem.selected === true;
 		},
 
 		// Contents
 		"empty": function( elem ) {
 			// http://www.w3.org/TR/selectors/#empty-pseudo
 			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
 			//   but not by others (comment: 8; processing instruction: 7; etc.)
 			// nodeType < 6 works because attributes (2) do not appear as children
 			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
 				if ( elem.nodeType < 6 ) {
 					return false;
 				}
 			}
 			return true;
 		},
 
 		"parent": function( elem ) {
 			return !Expr.pseudos["empty"]( elem );
 		},
 
 		// Element/input types
 		"header": function( elem ) {
 			return rheader.test( elem.nodeName );
 		},
 
 		"input": function( elem ) {
 			return rinputs.test( elem.nodeName );
 		},
 
 		"button": function( elem ) {
 			var name = elem.nodeName.toLowerCase();
 			return name === "input" && elem.type === "button" || name === "button";
 		},
 
 		"text": function( elem ) {
 			var attr;
 			return elem.nodeName.toLowerCase() === "input" &&
 				elem.type === "text" &&
 
 				// Support: IE<8
 				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
 				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
 		},
 
 		// Position-in-collection
 		"first": createPositionalPseudo(function() {
 			return [ 0 ];
 		}),
 
 		"last": createPositionalPseudo(function( matchIndexes, length ) {
 			return [ length - 1 ];
 		}),
 
 		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
 			return [ argument < 0 ? argument + length : argument ];
 		}),
 
 		"even": createPositionalPseudo(function( matchIndexes, length ) {
 			var i = 0;
 			for ( ; i < length; i += 2 ) {
 				matchIndexes.push( i );
 			}
 			return matchIndexes;
 		}),
 
 		"odd": createPositionalPseudo(function( matchIndexes, length ) {
 			var i = 1;
 			for ( ; i < length; i += 2 ) {
 				matchIndexes.push( i );
 			}
 			return matchIndexes;
 		}),
 
 		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
 			var i = argument < 0 ? argument + length : argument;
 			for ( ; --i >= 0; ) {
 				matchIndexes.push( i );
 			}
 			return matchIndexes;
 		}),
 
 		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
 			var i = argument < 0 ? argument + length : argument;
 			for ( ; ++i < length; ) {
 				matchIndexes.push( i );
 			}
 			return matchIndexes;
 		})
 	}
 };
 
 Expr.pseudos["nth"] = Expr.pseudos["eq"];
 
 // Add button/input type pseudos
 for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
 	Expr.pseudos[ i ] = createInputPseudo( i );
 }
 for ( i in { submit: true, reset: true } ) {
 	Expr.pseudos[ i ] = createButtonPseudo( i );
 }
 
 // Easy API for creating new setFilters
 function setFilters() {}
 setFilters.prototype = Expr.filters = Expr.pseudos;
 Expr.setFilters = new setFilters();
 
 tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
 	var matched, match, tokens, type,
 		soFar, groups, preFilters,
 		cached = tokenCache[ selector + " " ];
 
 	if ( cached ) {
 		return parseOnly ? 0 : cached.slice( 0 );
 	}
 
 	soFar = selector;
 	groups = [];
 	preFilters = Expr.preFilter;
 
 	while ( soFar ) {
 
 		// Comma and first run
 		if ( !matched || (match = rcomma.exec( soFar )) ) {
 			if ( match ) {
 				// Don't consume trailing commas as valid
 				soFar = soFar.slice( match[0].length ) || soFar;
 			}
 			groups.push( (tokens = []) );
 		}
 
 		matched = false;
 
 		// Combinators
 		if ( (match = rcombinators.exec( soFar )) ) {
 			matched = match.shift();
 			tokens.push({
 				value: matched,
 				// Cast descendant combinators to space
 				type: match[0].replace( rtrim, " " )
 			});
 			soFar = soFar.slice( matched.length );
 		}
 
 		// Filters
 		for ( type in Expr.filter ) {
 			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
 				(match = preFilters[ type ]( match ))) ) {
 				matched = match.shift();
 				tokens.push({
 					value: matched,
 					type: type,
 					matches: match
 				});
 				soFar = soFar.slice( matched.length );
 			}
 		}
 
 		if ( !matched ) {
 			break;
 		}
 	}
 
 	// Return the length of the invalid excess
 	// if we're just parsing
 	// Otherwise, throw an error or return tokens
 	return parseOnly ?
 		soFar.length :
 		soFar ?
 			Sizzle.error( selector ) :
 			// Cache the tokens
 			tokenCache( selector, groups ).slice( 0 );
 };
 
 function toSelector( tokens ) {
 	var i = 0,
 		len = tokens.length,
 		selector = "";
 	for ( ; i < len; i++ ) {
 		selector += tokens[i].value;
 	}
 	return selector;
 }
 
 function addCombinator( matcher, combinator, base ) {
 	var dir = combinator.dir,
 		skip = combinator.next,
 		key = skip || dir,
 		checkNonElements = base && key === "parentNode",
 		doneName = done++;
 
 	return combinator.first ?
 		// Check against closest ancestor/preceding element
 		function( elem, context, xml ) {
 			while ( (elem = elem[ dir ]) ) {
 				if ( elem.nodeType === 1 || checkNonElements ) {
 					return matcher( elem, context, xml );
 				}
 			}
 		} :
 
 		// Check against all ancestor/preceding elements
 		function( elem, context, xml ) {
 			var oldCache, uniqueCache, outerCache,
 				newCache = [ dirruns, doneName ];
 
 			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
 			if ( xml ) {
 				while ( (elem = elem[ dir ]) ) {
 					if ( elem.nodeType === 1 || checkNonElements ) {
 						if ( matcher( elem, context, xml ) ) {
 							return true;
 						}
 					}
 				}
 			} else {
 				while ( (elem = elem[ dir ]) ) {
 					if ( elem.nodeType === 1 || checkNonElements ) {
 						outerCache = elem[ expando ] || (elem[ expando ] = {});
 
 						// Support: IE <9 only
 						// Defend against cloned attroperties (jQuery gh-1709)
 						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
 
 						if ( skip && skip === elem.nodeName.toLowerCase() ) {
 							elem = elem[ dir ] || elem;
 						} else if ( (oldCache = uniqueCache[ key ]) &&
 							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
 
 							// Assign to newCache so results back-propagate to previous elements
 							return (newCache[ 2 ] = oldCache[ 2 ]);
 						} else {
 							// Reuse newcache so results back-propagate to previous elements
 							uniqueCache[ key ] = newCache;
 
 							// A match means we're done; a fail means we have to keep checking
 							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
 								return true;
 							}
 						}
 					}
 				}
 			}
 		};
 }
 
 function elementMatcher( matchers ) {
 	return matchers.length > 1 ?
 		function( elem, context, xml ) {
 			var i = matchers.length;
 			while ( i-- ) {
 				if ( !matchers[i]( elem, context, xml ) ) {
 					return false;
 				}
 			}
 			return true;
 		} :
 		matchers[0];
 }
 
 function multipleContexts( selector, contexts, results ) {
 	var i = 0,
 		len = contexts.length;
 	for ( ; i < len; i++ ) {
 		Sizzle( selector, contexts[i], results );
 	}
 	return results;
 }
 
 function condense( unmatched, map, filter, context, xml ) {
 	var elem,
 		newUnmatched = [],
 		i = 0,
 		len = unmatched.length,
 		mapped = map != null;
 
 	for ( ; i < len; i++ ) {
 		if ( (elem = unmatched[i]) ) {
 			if ( !filter || filter( elem, context, xml ) ) {
 				newUnmatched.push( elem );
 				if ( mapped ) {
 					map.push( i );
 				}
 			}
 		}
 	}
 
 	return newUnmatched;
 }
 
 function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
 	if ( postFilter && !postFilter[ expando ] ) {
 		postFilter = setMatcher( postFilter );
 	}
 	if ( postFinder && !postFinder[ expando ] ) {
 		postFinder = setMatcher( postFinder, postSelector );
 	}
 	return markFunction(function( seed, results, context, xml ) {
 		var temp, i, elem,
 			preMap = [],
 			postMap = [],
 			preexisting = results.length,
 
 			// Get initial elements from seed or context
 			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
 
 			// Prefilter to get matcher input, preserving a map for seed-results synchronization
 			matcherIn = preFilter && ( seed || !selector ) ?
 				condense( elems, preMap, preFilter, context, xml ) :
 				elems,
 
 			matcherOut = matcher ?
 				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
 				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
 
 					// ...intermediate processing is necessary
 					[] :
 
 					// ...otherwise use results directly
 					results :
 				matcherIn;
 
 		// Find primary matches
 		if ( matcher ) {
 			matcher( matcherIn, matcherOut, context, xml );
 		}
 
 		// Apply postFilter
 		if ( postFilter ) {
 			temp = condense( matcherOut, postMap );
 			postFilter( temp, [], context, xml );
 
 			// Un-match failing elements by moving them back to matcherIn
 			i = temp.length;
 			while ( i-- ) {
 				if ( (elem = temp[i]) ) {
 					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
 				}
 			}
 		}
 
 		if ( seed ) {
 			if ( postFinder || preFilter ) {
 				if ( postFinder ) {
 					// Get the final matcherOut by condensing this intermediate into postFinder contexts
 					temp = [];
 					i = matcherOut.length;
 					while ( i-- ) {
 						if ( (elem = matcherOut[i]) ) {
 							// Restore matcherIn since elem is not yet a final match
 							temp.push( (matcherIn[i] = elem) );
 						}
 					}
 					postFinder( null, (matcherOut = []), temp, xml );
 				}
 
 				// Move matched elements from seed to results to keep them synchronized
 				i = matcherOut.length;
 				while ( i-- ) {
 					if ( (elem = matcherOut[i]) &&
 						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
 
 						seed[temp] = !(results[temp] = elem);
 					}
 				}
 			}
 
 		// Add elements to results, through postFinder if defined
 		} else {
 			matcherOut = condense(
 				matcherOut === results ?
 					matcherOut.splice( preexisting, matcherOut.length ) :
 					matcherOut
 			);
 			if ( postFinder ) {
 				postFinder( null, results, matcherOut, xml );
 			} else {
 				push.apply( results, matcherOut );
 			}
 		}
 	});
 }
 
 function matcherFromTokens( tokens ) {
 	var checkContext, matcher, j,
 		len = tokens.length,
 		leadingRelative = Expr.relative[ tokens[0].type ],
 		implicitRelative = leadingRelative || Expr.relative[" "],
 		i = leadingRelative ? 1 : 0,
 
 		// The foundational matcher ensures that elements are reachable from top-level context(s)
 		matchContext = addCombinator( function( elem ) {
 			return elem === checkContext;
 		}, implicitRelative, true ),
 		matchAnyContext = addCombinator( function( elem ) {
 			return indexOf( checkContext, elem ) > -1;
 		}, implicitRelative, true ),
 		matchers = [ function( elem, context, xml ) {
 			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
 				(checkContext = context).nodeType ?
 					matchContext( elem, context, xml ) :
 					matchAnyContext( elem, context, xml ) );
 			// Avoid hanging onto element (issue #299)
 			checkContext = null;
 			return ret;
 		} ];
 
 	for ( ; i < len; i++ ) {
 		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
 			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
 		} else {
 			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
 
 			// Return special upon seeing a positional matcher
 			if ( matcher[ expando ] ) {
 				// Find the next relative operator (if any) for proper handling
 				j = ++i;
 				for ( ; j < len; j++ ) {
 					if ( Expr.relative[ tokens[j].type ] ) {
 						break;
 					}
 				}
 				return setMatcher(
 					i > 1 && elementMatcher( matchers ),
 					i > 1 && toSelector(
 						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
 						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
 					).replace( rtrim, "$1" ),
 					matcher,
 					i < j && matcherFromTokens( tokens.slice( i, j ) ),
 					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
 					j < len && toSelector( tokens )
 				);
 			}
 			matchers.push( matcher );
 		}
 	}
 
 	return elementMatcher( matchers );
 }
 
 function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
 	var bySet = setMatchers.length > 0,
 		byElement = elementMatchers.length > 0,
 		superMatcher = function( seed, context, xml, results, outermost ) {
 			var elem, j, matcher,
 				matchedCount = 0,
 				i = "0",
 				unmatched = seed && [],
 				setMatched = [],
 				contextBackup = outermostContext,
 				// We must always have either seed elements or outermost context
 				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
 				// Use integer dirruns iff this is the outermost matcher
 				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
 				len = elems.length;
 
 			if ( outermost ) {
 				outermostContext = context === document || context || outermost;
 			}
 
 			// Add elements passing elementMatchers directly to results
 			// Support: IE<9, Safari
 			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
 			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
 				if ( byElement && elem ) {
 					j = 0;
 					if ( !context && elem.ownerDocument !== document ) {
 						setDocument( elem );
 						xml = !documentIsHTML;
 					}
 					while ( (matcher = elementMatchers[j++]) ) {
 						if ( matcher( elem, context || document, xml) ) {
 							results.push( elem );
 							break;
 						}
 					}
 					if ( outermost ) {
 						dirruns = dirrunsUnique;
 					}
 				}
 
 				// Track unmatched elements for set filters
 				if ( bySet ) {
 					// They will have gone through all possible matchers
 					if ( (elem = !matcher && elem) ) {
 						matchedCount--;
 					}
 
 					// Lengthen the array for every element, matched or not
 					if ( seed ) {
 						unmatched.push( elem );
 					}
 				}
 			}
 
 			// `i` is now the count of elements visited above, and adding it to `matchedCount`
 			// makes the latter nonnegative.
 			matchedCount += i;
 
 			// Apply set filters to unmatched elements
 			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
 			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
 			// no element matchers and no seed.
 			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
 			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
 			// numerically zero.
 			if ( bySet && i !== matchedCount ) {
 				j = 0;
 				while ( (matcher = setMatchers[j++]) ) {
 					matcher( unmatched, setMatched, context, xml );
 				}
 
 				if ( seed ) {
 					// Reintegrate element matches to eliminate the need for sorting
 					if ( matchedCount > 0 ) {
 						while ( i-- ) {
 							if ( !(unmatched[i] || setMatched[i]) ) {
 								setMatched[i] = pop.call( results );
 							}
 						}
 					}
 
 					// Discard index placeholder values to get only actual matches
 					setMatched = condense( setMatched );
 				}
 
 				// Add matches to results
 				push.apply( results, setMatched );
 
 				// Seedless set matches succeeding multiple successful matchers stipulate sorting
 				if ( outermost && !seed && setMatched.length > 0 &&
 					( matchedCount + setMatchers.length ) > 1 ) {
 
 					Sizzle.uniqueSort( results );
 				}
 			}
 
 			// Override manipulation of globals by nested matchers
 			if ( outermost ) {
 				dirruns = dirrunsUnique;
 				outermostContext = contextBackup;
 			}
 
 			return unmatched;
 		};
 
 	return bySet ?
 		markFunction( superMatcher ) :
 		superMatcher;
 }
 
 compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
 	var i,
 		setMatchers = [],
 		elementMatchers = [],
 		cached = compilerCache[ selector + " " ];
 
 	if ( !cached ) {
 		// Generate a function of recursive functions that can be used to check each element
 		if ( !match ) {
 			match = tokenize( selector );
 		}
 		i = match.length;
 		while ( i-- ) {
 			cached = matcherFromTokens( match[i] );
 			if ( cached[ expando ] ) {
 				setMatchers.push( cached );
 			} else {
 				elementMatchers.push( cached );
 			}
 		}
 
 		// Cache the compiled function
 		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
 
 		// Save selector and tokenization
 		cached.selector = selector;
 	}
 	return cached;
 };
 
 /**
  * A low-level selection function that works with Sizzle's compiled
  *  selector functions
  * @param {String|Function} selector A selector or a pre-compiled
  *  selector function built with Sizzle.compile
  * @param {Element} context
  * @param {Array} [results]
  * @param {Array} [seed] A set of elements to match against
  */
 select = Sizzle.select = function( selector, context, results, seed ) {
 	var i, tokens, token, type, find,
 		compiled = typeof selector === "function" && selector,
 		match = !seed && tokenize( (selector = compiled.selector || selector) );
 
 	results = results || [];
 
 	// Try to minimize operations if there is only one selector in the list and no seed
 	// (the latter of which guarantees us context)
 	if ( match.length === 1 ) {
 
 		// Reduce context if the leading compound selector is an ID
 		tokens = match[0] = match[0].slice( 0 );
 		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
 				support.getById && context.nodeType === 9 && documentIsHTML &&
 				Expr.relative[ tokens[1].type ] ) {
 
 			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
 			if ( !context ) {
 				return results;
 
 			// Precompiled matchers will still verify ancestry, so step up a level
 			} else if ( compiled ) {
 				context = context.parentNode;
 			}
 
 			selector = selector.slice( tokens.shift().value.length );
 		}
 
 		// Fetch a seed set for right-to-left matching
 		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
 		while ( i-- ) {
 			token = tokens[i];
 
 			// Abort if we hit a combinator
 			if ( Expr.relative[ (type = token.type) ] ) {
 				break;
 			}
 			if ( (find = Expr.find[ type ]) ) {
 				// Search, expanding context for leading sibling combinators
 				if ( (seed = find(
 					token.matches[0].replace( runescape, funescape ),
 					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
 				)) ) {
 
 					// If seed is empty or no tokens remain, we can return early
 					tokens.splice( i, 1 );
 					selector = seed.length && toSelector( tokens );
 					if ( !selector ) {
 						push.apply( results, seed );
 						return results;
 					}
 
 					break;
 				}
 			}
 		}
 	}
 
 	// Compile and execute a filtering function if one is not provided
 	// Provide `match` to avoid retokenization if we modified the selector above
 	( compiled || compile( selector, match ) )(
 		seed,
 		context,
 		!documentIsHTML,
 		results,
 		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
 	);
 	return results;
 };
 
 // One-time assignments
 
 // Sort stability
 support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
 
 // Support: Chrome 14-35+
 // Always assume duplicates if they aren't passed to the comparison function
 support.detectDuplicates = !!hasDuplicate;
 
 // Initialize against the default document
 setDocument();
 
 // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
 // Detached nodes confoundingly follow *each other*
 support.sortDetached = assert(function( el ) {
 	// Should return 1, but returns 4 (following)
 	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
 });
 
 // Support: IE<8
 // Prevent attribute/property "interpolation"
 // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
 if ( !assert(function( el ) {
 	el.innerHTML = "<a href='#'></a>";
 	return el.firstChild.getAttribute("href") === "#" ;
 }) ) {
 	addHandle( "type|href|height|width", function( elem, name, isXML ) {
 		if ( !isXML ) {
 			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
 		}
 	});
 }
 
 // Support: IE<9
 // Use defaultValue in place of getAttribute("value")
 if ( !support.attributes || !assert(function( el ) {
 	el.innerHTML = "<input/>";
 	el.firstChild.setAttribute( "value", "" );
 	return el.firstChild.getAttribute( "value" ) === "";
 }) ) {
 	addHandle( "value", function( elem, name, isXML ) {
 		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
 			return elem.defaultValue;
 		}
 	});
 }
 
 // Support: IE<9
 // Use getAttributeNode to fetch booleans when getAttribute lies
 if ( !assert(function( el ) {
 	return el.getAttribute("disabled") == null;
 }) ) {
 	addHandle( booleans, function( elem, name, isXML ) {
 		var val;
 		if ( !isXML ) {
 			return elem[ name ] === true ? name.toLowerCase() :
 					(val = elem.getAttributeNode( name )) && val.specified ?
 					val.value :
 				null;
 		}
 	});
 }
 
 return Sizzle;
 
 })( window );
 
 
 
 jQuery.find = Sizzle;
 jQuery.expr = Sizzle.selectors;
 
 // Deprecated
 jQuery.expr[ ":" ] = jQuery.expr.pseudos;
 jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
 jQuery.text = Sizzle.getText;
 jQuery.isXMLDoc = Sizzle.isXML;
 jQuery.contains = Sizzle.contains;
 jQuery.escapeSelector = Sizzle.escape;
 
 
 
 
 var dir = function( elem, dir, until ) {
 	var matched = [],
 		truncate = until !== undefined;
 
 	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
 		if ( elem.nodeType === 1 ) {
 			if ( truncate && jQuery( elem ).is( until ) ) {
 				break;
 			}
 			matched.push( elem );
 		}
 	}
 	return matched;
 };
 
 
 var siblings = function( n, elem ) {
 	var matched = [];
 
 	for ( ; n; n = n.nextSibling ) {
 		if ( n.nodeType === 1 && n !== elem ) {
 			matched.push( n );
 		}
 	}
 
 	return matched;
 };
 
 
 var rneedsContext = jQuery.expr.match.needsContext;
 
 var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
 
 
 
 var risSimple = /^.[^:#\[\.,]*$/;
 
 // Implement the identical functionality for filter and not
 function winnow( elements, qualifier, not ) {
 	if ( jQuery.isFunction( qualifier ) ) {
 		return jQuery.grep( elements, function( elem, i ) {
 			return !!qualifier.call( elem, i, elem ) !== not;
 		} );
 
 	}
 
 	if ( qualifier.nodeType ) {
 		return jQuery.grep( elements, function( elem ) {
 			return ( elem === qualifier ) !== not;
 		} );
 
 	}
 
 	if ( typeof qualifier === "string" ) {
 		if ( risSimple.test( qualifier ) ) {
 			return jQuery.filter( qualifier, elements, not );
 		}
 
 		qualifier = jQuery.filter( qualifier, elements );
 	}
 
 	return jQuery.grep( elements, function( elem ) {
 		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
 	} );
 }
 
 jQuery.filter = function( expr, elems, not ) {
 	var elem = elems[ 0 ];
 
 	if ( not ) {
 		expr = ":not(" + expr + ")";
 	}
 
 	return elems.length === 1 && elem.nodeType === 1 ?
 		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
 		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
 			return elem.nodeType === 1;
 		} ) );
 };
 
 jQuery.fn.extend( {
 	find: function( selector ) {
 		var i, ret,
 			len = this.length,
 			self = this;
 
 		if ( typeof selector !== "string" ) {
 			return this.pushStack( jQuery( selector ).filter( function() {
 				for ( i = 0; i < len; i++ ) {
 					if ( jQuery.contains( self[ i ], this ) ) {
 						return true;
 					}
 				}
 			} ) );
 		}
 
 		ret = this.pushStack( [] );
 
 		for ( i = 0; i < len; i++ ) {
 			jQuery.find( selector, self[ i ], ret );
 		}
 
 		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
 	},
 	filter: function( selector ) {
 		return this.pushStack( winnow( this, selector || [], false ) );
 	},
 	not: function( selector ) {
 		return this.pushStack( winnow( this, selector || [], true ) );
 	},
 	is: function( selector ) {
 		return !!winnow(
 			this,
 
 			// If this is a positional/relative selector, check membership in the returned set
 			// so $("p:first").is("p:last") won't return true for a doc with two "p".
 			typeof selector === "string" && rneedsContext.test( selector ) ?
 				jQuery( selector ) :
 				selector || [],
 			false
 		).length;
 	}
 } );
 
 
 // Initialize a jQuery object
 
 
 // A central reference to the root jQuery(document)
 var rootjQuery,
 
 	// A simple way to check for HTML strings
 	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
 	// Strict HTML recognition (#11290: must start with <)
 	// Shortcut simple #id case for speed
 	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
 
 	init = jQuery.fn.init = function( selector, context, root ) {
 		var match, elem;
 
 		// HANDLE: $(""), $(null), $(undefined), $(false)
 		if ( !selector ) {
 			return this;
 		}
 
 		// Method init() accepts an alternate rootjQuery
 		// so migrate can support jQuery.sub (gh-2101)
 		root = root || rootjQuery;
 
 		// Handle HTML strings
 		if ( typeof selector === "string" ) {
 			if ( selector[ 0 ] === "<" &&
 				selector[ selector.length - 1 ] === ">" &&
 				selector.length >= 3 ) {
 
 				// Assume that strings that start and end with <> are HTML and skip the regex check
 				match = [ null, selector, null ];
 
 			} else {
 				match = rquickExpr.exec( selector );
 			}
 
 			// Match html or make sure no context is specified for #id
 			if ( match && ( match[ 1 ] || !context ) ) {
 
 				// HANDLE: $(html) -> $(array)
 				if ( match[ 1 ] ) {
 					context = context instanceof jQuery ? context[ 0 ] : context;
 
 					// Option to run scripts is true for back-compat
 					// Intentionally let the error be thrown if parseHTML is not present
 					jQuery.merge( this, jQuery.parseHTML(
 						match[ 1 ],
 						context && context.nodeType ? context.ownerDocument || context : document,
 						true
 					) );
 
 					// HANDLE: $(html, props)
 					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
 						for ( match in context ) {
 
 							// Properties of context are called as methods if possible
 							if ( jQuery.isFunction( this[ match ] ) ) {
 								this[ match ]( context[ match ] );
 
 							// ...and otherwise set as attributes
 							} else {
 								this.attr( match, context[ match ] );
 							}
 						}
 					}
 
 					return this;
 
 				// HANDLE: $(#id)
 				} else {
 					elem = document.getElementById( match[ 2 ] );
 
 					if ( elem ) {
 
 						// Inject the element directly into the jQuery object
 						this[ 0 ] = elem;
 						this.length = 1;
 					}
 					return this;
 				}
 
 			// HANDLE: $(expr, $(...))
 			} else if ( !context || context.jquery ) {
 				return ( context || root ).find( selector );
 
 			// HANDLE: $(expr, context)
 			// (which is just equivalent to: $(context).find(expr)
 			} else {
 				return this.constructor( context ).find( selector );
 			}
 
 		// HANDLE: $(DOMElement)
 		} else if ( selector.nodeType ) {
 			this[ 0 ] = selector;
 			this.length = 1;
 			return this;
 
 		// HANDLE: $(function)
 		// Shortcut for document ready
 		} else if ( jQuery.isFunction( selector ) ) {
 			return root.ready !== undefined ?
 				root.ready( selector ) :
 
 				// Execute immediately if ready is not present
 				selector( jQuery );
 		}
 
 		return jQuery.makeArray( selector, this );
 	};
 
 // Give the init function the jQuery prototype for later instantiation
 init.prototype = jQuery.fn;
 
 // Initialize central reference
 rootjQuery = jQuery( document );
 
 
 var rparentsprev = /^(?:parents|prev(?:Until|All))/,
 
 	// Methods guaranteed to produce a unique set when starting from a unique set
 	guaranteedUnique = {
 		children: true,
 		contents: true,
 		next: true,
 		prev: true
 	};
 
 jQuery.fn.extend( {
 	has: function( target ) {
 		var targets = jQuery( target, this ),
 			l = targets.length;
 
 		return this.filter( function() {
 			var i = 0;
 			for ( ; i < l; i++ ) {
 				if ( jQuery.contains( this, targets[ i ] ) ) {
 					return true;
 				}
 			}
 		} );
 	},
 
 	closest: function( selectors, context ) {
 		var cur,
 			i = 0,
 			l = this.length,
 			matched = [],
 			targets = typeof selectors !== "string" && jQuery( selectors );
 
 		// Positional selectors never match, since there's no _selection_ context
 		if ( !rneedsContext.test( selectors ) ) {
 			for ( ; i < l; i++ ) {
 				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
 
 					// Always skip document fragments
 					if ( cur.nodeType < 11 && ( targets ?
 						targets.index( cur ) > -1 :
 
 						// Don't pass non-elements to Sizzle
 						cur.nodeType === 1 &&
 							jQuery.find.matchesSelector( cur, selectors ) ) ) {
 
 						matched.push( cur );
 						break;
 					}
 				}
 			}
 		}
 
 		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
 	},
 
 	// Determine the position of an element within the set
 	index: function( elem ) {
 
 		// No argument, return index in parent
 		if ( !elem ) {
 			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
 		}
 
 		// Index in selector
 		if ( typeof elem === "string" ) {
 			return indexOf.call( jQuery( elem ), this[ 0 ] );
 		}
 
 		// Locate the position of the desired element
 		return indexOf.call( this,
 
 			// If it receives a jQuery object, the first element is used
 			elem.jquery ? elem[ 0 ] : elem
 		);
 	},
 
 	add: function( selector, context ) {
 		return this.pushStack(
 			jQuery.uniqueSort(
 				jQuery.merge( this.get(), jQuery( selector, context ) )
 			)
 		);
 	},
 
 	addBack: function( selector ) {
 		return this.add( selector == null ?
 			this.prevObject : this.prevObject.filter( selector )
 		);
 	}
 } );
 
 function sibling( cur, dir ) {
 	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
 	return cur;
 }
 
 jQuery.each( {
 	parent: function( elem ) {
 		var parent = elem.parentNode;
 		return parent && parent.nodeType !== 11 ? parent : null;
 	},
 	parents: function( elem ) {
 		return dir( elem, "parentNode" );
 	},
 	parentsUntil: function( elem, i, until ) {
 		return dir( elem, "parentNode", until );
 	},
 	next: function( elem ) {
 		return sibling( elem, "nextSibling" );
 	},
 	prev: function( elem ) {
 		return sibling( elem, "previousSibling" );
 	},
 	nextAll: function( elem ) {
 		return dir( elem, "nextSibling" );
 	},
 	prevAll: function( elem ) {
 		return dir( elem, "previousSibling" );
 	},
 	nextUntil: function( elem, i, until ) {
 		return dir( elem, "nextSibling", until );
 	},
 	prevUntil: function( elem, i, until ) {
 		return dir( elem, "previousSibling", until );
 	},
 	siblings: function( elem ) {
 		return siblings( ( elem.parentNode || {} ).firstChild, elem );
 	},
 	children: function( elem ) {
 		return siblings( elem.firstChild );
 	},
 	contents: function( elem ) {
 		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
 	}
 }, function( name, fn ) {
 	jQuery.fn[ name ] = function( until, selector ) {
 		var matched = jQuery.map( this, fn, until );
 
 		if ( name.slice( -5 ) !== "Until" ) {
 			selector = until;
 		}
 
 		if ( selector && typeof selector === "string" ) {
 			matched = jQuery.filter( selector, matched );
 		}
 
 		if ( this.length > 1 ) {
 
 			// Remove duplicates
 			if ( !guaranteedUnique[ name ] ) {
 				jQuery.uniqueSort( matched );
 			}
 
 			// Reverse order for parents* and prev-derivatives
 			if ( rparentsprev.test( name ) ) {
 				matched.reverse();
 			}
 		}
 
 		return this.pushStack( matched );
 	};
 } );
 var rnotwhite = ( /\S+/g );
 
 
 
 // Convert String-formatted options into Object-formatted ones
 function createOptions( options ) {
 	var object = {};
 	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
 		object[ flag ] = true;
 	} );
 	return object;
 }
 
 /*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
 jQuery.Callbacks = function( options ) {
 
 	// Convert options from String-formatted to Object-formatted if needed
 	// (we check in cache first)
 	options = typeof options === "string" ?
 		createOptions( options ) :
 		jQuery.extend( {}, options );
 
 	var // Flag to know if list is currently firing
 		firing,
 
 		// Last fire value for non-forgettable lists
 		memory,
 
 		// Flag to know if list was already fired
 		fired,
 
 		// Flag to prevent firing
 		locked,
 
 		// Actual callback list
 		list = [],
 
 		// Queue of execution data for repeatable lists
 		queue = [],
 
 		// Index of currently firing callback (modified by add/remove as needed)
 		firingIndex = -1,
 
 		// Fire callbacks
 		fire = function() {
 
 			// Enforce single-firing
 			locked = options.once;
 
 			// Execute callbacks for all pending executions,
 			// respecting firingIndex overrides and runtime changes
 			fired = firing = true;
 			for ( ; queue.length; firingIndex = -1 ) {
 				memory = queue.shift();
 				while ( ++firingIndex < list.length ) {
 
 					// Run callback and check for early termination
 					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
 						options.stopOnFalse ) {
 
 						// Jump to end and forget the data so .add doesn't re-fire
 						firingIndex = list.length;
 						memory = false;
 					}
 				}
 			}
 
 			// Forget the data if we're done with it
 			if ( !options.memory ) {
 				memory = false;
 			}
 
 			firing = false;
 
 			// Clean up if we're done firing for good
 			if ( locked ) {
 
 				// Keep an empty list if we have data for future add calls
 				if ( memory ) {
 					list = [];
 
 				// Otherwise, this object is spent
 				} else {
 					list = "";
 				}
 			}
 		},
 
 		// Actual Callbacks object
 		self = {
 
 			// Add a callback or a collection of callbacks to the list
 			add: function() {
 				if ( list ) {
 
 					// If we have memory from a past run, we should fire after adding
 					if ( memory && !firing ) {
 						firingIndex = list.length - 1;
 						queue.push( memory );
 					}
 
 					( function add( args ) {
 						jQuery.each( args, function( _, arg ) {
 							if ( jQuery.isFunction( arg ) ) {
 								if ( !options.unique || !self.has( arg ) ) {
 									list.push( arg );
 								}
 							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
 
 								// Inspect recursively
 								add( arg );
 							}
 						} );
 					} )( arguments );
 
 					if ( memory && !firing ) {
 						fire();
 					}
 				}
 				return this;
 			},
 
 			// Remove a callback from the list
 			remove: function() {
 				jQuery.each( arguments, function( _, arg ) {
 					var index;
 					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
 						list.splice( index, 1 );
 
 						// Handle firing indexes
 						if ( index <= firingIndex ) {
 							firingIndex--;
 						}
 					}
 				} );
 				return this;
 			},
 
 			// Check if a given callback is in the list.
 			// If no argument is given, return whether or not list has callbacks attached.
 			has: function( fn ) {
 				return fn ?
 					jQuery.inArray( fn, list ) > -1 :
 					list.length > 0;
 			},
 
 			// Remove all callbacks from the list
 			empty: function() {
 				if ( list ) {
 					list = [];
 				}
 				return this;
 			},
 
 			// Disable .fire and .add
 			// Abort any current/pending executions
 			// Clear all callbacks and values
 			disable: function() {
 				locked = queue = [];
 				list = memory = "";
 				return this;
 			},
 			disabled: function() {
 				return !list;
 			},
 
 			// Disable .fire
 			// Also disable .add unless we have memory (since it would have no effect)
 			// Abort any pending executions
 			lock: function() {
 				locked = queue = [];
 				if ( !memory && !firing ) {
 					list = memory = "";
 				}
 				return this;
 			},
 			locked: function() {
 				return !!locked;
 			},
 
 			// Call all callbacks with the given context and arguments
 			fireWith: function( context, args ) {
 				if ( !locked ) {
 					args = args || [];
 					args = [ context, args.slice ? args.slice() : args ];
 					queue.push( args );
 					if ( !firing ) {
 						fire();
 					}
 				}
 				return this;
 			},
 
 			// Call all the callbacks with the given arguments
 			fire: function() {
 				self.fireWith( this, arguments );
 				return this;
 			},
 
 			// To know if the callbacks have already been called at least once
 			fired: function() {
 				return !!fired;
 			}
 		};
 
 	return self;
 };
 
 
 function Identity( v ) {
 	return v;
 }
 function Thrower( ex ) {
 	throw ex;
 }
 
 function adoptValue( value, resolve, reject ) {
 	var method;
 
 	try {
 
 		// Check for promise aspect first to privilege synchronous behavior
 		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
 			method.call( value ).done( resolve ).fail( reject );
 
 		// Other thenables
 		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
 			method.call( value, resolve, reject );
 
 		// Other non-thenables
 		} else {
 
 			// Support: Android 4.0 only
 			// Strict mode functions invoked without .call/.apply get global-object context
 			resolve.call( undefined, value );
 		}
 
 	// For Promises/A+, convert exceptions into rejections
 	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
 	// Deferred#then to conditionally suppress rejection.
 	} catch ( value ) {
 
 		// Support: Android 4.0 only
 		// Strict mode functions invoked without .call/.apply get global-object context
 		reject.call( undefined, value );
 	}
 }
 
 jQuery.extend( {
 
 	Deferred: function( func ) {
 		var tuples = [
 
 				// action, add listener, callbacks,
 				// ... .then handlers, argument index, [final state]
 				[ "notify", "progress", jQuery.Callbacks( "memory" ),
 					jQuery.Callbacks( "memory" ), 2 ],
 				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
 					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
 				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
 					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
 			],
 			state = "pending",
 			promise = {
 				state: function() {
 					return state;
 				},
 				always: function() {
 					deferred.done( arguments ).fail( arguments );
 					return this;
 				},
 				"catch": function( fn ) {
 					return promise.then( null, fn );
 				},
 
 				// Keep pipe for back-compat
 				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
 					var fns = arguments;
 
 					return jQuery.Deferred( function( newDefer ) {
 						jQuery.each( tuples, function( i, tuple ) {
 
 							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
 							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
 
 							// deferred.progress(function() { bind to newDefer or newDefer.notify })
 							// deferred.done(function() { bind to newDefer or newDefer.resolve })
 							// deferred.fail(function() { bind to newDefer or newDefer.reject })
 							deferred[ tuple[ 1 ] ]( function() {
 								var returned = fn && fn.apply( this, arguments );
 								if ( returned && jQuery.isFunction( returned.promise ) ) {
 									returned.promise()
 										.progress( newDefer.notify )
 										.done( newDefer.resolve )
 										.fail( newDefer.reject );
 								} else {
 									newDefer[ tuple[ 0 ] + "With" ](
 										this,
 										fn ? [ returned ] : arguments
 									);
 								}
 							} );
 						} );
 						fns = null;
 					} ).promise();
 				},
 				then: function( onFulfilled, onRejected, onProgress ) {
 					var maxDepth = 0;
 					function resolve( depth, deferred, handler, special ) {
 						return function() {
 							var that = this,
 								args = arguments,
 								mightThrow = function() {
 									var returned, then;
 
 									// Support: Promises/A+ section 2.3.3.3.3
 									// https://promisesaplus.com/#point-59
 									// Ignore double-resolution attempts
 									if ( depth < maxDepth ) {
 										return;
 									}
 
 									returned = handler.apply( that, args );
 
 									// Support: Promises/A+ section 2.3.1
 									// https://promisesaplus.com/#point-48
 									if ( returned === deferred.promise() ) {
 										throw new TypeError( "Thenable self-resolution" );
 									}
 
 									// Support: Promises/A+ sections 2.3.3.1, 3.5
 									// https://promisesaplus.com/#point-54
 									// https://promisesaplus.com/#point-75
 									// Retrieve `then` only once
 									then = returned &&
 
 										// Support: Promises/A+ section 2.3.4
 										// https://promisesaplus.com/#point-64
 										// Only check objects and functions for thenability
 										( typeof returned === "object" ||
 											typeof returned === "function" ) &&
 										returned.then;
 
 									// Handle a returned thenable
 									if ( jQuery.isFunction( then ) ) {
 
 										// Special processors (notify) just wait for resolution
 										if ( special ) {
 											then.call(
 												returned,
 												resolve( maxDepth, deferred, Identity, special ),
 												resolve( maxDepth, deferred, Thrower, special )
 											);
 
 										// Normal processors (resolve) also hook into progress
 										} else {
 
 											// ...and disregard older resolution values
 											maxDepth++;
 
 											then.call(
 												returned,
 												resolve( maxDepth, deferred, Identity, special ),
 												resolve( maxDepth, deferred, Thrower, special ),
 												resolve( maxDepth, deferred, Identity,
 													deferred.notifyWith )
 											);
 										}
 
 									// Handle all other returned values
 									} else {
 
 										// Only substitute handlers pass on context
 										// and multiple values (non-spec behavior)
 										if ( handler !== Identity ) {
 											that = undefined;
 											args = [ returned ];
 										}
 
 										// Process the value(s)
 										// Default process is resolve
 										( special || deferred.resolveWith )( that, args );
 									}
 								},
 
 								// Only normal processors (resolve) catch and reject exceptions
 								process = special ?
 									mightThrow :
 									function() {
 										try {
 											mightThrow();
 										} catch ( e ) {
 
 											if ( jQuery.Deferred.exceptionHook ) {
 												jQuery.Deferred.exceptionHook( e,
 													process.stackTrace );
 											}
 
 											// Support: Promises/A+ section 2.3.3.3.4.1
 											// https://promisesaplus.com/#point-61
 											// Ignore post-resolution exceptions
 											if ( depth + 1 >= maxDepth ) {
 
 												// Only substitute handlers pass on context
 												// and multiple values (non-spec behavior)
 												if ( handler !== Thrower ) {
 													that = undefined;
 													args = [ e ];
 												}
 
 												deferred.rejectWith( that, args );
 											}
 										}
 									};
 
 							// Support: Promises/A+ section 2.3.3.3.1
 							// https://promisesaplus.com/#point-57
 							// Re-resolve promises immediately to dodge false rejection from
 							// subsequent errors
 							if ( depth ) {
 								process();
 							} else {
 
 								// Call an optional hook to record the stack, in case of exception
 								// since it's otherwise lost when execution goes async
 								if ( jQuery.Deferred.getStackHook ) {
 									process.stackTrace = jQuery.Deferred.getStackHook();
 								}
 								window.setTimeout( process );
 							}
 						};
 					}
 
 					return jQuery.Deferred( function( newDefer ) {
 
 						// progress_handlers.add( ... )
 						tuples[ 0 ][ 3 ].add(
 							resolve(
 								0,
 								newDefer,
 								jQuery.isFunction( onProgress ) ?
 									onProgress :
 									Identity,
 								newDefer.notifyWith
 							)
 						);
 
 						// fulfilled_handlers.add( ... )
 						tuples[ 1 ][ 3 ].add(
 							resolve(
 								0,
 								newDefer,
 								jQuery.isFunction( onFulfilled ) ?
 									onFulfilled :
 									Identity
 							)
 						);
 
 						// rejected_handlers.add( ... )
 						tuples[ 2 ][ 3 ].add(
 							resolve(
 								0,
 								newDefer,
 								jQuery.isFunction( onRejected ) ?
 									onRejected :
 									Thrower
 							)
 						);
 					} ).promise();
 				},
 
 				// Get a promise for this deferred
 				// If obj is provided, the promise aspect is added to the object
 				promise: function( obj ) {
 					return obj != null ? jQuery.extend( obj, promise ) : promise;
 				}
 			},
 			deferred = {};
 
 		// Add list-specific methods
 		jQuery.each( tuples, function( i, tuple ) {
 			var list = tuple[ 2 ],
 				stateString = tuple[ 5 ];
 
 			// promise.progress = list.add
 			// promise.done = list.add
 			// promise.fail = list.add
 			promise[ tuple[ 1 ] ] = list.add;
 
 			// Handle state
 			if ( stateString ) {
 				list.add(
 					function() {
 
 						// state = "resolved" (i.e., fulfilled)
 						// state = "rejected"
 						state = stateString;
 					},
 
 					// rejected_callbacks.disable
 					// fulfilled_callbacks.disable
 					tuples[ 3 - i ][ 2 ].disable,
 
 					// progress_callbacks.lock
 					tuples[ 0 ][ 2 ].lock
 				);
 			}
 
 			// progress_handlers.fire
 			// fulfilled_handlers.fire
 			// rejected_handlers.fire
 			list.add( tuple[ 3 ].fire );
 
 			// deferred.notify = function() { deferred.notifyWith(...) }
 			// deferred.resolve = function() { deferred.resolveWith(...) }
 			// deferred.reject = function() { deferred.rejectWith(...) }
 			deferred[ tuple[ 0 ] ] = function() {
 				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
 				return this;
 			};
 
 			// deferred.notifyWith = list.fireWith
 			// deferred.resolveWith = list.fireWith
 			// deferred.rejectWith = list.fireWith
 			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
 		} );
 
 		// Make the deferred a promise
 		promise.promise( deferred );
 
 		// Call given func if any
 		if ( func ) {
 			func.call( deferred, deferred );
 		}
 
 		// All done!
 		return deferred;
 	},
 
 	// Deferred helper
 	when: function( singleValue ) {
 		var
 
 			// count of uncompleted subordinates
 			remaining = arguments.length,
 
 			// count of unprocessed arguments
 			i = remaining,
 
 			// subordinate fulfillment data
 			resolveContexts = Array( i ),
 			resolveValues = slice.call( arguments ),
 
 			// the master Deferred
 			master = jQuery.Deferred(),
 
 			// subordinate callback factory
 			updateFunc = function( i ) {
 				return function( value ) {
 					resolveContexts[ i ] = this;
 					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
 					if ( !( --remaining ) ) {
 						master.resolveWith( resolveContexts, resolveValues );
 					}
 				};
 			};
 
 		// Single- and empty arguments are adopted like Promise.resolve
 		if ( remaining <= 1 ) {
 			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
 
 			// Use .then() to unwrap secondary thenables (cf. gh-3000)
 			if ( master.state() === "pending" ||
 				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
 
 				return master.then();
 			}
 		}
 
 		// Multiple arguments are aggregated like Promise.all array elements
 		while ( i-- ) {
 			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
 		}
 
 		return master.promise();
 	}
 } );
 
 
 // These usually indicate a programmer mistake during development,
 // warn about them ASAP rather than swallowing them by default.
 var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
 
 jQuery.Deferred.exceptionHook = function( error, stack ) {
 
 	// Support: IE 8 - 9 only
 	// Console exists when dev tools are open, which can happen at any time
 	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
 		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
 	}
 };
 
 
 
 
 jQuery.readyException = function( error ) {
 	window.setTimeout( function() {
 		throw error;
 	} );
 };
 
 
 
 
 // The deferred used on DOM ready
 var readyList = jQuery.Deferred();
 
 jQuery.fn.ready = function( fn ) {
 
 	readyList
 		.then( fn )
 
 		// Wrap jQuery.readyException in a function so that the lookup
 		// happens at the time of error handling instead of callback
 		// registration.
 		.catch( function( error ) {
 			jQuery.readyException( error );
 		} );
 
 	return this;
 };
 
 jQuery.extend( {
 
 	// Is the DOM ready to be used? Set to true once it occurs.
 	isReady: false,
 
 	// A counter to track how many items to wait for before
 	// the ready event fires. See #6781
 	readyWait: 1,
 
 	// Hold (or release) the ready event
 	holdReady: function( hold ) {
 		if ( hold ) {
 			jQuery.readyWait++;
 		} else {
 			jQuery.ready( true );
 		}
 	},
 
 	// Handle when the DOM is ready
 	ready: function( wait ) {
 
 		// Abort if there are pending holds or we're already ready
 		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
 			return;
 		}
 
 		// Remember that the DOM is ready
 		jQuery.isReady = true;
 
 		// If a normal DOM Ready event fired, decrement, and wait if need be
 		if ( wait !== true && --jQuery.readyWait > 0 ) {
 			return;
 		}
 
 		// If there are functions bound, to execute
 		readyList.resolveWith( document, [ jQuery ] );
 	}
 } );
 
 jQuery.ready.then = readyList.then;
 
 // The ready event handler and self cleanup method
 function completed() {
 	document.removeEventListener( "DOMContentLoaded", completed );
 	window.removeEventListener( "load", completed );
 	jQuery.ready();
 }
 
 // Catch cases where $(document).ready() is called
 // after the browser event has already occurred.
 // Support: IE <=9 - 10 only
 // Older IE sometimes signals "interactive" too soon
 if ( document.readyState === "complete" ||
 	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
 
 	// Handle it asynchronously to allow scripts the opportunity to delay ready
 	window.setTimeout( jQuery.ready );
 
 } else {
 
 	// Use the handy event callback
 	document.addEventListener( "DOMContentLoaded", completed );
 
 	// A fallback to window.onload, that will always work
 	window.addEventListener( "load", completed );
 }
 
 
 
 
 // Multifunctional method to get and set values of a collection
 // The value/s can optionally be executed if it's a function
 var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
 	var i = 0,
 		len = elems.length,
 		bulk = key == null;
 
 	// Sets many values
 	if ( jQuery.type( key ) === "object" ) {
 		chainable = true;
 		for ( i in key ) {
 			access( elems, fn, i, key[ i ], true, emptyGet, raw );
 		}
 
 	// Sets one value
 	} else if ( value !== undefined ) {
 		chainable = true;
 
 		if ( !jQuery.isFunction( value ) ) {
 			raw = true;
 		}
 
 		if ( bulk ) {
 
 			// Bulk operations run against the entire set
 			if ( raw ) {
 				fn.call( elems, value );
 				fn = null;
 
 			// ...except when executing function values
 			} else {
 				bulk = fn;
 				fn = function( elem, key, value ) {
 					return bulk.call( jQuery( elem ), value );
 				};
 			}
 		}
 
 		if ( fn ) {
 			for ( ; i < len; i++ ) {
 				fn(
 					elems[ i ], key, raw ?
 					value :
 					value.call( elems[ i ], i, fn( elems[ i ], key ) )
 				);
 			}
 		}
 	}
 
 	return chainable ?
 		elems :
 
 		// Gets
 		bulk ?
 			fn.call( elems ) :
 			len ? fn( elems[ 0 ], key ) : emptyGet;
 };
 var acceptData = function( owner ) {
 
 	// Accepts only:
 	//  - Node
 	//    - Node.ELEMENT_NODE
 	//    - Node.DOCUMENT_NODE
 	//  - Object
 	//    - Any
 	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
 };
 
 
 
 
 function Data() {
 	this.expando = jQuery.expando + Data.uid++;
 }
 
 Data.uid = 1;
 
 Data.prototype = {
 
 	cache: function( owner ) {
 
 		// Check if the owner object already has a cache
 		var value = owner[ this.expando ];
 
 		// If not, create one
 		if ( !value ) {
 			value = {};
 
 			// We can accept data for non-element nodes in modern browsers,
 			// but we should not, see #8335.
 			// Always return an empty object.
 			if ( acceptData( owner ) ) {
 
 				// If it is a node unlikely to be stringify-ed or looped over
 				// use plain assignment
 				if ( owner.nodeType ) {
 					owner[ this.expando ] = value;
 
 				// Otherwise secure it in a non-enumerable property
 				// configurable must be true to allow the property to be
 				// deleted when data is removed
 				} else {
 					Object.defineProperty( owner, this.expando, {
 						value: value,
 						configurable: true
 					} );
 				}
 			}
 		}
 
 		return value;
 	},
 	set: function( owner, data, value ) {
 		var prop,
 			cache = this.cache( owner );
 
 		// Handle: [ owner, key, value ] args
 		// Always use camelCase key (gh-2257)
 		if ( typeof data === "string" ) {
 			cache[ jQuery.camelCase( data ) ] = value;
 
 		// Handle: [ owner, { properties } ] args
 		} else {
 
 			// Copy the properties one-by-one to the cache object
 			for ( prop in data ) {
 				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
 			}
 		}
 		return cache;
 	},
 	get: function( owner, key ) {
 		return key === undefined ?
 			this.cache( owner ) :
 
 			// Always use camelCase key (gh-2257)
 			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
 	},
 	access: function( owner, key, value ) {
 
 		// In cases where either:
 		//
 		//   1. No key was specified
 		//   2. A string key was specified, but no value provided
 		//
 		// Take the "read" path and allow the get method to determine
 		// which value to return, respectively either:
 		//
 		//   1. The entire cache object
 		//   2. The data stored at the key
 		//
 		if ( key === undefined ||
 				( ( key && typeof key === "string" ) && value === undefined ) ) {
 
 			return this.get( owner, key );
 		}
 
 		// When the key is not a string, or both a key and value
 		// are specified, set or extend (existing objects) with either:
 		//
 		//   1. An object of properties
 		//   2. A key and value
 		//
 		this.set( owner, key, value );
 
 		// Since the "set" path can have two possible entry points
 		// return the expected data based on which path was taken[*]
 		return value !== undefined ? value : key;
 	},
 	remove: function( owner, key ) {
 		var i,
 			cache = owner[ this.expando ];
 
 		if ( cache === undefined ) {
 			return;
 		}
 
 		if ( key !== undefined ) {
 
 			// Support array or space separated string of keys
 			if ( jQuery.isArray( key ) ) {
 
 				// If key is an array of keys...
 				// We always set camelCase keys, so remove that.
 				key = key.map( jQuery.camelCase );
 			} else {
 				key = jQuery.camelCase( key );
 
 				// If a key with the spaces exists, use it.
 				// Otherwise, create an array by matching non-whitespace
 				key = key in cache ?
 					[ key ] :
 					( key.match( rnotwhite ) || [] );
 			}
 
 			i = key.length;
 
 			while ( i-- ) {
 				delete cache[ key[ i ] ];
 			}
 		}
 
 		// Remove the expando if there's no more data
 		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
 
 			// Support: Chrome <=35 - 45
 			// Webkit & Blink performance suffers when deleting properties
 			// from DOM nodes, so set to undefined instead
 			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
 			if ( owner.nodeType ) {
 				owner[ this.expando ] = undefined;
 			} else {
 				delete owner[ this.expando ];
 			}
 		}
 	},
 	hasData: function( owner ) {
 		var cache = owner[ this.expando ];
 		return cache !== undefined && !jQuery.isEmptyObject( cache );
 	}
 };
 var dataPriv = new Data();
 
 var dataUser = new Data();
 
 
 
 //	Implementation Summary
 //
 //	1. Enforce API surface and semantic compatibility with 1.9.x branch
 //	2. Improve the module's maintainability by reducing the storage
 //		paths to a single mechanism.
 //	3. Use the same single mechanism to support "private" and "user" data.
 //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
 //	5. Avoid exposing implementation details on user objects (eg. expando properties)
 //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
 
 var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
 	rmultiDash = /[A-Z]/g;
 
 function dataAttr( elem, key, data ) {
 	var name;
 
 	// If nothing was found internally, try to fetch any
 	// data from the HTML5 data-* attribute
 	if ( data === undefined && elem.nodeType === 1 ) {
 		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
 		data = elem.getAttribute( name );
 
 		if ( typeof data === "string" ) {
 			try {
 				data = data === "true" ? true :
 					data === "false" ? false :
 					data === "null" ? null :
 
 					// Only convert to a number if it doesn't change the string
 					+data + "" === data ? +data :
 					rbrace.test( data ) ? JSON.parse( data ) :
 					data;
 			} catch ( e ) {}
 
 			// Make sure we set the data so it isn't changed later
 			dataUser.set( elem, key, data );
 		} else {
 			data = undefined;
 		}
 	}
 	return data;
 }
 
 jQuery.extend( {
 	hasData: function( elem ) {
 		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
 	},
 
 	data: function( elem, name, data ) {
 		return dataUser.access( elem, name, data );
 	},
 
 	removeData: function( elem, name ) {
 		dataUser.remove( elem, name );
 	},
 
 	// TODO: Now that all calls to _data and _removeData have been replaced
 	// with direct calls to dataPriv methods, these can be deprecated.
 	_data: function( elem, name, data ) {
 		return dataPriv.access( elem, name, data );
 	},
 
 	_removeData: function( elem, name ) {
 		dataPriv.remove( elem, name );
 	}
 } );
 
 jQuery.fn.extend( {
 	data: function( key, value ) {
 		var i, name, data,
 			elem = this[ 0 ],
 			attrs = elem && elem.attributes;
 
 		// Gets all values
 		if ( key === undefined ) {
 			if ( this.length ) {
 				data = dataUser.get( elem );
 
 				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
 					i = attrs.length;
 					while ( i-- ) {
 
 						// Support: IE 11 only
 						// The attrs elements can be null (#14894)
 						if ( attrs[ i ] ) {
 							name = attrs[ i ].name;
 							if ( name.indexOf( "data-" ) === 0 ) {
 								name = jQuery.camelCase( name.slice( 5 ) );
 								dataAttr( elem, name, data[ name ] );
 							}
 						}
 					}
 					dataPriv.set( elem, "hasDataAttrs", true );
 				}
 			}
 
 			return data;
 		}
 
 		// Sets multiple values
 		if ( typeof key === "object" ) {
 			return this.each( function() {
 				dataUser.set( this, key );
 			} );
 		}
 
 		return access( this, function( value ) {
 			var data;
 
 			// The calling jQuery object (element matches) is not empty
 			// (and therefore has an element appears at this[ 0 ]) and the
 			// `value` parameter was not undefined. An empty jQuery object
 			// will result in `undefined` for elem = this[ 0 ] which will
 			// throw an exception if an attempt to read a data cache is made.
 			if ( elem && value === undefined ) {
 
 				// Attempt to get data from the cache
 				// The key will always be camelCased in Data
 				data = dataUser.get( elem, key );
 				if ( data !== undefined ) {
 					return data;
 				}
 
 				// Attempt to "discover" the data in
 				// HTML5 custom data-* attrs
 				data = dataAttr( elem, key );
 				if ( data !== undefined ) {
 					return data;
 				}
 
 				// We tried really hard, but the data doesn't exist.
 				return;
 			}
 
 			// Set the data...
 			this.each( function() {
 
 				// We always store the camelCased key
 				dataUser.set( this, key, value );
 			} );
 		}, null, value, arguments.length > 1, null, true );
 	},
 
 	removeData: function( key ) {
 		return this.each( function() {
 			dataUser.remove( this, key );
 		} );
 	}
 } );
 
 
 jQuery.extend( {
 	queue: function( elem, type, data ) {
 		var queue;
 
 		if ( elem ) {
 			type = ( type || "fx" ) + "queue";
 			queue = dataPriv.get( elem, type );
 
 			// Speed up dequeue by getting out quickly if this is just a lookup
 			if ( data ) {
 				if ( !queue || jQuery.isArray( data ) ) {
 					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
 				} else {
 					queue.push( data );
 				}
 			}
 			return queue || [];
 		}
 	},
 
 	dequeue: function( elem, type ) {
 		type = type || "fx";
 
 		var queue = jQuery.queue( elem, type ),
 			startLength = queue.length,
 			fn = queue.shift(),
 			hooks = jQuery._queueHooks( elem, type ),
 			next = function() {
 				jQuery.dequeue( elem, type );
 			};
 
 		// If the fx queue is dequeued, always remove the progress sentinel
 		if ( fn === "inprogress" ) {
 			fn = queue.shift();
 			startLength--;
 		}
 
 		if ( fn ) {
 
 			// Add a progress sentinel to prevent the fx queue from being
 			// automatically dequeued
 			if ( type === "fx" ) {
 				queue.unshift( "inprogress" );
 			}
 
 			// Clear up the last queue stop function
 			delete hooks.stop;
 			fn.call( elem, next, hooks );
 		}
 
 		if ( !startLength && hooks ) {
 			hooks.empty.fire();
 		}
 	},
 
 	// Not public - generate a queueHooks object, or return the current one
 	_queueHooks: function( elem, type ) {
 		var key = type + "queueHooks";
 		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
 			empty: jQuery.Callbacks( "once memory" ).add( function() {
 				dataPriv.remove( elem, [ type + "queue", key ] );
 			} )
 		} );
 	}
 } );
 
 jQuery.fn.extend( {
 	queue: function( type, data ) {
 		var setter = 2;
 
 		if ( typeof type !== "string" ) {
 			data = type;
 			type = "fx";
 			setter--;
 		}
 
 		if ( arguments.length < setter ) {
 			return jQuery.queue( this[ 0 ], type );
 		}
 
 		return data === undefined ?
 			this :
 			this.each( function() {
 				var queue = jQuery.queue( this, type, data );
 
 				// Ensure a hooks for this queue
 				jQuery._queueHooks( this, type );
 
 				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
 					jQuery.dequeue( this, type );
 				}
 			} );
 	},
 	dequeue: function( type ) {
 		return this.each( function() {
 			jQuery.dequeue( this, type );
 		} );
 	},
 	clearQueue: function( type ) {
 		return this.queue( type || "fx", [] );
 	},
 
 	// Get a promise resolved when queues of a certain type
 	// are emptied (fx is the type by default)
 	promise: function( type, obj ) {
 		var tmp,
 			count = 1,
 			defer = jQuery.Deferred(),
 			elements = this,
 			i = this.length,
 			resolve = function() {
 				if ( !( --count ) ) {
 					defer.resolveWith( elements, [ elements ] );
 				}
 			};
 
 		if ( typeof type !== "string" ) {
 			obj = type;
 			type = undefined;
 		}
 		type = type || "fx";
 
 		while ( i-- ) {
 			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
 			if ( tmp && tmp.empty ) {
 				count++;
 				tmp.empty.add( resolve );
 			}
 		}
 		resolve();
 		return defer.promise( obj );
 	}
 } );
 var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
 
 var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
 
 
 var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
 
 var isHiddenWithinTree = function( elem, el ) {
 
 		// isHiddenWithinTree might be called from jQuery#filter function;
 		// in that case, element will be second argument
 		elem = el || elem;
 
 		// Inline style trumps all
 		return elem.style.display === "none" ||
 			elem.style.display === "" &&
 
 			// Otherwise, check computed style
 			// Support: Firefox <=43 - 45
 			// Disconnected elements can have computed display: none, so first confirm that elem is
 			// in the document.
 			jQuery.contains( elem.ownerDocument, elem ) &&
 
 			jQuery.css( elem, "display" ) === "none";
 	};
 
 var swap = function( elem, options, callback, args ) {
 	var ret, name,
 		old = {};
 
 	// Remember the old values, and insert the new ones
 	for ( name in options ) {
 		old[ name ] = elem.style[ name ];
 		elem.style[ name ] = options[ name ];
 	}
 
 	ret = callback.apply( elem, args || [] );
 
 	// Revert the old values
 	for ( name in options ) {
 		elem.style[ name ] = old[ name ];
 	}
 
 	return ret;
 };
 
 
 
 
 function adjustCSS( elem, prop, valueParts, tween ) {
 	var adjusted,
 		scale = 1,
 		maxIterations = 20,
 		currentValue = tween ?
 			function() {
 				return tween.cur();
 			} :
 			function() {
 				return jQuery.css( elem, prop, "" );
 			},
 		initial = currentValue(),
 		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
 
 		// Starting value computation is required for potential unit mismatches
 		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
 			rcssNum.exec( jQuery.css( elem, prop ) );
 
 	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
 
 		// Trust units reported by jQuery.css
 		unit = unit || initialInUnit[ 3 ];
 
 		// Make sure we update the tween properties later on
 		valueParts = valueParts || [];
 
 		// Iteratively approximate from a nonzero starting point
 		initialInUnit = +initial || 1;
 
 		do {
 
 			// If previous iteration zeroed out, double until we get *something*.
 			// Use string for doubling so we don't accidentally see scale as unchanged below
 			scale = scale || ".5";
 
 			// Adjust and apply
 			initialInUnit = initialInUnit / scale;
 			jQuery.style( elem, prop, initialInUnit + unit );
 
 		// Update scale, tolerating zero or NaN from tween.cur()
 		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
 		} while (
 			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
 		);
 	}
 
 	if ( valueParts ) {
 		initialInUnit = +initialInUnit || +initial || 0;
 
 		// Apply relative offset (+=/-=) if specified
 		adjusted = valueParts[ 1 ] ?
 			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
 			+valueParts[ 2 ];
 		if ( tween ) {
 			tween.unit = unit;
 			tween.start = initialInUnit;
 			tween.end = adjusted;
 		}
 	}
 	return adjusted;
 }
 
 
 var defaultDisplayMap = {};
 
 function getDefaultDisplay( elem ) {
 	var temp,
 		doc = elem.ownerDocument,
 		nodeName = elem.nodeName,
 		display = defaultDisplayMap[ nodeName ];
 
 	if ( display ) {
 		return display;
 	}
 
 	temp = doc.body.appendChild( doc.createElement( nodeName ) ),
 	display = jQuery.css( temp, "display" );
 
 	temp.parentNode.removeChild( temp );
 
 	if ( display === "none" ) {
 		display = "block";
 	}
 	defaultDisplayMap[ nodeName ] = display;
 
 	return display;
 }
 
 function showHide( elements, show ) {
 	var display, elem,
 		values = [],
 		index = 0,
 		length = elements.length;
 
 	// Determine new display value for elements that need to change
 	for ( ; index < length; index++ ) {
 		elem = elements[ index ];
 		if ( !elem.style ) {
 			continue;
 		}
 
 		display = elem.style.display;
 		if ( show ) {
 
 			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
 			// check is required in this first loop unless we have a nonempty display value (either
 			// inline or about-to-be-restored)
 			if ( display === "none" ) {
 				values[ index ] = dataPriv.get( elem, "display" ) || null;
 				if ( !values[ index ] ) {
 					elem.style.display = "";
 				}
 			}
 			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
 				values[ index ] = getDefaultDisplay( elem );
 			}
 		} else {
 			if ( display !== "none" ) {
 				values[ index ] = "none";
 
 				// Remember what we're overwriting
 				dataPriv.set( elem, "display", display );
 			}
 		}
 	}
 
 	// Set the display of the elements in a second loop to avoid constant reflow
 	for ( index = 0; index < length; index++ ) {
 		if ( values[ index ] != null ) {
 			elements[ index ].style.display = values[ index ];
 		}
 	}
 
 	return elements;
 }
 
 jQuery.fn.extend( {
 	show: function() {
 		return showHide( this, true );
 	},
 	hide: function() {
 		return showHide( this );
 	},
 	toggle: function( state ) {
 		if ( typeof state === "boolean" ) {
 			return state ? this.show() : this.hide();
 		}
 
 		return this.each( function() {
 			if ( isHiddenWithinTree( this ) ) {
 				jQuery( this ).show();
 			} else {
 				jQuery( this ).hide();
 			}
 		} );
 	}
 } );
 var rcheckableType = ( /^(?:checkbox|radio)$/i );
 
 var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
 
 var rscriptType = ( /^$|\/(?:java|ecma)script/i );
 
 
 
 // We have to close these tags to support XHTML (#13200)
 var wrapMap = {
 
 	// Support: IE <=9 only
 	option: [ 1, "<select multiple='multiple'>", "</select>" ],
 
 	// XHTML parsers do not magically insert elements in the
 	// same way that tag soup parsers do. So we cannot shorten
 	// this by omitting <tbody> or other required elements.
 	thead: [ 1, "<table>", "</table>" ],
 	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
 	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
 	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
 
 	_default: [ 0, "", "" ]
 };
 
 // Support: IE <=9 only
 wrapMap.optgroup = wrapMap.option;
 
 wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
 wrapMap.th = wrapMap.td;
 
 
 function getAll( context, tag ) {
 
 	// Support: IE <=9 - 11 only
 	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
 	var ret = typeof context.getElementsByTagName !== "undefined" ?
 			context.getElementsByTagName( tag || "*" ) :
 			typeof context.querySelectorAll !== "undefined" ?
 				context.querySelectorAll( tag || "*" ) :
 			[];
 
 	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
 		jQuery.merge( [ context ], ret ) :
 		ret;
 }
 
 
 // Mark scripts as having already been evaluated
 function setGlobalEval( elems, refElements ) {
 	var i = 0,
 		l = elems.length;
 
 	for ( ; i < l; i++ ) {
 		dataPriv.set(
 			elems[ i ],
 			"globalEval",
 			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
 		);
 	}
 }
 
 
 var rhtml = /<|&#?\w+;/;
 
 function buildFragment( elems, context, scripts, selection, ignored ) {
 	var elem, tmp, tag, wrap, contains, j,
 		fragment = context.createDocumentFragment(),
 		nodes = [],
 		i = 0,
 		l = elems.length;
 
 	for ( ; i < l; i++ ) {
 		elem = elems[ i ];
 
 		if ( elem || elem === 0 ) {
 
 			// Add nodes directly
 			if ( jQuery.type( elem ) === "object" ) {
 
 				// Support: Android <=4.0 only, PhantomJS 1 only
 				// push.apply(_, arraylike) throws on ancient WebKit
 				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
 
 			// Convert non-html into a text node
 			} else if ( !rhtml.test( elem ) ) {
 				nodes.push( context.createTextNode( elem ) );
 
 			// Convert html into DOM nodes
 			} else {
 				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
 
 				// Deserialize a standard representation
 				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
 				wrap = wrapMap[ tag ] || wrapMap._default;
 				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
 
 				// Descend through wrappers to the right content
 				j = wrap[ 0 ];
 				while ( j-- ) {
 					tmp = tmp.lastChild;
 				}
 
 				// Support: Android <=4.0 only, PhantomJS 1 only
 				// push.apply(_, arraylike) throws on ancient WebKit
 				jQuery.merge( nodes, tmp.childNodes );
 
 				// Remember the top-level container
 				tmp = fragment.firstChild;
 
 				// Ensure the created nodes are orphaned (#12392)
 				tmp.textContent = "";
 			}
 		}
 	}
 
 	// Remove wrapper from fragment
 	fragment.textContent = "";
 
 	i = 0;
 	while ( ( elem = nodes[ i++ ] ) ) {
 
 		// Skip elements already in the context collection (trac-4087)
 		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
 			if ( ignored ) {
 				ignored.push( elem );
 			}
 			continue;
 		}
 
 		contains = jQuery.contains( elem.ownerDocument, elem );
 
 		// Append to fragment
 		tmp = getAll( fragment.appendChild( elem ), "script" );
 
 		// Preserve script evaluation history
 		if ( contains ) {
 			setGlobalEval( tmp );
 		}
 
 		// Capture executables
 		if ( scripts ) {
 			j = 0;
 			while ( ( elem = tmp[ j++ ] ) ) {
 				if ( rscriptType.test( elem.type || "" ) ) {
 					scripts.push( elem );
 				}
 			}
 		}
 	}
 
 	return fragment;
 }
 
 
 ( function() {
 	var fragment = document.createDocumentFragment(),
 		div = fragment.appendChild( document.createElement( "div" ) ),
 		input = document.createElement( "input" );
 
 	// Support: Android 4.0 - 4.3 only
 	// Check state lost if the name is set (#11217)
 	// Support: Windows Web Apps (WWA)
 	// `name` and `type` must use .setAttribute for WWA (#14901)
 	input.setAttribute( "type", "radio" );
 	input.setAttribute( "checked", "checked" );
 	input.setAttribute( "name", "t" );
 
 	div.appendChild( input );
 
 	// Support: Android <=4.1 only
 	// Older WebKit doesn't clone checked state correctly in fragments
 	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
 
 	// Support: IE <=11 only
 	// Make sure textarea (and checkbox) defaultValue is properly cloned
 	div.innerHTML = "<textarea>x</textarea>";
 	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
 } )();
 var documentElement = document.documentElement;
 
 
 
 var
 	rkeyEvent = /^key/,
 	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
 	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
 
 function returnTrue() {
 	return true;
 }
 
 function returnFalse() {
 	return false;
 }
 
 // Support: IE <=9 only
 // See #13393 for more info
 function safeActiveElement() {
 	try {
 		return document.activeElement;
 	} catch ( err ) { }
 }
 
 function on( elem, types, selector, data, fn, one ) {
 	var origFn, type;
 
 	// Types can be a map of types/handlers
 	if ( typeof types === "object" ) {
 
 		// ( types-Object, selector, data )
 		if ( typeof selector !== "string" ) {
 
 			// ( types-Object, data )
 			data = data || selector;
 			selector = undefined;
 		}
 		for ( type in types ) {
 			on( elem, type, selector, data, types[ type ], one );
 		}
 		return elem;
 	}
 
 	if ( data == null && fn == null ) {
 
 		// ( types, fn )
 		fn = selector;
 		data = selector = undefined;
 	} else if ( fn == null ) {
 		if ( typeof selector === "string" ) {
 
 			// ( types, selector, fn )
 			fn = data;
 			data = undefined;
 		} else {
 
 			// ( types, data, fn )
 			fn = data;
 			data = selector;
 			selector = undefined;
 		}
 	}
 	if ( fn === false ) {
 		fn = returnFalse;
 	} else if ( !fn ) {
 		return elem;
 	}
 
 	if ( one === 1 ) {
 		origFn = fn;
 		fn = function( event ) {
 
 			// Can use an empty set, since event contains the info
 			jQuery().off( event );
 			return origFn.apply( this, arguments );
 		};
 
 		// Use same guid so caller can remove using origFn
 		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
 	}
 	return elem.each( function() {
 		jQuery.event.add( this, types, fn, data, selector );
 	} );
 }
 
 /*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
 jQuery.event = {
 
 	global: {},
 
 	add: function( elem, types, handler, data, selector ) {
 
 		var handleObjIn, eventHandle, tmp,
 			events, t, handleObj,
 			special, handlers, type, namespaces, origType,
 			elemData = dataPriv.get( elem );
 
 		// Don't attach events to noData or text/comment nodes (but allow plain objects)
 		if ( !elemData ) {
 			return;
 		}
 
 		// Caller can pass in an object of custom data in lieu of the handler
 		if ( handler.handler ) {
 			handleObjIn = handler;
 			handler = handleObjIn.handler;
 			selector = handleObjIn.selector;
 		}
 
 		// Ensure that invalid selectors throw exceptions at attach time
 		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
 		if ( selector ) {
 			jQuery.find.matchesSelector( documentElement, selector );
 		}
 
 		// Make sure that the handler has a unique ID, used to find/remove it later
 		if ( !handler.guid ) {
 			handler.guid = jQuery.guid++;
 		}
 
 		// Init the element's event structure and main handler, if this is the first
 		if ( !( events = elemData.events ) ) {
 			events = elemData.events = {};
 		}
 		if ( !( eventHandle = elemData.handle ) ) {
 			eventHandle = elemData.handle = function( e ) {
 
 				// Discard the second event of a jQuery.event.trigger() and
 				// when an event is called after a page has unloaded
 				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
 					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
 			};
 		}
 
 		// Handle multiple events separated by a space
 		types = ( types || "" ).match( rnotwhite ) || [ "" ];
 		t = types.length;
 		while ( t-- ) {
 			tmp = rtypenamespace.exec( types[ t ] ) || [];
 			type = origType = tmp[ 1 ];
 			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
 
 			// There *must* be a type, no attaching namespace-only handlers
 			if ( !type ) {
 				continue;
 			}
 
 			// If event changes its type, use the special event handlers for the changed type
 			special = jQuery.event.special[ type ] || {};
 
 			// If selector defined, determine special event api type, otherwise given type
 			type = ( selector ? special.delegateType : special.bindType ) || type;
 
 			// Update special based on newly reset type
 			special = jQuery.event.special[ type ] || {};
 
 			// handleObj is passed to all event handlers
 			handleObj = jQuery.extend( {
 				type: type,
 				origType: origType,
 				data: data,
 				handler: handler,
 				guid: handler.guid,
 				selector: selector,
 				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
 				namespace: namespaces.join( "." )
 			}, handleObjIn );
 
 			// Init the event handler queue if we're the first
 			if ( !( handlers = events[ type ] ) ) {
 				handlers = events[ type ] = [];
 				handlers.delegateCount = 0;
 
 				// Only use addEventListener if the special events handler returns false
 				if ( !special.setup ||
 					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
 
 					if ( elem.addEventListener ) {
 						elem.addEventListener( type, eventHandle );
 					}
 				}
 			}
 
 			if ( special.add ) {
 				special.add.call( elem, handleObj );
 
 				if ( !handleObj.handler.guid ) {
 					handleObj.handler.guid = handler.guid;
 				}
 			}
 
 			// Add to the element's handler list, delegates in front
 			if ( selector ) {
 				handlers.splice( handlers.delegateCount++, 0, handleObj );
 			} else {
 				handlers.push( handleObj );
 			}
 
 			// Keep track of which events have ever been used, for event optimization
 			jQuery.event.global[ type ] = true;
 		}
 
 	},
 
 	// Detach an event or set of events from an element
 	remove: function( elem, types, handler, selector, mappedTypes ) {
 
 		var j, origCount, tmp,
 			events, t, handleObj,
 			special, handlers, type, namespaces, origType,
 			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
 
 		if ( !elemData || !( events = elemData.events ) ) {
 			return;
 		}
 
 		// Once for each type.namespace in types; type may be omitted
 		types = ( types || "" ).match( rnotwhite ) || [ "" ];
 		t = types.length;
 		while ( t-- ) {
 			tmp = rtypenamespace.exec( types[ t ] ) || [];
 			type = origType = tmp[ 1 ];
 			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
 
 			// Unbind all events (on this namespace, if provided) for the element
 			if ( !type ) {
 				for ( type in events ) {
 					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
 				}
 				continue;
 			}
 
 			special = jQuery.event.special[ type ] || {};
 			type = ( selector ? special.delegateType : special.bindType ) || type;
 			handlers = events[ type ] || [];
 			tmp = tmp[ 2 ] &&
 				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
 
 			// Remove matching events
 			origCount = j = handlers.length;
 			while ( j-- ) {
 				handleObj = handlers[ j ];
 
 				if ( ( mappedTypes || origType === handleObj.origType ) &&
 					( !handler || handler.guid === handleObj.guid ) &&
 					( !tmp || tmp.test( handleObj.namespace ) ) &&
 					( !selector || selector === handleObj.selector ||
 						selector === "**" && handleObj.selector ) ) {
 					handlers.splice( j, 1 );
 
 					if ( handleObj.selector ) {
 						handlers.delegateCount--;
 					}
 					if ( special.remove ) {
 						special.remove.call( elem, handleObj );
 					}
 				}
 			}
 
 			// Remove generic event handler if we removed something and no more handlers exist
 			// (avoids potential for endless recursion during removal of special event handlers)
 			if ( origCount && !handlers.length ) {
 				if ( !special.teardown ||
 					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
 
 					jQuery.removeEvent( elem, type, elemData.handle );
 				}
 
 				delete events[ type ];
 			}
 		}
 
 		// Remove data and the expando if it's no longer used
 		if ( jQuery.isEmptyObject( events ) ) {
 			dataPriv.remove( elem, "handle events" );
 		}
 	},
 
 	dispatch: function( nativeEvent ) {
 
 		// Make a writable jQuery.Event from the native event object
 		var event = jQuery.event.fix( nativeEvent );
 
 		var i, j, ret, matched, handleObj, handlerQueue,
 			args = new Array( arguments.length ),
 			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
 			special = jQuery.event.special[ event.type ] || {};
 
 		// Use the fix-ed jQuery.Event rather than the (read-only) native event
 		args[ 0 ] = event;
 
 		for ( i = 1; i < arguments.length; i++ ) {
 			args[ i ] = arguments[ i ];
 		}
 
 		event.delegateTarget = this;
 
 		// Call the preDispatch hook for the mapped type, and let it bail if desired
 		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
 			return;
 		}
 
 		// Determine handlers
 		handlerQueue = jQuery.event.handlers.call( this, event, handlers );
 
 		// Run delegates first; they may want to stop propagation beneath us
 		i = 0;
 		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
 			event.currentTarget = matched.elem;
 
 			j = 0;
 			while ( ( handleObj = matched.handlers[ j++ ] ) &&
 				!event.isImmediatePropagationStopped() ) {
 
 				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
 				// a subset or equal to those in the bound event (both can have no namespace).
 				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
 
 					event.handleObj = handleObj;
 					event.data = handleObj.data;
 
 					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
 						handleObj.handler ).apply( matched.elem, args );
 
 					if ( ret !== undefined ) {
 						if ( ( event.result = ret ) === false ) {
 							event.preventDefault();
 							event.stopPropagation();
 						}
 					}
 				}
 			}
 		}
 
 		// Call the postDispatch hook for the mapped type
 		if ( special.postDispatch ) {
 			special.postDispatch.call( this, event );
 		}
 
 		return event.result;
 	},
 
 	handlers: function( event, handlers ) {
 		var i, matches, sel, handleObj,
 			handlerQueue = [],
 			delegateCount = handlers.delegateCount,
 			cur = event.target;
 
 		// Support: IE <=9
 		// Find delegate handlers
 		// Black-hole SVG <use> instance trees (#13180)
 		//
 		// Support: Firefox <=42
 		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
 		if ( delegateCount && cur.nodeType &&
 			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
 
 			for ( ; cur !== this; cur = cur.parentNode || this ) {
 
 				// Don't check non-elements (#13208)
 				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
 				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
 					matches = [];
 					for ( i = 0; i < delegateCount; i++ ) {
 						handleObj = handlers[ i ];
 
 						// Don't conflict with Object.prototype properties (#13203)
 						sel = handleObj.selector + " ";
 
 						if ( matches[ sel ] === undefined ) {
 							matches[ sel ] = handleObj.needsContext ?
 								jQuery( sel, this ).index( cur ) > -1 :
 								jQuery.find( sel, this, null, [ cur ] ).length;
 						}
 						if ( matches[ sel ] ) {
 							matches.push( handleObj );
 						}
 					}
 					if ( matches.length ) {
 						handlerQueue.push( { elem: cur, handlers: matches } );
 					}
 				}
 			}
 		}
 
 		// Add the remaining (directly-bound) handlers
 		if ( delegateCount < handlers.length ) {
 			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
 		}
 
 		return handlerQueue;
 	},
 
 	addProp: function( name, hook ) {
 		Object.defineProperty( jQuery.Event.prototype, name, {
 			enumerable: true,
 			configurable: true,
 
 			get: jQuery.isFunction( hook ) ?
 				function() {
 					if ( this.originalEvent ) {
 							return hook( this.originalEvent );
 					}
 				} :
 				function() {
 					if ( this.originalEvent ) {
 							return this.originalEvent[ name ];
 					}
 				},
 
 			set: function( value ) {
 				Object.defineProperty( this, name, {
 					enumerable: true,
 					configurable: true,
 					writable: true,
 					value: value
 				} );
 			}
 		} );
 	},
 
 	fix: function( originalEvent ) {
 		return originalEvent[ jQuery.expando ] ?
 			originalEvent :
 			new jQuery.Event( originalEvent );
 	},
 
 	special: {
 		load: {
 
 			// Prevent triggered image.load events from bubbling to window.load
 			noBubble: true
 		},
 		focus: {
 
 			// Fire native event if possible so blur/focus sequence is correct
 			trigger: function() {
 				if ( this !== safeActiveElement() && this.focus ) {
 					this.focus();
 					return false;
 				}
 			},
 			delegateType: "focusin"
 		},
 		blur: {
 			trigger: function() {
 				if ( this === safeActiveElement() && this.blur ) {
 					this.blur();
 					return false;
 				}
 			},
 			delegateType: "focusout"
 		},
 		click: {
 
 			// For checkbox, fire native event so checked state will be right
 			trigger: function() {
 				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
 					this.click();
 					return false;
 				}
 			},
 
 			// For cross-browser consistency, don't fire native .click() on links
 			_default: function( event ) {
 				return jQuery.nodeName( event.target, "a" );
 			}
 		},
 
 		beforeunload: {
 			postDispatch: function( event ) {
 
 				// Support: Firefox 20+
 				// Firefox doesn't alert if the returnValue field is not set.
 				if ( event.result !== undefined && event.originalEvent ) {
 					event.originalEvent.returnValue = event.result;
 				}
 			}
 		}
 	}
 };
 
 jQuery.removeEvent = function( elem, type, handle ) {
 
 	// This "if" is needed for plain objects
 	if ( elem.removeEventListener ) {
 		elem.removeEventListener( type, handle );
 	}
 };
 
 jQuery.Event = function( src, props ) {
 
 	// Allow instantiation without the 'new' keyword
 	if ( !( this instanceof jQuery.Event ) ) {
 		return new jQuery.Event( src, props );
 	}
 
 	// Event object
 	if ( src && src.type ) {
 		this.originalEvent = src;
 		this.type = src.type;
 
 		// Events bubbling up the document may have been marked as prevented
 		// by a handler lower down the tree; reflect the correct value.
 		this.isDefaultPrevented = src.defaultPrevented ||
 				src.defaultPrevented === undefined &&
 
 				// Support: Android <=2.3 only
 				src.returnValue === false ?
 			returnTrue :
 			returnFalse;
 
 		// Create target properties
 		// Support: Safari <=6 - 7 only
 		// Target should not be a text node (#504, #13143)
 		this.target = ( src.target && src.target.nodeType === 3 ) ?
 			src.target.parentNode :
 			src.target;
 
 		this.currentTarget = src.currentTarget;
 		this.relatedTarget = src.relatedTarget;
 
 	// Event type
 	} else {
 		this.type = src;
 	}
 
 	// Put explicitly provided properties onto the event object
 	if ( props ) {
 		jQuery.extend( this, props );
 	}
 
 	// Create a timestamp if incoming event doesn't have one
 	this.timeStamp = src && src.timeStamp || jQuery.now();
 
 	// Mark it as fixed
 	this[ jQuery.expando ] = true;
 };
 
 // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
 // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
 jQuery.Event.prototype = {
 	constructor: jQuery.Event,
 	isDefaultPrevented: returnFalse,
 	isPropagationStopped: returnFalse,
 	isImmediatePropagationStopped: returnFalse,
 	isSimulated: false,
 
 	preventDefault: function() {
 		var e = this.originalEvent;
 
 		this.isDefaultPrevented = returnTrue;
 
 		if ( e && !this.isSimulated ) {
 			e.preventDefault();
 		}
 	},
 	stopPropagation: function() {
 		var e = this.originalEvent;
 
 		this.isPropagationStopped = returnTrue;
 
 		if ( e && !this.isSimulated ) {
 			e.stopPropagation();
 		}
 	},
 	stopImmediatePropagation: function() {
 		var e = this.originalEvent;
 
 		this.isImmediatePropagationStopped = returnTrue;
 
 		if ( e && !this.isSimulated ) {
 			e.stopImmediatePropagation();
 		}
 
 		this.stopPropagation();
 	}
 };
 
 // Includes all common event props including KeyEvent and MouseEvent specific props
 jQuery.each( {
 	altKey: true,
 	bubbles: true,
 	cancelable: true,
 	changedTouches: true,
 	ctrlKey: true,
 	detail: true,
 	eventPhase: true,
 	metaKey: true,
 	pageX: true,
 	pageY: true,
 	shiftKey: true,
 	view: true,
 	"char": true,
 	charCode: true,
 	key: true,
 	keyCode: true,
 	button: true,
 	buttons: true,
 	clientX: true,
 	clientY: true,
 	offsetX: true,
 	offsetY: true,
 	pointerId: true,
 	pointerType: true,
 	screenX: true,
 	screenY: true,
 	targetTouches: true,
 	toElement: true,
 	touches: true,
 
 	which: function( event ) {
 		var button = event.button;
 
 		// Add which for key events
 		if ( event.which == null && rkeyEvent.test( event.type ) ) {
 			return event.charCode != null ? event.charCode : event.keyCode;
 		}
 
 		// Add which for click: 1 === left; 2 === middle; 3 === right
 		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
 			return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
 		}
 
 		return event.which;
 	}
 }, jQuery.event.addProp );
 
 // Create mouseenter/leave events using mouseover/out and event-time checks
 // so that event delegation works in jQuery.
 // Do the same for pointerenter/pointerleave and pointerover/pointerout
 //
 // Support: Safari 7 only
 // Safari sends mouseenter too often; see:
 // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
 // for the description of the bug (it existed in older Chrome versions as well).
 jQuery.each( {
 	mouseenter: "mouseover",
 	mouseleave: "mouseout",
 	pointerenter: "pointerover",
 	pointerleave: "pointerout"
 }, function( orig, fix ) {
 	jQuery.event.special[ orig ] = {
 		delegateType: fix,
 		bindType: fix,
 
 		handle: function( event ) {
 			var ret,
 				target = this,
 				related = event.relatedTarget,
 				handleObj = event.handleObj;
 
 			// For mouseenter/leave call the handler if related is outside the target.
 			// NB: No relatedTarget if the mouse left/entered the browser window
 			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
 				event.type = handleObj.origType;
 				ret = handleObj.handler.apply( this, arguments );
 				event.type = fix;
 			}
 			return ret;
 		}
 	};
 } );
 
 jQuery.fn.extend( {
 
 	on: function( types, selector, data, fn ) {
 		return on( this, types, selector, data, fn );
 	},
 	one: function( types, selector, data, fn ) {
 		return on( this, types, selector, data, fn, 1 );
 	},
 	off: function( types, selector, fn ) {
 		var handleObj, type;
 		if ( types && types.preventDefault && types.handleObj ) {
 
 			// ( event )  dispatched jQuery.Event
 			handleObj = types.handleObj;
 			jQuery( types.delegateTarget ).off(
 				handleObj.namespace ?
 					handleObj.origType + "." + handleObj.namespace :
 					handleObj.origType,
 				handleObj.selector,
 				handleObj.handler
 			);
 			return this;
 		}
 		if ( typeof types === "object" ) {
 
 			// ( types-object [, selector] )
 			for ( type in types ) {
 				this.off( type, selector, types[ type ] );
 			}
 			return this;
 		}
 		if ( selector === false || typeof selector === "function" ) {
 
 			// ( types [, fn] )
 			fn = selector;
 			selector = undefined;
 		}
 		if ( fn === false ) {
 			fn = returnFalse;
 		}
 		return this.each( function() {
 			jQuery.event.remove( this, types, fn, selector );
 		} );
 	}
 } );
 
 
 var
 
 	/* eslint-disable max-len */
 
 	// See https://github.com/eslint/eslint/issues/3229
 	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
 
 	/* eslint-enable */
 
 	// Support: IE <=10 - 11, Edge 12 - 13
 	// In IE/Edge using regex groups here causes severe slowdowns.
 	// See https://connect.microsoft.com/IE/feedback/details/1736512/
 	rnoInnerhtml = /<script|<style|<link/i,
 
 	// checked="checked" or checked
 	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
 	rscriptTypeMasked = /^true\/(.*)/,
 	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
 
 function manipulationTarget( elem, content ) {
 	if ( jQuery.nodeName( elem, "table" ) &&
 		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
 
 		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
 	}
 
 	return elem;
 }
 
 // Replace/restore the type attribute of script elements for safe DOM manipulation
 function disableScript( elem ) {
 	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
 	return elem;
 }
 function restoreScript( elem ) {
 	var match = rscriptTypeMasked.exec( elem.type );
 
 	if ( match ) {
 		elem.type = match[ 1 ];
 	} else {
 		elem.removeAttribute( "type" );
 	}
 
 	return elem;
 }
 
 function cloneCopyEvent( src, dest ) {
 	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
 
 	if ( dest.nodeType !== 1 ) {
 		return;
 	}
 
 	// 1. Copy private data: events, handlers, etc.
 	if ( dataPriv.hasData( src ) ) {
 		pdataOld = dataPriv.access( src );
 		pdataCur = dataPriv.set( dest, pdataOld );
 		events = pdataOld.events;
 
 		if ( events ) {
 			delete pdataCur.handle;
 			pdataCur.events = {};
 
 			for ( type in events ) {
 				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
 					jQuery.event.add( dest, type, events[ type ][ i ] );
 				}
 			}
 		}
 	}
 
 	// 2. Copy user data
 	if ( dataUser.hasData( src ) ) {
 		udataOld = dataUser.access( src );
 		udataCur = jQuery.extend( {}, udataOld );
 
 		dataUser.set( dest, udataCur );
 	}
 }
 
 // Fix IE bugs, see support tests
 function fixInput( src, dest ) {
 	var nodeName = dest.nodeName.toLowerCase();
 
 	// Fails to persist the checked state of a cloned checkbox or radio button.
 	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
 		dest.checked = src.checked;
 
 	// Fails to return the selected option to the default selected state when cloning options
 	} else if ( nodeName === "input" || nodeName === "textarea" ) {
 		dest.defaultValue = src.defaultValue;
 	}
 }
 
 function domManip( collection, args, callback, ignored ) {
 
 	// Flatten any nested arrays
 	args = concat.apply( [], args );
 
 	var fragment, first, scripts, hasScripts, node, doc,
 		i = 0,
 		l = collection.length,
 		iNoClone = l - 1,
 		value = args[ 0 ],
 		isFunction = jQuery.isFunction( value );
 
 	// We can't cloneNode fragments that contain checked, in WebKit
 	if ( isFunction ||
 			( l > 1 && typeof value === "string" &&
 				!support.checkClone && rchecked.test( value ) ) ) {
 		return collection.each( function( index ) {
 			var self = collection.eq( index );
 			if ( isFunction ) {
 				args[ 0 ] = value.call( this, index, self.html() );
 			}
 			domManip( self, args, callback, ignored );
 		} );
 	}
 
 	if ( l ) {
 		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
 		first = fragment.firstChild;
 
 		if ( fragment.childNodes.length === 1 ) {
 			fragment = first;
 		}
 
 		// Require either new content or an interest in ignored elements to invoke the callback
 		if ( first || ignored ) {
 			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
 			hasScripts = scripts.length;
 
 			// Use the original fragment for the last item
 			// instead of the first because it can end up
 			// being emptied incorrectly in certain situations (#8070).
 			for ( ; i < l; i++ ) {
 				node = fragment;
 
 				if ( i !== iNoClone ) {
 					node = jQuery.clone( node, true, true );
 
 					// Keep references to cloned scripts for later restoration
 					if ( hasScripts ) {
 
 						// Support: Android <=4.0 only, PhantomJS 1 only
 						// push.apply(_, arraylike) throws on ancient WebKit
 						jQuery.merge( scripts, getAll( node, "script" ) );
 					}
 				}
 
 				callback.call( collection[ i ], node, i );
 			}
 
 			if ( hasScripts ) {
 				doc = scripts[ scripts.length - 1 ].ownerDocument;
 
 				// Reenable scripts
 				jQuery.map( scripts, restoreScript );
 
 				// Evaluate executable scripts on first document insertion
 				for ( i = 0; i < hasScripts; i++ ) {
 					node = scripts[ i ];
 					if ( rscriptType.test( node.type || "" ) &&
 						!dataPriv.access( node, "globalEval" ) &&
 						jQuery.contains( doc, node ) ) {
 
 						if ( node.src ) {
 
 							// Optional AJAX dependency, but won't run scripts if not present
 							if ( jQuery._evalUrl ) {
 								jQuery._evalUrl( node.src );
 							}
 						} else {
 							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
 						}
 					}
 				}
 			}
 		}
 	}
 
 	return collection;
 }
 
 function remove( elem, selector, keepData ) {
 	var node,
 		nodes = selector ? jQuery.filter( selector, elem ) : elem,
 		i = 0;
 
 	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
 		if ( !keepData && node.nodeType === 1 ) {
 			jQuery.cleanData( getAll( node ) );
 		}
 
 		if ( node.parentNode ) {
 			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
 				setGlobalEval( getAll( node, "script" ) );
 			}
 			node.parentNode.removeChild( node );
 		}
 	}
 
 	return elem;
 }
 
 jQuery.extend( {
 	htmlPrefilter: function( html ) {
 		return html.replace( rxhtmlTag, "<$1></$2>" );
 	},
 
 	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
 		var i, l, srcElements, destElements,
 			clone = elem.cloneNode( true ),
 			inPage = jQuery.contains( elem.ownerDocument, elem );
 
 		// Fix IE cloning issues
 		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
 				!jQuery.isXMLDoc( elem ) ) {
 
 			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
 			destElements = getAll( clone );
 			srcElements = getAll( elem );
 
 			for ( i = 0, l = srcElements.length; i < l; i++ ) {
 				fixInput( srcElements[ i ], destElements[ i ] );
 			}
 		}
 
 		// Copy the events from the original to the clone
 		if ( dataAndEvents ) {
 			if ( deepDataAndEvents ) {
 				srcElements = srcElements || getAll( elem );
 				destElements = destElements || getAll( clone );
 
 				for ( i = 0, l = srcElements.length; i < l; i++ ) {
 					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
 				}
 			} else {
 				cloneCopyEvent( elem, clone );
 			}
 		}
 
 		// Preserve script evaluation history
 		destElements = getAll( clone, "script" );
 		if ( destElements.length > 0 ) {
 			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
 		}
 
 		// Return the cloned set
 		return clone;
 	},
 
 	cleanData: function( elems ) {
 		var data, elem, type,
 			special = jQuery.event.special,
 			i = 0;
 
 		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
 			if ( acceptData( elem ) ) {
 				if ( ( data = elem[ dataPriv.expando ] ) ) {
 					if ( data.events ) {
 						for ( type in data.events ) {
 							if ( special[ type ] ) {
 								jQuery.event.remove( elem, type );
 
 							// This is a shortcut to avoid jQuery.event.remove's overhead
 							} else {
 								jQuery.removeEvent( elem, type, data.handle );
 							}
 						}
 					}
 
 					// Support: Chrome <=35 - 45+
 					// Assign undefined instead of using delete, see Data#remove
 					elem[ dataPriv.expando ] = undefined;
 				}
 				if ( elem[ dataUser.expando ] ) {
 
 					// Support: Chrome <=35 - 45+
 					// Assign undefined instead of using delete, see Data#remove
 					elem[ dataUser.expando ] = undefined;
 				}
 			}
 		}
 	}
 } );
 
 jQuery.fn.extend( {
 	detach: function( selector ) {
 		return remove( this, selector, true );
 	},
 
 	remove: function( selector ) {
 		return remove( this, selector );
 	},
 
 	text: function( value ) {
 		return access( this, function( value ) {
 			return value === undefined ?
 				jQuery.text( this ) :
 				this.empty().each( function() {
 					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
 						this.textContent = value;
 					}
 				} );
 		}, null, value, arguments.length );
 	},
 
 	append: function() {
 		return domManip( this, arguments, function( elem ) {
 			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
 				var target = manipulationTarget( this, elem );
 				target.appendChild( elem );
 			}
 		} );
 	},
 
 	prepend: function() {
 		return domManip( this, arguments, function( elem ) {
 			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
 				var target = manipulationTarget( this, elem );
 				target.insertBefore( elem, target.firstChild );
 			}
 		} );
 	},
 
 	before: function() {
 		return domManip( this, arguments, function( elem ) {
 			if ( this.parentNode ) {
 				this.parentNode.insertBefore( elem, this );
 			}
 		} );
 	},
 
 	after: function() {
 		return domManip( this, arguments, function( elem ) {
 			if ( this.parentNode ) {
 				this.parentNode.insertBefore( elem, this.nextSibling );
 			}
 		} );
 	},
 
 	empty: function() {
 		var elem,
 			i = 0;
 
 		for ( ; ( elem = this[ i ] ) != null; i++ ) {
 			if ( elem.nodeType === 1 ) {
 
 				// Prevent memory leaks
 				jQuery.cleanData( getAll( elem, false ) );
 
 				// Remove any remaining nodes
 				elem.textContent = "";
 			}
 		}
 
 		return this;
 	},
 
 	clone: function( dataAndEvents, deepDataAndEvents ) {
 		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
 		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
 
 		return this.map( function() {
 			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
 		} );
 	},
 
 	html: function( value ) {
 		return access( this, function( value ) {
 			var elem = this[ 0 ] || {},
 				i = 0,
 				l = this.length;
 
 			if ( value === undefined && elem.nodeType === 1 ) {
 				return elem.innerHTML;
 			}
 
 			// See if we can take a shortcut and just use innerHTML
 			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
 				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
 
 				value = jQuery.htmlPrefilter( value );
 
 				try {
 					for ( ; i < l; i++ ) {
 						elem = this[ i ] || {};
 
 						// Remove element nodes and prevent memory leaks
 						if ( elem.nodeType === 1 ) {
 							jQuery.cleanData( getAll( elem, false ) );
 							elem.innerHTML = value;
 						}
 					}
 
 					elem = 0;
 
 				// If using innerHTML throws an exception, use the fallback method
 				} catch ( e ) {}
 			}
 
 			if ( elem ) {
 				this.empty().append( value );
 			}
 		}, null, value, arguments.length );
 	},
 
 	replaceWith: function() {
 		var ignored = [];
 
 		// Make the changes, replacing each non-ignored context element with the new content
 		return domManip( this, arguments, function( elem ) {
 			var parent = this.parentNode;
 
 			if ( jQuery.inArray( this, ignored ) < 0 ) {
 				jQuery.cleanData( getAll( this ) );
 				if ( parent ) {
 					parent.replaceChild( elem, this );
 				}
 			}
 
 		// Force callback invocation
 		}, ignored );
 	}
 } );
 
 jQuery.each( {
 	appendTo: "append",
 	prependTo: "prepend",
 	insertBefore: "before",
 	insertAfter: "after",
 	replaceAll: "replaceWith"
 }, function( name, original ) {
 	jQuery.fn[ name ] = function( selector ) {
 		var elems,
 			ret = [],
 			insert = jQuery( selector ),
 			last = insert.length - 1,
 			i = 0;
 
 		for ( ; i <= last; i++ ) {
 			elems = i === last ? this : this.clone( true );
 			jQuery( insert[ i ] )[ original ]( elems );
 
 			// Support: Android <=4.0 only, PhantomJS 1 only
 			// .get() because push.apply(_, arraylike) throws on ancient WebKit
 			push.apply( ret, elems.get() );
 		}
 
 		return this.pushStack( ret );
 	};
 } );
 var rmargin = ( /^margin/ );
 
 var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
 
 var getStyles = function( elem ) {
 
 		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
 		// IE throws on elements created in popups
 		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
 		var view = elem.ownerDocument.defaultView;
 
 		if ( !view || !view.opener ) {
 			view = window;
 		}
 
 		return view.getComputedStyle( elem );
 	};
 
 
 
 ( function() {
 
 	// Executing both pixelPosition & boxSizingReliable tests require only one layout
 	// so they're executed at the same time to save the second computation.
 	function computeStyleTests() {
 
 		// This is a singleton, we need to execute it only once
 		if ( !div ) {
 			return;
 		}
 
 		div.style.cssText =
 			"box-sizing:border-box;" +
 			"position:relative;display:block;" +
 			"margin:auto;border:1px;padding:1px;" +
 			"top:1%;width:50%";
 		div.innerHTML = "";
 		documentElement.appendChild( container );
 
 		var divStyle = window.getComputedStyle( div );
 		pixelPositionVal = divStyle.top !== "1%";
 
 		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
 		reliableMarginLeftVal = divStyle.marginLeft === "2px";
 		boxSizingReliableVal = divStyle.width === "4px";
 
 		// Support: Android 4.0 - 4.3 only
 		// Some styles come back with percentage values, even though they shouldn't
 		div.style.marginRight = "50%";
 		pixelMarginRightVal = divStyle.marginRight === "4px";
 
 		documentElement.removeChild( container );
 
 		// Nullify the div so it wouldn't be stored in the memory and
 		// it will also be a sign that checks already performed
 		div = null;
 	}
 
 	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
 		container = document.createElement( "div" ),
 		div = document.createElement( "div" );
 
 	// Finish early in limited (non-browser) environments
 	if ( !div.style ) {
 		return;
 	}
 
 	// Support: IE <=9 - 11 only
 	// Style of cloned element affects source element cloned (#8908)
 	div.style.backgroundClip = "content-box";
 	div.cloneNode( true ).style.backgroundClip = "";
 	support.clearCloneStyle = div.style.backgroundClip === "content-box";
 
 	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
 		"padding:0;margin-top:1px;position:absolute";
 	container.appendChild( div );
 
 	jQuery.extend( support, {
 		pixelPosition: function() {
 			computeStyleTests();
 			return pixelPositionVal;
 		},
 		boxSizingReliable: function() {
 			computeStyleTests();
 			return boxSizingReliableVal;
 		},
 		pixelMarginRight: function() {
 			computeStyleTests();
 			return pixelMarginRightVal;
 		},
 		reliableMarginLeft: function() {
 			computeStyleTests();
 			return reliableMarginLeftVal;
 		}
 	} );
 } )();
 
 
 function curCSS( elem, name, computed ) {
 	var width, minWidth, maxWidth, ret,
 		style = elem.style;
 
 	computed = computed || getStyles( elem );
 
 	// Support: IE <=9 only
 	// getPropertyValue is only needed for .css('filter') (#12537)
 	if ( computed ) {
 		ret = computed.getPropertyValue( name ) || computed[ name ];
 
 		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
 			ret = jQuery.style( elem, name );
 		}
 
 		// A tribute to the "awesome hack by Dean Edwards"
 		// Android Browser returns percentage for some values,
 		// but width seems to be reliably pixels.
 		// This is against the CSSOM draft spec:
 		// https://drafts.csswg.org/cssom/#resolved-values
 		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
 
 			// Remember the original values
 			width = style.width;
 			minWidth = style.minWidth;
 			maxWidth = style.maxWidth;
 
 			// Put in the new values to get a computed value out
 			style.minWidth = style.maxWidth = style.width = ret;
 			ret = computed.width;
 
 			// Revert the changed values
 			style.width = width;
 			style.minWidth = minWidth;
 			style.maxWidth = maxWidth;
 		}
 	}
 
 	return ret !== undefined ?
 
 		// Support: IE <=9 - 11 only
 		// IE returns zIndex value as an integer.
 		ret + "" :
 		ret;
 }
 
 
 function addGetHookIf( conditionFn, hookFn ) {
 
 	// Define the hook, we'll check on the first run if it's really needed.
 	return {
 		get: function() {
 			if ( conditionFn() ) {
 
 				// Hook not needed (or it's not possible to use it due
 				// to missing dependency), remove it.
 				delete this.get;
 				return;
 			}
 
 			// Hook needed; redefine it so that the support test is not executed again.
 			return ( this.get = hookFn ).apply( this, arguments );
 		}
 	};
 }
 
 
 var
 
 	// Swappable if display is none or starts with table
 	// except "table", "table-cell", or "table-caption"
 	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
 	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
 	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
 	cssNormalTransform = {
 		letterSpacing: "0",
 		fontWeight: "400"
 	},
 
 	cssPrefixes = [ "Webkit", "Moz", "ms" ],
 	emptyStyle = document.createElement( "div" ).style;
 
 // Return a css property mapped to a potentially vendor prefixed property
 function vendorPropName( name ) {
 
 	// Shortcut for names that are not vendor prefixed
 	if ( name in emptyStyle ) {
 		return name;
 	}
 
 	// Check for vendor prefixed names
 	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
 		i = cssPrefixes.length;
 
 	while ( i-- ) {
 		name = cssPrefixes[ i ] + capName;
 		if ( name in emptyStyle ) {
 			return name;
 		}
 	}
 }
 
 function setPositiveNumber( elem, value, subtract ) {
 
 	// Any relative (+/-) values have already been
 	// normalized at this point
 	var matches = rcssNum.exec( value );
 	return matches ?
 
 		// Guard against undefined "subtract", e.g., when used as in cssHooks
 		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
 		value;
 }
 
 function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
 	var i = extra === ( isBorderBox ? "border" : "content" ) ?
 
 		// If we already have the right measurement, avoid augmentation
 		4 :
 
 		// Otherwise initialize for horizontal or vertical properties
 		name === "width" ? 1 : 0,
 
 		val = 0;
 
 	for ( ; i < 4; i += 2 ) {
 
 		// Both box models exclude margin, so add it if we want it
 		if ( extra === "margin" ) {
 			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
 		}
 
 		if ( isBorderBox ) {
 
 			// border-box includes padding, so remove it if we want content
 			if ( extra === "content" ) {
 				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
 			}
 
 			// At this point, extra isn't border nor margin, so remove border
 			if ( extra !== "margin" ) {
 				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
 			}
 		} else {
 
 			// At this point, extra isn't content, so add padding
 			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
 
 			// At this point, extra isn't content nor padding, so add border
 			if ( extra !== "padding" ) {
 				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
 			}
 		}
 	}
 
 	return val;
 }
 
 function getWidthOrHeight( elem, name, extra ) {
 
 	// Start with offset property, which is equivalent to the border-box value
 	var val,
 		valueIsBorderBox = true,
 		styles = getStyles( elem ),
 		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
 
 	// Support: IE <=11 only
 	// Running getBoundingClientRect on a disconnected node
 	// in IE throws an error.
 	if ( elem.getClientRects().length ) {
 		val = elem.getBoundingClientRect()[ name ];
 	}
 
 	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
 	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
 	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
 	if ( val <= 0 || val == null ) {
 
 		// Fall back to computed then uncomputed css if necessary
 		val = curCSS( elem, name, styles );
 		if ( val < 0 || val == null ) {
 			val = elem.style[ name ];
 		}
 
 		// Computed unit is not pixels. Stop here and return.
 		if ( rnumnonpx.test( val ) ) {
 			return val;
 		}
 
 		// Check for style in case a browser which returns unreliable values
 		// for getComputedStyle silently falls back to the reliable elem.style
 		valueIsBorderBox = isBorderBox &&
 			( support.boxSizingReliable() || val === elem.style[ name ] );
 
 		// Normalize "", auto, and prepare for extra
 		val = parseFloat( val ) || 0;
 	}
 
 	// Use the active box-sizing model to add/subtract irrelevant styles
 	return ( val +
 		augmentWidthOrHeight(
 			elem,
 			name,
 			extra || ( isBorderBox ? "border" : "content" ),
 			valueIsBorderBox,
 			styles
 		)
 	) + "px";
 }
 
 jQuery.extend( {
 
 	// Add in style property hooks for overriding the default
 	// behavior of getting and setting a style property
 	cssHooks: {
 		opacity: {
 			get: function( elem, computed ) {
 				if ( computed ) {
 
 					// We should always get a number back from opacity
 					var ret = curCSS( elem, "opacity" );
 					return ret === "" ? "1" : ret;
 				}
 			}
 		}
 	},
 
 	// Don't automatically add "px" to these possibly-unitless properties
 	cssNumber: {
 		"animationIterationCount": true,
 		"columnCount": true,
 		"fillOpacity": true,
 		"flexGrow": true,
 		"flexShrink": true,
 		"fontWeight": true,
 		"lineHeight": true,
 		"opacity": true,
 		"order": true,
 		"orphans": true,
 		"widows": true,
 		"zIndex": true,
 		"zoom": true
 	},
 
 	// Add in properties whose names you wish to fix before
 	// setting or getting the value
 	cssProps: {
 		"float": "cssFloat"
 	},
 
 	// Get and set the style property on a DOM Node
 	style: function( elem, name, value, extra ) {
 
 		// Don't set styles on text and comment nodes
 		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
 			return;
 		}
 
 		// Make sure that we're working with the right name
 		var ret, type, hooks,
 			origName = jQuery.camelCase( name ),
 			style = elem.style;
 
 		name = jQuery.cssProps[ origName ] ||
 			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
 
 		// Gets hook for the prefixed version, then unprefixed version
 		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
 
 		// Check if we're setting a value
 		if ( value !== undefined ) {
 			type = typeof value;
 
 			// Convert "+=" or "-=" to relative numbers (#7345)
 			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
 				value = adjustCSS( elem, name, ret );
 
 				// Fixes bug #9237
 				type = "number";
 			}
 
 			// Make sure that null and NaN values aren't set (#7116)
 			if ( value == null || value !== value ) {
 				return;
 			}
 
 			// If a number was passed in, add the unit (except for certain CSS properties)
 			if ( type === "number" ) {
 				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
 			}
 
 			// background-* props affect original clone's values
 			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
 				style[ name ] = "inherit";
 			}
 
 			// If a hook was provided, use that value, otherwise just set the specified value
 			if ( !hooks || !( "set" in hooks ) ||
 				( value = hooks.set( elem, value, extra ) ) !== undefined ) {
 
 				style[ name ] = value;
 			}
 
 		} else {
 
 			// If a hook was provided get the non-computed value from there
 			if ( hooks && "get" in hooks &&
 				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
 
 				return ret;
 			}
 
 			// Otherwise just get the value from the style object
 			return style[ name ];
 		}
 	},
 
 	css: function( elem, name, extra, styles ) {
 		var val, num, hooks,
 			origName = jQuery.camelCase( name );
 
 		// Make sure that we're working with the right name
 		name = jQuery.cssProps[ origName ] ||
 			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
 
 		// Try prefixed name followed by the unprefixed name
 		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
 
 		// If a hook was provided get the computed value from there
 		if ( hooks && "get" in hooks ) {
 			val = hooks.get( elem, true, extra );
 		}
 
 		// Otherwise, if a way to get the computed value exists, use that
 		if ( val === undefined ) {
 			val = curCSS( elem, name, styles );
 		}
 
 		// Convert "normal" to computed value
 		if ( val === "normal" && name in cssNormalTransform ) {
 			val = cssNormalTransform[ name ];
 		}
 
 		// Make numeric if forced or a qualifier was provided and val looks numeric
 		if ( extra === "" || extra ) {
 			num = parseFloat( val );
 			return extra === true || isFinite( num ) ? num || 0 : val;
 		}
 		return val;
 	}
 } );
 
 jQuery.each( [ "height", "width" ], function( i, name ) {
 	jQuery.cssHooks[ name ] = {
 		get: function( elem, computed, extra ) {
 			if ( computed ) {
 
 				// Certain elements can have dimension info if we invisibly show them
 				// but it must have a current display style that would benefit
 				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
 
 					// Support: Safari 8+
 					// Table columns in Safari have non-zero offsetWidth & zero
 					// getBoundingClientRect().width unless display is changed.
 					// Support: IE <=11 only
 					// Running getBoundingClientRect on a disconnected node
 					// in IE throws an error.
 					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
 						swap( elem, cssShow, function() {
 							return getWidthOrHeight( elem, name, extra );
 						} ) :
 						getWidthOrHeight( elem, name, extra );
 			}
 		},
 
 		set: function( elem, value, extra ) {
 			var matches,
 				styles = extra && getStyles( elem ),
 				subtract = extra && augmentWidthOrHeight(
 					elem,
 					name,
 					extra,
 					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
 					styles
 				);
 
 			// Convert to pixels if value adjustment is needed
 			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
 				( matches[ 3 ] || "px" ) !== "px" ) {
 
 				elem.style[ name ] = value;
 				value = jQuery.css( elem, name );
 			}
 
 			return setPositiveNumber( elem, value, subtract );
 		}
 	};
 } );
 
 jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
 	function( elem, computed ) {
 		if ( computed ) {
 			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
 				elem.getBoundingClientRect().left -
 					swap( elem, { marginLeft: 0 }, function() {
 						return elem.getBoundingClientRect().left;
 					} )
 				) + "px";
 		}
 	}
 );
 
 // These hooks are used by animate to expand properties
 jQuery.each( {
 	margin: "",
 	padding: "",
 	border: "Width"
 }, function( prefix, suffix ) {
 	jQuery.cssHooks[ prefix + suffix ] = {
 		expand: function( value ) {
 			var i = 0,
 				expanded = {},
 
 				// Assumes a single number if not a string
 				parts = typeof value === "string" ? value.split( " " ) : [ value ];
 
 			for ( ; i < 4; i++ ) {
 				expanded[ prefix + cssExpand[ i ] + suffix ] =
 					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
 			}
 
 			return expanded;
 		}
 	};
 
 	if ( !rmargin.test( prefix ) ) {
 		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
 	}
 } );
 
 jQuery.fn.extend( {
 	css: function( name, value ) {
 		return access( this, function( elem, name, value ) {
 			var styles, len,
 				map = {},
 				i = 0;
 
 			if ( jQuery.isArray( name ) ) {
 				styles = getStyles( elem );
 				len = name.length;
 
 				for ( ; i < len; i++ ) {
 					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
 				}
 
 				return map;
 			}
 
 			return value !== undefined ?
 				jQuery.style( elem, name, value ) :
 				jQuery.css( elem, name );
 		}, name, value, arguments.length > 1 );
 	}
 } );
 
 
 function Tween( elem, options, prop, end, easing ) {
 	return new Tween.prototype.init( elem, options, prop, end, easing );
 }
 jQuery.Tween = Tween;
 
 Tween.prototype = {
 	constructor: Tween,
 	init: function( elem, options, prop, end, easing, unit ) {
 		this.elem = elem;
 		this.prop = prop;
 		this.easing = easing || jQuery.easing._default;
 		this.options = options;
 		this.start = this.now = this.cur();
 		this.end = end;
 		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
 	},
 	cur: function() {
 		var hooks = Tween.propHooks[ this.prop ];
 
 		return hooks && hooks.get ?
 			hooks.get( this ) :
 			Tween.propHooks._default.get( this );
 	},
 	run: function( percent ) {
 		var eased,
 			hooks = Tween.propHooks[ this.prop ];
 
 		if ( this.options.duration ) {
 			this.pos = eased = jQuery.easing[ this.easing ](
 				percent, this.options.duration * percent, 0, 1, this.options.duration
 			);
 		} else {
 			this.pos = eased = percent;
 		}
 		this.now = ( this.end - this.start ) * eased + this.start;
 
 		if ( this.options.step ) {
 			this.options.step.call( this.elem, this.now, this );
 		}
 
 		if ( hooks && hooks.set ) {
 			hooks.set( this );
 		} else {
 			Tween.propHooks._default.set( this );
 		}
 		return this;
 	}
 };
 
 Tween.prototype.init.prototype = Tween.prototype;
 
 Tween.propHooks = {
 	_default: {
 		get: function( tween ) {
 			var result;
 
 			// Use a property on the element directly when it is not a DOM element,
 			// or when there is no matching style property that exists.
 			if ( tween.elem.nodeType !== 1 ||
 				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
 				return tween.elem[ tween.prop ];
 			}
 
 			// Passing an empty string as a 3rd parameter to .css will automatically
 			// attempt a parseFloat and fallback to a string if the parse fails.
 			// Simple values such as "10px" are parsed to Float;
 			// complex values such as "rotate(1rad)" are returned as-is.
 			result = jQuery.css( tween.elem, tween.prop, "" );
 
 			// Empty strings, null, undefined and "auto" are converted to 0.
 			return !result || result === "auto" ? 0 : result;
 		},
 		set: function( tween ) {
 
 			// Use step hook for back compat.
 			// Use cssHook if its there.
 			// Use .style if available and use plain properties where available.
 			if ( jQuery.fx.step[ tween.prop ] ) {
 				jQuery.fx.step[ tween.prop ]( tween );
 			} else if ( tween.elem.nodeType === 1 &&
 				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
 					jQuery.cssHooks[ tween.prop ] ) ) {
 				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
 			} else {
 				tween.elem[ tween.prop ] = tween.now;
 			}
 		}
 	}
 };
 
 // Support: IE <=9 only
 // Panic based approach to setting things on disconnected nodes
 Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
 	set: function( tween ) {
 		if ( tween.elem.nodeType && tween.elem.parentNode ) {
 			tween.elem[ tween.prop ] = tween.now;
 		}
 	}
 };
 
 jQuery.easing = {
 	linear: function( p ) {
 		return p;
 	},
 	swing: function( p ) {
 		return 0.5 - Math.cos( p * Math.PI ) / 2;
 	},
 	_default: "swing"
 };
 
 jQuery.fx = Tween.prototype.init;
 
 // Back compat <1.8 extension point
 jQuery.fx.step = {};
 
 
 
 
 var
 	fxNow, timerId,
 	rfxtypes = /^(?:toggle|show|hide)$/,
 	rrun = /queueHooks$/;
 
 function raf() {
 	if ( timerId ) {
 		window.requestAnimationFrame( raf );
 		jQuery.fx.tick();
 	}
 }
 
 // Animations created synchronously will run synchronously
 function createFxNow() {
 	window.setTimeout( function() {
 		fxNow = undefined;
 	} );
 	return ( fxNow = jQuery.now() );
 }
 
 // Generate parameters to create a standard animation
 function genFx( type, includeWidth ) {
 	var which,
 		i = 0,
 		attrs = { height: type };
 
 	// If we include width, step value is 1 to do all cssExpand values,
 	// otherwise step value is 2 to skip over Left and Right
 	includeWidth = includeWidth ? 1 : 0;
 	for ( ; i < 4; i += 2 - includeWidth ) {
 		which = cssExpand[ i ];
 		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
 	}
 
 	if ( includeWidth ) {
 		attrs.opacity = attrs.width = type;
 	}
 
 	return attrs;
 }
 
 function createTween( value, prop, animation ) {
 	var tween,
 		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
 		index = 0,
 		length = collection.length;
 	for ( ; index < length; index++ ) {
 		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
 
 			// We're done with this property
 			return tween;
 		}
 	}
 }
 
 function defaultPrefilter( elem, props, opts ) {
 	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
 		isBox = "width" in props || "height" in props,
 		anim = this,
 		orig = {},
 		style = elem.style,
 		hidden = elem.nodeType && isHiddenWithinTree( elem ),
 		dataShow = dataPriv.get( elem, "fxshow" );
 
 	// Queue-skipping animations hijack the fx hooks
 	if ( !opts.queue ) {
 		hooks = jQuery._queueHooks( elem, "fx" );
 		if ( hooks.unqueued == null ) {
 			hooks.unqueued = 0;
 			oldfire = hooks.empty.fire;
 			hooks.empty.fire = function() {
 				if ( !hooks.unqueued ) {
 					oldfire();
 				}
 			};
 		}
 		hooks.unqueued++;
 
 		anim.always( function() {
 
 			// Ensure the complete handler is called before this completes
 			anim.always( function() {
 				hooks.unqueued--;
 				if ( !jQuery.queue( elem, "fx" ).length ) {
 					hooks.empty.fire();
 				}
 			} );
 		} );
 	}
 
 	// Detect show/hide animations
 	for ( prop in props ) {
 		value = props[ prop ];
 		if ( rfxtypes.test( value ) ) {
 			delete props[ prop ];
 			toggle = toggle || value === "toggle";
 			if ( value === ( hidden ? "hide" : "show" ) ) {
 
 				// Pretend to be hidden if this is a "show" and
 				// there is still data from a stopped show/hide
 				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
 					hidden = true;
 
 				// Ignore all other no-op show/hide data
 				} else {
 					continue;
 				}
 			}
 			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
 		}
 	}
 
 	// Bail out if this is a no-op like .hide().hide()
 	propTween = !jQuery.isEmptyObject( props );
 	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
 		return;
 	}
 
 	// Restrict "overflow" and "display" styles during box animations
 	if ( isBox && elem.nodeType === 1 ) {
 
 		// Support: IE <=9 - 11, Edge 12 - 13
 		// Record all 3 overflow attributes because IE does not infer the shorthand
 		// from identically-valued overflowX and overflowY
 		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
 
 		// Identify a display type, preferring old show/hide data over the CSS cascade
 		restoreDisplay = dataShow && dataShow.display;
 		if ( restoreDisplay == null ) {
 			restoreDisplay = dataPriv.get( elem, "display" );
 		}
 		display = jQuery.css( elem, "display" );
 		if ( display === "none" ) {
 			if ( restoreDisplay ) {
 				display = restoreDisplay;
 			} else {
 
 				// Get nonempty value(s) by temporarily forcing visibility
 				showHide( [ elem ], true );
 				restoreDisplay = elem.style.display || restoreDisplay;
 				display = jQuery.css( elem, "display" );
 				showHide( [ elem ] );
 			}
 		}
 
 		// Animate inline elements as inline-block
 		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
 			if ( jQuery.css( elem, "float" ) === "none" ) {
 
 				// Restore the original display value at the end of pure show/hide animations
 				if ( !propTween ) {
 					anim.done( function() {
 						style.display = restoreDisplay;
 					} );
 					if ( restoreDisplay == null ) {
 						display = style.display;
 						restoreDisplay = display === "none" ? "" : display;
 					}
 				}
 				style.display = "inline-block";
 			}
 		}
 	}
 
 	if ( opts.overflow ) {
 		style.overflow = "hidden";
 		anim.always( function() {
 			style.overflow = opts.overflow[ 0 ];
 			style.overflowX = opts.overflow[ 1 ];
 			style.overflowY = opts.overflow[ 2 ];
 		} );
 	}
 
 	// Implement show/hide animations
 	propTween = false;
 	for ( prop in orig ) {
 
 		// General show/hide setup for this element animation
 		if ( !propTween ) {
 			if ( dataShow ) {
 				if ( "hidden" in dataShow ) {
 					hidden = dataShow.hidden;
 				}
 			} else {
 				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
 			}
 
 			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
 			if ( toggle ) {
 				dataShow.hidden = !hidden;
 			}
 
 			// Show elements before animating them
 			if ( hidden ) {
 				showHide( [ elem ], true );
 			}
 
 			/* eslint-disable no-loop-func */
 
 			anim.done( function() {
 
 			/* eslint-enable no-loop-func */
 
 				// The final step of a "hide" animation is actually hiding the element
 				if ( !hidden ) {
 					showHide( [ elem ] );
 				}
 				dataPriv.remove( elem, "fxshow" );
 				for ( prop in orig ) {
 					jQuery.style( elem, prop, orig[ prop ] );
 				}
 			} );
 		}
 
 		// Per-property setup
 		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
 		if ( !( prop in dataShow ) ) {
 			dataShow[ prop ] = propTween.start;
 			if ( hidden ) {
 				propTween.end = propTween.start;
 				propTween.start = 0;
 			}
 		}
 	}
 }
 
 function propFilter( props, specialEasing ) {
 	var index, name, easing, value, hooks;
 
 	// camelCase, specialEasing and expand cssHook pass
 	for ( index in props ) {
 		name = jQuery.camelCase( index );
 		easing = specialEasing[ name ];
 		value = props[ index ];
 		if ( jQuery.isArray( value ) ) {
 			easing = value[ 1 ];
 			value = props[ index ] = value[ 0 ];
 		}
 
 		if ( index !== name ) {
 			props[ name ] = value;
 			delete props[ index ];
 		}
 
 		hooks = jQuery.cssHooks[ name ];
 		if ( hooks && "expand" in hooks ) {
 			value = hooks.expand( value );
 			delete props[ name ];
 
 			// Not quite $.extend, this won't overwrite existing keys.
 			// Reusing 'index' because we have the correct "name"
 			for ( index in value ) {
 				if ( !( index in props ) ) {
 					props[ index ] = value[ index ];
 					specialEasing[ index ] = easing;
 				}
 			}
 		} else {
 			specialEasing[ name ] = easing;
 		}
 	}
 }
 
 function Animation( elem, properties, options ) {
 	var result,
 		stopped,
 		index = 0,
 		length = Animation.prefilters.length,
 		deferred = jQuery.Deferred().always( function() {
 
 			// Don't match elem in the :animated selector
 			delete tick.elem;
 		} ),
 		tick = function() {
 			if ( stopped ) {
 				return false;
 			}
 			var currentTime = fxNow || createFxNow(),
 				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
 
 				// Support: Android 2.3 only
 				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
 				temp = remaining / animation.duration || 0,
 				percent = 1 - temp,
 				index = 0,
 				length = animation.tweens.length;
 
 			for ( ; index < length; index++ ) {
 				animation.tweens[ index ].run( percent );
 			}
 
 			deferred.notifyWith( elem, [ animation, percent, remaining ] );
 
 			if ( percent < 1 && length ) {
 				return remaining;
 			} else {
 				deferred.resolveWith( elem, [ animation ] );
 				return false;
 			}
 		},
 		animation = deferred.promise( {
 			elem: elem,
 			props: jQuery.extend( {}, properties ),
 			opts: jQuery.extend( true, {
 				specialEasing: {},
 				easing: jQuery.easing._default
 			}, options ),
 			originalProperties: properties,
 			originalOptions: options,
 			startTime: fxNow || createFxNow(),
 			duration: options.duration,
 			tweens: [],
 			createTween: function( prop, end ) {
 				var tween = jQuery.Tween( elem, animation.opts, prop, end,
 						animation.opts.specialEasing[ prop ] || animation.opts.easing );
 				animation.tweens.push( tween );
 				return tween;
 			},
 			stop: function( gotoEnd ) {
 				var index = 0,
 
 					// If we are going to the end, we want to run all the tweens
 					// otherwise we skip this part
 					length = gotoEnd ? animation.tweens.length : 0;
 				if ( stopped ) {
 					return this;
 				}
 				stopped = true;
 				for ( ; index < length; index++ ) {
 					animation.tweens[ index ].run( 1 );
 				}
 
 				// Resolve when we played the last frame; otherwise, reject
 				if ( gotoEnd ) {
 					deferred.notifyWith( elem, [ animation, 1, 0 ] );
 					deferred.resolveWith( elem, [ animation, gotoEnd ] );
 				} else {
 					deferred.rejectWith( elem, [ animation, gotoEnd ] );
 				}
 				return this;
 			}
 		} ),
 		props = animation.props;
 
 	propFilter( props, animation.opts.specialEasing );
 
 	for ( ; index < length; index++ ) {
 		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
 		if ( result ) {
 			if ( jQuery.isFunction( result.stop ) ) {
 				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
 					jQuery.proxy( result.stop, result );
 			}
 			return result;
 		}
 	}
 
 	jQuery.map( props, createTween, animation );
 
 	if ( jQuery.isFunction( animation.opts.start ) ) {
 		animation.opts.start.call( elem, animation );
 	}
 
 	jQuery.fx.timer(
 		jQuery.extend( tick, {
 			elem: elem,
 			anim: animation,
 			queue: animation.opts.queue
 		} )
 	);
 
 	// attach callbacks from options
 	return animation.progress( animation.opts.progress )
 		.done( animation.opts.done, animation.opts.complete )
 		.fail( animation.opts.fail )
 		.always( animation.opts.always );
 }
 
 jQuery.Animation = jQuery.extend( Animation, {
 
 	tweeners: {
 		"*": [ function( prop, value ) {
 			var tween = this.createTween( prop, value );
 			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
 			return tween;
 		} ]
 	},
 
 	tweener: function( props, callback ) {
 		if ( jQuery.isFunction( props ) ) {
 			callback = props;
 			props = [ "*" ];
 		} else {
 			props = props.match( rnotwhite );
 		}
 
 		var prop,
 			index = 0,
 			length = props.length;
 
 		for ( ; index < length; index++ ) {
 			prop = props[ index ];
 			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
 			Animation.tweeners[ prop ].unshift( callback );
 		}
 	},
 
 	prefilters: [ defaultPrefilter ],
 
 	prefilter: function( callback, prepend ) {
 		if ( prepend ) {
 			Animation.prefilters.unshift( callback );
 		} else {
 			Animation.prefilters.push( callback );
 		}
 	}
 } );
 
 jQuery.speed = function( speed, easing, fn ) {
 	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
 		complete: fn || !fn && easing ||
 			jQuery.isFunction( speed ) && speed,
 		duration: speed,
 		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
 	};
 
 	// Go to the end state if fx are off or if document is hidden
 	if ( jQuery.fx.off || document.hidden ) {
 		opt.duration = 0;
 
 	} else {
 		opt.duration = typeof opt.duration === "number" ?
 			opt.duration : opt.duration in jQuery.fx.speeds ?
 				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
 	}
 
 	// Normalize opt.queue - true/undefined/null -> "fx"
 	if ( opt.queue == null || opt.queue === true ) {
 		opt.queue = "fx";
 	}
 
 	// Queueing
 	opt.old = opt.complete;
 
 	opt.complete = function() {
 		if ( jQuery.isFunction( opt.old ) ) {
 			opt.old.call( this );
 		}
 
 		if ( opt.queue ) {
 			jQuery.dequeue( this, opt.queue );
 		}
 	};
 
 	return opt;
 };
 
 jQuery.fn.extend( {
 	fadeTo: function( speed, to, easing, callback ) {
 
 		// Show any hidden elements after setting opacity to 0
 		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
 
 			// Animate to the value specified
 			.end().animate( { opacity: to }, speed, easing, callback );
 	},
 	animate: function( prop, speed, easing, callback ) {
 		var empty = jQuery.isEmptyObject( prop ),
 			optall = jQuery.speed( speed, easing, callback ),
 			doAnimation = function() {
 
 				// Operate on a copy of prop so per-property easing won't be lost
 				var anim = Animation( this, jQuery.extend( {}, prop ), optall );
 
 				// Empty animations, or finishing resolves immediately
 				if ( empty || dataPriv.get( this, "finish" ) ) {
 					anim.stop( true );
 				}
 			};
 			doAnimation.finish = doAnimation;
 
 		return empty || optall.queue === false ?
 			this.each( doAnimation ) :
 			this.queue( optall.queue, doAnimation );
 	},
 	stop: function( type, clearQueue, gotoEnd ) {
 		var stopQueue = function( hooks ) {
 			var stop = hooks.stop;
 			delete hooks.stop;
 			stop( gotoEnd );
 		};
 
 		if ( typeof type !== "string" ) {
 			gotoEnd = clearQueue;
 			clearQueue = type;
 			type = undefined;
 		}
 		if ( clearQueue && type !== false ) {
 			this.queue( type || "fx", [] );
 		}
 
 		return this.each( function() {
 			var dequeue = true,
 				index = type != null && type + "queueHooks",
 				timers = jQuery.timers,
 				data = dataPriv.get( this );
 
 			if ( index ) {
 				if ( data[ index ] && data[ index ].stop ) {
 					stopQueue( data[ index ] );
 				}
 			} else {
 				for ( index in data ) {
 					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
 						stopQueue( data[ index ] );
 					}
 				}
 			}
 
 			for ( index = timers.length; index--; ) {
 				if ( timers[ index ].elem === this &&
 					( type == null || timers[ index ].queue === type ) ) {
 
 					timers[ index ].anim.stop( gotoEnd );
 					dequeue = false;
 					timers.splice( index, 1 );
 				}
 			}
 
 			// Start the next in the queue if the last step wasn't forced.
 			// Timers currently will call their complete callbacks, which
 			// will dequeue but only if they were gotoEnd.
 			if ( dequeue || !gotoEnd ) {
 				jQuery.dequeue( this, type );
 			}
 		} );
 	},
 	finish: function( type ) {
 		if ( type !== false ) {
 			type = type || "fx";
 		}
 		return this.each( function() {
 			var index,
 				data = dataPriv.get( this ),
 				queue = data[ type + "queue" ],
 				hooks = data[ type + "queueHooks" ],
 				timers = jQuery.timers,
 				length = queue ? queue.length : 0;
 
 			// Enable finishing flag on private data
 			data.finish = true;
 
 			// Empty the queue first
 			jQuery.queue( this, type, [] );
 
 			if ( hooks && hooks.stop ) {
 				hooks.stop.call( this, true );
 			}
 
 			// Look for any active animations, and finish them
 			for ( index = timers.length; index--; ) {
 				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
 					timers[ index ].anim.stop( true );
 					timers.splice( index, 1 );
 				}
 			}
 
 			// Look for any animations in the old queue and finish them
 			for ( index = 0; index < length; index++ ) {
 				if ( queue[ index ] && queue[ index ].finish ) {
 					queue[ index ].finish.call( this );
 				}
 			}
 
 			// Turn off finishing flag
 			delete data.finish;
 		} );
 	}
 } );
 
 jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
 	var cssFn = jQuery.fn[ name ];
 	jQuery.fn[ name ] = function( speed, easing, callback ) {
 		return speed == null || typeof speed === "boolean" ?
 			cssFn.apply( this, arguments ) :
 			this.animate( genFx( name, true ), speed, easing, callback );
 	};
 } );
 
 // Generate shortcuts for custom animations
 jQuery.each( {
 	slideDown: genFx( "show" ),
 	slideUp: genFx( "hide" ),
 	slideToggle: genFx( "toggle" ),
 	fadeIn: { opacity: "show" },
 	fadeOut: { opacity: "hide" },
 	fadeToggle: { opacity: "toggle" }
 }, function( name, props ) {
 	jQuery.fn[ name ] = function( speed, easing, callback ) {
 		return this.animate( props, speed, easing, callback );
 	};
 } );
 
 jQuery.timers = [];
 jQuery.fx.tick = function() {
 	var timer,
 		i = 0,
 		timers = jQuery.timers;
 
 	fxNow = jQuery.now();
 
 	for ( ; i < timers.length; i++ ) {
 		timer = timers[ i ];
 
 		// Checks the timer has not already been removed
 		if ( !timer() && timers[ i ] === timer ) {
 			timers.splice( i--, 1 );
 		}
 	}
 
 	if ( !timers.length ) {
 		jQuery.fx.stop();
 	}
 	fxNow = undefined;
 };
 
 jQuery.fx.timer = function( timer ) {
 	jQuery.timers.push( timer );
 	if ( timer() ) {
 		jQuery.fx.start();
 	} else {
 		jQuery.timers.pop();
 	}
 };
 
 jQuery.fx.interval = 13;
 jQuery.fx.start = function() {
 	if ( !timerId ) {
 		timerId = window.requestAnimationFrame ?
 			window.requestAnimationFrame( raf ) :
 			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
 	}
 };
 
 jQuery.fx.stop = function() {
 	if ( window.cancelAnimationFrame ) {
 		window.cancelAnimationFrame( timerId );
 	} else {
 		window.clearInterval( timerId );
 	}
 
 	timerId = null;
 };
 
 jQuery.fx.speeds = {
 	slow: 600,
 	fast: 200,
 
 	// Default speed
 	_default: 400
 };
 
 
 // Based off of the plugin by Clint Helfers, with permission.
 // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
 jQuery.fn.delay = function( time, type ) {
 	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
 	type = type || "fx";
 
 	return this.queue( type, function( next, hooks ) {
 		var timeout = window.setTimeout( next, time );
 		hooks.stop = function() {
 			window.clearTimeout( timeout );
 		};
 	} );
 };
 
 
 ( function() {
 	var input = document.createElement( "input" ),
 		select = document.createElement( "select" ),
 		opt = select.appendChild( document.createElement( "option" ) );
 
 	input.type = "checkbox";
 
 	// Support: Android <=4.3 only
 	// Default value for a checkbox should be "on"
 	support.checkOn = input.value !== "";
 
 	// Support: IE <=11 only
 	// Must access selectedIndex to make default options select
 	support.optSelected = opt.selected;
 
 	// Support: IE <=11 only
 	// An input loses its value after becoming a radio
 	input = document.createElement( "input" );
 	input.value = "t";
 	input.type = "radio";
 	support.radioValue = input.value === "t";
 } )();
 
 
 var boolHook,
 	attrHandle = jQuery.expr.attrHandle;
 
 jQuery.fn.extend( {
 	attr: function( name, value ) {
 		return access( this, jQuery.attr, name, value, arguments.length > 1 );
 	},
 
 	removeAttr: function( name ) {
 		return this.each( function() {
 			jQuery.removeAttr( this, name );
 		} );
 	}
 } );
 
 jQuery.extend( {
 	attr: function( elem, name, value ) {
 		var ret, hooks,
 			nType = elem.nodeType;
 
 		// Don't get/set attributes on text, comment and attribute nodes
 		if ( nType === 3 || nType === 8 || nType === 2 ) {
 			return;
 		}
 
 		// Fallback to prop when attributes are not supported
 		if ( typeof elem.getAttribute === "undefined" ) {
 			return jQuery.prop( elem, name, value );
 		}
 
 		// Attribute hooks are determined by the lowercase version
 		// Grab necessary hook if one is defined
 		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
 			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
 				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
 		}
 
 		if ( value !== undefined ) {
 			if ( value === null ) {
 				jQuery.removeAttr( elem, name );
 				return;
 			}
 
 			if ( hooks && "set" in hooks &&
 				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
 				return ret;
 			}
 
 			elem.setAttribute( name, value + "" );
 			return value;
 		}
 
 		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
 			return ret;
 		}
 
 		ret = jQuery.find.attr( elem, name );
 
 		// Non-existent attributes return null, we normalize to undefined
 		return ret == null ? undefined : ret;
 	},
 
 	attrHooks: {
 		type: {
 			set: function( elem, value ) {
 				if ( !support.radioValue && value === "radio" &&
 					jQuery.nodeName( elem, "input" ) ) {
 					var val = elem.value;
 					elem.setAttribute( "type", value );
 					if ( val ) {
 						elem.value = val;
 					}
 					return value;
 				}
 			}
 		}
 	},
 
 	removeAttr: function( elem, value ) {
 		var name,
 			i = 0,
 			attrNames = value && value.match( rnotwhite );
 
 		if ( attrNames && elem.nodeType === 1 ) {
 			while ( ( name = attrNames[ i++ ] ) ) {
 				elem.removeAttribute( name );
 			}
 		}
 	}
 } );
 
 // Hooks for boolean attributes
 boolHook = {
 	set: function( elem, value, name ) {
 		if ( value === false ) {
 
 			// Remove boolean attributes when set to false
 			jQuery.removeAttr( elem, name );
 		} else {
 			elem.setAttribute( name, name );
 		}
 		return name;
 	}
 };
 
 jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
 	var getter = attrHandle[ name ] || jQuery.find.attr;
 
 	attrHandle[ name ] = function( elem, name, isXML ) {
 		var ret, handle,
 			lowercaseName = name.toLowerCase();
 
 		if ( !isXML ) {
 
 			// Avoid an infinite loop by temporarily removing this function from the getter
 			handle = attrHandle[ lowercaseName ];
 			attrHandle[ lowercaseName ] = ret;
 			ret = getter( elem, name, isXML ) != null ?
 				lowercaseName :
 				null;
 			attrHandle[ lowercaseName ] = handle;
 		}
 		return ret;
 	};
 } );
 
 
 
 
 var rfocusable = /^(?:input|select|textarea|button)$/i,
 	rclickable = /^(?:a|area)$/i;
 
 jQuery.fn.extend( {
 	prop: function( name, value ) {
 		return access( this, jQuery.prop, name, value, arguments.length > 1 );
 	},
 
 	removeProp: function( name ) {
 		return this.each( function() {
 			delete this[ jQuery.propFix[ name ] || name ];
 		} );
 	}
 } );
 
 jQuery.extend( {
 	prop: function( elem, name, value ) {
 		var ret, hooks,
 			nType = elem.nodeType;
 
 		// Don't get/set properties on text, comment and attribute nodes
 		if ( nType === 3 || nType === 8 || nType === 2 ) {
 			return;
 		}
 
 		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
 
 			// Fix name and attach hooks
 			name = jQuery.propFix[ name ] || name;
 			hooks = jQuery.propHooks[ name ];
 		}
 
 		if ( value !== undefined ) {
 			if ( hooks && "set" in hooks &&
 				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
 				return ret;
 			}
 
 			return ( elem[ name ] = value );
 		}
 
 		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
 			return ret;
 		}
 
 		return elem[ name ];
 	},
 
 	propHooks: {
 		tabIndex: {
 			get: function( elem ) {
 
 				// Support: IE <=9 - 11 only
 				// elem.tabIndex doesn't always return the
 				// correct value when it hasn't been explicitly set
 				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
 				// Use proper attribute retrieval(#12072)
 				var tabindex = jQuery.find.attr( elem, "tabindex" );
 
 				return tabindex ?
 					parseInt( tabindex, 10 ) :
 					rfocusable.test( elem.nodeName ) ||
 						rclickable.test( elem.nodeName ) && elem.href ?
 							0 :
 							-1;
 			}
 		}
 	},
 
 	propFix: {
 		"for": "htmlFor",
 		"class": "className"
 	}
 } );
 
 // Support: IE <=11 only
 // Accessing the selectedIndex property
 // forces the browser to respect setting selected
 // on the option
 // The getter ensures a default option is selected
 // when in an optgroup
 if ( !support.optSelected ) {
 	jQuery.propHooks.selected = {
 		get: function( elem ) {
 			var parent = elem.parentNode;
 			if ( parent && parent.parentNode ) {
 				parent.parentNode.selectedIndex;
 			}
 			return null;
 		},
 		set: function( elem ) {
 			var parent = elem.parentNode;
 			if ( parent ) {
 				parent.selectedIndex;
 
 				if ( parent.parentNode ) {
 					parent.parentNode.selectedIndex;
 				}
 			}
 		}
 	};
 }
 
 jQuery.each( [
 	"tabIndex",
 	"readOnly",
 	"maxLength",
 	"cellSpacing",
 	"cellPadding",
 	"rowSpan",
 	"colSpan",
 	"useMap",
 	"frameBorder",
 	"contentEditable"
 ], function() {
 	jQuery.propFix[ this.toLowerCase() ] = this;
 } );
 
 
 
 
 var rclass = /[\t\r\n\f]/g;
 
 function getClass( elem ) {
 	return elem.getAttribute && elem.getAttribute( "class" ) || "";
 }
 
 jQuery.fn.extend( {
 	addClass: function( value ) {
 		var classes, elem, cur, curValue, clazz, j, finalValue,
 			i = 0;
 
 		if ( jQuery.isFunction( value ) ) {
 			return this.each( function( j ) {
 				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
 			} );
 		}
 
 		if ( typeof value === "string" && value ) {
 			classes = value.match( rnotwhite ) || [];
 
 			while ( ( elem = this[ i++ ] ) ) {
 				curValue = getClass( elem );
 				cur = elem.nodeType === 1 &&
 					( " " + curValue + " " ).replace( rclass, " " );
 
 				if ( cur ) {
 					j = 0;
 					while ( ( clazz = classes[ j++ ] ) ) {
 						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
 							cur += clazz + " ";
 						}
 					}
 
 					// Only assign if different to avoid unneeded rendering.
 					finalValue = jQuery.trim( cur );
 					if ( curValue !== finalValue ) {
 						elem.setAttribute( "class", finalValue );
 					}
 				}
 			}
 		}
 
 		return this;
 	},
 
 	removeClass: function( value ) {
 		var classes, elem, cur, curValue, clazz, j, finalValue,
 			i = 0;
 
 		if ( jQuery.isFunction( value ) ) {
 			return this.each( function( j ) {
 				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
 			} );
 		}
 
 		if ( !arguments.length ) {
 			return this.attr( "class", "" );
 		}
 
 		if ( typeof value === "string" && value ) {
 			classes = value.match( rnotwhite ) || [];
 
 			while ( ( elem = this[ i++ ] ) ) {
 				curValue = getClass( elem );
 
 				// This expression is here for better compressibility (see addClass)
 				cur = elem.nodeType === 1 &&
 					( " " + curValue + " " ).replace( rclass, " " );
 
 				if ( cur ) {
 					j = 0;
 					while ( ( clazz = classes[ j++ ] ) ) {
 
 						// Remove *all* instances
 						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
 							cur = cur.replace( " " + clazz + " ", " " );
 						}
 					}
 
 					// Only assign if different to avoid unneeded rendering.
 					finalValue = jQuery.trim( cur );
 					if ( curValue !== finalValue ) {
 						elem.setAttribute( "class", finalValue );
 					}
 				}
 			}
 		}
 
 		return this;
 	},
 
 	toggleClass: function( value, stateVal ) {
 		var type = typeof value;
 
 		if ( typeof stateVal === "boolean" && type === "string" ) {
 			return stateVal ? this.addClass( value ) : this.removeClass( value );
 		}
 
 		if ( jQuery.isFunction( value ) ) {
 			return this.each( function( i ) {
 				jQuery( this ).toggleClass(
 					value.call( this, i, getClass( this ), stateVal ),
 					stateVal
 				);
 			} );
 		}
 
 		return this.each( function() {
 			var className, i, self, classNames;
 
 			if ( type === "string" ) {
 
 				// Toggle individual class names
 				i = 0;
 				self = jQuery( this );
 				classNames = value.match( rnotwhite ) || [];
 
 				while ( ( className = classNames[ i++ ] ) ) {
 
 					// Check each className given, space separated list
 					if ( self.hasClass( className ) ) {
 						self.removeClass( className );
 					} else {
 						self.addClass( className );
 					}
 				}
 
 			// Toggle whole class name
 			} else if ( value === undefined || type === "boolean" ) {
 				className = getClass( this );
 				if ( className ) {
 
 					// Store className if set
 					dataPriv.set( this, "__className__", className );
 				}
 
 				// If the element has a class name or if we're passed `false`,
 				// then remove the whole classname (if there was one, the above saved it).
 				// Otherwise bring back whatever was previously saved (if anything),
 				// falling back to the empty string if nothing was stored.
 				if ( this.setAttribute ) {
 					this.setAttribute( "class",
 						className || value === false ?
 						"" :
 						dataPriv.get( this, "__className__" ) || ""
 					);
 				}
 			}
 		} );
 	},
 
 	hasClass: function( selector ) {
 		var className, elem,
 			i = 0;
 
 		className = " " + selector + " ";
 		while ( ( elem = this[ i++ ] ) ) {
 			if ( elem.nodeType === 1 &&
 				( " " + getClass( elem ) + " " ).replace( rclass, " " )
 					.indexOf( className ) > -1
 			) {
 				return true;
 			}
 		}
 
 		return false;
 	}
 } );
 
 
 
 
 var rreturn = /\r/g,
 	rspaces = /[\x20\t\r\n\f]+/g;
 
 jQuery.fn.extend( {
 	val: function( value ) {
 		var hooks, ret, isFunction,
 			elem = this[ 0 ];
 
 		if ( !arguments.length ) {
 			if ( elem ) {
 				hooks = jQuery.valHooks[ elem.type ] ||
 					jQuery.valHooks[ elem.nodeName.toLowerCase() ];
 
 				if ( hooks &&
 					"get" in hooks &&
 					( ret = hooks.get( elem, "value" ) ) !== undefined
 				) {
 					return ret;
 				}
 
 				ret = elem.value;
 
 				return typeof ret === "string" ?
 
 					// Handle most common string cases
 					ret.replace( rreturn, "" ) :
 
 					// Handle cases where value is null/undef or number
 					ret == null ? "" : ret;
 			}
 
 			return;
 		}
 
 		isFunction = jQuery.isFunction( value );
 
 		return this.each( function( i ) {
 			var val;
 
 			if ( this.nodeType !== 1 ) {
 				return;
 			}
 
 			if ( isFunction ) {
 				val = value.call( this, i, jQuery( this ).val() );
 			} else {
 				val = value;
 			}
 
 			// Treat null/undefined as ""; convert numbers to string
 			if ( val == null ) {
 				val = "";
 
 			} else if ( typeof val === "number" ) {
 				val += "";
 
 			} else if ( jQuery.isArray( val ) ) {
 				val = jQuery.map( val, function( value ) {
 					return value == null ? "" : value + "";
 				} );
 			}
 
 			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
 
 			// If set returns undefined, fall back to normal setting
 			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
 				this.value = val;
 			}
 		} );
 	}
 } );
 
 jQuery.extend( {
 	valHooks: {
 		option: {
 			get: function( elem ) {
 
 				var val = jQuery.find.attr( elem, "value" );
 				return val != null ?
 					val :
 
 					// Support: IE <=10 - 11 only
 					// option.text throws exceptions (#14686, #14858)
 					// Strip and collapse whitespace
 					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
 					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
 			}
 		},
 		select: {
 			get: function( elem ) {
 				var value, option,
 					options = elem.options,
 					index = elem.selectedIndex,
 					one = elem.type === "select-one",
 					values = one ? null : [],
 					max = one ? index + 1 : options.length,
 					i = index < 0 ?
 						max :
 						one ? index : 0;
 
 				// Loop through all the selected options
 				for ( ; i < max; i++ ) {
 					option = options[ i ];
 
 					// Support: IE <=9 only
 					// IE8-9 doesn't update selected after form reset (#2551)
 					if ( ( option.selected || i === index ) &&
 
 							// Don't return options that are disabled or in a disabled optgroup
 							!option.disabled &&
 							( !option.parentNode.disabled ||
 								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
 
 						// Get the specific value for the option
 						value = jQuery( option ).val();
 
 						// We don't need an array for one selects
 						if ( one ) {
 							return value;
 						}
 
 						// Multi-Selects return an array
 						values.push( value );
 					}
 				}
 
 				return values;
 			},
 
 			set: function( elem, value ) {
 				var optionSet, option,
 					options = elem.options,
 					values = jQuery.makeArray( value ),
 					i = options.length;
 
 				while ( i-- ) {
 					option = options[ i ];
 
 					/* eslint-disable no-cond-assign */
 
 					if ( option.selected =
 						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
 					) {
 						optionSet = true;
 					}
 
 					/* eslint-enable no-cond-assign */
 				}
 
 				// Force browsers to behave consistently when non-matching value is set
 				if ( !optionSet ) {
 					elem.selectedIndex = -1;
 				}
 				return values;
 			}
 		}
 	}
 } );
 
 // Radios and checkboxes getter/setter
 jQuery.each( [ "radio", "checkbox" ], function() {
 	jQuery.valHooks[ this ] = {
 		set: function( elem, value ) {
 			if ( jQuery.isArray( value ) ) {
 				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
 			}
 		}
 	};
 	if ( !support.checkOn ) {
 		jQuery.valHooks[ this ].get = function( elem ) {
 			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
 		};
 	}
 } );
 
 
 
 
 // Return jQuery for attributes-only inclusion
 
 
 var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
 
 jQuery.extend( jQuery.event, {
 
 	trigger: function( event, data, elem, onlyHandlers ) {
 
 		var i, cur, tmp, bubbleType, ontype, handle, special,
 			eventPath = [ elem || document ],
 			type = hasOwn.call( event, "type" ) ? event.type : event,
 			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
 
 		cur = tmp = elem = elem || document;
 
 		// Don't do events on text and comment nodes
 		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
 			return;
 		}
 
 		// focus/blur morphs to focusin/out; ensure we're not firing them right now
 		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
 			return;
 		}
 
 		if ( type.indexOf( "." ) > -1 ) {
 
 			// Namespaced trigger; create a regexp to match event type in handle()
 			namespaces = type.split( "." );
 			type = namespaces.shift();
 			namespaces.sort();
 		}
 		ontype = type.indexOf( ":" ) < 0 && "on" + type;
 
 		// Caller can pass in a jQuery.Event object, Object, or just an event type string
 		event = event[ jQuery.expando ] ?
 			event :
 			new jQuery.Event( type, typeof event === "object" && event );
 
 		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
 		event.isTrigger = onlyHandlers ? 2 : 3;
 		event.namespace = namespaces.join( "." );
 		event.rnamespace = event.namespace ?
 			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
 			null;
 
 		// Clean up the event in case it is being reused
 		event.result = undefined;
 		if ( !event.target ) {
 			event.target = elem;
 		}
 
 		// Clone any incoming data and prepend the event, creating the handler arg list
 		data = data == null ?
 			[ event ] :
 			jQuery.makeArray( data, [ event ] );
 
 		// Allow special events to draw outside the lines
 		special = jQuery.event.special[ type ] || {};
 		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
 			return;
 		}
 
 		// Determine event propagation path in advance, per W3C events spec (#9951)
 		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
 		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
 
 			bubbleType = special.delegateType || type;
 			if ( !rfocusMorph.test( bubbleType + type ) ) {
 				cur = cur.parentNode;
 			}
 			for ( ; cur; cur = cur.parentNode ) {
 				eventPath.push( cur );
 				tmp = cur;
 			}
 
 			// Only add window if we got to document (e.g., not plain obj or detached DOM)
 			if ( tmp === ( elem.ownerDocument || document ) ) {
 				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
 			}
 		}
 
 		// Fire handlers on the event path
 		i = 0;
 		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
 
 			event.type = i > 1 ?
 				bubbleType :
 				special.bindType || type;
 
 			// jQuery handler
 			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
 				dataPriv.get( cur, "handle" );
 			if ( handle ) {
 				handle.apply( cur, data );
 			}
 
 			// Native handler
 			handle = ontype && cur[ ontype ];
 			if ( handle && handle.apply && acceptData( cur ) ) {
 				event.result = handle.apply( cur, data );
 				if ( event.result === false ) {
 					event.preventDefault();
 				}
 			}
 		}
 		event.type = type;
 
 		// If nobody prevented the default action, do it now
 		if ( !onlyHandlers && !event.isDefaultPrevented() ) {
 
 			if ( ( !special._default ||
 				special._default.apply( eventPath.pop(), data ) === false ) &&
 				acceptData( elem ) ) {
 
 				// Call a native DOM method on the target with the same name as the event.
 				// Don't do default actions on window, that's where global variables be (#6170)
 				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
 
 					// Don't re-trigger an onFOO event when we call its FOO() method
 					tmp = elem[ ontype ];
 
 					if ( tmp ) {
 						elem[ ontype ] = null;
 					}
 
 					// Prevent re-triggering of the same event, since we already bubbled it above
 					jQuery.event.triggered = type;
 					elem[ type ]();
 					jQuery.event.triggered = undefined;
 
 					if ( tmp ) {
 						elem[ ontype ] = tmp;
 					}
 				}
 			}
 		}
 
 		return event.result;
 	},
 
 	// Piggyback on a donor event to simulate a different one
 	// Used only for `focus(in | out)` events
 	simulate: function( type, elem, event ) {
 		var e = jQuery.extend(
 			new jQuery.Event(),
 			event,
 			{
 				type: type,
 				isSimulated: true
 			}
 		);
 
 		jQuery.event.trigger( e, null, elem );
 	}
 
 } );
 
 jQuery.fn.extend( {
 
 	trigger: function( type, data ) {
 		return this.each( function() {
 			jQuery.event.trigger( type, data, this );
 		} );
 	},
 	triggerHandler: function( type, data ) {
 		var elem = this[ 0 ];
 		if ( elem ) {
 			return jQuery.event.trigger( type, data, elem, true );
 		}
 	}
 } );
 
 
 jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
 	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
 	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
 	function( i, name ) {
 
 	// Handle event binding
 	jQuery.fn[ name ] = function( data, fn ) {
 		return arguments.length > 0 ?
 			this.on( name, null, data, fn ) :
 			this.trigger( name );
 	};
 } );
 
 jQuery.fn.extend( {
 	hover: function( fnOver, fnOut ) {
 		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
 	}
 } );
 
 
 
 
 support.focusin = "onfocusin" in window;
 
 
 // Support: Firefox <=44
 // Firefox doesn't have focus(in | out) events
 // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
 //
 // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
 // focus(in | out) events fire after focus & blur events,
 // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
 // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
 if ( !support.focusin ) {
 	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
 
 		// Attach a single capturing handler on the document while someone wants focusin/focusout
 		var handler = function( event ) {
 			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
 		};
 
 		jQuery.event.special[ fix ] = {
 			setup: function() {
 				var doc = this.ownerDocument || this,
 					attaches = dataPriv.access( doc, fix );
 
 				if ( !attaches ) {
 					doc.addEventListener( orig, handler, true );
 				}
 				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
 			},
 			teardown: function() {
 				var doc = this.ownerDocument || this,
 					attaches = dataPriv.access( doc, fix ) - 1;
 
 				if ( !attaches ) {
 					doc.removeEventListener( orig, handler, true );
 					dataPriv.remove( doc, fix );
 
 				} else {
 					dataPriv.access( doc, fix, attaches );
 				}
 			}
 		};
 	} );
 }
 var location = window.location;
 
 var nonce = jQuery.now();
 
 var rquery = ( /\?/ );
 
 
 
 // Cross-browser xml parsing
 jQuery.parseXML = function( data ) {
 	var xml;
 	if ( !data || typeof data !== "string" ) {
 		return null;
 	}
 
 	// Support: IE 9 - 11 only
 	// IE throws on parseFromString with invalid input.
 	try {
 		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
 	} catch ( e ) {
 		xml = undefined;
 	}
 
 	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
 		jQuery.error( "Invalid XML: " + data );
 	}
 	return xml;
 };
 
 
 var
 	rbracket = /\[\]$/,
 	rCRLF = /\r?\n/g,
 	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
 	rsubmittable = /^(?:input|select|textarea|keygen)/i;
 
 function buildParams( prefix, obj, traditional, add ) {
 	var name;
 
 	if ( jQuery.isArray( obj ) ) {
 
 		// Serialize array item.
 		jQuery.each( obj, function( i, v ) {
 			if ( traditional || rbracket.test( prefix ) ) {
 
 				// Treat each array item as a scalar.
 				add( prefix, v );
 
 			} else {
 
 				// Item is non-scalar (array or object), encode its numeric index.
 				buildParams(
 					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
 					v,
 					traditional,
 					add
 				);
 			}
 		} );
 
 	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
 
 		// Serialize object item.
 		for ( name in obj ) {
 			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
 		}
 
 	} else {
 
 		// Serialize scalar item.
 		add( prefix, obj );
 	}
 }
 
 // Serialize an array of form elements or a set of
 // key/values into a query string
 jQuery.param = function( a, traditional ) {
 	var prefix,
 		s = [],
 		add = function( key, valueOrFunction ) {
 
 			// If value is a function, invoke it and use its return value
 			var value = jQuery.isFunction( valueOrFunction ) ?
 				valueOrFunction() :
 				valueOrFunction;
 
 			s[ s.length ] = encodeURIComponent( key ) + "=" +
 				encodeURIComponent( value == null ? "" : value );
 		};
 
 	// If an array was passed in, assume that it is an array of form elements.
 	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
 
 		// Serialize the form elements
 		jQuery.each( a, function() {
 			add( this.name, this.value );
 		} );
 
 	} else {
 
 		// If traditional, encode the "old" way (the way 1.3.2 or older
 		// did it), otherwise encode params recursively.
 		for ( prefix in a ) {
 			buildParams( prefix, a[ prefix ], traditional, add );
 		}
 	}
 
 	// Return the resulting serialization
 	return s.join( "&" );
 };
 
 jQuery.fn.extend( {
 	serialize: function() {
 		return jQuery.param( this.serializeArray() );
 	},
 	serializeArray: function() {
 		return this.map( function() {
 
 			// Can add propHook for "elements" to filter or add form elements
 			var elements = jQuery.prop( this, "elements" );
 			return elements ? jQuery.makeArray( elements ) : this;
 		} )
 		.filter( function() {
 			var type = this.type;
 
 			// Use .is( ":disabled" ) so that fieldset[disabled] works
 			return this.name && !jQuery( this ).is( ":disabled" ) &&
 				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
 				( this.checked || !rcheckableType.test( type ) );
 		} )
 		.map( function( i, elem ) {
 			var val = jQuery( this ).val();
 
 			return val == null ?
 				null :
 				jQuery.isArray( val ) ?
 					jQuery.map( val, function( val ) {
 						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
 					} ) :
 					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
 		} ).get();
 	}
 } );
 
 
 var
 	r20 = /%20/g,
 	rhash = /#.*$/,
 	rts = /([?&])_=[^&]*/,
 	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
 
 	// #7653, #8125, #8152: local protocol detection
 	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
 	rnoContent = /^(?:GET|HEAD)$/,
 	rprotocol = /^\/\//,
 
 	/* Prefilters
 	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
 	 * 2) These are called:
 	 *    - BEFORE asking for a transport
 	 *    - AFTER param serialization (s.data is a string if s.processData is true)
 	 * 3) key is the dataType
 	 * 4) the catchall symbol "*" can be used
 	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
 	 */
 	prefilters = {},
 
 	/* Transports bindings
 	 * 1) key is the dataType
 	 * 2) the catchall symbol "*" can be used
 	 * 3) selection will start with transport dataType and THEN go to "*" if needed
 	 */
 	transports = {},
 
 	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
 	allTypes = "*/".concat( "*" ),
 
 	// Anchor tag for parsing the document origin
 	originAnchor = document.createElement( "a" );
 	originAnchor.href = location.href;
 
 // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
 function addToPrefiltersOrTransports( structure ) {
 
 	// dataTypeExpression is optional and defaults to "*"
 	return function( dataTypeExpression, func ) {
 
 		if ( typeof dataTypeExpression !== "string" ) {
 			func = dataTypeExpression;
 			dataTypeExpression = "*";
 		}
 
 		var dataType,
 			i = 0,
 			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
 
 		if ( jQuery.isFunction( func ) ) {
 
 			// For each dataType in the dataTypeExpression
 			while ( ( dataType = dataTypes[ i++ ] ) ) {
 
 				// Prepend if requested
 				if ( dataType[ 0 ] === "+" ) {
 					dataType = dataType.slice( 1 ) || "*";
 					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
 
 				// Otherwise append
 				} else {
 					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
 				}
 			}
 		}
 	};
 }
 
 // Base inspection function for prefilters and transports
 function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
 
 	var inspected = {},
 		seekingTransport = ( structure === transports );
 
 	function inspect( dataType ) {
 		var selected;
 		inspected[ dataType ] = true;
 		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
 			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
 			if ( typeof dataTypeOrTransport === "string" &&
 				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
 
 				options.dataTypes.unshift( dataTypeOrTransport );
 				inspect( dataTypeOrTransport );
 				return false;
 			} else if ( seekingTransport ) {
 				return !( selected = dataTypeOrTransport );
 			}
 		} );
 		return selected;
 	}
 
 	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
 }
 
 // A special extend for ajax options
 // that takes "flat" options (not to be deep extended)
 // Fixes #9887
 function ajaxExtend( target, src ) {
 	var key, deep,
 		flatOptions = jQuery.ajaxSettings.flatOptions || {};
 
 	for ( key in src ) {
 		if ( src[ key ] !== undefined ) {
 			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
 		}
 	}
 	if ( deep ) {
 		jQuery.extend( true, target, deep );
 	}
 
 	return target;
 }
 
 /* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
 function ajaxHandleResponses( s, jqXHR, responses ) {
 
 	var ct, type, finalDataType, firstDataType,
 		contents = s.contents,
 		dataTypes = s.dataTypes;
 
 	// Remove auto dataType and get content-type in the process
 	while ( dataTypes[ 0 ] === "*" ) {
 		dataTypes.shift();
 		if ( ct === undefined ) {
 			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
 		}
 	}
 
 	// Check if we're dealing with a known content-type
 	if ( ct ) {
 		for ( type in contents ) {
 			if ( contents[ type ] && contents[ type ].test( ct ) ) {
 				dataTypes.unshift( type );
 				break;
 			}
 		}
 	}
 
 	// Check to see if we have a response for the expected dataType
 	if ( dataTypes[ 0 ] in responses ) {
 		finalDataType = dataTypes[ 0 ];
 	} else {
 
 		// Try convertible dataTypes
 		for ( type in responses ) {
 			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
 				finalDataType = type;
 				break;
 			}
 			if ( !firstDataType ) {
 				firstDataType = type;
 			}
 		}
 
 		// Or just use first one
 		finalDataType = finalDataType || firstDataType;
 	}
 
 	// If we found a dataType
 	// We add the dataType to the list if needed
 	// and return the corresponding response
 	if ( finalDataType ) {
 		if ( finalDataType !== dataTypes[ 0 ] ) {
 			dataTypes.unshift( finalDataType );
 		}
 		return responses[ finalDataType ];
 	}
 }
 
 /* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
 function ajaxConvert( s, response, jqXHR, isSuccess ) {
 	var conv2, current, conv, tmp, prev,
 		converters = {},
 
 		// Work with a copy of dataTypes in case we need to modify it for conversion
 		dataTypes = s.dataTypes.slice();
 
 	// Create converters map with lowercased keys
 	if ( dataTypes[ 1 ] ) {
 		for ( conv in s.converters ) {
 			converters[ conv.toLowerCase() ] = s.converters[ conv ];
 		}
 	}
 
 	current = dataTypes.shift();
 
 	// Convert to each sequential dataType
 	while ( current ) {
 
 		if ( s.responseFields[ current ] ) {
 			jqXHR[ s.responseFields[ current ] ] = response;
 		}
 
 		// Apply the dataFilter if provided
 		if ( !prev && isSuccess && s.dataFilter ) {
 			response = s.dataFilter( response, s.dataType );
 		}
 
 		prev = current;
 		current = dataTypes.shift();
 
 		if ( current ) {
 
 			// There's only work to do if current dataType is non-auto
 			if ( current === "*" ) {
 
 				current = prev;
 
 			// Convert response if prev dataType is non-auto and differs from current
 			} else if ( prev !== "*" && prev !== current ) {
 
 				// Seek a direct converter
 				conv = converters[ prev + " " + current ] || converters[ "* " + current ];
 
 				// If none found, seek a pair
 				if ( !conv ) {
 					for ( conv2 in converters ) {
 
 						// If conv2 outputs current
 						tmp = conv2.split( " " );
 						if ( tmp[ 1 ] === current ) {
 
 							// If prev can be converted to accepted input
 							conv = converters[ prev + " " + tmp[ 0 ] ] ||
 								converters[ "* " + tmp[ 0 ] ];
 							if ( conv ) {
 
 								// Condense equivalence converters
 								if ( conv === true ) {
 									conv = converters[ conv2 ];
 
 								// Otherwise, insert the intermediate dataType
 								} else if ( converters[ conv2 ] !== true ) {
 									current = tmp[ 0 ];
 									dataTypes.unshift( tmp[ 1 ] );
 								}
 								break;
 							}
 						}
 					}
 				}
 
 				// Apply converter (if not an equivalence)
 				if ( conv !== true ) {
 
 					// Unless errors are allowed to bubble, catch and return them
 					if ( conv && s.throws ) {
 						response = conv( response );
 					} else {
 						try {
 							response = conv( response );
 						} catch ( e ) {
 							return {
 								state: "parsererror",
 								error: conv ? e : "No conversion from " + prev + " to " + current
 							};
 						}
 					}
 				}
 			}
 		}
 	}
 
 	return { state: "success", data: response };
 }
 
 jQuery.extend( {
 
 	// Counter for holding the number of active queries
 	active: 0,
 
 	// Last-Modified header cache for next request
 	lastModified: {},
 	etag: {},
 
 	ajaxSettings: {
 		url: location.href,
 		type: "GET",
 		isLocal: rlocalProtocol.test( location.protocol ),
 		global: true,
 		processData: true,
 		async: true,
 		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
 
 		/*
 		timeout: 0,
 		data: null,
 		dataType: null,
 		username: null,
 		password: null,
 		cache: null,
 		throws: false,
 		traditional: false,
 		headers: {},
 		*/
 
 		accepts: {
 			"*": allTypes,
 			text: "text/plain",
 			html: "text/html",
 			xml: "application/xml, text/xml",
 			json: "application/json, text/javascript"
 		},
 
 		contents: {
 			xml: /\bxml\b/,
 			html: /\bhtml/,
 			json: /\bjson\b/
 		},
 
 		responseFields: {
 			xml: "responseXML",
 			text: "responseText",
 			json: "responseJSON"
 		},
 
 		// Data converters
 		// Keys separate source (or catchall "*") and destination types with a single space
 		converters: {
 
 			// Convert anything to text
 			"* text": String,
 
 			// Text to html (true = no transformation)
 			"text html": true,
 
 			// Evaluate text as a json expression
 			"text json": JSON.parse,
 
 			// Parse text as xml
 			"text xml": jQuery.parseXML
 		},
 
 		// For options that shouldn't be deep extended:
 		// you can add your own custom options here if
 		// and when you create one that shouldn't be
 		// deep extended (see ajaxExtend)
 		flatOptions: {
 			url: true,
 			context: true
 		}
 	},
 
 	// Creates a full fledged settings object into target
 	// with both ajaxSettings and settings fields.
 	// If target is omitted, writes into ajaxSettings.
 	ajaxSetup: function( target, settings ) {
 		return settings ?
 
 			// Building a settings object
 			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
 
 			// Extending ajaxSettings
 			ajaxExtend( jQuery.ajaxSettings, target );
 	},
 
 	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
 	ajaxTransport: addToPrefiltersOrTransports( transports ),
 
 	// Main method
 	ajax: function( url, options ) {
 
 		// If url is an object, simulate pre-1.5 signature
 		if ( typeof url === "object" ) {
 			options = url;
 			url = undefined;
 		}
 
 		// Force options to be an object
 		options = options || {};
 
 		var transport,
 
 			// URL without anti-cache param
 			cacheURL,
 
 			// Response headers
 			responseHeadersString,
 			responseHeaders,
 
 			// timeout handle
 			timeoutTimer,
 
 			// Url cleanup var
 			urlAnchor,
 
 			// Request state (becomes false upon send and true upon completion)
 			completed,
 
 			// To know if global events are to be dispatched
 			fireGlobals,
 
 			// Loop variable
 			i,
 
 			// uncached part of the url
 			uncached,
 
 			// Create the final options object
 			s = jQuery.ajaxSetup( {}, options ),
 
 			// Callbacks context
 			callbackContext = s.context || s,
 
 			// Context for global events is callbackContext if it is a DOM node or jQuery collection
 			globalEventContext = s.context &&
 				( callbackContext.nodeType || callbackContext.jquery ) ?
 					jQuery( callbackContext ) :
 					jQuery.event,
 
 			// Deferreds
 			deferred = jQuery.Deferred(),
 			completeDeferred = jQuery.Callbacks( "once memory" ),
 
 			// Status-dependent callbacks
 			statusCode = s.statusCode || {},
 
 			// Headers (they are sent all at once)
 			requestHeaders = {},
 			requestHeadersNames = {},
 
 			// Default abort message
 			strAbort = "canceled",
 
 			// Fake xhr
 			jqXHR = {
 				readyState: 0,
 
 				// Builds headers hashtable if needed
 				getResponseHeader: function( key ) {
 					var match;
 					if ( completed ) {
 						if ( !responseHeaders ) {
 							responseHeaders = {};
 							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
 								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
 							}
 						}
 						match = responseHeaders[ key.toLowerCase() ];
 					}
 					return match == null ? null : match;
 				},
 
 				// Raw string
 				getAllResponseHeaders: function() {
 					return completed ? responseHeadersString : null;
 				},
 
 				// Caches the header
 				setRequestHeader: function( name, value ) {
 					if ( completed == null ) {
 						name = requestHeadersNames[ name.toLowerCase() ] =
 							requestHeadersNames[ name.toLowerCase() ] || name;
 						requestHeaders[ name ] = value;
 					}
 					return this;
 				},
 
 				// Overrides response content-type header
 				overrideMimeType: function( type ) {
 					if ( completed == null ) {
 						s.mimeType = type;
 					}
 					return this;
 				},
 
 				// Status-dependent callbacks
 				statusCode: function( map ) {
 					var code;
 					if ( map ) {
 						if ( completed ) {
 
 							// Execute the appropriate callbacks
 							jqXHR.always( map[ jqXHR.status ] );
 						} else {
 
 							// Lazy-add the new callbacks in a way that preserves old ones
 							for ( code in map ) {
 								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
 							}
 						}
 					}
 					return this;
 				},
 
 				// Cancel the request
 				abort: function( statusText ) {
 					var finalText = statusText || strAbort;
 					if ( transport ) {
 						transport.abort( finalText );
 					}
 					done( 0, finalText );
 					return this;
 				}
 			};
 
 		// Attach deferreds
 		deferred.promise( jqXHR );
 
 		// Add protocol if not provided (prefilters might expect it)
 		// Handle falsy url in the settings object (#10093: consistency with old signature)
 		// We also use the url parameter if available
 		s.url = ( ( url || s.url || location.href ) + "" )
 			.replace( rprotocol, location.protocol + "//" );
 
 		// Alias method option to type as per ticket #12004
 		s.type = options.method || options.type || s.method || s.type;
 
 		// Extract dataTypes list
 		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
 
 		// A cross-domain request is in order when the origin doesn't match the current origin.
 		if ( s.crossDomain == null ) {
 			urlAnchor = document.createElement( "a" );
 
 			// Support: IE <=8 - 11, Edge 12 - 13
 			// IE throws exception on accessing the href property if url is malformed,
 			// e.g. http://example.com:80x/
 			try {
 				urlAnchor.href = s.url;
 
 				// Support: IE <=8 - 11 only
 				// Anchor's host property isn't correctly set when s.url is relative
 				urlAnchor.href = urlAnchor.href;
 				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
 					urlAnchor.protocol + "//" + urlAnchor.host;
 			} catch ( e ) {
 
 				// If there is an error parsing the URL, assume it is crossDomain,
 				// it can be rejected by the transport if it is invalid
 				s.crossDomain = true;
 			}
 		}
 
 		// Convert data if not already a string
 		if ( s.data && s.processData && typeof s.data !== "string" ) {
 			s.data = jQuery.param( s.data, s.traditional );
 		}
 
 		// Apply prefilters
 		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
 
 		// If request was aborted inside a prefilter, stop there
 		if ( completed ) {
 			return jqXHR;
 		}
 
 		// We can fire global events as of now if asked to
 		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
 		fireGlobals = jQuery.event && s.global;
 
 		// Watch for a new set of requests
 		if ( fireGlobals && jQuery.active++ === 0 ) {
 			jQuery.event.trigger( "ajaxStart" );
 		}
 
 		// Uppercase the type
 		s.type = s.type.toUpperCase();
 
 		// Determine if request has content
 		s.hasContent = !rnoContent.test( s.type );
 
 		// Save the URL in case we're toying with the If-Modified-Since
 		// and/or If-None-Match header later on
 		// Remove hash to simplify url manipulation
 		cacheURL = s.url.replace( rhash, "" );
 
 		// More options handling for requests with no content
 		if ( !s.hasContent ) {
 
 			// Remember the hash so we can put it back
 			uncached = s.url.slice( cacheURL.length );
 
 			// If data is available, append data to url
 			if ( s.data ) {
 				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
 
 				// #9682: remove data so that it's not used in an eventual retry
 				delete s.data;
 			}
 
 			// Add anti-cache in uncached url if needed
 			if ( s.cache === false ) {
 				cacheURL = cacheURL.replace( rts, "" );
 				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
 			}
 
 			// Put hash and anti-cache on the URL that will be requested (gh-1732)
 			s.url = cacheURL + uncached;
 
 		// Change '%20' to '+' if this is encoded form body content (gh-2658)
 		} else if ( s.data && s.processData &&
 			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
 			s.data = s.data.replace( r20, "+" );
 		}
 
 		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
 		if ( s.ifModified ) {
 			if ( jQuery.lastModified[ cacheURL ] ) {
 				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
 			}
 			if ( jQuery.etag[ cacheURL ] ) {
 				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
 			}
 		}
 
 		// Set the correct header, if data is being sent
 		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
 			jqXHR.setRequestHeader( "Content-Type", s.contentType );
 		}
 
 		// Set the Accepts header for the server, depending on the dataType
 		jqXHR.setRequestHeader(
 			"Accept",
 			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
 				s.accepts[ s.dataTypes[ 0 ] ] +
 					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
 				s.accepts[ "*" ]
 		);
 
 		// Check for headers option
 		for ( i in s.headers ) {
 			jqXHR.setRequestHeader( i, s.headers[ i ] );
 		}
 
 		// Allow custom headers/mimetypes and early abort
 		if ( s.beforeSend &&
 			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
 
 			// Abort if not done already and return
 			return jqXHR.abort();
 		}
 
 		// Aborting is no longer a cancellation
 		strAbort = "abort";
 
 		// Install callbacks on deferreds
 		completeDeferred.add( s.complete );
 		jqXHR.done( s.success );
 		jqXHR.fail( s.error );
 
 		// Get transport
 		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
 
 		// If no transport, we auto-abort
 		if ( !transport ) {
 			done( -1, "No Transport" );
 		} else {
 			jqXHR.readyState = 1;
 
 			// Send global event
 			if ( fireGlobals ) {
 				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
 			}
 
 			// If request was aborted inside ajaxSend, stop there
 			if ( completed ) {
 				return jqXHR;
 			}
 
 			// Timeout
 			if ( s.async && s.timeout > 0 ) {
 				timeoutTimer = window.setTimeout( function() {
 					jqXHR.abort( "timeout" );
 				}, s.timeout );
 			}
 
 			try {
 				completed = false;
 				transport.send( requestHeaders, done );
 			} catch ( e ) {
 
 				// Rethrow post-completion exceptions
 				if ( completed ) {
 					throw e;
 				}
 
 				// Propagate others as results
 				done( -1, e );
 			}
 		}
 
 		// Callback for when everything is done
 		function done( status, nativeStatusText, responses, headers ) {
 			var isSuccess, success, error, response, modified,
 				statusText = nativeStatusText;
 
 			// Ignore repeat invocations
 			if ( completed ) {
 				return;
 			}
 
 			completed = true;
 
 			// Clear timeout if it exists
 			if ( timeoutTimer ) {
 				window.clearTimeout( timeoutTimer );
 			}
 
 			// Dereference transport for early garbage collection
 			// (no matter how long the jqXHR object will be used)
 			transport = undefined;
 
 			// Cache response headers
 			responseHeadersString = headers || "";
 
 			// Set readyState
 			jqXHR.readyState = status > 0 ? 4 : 0;
 
 			// Determine if successful
 			isSuccess = status >= 200 && status < 300 || status === 304;
 
 			// Get response data
 			if ( responses ) {
 				response = ajaxHandleResponses( s, jqXHR, responses );
 			}
 
 			// Convert no matter what (that way responseXXX fields are always set)
 			response = ajaxConvert( s, response, jqXHR, isSuccess );
 
 			// If successful, handle type chaining
 			if ( isSuccess ) {
 
 				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
 				if ( s.ifModified ) {
 					modified = jqXHR.getResponseHeader( "Last-Modified" );
 					if ( modified ) {
 						jQuery.lastModified[ cacheURL ] = modified;
 					}
 					modified = jqXHR.getResponseHeader( "etag" );
 					if ( modified ) {
 						jQuery.etag[ cacheURL ] = modified;
 					}
 				}
 
 				// if no content
 				if ( status === 204 || s.type === "HEAD" ) {
 					statusText = "nocontent";
 
 				// if not modified
 				} else if ( status === 304 ) {
 					statusText = "notmodified";
 
 				// If we have data, let's convert it
 				} else {
 					statusText = response.state;
 					success = response.data;
 					error = response.error;
 					isSuccess = !error;
 				}
 			} else {
 
 				// Extract error from statusText and normalize for non-aborts
 				error = statusText;
 				if ( status || !statusText ) {
 					statusText = "error";
 					if ( status < 0 ) {
 						status = 0;
 					}
 				}
 			}
 
 			// Set data for the fake xhr object
 			jqXHR.status = status;
 			jqXHR.statusText = ( nativeStatusText || statusText ) + "";
 
 			// Success/Error
 			if ( isSuccess ) {
 				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
 			} else {
 				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
 			}
 
 			// Status-dependent callbacks
 			jqXHR.statusCode( statusCode );
 			statusCode = undefined;
 
 			if ( fireGlobals ) {
 				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
 					[ jqXHR, s, isSuccess ? success : error ] );
 			}
 
 			// Complete
 			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
 
 			if ( fireGlobals ) {
 				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
 
 				// Handle the global AJAX counter
 				if ( !( --jQuery.active ) ) {
 					jQuery.event.trigger( "ajaxStop" );
 				}
 			}
 		}
 
 		return jqXHR;
 	},
 
 	getJSON: function( url, data, callback ) {
 		return jQuery.get( url, data, callback, "json" );
 	},
 
 	getScript: function( url, callback ) {
 		return jQuery.get( url, undefined, callback, "script" );
 	}
 } );
 
 jQuery.each( [ "get", "post" ], function( i, method ) {
 	jQuery[ method ] = function( url, data, callback, type ) {
 
 		// Shift arguments if data argument was omitted
 		if ( jQuery.isFunction( data ) ) {
 			type = type || callback;
 			callback = data;
 			data = undefined;
 		}
 
 		// The url can be an options object (which then must have .url)
 		return jQuery.ajax( jQuery.extend( {
 			url: url,
 			type: method,
 			dataType: type,
 			data: data,
 			success: callback
 		}, jQuery.isPlainObject( url ) && url ) );
 	};
 } );
 
 
 jQuery._evalUrl = function( url ) {
 	return jQuery.ajax( {
 		url: url,
 
 		// Make this explicit, since user can override this through ajaxSetup (#11264)
 		type: "GET",
 		dataType: "script",
 		cache: true,
 		async: false,
 		global: false,
 		"throws": true
 	} );
 };
 
 
 jQuery.fn.extend( {
 	wrapAll: function( html ) {
 		var wrap;
 
 		if ( this[ 0 ] ) {
 			if ( jQuery.isFunction( html ) ) {
 				html = html.call( this[ 0 ] );
 			}
 
 			// The elements to wrap the target around
 			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
 
 			if ( this[ 0 ].parentNode ) {
 				wrap.insertBefore( this[ 0 ] );
 			}
 
 			wrap.map( function() {
 				var elem = this;
 
 				while ( elem.firstElementChild ) {
 					elem = elem.firstElementChild;
 				}
 
 				return elem;
 			} ).append( this );
 		}
 
 		return this;
 	},
 
 	wrapInner: function( html ) {
 		if ( jQuery.isFunction( html ) ) {
 			return this.each( function( i ) {
 				jQuery( this ).wrapInner( html.call( this, i ) );
 			} );
 		}
 
 		return this.each( function() {
 			var self = jQuery( this ),
 				contents = self.contents();
 
 			if ( contents.length ) {
 				contents.wrapAll( html );
 
 			} else {
 				self.append( html );
 			}
 		} );
 	},
 
 	wrap: function( html ) {
 		var isFunction = jQuery.isFunction( html );
 
 		return this.each( function( i ) {
 			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
 		} );
 	},
 
 	unwrap: function( selector ) {
 		this.parent( selector ).not( "body" ).each( function() {
 			jQuery( this ).replaceWith( this.childNodes );
 		} );
 		return this;
 	}
 } );
 
 
 jQuery.expr.pseudos.hidden = function( elem ) {
 	return !jQuery.expr.pseudos.visible( elem );
 };
 jQuery.expr.pseudos.visible = function( elem ) {
 	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
 };
 
 
 
 
 jQuery.ajaxSettings.xhr = function() {
 	try {
 		return new window.XMLHttpRequest();
 	} catch ( e ) {}
 };
 
 var xhrSuccessStatus = {
 
 		// File protocol always yields status code 0, assume 200
 		0: 200,
 
 		// Support: IE <=9 only
 		// #1450: sometimes IE returns 1223 when it should be 204
 		1223: 204
 	},
 	xhrSupported = jQuery.ajaxSettings.xhr();
 
 support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
 support.ajax = xhrSupported = !!xhrSupported;
 
 jQuery.ajaxTransport( function( options ) {
 	var callback, errorCallback;
 
 	// Cross domain only allowed if supported through XMLHttpRequest
 	if ( support.cors || xhrSupported && !options.crossDomain ) {
 		return {
 			send: function( headers, complete ) {
 				var i,
 					xhr = options.xhr();
 
 				xhr.open(
 					options.type,
 					options.url,
 					options.async,
 					options.username,
 					options.password
 				);
 
 				// Apply custom fields if provided
 				if ( options.xhrFields ) {
 					for ( i in options.xhrFields ) {
 						xhr[ i ] = options.xhrFields[ i ];
 					}
 				}
 
 				// Override mime type if needed
 				if ( options.mimeType && xhr.overrideMimeType ) {
 					xhr.overrideMimeType( options.mimeType );
 				}
 
 				// X-Requested-With header
 				// For cross-domain requests, seeing as conditions for a preflight are
 				// akin to a jigsaw puzzle, we simply never set it to be sure.
 				// (it can always be set on a per-request basis or even using ajaxSetup)
 				// For same-domain requests, won't change header if already provided.
 				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
 					headers[ "X-Requested-With" ] = "XMLHttpRequest";
 				}
 
 				// Set headers
 				for ( i in headers ) {
 					xhr.setRequestHeader( i, headers[ i ] );
 				}
 
 				// Callback
 				callback = function( type ) {
 					return function() {
 						if ( callback ) {
 							callback = errorCallback = xhr.onload =
 								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
 
 							if ( type === "abort" ) {
 								xhr.abort();
 							} else if ( type === "error" ) {
 
 								// Support: IE <=9 only
 								// On a manual native abort, IE9 throws
 								// errors on any property access that is not readyState
 								if ( typeof xhr.status !== "number" ) {
 									complete( 0, "error" );
 								} else {
 									complete(
 
 										// File: protocol always yields status 0; see #8605, #14207
 										xhr.status,
 										xhr.statusText
 									);
 								}
 							} else {
 								complete(
 									xhrSuccessStatus[ xhr.status ] || xhr.status,
 									xhr.statusText,
 
 									// Support: IE <=9 only
 									// IE9 has no XHR2 but throws on binary (trac-11426)
 									// For XHR2 non-text, let the caller handle it (gh-2498)
 									( xhr.responseType || "text" ) !== "text"  ||
 									typeof xhr.responseText !== "string" ?
 										{ binary: xhr.response } :
 										{ text: xhr.responseText },
 									xhr.getAllResponseHeaders()
 								);
 							}
 						}
 					};
 				};
 
 				// Listen to events
 				xhr.onload = callback();
 				errorCallback = xhr.onerror = callback( "error" );
 
 				// Support: IE 9 only
 				// Use onreadystatechange to replace onabort
 				// to handle uncaught aborts
 				if ( xhr.onabort !== undefined ) {
 					xhr.onabort = errorCallback;
 				} else {
 					xhr.onreadystatechange = function() {
 
 						// Check readyState before timeout as it changes
 						if ( xhr.readyState === 4 ) {
 
 							// Allow onerror to be called first,
 							// but that will not handle a native abort
 							// Also, save errorCallback to a variable
 							// as xhr.onerror cannot be accessed
 							window.setTimeout( function() {
 								if ( callback ) {
 									errorCallback();
 								}
 							} );
 						}
 					};
 				}
 
 				// Create the abort callback
 				callback = callback( "abort" );
 
 				try {
 
 					// Do send the request (this may raise an exception)
 					xhr.send( options.hasContent && options.data || null );
 				} catch ( e ) {
 
 					// #14683: Only rethrow if this hasn't been notified as an error yet
 					if ( callback ) {
 						throw e;
 					}
 				}
 			},
 
 			abort: function() {
 				if ( callback ) {
 					callback();
 				}
 			}
 		};
 	}
 } );
 
 
 
 
 // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
 jQuery.ajaxPrefilter( function( s ) {
 	if ( s.crossDomain ) {
 		s.contents.script = false;
 	}
 } );
 
 // Install script dataType
 jQuery.ajaxSetup( {
 	accepts: {
 		script: "text/javascript, application/javascript, " +
 			"application/ecmascript, application/x-ecmascript"
 	},
 	contents: {
 		script: /\b(?:java|ecma)script\b/
 	},
 	converters: {
 		"text script": function( text ) {
 			jQuery.globalEval( text );
 			return text;
 		}
 	}
 } );
 
 // Handle cache's special case and crossDomain
 jQuery.ajaxPrefilter( "script", function( s ) {
 	if ( s.cache === undefined ) {
 		s.cache = false;
 	}
 	if ( s.crossDomain ) {
 		s.type = "GET";
 	}
 } );
 
 // Bind script tag hack transport
 jQuery.ajaxTransport( "script", function( s ) {
 
 	// This transport only deals with cross domain requests
 	if ( s.crossDomain ) {
 		var script, callback;
 		return {
 			send: function( _, complete ) {
 				script = jQuery( "<script>" ).prop( {
 					charset: s.scriptCharset,
 					src: s.url
 				} ).on(
 					"load error",
 					callback = function( evt ) {
 						script.remove();
 						callback = null;
 						if ( evt ) {
 							complete( evt.type === "error" ? 404 : 200, evt.type );
 						}
 					}
 				);
 
 				// Use native DOM manipulation to avoid our domManip AJAX trickery
 				document.head.appendChild( script[ 0 ] );
 			},
 			abort: function() {
 				if ( callback ) {
 					callback();
 				}
 			}
 		};
 	}
 } );
 
 
 
 
 var oldCallbacks = [],
 	rjsonp = /(=)\?(?=&|$)|\?\?/;
 
 // Default jsonp settings
 jQuery.ajaxSetup( {
 	jsonp: "callback",
 	jsonpCallback: function() {
 		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
 		this[ callback ] = true;
 		return callback;
 	}
 } );
 
 // Detect, normalize options and install callbacks for jsonp requests
 jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
 
 	var callbackName, overwritten, responseContainer,
 		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
 			"url" :
 			typeof s.data === "string" &&
 				( s.contentType || "" )
 					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
 				rjsonp.test( s.data ) && "data"
 		);
 
 	// Handle iff the expected data type is "jsonp" or we have a parameter to set
 	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
 
 		// Get callback name, remembering preexisting value associated with it
 		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
 			s.jsonpCallback() :
 			s.jsonpCallback;
 
 		// Insert callback into url or form data
 		if ( jsonProp ) {
 			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
 		} else if ( s.jsonp !== false ) {
 			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
 		}
 
 		// Use data converter to retrieve json after script execution
 		s.converters[ "script json" ] = function() {
 			if ( !responseContainer ) {
 				jQuery.error( callbackName + " was not called" );
 			}
 			return responseContainer[ 0 ];
 		};
 
 		// Force json dataType
 		s.dataTypes[ 0 ] = "json";
 
 		// Install callback
 		overwritten = window[ callbackName ];
 		window[ callbackName ] = function() {
 			responseContainer = arguments;
 		};
 
 		// Clean-up function (fires after converters)
 		jqXHR.always( function() {
 
 			// If previous value didn't exist - remove it
 			if ( overwritten === undefined ) {
 				jQuery( window ).removeProp( callbackName );
 
 			// Otherwise restore preexisting value
 			} else {
 				window[ callbackName ] = overwritten;
 			}
 
 			// Save back as free
 			if ( s[ callbackName ] ) {
 
 				// Make sure that re-using the options doesn't screw things around
 				s.jsonpCallback = originalSettings.jsonpCallback;
 
 				// Save the callback name for future use
 				oldCallbacks.push( callbackName );
 			}
 
 			// Call if it was a function and we have a response
 			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
 				overwritten( responseContainer[ 0 ] );
 			}
 
 			responseContainer = overwritten = undefined;
 		} );
 
 		// Delegate to script
 		return "script";
 	}
 } );
 
 
 
 
 // Support: Safari 8 only
 // In Safari 8 documents created via document.implementation.createHTMLDocument
 // collapse sibling forms: the second one becomes a child of the first one.
 // Because of that, this security measure has to be disabled in Safari 8.
 // https://bugs.webkit.org/show_bug.cgi?id=137337
 support.createHTMLDocument = ( function() {
 	var body = document.implementation.createHTMLDocument( "" ).body;
 	body.innerHTML = "<form></form><form></form>";
 	return body.childNodes.length === 2;
 } )();
 
 
 // Argument "data" should be string of html
 // context (optional): If specified, the fragment will be created in this context,
 // defaults to document
 // keepScripts (optional): If true, will include scripts passed in the html string
 jQuery.parseHTML = function( data, context, keepScripts ) {
 	if ( typeof data !== "string" ) {
 		return [];
 	}
 	if ( typeof context === "boolean" ) {
 		keepScripts = context;
 		context = false;
 	}
 
 	var base, parsed, scripts;
 
 	if ( !context ) {
 
 		// Stop scripts or inline event handlers from being executed immediately
 		// by using document.implementation
 		if ( support.createHTMLDocument ) {
 			context = document.implementation.createHTMLDocument( "" );
 
 			// Set the base href for the created document
 			// so any parsed elements with URLs
 			// are based on the document's URL (gh-2965)
 			base = context.createElement( "base" );
 			base.href = document.location.href;
 			context.head.appendChild( base );
 		} else {
 			context = document;
 		}
 	}
 
 	parsed = rsingleTag.exec( data );
 	scripts = !keepScripts && [];
 
 	// Single tag
 	if ( parsed ) {
 		return [ context.createElement( parsed[ 1 ] ) ];
 	}
 
 	parsed = buildFragment( [ data ], context, scripts );
 
 	if ( scripts && scripts.length ) {
 		jQuery( scripts ).remove();
 	}
 
 	return jQuery.merge( [], parsed.childNodes );
 };
 
 
 /**
  * Load a url into a page
  */
 jQuery.fn.load = function( url, params, callback ) {
 	var selector, type, response,
 		self = this,
 		off = url.indexOf( " " );
 
 	if ( off > -1 ) {
 		selector = jQuery.trim( url.slice( off ) );
 		url = url.slice( 0, off );
 	}
 
 	// If it's a function
 	if ( jQuery.isFunction( params ) ) {
 
 		// We assume that it's the callback
 		callback = params;
 		params = undefined;
 
 	// Otherwise, build a param string
 	} else if ( params && typeof params === "object" ) {
 		type = "POST";
 	}
 
 	// If we have elements to modify, make the request
 	if ( self.length > 0 ) {
 		jQuery.ajax( {
 			url: url,
 
 			// If "type" variable is undefined, then "GET" method will be used.
 			// Make value of this field explicit since
 			// user can override it through ajaxSetup method
 			type: type || "GET",
 			dataType: "html",
 			data: params
 		} ).done( function( responseText ) {
 
 			// Save response for use in complete callback
 			response = arguments;
 
 			self.html( selector ?
 
 				// If a selector was specified, locate the right elements in a dummy div
 				// Exclude scripts to avoid IE 'Permission Denied' errors
 				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
 
 				// Otherwise use the full result
 				responseText );
 
 		// If the request succeeds, this function gets "data", "status", "jqXHR"
 		// but they are ignored because response was set above.
 		// If it fails, this function gets "jqXHR", "status", "error"
 		} ).always( callback && function( jqXHR, status ) {
 			self.each( function() {
 				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
 			} );
 		} );
 	}
 
 	return this;
 };
 
 
 
 
 // Attach a bunch of functions for handling common AJAX events
 jQuery.each( [
 	"ajaxStart",
 	"ajaxStop",
 	"ajaxComplete",
 	"ajaxError",
 	"ajaxSuccess",
 	"ajaxSend"
 ], function( i, type ) {
 	jQuery.fn[ type ] = function( fn ) {
 		return this.on( type, fn );
 	};
 } );
 
 
 
 
 jQuery.expr.pseudos.animated = function( elem ) {
 	return jQuery.grep( jQuery.timers, function( fn ) {
 		return elem === fn.elem;
 	} ).length;
 };
 
 
 
 
 /**
  * Gets a window from an element
  */
 function getWindow( elem ) {
 	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
 }
 
 jQuery.offset = {
 	setOffset: function( elem, options, i ) {
 		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
 			position = jQuery.css( elem, "position" ),
 			curElem = jQuery( elem ),
 			props = {};
 
 		// Set position first, in-case top/left are set even on static elem
 		if ( position === "static" ) {
 			elem.style.position = "relative";
 		}
 
 		curOffset = curElem.offset();
 		curCSSTop = jQuery.css( elem, "top" );
 		curCSSLeft = jQuery.css( elem, "left" );
 		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
 			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
 
 		// Need to be able to calculate position if either
 		// top or left is auto and position is either absolute or fixed
 		if ( calculatePosition ) {
 			curPosition = curElem.position();
 			curTop = curPosition.top;
 			curLeft = curPosition.left;
 
 		} else {
 			curTop = parseFloat( curCSSTop ) || 0;
 			curLeft = parseFloat( curCSSLeft ) || 0;
 		}
 
 		if ( jQuery.isFunction( options ) ) {
 
 			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
 			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
 		}
 
 		if ( options.top != null ) {
 			props.top = ( options.top - curOffset.top ) + curTop;
 		}
 		if ( options.left != null ) {
 			props.left = ( options.left - curOffset.left ) + curLeft;
 		}
 
 		if ( "using" in options ) {
 			options.using.call( elem, props );
 
 		} else {
 			curElem.css( props );
 		}
 	}
 };
 
 jQuery.fn.extend( {
 	offset: function( options ) {
 
 		// Preserve chaining for setter
 		if ( arguments.length ) {
 			return options === undefined ?
 				this :
 				this.each( function( i ) {
 					jQuery.offset.setOffset( this, options, i );
 				} );
 		}
 
 		var docElem, win, rect, doc,
 			elem = this[ 0 ];
 
 		if ( !elem ) {
 			return;
 		}
 
 		// Support: IE <=11 only
 		// Running getBoundingClientRect on a
 		// disconnected node in IE throws an error
 		if ( !elem.getClientRects().length ) {
 			return { top: 0, left: 0 };
 		}
 
 		rect = elem.getBoundingClientRect();
 
 		// Make sure element is not hidden (display: none)
 		if ( rect.width || rect.height ) {
 			doc = elem.ownerDocument;
 			win = getWindow( doc );
 			docElem = doc.documentElement;
 
 			return {
 				top: rect.top + win.pageYOffset - docElem.clientTop,
 				left: rect.left + win.pageXOffset - docElem.clientLeft
 			};
 		}
 
 		// Return zeros for disconnected and hidden elements (gh-2310)
 		return rect;
 	},
 
 	position: function() {
 		if ( !this[ 0 ] ) {
 			return;
 		}
 
 		var offsetParent, offset,
 			elem = this[ 0 ],
 			parentOffset = { top: 0, left: 0 };
 
 		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
 		// because it is its only offset parent
 		if ( jQuery.css( elem, "position" ) === "fixed" ) {
 
 			// Assume getBoundingClientRect is there when computed position is fixed
 			offset = elem.getBoundingClientRect();
 
 		} else {
 
 			// Get *real* offsetParent
 			offsetParent = this.offsetParent();
 
 			// Get correct offsets
 			offset = this.offset();
 			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
 				parentOffset = offsetParent.offset();
 			}
 
 			// Add offsetParent borders
 			parentOffset = {
 				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
 				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
 			};
 		}
 
 		// Subtract parent offsets and element margins
 		return {
 			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
 			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
 		};
 	},
 
 	// This method will return documentElement in the following cases:
 	// 1) For the element inside the iframe without offsetParent, this method will return
 	//    documentElement of the parent window
 	// 2) For the hidden or detached element
 	// 3) For body or html element, i.e. in case of the html node - it will return itself
 	//
 	// but those exceptions were never presented as a real life use-cases
 	// and might be considered as more preferable results.
 	//
 	// This logic, however, is not guaranteed and can change at any point in the future
 	offsetParent: function() {
 		return this.map( function() {
 			var offsetParent = this.offsetParent;
 
 			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
 				offsetParent = offsetParent.offsetParent;
 			}
 
 			return offsetParent || documentElement;
 		} );
 	}
 } );
 
 // Create scrollLeft and scrollTop methods
 jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
 	var top = "pageYOffset" === prop;
 
 	jQuery.fn[ method ] = function( val ) {
 		return access( this, function( elem, method, val ) {
 			var win = getWindow( elem );
 
 			if ( val === undefined ) {
 				return win ? win[ prop ] : elem[ method ];
 			}
 
 			if ( win ) {
 				win.scrollTo(
 					!top ? val : win.pageXOffset,
 					top ? val : win.pageYOffset
 				);
 
 			} else {
 				elem[ method ] = val;
 			}
 		}, method, val, arguments.length );
 	};
 } );
 
 // Support: Safari <=7 - 9.1, Chrome <=37 - 49
 // Add the top/left cssHooks using jQuery.fn.position
 // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
 // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
 // getComputedStyle returns percent when specified for top/left/bottom/right;
 // rather than make the css module depend on the offset module, just check for it here
 jQuery.each( [ "top", "left" ], function( i, prop ) {
 	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
 		function( elem, computed ) {
 			if ( computed ) {
 				computed = curCSS( elem, prop );
 
 				// If curCSS returns percentage, fallback to offset
 				return rnumnonpx.test( computed ) ?
 					jQuery( elem ).position()[ prop ] + "px" :
 					computed;
 			}
 		}
 	);
 } );
 
 
 // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
 jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
 	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
 		function( defaultExtra, funcName ) {
 
 		// Margin is only for outerHeight, outerWidth
 		jQuery.fn[ funcName ] = function( margin, value ) {
 			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
 				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
 
 			return access( this, function( elem, type, value ) {
 				var doc;
 
 				if ( jQuery.isWindow( elem ) ) {
 
 					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
 					return funcName.indexOf( "outer" ) === 0 ?
 						elem[ "inner" + name ] :
 						elem.document.documentElement[ "client" + name ];
 				}
 
 				// Get document width or height
 				if ( elem.nodeType === 9 ) {
 					doc = elem.documentElement;
 
 					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
 					// whichever is greatest
 					return Math.max(
 						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
 						elem.body[ "offset" + name ], doc[ "offset" + name ],
 						doc[ "client" + name ]
 					);
 				}
 
 				return value === undefined ?
 
 					// Get width or height on the element, requesting but not forcing parseFloat
 					jQuery.css( elem, type, extra ) :
 
 					// Set width or height on the element
 					jQuery.style( elem, type, value, extra );
 			}, type, chainable ? margin : undefined, chainable );
 		};
 	} );
 } );
 
 
 jQuery.fn.extend( {
 
 	bind: function( types, data, fn ) {
 		return this.on( types, null, data, fn );
 	},
 	unbind: function( types, fn ) {
 		return this.off( types, null, fn );
 	},
 
 	delegate: function( selector, types, data, fn ) {
 		return this.on( types, selector, data, fn );
 	},
 	undelegate: function( selector, types, fn ) {
 
 		// ( namespace ) or ( selector, types [, fn] )
 		return arguments.length === 1 ?
 			this.off( selector, "**" ) :
 			this.off( types, selector || "**", fn );
 	}
 } );
 
 jQuery.parseJSON = JSON.parse;
 
 
 
 
 // Register as a named AMD module, since jQuery can be concatenated with other
 // files that may use define, but not via a proper concatenation script that
 // understands anonymous AMD modules. A named AMD is safest and most robust
 // way to register. Lowercase jquery is used because AMD module names are
 // derived from file names, and jQuery is normally delivered in a lowercase
 // file name. Do this after creating the global so that if an AMD module wants
 // to call noConflict to hide this version of jQuery, it will work.
 
 // Note that for maximum portability, libraries that are not jQuery should
 // declare themselves as anonymous modules, and avoid setting a global if an
 // AMD loader is present. jQuery is a special case. For more information, see
 // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
 
 if ( typeof define === "function" && define.amd ) {
 	define( "jquery", [], function() {
 		return jQuery;
 	} );
 }
 
 
 
 
 
 var
 
 	// Map over jQuery in case of overwrite
 	_jQuery = window.jQuery,
 
 	// Map over the $ in case of overwrite
 	_$ = window.$;
 
 jQuery.noConflict = function( deep ) {
 	if ( window.$ === jQuery ) {
 		window.$ = _$;
 	}
 
 	if ( deep && window.jQuery === jQuery ) {
 		window.jQuery = _jQuery;
 	}
 
 	return jQuery;
 };
 
 // Expose jQuery and $ identifiers, even in AMD
 // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
 // and CommonJS for browser emulators (#13566)
 if ( !noGlobal ) {
 	window.jQuery = window.$ = jQuery;
 }
 
 
 return jQuery;
 } );
 /*
      _ _      _       _
  ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
                    |__/
 
  Version: 1.6.0
   Author: Ken Wheeler
  Website: http://kenwheeler.github.io
     Docs: http://kenwheeler.github.io/slick
     Repo: http://github.com/kenwheeler/slick
   Issues: http://github.com/kenwheeler/slick/issues
 
  */
 /* global window, document, define, jQuery, setInterval, clearInterval */
 (function(factory) {
     'use strict';
     if (typeof define === 'function' && define.amd) {
         define(['jquery'], factory);
     } else if (typeof exports !== 'undefined') {
         module.exports = factory(require('jquery'));
     } else {
         factory(jQuery);
     }
 
 }(function($) {
     'use strict';
     var Slick = window.Slick || {};
 
     Slick = (function() {
 
         var instanceUid = 0;
 
         function Slick(element, settings) {
 
             var _ = this, dataSettings;
 
             _.defaults = {
                 accessibility: true,
                 adaptiveHeight: false,
                 appendArrows: $(element),
                 appendDots: $(element),
                 arrows: true,
                 asNavFor: null,
                 prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                 nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                 autoplay: false,
                 autoplaySpeed: 3000,
                 centerMode: false,
                 centerPadding: '50px',
                 cssEase: 'ease',
                 customPaging: function(slider, i) {
                     return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                 },
                 dots: false,
                 dotsClass: 'slick-dots',
                 draggable: true,
                 easing: 'linear',
                 edgeFriction: 0.35,
                 fade: false,
                 focusOnSelect: false,
                 infinite: true,
                 initialSlide: 0,
                 lazyLoad: 'ondemand',
                 mobileFirst: false,
                 pauseOnHover: true,
                 pauseOnFocus: true,
                 pauseOnDotsHover: false,
                 respondTo: 'window',
                 responsive: null,
                 rows: 1,
                 rtl: false,
                 slide: '',
                 slidesPerRow: 1,
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 speed: 500,
                 swipe: true,
                 swipeToSlide: false,
                 touchMove: true,
                 touchThreshold: 5,
                 useCSS: true,
                 useTransform: true,
                 variableWidth: false,
                 vertical: false,
                 verticalSwiping: false,
                 waitForAnimate: true,
                 zIndex: 1000
             };
 
             _.initials = {
                 animating: false,
                 dragging: false,
                 autoPlayTimer: null,
                 currentDirection: 0,
                 currentLeft: null,
                 currentSlide: 0,
                 direction: 1,
                 $dots: null,
                 listWidth: null,
                 listHeight: null,
                 loadIndex: 0,
                 $nextArrow: null,
                 $prevArrow: null,
                 slideCount: null,
                 slideWidth: null,
                 $slideTrack: null,
                 $slides: null,
                 sliding: false,
                 slideOffset: 0,
                 swipeLeft: null,
                 $list: null,
                 touchObject: {},
                 transformsEnabled: false,
                 unslicked: false
             };
 
             $.extend(_, _.initials);
 
             _.activeBreakpoint = null;
             _.animType = null;
             _.animProp = null;
             _.breakpoints = [];
             _.breakpointSettings = [];
             _.cssTransitions = false;
             _.focussed = false;
             _.interrupted = false;
             _.hidden = 'hidden';
             _.paused = true;
             _.positionProp = null;
             _.respondTo = null;
             _.rowCount = 1;
             _.shouldClick = true;
             _.$slider = $(element);
             _.$slidesCache = null;
             _.transformType = null;
             _.transitionType = null;
             _.visibilityChange = 'visibilitychange';
             _.windowWidth = 0;
             _.windowTimer = null;
 
             dataSettings = $(element).data('slick') || {};
 
             _.options = $.extend({}, _.defaults, settings, dataSettings);
 
             _.currentSlide = _.options.initialSlide;
 
             _.originalSettings = _.options;
 
             if (typeof document.mozHidden !== 'undefined') {
                 _.hidden = 'mozHidden';
                 _.visibilityChange = 'mozvisibilitychange';
             } else if (typeof document.webkitHidden !== 'undefined') {
                 _.hidden = 'webkitHidden';
                 _.visibilityChange = 'webkitvisibilitychange';
             }
 
             _.autoPlay = $.proxy(_.autoPlay, _);
             _.autoPlayClear = $.proxy(_.autoPlayClear, _);
             _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
             _.changeSlide = $.proxy(_.changeSlide, _);
             _.clickHandler = $.proxy(_.clickHandler, _);
             _.selectHandler = $.proxy(_.selectHandler, _);
             _.setPosition = $.proxy(_.setPosition, _);
             _.swipeHandler = $.proxy(_.swipeHandler, _);
             _.dragHandler = $.proxy(_.dragHandler, _);
             _.keyHandler = $.proxy(_.keyHandler, _);
 
             _.instanceUid = instanceUid++;
 
             // A simple way to check for HTML strings
             // Strict HTML recognition (must start with <)
             // Extracted from jQuery v1.11 source
             _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
 
 
             _.registerBreakpoints();
             _.init(true);
 
         }
 
         return Slick;
 
     }());
 
     Slick.prototype.activateADA = function() {
         var _ = this;
 
         _.$slideTrack.find('.slick-active').attr({
             'aria-hidden': 'false'
         }).find('a, input, button, select').attr({
             'tabindex': '0'
         });
 
     };
 
     Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
 
         var _ = this;
 
         if (typeof(index) === 'boolean') {
             addBefore = index;
             index = null;
         } else if (index < 0 || (index >= _.slideCount)) {
             return false;
         }
 
         _.unload();
 
         if (typeof(index) === 'number') {
             if (index === 0 && _.$slides.length === 0) {
                 $(markup).appendTo(_.$slideTrack);
             } else if (addBefore) {
                 $(markup).insertBefore(_.$slides.eq(index));
             } else {
                 $(markup).insertAfter(_.$slides.eq(index));
             }
         } else {
             if (addBefore === true) {
                 $(markup).prependTo(_.$slideTrack);
             } else {
                 $(markup).appendTo(_.$slideTrack);
             }
         }
 
         _.$slides = _.$slideTrack.children(this.options.slide);
 
         _.$slideTrack.children(this.options.slide).detach();
 
         _.$slideTrack.append(_.$slides);
 
         _.$slides.each(function(index, element) {
             $(element).attr('data-slick-index', index);
         });
 
         _.$slidesCache = _.$slides;
 
         _.reinit();
 
     };
 
     Slick.prototype.animateHeight = function() {
         var _ = this;
         if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
             var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
             _.$list.animate({
                 height: targetHeight
             }, _.options.speed);
         }
     };
 
     Slick.prototype.animateSlide = function(targetLeft, callback) {
 
         var animProps = {},
             _ = this;
 
         _.animateHeight();
 
         if (_.options.rtl === true && _.options.vertical === false) {
             targetLeft = -targetLeft;
         }
         if (_.transformsEnabled === false) {
             if (_.options.vertical === false) {
                 _.$slideTrack.animate({
                     left: targetLeft
                 }, _.options.speed, _.options.easing, callback);
             } else {
                 _.$slideTrack.animate({
                     top: targetLeft
                 }, _.options.speed, _.options.easing, callback);
             }
 
         } else {
 
             if (_.cssTransitions === false) {
                 if (_.options.rtl === true) {
                     _.currentLeft = -(_.currentLeft);
                 }
                 $({
                     animStart: _.currentLeft
                 }).animate({
                     animStart: targetLeft
                 }, {
                     duration: _.options.speed,
                     easing: _.options.easing,
                     step: function(now) {
                         now = Math.ceil(now);
                         if (_.options.vertical === false) {
                             animProps[_.animType] = 'translate(' +
                                 now + 'px, 0px)';
                             _.$slideTrack.css(animProps);
                         } else {
                             animProps[_.animType] = 'translate(0px,' +
                                 now + 'px)';
                             _.$slideTrack.css(animProps);
                         }
                     },
                     complete: function() {
                         if (callback) {
                             callback.call();
                         }
                     }
                 });
 
             } else {
 
                 _.applyTransition();
                 targetLeft = Math.ceil(targetLeft);
 
                 if (_.options.vertical === false) {
                     animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                 } else {
                     animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                 }
                 _.$slideTrack.css(animProps);
 
                 if (callback) {
                     setTimeout(function() {
 
                         _.disableTransition();
 
                         callback.call();
                     }, _.options.speed);
                 }
 
             }
 
         }
 
     };
 
     Slick.prototype.getNavTarget = function() {
 
         var _ = this,
             asNavFor = _.options.asNavFor;
 
         if ( asNavFor && asNavFor !== null ) {
             asNavFor = $(asNavFor).not(_.$slider);
         }
 
         return asNavFor;
 
     };
 
     Slick.prototype.asNavFor = function(index) {
 
         var _ = this,
             asNavFor = _.getNavTarget();
 
         if ( asNavFor !== null && typeof asNavFor === 'object' ) {
             asNavFor.each(function() {
                 var target = $(this).slick('getSlick');
                 if(!target.unslicked) {
                     target.slideHandler(index, true);
                 }
             });
         }
 
     };
 
     Slick.prototype.applyTransition = function(slide) {
 
         var _ = this,
             transition = {};
 
         if (_.options.fade === false) {
             transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
         } else {
             transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
         }
 
         if (_.options.fade === false) {
             _.$slideTrack.css(transition);
         } else {
             _.$slides.eq(slide).css(transition);
         }
 
     };
 
     Slick.prototype.autoPlay = function() {
 
         var _ = this;
 
         _.autoPlayClear();
 
         if ( _.slideCount > _.options.slidesToShow ) {
             _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
         }
 
     };
 
     Slick.prototype.autoPlayClear = function() {
 
         var _ = this;
 
         if (_.autoPlayTimer) {
             clearInterval(_.autoPlayTimer);
         }
 
     };
 
     Slick.prototype.autoPlayIterator = function() {
 
         var _ = this,
             slideTo = _.currentSlide + _.options.slidesToScroll;
 
         if ( !_.paused && !_.interrupted && !_.focussed ) {
 
             if ( _.options.infinite === false ) {
 
                 if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                     _.direction = 0;
                 }
 
                 else if ( _.direction === 0 ) {
 
                     slideTo = _.currentSlide - _.options.slidesToScroll;
 
                     if ( _.currentSlide - 1 === 0 ) {
                         _.direction = 1;
                     }
 
                 }
 
             }
 
             _.slideHandler( slideTo );
 
         }
 
     };
 
     Slick.prototype.buildArrows = function() {
 
         var _ = this;
 
         if (_.options.arrows === true ) {
 
             _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
             _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
 
             if( _.slideCount > _.options.slidesToShow ) {
 
                 _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                 _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
 
                 if (_.htmlExpr.test(_.options.prevArrow)) {
                     _.$prevArrow.prependTo(_.options.appendArrows);
                 }
 
                 if (_.htmlExpr.test(_.options.nextArrow)) {
                     _.$nextArrow.appendTo(_.options.appendArrows);
                 }
 
                 if (_.options.infinite !== true) {
                     _.$prevArrow
                         .addClass('slick-disabled')
                         .attr('aria-disabled', 'true');
                 }
 
             } else {
 
                 _.$prevArrow.add( _.$nextArrow )
 
                     .addClass('slick-hidden')
                     .attr({
                         'aria-disabled': 'true',
                         'tabindex': '-1'
                     });
 
             }
 
         }
 
     };
 
     Slick.prototype.buildDots = function() {
 
         var _ = this,
             i, dot;
 
         if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
 
             _.$slider.addClass('slick-dotted');
 
             dot = $('<ul />').addClass(_.options.dotsClass);
 
             for (i = 0; i <= _.getDotCount(); i += 1) {
                 dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
             }
 
             _.$dots = dot.appendTo(_.options.appendDots);
 
             _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
 
         }
 
     };
 
     Slick.prototype.buildOut = function() {
 
         var _ = this;
 
         _.$slides =
             _.$slider
                 .children( _.options.slide + ':not(.slick-cloned)')
                 .addClass('slick-slide');
 
         _.slideCount = _.$slides.length;
 
         _.$slides.each(function(index, element) {
             $(element)
                 .attr('data-slick-index', index)
                 .data('originalStyling', $(element).attr('style') || '');
         });
 
         _.$slider.addClass('slick-slider');
 
         _.$slideTrack = (_.slideCount === 0) ?
             $('<div class="slick-track"/>').appendTo(_.$slider) :
             _.$slides.wrapAll('<div class="slick-track"/>').parent();
 
         _.$list = _.$slideTrack.wrap(
             '<div aria-live="polite" class="slick-list"/>').parent();
         _.$slideTrack.css('opacity', 0);
 
         if (_.options.centerMode === true || _.options.swipeToSlide === true) {
             _.options.slidesToScroll = 1;
         }
 
         $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
 
         _.setupInfinite();
 
         _.buildArrows();
 
         _.buildDots();
 
         _.updateDots();
 
 
         _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
 
         if (_.options.draggable === true) {
             _.$list.addClass('draggable');
         }
 
     };
 
     Slick.prototype.buildRows = function() {
 
         var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;
 
         newSlides = document.createDocumentFragment();
         originalSlides = _.$slider.children();
 
         if(_.options.rows > 1) {
 
             slidesPerSection = _.options.slidesPerRow * _.options.rows;
             numOfSlides = Math.ceil(
                 originalSlides.length / slidesPerSection
             );
 
             for(a = 0; a < numOfSlides; a++){
                 var slide = document.createElement('div');
                 for(b = 0; b < _.options.rows; b++) {
                     var row = document.createElement('div');
                     for(c = 0; c < _.options.slidesPerRow; c++) {
                         var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                         if (originalSlides.get(target)) {
                             row.appendChild(originalSlides.get(target));
                         }
                     }
                     slide.appendChild(row);
                 }
                 newSlides.appendChild(slide);
             }
 
             _.$slider.empty().append(newSlides);
             _.$slider.children().children().children()
                 .css({
                     'width':(100 / _.options.slidesPerRow) + '%',
                     'display': 'inline-block'
                 });
 
         }
 
     };
 
     Slick.prototype.checkResponsive = function(initial, forceUpdate) {
 
         var _ = this,
             breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
         var sliderWidth = _.$slider.width();
         var windowWidth = window.innerWidth || $(window).width();
 
         if (_.respondTo === 'window') {
             respondToWidth = windowWidth;
         } else if (_.respondTo === 'slider') {
             respondToWidth = sliderWidth;
         } else if (_.respondTo === 'min') {
             respondToWidth = Math.min(windowWidth, sliderWidth);
         }
 
         if ( _.options.responsive &&
             _.options.responsive.length &&
             _.options.responsive !== null) {
 
             targetBreakpoint = null;
 
             for (breakpoint in _.breakpoints) {
                 if (_.breakpoints.hasOwnProperty(breakpoint)) {
                     if (_.originalSettings.mobileFirst === false) {
                         if (respondToWidth < _.breakpoints[breakpoint]) {
                             targetBreakpoint = _.breakpoints[breakpoint];
                         }
                     } else {
                         if (respondToWidth > _.breakpoints[breakpoint]) {
                             targetBreakpoint = _.breakpoints[breakpoint];
                         }
                     }
                 }
             }
 
             if (targetBreakpoint !== null) {
                 if (_.activeBreakpoint !== null) {
                     if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                         _.activeBreakpoint =
                             targetBreakpoint;
                         if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                             _.unslick(targetBreakpoint);
                         } else {
                             _.options = $.extend({}, _.originalSettings,
                                 _.breakpointSettings[
                                     targetBreakpoint]);
                             if (initial === true) {
                                 _.currentSlide = _.options.initialSlide;
                             }
                             _.refresh(initial);
                         }
                         triggerBreakpoint = targetBreakpoint;
                     }
                 } else {
                     _.activeBreakpoint = targetBreakpoint;
                     if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                         _.unslick(targetBreakpoint);
                     } else {
                         _.options = $.extend({}, _.originalSettings,
                             _.breakpointSettings[
                                 targetBreakpoint]);
                         if (initial === true) {
                             _.currentSlide = _.options.initialSlide;
                         }
                         _.refresh(initial);
                     }
                     triggerBreakpoint = targetBreakpoint;
                 }
             } else {
                 if (_.activeBreakpoint !== null) {
                     _.activeBreakpoint = null;
                     _.options = _.originalSettings;
                     if (initial === true) {
                         _.currentSlide = _.options.initialSlide;
                     }
                     _.refresh(initial);
                     triggerBreakpoint = targetBreakpoint;
                 }
             }
 
             // only trigger breakpoints during an actual break. not on initialize.
             if( !initial && triggerBreakpoint !== false ) {
                 _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
             }
         }
 
     };
 
     Slick.prototype.changeSlide = function(event, dontAnimate) {
 
         var _ = this,
             $target = $(event.currentTarget),
             indexOffset, slideOffset, unevenOffset;
 
         // If target is a link, prevent default action.
         if($target.is('a')) {
             event.preventDefault();
         }
 
         // If target is not the <li> element (ie: a child), find the <li>.
         if(!$target.is('li')) {
             $target = $target.closest('li');
         }
 
         unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
         indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
 
         switch (event.data.message) {
 
             case 'previous':
                 slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                 if (_.slideCount > _.options.slidesToShow) {
                     _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                 }
                 break;
 
             case 'next':
                 slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                 if (_.slideCount > _.options.slidesToShow) {
                     _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                 }
                 break;
 
             case 'index':
                 var index = event.data.index === 0 ? 0 :
                     event.data.index || $target.index() * _.options.slidesToScroll;
 
                 _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                 $target.children().trigger('focus');
                 break;
 
             default:
                 return;
         }
 
     };
 
     Slick.prototype.checkNavigable = function(index) {
 
         var _ = this,
             navigables, prevNavigable;
 
         navigables = _.getNavigableIndexes();
         prevNavigable = 0;
         if (index > navigables[navigables.length - 1]) {
             index = navigables[navigables.length - 1];
         } else {
             for (var n in navigables) {
                 if (index < navigables[n]) {
                     index = prevNavigable;
                     break;
                 }
                 prevNavigable = navigables[n];
             }
         }
 
         return index;
     };
 
     Slick.prototype.cleanUpEvents = function() {
 
         var _ = this;
 
         if (_.options.dots && _.$dots !== null) {
 
             $('li', _.$dots)
                 .off('click.slick', _.changeSlide)
                 .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                 .off('mouseleave.slick', $.proxy(_.interrupt, _, false));
 
         }
 
         _.$slider.off('focus.slick blur.slick');
 
         if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
             _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
             _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
         }
 
         _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
         _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
         _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
         _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
 
         _.$list.off('click.slick', _.clickHandler);
 
         $(document).off(_.visibilityChange, _.visibility);
 
         _.cleanUpSlideEvents();
 
         if (_.options.accessibility === true) {
             _.$list.off('keydown.slick', _.keyHandler);
         }
 
         if (_.options.focusOnSelect === true) {
             $(_.$slideTrack).children().off('click.slick', _.selectHandler);
         }
 
         $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
 
         $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
 
         $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
 
         $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
         $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
 
     };
 
     Slick.prototype.cleanUpSlideEvents = function() {
 
         var _ = this;
 
         _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
         _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
 
     };
 
     Slick.prototype.cleanUpRows = function() {
 
         var _ = this, originalSlides;
 
         if(_.options.rows > 1) {
             originalSlides = _.$slides.children().children();
             originalSlides.removeAttr('style');
             _.$slider.empty().append(originalSlides);
         }
 
     };
 
     Slick.prototype.clickHandler = function(event) {
 
         var _ = this;
 
         if (_.shouldClick === false) {
             event.stopImmediatePropagation();
             event.stopPropagation();
             event.preventDefault();
         }
 
     };
 
     Slick.prototype.destroy = function(refresh) {
 
         var _ = this;
 
         _.autoPlayClear();
 
         _.touchObject = {};
 
         _.cleanUpEvents();
 
         $('.slick-cloned', _.$slider).detach();
 
         if (_.$dots) {
             _.$dots.remove();
         }
 
 
         if ( _.$prevArrow && _.$prevArrow.length ) {
 
             _.$prevArrow
                 .removeClass('slick-disabled slick-arrow slick-hidden')
                 .removeAttr('aria-hidden aria-disabled tabindex')
                 .css('display','');
 
             if ( _.htmlExpr.test( _.options.prevArrow )) {
                 _.$prevArrow.remove();
             }
         }
 
         if ( _.$nextArrow && _.$nextArrow.length ) {
 
             _.$nextArrow
                 .removeClass('slick-disabled slick-arrow slick-hidden')
                 .removeAttr('aria-hidden aria-disabled tabindex')
                 .css('display','');
 
             if ( _.htmlExpr.test( _.options.nextArrow )) {
                 _.$nextArrow.remove();
             }
 
         }
 
 
         if (_.$slides) {
 
             _.$slides
                 .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                 .removeAttr('aria-hidden')
                 .removeAttr('data-slick-index')
                 .each(function(){
                     $(this).attr('style', $(this).data('originalStyling'));
                 });
 
             _.$slideTrack.children(this.options.slide).detach();
 
             _.$slideTrack.detach();
 
             _.$list.detach();
 
             _.$slider.append(_.$slides);
         }
 
         _.cleanUpRows();
 
         _.$slider.removeClass('slick-slider');
         _.$slider.removeClass('slick-initialized');
         _.$slider.removeClass('slick-dotted');
 
         _.unslicked = true;
 
         if(!refresh) {
             _.$slider.trigger('destroy', [_]);
         }
 
     };
 
     Slick.prototype.disableTransition = function(slide) {
 
         var _ = this,
             transition = {};
 
         transition[_.transitionType] = '';
 
         if (_.options.fade === false) {
             _.$slideTrack.css(transition);
         } else {
             _.$slides.eq(slide).css(transition);
         }
 
     };
 
     Slick.prototype.fadeSlide = function(slideIndex, callback) {
 
         var _ = this;
 
         if (_.cssTransitions === false) {
 
             _.$slides.eq(slideIndex).css({
                 zIndex: _.options.zIndex
             });
 
             _.$slides.eq(slideIndex).animate({
                 opacity: 1
             }, _.options.speed, _.options.easing, callback);
 
         } else {
 
             _.applyTransition(slideIndex);
 
             _.$slides.eq(slideIndex).css({
                 opacity: 1,
                 zIndex: _.options.zIndex
             });
 
             if (callback) {
                 setTimeout(function() {
 
                     _.disableTransition(slideIndex);
 
                     callback.call();
                 }, _.options.speed);
             }
 
         }
 
     };
 
     Slick.prototype.fadeSlideOut = function(slideIndex) {
 
         var _ = this;
 
         if (_.cssTransitions === false) {
 
             _.$slides.eq(slideIndex).animate({
                 opacity: 0,
                 zIndex: _.options.zIndex - 2
             }, _.options.speed, _.options.easing);
 
         } else {
 
             _.applyTransition(slideIndex);
 
             _.$slides.eq(slideIndex).css({
                 opacity: 0,
                 zIndex: _.options.zIndex - 2
             });
 
         }
 
     };
 
     Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
 
         var _ = this;
 
         if (filter !== null) {
 
             _.$slidesCache = _.$slides;
 
             _.unload();
 
             _.$slideTrack.children(this.options.slide).detach();
 
             _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
 
             _.reinit();
 
         }
 
     };
 
     Slick.prototype.focusHandler = function() {
 
         var _ = this;
 
         _.$slider
             .off('focus.slick blur.slick')
             .on('focus.slick blur.slick',
                 '*:not(.slick-arrow)', function(event) {
 
             event.stopImmediatePropagation();
             var $sf = $(this);
 
             setTimeout(function() {
 
                 if( _.options.pauseOnFocus ) {
                     _.focussed = $sf.is(':focus');
                     _.autoPlay();
                 }
 
             }, 0);
 
         });
     };
 
     Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
 
         var _ = this;
         return _.currentSlide;
 
     };
 
     Slick.prototype.getDotCount = function() {
 
         var _ = this;
 
         var breakPoint = 0;
         var counter = 0;
         var pagerQty = 0;
 
         if (_.options.infinite === true) {
             while (breakPoint < _.slideCount) {
                 ++pagerQty;
                 breakPoint = counter + _.options.slidesToScroll;
                 counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
             }
         } else if (_.options.centerMode === true) {
             pagerQty = _.slideCount;
         } else if(!_.options.asNavFor) {
             pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
         }else {
             while (breakPoint < _.slideCount) {
                 ++pagerQty;
                 breakPoint = counter + _.options.slidesToScroll;
                 counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
             }
         }
 
         return pagerQty - 1;
 
     };
 
     Slick.prototype.getLeft = function(slideIndex) {
 
         var _ = this,
             targetLeft,
             verticalHeight,
             verticalOffset = 0,
             targetSlide;
 
         _.slideOffset = 0;
         verticalHeight = _.$slides.first().outerHeight(true);
 
         if (_.options.infinite === true) {
             if (_.slideCount > _.options.slidesToShow) {
                 _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                 verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
             }
             if (_.slideCount % _.options.slidesToScroll !== 0) {
                 if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                     if (slideIndex > _.slideCount) {
                         _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                         verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                     } else {
                         _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                         verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                     }
                 }
             }
         } else {
             if (slideIndex + _.options.slidesToShow > _.slideCount) {
                 _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                 verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
             }
         }
 
         if (_.slideCount <= _.options.slidesToShow) {
             _.slideOffset = 0;
             verticalOffset = 0;
         }
 
         if (_.options.centerMode === true && _.options.infinite === true) {
             _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
         } else if (_.options.centerMode === true) {
             _.slideOffset = 0;
             _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
         }
 
         if (_.options.vertical === false) {
             targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
         } else {
             targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
         }
 
         if (_.options.variableWidth === true) {
 
             if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                 targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
             } else {
                 targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
             }
 
             if (_.options.rtl === true) {
                 if (targetSlide[0]) {
                     targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                 } else {
                     targetLeft =  0;
                 }
             } else {
                 targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
             }
 
             if (_.options.centerMode === true) {
                 if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                     targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                 } else {
                     targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                 }
 
                 if (_.options.rtl === true) {
                     if (targetSlide[0]) {
                         targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                     } else {
                         targetLeft =  0;
                     }
                 } else {
                     targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                 }
 
                 targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
             }
         }
 
         return targetLeft;
 
     };
 
     Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
 
         var _ = this;
 
         return _.options[option];
 
     };
 
     Slick.prototype.getNavigableIndexes = function() {
 
         var _ = this,
             breakPoint = 0,
             counter = 0,
             indexes = [],
             max;
 
         if (_.options.infinite === false) {
             max = _.slideCount;
         } else {
             breakPoint = _.options.slidesToScroll * -1;
             counter = _.options.slidesToScroll * -1;
             max = _.slideCount * 2;
         }
 
         while (breakPoint < max) {
             indexes.push(breakPoint);
             breakPoint = counter + _.options.slidesToScroll;
             counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
         }
 
         return indexes;
 
     };
 
     Slick.prototype.getSlick = function() {
 
         return this;
 
     };
 
     Slick.prototype.getSlideCount = function() {
 
         var _ = this,
             slidesTraversed, swipedSlide, centerOffset;
 
         centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
 
         if (_.options.swipeToSlide === true) {
             _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                 if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                     swipedSlide = slide;
                     return false;
                 }
             });
 
             slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
 
             return slidesTraversed;
 
         } else {
             return _.options.slidesToScroll;
         }
 
     };
 
     Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
 
         var _ = this;
 
         _.changeSlide({
             data: {
                 message: 'index',
                 index: parseInt(slide)
             }
         }, dontAnimate);
 
     };
 
     Slick.prototype.init = function(creation) {
 
         var _ = this;
 
         if (!$(_.$slider).hasClass('slick-initialized')) {
 
             $(_.$slider).addClass('slick-initialized');
 
             _.buildRows();
             _.buildOut();
             _.setProps();
             _.startLoad();
             _.loadSlider();
             _.initializeEvents();
             _.updateArrows();
             _.updateDots();
             _.checkResponsive(true);
             _.focusHandler();
 
         }
 
         if (creation) {
             _.$slider.trigger('init', [_]);
         }
 
         if (_.options.accessibility === true) {
             _.initADA();
         }
 
         if ( _.options.autoplay ) {
 
             _.paused = false;
             _.autoPlay();
 
         }
 
     };
 
     Slick.prototype.initADA = function() {
         var _ = this;
         _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
             'aria-hidden': 'true',
             'tabindex': '-1'
         }).find('a, input, button, select').attr({
             'tabindex': '-1'
         });
 
         _.$slideTrack.attr('role', 'listbox');
 
         _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
             $(this).attr({
                 'role': 'option',
                 'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
             });
         });
 
         if (_.$dots !== null) {
             _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                 $(this).attr({
                     'role': 'presentation',
                     'aria-selected': 'false',
                     'aria-controls': 'navigation' + _.instanceUid + i + '',
                     'id': 'slick-slide' + _.instanceUid + i + ''
                 });
             })
                 .first().attr('aria-selected', 'true').end()
                 .find('button').attr('role', 'button').end()
                 .closest('div').attr('role', 'toolbar');
         }
         _.activateADA();
 
     };
 
     Slick.prototype.initArrowEvents = function() {
 
         var _ = this;
 
         if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
             _.$prevArrow
                .off('click.slick')
                .on('click.slick', {
                     message: 'previous'
                }, _.changeSlide);
             _.$nextArrow
                .off('click.slick')
                .on('click.slick', {
                     message: 'next'
                }, _.changeSlide);
         }
 
     };
 
     Slick.prototype.initDotEvents = function() {
 
         var _ = this;
 
         if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
             $('li', _.$dots).on('click.slick', {
                 message: 'index'
             }, _.changeSlide);
         }
 
         if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {
 
             $('li', _.$dots)
                 .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                 .on('mouseleave.slick', $.proxy(_.interrupt, _, false));
 
         }
 
     };
 
     Slick.prototype.initSlideEvents = function() {
 
         var _ = this;
 
         if ( _.options.pauseOnHover ) {
 
             _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
             _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
 
         }
 
     };
 
     Slick.prototype.initializeEvents = function() {
 
         var _ = this;
 
         _.initArrowEvents();
 
         _.initDotEvents();
         _.initSlideEvents();
 
         _.$list.on('touchstart.slick mousedown.slick', {
             action: 'start'
         }, _.swipeHandler);
         _.$list.on('touchmove.slick mousemove.slick', {
             action: 'move'
         }, _.swipeHandler);
         _.$list.on('touchend.slick mouseup.slick', {
             action: 'end'
         }, _.swipeHandler);
         _.$list.on('touchcancel.slick mouseleave.slick', {
             action: 'end'
         }, _.swipeHandler);
 
         _.$list.on('click.slick', _.clickHandler);
 
         $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
 
         if (_.options.accessibility === true) {
             _.$list.on('keydown.slick', _.keyHandler);
         }
 
         if (_.options.focusOnSelect === true) {
             $(_.$slideTrack).children().on('click.slick', _.selectHandler);
         }
 
         $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
 
         $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
 
         $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
 
         $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
         $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
 
     };
 
     Slick.prototype.initUI = function() {
 
         var _ = this;
 
         if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
 
             _.$prevArrow.show();
             _.$nextArrow.show();
 
         }
 
         if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
 
             _.$dots.show();
 
         }
 
     };
 
     Slick.prototype.keyHandler = function(event) {
 
         var _ = this;
          //Dont slide if the cursor is inside the form fields and arrow keys are pressed
         if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
             if (event.keyCode === 37 && _.options.accessibility === true) {
                 _.changeSlide({
                     data: {
                         message: _.options.rtl === true ? 'next' :  'previous'
                     }
                 });
             } else if (event.keyCode === 39 && _.options.accessibility === true) {
                 _.changeSlide({
                     data: {
                         message: _.options.rtl === true ? 'previous' : 'next'
                     }
                 });
             }
         }
 
     };
 
     Slick.prototype.lazyLoad = function() {
 
         var _ = this,
             loadRange, cloneRange, rangeStart, rangeEnd;
 
         function loadImages(imagesScope) {
 
             $('img[data-lazy]', imagesScope).each(function() {
 
                 var image = $(this),
                     imageSource = $(this).attr('data-lazy'),
                     imageToLoad = document.createElement('img');
 
                 imageToLoad.onload = function() {
 
                     image
                         .animate({ opacity: 0 }, 100, function() {
                             image
                                 .attr('src', imageSource)
                                 .animate({ opacity: 1 }, 200, function() {
                                     image
                                         .removeAttr('data-lazy')
                                         .removeClass('slick-loading');
                                 });
                             _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                         });
 
                 };
 
                 imageToLoad.onerror = function() {
 
                     image
                         .removeAttr( 'data-lazy' )
                         .removeClass( 'slick-loading' )
                         .addClass( 'slick-lazyload-error' );
 
                     _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
 
                 };
 
                 imageToLoad.src = imageSource;
 
             });
 
         }
 
         if (_.options.centerMode === true) {
             if (_.options.infinite === true) {
                 rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                 rangeEnd = rangeStart + _.options.slidesToShow + 2;
             } else {
                 rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                 rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
             }
         } else {
             rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
             rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
             if (_.options.fade === true) {
                 if (rangeStart > 0) rangeStart--;
                 if (rangeEnd <= _.slideCount) rangeEnd++;
             }
         }
 
         loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
         loadImages(loadRange);
 
         if (_.slideCount <= _.options.slidesToShow) {
             cloneRange = _.$slider.find('.slick-slide');
             loadImages(cloneRange);
         } else
         if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
             cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
             loadImages(cloneRange);
         } else if (_.currentSlide === 0) {
             cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
             loadImages(cloneRange);
         }
 
     };
 
     Slick.prototype.loadSlider = function() {
 
         var _ = this;
 
         _.setPosition();
 
         _.$slideTrack.css({
             opacity: 1
         });
 
         _.$slider.removeClass('slick-loading');
 
         _.initUI();
 
         if (_.options.lazyLoad === 'progressive') {
             _.progressiveLazyLoad();
         }
 
     };
 
     Slick.prototype.next = Slick.prototype.slickNext = function() {
 
         var _ = this;
 
         _.changeSlide({
             data: {
                 message: 'next'
             }
         });
 
     };
 
     Slick.prototype.orientationChange = function() {
 
         var _ = this;
 
         _.checkResponsive();
         _.setPosition();
 
     };
 
     Slick.prototype.pause = Slick.prototype.slickPause = function() {
 
         var _ = this;
 
         _.autoPlayClear();
         _.paused = true;
 
     };
 
     Slick.prototype.play = Slick.prototype.slickPlay = function() {
 
         var _ = this;
 
         _.autoPlay();
         _.options.autoplay = true;
         _.paused = false;
         _.focussed = false;
         _.interrupted = false;
 
     };
 
     Slick.prototype.postSlide = function(index) {
 
         var _ = this;
 
         if( !_.unslicked ) {
 
             _.$slider.trigger('afterChange', [_, index]);
 
             _.animating = false;
 
             _.setPosition();
 
             _.swipeLeft = null;
 
             if ( _.options.autoplay ) {
                 _.autoPlay();
             }
 
             if (_.options.accessibility === true) {
                 _.initADA();
             }
 
         }
 
     };
 
     Slick.prototype.prev = Slick.prototype.slickPrev = function() {
 
         var _ = this;
 
         _.changeSlide({
             data: {
                 message: 'previous'
             }
         });
 
     };
 
     Slick.prototype.preventDefault = function(event) {
 
         event.preventDefault();
 
     };
 
     Slick.prototype.progressiveLazyLoad = function( tryCount ) {
 
         tryCount = tryCount || 1;
 
         var _ = this,
             $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
             image,
             imageSource,
             imageToLoad;
 
         if ( $imgsToLoad.length ) {
 
             image = $imgsToLoad.first();
             imageSource = image.attr('data-lazy');
             imageToLoad = document.createElement('img');
 
             imageToLoad.onload = function() {
 
                 image
                     .attr( 'src', imageSource )
                     .removeAttr('data-lazy')
                     .removeClass('slick-loading');
 
                 if ( _.options.adaptiveHeight === true ) {
                     _.setPosition();
                 }
 
                 _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                 _.progressiveLazyLoad();
 
             };
 
             imageToLoad.onerror = function() {
 
                 if ( tryCount < 3 ) {
 
                     /**
                      * try to load the image 3 times,
                      * leave a slight delay so we don't get
                      * servers blocking the request.
                      */
                     setTimeout( function() {
                         _.progressiveLazyLoad( tryCount + 1 );
                     }, 500 );
 
                 } else {
 
                     image
                         .removeAttr( 'data-lazy' )
                         .removeClass( 'slick-loading' )
                         .addClass( 'slick-lazyload-error' );
 
                     _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
 
                     _.progressiveLazyLoad();
 
                 }
 
             };
 
             imageToLoad.src = imageSource;
 
         } else {
 
             _.$slider.trigger('allImagesLoaded', [ _ ]);
 
         }
 
     };
 
     Slick.prototype.refresh = function( initializing ) {
 
         var _ = this, currentSlide, lastVisibleIndex;
 
         lastVisibleIndex = _.slideCount - _.options.slidesToShow;
 
         // in non-infinite sliders, we don't want to go past the
         // last visible index.
         if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
             _.currentSlide = lastVisibleIndex;
         }
 
         // if less slides than to show, go to start.
         if ( _.slideCount <= _.options.slidesToShow ) {
             _.currentSlide = 0;
 
         }
 
         currentSlide = _.currentSlide;
 
         _.destroy(true);
 
         $.extend(_, _.initials, { currentSlide: currentSlide });
 
         _.init();
 
         if( !initializing ) {
 
             _.changeSlide({
                 data: {
                     message: 'index',
                     index: currentSlide
                 }
             }, false);
 
         }
 
     };
 
     Slick.prototype.registerBreakpoints = function() {
 
         var _ = this, breakpoint, currentBreakpoint, l,
             responsiveSettings = _.options.responsive || null;
 
         if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {
 
             _.respondTo = _.options.respondTo || 'window';
 
             for ( breakpoint in responsiveSettings ) {
 
                 l = _.breakpoints.length-1;
                 currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
 
                 if (responsiveSettings.hasOwnProperty(breakpoint)) {
 
                     // loop through the breakpoints and cut out any existing
                     // ones with the same breakpoint number, we don't want dupes.
                     while( l >= 0 ) {
                         if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                             _.breakpoints.splice(l,1);
                         }
                         l--;
                     }
 
                     _.breakpoints.push(currentBreakpoint);
                     _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
 
                 }
 
             }
 
             _.breakpoints.sort(function(a, b) {
                 return ( _.options.mobileFirst ) ? a-b : b-a;
             });
 
         }
 
     };
 
     Slick.prototype.reinit = function() {
 
         var _ = this;
 
         _.$slides =
             _.$slideTrack
                 .children(_.options.slide)
                 .addClass('slick-slide');
 
         _.slideCount = _.$slides.length;
 
         if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
             _.currentSlide = _.currentSlide - _.options.slidesToScroll;
         }
 
         if (_.slideCount <= _.options.slidesToShow) {
             _.currentSlide = 0;
         }
 
         _.registerBreakpoints();
 
         _.setProps();
         _.setupInfinite();
         _.buildArrows();
         _.updateArrows();
         _.initArrowEvents();
         _.buildDots();
         _.updateDots();
         _.initDotEvents();
         _.cleanUpSlideEvents();
         _.initSlideEvents();
 
         _.checkResponsive(false, true);
 
         if (_.options.focusOnSelect === true) {
             $(_.$slideTrack).children().on('click.slick', _.selectHandler);
         }
 
         _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
 
         _.setPosition();
         _.focusHandler();
 
         _.paused = !_.options.autoplay;
         _.autoPlay();
 
         _.$slider.trigger('reInit', [_]);
 
     };
 
     Slick.prototype.resize = function() {
 
         var _ = this;
 
         if ($(window).width() !== _.windowWidth) {
             clearTimeout(_.windowDelay);
             _.windowDelay = window.setTimeout(function() {
                 _.windowWidth = $(window).width();
                 _.checkResponsive();
                 if( !_.unslicked ) { _.setPosition(); }
             }, 50);
         }
     };
 
     Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
 
         var _ = this;
 
         if (typeof(index) === 'boolean') {
             removeBefore = index;
             index = removeBefore === true ? 0 : _.slideCount - 1;
         } else {
             index = removeBefore === true ? --index : index;
         }
 
         if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
             return false;
         }
 
         _.unload();
 
         if (removeAll === true) {
             _.$slideTrack.children().remove();
         } else {
             _.$slideTrack.children(this.options.slide).eq(index).remove();
         }
 
         _.$slides = _.$slideTrack.children(this.options.slide);
 
         _.$slideTrack.children(this.options.slide).detach();
 
         _.$slideTrack.append(_.$slides);
 
         _.$slidesCache = _.$slides;
 
         _.reinit();
 
     };
 
     Slick.prototype.setCSS = function(position) {
 
         var _ = this,
             positionProps = {},
             x, y;
 
         if (_.options.rtl === true) {
             position = -position;
         }
         x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
         y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
 
         positionProps[_.positionProp] = position;
 
         if (_.transformsEnabled === false) {
             _.$slideTrack.css(positionProps);
         } else {
             positionProps = {};
             if (_.cssTransitions === false) {
                 positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                 _.$slideTrack.css(positionProps);
             } else {
                 positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                 _.$slideTrack.css(positionProps);
             }
         }
 
     };
 
     Slick.prototype.setDimensions = function() {
 
         var _ = this;
 
         if (_.options.vertical === false) {
             if (_.options.centerMode === true) {
                 _.$list.css({
                     padding: ('0px ' + _.options.centerPadding)
                 });
             }
         } else {
             _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
             if (_.options.centerMode === true) {
                 _.$list.css({
                     padding: (_.options.centerPadding + ' 0px')
                 });
             }
         }
 
         _.listWidth = _.$list.width();
         _.listHeight = _.$list.height();
 
 
         if (_.options.vertical === false && _.options.variableWidth === false) {
             _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
             _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
 
         } else if (_.options.variableWidth === true) {
             _.$slideTrack.width(5000 * _.slideCount);
         } else {
             _.slideWidth = Math.ceil(_.listWidth);
             _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
         }
 
         var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
         if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
 
     };
 
     Slick.prototype.setFade = function() {
 
         var _ = this,
             targetLeft;
 
         _.$slides.each(function(index, element) {
             targetLeft = (_.slideWidth * index) * -1;
             if (_.options.rtl === true) {
                 $(element).css({
                     position: 'relative',
                     right: targetLeft,
                     top: 0,
                     zIndex: _.options.zIndex - 2,
                     opacity: 0
                 });
             } else {
                 $(element).css({
                     position: 'relative',
                     left: targetLeft,
                     top: 0,
                     zIndex: _.options.zIndex - 2,
                     opacity: 0
                 });
             }
         });
 
         _.$slides.eq(_.currentSlide).css({
             zIndex: _.options.zIndex - 1,
             opacity: 1
         });
 
     };
 
     Slick.prototype.setHeight = function() {
 
         var _ = this;
 
         if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
             var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
             _.$list.css('height', targetHeight);
         }
 
     };
 
     Slick.prototype.setOption =
     Slick.prototype.slickSetOption = function() {
 
         /**
          * accepts arguments in format of:
          *
          *  - for changing a single option's value:
          *     .slick("setOption", option, value, refresh )
          *
          *  - for changing a set of responsive options:
          *     .slick("setOption", 'responsive', [{}, ...], refresh )
          *
          *  - for updating multiple values at once (not responsive)
          *     .slick("setOption", { 'option': value, ... }, refresh )
          */
 
         var _ = this, l, item, option, value, refresh = false, type;
 
         if( $.type( arguments[0] ) === 'object' ) {
 
             option =  arguments[0];
             refresh = arguments[1];
             type = 'multiple';
 
         } else if ( $.type( arguments[0] ) === 'string' ) {
 
             option =  arguments[0];
             value = arguments[1];
             refresh = arguments[2];
 
             if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {
 
                 type = 'responsive';
 
             } else if ( typeof arguments[1] !== 'undefined' ) {
 
                 type = 'single';
 
             }
 
         }
 
         if ( type === 'single' ) {
 
             _.options[option] = value;
 
 
         } else if ( type === 'multiple' ) {
 
             $.each( option , function( opt, val ) {
 
                 _.options[opt] = val;
 
             });
 
 
         } else if ( type === 'responsive' ) {
 
             for ( item in value ) {
 
                 if( $.type( _.options.responsive ) !== 'array' ) {
 
                     _.options.responsive = [ value[item] ];
 
                 } else {
 
                     l = _.options.responsive.length-1;
 
                     // loop through the responsive object and splice out duplicates.
                     while( l >= 0 ) {
 
                         if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
 
                             _.options.responsive.splice(l,1);
 
                         }
 
                         l--;
 
                     }
 
                     _.options.responsive.push( value[item] );
 
                 }
 
             }
 
         }
 
         if ( refresh ) {
 
             _.unload();
             _.reinit();
 
         }
 
     };
 
     Slick.prototype.setPosition = function() {
 
         var _ = this;
 
         _.setDimensions();
 
         _.setHeight();
 
         if (_.options.fade === false) {
             _.setCSS(_.getLeft(_.currentSlide));
         } else {
             _.setFade();
         }
 
         _.$slider.trigger('setPosition', [_]);
 
     };
 
     Slick.prototype.setProps = function() {
 
         var _ = this,
             bodyStyle = document.body.style;
 
         _.positionProp = _.options.vertical === true ? 'top' : 'left';
 
         if (_.positionProp === 'top') {
             _.$slider.addClass('slick-vertical');
         } else {
             _.$slider.removeClass('slick-vertical');
         }
 
         if (bodyStyle.WebkitTransition !== undefined ||
             bodyStyle.MozTransition !== undefined ||
             bodyStyle.msTransition !== undefined) {
             if (_.options.useCSS === true) {
                 _.cssTransitions = true;
             }
         }
 
         if ( _.options.fade ) {
             if ( typeof _.options.zIndex === 'number' ) {
                 if( _.options.zIndex < 3 ) {
                     _.options.zIndex = 3;
                 }
             } else {
                 _.options.zIndex = _.defaults.zIndex;
             }
         }
 
         if (bodyStyle.OTransform !== undefined) {
             _.animType = 'OTransform';
             _.transformType = '-o-transform';
             _.transitionType = 'OTransition';
             if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
         }
         if (bodyStyle.MozTransform !== undefined) {
             _.animType = 'MozTransform';
             _.transformType = '-moz-transform';
             _.transitionType = 'MozTransition';
             if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
         }
         if (bodyStyle.webkitTransform !== undefined) {
             _.animType = 'webkitTransform';
             _.transformType = '-webkit-transform';
             _.transitionType = 'webkitTransition';
             if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
         }
         if (bodyStyle.msTransform !== undefined) {
             _.animType = 'msTransform';
             _.transformType = '-ms-transform';
             _.transitionType = 'msTransition';
             if (bodyStyle.msTransform === undefined) _.animType = false;
         }
         if (bodyStyle.transform !== undefined && _.animType !== false) {
             _.animType = 'transform';
             _.transformType = 'transform';
             _.transitionType = 'transition';
         }
         _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
     };
 
 
     Slick.prototype.setSlideClasses = function(index) {
 
         var _ = this,
             centerOffset, allSlides, indexOffset, remainder;
 
         allSlides = _.$slider
             .find('.slick-slide')
             .removeClass('slick-active slick-center slick-current')
             .attr('aria-hidden', 'true');
 
         _.$slides
             .eq(index)
             .addClass('slick-current');
 
         if (_.options.centerMode === true) {
 
             centerOffset = Math.floor(_.options.slidesToShow / 2);
 
             if (_.options.infinite === true) {
 
                 if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
 
                     _.$slides
                         .slice(index - centerOffset, index + centerOffset + 1)
                         .addClass('slick-active')
                         .attr('aria-hidden', 'false');
 
                 } else {
 
                     indexOffset = _.options.slidesToShow + index;
                     allSlides
                         .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                         .addClass('slick-active')
                         .attr('aria-hidden', 'false');
 
                 }
 
                 if (index === 0) {
 
                     allSlides
                         .eq(allSlides.length - 1 - _.options.slidesToShow)
                         .addClass('slick-center');
 
                 } else if (index === _.slideCount - 1) {
 
                     allSlides
                         .eq(_.options.slidesToShow)
                         .addClass('slick-center');
 
                 }
 
             }
 
             _.$slides
                 .eq(index)
                 .addClass('slick-center');
 
         } else {
 
             if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
 
                 _.$slides
                     .slice(index, index + _.options.slidesToShow)
                     .addClass('slick-active')
                     .attr('aria-hidden', 'false');
 
             } else if (allSlides.length <= _.options.slidesToShow) {
 
                 allSlides
                     .addClass('slick-active')
                     .attr('aria-hidden', 'false');
 
             } else {
 
                 remainder = _.slideCount % _.options.slidesToShow;
                 indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
 
                 if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
 
                     allSlides
                         .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                         .addClass('slick-active')
                         .attr('aria-hidden', 'false');
 
                 } else {
 
                     allSlides
                         .slice(indexOffset, indexOffset + _.options.slidesToShow)
                         .addClass('slick-active')
                         .attr('aria-hidden', 'false');
 
                 }
 
             }
 
         }
 
         if (_.options.lazyLoad === 'ondemand') {
             _.lazyLoad();
         }
 
     };
 
     Slick.prototype.setupInfinite = function() {
 
         var _ = this,
             i, slideIndex, infiniteCount;
 
         if (_.options.fade === true) {
             _.options.centerMode = false;
         }
 
         if (_.options.infinite === true && _.options.fade === false) {
 
             slideIndex = null;
 
             if (_.slideCount > _.options.slidesToShow) {
 
                 if (_.options.centerMode === true) {
                     infiniteCount = _.options.slidesToShow + 1;
                 } else {
                     infiniteCount = _.options.slidesToShow;
                 }
 
                 for (i = _.slideCount; i > (_.slideCount -
                         infiniteCount); i -= 1) {
                     slideIndex = i - 1;
                     $(_.$slides[slideIndex]).clone(true).attr('id', '')
                         .attr('data-slick-index', slideIndex - _.slideCount)
                         .prependTo(_.$slideTrack).addClass('slick-cloned');
                 }
                 for (i = 0; i < infiniteCount; i += 1) {
                     slideIndex = i;
                     $(_.$slides[slideIndex]).clone(true).attr('id', '')
                         .attr('data-slick-index', slideIndex + _.slideCount)
                         .appendTo(_.$slideTrack).addClass('slick-cloned');
                 }
                 _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                     $(this).attr('id', '');
                 });
 
             }
 
         }
 
     };
 
     Slick.prototype.interrupt = function( toggle ) {
 
         var _ = this;
 
         if( !toggle ) {
             _.autoPlay();
         }
         _.interrupted = toggle;
 
     };
 
     Slick.prototype.selectHandler = function(event) {
 
         var _ = this;
 
         var targetElement =
             $(event.target).is('.slick-slide') ?
                 $(event.target) :
                 $(event.target).parents('.slick-slide');
 
         var index = parseInt(targetElement.attr('data-slick-index'));
 
         if (!index) index = 0;
 
         if (_.slideCount <= _.options.slidesToShow) {
 
             _.setSlideClasses(index);
             _.asNavFor(index);
             return;
 
         }
 
         _.slideHandler(index);
 
     };
 
     Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
 
         var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
             _ = this, navTarget;
 
         sync = sync || false;
 
         if (_.animating === true && _.options.waitForAnimate === true) {
             return;
         }
 
         if (_.options.fade === true && _.currentSlide === index) {
             return;
         }
 
         if (_.slideCount <= _.options.slidesToShow) {
             return;
         }
 
         if (sync === false) {
             _.asNavFor(index);
         }
 
         targetSlide = index;
         targetLeft = _.getLeft(targetSlide);
         slideLeft = _.getLeft(_.currentSlide);
 
         _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
 
         if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
             if (_.options.fade === false) {
                 targetSlide = _.currentSlide;
                 if (dontAnimate !== true) {
                     _.animateSlide(slideLeft, function() {
                         _.postSlide(targetSlide);
                     });
                 } else {
                     _.postSlide(targetSlide);
                 }
             }
             return;
         } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
             if (_.options.fade === false) {
                 targetSlide = _.currentSlide;
                 if (dontAnimate !== true) {
                     _.animateSlide(slideLeft, function() {
                         _.postSlide(targetSlide);
                     });
                 } else {
                     _.postSlide(targetSlide);
                 }
             }
             return;
         }
 
         if ( _.options.autoplay ) {
             clearInterval(_.autoPlayTimer);
         }
 
         if (targetSlide < 0) {
             if (_.slideCount % _.options.slidesToScroll !== 0) {
                 animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
             } else {
                 animSlide = _.slideCount + targetSlide;
             }
         } else if (targetSlide >= _.slideCount) {
             if (_.slideCount % _.options.slidesToScroll !== 0) {
                 animSlide = 0;
             } else {
                 animSlide = targetSlide - _.slideCount;
             }
         } else {
             animSlide = targetSlide;
         }
 
         _.animating = true;
 
         _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
 
         oldSlide = _.currentSlide;
         _.currentSlide = animSlide;
 
         _.setSlideClasses(_.currentSlide);
 
         if ( _.options.asNavFor ) {
 
             navTarget = _.getNavTarget();
             navTarget = navTarget.slick('getSlick');
 
             if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                 navTarget.setSlideClasses(_.currentSlide);
             }
 
         }
 
         _.updateDots();
         _.updateArrows();
 
         if (_.options.fade === true) {
             if (dontAnimate !== true) {
 
                 _.fadeSlideOut(oldSlide);
 
                 _.fadeSlide(animSlide, function() {
                     _.postSlide(animSlide);
                 });
 
             } else {
                 _.postSlide(animSlide);
             }
             _.animateHeight();
             return;
         }
 
         if (dontAnimate !== true) {
             _.animateSlide(targetLeft, function() {
                 _.postSlide(animSlide);
             });
         } else {
             _.postSlide(animSlide);
         }
 
     };
 
     Slick.prototype.startLoad = function() {
 
         var _ = this;
 
         if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
 
             _.$prevArrow.hide();
             _.$nextArrow.hide();
 
         }
 
         if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
 
             _.$dots.hide();
 
         }
 
         _.$slider.addClass('slick-loading');
 
     };
 
     Slick.prototype.swipeDirection = function() {
 
         var xDist, yDist, r, swipeAngle, _ = this;
 
         xDist = _.touchObject.startX - _.touchObject.curX;
         yDist = _.touchObject.startY - _.touchObject.curY;
         r = Math.atan2(yDist, xDist);
 
         swipeAngle = Math.round(r * 180 / Math.PI);
         if (swipeAngle < 0) {
             swipeAngle = 360 - Math.abs(swipeAngle);
         }
 
         if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
             return (_.options.rtl === false ? 'left' : 'right');
         }
         if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
             return (_.options.rtl === false ? 'left' : 'right');
         }
         if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
             return (_.options.rtl === false ? 'right' : 'left');
         }
         if (_.options.verticalSwiping === true) {
             if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                 return 'down';
             } else {
                 return 'up';
             }
         }
 
         return 'vertical';
 
     };
 
     Slick.prototype.swipeEnd = function(event) {
 
         var _ = this,
             slideCount,
             direction;
 
         _.dragging = false;
         _.interrupted = false;
         _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;
 
         if ( _.touchObject.curX === undefined ) {
             return false;
         }
 
         if ( _.touchObject.edgeHit === true ) {
             _.$slider.trigger('edge', [_, _.swipeDirection() ]);
         }
 
         if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {
 
             direction = _.swipeDirection();
 
             switch ( direction ) {
 
                 case 'left':
                 case 'down':
 
                     slideCount =
                         _.options.swipeToSlide ?
                             _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                             _.currentSlide + _.getSlideCount();
 
                     _.currentDirection = 0;
 
                     break;
 
                 case 'right':
                 case 'up':
 
                     slideCount =
                         _.options.swipeToSlide ?
                             _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                             _.currentSlide - _.getSlideCount();
 
                     _.currentDirection = 1;
 
                     break;
 
                 default:
 
 
             }
 
             if( direction != 'vertical' ) {
 
                 _.slideHandler( slideCount );
                 _.touchObject = {};
                 _.$slider.trigger('swipe', [_, direction ]);
 
             }
 
         } else {
 
             if ( _.touchObject.startX !== _.touchObject.curX ) {
 
                 _.slideHandler( _.currentSlide );
                 _.touchObject = {};
 
             }
 
         }
 
     };
 
     Slick.prototype.swipeHandler = function(event) {
 
         var _ = this;
 
         if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
             return;
         } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
             return;
         }
 
         _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
             event.originalEvent.touches.length : 1;
 
         _.touchObject.minSwipe = _.listWidth / _.options
             .touchThreshold;
 
         if (_.options.verticalSwiping === true) {
             _.touchObject.minSwipe = _.listHeight / _.options
                 .touchThreshold;
         }
 
         switch (event.data.action) {
 
             case 'start':
                 _.swipeStart(event);
                 break;
 
             case 'move':
                 _.swipeMove(event);
                 break;
 
             case 'end':
                 _.swipeEnd(event);
                 break;
 
         }
 
     };
 
     Slick.prototype.swipeMove = function(event) {
 
         var _ = this,
             edgeWasHit = false,
             curLeft, swipeDirection, swipeLength, positionOffset, touches;
 
         touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
 
         if (!_.dragging || touches && touches.length !== 1) {
             return false;
         }
 
         curLeft = _.getLeft(_.currentSlide);
 
         _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
         _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
 
         _.touchObject.swipeLength = Math.round(Math.sqrt(
             Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
 
         if (_.options.verticalSwiping === true) {
             _.touchObject.swipeLength = Math.round(Math.sqrt(
                 Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
         }
 
         swipeDirection = _.swipeDirection();
 
         if (swipeDirection === 'vertical') {
             return;
         }
 
         if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
             event.preventDefault();
         }
 
         positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
         if (_.options.verticalSwiping === true) {
             positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
         }
 
 
         swipeLength = _.touchObject.swipeLength;
 
         _.touchObject.edgeHit = false;
 
         if (_.options.infinite === false) {
             if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                 swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                 _.touchObject.edgeHit = true;
             }
         }
 
         if (_.options.vertical === false) {
             _.swipeLeft = curLeft + swipeLength * positionOffset;
         } else {
             _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
         }
         if (_.options.verticalSwiping === true) {
             _.swipeLeft = curLeft + swipeLength * positionOffset;
         }
 
         if (_.options.fade === true || _.options.touchMove === false) {
             return false;
         }
 
         if (_.animating === true) {
             _.swipeLeft = null;
             return false;
         }
 
         _.setCSS(_.swipeLeft);
 
     };
 
     Slick.prototype.swipeStart = function(event) {
 
         var _ = this,
             touches;
 
         _.interrupted = true;
 
         if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
             _.touchObject = {};
             return false;
         }
 
         if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
             touches = event.originalEvent.touches[0];
         }
 
         _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
         _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
 
         _.dragging = true;
 
     };
 
     Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
 
         var _ = this;
 
         if (_.$slidesCache !== null) {
 
             _.unload();
 
             _.$slideTrack.children(this.options.slide).detach();
 
             _.$slidesCache.appendTo(_.$slideTrack);
 
             _.reinit();
 
         }
 
     };
 
     Slick.prototype.unload = function() {
 
         var _ = this;
 
         $('.slick-cloned', _.$slider).remove();
 
         if (_.$dots) {
             _.$dots.remove();
         }
 
         if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
             _.$prevArrow.remove();
         }
 
         if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
             _.$nextArrow.remove();
         }
 
         _.$slides
             .removeClass('slick-slide slick-active slick-visible slick-current')
             .attr('aria-hidden', 'true')
             .css('width', '');
 
     };
 
     Slick.prototype.unslick = function(fromBreakpoint) {
 
         var _ = this;
         _.$slider.trigger('unslick', [_, fromBreakpoint]);
         _.destroy();
 
     };
 
     Slick.prototype.updateArrows = function() {
 
         var _ = this,
             centerOffset;
 
         centerOffset = Math.floor(_.options.slidesToShow / 2);
 
         if ( _.options.arrows === true &&
             _.slideCount > _.options.slidesToShow &&
             !_.options.infinite ) {
 
             _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
             _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
 
             if (_.currentSlide === 0) {
 
                 _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                 _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
 
             } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
 
                 _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                 _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
 
             } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
 
                 _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                 _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
 
             }
 
         }
 
     };
 
     Slick.prototype.updateDots = function() {
 
         var _ = this;
 
         if (_.$dots !== null) {
 
             _.$dots
                 .find('li')
                 .removeClass('slick-active')
                 .attr('aria-hidden', 'true');
 
             _.$dots
                 .find('li')
                 .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                 .addClass('slick-active')
                 .attr('aria-hidden', 'false');
 
         }
 
     };
 
     Slick.prototype.visibility = function() {
 
         var _ = this;
 
         if ( _.options.autoplay ) {
 
             if ( document[_.hidden] ) {
 
                 _.interrupted = true;
 
             } else {
 
                 _.interrupted = false;
 
             }
 
         }
 
     };
 
     $.fn.slick = function() {
         var _ = this,
             opt = arguments[0],
             args = Array.prototype.slice.call(arguments, 1),
             l = _.length,
             i,
             ret;
         for (i = 0; i < l; i++) {
             if (typeof opt == 'object' || typeof opt == 'undefined')
                 _[i].slick = new Slick(_[i], opt);
             else
                 ret = _[i].slick[opt].apply(_[i].slick, args);
             if (typeof ret != 'undefined') return ret;
         }
         return _;
     };
 
 }));
 /*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
 !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});


$(document).ready(function() {
   // open menu
   $('.menu-icon').click(function() {
     $('.menu').slideToggle();
   });
   // open search
   $('.search-icon').click(function() {
     $('.menu__search').slideToggle('slow');
   });
   $('.slider').slick({
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     vertical: true,
     dots: true,
     verticalSwiping: true,
     arrows: false,
     responsive: [
       {
         breakpoint: 1200,
         settings: {
           vertical: false,
           verticalSwiping: false
         }
       }
     ]
   });
   
   // плавный скроллинг к элементу
   // element - элемент, к которому скроллим
   // duration - продолжительность анимации
   // offset - смещение, на которое недоскроллит скролл -
   // чтобы пользователь понимал где оказался,
   // должен быть видет соседний элемент
   
   var scrollTo = function(element, duration, offset, callback){
   	var position = element.offset().top;
   	duration = duration || 700;
   	offset = offset || 0;
   	$('html, body').animate({scrollTop: position - offset}, duration, callback);
   };
   
   
   // вешает на элемент button обработчик события по click
   // на который открывается элемент element
   
   var dropDown = function(button, element) {
   
   	button.on('click', function(evt){
   		evt.preventDefault();
   		var self = this;
   		var height = 0;
   		var transition = element.css('transition');
   		var textBefore = button.data('textbefore');
   		var textAfter = button.data('textafter');
   
   		if (element.outerHeight() == 0) {
   			element.css('transition', '');
   			element.css('height', 'auto');
   			height = element.outerHeight();
   			element.css('height', '0');
   			element.css('transition', transition);
   			console.log(element.css('transition'));
   			element.css('height', height);
   
   //меняем текст в кнопке, на указанный в атрибутах data-textbefore/text-after
   			if (textAfter) {
   				$(self).text(textAfter);
   			};
   
   			element.css('height', height + 'px');
   			scrollTo(element, 300, 30);
   		} else {
   //меняем текст в кнопке, на указанный в атрибутах data-textbefore/text-after
   			if (textBefore) {
   				$(self).text(textBefore);
   			};
   			scrollTo(element.parent(), 300, 100, function(){
   				element.css('height', height + 'px');
   			});
   		};
   	});
   
   };
   
   // функция для скрытых форм регистрации,
   // как на странице организуй у нас
   var showHiddenBox = function(button, element){
   
   	button.on('click', function(evt){
   		evt.preventDefault();
   		element.addClass('_show');
   	});
   	element.find('.close-button').on('click', function(){
   		element.removeClass('_show');
   	});
   };
   $('#events-timetable').slick({
     slidesToShow: 2,
     slidesToScroll: 1,
     vertical: true,
     dots: false,
     arrows: true,
     draggable: true,
     infinite: false,
     responsive: [
       {
         breakpoint: 800,
         settings: {
           slidesToShow: 3
         }
       },
       {
         breakpoint: 640,
         settings: {
           slidesToShow: 1
         }
       }
     ]
   });
   $('.main-text--slider').slick({
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     dots: true,
     arrows: false,
     autoplay: true
   });
   $('.events-gallery__list--slider').slick({
     infinite: false,
     slidesToShow: 3,
     slidesToScroll: 1,
     dots: false,
     arrows: true,
     autoplay: false,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1
         }
       }
     ]
   });
   $('.event-gallery__item').magnificPopup({
     type: 'image',
     gallery: {
       enabled: true
     },
     removalDelay: 300,
     mainClass: 'mfp-fade'
   });
   $('.blog-archive__slider').slick({
     infinite: false,
     slidesToShow: 3,
     slidesToScroll: 1,
     dots: false,
     arrows: true,
     autoplay: false,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1
         }
       }
     ]
   });
   $('.blog-archive__subscribe').click(function(e) {
     e.preventDefault();
     $('.blog-subscribe').slideToggle();
   });
   $('#show').click(function(e) {
     e.preventDefault();
     $('.blog-archive--hidden').animate({height: '100%'}, 'slow');
   });
   $('#comments__btn').click(function(e) {
     e.preventDefault();
     $('.comments__form').slideToggle();
   });
   (function($){
   
   	var eMail = 'tk@imaguru.by';
   
   	$('.header__nav-toggler').on('click', function(){
   		$('.header__nav').toggleClass('show');
   	});
   
   	$(window).on('resize', function(){
   		$('.header__nav').removeClass('show');
   	});
   
   	var registrationForm = $('.course-registration-form');
   
   	var letterConstructor = function(form){
   		return { 'first_name': form.elements['f_name'].value,
   				 'last_name': form.elements['l_name'].value,
   				 'phone': form.elements['phone'].value,
   				 'email': form.elements['email'].value,
   				 'event_title': form.elements['event_title'].value,
   		};
   	};
   
   	var tryToSendEmail = function(form){
   		var letter = letterConstructor(form);
   		jQuery.ajax({
   			type: "POST",
   			url: 'php/send_mail.php',
   			data: {
   				'letter': letter,
   				'e_mail': eMail
   			},
   			success: function(){
   				registrationForm.addClass('_sended');
   			},
   		});
   	};
   
   	registrationForm.on('submit', function(evt){
   		evt.preventDefault();
   		if (!$(this).is('._sended')){
   			tryToSendEmail(this);
   		};
   		return false;
   	});
   
   	$('.marker').on('click', function(evt){
   		evt.preventDefault();
   		var selector = $(this).attr('href');
   		scrollTo($(selector), 800);
   		return false;
   	});
   
   // learn more
   	var learnMoreBtn = $('.learn-more-btn');
   	var learnMoreSection = $('.learn-more');
   	var programmSection = $('.programm-section');
   
   	var setLearnMoreHeight = function(){
   		var height = 0;
   
   		if (learnMoreSection.is('._show')) {
   			scrollTo(learnMoreBtn, 300);
   			learnMoreSection.children().each(function(){
   				height += $(this).outerHeight();
   			});
   		} else {
   			scrollTo(programmSection, 300);
   		};
   
   		learnMoreSection.css('height', height + 'px');
   		return;
   	};
   
   	learnMoreBtn.on('click', function(evt){
   		evt.preventDefault();
   		learnMoreSection.toggleClass('_show');
   		setLearnMoreHeight();
   	});
   
   }(jQuery));
   ;(function(){
   
   // владки
   	var tabContent = $('.tab-content');
   
   	for (var i = 0; i < tabContent.length; i++){
   
   		var showMoreButton = tabContent.eq(i).find('.show-more');
   		var showMoreContent = tabContent.eq(i).find('.show-more-info');
   
   		dropDown(showMoreButton, showMoreContent);
   	};
   // слайдер на вкладке с едой
   	$('.slider-block__catering').slick({
   		infinite: true,
   		dots: true,
   		slidesToShow: 1,
   		slidesToScroll: 1,
   		autoplay: true
   	});
   
   // скрытые формы 
   	var offers = $('.offer-item');
   	for (var i = 0; i < offers.length; i++) {
   		var showHidden = offers.eq(i).find('.show-hidden');
   		var hiddenBox = offers.eq(i).find('.colored-info-box--hidden');
   		showHiddenBox(showHidden, hiddenBox);
   	};
   }());
     $('#jobs-button').click(function() {
       $('#jobs li:hidden').slice(0, 3).fadeIn();
       if ($('#jobs li').length == $('#jobs li:visible').length) {
         $('#jobs-button').fadeOut();
       }
     });
   
     $('#team-button').click(function() {
       $('#team li:hidden').slice(0, 3).fadeIn();
       if ($('#team li').length == $('#team li:visible').length) {
         $('#team-button').fadeOut();
       }
     });
     $('#partners-button').click(function() {
       $('#partners li:hidden').slice(0, 4).fadeIn();
       if ($('#partners li').length == $('#partners li:visible').length) {
         $('#partners-button').fadeOut();
       }
     });
});
=======
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e,t){t=t||J;var n=t.createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}function i(e){var t=!!e&&"length"in e&&e.length,n=pe.type(e);return"function"!==n&&!pe.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function o(e,t,n){if(pe.isFunction(t))return pe.grep(e,function(e,i){return!!t.call(e,i,e)!==n});if(t.nodeType)return pe.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(ke.test(t))return pe.filter(t,e,n);t=pe.filter(t,e)}return pe.grep(e,function(e){return oe.call(t,e)>-1!==n&&1===e.nodeType})}function r(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function s(e){var t={};return pe.each(e.match(Ae)||[],function(e,n){t[n]=!0}),t}function a(e){return e}function l(e){throw e}function c(e,t,n){var i;try{e&&pe.isFunction(i=e.promise)?i.call(e).done(t).fail(n):e&&pe.isFunction(i=e.then)?i.call(e,t,n):t.call(void 0,e)}catch(e){n.call(void 0,e)}}function d(){J.removeEventListener("DOMContentLoaded",d),e.removeEventListener("load",d),pe.ready()}function u(){this.expando=pe.expando+u.uid++}function p(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Ne,"-$&").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Ie.test(n)?JSON.parse(n):n)}catch(e){}He.set(e,t,n)}else n=void 0;return n}function f(e,t,n,i){var o,r=1,s=20,a=i?function(){return i.cur()}:function(){return pe.css(e,t,"")},l=a(),c=n&&n[3]||(pe.cssNumber[t]?"":"px"),d=(pe.cssNumber[t]||"px"!==c&&+l)&&qe.exec(pe.css(e,t));if(d&&d[3]!==c){c=c||d[3],n=n||[],d=+l||1;do r=r||".5",d/=r,pe.style(e,t,d+c);while(r!==(r=a()/l)&&1!==r&&--s)}return n&&(d=+d||+l||0,o=n[1]?d+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=d,i.end=o)),o}function h(e){var t,n=e.ownerDocument,i=e.nodeName,o=We[i];return o?o:(t=n.body.appendChild(n.createElement(i)),o=pe.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),We[i]=o,o)}function g(e,t){for(var n,i,o=[],r=0,s=e.length;r<s;r++)i=e[r],i.style&&(n=i.style.display,t?("none"===n&&(o[r]=Le.get(i,"display")||null,o[r]||(i.style.display="")),""===i.style.display&&ze(i)&&(o[r]=h(i))):"none"!==n&&(o[r]="none",Le.set(i,"display",n)));for(r=0;r<s;r++)null!=o[r]&&(e[r].style.display=o[r]);return e}function m(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&pe.nodeName(e,t)?pe.merge([e],n):n}function v(e,t){for(var n=0,i=e.length;n<i;n++)Le.set(e[n],"globalEval",!t||Le.get(t[n],"globalEval"))}function y(e,t,n,i,o){for(var r,s,a,l,c,d,u=t.createDocumentFragment(),p=[],f=0,h=e.length;f<h;f++)if(r=e[f],r||0===r)if("object"===pe.type(r))pe.merge(p,r.nodeType?[r]:r);else if(Ye.test(r)){for(s=s||u.appendChild(t.createElement("div")),a=(Be.exec(r)||["",""])[1].toLowerCase(),l=Xe[a]||Xe._default,s.innerHTML=l[1]+pe.htmlPrefilter(r)+l[2],d=l[0];d--;)s=s.lastChild;pe.merge(p,s.childNodes),s=u.firstChild,s.textContent=""}else p.push(t.createTextNode(r));for(u.textContent="",f=0;r=p[f++];)if(i&&pe.inArray(r,i)>-1)o&&o.push(r);else if(c=pe.contains(r.ownerDocument,r),s=m(u.appendChild(r),"script"),c&&v(s),n)for(d=0;r=s[d++];)Ue.test(r.type||"")&&n.push(r);return u}function w(){return!0}function b(){return!1}function x(){try{return J.activeElement}catch(e){}}function k(e,t,n,i,o,r){var s,a;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(a in t)k(e,a,n,i,t[a],r);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),o===!1)o=b;else if(!o)return e;return 1===r&&(s=o,o=function(e){return pe().off(e),s.apply(this,arguments)},o.guid=s.guid||(s.guid=pe.guid++)),e.each(function(){pe.event.add(this,t,o,i,n)})}function T(e,t){return pe.nodeName(e,"table")&&pe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e:e}function C(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function S(e){var t=tt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function $(e,t){var n,i,o,r,s,a,l,c;if(1===t.nodeType){if(Le.hasData(e)&&(r=Le.access(e),s=Le.set(t,r),c=r.events)){delete s.handle,s.events={};for(o in c)for(n=0,i=c[o].length;n<i;n++)pe.event.add(t,o,c[o][n])}He.hasData(e)&&(a=He.access(e),l=pe.extend({},a),He.set(t,l))}}function E(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Re.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function A(e,t,i,o){t=ne.apply([],t);var r,s,a,l,c,d,u=0,p=e.length,f=p-1,h=t[0],g=pe.isFunction(h);if(g||p>1&&"string"==typeof h&&!de.checkClone&&et.test(h))return e.each(function(n){var r=e.eq(n);g&&(t[0]=h.call(this,n,r.html())),A(r,t,i,o)});if(p&&(r=y(t,e[0].ownerDocument,!1,e,o),s=r.firstChild,1===r.childNodes.length&&(r=s),s||o)){for(a=pe.map(m(r,"script"),C),l=a.length;u<p;u++)c=r,u!==f&&(c=pe.clone(c,!0,!0),l&&pe.merge(a,m(c,"script"))),i.call(e[u],c,u);if(l)for(d=a[a.length-1].ownerDocument,pe.map(a,S),u=0;u<l;u++)c=a[u],Ue.test(c.type||"")&&!Le.access(c,"globalEval")&&pe.contains(d,c)&&(c.src?pe._evalUrl&&pe._evalUrl(c.src):n(c.textContent.replace(nt,""),d))}return e}function j(e,t,n){for(var i,o=t?pe.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||pe.cleanData(m(i)),i.parentNode&&(n&&pe.contains(i.ownerDocument,i)&&v(m(i,"script")),i.parentNode.removeChild(i));return e}function O(e,t,n){var i,o,r,s,a=e.style;return n=n||rt(e),n&&(s=n.getPropertyValue(t)||n[t],""!==s||pe.contains(e.ownerDocument,e)||(s=pe.style(e,t)),!de.pixelMarginRight()&&ot.test(s)&&it.test(t)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function P(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function D(e){if(e in dt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=ct.length;n--;)if(e=ct[n]+t,e in dt)return e}function L(e,t,n){var i=qe.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function H(e,t,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===t?1:0,s=0;r<4;r+=2)"margin"===n&&(s+=pe.css(e,n+Fe[r],!0,o)),i?("content"===n&&(s-=pe.css(e,"padding"+Fe[r],!0,o)),"margin"!==n&&(s-=pe.css(e,"border"+Fe[r]+"Width",!0,o))):(s+=pe.css(e,"padding"+Fe[r],!0,o),"padding"!==n&&(s+=pe.css(e,"border"+Fe[r]+"Width",!0,o)));return s}function I(e,t,n){var i,o=!0,r=rt(e),s="border-box"===pe.css(e,"boxSizing",!1,r);if(e.getClientRects().length&&(i=e.getBoundingClientRect()[t]),i<=0||null==i){if(i=O(e,t,r),(i<0||null==i)&&(i=e.style[t]),ot.test(i))return i;o=s&&(de.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+H(e,t,n||(s?"border":"content"),o,r)+"px"}function N(e,t,n,i,o){return new N.prototype.init(e,t,n,i,o)}function M(){pt&&(e.requestAnimationFrame(M),pe.fx.tick())}function q(){return e.setTimeout(function(){ut=void 0}),ut=pe.now()}function F(e,t){var n,i=0,o={height:e};for(t=t?1:0;i<4;i+=2-t)n=Fe[i],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function z(e,t,n){for(var i,o=(R.tweeners[t]||[]).concat(R.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,t,e))return i}function _(e,t,n){var i,o,r,s,a,l,c,d,u="width"in t||"height"in t,p=this,f={},h=e.style,m=e.nodeType&&ze(e),v=Le.get(e,"fxshow");n.queue||(s=pe._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always(function(){p.always(function(){s.unqueued--,pe.queue(e,"fx").length||s.empty.fire()})}));for(i in t)if(o=t[i],ft.test(o)){if(delete t[i],r=r||"toggle"===o,o===(m?"hide":"show")){if("show"!==o||!v||void 0===v[i])continue;m=!0}f[i]=v&&v[i]||pe.style(e,i)}if(l=!pe.isEmptyObject(t),l||!pe.isEmptyObject(f)){u&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],c=v&&v.display,null==c&&(c=Le.get(e,"display")),d=pe.css(e,"display"),"none"===d&&(c?d=c:(g([e],!0),c=e.style.display||c,d=pe.css(e,"display"),g([e]))),("inline"===d||"inline-block"===d&&null!=c)&&"none"===pe.css(e,"float")&&(l||(p.done(function(){h.display=c}),null==c&&(d=h.display,c="none"===d?"":d)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),l=!1;for(i in f)l||(v?"hidden"in v&&(m=v.hidden):v=Le.access(e,"fxshow",{display:c}),r&&(v.hidden=!m),m&&g([e],!0),p.done(function(){m||g([e]),Le.remove(e,"fxshow");for(i in f)pe.style(e,i,f[i])})),l=z(m?v[i]:0,i,p),i in v||(v[i]=l.start,m&&(l.end=l.start,l.start=0))}}function W(e,t){var n,i,o,r,s;for(n in e)if(i=pe.camelCase(n),o=t[i],r=e[n],pe.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),s=pe.cssHooks[i],s&&"expand"in s){r=s.expand(r),delete e[i];for(n in r)n in e||(e[n]=r[n],t[n]=o)}else t[i]=o}function R(e,t,n){var i,o,r=0,s=R.prefilters.length,a=pe.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var t=ut||q(),n=Math.max(0,c.startTime+c.duration-t),i=n/c.duration||0,r=1-i,s=0,l=c.tweens.length;s<l;s++)c.tweens[s].run(r);return a.notifyWith(e,[c,r,n]),r<1&&l?n:(a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:pe.extend({},t),opts:pe.extend(!0,{specialEasing:{},easing:pe.easing._default},n),originalProperties:t,originalOptions:n,startTime:ut||q(),duration:n.duration,tweens:[],createTween:function(t,n){var i=pe.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(o)return this;for(o=!0;n<i;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),d=c.props;for(W(d,c.opts.specialEasing);r<s;r++)if(i=R.prefilters[r].call(c,e,d,c.opts))return pe.isFunction(i.stop)&&(pe._queueHooks(c.elem,c.opts.queue).stop=pe.proxy(i.stop,i)),i;return pe.map(d,z,c),pe.isFunction(c.opts.start)&&c.opts.start.call(e,c),pe.fx.timer(pe.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function B(e){return e.getAttribute&&e.getAttribute("class")||""}function U(e,t,n,i){var o;if(pe.isArray(t))pe.each(t,function(t,o){n||$t.test(e)?i(e,o):U(e+"["+("object"==typeof o&&null!=o?t:"")+"]",o,n,i)});else if(n||"object"!==pe.type(t))i(e,t);else for(o in t)U(e+"["+o+"]",t[o],n,i)}function X(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,o=0,r=t.toLowerCase().match(Ae)||[];if(pe.isFunction(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function Y(e,t,n,i){function o(a){var l;return r[a]=!0,pe.each(e[a]||[],function(e,a){var c=a(t,n,i);return"string"!=typeof c||s||r[c]?s?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)}),l}var r={},s=e===qt;return o(t.dataTypes[0])||!r["*"]&&o("*")}function G(e,t){var n,i,o=pe.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&pe.extend(!0,e,i),e}function V(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}s||(s=o)}r=r||s}if(r)return r!==l[0]&&l.unshift(r),n[r]}function K(e,t,n,i){var o,r,s,a,l,c={},d=e.dataTypes.slice();if(d[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(r=d.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=d.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(s=c[l+" "+r]||c["* "+r],!s)for(o in c)if(a=o.split(" "),a[1]===r&&(s=c[l+" "+a[0]]||c["* "+a[0]])){s===!0?s=c[o]:c[o]!==!0&&(r=a[0],d.unshift(a[1]));break}if(s!==!0)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}function Q(e){return pe.isWindow(e)?e:9===e.nodeType&&e.defaultView}var Z=[],J=e.document,ee=Object.getPrototypeOf,te=Z.slice,ne=Z.concat,ie=Z.push,oe=Z.indexOf,re={},se=re.toString,ae=re.hasOwnProperty,le=ae.toString,ce=le.call(Object),de={},ue="3.1.0",pe=function(e,t){return new pe.fn.init(e,t)},fe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,he=/^-ms-/,ge=/-([a-z])/g,me=function(e,t){return t.toUpperCase()};pe.fn=pe.prototype={jquery:ue,constructor:pe,length:0,toArray:function(){return te.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:te.call(this)},pushStack:function(e){var t=pe.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return pe.each(this,e)},map:function(e){return this.pushStack(pe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(te.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:ie,sort:Z.sort,splice:Z.splice},pe.extend=pe.fn.extend=function(){var e,t,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||pe.isFunction(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(c&&i&&(pe.isPlainObject(i)||(o=pe.isArray(i)))?(o?(o=!1,r=n&&pe.isArray(n)?n:[]):r=n&&pe.isPlainObject(n)?n:{},s[t]=pe.extend(c,r,i)):void 0!==i&&(s[t]=i));return s},pe.extend({expando:"jQuery"+(ue+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===pe.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=pe.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==se.call(e))&&(!(t=ee(e))||(n=ae.call(t,"constructor")&&t.constructor,"function"==typeof n&&le.call(n)===ce))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?re[se.call(e)]||"object":typeof e},globalEval:function(e){n(e)},camelCase:function(e){return e.replace(he,"ms-").replace(ge,me)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,o=0;if(i(e))for(n=e.length;o<n&&t.call(e[o],o,e[o])!==!1;o++);else for(o in e)if(t.call(e[o],o,e[o])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(fe,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(i(Object(e))?pe.merge(n,"string"==typeof e?[e]:e):ie.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:oe.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){for(var i,o=[],r=0,s=e.length,a=!n;r<s;r++)i=!t(e[r],r),i!==a&&o.push(e[r]);return o},map:function(e,t,n){var o,r,s=0,a=[];if(i(e))for(o=e.length;s<o;s++)r=t(e[s],s,n),null!=r&&a.push(r);else for(s in e)r=t(e[s],s,n),null!=r&&a.push(r);return ne.apply([],a)},guid:1,proxy:function(e,t){var n,i,o;if("string"==typeof t&&(n=e[t],t=e,e=n),pe.isFunction(e))return i=te.call(arguments,2),o=function(){return e.apply(t||this,i.concat(te.call(arguments)))},o.guid=e.guid=e.guid||pe.guid++,o},now:Date.now,support:de}),"function"==typeof Symbol&&(pe.fn[Symbol.iterator]=Z[Symbol.iterator]),pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){re["[object "+t+"]"]=t.toLowerCase()});var ve=function(e){function t(e,t,n,i){var o,r,s,a,l,c,d,p=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!i&&((t?t.ownerDocument||t:_)!==L&&D(t),t=t||L,I)){if(11!==h&&(l=ve.exec(e)))if(o=l[1]){if(9===h){if(!(s=t.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(p&&(s=p.getElementById(o))&&F(t,s)&&s.id===o)return n.push(s),n}else{if(l[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((o=l[3])&&k.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(o)),n}if(k.qsa&&!X[e+" "]&&(!N||!N.test(e))){if(1!==h)p=t,d=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(xe,ke):t.setAttribute("id",a=z),c=$(e),r=c.length;r--;)c[r]="#"+a+" "+f(c[r]);d=c.join(","),p=ye.test(e)&&u(t.parentNode)||t}if(d)try{return Z.apply(n,p.querySelectorAll(d)),n}catch(e){}finally{a===z&&t.removeAttribute("id")}}}return A(e.replace(ae,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[z]=!0,e}function o(e){var t=L.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var n=e.split("|"),i=n.length;i--;)T.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return function(t){return"label"in t&&t.disabled===e||"form"in t&&t.disabled===e||"form"in t&&t.disabled===!1&&(t.isDisabled===e||t.isDisabled!==!e&&("label"in t||!Ce(t))!==e)}}function d(e){return i(function(t){return t=+t,i(function(n,i){for(var o,r=e([],n.length,t),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function u(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function p(){}function f(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function h(e,t,n){var i=t.dir,o=t.next,r=o||i,s=n&&"parentNode"===r,a=R++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,o)}:function(t,n,l){var c,d,u,p=[W,a];if(l){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||s)if(u=t[z]||(t[z]={}),d=u[t.uniqueID]||(u[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[i]||t;else{if((c=d[r])&&c[0]===W&&c[1]===a)return p[2]=c[2];if(d[r]=p,p[2]=e(t,n,l))return!0}}}function g(e){return e.length>1?function(t,n,i){for(var o=e.length;o--;)if(!e[o](t,n,i))return!1;return!0}:e[0]}function m(e,n,i){for(var o=0,r=n.length;o<r;o++)t(e,n[o],i);return i}function v(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(r=e[a])&&(n&&!n(r,i,o)||(s.push(r),c&&t.push(a)));return s}function y(e,t,n,o,r,s){return o&&!o[z]&&(o=y(o)),r&&!r[z]&&(r=y(r,s)),i(function(i,s,a,l){var c,d,u,p=[],f=[],h=s.length,g=i||m(t||"*",a.nodeType?[a]:a,[]),y=!e||!i&&t?g:v(g,p,e,a,l),w=n?r||(i?e:h||o)?[]:s:y;if(n&&n(y,w,a,l),o)for(c=v(w,f),o(c,[],a,l),d=c.length;d--;)(u=c[d])&&(w[f[d]]=!(y[f[d]]=u));if(i){if(r||e){if(r){for(c=[],d=w.length;d--;)(u=w[d])&&c.push(y[d]=u);r(null,w=[],c,l)}for(d=w.length;d--;)(u=w[d])&&(c=r?ee(i,u):p[d])>-1&&(i[c]=!(s[c]=u))}}else w=v(w===s?w.splice(h,w.length):w),r?r(null,s,w,l):Z.apply(s,w)})}function w(e){for(var t,n,i,o=e.length,r=T.relative[e[0].type],s=r||T.relative[" "],a=r?1:0,l=h(function(e){return e===t},s,!0),c=h(function(e){return ee(t,e)>-1},s,!0),d=[function(e,n,i){var o=!r&&(i||n!==j)||((t=n).nodeType?l(e,n,i):c(e,n,i));return t=null,o}];a<o;a++)if(n=T.relative[e[a].type])d=[h(g(d),n)];else{if(n=T.filter[e[a].type].apply(null,e[a].matches),n[z]){for(i=++a;i<o&&!T.relative[e[i].type];i++);return y(a>1&&g(d),a>1&&f(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),n,a<i&&w(e.slice(a,i)),i<o&&w(e=e.slice(i)),i<o&&f(e))}d.push(n)}return g(d)}function b(e,n){var o=n.length>0,r=e.length>0,s=function(i,s,a,l,c){var d,u,p,f=0,h="0",g=i&&[],m=[],y=j,w=i||r&&T.find.TAG("*",c),b=W+=null==y?1:Math.random()||.1,x=w.length;for(c&&(j=s===L||s||c);h!==x&&null!=(d=w[h]);h++){if(r&&d){for(u=0,s||d.ownerDocument===L||(D(d),a=!I);p=e[u++];)if(p(d,s||L,a)){l.push(d);break}c&&(W=b)}o&&((d=!p&&d)&&f--,i&&g.push(d))}if(f+=h,o&&h!==f){for(u=0;p=n[u++];)p(g,m,s,a);if(i){if(f>0)for(;h--;)g[h]||m[h]||(m[h]=K.call(l));m=v(m)}Z.apply(l,m),c&&!i&&m.length>0&&f+n.length>1&&t.uniqueSort(l)}return c&&(W=b,j=y),g};return o?i(s):s}var x,k,T,C,S,$,E,A,j,O,P,D,L,H,I,N,M,q,F,z="sizzle"+1*new Date,_=e.document,W=0,R=0,B=n(),U=n(),X=n(),Y=function(e,t){return e===t&&(P=!0),0},G={}.hasOwnProperty,V=[],K=V.pop,Q=V.push,Z=V.push,J=V.slice,ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",oe="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",re=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),ue=new RegExp(re),pe=new RegExp("^"+ie+"$"),fe={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),be=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},xe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ke=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},Te=function(){D()},Ce=h(function(e){return e.disabled===!0},{dir:"parentNode",next:"legend"});try{Z.apply(V=J.call(_.childNodes),_.childNodes),V[_.childNodes.length].nodeType}catch(e){Z={apply:V.length?function(e,t){Q.apply(e,J.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}k=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},D=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:_;return i!==L&&9===i.nodeType&&i.documentElement?(L=i,H=L.documentElement,I=!S(L),_!==L&&(n=L.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),k.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),k.getElementsByTagName=o(function(e){return e.appendChild(L.createComment("")),!e.getElementsByTagName("*").length}),k.getElementsByClassName=me.test(L.getElementsByClassName),k.getById=o(function(e){return H.appendChild(e).id=z,!L.getElementsByName||!L.getElementsByName(z).length}),k.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&I){var n=t.getElementById(e);return n?[n]:[]}},T.filter.ID=function(e){var t=e.replace(we,be);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(we,be);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=k.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):k.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},T.find.CLASS=k.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&I)return t.getElementsByClassName(e)},M=[],N=[],(k.qsa=me.test(L.querySelectorAll))&&(o(function(e){H.appendChild(e).innerHTML="<a id='"+z+"'></a><select id='"+z+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&N.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||N.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+z+"-]").length||N.push("~="),e.querySelectorAll(":checked").length||N.push(":checked"),e.querySelectorAll("a#"+z+"+*").length||N.push(".#.+[+~]")}),o(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=L.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&N.push("name"+ne+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&N.push(":enabled",":disabled"),H.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&N.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),N.push(",.*:")})),(k.matchesSelector=me.test(q=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){k.disconnectedMatch=q.call(e,"*"),q.call(e,"[s!='']:x"),M.push("!=",re)}),N=N.length&&new RegExp(N.join("|")),M=M.length&&new RegExp(M.join("|")),t=me.test(H.compareDocumentPosition),F=t||me.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Y=t?function(e,t){if(e===t)return P=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!k.sortDetached&&t.compareDocumentPosition(e)===n?e===L||e.ownerDocument===_&&F(_,e)?-1:t===L||t.ownerDocument===_&&F(_,t)?1:O?ee(O,e)-ee(O,t):0:4&n?-1:1)}:function(e,t){if(e===t)return P=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,a=[e],l=[t];if(!o||!r)return e===L?-1:t===L?1:o?-1:r?1:O?ee(O,e)-ee(O,t):0;if(o===r)return s(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?s(a[i],l[i]):a[i]===_?-1:l[i]===_?1:0},L):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&D(e),n=n.replace(de,"='$1']"),k.matchesSelector&&I&&!X[n+" "]&&(!M||!M.test(n))&&(!N||!N.test(n)))try{var i=q.call(e,n);if(i||k.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&D(e),F(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&D(e);var n=T.attrHandle[t.toLowerCase()],i=n&&G.call(T.attrHandle,t.toLowerCase())?n(e,t,!I):void 0;return void 0!==i?i:k.attributes||!I?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.escape=function(e){return(e+"").replace(xe,ke)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,o=0;if(P=!k.detectDuplicates,O=!k.sortStable&&e.slice(0),e.sort(Y),P){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return O=null,e},C=t.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:i,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,be),e[3]=(e[3]||e[4]||e[5]||"").replace(we,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ue.test(n)&&(t=$(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,be).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=B[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(o){var r=t.attr(o,e);return null==r?"!="===n:!n||(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(r===i||r.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,o){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===o?function(e){return!!e.parentNode}:function(t,n,l){var c,d,u,p,f,h,g=r!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,w=!1;if(m){if(r){for(;g;){for(p=t;p=p[g];)if(a?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?m.firstChild:m.lastChild],s&&y){for(p=m,u=p[z]||(p[z]={}),d=u[p.uniqueID]||(u[p.uniqueID]={}),c=d[e]||[],f=c[0]===W&&c[1],w=f&&c[2],p=f&&m.childNodes[f];p=++f&&p&&p[g]||(w=f=0)||h.pop();)if(1===p.nodeType&&++w&&p===t){d[e]=[W,f,w];break}}else if(y&&(p=t,u=p[z]||(p[z]={}),d=u[p.uniqueID]||(u[p.uniqueID]={}),c=d[e]||[],f=c[0]===W&&c[1],w=f),w===!1)for(;(p=++f&&p&&p[g]||(w=f=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++w||(y&&(u=p[z]||(p[z]={}),d=u[p.uniqueID]||(u[p.uniqueID]={}),d[e]=[W,w]),p!==t)););return w-=o,w===i||w%i===0&&w/i>=0}}},PSEUDO:function(e,n){var o,r=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return r[z]?r(n):r.length>1?(o=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,o=r(e,n),s=o.length;s--;)i=ee(e,o[s]),e[i]=!(t[i]=o[s])}):function(e){return r(e,0,o)}):r}},pseudos:{not:i(function(e){var t=[],n=[],o=E(e.replace(ae,"$1"));return o[z]?i(function(e,t,n,i){for(var r,s=o(e,null,i,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))}):function(e,i,r){return t[0]=e,o(t,null,r,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(we,be),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:i(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,be).toLowerCase(),function(t){var n;do if(n=I?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:c(!1),disabled:c(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;
return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:d(function(){return[0]}),last:d(function(e,t){return[t-1]}),eq:d(function(e,t,n){return[n<0?n+t:n]}),even:d(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:d(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:d(function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e}),gt:d(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}},T.pseudos.nth=T.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[x]=a(x);for(x in{submit:!0,reset:!0})T.pseudos[x]=l(x);return p.prototype=T.filters=T.pseudos,T.setFilters=new p,$=t.tokenize=function(e,n){var i,o,r,s,a,l,c,d=U[e+" "];if(d)return n?0:d.slice(0);for(a=e,l=[],c=T.preFilter;a;){i&&!(o=le.exec(a))||(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=ce.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(ae," ")}),a=a.slice(i.length));for(s in T.filter)!(o=fe[s].exec(a))||c[s]&&!(o=c[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?t.error(e):U(e,l).slice(0)},E=t.compile=function(e,t){var n,i=[],o=[],r=X[e+" "];if(!r){for(t||(t=$(e)),n=t.length;n--;)r=w(t[n]),r[z]?i.push(r):o.push(r);r=X(e,b(o,i)),r.selector=e}return r},A=t.select=function(e,t,n,i){var o,r,s,a,l,c="function"==typeof e&&e,d=!i&&$(e=c.selector||e);if(n=n||[],1===d.length){if(r=d[0]=d[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&k.getById&&9===t.nodeType&&I&&T.relative[r[1].type]){if(t=(T.find.ID(s.matches[0].replace(we,be),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=fe.needsContext.test(e)?0:r.length;o--&&(s=r[o],!T.relative[a=s.type]);)if((l=T.find[a])&&(i=l(s.matches[0].replace(we,be),ye.test(r[0].type)&&u(t.parentNode)||t))){if(r.splice(o,1),e=i.length&&f(r),!e)return Z.apply(n,i),n;break}}return(c||E(e,d))(i,t,!I,n,!t||ye.test(e)&&u(t.parentNode)||t),n},k.sortStable=z.split("").sort(Y).join("")===z,k.detectDuplicates=!!P,D(),k.sortDetached=o(function(e){return 1&e.compareDocumentPosition(L.createElement("fieldset"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),k.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||r(te,function(e,t,n){var i;if(!n)return e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e);pe.find=ve,pe.expr=ve.selectors,pe.expr[":"]=pe.expr.pseudos,pe.uniqueSort=pe.unique=ve.uniqueSort,pe.text=ve.getText,pe.isXMLDoc=ve.isXML,pe.contains=ve.contains,pe.escapeSelector=ve.escape;var ye=function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&pe(e).is(n))break;i.push(e)}return i},we=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},be=pe.expr.match.needsContext,xe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,ke=/^.[^:#\[\.,]*$/;pe.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?pe.find.matchesSelector(i,e)?[i]:[]:pe.find.matches(e,pe.grep(t,function(e){return 1===e.nodeType}))},pe.fn.extend({find:function(e){var t,n,i=this.length,o=this;if("string"!=typeof e)return this.pushStack(pe(e).filter(function(){for(t=0;t<i;t++)if(pe.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)pe.find(e,o[t],n);return i>1?pe.uniqueSort(n):n},filter:function(e){return this.pushStack(o(this,e||[],!1))},not:function(e){return this.pushStack(o(this,e||[],!0))},is:function(e){return!!o(this,"string"==typeof e&&be.test(e)?pe(e):e||[],!1).length}});var Te,Ce=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Se=pe.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||Te,"string"==typeof e){if(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Ce.exec(e),!i||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof pe?t[0]:t,pe.merge(this,pe.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),xe.test(i[1])&&pe.isPlainObject(t))for(i in t)pe.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return o=J.getElementById(i[2]),o&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):pe.isFunction(e)?void 0!==n.ready?n.ready(e):e(pe):pe.makeArray(e,this)};Se.prototype=pe.fn,Te=pe(J);var $e=/^(?:parents|prev(?:Until|All))/,Ee={children:!0,contents:!0,next:!0,prev:!0};pe.fn.extend({has:function(e){var t=pe(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(pe.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,o=this.length,r=[],s="string"!=typeof e&&pe(e);if(!be.test(e))for(;i<o;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&pe.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(r.length>1?pe.uniqueSort(r):r)},index:function(e){return e?"string"==typeof e?oe.call(pe(e),this[0]):oe.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(pe.uniqueSort(pe.merge(this.get(),pe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),pe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ye(e,"parentNode")},parentsUntil:function(e,t,n){return ye(e,"parentNode",n)},next:function(e){return r(e,"nextSibling")},prev:function(e){return r(e,"previousSibling")},nextAll:function(e){return ye(e,"nextSibling")},prevAll:function(e){return ye(e,"previousSibling")},nextUntil:function(e,t,n){return ye(e,"nextSibling",n)},prevUntil:function(e,t,n){return ye(e,"previousSibling",n)},siblings:function(e){return we((e.parentNode||{}).firstChild,e)},children:function(e){return we(e.firstChild)},contents:function(e){return e.contentDocument||pe.merge([],e.childNodes)}},function(e,t){pe.fn[e]=function(n,i){var o=pe.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=pe.filter(i,o)),this.length>1&&(Ee[e]||pe.uniqueSort(o),$e.test(e)&&o.reverse()),this.pushStack(o)}});var Ae=/\S+/g;pe.Callbacks=function(e){e="string"==typeof e?s(e):pe.extend({},e);var t,n,i,o,r=[],a=[],l=-1,c=function(){for(o=e.once,i=t=!0;a.length;l=-1)for(n=a.shift();++l<r.length;)r[l].apply(n[0],n[1])===!1&&e.stopOnFalse&&(l=r.length,n=!1);e.memory||(n=!1),t=!1,o&&(r=n?[]:"")},d={add:function(){return r&&(n&&!t&&(l=r.length-1,a.push(n)),function t(n){pe.each(n,function(n,i){pe.isFunction(i)?e.unique&&d.has(i)||r.push(i):i&&i.length&&"string"!==pe.type(i)&&t(i)})}(arguments),n&&!t&&c()),this},remove:function(){return pe.each(arguments,function(e,t){for(var n;(n=pe.inArray(t,r,n))>-1;)r.splice(n,1),n<=l&&l--}),this},has:function(e){return e?pe.inArray(e,r)>-1:r.length>0},empty:function(){return r&&(r=[]),this},disable:function(){return o=a=[],r=n="",this},disabled:function(){return!r},lock:function(){return o=a=[],n||t||(r=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||c()),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!i}};return d},pe.extend({Deferred:function(t){var n=[["notify","progress",pe.Callbacks("memory"),pe.Callbacks("memory"),2],["resolve","done",pe.Callbacks("once memory"),pe.Callbacks("once memory"),0,"resolved"],["reject","fail",pe.Callbacks("once memory"),pe.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function(){return i},always:function(){return r.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},pipe:function(){var e=arguments;return pe.Deferred(function(t){pe.each(n,function(n,i){var o=pe.isFunction(e[i[4]])&&e[i[4]];r[i[1]](function(){var e=o&&o.apply(this,arguments);e&&pe.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[i[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(t,i,o){function r(t,n,i,o){return function(){var c=this,d=arguments,u=function(){var e,u;if(!(t<s)){if(e=i.apply(c,d),e===n.promise())throw new TypeError("Thenable self-resolution");u=e&&("object"==typeof e||"function"==typeof e)&&e.then,pe.isFunction(u)?o?u.call(e,r(s,n,a,o),r(s,n,l,o)):(s++,u.call(e,r(s,n,a,o),r(s,n,l,o),r(s,n,a,n.notifyWith))):(i!==a&&(c=void 0,d=[e]),(o||n.resolveWith)(c,d))}},p=o?u:function(){try{u()}catch(e){pe.Deferred.exceptionHook&&pe.Deferred.exceptionHook(e,p.stackTrace),t+1>=s&&(i!==l&&(c=void 0,d=[e]),n.rejectWith(c,d))}};t?p():(pe.Deferred.getStackHook&&(p.stackTrace=pe.Deferred.getStackHook()),e.setTimeout(p))}}var s=0;return pe.Deferred(function(e){n[0][3].add(r(0,e,pe.isFunction(o)?o:a,e.notifyWith)),n[1][3].add(r(0,e,pe.isFunction(t)?t:a)),n[2][3].add(r(0,e,pe.isFunction(i)?i:l))}).promise()},promise:function(e){return null!=e?pe.extend(e,o):o}},r={};return pe.each(n,function(e,t){var s=t[2],a=t[5];o[t[1]]=s.add,a&&s.add(function(){i=a},n[3-e][2].disable,n[0][2].lock),s.add(t[3].fire),r[t[0]]=function(){return r[t[0]+"With"](this===r?void 0:this,arguments),this},r[t[0]+"With"]=s.fireWith}),o.promise(r),t&&t.call(r,r),r},when:function(e){var t=arguments.length,n=t,i=Array(n),o=te.call(arguments),r=pe.Deferred(),s=function(e){return function(n){i[e]=this,o[e]=arguments.length>1?te.call(arguments):n,--t||r.resolveWith(i,o)}};if(t<=1&&(c(e,r.done(s(n)).resolve,r.reject),"pending"===r.state()||pe.isFunction(o[n]&&o[n].then)))return r.then();for(;n--;)c(o[n],s(n),r.reject);return r.promise()}});var je=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;pe.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&je.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},pe.readyException=function(t){e.setTimeout(function(){throw t})};var Oe=pe.Deferred();pe.fn.ready=function(e){return Oe.then(e).catch(function(e){pe.readyException(e)}),this},pe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?pe.readyWait++:pe.ready(!0)},ready:function(e){(e===!0?--pe.readyWait:pe.isReady)||(pe.isReady=!0,e!==!0&&--pe.readyWait>0||Oe.resolveWith(J,[pe]))}}),pe.ready.then=Oe.then,"complete"===J.readyState||"loading"!==J.readyState&&!J.documentElement.doScroll?e.setTimeout(pe.ready):(J.addEventListener("DOMContentLoaded",d),e.addEventListener("load",d));var Pe=function(e,t,n,i,o,r,s){var a=0,l=e.length,c=null==n;if("object"===pe.type(n)){o=!0;for(a in n)Pe(e,t,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,pe.isFunction(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(pe(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return o?e:c?t.call(e):l?t(e[0],n):r},De=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};u.uid=1,u.prototype={cache:function(e){var t=e[this.expando];return t||(t={},De(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);if("string"==typeof t)o[pe.camelCase(t)]=n;else for(i in t)o[pe.camelCase(i)]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][pe.camelCase(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){pe.isArray(t)?t=t.map(pe.camelCase):(t=pe.camelCase(t),t=t in i?[t]:t.match(Ae)||[]),n=t.length;for(;n--;)delete i[t[n]]}(void 0===t||pe.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!pe.isEmptyObject(t)}};var Le=new u,He=new u,Ie=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ne=/[A-Z]/g;pe.extend({hasData:function(e){return He.hasData(e)||Le.hasData(e)},data:function(e,t,n){return He.access(e,t,n)},removeData:function(e,t){He.remove(e,t)},_data:function(e,t,n){return Le.access(e,t,n)},_removeData:function(e,t){Le.remove(e,t)}}),pe.fn.extend({data:function(e,t){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===e){if(this.length&&(o=He.get(r),1===r.nodeType&&!Le.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=pe.camelCase(i.slice(5)),p(r,i,o[i])));Le.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){He.set(this,e)}):Pe(this,function(t){var n;if(r&&void 0===t){if(n=He.get(r,e),void 0!==n)return n;if(n=p(r,e),void 0!==n)return n}else this.each(function(){He.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){He.remove(this,e)})}}),pe.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=Le.get(e,t),n&&(!i||pe.isArray(n)?i=Le.access(e,t,pe.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=pe.queue(e,t),i=n.length,o=n.shift(),r=pe._queueHooks(e,t),s=function(){pe.dequeue(e,t)};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Le.get(e,n)||Le.access(e,n,{empty:pe.Callbacks("once memory").add(function(){Le.remove(e,[t+"queue",n])})})}}),pe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?pe.queue(this[0],e):void 0===t?this:this.each(function(){var n=pe.queue(this,e,t);pe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&pe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){pe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,o=pe.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=Le.get(r[s],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(t)}});var Me=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,qe=new RegExp("^(?:([+-])=|)("+Me+")([a-z%]*)$","i"),Fe=["Top","Right","Bottom","Left"],ze=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&pe.contains(e.ownerDocument,e)&&"none"===pe.css(e,"display")},_e=function(e,t,n,i){var o,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];o=n.apply(e,i||[]);for(r in t)e.style[r]=s[r];return o},We={};pe.fn.extend({show:function(){return g(this,!0)},hide:function(){return g(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ze(this)?pe(this).show():pe(this).hide()})}});var Re=/^(?:checkbox|radio)$/i,Be=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Ue=/^$|\/(?:java|ecma)script/i,Xe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Xe.optgroup=Xe.option,Xe.tbody=Xe.tfoot=Xe.colgroup=Xe.caption=Xe.thead,Xe.th=Xe.td;var Ye=/<|&#?\w+;/;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),de.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",de.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Ge=J.documentElement,Ve=/^key/,Ke=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Qe=/^([^.]*)(?:\.(.+)|)/;pe.event={global:{},add:function(e,t,n,i,o){var r,s,a,l,c,d,u,p,f,h,g,m=Le.get(e);if(m)for(n.handler&&(r=n,n=r.handler,o=r.selector),o&&pe.find.matchesSelector(Ge,o),n.guid||(n.guid=pe.guid++),(l=m.events)||(l=m.events={}),(s=m.handle)||(s=m.handle=function(t){return"undefined"!=typeof pe&&pe.event.triggered!==t.type?pe.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Ae)||[""],c=t.length;c--;)a=Qe.exec(t[c])||[],f=g=a[1],h=(a[2]||"").split(".").sort(),f&&(u=pe.event.special[f]||{},f=(o?u.delegateType:u.bindType)||f,u=pe.event.special[f]||{},d=pe.extend({type:f,origType:g,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&pe.expr.match.needsContext.test(o),namespace:h.join(".")},r),(p=l[f])||(p=l[f]=[],p.delegateCount=0,u.setup&&u.setup.call(e,i,h,s)!==!1||e.addEventListener&&e.addEventListener(f,s)),u.add&&(u.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,d):p.push(d),pe.event.global[f]=!0)},remove:function(e,t,n,i,o){var r,s,a,l,c,d,u,p,f,h,g,m=Le.hasData(e)&&Le.get(e);if(m&&(l=m.events)){for(t=(t||"").match(Ae)||[""],c=t.length;c--;)if(a=Qe.exec(t[c])||[],f=g=a[1],h=(a[2]||"").split(".").sort(),f){for(u=pe.event.special[f]||{},f=(i?u.delegateType:u.bindType)||f,p=l[f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=p.length;r--;)d=p[r],!o&&g!==d.origType||n&&n.guid!==d.guid||a&&!a.test(d.namespace)||i&&i!==d.selector&&("**"!==i||!d.selector)||(p.splice(r,1),d.selector&&p.delegateCount--,u.remove&&u.remove.call(e,d));s&&!p.length&&(u.teardown&&u.teardown.call(e,h,m.handle)!==!1||pe.removeEvent(e,f,m.handle),delete l[f])}else for(f in l)pe.event.remove(e,f+t[c],n,i,!0);pe.isEmptyObject(l)&&Le.remove(e,"handle events")}},dispatch:function(e){var t,n,i,o,r,s,a=pe.event.fix(e),l=new Array(arguments.length),c=(Le.get(this,"events")||{})[a.type]||[],d=pe.event.special[a.type]||{};for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];if(a.delegateTarget=this,!d.preDispatch||d.preDispatch.call(this,a)!==!1){for(s=pe.event.handlers.call(this,a,c),t=0;(o=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,i=((pe.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,l),void 0!==i&&(a.result=i)===!1&&(a.preventDefault(),a.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,i,o,r,s=[],a=t.delegateCount,l=e.target;if(a&&l.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(i=[],n=0;n<a;n++)r=t[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?pe(o,this).index(l)>-1:pe.find(o,this,null,[l]).length),i[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},addProp:function(e,t){Object.defineProperty(pe.Event.prototype,e,{enumerable:!0,configurable:!0,get:pe.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[pe.expando]?e:new pe.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==x()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===x()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&pe.nodeName(this,"input"))return this.click(),!1},_default:function(e){return pe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},pe.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},pe.Event=function(e,t){return this instanceof pe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?w:b,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&pe.extend(this,t),this.timeStamp=e&&e.timeStamp||pe.now(),void(this[pe.expando]=!0)):new pe.Event(e,t)},pe.Event.prototype={constructor:pe.Event,isDefaultPrevented:b,isPropagationStopped:b,isImmediatePropagationStopped:b,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=w,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=w,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=w,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},pe.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ve.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ke.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},pe.event.addProp),pe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){pe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,o=e.relatedTarget,r=e.handleObj;return o&&(o===i||pe.contains(i,o))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),pe.fn.extend({on:function(e,t,n,i){return k(this,e,t,n,i)},one:function(e,t,n,i){return k(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,pe(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=b),this.each(function(){pe.event.remove(this,e,n,t)})}});var Ze=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Je=/<script|<style|<link/i,et=/checked\s*(?:[^=]|=\s*.checked.)/i,tt=/^true\/(.*)/,nt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;pe.extend({htmlPrefilter:function(e){return e.replace(Ze,"<$1></$2>")},clone:function(e,t,n){var i,o,r,s,a=e.cloneNode(!0),l=pe.contains(e.ownerDocument,e);if(!(de.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||pe.isXMLDoc(e)))for(s=m(a),r=m(e),i=0,o=r.length;i<o;i++)E(r[i],s[i]);if(t)if(n)for(r=r||m(e),s=s||m(a),i=0,o=r.length;i<o;i++)$(r[i],s[i]);else $(e,a);return s=m(a,"script"),s.length>0&&v(s,!l&&m(e,"script")),a},cleanData:function(e){for(var t,n,i,o=pe.event.special,r=0;void 0!==(n=e[r]);r++)if(De(n)){if(t=n[Le.expando]){if(t.events)for(i in t.events)o[i]?pe.event.remove(n,i):pe.removeEvent(n,i,t.handle);n[Le.expando]=void 0}n[He.expando]&&(n[He.expando]=void 0)}}}),pe.fn.extend({detach:function(e){return j(this,e,!0)},remove:function(e){return j(this,e)},text:function(e){return Pe(this,function(e){return void 0===e?pe.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return A(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.appendChild(e)}})},prepend:function(){return A(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return A(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return A(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(pe.cleanData(m(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return pe.clone(this,e,t)})},html:function(e){return Pe(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Je.test(e)&&!Xe[(Be.exec(e)||["",""])[1].toLowerCase()]){e=pe.htmlPrefilter(e);try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(pe.cleanData(m(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return A(this,arguments,function(t){var n=this.parentNode;pe.inArray(this,e)<0&&(pe.cleanData(m(this)),n&&n.replaceChild(t,this))},e)}}),pe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){pe.fn[e]=function(e){for(var n,i=[],o=pe(e),r=o.length-1,s=0;s<=r;s++)n=s===r?this:this.clone(!0),pe(o[s])[t](n),ie.apply(i,n.get());return this.pushStack(i)}});var it=/^margin/,ot=new RegExp("^("+Me+")(?!px)[a-z%]+$","i"),rt=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)};!function(){function t(){if(a){a.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Ge.appendChild(s);var t=e.getComputedStyle(a);n="1%"!==t.top,r="2px"===t.marginLeft,i="4px"===t.width,a.style.marginRight="50%",o="4px"===t.marginRight,Ge.removeChild(s),a=null}}var n,i,o,r,s=J.createElement("div"),a=J.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",de.clearCloneStyle="content-box"===a.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(a),pe.extend(de,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return t(),i},pixelMarginRight:function(){return t(),o},reliableMarginLeft:function(){return t(),r}}))}();var st=/^(none|table(?!-c[ea]).+)/,at={position:"absolute",visibility:"hidden",display:"block"},lt={letterSpacing:"0",fontWeight:"400"},ct=["Webkit","Moz","ms"],dt=J.createElement("div").style;pe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=O(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=pe.camelCase(t),l=e.style;return t=pe.cssProps[a]||(pe.cssProps[a]=D(a)||a),s=pe.cssHooks[t]||pe.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:l[t]:(r=typeof n,"string"===r&&(o=qe.exec(n))&&o[1]&&(n=f(e,t,o),r="number"),null!=n&&n===n&&("number"===r&&(n+=o&&o[3]||(pe.cssNumber[a]?"":"px")),de.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l[t]=n)),void 0)}},css:function(e,t,n,i){var o,r,s,a=pe.camelCase(t);return t=pe.cssProps[a]||(pe.cssProps[a]=D(a)||a),s=pe.cssHooks[t]||pe.cssHooks[a],s&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=O(e,t,i)),"normal"===o&&t in lt&&(o=lt[t]),""===n||n?(r=parseFloat(o),n===!0||isFinite(r)?r||0:o):o}}),pe.each(["height","width"],function(e,t){pe.cssHooks[t]={get:function(e,n,i){if(n)return!st.test(pe.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?I(e,t,i):_e(e,at,function(){return I(e,t,i)})},set:function(e,n,i){var o,r=i&&rt(e),s=i&&H(e,t,i,"border-box"===pe.css(e,"boxSizing",!1,r),r);return s&&(o=qe.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=pe.css(e,t)),L(e,n,s)}}}),pe.cssHooks.marginLeft=P(de.reliableMarginLeft,function(e,t){if(t)return(parseFloat(O(e,"marginLeft"))||e.getBoundingClientRect().left-_e(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),pe.each({margin:"",padding:"",border:"Width"},function(e,t){pe.cssHooks[e+t]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];i<4;i++)o[e+Fe[i]+t]=r[i]||r[i-2]||r[0];return o}},it.test(e)||(pe.cssHooks[e+t].set=L)}),pe.fn.extend({css:function(e,t){return Pe(this,function(e,t,n){var i,o,r={},s=0;if(pe.isArray(t)){for(i=rt(e),o=t.length;s<o;s++)r[t[s]]=pe.css(e,t[s],!1,i);return r}return void 0!==n?pe.style(e,t,n):pe.css(e,t)},e,t,arguments.length>1)}}),pe.Tween=N,N.prototype={constructor:N,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||pe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(pe.cssNumber[n]?"":"px")},cur:function(){var e=N.propHooks[this.prop];return e&&e.get?e.get(this):N.propHooks._default.get(this)},run:function(e){var t,n=N.propHooks[this.prop];return this.options.duration?this.pos=t=pe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):N.propHooks._default.set(this),this}},N.prototype.init.prototype=N.prototype,N.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=pe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){pe.fx.step[e.prop]?pe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[pe.cssProps[e.prop]]&&!pe.cssHooks[e.prop]?e.elem[e.prop]=e.now:pe.style(e.elem,e.prop,e.now+e.unit)}}},N.propHooks.scrollTop=N.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},pe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},pe.fx=N.prototype.init,pe.fx.step={};var ut,pt,ft=/^(?:toggle|show|hide)$/,ht=/queueHooks$/;pe.Animation=pe.extend(R,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return f(n.elem,e,qe.exec(t),n),n}]},tweener:function(e,t){pe.isFunction(e)?(t=e,e=["*"]):e=e.match(Ae);for(var n,i=0,o=e.length;i<o;i++)n=e[i],R.tweeners[n]=R.tweeners[n]||[],R.tweeners[n].unshift(t)},prefilters:[_],prefilter:function(e,t){t?R.prefilters.unshift(e):R.prefilters.push(e)}}),pe.speed=function(e,t,n){var i=e&&"object"==typeof e?pe.extend({},e):{complete:n||!n&&t||pe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!pe.isFunction(t)&&t};return pe.fx.off||J.hidden?i.duration=0:i.duration="number"==typeof i.duration?i.duration:i.duration in pe.fx.speeds?pe.fx.speeds[i.duration]:pe.fx.speeds._default,null!=i.queue&&i.queue!==!0||(i.queue="fx"),i.old=i.complete,i.complete=function(){pe.isFunction(i.old)&&i.old.call(this),i.queue&&pe.dequeue(this,i.queue)},i},pe.fn.extend({fadeTo:function(e,t,n,i){return this.filter(ze).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var o=pe.isEmptyObject(e),r=pe.speed(t,n,i),s=function(){var t=R(this,pe.extend({},e),r);(o||Le.get(this,"finish"))&&t.stop(!0)};return s.finish=s,o||r.queue===!1?this.each(s):this.queue(r.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=pe.timers,s=Le.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&ht.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(n),t=!1,r.splice(o,1));!t&&n||pe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Le.get(this),i=n[e+"queue"],o=n[e+"queueHooks"],r=pe.timers,s=i?i.length:0;for(n.finish=!0,pe.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);
delete n.finish})}}),pe.each(["toggle","show","hide"],function(e,t){var n=pe.fn[t];pe.fn[t]=function(e,i,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(F(t,!0),e,i,o)}}),pe.each({slideDown:F("show"),slideUp:F("hide"),slideToggle:F("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){pe.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),pe.timers=[],pe.fx.tick=function(){var e,t=0,n=pe.timers;for(ut=pe.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||pe.fx.stop(),ut=void 0},pe.fx.timer=function(e){pe.timers.push(e),e()?pe.fx.start():pe.timers.pop()},pe.fx.interval=13,pe.fx.start=function(){pt||(pt=e.requestAnimationFrame?e.requestAnimationFrame(M):e.setInterval(pe.fx.tick,pe.fx.interval))},pe.fx.stop=function(){e.cancelAnimationFrame?e.cancelAnimationFrame(pt):e.clearInterval(pt),pt=null},pe.fx.speeds={slow:600,fast:200,_default:400},pe.fn.delay=function(t,n){return t=pe.fx?pe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,i){var o=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(o)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"));e.type="checkbox",de.checkOn=""!==e.value,de.optSelected=n.selected,e=J.createElement("input"),e.value="t",e.type="radio",de.radioValue="t"===e.value}();var gt,mt=pe.expr.attrHandle;pe.fn.extend({attr:function(e,t){return Pe(this,pe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){pe.removeAttr(this,e)})}}),pe.extend({attr:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return"undefined"==typeof e.getAttribute?pe.prop(e,t,n):(1===r&&pe.isXMLDoc(e)||(o=pe.attrHooks[t.toLowerCase()]||(pe.expr.match.bool.test(t)?gt:void 0)),void 0!==n?null===n?void pe.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(i=o.get(e,t))?i:(i=pe.find.attr(e,t),null==i?void 0:i))},attrHooks:{type:{set:function(e,t){if(!de.radioValue&&"radio"===t&&pe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,o=t&&t.match(Ae);if(o&&1===e.nodeType)for(;n=o[i++];)e.removeAttribute(n)}}),gt={set:function(e,t,n){return t===!1?pe.removeAttr(e,n):e.setAttribute(n,n),n}},pe.each(pe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=mt[t]||pe.find.attr;mt[t]=function(e,t,i){var o,r,s=t.toLowerCase();return i||(r=mt[s],mt[s]=o,o=null!=n(e,t,i)?s:null,mt[s]=r),o}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;pe.fn.extend({prop:function(e,t){return Pe(this,pe.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[pe.propFix[e]||e]})}}),pe.extend({prop:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&pe.isXMLDoc(e)||(t=pe.propFix[t]||t,o=pe.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=pe.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),de.optSelected||(pe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),pe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){pe.propFix[this.toLowerCase()]=this});var wt=/[\t\r\n\f]/g;pe.fn.extend({addClass:function(e){var t,n,i,o,r,s,a,l=0;if(pe.isFunction(e))return this.each(function(t){pe(this).addClass(e.call(this,t,B(this)))});if("string"==typeof e&&e)for(t=e.match(Ae)||[];n=this[l++];)if(o=B(n),i=1===n.nodeType&&(" "+o+" ").replace(wt," ")){for(s=0;r=t[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");a=pe.trim(i),o!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,o,r,s,a,l=0;if(pe.isFunction(e))return this.each(function(t){pe(this).removeClass(e.call(this,t,B(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(Ae)||[];n=this[l++];)if(o=B(n),i=1===n.nodeType&&(" "+o+" ").replace(wt," ")){for(s=0;r=t[s++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");a=pe.trim(i),o!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):pe.isFunction(e)?this.each(function(n){pe(this).toggleClass(e.call(this,n,B(this),t),t)}):this.each(function(){var t,i,o,r;if("string"===n)for(i=0,o=pe(this),r=e.match(Ae)||[];t=r[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||(t=B(this),t&&Le.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Le.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+B(n)+" ").replace(wt," ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g,xt=/[\x20\t\r\n\f]+/g;pe.fn.extend({val:function(e){var t,n,i,o=this[0];{if(arguments.length)return i=pe.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,pe(this).val()):e,null==o?o="":"number"==typeof o?o+="":pe.isArray(o)&&(o=pe.map(o,function(e){return null==e?"":e+""})),t=pe.valHooks[this.type]||pe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))});if(o)return t=pe.valHooks[o.type]||pe.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(bt,""):null==n?"":n)}}}),pe.extend({valHooks:{option:{get:function(e){var t=pe.find.attr(e,"value");return null!=t?t:pe.trim(pe.text(e)).replace(xt," ")}},select:{get:function(e){for(var t,n,i=e.options,o=e.selectedIndex,r="select-one"===e.type,s=r?null:[],a=r?o+1:i.length,l=o<0?a:r?o:0;l<a;l++)if(n=i[l],(n.selected||l===o)&&!n.disabled&&(!n.parentNode.disabled||!pe.nodeName(n.parentNode,"optgroup"))){if(t=pe(n).val(),r)return t;s.push(t)}return s},set:function(e,t){for(var n,i,o=e.options,r=pe.makeArray(t),s=o.length;s--;)i=o[s],(i.selected=pe.inArray(pe.valHooks.option.get(i),r)>-1)&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),pe.each(["radio","checkbox"],function(){pe.valHooks[this]={set:function(e,t){if(pe.isArray(t))return e.checked=pe.inArray(pe(e).val(),t)>-1}},de.checkOn||(pe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var kt=/^(?:focusinfocus|focusoutblur)$/;pe.extend(pe.event,{trigger:function(t,n,i,o){var r,s,a,l,c,d,u,p=[i||J],f=ae.call(t,"type")?t.type:t,h=ae.call(t,"namespace")?t.namespace.split("."):[];if(s=a=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!kt.test(f+pe.event.triggered)&&(f.indexOf(".")>-1&&(h=f.split("."),f=h.shift(),h.sort()),c=f.indexOf(":")<0&&"on"+f,t=t[pe.expando]?t:new pe.Event(f,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:pe.makeArray(n,[t]),u=pe.event.special[f]||{},o||!u.trigger||u.trigger.apply(i,n)!==!1)){if(!o&&!u.noBubble&&!pe.isWindow(i)){for(l=u.delegateType||f,kt.test(l+f)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(i.ownerDocument||J)&&p.push(a.defaultView||a.parentWindow||e)}for(r=0;(s=p[r++])&&!t.isPropagationStopped();)t.type=r>1?l:u.bindType||f,d=(Le.get(s,"events")||{})[t.type]&&Le.get(s,"handle"),d&&d.apply(s,n),d=c&&s[c],d&&d.apply&&De(s)&&(t.result=d.apply(s,n),t.result===!1&&t.preventDefault());return t.type=f,o||t.isDefaultPrevented()||u._default&&u._default.apply(p.pop(),n)!==!1||!De(i)||c&&pe.isFunction(i[f])&&!pe.isWindow(i)&&(a=i[c],a&&(i[c]=null),pe.event.triggered=f,i[f](),pe.event.triggered=void 0,a&&(i[c]=a)),t.result}},simulate:function(e,t,n){var i=pe.extend(new pe.Event,n,{type:e,isSimulated:!0});pe.event.trigger(i,null,t)}}),pe.fn.extend({trigger:function(e,t){return this.each(function(){pe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return pe.event.trigger(e,t,n,!0)}}),pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){pe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),pe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),de.focusin="onfocusin"in e,de.focusin||pe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){pe.event.simulate(t,e.target,pe.event.fix(e))};pe.event.special[t]={setup:function(){var i=this.ownerDocument||this,o=Le.access(i,t);o||i.addEventListener(e,n,!0),Le.access(i,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=Le.access(i,t)-1;o?Le.access(i,t,o):(i.removeEventListener(e,n,!0),Le.remove(i,t))}}});var Tt=e.location,Ct=pe.now(),St=/\?/;pe.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||pe.error("Invalid XML: "+t),n};var $t=/\[\]$/,Et=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;pe.param=function(e,t){var n,i=[],o=function(e,t){var n=pe.isFunction(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(pe.isArray(e)||e.jquery&&!pe.isPlainObject(e))pe.each(e,function(){o(this.name,this.value)});else for(n in e)U(n,e[n],t,o);return i.join("&")},pe.fn.extend({serialize:function(){return pe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=pe.prop(this,"elements");return e?pe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!pe(this).is(":disabled")&&jt.test(this.nodeName)&&!At.test(e)&&(this.checked||!Re.test(e))}).map(function(e,t){var n=pe(this).val();return null==n?null:pe.isArray(n)?pe.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Ot=/%20/g,Pt=/#.*$/,Dt=/([?&])_=[^&]*/,Lt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ht=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,It=/^(?:GET|HEAD)$/,Nt=/^\/\//,Mt={},qt={},Ft="*/".concat("*"),zt=J.createElement("a");zt.href=Tt.href,pe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:Ht.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ft,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":pe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?G(G(e,pe.ajaxSettings),t):G(pe.ajaxSettings,e)},ajaxPrefilter:X(Mt),ajaxTransport:X(qt),ajax:function(t,n){function i(t,n,i,a){var c,p,f,b,x,k=n;d||(d=!0,l&&e.clearTimeout(l),o=void 0,s=a||"",T.readyState=t>0?4:0,c=t>=200&&t<300||304===t,i&&(b=V(h,T,i)),b=K(h,b,T,c),c?(h.ifModified&&(x=T.getResponseHeader("Last-Modified"),x&&(pe.lastModified[r]=x),x=T.getResponseHeader("etag"),x&&(pe.etag[r]=x)),204===t||"HEAD"===h.type?k="nocontent":304===t?k="notmodified":(k=b.state,p=b.data,f=b.error,c=!f)):(f=k,!t&&k||(k="error",t<0&&(t=0))),T.status=t,T.statusText=(n||k)+"",c?v.resolveWith(g,[p,k,T]):v.rejectWith(g,[T,k,f]),T.statusCode(w),w=void 0,u&&m.trigger(c?"ajaxSuccess":"ajaxError",[T,h,c?p:f]),y.fireWith(g,[T,k]),u&&(m.trigger("ajaxComplete",[T,h]),--pe.active||pe.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var o,r,s,a,l,c,d,u,p,f,h=pe.ajaxSetup({},n),g=h.context||h,m=h.context&&(g.nodeType||g.jquery)?pe(g):pe.event,v=pe.Deferred(),y=pe.Callbacks("once memory"),w=h.statusCode||{},b={},x={},k="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(d){if(!a)for(a={};t=Lt.exec(s);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return d?s:null},setRequestHeader:function(e,t){return null==d&&(e=x[e.toLowerCase()]=x[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==d&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(d)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||k;return o&&o.abort(t),i(0,t),this}};if(v.promise(T),h.url=((t||h.url||Tt.href)+"").replace(Nt,Tt.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Ae)||[""],null==h.crossDomain){c=J.createElement("a");try{c.href=h.url,c.href=c.href,h.crossDomain=zt.protocol+"//"+zt.host!=c.protocol+"//"+c.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=pe.param(h.data,h.traditional)),Y(Mt,h,n,T),d)return T;u=pe.event&&h.global,u&&0===pe.active++&&pe.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!It.test(h.type),r=h.url.replace(Pt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Ot,"+")):(f=h.url.slice(r.length),h.data&&(r+=(St.test(r)?"&":"?")+h.data,delete h.data),h.cache===!1&&(r=r.replace(Dt,""),f=(St.test(r)?"&":"?")+"_="+Ct++ +f),h.url=r+f),h.ifModified&&(pe.lastModified[r]&&T.setRequestHeader("If-Modified-Since",pe.lastModified[r]),pe.etag[r]&&T.setRequestHeader("If-None-Match",pe.etag[r])),(h.data&&h.hasContent&&h.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",h.contentType),T.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Ft+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)T.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(h.beforeSend.call(g,T,h)===!1||d))return T.abort();if(k="abort",y.add(h.complete),T.done(h.success),T.fail(h.error),o=Y(qt,h,n,T)){if(T.readyState=1,u&&m.trigger("ajaxSend",[T,h]),d)return T;h.async&&h.timeout>0&&(l=e.setTimeout(function(){T.abort("timeout")},h.timeout));try{d=!1,o.send(b,i)}catch(e){if(d)throw e;i(-1,e)}}else i(-1,"No Transport");return T},getJSON:function(e,t,n){return pe.get(e,t,n,"json")},getScript:function(e,t){return pe.get(e,void 0,t,"script")}}),pe.each(["get","post"],function(e,t){pe[t]=function(e,n,i,o){return pe.isFunction(n)&&(o=o||i,i=n,n=void 0),pe.ajax(pe.extend({url:e,type:t,dataType:o,data:n,success:i},pe.isPlainObject(e)&&e))}}),pe._evalUrl=function(e){return pe.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},pe.fn.extend({wrapAll:function(e){var t;return this[0]&&(pe.isFunction(e)&&(e=e.call(this[0])),t=pe(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return pe.isFunction(e)?this.each(function(t){pe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=pe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=pe.isFunction(e);return this.each(function(n){pe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){pe(this).replaceWith(this.childNodes)}),this}}),pe.expr.pseudos.hidden=function(e){return!pe.expr.pseudos.visible(e)},pe.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},pe.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},Wt=pe.ajaxSettings.xhr();de.cors=!!Wt&&"withCredentials"in Wt,de.ajax=Wt=!!Wt,pe.ajaxTransport(function(t){var n,i;if(de.cors||Wt&&!t.crossDomain)return{send:function(o,r){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest");for(s in o)a.setRequestHeader(s,o[s]);n=function(e){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(_t[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&i()})},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),pe.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),pe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return pe.globalEval(e),e}}}),pe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),pe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=pe("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Rt=[],Bt=/(=)\?(?=&|$)|\?\?/;pe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Rt.pop()||pe.expando+"_"+Ct++;return this[e]=!0,e}}),pe.ajaxPrefilter("json jsonp",function(t,n,i){var o,r,s,a=t.jsonp!==!1&&(Bt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return o=t.jsonpCallback=pe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Bt,"$1"+o):t.jsonp!==!1&&(t.url+=(St.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||pe.error(o+" was not called"),s[0]},t.dataTypes[0]="json",r=e[o],e[o]=function(){s=arguments},i.always(function(){void 0===r?pe(e).removeProp(o):e[o]=r,t[o]&&(t.jsonpCallback=n.jsonpCallback,Rt.push(o)),s&&pe.isFunction(r)&&r(s[0]),s=r=void 0}),"script"}),de.createHTMLDocument=function(){var e=J.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),pe.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,r;return t||(de.createHTMLDocument?(t=J.implementation.createHTMLDocument(""),i=t.createElement("base"),i.href=J.location.href,t.head.appendChild(i)):t=J),o=xe.exec(e),r=!n&&[],o?[t.createElement(o[1])]:(o=y([e],t,r),r&&r.length&&pe(r).remove(),pe.merge([],o.childNodes))},pe.fn.load=function(e,t,n){var i,o,r,s=this,a=e.indexOf(" ");return a>-1&&(i=pe.trim(e.slice(a)),e=e.slice(0,a)),pe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),s.length>0&&pe.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){r=arguments,s.html(i?pe("<div>").append(pe.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},pe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){pe.fn[t]=function(e){return this.on(t,e)}}),pe.expr.pseudos.animated=function(e){return pe.grep(pe.timers,function(t){return e===t.elem}).length},pe.offset={setOffset:function(e,t,n){var i,o,r,s,a,l,c,d=pe.css(e,"position"),u=pe(e),p={};"static"===d&&(e.style.position="relative"),a=u.offset(),r=pe.css(e,"top"),l=pe.css(e,"left"),c=("absolute"===d||"fixed"===d)&&(r+l).indexOf("auto")>-1,c?(i=u.position(),s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),pe.isFunction(t)&&(t=t.call(e,n,pe.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+o),"using"in t?t.using.call(e,p):u.css(p)}},pe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){pe.offset.setOffset(this,e,t)});var t,n,i,o,r=this[0];if(r)return r.getClientRects().length?(i=r.getBoundingClientRect(),i.width||i.height?(o=r.ownerDocument,n=Q(o),t=o.documentElement,{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):{top:0,left:0}},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0};return"fixed"===pe.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),pe.nodeName(e[0],"html")||(i=e.offset()),i={top:i.top+pe.css(e[0],"borderTopWidth",!0),left:i.left+pe.css(e[0],"borderLeftWidth",!0)}),{top:t.top-i.top-pe.css(n,"marginTop",!0),left:t.left-i.left-pe.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===pe.css(e,"position");)e=e.offsetParent;return e||Ge})}}),pe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;pe.fn[e]=function(i){return Pe(this,function(e,i,o){var r=Q(e);return void 0===o?r?r[t]:e[i]:void(r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):e[i]=o)},e,i,arguments.length)}}),pe.each(["top","left"],function(e,t){pe.cssHooks[t]=P(de.pixelPosition,function(e,n){if(n)return n=O(e,t),ot.test(n)?pe(e).position()[t]+"px":n})}),pe.each({Height:"height",Width:"width"},function(e,t){pe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){pe.fn[i]=function(o,r){var s=arguments.length&&(n||"boolean"!=typeof o),a=n||(o===!0||r===!0?"margin":"border");return Pe(this,function(t,n,o){var r;return pe.isWindow(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===o?pe.css(t,n,a):pe.style(t,n,o,a)},t,s?o:void 0,s)}})}),pe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),pe.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return pe});var Ut=e.jQuery,Xt=e.$;return pe.noConflict=function(t){return e.$===pe&&(e.$=Xt),t&&e.jQuery===pe&&(e.jQuery=Ut),pe},t||(e.jQuery=e.$=pe),pe}),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var t=window.Slick||{};t=function(){function t(t,i){var o,r=this;r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,n){return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.focussed=!1,r.interrupted=!1,r.hidden="hidden",r.paused=!0,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=e(t),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,o=e(t).data("slick")||{},r.options=e.extend({},r.defaults,i,o),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,"undefined"!=typeof document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=e.proxy(r.autoPlay,r),r.autoPlayClear=e.proxy(r.autoPlayClear,r),r.autoPlayIterator=e.proxy(r.autoPlayIterator,r),r.changeSlide=e.proxy(r.changeSlide,r),r.clickHandler=e.proxy(r.clickHandler,r),r.selectHandler=e.proxy(r.selectHandler,r),r.setPosition=e.proxy(r.setPosition,r),r.swipeHandler=e.proxy(r.swipeHandler,r),r.dragHandler=e.proxy(r.dragHandler,r),r.keyHandler=e.proxy(r.keyHandler,r),r.instanceUid=n++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.registerBreakpoints(),r.init(!0)}var n=0;return t}(),t.prototype.activateADA=function(){var e=this;e.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.addSlide=t.prototype.slickAdd=function(t,n,i){var o=this;if("boolean"==typeof n)i=n,n=null;else if(n<0||n>=o.slideCount)return!1;o.unload(),"number"==typeof n?0===n&&0===o.$slides.length?e(t).appendTo(o.$slideTrack):i?e(t).insertBefore(o.$slides.eq(n)):e(t).insertAfter(o.$slides.eq(n)):i===!0?e(t).prependTo(o.$slideTrack):e(t).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each(function(t,n){e(n).attr("data-slick-index",t)}),o.$slidesCache=o.$slides,o.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,n){var i={},o=this;o.animateHeight(),o.options.rtl===!0&&o.options.vertical===!1&&(t=-t),o.transformsEnabled===!1?o.options.vertical===!1?o.$slideTrack.animate({left:t},o.options.speed,o.options.easing,n):o.$slideTrack.animate({top:t},o.options.speed,o.options.easing,n):o.cssTransitions===!1?(o.options.rtl===!0&&(o.currentLeft=-o.currentLeft),e({animStart:o.currentLeft}).animate({animStart:t},{duration:o.options.speed,easing:o.options.easing,step:function(e){e=Math.ceil(e),o.options.vertical===!1?(i[o.animType]="translate("+e+"px, 0px)",o.$slideTrack.css(i)):(i[o.animType]="translate(0px,"+e+"px)",o.$slideTrack.css(i))},complete:function(){n&&n.call()}})):(o.applyTransition(),t=Math.ceil(t),o.options.vertical===!1?i[o.animType]="translate3d("+t+"px, 0px, 0px)":i[o.animType]="translate3d(0px,"+t+"px, 0px)",o.$slideTrack.css(i),n&&setTimeout(function(){o.disableTransition(),n.call()},o.options.speed))},t.prototype.getNavTarget=function(){var t=this,n=t.options.asNavFor;return n&&null!==n&&(n=e(n).not(t.$slider)),n},t.prototype.asNavFor=function(t){var n=this,i=n.getNavTarget();null!==i&&"object"==typeof i&&i.each(function(){var n=e(this).slick("getSlick");n.unslicked||n.slideHandler(t,!0)})},t.prototype.applyTransition=function(e){var t=this,n={};t.options.fade===!1?n[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:n[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,t.options.fade===!1?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(e.options.infinite===!1&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1===0&&(e.direction=1))),e.slideHandler(t))},t.prototype.buildArrows=function(){var t=this;t.options.arrows===!0&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),t.options.infinite!==!0&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,n,i=this;if(i.options.dots===!0&&i.slideCount>i.options.slidesToShow){for(i.$slider.addClass("slick-dotted"),n=e("<ul />").addClass(i.options.dotsClass),t=0;t<=i.getDotCount();t+=1)n.append(e("<li />").append(i.options.customPaging.call(this,i,t)));i.$dots=n.appendTo(i.options.appendDots),i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,n){e(n).attr("data-slick-index",t).data("originalStyling",e(n).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),t.options.centerMode!==!0&&t.options.swipeToSlide!==!0||(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.options.draggable===!0&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,n,i,o,r,s,a=this;if(i=document.createDocumentFragment(),r=a.$slider.children(),a.options.rows>1){for(s=a.options.slidesPerRow*a.options.rows,o=Math.ceil(r.length/s),e=0;e<o;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var c=document.createElement("div");for(n=0;n<a.options.slidesPerRow;n++){var d=e*s+(t*a.options.slidesPerRow+n);r.get(d)&&c.appendChild(r.get(d))}l.appendChild(c)}i.appendChild(l)}a.$slider.empty().append(i),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,n){var i,o,r,s=this,a=!1,l=s.$slider.width(),c=window.innerWidth||e(window).width();if("window"===s.respondTo?r=c:"slider"===s.respondTo?r=l:"min"===s.respondTo&&(r=Math.min(c,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){o=null;for(i in s.breakpoints)s.breakpoints.hasOwnProperty(i)&&(s.originalSettings.mobileFirst===!1?r<s.breakpoints[i]&&(o=s.breakpoints[i]):r>s.breakpoints[i]&&(o=s.breakpoints[i]));null!==o?null!==s.activeBreakpoint?(o!==s.activeBreakpoint||n)&&(s.activeBreakpoint=o,
"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,t===!0&&(s.currentSlide=s.options.initialSlide),s.refresh(t),a=o),t||a===!1||s.$slider.trigger("breakpoint",[s,a])}},t.prototype.changeSlide=function(t,n){var i,o,r,s=this,a=e(t.currentTarget);switch(a.is("a")&&t.preventDefault(),a.is("li")||(a=a.closest("li")),r=s.slideCount%s.options.slidesToScroll!==0,i=r?0:(s.slideCount-s.currentSlide)%s.options.slidesToScroll,t.data.message){case"previous":o=0===i?s.options.slidesToScroll:s.options.slidesToShow-i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide-o,!1,n);break;case"next":o=0===i?s.options.slidesToScroll:i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide+o,!1,n);break;case"index":var l=0===t.data.index?0:t.data.index||a.index()*s.options.slidesToScroll;s.slideHandler(s.checkNavigable(l),!1,n),a.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,n,i=this;if(t=i.getNavigableIndexes(),n=0,e>t[t.length-1])e=t[t.length-1];else for(var o in t){if(e<t[o]){e=n;break}n=t[o]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),t.$slider.off("focus.slick blur.slick"),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide)),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),t.options.accessibility===!0&&t.$list.off("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).off("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>1&&(e=t.$slides.children().children(),e.removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){var t=this;t.shouldClick===!1&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),e(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){e(this).attr("style",e(this).data("originalStyling"))}),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.$slider.removeClass("slick-dotted"),n.unslicked=!0,t||n.$slider.trigger("destroy",[n])},t.prototype.disableTransition=function(e){var t=this,n={};n[t.transitionType]="",t.options.fade===!1?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.fadeSlide=function(e,t){var n=this;n.cssTransitions===!1?(n.$slides.eq(e).css({zIndex:n.options.zIndex}),n.$slides.eq(e).animate({opacity:1},n.options.speed,n.options.easing,t)):(n.applyTransition(e),n.$slides.eq(e).css({opacity:1,zIndex:n.options.zIndex}),t&&setTimeout(function(){n.disableTransition(e),t.call()},n.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;t.cssTransitions===!1?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(n){n.stopImmediatePropagation();var i=e(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=i.is(":focus"),t.autoPlay())},0)})},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){var e=this;return e.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,n=0,i=0;if(e.options.infinite===!0)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(e.options.centerMode===!0)i=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else i=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return i-1},t.prototype.getLeft=function(e){var t,n,i,o=this,r=0;return o.slideOffset=0,n=o.$slides.first().outerHeight(!0),o.options.infinite===!0?(o.slideCount>o.options.slidesToShow&&(o.slideOffset=o.slideWidth*o.options.slidesToShow*-1,r=n*o.options.slidesToShow*-1),o.slideCount%o.options.slidesToScroll!==0&&e+o.options.slidesToScroll>o.slideCount&&o.slideCount>o.options.slidesToShow&&(e>o.slideCount?(o.slideOffset=(o.options.slidesToShow-(e-o.slideCount))*o.slideWidth*-1,r=(o.options.slidesToShow-(e-o.slideCount))*n*-1):(o.slideOffset=o.slideCount%o.options.slidesToScroll*o.slideWidth*-1,r=o.slideCount%o.options.slidesToScroll*n*-1))):e+o.options.slidesToShow>o.slideCount&&(o.slideOffset=(e+o.options.slidesToShow-o.slideCount)*o.slideWidth,r=(e+o.options.slidesToShow-o.slideCount)*n),o.slideCount<=o.options.slidesToShow&&(o.slideOffset=0,r=0),o.options.centerMode===!0&&o.options.infinite===!0?o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)-o.slideWidth:o.options.centerMode===!0&&(o.slideOffset=0,o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)),t=o.options.vertical===!1?e*o.slideWidth*-1+o.slideOffset:e*n*-1+r,o.options.variableWidth===!0&&(i=o.slideCount<=o.options.slidesToShow||o.options.infinite===!1?o.$slideTrack.children(".slick-slide").eq(e):o.$slideTrack.children(".slick-slide").eq(e+o.options.slidesToShow),t=o.options.rtl===!0?i[0]?(o.$slideTrack.width()-i[0].offsetLeft-i.width())*-1:0:i[0]?i[0].offsetLeft*-1:0,o.options.centerMode===!0&&(i=o.slideCount<=o.options.slidesToShow||o.options.infinite===!1?o.$slideTrack.children(".slick-slide").eq(e):o.$slideTrack.children(".slick-slide").eq(e+o.options.slidesToShow+1),t=o.options.rtl===!0?i[0]?(o.$slideTrack.width()-i[0].offsetLeft-i.width())*-1:0:i[0]?i[0].offsetLeft*-1:0,t+=(o.$list.width()-i.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){var t=this;return t.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,n=0,i=0,o=[];for(t.options.infinite===!1?e=t.slideCount:(n=t.options.slidesToScroll*-1,i=t.options.slidesToScroll*-1,e=2*t.slideCount);n<e;)o.push(n),n=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return o},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,n,i,o=this;return i=o.options.centerMode===!0?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,o.options.swipeToSlide===!0?(o.$slideTrack.find(".slick-slide").each(function(t,r){if(r.offsetLeft-i+e(r).outerWidth()/2>o.swipeLeft*-1)return n=r,!1}),t=Math.abs(e(n).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){var n=this;n.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var n=this;e(n.$slider).hasClass("slick-initialized")||(e(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateArrows(),n.updateDots(),n.checkResponsive(!0),n.focusHandler()),t&&n.$slider.trigger("init",[n]),n.options.accessibility===!0&&n.initADA(),n.options.autoplay&&(n.paused=!1,n.autoPlay())},t.prototype.initADA=function(){var t=this;t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),t.$slideTrack.attr("role","listbox"),t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n){e(this).attr({role:"option","aria-describedby":"slick-slide"+t.instanceUid+n})}),null!==t.$dots&&t.$dots.attr("role","tablist").find("li").each(function(n){e(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+t.instanceUid+n,id:"slick-slide"+t.instanceUid+n})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),t.activateADA()},t.prototype.initArrowEvents=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide))},t.prototype.initDotEvents=function(){var t=this;t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),t.options.dots===!0&&t.options.pauseOnDotsHover===!0&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),t.options.accessibility===!0&&t.$list.on("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(document).on("ready.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.initUI=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&t.options.accessibility===!0?t.changeSlide({data:{message:t.options.rtl===!0?"next":"previous"}}):39===e.keyCode&&t.options.accessibility===!0&&t.changeSlide({data:{message:t.options.rtl===!0?"previous":"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each(function(){var t=e(this),n=e(this).attr("data-lazy"),i=document.createElement("img");i.onload=function(){t.animate({opacity:0},100,function(){t.attr("src",n).animate({opacity:1},200,function(){t.removeAttr("data-lazy").removeClass("slick-loading")}),s.$slider.trigger("lazyLoaded",[s,t,n])})},i.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,t,n])},i.src=n})}var n,i,o,r,s=this;s.options.centerMode===!0?s.options.infinite===!0?(o=s.currentSlide+(s.options.slidesToShow/2+1),r=o+s.options.slidesToShow+2):(o=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),r=2+(s.options.slidesToShow/2+1)+s.currentSlide):(o=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide,r=Math.ceil(o+s.options.slidesToShow),s.options.fade===!0&&(o>0&&o--,r<=s.slideCount&&r++)),n=s.$slider.find(".slick-slide").slice(o,r),t(n),s.slideCount<=s.options.slidesToShow?(i=s.$slider.find(".slick-slide"),t(i)):s.currentSlide>=s.slideCount-s.options.slidesToShow?(i=s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow),t(i)):0===s.currentSlide&&(i=s.$slider.find(".slick-cloned").slice(s.options.slidesToShow*-1),t(i))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){var e=this;e.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&t.initADA())},t.prototype.prev=t.prototype.slickPrev=function(){var e=this;e.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(t){t=t||1;var n,i,o,r=this,s=e("img[data-lazy]",r.$slider);s.length?(n=s.first(),i=n.attr("data-lazy"),o=document.createElement("img"),o.onload=function(){n.attr("src",i).removeAttr("data-lazy").removeClass("slick-loading"),r.options.adaptiveHeight===!0&&r.setPosition(),r.$slider.trigger("lazyLoaded",[r,n,i]),r.progressiveLazyLoad()},o.onerror=function(){t<3?setTimeout(function(){r.progressiveLazyLoad(t+1)},500):(n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,n,i]),r.progressiveLazyLoad())},o.src=i):r.$slider.trigger("allImagesLoaded",[r])},t.prototype.refresh=function(t){var n,i,o=this;i=o.slideCount-o.options.slidesToShow,!o.options.infinite&&o.currentSlide>i&&(o.currentSlide=i),o.slideCount<=o.options.slidesToShow&&(o.currentSlide=0),n=o.currentSlide,o.destroy(!0),e.extend(o,o.initials,{currentSlide:n}),o.init(),t||o.changeSlide({data:{message:"index",index:n}},!1)},t.prototype.registerBreakpoints=function(){var t,n,i,o=this,r=o.options.responsive||null;if("array"===e.type(r)&&r.length){o.respondTo=o.options.respondTo||"window";for(t in r)if(i=o.breakpoints.length-1,n=r[t].breakpoint,r.hasOwnProperty(t)){for(;i>=0;)o.breakpoints[i]&&o.breakpoints[i]===n&&o.breakpoints.splice(i,1),i--;o.breakpoints.push(n),o.breakpointSettings[n]=r[t].settings}o.breakpoints.sort(function(e,t){return o.options.mobileFirst?e-t:t-e})}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),t.options.focusOnSelect===!0&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,n){var i=this;return"boolean"==typeof e?(t=e,e=t===!0?0:i.slideCount-1):e=t===!0?--e:e,!(i.slideCount<1||e<0||e>i.slideCount-1)&&(i.unload(),n===!0?i.$slideTrack.children().remove():i.$slideTrack.children(this.options.slide).eq(e).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,void i.reinit())},t.prototype.setCSS=function(e){var t,n,i=this,o={};i.options.rtl===!0&&(e=-e),t="left"==i.positionProp?Math.ceil(e)+"px":"0px",n="top"==i.positionProp?Math.ceil(e)+"px":"0px",o[i.positionProp]=e,i.transformsEnabled===!1?i.$slideTrack.css(o):(o={},i.cssTransitions===!1?(o[i.animType]="translate("+t+", "+n+")",i.$slideTrack.css(o)):(o[i.animType]="translate3d("+t+", "+n+", 0px)",i.$slideTrack.css(o)))},t.prototype.setDimensions=function(){var e=this;e.options.vertical===!1?e.options.centerMode===!0&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),e.options.centerMode===!0&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),e.options.vertical===!1&&e.options.variableWidth===!1?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):e.options.variableWidth===!0?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();e.options.variableWidth===!1&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,n=this;n.$slides.each(function(i,o){t=n.slideWidth*i*-1,n.options.rtl===!0?e(o).css({position:"relative",right:t,top:0,zIndex:n.options.zIndex-2,opacity:0}):e(o).css({position:"relative",left:t,top:0,zIndex:n.options.zIndex-2,opacity:0})}),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(){var t,n,i,o,r,s=this,a=!1;if("object"===e.type(arguments[0])?(i=arguments[0],a=arguments[1],r="multiple"):"string"===e.type(arguments[0])&&(i=arguments[0],o=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===e.type(arguments[1])?r="responsive":"undefined"!=typeof arguments[1]&&(r="single")),"single"===r)s.options[i]=o;else if("multiple"===r)e.each(i,function(e,t){s.options[e]=t});else if("responsive"===r)for(n in o)if("array"!==e.type(s.options.responsive))s.options.responsive=[o[n]];else{for(t=s.options.responsive.length-1;t>=0;)s.options.responsive[t].breakpoint===o[n].breakpoint&&s.options.responsive.splice(t,1),t--;s.options.responsive.push(o[n])}a&&(s.unload(),s.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),e.options.fade===!1?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=e.options.vertical===!0?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||e.options.useCSS===!0&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&e.animType!==!1&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&e.animType!==!1},t.prototype.setSlideClasses=function(e){var t,n,i,o,r=this;n=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),r.$slides.eq(e).addClass("slick-current"),r.options.centerMode===!0?(t=Math.floor(r.options.slidesToShow/2),r.options.infinite===!0&&(e>=t&&e<=r.slideCount-1-t?r.$slides.slice(e-t,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(i=r.options.slidesToShow+e,n.slice(i-t+1,i+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?n.eq(n.length-1-r.options.slidesToShow).addClass("slick-center"):e===r.slideCount-1&&n.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(e).addClass("slick-center")):e>=0&&e<=r.slideCount-r.options.slidesToShow?r.$slides.slice(e,e+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=r.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(o=r.slideCount%r.options.slidesToShow,i=r.options.infinite===!0?r.options.slidesToShow+e:e,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-e<r.options.slidesToShow?n.slice(i-(r.options.slidesToShow-o),i+o).addClass("slick-active").attr("aria-hidden","false"):n.slice(i,i+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===r.options.lazyLoad&&r.lazyLoad()},t.prototype.setupInfinite=function(){var t,n,i,o=this;if(o.options.fade===!0&&(o.options.centerMode=!1),o.options.infinite===!0&&o.options.fade===!1&&(n=null,o.slideCount>o.options.slidesToShow)){for(i=o.options.centerMode===!0?o.options.slidesToShow+1:o.options.slidesToShow,t=o.slideCount;t>o.slideCount-i;t-=1)n=t-1,e(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(t=0;t<i;t+=1)n=t,e(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each(function(){e(this).attr("id","")})}},t.prototype.interrupt=function(e){var t=this;e||t.autoPlay(),t.interrupted=e},t.prototype.selectHandler=function(t){var n=this,i=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),o=parseInt(i.attr("data-slick-index"));return o||(o=0),n.slideCount<=n.options.slidesToShow?(n.setSlideClasses(o),void n.asNavFor(o)):void n.slideHandler(o)},t.prototype.slideHandler=function(e,t,n){var i,o,r,s,a,l=null,c=this;if(t=t||!1,(c.animating!==!0||c.options.waitForAnimate!==!0)&&!(c.options.fade===!0&&c.currentSlide===e||c.slideCount<=c.options.slidesToShow))return t===!1&&c.asNavFor(e),i=e,l=c.getLeft(i),s=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?s:c.swipeLeft,c.options.infinite===!1&&c.options.centerMode===!1&&(e<0||e>c.getDotCount()*c.options.slidesToScroll)?void(c.options.fade===!1&&(i=c.currentSlide,n!==!0?c.animateSlide(s,function(){c.postSlide(i)}):c.postSlide(i))):c.options.infinite===!1&&c.options.centerMode===!0&&(e<0||e>c.slideCount-c.options.slidesToScroll)?void(c.options.fade===!1&&(i=c.currentSlide,n!==!0?c.animateSlide(s,function(){c.postSlide(i)}):c.postSlide(i))):(c.options.autoplay&&clearInterval(c.autoPlayTimer),o=i<0?c.slideCount%c.options.slidesToScroll!==0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+i:i>=c.slideCount?c.slideCount%c.options.slidesToScroll!==0?0:i-c.slideCount:i,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,o]),r=c.currentSlide,c.currentSlide=o,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&(a=c.getNavTarget(),a=a.slick("getSlick"),a.slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide)),c.updateDots(),c.updateArrows(),c.options.fade===!0?(n!==!0?(c.fadeSlideOut(r),c.fadeSlide(o,function(){c.postSlide(o)})):c.postSlide(o),void c.animateHeight()):void(n!==!0?c.animateSlide(l,function(){c.postSlide(o)}):c.postSlide(o)))},t.prototype.startLoad=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,n,i,o=this;return e=o.touchObject.startX-o.touchObject.curX,t=o.touchObject.startY-o.touchObject.curY,n=Math.atan2(t,e),i=Math.round(180*n/Math.PI),i<0&&(i=360-Math.abs(i)),i<=45&&i>=0?o.options.rtl===!1?"left":"right":i<=360&&i>=315?o.options.rtl===!1?"left":"right":i>=135&&i<=225?o.options.rtl===!1?"right":"left":o.options.verticalSwiping===!0?i>=35&&i<=135?"down":"up":"vertical"},t.prototype.swipeEnd=function(e){var t,n,i=this;if(i.dragging=!1,i.interrupted=!1,i.shouldClick=!(i.touchObject.swipeLength>10),void 0===i.touchObject.curX)return!1;if(i.touchObject.edgeHit===!0&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(t),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(t.options.swipe===!1||"ontouchend"in document&&t.options.swipe===!1||t.options.draggable===!1&&e.type.indexOf("mouse")!==-1))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,t.options.verticalSwiping===!0&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,n,i,o,r,s=this;return r=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!s.dragging||r&&1!==r.length)&&(t=s.getLeft(s.currentSlide),s.touchObject.curX=void 0!==r?r[0].pageX:e.clientX,s.touchObject.curY=void 0!==r?r[0].pageY:e.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),s.options.verticalSwiping===!0&&(s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curY-s.touchObject.startY,2)))),n=s.swipeDirection(),"vertical"!==n?(void 0!==e.originalEvent&&s.touchObject.swipeLength>4&&e.preventDefault(),o=(s.options.rtl===!1?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),s.options.verticalSwiping===!0&&(o=s.touchObject.curY>s.touchObject.startY?1:-1),i=s.touchObject.swipeLength,s.touchObject.edgeHit=!1,s.options.infinite===!1&&(0===s.currentSlide&&"right"===n||s.currentSlide>=s.getDotCount()&&"left"===n)&&(i=s.touchObject.swipeLength*s.options.edgeFriction,s.touchObject.edgeHit=!0),s.options.vertical===!1?s.swipeLeft=t+i*o:s.swipeLeft=t+i*(s.$list.height()/s.listWidth)*o,s.options.verticalSwiping===!0&&(s.swipeLeft=t+i*o),s.options.fade!==!0&&s.options.touchMove!==!1&&(s.animating===!0?(s.swipeLeft=null,!1):void s.setCSS(s.swipeLeft))):void 0)},t.prototype.swipeStart=function(e){var t,n=this;return n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow?(n.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==t?t.pageX:e.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(n.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e,t=this;e=Math.floor(t.options.slidesToShow/2),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&t.options.centerMode===!1?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&t.options.centerMode===!0&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,n,i=this,o=arguments[0],r=Array.prototype.slice.call(arguments,1),s=i.length;
for(e=0;e<s;e++)if("object"==typeof o||"undefined"==typeof o?i[e].slick=new t(i[e],o):n=i[e].slick[o].apply(i[e].slick,r),"undefined"!=typeof n)return n;return i}}),!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,n,i,o,r,s,a="Close",l="BeforeClose",c="AfterClose",d="BeforeAppend",u="MarkupParse",p="Open",f="Change",h="mfp",g="."+h,m="mfp-ready",v="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,x=e(window),k=function(e,n){t.ev.on(h+e+g,n)},T=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},C=function(n,i){t.ev.triggerHandler(h+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},S=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},$=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},E=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=E(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,a=n.items;for(o=0;o<a.length;o++)if(s=a[o],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=o;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return void t.updateItemHTML();t.types=[],r="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=T("bg").on("click"+g,function(){t.close()}),t.wrap=T("wrap").attr("tabindex",-1).on("click"+g,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=T("container",t.wrap)),t.contentContainer=T("content"),t.st.preloader&&(t.preloader=T("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(o=0;o<l.length;o++){var c=l[o];c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}C("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(k(u,function(e,t,n,i){n.close_replaceWith=S(i.type)}),r+=" mfp-close-btn-in"):t.wrap.append(S())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:x.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup"+g,function(e){27===e.keyCode&&t.close()}),x.on("resize"+g,function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var d=t.wH=x.height(),f={};if(t.fixedContentPos&&t._hasScrollBar(d)){var h=t._getScrollbarSize();h&&(f.marginRight=h)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):f.overflow="hidden");var v=t.st.mainClass;return t.isIE7&&(v+=" mfp-ie7"),v&&t._addClassToMFP(v),t.updateItemHTML(),C("BuildControls"),e("html").css(f),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(m),t._setFocus()):t.bgOverlay.addClass(m),i.on("focusin"+g,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(d),C(p),n},close:function(){t.isOpen&&(C(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(v),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){C(a);var n=v+" "+m+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup"+g+" focusin"+g),t.ev.off(g),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,C(c)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||x.height();t.fixedContentPos||t.wrap.css("height",t.wH),C("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(C("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var r=!!t.st[i]&&t.st[i].markup;C("FirstMarkupParse",r),r?t.currTemplate[i]=e(r):t.currTemplate[i]=!0}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder");var s=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(s,i),n.preloaded=!0,C(f,n),o=n.type,t.container.prepend(t.contentContainer),C("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(S()):t.content=e:t.content="",C(d),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,s=0;s<r.length;s++)if(o.el.hasClass("mfp-"+r[s])){i=r[s];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,C("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var s=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(s)if(e.isFunction(s)){if(!s.call(t))return!0}else if(x.width()<s)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};C("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||x.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),C(u,[t,n,i]),e.each(n,function(n,i){if(void 0===i||i===!1)return!0;if(o=n.split("_"),o.length>1){var r=t.find(g+"-"+o[0]);if(r.length>0){var s=o[1];"replaceWith"===s?r[0]!==i[0]&&r.replaceWith(i):"img"===s?r.is("img")?r.attr("src",i):r.replaceWith(e("<img>").attr("src",i).attr("class",r.attr("class"))):r.attr(o[1],i)}}else t.find(g+"-"+n).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return $(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(n){$();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,s=parseInt(arguments[1],10)||0;r.items?o=r.items[s]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(s)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var A,j,O,P="inline",D=function(){O&&(j.after(O.addClass(A)).detach(),O=null)};e.magnificPopup.registerModule(P,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(P),k(a+"."+P,function(){D()})},getInline:function(n,i){if(D(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var s=r[0].parentNode;s&&s.tagName&&(j||(A=o.hiddenClass,j=T(A),A="mfp-"+A),O=r.after(j).detach().removeClass(A)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var L,H="ajax",I=function(){L&&e(document.body).removeClass(L)},N=function(){I(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),L=t.st.ajax.cursor,k(a+"."+H,N),k("BeforeChange."+H,N)},getAjax:function(n){L&&e(document.body).addClass(L),t.updateStatus("loading");var i=e.extend({url:n.src,success:function(i,o,r){var s={data:i,xhr:r};C("ParseAjax",s),t.appendContent(e(s.data),H),n.finished=!0,I(),t._setFocus(),setTimeout(function(){t.wrap.addClass(m)},16),t.updateStatus("ready"),C("AjaxContentAdded")},error:function(){I(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(i),""}}});var M,q=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image";t.types.push("image"),k(p+i,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),k(a+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),x.off("resize"+g)}),k("Resize"+i,t.resizeImage),t.isLowIE&&k("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,M&&clearInterval(M),e.isCheckingImgSize=!1,C("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){M&&clearInterval(M),M=setInterval(function(){return i.naturalWidth>0?void t._onImageHasSize(e):(n>200&&clearInterval(M),n++,void(3===n?o(10):40===n?o(50):100===n&&o(500)))},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,C("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):s()))},s=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",a.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},a=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.el&&n.el.find("img").length&&(c.alt=n.el.find("img").attr("alt")),n.img=e(c).on("load.mfploader",r).on("error.mfploader",s),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:q(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(M&&clearInterval(M),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",a.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var F,z=function(){return void 0===F&&(F=void 0!==document.createElement("p").style.MozTransform),F};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,s=n.duration,c=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};k("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return void d();r=c(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,C("ZoomAnimationEnded")},16)},s)},16)}}),k(l+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=s,!e){if(e=t._getItemToZoom(),!e)return;r=c(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),k(a+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),s=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var a={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-s-r};return z()?a["-moz-transform"]=a.transform="translate("+o.left+"px,"+o.top+"px)":(a.left=o.left,a.top=o.top),a}}});var _="iframe",W="//about:blank",R=function(e){if(t.currTemplate[_]){var n=t.currTemplate[_].find("iframe");n.length&&(e||(n[0].src=W),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(_,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(_),k("BeforeChange",function(e,t,n){t!==n&&(t===_?R():n===_&&R(!0))}),k(a+"."+_,function(){R()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var s={};return r.srcAction&&(s[r.srcAction]=o),t._parseMarkup(i,s,n),t.updateStatus("ready"),i}}});var B=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},U=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,o=".mfp-gallery";return t.direction=!0,!(!n||!n.enabled)&&(r+=" mfp-gallery",k(p+o,function(){n.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),i.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),k("UpdateStatus"+o,function(e,n){n.text&&(n.text=U(n.text,t.currItem.index,t.items.length))}),k(u+o,function(e,i,o,r){var s=t.items.length;o.counter=s>1?U(n.tCounter,r.index,s):""}),k("BuildControls"+o,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),r=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y);o.click(function(){t.prev()}),r.click(function(){t.next()}),t.container.append(o.add(r))}}),k(f+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),void k(a+o,function(){i.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=B(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=B(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=B(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),C("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,C("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var X="retina";e.magnificPopup.registerModule(X,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(k("ImageHasSize."+X,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),k("ElementParse."+X,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),$()}),$(document).ready(function(){$(".menu-icon").click(function(){$(".menu").slideToggle()}),$(".search-icon").click(function(){$(".menu__search").slideToggle("slow")}),$(".slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,vertical:!0,dots:!0,verticalSwiping:!0,arrows:!1,responsive:[{breakpoint:1200,settings:{vertical:!1,verticalSwiping:!1}}]}),$("#events-timetable").slick({slidesToShow:2,slidesToScroll:1,vertical:!0,dots:!1,arrows:!0,draggable:!0,infinite:!1,responsive:[{breakpoint:800,settings:{slidesToShow:3}},{breakpoint:640,settings:{slidesToShow:1}}]}),$(".main-text--slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,autoplay:!0}),$(".events-gallery__list--slider").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,dots:!1,arrows:!0,autoplay:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),$(".event-gallery__item").magnificPopup({type:"image",gallery:{enabled:!0},removalDelay:300,mainClass:"mfp-fade"}),$(".blog-archive__slider").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,dots:!1,arrows:!0,autoplay:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),$(".blog-archive__subscribe").click(function(e){e.preventDefault(),$(".blog-subscribe").slideToggle()}),$("#show").click(function(e){e.preventDefault(),$(".blog-archive--hidden").animate({height:"100%"},"slow")}),$("#comments__btn").click(function(e){e.preventDefault(),$(".comments__form").slideToggle()}),$(".reviews").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}),$("#junior .course-tab__links").click(function(){var e=$(this).attr("data-tab");$("#junior .course-tab__links").removeClass("course-tab__links--active"),$(".course--junior").removeClass("course--is-active"),$(this).addClass("course-tab__links--active"),$("#"+e).addClass("course--is-active")}),$("#senior .course-tab__links").click(function(){var e=$(this).attr("data-tab");$("#senior .course-tab__links").removeClass("course-tab__links--active"),$(".course--senior").removeClass("course--is-active"),$(this).addClass("course-tab__links--active"),$("#"+e).addClass("course--is-active")}),$("#children .course-tab__links").click(function(){var e=$(this).attr("data-tab");$("#children .course-tab__links").removeClass("course-tab__links--active"),$(".course--children").removeClass("course--is-active"),$(this).addClass("course-tab__links--active"),$("#"+e).addClass("course--is-active")})});
>>>>>>> master
>>>>>>> org-with-us
