import{d as _,V as l,Z as c,b as i,c as u,e as t,t as r,I as h,g as p,w as d,F as g,E as m}from"./entry.558da846.js";const f=t("h1",null,"auth debug page",-1),b=t("h2",null,"API get conf",-1),x=t("h2",null,"login",-1),k=t("h2",null,"logout",-1),w=t("h2",null,"user info",-1),C=t("h2",null,"MD page restriction",-1),y=t("button",{class:"btn"},"private/page 1",-1),B=t("h2",null,"page restriction",-1),N=t("h2",null,"menu/link restriction",-1),E=_({__name:"auth",async setup(V){let e,n;const s=l();console.log(s);const{data:{user:o}}=([e,n]=c(()=>s.auth.getUser()),e=await e,n(),e);return(v,A)=>{const a=m;return i(),u(g,null,[f,b,x,k,w,t("pre",null,"  "+r(h(o))+`
  `,1),C,p(a,{to:"/private/page1"},{default:d(()=>[y]),_:1}),B,N],64)}}});export{E as default};
