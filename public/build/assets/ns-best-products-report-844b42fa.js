<<<<<<<< HEAD:public/build/assets/ns-best-products-report-562043cc.js
import"./npm~moment-a9aaa855.js";import{c as y,e as f}from"./components-3720d0e5.js";import{a as v,b as k}from"./bootstrap-f85d1704.js";import{_ as a,n as w}from"./currency-ab26e44d.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{an as b,af as i,G as n,H as t,c as m,F,al as C,A as l,M as _}from"./npm~@vue~runtime-core_-19758cc2.js";import{V as e,z as p}from"./npm~@vue~shared_-951a29c4.js";import"./ns-alert-popup-14b2e47f.js";import"./npm~numeral-85b533a7.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-7ae94d11.js";import"./ns-avatar-image-554f9fbd.js";import"./npm~@dicebear~avatars_-e718895d.js";import"./npm~pure-color-7e91fe3a.js";import"./npm~svgson-b28014ad.js";import"./npm~deep-rename-keys-b2342f4f.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-392f1d0e.js";import"./npm~xml-reader-442daf8d.js";import"./npm~eventemitter3-3e95be7d.js";import"./npm~xml-lexer-4446ceee.js";import"./npm~@dicebear~avatars-avataaars-sprites_-c793f8f6.js";import"./npm~@vue~runtime-dom_-725465db.js";import"./ns-prompt-popup-e2869fb5.js";import"./npm~@ckeditor~ckeditor5-vue_-057f53f2.js";import"./npm~vue-34b803c9.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~vue2-daterange-picker-ccd86bea.js";import"./npm~vuedraggable-c7d6faf7.js";import"./npm~sortablejs-314556ad.js";import"./npm~vue-upload-component-6f0f62ed.js";import"./npm~lodash-9a4afe3d.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-bdf0b3b7.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-befa2efb.js";import"./npm~@babel~runtime_-698f0f51.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";const N={name:"ns-best-products-report",mounted(){},components:{nsDatepicker:y,nsDateTimePicker:f},data(){return{ns:window.ns,startDateField:{name:"start_date",type:"datetime",value:ns.date.moment.startOf("day").format()},endDateField:{name:"end_date",type:"datetime",value:ns.date.moment.endOf("day").format()},report:null,sortField:{name:"sort",type:"select",label:a("Sort Results"),value:"using_quantity_asc",options:[{value:"using_quantity_asc",label:a("Using Quantity Ascending")},{value:"using_quantity_desc",label:a("Using Quantity Descending")},{value:"using_sales_asc",label:a("Using Sales Ascending")},{value:"using_sales_desc",label:a("Using Sales Descending")},{value:"using_name_asc",label:a("Using Name Ascending")},{value:"using_name_desc",label:a("Using Name Descending")}]}}},computed:{totalDebit(){return 0},totalCredit(){return 0}},props:["storeLogo","storeName"],methods:{nsCurrency:w,__:a,printSaleReport(){this.$htmlToPaper("best-products-report")},loadReport(){v.post("/api/reports/products-report",{startDate:this.startDateField.value,endDate:this.endDateField.value,sort:this.sortField.value}).subscribe({next:d=>{d.current.products=Object.values(d.current.products),this.report=d},error:d=>{k.error(d.message).subscribe()}})}}},S={id:"report-section",class:"px-4"},B={class:"flex -mx-2"},P={class:"px-2"},R={class:"px-2"},U={class:"px-2"},q={class:"ns-button"},V=t("i",{class:"las la-sync-alt text-xl"},null,-1),j={class:"pl-2"},A={class:"px-2"},L={class:"ns-button"},O=t("i",{class:"las la-print text-xl"},null,-1),Q={class:"pl-2"},T={class:"flex -mx-2"},z={class:"px-2"},H={id:"best-products-report",class:"anim-duration-500 fade-in-entrance"},E={class:"flex w-full"},G={class:"my-4 flex justify-between w-full"},M={class:"text-primary"},I={class:"pb-1 border-b border-dashed"},J={class:"pb-1 border-b border-dashed"},K={class:"pb-1 border-b border-dashed"},W=["src","alt"],X={class:"my-4"},Y={class:"shadow ns-box"},Z={class:"ns-box-body"},$={class:"table ns-table border w-full"},tt={class:""},et={class:"p-2 text-left"},st={width:"150",class:"p-2 text-right"},rt={width:"150",class:"p-2 text-right"},ot={width:"150",class:"p-2 text-right"},it={width:"150",class:"p-2 text-right"},nt={key:0,class:""},at={class:"p-2 border"},lt={class:"p-2 border text-right"},dt={class:"p-2 border text-right"},ct={class:"flex flex-col"},_t={key:0},pt={class:"p-2 border text-right"},mt={class:"flex flex-col"},ut={key:0},ht={key:0},bt=t("i",{class:"las la-arrow-up"},null,-1),xt={key:1},gt=t("i",{class:"las la-arrow-down"},null,-1),yt={key:0,class:""},ft={colspan:"5",class:"border text-center p-2"},vt={key:1},kt={colspan:"5",class:"text-center p-2 border"},wt={key:2,class:"font-semibold"},Dt=t("td",{colspan:"3",class:"p-2 border"},null,-1),Ft={class:"p-2 border text-right"},Ct=t("td",{class:"p-2 border text-right"},null,-1);function Nt(d,c,u,St,o,r){const h=b("ns-date-time-picker"),x=b("ns-field");return i(),n("div",S,[t("div",B,[t("div",P,[m(h,{field:o.startDateField},null,8,["field"])]),t("div",R,[m(h,{field:o.endDateField},null,8,["field"])]),t("div",U,[t("div",q,[t("button",{onClick:c[0]||(c[0]=s=>r.loadReport()),class:"rounded flex justify-between border-box-background text-primary shadow py-1 items-center px-2"},[V,t("span",j,e(r.__("Load")),1)])])]),t("div",A,[t("div",L,[t("button",{onClick:c[1]||(c[1]=s=>r.printSaleReport()),class:"rounded flex justify-between border-box-background text-primary shadow py-1 items-center px-2"},[O,t("span",Q,e(r.__("Print")),1)])])])]),t("div",T,[t("div",z,[m(x,{field:o.sortField},null,8,["field"])])]),t("div",H,[t("div",E,[t("div",G,[t("div",M,[t("ul",null,[t("li",I,e(r.__("Date Range : {date1} - {date2}").replace("{date1}",o.startDateField.value).replace("{date2}",o.endDateField.value)),1),t("li",J,e(r.__("Document : Best Products")),1),t("li",K,e(r.__("By : {user}").replace("{user}",o.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:u.storeLogo,alt:u.storeName},null,8,W)])])]),t("div",X,[t("div",Y,[t("div",Z,[t("table",$,[t("thead",tt,[t("tr",null,[t("th",et,e(r.__("Product")),1),t("th",st,e(r.__("Unit")),1),t("th",rt,e(r.__("Quantity")),1),t("th",ot,e(r.__("Value")),1),t("th",it,e(r.__("Progress")),1)])]),o.report?(i(),n("tbody",nt,[(i(!0),n(F,null,C(o.report.current.products,(s,g)=>(i(),n("tr",{key:g,class:p(s.evolution==="progress"?"bg-success-primary":"bg-error-primary")},[t("td",at,e(s.name),1),t("td",lt,e(s.unit_name),1),t("td",dt,[t("div",ct,[t("span",null,[t("span",null,e(s.quantity),1)]),t("span",{class:p([s.evolution==="progress"?"text-success-tertiary":"text-danger-light-tertiary","text-xs"])},[s.evolution==="progress"?(i(),n("span",_t,"+")):l("",!0),_(" "+e(s.quantity-s.old_quantity),1)],2)])]),t("td",pt,[t("div",mt,[t("span",null,e(r.nsCurrency(s.total_price)),1),t("span",{class:p([s.evolution==="progress"?"text-success-tertiary":"text-danger-light-tertiary","text-xs"])},[s.evolution==="progress"?(i(),n("span",ut,"+")):l("",!0),_(" "+e(r.nsCurrency(s.total_price-s.old_total_price)),1)],2)])]),t("td",{class:p([s.evolution==="progress"?"text-success-tertiary":"text-error-light-tertiary","p-2 border text-right"])},[s.evolution==="progress"?(i(),n("span",ht,[_(e(s.difference.toFixed(2))+"% ",1),bt])):l("",!0),s.evolution==="regress"?(i(),n("span",xt,[_(e(s.difference.toFixed(2))+"% ",1),gt])):l("",!0)],2)],2))),128)),o.report.current.products.length===0?(i(),n("tr",yt,[t("td",ft,e(r.__("No results to show.")),1)])):l("",!0)])):l("",!0),o.report?l("",!0):(i(),n("tbody",vt,[t("tr",null,[t("td",kt,e(r.__("Start by choosing a range and loading the report.")),1)])])),o.report?(i(),n("tfoot",wt,[t("tr",null,[Dt,t("td",Ft,e(r.nsCurrency(o.report.current.total_price)),1),Ct])])):l("",!0)])])])])])])}const Ne=D(N,[["render",Nt]]);export{Ne as default};
========
import"./npm~moment-a9aaa855.js";import{c as y,e as f}from"./components-33a1bea5.js";import{a as v,b as k}from"./bootstrap-b8cd97d4.js";import{_ as a,n as w}from"./currency-dc6217f5.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{an as b,af as i,G as n,H as t,c as m,F,al as C,A as l,M as _}from"./npm~@vue~runtime-core_-0a26b3ab.js";import{V as e,z as p}from"./npm~@vue~shared_-5bb087a6.js";import"./ns-alert-popup-f8b83fc1.js";import"./npm~numeral-304d6dd9.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-26e9e2f4.js";import"./ns-avatar-image-1c4f26a6.js";import"./npm~@dicebear~avatars_-24df7cd3.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-59868252.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1f1b3f66.js";import"./npm~eventemitter3-e2795b41.js";import"./npm~xml-lexer-a4e87e97.js";import"./npm~@dicebear~avatars-avataaars-sprites_-796ded10.js";import"./npm~@vue~runtime-dom_-2c8e0ca9.js";import"./ns-prompt-popup-4f52d15c.js";import"./npm~@ckeditor~ckeditor5-vue_-4438b480.js";import"./npm~vue-0182d78b.js";import"./npm~@vue~compiler-dom_-ce2c1e21.js";import"./npm~@vue~compiler-core_-745c8708.js";import"./npm~vue2-daterange-picker-c3e32574.js";import"./npm~vuedraggable-45210012.js";import"./npm~sortablejs-1952ed83.js";import"./npm~vue-upload-component-5c82cdcf.js";import"./npm~lodash-3db1c062.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bd96ae31.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-f450d610.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";const N={name:"ns-best-products-report",mounted(){},components:{nsDatepicker:y,nsDateTimePicker:f},data(){return{ns:window.ns,startDateField:{name:"start_date",type:"datetime",value:ns.date.moment.startOf("day").format()},endDateField:{name:"end_date",type:"datetime",value:ns.date.moment.endOf("day").format()},report:null,sortField:{name:"sort",type:"select",label:a("Sort Results"),value:"using_quantity_asc",options:[{value:"using_quantity_asc",label:a("Using Quantity Ascending")},{value:"using_quantity_desc",label:a("Using Quantity Descending")},{value:"using_sales_asc",label:a("Using Sales Ascending")},{value:"using_sales_desc",label:a("Using Sales Descending")},{value:"using_name_asc",label:a("Using Name Ascending")},{value:"using_name_desc",label:a("Using Name Descending")}]}}},computed:{totalDebit(){return 0},totalCredit(){return 0}},props:["storeLogo","storeName"],methods:{nsCurrency:w,__:a,printSaleReport(){this.$htmlToPaper("best-products-report")},loadReport(){v.post("/api/reports/products-report",{startDate:this.startDateField.value,endDate:this.endDateField.value,sort:this.sortField.value}).subscribe({next:d=>{d.current.products=Object.values(d.current.products),this.report=d},error:d=>{k.error(d.message).subscribe()}})}}},S={id:"report-section",class:"px-4"},B={class:"flex -mx-2"},P={class:"px-2"},R={class:"px-2"},U={class:"px-2"},q={class:"ns-button"},V=t("i",{class:"las la-sync-alt text-xl"},null,-1),j={class:"pl-2"},A={class:"px-2"},L={class:"ns-button"},O=t("i",{class:"las la-print text-xl"},null,-1),Q={class:"pl-2"},T={class:"flex -mx-2"},z={class:"px-2"},H={id:"best-products-report",class:"anim-duration-500 fade-in-entrance"},E={class:"flex w-full"},G={class:"my-4 flex justify-between w-full"},M={class:"text-primary"},I={class:"pb-1 border-b border-dashed"},J={class:"pb-1 border-b border-dashed"},K={class:"pb-1 border-b border-dashed"},W=["src","alt"],X={class:"my-4"},Y={class:"shadow ns-box"},Z={class:"ns-box-body"},$={class:"table ns-table border w-full"},tt={class:""},et={class:"p-2 text-left"},st={width:"150",class:"p-2 text-right"},rt={width:"150",class:"p-2 text-right"},ot={width:"150",class:"p-2 text-right"},it={width:"150",class:"p-2 text-right"},nt={key:0,class:""},at={class:"p-2 border"},lt={class:"p-2 border text-right"},dt={class:"p-2 border text-right"},ct={class:"flex flex-col"},_t={key:0},pt={class:"p-2 border text-right"},mt={class:"flex flex-col"},ut={key:0},ht={key:0},bt=t("i",{class:"las la-arrow-up"},null,-1),xt={key:1},gt=t("i",{class:"las la-arrow-down"},null,-1),yt={key:0,class:""},ft={colspan:"5",class:"border text-center p-2"},vt={key:1},kt={colspan:"5",class:"text-center p-2 border"},wt={key:2,class:"font-semibold"},Dt=t("td",{colspan:"3",class:"p-2 border"},null,-1),Ft={class:"p-2 border text-right"},Ct=t("td",{class:"p-2 border text-right"},null,-1);function Nt(d,c,u,St,o,r){const h=b("ns-date-time-picker"),x=b("ns-field");return i(),n("div",S,[t("div",B,[t("div",P,[m(h,{field:o.startDateField},null,8,["field"])]),t("div",R,[m(h,{field:o.endDateField},null,8,["field"])]),t("div",U,[t("div",q,[t("button",{onClick:c[0]||(c[0]=s=>r.loadReport()),class:"rounded flex justify-between border-box-background text-primary shadow py-1 items-center px-2"},[V,t("span",j,e(r.__("Load")),1)])])]),t("div",A,[t("div",L,[t("button",{onClick:c[1]||(c[1]=s=>r.printSaleReport()),class:"rounded flex justify-between border-box-background text-primary shadow py-1 items-center px-2"},[O,t("span",Q,e(r.__("Print")),1)])])])]),t("div",T,[t("div",z,[m(x,{field:o.sortField},null,8,["field"])])]),t("div",H,[t("div",E,[t("div",G,[t("div",M,[t("ul",null,[t("li",I,e(r.__("Date Range : {date1} - {date2}").replace("{date1}",o.startDateField.value).replace("{date2}",o.endDateField.value)),1),t("li",J,e(r.__("Document : Best Products")),1),t("li",K,e(r.__("By : {user}").replace("{user}",o.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:u.storeLogo,alt:u.storeName},null,8,W)])])]),t("div",X,[t("div",Y,[t("div",Z,[t("table",$,[t("thead",tt,[t("tr",null,[t("th",et,e(r.__("Product")),1),t("th",st,e(r.__("Unit")),1),t("th",rt,e(r.__("Quantity")),1),t("th",ot,e(r.__("Value")),1),t("th",it,e(r.__("Progress")),1)])]),o.report?(i(),n("tbody",nt,[(i(!0),n(F,null,C(o.report.current.products,(s,g)=>(i(),n("tr",{key:g,class:p(s.evolution==="progress"?"bg-success-primary":"bg-error-primary")},[t("td",at,e(s.name),1),t("td",lt,e(s.unit_name),1),t("td",dt,[t("div",ct,[t("span",null,[t("span",null,e(s.quantity),1)]),t("span",{class:p([s.evolution==="progress"?"text-success-tertiary":"text-danger-light-tertiary","text-xs"])},[s.evolution==="progress"?(i(),n("span",_t,"+")):l("",!0),_(" "+e(s.quantity-s.old_quantity),1)],2)])]),t("td",pt,[t("div",mt,[t("span",null,e(r.nsCurrency(s.total_price)),1),t("span",{class:p([s.evolution==="progress"?"text-success-tertiary":"text-danger-light-tertiary","text-xs"])},[s.evolution==="progress"?(i(),n("span",ut,"+")):l("",!0),_(" "+e(r.nsCurrency(s.total_price-s.old_total_price)),1)],2)])]),t("td",{class:p([s.evolution==="progress"?"text-success-tertiary":"text-error-light-tertiary","p-2 border text-right"])},[s.evolution==="progress"?(i(),n("span",ht,[_(e(s.difference.toFixed(2))+"% ",1),bt])):l("",!0),s.evolution==="regress"?(i(),n("span",xt,[_(e(s.difference.toFixed(2))+"% ",1),gt])):l("",!0)],2)],2))),128)),o.report.current.products.length===0?(i(),n("tr",yt,[t("td",ft,e(r.__("No results to show.")),1)])):l("",!0)])):l("",!0),o.report?l("",!0):(i(),n("tbody",vt,[t("tr",null,[t("td",kt,e(r.__("Start by choosing a range and loading the report.")),1)])])),o.report?(i(),n("tfoot",wt,[t("tr",null,[Dt,t("td",Ft,e(r.nsCurrency(o.report.current.total_price)),1),Ct])])):l("",!0)])])])])])])}const Ne=D(N,[["render",Nt]]);export{Ne as default};
>>>>>>>> b57ba272c3f9faf9af443e04b50c26fab8415b94:public/build/assets/ns-best-products-report-844b42fa.js
