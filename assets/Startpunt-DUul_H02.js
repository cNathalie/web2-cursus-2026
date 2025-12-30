import{j as e}from"./index-Dwhqwc41.js";const r="/web2-cursus-2026/images/cmd.png",t="/web2-cursus-2026/images/new-terminal.png",a="/web2-cursus-2026/images/terminal-open.png",l="/web2-cursus-2026/images/terminal-cmd.png",d="/web2-cursus-2026/images/terminal-npmci.png",o="/web2-cursus-2026/images/terminal-npmrundev.png",c="/web2-cursus-2026/images/startvite.png",j="/web2-cursus-2026/images/startpunt.png";function i(s){const n={a:"a",code:"code",em:"em",h2:"h2",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:[e.jsx(n.a,{href:"#nodejs--npm",children:"Installeer de nodige tools"})," | ",e.jsx(n.a,{href:"#je-project-opstarten",children:"Start je project op"})," | ",e.jsx(n.a,{href:"#structuur-van-het-project",children:"Projectstructuur"})," | ",e.jsx(n.a,{href:"#visual-studio-code-extensions",children:"Visual Studio Code Extensions"})]}),`
`,e.jsx(n.p,{children:"Je krijgt een starterspakket voor je project."}),`
`,e.jsxs(n.h2,{id:"nodejs--npm",children:["Node.js & npm",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nodejs--npm",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Om aan je project te kunnen bouwen, heb je ook Node.js en npm nodig."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Belangrijk"}),`: npm wordt altijd samen met Node.js geïnstalleerd.\r
Als je Node.js nog niet hebt, moet je dat eerst installeren.`]}),`
`,e.jsxs(n.p,{children:["Open de ",e.jsx(n.strong,{children:"terminal"})," van je pc en voer volgende stappen uit:"]}),`
`,e.jsx("img",{src:r,alt:"Cmd",className:"img-fluid my-3"}),`
`,e.jsxs(n.h5,{id:"1-controleer-of-nodejs-al-geïnstalleerd-is",children:["1. Controleer of Node.js al geïnstalleerd is",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-controleer-of-nodejs-al-geïnstalleerd-is",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`    node -v
`})}),`
`,e.jsxs(n.h5,{id:"2-controleer-of-npm-als-geïnstalleerd-is",children:["2. Controleer of npm als geïnstalleerd is",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-controleer-of-npm-als-geïnstalleerd-is",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`    npm -v
`})}),`
`,e.jsx(n.p,{children:`Zie je een versienummer?\r
=> Dan zijn Node.js en npm reeds geïnstalleerd op je systeem. (Je moet dus verder niet doen.)`}),`
`,e.jsx(n.p,{children:`Krijg je een foutmelding?\r
=> Dan moet je Node.js nog installeren. (Volg de verdere stappen.)`}),`
`,e.jsxs(n.h5,{id:"3-installeer-nodejs",children:["3. Installeer Node.js",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-installeer-nodejs",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Windows (Winget):"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`    winget install OpenJS.NodeJS.LTS
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"macOS (Homebrew)"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`    brew install node
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Linux (apt)"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`    sudo apt update\r
    sudo apt install nodejs npm
`})}),`
`,e.jsxs(n.h5,{id:"4-controleer-opnieuw-je-versies",children:["4. Controleer opnieuw je versies",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-controleer-opnieuw-je-versies",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`    node -v\r
    npm -v
`})}),`
`,e.jsxs(n.h2,{id:"vite",children:["Vite",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vite",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Het project werd ge-scaffold met gebruik van ",e.jsx(n.a,{href:"https://vite.dev/guide/",children:"Vite"}),", een supersnelle moderne build‑tool die je ontwikkelomgeving voor webprojecten start en bundelt met minimale wachttijd."]}),`
`,e.jsx(n.p,{children:`Je hoeft hier verder niets mee te doen.\r
Onthoud gewoon dat dit een handige tool is wanneer je snel een omgeving wil opzetten voor een ander project.`}),`
`,e.jsxs(n.h2,{id:"je-project-opstarten",children:["Je project opstarten",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#je-project-opstarten",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Nu je alle nodige tools geïnstalleerd hebt, kan je het project voor het eerst doen draaien."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Open de map in Visual Studio Code"}),`
`,e.jsxs(n.li,{children:["Klik bovenaan in het menu op ",e.jsx(n.strong,{children:"Terminal"})," > ",e.jsx(n.strong,{children:"New Terminal"}),`
`,e.jsx("img",{src:t,alt:"New Terminal",className:"img-fluid my-3"}),`
`]}),`
`,e.jsxs(n.li,{children:["Er verschijnt nu onderaan een Terminal",`
`,e.jsx("img",{src:a,alt:"Terminal",className:"img-fluid my-3"}),`
`]}),`
`,e.jsxs(n.li,{children:["Als deze automatisch op ",e.jsx(n.code,{children:"powershell"})," staat, open dan een nieuwe ",e.jsx(n.strong,{children:"Command Prompt"}),`
`,e.jsx("img",{src:l,alt:"Terminal",className:"img-fluid my-3"}),`
`]}),`
`,e.jsxs(n.li,{children:["Controleer dat je in de root folder (StudentenProject) zit en geef het commando ",e.jsx(n.code,{children:"npm ci"})," in en druk op ",e.jsx("kbd",{children:"Enter"}),`.\r
Dit commando zorgt ervoor dat alle nodige `,e.jsx(n.em,{children:"packages"})," worden geïnstalleerd, je hoeft dit enkel te doen wanneer je het project voor de eerste keer opstart.",`
`,e.jsx("img",{src:d,alt:"Terminal",className:"img-fluid my-3"}),`
`]}),`
`,e.jsxs(n.li,{children:["Wanneer het vorige commando succesvol is afgerond, geef je een nieuw commando in: ",e.jsx(n.code,{children:"npm run dev"})," ",e.jsx("kbd",{children:"Enter"}),`.\r
Dit commando zorgt ervoor dat je omgeving wordt gebouwdt en te bekijken is in je browser op het adres dat wordt getoont.\r
Druk met `,e.jsx("kbd",{children:"CTRL"})," + linkermuisklik op de URL om naar de (lokale) site van je project te gaan.",`
`,e.jsx("img",{src:o,alt:"Terminal",className:"img-fluid my-3"}),`
`]}),`
`,e.jsxs(n.li,{children:["Je krijgt nu de startpagina van het project te zien.",`
`,e.jsx("img",{src:c,alt:"Start",className:"img-fluid my-3"}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Wanneer je dus in het vervolg het resultaat van je project wil bekijken, moet je het opstarten met het commando ",e.jsx(n.code,{children:"npm run dev"})," via de terminal."]}),`
`,e.jsxs(n.h2,{id:"structuur-van-het-project",children:["Structuur van het project",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#structuur-van-het-project",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Het starterspakket voorziet je van een nette mappenstructuur."}),`
`,e.jsx("img",{src:j,alt:"Startpunt",className:"img-fluid my-3"}),`
`,e.jsx(n.p,{children:"We bespreken kort alle folders en files die je kan zien:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"StudentenProject"}),": root folder"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"node_modules"}),": Deze map wordt automatisch aangemaakt wanneer je ",e.jsx(n.code,{children:"npm ci"}),` uitvoert.\r
Ze bevat alle packages en dependencies die Vite en jouw project nodig hebben. `,e.jsx(n.strong,{children:"Je verandert hier zelf nooit iets!"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"public"}),`: Bestanden in deze map worden onbewerkt gekopieerd naar de uiteindelijke build.\r
Gebruik dit voor statische bestanden zoals afbeeldingen, lettertypes of icons die je rechtstreeks wil kunnen aanspreken.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"images"}),": Hier kan je afbeeldingen plaatsen die niet door Vite verwerkt moeten worden en die publiek beschikbaar mogen zijn."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"src"}),": Dit is de belangrijkste map van je project. Hier staat alle code die jij zelf schrijft en die Vite verwerkt.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"pages"}),": Hier plaats je al je aparte HTML‑pagina’s: bv. about.html, contact.html, gallery.html,… Dit houdt je project overzichtelijk."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"scripts"}),": In deze map komen al je JavaScript‑bestanden. Denk aan index.js, interactieve elementen, functies, modules …"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"styles"}),": Hier komen al je CSS‑bestanden te staan. Je kan werken met één grote stylesheet of meerdere kleinere, zoals layout.css, colors.css, navigation.css, …"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:".gitignore"}),": Dit bestand vertelt Git (versiebeheer, wij gebruiken GitHub op dit te managen) welke mappen en bestanden het moet negeren. Zo komt bv. node_modules niet mee in je repo (want die map is veel te groot en wordt automatisch opnieuw aangemaakt)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"index.html"}),": Dit is de pagina die opent wanneer je de website start met Vite. Van hieruit kan je doorlinken naar extra pagina’s in /src/pages. Verplaats deze niet."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"package-lock.json"}),": Dit bestand bewaart exact welke versies van alle dependencies geïnstalleerd zijn. Het zorgt ervoor dat iedereen die jouw project installeert exact dezelfde versies krijgt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"package.json"}),": Een heel belangrijk configuratiebestand. Hierin staan alle dependencies, scripts (zoals npm run dev) en projectinformatie.Vite wordt hier als dependency vermeld."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Het is van groot belang dat je ",e.jsx(n.strong,{children:"nooit"})," zelf iets wijzigt aan ",e.jsx(n.em,{children:".gitignore"}),", ",e.jsx(n.em,{children:"package-lock.json"})," en ",e.jsx(n.em,{children:"package.json"}),`!\r
Hoe deze bestanden zijn opgebouwd en wat ze precies doen is leerstof die wordt besproken in Web3, je hoeft je hier dus helemaal nog niet mee bezig te houden. Het is voldoende om te weten dat ze van essentiëel belang zijn voor je project en je ze best met rust laat.`]}),`
`,e.jsxs(n.h2,{id:"visual-studio-code-extensions",children:["Visual Studio Code Extensions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#visual-studio-code-extensions",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Het is handig om volgende extenties te installeren in Visual Studio Code:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prettier van prettier.io"}),`
`]})]})}function m(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
