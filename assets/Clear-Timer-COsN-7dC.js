import{j as e}from"./index-DEXPSZA7.js";function a(s){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h5:"h5",hr:"hr",p:"p",pre:"pre",span:"span",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Je kan de aangemaakte timers ook clearen."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"timer-id",children:["Timer-id",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#timer-id",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Wanneer we een interval aanmaken met ",e.jsx(n.code,{children:"setInterval"}),", krijgen we een unieke id terug. Hetzelfde geldt voor ",e.jsx(n.code,{children:"setTimeout"}),".",e.jsx(n.br,{}),`
`,"Deze id kunnen we gebruiken om het interval of de timeout te stoppen."]}),`
`,e.jsxs(n.p,{children:["Je kan uiteraard een timeout enkel stoppen met ",e.jsx(n.code,{children:"clearTimeout"})," wanneer de timeout nog niet van start is gegaan. Wanneer de timeout al is gestart, zal deze sowieso uitgevoerd worden."]}),`
`,e.jsx(n.p,{children:"Zo vangen we het id van een timer op:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Bij setTimeout"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," timeoutId = ",e.jsx(n.span,{className:"hljs-built_in",children:"setTimeout"}),"(",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'Hello, world!'"}),`);\r
}, `,e.jsx(n.span,{className:"hljs-number",children:"1000"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(timeoutId);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Bij setInterval"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," intervalId = ",e.jsx(n.span,{className:"hljs-built_in",children:"setInterval"}),"(",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'Hello, world!'"}),`);\r
}, `,e.jsx(n.span,{className:"hljs-number",children:"1000"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(intervalId);
`]})}),`
`,e.jsxs(n.h3,{id:"cleartimeout",children:[e.jsx(n.code,{children:"clearTimeout"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cleartimeout",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Wanneer we een timeout hebben aangemaakt met setTimeout, kunnen we deze stoppen met de clearTimeout functie.\r
Deze functie accepteert één argument: de timeout die we willen stoppen.`}),`
`,e.jsxs(n.h3,{id:"clearinterval",children:[e.jsx(n.code,{children:"clearInterval"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#clearinterval",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Wanneer we een interval hebben aangemaakt met setInterval, kunnen we deze stoppen met de clearInterval functie.\r
Deze functie accepteert één argument: het interval dat we willen stoppen.`}),`
`,e.jsxs(n.h5,{id:"voorbeeld-vorige-pagina",children:["Voorbeeld vorige pagina",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#voorbeeld-vorige-pagina",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`De kans is groot dat je sinds het verlaten van de 'Interval' pagina, meerdere errors in je Console hebt gekregen.\r
Dit komt omdat de interval die we daar aangemaakt hebben, nog steeds actief is.\r
Je kan deze stoppen door de volgende code in de Console uit te voeren:`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-built_in",children:"clearInterval"}),`(intervalId);
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"een-voorbeeld-dat-beide-timers-combineert",children:["Een voorbeeld dat beide timers combineert",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#een-voorbeeld-dat-beide-timers-combineert",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Voer de code in de Console en bekijk het resultaat."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Declareer de variabelen waar je de ID zal in bijhouden"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"let"}),` intervalId;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"let"}),` timeoutId;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer de functie die Google zal openen"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"openGoogle"})," = (",e.jsx(n.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"open"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"https://www.google.com"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"_blank"'}),`);\r
};\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer de TimeOut functie"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"timeOutFn"})," = (",e.jsx(n.span,{className:"hljs-params"}),`) => {\r
  timeoutId = `,e.jsx(n.span,{className:"hljs-built_in",children:"setTimeout"}),"(openGoogle, ",e.jsx(n.span,{className:"hljs-number",children:"10000"}),`)\r
};\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Haal de countdown op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," countdown = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"countdown"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer de variabele die de tijd bijhoudt"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"let"})," time = ",e.jsx(n.span,{className:"hljs-number",children:"10"}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer de functie die de countdown uitvoert"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"countdownFn"})," = (",e.jsx(n.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// Clear de countdown wanneer die op nul staat"}),`\r
  `,e.jsx(n.span,{className:"hljs-keyword",children:"if"})," (time === ",e.jsx(n.span,{className:"hljs-number",children:"0"}),`) {\r
    `,e.jsx(n.span,{className:"hljs-built_in",children:"clearInterval"}),`(intervalId);\r
    countdown.`,e.jsx(n.span,{className:"hljs-property",children:"innerText"})," = ",e.jsx(n.span,{className:"hljs-string",children:'"Countdown stopped"'}),`;\r
    `,e.jsx(n.span,{className:"hljs-keyword",children:"return"}),`;\r
  }\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// Verlaag de waarde van time met 1"}),`\r
  time--;\r
  `,e.jsx(n.span,{className:"hljs-comment",children:'// Update de tekst van het element met id "countdown"'}),`\r
  countdown.`,e.jsx(n.span,{className:"hljs-property",children:"innerText"}),` = time;\r
};\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Haal de knop op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," button = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"google"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg een event listener toe aan de Google-knop"}),`\r
button.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// Start de timeout"}),`\r
  `,e.jsx(n.span,{className:"hljs-title function_",children:"timeOutFn"}),`();\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// Start ook de visuele countdown"}),`\r
  intervalId = `,e.jsx(n.span,{className:"hljs-built_in",children:"setInterval"}),"(countdownFn, ",e.jsx(n.span,{className:"hljs-number",children:"1000"}),`);\r
});\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Haal de stop knop op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," stopButton = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"stop"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg een event listener toe aan de stop knop"}),`\r
stopButton.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// Stop de timeout die Google zal openen"}),`\r
  `,e.jsx(n.span,{className:"hljs-built_in",children:"clearTimeout"}),`(timeoutId);\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// Stop de interval van de countdown"}),`\r
  `,e.jsx(n.span,{className:"hljs-built_in",children:"clearInterval"}),`(intervalId);\r
});
`]})})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{r as default};
