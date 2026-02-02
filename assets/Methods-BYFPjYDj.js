import{j as e}from"./index-DEXPSZA7.js";function a(s){const n={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Een event zet hier wat dingen in gang, maar je kan ook enkele methodes aanroepen om de standaard actie van een event te voorkomen of te stoppen. Deze zijn de twee meest gebruikte methodes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event.preventDefault()"}),": voorkomt de standaard actie van een event. Bijvoorbeeld, als je een formulier verstuurt, zal de pagina herladen. Met ",e.jsx(n.code,{children:"preventDefault()"})," kan je dit voorkomen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event.stopPropagation()"}),": stopt de event bubbling. Dit betekent dat het event niet verder zal gaan naar de parent elementen."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"eventpreventdefault",children:[e.jsx(n.code,{children:"event.preventDefault()"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eventpreventdefault",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"event.preventDefault()"})," is een methode die wordt gebruikt om de standaard actie van een event te voorkomen. Dit kan handig zijn als je bepaalde acties wil uitvoeren voordat de standaard actie plaatsvindt."]}),`
`,e.jsxs(n.p,{children:["Het grootste voorbeeld hiervan is het submitten van een formulier. Wanneer je op een submit knop klikt, wordt de ingevoerde data naar de server gestuurd en wordt de pagina herladen. Als je bijvoorbeeld eerst de data wil valideren, kan je ",e.jsx(n.code,{children:"event.preventDefault()"})," gebruiken om de standaard actie te voorkomen."]}),`
`,e.jsx(n.p,{children:"Vul het onderstaande formulier in en klik op submit."}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsxs("form",{id:"form",className:"centered",children:[e.jsx("input",{type:"text",placeholder:"Naam"}),e.jsx("br",{}),e.jsx("input",{type:"number",placeholder:"Leeftijd"}),e.jsx("br",{}),e.jsx("button",{type:"submit",children:"Verstuur"})]})}),`
`,e.jsx(n.p,{children:"De pagina herlaadt en je gegevens zijn verdwenen. Dit is de standaard actie van een formulier."}),`
`,e.jsx(n.p,{children:"Voer nu eerst de volgende code uit in de console en vul daarna het formulier in en klik op submit."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal het formulier op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," form = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'form'"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg een event listener toe"}),`\r
form.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'submit'"}),", ",e.jsxs(n.span,{className:"hljs-function",children:["(",e.jsx(n.span,{className:"hljs-params",children:"event"}),") =>"]}),` {\r
\r
    `,e.jsx(n.span,{className:"hljs-comment",children:"// Voorkom de standaard actie"}),`\r
    event.`,e.jsx(n.span,{className:"hljs-title function_",children:"preventDefault"}),`();\r
\r
    `,e.jsx(n.span,{className:"hljs-comment",children:"// Controleer of de velden zijn ingevuld"}),`\r
    `,e.jsx(n.span,{className:"hljs-keyword",children:"if"})," (form[",e.jsx(n.span,{className:"hljs-number",children:"0"}),"].",e.jsx(n.span,{className:"hljs-property",children:"value"})," === ",e.jsx(n.span,{className:"hljs-string",children:"''"})," || form[",e.jsx(n.span,{className:"hljs-number",children:"1"}),"].",e.jsx(n.span,{className:"hljs-property",children:"value"})," === ",e.jsx(n.span,{className:"hljs-string",children:"''"}),`) {\r
        `,e.jsx(n.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'Gelieve alle velden in te vullen'"}),`);\r
        `,e.jsx(n.span,{className:"hljs-keyword",children:"return"}),`;\r
    }\r
\r
    `,e.jsx(n.span,{className:"hljs-comment",children:"// Voer je eigen acties uit"}),`\r
    `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'Naam: '"}),", form[",e.jsx(n.span,{className:"hljs-number",children:"0"}),"].",e.jsx(n.span,{className:"hljs-property",children:"value"}),`);\r
    `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'Leeftijd: '"}),", form[",e.jsx(n.span,{className:"hljs-number",children:"1"}),"].",e.jsx(n.span,{className:"hljs-property",children:"value"}),`);\r
});
`]})})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{r as default};
