import{d as l,ca as s,b as c,c as u,e as m,D as p,t as r,g as i,M as d}from"./entry.558da846.js";const f=l({__name:"string",props:{modelValue:{}},emits:["update:modelValue"],setup(n){const a=s(n,"modelValue");function o(){const e=prompt("New value ?",a.value);e&&(console.log("new value ",e),a.value=e)}return(e,_)=>{const t=d;return c(),u("span",null,[m("button",{onClick:o,class:"btn"},[p(r(a.value)+" ",1),i(t,{name:"mdi:lead-pencil"})])])}}});export{f as _};
