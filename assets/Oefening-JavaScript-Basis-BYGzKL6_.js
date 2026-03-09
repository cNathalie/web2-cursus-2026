import{j as e}from"./index-Daelu3Tg.js";function a(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"herhalingsoefening-na-hoofdstuk-javascript---basis",children:["Herhalingsoefening na hoofdstuk ‘JavaScript - Basis’",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#herhalingsoefening-na-hoofdstuk-javascript---basis",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Doel: herhaling van variabelen, datatypes, objecten en functies in JavaScript.\r
Uitvoering: dit programma werkt volledig in de console. Je moet geen HTML‑elementen ophalen.\r
Maak deze opdracht in een JS file in een nieuw project in VSCode`}),`
`,e.jsxs(n.h3,{id:"vooraf",children:["Vooraf",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vooraf",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Om je JavaScript code te kunnen uitvoeren moet je Node.js geïnstalleerd hebben. Je kan in de cursus ",e.jsx(n.a,{href:"https://cnathalie.github.io/web2-cursus-2026/project/startpunt",children:"Project - Startpunt"})," terugvinden hoe je dit doet."]}),`
`,e.jsx(n.li,{children:"Wanneer Node.js is geïnstalleerd moet je een Terminal openen in Visual Studio Code om de output van je code te kunnen zien. Ook hiervan zie je een stappenplan in de cursus Project - Startpunt."}),`
`,e.jsx(n.li,{children:"Je kan je code runnen door in de Terminal vanuit de map waar je JS bestand staat het commando “node [naam van je bestand]” in te geven."}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"hljs language-shell",children:`cd [naam van je project map]\r
node [naam van je JS bestand]
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Je kan ook de Visual Studio Code extension ",e.jsx(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner",children:"Code Runner"})," installeren en dan de play-knop rechts bovenaan je scherm aanklikken"]}),`
`,e.jsx(n.li,{children:"Het kan zijn dat je in de Terminal eerst toestemming moet geven om het script te runnen."}),`
`]}),`
`,e.jsxs(n.h3,{id:"situatie",children:["Situatie",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#situatie",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Je gaat een klein programma schrijven dat informatie bijhoudt over een fictieve persoon.\r
Je gebruikt hiervoor variabelen, een object en verschillende functies.`}),`
`,e.jsxs(n.h3,{id:"opdracht",children:["Opdracht",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opdracht",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.h4,{id:"1-maak-variabelen-aan",children:["1. Maak variabelen aan",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-maak-variabelen-aan",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Maak voor elk van onderstaande gegevens een aparte variabele:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"een naam (String)"}),`
`,e.jsx(n.li,{children:"een leeftijd (Number)"}),`
`,e.jsx(n.li,{children:"of de persoon student is (Boolean)"}),`
`,e.jsx(n.li,{children:"een lijst met hobby’s (Array van Strings)"}),`
`,e.jsx(n.li,{children:"een partner (Null)"}),`
`,e.jsx(n.li,{children:"een favoriete kleur (Undefined)"}),`
`]}),`
`,e.jsx(n.p,{children:"Gebruik const waar mogelijk, en let als de waarde in de toekomst veranderbaar zou kunnen zijn."}),`
`,e.jsxs(n.h4,{id:"2-maak-een-object-persoon",children:["2. Maak een object persoon",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-maak-een-object-persoon",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Maak een object dat alle bovenstaande variabelen bevat als eigenschappen."}),`
`,e.jsxs(n.h4,{id:"3-schrijf-een-functie-arrow-function",children:["3. Schrijf een functie (arrow function)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-schrijf-een-functie-arrow-function",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Maak een functie beschrijfPersoon die:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"één parameter verwacht (het persoon-object)"}),`
`,e.jsxs(n.li,{children:[`een string teruggeeft die de persoon beschrijft\r
bijvoorbeeld: `,e.jsx(n.code,{children:"${p.naam} is ${p.leeftijd} jaar oud en heeft ${p.hobbies.length} hobby’s."})," (je kiest zelf de exacte zin)"]}),`
`,e.jsx(n.li,{children:"Gebruik geen console.log in de functie, enkel return."}),`
`]}),`
`,e.jsxs(n.h4,{id:"4-schrijf-een-functie-arrow-function",children:["4. Schrijf een functie (arrow function)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-schrijf-een-functie-arrow-function",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Maak een arrow function telHobbys die:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"een lijst hobby’s als parameter krijgt"}),`
`,e.jsx(n.li,{children:"het aantal hobby’s returnt"}),`
`,e.jsx(n.li,{children:"Gebruik geen console.log in de functie, enkel return."}),`
`]}),`
`,e.jsxs(n.h4,{id:"5-toon-het-resultaat-in-de-console",children:["5. Toon het resultaat in de console",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-toon-het-resultaat-in-de-console",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Roep de functies op met het persoon object.\r
Toon / log in de console:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"de teruggegeven tekst van beschrijfPersoon()"}),`
`,e.jsx(n.li,{children:"het aantal hobby’s via telHobbys()"}),`
`,e.jsx(n.li,{children:"alle eigenschappen van het persoon-object"}),`
`]}),`
`,e.jsxs(n.h3,{id:"extra-optioneel",children:["Extra (optioneel)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#extra-optioneel",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Kies één extra uitbreiding:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Voeg een tweede persoon toe en vergelijk hun leeftijden."}),`
`,e.jsx(n.li,{children:"Voeg een functie toe die teruggeeft of de persoon meerderjarig is."}),`
`,e.jsx(n.li,{children:"Pas aan de hand van een functie een waarde aan (bv. favoriete kleur) en toon het verschil."}),`
`]})]})}function s(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{s as default};
