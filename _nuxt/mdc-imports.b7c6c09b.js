import{_ as c}from"./entry.558da846.js";import{v as u,t as d}from"./MDC.vue.62f60d75.js";import"./MDCRenderer.0b2982d0.js";import"./js-yaml.bea960a4.js";import"./_commonjsHelpers.de833af9.js";import"./node.3daaa61c.js";const f={theme:{default:"github-light",dark:"github-dark"},async highlighter(i,r,e,o){var h,s;if(window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser")return c(()=>import("./highlighter.2d57c34f.js"),["./highlighter.2d57c34f.js","./entry.558da846.js","./entry.9f85eefe.css"],import.meta.url).then(({useShikiHighlighter:t})=>t().getHighlightedAST(i,r,e,{highlights:o}));try{return await $fetch("/api/_mdc/highlight",{params:{code:i,lang:r,theme:JSON.stringify(e),highlights:JSON.stringify(o)}})}catch(t){if(((h=t==null?void 0:t.response)==null?void 0:h.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(s=this.highlighter)==null?void 0:s.call(this,i,r,e,o)}return Promise.resolve({tree:[{type:"text",value:i}],className:"",style:""})}};function y(i={}){const r={...f,...i};return async e=>{const o=[],h=[];u(e,s=>{var t;return["pre","code"].includes(s.tagName)&&!!((t=s.properties)!=null&&t.language)},s=>{const t=s,p=r.highlighter(d(s),t.properties.language,r.theme,t.properties.highlights??[]).then(({tree:n,className:m,style:l,inlineStyle:g})=>{var a;t.properties.className=((t.properties.className||"")+" "+m).trim(),t.properties.style=((t.properties.style||"")+" "+g).trim(),((a=t.children[0])==null?void 0:a.tagName)==="code"?t.children[0].children=n:t.children=n[0].children||n[0],l&&h.push(l)});o.push(p)}),o.length&&(await Promise.all(o),e.children.push({type:"element",tagName:"style",children:[{type:"text",value:k(h.join(""))}],properties:{}}))}}const k=i=>{const r=i.split("}").filter(e=>!!e.trim()).map(e=>e.trim()+"}");return Array.from(new Set(r)).join("")},j={},P={highlight:{instance:y,options:{src:"/home/runner/work/pp-docus-visio/pp-docus-visio/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs"}}},x={theme:{dark:"github-dark",default:"github-light"},preload:["python","shell","sql","json","js","ts","html","css","vue","diff","shell","markdown","yaml","bash","ini"]};export{x as highlight,P as rehypePlugins,j as remarkPlugins};