<<<<<<<< HEAD:public/build/assets/ns-pos-pending-orders-button-25a8b8cd.js
import{a as C,n as P,p as T,e as $,P as F}from"./bootstrap-f85d1704.js";import{n as j}from"./ns-prompt-popup-e2869fb5.js";import{_ as m,n as S}from"./currency-ab26e44d.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{an as v,af as l,G as i,H as s,M as h,A as b,c as u,F as y,al as w,aH as x,aJ as V}from"./npm~@vue~runtime-core_-19758cc2.js";import{V as n}from"./npm~@vue~shared_-951a29c4.js";import{m as A,w as L}from"./npm~@vue~runtime-dom_-725465db.js";import"./npm~lodash-9a4afe3d.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-bdf0b3b7.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~moment-a9aaa855.js";import"./npm~vue-34b803c9.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~@vue~reactivity_-7ae94d11.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-befa2efb.js";import"./npm~@babel~runtime_-698f0f51.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";import"./npm~numeral-85b533a7.js";import"./npm~currency.js-57f74176.js";import"./npm~@ckeditor~ckeditor5-vue_-057f53f2.js";const H={data(){return{products:[],isLoading:!1}},props:["popup"],computed:{order(){return this.popup.params.order}},mounted(){this.loadProducts()},methods:{__:m,nsCurrency:S,close(){this.popup.params.reject(!1),this.popup.close()},loadProducts(){this.isLoading=!0;const r=this.popup.params.order.id;C.get(`/api/orders/${r}/products`).subscribe(e=>{this.isLoading=!1,this.products=e})},openOrder(){this.popup.close(),this.popup.params.resolve(this.order)}}},N={class:"shadow-lg ns-box w-6/7-screen md:w-3/5-screen lg:w-2/5-screen h-6/7-screen flex flex-col overflow-hidden"},B={class:"p-2 flex justify-between text-primary items-center border-b ns-box-header"},U={class:"font-semibold"},D={key:0},q={class:"flex-auto p-2 overflow-y-auto ns-box-body"},K={key:0,class:"flex-auto relative"},M={class:"h-full w-full flex items-center justify-center"},E={class:"flex-col border-b border-info-primary py-2"},G={class:"title font-semibold text-primary flex justify-between"},J={class:"text-sm text-primary"},R={class:"flex justify-end p-2 border-t ns-box-footer"},Y={class:"px-1"},z={class:"-mx-2 flex"},I={class:"px-1"},Q={class:"px-1"};function W(r,e,a,O,p,t){const d=v("ns-close-button"),c=v("ns-spinner"),_=v("ns-button");return l(),i("div",N,[s("div",B,[s("h3",U,[h(n(t.__("Products"))+" — "+n(t.order.code)+" ",1),t.order.title?(l(),i("span",D,"("+n(t.order.title)+")",1)):b("",!0)]),s("div",null,[u(d,{onClick:e[0]||(e[0]=f=>t.close())})])]),s("div",q,[p.isLoading?(l(),i("div",K,[s("div",M,[u(c)])])):b("",!0),p.isLoading?b("",!0):(l(!0),i(y,{key:1},w(p.products,f=>(l(),i("div",{class:"item",key:f.id},[s("div",E,[s("div",G,[s("span",null,n(f.name)+" (x"+n(f.quantity)+")",1),s("span",null,n(t.nsCurrency(r.price)),1)]),s("div",J,[s("ul",null,[s("li",null,n(t.__("Unit"))+" : "+n(f.unit.name),1)])])])]))),128))]),s("div",R,[s("div",Y,[s("div",z,[s("div",I,[u(_,{onClick:e[1]||(e[1]=f=>t.openOrder()),type:"info"},{default:x(()=>[h(n(t.__("Open")),1)]),_:1})]),s("div",Q,[u(_,{onClick:e[2]||(e[2]=f=>t.close()),type:"error"},{default:x(()=>[h(n(t.__("Close")),1)]),_:1})])])])])])}const X=g(H,[["render",W]]),Z={props:["orders"],data(){return{searchField:"",columns:{rightColumn:[],leftColumn:[]}}},watch:{orders(){this.$nextTick(()=>{P.doAction("ns-pos-pending-orders-refreshed",this.orders.map(r=>({order:r,dom:document.querySelector(`[data-order-id="${r.id}"]`)})))})}},mounted(){this.columns.leftColumn=P.applyFilters("ns-pending-orders-left-column",[{label:m("Code"),value:r=>r.code},{label:m("Cashier"),value:r=>r.user_username},{label:m("Total"),value:r=>r.total},{label:m("Tendered"),value:r=>r.tendered}]),this.columns.rightColumn=P.applyFilters("ns-pending-orders-right-column",[{label:m("Customer"),value:r=>`${r.customer_first_name} ${r.customer_last_name}`},{label:m("Date"),value:r=>r.created_at},{label:m("Type"),value:r=>r.type}])},name:"ns-pos-pending-order",methods:{__:m,previewOrder(r){this.$emit("previewOrder",r)},proceedOpenOrder(r){this.$emit("proceedOpenOrder",r)},searchOrder(){this.$emit("searchOrder",this.searchField)},printOrder(r){this.$emit("printOrder",r)}}},ee={class:"flex flex-auto flex-col overflow-hidden"},se={class:"p-1"},re={class:"flex rounded border-2 input-group info"},te=s("i",{class:"las la-search"},null,-1),oe={class:"mr-1 hidden md:visible"},ne={class:"overflow-y-auto flex flex-auto"},de={class:"flex p-2 flex-auto flex-col overflow-y-auto"},le=["data-order-id"],ie={class:"text-primary"},ae={class:"px-2"},pe={class:"flex flex-wrap -mx-4"},ce={class:"w-full md:w-1/2 px-2"},ue={class:"w-full md:w-1/2 px-2"},me={class:"flex justify-end w-full mt-2"},_e={class:"flex rounded-lg overflow-hidden ns-buttons"},fe=["onClick"],he=s("i",{class:"las la-lock-open"},null,-1),ve=["onClick"],xe=s("i",{class:"las la-eye"},null,-1),Oe=["onClick"],be=s("i",{class:"las la-print"},null,-1),ye={key:0,class:"h-full v-full items-center justify-center flex"},we={class:"text-semibold text-primary"};function ge(r,e,a,O,p,t){return l(),i("div",ee,[s("div",se,[s("div",re,[V(s("input",{onKeyup:e[0]||(e[0]=L(d=>t.searchOrder(),["enter"])),"onUpdate:modelValue":e[1]||(e[1]=d=>p.searchField=d),type:"text",class:"p-2 outline-none flex-auto"},null,544),[[A,p.searchField]]),s("button",{onClick:e[2]||(e[2]=d=>t.searchOrder()),class:"w-16 md:w-24"},[te,s("span",oe,n(t.__("Search")),1)])])]),s("div",ne,[s("div",de,[(l(!0),i(y,null,w(a.orders,d=>(l(),i("div",{"data-order-id":d.id,class:"border-b ns-box-body w-full py-2 ns-order-line",key:d.id},[s("h3",ie,n(d.title||"Untitled Order"),1),s("div",ae,[s("div",pe,[s("div",ce,[(l(!0),i(y,null,w(p.columns.leftColumn,(c,_)=>(l(),i("p",{key:_,class:"text-sm text-primary"},[s("strong",null,n(c.label),1),h(" : "+n(c.value(d)),1)]))),128))]),s("div",ue,[(l(!0),i(y,null,w(p.columns.rightColumn,(c,_)=>(l(),i("p",{key:_,class:"text-sm text-primary"},[s("strong",null,n(c.label),1),h(" : "+n(c.value(d)),1)]))),128))])])]),s("div",me,[s("div",_e,[s("button",{onClick:c=>t.proceedOpenOrder(d),class:"info outline-none px-2 py-1"},[he,h(" "+n(t.__("Open")),1)],8,fe),s("button",{onClick:c=>t.previewOrder(d),class:"success outline-none px-2 py-1"},[xe,h(" "+n(t.__("Products")),1)],8,ve),s("button",{onClick:c=>t.printOrder(d),class:"warning outline-none px-2 py-1"},[be,h(" "+n(t.__("Print")),1)],8,Oe)])])],8,le))),128)),a.orders.length===0?(l(),i("div",ye,[s("h3",we,n(t.__("Nothing to display...")),1)])):b("",!0)])])])}const Pe=g(Z,[["render",ge]]),Ce={props:["popup"],components:{nsPosPendingOrders:Pe},methods:{__:m,popupResolver:T,popupCloser:$,searchOrder(r){C.get(`/api/crud/${this.active}?search=${r}`).subscribe(e=>{this.orders=e.data})},setActiveTab(r){this.active=r,this.loadOrderFromType(r)},openOrder(r){POS.loadOrder(r.id),this.popup.close()},loadOrderFromType(r){C.get(`/api/crud/${r}`).subscribe(e=>{this.orders=e.data})},previewOrder(r){new Promise((a,O)=>{Popup.show(X,{order:r,resolve:a,reject:O})}).then(a=>{this.proceedOpenOrder(r)},a=>a)},printOrder(r){POS.print.process(r.id,"sale")},proceedOpenOrder(r){if(POS.products.getValue().length>0)return Popup.show(j,{title:"Confirm Your Action",message:"The cart is not empty. Opening an order will clear your cart would you proceed ?",onAction:a=>{a&&this.openOrder(r)}});this.openOrder(r)}},data(){return{active:"ns.hold-orders",searchField:"",orders:[]}},mounted(){this.loadOrderFromType(this.active)}},ke={class:"shadow-lg ns-box w-6/7-screen md:w-3/5-screen lg:w-2/5-screen h-6/7-screen flex flex-col overflow-hidden"},Te={class:"p-2 flex justify-between text-primary items-center ns-box-header border-b"},$e={class:"font-semibold"},Fe={class:"p-2 flex overflow-hidden flex-auto ns-box-body"},je={class:"p-2 flex justify-between ns-box-footer border-t"},Se=s("div",null,null,-1);function Ve(r,e,a,O,p,t){const d=v("ns-close-button"),c=v("ns-pos-pending-orders"),_=v("ns-tabs-item"),f=v("ns-tabs"),k=v("ns-button");return l(),i("div",ke,[s("div",Te,[s("h3",$e,n(t.__("Orders")),1),s("div",null,[u(d,{onClick:e[0]||(e[0]=o=>a.popup.close())})])]),s("div",Fe,[u(f,{active:p.active,onChangeTab:e[13]||(e[13]=o=>t.setActiveTab(o))},{default:x(()=>[u(_,{identifier:"ns.hold-orders",label:t.__("On Hold"),padding:"p-0",class:"flex flex-col overflow-hidden"},{default:x(()=>[u(c,{orders:p.orders,onSearchOrder:e[1]||(e[1]=o=>t.searchOrder(o)),onPreviewOrder:e[2]||(e[2]=o=>t.previewOrder(o)),onPrintOrder:e[3]||(e[3]=o=>t.printOrder(o)),onProceedOpenOrder:e[4]||(e[4]=o=>t.proceedOpenOrder(o))},null,8,["orders"])]),_:1},8,["label"]),u(_,{identifier:"ns.unpaid-orders",label:t.__("Unpaid"),padding:"p-0",class:"flex flex-col overflow-hidden"},{default:x(()=>[u(c,{orders:p.orders,onSearchOrder:e[5]||(e[5]=o=>t.searchOrder(o)),onPreviewOrder:e[6]||(e[6]=o=>t.previewOrder(o)),onPrintOrder:e[7]||(e[7]=o=>t.printOrder(o)),onProceedOpenOrder:e[8]||(e[8]=o=>t.proceedOpenOrder(o))},null,8,["orders"])]),_:1},8,["label"]),u(_,{identifier:"ns.partially-paid-orders",label:t.__("Partially Paid"),padding:"p-0",class:"flex flex-col overflow-hidden"},{default:x(()=>[u(c,{orders:p.orders,onSearchOrder:e[9]||(e[9]=o=>t.searchOrder(o)),onPreviewOrder:e[10]||(e[10]=o=>t.previewOrder(o)),onPrintOrder:e[11]||(e[11]=o=>t.printOrder(o)),onProceedOpenOrder:e[12]||(e[12]=o=>t.proceedOpenOrder(o))},null,8,["orders"])]),_:1},8,["label"])]),_:1},8,["active"])]),s("div",je,[Se,s("div",null,[u(k,{onClick:e[14]||(e[14]=o=>a.popup.close()),type:"info"},{default:x(()=>[h(n(t.__("Close")),1)]),_:1})])])])}const Ae=g(Ce,[["render",Ve]]),Le={name:"ns-pos-pending-orders-button",methods:{__:m,openPendingOrdersPopup(){F.show(Ae)}}},He={class:"ns-button default"},Ne=s("i",{class:"mr-1 text-xl lar la-hand-pointer"},null,-1);function Be(r,e,a,O,p,t){return l(),i("div",He,[s("button",{onClick:e[0]||(e[0]=d=>t.openPendingOrdersPopup()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[Ne,s("span",null,n(t.__("Orders")),1)])])}const xs=g(Le,[["render",Be]]);export{xs as default};
========
import{a as C,n as P,p as T,e as $,P as F}from"./bootstrap-b8cd97d4.js";import{n as j}from"./ns-prompt-popup-4f52d15c.js";import{_ as m,n as S}from"./currency-dc6217f5.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{an as v,af as l,G as i,H as s,M as h,A as b,c as u,F as y,al as w,aH as x,aJ as V}from"./npm~@vue~runtime-core_-0a26b3ab.js";import{V as n}from"./npm~@vue~shared_-5bb087a6.js";import{m as A,w as L}from"./npm~@vue~runtime-dom_-2c8e0ca9.js";import"./npm~lodash-3db1c062.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bd96ae31.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~moment-a9aaa855.js";import"./npm~vue-0182d78b.js";import"./npm~@vue~compiler-dom_-ce2c1e21.js";import"./npm~@vue~compiler-core_-745c8708.js";import"./npm~@vue~reactivity_-26e9e2f4.js";import"./npm~rx-f450d610.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./npm~numeral-304d6dd9.js";import"./npm~currency.js-57f74176.js";import"./npm~@ckeditor~ckeditor5-vue_-4438b480.js";const H={data(){return{products:[],isLoading:!1}},props:["popup"],computed:{order(){return this.popup.params.order}},mounted(){this.loadProducts()},methods:{__:m,nsCurrency:S,close(){this.popup.params.reject(!1),this.popup.close()},loadProducts(){this.isLoading=!0;const r=this.popup.params.order.id;C.get(`/api/orders/${r}/products`).subscribe(e=>{this.isLoading=!1,this.products=e})},openOrder(){this.popup.close(),this.popup.params.resolve(this.order)}}},N={class:"shadow-lg ns-box w-6/7-screen md:w-3/5-screen lg:w-2/5-screen h-6/7-screen flex flex-col overflow-hidden"},B={class:"p-2 flex justify-between text-primary items-center border-b ns-box-header"},U={class:"font-semibold"},D={key:0},q={class:"flex-auto p-2 overflow-y-auto ns-box-body"},K={key:0,class:"flex-auto relative"},M={class:"h-full w-full flex items-center justify-center"},E={class:"flex-col border-b border-info-primary py-2"},G={class:"title font-semibold text-primary flex justify-between"},J={class:"text-sm text-primary"},R={class:"flex justify-end p-2 border-t ns-box-footer"},Y={class:"px-1"},z={class:"-mx-2 flex"},I={class:"px-1"},Q={class:"px-1"};function W(r,e,a,O,p,t){const d=v("ns-close-button"),c=v("ns-spinner"),_=v("ns-button");return l(),i("div",N,[s("div",B,[s("h3",U,[h(n(t.__("Products"))+" — "+n(t.order.code)+" ",1),t.order.title?(l(),i("span",D,"("+n(t.order.title)+")",1)):b("",!0)]),s("div",null,[u(d,{onClick:e[0]||(e[0]=f=>t.close())})])]),s("div",q,[p.isLoading?(l(),i("div",K,[s("div",M,[u(c)])])):b("",!0),p.isLoading?b("",!0):(l(!0),i(y,{key:1},w(p.products,f=>(l(),i("div",{class:"item",key:f.id},[s("div",E,[s("div",G,[s("span",null,n(f.name)+" (x"+n(f.quantity)+")",1),s("span",null,n(t.nsCurrency(r.price)),1)]),s("div",J,[s("ul",null,[s("li",null,n(t.__("Unit"))+" : "+n(f.unit.name),1)])])])]))),128))]),s("div",R,[s("div",Y,[s("div",z,[s("div",I,[u(_,{onClick:e[1]||(e[1]=f=>t.openOrder()),type:"info"},{default:x(()=>[h(n(t.__("Open")),1)]),_:1})]),s("div",Q,[u(_,{onClick:e[2]||(e[2]=f=>t.close()),type:"error"},{default:x(()=>[h(n(t.__("Close")),1)]),_:1})])])])])])}const X=g(H,[["render",W]]),Z={props:["orders"],data(){return{searchField:"",columns:{rightColumn:[],leftColumn:[]}}},watch:{orders(){this.$nextTick(()=>{P.doAction("ns-pos-pending-orders-refreshed",this.orders.map(r=>({order:r,dom:document.querySelector(`[data-order-id="${r.id}"]`)})))})}},mounted(){this.columns.leftColumn=P.applyFilters("ns-pending-orders-left-column",[{label:m("Code"),value:r=>r.code},{label:m("Cashier"),value:r=>r.user_username},{label:m("Total"),value:r=>r.total},{label:m("Tendered"),value:r=>r.tendered}]),this.columns.rightColumn=P.applyFilters("ns-pending-orders-right-column",[{label:m("Customer"),value:r=>`${r.customer_first_name} ${r.customer_last_name}`},{label:m("Date"),value:r=>r.created_at},{label:m("Type"),value:r=>r.type}])},name:"ns-pos-pending-order",methods:{__:m,previewOrder(r){this.$emit("previewOrder",r)},proceedOpenOrder(r){this.$emit("proceedOpenOrder",r)},searchOrder(){this.$emit("searchOrder",this.searchField)},printOrder(r){this.$emit("printOrder",r)}}},ee={class:"flex flex-auto flex-col overflow-hidden"},se={class:"p-1"},re={class:"flex rounded border-2 input-group info"},te=s("i",{class:"las la-search"},null,-1),oe={class:"mr-1 hidden md:visible"},ne={class:"overflow-y-auto flex flex-auto"},de={class:"flex p-2 flex-auto flex-col overflow-y-auto"},le=["data-order-id"],ie={class:"text-primary"},ae={class:"px-2"},pe={class:"flex flex-wrap -mx-4"},ce={class:"w-full md:w-1/2 px-2"},ue={class:"w-full md:w-1/2 px-2"},me={class:"flex justify-end w-full mt-2"},_e={class:"flex rounded-lg overflow-hidden ns-buttons"},fe=["onClick"],he=s("i",{class:"las la-lock-open"},null,-1),ve=["onClick"],xe=s("i",{class:"las la-eye"},null,-1),Oe=["onClick"],be=s("i",{class:"las la-print"},null,-1),ye={key:0,class:"h-full v-full items-center justify-center flex"},we={class:"text-semibold text-primary"};function ge(r,e,a,O,p,t){return l(),i("div",ee,[s("div",se,[s("div",re,[V(s("input",{onKeyup:e[0]||(e[0]=L(d=>t.searchOrder(),["enter"])),"onUpdate:modelValue":e[1]||(e[1]=d=>p.searchField=d),type:"text",class:"p-2 outline-none flex-auto"},null,544),[[A,p.searchField]]),s("button",{onClick:e[2]||(e[2]=d=>t.searchOrder()),class:"w-16 md:w-24"},[te,s("span",oe,n(t.__("Search")),1)])])]),s("div",ne,[s("div",de,[(l(!0),i(y,null,w(a.orders,d=>(l(),i("div",{"data-order-id":d.id,class:"border-b ns-box-body w-full py-2 ns-order-line",key:d.id},[s("h3",ie,n(d.title||"Untitled Order"),1),s("div",ae,[s("div",pe,[s("div",ce,[(l(!0),i(y,null,w(p.columns.leftColumn,(c,_)=>(l(),i("p",{key:_,class:"text-sm text-primary"},[s("strong",null,n(c.label),1),h(" : "+n(c.value(d)),1)]))),128))]),s("div",ue,[(l(!0),i(y,null,w(p.columns.rightColumn,(c,_)=>(l(),i("p",{key:_,class:"text-sm text-primary"},[s("strong",null,n(c.label),1),h(" : "+n(c.value(d)),1)]))),128))])])]),s("div",me,[s("div",_e,[s("button",{onClick:c=>t.proceedOpenOrder(d),class:"info outline-none px-2 py-1"},[he,h(" "+n(t.__("Open")),1)],8,fe),s("button",{onClick:c=>t.previewOrder(d),class:"success outline-none px-2 py-1"},[xe,h(" "+n(t.__("Products")),1)],8,ve),s("button",{onClick:c=>t.printOrder(d),class:"warning outline-none px-2 py-1"},[be,h(" "+n(t.__("Print")),1)],8,Oe)])])],8,le))),128)),a.orders.length===0?(l(),i("div",ye,[s("h3",we,n(t.__("Nothing to display...")),1)])):b("",!0)])])])}const Pe=g(Z,[["render",ge]]),Ce={props:["popup"],components:{nsPosPendingOrders:Pe},methods:{__:m,popupResolver:T,popupCloser:$,searchOrder(r){C.get(`/api/crud/${this.active}?search=${r}`).subscribe(e=>{this.orders=e.data})},setActiveTab(r){this.active=r,this.loadOrderFromType(r)},openOrder(r){POS.loadOrder(r.id),this.popup.close()},loadOrderFromType(r){C.get(`/api/crud/${r}`).subscribe(e=>{this.orders=e.data})},previewOrder(r){new Promise((a,O)=>{Popup.show(X,{order:r,resolve:a,reject:O})}).then(a=>{this.proceedOpenOrder(r)},a=>a)},printOrder(r){POS.print.process(r.id,"sale")},proceedOpenOrder(r){if(POS.products.getValue().length>0)return Popup.show(j,{title:"Confirm Your Action",message:"The cart is not empty. Opening an order will clear your cart would you proceed ?",onAction:a=>{a&&this.openOrder(r)}});this.openOrder(r)}},data(){return{active:"ns.hold-orders",searchField:"",orders:[]}},mounted(){this.loadOrderFromType(this.active)}},ke={class:"shadow-lg ns-box w-6/7-screen md:w-3/5-screen lg:w-2/5-screen h-6/7-screen flex flex-col overflow-hidden"},Te={class:"p-2 flex justify-between text-primary items-center ns-box-header border-b"},$e={class:"font-semibold"},Fe={class:"p-2 flex overflow-hidden flex-auto ns-box-body"},je={class:"p-2 flex justify-between ns-box-footer border-t"},Se=s("div",null,null,-1);function Ve(r,e,a,O,p,t){const d=v("ns-close-button"),c=v("ns-pos-pending-orders"),_=v("ns-tabs-item"),f=v("ns-tabs"),k=v("ns-button");return l(),i("div",ke,[s("div",Te,[s("h3",$e,n(t.__("Orders")),1),s("div",null,[u(d,{onClick:e[0]||(e[0]=o=>a.popup.close())})])]),s("div",Fe,[u(f,{active:p.active,onChangeTab:e[13]||(e[13]=o=>t.setActiveTab(o))},{default:x(()=>[u(_,{identifier:"ns.hold-orders",label:t.__("On Hold"),padding:"p-0",class:"flex flex-col overflow-hidden"},{default:x(()=>[u(c,{orders:p.orders,onSearchOrder:e[1]||(e[1]=o=>t.searchOrder(o)),onPreviewOrder:e[2]||(e[2]=o=>t.previewOrder(o)),onPrintOrder:e[3]||(e[3]=o=>t.printOrder(o)),onProceedOpenOrder:e[4]||(e[4]=o=>t.proceedOpenOrder(o))},null,8,["orders"])]),_:1},8,["label"]),u(_,{identifier:"ns.unpaid-orders",label:t.__("Unpaid"),padding:"p-0",class:"flex flex-col overflow-hidden"},{default:x(()=>[u(c,{orders:p.orders,onSearchOrder:e[5]||(e[5]=o=>t.searchOrder(o)),onPreviewOrder:e[6]||(e[6]=o=>t.previewOrder(o)),onPrintOrder:e[7]||(e[7]=o=>t.printOrder(o)),onProceedOpenOrder:e[8]||(e[8]=o=>t.proceedOpenOrder(o))},null,8,["orders"])]),_:1},8,["label"]),u(_,{identifier:"ns.partially-paid-orders",label:t.__("Partially Paid"),padding:"p-0",class:"flex flex-col overflow-hidden"},{default:x(()=>[u(c,{orders:p.orders,onSearchOrder:e[9]||(e[9]=o=>t.searchOrder(o)),onPreviewOrder:e[10]||(e[10]=o=>t.previewOrder(o)),onPrintOrder:e[11]||(e[11]=o=>t.printOrder(o)),onProceedOpenOrder:e[12]||(e[12]=o=>t.proceedOpenOrder(o))},null,8,["orders"])]),_:1},8,["label"])]),_:1},8,["active"])]),s("div",je,[Se,s("div",null,[u(k,{onClick:e[14]||(e[14]=o=>a.popup.close()),type:"info"},{default:x(()=>[h(n(t.__("Close")),1)]),_:1})])])])}const Ae=g(Ce,[["render",Ve]]),Le={name:"ns-pos-pending-orders-button",methods:{__:m,openPendingOrdersPopup(){F.show(Ae)}}},He={class:"ns-button default"},Ne=s("i",{class:"mr-1 text-xl lar la-hand-pointer"},null,-1);function Be(r,e,a,O,p,t){return l(),i("div",He,[s("button",{onClick:e[0]||(e[0]=d=>t.openPendingOrdersPopup()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[Ne,s("span",null,n(t.__("Orders")),1)])])}const xs=g(Le,[["render",Be]]);export{xs as default};
>>>>>>>> b57ba272c3f9faf9af443e04b50c26fab8415b94:public/build/assets/ns-pos-pending-orders-button-6526ce40.js
