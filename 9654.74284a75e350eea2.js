"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9654],{2726:(W,w,s)=>{s.d(w,{Uw:()=>A,fo:()=>f});var n=s(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var E=function(i){return i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE",i}(E||{});class Z extends Error{constructor(e,t,a){super(e),this.message=e,this.code=t,this.data=a}}const L=i=>{var e,t,a,c,r;const _=i.CapacitorCustomPlatform||null,l=i.Capacitor||{},M=l.Plugins=l.Plugins||{},p=i.CapacitorPlatforms,$=(null===(e=null==p?void 0:p.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==_?_.name:(i=>{var e,t;return null!=i&&i.androidBridge?"android":null!==(t=null===(e=null==i?void 0:i.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(i)),ae=(null===(t=null==p?void 0:p.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==$()),ce=(null===(a=null==p?void 0:p.currentPlatform)||void 0===a?void 0:a.isPluginAvailable)||(v=>{const C=J.get(v);return!!(null!=C&&C.platforms.has($())||X(v))}),X=(null===(c=null==p?void 0:p.currentPlatform)||void 0===c?void 0:c.getPluginHeader)||(v=>{var C;return null===(C=l.PluginHeaders)||void 0===C?void 0:C.find(B=>B.name===v)}),J=new Map,ge=(null===(r=null==p?void 0:p.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((v,C={})=>{const B=J.get(v);if(B)return console.warn(`Capacitor plugin "${v}" already registered. Cannot register plugins twice.`),B.proxy;const F=$(),H=X(v);let D;const _e=function(){var O=(0,n.Z)(function*(){return!D&&F in C?D=D="function"==typeof C[F]?yield C[F]():C[F]:null!==_&&!D&&"web"in C&&(D=D="function"==typeof C.web?yield C.web():C.web),D});return function(){return O.apply(this,arguments)}}(),Y=O=>{let x;const U=(...I)=>{const j=_e().then(T=>{const R=((O,x)=>{var U,I;if(!H){if(O)return null===(I=O[x])||void 0===I?void 0:I.bind(O);throw new Z(`"${v}" plugin is not implemented on ${F}`,E.Unimplemented)}{const j=null==H?void 0:H.methods.find(T=>x===T.name);if(j)return"promise"===j.rtype?T=>l.nativePromise(v,x.toString(),T):(T,R)=>l.nativeCallback(v,x.toString(),T,R);if(O)return null===(U=O[x])||void 0===U?void 0:U.bind(O)}})(T,O);if(R){const z=R(...I);return x=null==z?void 0:z.remove,z}throw new Z(`"${v}.${O}()" is not implemented on ${F}`,E.Unimplemented)});return"addListener"===O&&(j.remove=(0,n.Z)(function*(){return x()})),j};return U.toString=()=>`${O.toString()}() { [capacitor code] }`,Object.defineProperty(U,"name",{value:O,writable:!1,configurable:!1}),U},q=Y("addListener"),ee=Y("removeListener"),ve=(O,x)=>{const U=q({eventName:O},x),I=function(){var T=(0,n.Z)(function*(){const R=yield U;ee({eventName:O,callbackId:R},x)});return function(){return T.apply(this,arguments)}}(),j=new Promise(T=>U.then(()=>T({remove:I})));return j.remove=(0,n.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield I()}),j},N=new Proxy({},{get(O,x){switch(x){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return H?ve:q;case"removeListener":return ee;default:return Y(x)}}});return M[v]=N,J.set(v,{name:v,proxy:N,platforms:new Set([...Object.keys(C),...H?[F]:[]])}),N});return l.convertFileSrc||(l.convertFileSrc=v=>v),l.getPlatform=$,l.handleError=v=>i.console.error(v),l.isNativePlatform=ae,l.isPluginAvailable=ce,l.pluginMethodNoop=(v,C,B)=>Promise.reject(`${B} does not have an implementation of "${C}".`),l.registerPlugin=ge,l.Exception=Z,l.DEBUG=!!l.DEBUG,l.isLoggingEnabled=!!l.isLoggingEnabled,l.platform=l.getPlatform(),l.isNative=l.isNativePlatform(),l},b=(i=>i.Capacitor=L(i))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),f=b.registerPlugin;class A{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var a=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const _=function(){var M=(0,n.Z)(function*(){return a.removeListener(e,t)});return function(){return M.apply(this,arguments)}}(),l=Promise.resolve({remove:_});return Object.defineProperty(l,"remove",{value:(M=(0,n.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield _()}),function(){return M.apply(this,arguments)})}),l;var M}removeAllListeners(){var e=this;return(0,n.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const a=this.listeners[e];a&&a.forEach(c=>c(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:a=>{this.notifyListeners(t,a)}}}unimplemented(e="not implemented"){return new b.Exception(e,E.Unimplemented)}unavailable(e="not available"){return new b.Exception(e,E.Unavailable)}removeListener(e,t){var a=this;return(0,n.Z)(function*(){const c=a.listeners[e];if(!c)return;const r=c.indexOf(t);a.listeners[e].splice(r,1),a.listeners[e].length||a.removeWindowListener(a.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const Q=i=>encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),V=i=>i.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ne extends A{getCookies(){return(0,n.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(a=>{if(a.length<=0)return;let[c,r]=a.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=V(c).trim(),r=V(r).trim(),t[c]=r}),t})()}setCookie(e){return(0,n.Z)(function*(){try{const t=Q(e.key),a=Q(e.value),c=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),_=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${a||""}${c}; path=${r}; ${_};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,n.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,n.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,n.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}f("CapacitorCookies",{web:()=>new ne});const te=function(){var i=(0,n.Z)(function*(e){return new Promise((t,a)=>{const c=new FileReader;c.onload=()=>{const r=c.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},c.onerror=r=>a(r),c.readAsDataURL(e)})});return function(t){return i.apply(this,arguments)}}();class se extends A{request(e){return(0,n.Z)(function*(){const t=((i,e={})=>{const t=Object.assign({method:i.method||"GET",headers:i.headers},e),c=((i={})=>{const e=Object.keys(i);return Object.keys(i).map(c=>c.toLocaleLowerCase()).reduce((c,r,_)=>(c[r]=i[e[_]],c),{})})(i.headers)["content-type"]||"";if("string"==typeof i.data)t.body=i.data;else if(c.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[_,l]of Object.entries(i.data||{}))r.set(_,l);t.body=r.toString()}else if(c.includes("multipart/form-data")||i.data instanceof FormData){const r=new FormData;if(i.data instanceof FormData)i.data.forEach((l,M)=>{r.append(M,l)});else for(const l of Object.keys(i.data))r.append(l,i.data[l]);t.body=r;const _=new Headers(t.headers);_.delete("content-type"),t.headers=_}else(c.includes("application/json")||"object"==typeof i.data)&&(t.body=JSON.stringify(i.data));return t})(e,e.webFetchExtra),a=((i,e=!0)=>i?Object.entries(i).reduce((a,c)=>{const[r,_]=c;let l,M;return Array.isArray(_)?(M="",_.forEach(p=>{l=e?encodeURIComponent(p):p,M+=`${r}=${l}&`}),M.slice(0,-1)):(l=e?encodeURIComponent(_):_,M=`${r}=${l}`),`${a}&${M}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),c=a?`${e.url}?${a}`:e.url,r=yield fetch(c,t),_=r.headers.get("content-type")||"";let M,p,{responseType:l="text"}=r.ok?e:{};switch(_.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":p=yield r.blob(),M=yield te(p);break;case"json":M=yield r.json();break;default:M=yield r.text()}const K={};return r.headers.forEach(($,G)=>{K[G]=$}),{data:M,headers:K,status:r.status,url:r.url}})()}get(e){var t=this;return(0,n.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,n.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,n.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,n.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,n.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}f("CapacitorHttp",{web:()=>new se})},822:(W,w,s)=>{s.d(w,{K:()=>m});var n=s(6814),y=s(451),u=s(8535),o=s(1147),d=s(9212);let m=(()=>{var g;class E{}return(g=E).\u0275fac=function(S){return new(S||g)},g.\u0275mod=d.oAB({type:g}),g.\u0275inj=d.cJS({imports:[n.ez,y.Pc,u.t,o.Bz]}),E})()},1142:(W,w,s)=>{s.d(w,{H:()=>y});var n=s(9212);let y=(()=>{var u;class o{constructor(){this.email="niel.torres@08gmail.com"}ngOnInit(){}}return(u=o).\u0275fac=function(m){return new(m||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-contact-ubication"]],decls:11,vars:1,consts:[[1,"map-email"],[1,"container","footer-top"],[1,"text-center","map-footer","w50"],[1,"icon-map-pin"],[1,"mayus"],[1,"text-center","email-footer","w50"],[1,"icon-envelope1"],["href","javascript:void()"]],template:function(m,g){1&m&&(n.TgZ(0,"section",0)(1,"div",1)(2,"div",2),n._UZ(3,"i",3),n.TgZ(4,"h6",4),n._uU(5,"madrid, spain"),n.qZA()(),n.TgZ(6,"div",5),n._UZ(7,"i",6),n.TgZ(8,"h6")(9,"a",7),n._uU(10),n.qZA()()()()()),2&m&&(n.xp6(10),n.Oqu(g.email))},styles:[".container[_ngcontent-%COMP%]{max-width:1000px;flex:1;margin:0 auto;display:flex;justify-content:center;align-items:center;height:inherit;flex-wrap:wrap}.map-email[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:15px;letter-spacing:1px;font-size:20px;font-weight:400;line-height:20px;text-decoration:none;font-family:Fira Sans,sans-serif;font-weight:600}.map-email[_ngcontent-%COMP%]{background-color:#fff;color:#000;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.text-center[_ngcontent-%COMP%]{text-align:center}.map-footer[_ngcontent-%COMP%], .email-footer[_ngcontent-%COMP%]{font-size:2.5em;padding:30px 0}.email-footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.w50[_ngcontent-%COMP%]{width:50%;text-align:center}.mayus[_ngcontent-%COMP%]{text-transform:uppercase}@media screen and (max-width: 767px){.w50[_ngcontent-%COMP%]{width:100%}.map-footer[_ngcontent-%COMP%], .email-footer[_ngcontent-%COMP%]{font-size:1.8em;padding:25px 0}}"]}),o})()},7913:(W,w,s)=>{s.d(w,{c:()=>y});var n=s(9212);let y=(()=>{var u;class o{constructor(){}ngOnInit(){}}return(u=o).\u0275fac=function(m){return new(m||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-footer"]],decls:4,vars:0,consts:[[1,"footer"]],template:function(m,g){1&m&&(n.TgZ(0,"section",0)(1,"div")(2,"p"),n._uU(3," \xa9 2024 Niel Torres "),n.qZA()()())},styles:[".footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;justify-content:center;align-items:center;font-size:15px;font-weight:400;text-decoration:none;font-family:Fira Sans,sans-serif;font-weight:600;background:radial-gradient(#433243,#000);color:#fff;text-align:center}"]}),o})()},1321:(W,w,s)=>{s.d(w,{G:()=>S});var n=s(5861);const u=(0,s(2726).fo)("Device",{web:()=>s.e(7116).then(s.bind(s,7116)).then(L=>new L.DeviceWeb)});var o=s(9212),d=s(578),m=s(6814),g=s(451),E=s(1147);function Z(L,h){if(1&L){const b=o.EpF();o.TgZ(0,"div",6)(1,"ion-buttons",7)(2,"ion-button",8),o._UZ(3,"ion-icon",9),o.TgZ(4,"ion-label",10),o._uU(5,"Inicio"),o.qZA()(),o.TgZ(6,"ion-button",11)(7,"ion-label"),o._uU(8,"Proyectos"),o.qZA()(),o.TgZ(9,"ion-button",12)(10,"ion-label"),o._uU(11,"Sobre mi"),o.qZA()(),o.TgZ(12,"ion-button",13),o.NdJ("click",function(){o.CHM(b);const P=o.oxw();return o.KtG(P.goToBlog())}),o.TgZ(13,"ion-label"),o._uU(14,"Blog"),o.qZA()(),o.TgZ(15,"ion-button",13),o.NdJ("click",function(){o.CHM(b);const P=o.oxw();return o.KtG(P.goToLink())}),o.TgZ(16,"ion-label"),o._uU(17,"Mi CV"),o.qZA()()()()}}let S=(()=>{var L;class h{constructor(f){this.utilService=f,this.showModeWeb=!0}ngOnInit(){this.checkDevice()}checkDevice(){var f=this;!function(){var k=(0,n.Z)(function*(){"iPhone"===(yield u.getInfo()).model&&(f.showModeWeb=!1)});return function(){return k.apply(this,arguments)}}()()}toggleDarkMode(){}goToBlog(){this.utilService.goToLink("https://medium.com/@nieltorres_/list/mi-blog-e6f2e63bdc98","_blank")}goToLink(){this.utilService.goToLink("https://drive.google.com/file/d/1gHlFJLNi30adF28GPxE9aaJeaMx1TQiu/view?usp=sharing","_blank")}}return(L=h).\u0275fac=function(f){return new(f||L)(o.Y36(d.F))},L.\u0275cmp=o.Xpm({type:L,selectors:[["app-header"]],decls:7,vars:1,consts:[["id","main-content",1,"header"],["slot","start"],[1,"container"],[1,"header_logo"],["src","assets/icon/favicon.jpg","height","50","alt","Logo de http://nieltorres.com"],["class","header_links",4,"ngIf"],[1,"header_links"],["slot","end"],["routerLink","/Inicio","routerDirection","root"],["name","home-outline"],[1,"labelLink"],["routerLink","/proyectos","routerDirection","root"],["routerLink","/sobre-mi","routerDirection","root"],[3,"click"]],template:function(f,P){1&f&&(o.TgZ(0,"div",0)(1,"ion-buttons",1),o._UZ(2,"ion-menu-button"),o.qZA(),o.TgZ(3,"div",2)(4,"div",3),o._UZ(5,"img",4),o.qZA(),o.YNc(6,Z,18,0,"div",5),o.qZA()()),2&f&&(o.xp6(6),o.Q6J("ngIf",P.showModeWeb))},dependencies:[m.O5,g.YG,g.Sm,g.gu,g.Q$,g.fG,g.YI,E.rH],styles:[".header[_ngcontent-%COMP%]{background:radial-gradient(#433243,#000);filter:drop-shadow(0 0 3.75rem #AC3CA8);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:25px 8%}.header[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{display:none}.container[_ngcontent-%COMP%]{flex:1;margin:0 auto;display:inherit;justify-content:inherit;align-items:inherit;height:inherit;flex-wrap:inherit;max-width:1000px;color:#fff}.header_links[_ngcontent-%COMP%]{display:block}.header_links[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:Fira Sans,sans-serif;font-weight:600;font-size:15px;text-transform:capitalize;color:#fff}.header_links[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff}.header_links[_ngcontent-%COMP%]   .labelLink[_ngcontent-%COMP%]{margin-left:5px}@media screen and (max-width: 767px){.container[_ngcontent-%COMP%]{justify-content:center}.header_links[_ngcontent-%COMP%]{display:none}.header[_ngcontent-%COMP%]{padding-right:15%;position:fixed;width:100%;z-index:1000}.header[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{color:#fff;display:initial}}"]}),h})()},8535:(W,w,s)=>{s.d(w,{t:()=>o});var n=s(451),y=s(6814),u=s(9212);let o=(()=>{var d;class m{}return(d=m).\u0275fac=function(E){return new(E||d)},d.\u0275mod=u.oAB({type:d}),d.\u0275inj=u.cJS({imports:[y.ez,n.Pc.forRoot()]}),m})()},6075:(W,w,s)=>{s.d(w,{M:()=>L});var n=s(9212),y=s(4261),u=s(578),o=s(6814),d=s(451),m=s(1147);function g(h,b){if(1&h&&(n.TgZ(0,"ion-button",8),n._UZ(1,"ion-icon",9),n.TgZ(2,"ion-label"),n._uU(3),n.qZA()()),2&h){const f=n.oxw().$implicit;n.s9C("routerLink",f.link),n.xp6(),n.s9C("name",f.icon),n.xp6(2),n.hij("",f.name," ")}}function E(h,b){if(1&h){const f=n.EpF();n.TgZ(0,"ion-button",10),n.NdJ("click",function(){n.CHM(f);const k=n.oxw().$implicit,A=n.oxw();return n.KtG(A.goToLink(k.url))}),n._UZ(1,"ion-icon",9),n.TgZ(2,"ion-label"),n._uU(3),n.qZA()()}if(2&h){const f=n.oxw().$implicit;n.xp6(),n.s9C("name",f.icon),n.xp6(2),n.Oqu(f.name)}}function Z(h,b){if(1&h&&(n.TgZ(0,"ion-menu-toggle"),n.YNc(1,g,4,3,"ion-button",6)(2,E,4,2,"ng-template",null,7,n.W1O),n.qZA()),2&h){const f=b.$implicit,P=n.MAs(3);n.xp6(),n.Q6J("ngIf",!f.url)("ngIfElse",P)}}const S=[{name:"Inicio",link:"/portfolio",icon:"home-outline",url:""},{name:"Proyectos",link:"/proyectos",icon:"code-slash-outline",url:""},{name:"Sobre m\xed",link:"/sobre-mi",icon:"id-card-outline",url:""},{name:"Blog",link:"",icon:"book-outline",url:"https://medium.com/@nieltorres_/list/mi-blog-e6f2e63bdc98"},{name:"Mi CV",link:"",icon:"newspaper-outline",url:"https://drive.google.com/file/d/1gHlFJLNi30adF28GPxE9aaJeaMx1TQiu/view?usp=sharing"}];let L=(()=>{var h;class b{constructor(P,k){this.menuService=P,this.utilService=k,this.linksMenu=S}ngOnInit(){}menuWillOpen(){this.menuService.emitMenuOpen(!0)}menuWillClose(){this.menuService.emitMenuOpen(!1)}goToLink(P){this.utilService.goToLink(P,"_blank")}}return(h=b).\u0275fac=function(P){return new(P||h)(n.Y36(y.h),n.Y36(u.F))},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-menu"]],decls:8,vars:1,consts:[["contentId","main-content",3,"ionWillOpen","ionWillClose"],[1,"menu_logo_toolbar"],[1,"menu_logo_div"],["src","assets/icon/favicon.jpg","height","50","alt","Logo de http://nieltorres.com"],[1,"ion-padding","menu-links"],[4,"ngFor","ngForOf"],["routerDirection","root",3,"routerLink",4,"ngIf","ngIfElse"],["buttonOptional",""],["routerDirection","root",3,"routerLink"],[3,"name"],[3,"click"]],template:function(P,k){1&P&&(n.TgZ(0,"ion-menu",0),n.NdJ("ionWillOpen",function(){return k.menuWillOpen()})("ionWillClose",function(){return k.menuWillClose()}),n.TgZ(1,"ion-header")(2,"div",1)(3,"div",2),n._UZ(4,"img",3),n.qZA()()(),n.TgZ(5,"ion-content",4)(6,"ion-buttons"),n.YNc(7,Z,4,2,"ion-menu-toggle",5),n.qZA()()()),2&P&&(n.xp6(7),n.Q6J("ngForOf",k.linksMenu))},dependencies:[o.sg,o.O5,d.YG,d.Sm,d.W2,d.Gu,d.gu,d.Q$,d.z0,d.zc,d.YI,m.rH],styles:[".menu-links[_ngcontent-%COMP%]{--background: radial-gradient(#433243, black);--filter: drop-shadow(0 0 3.75rem #AC3CA8)}.menu-links[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:20px;margin-right:10px}.menu-links[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-content:flex-start;justify-content:center;align-items:flex-start;margin-left:5%}.menu-links[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:10px 0}.menu-links[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff;text-transform:capitalize;font-size:15px;font-family:Fira Sans,sans-serif;font-weight:600}.menu_logo_toolbar[_ngcontent-%COMP%]   .menu_logo_div[_ngcontent-%COMP%]{display:flex;justify-content:center;background:radial-gradient(#433243,#000);filter:drop-shadow(0 0 3.75rem #AC3CA8)}.menu_logo_toolbar[_ngcontent-%COMP%]   .menu_logo_div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:9% 0}"]}),b})()},4261:(W,w,s)=>{s.d(w,{h:()=>y});var n=s(9212);let y=(()=>{var u;class o{constructor(){this.menuOpen=new n.vpe}emitMenuOpen(m){this.menuOpen.emit(m)}}return(u=o).\u0275fac=function(m){return new(m||u)},u.\u0275prov=n.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),o})()},578:(W,w,s)=>{s.d(w,{F:()=>y});var n=s(9212);let y=(()=>{var u;class o{constructor(){}goToLink(m,g){window.open(m,g)}}return(u=o).\u0275fac=function(m){return new(m||u)},u.\u0275prov=n.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),o})()}}]);