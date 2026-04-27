import{j as s}from"./index-DoM-sG5C.js";function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...e.components};return s.jsxs(s.Fragment,{children:[s.jsxs(n.h2,{id:"voorbeeldoplossing-fetch-api--json-oefening",children:["Voorbeeldoplossing: Fetch API & JSON Oefening",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#voorbeeldoplossing-fetch-api--json-oefening",children:s.jsx(n.span,{className:"icon icon-link"})})]}),`
`,s.jsx(n.p,{children:"Deze oplossing demonstreert hoe je met twee methoden data kan ophalen en verwerken."}),`
`,s.jsxs(n.h3,{id:"javascript-scriptjs",children:["JavaScript (script.js)",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#javascript-scriptjs",children:s.jsx(n.span,{className:"icon icon-link"})})]}),`
`,s.jsx(n.pre,{children:s.jsxs(n.code,{className:"hljs language-javascript",children:[s.jsx(n.span,{className:"hljs-comment",children:"// ============================================"}),`\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// SETUP: Event Listeners en Initialisatie"}),`\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// ============================================"}),`\r
\r
`,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(n.span,{className:"hljs-title function_",children:"setup"})," = (",s.jsx(n.span,{className:"hljs-params"}),`) => {\r
  `,s.jsx(n.span,{className:"hljs-comment",children:"// Voeg event listeners toe aan knoppen"}),`\r
  globals.`,s.jsx(n.span,{className:"hljs-property",children:"btnStarwars"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"click"'}),`, haalStarWarsData);\r
  globals.`,s.jsx(n.span,{className:"hljs-property",children:"btnBibliotheek"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"click"'}),`, haalBibliotheekData);\r
};\r
\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// Zorg dat setup wordt aangeroepen wanneer de pagina volledig geladen is"}),`\r
`,s.jsx(n.span,{className:"hljs-variable language_",children:"window"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"load"'}),`, setup);\r
\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// ============================================"}),`\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// DOM ELEMENTEN"}),`\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// ============================================"}),`\r
\r
`,s.jsx(n.span,{className:"hljs-keyword",children:"const"}),` globals = {\r
  `,s.jsx(n.span,{className:"hljs-attr",children:"btnStarwars"}),": ",s.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"btn-starwars"'}),`),\r
  `,s.jsx(n.span,{className:"hljs-attr",children:"btnBibliotheek"}),": ",s.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"btn-bibliotheek"'}),`),\r
  `,s.jsx(n.span,{className:"hljs-attr",children:"starwarsResult"}),": ",s.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"starwars-result"'}),`),\r
  `,s.jsx(n.span,{className:"hljs-attr",children:"bibliotheekResult"}),": ",s.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"bibliotheek-result"'}),`),\r
  `,s.jsx(n.span,{className:"hljs-attr",children:"errorMessage"}),": ",s.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"error-message"'}),`),\r
};\r
\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// ============================================"}),`\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// METHODE 1: PROMISE CHAINING (.then() & .catch())"}),`\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// ============================================"}),`\r
\r
`,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(n.span,{className:"hljs-title function_",children:"haalStarWarsData"})," = (",s.jsx(n.span,{className:"hljs-params"}),`) => {\r
  `,s.jsx(n.span,{className:"hljs-comment",children:"// Clear previous results"}),`\r
  globals.`,s.jsx(n.span,{className:"hljs-property",children:"starwarsResult"}),".",s.jsx(n.span,{className:"hljs-property",children:"innerHTML"}),` =\r
    `,s.jsx(n.span,{className:"hljs-string",children:`'<p class="loading">Data wordt opgehaald...</p>'`}),`;\r
  globals.`,s.jsx(n.span,{className:"hljs-property",children:"errorMessage"}),".",s.jsx(n.span,{className:"hljs-property",children:"classList"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"remove"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"show"'}),`);\r
  globals.`,s.jsx(n.span,{className:"hljs-property",children:"bibliotheekResult"}),".",s.jsx(n.span,{className:"hljs-property",children:"innerHTML"})," = ",s.jsx(n.span,{className:"hljs-string",children:'""'}),`;\r
\r
  `,s.jsx(n.span,{className:"hljs-title function_",children:"fetch"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"https://swapi.info/api/planets/1"'}),`)\r
    .`,s.jsx(n.span,{className:"hljs-title function_",children:"then"}),"(",s.jsxs(n.span,{className:"hljs-function",children:["(",s.jsx(n.span,{className:"hljs-params",children:"response"}),") =>"]}),` {\r
      `,s.jsx(n.span,{className:"hljs-keyword",children:"if"})," (!response.",s.jsx(n.span,{className:"hljs-property",children:"ok"}),`) {\r
        `,s.jsx(n.span,{className:"hljs-keyword",children:"throw"})," ",s.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(n.span,{className:"hljs-title class_",children:"Error"}),"(",s.jsxs(n.span,{className:"hljs-string",children:["`HTTP error! status: ",s.jsx(n.span,{className:"hljs-subst",children:"${response.status}"}),"`"]}),`);\r
      }\r
      `,s.jsx(n.span,{className:"hljs-keyword",children:"return"})," response.",s.jsx(n.span,{className:"hljs-title function_",children:"json"}),`();\r
    })\r
    .`,s.jsx(n.span,{className:"hljs-title function_",children:"then"}),"(",s.jsxs(n.span,{className:"hljs-function",children:["(",s.jsx(n.span,{className:"hljs-params",children:"data"}),") =>"]}),` {\r
      `,s.jsx(n.span,{className:"hljs-comment",children:"// Verwerk de gegevens"}),`\r
      `,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," planetHTML = ",s.jsx(n.span,{className:"hljs-title function_",children:"renderStarWarsPlanet"}),`(data);\r
      globals.`,s.jsx(n.span,{className:"hljs-property",children:"starwarsResult"}),".",s.jsx(n.span,{className:"hljs-property",children:"innerHTML"}),` = planetHTML;\r
    })\r
    .`,s.jsx(n.span,{className:"hljs-title function_",children:"catch"}),"(",s.jsxs(n.span,{className:"hljs-function",children:["(",s.jsx(n.span,{className:"hljs-params",children:"error"}),") =>"]}),` {\r
      `,s.jsx(n.span,{className:"hljs-title function_",children:"showError"}),"(",s.jsxs(n.span,{className:"hljs-string",children:["`Fout bij het ophalen van Star Wars data: ",s.jsx(n.span,{className:"hljs-subst",children:"${error.message}"}),"`"]}),`);\r
      globals.`,s.jsx(n.span,{className:"hljs-property",children:"starwarsResult"}),".",s.jsx(n.span,{className:"hljs-property",children:"innerHTML"})," = ",s.jsx(n.span,{className:"hljs-string",children:'""'}),`;\r
    });\r
};\r
\r
`,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(n.span,{className:"hljs-title function_",children:"renderStarWarsPlanet"})," = (",s.jsx(n.span,{className:"hljs-params",children:"planet"}),`) => {\r
  `,s.jsx(n.span,{className:"hljs-comment",children:"// Zet omgevallen numerieke strings om naar nummers (array function)"}),`\r
  `,s.jsx(n.span,{className:"hljs-keyword",children:"const"}),` diameter =\r
    planet.`,s.jsx(n.span,{className:"hljs-property",children:"diameter"})," === ",s.jsx(n.span,{className:"hljs-string",children:'"unknown"'}),`\r
      ? `,s.jsx(n.span,{className:"hljs-string",children:'"Onbekend"'}),`\r
      : `,s.jsxs(n.span,{className:"hljs-string",children:["`",s.jsxs(n.span,{className:"hljs-subst",children:["${",s.jsx(n.span,{className:"hljs-built_in",children:"Number"}),"(planet.diameter).toLocaleString(",s.jsx(n.span,{className:"hljs-string",children:'"nl-NL"'}),")}"]})," km`"]}),`;\r
  `,s.jsx(n.span,{className:"hljs-keyword",children:"const"}),` population =\r
    planet.`,s.jsx(n.span,{className:"hljs-property",children:"population"})," === ",s.jsx(n.span,{className:"hljs-string",children:'"unknown"'}),`\r
      ? `,s.jsx(n.span,{className:"hljs-string",children:'"Onbekend"'}),`\r
      : `,s.jsx(n.span,{className:"hljs-title class_",children:"Number"}),"(planet.",s.jsx(n.span,{className:"hljs-property",children:"population"}),").",s.jsx(n.span,{className:"hljs-title function_",children:"toLocaleString"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"nl-NL"'}),`);\r
\r
  `,s.jsx(n.span,{className:"hljs-comment",children:"// Zet films array om naar links (array method: map)"}),`\r
  `,s.jsx(n.span,{className:"hljs-keyword",children:"const"}),` filmsHTML =\r
    planet.`,s.jsx(n.span,{className:"hljs-property",children:"films"})," && planet.",s.jsx(n.span,{className:"hljs-property",children:"films"}),".",s.jsx(n.span,{className:"hljs-property",children:"length"})," > ",s.jsx(n.span,{className:"hljs-number",children:"0"}),`\r
      ? planet.`,s.jsx(n.span,{className:"hljs-property",children:"films"}),`\r
          .`,s.jsx(n.span,{className:"hljs-title function_",children:"map"}),"(",s.jsxs(n.span,{className:"hljs-function",children:["(",s.jsx(n.span,{className:"hljs-params",children:"film, index"}),") =>"]})," ",s.jsxs(n.span,{className:"hljs-string",children:["`<li>Film ",s.jsxs(n.span,{className:"hljs-subst",children:["${index + ",s.jsx(n.span,{className:"hljs-number",children:"1"}),"}"]}),": ",s.jsx(n.span,{className:"hljs-subst",children:"${film}"}),"</li>`"]}),`)\r
          .`,s.jsx(n.span,{className:"hljs-title function_",children:"join"}),"(",s.jsx(n.span,{className:"hljs-string",children:'""'}),`)\r
      : `,s.jsx(n.span,{className:"hljs-string",children:'"<li>Geen films bekend</li>"'}),`;\r
\r
  `,s.jsx(n.span,{className:"hljs-keyword",children:"return"})," ",s.jsxs(n.span,{className:"hljs-string",children:[`\`\r
        <div class="planet-info">\r
            <h2>`,s.jsx(n.span,{className:"hljs-subst",children:"${planet.name}"}),`</h2>\r
            <div class="info-item">\r
                <strong>Diameter:</strong> `,s.jsx(n.span,{className:"hljs-subst",children:"${diameter}"}),`\r
            </div>\r
            <div class="info-item">\r
                <strong>Populatie:</strong> `,s.jsx(n.span,{className:"hljs-subst",children:"${population}"}),`\r
            </div>\r
            <div class="info-item">\r
                <strong>Klimaat:</strong> `,s.jsxs(n.span,{className:"hljs-subst",children:["${planet.climate || ",s.jsx(n.span,{className:"hljs-string",children:'"Onbekend"'}),"}"]}),`\r
            </div>\r
            <div class="info-item">\r
                <strong>Terrein:</strong> `,s.jsxs(n.span,{className:"hljs-subst",children:["${planet.terrain || ",s.jsx(n.span,{className:"hljs-string",children:'"Onbekend"'}),"}"]}),`\r
            </div>\r
            <div class="info-item">\r
                <strong>Zwaartekracht:</strong> `,s.jsxs(n.span,{className:"hljs-subst",children:["${planet.gravity || ",s.jsx(n.span,{className:"hljs-string",children:'"Onbekend"'}),"}"]}),`\r
            </div>\r
            <div class="info-item">\r
                <strong>Rotatie periode:</strong> `,s.jsxs(n.span,{className:"hljs-subst",children:["${planet.rotation_period || ",s.jsx(n.span,{className:"hljs-string",children:'"Onbekend"'}),"}"]}),` uur\r
            </div>\r
            <div style="grid-column: 1 / -1;">\r
                <strong>Verschenen in films:</strong>\r
                <ul>`,s.jsx(n.span,{className:"hljs-subst",children:"${filmsHTML}"}),`</ul>\r
            </div>\r
        </div>\r
    \``]}),`;\r
};\r
\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// ============================================"}),`\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// METHODE 2: ASYNC/AWAIT & TRY/CATCH"}),`\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// ============================================"}),`\r
\r
`,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(n.span,{className:"hljs-title function_",children:"haalBibliotheekData"})," = ",s.jsx(n.span,{className:"hljs-keyword",children:"async"})," (",s.jsx(n.span,{className:"hljs-params"}),`) => {\r
  `,s.jsx(n.span,{className:"hljs-comment",children:"// Clear previous results"}),`\r
  globals.`,s.jsx(n.span,{className:"hljs-property",children:"bibliotheekResult"}),".",s.jsx(n.span,{className:"hljs-property",children:"innerHTML"}),` =\r
    `,s.jsx(n.span,{className:"hljs-string",children:`'<p class="loading">Data wordt opgehaald...</p>'`}),`;\r
  globals.`,s.jsx(n.span,{className:"hljs-property",children:"errorMessage"}),".",s.jsx(n.span,{className:"hljs-property",children:"classList"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"remove"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"show"'}),`);\r
  globals.`,s.jsx(n.span,{className:"hljs-property",children:"starwarsResult"}),".",s.jsx(n.span,{className:"hljs-property",children:"innerHTML"})," = ",s.jsx(n.span,{className:"hljs-string",children:'""'}),`;\r
\r
  `,s.jsx(n.span,{className:"hljs-keyword",children:"try"}),` {\r
    `,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," response = ",s.jsx(n.span,{className:"hljs-keyword",children:"await"})," ",s.jsx(n.span,{className:"hljs-title function_",children:"fetch"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"bibliotheek.json"'}),`);\r
\r
    `,s.jsx(n.span,{className:"hljs-keyword",children:"if"})," (!response.",s.jsx(n.span,{className:"hljs-property",children:"ok"}),`) {\r
      `,s.jsx(n.span,{className:"hljs-keyword",children:"throw"})," ",s.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(n.span,{className:"hljs-title class_",children:"Error"}),"(",s.jsxs(n.span,{className:"hljs-string",children:["`HTTP error! status: ",s.jsx(n.span,{className:"hljs-subst",children:"${response.status}"}),"`"]}),`);\r
    }\r
\r
    `,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," data = ",s.jsx(n.span,{className:"hljs-keyword",children:"await"})," response.",s.jsx(n.span,{className:"hljs-title function_",children:"json"}),`();\r
\r
    `,s.jsx(n.span,{className:"hljs-comment",children:"// Verwerk de bibliotheek data"}),`\r
    `,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," bibliotheekHTML = ",s.jsx(n.span,{className:"hljs-title function_",children:"renderBibliotheek"}),`(data);\r
    globals.`,s.jsx(n.span,{className:"hljs-property",children:"bibliotheekResult"}),".",s.jsx(n.span,{className:"hljs-property",children:"innerHTML"}),` = bibliotheekHTML;\r
  } `,s.jsx(n.span,{className:"hljs-keyword",children:"catch"}),` (error) {\r
    `,s.jsx(n.span,{className:"hljs-title function_",children:"showError"}),"(",s.jsxs(n.span,{className:"hljs-string",children:["`Fout bij het ophalen van bibliotheek data: ",s.jsx(n.span,{className:"hljs-subst",children:"${error.message}"}),"`"]}),`);\r
    globals.`,s.jsx(n.span,{className:"hljs-property",children:"bibliotheekResult"}),".",s.jsx(n.span,{className:"hljs-property",children:"innerHTML"})," = ",s.jsx(n.span,{className:"hljs-string",children:'""'}),`;\r
  }\r
};\r
\r
`,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(n.span,{className:"hljs-title function_",children:"renderBibliotheek"})," = (",s.jsx(n.span,{className:"hljs-params",children:"data"}),`) => {\r
  `,s.jsx(n.span,{className:"hljs-keyword",children:"const"}),` { bibliotheek, boeken } = data;\r
\r
  `,s.jsx(n.span,{className:"hljs-comment",children:"// Sorteer boeken op titel (array method: sort)"}),`\r
  `,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," sortedBoeken = boeken.",s.jsx(n.span,{className:"hljs-title function_",children:"sort"}),"(",s.jsxs(n.span,{className:"hljs-function",children:["(",s.jsx(n.span,{className:"hljs-params",children:"a, b"}),") =>"]})," a.",s.jsx(n.span,{className:"hljs-property",children:"titel"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"localeCompare"}),"(b.",s.jsx(n.span,{className:"hljs-property",children:"titel"}),`));\r
\r
  `,s.jsx(n.span,{className:"hljs-comment",children:"// Maak HTML voor elk boek (array method: map)"}),`\r
  `,s.jsx(n.span,{className:"hljs-keyword",children:"const"}),` boekenHTML = sortedBoeken\r
    .`,s.jsx(n.span,{className:"hljs-title function_",children:"map"}),"(",s.jsxs(n.span,{className:"hljs-function",children:["(",s.jsx(n.span,{className:"hljs-params",children:"boek"}),") =>"]}),` {\r
      `,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," beschikbaarClass = boek.",s.jsx(n.span,{className:"hljs-property",children:"beschikbaar"})," ? ",s.jsx(n.span,{className:"hljs-string",children:'"available"'})," : ",s.jsx(n.span,{className:"hljs-string",children:'"unavailable"'}),`;\r
      `,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," beschikbaarText = boek.",s.jsx(n.span,{className:"hljs-property",children:"beschikbaar"}),`\r
        ? `,s.jsx(n.span,{className:"hljs-string",children:'"Beschikbaar"'}),`\r
        : `,s.jsx(n.span,{className:"hljs-string",children:'"Niet beschikbaar"'}),`;\r
\r
      `,s.jsx(n.span,{className:"hljs-keyword",children:"return"})," ",s.jsxs(n.span,{className:"hljs-string",children:[`\`\r
                <li class="book-item">\r
                    <h3>`,s.jsx(n.span,{className:"hljs-subst",children:"${boek.titel}"}),`</h3>\r
                    <div class="book-meta">\r
                        <span><strong>Auteur:</strong> `,s.jsx(n.span,{className:"hljs-subst",children:"${boek.auteur}"}),`</span>\r
                        <span><strong>Jaar:</strong> `,s.jsx(n.span,{className:"hljs-subst",children:"${boek.jaar}"}),`</span>\r
                        <span class="availability `,s.jsx(n.span,{className:"hljs-subst",children:"${beschikbaarClass}"}),'">',s.jsx(n.span,{className:"hljs-subst",children:"${beschikbaarText}"}),`</span>\r
                    </div>\r
                </li>\r
            \``]}),`;\r
    })\r
    .`,s.jsx(n.span,{className:"hljs-title function_",children:"join"}),"(",s.jsx(n.span,{className:"hljs-string",children:'""'}),`);\r
\r
  `,s.jsx(n.span,{className:"hljs-comment",children:"// Toon statistieken"}),`\r
  `,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," beschikbareBibliotheek = boeken.",s.jsx(n.span,{className:"hljs-title function_",children:"filter"}),"(",s.jsxs(n.span,{className:"hljs-function",children:["(",s.jsx(n.span,{className:"hljs-params",children:"b"}),") =>"]})," b.",s.jsx(n.span,{className:"hljs-property",children:"beschikbaar"}),").",s.jsx(n.span,{className:"hljs-property",children:"length"}),`;\r
  `,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," totaalbijzonderheden = boeken.",s.jsx(n.span,{className:"hljs-property",children:"length"}),`;\r
\r
  `,s.jsx(n.span,{className:"hljs-keyword",children:"return"})," ",s.jsxs(n.span,{className:"hljs-string",children:["`\r\n        <h2>",s.jsx(n.span,{className:"hljs-subst",children:"${bibliotheek}"}),`</h2>\r
        <p><strong>Aantal boeken:</strong> `,s.jsx(n.span,{className:"hljs-subst",children:"${totaalbijzonderheden}"}),` | \r
           <strong>Beschikbaar:</strong> `,s.jsx(n.span,{className:"hljs-subst",children:"${beschikbareBibliotheek}"}),`</p>\r
        <ul class="book-list">\r
            `,s.jsx(n.span,{className:"hljs-subst",children:"${boekenHTML}"}),`\r
        </ul>\r
    \``]}),`;\r
};\r
\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// ============================================"}),`\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// UTILITY FUNCTIES"}),`\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// ============================================"}),`\r
\r
`,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(n.span,{className:"hljs-title function_",children:"showError"})," = (",s.jsx(n.span,{className:"hljs-params",children:"message"}),`) => {\r
  globals.`,s.jsx(n.span,{className:"hljs-property",children:"errorMessage"}),".",s.jsx(n.span,{className:"hljs-property",children:"textContent"}),` = message;\r
  globals.`,s.jsx(n.span,{className:"hljs-property",children:"errorMessage"}),".",s.jsx(n.span,{className:"hljs-property",children:"classList"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"add"}),"(",s.jsx(n.span,{className:"hljs-string",children:'"show"'}),`);\r
};\r
\r
\r

`]})}),`
`,s.jsxs(n.h3,{id:"belangrijke-concepten-in-deze-oplossing",children:["Belangrijke Concepten in deze Oplossing",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#belangrijke-concepten-in-deze-oplossing",children:s.jsx(n.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(n.h4,{id:"1-promise-chaining-methode-1",children:["1. ",s.jsx(n.strong,{children:"Promise Chaining (Methode 1)"}),s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-promise-chaining-methode-1",children:s.jsx(n.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:".then()"})," ketens voor opeenvolgende operaties"]}),`
`,s.jsx(n.li,{children:"Response omzetten naar JSON"}),`
`,s.jsxs(n.li,{children:["Foutafhandeling met ",s.jsx(n.code,{children:".catch()"})]}),`
`]}),`
`,s.jsxs(n.h4,{id:"2-asyncawait-methode-2",children:["2. ",s.jsx(n.strong,{children:"Async/Await (Methode 2)"}),s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-asyncawait-methode-2",children:s.jsx(n.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"async"})," functie declaratie"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"await"})," voor het wachten op promises"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"try/catch"})," blok voor foutafhandeling"]}),`
`]}),`
`,s.jsxs(n.h4,{id:"3-array-methods",children:["3. ",s.jsx(n.strong,{children:"Array Methods"}),s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-array-methods",children:s.jsx(n.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:".map()"})," - elementen transformeren (films, boeken renderen)"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:".sort()"})," - sorteer boeken alfabetisch"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:".filter()"})," - filter beschikbare boeken"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:".join()"})," - combineer array elementen tot string"]}),`
`]}),`
`,s.jsxs(n.h4,{id:"4-setup-function",children:["4. ",s.jsx(n.strong,{children:"Setup Function"}),s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-setup-function",children:s.jsx(n.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"setup()"})," functie die alle event listeners instelt"]}),`
`,s.jsxs(n.li,{children:["Wordt aangeroepen via ",s.jsx(n.code,{children:"window.addEventListener('load', setup)"})]}),`
`,s.jsx(n.li,{children:"Zorgt dat DOM volledig geladen is voordat listeners ingesteld worden"}),`
`]}),`
`,s.jsxs(n.h4,{id:"5-rendering-functions",children:["5. ",s.jsx(n.strong,{children:"Rendering Functions"}),s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-rendering-functions",children:s.jsx(n.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"renderStarWarsPlanet()"})," - zet planet object om naar HTML"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"renderBibliotheek()"})," - zet bibliotheek data om naar HTML"]}),`
`,s.jsx(n.li,{children:"Scheiding van data en presentatie"}),`
`]}),`
`,s.jsxs(n.h3,{id:"tips-voor-aanpassingen",children:["Tips voor Aanpassingen",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tips-voor-aanpassingen",children:s.jsx(n.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Meer planeten"}),": Verander ",s.jsx(n.code,{children:"planets/1"})," in een loop en haal planeten 1-5 op"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Filteren"}),": Voeg een zoekbalk toe die de boeken filtert met ",s.jsx(n.code,{children:".filter()"})]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Sorteren"}),": Voeg opties toe om op auteur, jaar of beschikbaarheid te sorteren"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Error handling"}),": Voeg specifieke error messages toe voor verschillende fouttypen"]}),`
`]})]})}function r(e={}){const{wrapper:n}=e.components||{};return n?s.jsx(n,{...e,children:s.jsx(a,{...e})}):a(e)}export{r as default};
