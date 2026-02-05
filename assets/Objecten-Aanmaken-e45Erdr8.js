import{j as e}from"./index-3BjEGx3K.js";function s(a){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:`JavaScript heeft een aantal standaard gedefinieerde objecten, zoals\r
Date, Array, en Math. Je kunt ook je eigen objecten definiëren. In\r
JavaScript kun je objecten op verschillende manieren maken.`}),`
`,e.jsxs(n.h2,{id:"object-initializer",children:["Object initializer",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#object-initializer",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`De eenvoudigste manier om een object te maken is met een object\r
initializer. Een object initializer is een lijst met nul of meer paren\r
van eigenschappen en waarden van een object, gescheiden door een\r
dubbele punt en gescheiden door komma's.`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` objectName = { \r
 `,e.jsx(n.span,{className:"hljs-attr",children:"property1"}),`: value1, \r
 `,e.jsx(n.span,{className:"hljs-attr",children:"property2"}),`: value2, \r
 `,e.jsx(n.span,{className:"hljs-attr",children:"property3"}),`: value3 \r
};
`]})}),`
`,e.jsxs(n.h2,{id:"object-constructor",children:["Object constructor",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#object-constructor",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Een andere manier om een object te maken is met een constructor\r
functie. Een constructor functie is een speciale functie die wordt\r
gebruikt om een object te initialiseren. De constructor functie wordt\r
aangeroepen met het new trefwoord.`}),`
`,e.jsx(n.p,{children:`Je kan dit vergelijken met hoe je reeds objecten hebt leren aanmaken\r
in C#:In C# maak je een klasse aan met properties en methodes. Vervolgens\r
maak je een instantie van die klasse aan. In JavaScript maak je een\r
constructor functie aan met properties en methodes. Vervolgens maak je\r
een instantie van die constructor functie aan.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"this."}),` is een referentie naar het object dat\r
wordt aangemaakt. Het is een manier om de eigenschappen van het object\r
te definiëren. Je zegt dus letterlijk "dit object heeft deze waarde\r
voor deze eigenschap".`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Opgelet:"}),` Het is een conventie in\r
JavaScript om constructorfuncties met een hoofdletter te beginnen. Dit\r
helpt om ze te onderscheiden van gewone functies en maakt het\r
duidelijker dat ze bedoeld zijn om met het new keyword te worden\r
aangeroepen.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Opgelet:"}),` Een constructor functie\r
kan je enkel aanmaken met het `,e.jsx(n.code,{children:"function"}),` keyword. Een\r
anonieme constructor functie is niet mogelijk.`]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"ObjectName"}),"(",e.jsx(n.span,{className:"hljs-params",children:"property1, property2, property3"}),`) { \r
 `,e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"property1"}),` = property1; \r
 `,e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"property2"}),` = property2; \r
 `,e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"property3"}),` = property3; \r
} \r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," objectName = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"ObjectName"}),`(value1, value2, value3);
`]})}),`
`,e.jsxs(n.h2,{id:"probeer-het-zelf",children:["Probeer het zelf:",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#probeer-het-zelf",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Maak een constructor function aan voor het aanmaken van Student-objecten "}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"Student"}),"(",e.jsx(n.span,{className:"hljs-params",children:"name, age, grade"}),`) { \r
 `,e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"name"}),` = name; \r
 `,e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"age"}),` = age; \r
 `,e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"grade"}),` = grade; \r
} \r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Maak nu een Student-object aan met je eigen gegevens "}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` .... \r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Log het Student-object in de console "}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(...);
`]})})]})}function t(a={}){const{wrapper:n}=a.components||{};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{t as default};
