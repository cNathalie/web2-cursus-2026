import{j as s}from"./index-lgcgUzQg.js";function a(n){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h2,{id:"voorbeeldoplossing-interactieve-fotoalbum",children:["Voorbeeldoplossing: Interactieve Fotoalbum",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#voorbeeldoplossing-interactieve-fotoalbum",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:'Dit is een complete werkende voorbeeldoplossing voor de oefening "Interactieve Fotoalbum".'}),`
`,s.jsxs(e.h2,{id:"javascript-mainjs",children:["JavaScript (",s.jsx(e.code,{children:"main.js"}),")",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#javascript-mainjs",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// SETUP FUNCTIE"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"setup"})," = (",s.jsx(e.span,{className:"hljs-params"}),`) => {\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Pagina geladen, setup gestart!"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ELEMENTEN OPVRAGEN"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Hier gebruiken we getElementById() om alle HTML-elementen op te halen"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// die we gaan manipuleren"}),`\r
\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," photoImage = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"photoImage"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," photoTitle = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"photoTitle"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," photoDescription = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"photoDescription"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," photoCounter = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"photoCounter"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," prevBtn = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"prevBtn"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," nextBtn = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"nextBtn"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," favoriteBtn = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"favoriteBtn"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," toggleDescBtn = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"toggleDescBtn"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// EVENT LISTENERS TOEVOEGEN"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Dit zijn de event listeners die reageren op gebruikersinvoer"}),`\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:'// "Vorige" knop'}),`\r
  prevBtn.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Verminder de index met 1"}),`\r
    `,s.jsx(e.span,{className:"hljs-title function_",children:"showPhoto"}),"(currentPhotoIndex - ",s.jsx(e.span,{className:"hljs-number",children:"1"}),`);\r
  });\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:'// "Volgende" knop'}),`\r
  nextBtn.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Verhoog de index met 1"}),`\r
    `,s.jsx(e.span,{className:"hljs-title function_",children:"showPhoto"}),"(currentPhotoIndex + ",s.jsx(e.span,{className:"hljs-number",children:"1"}),`);\r
  });\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:'// "Favoriet" knop'}),`\r
  favoriteBtn.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),`, toggleFavorite);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:'// "Beschrijving" knop'}),`\r
  toggleDescBtn.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),`, toggleDescription);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// INITIALISATIE"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Bij het laden van de pagina, tonen we meteen de eerste foto"}),`\r
\r
  `,s.jsx(e.span,{className:"hljs-title function_",children:"showPhoto"}),"(",s.jsx(e.span,{className:"hljs-number",children:"0"}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Setup voltooid!"'}),`);\r
};\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// WINDOW LOAD EVENT"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Dit zorgt dat onze JavaScript pas wordt uitgevoerd"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// als de HTML pagina volledig is geladen."}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Dit is ESSENTIEEL voor het ophalen van DOM-elementen!"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Deze regel moet helemaal onderaan staan, zodat alle functies en variabelen al gedefinieerd zijn voordat"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// we setup() aanroepen."}),`\r
\r
`,s.jsx(e.span,{className:"hljs-variable language_",children:"window"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"load"'}),`, setup);\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// FOTO INFORMATIE"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Dit is een array met objecten die foto-informatie bevatten"}),`\r
\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` photos = [\r
  {\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Een mooie zonsondergang"'}),`,\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"description"}),`:\r
      `,s.jsx(e.span,{className:"hljs-string",children:'"Dit is een prachtige foto van een zonsondergang boven het strand. Genomen op een mooie zomeravond met een professionele camera."'}),`,\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"imageSrc"}),": ",s.jsx(e.span,{className:"hljs-string",children:'".imgs/sunset.jpg"'}),`,\r
  },\r
  {\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Bergen in de sneeuw"'}),`,\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"description"}),`:\r
      `,s.jsx(e.span,{className:"hljs-string",children:'"De bergtoppen bedekt met sneeuw. Een koude winterdag met helder blauwe lucht."'}),`,\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"imageSrc"}),": ",s.jsx(e.span,{className:"hljs-string",children:'".imgs/mountains.jpg"'}),`,\r
  },\r
  {\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Bloemen in het bos"'}),`,\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"description"}),`:\r
      `,s.jsx(e.span,{className:"hljs-string",children:'"Kleurrijke wilde bloemen groeien tussen de bomen. Een teken dat de lente is aangekomen."'}),`,\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"imageSrc"}),": ",s.jsx(e.span,{className:"hljs-string",children:'".imgs/flowers.jpg"'}),`,\r
  },\r
  {\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Nacht met sterren"'}),`,\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"description"}),`:\r
      `,s.jsx(e.span,{className:"hljs-string",children:'"Een heeldere nacht waar je duizenden sterren kan zien. Genomen ver weg van de stad."'}),`,\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"imageSrc"}),": ",s.jsx(e.span,{className:"hljs-string",children:'".imgs/stars.jpg"'}),`,\r
  },\r
  {\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Strand tijdens zonsopgang"'}),`,\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"description"}),`:\r
      `,s.jsx(e.span,{className:"hljs-string",children:'"De zon komt op boven het strand. Het water gloeit in oranje en roze kleuren."'}),`,\r
    `,s.jsx(e.span,{className:"hljs-attr",children:"imageSrc"}),": ",s.jsx(e.span,{className:"hljs-string",children:'".imgs/sunrise.jpg"'}),`,\r
  },\r
];\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// STATE - VARIABELEN"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Met deze variabelen houden we bij welke foto we zien"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// en welke foto's favoriet zijn"}),`\r
\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"let"})," currentPhotoIndex = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"let"}),` favorites = [];\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// FUNCTIES"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Functie 1: Toon een foto"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"showPhoto"})," = (",s.jsx(e.span,{className:"hljs-params",children:"index"}),`) => {\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Controleer grenzen: zorg dat we niet onder 0 of boven het aantal foto's gaan"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Check of de index onder 0 gaat (vorige knop op eerste foto)"}),`\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (index < ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`) {\r
    currentPhotoIndex = photos.`,s.jsx(e.span,{className:"hljs-property",children:"length"})," - ",s.jsx(e.span,{className:"hljs-number",children:"1"}),`;\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Check of de index hoger is dan het aantal foto's (volgende knop op laatste foto)"}),`\r
  } `,s.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (index >= photos.",s.jsx(e.span,{className:"hljs-property",children:"length"}),`) {\r
    currentPhotoIndex = `,s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Anders is de index geldig"}),`\r
  } `,s.jsx(e.span,{className:"hljs-keyword",children:"else"}),` {\r
    currentPhotoIndex = index;\r
  }\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Haal de huidige foto op uit de array"}),`\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` photo = photos[currentPhotoIndex];\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Update de titel (textContent is veiliger dan innerHTML)"}),`\r
  photoTitle.`,s.jsx(e.span,{className:"hljs-property",children:"textContent"})," = photo.",s.jsx(e.span,{className:"hljs-property",children:"title"}),`;\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Update de beschrijving"}),`\r
  photoDescription.`,s.jsx(e.span,{className:"hljs-property",children:"textContent"})," = photo.",s.jsx(e.span,{className:"hljs-property",children:"description"}),`;\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:'// Update het fotogetal (bijv. "Foto 2 van 5")'}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// currentPhotoIndex + 1 omdat array's op 0 beginnen"}),`\r
  photoCounter.`,s.jsx(e.span,{className:"hljs-property",children:"textContent"})," = ",s.jsxs(e.span,{className:"hljs-string",children:["`Foto ",s.jsxs(e.span,{className:"hljs-subst",children:["${currentPhotoIndex + ",s.jsx(e.span,{className:"hljs-number",children:"1"}),"}"]})," van ",s.jsx(e.span,{className:"hljs-subst",children:"${photos.length}"}),"`"]}),`;\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Update de afbeelding (in praktijk gebruik je plaatjes)"}),`\r
  photoImage.`,s.jsx(e.span,{className:"hljs-property",children:"src"})," = photo.",s.jsx(e.span,{className:"hljs-property",children:"imageSrc"}),`;\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Verberg beschrijving wanneer we naar volgende foto gaan"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:'// Voeg de "hidden" class toe'}),`\r
  photoDescription.`,s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"add"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"hidden"'}),`);\r
  toggleDescBtn.`,s.jsx(e.span,{className:"hljs-property",children:"textContent"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"Beschrijving tonen"'}),`;\r
};\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Functie 2: Toggle beschrijving"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"toggleDescription"})," = (",s.jsx(e.span,{className:"hljs-params"}),`) => {\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// toggle() voegt een class toe als die er niet is,"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// en verwijdert hem als die er wel is"}),`\r
  photoDescription.`,s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"toggle"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"hidden"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Verander de knoptekst afhankelijk van state"}),`\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (photoDescription.",s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"contains"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"hidden"'}),`)) {\r
    toggleDescBtn.`,s.jsx(e.span,{className:"hljs-property",children:"textContent"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"Beschrijving tonen"'}),`;\r
  } `,s.jsx(e.span,{className:"hljs-keyword",children:"else"}),` {\r
    toggleDescBtn.`,s.jsx(e.span,{className:"hljs-property",children:"textContent"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"Beschrijving verbergen"'}),`;\r
  }\r
};\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Functie 3: Toggle favoriet status"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"toggleFavorite"})," = (",s.jsx(e.span,{className:"hljs-params"}),`) => {\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Check of de huidige foto al favoriet is"}),`\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (favorites.",s.jsx(e.span,{className:"hljs-title function_",children:"includes"}),`(currentPhotoIndex)) {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Verwijder uit favorites"}),`\r
    favorites = favorites.`,s.jsx(e.span,{className:"hljs-title function_",children:"filter"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"index"}),") =>"]}),` index !== currentPhotoIndex);\r
    favoriteBtn.`,s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"remove"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"favorite"'}),`);\r
  } `,s.jsx(e.span,{className:"hljs-keyword",children:"else"}),` {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Voeg toe aan favorites"}),`\r
    favorites.`,s.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(currentPhotoIndex);\r
    favoriteBtn.`,s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"add"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"favorite"'}),`);\r
  }\r
\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(e.span,{className:"hljs-string",children:`"Favorite foto's:"`}),`, favorites);\r
};
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"stap-voor-stap-uitleg",children:["Stap-voor-stap uitleg",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stap-voor-stap-uitleg",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.h3,{id:"window-load-event",children:[s.jsx(e.strong,{children:"Window Load Event"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#window-load-event",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-variable language_",children:"window"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"load"'}),`, setup);
`]})}),`
`,s.jsx(e.p,{children:"We wachten tot de pagina volledig is geladen voordat setup() wordt aangeroepen."}),`
`,s.jsxs(e.h3,{id:"elementen-opvragen",children:[s.jsx(e.strong,{children:"Elementen opvragen"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#elementen-opvragen",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," photoImage = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"photoImage"'}),`);\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," prevBtn = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"prevBtn"'}),`);
`]})}),`
`,s.jsx(e.p,{children:"We halen alle HTML-elementen op die we gaan gebruiken."}),`
`,s.jsxs(e.h3,{id:"array-met-data",children:[s.jsx(e.strong,{children:"Array met data"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#array-met-data",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` photos = [\r
  { `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"..."'}),", ",s.jsx(e.span,{className:"hljs-attr",children:"description"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"..."'}),", ",s.jsx(e.span,{className:"hljs-attr",children:"imageSrc"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"..."'}),` },\r
  { `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"..."'}),", ",s.jsx(e.span,{className:"hljs-attr",children:"description"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"..."'}),", ",s.jsx(e.span,{className:"hljs-attr",children:"imageSrc"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"..."'}),` },\r
];
`]})}),`
`,s.jsx(e.p,{children:"De foto-informatie wordt opgeslagen in een array met objecten."}),`
`,s.jsxs(e.h3,{id:"state-variabelen",children:[s.jsx(e.strong,{children:"State variabelen"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#state-variabelen",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," currentPhotoIndex = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"let"}),` favorites = [];
`]})}),`
`,s.jsx(e.p,{children:"Deze houden bij welke foto we zien en welke favoriet zijn."}),`
`,s.jsxs(e.h3,{id:"functies",children:[s.jsx(e.strong,{children:"Functies"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#functies",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"showPhoto"}),"(",s.jsx(e.span,{className:"hljs-params",children:"index"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Update de foto-informatie"}),`\r
}
`]})}),`
`,s.jsx(e.p,{children:"Deze functies voeren logica uit wanneer events plaatsvinden."}),`
`,s.jsxs(e.h3,{id:"event-listeners",children:[s.jsx(e.strong,{children:"Event Listeners"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#event-listeners",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:["prevBtn.",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-title function_",children:"showPhoto"}),"(currentPhotoIndex - ",s.jsx(e.span,{className:"hljs-number",children:"1"}),`);\r
});
`]})}),`
`,s.jsx(e.p,{children:'Wanneer op "Vorige" wordt geklikt, wordt showPhoto() aangeroepen.'}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"belangrijkste-dom-concepts-uit-deze-oplossing",children:["Belangrijkste DOM-Concepts uit deze oplossing",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#belangrijkste-dom-concepts-uit-deze-oplossing",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Concept"}),s.jsx(e.th,{children:"Voorbeeld"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Elementen opvragen"}),s.jsx(e.td,{children:s.jsx(e.code,{children:'document.getElementById("id")'})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"textContent updaten"}),s.jsx(e.td,{children:s.jsx(e.code,{children:'title.textContent = "nieuwe titel"'})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Element opvragen"}),s.jsx(e.td,{children:s.jsx(e.code,{children:'element.classList.toggle("class")'})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Event listener toevoegen"}),s.jsx(e.td,{children:s.jsx(e.code,{children:'button.addEventListener("click", functie)'})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"classList manipulatie"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"element.classList.add/remove/toggle()"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Voorwaardelijk statement"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"if (favorites.includes(...))"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Array methoden"}),s.jsxs(e.td,{children:[s.jsx(e.code,{children:"array.push()"}),", ",s.jsx(e.code,{children:"array.filter()"}),", ",s.jsx(e.code,{children:"array.includes()"})]})]})]})]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"veelgemaakte-fouten",children:["Veelgemaakte fouten",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#veelgemaakte-fouten",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.h3,{id:"-fout-1-elementen-opvragen-buiten-windowload",children:["❌ ",s.jsx(e.em,{children:"Fout 1: Elementen opvragen BUITEN window.load"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-fout-1-elementen-opvragen-buiten-windowload",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// FOUT - elementen bestaan nog niet!"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," button = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"btn"'}),`);\r
`,s.jsx(e.span,{className:"hljs-variable language_",children:"window"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"load"'}),`, setup);
`]})}),`
`,s.jsxs(e.h3,{id:"correct",children:[s.jsx(e.em,{children:"Correct"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#correct",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-variable language_",children:"window"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"load"'}),`, setup);\r
\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"setup"}),"(",s.jsx(e.span,{className:"hljs-params"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," button = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"btn"'}),"); ",s.jsx(e.span,{className:"hljs-comment",children:"// Nu bestaan ze wel"}),`\r
}
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h3,{id:"-fout-2-innerhtml-gebruiken-voor-plain-text",children:["❌ ",s.jsx(e.em,{children:"Fout 2: innerHTML gebruiken voor plain text"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-fout-2-innerhtml-gebruiken-voor-plain-text",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// FOUT - innerHTML parsed HTML, niet nodig en onveilig voor plain text"}),`\r
photoTitle.`,s.jsx(e.span,{className:"hljs-property",children:"innerHTML"})," = photo.",s.jsx(e.span,{className:"hljs-property",children:"title"}),"; ",s.jsx(e.span,{className:"hljs-comment",children:"// kan XSS veroorzaken!"}),`
`]})}),`
`,s.jsxs(e.h3,{id:"correct-1",children:[s.jsx(e.em,{children:"Correct"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#correct-1",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:["photoTitle.",s.jsx(e.span,{className:"hljs-property",children:"textContent"})," = photo.",s.jsx(e.span,{className:"hljs-property",children:"title"}),"; ",s.jsx(e.span,{className:"hljs-comment",children:"// veilig en simpel"}),`
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h3,{id:"-fout-3-event-listener-op-button-die-niet-bestaat",children:["❌ ",s.jsx(e.em,{children:"Fout 3: Event listener op button die niet bestaat"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-fout-3-event-listener-op-button-die-niet-bestaat",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// FOUT - button bestaat misschien niet"}),`\r
button.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),`, functie);
`]})}),`
`,s.jsxs(e.h3,{id:"correct-2",children:[s.jsx(e.em,{children:"Correct"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#correct-2",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// eerst ophalen, dan event toevoegen"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," button = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"btn"'}),`);\r
button.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),`, functie);
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"bonus-keyboard-navigation",children:["Bonus: Keyboard Navigation",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bonus-keyboard-navigation",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Wil je dat gebruikers met pijltjestoetsen kunnen navigeren? Voeg dit toe in ",s.jsx(e.code,{children:"setup()"}),":"]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"keydown"'}),", ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params",children:"event"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (event.",s.jsx(e.span,{className:"hljs-property",children:"key"})," === ",s.jsx(e.span,{className:"hljs-string",children:'"ArrowLeft"'}),`) {\r
    `,s.jsx(e.span,{className:"hljs-title function_",children:"showPhoto"}),"(currentPhotoIndex - ",s.jsx(e.span,{className:"hljs-number",children:"1"}),`);\r
  } `,s.jsx(e.span,{className:"hljs-keyword",children:"else"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (event.",s.jsx(e.span,{className:"hljs-property",children:"key"})," === ",s.jsx(e.span,{className:"hljs-string",children:'"ArrowRight"'}),`) {\r
    `,s.jsx(e.span,{className:"hljs-title function_",children:"showPhoto"}),"(currentPhotoIndex + ",s.jsx(e.span,{className:"hljs-number",children:"1"}),`);\r
  }\r
});
`]})})]})}function r(n={}){const{wrapper:e}=n.components||{};return e?s.jsx(e,{...n,children:s.jsx(a,{...n})}):a(n)}export{r as default};
