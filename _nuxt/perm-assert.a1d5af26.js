import{u as p}from"./usePerm.713285f1.js";import{d as m,L as t,I as c,ad as u,b as d,c as i}from"./entry.558da846.js";const l={key:1,class:""},k=m({__name:"perm-assert",props:{authenticated:{type:Boolean,default:!0},perm:{},perms:{default:()=>[]}},setup(r){const{hasPermissions:o}=p(),e=r,a=t(()=>{const s=[];e.authenticated&&s.push("AUTHENTICATED"),e.perm&&s.push(e.perm),e.perm&&s.push(...e.perms)}),n=t(()=>o(a));return(s,f)=>c(n)?u(s.$slots,"default",{key:0}):(d(),i("div",l))}});export{k as default};