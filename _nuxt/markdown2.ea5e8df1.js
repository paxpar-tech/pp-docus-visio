import{_ as v}from"./MDCRenderer.0b2982d0.js";import{_ as g}from"./MDC.vue.62f60d75.js";import{d as y,r as i,b as o,c as a,W as f,X as k,I as t,e as c,Y as h,F as w,a0 as C,g as x,w as D,J as M,f as d,t as _,n as b,k as T}from"./entry.558da846.js";import"./js-yaml.bea960a4.js";import"./_commonjsHelpers.de833af9.js";import"./node.3daaa61c.js";const $={class:"playground"},N={class:"content"},V={class:"tabs"},B=["onClick"],I={key:1,style:{padding:"1rem"}},P=y({__name:"markdown2",setup(S){const s=i("Preview"),u=i(["Preview","AST"]),n=i(`
---
title: MDC
cover: https://nuxtjs.org/design-kit/colored-logo.svg
---
:img{:src="cover"}

# {{ $doc.title }}

MDC stands for _**M**ark**D**own **C**omponents_.

This syntax supercharges regular Markdown to write documents interacting deeply with any Vue component from your \`components/content/\` directory or provided by a module.

## Next steps
- [Install Nuxt Content](/get-started)
- [Explore the MDC syntax](/guide/writing/mdc)


You are visiting document: **{{ $doc._id }}**.
Current route is: **{{ $route.path }}**


::callout
---
type: success
---
This is an alert for _**{{ type }}**_
::

::callout{type="danger"}
This is an alert for _**{{ type }}**_
::
`.trim());return(A,l)=>{const p=v,m=g;return o(),a("div",$,[f(c("textarea",{"onUpdate:modelValue":l[0]||(l[0]=e=>h(n)?n.value=e:null)},null,512),[[k,t(n)]]),c("div",N,[c("div",V,[(o(!0),a(w,null,C(t(u),e=>(o(),a("button",{key:e,class:b(["outline",{active:e===t(s)}]),onClick:r=>s.value=e},_(e),11,B))),128))]),x(m,{value:t(n)},{default:D(({data:e,body:r})=>[t(s)==="Preview"?(o(),M(p,{key:0,body:r,data:e},null,8,["body","data"])):d("",!0),t(s)==="AST"?(o(),a("pre",I,_(r),1)):d("",!0)]),_:1},8,["value"])])])}}});const J=T(P,[["__scopeId","data-v-83e35571"]]);export{J as default};
