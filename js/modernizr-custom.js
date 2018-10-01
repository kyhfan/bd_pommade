/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-adownload-audio-bgsizecover-blobconstructor-bloburls-borderradius-boxshadow-cssanimations-csstransforms-csstransitions-filereader-ie8compat-opacity-svg-touchevents-video-willchange-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,a,s,i;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)s=e[a],i=s.split("."),1===i.length?Modernizr[i[0]]=r:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=r),T.push((r?"":"no-")+i.join("-"))}}function a(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(C&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),C?x.className.baseVal=n:x.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):C?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(C?"svg":"body"),e.fake=!0),e}function l(e,t,o,r){var a,l,c,d,u="modernizr",p=s("div"),f=i();if(parseInt(o,10))for(;o--;)c=s("div"),c.id=r?r[o]:u+(o+1),p.appendChild(c);return a=s("style"),a.type="text/css",a.id="s"+u,(f.fake?f:p).appendChild(a),f.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=u,f.fake&&(f.style.background="",f.style.overflow="hidden",d=x.style.overflow,x.style.overflow="hidden",x.appendChild(f)),l=t(p,e),f.fake?(f.parentNode.removeChild(f),x.style.overflow=d,x.offsetHeight):p.parentNode.removeChild(p),!!l}function c(e,n){return!!~(""+e).indexOf(n)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var r;for(var a in e)if(e[a]in n)return t===!1?e[a]:(r=n[e[a]],o(r,"function")?u(r,t||n):r);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function y(n,t,o){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,n,t);var a=e.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(a){var s=a.error?"error":"log";a[s].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!t&&n.currentStyle&&n.currentStyle[o];return r}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(f(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];r--;)a.push("("+f(n[r])+":"+o+")");return a=a.join(" or "),l("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==y(e,null,"position")})}return t}function v(e,n,r,a){function i(){u&&(delete L.style,delete L.modElem)}if(a=o(a,"undefined")?!1:a,!o(r,"undefined")){var l=m(e,r);if(!o(l,"undefined"))return l}for(var u,p,f,y,v,g=["modernizr","tspan","samp"];!L.style&&g.length;)u=!0,L.modElem=s(g.shift()),L.style=L.modElem.style;for(f=e.length,p=0;f>p;p++)if(y=e[p],v=L.style[y],c(y,"-")&&(y=d(y)),L.style[y]!==t){if(a||o(r,"undefined"))return i(),"pfx"==n?y:!0;try{L.style[y]=r}catch(h){}if(L.style[y]!=v)return i(),"pfx"==n?y:!0}return i(),!1}function g(e,n,t,r,a){var s=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+E.join(s+" ")+s).split(" ");return o(n,"string")||o(n,"undefined")?v(i,n,r,a):(i=(e+" "+z.join(s+" ")+s).split(" "),p(i,n,t))}function h(e,n,o){return g(e,t,t,n,o)}var T=[],w=[],b={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),Modernizr.addTest("ie8compat",!e.addEventListener&&!!n.documentMode&&7===n.documentMode),Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader));var x=n.documentElement;Modernizr.addTest("willchange","willChange"in x.style);var C="svg"===x.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=s("audio"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("video",function(){var e=s("video"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("adownload",!e.externalHost&&"download"in s("a"));var S=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=S,Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var P=b.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");P(o,function(e){t=9===e.offsetTop})}return t});var _="Moz O ms Webkit",E=b._config.usePrefixes?_.split(" "):[];b._cssomPrefixes=E;var z=b._config.usePrefixes?_.toLowerCase().split(" "):[];b._domPrefixes=z;var $={elem:s("modernizr")};Modernizr._q.push(function(){delete $.elem});var L={style:$.elem.style};Modernizr._q.unshift(function(){delete L.style}),b.testAllProps=g,b.testAllProps=h,Modernizr.addTest("cssanimations",h("animationName","a",!0)),Modernizr.addTest("bgsizecover",h("backgroundSize","cover")),Modernizr.addTest("borderradius",h("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",h("boxShadow","1px 1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",h("transition","all",!0));var R=function(n){var o,r=S.length,a=e.CSSRule;if("undefined"==typeof a)return t;if(!n)return!1;if(n=n.replace(/^@/,""),o=n.replace(/-/g,"_").toUpperCase()+"_RULE",o in a)return"@"+n;for(var s=0;r>s;s++){var i=S[s],l=i.toUpperCase()+"_"+o;if(l in a)return"@-"+i.toLowerCase()+"-"+n}return!1};b.atRule=R;var j=b.prefixed=function(e,n,t){return 0===e.indexOf("@")?R(e):(-1!=e.indexOf("-")&&(e=d(e)),n?g(e,n,t):g(e,"pfx"))},N=j("URL",e,!1);N=N&&e[N],Modernizr.addTest("bloburls",N&&"revokeObjectURL"in N&&"createObjectURL"in N),r(),a(T),delete b.addTest,delete b.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);