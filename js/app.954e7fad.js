(function(){"use strict";var t={8640:function(t,n,o){var e=o(7764),r=o(4108),i=o(9096);const c={id:"app"},l={key:0},u={key:1},s=(0,r.QD)("p",null,"Welcome, Guest!",-1),a=(0,r.QD)("br",null,null,-1),f=(0,r.QD)("br",null,null,-1),h=(0,r.QD)("br",null,null,-1),d=(0,r.QD)("br",null,null,-1);function g(t,n,o,e,g,p){const v=(0,r.E1)("StockList"),b=(0,r.E1)("router-view");return(0,r.Wz)(),(0,r.An)("div",null,[(0,r.K2)(v),(0,r.QD)("div",c,[(0,r.QD)("h1",null,(0,i.WA)(g.greeting),1),g.isLoggedIn?((0,r.Wz)(),(0,r.An)("div",l,[(0,r.QD)("p",null,"Hello, "+(0,i.WA)(g.user.name)+"!",1),(0,r.QD)("button",{onClick:n[0]||(n[0]=(...n)=>t.logout&&t.logout(...n))},"Logout")])):((0,r.Wz)(),(0,r.An)("div",u,[s,(0,r.QD)("button",{onClick:n[1]||(n[1]=(...t)=>p.loginWithGoogle&&p.loginWithGoogle(...t))},"Login with Google"),a,(0,r.QD)("button",{onClick:n[2]||(n[2]=(...t)=>p.loginPage&&p.loginPage(...t))},"Login"),f,(0,r.QD)("button",{onClick:n[3]||(n[3]=(...t)=>p.Signup&&p.Signup(...t))},"Signup"),h,(0,r.QD)("button",{onClick:n[4]||(n[4]=(...t)=>p.stocklist&&p.stocklist(...t))},"stocklist"),d]))]),(0,r.K2)(b)])}var p={components:{},data(){return{greeting:"Welcome to My App",isLoggedIn:!1,user:null}},methods:{login(){this.initGoogleSignIn()},loginWithGoogle(){window.location.href="http://localhost:3000"},loginPage(){window.location.href="http://localhost:8081/LoginPage"},Signup(){window.location.href="http://localhost:8081/SignUp"},stocklist(){window.location.href="http://localhost:8081/stocklist"},checkLoginStatus(){this.$axios.get("https://localhost:8081/check_login_endpoint").then((t=>{this.isLoggedIn=t.data.isLoggedIn,this.isLoggedIn&&(this.user=t.data.user)})).catch((t=>{console.error("Error checking login status:",t)}))},initGoogleSignIn(){const t=this.$gapi.auth2.init({client_id:"666323034611-cdbgaiumph23s72sa97t8ogj9l9i9ctl.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/userinfo.profile",ux_mode:"redirect",redirect_uri:"https://localhost:8081/code_callback_endpoint",state:"YOUR_BINDING_VALUE"});t.grantOfflineAccess().then((t=>{this.$axios.post("https://localhost:8081/exchange_code_endpoint",{code:t.code}).then((()=>{this.checkLoginStatus()})).catch((t=>{console.error("Error exchanging code:",t)}))})).catch((t=>{console.error("Error getting offline access:",t)}))}},created(){this.checkLoginStatus()}},v=o(4100);const b=(0,v.c)(p,[["render",g]]);var k=b,m=o(7464);const w=(0,r.QD)("h2",null,"Login",-1),y=[w];function D(t,n,o,e,i,c){return(0,r.Wz)(),(0,r.An)("div",null,y)}var Q={};const O=(0,v.c)(Q,[["render",D]]);var _=O;const S=(0,r.QD)("h2",null,"Sign Up",-1),A=(0,r.QD)("h2",null,"여기맞니",-1),W=[S,A];function j(t,n,o,e,i,c){return(0,r.Wz)(),(0,r.An)("div",null,W)}var L={};const P=(0,v.c)(L,[["render",j]]);var E=P;const x=t=>((0,r.ED)("data-v-f97412dc"),t=t(),(0,r.ii)(),t),C=x((()=>(0,r.QD)("h2",null,"Stock List",-1))),I={key:0},z=x((()=>(0,r.QD)("thead",null,[(0,r.QD)("tr",null,[(0,r.QD)("th",null,"ID"),(0,r.QD)("th",null,"종목명"),(0,r.QD)("th",null,"주식가격")])],-1)));function T(t,n,o,e,c,l){return(0,r.Wz)(),(0,r.An)("div",null,[C,(0,r.QD)("button",{onClick:n[0]||(n[0]=(...t)=>l.showStockPrices&&l.showStockPrices(...t))},"주식가격 확인"),c.showTable?((0,r.Wz)(),(0,r.An)("table",I,[z,(0,r.QD)("tbody",null,[((0,r.Wz)(!0),(0,r.An)(r.ae,null,(0,r.mi)(c.stocks,(t=>((0,r.Wz)(),(0,r.An)("tr",{key:t.id},[(0,r.QD)("td",null,(0,i.WA)(t.id),1),(0,r.QD)("td",null,(0,i.WA)(t.name),1),(0,r.QD)("td",null,(0,i.WA)(t.price),1)])))),128))])])):(0,r.g1)("",!0)])}var G=o(2964),N={data(){return{stocks:[],showTable:!1}},methods:{showStockPrices(){G.c.get("http://localhost:3000/stocks").then((t=>{this.stocks=t.data,this.showTable=!0})).catch((t=>{console.error("Error fetching stocks:",t)}))}}};const M=(0,v.c)(N,[["render",T],["__scopeId","data-v-f97412dc"]]);var U=M;const $=[{path:"/LoginPage",component:_},{path:"/SignUp",component:E},{path:"/StockList",component:U}],K=(0,m.gv)({history:(0,m.oz)(),routes:$});var B=K,F=(o(8985),o(6856)),R=(0,F.W_)();async function q(){const t=await o.e(32).then(o.t.bind(o,296,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var H=o(8296),V=o(6400);const Y=(0,e.W0)(k);q(),Y.use(H.c,{clientId:"666323034611-cdbgaiumph23s72sa97t8ogj9l9i9ctl.apps.googleusercontent.com",scope:"profile email",prompt:"select_account"}),Y.config.globalProperties.$axios=G.c,Y.config.globalProperties.$gapi=V.KO,Y.use(B),Y.use(R),Y.mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,i){if(!e){var c=1/0;for(a=0;a<t.length;a++){e=t[a][0],r=t[a][1],i=t[a][2];for(var l=!0,u=0;u<e.length;u++)(!1&i||c>=i)&&Object.keys(o.O).every((function(t){return o.O[t](e[u])}))?e.splice(u--,1):(l=!1,i<c&&(c=i));if(l){t.splice(a--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var a=t.length;a>0&&t[a-1][2]>i;a--)t[a]=t[a-1];t[a]=[e,r,i]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){var t,n=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"===typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"===typeof e.then)return e}var i=Object.create(null);o.r(i);var c={};t=t||[null,n({}),n([]),n(n)];for(var l=2&r&&e;"object"==typeof l&&!~t.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((function(t){c[t]=function(){return e[t]}}));return c["default"]=function(){return e},o.d(i,c),i}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(n,e){return o.f[e](t,n),n}),[]))}}(),function(){o.u=function(t){return"js/webfontloader.c8c6b395.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="hk:";o.l=function(e,r,i,c){if(t[e])t[e].push(r);else{var l,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),a=0;a<s.length;a++){var f=s[a];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+i){l=f;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",n+i),l.src=e),t[e]=[r];var h=function(n,o){l.onerror=l.onload=null,clearTimeout(d);var r=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(t){return t(o)})),n)return n(o)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="https://github.com/rkdgkrud/vue/"}(),function(){var t={524:0};o.f.j=function(n,e){var r=o.o(t,n)?t[n]:void 0;if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(o,e){r=t[n]=[o,e]}));e.push(r[2]=i);var c=o.p+o.u(n),l=new Error,u=function(e){if(o.o(t,n)&&(r=t[n],0!==r&&(t[n]=void 0),r)){var i=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;l.message="Loading chunk "+n+" failed.\n("+i+": "+c+")",l.name="ChunkLoadError",l.type=i,l.request=c,r[1](l)}};o.l(c,u,"chunk-"+n,n)}},o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,i,c=e[0],l=e[1],u=e[2],s=0;if(c.some((function(n){return 0!==t[n]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(u)var a=u(o)}for(n&&n(e);s<c.length;s++)i=c[s],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(a)},e=self["webpackChunkhk"]=self["webpackChunkhk"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[999],(function(){return o(8640)}));e=o.O(e)})();
//# sourceMappingURL=app.954e7fad.js.map