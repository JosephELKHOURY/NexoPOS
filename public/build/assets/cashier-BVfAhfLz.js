var a=Object.defineProperty;var h=(r,s,e)=>s in r?a(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var t=(r,s,e)=>(h(r,typeof s!="symbol"?s+"":s,e),e);import{a as i,b as p}from"./bootstrap-B7E2wy_a.js";import{_ as o}from"./currency-ZXKMLAC0.js";import{B as n}from"./tax-BACo6kIE.js";import"./runtime-core.esm-bundler-DCfIpxDt.js";class m{constructor(){t(this,"_mysales");t(this,"_reports",{mysales:i.get("/api/reports/cashier-report")});this._mysales=new n({});for(let s in this._reports)this.loadReport(s)}loadReport(s){return this._reports[s].subscribe(e=>{this[`_${s}`].next(e)})}refreshReport(){i.get("/api/reports/cashier-report?refresh=true").subscribe(s=>{this._mysales.next(s),p.success(o("The report has been refreshed."),o("OK")).subscribe()})}get mysales(){return this._mysales}}window.Cashier=new m;
