import p from"./svg.daa31574.js";import{d as g,C as v,r as a,o as f,b as N,c as b,g as h,I as _,Y as C,F as q,e as i,$ as x}from"./entry.558da846.js";import"./usePaxparAPI.271643c1.js";import"./url.635def0a.js";import"./useToast.582151af.js";import"./fetch.c35376f1.js";import"./reftools.ee468adf.js";const y=i("h1",null,"Scroll example",-1),S=i("div",{class:"scroll-section"},[i("h1",null,"Lorem ipsum dolor sit amet"),i("p",null,"Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti. Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi iaculis, eget tincidunt orci")],-1),L=x('<div class="scroll-section"><h1>Lorem ipsum dolor sit amet</h1><p>Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti. Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi iaculis, eget tincidunt orci</p></div><div class="scroll-section"><h1>Lorem ipsum dolor sit amet</h1><p>Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti. Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi iaculis, eget tincidunt orci</p></div><div class="scroll-section"><h1>Lorem ipsum dolor sit amet</h1><p>Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti. Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi iaculis, eget tincidunt orci</p></div><div class="scroll-section"><h1>Lorem ipsum dolor sit amet</h1><p>Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti. Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi iaculis, eget tincidunt orci</p></div><div class="scroll-section"><h1>Lorem ipsum dolor sit amet</h1><p>Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti. Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi iaculis, eget tincidunt orci</p></div><div class="scroll-section"><h1>Lorem ipsum dolor sit amet</h1><p>Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti. Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi iaculis, eget tincidunt orci</p></div>',6),F=g({__name:"scroll4",setup(V){v({script:["https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"]});const t=a();a(0);const c=a(document.querySelectorAll("xxxx"));a({}),f(async()=>{c.value=document.querySelectorAll(".scroll-section")});function m(){var u,r;console.log("xxxx svg",t.value);const o=(u=t.value)==null?void 0:u.querySelector("svg [id='layer2']"),s=(r=t.value)==null?void 0:r.querySelector("svg [id='layer3']");console.log({layer2:o,layer3:s});var e=0;c.value.forEach(d=>{var n;e+=1,console.log(`building anim for section ${e} ...`);const l=(n=t.value)==null?void 0:n.querySelector(`svg [inkscape\\:label='stage${e}']`);l?(l.style.opacity="0.0",l.animate({transform:["translateX(300px)","translateX(0px)"],opacity:[0,1]},{timeline:new ViewTimeline({subject:d}),fill:"forwards"})):console.log("svg section not found !")})}return(o,s)=>{const e=p;return N(),b(q,null,[y,S,h(e,{modelValue:_(t),"onUpdate:modelValue":s[0]||(s[0]=u=>C(t)?t.value=u:null),onLoaded:m,class:"background-anim",href:"/scrollexample/anim.svg"},null,8,["modelValue"]),L],64)}}});export{F as default};
