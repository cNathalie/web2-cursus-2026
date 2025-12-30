const e=`## Inleiding\r
\r
Een object is een container voor gegevens. Een object kan meerdere waarden bevatten, die we eigenschappen of properties noemen. Een eigenschap bestaat uit een naam en een waarde (key-value pair). De naam van een eigenschap is een string, en de waarde kan van elk type zijn.\r
\r
Aangezien de waarde van een property van elk soort type kan zijn, kan het ook een functie zijn. Dan wordt deze property een methode genoemd. Een methode is dus een functie die is opgeslagen als een eigenschap van een object.\r
\r
#### Een JavaScript object is een variabele met meerdere waardes in opgeslagen:\r
\r
\`\`\`javascript\r
const person = {\r
  name: "John",\r
  age: 30,\r
  isMarried: false,\r
  greet: function () {\r
    console.log("Hello, my name is " + this.name);\r
  },\r
};\r
\`\`\`\r
\r
In dit voorbeeld hebben we een object \`person\` gemaakt met vier eigenschappen: \`name\`, \`age\`, \`isMarried\` en \`greet\`. De laatste eigenschap is een methode die een bericht logt naar de console.\r
\r
---\r
\r
## Een object instantiëren\r
\r
Om een object te maken, gebruiken we de object literal syntax. Dit is een set van accolades \`{}\` met daarin de eigenschappen en waarden van het object, zoals in het voorbeeld hierboven.\r
\r
Je kan ook een object instantiëren met de \`new\` operator en een constructor functie.\r
\r
\`\`\`javascript\r
// Declareer eerst je constructor functie:\r
function Person(name, age, isMarried) {\r
  this.name = name;\r
  this.age = age;\r
  this.isMarried = isMarried;\r
  this.greet = function () {\r
    console.log("Hello, my name is " + this.name);\r
  };\r
}\r
\r
// Roep je functie op met parameters:\r
const person = new Person("John", 30, false);\r
\r
// Roep de methode greet aan:\r
person.greet();\r
\r
// Log het resultaat:\r
console.log(person);\r
\`\`\`\r
\r
In dit voorbeeld hebben we een constructor functie \`Person\` gemaakt die een nieuw object aanmaakt met de gegeven eigenschappen. We hebben een nieuw object \`person\` aangemaakt met de \`new\` operator en de constructor functie \`Person\` opgeroepen met de parameters \`'John'\`, \`30\` en \`false\`.\r
\r
---\r
\r
## Eigenschappen en Methoden\r
\r
Om de eigenschappen en methoden van een object te benaderen, gebruiken we de dot-notatie of de bracket-notatie.\r
\r
\`\`\`javascript\r
console.log(person.name); // John\r
console.log(person["age"]); // 30\r
person.greet(); // Hello, my name is John\r
\`\`\`\r
\r
In dit voorbeeld hebben we de eigenschappen \`name\` en \`age\` benaderd met de dot-notatie en de bracket-notatie. We hebben ook de methode \`greet\` aangeroepen met de dot-notatie en door het toevoegen van de ronde haakjes wordt de functie uitgevoerd.\r
\r
Wanneer een property niet bestaat in een object, zal de waarde \`undefined\` worden geretourneerd.\r
\r
\`\`\`javascript\r
console.log(person.city); // undefined\r
\`\`\`\r
\r
Je kan ook een property verwijderen uit een object:\r
\r
\`\`\`javascript\r
delete person.isMarried;\r
console.log(person);\r
// { name: 'John', age: 30, greet: [Function: greet] }\r
\`\`\`\r
\r
---\r
\r
## Vergelijken van objecten\r
\r
Objecten worden vergeleken door referentie, niet door waarde. Dit betekent dat twee objecten alleen gelijk zijn als ze naar dezelfde locatie in het geheugen verwijzen.\r
\r
\`\`\`javascript\r
const person1 = { name: "John" };\r
const person2 = { name: "John" };\r
\r
console.log(person1 === person2); // false\r
\`\`\`\r
\r
In dit voorbeeld hebben we twee objecten \`person1\` en \`person2\` gemaakt met dezelfde eigenschap \`name\`. Omdat ze naar verschillende locaties in het geheugen verwijzen, zijn ze niet gelijk.\r
\r
Wanneer we person2 gelijk maken aan person1, dan verwijzen ze naar dezelfde locatie in het geheugen en zijn ze wel gelijk:\r
\r
\`\`\`javascript\r
const person1 = { name: "John" };\r
const person2 = person1;\r
\r
console.log(person1 === person2); // true\r
\`\`\`\r
\r
---\r
\r
## Date objecten\r
\r
JavaScript heeft een ingebouwd \`Date\` object dat wordt gebruikt om datums en tijden te representeren. Je kan een nieuw \`Date\` object maken met de \`new\` operator en de constructor functie \`Date\`.\r
\r
\`\`\`javascript\r
const today = new Date();\r
console.log(today);\r
\`\`\`\r
\r
Dit zal het huidige datum en tijd weergeven in de console. Je kan ook een specifieke datum en tijd instellen door parameters mee te geven aan de constructor functie.\r
\r
Datum en tijd is een complex onderwerp in het ontwikkelen van software. Gelukkig zijn er ook libraries zoals [Moment.js](https://momentjs.com/) die je kan gebruiken om met datums en tijden te werken.\r
\r
![Timezones](public/images/timezones.png)\r
`;export{e as default};
