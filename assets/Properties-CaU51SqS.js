import{j as e}from"./index-3BjEGx3K.js";function a(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Object properties definiëren de eigenschappen van een object."}),`
`,e.jsxs(n.h2,{id:"properties-ophalen",children:["Properties ophalen",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-ophalen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Object properties kunnen worden gedefinieerd als een key-value pair. De key (sleutel) is een string die de naam van de eigenschap aangeeft en de waarde kan elk gegevenstype zijn. De eigenschappen van een object kunnen worden gedefinieerd met een puntnotatie of met behulp van vierkante haaknotatie."}),`
`,e.jsx(n.p,{children:"Je ziet dat beide manieren hetzelfde resultaat opleveren."}),`
`,e.jsx(n.p,{children:"In welke situatie zou het gebruik van de bracket-notatie handiger zijn?"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"//Initialiseer een object "}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` movie = { \r
 title : `,e.jsx(n.span,{className:"hljs-string",children:'"The Dark Knight"'}),`, \r
 director : `,e.jsx(n.span,{className:"hljs-string",children:'"Christopher Nolan"'}),`, \r
 year : `,e.jsx(n.span,{className:"hljs-number",children:"2008"}),` \r
}; \r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Properties ophalen met puntnotatie "}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(movie.",e.jsx(n.span,{className:"hljs-property",children:"title"}),`); \r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Properties ophalen met vierkante haaknotatie "}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(movie[",e.jsx(n.span,{className:"hljs-string",children:'"title"'}),`]);
`]})}),`
`,e.jsxs(n.h2,{id:"properties-toevoegen",children:["Properties toevoegen",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-toevoegen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Je kunt eigenschappen toevoegen aan een object door simpelweg een nieuwe key-value pair toe te voegen."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"//Initialiseer een object"}),`\r
 \r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` movie = { \r
 title : `,e.jsx(n.span,{className:"hljs-string",children:'"The Dark Knight"'}),`, \r
 director : `,e.jsx(n.span,{className:"hljs-string",children:'"Christopher Nolan"'}),`, \r
 year : `,e.jsx(n.span,{className:"hljs-number",children:"2008"}),` \r
}; \r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg een nieuwe eigenschap toe"}),`\r
 \r
movie.`,e.jsx(n.span,{className:"hljs-property",children:"genre"})," = ",e.jsx(n.span,{className:"hljs-string",children:'"Action"'}),`; \r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(movie);
`]})}),`
`,e.jsxs(n.h2,{id:"properties-verwijderen",children:["Properties verwijderen",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-verwijderen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Je kunt eigenschappen verwijderen uit een object met hetdeletekeyword."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"//Initialiseer een object "}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` movie = { \r
 title : `,e.jsx(n.span,{className:"hljs-string",children:'"The Dark Knight"'}),`, \r
 director : `,e.jsx(n.span,{className:"hljs-string",children:'"Christopher Nolan"'}),`, \r
 year : `,e.jsx(n.span,{className:"hljs-number",children:"2008"}),` \r
}; \r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Verwijder een eigenschap "}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"delete"})," movie.",e.jsx(n.span,{className:"hljs-property",children:"year"}),`; \r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(movie);
`]})}),`
`,e.jsxs(n.h2,{id:"dynamisch-omgaan-met-properties",children:["Dynamisch omgaan met properties:",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#dynamisch-omgaan-met-properties",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Het kan zijn dat je niet op voorhand weet van welke eigenschap je de waarde wilt ophalen. Dan moet je gebruik maken van een variabele om de eigenschap te definiëren."}),`
`,e.jsx(n.p,{children:"We schrijven een klein programmaatje dat de gebruiker laat kiezen welke eigenschap van een object hij wilt zien:"}),`
`,e.jsx(n.p,{children:"Voer eerst het object in de Console in, druk dan op Enter en voer vervolgens de prompt code in. Vul de prompt in met een van de eigenschappen en voer dan de laatste lijn code uit."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Opgelet:"})," Als je een eigenschap probeert op te halen die niet bestaat, zal JavaScript ",e.jsx(n.code,{children:"undefined"})," teruggeven."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Ter info:"})," Input van de gebruiker moet je altijd valideren en opschonen. Dit voorbeeld toont enkel aan hoe je dynamisch kan omgaan met properties."]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"//Initialiseer een object "}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` movie = { \r
 title : `,e.jsx(n.span,{className:"hljs-string",children:'"Here"'}),`, \r
 director : `,e.jsx(n.span,{className:"hljs-string",children:'"Robert Zemeckis"'}),`, \r
 year : `,e.jsx(n.span,{className:"hljs-number",children:"2024"}),`, \r
 genre : `,e.jsx(n.span,{className:"hljs-string",children:'"Drama"'}),`, \r
 cast : [`,e.jsx(n.span,{className:"hljs-string",children:'"Tom Hanks"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"Robin Wright"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"Paul Bettany"'}),`], \r
 aiArtist : `,e.jsx(n.span,{className:"hljs-string",children:'"Andries Courteaux"'}),` \r
}; \r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Vraag de gebruiker welke eigenschap hij wilt zien "}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," property = ",e.jsx(n.span,{className:"hljs-title function_",children:"prompt"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Welke eigenschap wil je zien?"'}),`); \r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Toon de waarde van de gekozen eigenschap "}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(movie[property]);
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"in-de-praktijk",children:["In de praktijk:",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#in-de-praktijk",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.h3,{id:"automatisch-genereren-van-een-formulier",children:["Automatisch genereren van een formulier",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#automatisch-genereren-van-een-formulier",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"In veel admin‑panelen wordt een formulier gegenereerd op basis van een object. Elke property komt overeen met een veld."}),`
`,e.jsx("div",{id:"product-form",className:"inline-dynamic-example"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," formContainer = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"#product-form"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` product = {\r
  `,e.jsx(n.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"Wireless Mouse"'}),`,\r
  `,e.jsx(n.span,{className:"hljs-attr",children:"price"}),": ",e.jsx(n.span,{className:"hljs-number",children:"29.99"}),`,\r
  `,e.jsx(n.span,{className:"hljs-attr",children:"stock"}),": ",e.jsx(n.span,{className:"hljs-number",children:"120"}),`,\r
  `,e.jsx(n.span,{className:"hljs-attr",children:"category"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"Accessories"'}),`\r
};\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"for"})," (",e.jsx(n.span,{className:"hljs-keyword",children:"const"})," prop ",e.jsx(n.span,{className:"hljs-keyword",children:"in"}),` product) {\r
  `,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," label = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"createElement"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"label"'}),`);\r
  label.`,e.jsx(n.span,{className:"hljs-property",children:"textContent"}),` = prop;\r
\r
  `,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," input = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"createElement"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"input"'}),`);\r
  input.`,e.jsx(n.span,{className:"hljs-property",children:"value"}),` = product[prop];\r
  input.`,e.jsx(n.span,{className:"hljs-property",children:"disabled"})," = ",e.jsx(n.span,{className:"hljs-literal",children:"true"}),`;\r
\r
  `,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," br = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"createElement"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"br"'}),`);   \r
\r
  formContainer.`,e.jsx(n.span,{className:"hljs-title function_",children:"appendChild"}),`(label);\r
  formContainer.`,e.jsx(n.span,{className:"hljs-title function_",children:"appendChild"}),`(input);\r
  formContainer.`,e.jsx(n.span,{className:"hljs-title function_",children:"appendChild"}),`(br);\r
}
`]})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Waarom dynamisch?"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Het formulier past zich automatisch aan als het object verandert."}),`
`,e.jsx(n.li,{children:"Geen duplicatie van code → super onderhoudsvriendelijk."}),`
`]}),`
`,e.jsxs(n.h3,{id:"dynamic-data-mapping",children:["Dynamic data mapping",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#dynamic-data-mapping",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Wanneer je data van een API moet mappen naar een UI‑structuur, en de keys variëren."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` fieldMapping = {\r
  `,e.jsx(n.span,{className:"hljs-attr",children:"username"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"Gebruikersnaam"'}),`,\r
  `,e.jsx(n.span,{className:"hljs-attr",children:"email"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"E-mailadres"'}),`,\r
  `,e.jsx(n.span,{className:"hljs-attr",children:"role"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"Rol"'}),`\r
};\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"renderData"}),"(",e.jsx(n.span,{className:"hljs-params",children:"object, mapping"}),`) {\r
  `,e.jsx(n.span,{className:"hljs-keyword",children:"for"})," (",e.jsx(n.span,{className:"hljs-keyword",children:"const"})," key ",e.jsx(n.span,{className:"hljs-keyword",children:"in"}),` mapping) {\r
    `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(mapping[key] + ",e.jsx(n.span,{className:"hljs-string",children:'": "'}),` + object[key]);\r
  }\r
}\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," user = { ",e.jsx(n.span,{className:"hljs-attr",children:"username"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"Nathalie"'}),", ",e.jsx(n.span,{className:"hljs-attr",children:"email"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"test@mail.com"'}),", ",e.jsx(n.span,{className:"hljs-attr",children:"role"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"Teacher"'}),` };\r
`,e.jsx(n.span,{className:"hljs-title function_",children:"renderData"}),`(user, fieldMapping);
`]})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Waarom dynamisch?"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"De UI‑labels kunnen verschillen per taal."}),`
`,e.jsx(n.li,{children:"De backend keys hoeven niet overeen te komen met frontend labels."}),`
`,e.jsx(n.li,{children:"Vaak gebruikt in internationalisatie, admin tools, data dashboards."}),`
`]}),`
`,e.jsxs(n.h2,{id:"conclusie",children:["Conclusie",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusie",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Dynamisch properties gebruiken is niet zomaar een “leuke truc”. Het is essentieel voor:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"flexibel gedrag"}),`
`,e.jsx(n.li,{children:"schaalbare apps"}),`
`,e.jsx(n.li,{children:"dynamische UI’s"}),`
`,e.jsx(n.li,{children:"API‑integraties"}),`
`,e.jsx(n.li,{children:"configuraties"}),`
`,e.jsx(n.li,{children:"gebruikersinput"}),`
`,e.jsx(n.li,{children:"tooling"}),`
`,e.jsx(n.li,{children:"dashboards"}),`
`,e.jsx(n.li,{children:"zoek- en filtermechanismen"}),`
`]})]})}function l(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{l as default};
