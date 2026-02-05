import{j as e}from"./index-3BjEGx3K.js";const r="/web2-cursus-2026/images/types.png";function a(s){const n={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",p:"p",pre:"pre",span:"span",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Het is belangrijk om de verschillende types in JavaScript te begrijpen omdat dit je kan helpen om betere code te schrijven en bugs te voorkomen."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"dynamisch",children:["Dynamisch",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#dynamisch",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"JavaScript is een dynamisch getypeerde programmeertaal, of in het Engels: Dynamically Typed."}),`
`,e.jsx(n.p,{children:"Dit wil zeggen dat er geen type wordt meegegeven bij het declareren van een variabele, functie, parameter of functie return waarde. Pas tijdens de uitvoering van de code wordt er gebruik gemaakt van types."}),`
`,e.jsx(n.p,{children:"Dit in tegenstelling tot statisch getypeerde programmeertalen zoals C#, waarbij je bij het declareren van een variabele het type moet meegeven."}),`
`,e.jsx("img",{src:r,alt:"Types"}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"types",children:["Types",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#types",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Je kan het type van een variable achterhalen door gebruik te maken van de ",e.jsx(n.code,{children:"typeof()"})," operator."]}),`
`,e.jsx(n.p,{children:"Plaats de lijst met variabelen in de console en vraag nadien één per één hun type op."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Declareer de variabelen"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," leeftijd = ",e.jsx(n.span,{className:"hljs-number",children:"25"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," interest = ",e.jsx(n.span,{className:"hljs-number",children:"0.12"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," naam = ",e.jsx(n.span,{className:"hljs-string",children:'"Jan"'}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," isStudent = ",e.jsx(n.span,{className:"hljs-literal",children:"true"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"print"})," = (",e.jsx(n.span,{className:"hljs-params",children:"msg"}),") => ",e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(msg);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Vraag nu van elke variabele zijn type op"}),`\r
`,e.jsx(n.span,{className:"hljs-title function_",children:"typeof"}),"(",e.jsx(n.span,{className:"hljs-comment",children:"/* naam van de variabele */"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Vraag ook eens het type op van:"}),`\r
`,e.jsx(n.span,{className:"hljs-title function_",children:"typeof"}),"(",e.jsx(n.span,{className:"hljs-variable language_",children:"window"}),`);\r
`,e.jsx(n.span,{className:"hljs-title function_",children:"typeof"}),"(",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Wat zou hier van het type zijn?"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," kleur = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"String"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"rood"'}),`);\r
`,e.jsx(n.span,{className:"hljs-title function_",children:"typeof"}),`(kleur);
`]})}),`
`,e.jsxs(n.p,{children:["Opgelet: Zoals je merkt is er een verschil tussen de types van ",e.jsx(n.em,{children:"naam"})," en ",e.jsx(n.em,{children:"kleur"}),`,\r
hoewel ze beiden een string bevatten. Dit komt omdat `,e.jsx(n.em,{children:"naam"})," een string is en ",e.jsx(n.em,{children:"kleur"})," een object is. Dit is een belangrijk verschil dat je moet onthouden."]}),`
`,e.jsxs(n.p,{children:["Meer specifiek is ",e.jsx(n.em,{children:"kleur"}),` een object van het type String = een String object.\r
Elke variabele die een waarde krijgt aan de hand van het keyword new is een object.`]}),`
`,e.jsxs(n.p,{children:["De string ",e.jsx(n.em,{children:"naam"}),` noemen we een string literal.\r
Dit is een string die rechtstreeks in de code wordt geschreven tussen aanhalingstekens.`]})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{i as default};
