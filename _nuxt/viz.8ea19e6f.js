import{d as r,L as c,b as d,J as i,w as p,e as _,I as l,U as m}from"./entry.558da846.js";const u=["innerHTML"],h=r({__name:"viz",props:{dot:{},digraph:{default:`
  # see http://www.graphviz.org/content/cluster
  # see http://viz-js.com/
  digraph G {
    alice -> bob;
  }  
  `}},setup(n){const e=n,a=c(()=>{const t=e.dot!==void 0?e.dot:`digraph G {
      ${e.digraph}
  }`;var o=Viz(t,{format:"svg"});return o});return(t,o)=>{const s=m;return d(),i(s,null,{default:p(()=>[_("div",{class:"image",innerHTML:l(a)},null,8,u)]),_:1})}}});export{h as default};
