import{u as w}from"./usePaxparAPI.271643c1.js";import{u as y}from"./useToast.582151af.js";import{e as k}from"./reftools.ee468adf.js";import{d as x,r as n,O as b,o as V,bU as T,b as _,c as p,W as B,e as u,I as r,n as C,f as I,k as L}from"./entry.558da846.js";import"./url.635def0a.js";import"./fetch.c35376f1.js";const M={class:"outer-div relative"},P=["innerHTML"],D={id:"loading-spinner"},E={key:0,class:"loading loading-ring loading-lg"},H=x({__name:"svg",props:{href:{}},emits:["loaded","update:modelValue"],setup(f,{emit:m}){const{backend:h}=w(),v=y(),o=n(!0),t=f,i=m,c=n(),l=n(),g=()=>{const e=l.value.querySelector("svg");console.log({svg:e}),e&&(console.log("emit1 ..."),i("update:modelValue",e),console.log("emit2 ..."),i("loaded",e))};async function d(){if(o.value=!0,t.href){const a=k(t.href,h);try{var e=await $fetch(a,{parseResponse:s=>s});e=e.replace('width="3840"','width="100%"'),e=e.replace('height="2160"','height="100%"'),c.value=e,setTimeout(g)}catch{v.error(`Erreur lors de la récupération de l'animation ${t.href}`)}}o.value=!1}return b(()=>t.href,async(e,a)=>{console.debug("watch props.href ",e),await d()}),V(async()=>{await d()}),(e,a)=>{const s=T("motion-fade");return _(),p("div",M,[B(u("div",{ref_key:"container",ref:l,innerHTML:r(c),class:C([{blurred:r(o)},"inner-div"])},null,10,P),[[s]]),u("div",D,[r(o)?(_(),p("span",E)):I("",!0)])])}}});const A=L(H,[["__scopeId","data-v-378c64fd"]]);export{A as default};
