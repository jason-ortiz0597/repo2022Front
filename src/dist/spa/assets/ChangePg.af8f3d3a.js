import{_ as m,m as d,r as t,q as i,s as p,x as u,t as s,w as c,ah as w,Q as a,ak as r}from"./index.09418d5b.js";import{Q as f}from"./QForm.22433d66.js";import{u as g}from"./use-quasar.d2f4bb59.js";const y={data(){const n=g(),o=d();return{codigo:t(""),newPassword:t(""),matchPassword:t(""),onSubmit(){n.notify({color:"red-5",textColor:"white",icon:"email",message:"Tu password fue cambiado con exito"}),o.push("/myapp")},onReset(){email.value=null}}}},b={class:"row q-pa-md justify-center"},V={class:"col-4"},h=u("h6",{class:"q-mb-sm"},"Datos de acceso",-1);function q(n,o,_,R,l,v){return i(),p("div",b,[u("div",V,[s(f,{onSubmit:l.onSubmit,onReset:l.onReset,class:"q-gutter-md"},{default:c(()=>[h,s(r,{filled:"",modelValue:l.codigo,"onUpdate:modelValue":o[0]||(o[0]=e=>l.codigo=e),label:"Ingresa el codigo que fue enviaso a tu email *","lazy-rules":"",rules:[e=>e&&e.length>0||"Ingresa tu usuario o email"]},null,8,["modelValue","rules"]),s(r,{filled:"",type:"password",modelValue:l.newPassword,"onUpdate:modelValue":o[1]||(o[1]=e=>l.newPassword=e),label:"Ingresa nuevo password *","lazy-rules":"",rules:[e=>e&&e.length>0||"Ingresa tu nuevo password"]},null,8,["modelValue","rules"]),s(r,{filled:"",type:"password",modelValue:l.matchPassword,"onUpdate:modelValue":o[2]||(o[2]=e=>l.matchPassword=e),label:"Repite tu password *","lazy-rules":"",rules:[e=>e&&e.length>0||"Repite el password"]},null,8,["modelValue","rules"]),u("div",null,[s(a,{label:"Submit",type:"submit",color:"primary"}),s(a,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},8,["onSubmit","onReset"]),s(w,{class:"q-mt-lg"}),s(a,{to:"/myapp/recover",icon:"key",flat:"",label:"Olvido su password",class:"col-4 q-my-md"}),s(a,{to:"/myapp/register",icon:"person",flat:"",label:"Registrate",class:"col-4 q-my-md"})])])}var S=m(y,[["render",q]]);export{S as default};