import{j as e,r as k}from"./index-C0jUBqcl.js";const h=()=>{const s=document.querySelector("[data-id=link1]");s.addEventListener("click",()=>o()),s.classList.add("fakeLink");const t=document.querySelector("[data-id=link2]");t.addEventListener("click",()=>l()),t.classList.add("fakeLink");const i=document.querySelector("[data-id=link3]");i.addEventListener("click",()=>c()),i.classList.add("fakeLink");const r=document.querySelector("[data-id=link4]");r.addEventListener("click",()=>d()),r.classList.add("fakeLink");const o=()=>{fetch("/simulate200").then(n=>{n.ok&&console.log("Simulated 200 OK:",n.status)}).catch(n=>console.error("Error:",n))},l=()=>{fetch("/simulate404").then(n=>{n.ok||console.log("Simulated 404 error:",n.status)}).catch(n=>console.error("Error:",n))},c=()=>{fetch("/simulate500").then(n=>{n.ok||console.log("Simulated 500 error:",n.status)}).catch(n=>console.error("Error:",n))},d=()=>{fetch("/simulate401").then(n=>{n.ok||console.log("Simulated 401 error:",n.status)}).catch(n=>console.error("Error:",n))}};function a(s){const t={a:"a",h1:"h1",li:"li",p:"p",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[(k.useEffect(()=>{const i=h();return()=>i?.()},[]),null),`
`,e.jsxs(t.h1,{id:"opdracht-1-status-codes",children:["Opdracht 1: Status Codes",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opdracht-1-status-codes",children:e.jsx(t.span,{className:"icon icon-link"})})]}),`
`,e.jsx(t.p,{children:`Op deze webpagina staan een aantal links, voer volgende opdracht uit voor\r
elke link:`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Open de Netwerk-tab van je browser Developer Tools en klik op de link."}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Klik in de Netwerk-tab op het juiste request en bekijk de Headers."}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Merk op welke boodschap er meegegeven wordt bij elke response."}),`
`]}),`
`]}),`
`,e.jsxs("div",{children:[e.jsx("h2",{"data-id":"link1",children:"Link 1"}),e.jsx("h2",{"data-id":"link2",children:"Link 2"}),e.jsx("h2",{"data-id":"link3",children:"Link 3"}),e.jsx("h2",{"data-id":"link4",children:"Link 4"}),e.jsx("p",{"data-script":"https-oefeningen.js"})]})]})}function j(s={}){const{wrapper:t}=s.components||{};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{j as default};
