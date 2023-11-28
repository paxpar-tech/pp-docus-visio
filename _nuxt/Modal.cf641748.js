import{m as Ne,u as Ve}from"./Button.6280da3c.js";import{d as Y,r as g,L as d,o as O,a as B,a4 as T,F as je,a2 as x,O as z,a3 as ee,a5 as te,aP as We,a6 as Ue,a8 as Ie,a9 as ue,k as qe,aa as ie,ag as N,b as se,J as de,w as P,g as J,ac as Q,e as X,n as V,f as Ye,ad as ze}from"./entry.558da846.js";import{H as ae,o as w,u as q,t as ge,p as Ge,l as j,N as ce}from"./env.95726da5.js";import{m as he,n as Je,f as fe,a as pe,S as $,E as we,d as W,P as I,N as L,T as Qe,V as Xe,p as Ke,y as Ze,U as _e,_ as xe,b as ve,o as et}from"./use-root-containers.c4fcaf7b.js";import{t as ye,o as be,S as tt,h as at}from"./transition.325a74d8.js";function Ee(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function nt(){return/Android/gi.test(window.navigator.userAgent)}function Rt(){return Ee()||nt()}function lt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Se(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let a of e.value){let l=w(a);l instanceof HTMLElement&&t.add(l)}return t}var Te=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Te||{});let k=Object.assign(Y({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:a,expose:l}){let n=g(null);l({el:n,$el:n});let o=d(()=>he(n)),r=g(!1);O(()=>r.value=!0),B(()=>r.value=!1),rt({ownerDocument:o},d(()=>r.value&&!!(e.features&16)));let u=ut({ownerDocument:o,container:n,initialFocus:d(()=>e.initialFocus)},d(()=>r.value&&!!(e.features&2)));it({ownerDocument:o,container:n,containers:e.containers,previousActiveElement:u},d(()=>r.value&&!!(e.features&8)));let i=Je();function s(m){let h=w(n);h&&(b=>b())(()=>{q(i.value,{[W.Forwards]:()=>{I(h,L.First,{skipElements:[m.relatedTarget]})},[W.Backwards]:()=>{I(h,L.Last,{skipElements:[m.relatedTarget]})}})})}let f=g(!1);function y(m){m.key==="Tab"&&(f.value=!0,requestAnimationFrame(()=>{f.value=!1}))}function v(m){if(!r.value)return;let h=Se(e.containers);w(n)instanceof HTMLElement&&h.add(w(n));let b=m.relatedTarget;b instanceof HTMLElement&&b.dataset.headlessuiFocusGuard!=="true"&&(Le(h,b)||(f.value?I(w(n),q(i.value,{[W.Forwards]:()=>L.Next,[W.Backwards]:()=>L.Previous})|L.WrapAround,{relativeTo:m.target}):m.target instanceof HTMLElement&&$(m.target)))}return()=>{let m={},h={ref:n,onKeydown:y,onFocusout:v},{features:b,initialFocus:ne,containers:le,...A}=e;return T(je,[!!(b&4)&&T(fe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:pe.Focusable}),ae({ourProps:h,theirProps:{...t,...A},slot:m,attrs:t,slots:a,name:"FocusTrap"}),!!(b&4)&&T(fe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:pe.Focusable})])}}}),{features:Te}),C=[];lt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&C[0]!==t.target&&(C.unshift(t.target),C=C.filter(a=>a!=null&&a.isConnected),C.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ot(e){let t=g(C.slice());return z([e],([a],[l])=>{l===!0&&a===!1?ye(()=>{t.value.splice(0)}):l===!1&&a===!0&&(t.value=C.slice())},{flush:"post"}),()=>{var a;return(a=t.value.find(l=>l!=null&&l.isConnected))!=null?a:null}}function rt({ownerDocument:e},t){let a=ot(t);O(()=>{x(()=>{var l,n;t.value||((l=e.value)==null?void 0:l.activeElement)===((n=e.value)==null?void 0:n.body)&&$(a())},{flush:"post"})}),B(()=>{t.value&&$(a())})}function ut({ownerDocument:e,container:t,initialFocus:a},l){let n=g(null),o=g(!1);return O(()=>o.value=!0),B(()=>o.value=!1),O(()=>{z([t,a,l],(r,u)=>{if(r.every((s,f)=>(u==null?void 0:u[f])===s)||!l.value)return;let i=w(t);i&&ye(()=>{var s,f;if(!o.value)return;let y=w(a),v=(s=e.value)==null?void 0:s.activeElement;if(y){if(y===v){n.value=v;return}}else if(i.contains(v)){n.value=v;return}y?$(y):I(i,L.First|L.NoScroll)===Qe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),n.value=(f=e.value)==null?void 0:f.activeElement})},{immediate:!0,flush:"post"})}),n}function it({ownerDocument:e,container:t,containers:a,previousActiveElement:l},n){var o;we((o=e.value)==null?void 0:o.defaultView,"focus",r=>{if(!n.value)return;let u=Se(a);w(t)instanceof HTMLElement&&u.add(w(t));let i=l.value;if(!i)return;let s=r.target;s&&s instanceof HTMLElement?Le(u,s)?(l.value=s,$(s)):(r.preventDefault(),r.stopPropagation(),$(i)):$(l.value)},!0)}function Le(e,t){for(let a of e)if(a.contains(t))return!0;return!1}let K=new Map,M=new Map;function me(e,t=g(!0)){x(a=>{var l;if(!t.value)return;let n=w(e);if(!n)return;a(function(){var r;if(!n)return;let u=(r=M.get(n))!=null?r:1;if(u===1?M.delete(n):M.set(n,u-1),u!==1)return;let i=K.get(n);i&&(i["aria-hidden"]===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",i["aria-hidden"]),n.inert=i.inert,K.delete(n))});let o=(l=M.get(n))!=null?l:0;M.set(n,o+1),o===0&&(K.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),n.setAttribute("aria-hidden","true"),n.inert=!0)})}let Ce=Symbol("StackContext");var Z=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Z||{});function st(){return te(Ce,()=>{})}function dt({type:e,enabled:t,element:a,onUpdate:l}){let n=st();function o(...r){l==null||l(...r),n(...r)}O(()=>{z(t,(r,u)=>{r?o(0,e,a):u===!0&&o(1,e,a)},{immediate:!0,flush:"sync"})}),B(()=>{t.value&&o(1,e,a)}),ee(Ce,o)}let ct=Symbol("DescriptionContext");function ft({slot:e=g({}),name:t="Description",props:a={}}={}){let l=g([]);function n(o){return l.value.push(o),()=>{let r=l.value.indexOf(o);r!==-1&&l.value.splice(r,1)}}return ee(ct,{register:n,slot:e,name:t,props:a}),d(()=>l.value.length>0?l.value.join(" "):void 0)}function pt(e){let t=We(e.getSnapshot());return B(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function vt(e,t){let a=e(),l=new Set;return{getSnapshot(){return a},subscribe(n){return l.add(n),()=>l.delete(n)},dispatch(n,...o){let r=t[n].call(a,...o);r&&(a=r,l.forEach(u=>u()))}}}function mt(){let e;return{before({doc:t}){var a;let l=t.documentElement;e=((a=t.defaultView)!=null?a:window).innerWidth-l.clientWidth},after({doc:t,d:a}){let l=t.documentElement,n=l.clientWidth-l.offsetWidth,o=e-n;a.style(l,"paddingRight",`${o}px`)}}}function gt(){if(!Ee())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:a,meta:l}){function n(r){return l.containers.flatMap(u=>u()).some(u=>u.contains(r))}if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let r=be();r.style(t.documentElement,"scroll-behavior","auto"),a.add(()=>a.microTask(()=>r.dispose()))}a.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;a.addEventListener(t,"click",r=>{if(r.target instanceof HTMLElement)try{let u=r.target.closest("a");if(!u)return;let{hash:i}=new URL(u.href),s=t.querySelector(i);s&&!n(s)&&(o=s)}catch{}},!0),a.addEventListener(t,"touchmove",r=>{r.target instanceof HTMLElement&&!n(r.target)&&r.preventDefault()},{passive:!1}),a.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})}}}function ht(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function wt(e){let t={};for(let a of e)Object.assign(t,a(t));return t}let D=vt(()=>new Map,{PUSH(e,t){var a;let l=(a=this.get(e))!=null?a:{doc:e,count:0,d:be(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let a=this.get(e);return a&&(a.count--,a.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:a}){let l={doc:e,d:t,meta:wt(a)},n=[gt(),mt(),ht()];n.forEach(({before:o})=>o==null?void 0:o(l)),n.forEach(({after:o})=>o==null?void 0:o(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});D.subscribe(()=>{let e=D.getSnapshot(),t=new Map;for(let[a]of e)t.set(a,a.documentElement.style.overflow);for(let a of e.values()){let l=t.get(a.doc)==="hidden",n=a.count!==0;(n&&!l||!n&&l)&&D.dispatch(a.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",a),a.count===0&&D.dispatch("TEARDOWN",a)}});function yt(e,t,a){let l=pt(D),n=d(()=>{let o=e.value?l.value.get(e.value):void 0;return o?o.count>0:!1});return z([e,t],([o,r],[u],i)=>{if(!o||!r)return;D.dispatch("PUSH",o,a);let s=!1;i(()=>{s||(D.dispatch("POP",u??o,a),s=!0)})},{immediate:!0}),n}var bt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(bt||{});let _=Symbol("DialogContext");function De(e){let t=te(_,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,De),a}return t}let U="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Et=Y({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:U},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${ge()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:a,slots:l,expose:n}){var o;let r=g(!1);O(()=>{r.value=!0});let u=g(0),i=Ge(),s=d(()=>e.open===U&&i!==null?(i.value&j.Open)===j.Open:e.open),f=g(null),y=d(()=>he(f));if(n({el:f,$el:f}),!(e.open!==U||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===U?void 0:e.open}`);let v=d(()=>r.value&&s.value?0:1),m=d(()=>v.value===0),h=d(()=>u.value>1),b=te(_,null)!==null,[ne,le]=Xe(),{resolveContainers:A,mainTreeNodeRef:oe,MainTreeNode:$e}=Ke({portals:ne,defaultContainers:[d(()=>{var c;return(c=R.panelRef.value)!=null?c:f.value})]}),Fe=d(()=>h.value?"parent":"leaf"),re=d(()=>i!==null?(i.value&j.Closing)===j.Closing:!1),Oe=d(()=>b||re.value?!1:m.value),Ae=d(()=>{var c,p,E;return(E=Array.from((p=(c=y.value)==null?void 0:c.querySelectorAll("body > *"))!=null?p:[]).find(S=>S.id==="headlessui-portal-root"?!1:S.contains(w(oe))&&S instanceof HTMLElement))!=null?E:null});me(Ae,Oe);let Re=d(()=>h.value?!0:m.value),Pe=d(()=>{var c,p,E;return(E=Array.from((p=(c=y.value)==null?void 0:c.querySelectorAll("[data-headlessui-portal]"))!=null?p:[]).find(S=>S.contains(w(oe))&&S instanceof HTMLElement))!=null?E:null});me(Pe,Re),dt({type:"Dialog",enabled:d(()=>v.value===0),element:f,onUpdate:(c,p)=>{if(p==="Dialog")return q(c,{[Z.Add]:()=>u.value+=1,[Z.Remove]:()=>u.value-=1})}});let ke=ft({name:"DialogDescription",slot:d(()=>({open:s.value}))}),H=g(null),R={titleId:H,panelRef:g(null),dialogState:v,setTitleId(c){H.value!==c&&(H.value=c)},close(){t("close",!1)}};ee(_,R);let Me=d(()=>!(!m.value||h.value));Ze(A,(c,p)=>{R.close(),Ue(()=>p==null?void 0:p.focus())},Me);let Be=d(()=>!(h.value||v.value!==0));we((o=y.value)==null?void 0:o.defaultView,"keydown",c=>{Be.value&&(c.defaultPrevented||c.key===et.Escape&&(c.preventDefault(),c.stopPropagation(),R.close()))});let He=d(()=>!(re.value||v.value!==0||b));return yt(y,He,c=>{var p;return{containers:[...(p=c.containers)!=null?p:[],A]}}),x(c=>{if(v.value!==0)return;let p=w(f);if(!p)return;let E=new ResizeObserver(S=>{for(let G of S){let F=G.target.getBoundingClientRect();F.x===0&&F.y===0&&F.width===0&&F.height===0&&R.close()}});E.observe(p),c(()=>E.disconnect())}),()=>{let{id:c,open:p,initialFocus:E,...S}=e,G={...a,ref:f,id:c,role:"dialog","aria-modal":v.value===0?!0:void 0,"aria-labelledby":H.value,"aria-describedby":ke.value},F={open:v.value===0};return T(ve,{force:!0},()=>[T(_e,()=>T(xe,{target:f.value},()=>T(ve,{force:!1},()=>T(k,{initialFocus:E,containers:A,features:m.value?q(Fe.value,{parent:k.features.RestoreFocus,leaf:k.features.All&~k.features.FocusLock}):k.features.None},()=>T(le,{},()=>ae({ourProps:G,theirProps:{...S,...a},slot:F,attrs:a,slots:l,visible:v.value===0,features:ce.RenderStrategy|ce.Static,name:"Dialog"})))))),T($e)])}}}),St=Y({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${ge()}`}},setup(e,{attrs:t,slots:a,expose:l}){let n=De("DialogPanel");l({el:n.panelRef,$el:n.panelRef});function o(r){r.stopPropagation()}return()=>{let{id:r,...u}=e,i={id:r,ref:n.panelRef,onClick:o};return ae({ourProps:i,theirProps:u,slot:{open:n.dialogState.value===0},attrs:t,slots:a,name:"DialogPanel"})}}});const Tt=Ie(ue.ui.strategy,ue.ui.modal,Ne),Lt=Y({components:{HDialog:Et,HDialogPanel:St,TransitionRoot:tt,TransitionChild:at},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","close"],setup(e,{emit:t}){const{ui:a,attrs:l}=Ve("modal",ie(e,"ui"),Tt,ie(e,"class")),n=d({get(){return e.modelValue},set(u){t("update:modelValue",u)}}),o=d(()=>e.transition?{...a.value.transition}:{});function r(u){n.value=u,t("close")}return{ui:a,attrs:l,isOpen:n,transitionClass:o,close:r}}});function Ct(e,t,a,l,n,o){const r=N("TransitionChild"),u=N("HDialogPanel"),i=N("HDialog"),s=N("TransitionRoot");return se(),de(s,{appear:e.appear,show:e.isOpen,as:"template"},{default:P(()=>[J(i,Q({class:e.ui.wrapper},e.attrs,{onClose:t[0]||(t[0]=f=>!e.preventClose&&e.close(f))}),{default:P(()=>[e.overlay?(se(),de(r,Q({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:P(()=>[X("div",{class:V([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):Ye("",!0),X("div",{class:V(e.ui.inner)},[X("div",{class:V([e.ui.container,!e.fullscreen&&e.ui.padding])},[J(r,Q({as:"template",appear:e.appear},e.transitionClass),{default:P(()=>[J(u,{class:V([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?"w-screen":e.ui.width,e.fullscreen?"h-screen":e.ui.height,e.fullscreen?"rounded-none":e.ui.rounded,e.fullscreen?"m-0":e.ui.margin])},{default:P(()=>[ze(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class"])]),_:3},8,["appear","show"])}const Pt=qe(Lt,[["render",Ct]]);export{Pt as _,Rt as n};