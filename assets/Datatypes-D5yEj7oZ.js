import{j as e}from"./index-3BjEGx3K.js";function l(s){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["JavaScript is een ",e.jsx(n.strong,{children:"dynamisch getypeerde taal"}),`, wat betekent dat je niet\r
moet aangeven welk type gegevens je in een variabele zal opslaan.\r
JavaScript zal automatisch het type van de gegevens bepalen.`]}),`
`,e.jsx(n.p,{children:"JavaScript heeft een aantal primitieve datatypes, zoals:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Number"}),`
`,e.jsx(n.li,{children:"String"}),`
`,e.jsx(n.li,{children:"Boolean"}),`
`,e.jsx(n.li,{children:"Undefined"}),`
`,e.jsx(n.li,{children:"Null"}),`
`]}),`
`,e.jsx(n.p,{children:"Er zijn ook objecttypes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Object"}),`
`,e.jsx(n.li,{children:"Array"}),`
`,e.jsx(n.li,{children:"Function"}),`
`]}),`
`,e.jsxs(n.h4,{id:"number",children:["Number",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#number",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Numbers zijn getallen. Ze kunnen zowel gehele getallen als\r
kommagetallen zijn.`}),`
`,e.jsx(n.p,{children:"Enkele voorbeelden van numbers:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," x = ",e.jsx(n.span,{className:"hljs-number",children:"5"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," y = ",e.jsx(n.span,{className:"hljs-number",children:"3.14"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," z = -",e.jsx(n.span,{className:"hljs-number",children:"10"}),`;
`]})}),`
`,e.jsx(n.p,{children:"Operatoren:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"*"}),`
`,e.jsx(n.li,{children:"+"}),`
`,e.jsx(n.li,{children:"−"}),`
`,e.jsx(n.li,{children:"/"}),`
`,e.jsx(n.li,{children:"% (modulo)"}),`
`]}),`
`,e.jsxs(n.h4,{id:"string",children:["String",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#string",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:[`Strings zijn teksten. Ze worden gedefinieerd tussen enkele of dubbele\r
aanhalingstekens of `,e.jsx(n.em,{children:"backticks"}),"."]}),`
`,e.jsx(n.p,{children:"Enkele voorbeelden van strings:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," x = ",e.jsx(n.span,{className:"hljs-string",children:'"Hello"'}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," y = ",e.jsx(n.span,{className:"hljs-string",children:'"World"'}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," z = ",e.jsx(n.span,{className:"hljs-string",children:'"42"'}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," u = ",e.jsx(n.span,{className:"hljs-string",children:"`Movie`"}),`;
`]})}),`
`,e.jsx(n.p,{children:"De operator '+' kan gebruikt worden om twee strings te concateneren."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," greeting = x + ",e.jsx(n.span,{className:"hljs-string",children:'" "'}),` + y;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(greeting); ",e.jsx(n.span,{className:"hljs-comment",children:'// "Hello World"'}),`
`]})}),`
`,e.jsxs(n.p,{children:[`Op een variabele van het type string kan je altijd\r
`,e.jsx(n.code,{children:".length"}),` oproepen om het aantal karakters te\r
tellen.`]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," text = ",e.jsx(n.span,{className:"hljs-string",children:'"Hello"'}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(text.",e.jsx(n.span,{className:"hljs-property",children:"length"}),"); ",e.jsx(n.span,{className:"hljs-comment",children:"// 5"}),`
`]})}),`
`,e.jsxs(n.p,{children:[`Je kan ook een number omzetten naar een string met de methode\r
`,e.jsx(n.code,{children:".toString()"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," number = ",e.jsx(n.span,{className:"hljs-number",children:"42"}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(number);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` number);\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," string = number.",e.jsx(n.span,{className:"hljs-title function_",children:"toString"}),`();\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(string);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` string);
`]})}),`
`,e.jsxs(n.h4,{id:"boolean",children:["Boolean",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#boolean",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Booleans zijn waarden die waar of onwaar kunnen zijn. Ze worden\r
gebruikt om beslissingen te nemen in je code.`}),`
`,e.jsx(n.p,{children:"Enkele voorbeelden van booleans:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," x = ",e.jsx(n.span,{className:"hljs-literal",children:"true"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," y = ",e.jsx(n.span,{className:"hljs-literal",children:"false"}),`;
`]})}),`
`,e.jsxs(n.p,{children:[`Booleans worden vaak gebruikt in combinatie met conditionele\r
statements zoals `,e.jsx(n.code,{children:"if"})," en ",e.jsx(n.code,{children:"else"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"if"}),` (x) {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Dit wordt uitgevoerd"'}),`);\r
} `,e.jsx(n.span,{className:"hljs-keyword",children:"else"}),` {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Dit wordt niet uitgevoerd"'}),`);\r
}
`]})}),`
`,e.jsx(n.p,{children:"Elke waarde heeft ook een boolean equivalent:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["0 is ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:["1 is ",e.jsx(n.code,{children:"true"})]}),`
`,e.jsxs(n.li,{children:['"" is ',e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:['"Hello" is ',e.jsx(n.code,{children:"true"})]}),`
`,e.jsxs(n.li,{children:["null is ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:["undefined is ",e.jsx(n.code,{children:"false"})]}),`
`,e.jsxs(n.li,{children:["NaN is ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsx(n.p,{children:`Zo kan je bevoorbeeld snel controleren of een string variable een\r
waarde heeft:`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," text = ",e.jsx(n.span,{className:"hljs-string",children:'""'}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"if"}),` (text) {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Text heeft een waarde"'}),`);\r
} `,e.jsx(n.span,{className:"hljs-keyword",children:"else"}),` {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Text heeft geen waarde"'}),`);\r
}
`]})}),`
`,e.jsxs(n.h4,{id:"undefined-en-null",children:["Undefined en null",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#undefined-en-null",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Undefined"})," en ",e.jsx(n.code,{children:"null"})," zijn speciale waarden in JavaScript. ",e.jsx(n.code,{children:"Undefined"}),`\r
betekent dat een variabele niet is gedefinieerd, terwijl `,e.jsx(n.code,{children:"null"}),` betekent\r
dat een variabele geen waarde heeft.`]}),`
`,e.jsx(n.p,{children:"Enkele voorbeelden:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"let"}),` z;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(z); ",e.jsx(n.span,{className:"hljs-comment",children:"// undefined"}),`\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," y = ",e.jsx(n.span,{className:"hljs-literal",children:"null"}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(y); ",e.jsx(n.span,{className:"hljs-comment",children:"// null"}),`
`]})}),`
`,e.jsx(n.p,{children:`Null staat voor een lege object pointer.\r
Het type van een variable met de waarde null, is object.`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"})," y); ",e.jsx(n.span,{className:"hljs-comment",children:"// object"}),`
`]})}),`
`,e.jsx(n.p,{children:`Maak je geen zorgen, het verschil tussen beide zal naarmate je meer codeert,\r
duidelijker worden.`})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{r as default};
