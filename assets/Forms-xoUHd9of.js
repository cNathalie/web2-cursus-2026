import{j as e}from"./index-BbjdRKSI.js";function l(s){const n={a:"a",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Met JavaScript kan je formulieren manipuleren. Je kan formulieren opvragen, aanpassen en controleren. In de volgende voorbeelden gaan we de inhoud van formulieren opvragen en aanpassen."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"het-input-veld",children:["Het ",e.jsx(n.code,{children:"<input>"})," veld",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#het-input-veld",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"<input>"})," element is een van de meest gebruikte elementen in een formulier. Het element kan verschillende types hebben zoals ",e.jsx(n.code,{children:"text"}),", ",e.jsx(n.code,{children:"password"}),", ",e.jsx(n.code,{children:"email"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"checkbox"}),", ",e.jsx(n.code,{children:"radio"}),", ",e.jsx(n.code,{children:"submit"}),", ",e.jsx(n.code,{children:"reset"}),", ",e.jsx(n.code,{children:"button"}),", etc."]}),`
`,e.jsxs(n.p,{children:["Om de waarde van een ",e.jsx(n.code,{children:"<input>"})," element op te vragen, kan je de ",e.jsx(n.code,{children:"value"})," property gebruiken."]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["De waarde is altijd van het type ",e.jsx(n.code,{children:"string"})]}),". Als je een nummer verwacht, moet je de waarde nog omzetten naar een nummer!"]}),`
`,e.jsxs(n.p,{children:["Je kan de waarde ook aanpassen door de ",e.jsx(n.code,{children:"value"})," property te wijzigen met de assignment operator =."]}),`
`,e.jsxs(n.h4,{id:"voorbeeld",children:["Voorbeeld",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#voorbeeld",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["In dit voorbeeld gaan we de waarde van een ",e.jsx(n.code,{children:"<input>"})," element opvragen en aanpassen."]}),`
`,e.jsxs("div",{className:"inline-dynamic-example",children:[e.jsx("label",{htmlFor:"input-field",children:"Text input:"}),e.jsx("br",{}),e.jsx("input",{type:"text",id:"input-field",defaultValue:"",placeholder:"Vul hier iets in"})]}),`
`,e.jsx(n.p,{children:"En in JavaScript:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal het input element op uit de DOM-tree"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," inputField = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"input-field"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Log de value in de console"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(inputField.",e.jsx(n.span,{className:"hljs-property",children:"value"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Verander de waarde van het input veld"}),`\r
inputField.`,e.jsx(n.span,{className:"hljs-property",children:"value"})," = ",e.jsx(n.span,{className:"hljs-string",children:'"Hello World"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Log de nieuwe waarde in de console"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(inputField.",e.jsx(n.span,{className:"hljs-property",children:"value"}),`);
`]})}),`
`,e.jsxs(n.h2,{id:"opgelet",children:["Opgelet",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opgelet",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Gebruik nooit ",e.jsx(n.code,{children:"textContent"})," of ",e.jsx(n.code,{children:"innerHTML"}),` bij <input>, tenzij je bv. de tekst in een button wil veranderen of opvragen.\r
Denk aan altijd na over volgende zaken:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Veiligheid"})}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"innerHTML"})," kan kwetsbaar zijn voor cross-site scripting (XSS) aanvallen, omdat het HTML-code als tekst invoegt. Dit kan leiden tot beveiligingsproblemen als de invoer niet goed wordt gevalideerd."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Compatibiliteit"})}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"textContent"})," en ",e.jsx(n.code,{children:"innerHTML"})," werken niet consistent met <input>-elementen in alle browsers. De value-eigenschap is daarentegen specifiek ontworpen voor <input>-elementen en werkt betrouwbaar."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Functionaliteit"})}),`
`]}),`
`,e.jsxs(n.p,{children:["De value-eigenschap is bedoeld om de waarde van een invoerveld te lezen of te wijzigen. Het gebruik van ",e.jsx(n.code,{children:"textContent"})," of ",e.jsx(n.code,{children:"innerHTML"}),` kan leiden tot onverwacht gedrag, omdat deze methoden niet zijn ontworpen voor invoervelden.\r
Als je bijvoorbeeld de tekst in een knop wilt veranderen, kun je `,e.jsx(n.code,{children:"textContent"})," gebruiken omdat knoppen geen invoervelden zijn:"]}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsx("button",{id:"button",children:"Ik ben een knop"})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Verander de tekst in de knop"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"button"'}),").",e.jsx(n.span,{className:"hljs-property",children:"textContent"}),` =\r
  `,e.jsx(n.span,{className:"hljs-string",children:'"Ik ben een knop met een nieuwe tekst"'}),`;
`]})})]})}function a(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{a as default};
