import{j as e}from"./index-DEXPSZA7.js";function a(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"Het kan ook zijn dat we behalve validatie, ook manipulatie willen uitvoeren op de formulier input van een gebruiker"}),`
`,e.jsxs(s.h2,{id:"arrays-sorteren",children:["Arrays sorteren",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#arrays-sorteren",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Een van de meest voorkomende manieren om data te manipuleren is door arrays te sorteren. Dit kan je doen met de ",e.jsx(s.code,{children:".sort()"})," methode. Deze methode sorteert de elementen van een array in alfabetische volgorde."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," animals = [",e.jsx(s.span,{className:"hljs-string",children:'"zebra"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"aap"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"giraf"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"ezel"'}),`];\r
animals.`,e.jsx(s.span,{className:"hljs-title function_",children:"sort"}),`();\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(animals);
`]})}),`
`,e.jsx(s.p,{children:`Je kan ook een optionele parameter meegeven aan de .sort() methode.\r
Deze parameter is een functie die twee argumenten krijgt.\r
Deze argumenten zijn de twee elementen die met elkaar vergeleken worden.\r
De functie zal een negatief getal teruggeven als het eerste element voor het\r
tweede element moet komen, een positief getal als\r
het tweede element voor het eerste element moet komen, en 0 als de elementen gelijk zijn.`}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," numbers = [",e.jsx(s.span,{className:"hljs-number",children:"4"}),", ",e.jsx(s.span,{className:"hljs-number",children:"2"}),", ",e.jsx(s.span,{className:"hljs-number",children:"5"}),", ",e.jsx(s.span,{className:"hljs-number",children:"1"}),", ",e.jsx(s.span,{className:"hljs-number",children:"3"}),`];\r
numbers.`,e.jsx(s.span,{className:"hljs-title function_",children:"sort"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"a, b"}),") =>"]}),` a - b);\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(numbers);
`]})}),`
`,e.jsxs(s.h3,{id:"wat-gebeurt-hier",children:["Wat gebeurt hier?",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wat-gebeurt-hier",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Array"}),`: We hebben een array genaamd numbers met de waarden [4, 2, 5, 1, 3].\r
Sorteren: We roepen de sort functie aan op deze array. De sort functie accepteert een optionele vergelijkingsfunctie als argument. In dit geval geven we een functie (a, b) => a - b door.\r
Hoe werkt de vergelijkingsfunctie?\r
De vergelijkingsfunctie bepaalt de volgorde van de elementen.\r
Hier is hoe het werkt:`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Vergelijking"}),": (a, b) => a - b"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Als a - b een negatief getal is, wordt a vóór b geplaatst."}),`
`,e.jsx(s.li,{children:"Als a - b nul is, blijven a en b in hun oorspronkelijke volgorde."}),`
`,e.jsx(s.li,{children:"Als a - b een positief getal is, wordt a na b geplaatst."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Stap-voor-stap"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Vergelijk 4 en 2: 4 - 2 = 2 (positief), dus 2 komt vóór 4."}),`
`,e.jsx(s.li,{children:"Vergelijk 2 en 5: 2 - 5 = -3 (negatief), dus 2 blijft vóór 5."}),`
`,e.jsx(s.li,{children:"Vergelijk 5 en 1: 5 - 1 = 4 (positief), dus 1 komt vóór 5."}),`
`,e.jsx(s.li,{children:"Vergelijk 1 en 3: 1 - 3 = -2 (negatief), dus 1 blijft vóór 3."}),`
`,e.jsx(s.li,{children:"Vergelijk 3 en 4: 3 - 4 = -1 (negatief), dus 3 blijft vóór 4."}),`
`]}),`
`,e.jsx(s.p,{children:"Na het doorlopen van alle vergelijkingen, wordt de array gesorteerd als [1, 2, 3, 4, 5]."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Opmerking:"})}),`
`,e.jsxs(s.p,{children:["De ",e.jsx(s.code,{children:".sort()"})," methode sorteert de array in-place, wat betekent dat de oorspronkelijke array wordt gewijzigd."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Opgelet !!"})}),`
`,e.jsxs(s.p,{children:["De ",e.jsx(s.code,{children:".sort()"})," methode zonder parameter geeft vaak nutteloze resultaten terug!"]}),`
`,e.jsx(s.p,{children:`Je zou in het voorbeeld hieronder misschien verwachten dat de array [24, 2, 5, 11, 302] gesorteerd wordt naar [2, 5, 11, 24, 302].\r
Logisch, van klein naar groot.`}),`
`,e.jsx(s.p,{children:"Gooi de code in de Console en bekijk wat er gebeurt."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," numbers = [",e.jsx(s.span,{className:"hljs-number",children:"24"}),", ",e.jsx(s.span,{className:"hljs-number",children:"2"}),", ",e.jsx(s.span,{className:"hljs-number",children:"5"}),", ",e.jsx(s.span,{className:"hljs-number",children:"11"}),", ",e.jsx(s.span,{className:"hljs-number",children:"302"}),`];\r
numbers.`,e.jsx(s.span,{className:"hljs-title function_",children:"sort"}),`();\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(numbers);
`]})}),`
`,e.jsxs(s.h2,{id:"objecten-sorteren",children:["Objecten sorteren",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#objecten-sorteren",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:[`Als je een array van objecten hebt, kan je deze sorteren op basis van een specifiek eigenschap van het object.\r
Dit kan je doen door een vergelijkingsfunctie mee te geven aan de `,e.jsx(s.code,{children:".sort()"})," methode."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` animals = [\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"zebra"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"legs"}),": ",e.jsx(s.span,{className:"hljs-number",children:"4"}),` },\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"aap"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"legs"}),": ",e.jsx(s.span,{className:"hljs-number",children:"2"}),` },\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"giraf"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"legs"}),": ",e.jsx(s.span,{className:"hljs-number",children:"4"}),` },\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"ezel"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"legs"}),": ",e.jsx(s.span,{className:"hljs-number",children:"4"}),` },\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"spin"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"legs"}),": ",e.jsx(s.span,{className:"hljs-number",children:"8"}),` },\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"sprookjesdier"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"legs"}),": ",e.jsx(s.span,{className:"hljs-number",children:"3"}),` },\r
];\r
\r
animals.`,e.jsx(s.span,{className:"hljs-title function_",children:"sort"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"a, b"}),") =>"]})," a.",e.jsx(s.span,{className:"hljs-property",children:"legs"})," - b.",e.jsx(s.span,{className:"hljs-property",children:"legs"}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(animals);
`]})}),`
`,e.jsxs(s.p,{children:[`In dit voorbeeld sorteren we de array van objecten op basis van het aantal benen dat elk dier heeft.\r
De vergelijkingsfunctie `,e.jsx(s.code,{children:"(a, b) => a.legs - b.legs"})," vergelijkt de legs eigenschap van elk object."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"praktijkvoorbeelden-van-data-manipulatie",children:["Praktijkvoorbeelden van data-manipulatie",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#praktijkvoorbeelden-van-data-manipulatie",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Hieronder vind je enkele realistische voorbeelden van hoe data-manipulatie met arrays en objecten in formulieren vaak voorkomt:\r
(Herinner je de lijst van functies die je kan uitvoeren op Arrays - JavaScript Basis hoofdstuk.)`}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. Gebruikers sorteren op naam (alfabetisch):"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` users = [\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Sofie"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"age"}),": ",e.jsx(s.span,{className:"hljs-number",children:"22"}),` },\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Bram"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"age"}),": ",e.jsx(s.span,{className:"hljs-number",children:"19"}),` },\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"An"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"age"}),": ",e.jsx(s.span,{className:"hljs-number",children:"25"}),` },\r
];\r
users.`,e.jsx(s.span,{className:"hljs-title function_",children:"sort"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"a, b"}),") =>"]})," a.",e.jsx(s.span,{className:"hljs-property",children:"name"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"localeCompare"}),"(b.",e.jsx(s.span,{className:"hljs-property",children:"name"}),`));\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(users);
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. Alleen actieve producten tonen:"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` products = [\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Laptop"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"active"}),": ",e.jsx(s.span,{className:"hljs-literal",children:"true"}),` },\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Muis"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"active"}),": ",e.jsx(s.span,{className:"hljs-literal",children:"false"}),` },\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Toetsenbord"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"active"}),": ",e.jsx(s.span,{className:"hljs-literal",children:"true"}),` },\r
];\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," activeProducts = products.",e.jsx(s.span,{className:"hljs-title function_",children:"filter"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"product"}),") =>"]})," product.",e.jsx(s.span,{className:"hljs-property",children:"active"}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(activeProducts);
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. Prijzen optellen (totalen berekenen):"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," prijzen = [",e.jsx(s.span,{className:"hljs-number",children:"12.99"}),", ",e.jsx(s.span,{className:"hljs-number",children:"5.5"}),", ",e.jsx(s.span,{className:"hljs-number",children:"3.25"}),`];\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," totaal = prijzen.",e.jsx(s.span,{className:"hljs-title function_",children:"reduce"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"sum, prijs"}),") =>"]})," sum + prijs, ",e.jsx(s.span,{className:"hljs-number",children:"0"}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(totaal); ",e.jsx(s.span,{className:"hljs-comment",children:"// 21.74"}),`
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"4. E-mailadressen uit een lijst van gebruikers halen:"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` users = [\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Sofie"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"email"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"sofie@mail.com"'}),` },\r
  { `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Bram"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"email"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"bram@mail.com"'}),` },\r
];\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," emails = users.",e.jsx(s.span,{className:"hljs-title function_",children:"map"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"user"}),") =>"]})," user.",e.jsx(s.span,{className:"hljs-property",children:"email"}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(emails);
`]})}),`
`,e.jsx(s.p,{children:"Deze technieken worden veel gebruikt om data uit formulieren te verwerken, te filteren, te sorteren of samen te vatten voordat je ze opslaat of verstuurt naar een server."})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{r as default};
