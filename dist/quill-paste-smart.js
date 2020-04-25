!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("quill")):"function"==typeof define&&define.amd?define(["quill"],t):"object"==typeof exports?exports.QuillPasteSmart=t(require("quill")):e.QuillPasteSmart=t(e.Quill)}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(t,r){t.exports=e},function(e,t,r){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,r=Object.isFrozen,n=Object.keys,o=Object.freeze,i=Object.seal,a="undefined"!=typeof Reflect&&Reflect,l=a.apply,u=a.construct;l||(l=function(e,t,r){return e.apply(t,r)}),o||(o=function(e){return e}),i||(i=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(t))))});var c=S(Array.prototype.forEach),s=S(Array.prototype.indexOf),p=S(Array.prototype.join),f=S(Array.prototype.pop),d=S(Array.prototype.push),m=S(Array.prototype.slice),h=S(String.prototype.toLowerCase),y=S(String.prototype.match),g=S(String.prototype.replace),b=S(String.prototype.indexOf),A=S(String.prototype.trim),v=S(RegExp.prototype.test),T=O(RegExp),L=O(TypeError);function S(e){return function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return l(e,t,n)}}function O(e){return function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return u(e,r)}}function _(e,n){t&&t(e,null);for(var o=n.length;o--;){var i=n[o];if("string"==typeof i){var a=h(i);a!==i&&(r(n)||(n[o]=a),i=a)}e[i]=!0}return e}function E(t){var r={},n=void 0;for(n in t)l(e,t,[n])&&(r[n]=t[n]);return r}var D=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),x=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),k=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),w=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),R=o(["#text"]),M=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),N=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),W=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),C=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),H=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),j=i(/<%[\s\S]*|[\s\S]*%>/gm),G=i(/^data-[\-\w.\u00B7-\uFFFF]/),F=i(/^aria-[\-\w]+$/),P=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),z=i(/^(?:\w+script|data):/i),I=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function U(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var B=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":q(e))||"function"!=typeof e.createPolicy)return null;var r=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=t.currentScript.getAttribute("data-tt-policy-suffix"));var n="dompurify"+(r?"#"+r:"");try{return e.createPolicy(n,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+n+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B(),r=function(t){return e(t)};if(r.version="2.0.10",r.removed=[],!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var i=t.document,a=!1,l=t.document,u=t.DocumentFragment,S=t.HTMLTemplateElement,O=t.Node,K=t.NodeFilter,Q=t.NamedNodeMap,Y=void 0===Q?t.NamedNodeMap||t.MozNamedAttrMap:Q,X=t.Text,$=t.Comment,J=t.DOMParser,Z=t.trustedTypes;if("function"==typeof S){var ee=l.createElement("template");ee.content&&ee.content.ownerDocument&&(l=ee.content.ownerDocument)}var te=V(Z,i),re=te?te.createHTML(""):"",ne=l,oe=ne.implementation,ie=ne.createNodeIterator,ae=ne.getElementsByTagName,le=ne.createDocumentFragment,ue=i.importNode,ce={};r.isSupported=oe&&void 0!==oe.createHTMLDocument&&9!==l.documentMode;var se=H,pe=j,fe=G,de=F,me=z,he=I,ye=P,ge=null,be=_({},[].concat(U(D),U(x),U(k),U(w),U(R))),Ae=null,ve=_({},[].concat(U(M),U(N),U(W),U(C))),Te=null,Le=null,Se=!0,Oe=!0,_e=!1,Ee=!1,De=!1,xe=!1,ke=!1,we=!1,Re=!1,Me=!1,Ne=!1,We=!1,Ce=!0,He=!0,je=!1,Ge={},Fe=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Pe=_({},["audio","video","img","source","image","track"]),ze=null,Ie=_({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),qe=null,Ue=l.createElement("form"),Be=function(e){qe&&qe===e||(e&&"object"===(void 0===e?"undefined":q(e))||(e={}),ge="ALLOWED_TAGS"in e?_({},e.ALLOWED_TAGS):be,Ae="ALLOWED_ATTR"in e?_({},e.ALLOWED_ATTR):ve,ze="ADD_URI_SAFE_ATTR"in e?_(E(Ie),e.ADD_URI_SAFE_ATTR):Ie,Te="FORBID_TAGS"in e?_({},e.FORBID_TAGS):{},Le="FORBID_ATTR"in e?_({},e.FORBID_ATTR):{},Ge="USE_PROFILES"in e&&e.USE_PROFILES,Se=!1!==e.ALLOW_ARIA_ATTR,Oe=!1!==e.ALLOW_DATA_ATTR,_e=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ee=e.SAFE_FOR_JQUERY||!1,De=e.SAFE_FOR_TEMPLATES||!1,xe=e.WHOLE_DOCUMENT||!1,Re=e.RETURN_DOM||!1,Me=e.RETURN_DOM_FRAGMENT||!1,Ne=e.RETURN_DOM_IMPORT||!1,We=e.RETURN_TRUSTED_TYPE||!1,we=e.FORCE_BODY||!1,Ce=!1!==e.SANITIZE_DOM,He=!1!==e.KEEP_CONTENT,je=e.IN_PLACE||!1,ye=e.ALLOWED_URI_REGEXP||ye,De&&(Oe=!1),Me&&(Re=!0),Ge&&(ge=_({},[].concat(U(R))),Ae=[],!0===Ge.html&&(_(ge,D),_(Ae,M)),!0===Ge.svg&&(_(ge,x),_(Ae,N),_(Ae,C)),!0===Ge.svgFilters&&(_(ge,k),_(Ae,N),_(Ae,C)),!0===Ge.mathMl&&(_(ge,w),_(Ae,W),_(Ae,C))),e.ADD_TAGS&&(ge===be&&(ge=E(ge)),_(ge,e.ADD_TAGS)),e.ADD_ATTR&&(Ae===ve&&(Ae=E(Ae)),_(Ae,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&_(ze,e.ADD_URI_SAFE_ATTR),He&&(ge["#text"]=!0),xe&&_(ge,["html","head","body"]),ge.table&&(_(ge,["tbody"]),delete Te.tbody),o&&o(e),qe=e)},Ve=function(e){d(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=re}},Ke=function(e,t){try{d(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){d(r.removed,{attribute:null,from:t})}t.removeAttribute(e)},Qe=function(e){var t=void 0,r=void 0;if(we)e="<remove></remove>"+e;else{var n=y(e,/^[\s]+/);r=n&&n[0]}var o=te?te.createHTML(e):e;try{t=(new J).parseFromString(o,"text/html")}catch(e){}if(a&&_(Te,["title"]),!t||!t.documentElement){var i=(t=oe.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=o}return e&&r&&t.body.insertBefore(l.createTextNode(r),t.body.childNodes[0]||null),ae.call(t,xe?"html":"body")[0]};r.isSupported&&function(){try{var e=Qe("<x/><title>&lt;/title&gt;&lt;img&gt;");v(/<\/title/,e.querySelector("title").innerHTML)&&(a=!0)}catch(e){}}();var Ye=function(e){return ie.call(e.ownerDocument||e,e,K.SHOW_ELEMENT|K.SHOW_COMMENT|K.SHOW_TEXT,(function(){return K.FILTER_ACCEPT}),!1)},Xe=function(e){return!(e instanceof X||e instanceof $||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof Y&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},$e=function(e){return"object"===(void 0===O?"undefined":q(O))?e instanceof O:e&&"object"===(void 0===e?"undefined":q(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Je=function(e,t,n){ce[e]&&c(ce[e],(function(e){e.call(r,t,n,qe)}))},Ze=function(e){var t=void 0;if(Je("beforeSanitizeElements",e,null),Xe(e))return Ve(e),!0;var n=h(e.nodeName);if(Je("uponSanitizeElement",e,{tagName:n,allowedTags:ge}),("svg"===n||"math"===n)&&0!==e.querySelectorAll("p, br").length)return Ve(e),!0;if(!ge[n]||Te[n]){if(He&&!Fe[n]&&"function"==typeof e.insertAdjacentHTML)try{var o=e.innerHTML;e.insertAdjacentHTML("AfterEnd",te?te.createHTML(o):o)}catch(e){}return Ve(e),!0}return"noscript"===n&&v(/<\/noscript/i,e.innerHTML)||"noembed"===n&&v(/<\/noembed/i,e.innerHTML)?(Ve(e),!0):(!Ee||e.firstElementChild||e.content&&e.content.firstElementChild||!v(/</g,e.textContent)||(d(r.removed,{element:e.cloneNode()}),e.innerHTML?e.innerHTML=g(e.innerHTML,/</g,"&lt;"):e.innerHTML=g(e.textContent,/</g,"&lt;")),De&&3===e.nodeType&&(t=e.textContent,t=g(t,se," "),t=g(t,pe," "),e.textContent!==t&&(d(r.removed,{element:e.cloneNode()}),e.textContent=t)),Je("afterSanitizeElements",e,null),!1)},et=function(e,t,r){if(Ce&&("id"===t||"name"===t)&&(r in l||r in Ue))return!1;if(Oe&&v(fe,t));else if(Se&&v(de,t));else{if(!Ae[t]||Le[t])return!1;if(ze[t]);else if(v(ye,g(r,he,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==b(r,"data:")||!Pe[e])if(_e&&!v(me,g(r,he,"")));else if(r)return!1}return!0},tt=function(e){var t=void 0,o=void 0,i=void 0,a=void 0,l=void 0;Je("beforeSanitizeAttributes",e,null);var u=e.attributes;if(u){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ae};for(l=u.length;l--;){var d=t=u[l],y=d.name,b=d.namespaceURI;if(o=A(t.value),i=h(y),c.attrName=i,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,Je("uponSanitizeAttribute",e,c),o=c.attrValue,!c.forceKeepAttr){if("name"===i&&"IMG"===e.nodeName&&u.id)a=u.id,u=m(u,[]),Ke("id",e),Ke(y,e),s(u,a)>l&&e.setAttribute("id",a.value);else{if("INPUT"===e.nodeName&&"type"===i&&"file"===o&&c.keepAttr&&(Ae[i]||!Le[i]))continue;"id"===y&&e.setAttribute(y,""),Ke(y,e)}if(c.keepAttr)if(Ee&&v(/\/>/i,o))Ke(y,e);else if(v(/svg|math/i,e.namespaceURI)&&v(T("</("+p(n(Fe),"|")+")","i"),o))Ke(y,e);else{De&&(o=g(o,se," "),o=g(o,pe," "));var L=e.nodeName.toLowerCase();if(et(L,i,o))try{b?e.setAttributeNS(b,y,o):e.setAttribute(y,o),f(r.removed)}catch(e){}}}}Je("afterSanitizeAttributes",e,null)}},rt=function e(t){var r=void 0,n=Ye(t);for(Je("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)Je("uponSanitizeShadowNode",r,null),Ze(r)||(r.content instanceof u&&e(r.content),tt(r));Je("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(e,n){var o=void 0,a=void 0,l=void 0,c=void 0,s=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!$e(e)){if("function"!=typeof e.toString)throw L("toString is not a function");if("string"!=typeof(e=e.toString()))throw L("dirty is not a string, aborting")}if(!r.isSupported){if("object"===q(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if($e(e))return t.toStaticHTML(e.outerHTML)}return e}if(ke||Be(n),r.removed=[],"string"==typeof e&&(je=!1),je);else if(e instanceof O)1===(a=(o=Qe("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!Re&&!De&&!xe&&We&&-1===e.indexOf("<"))return te?te.createHTML(e):e;if(!(o=Qe(e)))return Re?null:re}o&&we&&Ve(o.firstChild);for(var p=Ye(je?e:o);l=p.nextNode();)3===l.nodeType&&l===c||Ze(l)||(l.content instanceof u&&rt(l.content),tt(l),c=l);if(c=null,je)return e;if(Re){if(Me)for(s=le.call(o.ownerDocument);o.firstChild;)s.appendChild(o.firstChild);else s=o;return Ne&&(s=ue.call(i,s,!0)),s}var f=xe?o.outerHTML:o.innerHTML;return De&&(f=g(f,se," "),f=g(f,pe," ")),te&&We?te.createHTML(f):f},r.setConfig=function(e){Be(e),ke=!0},r.clearConfig=function(){qe=null,ke=!1},r.isValidAttribute=function(e,t,r){qe||Be({});var n=h(e),o=h(t);return et(n,o,r)},r.addHook=function(e,t){"function"==typeof t&&(ce[e]=ce[e]||[],d(ce[e],t))},r.removeHook=function(e){ce[e]&&f(ce[e])},r.removeHooks=function(e){ce[e]&&(ce[e]=[])},r.removeAllHooks=function(){ce={}},r}()}()},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(1),a=r.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=o.a.import("delta"),h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(d,e);var t,r,n,i,l=(t=d,function(){var e,r=f(t);if(p()){var n=f(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s(this,e)});function d(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(r=l.call(this,e,t)).allowed=t.allowed,r.keepSelection=t.keepSelection,r}return r=d,(n=[{key:"onPaste",value:function(e){e.preventDefault();var t=this.getAllowed(),r=e.clipboardData.getData("text/html"),n=a.a.sanitize(r,t),i=this.convert(n),l=this.quill.getSelection(),u=(new m).retain(l.index);u=u.delete(l.length),this.quill.updateContents(u,o.a.sources.USER),this.quill.updateContents((new m).retain(l.index).concat(i),o.a.sources.API),this.keepSelection?this.quill.setSelection(l.index,i.length(),o.a.sources.SILENT):this.quill.setSelection(l.index+i.length(),o.a.sources.SILENT),this.quill.scrollIntoView()}},{key:"getAllowed",value:function(){var e={};if(this.allowed&&this.allowed.tags&&(e.ALLOWED_TAGS=this.allowed.tags),this.allowed&&this.allowed.attributes&&(e.ALLOWED_ATTR=this.allowed.attributes),void 0===e.ALLOWED_TAGS||void 0===e.ALLOWED_ATTR){var t=!1;void 0===e.ALLOWED_TAGS&&(t=!0,e.ALLOWED_TAGS=["span"]);var r=!1;void 0===e.ALLOWED_ATTR&&(r=!0,e.ALLOWED_ATTR=["class"]),this.quill.getModule("toolbar").controls.forEach((function(n){switch(n[0]){case"bold":t&&(e.ALLOWED_TAGS.push("b"),e.ALLOWED_TAGS.push("strong"));break;case"italic":t&&e.ALLOWED_TAGS.push("i");break;case"underline":t&&e.ALLOWED_TAGS.push("u");break;case"strike":t&&e.ALLOWED_TAGS.push("s");break;case"color":case"background":r&&e.ALLOWED_ATTR.push("style");break;case"script":t&&("super"===n[1].value?e.ALLOWED_TAGS.push("sup"):"sub"===n[1].value&&e.ALLOWED_TAGS.push("sub"));break;case"header":t&&("1"===n[1].value?e.ALLOWED_TAGS.push("h1"):"2"===n[1].value?e.ALLOWED_TAGS.push("h2"):"3"===n[1].value?e.ALLOWED_TAGS.push("h3"):"4"===n[1].value?e.ALLOWED_TAGS.push("h4"):"5"===n[1].value?e.ALLOWED_TAGS.push("h5"):"6"===n[1].value&&e.ALLOWED_TAGS.push("h6"));break;case"code-block":t&&e.ALLOWED_TAGS.push("pre"),r&&e.ALLOWED_ATTR.push("spellcheck");break;case"list":t&&("ordered"===n[1].value?e.ALLOWED_TAGS.push("ol"):"bullet"===n[1].value&&e.ALLOWED_TAGS.push("ul"),e.ALLOWED_TAGS.push("li"));break;case"link":t&&e.ALLOWED_TAGS.push("a"),r&&(e.ALLOWED_ATTR.push("href"),e.ALLOWED_ATTR.push("target"),e.ALLOWED_ATTR.push("rel"));break;case"image":t&&e.ALLOWED_TAGS.push("img"),r&&(e.ALLOWED_ATTR.push("src"),e.ALLOWED_ATTR.push("title"),e.ALLOWED_ATTR.push("alt"));break;case"video":t&&e.ALLOWED_TAGS.push("iframe"),r&&(e.ALLOWED_ATTR.push("frameborder"),e.ALLOWED_ATTR.push("allowfullscreen"),e.ALLOWED_ATTR.push("src"));break;case"blockquote":t&&e.ALLOWED_TAGS.push(n[0])}}))}return e}}])&&u(r.prototype,n),i&&u(r,i),d}(o.a.import("modules/clipboard"));d(h,"keepSelection",!1),d(h,"allowed",[]),o.a.register("modules/clipboard",h,!0),t.default=h}])}));