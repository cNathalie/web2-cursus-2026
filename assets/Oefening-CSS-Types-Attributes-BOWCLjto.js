import{j as e}from"./index-tKI7b9Q5.js";function a(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"herhalingsoefening-na-hoofdstukken-types-elements-attributes-en-css-manipulation",children:["Herhalingsoefening na hoofdstukken 'Types', 'Elements-Attributes' en 'CSS-Manipulation'",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#herhalingsoefening-na-hoofdstukken-types-elements-attributes-en-css-manipulation",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Doel: herhaling van strings, elementen aanmaken, attributen instellen en CSS manipuleren in JavaScript.\r
Uitvoering: dit programma werkt in de browser. Je maakt een HTML bestand met een script tag waarin je JavaScript schrijft. Open het HTML bestand in je browser om het resultaat te zien.\r
Maak deze opdracht in een nieuw project in VSCode.`}),`
`,e.jsxs(s.h3,{id:"vooraf",children:["Vooraf",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vooraf",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Maak een nieuw project in VSCode."}),`
`,e.jsxs(s.li,{children:["Maak een bestand ",e.jsx(s.code,{children:"index.html"})," met de basis HTML structuur (zie stap 1)."]}),`
`,e.jsxs(s.li,{children:["Maak een bestand ",e.jsx(s.code,{children:"styles.css"})," met basis CSS styling (zie stap 2)."]}),`
`,e.jsxs(s.li,{children:["Maak een bestand ",e.jsx(s.code,{children:"script.js"})," voor je JavaScript code."]}),`
`,e.jsxs(s.li,{children:["Voeg een ",e.jsx(s.code,{children:"<link>"})," tag toe in de ",e.jsx(s.code,{children:"<head>"})," voor de CSS en een ",e.jsx(s.code,{children:"<script>"})," tag aan het einde van de ",e.jsx(s.code,{children:"<body>"})," voor de JS."]}),`
`,e.jsxs(s.li,{children:["Open ",e.jsx(s.code,{children:"index.html"})," in je browser om je code te testen."]}),`
`]}),`
`,e.jsxs(s.h3,{id:"situatie",children:["Situatie",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#situatie",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Je gaat een eenvoudig profiel kaartje maken voor een persoon. Je gebruikt JavaScript om een div element aan te maken, attributen in te stellen, CSS stijlen toe te passen en tekst toe te voegen met behulp van strings."}),`
`,e.jsxs(s.h3,{id:"opdracht",children:["Opdracht",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opdracht",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.h4,{id:"1-maak-de-html-structuur",children:["1. Maak de HTML structuur",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-maak-de-html-structuur",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Maak een ",e.jsx(s.code,{children:"index.html"})," bestand met de volgende inhoud:"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-meta",children:["<!DOCTYPE ",e.jsx(s.span,{className:"hljs-keyword",children:"html"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"html"})," ",e.jsx(s.span,{className:"hljs-attr",children:"lang"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"nl"'}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"head"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"meta"})," ",e.jsx(s.span,{className:"hljs-attr",children:"charset"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"meta"})," ",e.jsx(s.span,{className:"hljs-attr",children:"name"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"viewport"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"content"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"title"}),">"]}),"Profiel Kaartje",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"title"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"link"})," ",e.jsx(s.span,{className:"hljs-attr",children:"rel"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"stylesheet"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"href"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"styles.css"'})," />"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"head"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"body"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Mijn Profiel",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"h1"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"div"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"container"'}),">"]}),e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"div"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"script"})," ",e.jsx(s.span,{className:"hljs-attr",children:"src"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"script.js"'}),">"]}),e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"script"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"body"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,e.jsxs(s.h4,{id:"2-maak-de-css-styling",children:["2. Maak de CSS styling",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-maak-de-css-styling",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Maak een ",e.jsx(s.code,{children:"styles.css"})," bestand met de volgende inhoud om de pagina een mooi uiterlijk te geven:"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-css",children:[e.jsx(s.span,{className:"hljs-selector-tag",children:"body"}),` {\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"font-family"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Segoe UI"'}),`, Tahoma, Geneva, Verdana, sans-serif;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"background"}),": ",e.jsx(s.span,{className:"hljs-built_in",children:"linear-gradient"}),"(",e.jsx(s.span,{className:"hljs-number",children:"135deg"}),", ",e.jsx(s.span,{className:"hljs-number",children:"#667eea"})," ",e.jsx(s.span,{className:"hljs-number",children:"0%"}),", ",e.jsx(s.span,{className:"hljs-number",children:"#764ba2"})," ",e.jsx(s.span,{className:"hljs-number",children:"100%"}),`);\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"color"}),": ",e.jsx(s.span,{className:"hljs-number",children:"#333"}),`;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"margin"}),": ",e.jsx(s.span,{className:"hljs-number",children:"0"}),`;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"padding"}),": ",e.jsx(s.span,{className:"hljs-number",children:"40px"}),`;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"min-height"}),": ",e.jsx(s.span,{className:"hljs-number",children:"100vh"}),`;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"display"}),`: flex;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"flex-direction"}),`: column;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"align-items"}),`: center;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"justify-content"}),`: center;\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-selector-tag",children:"h1"}),` {\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"color"}),": ",e.jsx(s.span,{className:"hljs-number",children:"#ffffff"}),`;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",e.jsx(s.span,{className:"hljs-number",children:"30px"}),`;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"text-shadow"}),": ",e.jsx(s.span,{className:"hljs-number",children:"2px"})," ",e.jsx(s.span,{className:"hljs-number",children:"2px"})," ",e.jsx(s.span,{className:"hljs-number",children:"4px"})," ",e.jsx(s.span,{className:"hljs-built_in",children:"rgba"}),"(",e.jsx(s.span,{className:"hljs-number",children:"0"}),", ",e.jsx(s.span,{className:"hljs-number",children:"0"}),", ",e.jsx(s.span,{className:"hljs-number",children:"0"}),", ",e.jsx(s.span,{className:"hljs-number",children:"0.3"}),`);\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"font-size"}),": ",e.jsx(s.span,{className:"hljs-number",children:"2.5em"}),`;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"font-weight"}),": ",e.jsx(s.span,{className:"hljs-number",children:"300"}),`;\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-selector-id",children:"#container"}),` {\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"display"}),`: flex;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"justify-content"}),`: center;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"align-items"}),`: center;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"width"}),": ",e.jsx(s.span,{className:"hljs-number",children:"100%"}),`;\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"max-width"}),": ",e.jsx(s.span,{className:"hljs-number",children:"800px"}),`;\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-selector-id",children:"#profile"}),` {\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"color"}),": ",e.jsx(s.span,{className:"hljs-built_in",children:"rgba"}),"(",e.jsx(s.span,{className:"hljs-number",children:"7"}),", ",e.jsx(s.span,{className:"hljs-number",children:"85"}),", ",e.jsx(s.span,{className:"hljs-number",children:"78"}),", ",e.jsx(s.span,{className:"hljs-number",children:"0.897"}),`);\r
  `,e.jsx(s.span,{className:"hljs-attribute",children:"font-size"}),`: xx-large;\r
}\r

`]})}),`
`,e.jsxs(s.h4,{id:"3-creëer-een-div-element",children:["3. Creëer een div element",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-creëer-een-div-element",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["In ",e.jsx(s.code,{children:"script.js"}),", schrijf code om een nieuw ",e.jsx(s.code,{children:"div"})," element toe te voegen aan de pagina met ",e.jsx(s.code,{children:"insertAdjacentHTML()"}),`.\r
Geef het een id "profile" en een class "kaart". Bijvoorbeeld:`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:["container.",e.jsx(s.span,{className:"hljs-title function_",children:"insertAdjacentHTML"}),"(",e.jsx(s.span,{className:"hljs-string",children:"'beforeend'"}),", ",e.jsx(s.span,{className:"hljs-string",children:`'<div id="profile" class="kaart"></div>'`}),`);
`]})}),`
`,e.jsxs(s.h4,{id:"4-haal-het-element-op",children:["4. Haal het element op",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-haal-het-element-op",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Gebruik ",e.jsx(s.code,{children:"document.getElementById()"})," om het zojuist toegevoegde div element op te halen en sla het op in een variabele ",e.jsx(s.code,{children:"profile"}),"."]}),`
`,e.jsxs(s.h4,{id:"5-stel-attributen-in",children:["5. Stel attributen in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-stel-attributen-in",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Gebruik ",e.jsx(s.code,{children:"setAttribute()"})," om de volgende attributen in te stellen op het div element:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"data-name"}),' met waarde "John Doe" of een andere naam van jouw keuze']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"data-age"}),' met waarde "25" of een andere leeftijd van jouw keuze']}),`
`]}),`
`,e.jsxs(s.h4,{id:"6-manipuleer-css-stijlen",children:["6. Manipuleer CSS stijlen",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#6-manipuleer-css-stijlen",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Gebruik de ",e.jsx(s.code,{children:".style"})," property om de volgende stijlen toe te passen op het div element:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:'Achtergrondkleur: "lightblue"'}),`
`,e.jsx(s.li,{children:'Breedte: "300px"'}),`
`,e.jsx(s.li,{children:'Hoogte: "200px"'}),`
`,e.jsx(s.li,{children:'Rand: "2px solid black"'}),`
`,e.jsx(s.li,{children:'Padding: "10px"'}),`
`,e.jsx(s.li,{children:'Tekst uitlijnen: "center"'}),`
`]}),`
`,e.jsxs(s.h4,{id:"7-voeg-tekst-toe-met-strings-en-data-attributen",children:["7. Voeg tekst toe met strings en data-attributen",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#7-voeg-tekst-toe-met-strings-en-data-attributen",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Gebruik ",e.jsx(s.code,{children:"getAttribute()"}),` om de naam en leeftijd op te halen uit de data-attributen.\r
Maak een string variabele `,e.jsx(s.code,{children:"description"}),` met waarde " is jaar oud en houdt van programmeren."\r
Gebruik string concatenatie (+) om een volledige zin te maken: `,e.jsx(s.code,{children:"name + description"}),`, waarbij je de leeftijd invult.\r
Stel de `,e.jsx(s.code,{children:"innerText"})," van het div element in op deze volledige zin."]}),`
`,e.jsxs(s.h4,{id:"8-controleer-attributen",children:["8. Controleer attributen",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#8-controleer-attributen",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Gebruik ",e.jsx(s.code,{children:"console.log()"})," om de waarden van de ",e.jsx(s.code,{children:"data-name"})," en ",e.jsx(s.code,{children:"data-age"})," attributen op te vragen met ",e.jsx(s.code,{children:"getAttribute()"})," en toon ze in de console."]}),`
`,e.jsxs(s.h3,{id:"extra-optioneel",children:["Extra (optioneel)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#extra-optioneel",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Kies één extra uitbreiding:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Voeg een tweede attribuut toe en toon het in de console."}),`
`,e.jsx(s.li,{children:"Verander de achtergrondkleur naar groen als de leeftijd groter is dan 20 (gebruik een if statement)."}),`
`,e.jsx(s.li,{children:"Voeg een tweede div toe met andere gegevens."}),`
`]})]})}function i(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{i as default};
