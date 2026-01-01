import{j as e}from"./index-BbjdRKSI.js";function a(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"Functies zijn één van de fundamentele bouwblokken in JavaScript."}),`
`,e.jsx(s.p,{children:"Een functie is een JavaScript procedure; een verzameling van instructies dat een taak uitvoert of een waarde berekent."}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"declaratie",children:["Declaratie",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#declaratie",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Om een functie te gebruiken, moet je deze eerst declareren. Dit doe je door de functie een naam te geven en de instructies die de functie moet uitvoeren tussen accolades te plaatsen."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"greet"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:"'Hello, world!'"}),`);\r
}
`]})}),`
`,e.jsxs(s.p,{children:["Deze functie heet ",e.jsx(s.code,{children:"greet"})," en zal de string ",e.jsx(s.code,{children:"'Hello, world!'"})," loggen naar de console wanneer deze wordt aangeroepen."]}),`
`,e.jsxs(s.p,{children:["We maken gebruik van het keyword ",e.jsx(s.code,{children:"function"}),"."]}),`
`,e.jsx(s.p,{children:"We kunnen ook een functie maken waarmee we één of meerdere parameters meegeven:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"greet"}),"(",e.jsx(s.span,{className:"hljs-params",children:"name"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsxs(s.span,{className:"hljs-string",children:["`Hello, ",e.jsx(s.span,{className:"hljs-subst",children:"${name}"}),"!`"]}),`);\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"greet"}),"(",e.jsx(s.span,{className:"hljs-string",children:"'John'"}),`);
`]})}),`
`,e.jsxs(s.p,{children:["Deze functie heet ",e.jsx(s.code,{children:"greet"})," en zal de string ",e.jsx(s.code,{children:"'Hello, John!'"})," loggen naar de console wanneer deze wordt aangeroepen. De parameter in een string."]}),`
`,e.jsxs(s.p,{children:["Een functie heeft vaak een ",e.jsx(s.code,{children:"return"})," waarde:"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"add"}),"(",e.jsx(s.span,{className:"hljs-params",children:"a, b"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"return"}),` a + b;\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," sum = ",e.jsx(s.span,{className:"hljs-title function_",children:"add"}),"(",e.jsx(s.span,{className:"hljs-number",children:"2"}),", ",e.jsx(s.span,{className:"hljs-number",children:"3"}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(sum); ",e.jsx(s.span,{className:"hljs-comment",children:"// 5"}),`
`]})}),`
`,e.jsxs(s.p,{children:["Deze functie heet ",e.jsx(s.code,{children:"add"})," en zal de som van de twee parameters ",e.jsx(s.code,{children:"a"})," en ",e.jsx(s.code,{children:"b"})," teruggeven."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"functies-aanroepen",children:["Functies aanroepen",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#functies-aanroepen",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Om een functie aan te roepen, schrijf je de naam van de functie gevolgd door ronde haakjes. Als de functie parameters verwacht, geef je deze mee tussen de haakjes."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-title function_",children:"myFunction"}),`();\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"myFunctionWithParams"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"hello"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"world"'}),`);
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"het-return-keyword-begrijpen",children:["Het ",e.jsx(s.code,{children:"return"})," keyword begrijpen",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#het-return-keyword-begrijpen",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Het ",e.jsx(s.code,{children:"return"})," keyword wordt gebruikt om een waarde terug te geven vanuit een functie. Wanneer de functie een waarde teruggeeft, kan je deze waarde opslaan in een variabele."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Een ",e.jsx(s.code,{children:"return"})," statement stopt verdere uitvoering van de function body."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"add"}),"(",e.jsx(s.span,{className:"hljs-params",children:"a, b"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"return"}),` a + b;\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Deze code wordt niet uitgevoerd"'}),`);\r
}
`]})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"return"})," kan meerdere malen in de function body voorkomen:"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"add"}),"(",e.jsx(s.span,{className:"hljs-params",children:"a, b"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (a < ",e.jsx(s.span,{className:"hljs-number",children:"0"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"return"})," ",e.jsx(s.span,{className:"hljs-string",children:'"a is negatief"'}),`;\r
  }\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"return"}),` a + b;\r
}
`]})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Als je een ",e.jsx(s.code,{children:"return"})," statement gebruikt zonder waarde, zal de functie onmiddellijk stoppen en ",e.jsx(s.code,{children:"undefined"})," teruggeven."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"myFunc"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"return"}),`;\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," result = ",e.jsx(s.span,{className:"hljs-title function_",children:"myFunc"}),`();\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(result); ",e.jsx(s.span,{className:"hljs-comment",children:"// undefined"}),`
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"arrow-functions",children:["Arrow functions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#arrow-functions",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Arrow functions zijn een nieuwe manier om functies te schrijven in ES6. Ze zijn korter en hebben een andere syntax dan reguliere functies."}),`
`,e.jsxs(s.p,{children:["Een arrow functie wordt gedeclareerd met een arrow operator ",e.jsx(s.code,{children:"=>"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"greet1"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Hello, world!"'}),`);\r
};\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"greet1"}),`();
`]})}),`
`,e.jsxs(s.p,{children:["Deze functie heet ",e.jsx(s.code,{children:"greet"})," en zal de string ",e.jsx(s.code,{children:"'Hello, world!'"})," loggen naar de console wanneer deze wordt aangeroepen."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Als de functie maar één statement bevat, kan je de accolades en het ",e.jsx(s.code,{children:"return"})," keyword weglaten."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"greet2"})," = (",e.jsx(s.span,{className:"hljs-params"}),") => ",e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Hello, world!"'}),`);\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"greet2"}),`();
`]})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Als de functie één parameter heeft, kan je de ronde haakjes weglaten."}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"greet3"})," = (",e.jsx(s.span,{className:"hljs-params",children:"name"}),") => ",e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsxs(s.span,{className:"hljs-string",children:["`Hello, ",e.jsx(s.span,{className:"hljs-subst",children:"${name}"}),"!`"]}),`);\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"greet3"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"John"'}),`);
`]})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Als de functie enkel de return waarde van één expressie is, kan je het ",e.jsx(s.code,{children:"return"})," statement weglaten."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"add"})," = (",e.jsx(s.span,{className:"hljs-params",children:"a, b"}),`) => a + b;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," sum = ",e.jsx(s.span,{className:"hljs-title function_",children:"add"}),"(",e.jsx(s.span,{className:"hljs-number",children:"2"}),", ",e.jsx(s.span,{className:"hljs-number",children:"3"}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(sum); ",e.jsx(s.span,{className:"hljs-comment",children:"// 5"}),`
`]})}),`
`,e.jsxs(s.h3,{id:"opgelet",children:["Opgelet",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opgelet",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Via een array functie ken je een waarde toe aan variabele."}),`
`,e.jsx(s.p,{children:"De waarde van die variabele is de functie (een functie object)."}),`
`,e.jsx(s.p,{children:"Wanneer je de variabele gebruikt zonder ronde haakjes (); dan refereer je naar de waarde van de variabele = het functie object. Maar je roept de functie niet aan!"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"greet4"})," = (",e.jsx(s.span,{className:"hljs-params"}),") => ",e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Hello, world!"'}),`);\r
\r
greet4; `,e.jsx(s.span,{className:"hljs-comment",children:"// Doet niets"}),`\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"greet4"}),"(); ",e.jsx(s.span,{className:"hljs-comment",children:"// Voert de functie uit"}),`
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"function-body",children:["Function body",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#function-body",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"De body van een functie is de code die tussen de accolades staat. Dit is de code die wordt uitgevoerd wanneer de functie wordt aangeroepen."}),`
`,e.jsx(s.p,{children:"De body van een functie kan bestaan uit één of meerdere statements."}),`
`,e.jsxs(s.h3,{id:"opgelet-1",children:["Opgelet",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opgelet-1",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Veranderingen in de function body aan parameters van een primitief type zijn niet zichtbaar in de scope van de aanroeper:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"changeValue"}),"(",e.jsx(s.span,{className:"hljs-params",children:"value"}),`) {\r
  value = `,e.jsx(s.span,{className:"hljs-number",children:"10"}),`;\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," x = ",e.jsx(s.span,{className:"hljs-number",children:"5"}),`;\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"changeValue"}),`(x);\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(x); ",e.jsx(s.span,{className:"hljs-comment",children:"// Wat verwacht je hier?"}),`\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Je moet de nieuwe waarde teruggeven"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"changeValue2"}),"(",e.jsx(s.span,{className:"hljs-params",children:"value"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"return"})," ",e.jsx(s.span,{className:"hljs-number",children:"10"}),`;\r
}\r
\r
x = `,e.jsx(s.span,{className:"hljs-title function_",children:"changeValue2"}),`(x);\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(x);
`]})}),`
`,e.jsx(s.p,{children:"Veranderingen in de function body aan parameters van een object type zijn wel zichtbaar in de scope van de aanroeper:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"changeValue"}),"(",e.jsx(s.span,{className:"hljs-params",children:"obj"}),`) {\r
  obj.`,e.jsx(s.span,{className:"hljs-property",children:"value"})," = ",e.jsx(s.span,{className:"hljs-number",children:"10"}),`;\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," x = { ",e.jsx(s.span,{className:"hljs-attr",children:"value"}),": ",e.jsx(s.span,{className:"hljs-number",children:"5"}),` };\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"changeValue"}),`(x);\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(x.",e.jsx(s.span,{className:"hljs-property",children:"value"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// Wat verwacht je hier?"}),`
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"rest-parameter",children:["Rest parameter",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rest-parameter",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"De rest parameter syntax laat je een onbepaald aantal argumenten doorgeven aan een functie als een array."}),`
`,e.jsxs(s.p,{children:["De rest parameter wordt aangeduid met drie puntjes ",e.jsx(s.code,{children:"..."})," gevolgd door de naam van de array waarin de argumenten worden opgeslagen."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"printEveryArg"}),"(",e.jsx(s.span,{className:"hljs-params",children:"...args"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"for"})," (",e.jsx(s.span,{className:"hljs-keyword",children:"let"})," arg ",e.jsx(s.span,{className:"hljs-keyword",children:"of"}),` args) {\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(arg);\r
  }\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"printEveryArg"}),"(",e.jsx(s.span,{className:"hljs-number",children:"1"}),", ",e.jsx(s.span,{className:"hljs-number",children:"2"}),", ",e.jsx(s.span,{className:"hljs-number",children:"3"}),", ",e.jsx(s.span,{className:"hljs-number",children:"4"}),", ",e.jsx(s.span,{className:"hljs-number",children:"5"}),`);\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"printEveryArg"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"a"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"b"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"c"'}),`);\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"printEveryArg"}),"(",e.jsx(s.span,{className:"hljs-literal",children:"true"}),", ",e.jsx(s.span,{className:"hljs-literal",children:"false"}),`);
`]})}),`
`,e.jsxs(s.p,{children:["Deze functie heet ",e.jsx(s.code,{children:"printEveryArg"})," en zal elk argument loggen naar de console wanneer deze wordt aangeroepen."]}),`
`,e.jsx(s.p,{children:"De rest parameter kan enkel de laatste parameter zijn in de functiedeclaratie."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Juist"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"printAllWithTitle"})," = (",e.jsx(s.span,{className:"hljs-params",children:"title, ...args"}),`) => {\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(title)\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"for"})," (",e.jsx(s.span,{className:"hljs-keyword",children:"let"})," arg ",e.jsx(s.span,{className:"hljs-keyword",children:"of"}),` args) {\r
        `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(arg);\r
    }\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"printAllWithTitle"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Fruit"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"appel"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"peer"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"banaan"'}),`);\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"printAllWithTitle"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Nummers"'}),", ",e.jsx(s.span,{className:"hljs-number",children:"1"}),", ",e.jsx(s.span,{className:"hljs-number",children:"2"}),", ",e.jsx(s.span,{className:"hljs-number",children:"3"}),", ",e.jsx(s.span,{className:"hljs-number",children:"4"}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Fout"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"printAllWrong"})," = (",e.jsx(s.span,{className:"hljs-params",children:"...args, title"}),`) => {\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(title)\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"for"})," (",e.jsx(s.span,{className:"hljs-keyword",children:"let"})," arg ",e.jsx(s.span,{className:"hljs-keyword",children:"of"}),` args) {\r
        `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(arg);\r
    }\r
} `,e.jsx(s.span,{className:"hljs-comment",children:"// Uncaught SyntaxError: Rest parameter must be last formal parameter"}),`\r

`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"hoisting",children:["Hoisting",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hoisting",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Functie-declaraties worden gehoist. Dit betekent dat je een functie kan aanroepen voordat je deze hebt gedeclareerd.\r
Concreet betekend dit dat je een functie ergens helemaal onderaan in je JS-file kan declareren, en die toch bovenaan in je file kan aanroepen.`}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-title function_",children:"greet"}),`();\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// ... andere code"}),`\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"greet"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Hello, world!"'}),`);\r
}
`]})}),`
`,e.jsxs(s.p,{children:["Deze code zal de string ",e.jsx(s.code,{children:"'Hello, world!'"})," loggen naar de console wanneer deze wordt aangeroepen."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"doorgeven-als-parameter",children:["Doorgeven als parameter",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#doorgeven-als-parameter",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Functies kunnen ook worden doorgegeven als parameters aan andere functies."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"greet"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Hello, world!"'}),`);\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"callGreet"}),"(",e.jsx(s.span,{className:"hljs-params",children:"parameter"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"parameter"}),`();\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"callGreet"}),`(greet);
`]})}),`
`,e.jsxs(s.p,{children:["Deze code zal de string ",e.jsx(s.code,{children:"'Hello, world!'"})," loggen naar de console wanneer deze wordt aangeroepen."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"scope",children:["Scope",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#scope",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"De scope van een variabele is de context waarin de variabele bestaat. In JavaScript zijn er twee soorten scope: globale scope en block/lokale scope."}),`
`,e.jsxs(s.p,{children:["Variabelen die gedeclareerd zijn ",e.jsx(s.strong,{children:"buiten een functie"})," hebben een ",e.jsx(s.strong,{children:"globale scope"}),". Deze variabelen zijn beschikbaar in de gehele code."]}),`
`,e.jsxs(s.p,{children:["Variabelen die gedeclareerd zijn ",e.jsx(s.strong,{children:"binnen een functie"})," hebben een ",e.jsx(s.strong,{children:"lokale scope"}),". Deze variabelen zijn enkel beschikbaar binnen de functie."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Block scope:"})}),`
`,e.jsxs(s.p,{children:["Variabelen die gedeclareerd zijn binnen een block hebben een ",e.jsx(s.strong,{children:"block scope"}),". Een block is een set van accolades ",e.jsx(s.code,{children:"{}"})," en kan bijvoorbeeld een functie body of een if statement zijn."]}),`
`,e.jsx(s.p,{children:"Bekijk onderstaande situaties heel goed; goei ze zeker ook eens afzonderlijk in de Console en bekijk de output."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Situatie 1"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"myFunc"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," bool = ",e.jsx(s.span,{className:"hljs-literal",children:"true"}),`;\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (",e.jsx(s.span,{className:"hljs-literal",children:"true"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," x = ",e.jsx(s.span,{className:"hljs-number",children:"5"}),`;\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(bool); ",e.jsx(s.span,{className:"hljs-comment",children:"// true"}),`\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(x); ",e.jsx(s.span,{className:"hljs-comment",children:"// 5"}),`\r
  }\r
};\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"myFunc"}),`();\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Situatie 2"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"myFunc2"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," bool = ",e.jsx(s.span,{className:"hljs-literal",children:"true"}),`;\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (",e.jsx(s.span,{className:"hljs-literal",children:"true"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," x = ",e.jsx(s.span,{className:"hljs-number",children:"5"}),`;\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(bool); ",e.jsx(s.span,{className:"hljs-comment",children:"// true"}),`\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(x); ",e.jsx(s.span,{className:"hljs-comment",children:"// 5"}),`\r
  }\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(bool);\r
};\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"myFunc2"}),`();\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Situatie 3"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"myFunc3"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," bool = ",e.jsx(s.span,{className:"hljs-literal",children:"true"}),`;\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (",e.jsx(s.span,{className:"hljs-literal",children:"true"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," x = ",e.jsx(s.span,{className:"hljs-number",children:"5"}),`;\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(bool); ",e.jsx(s.span,{className:"hljs-comment",children:"// true"}),`\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(x); ",e.jsx(s.span,{className:"hljs-comment",children:"// 5"}),`\r
  }\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(bool);\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(x); ",e.jsx(s.span,{className:"hljs-comment",children:"// ReferenceError: x is not defined"}),`\r
};\r
\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"myfunc3"}),`();\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Situatie 4"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"myFunc4"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," bool = ",e.jsx(s.span,{className:"hljs-literal",children:"true"}),`;\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (",e.jsx(s.span,{className:"hljs-literal",children:"true"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," x = ",e.jsx(s.span,{className:"hljs-number",children:"5"}),`;\r
  }\r
};\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(bool);
`]})}),`
`,e.jsx(s.p,{children:"Merk op dat JavaScript je niet zal tegenhouden om variabelen aan te roepen op plaatsen waar deze eigenlijk niet toegankelijk zijn."}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"vervuiling-van-de-scope",children:["Vervuiling van de Scope",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vervuiling-van-de-scope",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Vervuiling van de scope treedt op wanneer er variabelen worden gedeclareerd in de globale scope die dezelfde naam hebben als variabelen in de lokale scope."}),`
`,e.jsx(s.p,{children:"Dit kan leiden tot onverwachte resultaten en bugs in je code. Om vervuiling van de scope te voorkomen, gebruik je best unieke, betekenisvolle namen voor je variabelen."})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{r as default};
