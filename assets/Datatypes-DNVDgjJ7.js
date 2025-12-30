import{j as e}from"./index-C0jUBqcl.js";function r(l){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["JavaScript is een ",e.jsx(n.strong,{children:"dynamisch getypeerde taal"}),`, wat betekent dat je niet\r
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const x = 5;\r
const y = 3.14;\r
const z = -10;
`})}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const x = "Hello";\r
const y = "World";\r
const z = "42";\r
const u = \`Movie\`;
`})}),`
`,e.jsx(n.p,{children:"De operator '+' kan gebruikt worden om twee strings te concateneren."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const greeting = x + " " + y;\r
console.log(greeting); // "Hello World"
`})}),`
`,e.jsxs(n.p,{children:[`Op een variabele van het type string kan je altijd\r
`,e.jsx(n.code,{children:".length"}),` oproepen om het aantal karakters te\r
tellen.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const text = "Hello";\r
console.log(text.length); // 5
`})}),`
`,e.jsxs(n.p,{children:[`Je kan ook een number omzetten naar een string met de methode\r
`,e.jsx(n.code,{children:".toString()"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const number = 42;\r
console.log(number);\r
console.log(typeof number);\r
\r
const string = number.toString();\r
\r
console.log(string);\r
console.log(typeof string);
`})}),`
`,e.jsxs(n.h4,{id:"boolean",children:["Boolean",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#boolean",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Booleans zijn waarden die waar of onwaar kunnen zijn. Ze worden\r
gebruikt om beslissingen te nemen in je code.`}),`
`,e.jsx(n.p,{children:"Enkele voorbeelden van booleans:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const x = true;\r
const y = false;
`})}),`
`,e.jsxs(n.p,{children:[`Booleans worden vaak gebruikt in combinatie met conditionele\r
statements zoals `,e.jsx(n.code,{children:"if"})," en ",e.jsx(n.code,{children:"else"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`if (x) {\r
  console.log("Dit wordt uitgevoerd");\r
} else {\r
  console.log("Dit wordt niet uitgevoerd");\r
}
`})}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const text = "";\r
if (text) {\r
  console.log("Text heeft een waarde");\r
} else {\r
  console.log("Text heeft geen waarde");\r
}
`})}),`
`,e.jsxs(n.h4,{id:"undefined-en-null",children:["Undefined en null",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#undefined-en-null",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Undefined"})," en ",e.jsx(n.code,{children:"null"})," zijn speciale waarden in JavaScript. ",e.jsx(n.code,{children:"Undefined"}),`\r
betekent dat een variabele niet is gedefinieerd, terwijl `,e.jsx(n.code,{children:"null"}),` betekent\r
dat een variabele geen waarde heeft.`]}),`
`,e.jsx(n.p,{children:"Enkele voorbeelden:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let z;\r
console.log(z); // undefined\r
\r
const y = null;\r
console.log(y); // null
`})}),`
`,e.jsx(n.p,{children:`Null staat voor een lege object pointer.\r
Het type van een variable met de waarde null, is object.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`console.log(typeof y); // object
`})}),`
`,e.jsx(n.p,{children:`Maak je geen zorgen, het verschil tussen beide zal naarmate je meer codeert,\r
duidelijker worden.`})]})}function i(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(r,{...l})}):r(l)}export{i as default};
