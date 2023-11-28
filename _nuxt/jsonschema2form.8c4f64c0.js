import{d as f,r as d,L as g,b as w,J as y,w as e,g as n,I as a,Y as h,Q as C}from"./entry.558da846.js";import{_ as $}from"./editor.client.vue.2b2e1b0d.js";import{_ as v}from"./MDCRenderer.0b2982d0.js";import{_ as x}from"./MDC.vue.62f60d75.js";import{_ as V}from"./main.vue.e6844fd6.js";import"./js-yaml.bea960a4.js";import"./_commonjsHelpers.de833af9.js";import"./node.3daaa61c.js";import"./header.vue.dcd1873b.js";import"./Button.6280da3c.js";import"./settings.vue.81266e2c.js";import"./env.95726da5.js";import"./use-root-containers.c4fcaf7b.js";import"./fullscreen.vue.ef390360.js";import"./Modal.cf641748.js";import"./transition.325a74d8.js";const k=C($),A=f({__name:"jsonschema2form",props:{source:{default:"Source content here !"},readonly:{type:Boolean,default:!1}},setup(p){const o=d(p.source),s=g(()=>`
::ppw-checklist-result-static
---
${o.value}
---
::
`.trim());return(b,r)=>{const m=k,l=v,c=x,_=V;return w(),y(_,null,{left:e(i=>[n(m,{modelValue:a(o),"onUpdate:modelValue":r[0]||(r[0]=t=>h(o)?o.value=t:null),language:"yaml"},null,8,["modelValue"])]),right:e(i=>[n(c,{value:a(s)},{default:e(({data:t,body:u})=>[n(l,{body:u,data:t},null,8,["body","data"])]),_:1},8,["value"])]),_:1})}}});export{A as default};
