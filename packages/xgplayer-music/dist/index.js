!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("xgplayer")):"function"==typeof define&&define.amd?define(["xgplayer"],t):"object"==typeof exports?exports["xgplayer-music.js"]=t(require("xgplayer")):e["xgplayer-music.js"]=t(e.xgplayer)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(13)),o=s(n(12)),a=s(n(11));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0,c=i.default.util,u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=c.deepCopy({controls:!0,mediaType:"audio",ignores:["fullscreen","start","definition","makeBullet","textTrack","loading","pc","mobile","playbackRate","replay","volume","error","poster"]},e),r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return r.rawConfig=e,r.list="Array"===c.typeOf(n.url)?n.url:[{src:n.url,name:n.name}],r.history=[],r.index=0,c.addClass(r.root,"xgplayer-music"),Object.defineProperty(r,"src",{get:function(){return this.video.currentSrc},set:function(e){var t="String"===c.typeOf(e)?{src:e,name:""}:e;this.history.push(t),this.video.src=t.src},configurable:!0}),r.once("canplay",function(){n.autoplay?r.volume=0:r.volume=n.volume}),r.on("ended",function(){r.ended&&(r.currentTime=0)}),r.start(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),r(t,[{key:"lyric",value:function(e,t){return this.__lyric__&&this.__lyric__.unbind(this),this.__lyric__=new o.default(e,t),this.__lyric__.bind(this),this.__lyric__}},{key:"add",value:function(e){this.list.push({src:e.src,name:e.name})}},{key:"remove",value:function(e){var t=-1;this.list.every(function(n,r){return n.src!==e&&n.name!==e||(t=r,!1)}),t>-1&&this.list.splice(t,1)}},{key:"random",value:function(){var e=this.list.length;return this.index=Math.ceil(Math.random()*e),this.list[this.index]}},{key:"next",value:function(){switch(this.mode){case"order":case"loop":this.index+1<this.list.length&&(this.index++,this.emit("change",this.list[this.index]),this.src=this.list[this.index].src);break;default:var e=this.random();e&&(this.emit("change",e),this.src=e.src)}}},{key:"prev",value:function(){switch(this.mode){case"order":case"loop":this.index-1>-1&&this.list.length>0&&(this.index--,this.emit("change",this.list[this.index]),this.src=this.list[this.index].src);break;default:var e=this.random();e&&(this.emit("change",e),this.src=e.src)}}},{key:"analyze",value:function(e){return new a.default(this,e)}},{key:"mode",get:function(){return l||t.ModeType[0]},set:function(e){switch(e){case 0:case 1:case 2:l=t.ModeType[e]}}}],[{key:"AudioCtx",get:function(){return window.AudioContext||window.webkitAudioContext}},{key:"ModeType",get:function(){return["order","random","loop"]}}]),t}();t.default=u,e.exports=t.default},function(e,t,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,c=0,u=[],f=n(6);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(m(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(m(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function _(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),g(t,e.attrs),h(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function m(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var a=c++;n=l||(l=_(t)),r=b.bind(null,n,a,!1),i=b.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=f(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=_(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){y(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}e&&p(d(e,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var x,v=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function b(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},,,,function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,'.xgplayer-music .xgplayer-controls{display:-webkit-box;display:-ms-flexbox;display:flex;height:50px;cursor:default}.xgplayer-music .xgplayer-controls .xgplayer-prev{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;cursor:pointer}.xgplayer-music .xgplayer-controls .xgplayer-play{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.xgplayer-music .xgplayer-controls .xgplayer-play .xgplayer-tips{display:none}.xgplayer-music .xgplayer-controls .xgplayer-next{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;cursor:pointer}.xgplayer-music .xgplayer-controls .xgplayer-poster{position:static;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;width:40px;height:40px;text-align:center;vertical-align:middle;position:relative;top:50%;margin-top:-17px}.xgplayer-music .xgplayer-controls .xgplayer-poster img{max-width:100%;max-height:100%}.xgplayer-music .xgplayer-controls .xgplayer-progress{position:relative;-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;top:70%;left:20px;margin-top:-11px;-webkit-box-flex:99;-ms-flex:99;flex:99}.xgplayer-music .xgplayer-controls .xgplayer-progress>*{height:3px;margin-top:8.5px}.xgplayer-music .xgplayer-controls .xgplayer-progress .xgplayer-progress-played:after{top:-4px;width:10px;height:10px;content:" ";display:block}.xgplayer-music .xgplayer-controls .xgplayer-progress .xgplayer-tips{display:none!important}.xgplayer-music .xgplayer-controls .xgplayer-time{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;margin-left:30px;line-height:1;position:relative;top:55%}.xgplayer-music .xgplayer-controls .xgplayer-placeholder{-webkit-box-ordinal-group:1000;-ms-flex-order:999;order:999;width:0}.xgplayer-music .xgplayer-controls .xgplayer-icon{padding-top:5px}.xgplayer-music .xgplayer-controls .xgplayer-name{position:absolute;left:175px;bottom:50%;font-size:12px;color:#ddd}.xgplayer-music.xgplayer-ended .xgplayer-controls{display:-webkit-box;display:-ms-flexbox;display:flex}.xgplayer-lyric-item{display:block;line-height:22px;font-size:14px;color:#000}.xgplayer-lyric-item.xgplayer-lyric-item-active{color:#7fffd4}',""])},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";var r,i=n(0),o=(r=i)&&r.__esModule?r:{default:r};n(8);o.default.install("theme-default",function(e){var t=e.config,n=e.constructor.util,r=e.controls;if(t.controls){n.addClass(e.root,"xgplayer-music-default"),t.theme&&"default"!==t.theme||(t.width||(e.config.width="100%",e.root.style.width="100%"),t.height||(e.config.height="50px",e.root.style.height="50px"));var i=n.createDom("xg-prev",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform = "scale(0.025 0.025)"\n            d="M600 1140v-768h128v352l320-320v704l-320-320v352zz"></path>\n        </svg></xg-icon>',{},"xgplayer-prev");r.appendChild(i);var o=["click","touchstart"];o.forEach(function(t){i.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation(),e.prev()},!1)});var a=n.createDom("xg-next",'<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(0.025 0.025)"\n            d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n        </svg></xg-icon>',{},"xgplayer-next");r.appendChild(a),o.forEach(function(t){a.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation(),e.next()},!1)});var s=n.createDom("xg-name",""+e.config.name,{},"xgplayer-name");r.appendChild(s);var l=n.createDom("xg-poster",'<img src="'+e.config.poster+'">',{},"xgplayer-poster");r.appendChild(l)}else e.root.style.display="none"})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();for(var i,o=0,a="webkit moz ms o".split(" "),s=window.requestAnimationFrame,l=window.cancelAnimationFrame,c=0;c<a.length&&(!s||!l);c++)i=a[c],s=s||window[i+"RequestAnimationFrame"],l=l||window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"];s&&l||(s=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-o)),i=window.setTimeout(function(){e.call(n+r)},r);return o=n+r,i},l=function(e){window.clearTimeout(e)});var u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.color=e.Valid.test(t)?t:"#ffffff",this.opacity=n}return r(e,[{key:"toArray",value:function(){var e=this.color.slice(1),t=[];return 6===e.length&&(t=(e=e.match(/\d{2}/g)).map(function(e){return Number("0x"+e)})),t}},{key:"toRGB",value:function(){var e=this.toArray();return 3===e.length?"rgb("+e[0]+","+e[1]+","+e[2]+")":""}},{key:"toGRBA",value:function(){var e=this.toArray();return 3===e.length?"rgba("+e[0]+","+e[1]+","+e[2]+","+this.opacity+")":""}}],[{key:"Valid",get:function(){return/^#[0-9A-F]{6}$|^#[0-9A-F]{3}$/i}}]),e}();t.default={requestAnimationFrame:s,cancelAnimationFrame:l,isSqrt:function(e,t){if(1!==e){for(;1!==e;){if(e%t!=0)return!1;e/=t}return!0}return!0},Color:u},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(10);var o=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=n,this.player=t;var o=new e.AudioCtx,a=o.createAnalyser(),s=o.createGain();a.minDecibels=-90,a.maxDecibels=-10,a.smoothingTimeConstant=.85,s.gain.setValueAtTime(t.volume,t.currentTime),this.er=o.createMediaElementSource(t.video),this.analyser=a,this.ctx=n.getContext("2d"),this.er.connect(a),a.connect(s),s.connect(o.destination),this.style={bgColor:"#c8c8c8",color:"#643232"},this.__type__="bars",this.__size__=256,this.__status__={switch:"on"},["play","playing","seeked"].forEach(function(e){t.on(e,function(){r["__"+r.__type__+"__"]()})}),["seeking","waiting","pause","ended"].forEach(function(e){(0,i.cancelAnimationFrame)(r.__status__[r.__type__])}),t.on("volumechange",function(){s.gain.setValueAtTime(t.volume,t.currentTime)}),t.on("destroy",function(){o.close()})}return r(e,[{key:"__wave__",value:function(){var e=this;if((0,i.cancelAnimationFrame)(this.__status__.wave),(0,i.cancelAnimationFrame)(this.__status__.bars),"off"!==this.__status__.switch){var t=this.analyser,n=this.canvas,r=this.ctx,o=t.frequencyBinCount,a=new Uint8Array(o),s=n.width,l=n.height,c=new i.Color(this.style.color).toRGB(),u=new i.Color(this.style.color).toRGB();t.fftSize=this.__size__;!function f(){e.__status__.wave=(0,i.requestAnimationFrame)(f),t.getByteTimeDomainData(a),r.clearRect(0,0,s,l),r.fillStyle=u,r.lineWidth=2,r.strokeStyle=c,r.beginPath();for(var p=1*s/o,d=0,h=0;h<o;h++){var y=a[h]/128*l/2;0===h?r.moveTo(d,y):r.lineTo(d,y),d+=p}r.lineTo(n.width,n.height/2),r.stroke()}()}}},{key:"__bars__",value:function(){var e=this;if((0,i.cancelAnimationFrame)(this.__status__.wave),(0,i.cancelAnimationFrame)(this.__status__.bars),"off"!==this.__status__.switch){var t=this.analyser,n=this.canvas,r=this.ctx,o=t.frequencyBinCount,a=new Uint8Array(o),s=n.width,l=n.height,c=new i.Color(this.style.color).toArray(),u=new i.Color(this.style.color).toRGB();t.fftSize=this.__size__;!function n(){e.__status__.bars=(0,i.requestAnimationFrame)(n),t.getByteFrequencyData(a),r.clearRect(0,0,s,l),r.fillStyle=u,r.fillRect(0,0,s,l);for(var f=s/o*2.5,p=void 0,d=0,h=0;h<o;h++)p=a[h],r.fillStyle="rgb("+(p+c[0])+","+c[1]+","+c[2]+")",r.fillRect(d,l-p/2,f,p/2),d+=f+1}()}}},{key:"on",value:function(){this.__status__.switch="on",this["__"+this.__type__+"__"]()}},{key:"off",value:function(){this.__status__.switch="off",(0,i.cancelAnimationFrame)(this.__status__.wave),(0,i.cancelAnimationFrame)(this.__status__.bars)}},{key:"mode",set:function(t){e.Mode.filter(function(e){return e===t}).length&&(this.__type__=t,"on"===this.__status__.switch&&this["__"+t+"__"]())},get:function(){return this.__type__}},{key:"size",set:function(e){e<65536&&(0,i.isSqrt)(e,2)&&(this.__size__=e,this.analyser.fftSize=e,this["__"+this.__type__+"__"]())},get:function(){return this.__size__}},{key:"status",get:function(){return this.__status__.switch}}],[{key:"AudioCtx",get:function(){return window.AudioContext||window.webkitAudioContext}},{key:"Mode",get:function(){return["wave","bars"]}}]),e}();t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function e(t){i(this,e),this.regRule=/(\d{2}(?=:)):(\d{2}(?=\.))\.(\d{2,3})/g,this.regRule.test(t)?this.time=60*RegExp.$1+1*RegExp.$2+1*("0."+RegExp.$3):this.time=-1};t.LyricTime=o;var a=function(){function e(t,n){i(this,e),this.rawTxt=t,this.txt=t.replace(/^[\r\n]|[\r\n]$/g,"").match(/(\[.*\])[^[]+/g),this.isDynamic=[].concat(t.match(/\[\d{2}:\d{2}\.\d{2,3}\]/g)).length===this.txt.length&&this.txt.length>1,this.__ainimateInterval__=0,this.dom=n,this.list=this.txt.map(function(e,t){var n=/(\[[\d:\S]+\])([^[]+)/g.test(e),r=RegExp.$1,i=RegExp.$2;return{time:n?new o(r).time:-1,lyric:i,idx:t}}),this.line=0}return r(e,[{key:"adjust",value:function(){for(var e,t,n=this.list,r=0,i=n.length;r<i;r++){for(e=r+1;e<i&&!(n[e].time>n[r].time);e++);if(e<i){var o=(n[e].time-n[r].time)/(e-r);for(t=r+1;t<e;t++)n[t].time=n[t-1].time+o}}}},{key:"find",value:function(e){var t=this.list,n=this.__ainimateInterval__;return t.filter(function(r,i){var o=r.time,a=i+1;return e>=o&&t[a]&&1*e+1*n<=t[a].time})}},{key:"bind",value:function(e){var t=this;return this.__player__=e,!!this.isDynamic&&(this.__handle__=function(){var n=t.find(e.currentTime)[0];n&&n.idx!==t.line&&(t.line=n.idx,e.emit("lyricUpdate",n))}.bind(this,e),e.on("timeupdate",this.__handle__),!0)}},{key:"unbind",value:function(e){delete this.__player__,this.__handle__&&(e.off("lyricUpdate",this.__handle__),delete this.__handle__)}},{key:"show",value:function(){var e=this,t=this.dom,n=[];t&&1===t.nodeType?(this.list.forEach(function(e){n.push('<xg-lyric-item class="xgplayer-lyric-item" data-idx="'+e.idx+'">'+e.lyric.replace(/[\r\n]/g,"")+"</xg-lyric-item>")}),t.innerHTML=n.join(""),this.__updateHandle__=function(t){var n=e.dom,r=n.querySelector(".xgplayer-lyric-item-active"),i=n.offsetHeight,o=void 0;r&&(r.className="xgplayer-lyric-item"),(r=n.querySelector('.xgplayer-lyric-item[data-idx="'+t.idx+'"]'))&&(r.className="xgplayer-lyric-item xgplayer-lyric-item-active",(o=r.getBoundingClientRect().top-n.getBoundingClientRect().top+n.scrollTop-i/2)&&(n.scrollTop=o))},this.__player__.on("lyricUpdate",this.__updateHandle__)):this.__player__.emit("error","lyric container can not be empty")}},{key:"hide",value:function(){this.__updateHandle__.off("lyricUpdate",this.__updateHandle__)}},{key:"interval",set:function(e){this.__ainimateInterval__=e},get:function(){return this.__ainimateInterval__}}]),e}();t.default=a},function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(0),o=(r=i)&&r.__esModule?r:{default:r};n(9),t.default=o.default,e.exports=t.default},function(e,t,n){e.exports=n(14)}])});