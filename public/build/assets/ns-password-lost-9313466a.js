import{_ as n}from"./currency-ab26e44d.js";import{F as w,a,n as h,b as l}from"./bootstrap-369984ac.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{f as S}from"./npm~rxjs-eeb06f17.js";import{an as d,af as t,G as c,H as s,F as T,al as V,z as b,A as m,c as p,aH as g,M as X}from"./npm~@vue~runtime-core_-19758cc2.js";import{V as u}from"./npm~@vue~shared_-951a29c4.js";import"./npm~numeral-85b533a7.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~currency.js-57f74176.js";import"./npm~lodash-9a4afe3d.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-bdf0b3b7.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~moment-a9aaa855.js";import"./npm~vue-34b803c9.js";import"./npm~@vue~runtime-dom_-725465db.js";import"./npm~@vue~reactivity_-7ae94d11.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-befa2efb.js";import"./npm~@babel~runtime_-698f0f51.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";import"./npm~tslib-8dbab242.js";const N={name:"ns-login",data(){return{fields:[],xXsrfToken:null,validation:new w,isSubitting:!1}},mounted(){S([a.get("/api/fields/ns.password-lost"),a.get("/sanctum/csrf-cookie")]).subscribe(i=>{this.fields=this.validation.createFields(i[0]),this.xXsrfToken=a.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>h.doAction("ns-login-mounted",this),100)},i=>{l.error(i.message||n("An unexpected error occurred."),n("OK"),{duration:0}).subscribe()})},methods:{__:n,requestRecovery(){if(!this.validation.validateFields(this.fields))return l.error(n("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),h.applyFilters("ns-password-lost-submit",!0)&&(this.isSubitting=!0,a.post("/auth/password-lost",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(e=>{l.success(e.message).subscribe(),setTimeout(()=>{document.location=e.data.redirectTo},500)},e=>{this.isSubitting=!1,this.validation.enableFields(this.fields),e.data&&this.validation.triggerFieldsErrors(this.fields,e.data),l.error(e.message).subscribe()}))}}},R={class:"bg-white rounded shadow overflow-hidden transition-all duration-100"},B={class:"p-3 -my-2"},C={key:0,class:"py-2 fade-in-entrance anim-duration-300"},j={key:0,class:"flex items-center justify-center py-10"},E={class:"flex w-full items-center justify-center py-4"},H={href:"/sign-in",class:"hover:underline text-blue-600 text-sm"},z={class:"flex justify-between items-center bg-gray-200 p-3"};function A(i,e,K,O,o,r){const v=d("ns-field"),f=d("ns-spinner"),y=d("ns-button"),k=d("ns-link");return t(),c("div",R,[s("div",B,[o.fields.length>0?(t(),c("div",C,[(t(!0),c(T,null,V(o.fields,(_,x)=>(t(),b(v,{key:x,field:_},null,8,["field"]))),128))])):m("",!0)]),o.fields.length===0?(t(),c("div",j,[p(f,{border:"4",size:"16"})])):m("",!0),s("div",E,[s("a",H,u(r.__("Remember Your Password ?")),1)]),s("div",z,[s("div",null,[p(y,{onClick:e[0]||(e[0]=_=>r.requestRecovery()),class:"justify-between",type:"info"},{default:g(()=>[o.isSubitting?(t(),b(f,{key:0,class:"mr-2",size:"6",border:"2"})):m("",!0),s("span",null,u(r.__("Submit")),1)]),_:1})]),s("div",null,[p(k,{href:"/sign-up",type:"success"},{default:g(()=>[X(u(r.__("Register")),1)]),_:1})])])])}const ge=F(N,[["render",A]]);export{ge as default};
