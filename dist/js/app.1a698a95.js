(function(e){function t(t){for(var n,i,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"25cfd599"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,o[1](s)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("StreamBarcodeReader",{on:{decode:function(t,o,n){return e.onDecode(t,o,n)},loaded:function(){return e.onLoaded()}}}),e._v(" Input Value: "+e._s(e.text||"Nothing")+" ")],1)},a=[],i=o("f337"),c={components:{StreamBarcodeReader:i["a"]},data:function(){return{text:"",id:null}},props:{msg:String},methods:{onDecode:function(e,t,o){var n=this;console.log(e,t,o),this.text=e,this.id&&clearTimeout(this.id),this.id=setTimeout((function(){n.text===e&&(n.text="")}),5e3)},onLoaded:function(){console.log("load")}}},u=c,s=o("2877"),l=Object(s["a"])(u,r,a,!1,null,"246dd980",null),d=l.exports,f=o("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d3b7"),o("3ca3"),o("ddb0");var p=o("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("StreamBarcodeReader",{on:{decode:function(t,o,n){return e.onDecode(t,o,n)},loaded:function(){return e.onLoaded()}}}),e._v(" Input Value: "+e._s(e.text||"Nothing")+" ")],1)},v=[],b={name:"HelloWorld",components:{StreamBarcodeReader:i["a"]},data:function(){return{text:"",id:null}},props:{msg:String},methods:{onDecode:function(e,t,o){var n=this;console.log(e,t,o),this.text=e,this.id&&clearTimeout(this.id),this.id=setTimeout((function(){n.text===e&&(n.text="")}),5e3)},onLoaded:function(){console.log("load")}}},y=b,w=Object(s["a"])(y,g,v,!1,null,"6a06a5d6",null),x=w.exports,j={name:"Home",components:{HelloWorld:x}},_=j,O=Object(s["a"])(_,m,h,!1,null,null,null),S=O.exports;n["a"].use(p["a"]);var k=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],P=new p["a"]({mode:"history",base:"/",routes:k}),T=P,E=o("2f62");n["a"].use(E["a"]);var A=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),C=o("2c0a"),L=o.n(C);n["a"].config.productionTip=!1,n["a"].use(L.a),new n["a"]({router:T,store:A,render:function(e){return e(d)}}).$mount("#app")},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1a698a95.js.map