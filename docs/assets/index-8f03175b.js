(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l=(o,t)=>{let n=u(o,t)&&a(o,t);return n&&(t.style.display="none",t.innerHTML=""),n},u=(o,t)=>isNaN(o)?(t.style.display="block",t.innerHTML="Ingrese solo números",!1):!0,a=(o,t)=>Number(o)<=0?(t.style.display="block",t.innerHTML="Ingrese solo números positivos y mayores que 0",!1):!0,d=new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP",minimumFractionDigits:2}),f=(o,t)=>{let n=0,s;return t.forEach(e=>{e.checked&&(s=e.value)}),s==="withIva"?n=o*1.19:n=o/1.19,d.format(n.toFixed(2))},m=document.getElementsByName("operation"),c=document.getElementById("amount"),y=document.getElementById("message"),p=document.getElementById("result");document.getElementById("btnGetPrice");btnGetPrice.addEventListener("click",()=>{l(c.value,y)&&(p.innerText=f(c.value,m))});
