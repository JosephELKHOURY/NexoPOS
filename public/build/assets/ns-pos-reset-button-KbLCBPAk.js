import{g as n,P as a}from"./bootstrap-h44pvWEh.js";import{_ as e}from"./currency-lOMYG1Wf.js";import{_ as i}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{n as p}from"./ns-prompt-popup-D-kAHkH8.js";import"./index.es-Br67aBEV.js";import{o as l,c,a as t,t as m}from"./runtime-core.esm-bundler-RT2b-_3S.js";const u={name:"ns-pos-reset-button",mounted(){this.popupCloser()},methods:{__:e,popupCloser:n,reset(){a.show(p,{title:e("Confirm Your Action"),message:e("The current order will be cleared. But not deleted if it's persistent. Would you like to proceed ?"),onAction:s=>{s&&POS.reset()}})}}},d={class:"ns-button error"},f=t("i",{class:"mr-1 text-xl las la-eraser"},null,-1);function _(s,o,x,h,P,r){return l(),c("div",d,[t("button",{onClick:o[0]||(o[0]=k=>r.reset()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[f,t("span",null,m(r.__("Reset")),1)])])}const $=i(u,[["render",_]]);export{$ as default};
