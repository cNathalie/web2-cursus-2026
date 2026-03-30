import{j as e}from"./index-DG_0ec51.js";function a(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h1,{id:"waarom-windowaddeventlistenerload-setup-soms-boven-en-soms-onder-setup-moet-staan",children:["Waarom ",e.jsx(s.code,{children:'window.addEventListener("load", setup)'})," soms boven en soms onder ",e.jsx(s.code,{children:"setup"})," moet staan",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#waarom-windowaddeventlistenerload-setup-soms-boven-en-soms-onder-setup-moet-staan",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Deze uitleg gaat over ",e.jsx(s.strong,{children:"hoisting"})," en ",e.jsx(s.strong,{children:"toegankelijkheid"})," van functies op het moment dat je ",e.jsx(s.code,{children:'window.addEventListener("load", setup);'})," uitvoert."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Function declaration (",e.jsx(s.code,{children:"function setup() {}"}),")"]})," → wordt volledig ",e.jsx(s.strong,{children:"gehoist"})," (naam ",e.jsx(s.strong,{children:"én"})," body). Je mag ",e.jsx(s.code,{children:"addEventListener"})," ",e.jsx(s.strong,{children:"boven"})," de definitie plaatsen."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Arrow function (",e.jsx(s.code,{children:"const setup = () => {}"}),")"]})," → is een ",e.jsx(s.strong,{children:"functie-expressie"})," gebonden aan een variabele. Alleen de ",e.jsx(s.strong,{children:"verklaring"})," van de variabele wordt (deels) gehoist, ",e.jsx(s.strong,{children:"niet"})," de waarde. Bij ",e.jsx(s.code,{children:"let/const"})," zit die bovendien in de ",e.jsx(s.strong,{children:"Temporal Dead Zone (TDZ)"})," tot de regel waar ze gedefinieerd wordt. Je móét dus ",e.jsx(s.code,{children:"addEventListener"})," ",e.jsx(s.strong,{children:"onder"})," de definitie plaatsen."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"wat-is-hoisting",children:["Wat is “hoisting”?",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wat-is-hoisting",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"de runt:"}),`
`,e.jsxs(s.p,{children:["JavaScript voert een ",e.jsx(s.strong,{children:"creation phase"})," uit vóór je co"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Function declarations"})," worden volledig vooraf geregistreerd (de naam verwijst meteen naar de echte functie)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Variabele declaraties"})," worden wel “gezien”, maar:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["bij ",e.jsx(s.code,{children:"var"})," krijgt de variabele de waarde ",e.jsx(s.code,{children:"undefined"})," tot aan de toewijzing;"]}),`
`,e.jsxs(s.li,{children:["bij ",e.jsx(s.code,{children:"let"}),"/",e.jsx(s.code,{children:"const"})," bestaat de binding, maar ze is ",e.jsx(s.strong,{children:"niet toegankelijk"})," (TDZ) tot de uitvoeringsregel waar je ze initialiseert."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"gevolg-voor-de-twee-gevallen",children:["Gevolg voor de twee gevallen",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gevolg-voor-de-twee-gevallen",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.h3,{id:"function-declaration",children:["Function declaration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#function-declaration",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),`, setup);\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"setup"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Ready!"'}),`);\r
}
`]})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Werkt prima."})," Tijdens de creation phase is ",e.jsx(s.code,{children:"setup"})," al een ",e.jsx(s.strong,{children:"volwaardige functie"}),". Wanneer ",e.jsx(s.code,{children:"addEventListener"})," dit uitvoert, bestaat ",e.jsx(s.code,{children:"setup"})," dus al."]}),`
`,e.jsxs(s.h3,{id:"arrow-function-functie-expressie",children:["Arrow function (functie-expressie)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#arrow-function-functie-expressie",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),", setup); ",e.jsx(s.span,{className:"hljs-comment",children:"// ❌ Fout (TDZ)"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"setup"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Ready!"'}),`);\r
};
`]})}),`
`,e.jsxs(s.p,{children:["Hier is ",e.jsx(s.code,{children:"setup"})," een ",e.jsx(s.code,{children:"const"}),"-variabele die pas ",e.jsx(s.strong,{children:"op deze regel"})," wordt geïnitialiseerd met de arrow function. Daarboven zit ",e.jsx(s.code,{children:"setup"})," nog in de ",e.jsx(s.strong,{children:"TDZ"}),"—je kunt er nog niet naar verwijzen. Daarom moet je bij functie-expressies (arrow of klassiek) ",e.jsx(s.strong,{children:"eerst definiëren, dan gebruiken"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"setup"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Ready!"'}),`);\r
};\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),", setup); ",e.jsx(s.span,{className:"hljs-comment",children:"// ✅"}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Let op: zelfs met ",e.jsx(s.code,{children:"var setup = () => {}"})," kun je niet veilig boven de toewijzing gebruiken:"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),", setup); ",e.jsx(s.span,{className:"hljs-comment",children:"// setup is undefined → TypeError"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"var"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"setup"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {};
`]})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"var"})," wordt wel gehoist, maar alleen als ",e.jsx(s.code,{children:"undefined"}),". Pas na de toewijzing is het een functie."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"samenvatting-in-één-zin",children:["Samenvatting in één zin",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#samenvatting-in-één-zin",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Function declaration"}),": mag ",e.jsx(s.strong,{children:"boven"})," ",e.jsx(s.code,{children:"addEventListener"}),", omdat de functie volledig gehoist wordt."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Arrow function (of andere functie-expressie)"}),": moet ",e.jsx(s.strong,{children:"onder"})," ",e.jsx(s.code,{children:"addEventListener"}),", omdat de variabele pas later geïnitialiseerd wordt (en bij ",e.jsx(s.code,{children:"let/const"})," vóór die tijd in de TDZ zit)."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"goede-afspraken-maken-goede-vrienden",children:["Goede afspraken, maken goede vrienden",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#goede-afspraken-maken-goede-vrienden",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"We kunnen deze regels natuurlijk volgen, maar het is ook een goed idee om een consistente stijl te hanteren in je codebase. We spreken af dat:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["De ",e.jsx(s.code,{children:"setup"})," functie altijd ",e.jsx(s.strong,{children:"boven"})," ",e.jsx(s.code,{children:'window.addEventListener("load", setup)'})," staat. Zo is het meteen duidelijk dat ",e.jsx(s.code,{children:"setup"}),` gedefinieerd is voordat we ernaar verwijzen,\r
en hoeven we niet na te denken over hoisting of TDZ.`]}),`
`,e.jsxs(s.li,{children:["De ",e.jsx(s.code,{children:"setup"})," functie is de ",e.jsx(s.strong,{children:"orchestmeester"})," van onze pagina, dus het is logisch dat die bovenaan staat. De ",e.jsx(s.code,{children:"setup"})," functie is het draaiboek van ons JavaScript toneel, de details ervan vindt je terug onder de ",e.jsx(s.code,{children:"setup"}),"."]}),`
`,e.jsxs(s.li,{children:["We gebruiken ",e.jsx(s.strong,{children:"arrow functions"})," voor alle functies, inclusief ",e.jsx(s.code,{children:"setup"}),". Dat zorgt voor een uniforme stijl en voorkomt verwarring over hoisting."]}),`
`,e.jsxs(s.li,{children:["Andere functies die door ",e.jsx(s.code,{children:"setup"})," worden aangeroepen, staan ook onder ",e.jsx(s.code,{children:"setup"}),". Zo is de volgorde van functies altijd van boven naar beneden, wat de leesbaarheid ten goede komt."]}),`
`,e.jsxs(s.li,{children:["We gebruiken nooit ",e.jsx(s.code,{children:"var"}),"."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Waarom moet ",e.jsx(s.code,{children:'window.addEventListener("load", setup)'}),` niet volledig onderaan het schript staan?\r
Het window load event wordt pas afgevuurd wanneer de hele pagina klaar is: HTML geparsed, stylesheets, afbeeldingen én scripts zijn geladen en uitgevoerd.`]}),`
`,e.jsxs(s.h3,{id:"voorbeeld-geraamte",children:["Voorbeeld geraamte",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#voorbeeld-geraamte",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Orchestmeester functie (staat bovenaan)"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"setup"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Initialisatiecode hier"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ..."}),`\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"showPhoto"}),"(",e.jsx(s.span,{className:"hljs-number",children:"0"}),`);\r
};\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),`, setup);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Andere functies die door setup worden aangeroepen, staan hier onder"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"showPhoto"})," = (",e.jsx(s.span,{className:"hljs-params",children:"index"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ..."}),`\r
};\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"toggleDescription"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ..."}),`\r
};\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"toggleFavorite"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ..."}),`\r
};
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"mini-oefenbestand-om-dit-gedrag-te-demonstreren",children:["Mini-oefenbestand om dit gedrag te demonstreren:",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mini-oefenbestand-om-dit-gedrag-te-demonstreren",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Plak dit in een HTML-bestand en open de console om het gedrag te zien."}),`
`,e.jsxs(s.p,{children:["Waarom een html document? Omdat ",e.jsx(s.code,{children:'window.addEventListener("load", setup)'}),` alleen werkt in een browseromgeving,\r
niet in Node.js.`]}),`
`,e.jsxs(s.p,{children:[`Opgelet, we zetten hier JavaScript en HTML door elkaar, maar dit is puur voor demonstratiedoeleinden.\r
In een echt project zou je de JavaScript in een apart `,e.jsx(s.code,{children:".js"}),` bestand zetten en dat inladen via een\r
`,e.jsx(s.code,{children:'<script src="..."><\/script>'})," tag."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-meta",children:["<!doctype ",e.jsx(s.span,{className:"hljs-keyword",children:"html"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"html"})," ",e.jsx(s.span,{className:"hljs-attr",children:"lang"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"nl"'}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"head"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"meta"})," ",e.jsx(s.span,{className:"hljs-attr",children:"charset"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"utf-8"'})," />"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"title"}),">"]}),"Hoisting demo",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"title"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"head"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"body"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"h1"}),">"]}),"Hoisting: function declaration vs arrow function",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"h1"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"script"}),">"]}),e.jsxs(s.span,{className:"javascript",children:[`\r
      `,e.jsx(s.span,{className:"hljs-comment",children:"// --- Case A: function declaration ---"}),`\r
      `,e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),`, setupDecl);\r
      `,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"setupDecl"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
        `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"[Declaration] Ready!"'}),`);\r
      }\r
\r
      `,e.jsx(s.span,{className:"hljs-comment",children:"// --- Case B: arrow function (correct) ---"}),`\r
      `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"setupArrow"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
        `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"[Arrow] Ready!"'}),`);\r
      };\r
      `,e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),`, setupArrow);\r
\r
      `,e.jsx(s.span,{className:"hljs-comment",children:"// --- Case C: arrow function (fout) ---"}),`\r
      `,e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),", setupWrong); ",e.jsx(s.span,{className:"hljs-comment",children:"// Referentie vóór initialisatie fout"}),`\r
\r
      `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"setupWrong"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
        `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(\r
          `,e.jsx(s.span,{className:"hljs-string",children:'"[Wrong] Dit zal niet bereiken als je hierboven al crasht."'}),`,\r
        );\r
      };\r
    `]}),e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"script"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"body"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})})]})}function i(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{i as default};
