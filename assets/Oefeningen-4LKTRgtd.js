import{j as e,r as u}from"./index-3BjEGx3K.js";const c="/web2-cursus-2026/".replace(/\/?$/,"/"),r=t=>console.log(`Status: ${t.status} ${t.statusText} | ok=${t.ok}`),a=t=>console.error("Network error:",t);function p(){const t=document.querySelector("[data-id=link1]"),n=document.querySelector("[data-id=link2]"),s=document.querySelector("[data-id=link3]"),i=document.querySelector("[data-id=link4]");if(!t||!n||!s||!i)return()=>{};const o=()=>fetch(`${c}simulate200`).then(r).catch(a),l=()=>fetch(`${c}simulate404`).then(r).catch(a),d=()=>fetch(`${c}simulate500`).then(r).catch(a),k=()=>fetch(`${c}simulate401`).then(r).catch(a);return t.addEventListener("click",o),t.classList.add("fakeLink"),n.addEventListener("click",l),n.classList.add("fakeLink"),s.addEventListener("click",d),s.classList.add("fakeLink"),i.addEventListener("click",k),i.classList.add("fakeLink"),()=>{t.removeEventListener("click",o),n.removeEventListener("click",l),s.removeEventListener("click",d),i.removeEventListener("click",k)}}function h(t){const n={a:"a",h1:"h1",li:"li",p:"p",span:"span",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[(u.useEffect(()=>{const s=p();return()=>s?.()},[]),null),`
`,e.jsxs(n.h1,{id:"opdracht-1-status-codes",children:["Opdracht 1: Status Codes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opdracht-1-status-codes",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Op deze webpagina staan een aantal links, voer volgende opdracht uit voor\r
elke link:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Open de Netwerk-tab van je browser Developer Tools en klik op de link."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Klik in de Netwerk-tab op het juiste request en bekijk de Headers."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Merk op welke boodschap er meegegeven wordt bij elke response."}),`
`]}),`
`]}),`
`,e.jsxs("div",{children:[e.jsx("h2",{"data-id":"link1",children:"Link 1"}),e.jsx("h2",{"data-id":"link2",children:"Link 2"}),e.jsx("h2",{"data-id":"link3",children:"Link 3"}),e.jsx("h2",{"data-id":"link4",children:"Link 4"}),e.jsx("p",{"data-script":"https-oefeningen.js"})]})]})}function x(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(h,{...t})}):h(t)}export{x as default};
