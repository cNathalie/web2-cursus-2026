import{j as e}from"./index-3BjEGx3K.js";function s(a){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:`Data overheen verschillende HTML pagina's opslaan kan een uitdaging\r
zijn.`}),`
`,e.jsxs(n.h2,{id:"wat-is-local-storage",children:["Wat is Local Storage",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wat-is-local-storage",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Local Storage is een manier om gegevens in de browser op te slaan. De\r
gegevens blijven bewaard, zelfs als de browser wordt gesloten. Het\r
biedt een eenvoudige API voor het opslaan en ophalen van gegevens. De\r
opslagcapaciteit is groter dan die van cookies. Local Storage is\r
handig voor het opslaan van gebruikersinstellingen en voorkeuren.`}),`
`,e.jsxs(n.h2,{id:"local-storage-bekijken",children:["Local Storage bekijken",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#local-storage-bekijken",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Je kan de Local Storage van uw browser bekijken in de Developer Tools.\r
Ga naar de Application tab en klik op Local Storage in het menu aan de\r
linkerkant. Hier kan je de gegevens zien die in Local Storage zijn\r
opgeslagen.`}),`
`,e.jsxs(n.h2,{id:"local-storage-gebruiken",children:["Local Storage gebruiken",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#local-storage-gebruiken",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Om Local Storage te gebruiken, kunt u de\r
localStorage object gebruiken. Dit object heeft\r
verschillende methoden om gegevens op te slaan en op te halen.`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Gegevens opslaan"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"localStorage"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"setItem"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'key'"}),", ",e.jsx(n.span,{className:"hljs-string",children:"'value'"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gegevens ophalen"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"let"})," value = ",e.jsx(n.span,{className:"hljs-variable language_",children:"localStorage"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getItem"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'key'"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gegevens verwijderen"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"localStorage"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"removeItem"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'key'"}),`);
`]})}),`
`,e.jsx(n.p,{children:`We slaan bijvoorbeeld op of de gebruiker voor 'dark' of 'light' mode\r
koos voor de weeergave van de website.`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Gegevens opslaan"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"localStorage"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"setItem"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'theme'"}),", ",e.jsx(n.span,{className:"hljs-string",children:"'dark'"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Bekijk nu de waarde in de Application tab van je Developer Tools."}),`\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gegevens ophalen"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"let"})," theme = ",e.jsx(n.span,{className:"hljs-variable language_",children:"localStorage"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getItem"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'theme'"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gegevens verwijderen"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"localStorage"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"removeItem"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'theme'"}),`);
`]})}),`
`,e.jsx(n.p,{children:`Wanneer je na het invoeren van de eerste lijn code, dit venster zou\r
sluiten en naar een andere pagina op deze (lokale) website gaan, dan\r
zal je zien dat ook daar dezelfde waarden in de Local Storage\r
beschikbaar zijn. Zelfs na het volledig afsluiten van de browser.`})]})}function r(a={}){const{wrapper:n}=a.components||{};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{r as default};
