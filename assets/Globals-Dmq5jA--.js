import{j as e}from"./index-3BjEGx3K.js";function l(a){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:`Globals horen bij de context van het huidige HTML document. Als\r
de browser naar een andere pagina navigeert of herlaadt, gaat deze\r
variabele en zijn waarde verloren.`}),`
`,e.jsxs(n.h2,{id:"wat-zijn-globale-variabelen",children:["Wat zijn globale variabelen",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wat-zijn-globale-variabelen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Globale variabelen zijn variabelen die buiten een functie worden\r
gedeclareerd. Deze variabelen kunnen overal in de code worden\r
gebruikt. Dit kan handig zijn als je bepaalde waarden wilt opslaan die\r
je later in de code wilt gebruiken.`}),`
`,e.jsx(n.p,{children:`Hieronder zie je een voorbeeld van een globale variabele. In dit\r
voorbeeld wordt de variabele name gedeclareerd buiten de\r
functie sayHello. Hierdoor kan de variabele\r
name overal in de code worden gebruikt.`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"var"})," name = ",e.jsx(n.span,{className:"hljs-string",children:'"John"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"sayHello"}),"(",e.jsx(n.span,{className:"hljs-params"}),`) {\r
    `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Hello "'}),` + name);\r
}\r
\r
`,e.jsx(n.span,{className:"hljs-title function_",children:"sayHello"}),`();
`]})}),`
`,e.jsx(n.p,{children:`In dit voorbeeld wordt de variabele name gedeclareerd\r
buiten de functie sayHello. Hierdoor kan de variabele\r
name overal in de code worden gebruikt. Als je de functie\r
sayHello aanroept, wordt de tekst "Hello John" naar de\r
console gelogd.`}),`
`,e.jsx(n.p,{children:`Vele globale variabelen kunnen ervoor zorgen dat je code minder\r
overzichtelijk wordt. Daarom is het belangrijk om zorgvuldig om te\r
gaan met globale variabelen en ze alleen te gebruiken als dat echt\r
nodig is.`}),`
`,e.jsx(n.p,{children:`Bij JavaScript zijn globale variabelen properties van het globale\r
object. In de browser is dit object window. Dit betekent\r
dat je een globale variabele kunt benaderen door\r
window.variabeleNaam te\r
gebruiken.`}),`
`,e.jsxs(n.h2,{id:"name-clashes",children:["Name clashes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name-clashes",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`Als je een globale variabele declareert met dezelfde naam als een\r
variabele die al bestaat binnen het window object,\r
overschrijft de nieuwe variabele de oude variabele. Dit kan leiden tot\r
onverwachte resultaten en bugs in je code.`}),`
`,e.jsx(n.p,{children:`Het is moeilijk om ten allen tijde een overzicht te hebben van welk\r
variabelen er al onder het window object leven. Daarom is\r
het handig om al jouw eigen globale variabelen te verzamelen in één\r
object.`}),`
`,e.jsx(n.p,{children:"Hieronder zie je een voorbeeld van hoe je dit kan doen:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"let"}),` myGlobals = {\r
    users : [\r
        {`,e.jsx(n.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"John"'}),", ",e.jsx(n.span,{className:"hljs-attr",children:"age"}),": ",e.jsx(n.span,{className:"hljs-number",children:"30"}),`},\r
        {`,e.jsx(n.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"Jane"'}),", ",e.jsx(n.span,{className:"hljs-attr",children:"age"}),": ",e.jsx(n.span,{className:"hljs-number",children:"25"}),`}\r
    ],\r
    settings : {\r
        `,e.jsx(n.span,{className:"hljs-attr",children:"theme"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"dark"'}),`,\r
        `,e.jsx(n.span,{className:"hljs-attr",children:"music"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"on"'}),`\r
    },\r
    path : `,e.jsx(n.span,{className:"hljs-string",children:'"/pages/lessons/javascript/storage/globals.html"'}),`\r
};\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(myGlobals);\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(myGlobals.",e.jsx(n.span,{className:"hljs-property",children:"users"}),`);
`]})}),`
`,e.jsxs(n.p,{children:[`In dit voorbeeld worden alle globale variabelen verzameld in het\r
object `,e.jsx(n.code,{children:"myGlobals"}),`. Dit maakt het gemakkelijker om te zien\r
welke variabelen globaal zijn en voorkomt name clashes met andere\r
variabelen die al bestaan in het `,e.jsx(n.code,{children:"window"})," object."]}),`
`,e.jsxs(n.p,{children:["De globale variablen kunnen zo een ",e.jsx(n.strong,{children:"state"}),` bijhouden voor jouw applicatie, die over de gehele applicatie te gebruiken is.\r
Dit is handig voor instellingen, gebruikersdata, paden, etc... zo moet je bepaalde informatie niet steeds blijven doorgeven aan functies of objecten.`]}),`
`,e.jsxs(n.p,{children:["In de volgende Web cursus zal zo een globale ",e.jsx(n.strong,{children:"state"})," een groter belang beginnen spelen."]})]})}function r(a={}){const{wrapper:n}=a.components||{};return n?e.jsx(n,{...a,children:e.jsx(l,{...a})}):l(a)}export{r as default};
