import{h as c,d,b}from"./bootstrap-CJG64-ep.js";import{c as x,e as f}from"./components-CxfRKqs6.js";import{_ as a,n as y}from"./currency-B1QCtbGi.js";import{s as p}from"./select-api-entities-CL3xtz8A.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as g,o as u,c as _,a as t,f as m,t as i,F as w,b as F}from"./runtime-core.esm-bundler-CJXnDbC2.js";import"./chart-XFVd3zf7.js";import"./ns-prompt-popup-CWE-mKVv.js";import"./ns-avatar-image-W1ALws4o.js";import"./join-array-H-ZxDgvP.js";const D={name:"ns-sold-stock-report",props:["storeLogo","storeName"],data(){return{categoriesNames:"",unitsNames:"",startDateField:{type:"datetimepicker",value:c(ns.date.current).startOf("month").format("YYYY-MM-DD HH:mm:ss")},endDateField:{type:"datetimepicker",value:c(ns.date.current).endOf("month").format("YYYY-MM-DD HH:mm:ss")},categoryField:{label:a("Filter by Category"),value:[],name:"filter_by_category"},unitField:{label:a("Filter by Unit"),value:[],name:"filter_by_unit"},products:[],ns:window.ns}},components:{nsDatepicker:x,nsDateTimePicker:f},computed:{totalQuantity(){return this.products.length>0?this.products.map(r=>r.quantity).reduce((r,e)=>r+e):0},totalTaxes(){return this.products.length>0?this.products.map(r=>r.tax_value).reduce((r,e)=>r+e):0},totalPrice(){return this.products.length>0?this.products.map(r=>r.total_price).reduce((r,e)=>r+e):0}},methods:{__:a,nsCurrency:y,async selectCategories(){try{const r=await p("/api/categories",a("Limit Results By Categories"),this.categoryField.value);this.categoriesNames=r.labels,this.categoryField.value=r.values,this.loadReport()}catch{d.error(a("An error has occured while loading the categories")).subscribe()}},async selectUnits(){try{const r=await p("/api/units",a("Limit Results By Units"),this.unitField.value);this.unitsNames=r.labels,this.unitField.value=r.values,this.loadReport()}catch{d.error(a("An error has occured while loading the units")).subscribe()}},printSaleReport(){this.$htmlToPaper("report-printable")},loadReport(){if(this.startDateField.value===null||this.endDateField.value===null)return d.error(a("Unable to proceed. Select a correct time range.")).subscribe();const r=c(this.startDateField.value);if(c(this.endDateField.value).isBefore(r))return d.error(a("Unable to proceed. The current time range is not valid.")).subscribe();b.post("/api/reports/sold-stock-report",{startDate:this.startDateField.value,endDate:this.endDateField.value,categories:this.categoryField.value,units:this.unitField.value}).subscribe({next:n=>{this.products=n},error:n=>{d.error(n.message).subscribe()}})}}},k={id:"report-section",class:"px-4"},C={class:"flex -mx-2"},R={class:"px-2"},N={class:"px-2"},S={class:"px-2"},U={class:"ns-button"},B={class:"pl-2"},Y={class:"px-2"},M={class:"ns-button"},T={class:"pl-2"},L={class:"px-2"},P={class:"ns-button"},j={class:"pl-2"},A={class:"px-2"},H={class:"ns-button"},Q={class:"pl-2"},V={id:"report-printable",class:"anim-duration-500 fade-in-entrance"},q={class:"flex w-full"},E={class:"my-4 flex justify-between w-full"},O={class:"text-secondary"},z={class:"pb-1 border-b border-dashed"},G={class:"pb-1 border-b border-dashed"},I={class:"pb-1 border-b border-dashed"},J=["src","alt"],K={class:"rounded my-4"},W={class:"ns-box shadow"},X={class:"border-b ns-box-body"},Z={class:"table ns-table w-full"},$={class:""},tt={class:"border p-2 text-left"},et={width:"150",class:"text-right border p-2"},st={width:"150",class:"text-right border p-2"},rt={width:"150",class:"text-right border p-2"},it={width:"150",class:"text-right border p-2"},lt={class:""},at={class:"p-2 border"},ot={class:"p-2 border text-right"},nt={class:"p-2 border text-right"},dt={class:"p-2 border text-right"},ct={class:"p-2 border text-right"},ut={class:"font-semibold"},_t={class:"p-2 border text-right"},ht={class:"p-2 border text-right"},pt={class:"p-2 border text-right"};function mt(r,e,n,bt,o,s){const h=g("ns-field");return u(),_("div",k,[t("div",C,[t("div",R,[m(h,{field:o.startDateField},null,8,["field"])]),t("div",N,[m(h,{field:o.endDateField},null,8,["field"])]),t("div",S,[t("div",U,[t("button",{onClick:e[0]||(e[0]=l=>s.loadReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[e[4]||(e[4]=t("i",{class:"las la-sync-alt text-xl"},null,-1)),t("span",B,i(s.__("Load")),1)])])]),t("div",Y,[t("div",M,[t("button",{onClick:e[1]||(e[1]=l=>s.printSaleReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[e[5]||(e[5]=t("i",{class:"las la-print text-xl"},null,-1)),t("span",T,i(s.__("Print")),1)])])]),t("div",L,[t("div",P,[t("button",{onClick:e[2]||(e[2]=l=>s.selectCategories()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[e[6]||(e[6]=t("i",{class:"las la-filter text-xl"},null,-1)),t("span",j,i(s.__("Categories"))+": "+i(o.categoriesNames||s.__("All Categories")),1)])])]),t("div",A,[t("div",H,[t("button",{onClick:e[3]||(e[3]=l=>s.selectUnits()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[e[7]||(e[7]=t("i",{class:"las la-filter text-xl"},null,-1)),t("span",Q,i(s.__("Units"))+": "+i(o.unitsNames||s.__("All Units")),1)])])])]),t("div",V,[t("div",q,[t("div",E,[t("div",O,[t("ul",null,[t("li",z,i(s.__("Range : {date1} — {date2}").replace("{date1}",o.startDateField.value).replace("{date2}",o.endDateField.value)),1),t("li",G,i(s.__("Document : Sold Stock Report")),1),t("li",I,i(s.__("By : {user}").replace("{user}",o.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:n.storeLogo,alt:n.storeName},null,8,J)])])]),t("div",K,[t("div",W,[t("div",X,[t("table",Z,[t("thead",$,[t("tr",null,[t("th",tt,i(s.__("Product")),1),t("th",et,i(s.__("Unit")),1),t("th",st,i(s.__("Quantity")),1),t("th",rt,i(s.__("Tax Value")),1),t("th",it,i(s.__("Total")),1)])]),t("tbody",lt,[(u(!0),_(w,null,F(o.products,l=>(u(),_("tr",{key:l.id},[t("td",at,i(l.name),1),t("td",ot,i(l.unit_name),1),t("td",nt,i(l.quantity),1),t("td",dt,i(s.nsCurrency(l.tax_value)),1),t("td",ct,i(s.nsCurrency(l.total_price)),1)]))),128))]),t("tfoot",ut,[t("tr",null,[e[8]||(e[8]=t("td",{colspan:"2",class:"p-2 border"},null,-1)),t("td",_t,i(s.totalQuantity),1),t("td",ht,i(s.nsCurrency(s.totalTaxes)),1),t("td",pt,i(s.nsCurrency(s.totalPrice)),1)])])])])])])])])}const Rt=v(D,[["render",mt]]);export{Rt as default};
