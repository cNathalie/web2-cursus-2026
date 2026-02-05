import{j as e}from"./index-3BjEGx3K.js";function a(s){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"Date"}),` object is een ingebouwd object in JavaScript dat wordt\r
gebruikt om datums en tijden te werken.`]}),`
`,e.jsxs(n.h2,{id:"date-object-aanmaken",children:["Date object aanmaken",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#date-object-aanmaken",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Om een Date object aan te maken, gebruik je de new Date() constructor.\r
De Date object constructor accepteert verschillende parameters, zoals\r
jaar, maand, dag, uur, minuut, seconde en milliseconde.`}),`
`,e.jsx(n.p,{children:`Wanneer je geen parameters meegeeft, zal de Date constructor de\r
huidige datum en tijd weergeven.`}),`
`,e.jsx(n.p,{children:`Wanneer je het Date object logt, zal het de datum en tijd weergegeven\r
worden in een standaard format. Om dit om te zetten naar een leesbaar\r
format, kun je gebruik maken van de verschillende Date object\r
methodes.`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Maak een Date object aan "}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," date = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"Date"}),`(); \r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(date); \r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Maak een Date object met parameters aan "}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," myDate = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"Date"}),"(",e.jsx(n.span,{className:"hljs-number",children:"1992"}),", ",e.jsx(n.span,{className:"hljs-number",children:"09"}),", ",e.jsx(n.span,{className:"hljs-number",children:"17"}),", ",e.jsx(n.span,{className:"hljs-number",children:"09"}),", ",e.jsx(n.span,{className:"hljs-number",children:"0"}),", ",e.jsx(n.span,{className:"hljs-number",children:"0"}),", ",e.jsx(n.span,{className:"hljs-number",children:"0"}),`); \r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(myDate);
`]})}),`
`,e.jsxs(n.h2,{id:"tolocalestring",children:[".toLocaleString()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tolocalestring",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:".toLocaleString()"}),` methode wordt gebruikt om een\r
datum/tijd te converteren naar een leesbaar format.`]}),`
`,e.jsx(n.p,{children:`Wanneer je de methode zonder parameters gebruikt, zal de datum en tijd\r
weergegeven worden in de taal en tijdzone van de gebruiker.`}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:".toLocaleString()"}),` methode accepteert ook parameters\r
zoals locale en options.`]}),`
`,e.jsx(n.p,{children:`Met de locale parameter kies je in de code in welk format\r
de datum moet worden weergegeven.`}),`
`,e.jsx(n.p,{children:"Dit zijn een aantal locales:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"nl-BE: Nederlands (België)"}),`
`,e.jsx(n.li,{children:"en-US: Engels (Verenigde Staten)"}),`
`,e.jsx(n.li,{children:"fr-FR: Frans (Frankrijk)"}),`
`,e.jsx(n.li,{children:"de-DE: Duits (Duitsland)"}),`
`]}),`
`,e.jsx(n.p,{children:"Dit zijn de meest gebruikte options:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"weekday: 'long', 'short', 'narrow'"}),`
`,e.jsx(n.li,{children:"year: 'numeric', '2-digit'"}),`
`,e.jsx(n.li,{children:"month: 'numeric', '2-digit', 'long', 'short', 'narrow'"}),`
`,e.jsx(n.li,{children:"day: 'numeric', '2-digit'"}),`
`,e.jsx(n.li,{children:"hour: 'numeric', '2-digit'"}),`
`,e.jsx(n.li,{children:"minute: 'numeric', '2-digit'"}),`
`,e.jsx(n.li,{children:"second: 'numeric', '2-digit'"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," date = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"Date"}),`(); \r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(date.",e.jsx(n.span,{className:"hljs-title function_",children:"toLocaleString"}),`());
`]})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," date = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"Date"}),`(); \r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(date.",e.jsx(n.span,{className:"hljs-title function_",children:"toLocaleString"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'nl-BE'"}),", { ",e.jsx(n.span,{className:"hljs-attr",children:"weekday"}),": ",e.jsx(n.span,{className:"hljs-string",children:"'long'"}),` }));
`]})}),`
`,e.jsx(n.p,{children:`Date objecten kunnen complex zijn, denk maar aan hoe je met tijdzones,\r
zomertijd en verschillende kalenderformaten moet omgaan. Voor eenvoudige\r
toepassingen is het echter meestal voldoende om de basisfunctionaliteit\r
van het Date object te begrijpen en te gebruiken.`}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Niet voor deze cursus:"})}),`
`,e.jsxs(n.p,{children:[`Wanneer je meer geavanceerde datum- en tijdmanipulaties nodig hebt,\r
zoals het berekenen van datums, het werken met tijdzones of het\r
formatteren van datums in verschillende stijlen, kun je overwegen om\r
externe bibliotheken zoals `,e.jsx(n.a,{href:"https://date-fns.org/",children:"date-fns"}),` of\r
`,e.jsx(n.a,{href:"https://momentjs.com/",children:"moment.js"}),` te gebruiken. Deze bibliotheken\r
bieden uitgebreide functionaliteit en maken het werken met datums en\r
tijden veel eenvoudiger.`]})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{r as default};
