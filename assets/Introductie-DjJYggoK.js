import{j as n,r as a}from"./index-3BjEGx3K.js";const o="/web2-cursus-2026/images/fireworks.gif";function c(){let e=25;const t=document.getElementById("timer"),r=document.getElementById("fireworks"),s=setInterval(function(){e--,t.textContent=e,e<=0&&(clearInterval(s),t.classList.add("hidden"),r.classList.remove("hidden"))},1e3)}function i(e){const t={p:"p",...e.components};return n.jsxs(n.Fragment,{children:[(a.useEffect(()=>{const r=c();return()=>r?.()},[]),null),`
`,n.jsx(t.p,{children:`Timers zijn een belangrijk onderdeel van JavaScript. Ze stellen ons in\r
staat om code uit te voeren op een later tijdstip. Dit kan handig zijn\r
wanneer we bijvoorbeeld een animatie willen starten na een bepaalde\r
tijd, of wanneer we een bepaalde actie pas willen uitvoeren na een\r
gebruikersinteractie.`}),`
`,n.jsxs("div",{className:"inline-dynamic-example",children:[n.jsx("h1",{id:"timer",children:"25"}),n.jsx("img",{id:"fireworks",className:"hidden",src:o,alt:"Fireworks"})]})]})}function d(e={}){const{wrapper:t}=e.components||{};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{d as default};
