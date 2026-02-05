import{j as e}from"./index-3BjEGx3K.js";function a(s){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Soms wil je data bijhouden gedurende de sessie van een gebruiker."}),`
`,e.jsxs(n.h2,{id:"wat-is-session-storage",children:["Wat is Session Storage",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wat-is-session-storage",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Session Storage is een manier om gegevens\r
in de browser op te slaan. De gegevens blijven\r
bewaard zolang de sessie van de gebruiker actief is. Dit betekend dat\r
als de gebruiker het tabblad herlaadt, de gegvens nog steeds\r
beschikbaar zullen zijn. Maar als de browser of het tablad wordt gesloten,\r
worden de gegevens verwijderd. Het biedt een eenvoudige API voor het\r
opslaan en ophalen van gegevens. Session Storage is handig voor het\r
opslaan van gegevens die niet nodig zijn na het sluiten van de\r
browser.`}),`
`,e.jsxs(n.h2,{id:"session-storage-bekijken",children:["Session Storage bekijken",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#session-storage-bekijken",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Je kan Session Storage opnieuw terugvinden in je Developer Tools onder\r
het tabblad Application.`}),`
`,e.jsxs(n.h2,{id:"session-storage-gebruiken",children:["Session Storage gebruiken",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#session-storage-gebruiken",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Session Storage is net als Local Storage een object dat je kan\r
gebruiken om data op te slaan. Het verschil is dat de data in Session\r
Storage enkel bewaard blijft zolang de sessie van de gebruiker actief\r
is. Als de browser wordt gesloten, worden de gegevens verwijderd.`}),`
`,e.jsx(n.p,{children:`Hieronder zie je een voorbeeld van hoe je Session Storage kan\r
gebruiken. In dit voorbeeld wordt de waarde van de variabele\r
name opgeslagen in Session Storage. Als de gebruiker de\r
pagina herlaadt, zal de waarde van name nog steeds\r
beschikbaar zijn.`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Data opslaan in Session Storage"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"sessionStorage"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"setItem"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"name"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"John"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Data ophalen uit Session Storage"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"var"})," name = ",e.jsx(n.span,{className:"hljs-variable language_",children:"sessionStorage"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getItem"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"name"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Date verwijderen uit Session Storage"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"sessionStorage"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"removeItem"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"name"'}),`);
`]})})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{i as default};
