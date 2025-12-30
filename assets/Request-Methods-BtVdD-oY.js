const e=`HTTP-requestmethodes zijn de verschillende manieren waarop een client (zoals een webbrowser) met een server kan communiceren om gegevens op te vragen, toe te voegen, bij te werken of te verwijderen.  \r
Deze methodes vormen de basis van de interactie tussen webapplicaties en servers, en maken het mogelijk om dynamische en interactieve websites te bouwen.  \r
De vier belangrijkste HTTP-methodes zijn **GET**, **POST**, **PUT** en **DELETE**, die elk een specifieke rol spelen in het beheren van gegevens op de server.\r
\r
---\r
\r
## GET\r
\r
**Doel:** Ophalen van gegevens van de server.  \r
**Gebruik:** Wordt gebruikt om gegevens op te vragen zonder de server te wijzigen.  \r
**Voorbeeld:** Een webpagina laden of een lijst met producten opvragen.\r
\r
**Kenmerken:**\r
\r
- Verzoeken bevatten geen body.\r
- Gegevens worden meestal via de URL verzonden.\r
\r
## PUT\r
\r
**Doel:** Bijwerken of vervangen van bestaande gegevens op de server.  \r
**Gebruik:** Wordt gebruikt om een specifieke resource volledig te vervangen.  \r
**Voorbeeld:** Bestaande productinformatie bijwerken.\r
\r
**Kenmerken:**\r
\r
- Verzoeken bevatten een body met de gegevens die moeten worden bijgewerkt.\r
\r
## POST\r
\r
**Doel:** Verzenden van gegevens naar de server om een nieuwe resource te creëren.  \r
**Gebruik:** Wordt gebruikt om nieuwe gegevens toe te voegen.  \r
**Voorbeeld:** Een nieuw product toevoegen aan de database.\r
\r
**Kenmerken:**\r
\r
- Verzoeken bevatten een body met de gegevens die moeten worden toegevoegd.\r
\r
## DELETE\r
\r
**Doel:** Verwijderen van bestaande gegevens van de server.  \r
**Gebruik:** Wordt gebruikt om een specifieke resource te verwijderen.  \r
**Voorbeeld:** Een product verwijderen uit de database.\r
\r
**Kenmerken:**\r
\r
- Verzoeken bevatten meestal geen body, maar de id van de resource in de URL.\r
\r
## Er zijn nog meer HTTP Request Methods:\r
\r
- HEAD\r
- OPTIONS\r
- TRACE\r
- CONNECT\r
- PATCH\r
\r
![Request Methods](/images/request-methods.png)\r
\r
Tijdens deze opleiding én in het werkveld zijn **GET, PUT, POST, DELETE** de meest gebruikte.\r
\r
---\r
\r
> Deze vier methodes zouden een belletje moeten doen rinkelen.  \r
> Ze zijn namelijk gelinkt aan de CRUD-operaties die je hebt geleerd in de lessen Database.\r
>\r
> - GET = Read\r
> - PUT = Update\r
> - POST = Create\r
> - DELETE = Delete\r
`;export{e as default};
