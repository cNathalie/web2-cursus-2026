import{j as e}from"./index-DEXPSZA7.js";function a(n){const s={a:"a",br:"br",code:"code",em:"em",h2:"h2",hr:"hr",p:"p",pre:"pre",span:"span",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.p,{children:["De eerste timer functie is de ",e.jsx(s.code,{children:"setTimeout"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"settimeout",children:[e.jsx(s.code,{children:".setTimeout()"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settimeout",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Met de ",e.jsx(s.code,{children:"setTimeout"})," functie kunnen we een bepaald stukje code uitvoeren na een bepaalde tijd.",e.jsx(s.br,{}),`
`,"De functie accepteert twee argumenten: een functie die uitgevoerd moet worden en een getal dat aangeeft hoe lang we moeten wachten voordat de functie wordt uitgevoerd. Dit getal wordt uitgedrukt in milliseconden."]}),`
`,e.jsxs(s.p,{children:["In het onderstaande voorbeeld wordt de functie ",e.jsx(s.code,{children:"openGoogle"})," pas uitgevoerd 5 seconden nadat er op de knop is geklikt."]}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsx("button",{id:"google",children:"Open Google"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Declareer de functie die Google zal openen"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"openGoogle"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"open"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"https://www.google.com"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"_blank"'}),`);\r
};\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Declareer de TimeOut functie"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"timeOutFn"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(openGoogle, ",e.jsx(s.span,{className:"hljs-number",children:"5000"}),`);\r
};\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Haal de knop op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," button = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"google"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Voeg een event listener toe aan de knop"}),`\r
button.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),`, timeOutFn);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Klik op de knop en tel tot 5..."}),`
`]})}),`
`,e.jsx(s.p,{children:`Het kan zijn dat je browser pop-ups blokkeert. Als dit het geval is, zal de functie niet werken.\r
Je kunt dit oplossen door de pop-up blokkering uit te schakelen.`}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"praktische-toepassingen-van-settimeout",children:["Praktische toepassingen van setTimeout",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#praktische-toepassingen-van-settimeout",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Hieronder vind je enkele realistische voorbeelden van hoe ",e.jsx(s.code,{children:"setTimeout"})," in echte projecten wordt gebruikt:"]}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"Deze code voorbeelden werken niet dynamisch in de console en zijn louter ter info."})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. Feedback tonen en daarna automatisch verbergen"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Toon een melding en verberg deze na 3 seconden"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," message = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"feedback"'}),`);\r
message.`,e.jsx(s.span,{className:"hljs-property",children:"textContent"})," = ",e.jsx(s.span,{className:"hljs-string",children:'"Je gegevens zijn opgeslagen!"'}),`;\r
message.`,e.jsx(s.span,{className:"hljs-property",children:"style"}),".",e.jsx(s.span,{className:"hljs-property",children:"display"})," = ",e.jsx(s.span,{className:"hljs-string",children:'"block"'}),`;\r
`,e.jsx(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  message.`,e.jsx(s.span,{className:"hljs-property",children:"style"}),".",e.jsx(s.span,{className:"hljs-property",children:"display"})," = ",e.jsx(s.span,{className:"hljs-string",children:'"none"'}),`;\r
}, `,e.jsx(s.span,{className:"hljs-number",children:"3000"}),`);
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. Automatisch doorverwijzen na een actie"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Na succesvol inloggen, na 2 seconden doorsturen naar dashboard"}),`\r
`,e.jsx(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-property",children:"location"}),".",e.jsx(s.span,{className:"hljs-property",children:"href"})," = ",e.jsx(s.span,{className:"hljs-string",children:'"/dashboard"'}),`;\r
}, `,e.jsx(s.span,{className:"hljs-number",children:"2000"}),`);
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. Animatie starten na een korte vertraging"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Start een animatie 1 seconde na het laden van de pagina"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),", ",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-property",children:"body"}),".",e.jsx(s.span,{className:"hljs-property",children:"classList"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"add"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"start-animatie"'}),`);\r
  }, `,e.jsx(s.span,{className:"hljs-number",children:"1000"}),`);\r
});
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"4. Herhaaldelijk een actie uitvoeren met setTimeout (recursief)"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Een klok die elke seconde de tijd bijwerkt (alternatief voor setInterval)"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"updateClock"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," clock = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"clock"'}),`);\r
  clock.`,e.jsx(s.span,{className:"hljs-property",children:"textContent"})," = ",e.jsx(s.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Date"}),"().",e.jsx(s.span,{className:"hljs-title function_",children:"toLocaleTimeString"}),`();\r
  `,e.jsx(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(updateClock, ",e.jsx(s.span,{className:"hljs-number",children:"1000"}),`);\r
}\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"updateClock"}),`();
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"5. Gebruiker waarschuwen voor inactiviteit"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Na 5 minuten inactiviteit een waarschuwing tonen"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"let"}),` timeoutId;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"resetTimeout"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-built_in",children:"clearTimeout"}),`(timeoutId);\r
  timeoutId = `,e.jsx(s.span,{className:"hljs-built_in",children:"setTimeout"}),"(",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
    `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Je bent al 5 minuten inactief. Log opnieuw in."'}),`);\r
  }, `,e.jsx(s.span,{className:"hljs-number",children:"5"})," * ",e.jsx(s.span,{className:"hljs-number",children:"60"})," * ",e.jsx(s.span,{className:"hljs-number",children:"1000"}),`);\r
}\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"mousemove"'}),`, resetTimeout);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"keydown"'}),`, resetTimeout);\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"resetTimeout"}),`();
`]})}),`
`,e.jsxs(s.p,{children:["Deze voorbeelden laten zien hoe ",e.jsx(s.code,{children:"setTimeout"})," handig is voor feedback, animaties, beveiliging en gebruikerservaring in echte webapplicaties."]})]})}function i(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{i as default};
