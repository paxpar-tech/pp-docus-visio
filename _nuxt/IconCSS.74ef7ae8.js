import{d,c9 as m,I as o,x,L as c,b as f,c as S,af as I,k as z}from"./entry.558da846.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(_){var r;m(n=>({faa288c6:o(p)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const s=_,l=c(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=c(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=c(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(f(),S("span",{style:I({width:o(a),height:o(a)})},null,4))}});const g=z(y,[["__scopeId","data-v-5217de21"]]);export{g as default};
