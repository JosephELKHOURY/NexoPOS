import{_ as r}from"./currency-ab26e44d.js";import{F as w,a as n,n as f,b as a}from"./bootstrap-369984ac.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{f as y}from"./npm~rxjs-eeb06f17.js";import{an as l,af as e,G as d,H as i,F,al as x,z as h,A as m,c as _,aH as S}from"./npm~@vue~runtime-core_-19758cc2.js";import{V as N}from"./npm~@vue~shared_-951a29c4.js";import"./npm~numeral-85b533a7.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~currency.js-57f74176.js";import"./npm~lodash-9a4afe3d.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-bdf0b3b7.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~moment-a9aaa855.js";import"./npm~vue-34b803c9.js";import"./npm~@vue~runtime-dom_-725465db.js";import"./npm~@vue~reactivity_-7ae94d11.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-befa2efb.js";import"./npm~@babel~runtime_-698f0f51.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";import"./npm~tslib-8dbab242.js";const T={name:"ns-login",props:["token","user"],data(){return{fields:[],xXsrfToken:null,validation:new w,isSubitting:!1}},mounted(){y([n.get("/api/fields/ns.new-password"),n.get("/sanctum/csrf-cookie")]).subscribe(t=>{this.fields=this.validation.createFields(t[0]),this.xXsrfToken=n.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>f.doAction("ns-login-mounted",this),100)},t=>{a.error(t.message||r("An unexpected error occurred."),r("OK"),{duration:0}).subscribe()})},methods:{__:r,submitNewPassword(){if(!this.validation.validateFields(this.fields))return a.error(r("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),f.applyFilters("ns-new-password-submit",!0)&&(this.isSubitting=!0,n.post(`/auth/new-password/${this.user}/${this.token}`,this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(s=>{a.success(s.message).subscribe(),setTimeout(()=>{document.location=s.data.redirectTo},500)},s=>{this.isSubitting=!1,this.validation.enableFields(this.fields),s.data&&this.validation.triggerFieldsErrors(this.fields,s.data),a.error(s.message).subscribe()}))}}},V={class:"bg-white rounded shadow overflow-hidden transition-all duration-100"},X={class:"p-3 -my-2"},B={key:0,class:"py-2 fade-in-entrance anim-duration-300"},C={key:0,class:"flex items-center justify-center py-10"},E={class:"flex justify-between items-center bg-gray-200 p-3"},H=i("div",null,null,-1);function P(t,s,j,z,o,p){const b=l("ns-field"),c=l("ns-spinner"),g=l("ns-button");return e(),d("div",V,[i("div",X,[o.fields.length>0?(e(),d("div",B,[(e(!0),d(F,null,x(o.fields,(u,v)=>(e(),h(b,{key:v,field:u},null,8,["field"]))),128))])):m("",!0)]),o.fields.length===0?(e(),d("div",C,[_(c,{border:"4",size:"16"})])):m("",!0),i("div",E,[i("div",null,[_(g,{onClick:s[0]||(s[0]=u=>p.submitNewPassword()),class:"justify-between",type:"info"},{default:S(()=>[o.isSubitting?(e(),h(c,{key:0,class:"mr-2",size:"6",border:"2"})):m("",!0),i("span",null,N(p.__("Save Password")),1)]),_:1})]),H])])}const hs=k(T,[["render",P]]);export{hs as default};
