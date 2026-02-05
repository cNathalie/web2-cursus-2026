import{j as e}from"./index-3BjEGx3K.js";function a(s){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Wil je deze Cookies aanvaarden?"}),`
`,e.jsxs(n.h2,{id:"wat-zijn-cookies",children:["Wat zijn Cookies?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wat-zijn-cookies",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Cookies zijn kleine tekstbestanden die door websites worden gebruikt\r
om de gebruikerservaring te verbeteren. Ze worden opgeslagen in de\r
browser van de gebruiker. De inhoud bestaat opnieuw uit key-value\r
paren. Ze worden met elke http(s) request naar de server gestuurd.`}),`
`,e.jsx(n.p,{children:`Ze zijn dus voornamelijk bedoeld om aan de client kant (jouw browser)\r
data bij te houden die gebruikt wordt aan de server kant.`}),`
`,e.jsx(n.p,{children:`Een belangrijk voorbeeld hievan is het bijhouden van een sessionId.\r
Dit is dan een unieke identifier om data van de gebruiker zijn sessie\r
aan de serverkant terug te vinden.`}),`
`,e.jsx(n.p,{children:`Cookies worden gedeeld tussen verschillende tabs en vensters van\r
dezelfde browser.`}),`
`,e.jsxs(n.h2,{id:"cookies-aanvaarden",children:["Cookies aanvaarden",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cookies-aanvaarden",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Cookies kunnen worden aanvaard of geweigerd. Als je cookies aanvaardt,\r
worden ze opgeslagen in je browser en worden ze gebruikt om je\r
gebruikerservaring te verbeteren. Als je cookies weigert, worden ze\r
niet opgeslagen en kan dit de functionaliteit van de website\r
beïnvloeden.`}),`
`,e.jsxs(n.h2,{id:"cookies-bekijken",children:["Cookies bekijken",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cookies-bekijken",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Je kan de cookies van een website bekijken in de Developer Tools van\r
je browser. Ga naar de Application tab en klik op Cookies in het menu\r
aan de linkerkant. Hier kan je de cookies zien die door de website\r
worden gebruikt.`}),`
`,e.jsxs(n.h2,{id:"cookies-gebruiken",children:["Cookies gebruiken",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cookies-gebruiken",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Om cookies te gebruiken, kun je de\r
document.cookie eigenschap gebruiken. Deze eigenschap\r
bevat alle cookies die door de website worden gebruikt. Je kunt\r
cookies instellen, ophalen en verwijderen met behulp van deze\r
eigenschap.`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Cookies instellen "}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-property",children:"cookie"})," = ",e.jsx(n.span,{className:"hljs-string",children:'"name=John Doe"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Cookies ophalen"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-property",children:"cookie"}),`);
`]})}),`
`,e.jsx(n.p,{children:`Wanneer je cookies aanmaakt zonder "vervaldatum", dan zal de cookie\r
verwijdert worden wanneer de sessie afgesloten wordt.`}),`
`,e.jsx(n.p,{children:`Er zijn ook permanente cookies, deze worden aangemaakt met een\r
vervaldatum/tijd en zullen op dat ogenblik verwijdert worden. Wanneer\r
een cookie geldig is voor een week, dan wordt die opgeslagen door je\r
browser en steeds opnieuw gebruikt tot die vervalt. Het afsluiten van\r
de browser heeft hier dus geen effect op.`}),`
`,e.jsx(n.p,{children:"Een cookie met vervaldatum aanmaken:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Cookie met vervaldatum aanmaken"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-property",children:"cookie"})," = ",e.jsx(n.span,{className:"hljs-string",children:'"Cursus=Web2-Avond; expires=Thu, 05 Jun 2025 12:00:00 UTC"'}),`;
`]})})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{i as default};
