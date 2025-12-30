import{j as e}from"./index-C0jUBqcl.js";function a(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Functies zijn één van de fundamentele bouwblokken in JavaScript."}),`
`,e.jsx(n.p,{children:"Een functie is een JavaScript procedure; een verzameling van instructies dat een taak uitvoert of een waarde berekent."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"declaratie",children:["Declaratie",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#declaratie",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Om een functie te gebruiken, moet je deze eerst declareren. Dit doe je door de functie een naam te geven en de instructies die de functie moet uitvoeren tussen accolades te plaatsen."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javacript",children:`function greet() {\r
    console.log('Hello, world!');\r
}
`})}),`
`,e.jsxs(n.p,{children:["Deze functie heet ",e.jsx(n.code,{children:"greet"})," en zal de string ",e.jsx(n.code,{children:"'Hello, world!'"})," loggen naar de console wanneer deze wordt aangeroepen."]}),`
`,e.jsxs(n.p,{children:["We maken gebruik van het keyword ",e.jsx(n.code,{children:"function"}),"."]}),`
`,e.jsx(n.p,{children:"We kunnen ook een functie maken waarmee we één of meerdere parameters meegeven:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javacript",children:`function greet(name) {\r
    console.log(\`Hello, \${name}!\`);\r
}\r
\r
greet('John');
`})}),`
`,e.jsxs(n.p,{children:["Deze functie heet ",e.jsx(n.code,{children:"greet"})," en zal de string ",e.jsx(n.code,{children:"'Hello, John!'"})," loggen naar de console wanneer deze wordt aangeroepen. De parameter in een string."]}),`
`,e.jsxs(n.p,{children:["Een functie heeft vaak een ",e.jsx(n.code,{children:"return"})," waarde:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javacript",children:`function add(a, b) {\r
    return a + b;\r
}\r
\r
const sum = add(2, 3);\r
console.log(sum); // 5
`})}),`
`,e.jsxs(n.p,{children:["Deze functie heet ",e.jsx(n.code,{children:"add"})," en zal de som van de twee parameters ",e.jsx(n.code,{children:"a"})," en ",e.jsx(n.code,{children:"b"})," teruggeven."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"functies-aanroepen",children:["Functies aanroepen",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#functies-aanroepen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Om een functie aan te roepen, schrijf je de naam van de functie gevolgd door ronde haakjes. Als de functie parameters verwacht, geef je deze mee tussen de haakjes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`myFunction();\r
\r
myFunctionWithParams("hello", "world");
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"het-return-keyword-begrijpen",children:["Het ",e.jsx(n.code,{children:"return"})," keyword begrijpen",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#het-return-keyword-begrijpen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"return"})," keyword wordt gebruikt om een waarde terug te geven vanuit een functie. Wanneer de functie een waarde teruggeeft, kan je deze waarde opslaan in een variabele."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Een ",e.jsx(n.code,{children:"return"})," statement stopt verdere uitvoering van de function body."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function add(a, b) {\r
  return a + b;\r
  console.log("Deze code wordt niet uitgevoerd");\r
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"return"})," kan meerdere malen in de function body voorkomen:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function add(a, b) {\r
  if (a < 0) {\r
    return "a is negatief";\r
  }\r
  return a + b;\r
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Als je een ",e.jsx(n.code,{children:"return"})," statement gebruikt zonder waarde, zal de functie onmiddellijk stoppen en ",e.jsx(n.code,{children:"undefined"})," teruggeven."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function myFunc() {\r
  return;\r
}\r
\r
const result = myFunc();\r
\r
console.log(result); // undefined
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"arrow-functions",children:["Arrow functions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#arrow-functions",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Arrow functions zijn een nieuwe manier om functies te schrijven in ES6. Ze zijn korter en hebben een andere syntax dan reguliere functies."}),`
`,e.jsxs(n.p,{children:["Een arrow functie wordt gedeclareerd met een arrow operator ",e.jsx(n.code,{children:"=>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const greet1 = () => {\r
  console.log("Hello, world!");\r
};\r
\r
greet1();
`})}),`
`,e.jsxs(n.p,{children:["Deze functie heet ",e.jsx(n.code,{children:"greet"})," en zal de string ",e.jsx(n.code,{children:"'Hello, world!'"})," loggen naar de console wanneer deze wordt aangeroepen."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Als de functie maar één statement bevat, kan je de accolades en het ",e.jsx(n.code,{children:"return"})," keyword weglaten."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const greet2 = () => console.log("Hello, world!");\r
greet2();
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Als de functie één parameter heeft, kan je de ronde haakjes weglaten."}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:'const greet3 = (name) => console.log(`Hello, ${name}!`);\r\ngreet3("John");\n'})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Als de functie enkel de return waarde van één expressie is, kan je het ",e.jsx(n.code,{children:"return"})," statement weglaten."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const add = (a, b) => a + b;\r
const sum = add(2, 3);\r
console.log(sum); // 5
`})}),`
`,e.jsxs(n.h3,{id:"opgelet",children:["Opgelet",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opgelet",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Via een array functie ken je een waarde toe aan variabele."}),`
`,e.jsx(n.p,{children:"De waarde van die variabele is de functie (een functie object)."}),`
`,e.jsx(n.p,{children:"Wanneer je de variabele gebruikt zonder ronde haakjes (); dan refereer je naar de waarde van de variabele = het functie object. Maar je roept de functie niet aan!"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const greet4 = () => console.log("Hello, world!");\r
\r
greet4; // Doet niets\r
\r
greet4(); // Voert de functie uit
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"function-body",children:["Function body",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#function-body",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"De body van een functie is de code die tussen de accolades staat. Dit is de code die wordt uitgevoerd wanneer de functie wordt aangeroepen."}),`
`,e.jsx(n.p,{children:"De body van een functie kan bestaan uit één of meerdere statements."}),`
`,e.jsxs(n.h3,{id:"opgelet-1",children:["Opgelet",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opgelet-1",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Veranderingen in de function body aan parameters van een primitief type zijn niet zichtbaar in de scope van de aanroeper:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function changeValue(value) {\r
  value = 10;\r
}\r
\r
let x = 5;\r
\r
changeValue(x);\r
\r
console.log(x); // Wat verwacht je hier?\r
\r
// Je moet de nieuwe waarde teruggeven\r
function changeValue2(value) {\r
  return 10;\r
}\r
\r
x = changeValue2(x);\r
\r
console.log(x);
`})}),`
`,e.jsx(n.p,{children:"Veranderingen in de function body aan parameters van een object type zijn wel zichtbaar in de scope van de aanroeper:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function changeValue(obj) {\r
  obj.value = 10;\r
}\r
\r
let x = { value: 5 };\r
\r
changeValue(x);\r
\r
console.log(x.value); // Wat verwacht je hier?
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"rest-parameter",children:["Rest parameter",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rest-parameter",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"De rest parameter syntax laat je een onbepaald aantal argumenten doorgeven aan een functie als een array."}),`
`,e.jsxs(n.p,{children:["De rest parameter wordt aangeduid met drie puntjes ",e.jsx(n.code,{children:"..."})," gevolgd door de naam van de array waarin de argumenten worden opgeslagen."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function printEveryArg(...args) {\r
  for (let arg of args) {\r
    console.log(arg);\r
  }\r
}\r
\r
printEveryArg(1, 2, 3, 4, 5);\r
printEveryArg("a", "b", "c");\r
printEveryArg(true, false);
`})}),`
`,e.jsxs(n.p,{children:["Deze functie heet ",e.jsx(n.code,{children:"printEveryArg"})," en zal elk argument loggen naar de console wanneer deze wordt aangeroepen."]}),`
`,e.jsx(n.p,{children:"De rest parameter kan enkel de laatste parameter zijn in de functiedeclaratie."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Juist\r
const printAllWithTitle = (title, ...args) => {\r
    console.log(title)\r
    for (let arg of args) {\r
        console.log(arg);\r
    }\r
}\r
\r
printAllWithTitle("Fruit", "appel", "peer", "banaan");\r
printAllWithTitle("Nummers", 1, 2, 3, 4);\r
\r
// Fout\r
const printAllWrong = (...args, title) => {\r
    console.log(title)\r
    for (let arg of args) {\r
        console.log(arg);\r
    }\r
} // Uncaught SyntaxError: Rest parameter must be last formal parameter\r

`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"hoisting",children:["Hoisting",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hoisting",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Functie-declaraties worden gehoist. Dit betekent dat je een functie kan aanroepen voordat je deze hebt gedeclareerd.\r
Concreet betekend dit dat je een functie ergens helemaal onderaan in je JS-file kan declareren, en die toch bovenaan in je file kan aanroepen.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`greet();\r
\r
// ... andere code\r
\r
function greet() {\r
  console.log("Hello, world!");\r
}
`})}),`
`,e.jsxs(n.p,{children:["Deze code zal de string ",e.jsx(n.code,{children:"'Hello, world!'"})," loggen naar de console wanneer deze wordt aangeroepen."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"doorgeven-als-parameter",children:["Doorgeven als parameter",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#doorgeven-als-parameter",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Functies kunnen ook worden doorgegeven als parameters aan andere functies."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function greet() {\r
  console.log("Hello, world!");\r
}\r
\r
function callGreet(parameter) {\r
  parameter();\r
}\r
\r
callGreet(greet);
`})}),`
`,e.jsxs(n.p,{children:["Deze code zal de string ",e.jsx(n.code,{children:"'Hello, world!'"})," loggen naar de console wanneer deze wordt aangeroepen."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"scope",children:["Scope",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#scope",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"De scope van een variabele is de context waarin de variabele bestaat. In JavaScript zijn er twee soorten scope: globale scope en block/lokale scope."}),`
`,e.jsxs(n.p,{children:["Variabelen die gedeclareerd zijn ",e.jsx(n.strong,{children:"buiten een functie"})," hebben een ",e.jsx(n.strong,{children:"globale scope"}),". Deze variabelen zijn beschikbaar in de gehele code."]}),`
`,e.jsxs(n.p,{children:["Variabelen die gedeclareerd zijn ",e.jsx(n.strong,{children:"binnen een functie"})," hebben een ",e.jsx(n.strong,{children:"lokale scope"}),". Deze variabelen zijn enkel beschikbaar binnen de functie."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Block scope:"})}),`
`,e.jsxs(n.p,{children:["Variabelen die gedeclareerd zijn binnen een block hebben een ",e.jsx(n.strong,{children:"block scope"}),". Een block is een set van accolades ",e.jsx(n.code,{children:"{}"})," en kan bijvoorbeeld een functie body of een if statement zijn."]}),`
`,e.jsx(n.p,{children:"Bekijk onderstaande situaties heel goed; goei ze zeker ook eens afzonderlijk in de Console en bekijk de output."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Situatie 1\r
const myFunc = () => {\r
  let bool = true;\r
  if (true) {\r
    let x = 5;\r
    console.log(bool); // true\r
    console.log(x); // 5\r
  }\r
};\r
\r
myFunc();\r
\r
// Situatie 2\r
const myFunc2 = () => {\r
  let bool = true;\r
  if (true) {\r
    let x = 5;\r
    console.log(bool); // true\r
    console.log(x); // 5\r
  }\r
  console.log(bool);\r
};\r
\r
myFunc2();\r
\r
// Situatie 3\r
const myFunc3 = () => {\r
  let bool = true;\r
  if (true) {\r
    let x = 5;\r
    console.log(bool); // true\r
    console.log(x); // 5\r
  }\r
  console.log(bool);\r
  console.log(x); // ReferenceError: x is not defined\r
};\r
\r
myfunc3();\r
\r
// Situatie 4\r
const myFunc4 = () => {\r
  let bool = true;\r
  if (true) {\r
    let x = 5;\r
  }\r
};\r
\r
console.log(bool);
`})}),`
`,e.jsx(n.p,{children:"Merk op dat JavaScript je niet zal tegenhouden om variabelen aan te roepen op plaatsen waar deze eigenlijk niet toegankelijk zijn."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"vervuiling-van-de-scope",children:["Vervuiling van de Scope",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vervuiling-van-de-scope",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Vervuiling van de scope treedt op wanneer er variabelen worden gedeclareerd in de globale scope die dezelfde naam hebben als variabelen in de lokale scope."}),`
`,e.jsx(n.p,{children:"Dit kan leiden tot onverwachte resultaten en bugs in je code. Om vervuiling van de scope te voorkomen, gebruik je best unieke, betekenisvolle namen voor je variabelen."})]})}function l(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{l as default};
