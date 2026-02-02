import{j as e}from"./index-DEXPSZA7.js";function i(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Events zijn acties die de gebruiker uitvoert op een webpagina. Denk hierbij aan het klikken op een knop, het scrollen van de pagina, het hoveren over een element, etc."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"event-based-programming",children:["Event-based programming",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#event-based-programming",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"JavaScript is een event-based programmeertaal. Dit betekent dat de code reageert op events die plaatsvinden op de webpagina."}),`
`,e.jsx(n.p,{children:"Enkele voorbeelden van events zijn:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"click"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mouseover"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"keydown"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"scroll"})}),`
`]}),`
`,e.jsx(n.p,{children:"Je kan events toevoegen aan een element door een event listener toe te voegen. Dit is een functie die uitgevoerd wordt wanneer het event plaatsvindt."}),`
`,e.jsx(n.p,{children:"De syntax hiervoor is:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Een Event Listener aanmaken"}),`\r
element.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"event"'}),`, functie);
`]})}),`
`,e.jsxs(n.p,{children:["Waarbij '",e.jsx(n.code,{children:"element"}),`' het HTML element is waarop het event moet plaatsvinden,\r
'event' het type event is, en '`,e.jsx(n.code,{children:"functie"}),"' de functie is die uitgevoerd zal worden wanneer het event plaatsvindt."]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Een Event Listener aanmaken"}),`\r
element.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"event"'}),`, functie);
`]})}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx("div",{id:"div",className:"inline-dynamic-example",children:e.jsxs(n.p,{children:["Probeer de code uit op deze ",e.jsx(n.code,{children:"div"}),"."]})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal de div op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," d = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"div"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Bepaal de functie die moet uitgevoerd worden"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"toggleBgColor"})," = (",e.jsx(n.span,{className:"hljs-params"}),`) => {\r
  d.`,e.jsx(n.span,{className:"hljs-property",children:"classList"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"toggle"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"background-red"'}),`);\r
};\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg een event listener toe"}),`\r
d.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"mouseover"'}),`, toggleBgColor);
`]})}),`
`,e.jsxs(n.h2,{id:"alle-mogelijke-events",children:["Alle mogelijke events",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#alle-mogelijke-events",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Hieronder vind je een lijst van veelgebruikte events die je kunt gebruiken met ",e.jsx(n.code,{children:"addEventListener"}),":"]}),`
`,e.jsxs(n.h3,{id:"muis-events",children:["Muis-events",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#muis-events",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"click"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dblclick"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mousedown"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mouseup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mousemove"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mouseenter"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mouseleave"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mouseover"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mouseout"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"contextmenu"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"toetsenbord-events",children:["Toetsenbord-events",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#toetsenbord-events",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"keydown"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"keyup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"keypress"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"formulier-events",children:["Formulier-events",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#formulier-events",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"submit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"change"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"focus"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"blur"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"reset"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"venster-events",children:["Venster-events",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#venster-events",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"load"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"resize"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"scroll"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"unload"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"beforeunload"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"clipboard-events",children:["Clipboard-events",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#clipboard-events",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"copy"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"cut"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"paste"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"overige-events",children:["Overige events",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overige-events",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"touchstart"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"touchend"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"touchmove"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"drag"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dragstart"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dragend"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"drop"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Dit is slechts een selectie van de meest gebruikte events. Voor een volledige lijst kun je de ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Events",children:"MDN Event reference"})," raadplegen."]})]})}function d(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{d as default};
