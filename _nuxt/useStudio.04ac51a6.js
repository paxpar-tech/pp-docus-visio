import{d as Y,u as V,r as $,o as j,_ as ee,a as te,b,c as L,n as ne,F as oe,e as w,f as K,g as O,w as J,T as B,t as ie,h as D,p as se,i as ae,j as W,k as re,l as de,m as z,q as ce,s as E,v as U,x as Z,y as le,z as pe,A as F,B as ue}from"./entry.ff64f3fd.js";const R=n=>(se("data-v-73a92c59"),n=n(),ae(),n),fe=R(()=>w("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),ve=R(()=>w("span",null,"Preview mode enabled",-1)),we={key:0},_e=R(()=>w("div",{id:"__preview_background"},null,-1)),he=R(()=>w("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),ye=R(()=>w("p",null,"Initializing the preview...",-1)),me={key:0},ge=R(()=>w("div",{id:"__preview_background"},null,-1)),ke={id:"__preview_loader"},Ce=Y({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(n){const s=n,a=["__nuxt_preview","__preview_enabled"],p=W(),y=V(),d=$(!0),g=$(!1),i=$(!1),l=$("");let r;const h=async()=>{D("previewToken").value="",window.sessionStorage.removeItem("previewToken"),await y.replace({query:{preview:void 0}}),window.location.reload()},q=async T=>{const _=await s.syncPreview(T);if(i.value!==!0){if(!_){setTimeout(()=>q(T),1e3);return}D("previewToken").value&&(i.value=!0,await y.replace({query:{}}),p.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&r.disconnect())}};return j(async()=>{r=(await ee(()=>import("./index.17e44084.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken}});let _;r.on("connect",()=>{_=setTimeout(()=>{i.value||(_=setTimeout(()=>{l.value="Preview sync timed out",i.value=!1},3e4),r.emit("draft:requestSync"))},3e4)});const I=()=>{_&&(clearTimeout(_),_=null)};r.on("draft:sync",async P=>{if(I(),!P){try{r.once("draft:ready",()=>{r.emit("draft:requestSync")}),await s.requestPreviewSyncAPI()}catch(x){switch(I(),x.response.status){case 404:l.value="Preview draft not found",i.value=!1;break;default:l.value="An error occurred while syncing preview",i.value=!1}}return}q(P)}),r.on("draft:unauthorized",()=>{I(),l.value="Unauthorized preview token",i.value=!1}),r.on("disconnect",()=>{I()}),document.body.classList.add(...a),r.on("draft:update",P=>{g.value=!0,s.syncPreview(P),g.value=!1})}),te(()=>{document.body.classList.remove(...a)}),(T,_)=>(b(),L("div",null,[d.value?(b(),L("div",{key:0,id:"__nuxt_preview",class:ne({__preview_ready:i.value,__preview_refreshing:g.value})},[i.value?(b(),L(oe,{key:0},[fe,ve,w("button",{onClick:h}," Close ")],64)):K("",!0)],2)):K("",!0),O(B,{name:"preview-loading"},{default:J(()=>[d.value&&!i.value&&!l.value?(b(),L("div",we,[_e,w("div",{id:"__preview_loader"},[he,ye,w("button",{onClick:h}," Cancel ")])])):K("",!0)]),_:1}),O(B,{name:"preview-loading"},{default:J(()=>[l.value?(b(),L("div",me,[ge,w("div",ke,[w("p",null,ie(l.value),1),w("button",{onClick:h}," Exit preview ")])])):K("",!0)]),_:1})]))}});const Ie=re(Ce,[["__scopeId","data-v-73a92c59"]]),Pe=(n=[],s,a)=>{const p=[...s||[]],y=[...a||[]],d=JSON.parse(JSON.stringify(n));for(const i of p)if(i.oldPath)if(y.splice(y.findIndex(r=>r.path===i.oldPath),1),p.find(r=>r.path===i.oldPath))d.push({path:i.path,parsed:i.parsed});else{const r=d.find(h=>h.path===i.oldPath);r&&(r.path=i.path,i.parsed?r.parsed=i.parsed:i.pathMeta&&["_file","_path","_id","_locale"].forEach(h=>{r.parsed[h]=i.pathMeta[h]}))}else if(i.new)d.push({path:i.path,parsed:i.parsed});else{const l=d.find(r=>r.path===i.path);l&&Object.assign(l,{path:i.path,parsed:i.parsed})}for(const i of y)d.splice(d.findIndex(l=>l.path===i.path),1);const g=new Intl.Collator(void 0,{numeric:!0});return d.sort((i,l)=>g.compare(i.path,l.path)),d},C={appConfig:"app.config.ts",tokensConfig:"tokens.config.ts"},Se=n=>{let s;return(...a)=>(s||(s=n()),s)};function G(n,s){for(const a in n){const p=s[a];a in s||delete n[a],p!==null&&typeof p=="object"&&G(n[a],s[a])}}function Q(n,s){for(const a in s){const p=s[a];p!==null&&typeof p=="object"?Array.isArray(p)&&Array.isArray(n[a])?n[a]=p:(n[a]=n[a]||{},Q(n[a],p)):n[a]=p}}const Te=Se(()=>JSON.parse(JSON.stringify(Z()))),H=ue((n,s,a)=>{if(Array.isArray(n[s])&&Array.isArray(a))return n[s]=a,!0}),qe=()=>{const n=W(),{studio:s,content:a}=de().public,p=Te();let y;const d=z("studio-client-db",()=>null),g=z("studio-preview-db-files",()=>[]);d.value||(n.hook("content:storage",e=>{d.value=e}),ce("/non-existing-path").findOne());const i=async(e,o,c=!0)=>{const f=window.sessionStorage.getItem("previewToken"),v=await e.getKeys(`${f}:`);await Promise.all(v.map(u=>e.removeItem(u)));const t=new Set(o.map(u=>u.parsed._id.split(":").shift()));await e.setItem(`${f}$`,JSON.stringify({ignoreSources:Array.from(t)})),await Promise.all(o.map(u=>e.setItem(`${f}:${u.parsed._id}`,JSON.stringify(u.parsed))))},l=e=>{const o=U(n,Z);Q(o,H(e,p)),e||G(o,p)},r=e=>{var c,f,v,t;const o=(t=(v=(f=(c=n==null?void 0:n.vueApp)==null?void 0:c._context)==null?void 0:f.config)==null?void 0:v.globalProperties)==null?void 0:t.$pinceauTheme;!o||!(o!=null&&o.updateTheme)||(y||(y=JSON.parse(JSON.stringify((o==null?void 0:o.theme.value)||{}))),U(n,o.updateTheme,[H(e,y)]))},h=async e=>{if(g.value=e.files=e.files||g.value||[],!d.value)return!1;const o=Pe(e.files,e.additions,e.deletions),c=o.filter(t=>![C.appConfig,C.tokensConfig].includes(t.path));await i(d.value,c,(e.files||[]).length!==0);const f=o.find(t=>t.path===C.appConfig);l(f==null?void 0:f.parsed);const v=o.find(t=>t.path===C.tokensConfig);return r(v==null?void 0:v.parsed),x(),!0},q=async()=>{const e=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:s==null?void 0:s.apiURL,method:"POST",params:{token:e}})},T=()=>{const e=window.sessionStorage.getItem("previewToken"),o=document.createElement("div");o.id="__nuxt_preview_wrapper",document.body.appendChild(o),le(Ie,{previewToken:e,apiURL:s==null?void 0:s.apiURL,syncPreview:h,requestPreviewSyncAPI:q}).mount(o)},_=async e=>{var f,v,t;const o=window.sessionStorage.getItem("previewToken");if(!e)return null;e=e.replace(/\/$/,"");let c=await((f=d.value)==null?void 0:f.getItem(`${o}:${e}`));return c||(c=await((v=d.value)==null?void 0:v.getItem(`cached:${e}`))),c||(c=c=await((t=d.value)==null?void 0:t.getItem(e))),c},I=e=>{var c;const o=window.sessionStorage.getItem("previewToken");d.value&&d.value.setItem(`${o}:${(c=e.parsed)==null?void 0:c._id}`,JSON.stringify(e.parsed))},P=async e=>{var c;const o=window.sessionStorage.getItem("previewToken");await((c=d.value)==null?void 0:c.removeItem(`${o}:${e}`))},x=async()=>{if(a!=null&&a.documentDriven){const{pages:e}=U(n,pe);for(const o in e.value)e.value[o]&&(e.value[o]=await _(e.value[o]._id))}await n.hooks.callHookParallel("app:data:refresh")};return{apiURL:s==null?void 0:s.apiURL,contentStorage:d,syncPreviewFiles:i,syncPreviewAppConfig:l,syncPreviewTokensConfig:r,requestPreviewSynchronization:q,findContentWithId:_,updateContent:I,removeContentWithId:P,requestRerender:x,mountPreviewUI:T,initiateIframeCommunication:X};function X(){if(!window.parent||window.self===window.parent)return;const e=V(),o=E(),c=$(""),f=t=>({path:t.path,query:F(t.query),params:F(t.params),fullPath:t.fullPath,meta:F(t.meta)});window.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:t.key,metaKey:t.metaKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey}},"*")}),window.addEventListener("message",async t=>{if(!["https://nuxt.studio","https://dev.nuxt.studio","http://localhost:3000"].includes(t.origin))return;const{type:u,payload:A={}}=t.data||{};switch(u){case"nuxt-studio:editor:file-selected":{const m=await _(A.path);m&&(m._partial||m._path!==E().path&&(c.value=m._path,e.push(m._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:m=[],deletions:M=[]}=A;for(const k of m)await I(k);for(const k of M)await P(k.path);x();break}case"nuxt-studio:preview:sync":{h(A);break}case"nuxt-studio:config:file-changed":{const{additions:m=[],deletions:M=[]}=A,k=m.find(S=>S.path===C.appConfig);k&&l(k==null?void 0:k.parsed),M.find(S=>S.path===C.appConfig)&&l(void 0);const N=m.find(S=>S.path===C.tokensConfig);N&&r(N==null?void 0:N.parsed),M.find(S=>S.path===C.tokensConfig)&&r(void 0);break}}}),n.hook("page:finish",()=>{v(),n.payload.prerenderedAt&&x()}),n.hook("content:document-driven:finish",({route:t,page:u})=>{t.meta.studio_page_contentId=u==null?void 0:u._id}),n.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:f(E())},"*"),setTimeout(()=>{v()},100)});function v(){const t=Array.from(window.document.querySelectorAll("[data-content-id]")).map(A=>A.getAttribute("data-content-id")),u=Array.from(new Set([o.meta.studio_page_contentId,...t])).filter(Boolean);if(c.value===u[0]){c.value="";return}window.openContentInStudioEditor(u,{navigate:!0,pageContentId:o.meta.studio_page_contentId})}window.openContentInStudioEditor=(t,u={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...f(o),contentIds:t,...u}},"*")}}};export{qe as useStudio};
