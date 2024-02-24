import{F as C,b as h,a as p,v as T}from"./bootstrap-h44pvWEh.js";import{_ as c}from"./currency-lOMYG1Wf.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as g,o as i,c as l,f as k,e as b,F as u,a as r,A as v,i as _,t as m,n as F,B,b as f,g as O}from"./runtime-core.esm-bundler-RT2b-_3S.js";const N={name:"ns-create-coupons",mounted(){this.loadForm()},computed:{validTabs(){if(this.form){const e=[];for(let t in this.form.tabs)["selected_products","selected_categories","selected_groups","selected_customers"].includes(t)&&e.push(this.form.tabs[t]);return e}return[]},activeValidTab(){return this.validTabs.filter(e=>e.active)[0]},generalTab(){const e=[];for(let t in this.form.tabs)["general"].includes(t)&&e.push(this.form.tabs[t]);return e}},data(){return{formValidation:new C,form:{},nsSnackBar:h,nsHttpClient:p,options:new Array(40).fill("").map((e,t)=>({label:"Foo"+t,value:"bar"+t}))}},props:["submitMethod","submitUrl","returnUrl","src","rules"],methods:{__:c,setTabActive(e){this.validTabs.forEach(t=>t.active=!1),e.active=!0},submit(){if(this.formValidation.validateForm(this.form).length>0)return h.error(c("Unable to proceed the form is not valid."),c("Okay")).subscribe();if(this.submitUrl===void 0)return h.error(c("No submit URL was provided"),c("Okay")).subscribe();this.formValidation.disableForm(this.form);const e={...this.formValidation.extractForm(this.form)};p[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,e).subscribe(t=>{if(t.status==="success")return document.location=this.returnUrl;this.formValidation.enableForm(this.form)},t=>{h.error(t.message||c("An unexpected error occurred."),void 0,{duration:5e3}).subscribe(),t.status==="failed"&&this.formValidation.triggerError(this.form,t.data),this.formValidation.enableForm(this.form)})},handleGlobalChange(e){this.globallyChecked=e,this.rows.forEach(t=>t.$checked=e)},loadForm(){p.get(`${this.src}`).subscribe(t=>{this.form=this.parseForm(t.form)})},parseForm(e){e.main.value=e.main.value===void 0?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0];let t=0;for(let n in e.tabs)t===1&&e.tabs[n].active===void 0&&(e.tabs[n].active=!0),e.tabs[n].active=e.tabs[n].active===void 0?!1:e.tabs[n].active,e.tabs[n].fields=this.formValidation.createFields(e.tabs[n].fields),t++;return e},addOption(e){const t=this.options.indexOf(e);t>=0&&(this.options[t].selected=!this.options[t].selected)},removeOption({option:e,index:t}){e.selected=!1},getRuleForm(){return this.form.ruleForm},addRule(){this.form.rules.push(this.getRuleForm())},removeRule(e){this.form.rules.splice(e,1)}}},R={class:"form flex-auto flex flex-col",id:"crud-form"},A={key:0,class:"flex items-center justify-center flex-auto"},j={class:"flex flex-col"},E={class:"flex justify-between items-center"},M={for:"title",class:"font-bold my-2 text-primary"},S={for:"title",class:"text-sm my-2"},q=["href"],L=["disabled"],D=["disabled"],z={key:0,class:"text-xs text-primary py-1"},G={id:"form-container",class:"-mx-4 flex flex-wrap mt-4"},H={class:"px-4 w-full md:w-1/2"},P={class:"px-4 w-full md:w-1/2"},I={id:"tabbed-card"},J={id:"card-header",class:"flex ml-4 flex-wrap ns-tab"},K=["onClick"],Q={class:"ns-tab-item"},W={class:"shadow p-2 rounded"};function X(e,t,n,Y,s,a){const V=g("ns-spinner"),x=g("ns-field");return i(),l("div",R,[Object.values(s.form).length===0?(i(),l("div",A,[k(V)])):b("",!0),Object.values(s.form).length>0?(i(),l(u,{key:1},[r("div",j,[r("div",E,[r("label",M,[v(e.$slots,"title",{},()=>[_("No title Provided")])]),r("div",S,[n.returnUrl?(i(),l("a",{key:0,href:n.returnUrl,class:"rounded-full border ns-inset-button error px-2 py-1"},m(a.__("Return")),9,q)):b("",!0)])]),r("div",{class:F([s.form.main.disabled?"disabled":s.form.main.errors.length>0?"error":"info","input-group flex border-2 rounded overflow-hidden"])},[B(r("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.main.value=o),onBlur:t[1]||(t[1]=o=>s.formValidation.checkField(s.form.main)),onChange:t[2]||(t[2]=o=>s.formValidation.checkField(s.form.main)),disabled:s.form.main.disabled,type:"text",class:"flex-auto text-primary outline-none h-10 px-2"},null,40,L),[[T,s.form.main.value]]),r("button",{disabled:s.form.main.disabled,onClick:t[3]||(t[3]=o=>a.submit()),class:"outline-none px-4 h-10"},[v(e.$slots,"save",{},()=>[_(m(a.__("Save")),1)])],8,D)],2),s.form.main.description&&s.form.main.errors.length===0?(i(),l("p",z,m(s.form.main.description),1)):b("",!0),(i(!0),l(u,null,f(s.form.main.errors,(o,d)=>(i(),l("p",{class:"text-xs py-1 text-error-tertiary",key:d},[r("span",null,[v(e.$slots,"error-required",{},()=>[_(m(o.identifier),1)])])]))),128))]),r("div",G,[r("div",H,[(i(!0),l(u,null,f(a.generalTab,(o,d)=>(i(),l("div",{class:"rounded ns-box shadow p-2",key:d},[(i(!0),l(u,null,f(o.fields,(y,w)=>(i(),O(x,{key:w,field:y},null,8,["field"]))),128))]))),128))]),r("div",P,[r("div",I,[r("div",J,[(i(!0),l(u,null,f(a.validTabs,(o,d)=>(i(),l("div",{onClick:y=>a.setTabActive(o),class:F([o.active?"active":"inactive","tab cursor-pointer px-4 py-2 rounded-tl-lg rounded-tr-lg"]),key:d},m(o.label),11,K))),128))]),r("div",Q,[r("div",W,[(i(!0),l(u,null,f(a.activeValidTab.fields,(o,d)=>(i(),l("div",{class:"flex flex-col",key:d},[k(x,{field:o},null,8,["field"])]))),128))])])])])])],64)):b("",!0)])}const se=U(N,[["render",X]]);export{se as default};
