<<<<<<<< HEAD:public/build/assets/bootstrap-f85d1704.js
var De=Object.defineProperty;var Re=(u,t,n)=>t in u?De(u,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[t]=n;var w=(u,t,n)=>(Re(u,typeof t!="symbol"?t+"":t,n),n);import{L as Ie}from"./npm~lodash-9a4afe3d.js";import{E as Oe}from"./npm~laravel-echo-198fd56d.js";import{P as He}from"./npm~pusher-js-bdf0b3b7.js";import{a as ae}from"./npm~axios-c24e582b.js";import{C as ce}from"./npm~chart.js-3fed1729.js";import{R as qe,S as je,O as Be,B as Pe,a as Ye,b as Ue}from"./npm~rxjs-eeb06f17.js";import{h as Q}from"./npm~moment-a9aaa855.js";import"./npm~vue-34b803c9.js";import{y as G,m as We}from"./npm~@vue~reactivity_-7ae94d11.js";import{r as $e}from"./npm~rx-da74c705.js";import{_ as I,c as ze,n as Ve,a as Ke}from"./currency-ab26e44d.js";import{c as Je}from"./npm~@wordpress~hooks_-bd0b7221.js";import{c as ue}from"./npm~@vue~runtime-dom_-725465db.js";import{c as q}from"./npm~mathjs-befa2efb.js";import{e as Qe,N as Ge}from"./npm~@vue~runtime-core_-19758cc2.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~tslib-8dbab242.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~@vue~shared_-951a29c4.js";import"./npm~numeral-85b533a7.js";import"./npm~currency.js-57f74176.js";import"./npm~@babel~runtime_-698f0f51.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";class X{constructor(t={}){w(this,"config",{primarySelector:void 0,popupClass:"shadow-lg h-half w-1/2 bg-white"});w(this,"container",document.createElement("div"));w(this,"popupBody",document.createElement("div"));w(this,"parentWrapper");if(this.config=Object.assign(this.config,t),this.config.primarySelector===void 0&&document.querySelectorAll(".is-popup").length>0){const n=document.querySelectorAll(".is-popup").length;this.parentWrapper=document.querySelectorAll(".is-popup")[n-1]}else this.parentWrapper=document.querySelector("body").querySelectorAll("div")[0]}static show(t,n={},s={}){return new X(s).open(t,n)}hash(){let t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<10;s++)t+=n.charAt(Math.floor(Math.random()*n.length));return t.toLocaleLowerCase()}open(t,n={},s={}){if(this.popupBody=document.createElement("div"),typeof t=="function")try{t=(async()=>(await t()).default)()}catch{}const o=document.querySelector("body").querySelectorAll("div")[0];this.parentWrapper.style.filter="blur(4px)",o.style.filter="blur(6px)";let a=[];const c=nsState.state.getValue();c.popups!==void 0&&(a=c.popups);const l={hash:`popup-${this.hash()}-${this.hash()}`,component:G(t),close:(p=null)=>this.close(l,p),params:n,config:s};return a.push(l),nsState.setState({popups:a}),l}close(t,n=null){this.parentWrapper.style.filter="blur(0px)";const s=document.querySelector("body").querySelectorAll("div")[0];document.querySelectorAll(".is-popup").length<=1&&(s.style.filter="blur(0px)");const o=`#${t.hash} .popup-body`,a=document.querySelector(o);a.classList.remove("zoom-out-entrance"),a.classList.add("zoom-in-exit"),document.querySelector(`#${t.hash}`).classList.remove("is-popup"),setTimeout(()=>{const{popups:l}=nsState.state.getValue(),p=l.indexOf(t);if(l.splice(p,1),nsState.setState({popups:l}),n!==null)return n(t)},250)}}class le{constructor(){w(this,"_subject");this._subject=new qe}subject(){return this._subject}emit({identifier:t,value:n}){this._subject.next({identifier:t,value:n})}}class J{constructor(t){this.instance=t}close(){this.instance.classList.add("fade-out-exit"),this.instance.classList.add("anim-duration-300"),this.instance.classList.remove("zoom-in-entrance"),setTimeout(()=>{this.instance.remove()},250)}}class de{constructor(){w(this,"queue");window.floatingNotices===void 0&&(window.floatingNotices=[],this.queue=window.floatingNotices)}show(t,n,s={duration:3e3,type:"info"}){const{floatingNotice:o}=this.__createSnack({title:t,description:n,options:s});s.actions===void 0&&(s.duration=3e3),this.__startTimer(s.duration,o)}error(t,n,s={duration:3e3,type:"error"}){return this.show(t,n,{...s,type:"error"})}success(t,n,s={duration:3e3,type:"success"}){return this.show(t,n,{...s,type:"success"})}info(t,n,s={duration:3e3,type:"info"}){return this.show(t,n,{...s,type:"info"})}warning(t,n,s={duration:3e3,type:"warning"}){return this.show(t,n,{...s,type:"warning"})}__startTimer(t,n){let s;const o=()=>{t>0&&t!==!1&&(s=setTimeout(()=>{new J(n).close()},t))};n.addEventListener("mouseenter",()=>{clearTimeout(s)}),n.addEventListener("mouseleave",()=>{o()}),o()}__createSnack({title:t,description:n,options:s}){let o="",a="";switch(s.type){case"info":o="",a="info";break;case"error":o="",a="error";break;case"success":o="",a="success";break;case"warning":o="",a="warning";break}if(document.getElementById("floating-notice-wrapper")===null){const p=new DOMParser().parseFromString(`
========
var De=Object.defineProperty;var Re=(u,t,n)=>t in u?De(u,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[t]=n;var v=(u,t,n)=>(Re(u,typeof t!="symbol"?t+"":t,n),n);import{L as Ie}from"./npm~lodash-3db1c062.js";import{E as Oe}from"./npm~laravel-echo-0c2ba8ed.js";import{P as He}from"./npm~pusher-js-bd96ae31.js";import{a as ae}from"./npm~axios-c24e582b.js";import{C as ce}from"./npm~chart.js-3fed1729.js";import{R as je,S as qe,O as Be,B as Pe,a as Ye,b as Ue}from"./npm~rxjs-eeb06f17.js";import{h as Q}from"./npm~moment-a9aaa855.js";import"./npm~vue-0182d78b.js";import{y as G,m as We}from"./npm~@vue~reactivity_-26e9e2f4.js";import{r as $e}from"./npm~rx-f450d610.js";import{_ as I,c as ze,n as Ke,a as Ve}from"./currency-dc6217f5.js";import{c as Je}from"./npm~@wordpress~hooks_-bd0b7221.js";import{c as ue}from"./npm~@vue~runtime-dom_-2c8e0ca9.js";import{c as j}from"./npm~mathjs-b10bd4cd.js";import{e as Qe,N as Ge}from"./npm~@vue~runtime-core_-0a26b3ab.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~tslib-8dbab242.js";import"./npm~@vue~compiler-dom_-ce2c1e21.js";import"./npm~@vue~compiler-core_-745c8708.js";import"./npm~@vue~shared_-5bb087a6.js";import"./npm~numeral-304d6dd9.js";import"./npm~currency.js-57f74176.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";class X{constructor(t={}){v(this,"config",{primarySelector:void 0,popupClass:"shadow-lg h-half w-1/2 bg-white"});v(this,"container",document.createElement("div"));v(this,"popupBody",document.createElement("div"));v(this,"parentWrapper");if(this.config=Object.assign(this.config,t),this.config.primarySelector===void 0&&document.querySelectorAll(".is-popup").length>0){const n=document.querySelectorAll(".is-popup").length;this.parentWrapper=document.querySelectorAll(".is-popup")[n-1]}else this.parentWrapper=document.querySelector("body").querySelectorAll("div")[0]}static show(t,n={},s={}){return new X(s).open(t,n)}hash(){let t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<10;s++)t+=n.charAt(Math.floor(Math.random()*n.length));return t.toLocaleLowerCase()}open(t,n={},s={}){if(this.popupBody=document.createElement("div"),typeof t=="function")try{t=(async()=>(await t()).default)()}catch{}const o=document.querySelector("body").querySelectorAll("div")[0];this.parentWrapper.style.filter="blur(4px)",o.style.filter="blur(6px)";let a=[];const c=nsState.state.getValue();c.popups!==void 0&&(a=c.popups);let l={};t.props&&(l=Object.keys(n).filter(p=>t.props.includes(p)).reduce((p,w)=>(p[w]=n[w],p),{}));const f={hash:`popup-${this.hash()}-${this.hash()}`,component:G(t),close:(p=null)=>this.close(f,p),props:l,params:n,config:s};return a.push(f),nsState.setState({popups:a}),f}close(t,n=null){this.parentWrapper.style.filter="blur(0px)";const s=document.querySelector("body").querySelectorAll("div")[0];document.querySelectorAll(".is-popup").length<=1&&(s.style.filter="blur(0px)");const o=`#${t.hash} .popup-body`,a=document.querySelector(o);a.classList.remove("zoom-out-entrance"),a.classList.add("zoom-in-exit"),document.querySelector(`#${t.hash}`).classList.remove("is-popup"),setTimeout(()=>{const{popups:l}=nsState.state.getValue(),f=l.indexOf(t);if(l.splice(f,1),nsState.setState({popups:l}),n!==null)return n(t)},250)}}class le{constructor(){v(this,"_subject");this._subject=new je}subject(){return this._subject}emit({identifier:t,value:n}){this._subject.next({identifier:t,value:n})}}class J{constructor(t){this.instance=t}close(){this.instance.classList.add("fade-out-exit"),this.instance.classList.add("anim-duration-300"),this.instance.classList.remove("zoom-in-entrance"),setTimeout(()=>{this.instance.remove()},250)}}class de{constructor(){v(this,"queue");window.floatingNotices===void 0&&(window.floatingNotices=[],this.queue=window.floatingNotices)}show(t,n,s={duration:3e3,type:"info"}){const{floatingNotice:o}=this.__createSnack({title:t,description:n,options:s});s.actions===void 0&&(s.duration=3e3),this.__startTimer(s.duration,o)}error(t,n,s={duration:3e3,type:"error"}){return this.show(t,n,{...s,type:"error"})}success(t,n,s={duration:3e3,type:"success"}){return this.show(t,n,{...s,type:"success"})}info(t,n,s={duration:3e3,type:"info"}){return this.show(t,n,{...s,type:"info"})}warning(t,n,s={duration:3e3,type:"warning"}){return this.show(t,n,{...s,type:"warning"})}__startTimer(t,n){let s;const o=()=>{t>0&&t!==!1&&(s=setTimeout(()=>{new J(n).close()},t))};n.addEventListener("mouseenter",()=>{clearTimeout(s)}),n.addEventListener("mouseleave",()=>{o()}),o()}__createSnack({title:t,description:n,options:s}){let o="",a="";switch(s.type){case"info":o="",a="info";break;case"error":o="",a="error";break;case"success":o="",a="success";break;case"warning":o="",a="warning";break}if(document.getElementById("floating-notice-wrapper")===null){const f=new DOMParser().parseFromString(`
>>>>>>>> b57ba272c3f9faf9af443e04b50c26fab8415b94:public/build/assets/bootstrap-b8cd97d4.js
                <div id="floating-notice-wrapper" class="absolute bottom-0 right-0 flex justify-between items-end p-2 flex-col">
                
                </div>
                `,"text/html");document.body.appendChild(f.querySelector("#floating-notice-wrapper"))}const c=document.getElementById("floating-notice-wrapper")||document.createElement("div");let l=new DOMParser().parseFromString(`
            <div class="ns-floating-notice shadow-lg zoom-in-entrance anim-duration-300 p-2 border-t-4 mt-4 md:w-96 flex flex-col ${a}">
                <div class="ns-floating-notice-content">
                    <h2 class="font-bold text-xl">${t}</h2>
                    <p>${n}</p>
                </div>
                <div class="flex justify-end w-full buttons-wrapper mt-2">
                    <!-- the button will be added here -->
                </div>
            </div>
            `,"text/html").querySelector(".ns-floating-notice");if(s.actions!==void 0&&Object.values(s.actions).length>0)for(let f in s.actions){const p=l.querySelector(".buttons-wrapper"),w=new DOMParser().parseFromString(`
                    <div class="ns-button default ml-2">
                        <button class="px-2 py-1 shadow rounded uppercase ${o}">${s.actions[f].label}</button>
                    </div>
                    `,"text/html").firstElementChild;s.actions[f].onClick?w.querySelector(".ns-button").addEventListener("click",()=>{s.actions[f].onClick(new J(l))}):w.querySelector(".ns-button").addEventListener("click",()=>new J(l).close()),p.appendChild(w.querySelector(".ns-button"))}return c.appendChild(l),{floatingNotice:l}}}class Xe{constructor(){v(this,"_subject");v(this,"_client");v(this,"_lastRequestData");this._subject=new qe}defineClient(t){this._client=t}post(t,n,s={}){return this._request("post",t,n,s)}get(t,n={}){return this._request("get",t,void 0,n)}delete(t,n={}){return this._request("delete",t,void 0,n)}put(t,n,s={}){return this._request("put",t,n,s)}get response(){return this._lastRequestData}_request(t,n,s={},o={}){return n=nsHooks.applyFilters("http-client-url",n.replace(/\/$/,"")),this._subject.next({identifier:"async.start",url:n,data:s}),new Be(a=>{this._client[t](n,s,{...this._client.defaults[t],...o}).then(c=>{this._lastRequestData=c,a.next(c.data),a.complete(),this._subject.next({identifier:"async.stop"})}).catch(c=>{var l;a.error(((l=c.response)==null?void 0:l.data)||c.response||c),this._subject.next({identifier:"async.stop"})})})}subject(){return this._subject}emit({identifier:t,value:n}){this._subject.next({identifier:t,value:n})}}class pe{constructor(){v(this,"queue");window.snackbarQueue===void 0&&(window.snackbarQueue=[],this.queue=window.snackbarQueue)}show(t,n,s={duration:3e3,type:"info"}){return $e.Observable.create(o=>{const{buttonNode:a,textNode:c,snackWrapper:l,sampleSnack:f}=this.__createSnack({message:t,label:n,type:s.type});a.addEventListener("click",p=>{o.onNext(a),o.onCompleted(),f.remove()}),this.__startTimer(s.duration,f)})}error(t,n=null,s={duration:3e3,type:"error"}){return this.show(t,n,{...s,type:"error"})}success(t,n=null,s={duration:3e3,type:"success"}){return this.show(t,n,{...s,type:"success"})}info(t,n=null,s={duration:3e3,type:"info"}){return this.show(t,n,{...s,type:"info"})}__startTimer(t,n){let s;const o=()=>{t>0&&t!==!1&&(s=setTimeout(()=>{n.remove()},t))};n.addEventListener("mouseenter",()=>{clearTimeout(s)}),n.addEventListener("mouseleave",()=>{o()}),o()}__createSnack({message:t,label:n,type:s="info"}){const o=document.getElementById("snack-wrapper")||document.createElement("div"),a=document.createElement("div"),c=document.createElement("p"),l=document.createElement("div"),f=document.createElement("button");let p="",w="";switch(s){case"info":p="",w="info";break;case"error":p="",w="error";break;case"success":p="",w="success";break}return c.textContent=t,c.setAttribute("class","pr-2"),n&&(l.setAttribute("class","ns-button default"),f.textContent=n,f.setAttribute("class",`px-3 py-2 shadow rounded uppercase ${p}`),l.appendChild(f)),a.appendChild(c),a.appendChild(l),a.setAttribute("class",`md:rounded py-2 px-3 md:w-2/5 w-full z-10 md:my-2 shadow-lg flex justify-between items-center zoom-in-entrance anim-duration-300 ns-notice ${w}`),o.appendChild(a),document.getElementById("snack-wrapper")===null&&(o.setAttribute("id","snack-wrapper"),o.setAttribute("class","absolute bottom-0 w-full flex justify-between items-center flex-col"),document.body.appendChild(o)),{snackWrapper:o,sampleSnack:a,buttonsWrapper:l,buttonNode:f,textNode:c}}}class Ze{constructor(t){v(this,"behaviorState");v(this,"stateStore",{});this.behaviorState=new Pe({}),this.behaviorState.subscribe(n=>{this.stateStore=n}),this.setState(t)}setState(t){this.behaviorState.next({...this.stateStore,...t})}get state(){return this.behaviorState}subscribe(t){this.behaviorState.subscribe(t)}}class et{validateFields(t){return t.map(n=>(this.checkField(n,t,{touchField:!1}),n.errors?n.errors.length===0:0)).filter(n=>n===!1).length===0}validateFieldsErrors(t){return t.map(n=>(this.checkField(n,t,{touchField:!1}),n.errors)).flat()}validateForm(t){t.main&&this.validateField(t.main);const n=[];for(let s in t.tabs)if(t.tabs[s].fields){const o=[],a=this.validateFieldsErrors(t.tabs[s].fields);a.length>0&&o.push(a),t.tabs[s].errors=o.flat(),n.push(o.flat())}return n.flat().filter(s=>s!==void 0)}initializeTabs(t){let n=0;for(let s in t)n===0&&(t[s].active=!0),t[s].active=t[s].active===void 0?!1:t[s].active,t[s].fields=this.createFields(t[s].fields),n++;return t}validateField(t){return this.checkField(t,[],{touchField:!1})}fieldsValid(t){return!(t.map(n=>n.errors&&n.errors.length>0).filter(n=>n).length>0)}createFields(t){return t.map(n=>{if(n.type=n.type||"text",n.errors=n.errors||[],n.disabled=n.disabled||!1,n.touched=!1,n.type==="custom"&&typeof n.component=="string"){const s=n.component;if(n.component=G(nsExtraComponents[n.component]),n.component)n.component.value.$field=n,n.component.value.$fields=t;else throw`Failed to load a custom component. "${s}" is not provided as an extra component. More details here: "https://my.nexopos.com/en/documentation/developpers-guides/how-to-register-a-custom-vue-component"`}return n})}isFormUntouched(t){let n=!0;if(t.main&&(n=t.main.touched?!1:n),t.tabs)for(let s in t.tabs)n=t.tabs[s].fields.filter(o=>o.touched).length>0?!1:n;return n}createForm(t){if(t.main&&(t.main=this.createFields([t.main])[0]),t.tabs)for(let n in t.tabs)t.tabs[n].errors=[],t.tabs[n].fields!==void 0?t.tabs[n].fields=this.createFields(t.tabs[n].fields):console.info(`Warning: The tab "${t.tabs[n].label}" is missing fields. Fallback on checking dynamic component instead.`);return t}enableFields(t){return t.map(n=>n.disabled=!1)}disableFields(t){return t.map(n=>n.disabled=!0)}disableForm(t){t.main&&(t.main.disabled=!0);for(let n in t.tabs)t.tabs[n].fields.forEach(s=>s.disabled=!0)}enableForm(t){t.main&&(t.main.disabled=!1);for(let n in t.tabs)t.tabs[n].fields.forEach(s=>s.disabled=!1)}getValue(t){const n={};return t.forEach(s=>{n[s.name]=s.value}),n}checkField(t,n=[],s={touchField:!0}){if(t.validation!==void 0){t.errors=[];const o=this.detectValidationRules(t.validation).filter(c=>c!=null);o.map(c=>c.identifier).includes("sometimes")?t.value!==void 0&&t.value.length>0&&o.forEach(c=>{this.fieldPassCheck(t,c,n)}):o.forEach(c=>{this.fieldPassCheck(t,c,n)})}return s.touchField&&(t.touched=!0),t}extractForm(t){let n={};if(t.main&&(n[t.main.name]=t.main.value),t.tabs)for(let s in t.tabs)n[s]===void 0&&(n[s]={}),n[s]=this.extractFields(t.tabs[s].fields);return n}extractFields(t,n={}){return t.forEach(s=>{n[s.name]=s.value}),n}detectValidationRules(t){const n=s=>{const o=/(min)\:([0-9])+/g,a=/(sometimes)/g,c=/(max)\:([0-9])+/g,l=/(same):(\w+)/g,f=/(different):(\w+)/g;let p;if(["email","required"].includes(s))return{identifier:s};if(s.length>0&&(p=o.exec(s)||c.exec(s)||l.exec(s)||f.exec(s)||a.exec(s),p!==null))return{identifier:p[1],value:p[2]}};return Array.isArray(t)?t.filter(s=>typeof s=="string").map(n):t.split("|").map(n)}triggerError(t,n){if(n.errors)for(let s in n.errors){let o=s.split(".").filter(a=>!/^\d+$/.test(a));o.length===2&&t.tabs[o[0]].fields.forEach(a=>{a.name===o[1]&&n.errors[s].forEach(c=>{const l={identifier:"invalid",invalid:!0,message:c,name:a.name};a.errors.push(l)})}),s===t.main.name&&n.errors[s].forEach(a=>{t.main.errors.push({identifier:"invalid",invalid:!0,message:a,name:t.main.name})})}}triggerFieldsErrors(t,n){if(n&&n.errors)for(let s in n.errors)t.forEach(o=>{o.name===s&&n.errors[s].forEach(a=>{const c={identifier:"invalid",invalid:!0,message:a,name:o.name};o.errors.push(c)})})}trackError(t,n,s){t.errors.push({identifier:n.identifier,invalid:!0,name:t.name,rule:n,fields:s})}unTrackError(t,n){t.errors.forEach((s,o)=>{s.identifier===n.identifier&&s.invalid===!0&&t.errors.splice(o,1)})}fieldPassCheck(t,n,s){if(n!==void 0){const a={required:(c,l)=>c.value===void 0||c.value===null||c.value.length===0,email:(c,l)=>c.value.length>0&&!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(c.value),same:(c,l)=>{const f=s.filter(p=>p.name===l.value);return f.length===1&&["string","number"].includes(typeof c.value)&&c.value.length>0&&f[0].value!==c.value},different:(c,l)=>{const f=s.filter(p=>p.name===l.value);return f.length===1&&["string","number"].includes(typeof c.value)&&c.value.length>0&&f[0].value===c.value},min:(c,l)=>c.value&&c.value.length<parseInt(l.value),max:(c,l)=>c.value&&c.value.length>parseInt(l.value)}[n.identifier];return typeof a=="function"?a(t,n)===!1?this.unTrackError(t,n):this.trackError(t,n,s):t}}}class tt{constructor(){v(this,"url");this.url=ns.base_url}get(t){return this.url+t}}/**
 * @license countdown.js v2.6.1 http://countdownjs.org
 * Copyright (c)2006-2014 Stephen M. McKamey.
 * Licensed under The MIT License.
 */var _=function(){var u=1,t=2,n=4,s=8,o=16,a=32,c=64,l=128,f=256,p=512,w=1024,Z=l|c|o|s|n|t,b=1e3,y=60,g=60,N=24,W=N*g*y*b,S=7,C=12,x=10,F=10,T=10,O=Math.ceil,L=Math.floor;function ee(e,i){var r=e.getTime();return e.setMonth(e.getMonth()+i),Math.round((e.getTime()-r)/W)}function $(e){var i=e.getTime(),r=new Date(i);return r.setMonth(e.getMonth()+1),Math.round((r.getTime()-i)/W)}function me(e){var i=e.getTime(),r=new Date(i);return r.setFullYear(e.getFullYear()+1),Math.round((r.getTime()-i)/W)}function z(e,i){if(i=i instanceof Date||i!==null&&isFinite(i)?new Date(+i):new Date,!e)return i;var r=+e.value||0;return r?(i.setTime(i.getTime()+r),i):(r=+e.milliseconds||0,r&&i.setMilliseconds(i.getMilliseconds()+r),r=+e.seconds||0,r&&i.setSeconds(i.getSeconds()+r),r=+e.minutes||0,r&&i.setMinutes(i.getMinutes()+r),r=+e.hours||0,r&&i.setHours(i.getHours()+r),r=+e.weeks||0,r&&(r*=S),r+=+e.days||0,r&&i.setDate(i.getDate()+r),r=+e.months||0,r&&i.setMonth(i.getMonth()+r),r=+e.millennia||0,r&&(r*=T),r+=+e.centuries||0,r&&(r*=F),r+=+e.decades||0,r&&(r*=x),r+=+e.years||0,r&&i.setFullYear(i.getFullYear()+r),i)}var te=0,we=1,ve=2,be=3,ye=4,Se=5,Ee=6,ge=7,ke=8,_e=9,ne=10,q,B,P,Y,U,E,K;function Ne(e,i){return K(e)+(e===1?q[i]:B[i])}var V;function D(){}D.prototype.toString=function(e){var i=V(this),r=i.length;if(!r)return e?""+e:U;if(r===1)return i[0];var h=P+i.pop();return i.join(Y)+h},D.prototype.toHTML=function(e,i){e=e||"span";var r=V(this),h=r.length;if(!h)return i=i||U,i&&"<"+e+">"+i+"</"+e+">";for(var d=0;d<h;d++)r[d]="<"+e+">"+r[d]+"</"+e+">";if(h===1)return r[0];var k=P+r.pop();return r.join(Y)+k},D.prototype.addTo=function(e){return z(this,e)},V=function(e){var i=[],r=e.millennia;return r&&i.push(E(r,ne)),r=e.centuries,r&&i.push(E(r,_e)),r=e.decades,r&&i.push(E(r,ke)),r=e.years,r&&i.push(E(r,ge)),r=e.months,r&&i.push(E(r,Ee)),r=e.weeks,r&&i.push(E(r,Se)),r=e.days,r&&i.push(E(r,ye)),r=e.hours,r&&i.push(E(r,be)),r=e.minutes,r&&i.push(E(r,ve)),r=e.seconds,r&&i.push(E(r,we)),r=e.milliseconds,r&&i.push(E(r,te)),i};function Le(e,i){switch(i){case"seconds":if(e.seconds!==y||isNaN(e.minutes))return;e.minutes++,e.seconds=0;case"minutes":if(e.minutes!==g||isNaN(e.hours))return;e.hours++,e.minutes=0;case"hours":if(e.hours!==N||isNaN(e.days))return;e.days++,e.hours=0;case"days":if(e.days!==S||isNaN(e.weeks))return;e.weeks++,e.days=0;case"weeks":if(e.weeks!==$(e.refMonth)/S||isNaN(e.months))return;e.months++,e.weeks=0;case"months":if(e.months!==C||isNaN(e.years))return;e.years++,e.months=0;case"years":if(e.years!==x||isNaN(e.decades))return;e.decades++,e.years=0;case"decades":if(e.decades!==F||isNaN(e.centuries))return;e.centuries++,e.decades=0;case"centuries":if(e.centuries!==T||isNaN(e.millennia))return;e.millennia++,e.centuries=0}}function M(e,i,r,h,d,k){return e[r]>=0&&(i+=e[r],delete e[r]),i/=d,i+1<=1?0:e[h]>=0?(e[h]=+(e[h]+i).toFixed(k),Le(e,h),0):i}function Me(e,i){var r=M(e,0,"milliseconds","seconds",b,i);if(r&&(r=M(e,r,"seconds","minutes",y,i),!!r&&(r=M(e,r,"minutes","hours",g,i),!!r&&(r=M(e,r,"hours","days",N,i),!!r&&(r=M(e,r,"days","weeks",S,i),!!r&&(r=M(e,r,"weeks","months",$(e.refMonth)/S,i),!!r&&(r=M(e,r,"months","years",me(e.refMonth)/$(e.refMonth),i),!!r&&(r=M(e,r,"years","decades",x,i),!!r&&(r=M(e,r,"decades","centuries",F,i),!!r&&(r=M(e,r,"centuries","millennia",T,i),r))))))))))throw new Error("Fractional unit overflow")}function Ae(e){var i;for(e.milliseconds<0?(i=O(-e.milliseconds/b),e.seconds-=i,e.milliseconds+=i*b):e.milliseconds>=b&&(e.seconds+=L(e.milliseconds/b),e.milliseconds%=b),e.seconds<0?(i=O(-e.seconds/y),e.minutes-=i,e.seconds+=i*y):e.seconds>=y&&(e.minutes+=L(e.seconds/y),e.seconds%=y),e.minutes<0?(i=O(-e.minutes/g),e.hours-=i,e.minutes+=i*g):e.minutes>=g&&(e.hours+=L(e.minutes/g),e.minutes%=g),e.hours<0?(i=O(-e.hours/N),e.days-=i,e.hours+=i*N):e.hours>=N&&(e.days+=L(e.hours/N),e.hours%=N);e.days<0;)e.months--,e.days+=ee(e.refMonth,1);e.days>=S&&(e.weeks+=L(e.days/S),e.days%=S),e.months<0?(i=O(-e.months/C),e.years-=i,e.months+=i*C):e.months>=C&&(e.years+=L(e.months/C),e.months%=C),e.years>=x&&(e.decades+=L(e.years/x),e.years%=x,e.decades>=F&&(e.centuries+=L(e.decades/F),e.decades%=F,e.centuries>=T&&(e.millennia+=L(e.centuries/T),e.centuries%=T)))}function Ce(e,i,r,h){var d=0;!(i&w)||d>=r?(e.centuries+=e.millennia*T,delete e.millennia):e.millennia&&d++,!(i&p)||d>=r?(e.decades+=e.centuries*F,delete e.centuries):e.centuries&&d++,!(i&f)||d>=r?(e.years+=e.decades*x,delete e.decades):e.decades&&d++,!(i&l)||d>=r?(e.months+=e.years*C,delete e.years):e.years&&d++,!(i&c)||d>=r?(e.months&&(e.days+=ee(e.refMonth,e.months)),delete e.months,e.days>=S&&(e.weeks+=L(e.days/S),e.days%=S)):e.months&&d++,!(i&a)||d>=r?(e.days+=e.weeks*S,delete e.weeks):e.weeks&&d++,!(i&o)||d>=r?(e.hours+=e.days*N,delete e.days):e.days&&d++,!(i&s)||d>=r?(e.minutes+=e.hours*g,delete e.hours):e.hours&&d++,!(i&n)||d>=r?(e.seconds+=e.minutes*y,delete e.minutes):e.minutes&&d++,!(i&t)||d>=r?(e.milliseconds+=e.seconds*b,delete e.seconds):e.seconds&&d++,(!(i&u)||d>=r)&&Me(e,h)}function re(e,i,r,h,d,k){var A=new Date;if(e.start=i=i||A,e.end=r=r||A,e.units=h,e.value=r.getTime()-i.getTime(),e.value<0){var H=r;r=i,i=H}e.refMonth=new Date(i.getFullYear(),i.getMonth(),15,12,0,0);try{e.millennia=0,e.centuries=0,e.decades=0,e.years=r.getFullYear()-i.getFullYear(),e.months=r.getMonth()-i.getMonth(),e.weeks=0,e.days=r.getDate()-i.getDate(),e.hours=r.getHours()-i.getHours(),e.minutes=r.getMinutes()-i.getMinutes(),e.seconds=r.getSeconds()-i.getSeconds(),e.milliseconds=r.getMilliseconds()-i.getMilliseconds(),Ae(e),Ce(e,h,d,k)}finally{delete e.refMonth}return e}function xe(e){return e&u?b/30:e&t?b:e&n?b*y:e&s?b*y*g:e&o?b*y*g*N:b*y*g*N*S}function m(e,i,r,h,d){var k;r=+r||Z,h=h>0?h:NaN,d=d>0?d<20?Math.round(d):20:0;var A=null;typeof e=="function"?(k=e,e=null):e instanceof Date||(e!==null&&isFinite(e)?e=new Date(+e):(typeof A=="object"&&(A=e),e=null));var H=null;if(typeof i=="function"?(k=i,i=null):i instanceof Date||(i!==null&&isFinite(i)?i=new Date(+i):(typeof i=="object"&&(H=i),i=null)),A&&(e=z(A,i)),H&&(i=z(H,e)),!e&&!i)return new D;if(!k)return re(new D,e,i,r,h,d);var Te=xe(r),se,oe=function(){k(re(new D,e,i,r,h,d),se)};return oe(),se=setInterval(oe,Te)}m.MILLISECONDS=u,m.SECONDS=t,m.MINUTES=n,m.HOURS=s,m.DAYS=o,m.WEEKS=a,m.MONTHS=c,m.YEARS=l,m.DECADES=f,m.CENTURIES=p,m.MILLENNIA=w,m.DEFAULTS=Z,m.ALL=w|p|f|l|c|a|o|s|n|t|u;var Fe=m.setFormat=function(e){if(e){if("singular"in e||"plural"in e){var i=e.singular||[];i.split&&(i=i.split("|"));var r=e.plural||[];r.split&&(r=r.split("|"));for(var h=te;h<=ne;h++)q[h]=i[h]||q[h],B[h]=r[h]||B[h]}typeof e.last=="string"&&(P=e.last),typeof e.delim=="string"&&(Y=e.delim),typeof e.empty=="string"&&(U=e.empty),typeof e.formatNumber=="function"&&(K=e.formatNumber),typeof e.formatter=="function"&&(E=e.formatter)}},ie=m.resetFormat=function(){q=" millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split("|"),B=" milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split("|"),P=" and ",Y=", ",U="",K=function(e){return e},E=Ne};return m.setLabels=function(e,i,r,h,d,k,A){Fe({singular:e,plural:i,last:r,delim:h,empty:d,formatNumber:k,formatter:A})},m.resetLabels=ie,ie(),typeof module<"u"&&module.exports?module.exports=m:typeof window<"u"&&typeof window.define=="function"&&typeof window.define.amd<"u"&&window.define("countdown",[],function(){return m}),m}();class nt{constructor(){v(this,"instances");this.instances=new Object}getInstance(t){return this.instances[t]}defineInstance(t,n){this.instances[t]=n}}function rt(u,t,n,s){const o={};return Object.keys(u).forEach(a=>{a===t&&(o[n]=s),o[a]=u[a]}),o}function it(u,t,n,s){const o={};return Object.keys(u).forEach(a=>{o[a]=u[a],a===t&&(o[n]=s)}),o[n]||(o[n]=s),o}function st(u){this.popup.params.resolve!==void 0&&this.popup.params.reject&&(u!==!1?this.popup.params.resolve(u):this.popup.params.reject(u)),this.popup.close()}function ot(){this.popup!==void 0&&nsHotPress.create("popup-esc").whenPressed("escape",u=>{u.preventDefault();const t=parseInt(this.$el.parentElement.getAttribute("data-index"));document.querySelector(`.is-popup [data-index="${t+1}]`)===null&&(this.popup.params&&this.popup.params.reject!==void 0&&this.popup.params.reject(!1),this.popup.close(),nsHotPress.destroy("popup-esc"))})}_.setFormat({singular:` ${I("millisecond| second| minute| hour| day| week| month| year| decade| century| millennium")}`,plural:` ${I("milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia")}`,last:` ${I("and")} `,delim:", ",empty:""});const at=function(u){const t=Q(ns.date.current,"YYYY-MM-DD HH:mm:ss"),n=Q(u),s=t.isBefore(n)?"after":"before",o=Math.abs(t.diff(n,"months"))>0,a=Math.abs(t.diff(n,"days"))>0,c=Math.abs(t.diff(n,"hours"))>0,l=Math.abs(t.diff(n,"minutes"))>0,f=Math.abs(t.diff(n,"seconds"))>0;let p;o?p=_.MONTHS:a?p=_.DAYS:c?p=_.HOURS:l?p=_.MINUTES:f?p=_.SECONDS:p=_.MONTHS|_.DAYS|_.HOURS|_.MINUTES;const w=_(t.toDate(),n.toDate(),p,void 0,void 0);return(s==="before"?I("{date} ago"):I("In {date}")).replace("{date}",w.toString())},ct=u=>{var t=u;if(u>=1e3){for(var n=["","k","m","b","t"],s=Math.floor((""+u).length/3),o,a=2;a>=1;a--){o=parseFloat((s!=0?u/Math.pow(1e3,s):u).toPrecision(a));var c=(o+"").replace(/[^a-zA-Z 0-9]+/g,"");if(c.length<=2)break}o%1!=0&&(o=o.toFixed(1)),t=o+n[s]}return t},ut=(u,t)=>u?(u=u.toString(),u.length>t?u.substring(0,t)+"...":u):"";class R{static compute(t,n,s){switch(t){case"inclusive":return R.computeInclusive(n,s);case"exclusive":return R.computeExclusive(n,s)}}static computeInclusive(t,n){return j(j(t).divide(j(n).add(100).done()).done()).multiply(100).done()}static computeExclusive(t,n){return j(t).divide(100).multiply(j(n).add(100).done()).done()}static getTaxValue(t,n,s){switch(t){case"inclusive":return n-R.compute(t,n,s);case"exclusive":return R.compute(t,n,s)-n}return 0}}window._=Ie;window.ChartJS=ce;window.Pusher=He;window.createApp=ue;window.moment=Q;window.Axios=ae;window.__=I;window.__m=ze;window.SnackBar=pe;window.FloatingNotice=de;window.nsHooks=Je();window.popupResolver=st,window.popupCloser=ot,window.countdown=_;window.timespan=at;window.Axios.defaults.headers.common["x-requested-with"]="XMLHttpRequest";window.Axios.defaults.withCredentials=!0;ns.websocket.enabled&&(window.Echo=new Oe({broadcaster:"pusher",key:ns.websocket.key,wsHost:ns.websocket.host,wsPort:ns.websocket.port,wssPort:ns.websocket.port,namespace:"",forceTLS:ns.websocket.secured,disableStats:!0,encrypted:ns.websocket.secured,enabledTransports:ns.websocket.secured?["ws","wss"]:["ws"],disabledTransports:ns.websocket.secured?["sockjs","xhr_polling","xhr_streaming"]:[]}));const lt=new le,fe=new Xe,dt=new pe,pt=new de,ft=new tt,ht=new nt,Kt=window.nsHooks,he=new class{constructor(){v(this,"breakpoint");this.breakpoint="",this.detectScreenSizes(),Ye(window,"resize").subscribe(u=>this.detectScreenSizes())}detectScreenSizes(){switch(!0){case(window.outerWidth>0&&window.outerWidth<=480):this.breakpoint="xs";break;case(window.outerWidth>480&&window.outerWidth<=640):this.breakpoint="sm";break;case(window.outerWidth>640&&window.outerWidth<=1024):this.breakpoint="md";break;case(window.outerWidth>1024&&window.outerWidth<=1280):this.breakpoint="lg";break;case window.outerWidth>1280:this.breakpoint="xl";break}}},mt=new Ze({sidebar:["xs","sm","md"].includes(he.breakpoint)?"hidden":"visible"});fe.defineClient(ae);window.nsEvent=lt;window.nsHttpClient=fe;window.nsSnackBar=dt;window.nsNotice=pt;window.nsState=mt;window.nsUrl=ft;window.nsScreen=he;window.ChartJS=ce;window.EventEmitter=le;window.Popup=X;window.RxJS=Ue;window.FormValidation=et;window.nsCrudHandler=ht;window.defineComponent=Qe;window.defineAsyncComponent=Ge;window.markRaw=We;window.shallowRef=G;window.createApp=ue;window.ns.insertAfterKey=it;window.ns.insertBeforeKey=rt;window.nsCurrency=Ke;window.nsAbbreviate=ct;window.nsRawCurrency=Ve;window.nsTruncate=ut;window.nsTax=R;console.log("bootstrap");export{et as F,X as P,R as T,fe as a,dt as b,pt as c,lt as d,ot as e,ut as f,Kt as n,st as p,at as t};
