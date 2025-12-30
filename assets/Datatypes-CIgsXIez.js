const n=`JavaScript is een **dynamisch getypeerde taal**, wat betekent dat je niet\r
moet aangeven welk type gegevens je in een variabele zal opslaan.\r
JavaScript zal automatisch het type van de gegevens bepalen.\r
\r
JavaScript heeft een aantal primitieve datatypes, zoals:\r
\r
- Number\r
- String\r
- Boolean\r
- Undefined\r
- Null\r
\r
Er zijn ook objecttypes\r
\r
- Object\r
- Array\r
- Function\r
\r
#### Number\r
\r
Numbers zijn getallen. Ze kunnen zowel gehele getallen als\r
kommagetallen zijn.\r
\r
Enkele voorbeelden van numbers:\r
\r
\`\`\`javascript\r
const x = 5;\r
const y = 3.14;\r
const z = -10;\r
\`\`\`\r
\r
Operatoren:\r
\r
- \\*\r
- &plus;\r
- &minus;\r
- /\r
- % (modulo)\r
\r
#### String\r
\r
Strings zijn teksten. Ze worden gedefinieerd tussen enkele of dubbele\r
aanhalingstekens of _backticks_.\r
\r
Enkele voorbeelden van strings:\r
\r
\`\`\`javascript\r
const x = "Hello";\r
const y = "World";\r
const z = "42";\r
const u = \`Movie\`;\r
\`\`\`\r
\r
De operator '+' kan gebruikt worden om twee strings te concateneren.\r
\r
\`\`\`javascript\r
const greeting = x + " " + y;\r
console.log(greeting); // "Hello World"\r
\`\`\`\r
\r
Op een variabele van het type string kan je altijd\r
\`.length\` oproepen om het aantal karakters te\r
tellen.\r
\r
\`\`\`javascript\r
const text = "Hello";\r
console.log(text.length); // 5\r
\`\`\`\r
\r
Je kan ook een number omzetten naar een string met de methode\r
\`.toString()\`.\r
\r
\`\`\`javascript\r
const number = 42;\r
console.log(number);\r
console.log(typeof number);\r
\r
const string = number.toString();\r
\r
console.log(string);\r
console.log(typeof string);\r
\`\`\`\r
\r
<div class="card paragraph">\r
<h2 class="subtitle">Boolean</h2>\r
\r
Booleans zijn waarden die waar of onwaar kunnen zijn. Ze worden\r
gebruikt om beslissingen te nemen in je code.\r
\r
Enkele voorbeelden van booleans:\r
\r
\`\`\`javascript\r
const x = true;\r
const y = false;\r
\`\`\`\r
\r
Booleans worden vaak gebruikt in combinatie met conditionele\r
statements zoals \`if\` en \`else\`.\r
\r
\`\`\`javascript\r
if (x) {\r
  console.log("Dit wordt uitgevoerd");\r
} else {\r
  console.log("Dit wordt niet uitgevoerd");\r
}\r
\`\`\`\r
\r
Elke waarde heeft ook een boolean equivalent:\r
\r
- 0 is \`false\`\r
- 1 is \`true\`\r
- "" is \`false\`\r
- "Hello" is \`true\`\r
- null is \`false\`\r
- undefined is \`false\`\r
- NaN is \`false\`\r
\r
Zo kan je bevoorbeeld snel controleren of een string variable een\r
waarde heeft:\r
\r
\`\`\`javascript\r
const text = "";\r
if (text) {\r
  console.log("Text heeft een waarde");\r
} else {\r
  console.log("Text heeft geen waarde");\r
}\r
\`\`\`\r
\r
#### Undefined en null\r
\r
\`Undefined\` en \`null\` zijn speciale waarden in JavaScript. \`Undefined\`\r
betekent dat een variabele niet is gedefinieerd, terwijl \`null\` betekent\r
dat een variabele geen waarde heeft.\r
\r
Enkele voorbeelden:\r
\r
\`\`\`javascript\r
let z;\r
console.log(z); // undefined\r
\r
const y = null;\r
console.log(y); // null\r
\`\`\`\r
\r
Null staat voor een lege object pointer.\r
Het type van een variable met de waarde null, is object.\r
\r
\`\`\`javascript\r
console.log(typeof y); // object\r
\`\`\`\r
\r
Maak je geen zorgen, het verschil tussen beide zal naarmate je meer codeert,\r
duidelijker worden.\r
`;export{n as default};
