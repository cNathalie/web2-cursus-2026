import{j as e}from"./index-3BjEGx3K.js";function l(s){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Met JavaScript kunnen we ook onze CSS manipuleren. Dit betekent dat we 'on the fly' de stijl van onze HTML elementen kunnen veranderen."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"via-de-style-property",children:["Via de ",e.jsx(n.code,{children:".style"})," property",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#via-de-style-property",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["We kunnen de stijl van een element veranderen door de ",e.jsx(n.code,{children:".style"})," property te gebruiken. Deze property bevat een object met alle CSS eigenschappen van het element."]}),`
`,e.jsx(n.p,{children:"De namen van de CSS eigenschappen zijn in JavaScript in camelCase geschreven, in tegenstelling tot de kebab-case in CSS. Hier heb je eens de meest gebruikte cases op een rijtje:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"camelCase"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"lowercase"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"UPPERCASE"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"lower-kebab-case"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"UPPER-KEBAB-CASE"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"lower_snake_case"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"UPPER_SNAKE_CASE"})}),`
`]}),`
`,e.jsx(n.p,{children:"De CSS properties worden in JavaScript dus als volgt geschreven:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"background-color"})," wordt ",e.jsx(n.code,{children:"backgroundColor"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"font-size"})," wordt ",e.jsx(n.code,{children:"fontSize"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"border-radius"})," wordt ",e.jsx(n.code,{children:"borderRadius"})]}),`
`,e.jsx(n.li,{children:"Enzovoort..."}),`
`]}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx("div",{id:"styleProperty",className:"inline-dynamic-example",children:e.jsxs(n.p,{children:["Probeer de code uit op deze ",e.jsx(n.code,{children:"div"}),"."]})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal bovenstaande div op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," card = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"styleProperty"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Verander de achtergrondkleur naar paars"}),`\r
card.`,e.jsx(n.span,{className:"hljs-property",children:"style"}),".",e.jsx(n.span,{className:"hljs-property",children:"backgroundColor"})," = ",e.jsx(n.span,{className:"hljs-string",children:'"purple"'}),`;
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"aan-de-hand-van-css-classes-classname",children:["Aan de hand van CSS classes: .className",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aan-de-hand-van-css-classes-classname",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"We kunnen ook de CSS van een element veranderen door een CSS class toe te voegen of te verwijderen. Dit kunnen we doen door de .className property te gebruiken."}),`
`,e.jsx(n.p,{children:"Deze property bevat een string met alle CSS classes van het element. Net hetzelfde als je in je HTML zou schrijven. Je kan dus meerdere klasses tegelijk instellen door ze te scheiden met een spatie."}),`
`,e.jsx(n.p,{children:"Je zou dus in een string moeten knippen en plakken om bepaalde klassen toe te voegen of te verwijderen."}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx("div",{id:"className",className:"inline-dynamic-example",children:e.jsxs(n.p,{children:["Probeer de code uit op deze ",e.jsx(n.code,{children:"div"}),"."]})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal bovenstaande div op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," card = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"className"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg de klasse 'red' toe"}),`\r
card.`,e.jsx(n.span,{className:"hljs-property",children:"className"})," = ",e.jsx(n.span,{className:"hljs-string",children:'"background-red"'}),`;
`]})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Opgelet"}),`:\r
Als je de `,e.jsx(n.code,{children:".className"}),` property gebruikt, zal je alle klassen van het element overschrijven.\r
Zoals je in het voorbeeld kon zien, was de tekst in het code block origineel onderlijnd.\r
Omdat we een waarde aan className toeschreven, werd de originele waarde overschreven.`]}),`
`,e.jsx(n.p,{children:"Om het overschrijven te vermijden zouden we de originele klasse-string moeten concateneren met de nieuwe klasse-string:"}),`
`,e.jsx("div",{id:"classNameConcat",className:"inline-dynamic-example underline",children:e.jsxs(n.p,{children:["Probeer de code uit op deze ",e.jsx(n.code,{children:"div"}),"."]})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal bovenstaande div op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," card = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"classNameConcat"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg de klasse 'red' toe"}),`\r
card.`,e.jsx(n.span,{className:"hljs-property",children:"className"})," += ",e.jsx(n.span,{className:"hljs-string",children:'" background-red"'}),`;
`]})}),`
`,e.jsx(n.p,{children:"Je ziet dat nu onze tekst onderlijnd blijft, maar de achtergrondkleur is wel rood geworden."}),`
`,e.jsxs(n.p,{children:[`Je voelt aan dat deze manier van werken omslachtig en gevoelig voor bugs is.\r
Daarom is het beter om de `,e.jsx(n.code,{children:".classList"})," property te gebruiken."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"aan-de-hand-van-css-classes-classlist",children:["Aan de hand van CSS classes: ",e.jsx(n.code,{children:".classList"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aan-de-hand-van-css-classes-classlist",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:".classList"})," property is een object dat methodes bevat om klassen toe te voegen, te verwijderen of te togglen. Dit natuurlijk op voorwaarde dat deze CSS klasses gedefinieerd zijn in je CSS bestand!"]}),`
`,e.jsx(n.p,{children:"De meest gebruikte methodes zijn:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".add('className')"})," - voegt een klasse toe"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".remove('className')"})," - verwijdert een klasse"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".toggle('className')"}),` - voegt een klasse toe als deze nog niet bestaat, verwijdert de klasse als deze wel bestaat\r
De betekenis van toggle: In programmeren betekent "toggle" het wisselen tussen twee toestanden, zoals aan en uit, met één actie.`]}),`
`]}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx("div",{id:"classList",className:"inline-dynamic-example",children:e.jsxs(n.p,{children:["Probeer de code uit op deze ",e.jsx(n.code,{children:"div"}),"."]})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal bovenstaande div op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," card = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"classList"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg de klasse 'red' toe"}),`\r
card.`,e.jsx(n.span,{className:"hljs-property",children:"classList"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"add"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"background-red"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Verwijder de klasse 'background-red'"}),`\r
card.`,e.jsx(n.span,{className:"hljs-property",children:"classList"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"remove"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"background-red"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Toggle de klasse 'underline'"}),`\r
card.`,e.jsx(n.span,{className:"hljs-property",children:"classList"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"toggle"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"underline"'}),`);
`]})}),`
`,e.jsxs(n.h2,{id:"complete-lijst-van-benaderbare-properties-om-css-styling-dynamisch-aan-te-passen",children:["Complete lijst van benaderbare properties om CSS styling dynamisch aan te passen",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#complete-lijst-van-benaderbare-properties-om-css-styling-dynamisch-aan-te-passen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Hieronder vind je een lijst van veelgebruikte properties die je via JavaScript kunt aanpassen met de ",e.jsx(n.code,{children:".style"})," property van een element:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"backgroundColor"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"width"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"height"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"margin"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"marginTop"}),", ",e.jsx(n.code,{children:"marginBottom"}),", ",e.jsx(n.code,{children:"marginLeft"}),", ",e.jsx(n.code,{children:"marginRight"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"padding"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"paddingTop"}),", ",e.jsx(n.code,{children:"paddingBottom"}),", ",e.jsx(n.code,{children:"paddingLeft"}),", ",e.jsx(n.code,{children:"paddingRight"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"border"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"borderRadius"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"boxShadow"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fontSize"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fontWeight"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fontFamily"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"textAlign"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"textDecoration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"lineHeight"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"letterSpacing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"opacity"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"display"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"position"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"top"}),", ",e.jsx(n.code,{children:"bottom"}),", ",e.jsx(n.code,{children:"left"}),", ",e.jsx(n.code,{children:"right"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"zIndex"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"overflow"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"cursor"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"visibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"backgroundImage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"backgroundPosition"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"backgroundSize"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"backgroundRepeat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"transition"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"transform"})}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Let op: de property-namen zijn in camelCase, niet in kebab-case zoals in CSS."}),`
`]}),`
`,e.jsxs(n.p,{children:["Voor een volledige lijst kun je ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style",children:"de documentatie van HTMLElement.style"})," raadplegen."]})]})}function d(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{d as default};
