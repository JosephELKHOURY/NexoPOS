import b from"./ns-pos-cart-DtaVkhqq.js";import v from"./ns-pos-grid-C2O7sSPb.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r,o as e,c as o,a as i,F as h,b as x,g as S,j as w,n as l,f as c,e as a}from"./runtime-core.esm-bundler-CJXnDbC2.js";import"./bootstrap-CJG64-ep.js";import"./currency-B1QCtbGi.js";import"./chart-XFVd3zf7.js";import"./pos-section-switch-DmfccXVX.js";import"./ns-pos-shipping-popup-DkJ6Q9qT.js";import"./ns-prompt-popup-CWE-mKVv.js";import"./ns-orders-preview-popup-DnWxIj3E.js";const k={name:"ns-pos",computed:{buttons(){return POS.header.buttons}},mounted(){this.visibleSectionSubscriber=POS.visibleSection.subscribe(n=>{this.visibleSection=n});const s=document.getElementById("loader");s.classList.remove("fade-in-entrance"),s.classList.add("fade-out-exit"),setTimeout(()=>{s.remove(),POS.reset()},500)},unmounted(){this.visibleSectionSubscriber.unsubscribe()},data(){return{visibleSection:null,visibleSectionSubscriber:null}},components:{nsPosCart:b,nsPosGrid:v}},g={class:"h-full flex-auto flex flex-col",id:"pos-container"},P={class:"flex overflow-hidden flex-shrink-0 px-2 pt-2"},y={class:"-mx-2 flex overflow-x-auto pb-1"},B={class:"flex-auto overflow-hidden flex p-2"},C={class:"flex flex-auto overflow-hidden -m-2"};function L(s,n,N,O,t,d){const u=r("ns-pos-cart"),m=r("ns-pos-grid");return e(),o("div",g,[i("div",P,[i("div",y,[(e(!0),o(h,null,x(d.buttons,(p,f)=>(e(),o("div",{class:"header-buttons flex px-2 flex-shrink-0",key:f},[(e(),S(w(p)))]))),128))])]),i("div",B,[i("div",C,[["both","cart"].includes(t.visibleSection)?(e(),o("div",{key:0,class:l([t.visibleSection==="both"?"w-1/2":"w-full","flex overflow-hidden p-2"])},[c(u)],2)):a("",!0),["both","grid"].includes(t.visibleSection)?(e(),o("div",{key:1,class:l([t.visibleSection==="both"?"w-1/2":"w-full","p-2 flex overflow-hidden"])},[c(m)],2)):a("",!0)])])])}const H=_(k,[["render",L]]);export{H as default};
