import{h as b,a as y,b as f}from"./bootstrap-h44pvWEh.js";import{c as x,e as g}from"./components-BRoPzFQZ.js";import{_ as v,n as w}from"./currency-lOMYG1Wf.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as C,o as a,c as d,a as t,f as u,t as e,F as p,b as m,i as l}from"./runtime-core.esm-bundler-RT2b-_3S.js";import"./ns-alert-popup-SVrn5Xft.js";import"./ns-avatar-image-CAD6xUGA.js";import"./index.es-Br67aBEV.js";import"./ns-prompt-popup-D-kAHkH8.js";const F={name:"ns-cash-flow",props:["storeLogo","storeName"],mounted(){},components:{nsDatepicker:x,nsDateTimePicker:g},data(){return{startDateField:{value:b(ns.date.current).startOf("month").format("YYYY-MM-DD HH:mm:ss"),type:"datetimepicker"},endDateField:{value:b(ns.date.current).endOf("month").format("YYYY-MM-DD HH:mm:ss"),type:"datetimepicker"},report:new Object,ns:window.ns}},computed:{balance(){return Object.values(this.report).length===0?0:this.report.total_credit-this.report.total_debit},totalDebit(){return 0},totalCredit(){return 0}},methods:{__:v,nsCurrency:w,printSaleReport(){this.$htmlToPaper("report")},loadReport(){y.post("/api/reports/transactions",{startDate:this.startDateField.value,endDate:this.endDateField.value}).subscribe({next:c=>{this.report=c},error:c=>{f.error(c.message).subscribe()}})}}},k={id:"report-section",class:"px-4"},Y={class:"flex -mx-2"},B={class:"px-2"},R={class:"px-2"},S={class:"px-2"},j={class:"ns-button"},H=t("i",{class:"las la-sync-alt text-xl"},null,-1),N={class:"pl-2"},L={class:"px-2"},M={class:"ns-button"},O=t("i",{class:"las la-print text-xl"},null,-1),P={class:"pl-2"},T={id:"report",class:"anim-duration-500 fade-in-entrance"},V={class:"flex w-full"},A={class:"my-4 flex justify-between w-full"},E={class:"text-primary"},q={class:"pb-1 border-b border-dashed"},z={class:"pb-1 border-b border-dashed"},I={class:"pb-1 border-b border-dashed"},J=["src","alt"],K={class:"shadow rounded my-4"},Q={class:"ns-box"},U={class:"border-b ns-box-body"},W={class:"ns-table table w-full"},X={class:""},Z={class:"border p-2 text-left"},G={width:"150",class:"border border-error-secondary bg-error-primary p-2 text-right"},$={width:"150",class:"text-right border-success-secondary bg-success-primary border p-2"},tt={class:""},et={class:"p-2 border"},st=t("i",{class:"las la-arrow-right"},null,-1),rt={class:"p-2 border border-error-secondary bg-error-primary text-right"},ot={class:"p-2 border text-right border-success-secondary bg-success-primary"},at={class:"p-2 border"},dt=t("i",{class:"las la-arrow-right"},null,-1),ct={class:"p-2 border border-error-secondary bg-error-primary text-right"},nt={class:"p-2 border text-right border-success-secondary bg-success-primary"},lt={class:"font-semibold"},it={class:"p-2 border"},_t={class:"p-2 border border-error-secondary bg-error-primary text-right"},ht={class:"p-2 border text-right border-success-secondary bg-success-primary"},bt={class:"p-2 border"},ut={colspan:"2",class:"p-2 border text-right border-info-secondary bg-info-primary"};function pt(c,n,_,mt,r,s){const h=C("ns-field");return a(),d("div",k,[t("div",Y,[t("div",B,[u(h,{field:r.startDateField},null,8,["field"])]),t("div",R,[u(h,{field:r.endDateField},null,8,["field"])]),t("div",S,[t("div",j,[t("button",{onClick:n[0]||(n[0]=o=>s.loadReport()),class:"rounded flex justify-between text-primary shadow py-1 items-center px-2"},[H,t("span",N,e(s.__("Load")),1)])])]),t("div",L,[t("div",M,[t("button",{onClick:n[1]||(n[1]=o=>s.printSaleReport()),class:"rounded flex justify-between text-primary shadow py-1 items-center px-2"},[O,t("span",P,e(s.__("Print")),1)])])])]),t("div",T,[t("div",V,[t("div",A,[t("div",E,[t("ul",null,[t("li",q,e(s.__("Range : {date1} — {date2}").replace("{date1}",r.startDateField.value).replace("{date2}",r.endDateField.value)),1),t("li",z,e(s.__("Document : Sale By Payment")),1),t("li",I,e(s.__("By : {user}").replace("{user}",r.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:_.storeLogo,alt:_.storeName},null,8,J)])])]),t("div",K,[t("div",Q,[t("div",U,[t("table",W,[t("thead",X,[t("tr",null,[t("th",Z,e(s.__("Account")),1),t("th",G,e(s.__("Debit")),1),t("th",$,e(s.__("Credit")),1)])]),t("tbody",tt,[(a(!0),d(p,null,m(r.report.creditCashFlow,(o,i)=>(a(),d("tr",{key:i},[t("td",et,[st,l(),t("strong",null,e(o.account),1),l(" : "+e(o.name),1)]),t("td",rt,e(s.nsCurrency(0)),1),t("td",ot,e(s.nsCurrency(o.total)),1)]))),128)),(a(!0),d(p,null,m(r.report.debitCashFlow,(o,i)=>(a(),d("tr",{key:i},[t("td",at,[dt,l(),t("strong",null,e(o.account),1),l(" : "+e(o.name),1)]),t("td",ct,e(s.nsCurrency(o.total)),1),t("td",nt,e(s.nsCurrency(0)),1)]))),128))]),t("tfoot",lt,[t("tr",null,[t("td",it,e(s.__("Sub Total")),1),t("td",_t,e(s.nsCurrency(r.report.total_debit?r.report.total_debit:0)),1),t("td",ht,e(s.nsCurrency(r.report.total_credit?r.report.total_credit:0)),1)]),t("tr",null,[t("td",bt,e(s.__("Balance")),1),t("td",ut,e(s.nsCurrency(s.balance)),1)])])])])])])])])}const kt=D(F,[["render",pt]]);export{kt as default};
