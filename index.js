(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(function(){const i=document.querySelector(".menu-button"),n=document.querySelector(".menu-close"),r=document.querySelectorAll(".menu-link"),c=document.querySelector(".menu-overlay"),e=document.querySelectorAll(".application-button"),t=document.querySelector("#contact-us");function o(){c.classList.toggle("is-shown")}i&&i.addEventListener("click",o),n&&n.addEventListener("click",o),r&&r.forEach(s=>{s.addEventListener("click",o)}),e&&e.forEach(s=>{s.addEventListener("click",()=>{history.pushState(null,"","#contact-us"),t.scrollIntoView({behavior:"smooth"})})})})();application-button;
//# sourceMappingURL=index.js.map
