import{j as e}from"./index-DEXPSZA7.js";const i="/web2-cursus-2026/images/exclamation-mark.png",a="/web2-cursus-2026/images/load-event.png";function s(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Event listeners zijn functies die worden uitgevoerd wanneer een bepaald event plaatsvindt. Ze worden gebruikt om te reageren op acties van de gebruiker, zoals het klikken op een knop of het hoveren over een element."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"het-window-load-event",children:["Het window load event",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#het-window-load-event",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx("img",{src:i}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"load"})," event wordt geactiveerd wanneer een webpagina volledig is geladen. Dit event kan worden gebruikt om bepaalde acties uit te voeren nadat de pagina volledig is geladen, zoals het initialiseren van variabelen of het toevoegen van event listeners."]}),`
`,e.jsx(n.p,{children:"Wanneer je een JavaScript bestand hebt dat je wil laten uitvoeren nadat de html pagina volledig is geladen, kan je dit doen door een event listener toe te voegen aan het window object."}),`
`,e.jsxs(n.p,{children:["Om een event listener toe te voegen aan het ",e.jsx(n.code,{children:"load"})," event van het window object, gebruik je de ",e.jsx(n.code,{children:"addEventListener()"})," methode op het ",e.jsx(n.code,{children:"window"})," object."]}),`
`,e.jsx(n.p,{children:"Vanaf nu zal dus elke JavaScript file die je aanmaakt er om te beginnen zo uitzien:"}),`
`,e.jsx("img",{src:a}),`
`,e.jsxs(n.p,{children:["Het ",e.jsx(n.code,{children:"window"})," object is een globaal object dat standaard beschikbaar is in JavaScript. Het bevat eigenschappen en methoden die betrekking hebben op het browservenster. Je bevestigt aan het ",e.jsx(n.code,{children:"window"})," object een event listener die luistert naar het ",e.jsx(n.code,{children:"load"})," event. Wanneer dit event plaatsvindt, wordt de functie die je meegeeft aan de ",e.jsx(n.code,{children:"addEventListener()"})," methode uitgevoerd."]}),`
`,e.jsx(n.p,{children:"Deze functie wordt doorgaans 'setup' genoemd, omdat het de initialisatie van je JavaScript code bevat, maar je kan het ook een andere naam geven. In deze functie komt alle code die je wil uitvoeren te staan."}),`
`,e.jsx(n.p,{children:"Je vindt deze template ook terug in dit project onder scripts > base > template.js"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Opgelet:"})," Het is belangrijk dat je de event listener toevoegt aan het window object voordat je andere JavaScript code schrijft. Anders kan het zijn dat de code wordt uitgevoerd voordat de pagina volledig is geladen. Dit omdat code die de DOM-tree uitleest of aanpast, pas mag uitgevoerd worden wanneer de DOM-tree volledig is opgebouwd door de browser."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dubbel opgelet:"})," Wie voor oefeningen of examenprojecten geen window load event en 'setup' functie gebruikt, zal ",e.jsx("span",{className:"important",children:"punten verliezen"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"event-listeners-toevoegen",children:["Event listeners toevoegen",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#event-listeners-toevoegen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Om een event listener toe te voegen aan een element, gebruik je de ",e.jsx(n.code,{children:"addEventListener()"})," methode. Deze methode neemt twee argumenten: het type event dat je wil luisteren en de functie die moet worden uitgevoerd wanneer het event plaatsvindt."]}),`
`,e.jsx(n.p,{children:"Hier is een voorbeeld van hoe je een event listener toevoegt aan een knopelement:"}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsx("button",{id:"btn",children:"Hier klikken"})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal het element op waar je een event listener aan wil koppelen"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," button = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"btn"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Registreer de event listener"}),`\r
button.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Er werd op de knop geklikt!!"'}),`);\r
});
`]})}),`
`,e.jsx(n.p,{children:`In dit voorbeeld wordt een event listener toegevoegd aan een knop. Wanneer de gebruiker op de knop klikt,\r
wordt de functie die de alert 'Er werd op de knop geklikt!!' uitvoert, geactiveerd.`}),`
`,e.jsx(n.p,{children:`De methode die moet uitgevoerd worden kan meegegeven worden als een anonieme functie,\r
zoals in het voorbeeld hierboven, of als een aparte functie die elders in je code gedefinieerd is.`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal het element op waar je een event listener aan wil koppelen"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," button = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"btn"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Definieer een functie"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"handleClick"}),"(",e.jsx(n.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(n.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Er werd op de knop geklikt!!"'}),`);\r
}\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Registreer de event listener"}),`\r
button.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),`, handleClick);
`]})}),`
`,e.jsxs(n.h3,{id:"onclick-vs-addeventlistener",children:[e.jsx(n.code,{children:"onClick"})," vs ",e.jsx(n.code,{children:"addEventListener"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#onclick-vs-addeventlistener",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["In HTML kan je ook events toevoegen aan elementen door gebruik te maken van het ",e.jsx(n.code,{children:"onClick"}),`\r
attribuut. Dit attribuut bevat de code die moet worden uitgevoerd wanneer het event plaatsvindt.`]}),`
`,e.jsxs(n.p,{children:["Hoewel het gebruik van ",e.jsx(n.code,{children:"onClick"}),` in sommige gevallen handig kan zijn,\r
is het gebruik van `,e.jsx(n.code,{children:"addEventListener"}),` over het algemeen de betere keuze.\r
Hier zijn enkele redenen waarom:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Scheiding van HTML en JavaScript"}),`:\r
Door JavaScript code in een apart bestand te schrijven en event listeners toe te voegen met `,e.jsx(n.code,{children:"addEventListener"}),", houd je je HTML en JavaScript code gescheiden. Dit maakt je code overzichtelijker en gemakkelijker te onderhouden."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Meerdere event listeners"}),`:\r
Met `,e.jsx(n.code,{children:"addEventListener"})," kan je meerdere event listeners toevoegen aan hetzelfde element. Dit is handig als je meerdere acties wil uitvoeren wanneer een event plaatsvindt."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Flexibiliteit"}),`:\r
Met `,e.jsx(n.code,{children:"addEventListener"}),` kan je events toevoegen en verwijderen zonder de bestaande HTML code te wijzigen. Dit maakt je code flexibeler en gemakkelijker aan te passen.\r
We spreken dus af om nooit meer `,e.jsx(n.code,{children:"onClick"})," attributen te gebruiken in onze HTML code!"]}),`
`]}),`
`]})]})}function d(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default};
