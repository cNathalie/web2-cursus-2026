const e=`## Inleiding\r
\r
JavaScript is een programmeertaal die gebruik maakt van variabelen.  \r
Een variabele is een container waarin je gegevens kan opslaan. Deze gegevens kunnen van verschillende types zijn, zoals een getal, een tekst of een boolean.\r
\r
JavaScript is een dynamisch getypeerde taal, wat betekent dat je niet moet aangeven welk type gegevens je in een variabele zal opslaan. JavaScript zal automatisch het type van de gegevens bepalen.\r
\r
---\r
\r
## Declareren van een variabele met \`let\`\r
\r
Om een variabele te declareren, gebruik je het keyword \`let\`. Daarna geef je de variabele een naam en ken je er een waarde aan toe. Bijvoorbeeld:\r
\r
\`\`\`javascript\r
\`let\` x = 5;\r
\`\`\`\r
\r
Deze code maakt een variabele x aan en kent er de waarde 5 aan toe.\r
Je kan ook een variabele declareren zonder er een waarde aan toe te kennen.\r
Bijvoorbeeld:\r
\r
\`\`\`javascript\r
\`let\` y;\r
\`\`\`\r
\r
Deze code maakt een variabele y aan zonder er een waarde aan toe te kennen. De waarde van y is nu undefined.\r
\r
Je kan de waarde van een variabele ook wijzigen. Bijvoorbeeld:\r
\r
#### Probeer het zelf\r
\r
Open in dit venster je developer tools Console en probeer de volgende code uit:\r
\r
- Het declareren met een waarde en aanpassen van de waarde én type:\r
\r
\`\`\`javascript\r
\`let\` x = 5;\r
console.log(x);\r
\r
x = 10;\r
console.log(x);\r
\r
x = "Hello";\r
console.log(x);\r
\`\`\`\r
\r
- Het declareren zonder waarde, geeft undefined terug:\r
\r
\`\`\`javascript\r
\`let\` y;\r
console.log(y);\r
\`\`\`\r
\r
## Declareren van een variabele met \`const\`\r
\r
Naast variabelen kan je ook constanten declareren. Een constante is een variabele waarvan de waarde niet kan veranderen. Om een constante te declareren, gebruik je het keyword \`const\`.\r
\r
Bijvoorbeeld:\r
\r
\`\`\`javascript\r
\`const\` PI = 3.14;\r
\`\`\`\r
\r
Deze code maakt een constante PI aan en kent er de waarde 3.14 aan toe. Je kan de waarde van een constante niet wijzigen.\r
\r
Bijvoorbeeld:\r
\r
\`\`\`javascript\r
const PI = 3.14;\r
PI = 3.14159;\r
\`\`\`\r
\r
Deze code zal een foutmelding geven omdat je de waarde van een constante niet kan wijzigen.\r
\r
## Declareren van een variabele met \`var\`\r
\r
Voor de introductie van ES6 (ECMAScript 2015) was het gebruikelijk om variabelen te declareren met het keyword \`var\`. Het gebruik van v\`var\`ar is echter niet meer aangeraden. Het is beter om \`let\` en \`const\` te gebruiken. Het gebruik van \`var\` kan leiden tot onverwachte resultaten.\r
Bijvoorbeeld:\r
\r
\`\`\`javascript\r
var a = 5;\r
console.log(a);\r
\r
var a = 10;\r
console.log(a);\r
\`\`\`\r
\r
Deze code zal geen foutmelding geven, maar het is beter om \`let\` of \`const\` te gebruiken.\r
\r
#### Waarom gebruik je beter geen \`var\`?\r
\r
Declaraties met \`var\` worden gehoist. Dit betekent dat de declaratie naar boven wordt verplaatst. Dit kan leiden tot onverwachte resultaten.\r
Declaraties met \`var\` hebben geen block scope. Dit betekent dat de variabele overal in de functie beschikbaar is.\r
Wanneer je dus in een functie een variabele declareert met \`var\`, is deze variabele overal in de functie beschikbaar, zelfs voor de declaratie. Ergens anders in de code kan je deze variabele ook gebruiken, en dus aanpassen. Dit betekent dat je de waarde van de variabele kan aanpassen, zelfs voor de declaratie. Dan kan je onverwachte resultaten krijgen. Of je kan per ongeluk een variabele overschrijven.\r
\r
Zo kan je ook name clashes krijgen. Dit betekent dat je per ongeluk een variabele kan overschrijven die al bestaat.\r
\r
Bijvoorbeeld:\r
\r
\`\`\`javascript\r
var a = 5;\r
\r
function example() {\r
  var a = 10;\r
  console.log(a);\r
}\r
\r
example();\r
\r
console.log(a);\r
\`\`\`\r
\r
In dit voorbeeld zal de eerste \`console.log(a)\` in de functie \`example\` de waarde 10 weergeven, terwijl de tweede \`console.log(a)\` buiten de functie de waarde 5 weergeeft. Dit kan verwarrend zijn en leiden tot bugs in je code. Daarom is het beter om \`let\` en \`const\` te gebruiken.\r
\r
Belangrijk!\r
Het is dus **best practice** om **nooit** \`var\` te gebruiken.\r
We spreken dan ook af om in deze cursus vanaf nu **NOOIT** meer \`var\` te gebruiken.\r
Wie in opdrachten of evaluaties toch \`var\` gebruikt, zal **punten verliezen**!\r
\r
Gebruik \`let\` en \`const\` in plaats van \`var\`.\r
\r
Het is daarnaast ook aangeraden om in eerste instantie \`const\` te gebruiken. Wanneer je zeker weet dat de waarde van de variabele zal veranderen, kan je de declaratie nadien nog aanpassen naar \`let\`. Zo vermijd je onverwachte resultaten en bugs in je code.\r
\r
![Var](public/images/var-in-prison.jpg)\r
`;export{e as default};
