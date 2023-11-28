import{d as f,r as d,L as g,b as w,J as y,w as o,g as n,I as s,Y as h,Q as C}from"./entry.558da846.js";import{_ as $}from"./editor.client.vue.2b2e1b0d.js";import{_ as k}from"./MDCRenderer.0b2982d0.js";import{_ as v}from"./MDC.vue.62f60d75.js";import{_ as x}from"./main.vue.e6844fd6.js";const V=C($),J=f({__name:"checklistResult",props:{source:{default:"Source content here !"},readonly:{type:Boolean,default:!1}},setup(r){const e=d(r.source),l=g(()=>`
::ppw-checklist-result-static
---
${e.value}
---
::
`.trim());return(R,a)=>{const c=V,_=k,p=v,m=x;return w(),y(m,null,{left:o(u=>[n(c,{modelValue:s(e),"onUpdate:modelValue":a[0]||(a[0]=t=>h(e)?e.value=t:null),language:"yaml"},null,8,["modelValue"])]),right:o(u=>[n(p,{value:s(l)},{default:o(({data:t,body:i})=>[n(_,{body:i,data:t},null,8,["body","data"])]),_:1},8,["value"])]),_:1})}}});export{J as _};
