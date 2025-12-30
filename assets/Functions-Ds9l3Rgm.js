const e=`Functies zijn één van de fundamentele bouwblokken in JavaScript.\r
\r
Een functie is een JavaScript procedure; een verzameling van instructies dat een taak uitvoert of een waarde berekent.\r
\r
---\r
\r
## Declaratie\r
\r
Om een functie te gebruiken, moet je deze eerst declareren. Dit doe je door de functie een naam te geven en de instructies die de functie moet uitvoeren tussen accolades te plaatsen.\r
\r
\`\`\`javacript\r
function greet() {\r
    console.log('Hello, world!');\r
}\r
\`\`\`\r
\r
Deze functie heet \`greet\` en zal de string \`'Hello, world!'\` loggen naar de console wanneer deze wordt aangeroepen.\r
\r
We maken gebruik van het keyword \`function\`.\r
\r
We kunnen ook een functie maken waarmee we één of meerdere parameters meegeven:\r
\r
\`\`\`javacript\r
function greet(name) {\r
    console.log(\`Hello, \${name}!\`);\r
}\r
\r
greet('John');\r
\`\`\`\r
\r
Deze functie heet \`greet\` en zal de string \`'Hello, John!'\` loggen naar de console wanneer deze wordt aangeroepen. De parameter in een string.\r
\r
Een functie heeft vaak een \`return\` waarde:\r
\r
\`\`\`javacript\r
function add(a, b) {\r
    return a + b;\r
}\r
\r
const sum = add(2, 3);\r
console.log(sum); // 5\r
\`\`\`\r
\r
Deze functie heet \`add\` en zal de som van de twee parameters \`a\` en \`b\` teruggeven.\r
\r
---\r
\r
## Functies aanroepen\r
\r
Om een functie aan te roepen, schrijf je de naam van de functie gevolgd door ronde haakjes. Als de functie parameters verwacht, geef je deze mee tussen de haakjes.\r
\r
\`\`\`javascript\r
myFunction();\r
\r
myFunctionWithParams("hello", "world");\r
\`\`\`\r
\r
---\r
\r
## Het \`return\` keyword begrijpen\r
\r
Het \`return\` keyword wordt gebruikt om een waarde terug te geven vanuit een functie. Wanneer de functie een waarde teruggeeft, kan je deze waarde opslaan in een variabele.\r
\r
- Een \`return\` statement stopt verdere uitvoering van de function body.\r
\r
\`\`\`javascript\r
function add(a, b) {\r
  return a + b;\r
  console.log("Deze code wordt niet uitgevoerd");\r
}\r
\`\`\`\r
\r
- \`return\` kan meerdere malen in de function body voorkomen:\r
\r
\`\`\`javascript\r
function add(a, b) {\r
  if (a < 0) {\r
    return "a is negatief";\r
  }\r
  return a + b;\r
}\r
\`\`\`\r
\r
- Als je een \`return\` statement gebruikt zonder waarde, zal de functie onmiddellijk stoppen en \`undefined\` teruggeven.\r
\r
\`\`\`javascript\r
function myFunc() {\r
  return;\r
}\r
\r
const result = myFunc();\r
\r
console.log(result); // undefined\r
\`\`\`\r
\r
---\r
\r
## Arrow functions\r
\r
Arrow functions zijn een nieuwe manier om functies te schrijven in ES6. Ze zijn korter en hebben een andere syntax dan reguliere functies.\r
\r
Een arrow functie wordt gedeclareerd met een arrow operator \`=>\`.\r
\r
\`\`\`javascript\r
const greet1 = () => {\r
  console.log("Hello, world!");\r
};\r
\r
greet1();\r
\`\`\`\r
\r
Deze functie heet \`greet\` en zal de string \`'Hello, world!'\` loggen naar de console wanneer deze wordt aangeroepen.\r
\r
- Als de functie maar één statement bevat, kan je de accolades en het \`return\` keyword weglaten.\r
\r
\`\`\`javascript\r
const greet2 = () => console.log("Hello, world!");\r
greet2();\r
\`\`\`\r
\r
- Als de functie één parameter heeft, kan je de ronde haakjes weglaten.\r
\r
\`\`\`javascript\r
const greet3 = (name) => console.log(\`Hello, \${name}!\`);\r
greet3("John");\r
\`\`\`\r
\r
- Als de functie enkel de return waarde van één expressie is, kan je het \`return\` statement weglaten.\r
\r
\`\`\`javascript\r
const add = (a, b) => a + b;\r
const sum = add(2, 3);\r
console.log(sum); // 5\r
\`\`\`\r
\r
### Opgelet\r
\r
Via een array functie ken je een waarde toe aan variabele.\r
\r
De waarde van die variabele is de functie (een functie object).\r
\r
Wanneer je de variabele gebruikt zonder ronde haakjes (); dan refereer je naar de waarde van de variabele = het functie object. Maar je roept de functie niet aan!\r
\r
\`\`\`javascript\r
const greet4 = () => console.log("Hello, world!");\r
\r
greet4; // Doet niets\r
\r
greet4(); // Voert de functie uit\r
\`\`\`\r
\r
---\r
\r
## Function body\r
\r
De body van een functie is de code die tussen de accolades staat. Dit is de code die wordt uitgevoerd wanneer de functie wordt aangeroepen.\r
\r
De body van een functie kan bestaan uit één of meerdere statements.\r
\r
### Opgelet\r
\r
Veranderingen in de function body aan parameters van een primitief type zijn niet zichtbaar in de scope van de aanroeper:\r
\r
\`\`\`javascript\r
function changeValue(value) {\r
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
console.log(x);\r
\`\`\`\r
\r
Veranderingen in de function body aan parameters van een object type zijn wel zichtbaar in de scope van de aanroeper:\r
\r
\`\`\`javascript\r
function changeValue(obj) {\r
  obj.value = 10;\r
}\r
\r
let x = { value: 5 };\r
\r
changeValue(x);\r
\r
console.log(x.value); // Wat verwacht je hier?\r
\`\`\`\r
\r
---\r
\r
## Rest parameter\r
\r
De rest parameter syntax laat je een onbepaald aantal argumenten doorgeven aan een functie als een array.\r
\r
De rest parameter wordt aangeduid met drie puntjes \`...\` gevolgd door de naam van de array waarin de argumenten worden opgeslagen.\r
\r
\`\`\`javascript\r
function printEveryArg(...args) {\r
  for (let arg of args) {\r
    console.log(arg);\r
  }\r
}\r
\r
printEveryArg(1, 2, 3, 4, 5);\r
printEveryArg("a", "b", "c");\r
printEveryArg(true, false);\r
\`\`\`\r
\r
Deze functie heet \`printEveryArg\` en zal elk argument loggen naar de console wanneer deze wordt aangeroepen.\r
\r
De rest parameter kan enkel de laatste parameter zijn in de functiedeclaratie.\r
\r
\`\`\`javascript\r
// Juist\r
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
\r
\`\`\`\r
\r
---\r
\r
## Hoisting\r
\r
Functie-declaraties worden gehoist. Dit betekent dat je een functie kan aanroepen voordat je deze hebt gedeclareerd.\r
Concreet betekend dit dat je een functie ergens helemaal onderaan in je JS-file kan declareren, en die toch bovenaan in je file kan aanroepen.\r
\r
\`\`\`javascript\r
greet();\r
\r
// ... andere code\r
\r
function greet() {\r
  console.log("Hello, world!");\r
}\r
\`\`\`\r
\r
Deze code zal de string \`'Hello, world!'\` loggen naar de console wanneer deze wordt aangeroepen.\r
\r
---\r
\r
## Doorgeven als parameter\r
\r
Functies kunnen ook worden doorgegeven als parameters aan andere functies.\r
\r
\`\`\`javascript\r
function greet() {\r
  console.log("Hello, world!");\r
}\r
\r
function callGreet(parameter) {\r
  parameter();\r
}\r
\r
callGreet(greet);\r
\`\`\`\r
\r
Deze code zal de string \`'Hello, world!'\` loggen naar de console wanneer deze wordt aangeroepen.\r
\r
---\r
\r
## Scope\r
\r
De scope van een variabele is de context waarin de variabele bestaat. In JavaScript zijn er twee soorten scope: globale scope en block/lokale scope.\r
\r
Variabelen die gedeclareerd zijn **buiten een functie** hebben een **globale scope**. Deze variabelen zijn beschikbaar in de gehele code.\r
\r
Variabelen die gedeclareerd zijn **binnen een functie** hebben een **lokale scope**. Deze variabelen zijn enkel beschikbaar binnen de functie.\r
\r
**Block scope:**\r
\r
Variabelen die gedeclareerd zijn binnen een block hebben een **block scope**. Een block is een set van accolades \`{}\` en kan bijvoorbeeld een functie body of een if statement zijn.\r
\r
Bekijk onderstaande situaties heel goed; goei ze zeker ook eens afzonderlijk in de Console en bekijk de output.\r
\r
\`\`\`javascript\r
// Situatie 1\r
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
console.log(bool);\r
\`\`\`\r
\r
Merk op dat JavaScript je niet zal tegenhouden om variabelen aan te roepen op plaatsen waar deze eigenlijk niet toegankelijk zijn.\r
\r
---\r
\r
## Vervuiling van de Scope\r
\r
Vervuiling van de scope treedt op wanneer er variabelen worden gedeclareerd in de globale scope die dezelfde naam hebben als variabelen in de lokale scope.\r
\r
Dit kan leiden tot onverwachte resultaten en bugs in je code. Om vervuiling van de scope te voorkomen, gebruik je best unieke, betekenisvolle namen voor je variabelen.\r
`;export{e as default};
