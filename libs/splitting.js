!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.Splitting=n()}(this,function(){"use strict"
var u=document,f=u.createTextNode.bind(u)
function l(t,n,e){t.style.setProperty(n,e)}function d(t,n){return t.appendChild(n)}function p(t,n,e,r){var i=u.createElement("span")
return n&&(i.className=n),e&&(!r&&i.setAttribute("data-"+n,e),i.textContent=e),t&&d(t,i)||i}function n(t,n){return t&&0!=t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(n||u).querySelectorAll(t)):[]}function h(t,n){t&&t.some(n)}var o={}
function t(t,n,e,r){return{by:t,depends:n,key:e,split:r}}function r(t){return function n(e,t,r){var i=r.indexOf(e)
if(-1==i)r.unshift(e),h(o[e].depends,function(t){n(t,e,r)})
else{var u=r.indexOf(t)
r.splice(i,1),r.splice(u,0,e)}return r}(t,0,[]).map((n=o,function(t){return n[t]}))
var n}function e(t){o[t.by]=t}function v(t,r,i,u,o){t.normalize()
var a=[],s=document.createDocumentFragment()
u&&a.push(t.previousSibling)
var c=[]
return n(t.childNodes).some(function(t){if(!t.tagName||t.hasChildNodes()){if(t.childNodes&&t.childNodes.length)return c.push(t),void a.push.apply(a,v(t,r,i,u,o))
var n=t.wholeText||"",e=n.trim()
e.length&&(" "===n[0]&&c.push(f(" ")),h(e.split(i),function(t,n){n&&o&&c.push(p(s,"whitespace"," ",o))
var e=p(s,r,t)
a.push(e),c.push(e)})," "===n[n.length-1]&&c.push(f(" ")))}else c.push(t)}),h(c,function(t){d(s,t)}),t.innerHTML="",d(t,s),a}var i="words",a=t(i,0,"word",function(t){return v(t,"word",/\s+/,0,1)}),m="chars",s=t(m,[i],"char",function(t,e,n){var r=[]
return h(n[i],function(t,n){r.push.apply(r,v(t,"char","",e.whitespace&&n))}),r})
function c(e){var d=(e=e||{}).key
return n(e.target||"[data-splitting]").map(function(s){var c=s["🍌"]
if(!e.force&&c)return c
c=s["🍌"]={el:s}
var t,n=r(e.by||(t="splitting",s.getAttribute("data-"+t))||m),f=function(t,n){for(var e in n)t[e]=n[e]
return t}({},e)
return h(n,function(t){if(t.split){var n=t.by,e=(d?"-"+d:"")+t.key,r=t.split(s,f,c)
e&&(i=s,a=(o="--"+e)+"-index",h(u=r,function(t,n){Array.isArray(t)?h(t,function(t){l(t,a,n)}):l(t,a,n)}),l(i,o+"-total",u.length)),c[n]=r,s.classList.add(n)}var i,u,o,a}),s.classList.add("splitting"),c})}return c.html=function(t){var n=(t=t||{}).target=p()
return n.innerHTML=t.content,c(t),n.outerHTML},(c.add=e)(a),e(s),c})