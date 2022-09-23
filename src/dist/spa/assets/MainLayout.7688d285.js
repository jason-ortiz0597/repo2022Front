var Ue=Object.defineProperty,Xe=Object.defineProperties;var Ye=Object.getOwnPropertyDescriptors;var ve=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var me=(t,r,i)=>r in t?Ue(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,F=(t,r)=>{for(var i in r||(r={}))Ne.call(r,i)&&me(t,i,r[i]);if(ve)for(var i of ve(r))je.call(r,i)&&me(t,i,r[i]);return t},G=(t,r)=>Xe(t,Ye(r));import{U as Ke,$ as T,n as Re,a0 as Je,a1 as A,a2 as Z,ap as pe,aq as ee,a3 as ne,a5 as te,a4 as Ge,a as Ze,u as et,ac as tt,j as at,ad as ot,ar as nt,i as rt,J as it,r as L,c as v,k as ut,as as lt,K as p,G as he,at as W,E as Ee,H as st,C as dt,h as z,af as ye,l as ct,g as ft,au as vt,av as Se,_ as Be,q as O,aw as I,w as g,t as y,d as mt,ax as pt,ai as H,aj as be,m as ht,o as ge,Q as we,s as yt,ay as bt,F as gt,x as wt,az as Ct}from"./index.09418d5b.js";import{Q as kt}from"./QToolbarTitle.5739b537.js";import{Q as _t,b as qt,a as Et,c as St}from"./QLayout.7a99578d.js";import{Q as re}from"./QItemLabel.0494b578.js";import{Q as Ce,a as Bt,b as Lt}from"./QItem.6670c66a.js";import{g as ke,s as _e}from"./touch.70a9dd44.js";import{c as $t}from"./selection.e9c6aaad.js";import{u as Dt}from"./use-quasar.d2f4bb59.js";function ae(t,r,i){const m=ne(t);let e,n=m.left-r.event.x,l=m.top-r.event.y,c=Math.abs(n),d=Math.abs(l);const o=r.direction;o.horizontal===!0&&o.vertical!==!0?e=n<0?"left":"right":o.horizontal!==!0&&o.vertical===!0?e=l<0?"up":"down":o.up===!0&&l<0?(e="up",c>d&&(o.left===!0&&n<0?e="left":o.right===!0&&n>0&&(e="right"))):o.down===!0&&l>0?(e="down",c>d&&(o.left===!0&&n<0?e="left":o.right===!0&&n>0&&(e="right"))):o.left===!0&&n<0?(e="left",c<d&&(o.up===!0&&l<0?e="up":o.down===!0&&l>0&&(e="down"))):o.right===!0&&n>0&&(e="right",c<d&&(o.up===!0&&l<0?e="up":o.down===!0&&l>0&&(e="down")));let q=!1;if(e===void 0&&i===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,q=!0,e==="left"||e==="right"?(m.left-=n,c=0,n=0):(m.top-=l,d=0,l=0)}return{synthetic:q,payload:{evt:t,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:m,direction:e,isFirst:r.event.isFirst,isFinal:i===!0,duration:Date.now()-r.event.time,distance:{x:c,y:d},offset:{x:n,y:l},delta:{x:m.left-r.event.lastX,y:m.top-r.event.lastY}}}}let xt=0;var oe=Ke({name:"touch-pan",beforeMount(t,{value:r,modifiers:i}){if(i.mouse!==!0&&T.has.touch!==!0)return;function m(n,l){i.mouse===!0&&l===!0?Ge(n):(i.stop===!0&&ee(n),i.prevent===!0&&pe(n))}const e={uid:"qvtp_"+xt++,handler:r,modifiers:i,direction:ke(i),noop:Re,mouseStart(n){_e(n,e)&&Je(n)&&(A(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(n,!0))},touchStart(n){if(_e(n,e)){const l=n.target;A(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),e.start(n)}},start(n,l){if(T.is.firefox===!0&&Z(t,!0),e.lastEvt=n,l===!0||i.stop===!0){if(e.direction.all!==!0&&(l!==!0||e.modifiers.mouseAllDir!==!0)){const o=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&pe(o),n.cancelBubble===!0&&ee(o),Object.assign(o,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[e.uid]:n.qClonedBy.concat(e.uid)}),e.initialEvent={target:n.target,event:o}}ee(n)}const{left:c,top:d}=ne(n);e.event={x:c,y:d,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:d}},move(n){if(e.event===void 0)return;const l=ne(n),c=l.left-e.event.x,d=l.top-e.event.y;if(c===0&&d===0)return;e.lastEvt=n;const o=e.event.mouse===!0,q=()=>{m(n,o),i.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),o===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),$t(),e.styleCleanup=s=>{if(e.styleCleanup=void 0,i.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),o===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};s!==void 0?setTimeout(()=>{_(),s()},50):_()}else s!==void 0&&s()}};if(e.event.detected===!0){e.event.isFirst!==!0&&m(n,e.event.mouse);const{payload:s,synthetic:_}=ae(n,e,!1);s!==void 0&&(e.handler(s)===!1?e.end(n):(e.styleCleanup===void 0&&e.event.isFirst===!0&&q(),e.event.lastX=s.position.left,e.event.lastY=s.position.top,e.event.lastDir=_===!0?void 0:s.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||o===!0&&e.modifiers.mouseAllDir===!0){q(),e.event.detected=!0,e.move(n);return}const k=Math.abs(c),b=Math.abs(d);k!==b&&(e.direction.horizontal===!0&&k>b||e.direction.vertical===!0&&k<b||e.direction.up===!0&&k<b&&d<0||e.direction.down===!0&&k<b&&d>0||e.direction.left===!0&&k>b&&c<0||e.direction.right===!0&&k>b&&c>0?(e.event.detected=!0,e.move(n)):e.end(n,!0))},end(n,l){if(e.event!==void 0){if(te(e,"temp"),T.is.firefox===!0&&Z(t,!1),l===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ae(n===void 0?e.lastEvt:n,e).payload);const{payload:c}=ae(n===void 0?e.lastEvt:n,e,!0),d=()=>{e.handler(c)};e.styleCleanup!==void 0?e.styleCleanup(d):d()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};t.__qtouchpan=e,i.mouse===!0&&A(e,"main",[[t,"mousedown","mouseStart",`passive${i.mouseCapture===!0?"Capture":""}`]]),T.has.touch===!0&&A(e,"main",[[t,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,r){const i=t.__qtouchpan;i!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&i.end(),i.handler=r.value),i.direction=ke(r.modifiers))},beforeUnmount(t){const r=t.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),te(r,"main"),te(r,"temp"),T.is.firefox===!0&&Z(t,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete t.__qtouchpan)}});const qe=150;var Mt=Ze({name:"QDrawer",inheritAttrs:!1,props:G(F(F({},et),tt),{side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...at,"on-layout","mini-state"],setup(t,{slots:r,emit:i,attrs:m}){const e=ft(),{proxy:{$q:n}}=e,l=ot(t,n),{preventBodyScroll:c}=vt(),{registerTimeout:d}=nt(),o=rt(it,()=>{console.error("QDrawer needs to be child of QLayout")});let q,k,b;const s=L(t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint),_=v(()=>t.mini===!0&&s.value!==!0),w=v(()=>_.value===!0?t.miniWidth:t.width),f=L(t.showIfAbove===!0&&s.value===!1?!0:t.modelValue===!0),ie=v(()=>t.persistent!==!0&&(s.value===!0||De.value===!0));function ue(a,u){if(Le(),a!==!1&&o.animate(),C(0),s.value===!0){const h=o.instances[Q.value];h!==void 0&&h.belowBreakpoint===!0&&h.hide(!1),S(1),o.isContainer.value!==!0&&c(!0)}else S(0),a!==!1&&K(!1);d(()=>{a!==!1&&K(!0),u!==!0&&i("show",a)},qe)}function le(a,u){$e(),a!==!1&&o.animate(),S(0),C($.value*w.value),R(),u!==!0&&d(()=>{i("hide",a)},qe)}const{show:U,hide:x}=ut({showing:f,hideOnRouteChange:ie,handleShow:ue,handleHide:le}),{addToHistory:Le,removeFromHistory:$e}=lt(f,x,ie),P={belowBreakpoint:s,hide:x},E=v(()=>t.side==="right"),$=v(()=>(n.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),se=L(0),D=L(!1),X=L(!1),de=L(w.value*$.value),Q=v(()=>E.value===!0?"left":"right"),Y=v(()=>f.value===!0&&s.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:w.value:0),N=v(()=>t.overlay===!0||t.miniToOverlay===!0||o.view.value.indexOf(E.value?"R":"L")>-1||n.platform.is.ios===!0&&o.isContainer.value===!0),M=v(()=>t.overlay===!1&&f.value===!0&&s.value===!1),De=v(()=>t.overlay===!0&&f.value===!0&&s.value===!1),xe=v(()=>"fullscreen q-drawer__backdrop"+(f.value===!1&&D.value===!1?" hidden":"")),Me=v(()=>({backgroundColor:`rgba(0,0,0,${se.value*.4})`})),ce=v(()=>E.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Te=v(()=>E.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),Oe=v(()=>{const a={};return o.header.space===!0&&ce.value===!1&&(N.value===!0?a.top=`${o.header.offset}px`:o.header.space===!0&&(a.top=`${o.header.size}px`)),o.footer.space===!0&&Te.value===!1&&(N.value===!0?a.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(a.bottom=`${o.footer.size}px`)),a}),Pe=v(()=>{const a={width:`${w.value}px`,transform:`translateX(${de.value}px)`};return s.value===!0?a:Object.assign(a,Oe.value)}),Qe=v(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Ve=v(()=>`q-drawer q-drawer--${t.side}`+(X.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":f.value===!0?"":" q-layout--prevent-focus")+(s.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(N.value===!0||M.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(ce.value===!0?" q-drawer--top-padding":""))),Fe=v(()=>{const a=n.lang.rtl===!0?t.side:Q.value;return[[oe,Ie,void 0,{[a]:!0,mouse:!0}]]}),Ae=v(()=>{const a=n.lang.rtl===!0?Q.value:t.side;return[[oe,fe,void 0,{[a]:!0,mouse:!0}]]}),We=v(()=>{const a=n.lang.rtl===!0?Q.value:t.side;return[[oe,fe,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function j(){He(s,t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint)}p(s,a=>{a===!0?(q=f.value,f.value===!0&&x(!1)):t.overlay===!1&&t.behavior!=="mobile"&&q!==!1&&(f.value===!0?(C(0),S(0),R()):U(!1))}),p(()=>t.side,(a,u)=>{o.instances[u]===P&&(o.instances[u]=void 0,o[u].space=!1,o[u].offset=0),o.instances[a]=P,o[a].size=w.value,o[a].space=M.value,o[a].offset=Y.value}),p(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&j()}),p(()=>t.behavior+t.breakpoint,j),p(o.isContainer,a=>{f.value===!0&&c(a!==!0),a===!0&&j()}),p(o.scrollbarWidth,()=>{C(f.value===!0?0:void 0)}),p(Y,a=>{B("offset",a)}),p(M,a=>{i("on-layout",a),B("space",a)}),p(E,()=>{C()}),p(w,a=>{C(),J(t.miniToOverlay,a)}),p(()=>t.miniToOverlay,a=>{J(a,w.value)}),p(()=>n.lang.rtl,()=>{C()}),p(()=>t.mini,()=>{t.modelValue===!0&&(ze(),o.animate())}),p(_,a=>{i("mini-state",a)});function C(a){a===void 0?he(()=>{a=f.value===!0?0:w.value,C($.value*a)}):(o.isContainer.value===!0&&E.value===!0&&(s.value===!0||Math.abs(a)===w.value)&&(a+=$.value*o.scrollbarWidth.value),de.value=a)}function S(a){se.value=a}function K(a){const u=a===!0?"remove":o.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function ze(){clearTimeout(k),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),X.value=!0,k=setTimeout(()=>{X.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ie(a){if(f.value!==!1)return;const u=w.value,h=W(a.distance.x,0,u);if(a.isFinal===!0){h>=Math.min(75,u)===!0?U():(o.animate(),S(0),C($.value*u)),D.value=!1;return}C((n.lang.rtl===!0?E.value!==!0:E.value)?Math.max(u-h,0):Math.min(0,h-u)),S(W(h/u,0,1)),a.isFirst===!0&&(D.value=!0)}function fe(a){if(f.value!==!0)return;const u=w.value,h=a.direction===t.side,V=(n.lang.rtl===!0?h!==!0:h)?W(a.distance.x,0,u):0;if(a.isFinal===!0){Math.abs(V)<Math.min(75,u)===!0?(o.animate(),S(1),C(0)):x(),D.value=!1;return}C($.value*V),S(W(1-V/u,0,1)),a.isFirst===!0&&(D.value=!0)}function R(){c(!1),K(!0)}function B(a,u){o.update(t.side,a,u)}function He(a,u){a.value!==u&&(a.value=u)}function J(a,u){B("size",a===!0?t.miniWidth:u)}return o.instances[t.side]=P,J(t.miniToOverlay,w.value),B("space",M.value),B("offset",Y.value),t.showIfAbove===!0&&t.modelValue!==!0&&f.value===!0&&t["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),Ee(()=>{i("on-layout",M.value),i("mini-state",_.value),q=t.showIfAbove===!0;const a=()=>{(f.value===!0?ue:le)(!1,!0)};if(o.totalWidth.value!==0){he(a);return}b=p(o.totalWidth,()=>{b(),b=void 0,f.value===!1&&t.showIfAbove===!0&&s.value===!1?U(!1):a()})}),st(()=>{b!==void 0&&b(),clearTimeout(k),f.value===!0&&R(),o.instances[t.side]===P&&(o.instances[t.side]=void 0,B("size",0),B("offset",0),B("space",!1))}),()=>{const a=[];s.value===!0&&(t.noSwipeOpen===!1&&a.push(dt(z("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Fe.value)),a.push(ye("div",{ref:"backdrop",class:xe.value,style:Me.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",t.noSwipeBackdrop!==!0&&f.value===!0,()=>We.value)));const u=_.value===!0&&r.mini!==void 0,h=[z("div",G(F({},m),{key:""+u,class:[Qe.value,m.class]}),u===!0?r.mini():ct(r.default))];return t.elevated===!0&&f.value===!0&&h.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(ye("aside",{ref:"content",class:Ve.value,style:Pe.value},h,"contentclose",t.noSwipeClose!==!0&&s.value===!0,()=>Ae.value)),z("div",{class:"q-drawer-container"},a)}}});const Tt=Se({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},route:{type:String,default:"#"},icon:{type:String,default:""}}});function Ot(t,r,i,m,e,n){return O(),I(Bt,{clickable:"",exact:"",to:t.route},{default:g(()=>[t.icon?(O(),I(Ce,{key:0,avatar:""},{default:g(()=>[y(mt,{name:t.icon},null,8,["name"])]),_:1})):pt("",!0),y(Ce,null,{default:g(()=>[y(re,null,{default:g(()=>[H(be(t.title),1)]),_:1}),y(re,{caption:""},{default:g(()=>[H(be(t.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var Pt=Be(Tt,[["render",Ot]]);const Qt=[{title:"Home",caption:"Mi curso de VUE 3",icon:"school",route:"/"},{title:"Componentes",caption:"Curso componentes",icon:"hive",route:"/components"},{title:"Fundamentos",caption:"Fundamentos de VUE 3",icon:"ballot",route:"/fundaments"},{title:"Practicas",caption:"Yo pasare de curso",icon:"ballot",route:"/practices"},{title:"Experimentos",caption:"Aqui mis experimentos VUE 3",icon:"science",route:"/experiments"},{title:"Protegida",caption:"Pagina protegida",icon:"https",route:"/protected"}],Vt=Se({name:"MainLayout",components:{EssentialLink:Pt},setup(){const t=Dt(),r=ht(),i=L(!1);return Ee(()=>{t.localStorage.getItem("security")==null&&r.push("/myapp")}),{essentialLinks:Qt,leftDrawerOpen:i,toggleLeftDrawer(){i.value=!i.value},logout(){t.localStorage.remove("security"),r.push("/myapp")}}}}),Ft=H(" Curso avanzado de VUE 3 "),At=wt("div",null,"Por.: Jaime Vallejos",-1),Wt=H(" Essential Links ");function zt(t,r,i,m,e,n){const l=ge("EssentialLink"),c=ge("router-view");return O(),I(_t,{view:"lHh Lpr lFf"},{default:g(()=>[y(Et,{elevated:""},{default:g(()=>[y(qt,{class:"bg-teal"},{default:g(()=>[y(we,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),y(kt,null,{default:g(()=>[Ft]),_:1}),At,y(we,{flat:"",icon:"logout",onClick:t.logout},null,8,["onClick"])]),_:1})]),_:1}),y(Mt,{modelValue:t.leftDrawerOpen,"onUpdate:modelValue":r[0]||(r[0]=d=>t.leftDrawerOpen=d),"show-if-above":"",bordered:""},{default:g(()=>[y(Lt,null,{default:g(()=>[y(re,{header:""},{default:g(()=>[Wt]),_:1}),(O(!0),yt(gt,null,bt(t.essentialLinks,d=>(O(),I(l,Ct({key:d.title},d),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),y(St,null,{default:g(()=>[y(c)]),_:1})]),_:1})}var Gt=Be(Vt,[["render",zt]]);export{Gt as default};