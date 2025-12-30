const e=`## Wat zijn Developer Tools?\r
\r
**Betekenis:**  \r
Developer Tools zijn een set van webontwikkelingstools die zijn ingebouwd in de meeste webbrowsers. Deze tools zijn ontworpen om webontwikkelaars te helpen bij het debuggen, testen en analyseren van websites. Met Developer Tools kunnen ontwikkelaars de structuur, stijl en prestaties van een website inspecteren en bewerken.\r
\r
**Kenmerken:**\r
\r
- Inspecteer HTML, CSS en JavaScript van een webpagina.\r
- Test en debug JavaScript-code.\r
- Simuleer verschillende netwerkomstandigheden.\r
- Meet de prestaties van een website.\r
- Optimaliseer de laadtijd van een website.\r
\r
## Hoe Developer Tools openen?\r
\r
**Stap 1:** Open een webpagina in je browser.  \r
**Stap 2:** Klik met de rechtermuisknop op de webpagina.  \r
**Stap 3:** Selecteer "Inspecteren" / "Inspect" in het contextmenu.  \r
**Stap 4:** De Developer Tools worden geopend aan de onderkant of zijkant van het browservenster.  \r
(Shortcut: <kbd>F12</kbd> )\r
\r
![Developer tools](public/images/dev-tools.png)\r
\r
# Onderdelen van Developer Tools\r
\r
## Elements\r
\r
De Elements-tab geeft een visuele weergave van de HTML-structuur van de webpagina.  \r
Hier kun je de DOM (Document Object Model) inspecteren en bewerken, CSS-stijlen toevoegen of verwijderen, en de lay-out van de pagina aanpassen.  \r
Deze wijzigingen zijn alleen zichtbaar in de lokale kopie van de webpagina en worden niet opgeslagen op de server.\r
\r
Selecteer een element in de Elements-tab om de bijbehorende HTML- en CSS-code te bekijken en te bewerken.\r
\r
## Console\r
\r
De Console-tab toont foutmeldingen, waarschuwingen en logberichten die worden gegenereerd door de webpagina.  \r
Hier kun je JavaScript-code uitvoeren en testen, variabelen controleren en debuggen, en interactieve opdrachten invoeren.  \r
De Console is een krachtige tool voor het testen en debuggen van JavaScript-code, maak hier dus zeker gebruik van!\r
\r
Typ JavaScript-code in de Console en druk op Enter om de code uit te voeren. De uitvoer wordt weergegeven in de Console.\r
\r
**Voorbeelden:**\r
\r
\`\`\`javascript\r
console.log("Hello, world!");\r
\r
const element = document.getElementById("selectMe");\r
console.log(element.textContent);\r
const x = 5;\r
console.log(x);\r
\`\`\`\r
\r
Wanneer je een (web)applicatie ontwikkelt en de applicatie doet niet wat je verwacht, dan is de Console-tab de eerste plaats waar je moet kijken om eventuele fouten op te sporen want daar worden foutmeldingen en waarschuwingen weergegeven.\r
\r
## Sources\r
\r
De Sources-tab geeft een overzicht van alle bronbestanden die worden gebruikt door de webpagina, zoals HTML-, CSS- en JavaScript-bestanden.\r
Hier kun je door de bestanden navigeren, breakpoints instellen, code wijzigen en opslaan, en de bestanden debuggen.\r
De Sources-tab is handig voor het analyseren en bewerken van de broncode van een webpagina.\r
\r
## Network\r
\r
De Network-tab toont alle netwerkverzoeken die worden gedaan door de webpagina, zoals HTTP-requests en -responses, afbeeldingen, scripts en stylesheets (CSS).\r
\r
Open de Netwerk-tab en laad deze webpagina opnieuw om alle netwerkverzoeken te bekijken.\r
Er zijn er maar een paar, maar als je bijvoorbeeld naar een website zoals Google gaat, dan zul je zien dat er veel meer netwerkverzoeken worden gedaan.\r
\r
## Performance\r
\r
De Performance-tab biedt inzicht in de laadtijd en prestaties van de webpagina.\r
Hier kun je de laadtijd van de pagina meten, netwerkanalyses uitvoeren, geheugenprofielen bekijken, en bottlenecks identificeren.\r
De Performance-tab is handig voor het optimaliseren van de prestaties van een website en het verbeteren van de gebruikerservaring.\r
\r
## Memory\r
\r
De Memory-tab toont het geheugengebruik van de webpagina en identificeert geheugenlekken.\r
Hier kun je het geheugengebruik van de pagina monitoren, geheugenprofielen maken, en geheugenlekken opsporen.\r
De Memory-tab is handig voor het optimaliseren van de geheugenprestaties van een website en het voorkomen van geheugenlekken.\r
\r
## Application\r
\r
De Application-tab geeft een overzicht van de lokale opslag van de webpagina, zoals cookies, cachegegevens en databases.\r
Hier kun je cookies beheren, cachegegevens wissen, databases bekijken en bewerken, en offlinegegevens beheren.\r
De Application-tab is handig voor het beheren en debuggen van de lokale opslag van een website.\r
\r
## Nooit meer vergeten\r
\r
Developer Tools zijn een krachtige set van webontwikkelingstools die zijn ingebouwd in de meeste webbrowsers.\r
Gebruik je Developer Tools om je webontwikkelingsvaardigheden te verbeteren en efficiënter te werken.\r
Tijdens deze volledige opleiding én je toekomstige carrière als ontwikkelaar zul je vaak gebruik maken van Developer Tools, vooral de in het rood gemarkeerde onderdelen.\r
\r
![Developer tools](../../../public/images/dev-tools-worship.jpg)\r
`;export{e as default};
