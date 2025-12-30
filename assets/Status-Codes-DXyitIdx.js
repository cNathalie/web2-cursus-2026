const e=`HTTP-statuscodes zijn drie-cijferige codes die worden verzonden door een server als reactie op een verzoek van een client.  \r
Deze codes geven aan of een specifiek HTTP-verzoek is geslaagd, mislukt of een andere status heeft.  \r
Statuscodes worden gebruikt om de communicatie tussen de client en de server te vergemakkelijken en om de oorzaak van eventuele problemen te identificeren.  \r
Er zijn vijf verschillende categorieën van statuscodes, elk met een specifieke betekenis en reeks codes.\r
\r
---\r
\r
## 1xx - Informatief (Informational)\r
\r
**Betekenis:** Informatieve statuscodes geven aan dat het verzoek is ontvangen en wordt verwerkt.  \r
**Voorbeeld:** 100 Continue, 101 Switching Protocols.\r
\r
**Kenmerken:**\r
\r
- De server heeft het verzoek ontvangen en is bezig met het verwerken ervan.\r
- De client moet wachten op verdere instructies van de server.\r
\r
---\r
\r
## 2xx - Succes (Success)\r
\r
**Betekenis:** Succesvolle statuscodes geven aan dat het verzoek succesvol is verwerkt en voltooid.  \r
**Voorbeeld:** 200 OK, 201 Created.\r
\r
**Kenmerken:**\r
\r
- Het verzoek is succesvol verwerkt en de server heeft een geldige reactie gegeven.\r
- De client kan de ontvangen gegevens gebruiken of verdergaan met andere acties.\r
\r
---\r
\r
## 3xx - Omleiding (Redirection)\r
\r
**Betekenis:** Omleidingsstatuscodes geven aan dat de client extra actie moet ondernemen om het verzoek te voltooien.  \r
**Voorbeeld:** 301 Moved Permanently, 302 Found.\r
\r
**Kenmerken:**\r
\r
- De client moet een andere locatie of URI gebruiken om het verzoek te voltooien.\r
- De server geeft aan waar de client het verzoek opnieuw kan indienen.\r
\r
---\r
\r
## 4xx - Clientfout (Client Error)\r
\r
**Betekenis:** Clientfoutstatuscodes geven aan dat er een probleem is met het verzoek van de client.  \r
**Voorbeeld:** 400 Bad Request, 404 Not Found.\r
\r
**Kenmerken:**\r
\r
- De client heeft een ongeldig verzoek ingediend of er is een fout in de URI.\r
- De server kan het verzoek niet verwerken vanwege een fout van de client.\r
\r
---\r
\r
## 5xx - Serverfout (Server Error)\r
\r
**Betekenis:** Serverfoutstatuscodes geven aan dat er een probleem is met de server die het verzoek verwerkt.  \r
**Voorbeeld:** 500 Internal Server Error, 503 Service Unavailable.\r
\r
**Kenmerken:**\r
\r
- De server heeft een fout gemaakt bij het verwerken van het verzoek van de client.\r
- De client moet wachten tot de server het probleem heeft opgelost.\r
\r
---\r
\r
![HTTP Status Codes](public/images/http-status-codes.jpg)\r
\r
---\r
\r
## 418 - I'm a teapot\r
\r
![Good to know](public/images/nice-to-know.png)\r
\r
**Verhaal:**  \r
HTTP-statuscode 418 I'm a teapot is een grap die is ontstaan uit het Hyper Text Coffee Pot Control Protocol (HTCPCP), een aprilgrap die in 1998 werd gepubliceerd door de Internet Engineering Task Force (IETF). Het protocol beschrijft een protocol voor het besturen van koffiepotten, en statuscode 418 werd toegevoegd om aan te geven dat een theepot geen koffie kan zetten.\r
\r
**Betekenis:**  \r
De server weigert koffie te zetten omdat het een theepot is.\r
\r
**Voorbeeld:**  \r
418 I'm a teapot.\r
\r
**Kenmerken:**\r
\r
- De server is een theepot en kan geen koffie zetten.\r
- De client moet een ander verzoek indienen om koffie te krijgen.\r
\r
---\r
\r
## Conclusie\r
\r
HTTP-statuscodes zijn een essentieel onderdeel van het HTTP-protocol en spelen een cruciale rol in de communicatie tussen clients en servers.  \r
Door de betekenis en het gebruik van statuscodes te begrijpen, kunnen ontwikkelaars problemen identificeren, fouten oplossen en de prestaties van webapplicaties verbeteren.  \r
Het is belangrijk om vertrouwd te raken met de verschillende categorieën van statuscodes en hun specifieke codes, zodat je effectief kunt reageren op de reacties van servers en de gebruikerservaring kunt optimaliseren.\r
\r
Uitgebreide informatie over HTTP-statuscodes kan je vinden op volgende website:  \r
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)\r
`;export{e as default};
