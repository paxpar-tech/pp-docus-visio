import{d,L as s,b as u,J as f,w as m,e as o,n as v,g as r,ad as x,t as h,I as l,aH as k,M as b,k as w}from"./entry.558da846.js";import{u as y}from"./usePaxparAPI.271643c1.js";import{e as B}from"./reftools.ee468adf.js";import"./url.635def0a.js";import"./useToast.582151af.js";import"./fetch.c35376f1.js";const g={class:"m-2 w-36 text-center text-xs"},C={class:"absolute inset-x-0 top-10"},z=d({__name:"link",props:{href:{},download_on_click:{type:Boolean,default:!0},name:{},strip_extension:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},icon:{default:"cib:adobe-acrobat-reader"}},setup(i){const{backend:p}=y(),t=i,c=s(()=>{const e=(t.name||t.href).split("/").pop()||"";if(t.strip_extension===!0){let a=e.split(".");return a.pop(),a.join(".")}else return e}),_=s(()=>B(t.href,p));return(e,a)=>{const n=b;return u(),f(k(e.download_on_click?"a":"span"),{href:l(_),target:"_blank"},{default:m(()=>[o("div",g,[o("div",{class:v(["w-full relative file",{virtual:e.virtual}])},[r(n,{name:"ic:twotone-insert-drive-file",size:"96"}),o("div",C,[r(n,{name:e.icon,size:"32"},null,8,["name"])]),x(e.$slots,"default",{},void 0,!0)],2),o("p",null,h(l(c)),1)])]),_:3},8,["href"])}}});const V=w(z,[["__scopeId","data-v-30c814e6"]]);export{V as default};
