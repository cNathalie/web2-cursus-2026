import{j as e}from"./index-DoM-sG5C.js";function a(s){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:`Event Bubbling is een\r
mechanisme waarbij een event dat plaatsvindt op een element, ook\r
plaatsvindt op alle bovenliggende elementen van dat element. Stel dat je een knop\r
hebt binnen een div. Wanneer je op de knop klikt, zal het click event ook\r
plaatsvinden op de div. Voer onderstaande code uit in de console en klik\r
op de blauwe knop.`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal de rode Event bubbling card op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," ancestor = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"ancestor"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Haal de paarse div op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," parent = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"parent"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Haal de blauwe knop op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," child = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"child"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg een event listener toe aan de card (ancestor)"}),`\r
ancestor.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Ancestor clicked"'}),`);\r
});\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg event listener toe aan de div (parent)"}),`\r
parent.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Parent clicked"'}),`);\r
}); `,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg event listener toe aan de knop (child)"}),`\r
child.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Child clicked"'}),`);\r
});
`]})}),`
`,e.jsxs("div",{id:"ancestor",className:"inline-dynamic-example",style:{backgroundColor:"red"},children:[e.jsx("h3",{children:"Ancestor"}),e.jsxs("div",{id:"parent",className:"inline-dynamic-example",style:{backgroundColor:"green"},children:[e.jsx("h3",{children:"Parent"}),e.jsx("button",{id:"child",className:"inline-dynamic-example",style:{backgroundColor:"blue"},children:e.jsx(n.p,{children:"Child"})})]})]}),`
`,e.jsxs(n.p,{children:[`Je merkt dat zowel 'Ancestor clicked', 'Parent clicked' als 'Child clicked' in de console\r
worden gelogd. Dit is omdat het click event op de knop blijft omhoog\r
gegooid worden. Elke ancestor van de knop, waar een click-event listener\r
opstaat, zal ook activeren en uitgevoerd worden. Dit kan handig zijn, maar\r
soms wil je niet dat het event verder gaat naar de parent elementen. Dit\r
is waar `,e.jsx(n.code,{children:"event.stopPropagation()"})," van pas komt."]}),`
`,e.jsxs(n.h2,{id:"eventstoppropagation",children:[e.jsx(n.code,{children:"event.stopPropagation()"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eventstoppropagation",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:[`Wanneer je in een event listener functie gebruik maakt van\r
`,e.jsx(n.code,{children:"event.preventDefault()"}),` dan zal je merken dat het event niet voorbij dat\r
element wordt opgegooid. Clear je console en voer onderstaande code uit in\r
de console en klik nogmaals op de knop in het blauwe kader.`]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal de rode Event bubbling card op const ancestor ="}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," ancestor2 = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"ancestor"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Haal de paarse div op const parent"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," parent2 = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"parent"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Haal de blauwe knop op const child"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," child2 = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"child"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg een event listener toe aan de ancestor"}),`\r
ancestor2.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Ancestor clicked"'}),`);\r
});\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg event listener toe aan de div"}),`\r
parent2.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Parent clicked"'}),`);\r
});\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg event listener toe aan de knop (child)"}),`\r
child2.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// Voorkom dat het event verder gaat naar de bovenliggende elementen"}),`\r
  event.`,e.jsx(n.span,{className:"hljs-title function_",children:"stopPropagation"}),`();\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Child clicked"'}),`);\r
});
`]})}),`
`,e.jsx(n.p,{children:`Deze keer wordt enkel 'Child clicked' in de console\r
gelogd. Het event wordt gestopt bij de knop en gaat niet verder naar de\r
parent elementen.`})]})}function c(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{c as default};
