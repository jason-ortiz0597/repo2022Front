var U=Object.defineProperty,z=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var V=(e,l,t)=>l in e?U(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,g=(e,l)=>{for(var t in l||(l={}))W.call(l,t)&&V(e,t,l[t]);if(P)for(var t of P(l))K.call(l,t)&&V(e,t,l[t]);return e},v=(e,l)=>z(e,H(l));import{c,a as $,i as G,n as J,f as j,h as r,Q as d,d as F,e as M,g as I,u as X,j as Y,r as m,k as Z,p as ee,l as le,_ as ae,m as oe,o as te,q as S,s as x,t as o,w as s,v as ne,F as ie,x as q,y as se,z as A,A as re,B as ce,C as ue}from"./index.09418d5b.js";import{Q as de}from"./QToolbarTitle.5739b537.js";import{Q as be,a as fe,b as ge,c as me}from"./QLayout.7a99578d.js";import{C as ve}from"./ClosePopup.2dc6e425.js";import{u as _e}from"./AuthStore.47235be2.js";import{u as he}from"./use-quasar.d2f4bb59.js";import{_ as Ce}from"./logo-sii-pi-verde.140f8e40.js";import"./axios.5b59bc96.js";const ye=["top","right","bottom","left"],T={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>ye.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function O(e,l){return{formClass:c(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:c(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:c(()=>{if(e.externalLabel===!0){const t=e.hideLabel===null?l.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(t===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const E={start:"self-end",center:"self-center",end:"self-start"},qe=Object.keys(E);var y=$({name:"QFabAction",props:v(g({},T),{icon:{type:String,default:""},anchor:{type:String,validator:e=>qe.includes(e)},to:[String,Object],replace:Boolean}),emits:["click"],setup(e,{slots:l,emit:t}){const a=G(j,()=>({showing:{value:!0},onChildClick:J})),{formClass:_,labelProps:b}=O(e,a.showing),f=c(()=>{const i=E[e.anchor];return _.value+(i!==void 0?` ${i}`:"")}),n=c(()=>e.disable===!0||a.showing.value!==!0);function h(i){a.onChildClick(i),t("click",i)}function k(){const i=[];return l.icon!==void 0?i.push(l.icon()):e.icon!==""&&i.push(r(F,{name:e.icon})),(e.label!==""||l.label!==void 0)&&i[b.value.action](r("div",b.value.data,l.label!==void 0?l.label():[e.label])),M(l.default,i)}const C=I();return Object.assign(C.proxy,{click:h}),()=>r(d,v(g({class:f.value},e),{noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:n.value,onClick:h}),k)}});const ke=["up","right","down","left"],Se=["left","center","right"];var L=$({name:"QFab",props:v(g(g({},T),X),{icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>ke.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>Se.includes(e)}}),emits:Y,setup(e,{slots:l}){const t=m(null),a=m(e.modelValue===!0),{proxy:{$q:_}}=I(),{formClass:b,labelProps:f}=O(e,a),n=c(()=>e.persistent!==!0),{hide:h,toggle:k}=Z({showing:a,hideOnRouteChange:n}),C=c(()=>({opened:a.value})),i=c(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${b.value}`+(a.value===!0?" q-fab--opened":" q-fab--closed")),N=c(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${a.value===!0?"opened":"closed"}`),R=c(()=>`q-fab__icon-holder  q-fab__icon-holder--${a.value===!0?"opened":"closed"}`);function p(u,w){const Q=l[u],B=`q-fab__${u} absolute-full`;return Q===void 0?r(F,{class:B,name:e[w]||_.iconSet.fab[w]}):r("div",{class:B},Q(C.value))}function D(){const u=[];return e.hideIcon!==!0&&u.push(r("div",{class:R.value},[p("icon","icon"),p("active-icon","activeIcon")])),(e.label!==""||l.label!==void 0)&&u[f.value.action](r("div",f.value.data,l.label!==void 0?l.label(C.value):[e.label])),M(l.tooltip,u)}return ee(j,{showing:a,onChildClick(u){h(u),t.value!==null&&t.value.$el.focus()}}),()=>r("div",{class:i.value},[r(d,v(g({ref:t,class:b.value},e),{noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":a.value===!0?"true":"false","aria-haspopup":"true",onClick:k}),D),r("div",{class:N.value},le(l.default))])}}),xe="/assets/sii-pi-work.3a6612b9.svg";const pe={setup(){const e=he(),l=_e(),t=oe();return{authStore:l,model:m("one"),dialog:m(!1),fab1:m(!1),fab2:m(!1),logout(){e.localStorage.remove("signin"),l.logout(),t.push("/signin")}}}},we=q("img",{src:Ce,class:"col-md-1 col-xs-3 q-my-md"},null,-1),Qe={class:"q-gutter-md q-mt-md q-ml-xl"},Be={key:0,class:"q-gutter-sm q-mt-md"},Pe={key:1,class:"q-gutter-sm q-mt-md"},Ve=q("h5",{class:"q-my-none q-ml-md"},"En construcci\xF3n...",-1),Ae=q("img",{src:xe,class:"col-md-1 col-xs-3"},null,-1);function Le(e,l,t,a,_,b){const f=te("router-view");return S(),x(ie,null,[o(be,null,{default:s(()=>[o(fe,{elevated:"",class:"bg-blue-grey-2"},{default:s(()=>[o(ge,{class:"row"},{default:s(()=>[we,q("div",Qe,[o(d,{flat:"",color:"black",icon:"restaurant",label:"Menu",onClick:l[0]||(l[0]=n=>a.dialog=!0)}),o(d,{flat:"",color:"black",icon:"celebration",label:"Promociones",onClick:l[1]||(l[1]=n=>a.dialog=!0)}),o(d,{flat:"",color:"black",icon:"las la-store-alt",label:"Productos",onClick:l[2]||(l[2]=n=>a.dialog=!0)}),o(d,{flat:"",color:"black",icon:"location_on",label:"Encuentranos",onClick:l[3]||(l[3]=n=>a.dialog=!0)}),o(d,{flat:"",color:"black",icon:"question_answer",label:"Sii-pi",onClick:l[4]||(l[4]=n=>a.dialog=!0)})]),o(de),a.authStore.user?(S(),x("div",Pe,[o(L,{padding:"xs",icon:"account_circle",modelValue:a.fab2,"onUpdate:modelValue":l[6]||(l[6]=n=>a.fab2=n),"vertical-actions-align":"right",color:"blue-grey-9",glossy:"",label:a.authStore.user.user.username,direction:"down"},{default:s(()=>[o(y,{square:"",color:"blue-grey-8",onClick:e.onClick,icon:"manage_accounts",label:"Mi Perfil","label-position":"left",to:"profile"},null,8,["onClick"]),o(y,{square:"",color:"blue-grey-8",onClick:a.logout,icon:"logout",label:"Salir","label-position":"left"},null,8,["onClick"])]),_:1},8,["modelValue","label"])])):(S(),x("div",Be,[o(L,{padding:"xs",icon:"account_circle",modelValue:a.fab1,"onUpdate:modelValue":l[5]||(l[5]=n=>a.fab1=n),"vertical-actions-align":"right",color:"blue-grey-9",glossy:"",direction:"down"},{default:s(()=>[o(y,{square:"",color:"blue-grey-8",icon:"login",label:"Ingresar","label-position":"left",to:"/signin"}),o(y,{square:"",color:"blue-grey-8",to:"signup",icon:"assignment",label:"Registrarme","label-position":"left"})]),_:1},8,["modelValue"])]))]),_:1})]),_:1}),o(me,null,{default:s(()=>[o(f)]),_:1})]),_:1}),o(ne,{modelValue:a.dialog,"onUpdate:modelValue":l[7]||(l[7]=n=>a.dialog=n),persistent:""},{default:s(()=>[o(se,{style:{width:"400px"},class:"bg-blue-grey-2"},{default:s(()=>[o(A,{class:"items-center row"},{default:s(()=>[o(re,{icon:"engineering",color:"amber-9","text-color":"white"}),Ve]),_:1}),o(A,{class:"q-gutter-md"},{default:s(()=>[Ae]),_:1}),o(ce,{class:"justify-center"},{default:s(()=>[ue(o(d,{color:"blue-grey-8",label:"Cancelar"},null,512),[[ve,!e.cancelEnabled]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var Re=ae(pe,[["render",Le]]);export{Re as default};
