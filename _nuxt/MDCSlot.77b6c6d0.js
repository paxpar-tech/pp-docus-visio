import{f as i}from"./node.3daaa61c.js";import{d as u,ao as f,L as c,a4 as l,aV as d}from"./entry.558da846.js";const y=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:o}=f(),a=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:o,tags:a,parent:s}},render({use:t,unwrap:s,fallbackSlot:o,tags:a,parent:e}){var r;try{let n=t;return typeof t=="string"&&(n=(e==null?void 0:e.slots[t])||((r=e==null?void 0:e.parent)==null?void 0:r.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),n?s?i(n(),a):[n()]:o?o():l("div")}catch{return l("div")}}});export{y as _};