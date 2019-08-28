!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){t.exports=function(){"use strict";var t=document,e=t.createTextNode.bind(t);function n(t,e,n){t.style.setProperty(e,n)}function r(t,e){return t.appendChild(e)}function o(e,n,o,i){var a=t.createElement("span");return n&&(a.className=n),o&&(!i&&a.setAttribute("data-"+n,o),a.textContent=o),e&&r(e,a)||a}function i(t,e){return t.getAttribute("data-"+e)}function a(e,n){return e&&0!=e.length?e.nodeName?[e]:[].slice.call(e[0].nodeName?e:(n||t).querySelectorAll(e)):[]}function s(t){for(var e=[];t--;)e[t]=[];return e}function c(t,e){t&&t.some(e)}function u(t){return function(e){return t[e]}}var l={};function f(t,e,n,r){return{by:t,depends:e,key:n,split:r}}function d(t){return function t(e,n,r){var o=r.indexOf(e);if(-1==o)r.unshift(e),c(l[e].depends,function(n){t(n,e,r)});else{var i=r.indexOf(n);r.splice(o,1),r.splice(i,0,e)}return r}(t,0,[]).map(u(l))}function h(t){l[t.by]=t}function p(t,n,i,s,u){t.normalize();var l=[],f=document.createDocumentFragment();s&&l.push(t.previousSibling);var d=[];return a(t.childNodes).some(function(t){if(!t.tagName||t.hasChildNodes()){if(t.childNodes&&t.childNodes.length)return d.push(t),void l.push.apply(l,p(t,n,i,s,u));var r=t.wholeText||"",a=r.trim();a.length&&(" "===r[0]&&d.push(e(" ")),c(a.split(i),function(t,e){e&&u&&d.push(o(f,"whitespace"," ",u));var r=o(f,n,t);l.push(r),d.push(r)})," "===r[r.length-1]&&d.push(e(" ")))}else d.push(t)}),c(d,function(t){r(f,t)}),t.innerHTML="",r(t,f),l}var m=f("words",0,"word",function(t){return p(t,"word",/\s+/,0,1)}),v="chars",g=f(v,["words"],"char",function(t,e,n){var r=[];return c(n.words,function(t,n){r.push.apply(r,p(t,"char","",e.whitespace&&n))}),r});function y(t){var e=(t=t||{}).key;return a(t.target||"[data-splitting]").map(function(r){var o=r["🍌"];if(!t.force&&o)return o;o=r["🍌"]={el:r};var a=d(t.by||i(r,"splitting")||v),s=function(t,e){for(var n in e)t[n]=e[n];return t}({},t);return c(a,function(t){if(t.split){var i=t.by,a=(e?"-"+e:"")+t.key,u=t.split(r,s,o);a&&function(t,e,r){var o="--"+e,i=o+"-index";c(r,function(t,e){Array.isArray(t)?c(t,function(t){n(t,i,e)}):n(t,i,e)}),n(t,o+"-total",r.length)}(r,a,u),o[i]=u,r.classList.add(i)}}),r.classList.add("splitting"),o})}function w(t,e,n){var r=a(e.matching||t.children,t),o={};return c(r,function(t){var e=Math.round(t[n]);(o[e]||(o[e]=[])).push(t)}),Object.keys(o).map(Number).sort(b).map(u(o))}function b(t,e){return t-e}y.html=function(t){var e=(t=t||{}).target=o();return e.innerHTML=t.content,y(t),e.outerHTML},y.add=h;var E=f("lines",["words"],"line",function(t,e,n){return w(t,{matching:n.words},"offsetTop")}),O=f("items",0,"item",function(t,e){return a(e.matching||t.children,t)}),T=f("rows",0,"row",function(t,e){return w(t,e,"offsetTop")}),I=f("cols",0,"col",function(t,e){return w(t,e,"offsetLeft")}),M=f("grid",["rows","cols"]),L=f("layout",0,0,function(t,e){var s=e.rows=+(e.rows||i(t,"rows")||1),c=e.columns=+(e.columns||i(t,"columns")||1);if(e.image=e.image||i(t,"image")||t.currentSrc||t.src,e.image){var u=a("img",t)[0];e.image=u&&(u.currentSrc||u.src)}e.image&&n(t,"background-image","url("+e.image+")");for(var l=s*c,f=[],d=o(0,"cell-grid");l--;){var h=o(d,"cell");o(h,"cell-inner"),f.push(h)}return r(t,d),f}),x=f("cellRows",["layout"],"row",function(t,e,n){var r=e.rows,o=s(r);return c(n.layout,function(t,e,n){o[Math.floor(e/(n.length/r))].push(t)}),o}),C=f("cellColumns",["layout"],"col",function(t,e,n){var r=e.columns,o=s(r);return c(n.layout,function(t,e){o[e%r].push(t)}),o}),k=f("cells",["cellRows","cellColumns"],"cell",function(t,e,n){return n.layout});return h(m),h(g),h(E),h(O),h(T),h(I),h(M),h(L),h(x),h(C),h(k),y}()},function(t,e,n){},function(t,e,n){(function(t){var n,r,o,i;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i=function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1).isInBrowser,o=new(n(2))(r?document.body:null);o.setStateFromDOM(null),o.listenToDOM(),r&&(window.scrollMonitor=o),t.exports=o},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,n){"use strict";function r(t){return s?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function o(t){return s?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function i(t){return s?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var a=n(1),s=a.isOnServer,c=a.isInBrowser,u=a.eventTypes,l=n(3),f=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var a,s,c,l=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=o(e),this.viewportHeight=r(e),this.DOMListener=function(){t.prototype.DOMListener.apply(l,arguments)},this.eventTypes=u,n&&(this.containerWatcher=n.create(e)),this.update=function(){(function(){if(l.viewportTop=i(e),l.viewportBottom=l.viewportTop+l.viewportHeight,l.documentHeight=o(e),l.documentHeight!==a){for(s=l.watchers.length;s--;)l.watchers[s].recalculateLocation();a=l.documentHeight}})(),function(){for(c=l.watchers.length;c--;)l.watchers[c].update();for(c=l.watchers.length;c--;)l.watchers[c].triggerCallbacks()}()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){c&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener):this.item.addEventListener("scroll",this.DOMListener),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t)},t.prototype.setStateFromDOM=function(t){var e=i(this.item),n=r(this.item),a=o(this.item);this.setState(e,n,a,t)},t.prototype.setState=function(t,e,n,r){var o=e!==this.viewportHeight||n!==this.contentHeight;if(this.latestEvent=r,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=n,o)for(var i=this.watchers.length;i--;)this.watchers[i].recalculateLocation();this.updateAndTriggerWatchers(r)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){"string"==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var n=new t(e,this);return n.setStateFromDOM(),n.listenToDOM(),n},t.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var n=new l(this,t,e);return this.watchers.push(n),n},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=f},function(t,e,n){"use strict";function r(t,e,n){function r(t,e){if(0!==t.length)for(g=t.length;g--;)(y=t[g]).callback.call(w,e,w),y.isOne&&t.splice(g,1)}var o,p,m,v,g,y,w=this;this.watchItem=e,this.container=t,this.offsets=n?n===+n?{top:n,bottom:n}:{top:n.top||h.top,bottom:n.bottom||h.bottom}:h,this.callbacks={};for(var b=0,E=d.length;b<E;b++)w.callbacks[d[b]]=[];this.locked=!1,this.triggerCallbacks=function(t){switch(this.isInViewport&&!o&&r(this.callbacks[a],t),this.isFullyInViewport&&!p&&r(this.callbacks[s],t),this.isAboveViewport!==m&&this.isBelowViewport!==v&&(r(this.callbacks[i],t),p||this.isFullyInViewport||(r(this.callbacks[s],t),r(this.callbacks[u],t)),o||this.isInViewport||(r(this.callbacks[a],t),r(this.callbacks[c],t))),!this.isFullyInViewport&&p&&r(this.callbacks[u],t),!this.isInViewport&&o&&r(this.callbacks[c],t),this.isInViewport!==o&&r(this.callbacks[i],t),!0){case o!==this.isInViewport:case p!==this.isFullyInViewport:case m!==this.isAboveViewport:case v!==this.isBelowViewport:r(this.callbacks[f],t)}o=this.isInViewport,p=this.isFullyInViewport,m=this.isAboveViewport,v=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var n=this.watchItem.style.display;"none"===n&&(this.watchItem.style.display="");for(var o=0,i=this.container;i.containerWatcher;)o+=i.containerWatcher.top-i.containerWatcher.container.viewportTop,i=i.containerWatcher.container;var a=this.watchItem.getBoundingClientRect();this.top=a.top+this.container.viewportTop-o,this.bottom=a.bottom+this.container.viewportTop-o,"none"===n&&(this.watchItem.style.display=n)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||r(this.callbacks[l],null)}},this.recalculateLocation(),this.update(),o=this.isInViewport,p=this.isFullyInViewport,m=this.isAboveViewport,v=this.isBelowViewport}var o=n(1),i=o.VISIBILITYCHANGE,a=o.ENTERVIEWPORT,s=o.FULLYENTERVIEWPORT,c=o.EXITVIEWPORT,u=o.PARTIALLYEXITVIEWPORT,l=o.LOCATIONCHANGE,f=o.STATECHANGE,d=o.eventTypes,h=o.defaultOffsets;r.prototype={on:function(t,e,n){switch(!0){case t===i&&!this.isInViewport&&this.isAboveViewport:case t===a&&this.isInViewport:case t===s&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===u&&this.isInViewport&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),n)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+d.join(", "));this.callbacks[t].push({callback:e,isOne:n||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+d.join(", "));for(var n,r=0;n=this.callbacks[t][r];r++)if(n.callback===e){this.callbacks[t].splice(r,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this);this.container.watchers.splice(t,1);for(var e=0,n=d.length;e<n;e++)this.callbacks[d[e]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var p=function(t){return function(e,n){this.on.call(this,t,e,n)}},m=0,v=d.length;m<v;m++){var g=d[m];r.prototype[g]=p(g)}t.exports=r}])},"object"==a(e)&&"object"==a(t)?t.exports=i():(r=[],void 0===(o="function"==typeof(n=i)?n.apply(e,r):n)||(t.exports=o))}).call(this,n(3)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";n.r(e);var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},o={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],a={CSS:{},springs:{}};function s(t,e,n){return Math.min(Math.max(t,e),n)}function c(t,e){return t.indexOf(e)>-1}function u(t,e){return t.apply(null,e)}var l={arr:function(t){return Array.isArray(t)},obj:function(t){return c(Object.prototype.toString.call(t),"Object")},pth:function(t){return l.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||l.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return l.hex(t)||l.rgb(t)||l.hsl(t)},key:function(t){return!r.hasOwnProperty(t)&&!o.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function f(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function h(t,e){var n=f(t),r=s(l.und(n[0])?1:n[0],.1,100),o=s(l.und(n[1])?100:n[1],.1,100),i=s(l.und(n[2])?10:n[2],.1,100),c=s(l.und(n[3])?0:n[3],.1,100),u=Math.sqrt(o/r),d=i/(2*Math.sqrt(o*r)),h=d<1?u*Math.sqrt(1-d*d):0,p=1,m=d<1?(d*u-c)/h:-c+u;function v(t){var n=e?e*t/1e3:t;return n=d<1?Math.exp(-n*d*u)*(p*Math.cos(h*n)+m*Math.sin(h*n)):(p+m*n)*Math.exp(-n*u),0===t||1===t?t:1-n}return e?v:function(){var e=a.springs[t];if(e)return e;for(var n=0,r=0;;)if(1===v(n+=1/6)){if(++r>=16)break}else r=0;var o=n*(1/6)*1e3;return a.springs[t]=o,o}}function p(t){return void 0===t&&(t=10),function(e){return Math.round(e*t)*(1/t)}}var m,v,g=function(){var t=11,e=1/(t-1);function n(t,e){return 1-3*e+3*t}function r(t,e){return 3*e-6*t}function o(t){return 3*t}function i(t,e,i){return((n(e,i)*t+r(e,i))*t+o(e))*t}function a(t,e,i){return 3*n(e,i)*t*t+2*r(e,i)*t+o(e)}return function(n,r,o,s){if(0<=n&&n<=1&&0<=o&&o<=1){var c=new Float32Array(t);if(n!==r||o!==s)for(var u=0;u<t;++u)c[u]=i(u*e,n,o);return function(t){return n===r&&o===s?t:0===t||1===t?t:i(l(t),r,s)}}function l(r){for(var s=0,u=1,l=t-1;u!==l&&c[u]<=r;++u)s+=e;var f=s+(r-c[--u])/(c[u+1]-c[u])*e,d=a(f,n,o);return d>=.001?function(t,e,n,r){for(var o=0;o<4;++o){var s=a(e,n,r);if(0===s)return e;e-=(i(e,n,r)-t)/s}return e}(r,f,n,o):0===d?f:function(t,e,n,r,o){var a,s,c=0;do{(a=i(s=e+(n-e)/2,r,o)-t)>0?n=s:e=s}while(Math.abs(a)>1e-7&&++c<10);return s}(r,s,s+e,n,o)}}}(),y=(m={linear:function(){return function(t){return t}}},v={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}},Elastic:function(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var n=s(t,1,10),r=s(e,.1,2);return function(t){return 0===t||1===t?t:-n*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(t,e){v[t]=function(){return function(t){return Math.pow(t,e+2)}}}),Object.keys(v).forEach(function(t){var e=v[t];m["easeIn"+t]=e,m["easeOut"+t]=function(t,n){return function(r){return 1-e(t,n)(1-r)}},m["easeInOut"+t]=function(t,n){return function(r){return r<.5?e(t,n)(2*r)/2:1-e(t,n)(-2*r+2)/2}}}),m);function w(t,e){if(l.fnc(t))return t;var n=t.split("(")[0],r=y[n],o=f(t);switch(n){case"spring":return h(t,e);case"cubicBezier":return u(g,o);case"steps":return u(p,o);default:return u(r,o)}}function b(t){try{return document.querySelectorAll(t)}catch(t){return}}function E(t,e){for(var n=t.length,r=arguments.length>=2?arguments[1]:void 0,o=[],i=0;i<n;i++)if(i in t){var a=t[i];e.call(r,a,i,t)&&o.push(a)}return o}function O(t){return t.reduce(function(t,e){return t.concat(l.arr(e)?O(e):e)},[])}function T(t){return l.arr(t)?t:(l.str(t)&&(t=b(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function I(t,e){return t.some(function(t){return t===e})}function M(t){var e={};for(var n in t)e[n]=t[n];return e}function L(t,e){var n=M(t);for(var r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function x(t,e){var n=M(t);for(var r in e)n[r]=l.und(t[r])?e[r]:t[r];return n}function C(t){return l.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:l.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):l.hsl(t)?function(t){var e,n,r,o=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),i=parseInt(o[1],10)/360,a=parseInt(o[2],10)/100,s=parseInt(o[3],10)/100,c=o[4]||1;function u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==a)e=n=r=s;else{var l=s<.5?s*(1+a):s+a-s*a,f=2*s-l;e=u(f,l,i+1/3),n=u(f,l,i),r=u(f,l,i-1/3)}return"rgba("+255*e+","+255*n+","+255*r+","+c+")"}(t):void 0;var e,n}function k(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function A(t,e){return l.fnc(t)?t(e.target,e.id,e.total):t}function S(t,e){return t.getAttribute(e)}function V(t,e,n){if(I([n,"deg","rad","turn"],k(e)))return e;var r=a.CSS[e+n];if(!l.und(r))return r;var o=document.createElement(t.tagName),i=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;i.appendChild(o),o.style.position="absolute",o.style.width=100+n;var s=100/o.offsetWidth;i.removeChild(o);var c=s*parseFloat(e);return a.CSS[e+n]=c,c}function P(t,e,n){if(e in t.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=t.style[e]||getComputedStyle(t).getPropertyValue(r)||"0";return n?V(t,o,n):o}}function D(t,e){return l.dom(t)&&!l.inp(t)&&(S(t,e)||l.svg(t)&&t[e])?"attribute":l.dom(t)&&I(i,e)?"transform":l.dom(t)&&"transform"!==e&&P(t,e)?"css":null!=t[e]?"object":void 0}function H(t){if(l.dom(t)){for(var e,n=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,o=new Map;e=r.exec(n);)o.set(e[1],e[2]);return o}}function N(t,e,n,r){var o=c(e,"scale")?1:0+function(t){return c(t,"translate")||"perspective"===t?"px":c(t,"rotate")||c(t,"skew")?"deg":void 0}(e),i=H(t).get(e)||o;return n&&(n.transforms.list.set(e,i),n.transforms.last=e),r?V(t,i,r):i}function B(t,e,n,r){switch(D(t,e)){case"transform":return N(t,e,r,n);case"css":return P(t,e,n);case"attribute":return S(t,e);default:return t[e]||0}}function F(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=k(t)||0,o=parseFloat(e),i=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return o+i+r;case"-":return o-i+r;case"*":return o*i+r}}function j(t,e){if(l.col(t))return C(t);if(/\s/g.test(t))return t;var n=k(t),r=n?t.substr(0,t.length-n.length):t;return e?r+e:r}function Y(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function W(t){for(var e,n=t.points,r=0,o=0;o<n.numberOfItems;o++){var i=n.getItem(o);o>0&&(r+=Y(e,i)),e=i}return r}function q(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*S(t,"r")}(t);case"rect":return function(t){return 2*S(t,"width")+2*S(t,"height")}(t);case"line":return function(t){return Y({x:S(t,"x1"),y:S(t,"y1")},{x:S(t,"x2"),y:S(t,"y2")})}(t);case"polyline":return W(t);case"polygon":return function(t){var e=t.points;return W(t)+Y(e.getItem(e.numberOfItems-1),e.getItem(0))}(t)}}function R(t,e){var n=e||{},r=n.el||function(t){for(var e=t.parentNode;l.svg(e)&&l.svg(e.parentNode);)e=e.parentNode;return e}(t),o=r.getBoundingClientRect(),i=S(r,"viewBox"),a=o.width,s=o.height,c=n.viewBox||(i?i.split(" "):[0,0,a,s]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:a/c[2],h:s/c[3]}}function X(t,e){function n(n){void 0===n&&(n=0);var r=e+n>=1?e+n:0;return t.el.getPointAtLength(r)}var r=R(t.el,t.svg),o=n(),i=n(-1),a=n(1);switch(t.property){case"x":return(o.x-r.x)*r.w;case"y":return(o.y-r.y)*r.h;case"angle":return 180*Math.atan2(a.y-i.y,a.x-i.x)/Math.PI}}function Z(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=j(l.pth(t)?t.totalLength:t,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:l.str(t)||e?r.split(n):[]}}function G(t){return E(t?O(l.arr(t)?t.map(T):T(t)):[],function(t,e,n){return n.indexOf(t)===e})}function z(t){var e=G(t);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:H(t)}}})}function $(t,e){var n=M(e);if(/^spring/.test(n.easing)&&(n.duration=h(n.easing)),l.arr(t)){var r=t.length;2===r&&!l.obj(t[0])?t={value:t}:l.fnc(e.duration)||(n.duration=e.duration/r)}var o=l.arr(t)?t:[t];return o.map(function(t,n){var r=l.obj(t)&&!l.pth(t)?t:{value:t};return l.und(r.delay)&&(r.delay=n?0:e.delay),l.und(r.endDelay)&&(r.endDelay=n===o.length-1?e.endDelay:0),r}).map(function(t){return x(t,n)})}function Q(t,e){var n=[],r=e.keyframes;for(var o in r&&(e=x(function(t){for(var e=E(O(t.map(function(t){return Object.keys(t)})),function(t){return l.key(t)}).reduce(function(t,e){return t.indexOf(e)<0&&t.push(e),t},[]),n={},r=function(r){var o=e[r];n[o]=t.map(function(t){var e={};for(var n in t)l.key(n)?n==o&&(e.value=t[n]):e[n]=t[n];return e})},o=0;o<e.length;o++)r(o);return n}(r),e)),e)l.key(o)&&n.push({name:o,tweens:$(e[o],t)});return n}function _(t,e){var n;return t.tweens.map(function(r){var o=function(t,e){var n={};for(var r in t){var o=A(t[r],e);l.arr(o)&&1===(o=o.map(function(t){return A(t,e)})).length&&(o=o[0]),n[r]=o}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,e),i=o.value,a=l.arr(i)?i[1]:i,s=k(a),c=B(e.target,t.name,s,e),u=n?n.to.original:c,f=l.arr(i)?i[0]:u,d=k(f)||k(c),h=s||d;return l.und(a)&&(a=u),o.from=Z(f,h),o.to=Z(F(a,f),h),o.start=n?n.end:0,o.end=o.start+o.delay+o.duration+o.endDelay,o.easing=w(o.easing,o.duration),o.isPath=l.pth(i),o.isColor=l.col(o.from.original),o.isColor&&(o.round=1),n=o,o})}var U={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,o){if(r.list.set(e,n),e===r.last||o){var i="";r.list.forEach(function(t,e){i+=e+"("+t+") "}),t.style.transform=i}}};function J(t,e){z(t).forEach(function(t){for(var n in e){var r=A(e[n],t),o=t.target,i=k(r),a=B(o,n,i,t),s=F(j(r,i||k(a)),a),c=D(o,n);U[c](o,n,s,t.transforms,!0)}})}function K(t,e){return E(O(t.map(function(t){return e.map(function(e){return function(t,e){var n=D(t.target,e.name);if(n){var r=_(e,t),o=r[r.length-1];return{type:n,property:e.name,animatable:t,tweens:r,duration:o.end,delay:r[0].delay,endDelay:o.endDelay}}}(t,e)})})),function(t){return!l.und(t)})}function tt(t,e){var n=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},o={};return o.duration=n?Math.max.apply(Math,t.map(function(t){return r(t)+t.duration})):e.duration,o.delay=n?Math.min.apply(Math,t.map(function(t){return r(t)+t.delay})):e.delay,o.endDelay=n?o.duration-Math.max.apply(Math,t.map(function(t){return r(t)+t.duration-t.endDelay})):e.endDelay,o}var et=0;var nt,rt=[],ot=[],it=function(){function t(){nt=requestAnimationFrame(e)}function e(e){var n=rt.length;if(n){for(var r=0;r<n;){var o=rt[r];if(o.paused){var i=rt.indexOf(o);i>-1&&(rt.splice(i,1),n=rt.length)}else o.tick(e);r++}t()}else nt=cancelAnimationFrame(nt)}return t}();function at(t){void 0===t&&(t={});var e,n=0,i=0,a=0,c=0,u=null;function l(t){var e=window.Promise&&new Promise(function(t){return u=t});return t.finished=e,e}var f=function(t){var e=L(r,t),n=L(o,t),i=Q(n,t),a=z(t.targets),s=K(a,i),c=tt(s,n),u=et;return et++,x(e,{id:u,children:[],animatables:a,animations:s,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}(t);l(f);function d(){var t=f.direction;"alternate"!==t&&(f.direction="normal"!==t?"normal":"reverse"),f.reversed=!f.reversed,e.forEach(function(t){return t.reversed=f.reversed})}function h(t){return f.reversed?f.duration-t:t}function p(){n=0,i=h(f.currentTime)*(1/at.speed)}function m(t,e){e&&e.seek(t-e.timelineOffset)}function v(t){for(var e=0,n=f.animations,r=n.length;e<r;){var o=n[e],i=o.animatable,a=o.tweens,c=a.length-1,u=a[c];c&&(u=E(a,function(e){return t<e.end})[0]||u);for(var l=s(t-u.start-u.delay,0,u.duration)/u.duration,d=isNaN(l)?1:u.easing(l),h=u.to.strings,p=u.round,m=[],v=u.to.numbers.length,g=void 0,y=0;y<v;y++){var w=void 0,b=u.to.numbers[y],O=u.from.numbers[y]||0;w=u.isPath?X(u.value,d*b):O+d*(b-O),p&&(u.isColor&&y>2||(w=Math.round(w*p)/p)),m.push(w)}var T=h.length;if(T){g=h[0];for(var I=0;I<T;I++){h[I];var M=h[I+1],L=m[I];isNaN(L)||(g+=M?L+M:L+" ")}}else g=m[0];U[o.type](i.target,o.property,g,i.transforms),o.currentValue=g,e++}}function g(t){f[t]&&!f.passThrough&&f[t](f)}function y(t){var r=f.duration,o=f.delay,p=r-f.endDelay,y=h(t);f.progress=s(y/r*100,0,100),f.reversePlayback=y<f.currentTime,e&&function(t){if(f.reversePlayback)for(var n=c;n--;)m(t,e[n]);else for(var r=0;r<c;r++)m(t,e[r])}(y),!f.began&&f.currentTime>0&&(f.began=!0,g("begin")),!f.loopBegan&&f.currentTime>0&&(f.loopBegan=!0,g("loopBegin")),y<=o&&0!==f.currentTime&&v(0),(y>=p&&f.currentTime!==r||!r)&&v(r),y>o&&y<p?(f.changeBegan||(f.changeBegan=!0,f.changeCompleted=!1,g("changeBegin")),g("change"),v(y)):f.changeBegan&&(f.changeCompleted=!0,f.changeBegan=!1,g("changeComplete")),f.currentTime=s(y,0,r),f.began&&g("update"),t>=r&&(i=0,f.remaining&&!0!==f.remaining&&f.remaining--,f.remaining?(n=a,g("loopComplete"),f.loopBegan=!1,"alternate"===f.direction&&d()):(f.paused=!0,f.completed||(f.completed=!0,g("loopComplete"),g("complete"),!f.passThrough&&"Promise"in window&&(u(),l(f)))))}return f.reset=function(){var t=f.direction;f.passThrough=!1,f.currentTime=0,f.progress=0,f.paused=!0,f.began=!1,f.loopBegan=!1,f.changeBegan=!1,f.completed=!1,f.changeCompleted=!1,f.reversePlayback=!1,f.reversed="reverse"===t,f.remaining=f.loop,e=f.children;for(var n=c=e.length;n--;)f.children[n].reset();(f.reversed&&!0!==f.loop||"alternate"===t&&1===f.loop)&&f.remaining++,v(f.reversed?f.duration:0)},f.set=function(t,e){return J(t,e),f},f.tick=function(t){a=t,n||(n=a),y((a+(i-n))*at.speed)},f.seek=function(t){y(h(t))},f.pause=function(){f.paused=!0,p()},f.play=function(){f.paused&&(f.completed&&f.reset(),f.paused=!1,rt.push(f),p(),nt||it())},f.reverse=function(){d(),p()},f.restart=function(){f.reset(),f.play()},f.reset(),f.autoplay&&f.play(),f}function st(t,e){for(var n=e.length;n--;)I(t,e[n].animatable.target)&&e.splice(n,1)}"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){document.hidden?(rt.forEach(function(t){return t.pause()}),ot=rt.slice(0),at.running=rt=[]):ot.forEach(function(t){return t.play()})}),at.version="3.1.0",at.speed=1,at.running=rt,at.remove=function(t){for(var e=G(t),n=rt.length;n--;){var r=rt[n],o=r.animations,i=r.children;st(e,o);for(var a=i.length;a--;){var s=i[a],c=s.animations;st(e,c),c.length||s.children.length||i.splice(a,1)}o.length||i.length||r.pause()}},at.get=B,at.set=J,at.convertPx=V,at.path=function(t,e){var n=l.str(t)?b(t)[0]:t,r=e||100;return function(t){return{property:t,el:n,svg:R(n),totalLength:q(n)*(r/100)}}},at.setDashoffset=function(t){var e=q(t);return t.setAttribute("stroke-dasharray",e),e},at.stagger=function(t,e){void 0===e&&(e={});var n=e.direction||"normal",r=e.easing?w(e.easing):null,o=e.grid,i=e.axis,a=e.from||0,s="first"===a,c="center"===a,u="last"===a,f=l.arr(t),d=f?parseFloat(t[0]):parseFloat(t),h=f?parseFloat(t[1]):0,p=k(f?t[1]:t)||0,m=e.start||0+(f?d:0),v=[],g=0;return function(t,e,l){if(s&&(a=0),c&&(a=(l-1)/2),u&&(a=l-1),!v.length){for(var y=0;y<l;y++){if(o){var w=c?(o[0]-1)/2:a%o[0],b=c?(o[1]-1)/2:Math.floor(a/o[0]),E=w-y%o[0],O=b-Math.floor(y/o[0]),T=Math.sqrt(E*E+O*O);"x"===i&&(T=-E),"y"===i&&(T=-O),v.push(T)}else v.push(Math.abs(a-y));g=Math.max.apply(Math,v)}r&&(v=v.map(function(t){return r(t/g)*g})),"reverse"===n&&(v=v.map(function(t){return i?t<0?-1*t:-t:Math.abs(g-t)}))}return m+(f?(h-d)/g:d)*(Math.round(100*v[e])/100)+p}},at.timeline=function(t){void 0===t&&(t={});var e=at(t);return e.duration=0,e.add=function(n,r){var i=rt.indexOf(e),a=e.children;function s(t){t.passThrough=!0}i>-1&&rt.splice(i,1);for(var c=0;c<a.length;c++)s(a[c]);var u=x(n,L(o,t));u.targets=u.targets||t.targets;var f=e.duration;u.autoplay=!1,u.direction=e.direction,u.timelineOffset=l.und(r)?f:F(r,f),s(e),e.seek(u.timelineOffset);var d=at(u);s(d),a.push(d);var h=tt(a,t);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},at.easing=w,at.penner=y,at.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};var ct=at,ut=n(0),lt=n.n(ut),ft=[{d:"M1004.82 552.248C1289.7 821.474 780.2 1430.05 600.911 956.159C421.622 482.27 197 775.322 197 552.248C197 329.174 273.122 287.125 600.911 148.337C928.7 9.54762 719.944 283.022 1004.82 552.248Z",scaleX:3,scaleY:1,rotate:0,translateX:0,translateY:0,duration:2e3,gradient:{x1:790.134,y1:105.134,x2:-115.822,y2:722.378,start:"#F1CCA7",stop:"#F47E9A"}},{d:"M1057.61 574.911C714.728 816.611 981.41 1265.21 653.695 978.822C325.98 692.433 -109.016 911.137 249.784 574.911C608.584 238.685 430.621 171 653.695 171C876.769 171 1400.48 333.211 1057.61 574.911Z",scaleX:1.5,scaleY:1.5,rotate:0,translateX:0,translateY:0,duration:2e3,gradient:{x1:924.134,y1:67.1109,x2:18.1781,y2:684.356,start:"#A7F1D6",stop:"#9D7EF4"}},{d:"M1047.97 623.03C787.347 671.329 1031.85 771.83 644.058 1026.94C256.269 1282.05 506.347 749.756 240.147 623.03C-26.0531 496.304 544.062 505.041 644.058 219.119C744.054 -66.8016 1308.59 574.731 1047.97 623.03Z",scaleX:1.2,scaleY:1.2,rotate:0,translateX:0,translateY:0,duration:2e3,gradient:{x1:860.132,y1:140.089,x2:-45.8232,y2:757.333,start:"#F1D3A7",stop:"#7EC9F4"}},{d:"M1037.36 547.213C1415.24 763.013 372.661 1401.24 633.45 951.124C894.238 501.012 -86.7617 717.439 229.538 547.213C545.838 376.987 441.738 208.012 633.45 143.302C825.161 78.5916 659.484 331.413 1037.36 547.213Z",scaleX:1.9,scaleY:1,rotate:0,translateX:0,translateY:0,duration:2e3,gradient:{x1:853.133,y1:78.0671,x2:-52.8226,y2:695.312,start:"#F1A7A7",stop:"#7EC9F4"}}];n(1),n(2);function dt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function ht(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js")});var mt=document.querySelector(".header"),vt=document.querySelectorAll(".content"),gt=document.querySelectorAll(".menu li"),yt=(document.querySelector(".background"),document.querySelector(".hamburger")),wt=document.querySelector(".background svg"),bt=wt.querySelector(".background path"),Et=0,Ot=770,Tt="M31 10V53M31 53L13 36.6017M31 53L49 36.6017",It="M46.5 46.5L15 15M46.4993 15L15 46.5",Mt="M49.0008 46.5L13.0009 46.5M48.9999 31L13 31M48.9999 15L13 15",Lt=window.innerWidth||d.documentElement.clientWidth||d.getElementsByTagName("body")[0].clientWidth,xt=window.innerHeight||d.documentElement.clientHeight||d.getElementsByTagName("body")[0].clientHeight;function Ct(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#home",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(""!==t){var n=document.querySelector(t).offsetTop,r=window.document.scrollingElement||window.document.body||window.document.documentElement;!0,history.pushState(null,null,t),ct.remove(r),ct({targets:r,scrollTop:n,duration:e?0:800,easing:"easeInOutQuad",complete:function(){!1}})}}function kt(t){var e=document.querySelector(".hamburger path");e.getAttribute("d")!==t&&ct({targets:e,d:t,duration:400,easing:"easeOutCirc"})}function At(){if(Lt<=Ot){mt.classList.remove("down");var t=document.querySelector(".menu"),e=It;yt.classList.toggle("active"),t.classList.contains("active")?(e=Mt,ct({targets:t,translateY:[0,100],translateZ:0,opacity:[1,0],easing:"easeOutExpo",duration:600,complete:function(){t.style.visibility="hidden",t.classList.remove("active")}})):(t.classList.add("active"),ct({targets:t,translateY:[100,0],translateZ:0,opacity:[0,1],easing:"easeOutExpo",duration:600,visibility:"visible",begin:function(){t.style.visibility="visible"}})),kt(e)}else{var n=window.document.scrollingElement||window.document.body||window.document.documentElement;ct.remove(n),ct({targets:n,scrollTop:document.body.scrollHeight,duration:1e3,easing:"easeInOutQuad"})}}function St(t,e,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||t.apply(o,i)},s=n&&!r;clearTimeout(r),r=setTimeout(a,e),s&&t.apply(this,arguments)}}function Vt(t){(t<0||t>vt.length-1)&&(t=0),ct.remove(bt),ct({targets:bt,d:ft[t].d,easing:"easeOutCirc",delay:0,elasticity:600,duration:ft[t].duration}),ct.remove("#bg-gradient"),ct(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?dt(n,!0).forEach(function(e){ht(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dt(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({targets:"#bg-gradient"},ft[t].gradient,{easing:"easeInOutCubic"})),ct.remove("#bg-gradient-color-start"),ct({targets:"#bg-gradient-color-start","stop-color":ft[t].gradient.start,easing:"easeInOutCubic"}),ct.remove("#bg-gradient-color-stop"),ct({targets:"#bg-gradient-color-stop","stop-color":ft[t].gradient.stop,easing:"easeInOutCubic"}),ct.remove(wt),ct({targets:wt,duration:4e3,easing:"easeOutElastic",scaleX:ft[t].scaleX,scaleY:ft[t].scaleY,translateX:ft[t].translateX+"px",translateY:ft[t].translateY+"px",rotate:ft[t].rotate+"deg"}),Lt>Ot&&(ct.remove(yt),ct({targets:yt,opacity:t+1===vt.length?0:1}))}var Pt=function(){var t=mt.clientHeight,e=window.pageYOffset||document.documentElement.scrollTop,n=window.pageYOffset||document.documentElement.scrollTop;window.addEventListener("scroll",function(){(e=window.pageYOffset||document.documentElement.scrollTop)-n>=t/2?mt.classList.add("down"):Math.abs(e-n)>=t/2&&mt.classList.remove("down"),e}),window.addEventListener("scroll",St(function(){n=window.pageYOffset||document.documentElement.scrollTop},50)),window.addEventListener("scroll",St(function(){if(Lt>Ot){var t=window.document.scrollingElement||window.document.body||window.document.documentElement;ct.remove(t),ct({targets:t,scrollTop:document.querySelector(".content.active").offsetTop,duration:400,easing:"easeInOutQuad"})}},800)),vt.forEach(function(t,e){var n=t.querySelector(".text");n&&(n.innerHTML=lt.a.html({target:n,content:n.innerHTML,by:"words"}));var r=scrollMonitor.create(vt[e],-.5*t.clientHeight);e=e||0,r.enterViewport(function(){var t,n=vt[e].querySelector(".text"),r=n.querySelectorAll(".word");(vt[e].classList.add("active"),gt[e].classList.add("active"),Et=e,e,Vt(e),Lt>Ot)&&(n.classList.contains("text-started")||(ct.remove(r),ct((ht(t={targets:r,translateY:[100,0],delay:4e3,translateZ:0,opacity:[0,1],easing:"easeOutExpo",duration:1400},"delay",function(t,e){return 300+30*e}),ht(t,"begin",function(){n.classList.add("text-started")}),t))));history.replaceState(null,null,"#"+vt[e].getAttribute("id"))}),r.exitViewport(function(){vt[e].classList.remove("active"),gt[e].classList.remove("active");var t=r.isAboveViewport?e+1:e-1;t,t<=vt.length-1&&Et!==t&&(Et=t,Vt(t))})})};setTimeout(function(){kt(Lt>Ot?Tt:Mt),Ct(location.hash,!0),document.querySelector("body").classList.remove("preload"),yt.addEventListener("click",At),document.documentElement.style.setProperty("--vh","".concat(.01*xt,"px")),Pt(),window.addEventListener("resize",function(){Lt=window.innerWidth||d.documentElement.clientWidth||d.getElementsByTagName("body")[0].clientWidth,xt=window.innerHeight||d.documentElement.clientHeight||d.getElementsByTagName("body")[0].clientHeight,document.documentElement.style.setProperty("--vh","".concat(.01*xt,"px")),Lt>Ot?(document.querySelector(".menu").setAttribute("style",""),kt(Tt)):kt(Mt)}),document.querySelectorAll(".menu a").forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();var e=pt(t.target.href.split("#"),2),n=(e[0],e[1]);Lt<=Ot&&At(),Ct("#"+n)})})},100)}]);