const e=`## JavaScript run-time omgeving\r
\r
JavaScript is een programmeertaal die gebruikt wordt om webpagina's interactief te maken. JavaScript wordt uitgevoerd in de browser van de gebruiker. De browser is de run-time omgeving van JavaScript.\r
\r
![Browsers](public/images/browsers.png)\r
\r
JavaScript kan ook gebruikt worden om servers te programmeren. In dat geval wordt JavaScript uitgevoerd in een server-side run-time omgeving zoals Node.js.\r
\r
![NodeJs](public/images/nodejs.jpg)\r
\r
---\r
\r
## Wat doet JavaScript\r
\r
JavaScript kan gebruikt worden om de inhoud van een webpagina te veranderen.\r
\r
Je brengt de statische html-pagina, door middel van DOM-manipulatie, tot leven door het stylen van elementen, het toevoegen van interactie en het manipuleren van de inhoud. Het kan ook gebruikt worden voor het versturen van HTTP-requests en het verwerken van de response.\r
\r
---\r
\r
## JavaScript en HTML: het \`<script>\` element\r
\r
JavaScript kan in een HTML-bestand geplaatst worden. Je kan JavaScript code in een HTML-bestand schrijven tussen de \`<script>\` tags.\r
\r
Je kan ook een extern JavaScript-bestand linken aan een HTML-bestand. Dit doe je door een \`<script>\` tag te gebruiken met een \`src\` attribuut.\r
\r
Bijvoorbeeld:\r
\r
\`\`\`html\r
<script src="script.js"><\/script>\r
\`\`\`\r
\r
Het is belangrijk om de uitvoering van de JavaScript code te laten wachten tot de HTML pagina volledig geladen is. Daarom plaats je de \`<script>\` tag volledig onderaan, vlak voor de \`</body> \`tag.\r
\r
![Script](public/images/script-tag.png)\r
\r
## \`console.log()\`\r
\r
De \`console.log()\` methode wordt gebruikt om berichten te loggen naar de console van de browser. Dit is handig om te controleren of je code correct werkt en om waarden van variabelen te bekijken. Tussen de haakjes van \`console.log()\`plaats je de waarde of de naam van de variabele die je wil loggen.\r
\r
Probeer het eens uit de in de Console van je Browser Developer Tools:\r
\r
- \`console.log(new Date().toString())\`\r
- \`console.log('Dit is de cursus Web 2')\`\r
\r
Vergelijk met C#:\r
\r
\`\`\`C#\r
Console.WriteLine()\r
\`\`\`\r
`;export{e as default};
