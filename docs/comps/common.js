function q(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:q(a)}}function t(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var u="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},v;
if("function"==typeof Object.setPrototypeOf)v=Object.setPrototypeOf;else{var w;a:{var x={s:!0},y={};try{y.__proto__=x;w=y.s;break a}catch(a){}w=!1}v=w?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var z=v;
function A(a,b){a.prototype=u(b.prototype);a.prototype.constructor=a;if(z)z(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}var B="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,C="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function D(a,b){if(b){var c=B;a=a.split(".");for(var d=0;d<a.length-1;d++){var h=a[d];h in c||(c[h]={});c=c[h]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&C(c,a,{configurable:!0,writable:!0,value:b})}}var E="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(a[h]=d[h])}return a};D("Object.assign",function(a){return a||E});
D("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});function F(a){function b(c){return c.raw[0].split(/\s+/).map(function(d){var h=a[d];return h?h:(console.error("Key %s is not present in the CSS map.",d),d)}).join(" ")}if(!a)return function(c){return c};Object.keys(a).forEach(function(c){b["$"+c]=a[c]});return b};try{window.preact=preact}catch(a){window.preact={}}var G=window.preact,H=G.h,I=G.Component,J=G.render;function K(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,b:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})}
function L(){var a=void 0===a?{}:a;var b=Object.assign({},a),c=void 0===a.rootMargin?"76px":a.rootMargin,d=void 0===a.log?!0:a.log;a=(delete b.rootMargin,delete b.log,b);var h=new IntersectionObserver(function(e){e.forEach(function(n){var g=n.target,l=g.render.a,p=l.key,f=l.id,k=l.plain;if(n.isIntersecting){d&&console.warn("\ud83c\udfd7 Rendering%s component %s into the element %s",k?"":" Preact",p,f,g);try{var m=g.render();m&&!m.unrender&&h.unobserve(g)}catch(Y){d&&console.warn(Y)}}else l.instance&&
(d&&console.warn("\ud83d\udca8 Unrendering%s component %s from the element %s",k?"":" Preact",p,f,g),l.instance.unrender())})},Object.assign({},{rootMargin:c},a));return h}function M(a,b,c,d){this.l=d;this.m=c;this.b=a;this.parent=b;this.unrender=this.f=null}
M.prototype.render=function(a){var b=Object.assign({},a);a=a.children;b=(delete b.children,b);if(this.f)this.f.componentDidMount&&this.f.componentDidMount(),this.f.forceUpdate();else{this.l.render(this.l.h(this.m,b,a),this.parent,this.b);var c=this.b._component;c.componentWillUnmount&&(this.unrender=function(){c.componentWillUnmount()});this.f=c}};
function N(a,b,c,d,h,e,n){function g(){c.render(Object.assign({},e,{children:n}));a.instance=c}var l={render:J,Component:I,h:H},p=a.plain;!c&&p?c=new b(d,h):c||(c=new M(d,h,b,l));b.load?b.load(function(f,k){k&&Object.assign(e,k);f?console.warn(f):g()},d,e):g();return c};function O(a){this.b=a}O.prototype.render=function(a){var b=this,c=new XMLHttpRequest;c.open("GET","https://api.github.com/repos/"+a.i+"/"+a.name);c.onload=function(){var d=JSON.parse(c.responseText);if(200!=c.status)console.log("GitHub responded with status %s: %s (%s)",c.status,d.message,d.A);else{var h=d.stargazers_count;b.b.title=d.description;d=b.b.querySelector("[data-stargazers]");d.textContent=d.textContent.replace(/\d+/,h)}};c.send()};
B.Object.defineProperties(O,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function P(a,b,c,d){var h=void 0===h?{}:h;var e=window.top,n=e.outerHeight,g=e.screenY,l=e.outerWidth,p=e.screenX;e=[];c&&e.push("width="+c,"left="+(l/2+p-c/2));d&&e.push("top="+(n/2+g-d/2-50),"height="+d);c=Object.keys(h).map(function(f){return f+"="+h[f]});e.push.apply(e,c instanceof Array?c:t(r(c)));window.open(a,b,e.join(","))};function Q(a){var b=Object.assign({},a),c=void 0===a.size?32:a.size,d=a.url,h=a.o,e=a.title,n=a.borderRadius,g=a.a,l=a.g.c;a=(delete b.size,delete b.url,delete b.o,delete b.title,delete b.borderRadius,delete b.a,delete b.g,b);delete a.g;if(g){g=document.querySelector('meta[name="description"]');if(!g)return H("span",Object.assign({},a),"Error Loading Social Buttons (no meta description)");e=g.content;h||(h=g.content)}return H("span",Object.assign({},a),Object.entries(aa).reduce(function(p,f){var k=
r(f);f=k.next().value;var m=k.next().value;k=Object.assign({},m);m=m.color;k=(delete k.color,k);p.push(H(ba,Object.assign({},k,{size:c,w:f,color:"rgb("+m+")",c:l,title:e,url:d,o:h,borderRadius:n,v:"email"==f}))," ");return p},[]))}
function ba(a){var b=a.size,c=a.href,d=a.w,h=a.color,e=a.alt,n=void 0===a.width?900:a.width,g=void 0===a.height?650:a.height,l=void 0===a.borderRadius?"4px":a.borderRadius,p=a.v,f=void 0===a.c?"/":a.c,k=c(a.url,a.title,a.o);a=H("img",{src:f+"buttons/"+d+".svg",width:b,height:b,alt:e,style:"background:"+h+"; border-radius:"+l});return p?H("a",{href:k},a):H("a",{onClick:function(m){P(k,e,n,g);m.preventDefault();return!1},href:"#"},a)}
function R(a){return Object.entries(a).map(function(b){var c=r(b);b=c.next().value;if(c=c.next().value)return b+"="+c}).filter(Boolean).join("&")}
var aa={facebook:{href:function(a,b){return"https://www.facebook.com/sharer/sharer.php?"+R({u:a,quote:b})},color:[59,89,152],alt:"Share on Facebook"},twitter:{href:function(a,b){return"https://twitter.com/intent/tweet?"+R({text:b,url:a})},color:[85,172,238],alt:"Share on Twitter",width:550,height:420},linkedin:{href:function(a,b){return"https://www.linkedin.com/shareArticle?"+R({url:a,mini:!0,title:b})},color:[0,123,181],alt:"Share on LinkedIn"},whatsapp:{href:function(a,b){return"https://api.whatsapp.com/send?"+
R({text:[b,a].filter(Boolean).join(" ")})},color:[18,175,10],alt:"Share on Whatsapp"},email:{href:function(a,b,c){return"mailto:?"+R({subject:c,body:[b,a].filter(Boolean).join(" ")})},color:[1,102,255],alt:"Share on Email"}};function S(a,b){this.loaded=this.f=null;this.m=[a];this.l=[b]}S.prototype.error=function(a){this.f=a;this.l.forEach(function(b){b(a)})};S.prototype.load=function(a){this.loaded=a;this.m.forEach(function(b){b(a)})};function T(a,b,c){var d=document.createElement("link");d.rel="stylesheet";d.href=a;d.onload=b;d.onerror=c;(document.head||document.body).appendChild(d)};function U(a,b){var c=ca(a,V[a],function(d){return b(null,d)},function(d){return b(d)},a.nocache);c&&(V[a]=c)}function ca(a,b,c,d,h){if(h)T(a,c,d);else if(b&&b.loaded)c(b.loaded);else if(b&&b.f)d(b.f);else if(b)b.m.push(c),b.l.push(d);else{var e=new S(c,d);T(a,function(n){e.load(n)},function(n){e.error(n)});return e}}var V={};

//# sourceMappingURL=common.js.map