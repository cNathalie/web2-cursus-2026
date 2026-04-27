import{j as s}from"./index-DoM-sG5C.js";function a(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h2,{id:"herhalingsoefening-na-hoofdstukken-fetch-api--json",children:["Herhalingsoefening na hoofdstukken 'Fetch API & JSON'",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#herhalingsoefening-na-hoofdstukken-fetch-api--json",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Doel"}),": herhaling van fetch API, het verwerken van JSON data, en asynchrone programmering met .then().catch() en async/await."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Uitvoering"}),`: dit programma werkt met HTML elementen en haalt data op via HTTP requests.\r
Maak deze opdracht in een nieuw project in VSCode`]}),`
`,s.jsxs(e.h3,{id:"vooraf",children:["Vooraf",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vooraf",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Je hebt een HTML bestand, een CSS bestand en een JavaScript bestand nodig."}),`
`,s.jsxs(e.li,{children:["Je kan je project lokaal testen met een live server (VS Code extensie ",s.jsx(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",children:"Live Server"}),") of een ander development server."]}),`
`,s.jsxs(e.li,{children:["Voor de externe API request gebruiken we de Star Wars API (gratis, geen API key nodig): ",s.jsx(e.code,{children:"https://swapi.info/api/planets/1"})]}),`
`,s.jsxs(e.li,{children:["Voor de lokale JSON file, maak je een bestand aan in je project (bijvoorbeeld ",s.jsx(e.code,{children:"bibliotheek.json"}),")"]}),`
`]}),`
`,s.jsx(e.p,{children:"(Je mag ook een andere API of JSON file gebruiken, maar zorg dat deze publiek toegankelijk is.)"}),`
`,s.jsxs(e.h3,{id:"situatie",children:["Situatie",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#situatie",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Je gaat een webpagina maken die data ophaalt via twee verschillende methodes:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Methode 1 (Promise chaining)"}),": Data ophalen van een externe public API en weergeven met ",s.jsx(e.code,{children:".then().catch()"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Methode 2 (Async/await)"}),": Data ophalen van een lokale JSON file en weergeven met ",s.jsx(e.code,{children:"async/await"})," en ",s.jsx(e.code,{children:"try/catch"})]}),`
`]}),`
`,s.jsx(e.p,{children:"Elke methode kan via een aparte knop aangeroepen worden, zodat de gebruiker kan kiezen welke data getoond wordt."}),`
`,s.jsxs(e.h3,{id:"opdracht",children:["Opdracht",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opdracht",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.h4,{id:"1-maak-een-html-bestand",children:["1. Maak een HTML-bestand",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-maak-een-html-bestand",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Maak een HTML-bestand met:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Een titel (h1)"}),`
`,s.jsx(e.li,{children:'Twee knoppen: één voor "Haal Star Wars data op" en één voor "Haal bibliotheek data op"'}),`
`,s.jsxs(e.li,{children:["Twee containers (div-elementen) met id's: ",s.jsx(e.code,{children:"starwars-result"})," en ",s.jsx(e.code,{children:"bibliotheek-result"})," voor het tonen van resultaten"]}),`
`,s.jsxs(e.li,{children:["Een container voor foutmeldingen: ",s.jsx(e.code,{children:"error-message"})]}),`
`,s.jsx(e.li,{children:"Link naar je CSS-bestand en JavaScript-bestand"}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-html",children:[s.jsxs(e.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(e.span,{className:"hljs-keyword",children:"html"}),">"]}),`\r
`,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"html"})," ",s.jsx(e.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"nl"'}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"head"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"meta"})," ",s.jsx(e.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"meta"})," ",s.jsx(e.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"title"}),">"]}),"Fetch API & JSON Oefening",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"title"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"link"})," ",s.jsx(e.span,{className:"hljs-attr",children:"rel"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"style.css"'})," />"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"head"}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"body"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"h1"}),">"]}),"Fetch API & JSON Oefening",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"h1"}),">"]}),`\r
\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"btn-starwars"'}),">"]}),"Haal Star Wars data op",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"btn-bibliotheek"'}),">"]}),"Haal bibliotheek data op",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"error-message"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"error"'}),">"]}),s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"starwars-result"'}),">"]}),s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"bibliotheek-result"'}),">"]}),s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"script"})," ",s.jsx(e.span,{className:"hljs-attr",children:"src"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"script.js"'}),">"]}),s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"script"}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"body"}),">"]}),`\r
`,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,s.jsxs(e.h4,{id:"2-maak-een-css-bestand",children:["2. Maak een CSS-bestand",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-maak-een-css-bestand",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Style je pagina met:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Een leesbare layout met wat spacing"}),`
`,s.jsx(e.li,{children:"Mooie aandacht voor de knoppen (hover-effect)"}),`
`,s.jsx(e.li,{children:"Een duidelijke weergave van de data"}),`
`,s.jsx(e.li,{children:"Styling voor foutmeldingen (rood/opvallend)"}),`
`,s.jsx(e.li,{children:"Optioneel: laad-indicator (spinner) tijdens het ophalen van data"}),`
`]}),`
`,s.jsx(e.p,{children:"Minimale CSS-voorbeeld:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-css",children:[`* {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"margin"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"box-sizing"}),`: border-box;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-tag",children:"body"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"font-family"}),`: Arial, sans-serif;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"20px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background-color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#f5f5f5"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-tag",children:"h1"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(e.span,{className:"hljs-number",children:"30px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#333"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-tag",children:"button"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"10px"})," ",s.jsx(e.span,{className:"hljs-number",children:"20px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"margin"}),": ",s.jsx(e.span,{className:"hljs-number",children:"10px"})," ",s.jsx(e.span,{className:"hljs-number",children:"10px"})," ",s.jsx(e.span,{className:"hljs-number",children:"10px"})," ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background-color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#007bff"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),`: white;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border"}),`: none;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"5px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"cursor"}),`: pointer;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(e.span,{className:"hljs-number",children:"16px"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-tag",children:"button"}),s.jsx(e.span,{className:"hljs-selector-pseudo",children:":hover"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background-color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#0056b3"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#starwars-result"}),`,\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#bibliotheek-result"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background-color"}),`: white;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"20px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"margin-top"}),": ",s.jsx(e.span,{className:"hljs-number",children:"20px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"5px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1px"})," solid ",s.jsx(e.span,{className:"hljs-number",children:"#ddd"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".error"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),`: red;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"10px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"margin"}),": ",s.jsx(e.span,{className:"hljs-number",children:"10px"})," ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background-color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#ffe0e0"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"5px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"display"}),`: none;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".error"}),s.jsx(e.span,{className:"hljs-selector-class",children:".show"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"display"}),`: block;\r
}
`]})}),`
`,s.jsxs(e.h4,{id:"3-maak-een-json-bestand-bibliotheekjson",children:["3. Maak een JSON-bestand (bibliotheek.json)",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-maak-een-json-bestand-bibliotheekjson",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Maak een ",s.jsx(e.code,{children:"bibliotheek.json"})," bestand in je project map met test data:"]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-json",children:[s.jsx(e.span,{className:"hljs-punctuation",children:"{"}),`\r
  `,s.jsx(e.span,{className:"hljs-attr",children:'"bibliotheek"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-string",children:'"Openbare Bibliotheek Aalst"'}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
  `,s.jsx(e.span,{className:"hljs-attr",children:'"boeken"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-punctuation",children:"["}),`\r
    `,s.jsx(e.span,{className:"hljs-punctuation",children:"{"}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"id"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-number",children:"1"}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"titel"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-string",children:'"The Hobbit"'}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"auteur"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-string",children:'"J.R.R. Tolkien"'}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"jaar"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-number",children:"1937"}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"beschikbaar"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-literal",children:s.jsx(e.span,{className:"hljs-keyword",children:"true"})}),`\r
    `,s.jsx(e.span,{className:"hljs-punctuation",children:"}"}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
    `,s.jsx(e.span,{className:"hljs-punctuation",children:"{"}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"id"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-number",children:"2"}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"titel"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-string",children:'"Harry Potter en de Steen der Wijzen"'}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"auteur"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-string",children:'"J.K. Rowling"'}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"jaar"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-number",children:"1997"}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"beschikbaar"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-literal",children:s.jsx(e.span,{className:"hljs-keyword",children:"true"})}),`\r
    `,s.jsx(e.span,{className:"hljs-punctuation",children:"}"}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
    `,s.jsx(e.span,{className:"hljs-punctuation",children:"{"}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"id"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-number",children:"3"}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"titel"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-string",children:'"1984"'}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"auteur"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-string",children:'"George Orwell"'}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"jaar"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-number",children:"1949"}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"beschikbaar"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-literal",children:s.jsx(e.span,{className:"hljs-keyword",children:"false"})}),`\r
    `,s.jsx(e.span,{className:"hljs-punctuation",children:"}"}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
    `,s.jsx(e.span,{className:"hljs-punctuation",children:"{"}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"id"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-number",children:"4"}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"titel"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-string",children:'"De Hobbit"'}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"auteur"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-string",children:'"J.R.R. Tolkien"'}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"jaar"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-number",children:"1937"}),s.jsx(e.span,{className:"hljs-punctuation",children:","}),`\r
      `,s.jsx(e.span,{className:"hljs-attr",children:'"beschikbaar"'}),s.jsx(e.span,{className:"hljs-punctuation",children:":"})," ",s.jsx(e.span,{className:"hljs-literal",children:s.jsx(e.span,{className:"hljs-keyword",children:"true"})}),`\r
    `,s.jsx(e.span,{className:"hljs-punctuation",children:"}"}),`\r
  `,s.jsx(e.span,{className:"hljs-punctuation",children:"]"}),`\r
`,s.jsx(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s.jsxs(e.h4,{id:"4-methode-1-promise-chaining-met-then-en-catch",children:["4. Methode 1: Promise chaining met .then() en .catch()",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-methode-1-promise-chaining-met-then-en-catch",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Schrijf een functie ",s.jsx(e.code,{children:"haalStarWarsData()"})," die:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Gebruikt ",s.jsx(e.code,{children:"fetch()"})," om data op te halen van: ",s.jsx(e.code,{children:"https://swapi.info/api/planets/1"})]}),`
`,s.jsx(e.li,{children:"De response omzet naar JSON"}),`
`,s.jsx(e.li,{children:"Vervolgens de data verwerkt: naam, aantal inwoners, klimaat, etc. weergeven als HTML"}),`
`,s.jsx(e.li,{children:"Een error afhandelt"}),`
`,s.jsxs(e.li,{children:["Het resultaat toont in het ",s.jsx(e.code,{children:"starwars-result"})," element"]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"haalStarWarsData"})," = (",s.jsx(e.span,{className:"hljs-params"}),`) => {\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Jouw code hier"}),`\r
  `,s.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"https://swapi.info/api/planets/1"'}),`)\r
    .`,s.jsx(e.span,{className:"hljs-property",children:"then"})," ",s.jsx(e.span,{className:"hljs-comment",children:"//...."}),`\r
    ();\r
};
`]})}),`
`,s.jsxs(e.h4,{id:"5-methode-2-asyncawait-met-trycatch",children:["5. Methode 2: Async/await met try/catch",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-methode-2-asyncawait-met-trycatch",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Schrijf een functie ",s.jsx(e.code,{children:"haalBibliotheekData()"})," die:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Async is gedeclareerd"}),`
`,s.jsxs(e.li,{children:["Gebruikt ",s.jsx(e.code,{children:"fetch()"})," om ",s.jsx(e.code,{children:"bibliotheek.json"})," op te halen"]}),`
`,s.jsx(e.li,{children:"De response omzet naar JSON"}),`
`,s.jsx(e.li,{children:"De boeken afdrukt op een nette manier"}),`
`,s.jsxs(e.li,{children:["Afhandelingen gebeuren in een ",s.jsx(e.code,{children:"try/catch"})," blok"]}),`
`,s.jsxs(e.li,{children:["Het resultaat wordt getoond in het ",s.jsx(e.code,{children:"bibliotheek-result"})," element"]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"haalBibliotheekData"})," = ",s.jsx(e.span,{className:"hljs-keyword",children:"async"})," (",s.jsx(e.span,{className:"hljs-params"}),`) => {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"try"}),` {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Verwerk en toon de data"}),`\r
  } `,s.jsx(e.span,{className:"hljs-keyword",children:"catch"}),` (error) {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Foutafhandeling"}),`\r
  }\r
};
`]})}),`
`,s.jsxs(e.h4,{id:"6-event-listeners-koppelen",children:["6. Event listeners koppelen",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#6-event-listeners-koppelen",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Koppel beide functies aan de knoppen:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["De ",s.jsx(e.code,{children:"btn-starwars"})," knop roept ",s.jsx(e.code,{children:"haalStarWarsData()"})," op"]}),`
`,s.jsxs(e.li,{children:["De ",s.jsx(e.code,{children:"btn-bibliotheek"})," knop roept ",s.jsx(e.code,{children:"haalBibliotheekData()"})," op"]}),`
`]}),`
`,s.jsx(e.p,{children:"Zorg ervoor dat je DOM-elementen goed vindt en events juist implementeert."}),`
`,s.jsxs(e.h4,{id:"7-toon-de-data-netjes",children:["7. Toon de data netjes",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#7-toon-de-data-netjes",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Voor Star Wars data: toon naam, bevolking, klimaat, terrein als een nette HTML structuur"}),`
`,s.jsx(e.li,{children:"Voor bibliotheek data: toon alle boeken uit de array in een lijst of tabel met titel, auteur, jaar en beschikbaarheid"}),`
`,s.jsxs(e.li,{children:["Zorg voor ",s.jsx(e.strong,{children:"foutafhandeling"})," op beide manieren en toon een duidelijke foutmelding"]}),`
`]})]})}function r(n={}){const{wrapper:e}=n.components||{};return e?s.jsx(e,{...n,children:s.jsx(a,{...n})}):a(n)}export{r as default};
