import{j as e}from"./index-3BjEGx3K.js";function a(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:`Het event object is een object dat wordt doorgegeven aan de event handler\r
wanneer een event plaatsvindt. Dit object bevat informatie over het event,\r
zoals de locatie van de cursor, welke toetsen zijn ingedrukt, enzovoort.`}),`
`,e.jsx(s.p,{children:`Het event object wordt standaard meegegeven aan de event handler,\r
maar als je het wilt gebruiken, moet je het expliciet doorgeven als parameter aan de event handler. Je geeft het dan ook best een duidelijke naam, zoals "event".`}),`
`,e.jsx("div",{id:"code1",className:"inline-dynamic-example",children:e.jsxs(s.p,{children:["Probeer de code uit op deze ",e.jsx(s.code,{children:"div"}),"."]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Haal het element op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," element = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"code1"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Definieer het event object als parameter"}),`\r
element.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"event"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(event.",e.jsx(s.span,{className:"hljs-property",children:"type"}),`);\r
});\r
\r
element.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"mouseover"'}),", ",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"event"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(event.",e.jsx(s.span,{className:"hljs-property",children:"type"}),`);\r
});
`]})}),`
`,e.jsx(s.p,{children:`Als je in je functie gebruik wil maken van nog andere parameters,\r
wees er dan zeker van dat je het event object als eerste parameter definieert.\r
Duidelijke en correcte naamgeving van\r
variabelen en parameters is altijd belangrijk, maar zeker in dit geval.`}),`
`,e.jsx("div",{id:"code2",className:"inline-dynamic-example",children:e.jsxs(s.p,{children:["Probeer de code uit op deze ",e.jsx(s.code,{children:"div"}),"."]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Haal het element op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," element2 = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"code2"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Definieer het event object als eerste parameter"}),`\r
element2.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"konijntje, event"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(konijntje.",e.jsx(s.span,{className:"hljs-property",children:"type"}),`);\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(event.",e.jsx(s.span,{className:"hljs-property",children:"type"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// Undefined error"}),`\r
});
`]})}),`
`,e.jsxs(s.h3,{id:"properties-van-het-event-object",children:["Properties van het event object",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-van-het-event-object",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Het event object bevat verschillende properties die je kan gebruiken om informatie over het event op te vragen. Enkele van de meest gebruikte properties zijn:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"type"}),": het type event dat plaatsvindt (bijv. ",e.jsx(s.code,{children:"click"}),", ",e.jsx(s.code,{children:"mouseover"}),", ",e.jsx(s.code,{children:"keydown"}),")"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"target"}),": het element waarop het event plaatsvindt"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"currentTarget"}),": het element waarop de event listener is geplaatst"]}),`
`]}),`
`,e.jsxs(s.h2,{id:"eventtarget",children:[e.jsx(s.code,{children:"event.target"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eventtarget",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["De ",e.jsx(s.code,{children:"event.target"}),` property geeft het element terug waarop het event plaatsvindt.\r
Dit kan handig zijn als je wil weten welk element de actie heeft getriggerd.`]}),`
`,e.jsx("div",{id:"targetDiv",className:"inline-dynamic-example",children:e.jsxs(s.p,{children:["Probeer de code uit op deze ",e.jsx(s.code,{children:"div"}),"."]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Haal het element op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," element = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"targetDiv"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Registreer de event listener"}),`\r
element.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"event"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(event.",e.jsx(s.span,{className:"hljs-property",children:"target"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// Het element waarop geklikt werd"}),`\r
});
`]})}),`
`,e.jsxs(s.h2,{id:"eventcurrenttarget",children:[e.jsx(s.code,{children:"event.currentTarget"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eventcurrenttarget",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Het",e.jsx(s.code,{children:" event.currentTarget"}),` property geeft het element terug waarop de event listener is geplaatst.\r
Dit kan handig zijn als je wil weten op welk element de event listener is toegevoegd.`]}),`
`,e.jsx("div",{id:"currentTargetDiv",className:"inline-dynamic-example",children:e.jsxs(s.p,{children:["Probeer de code uit op deze ",e.jsx(s.code,{children:"div"}),"."]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Haal het element op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," element = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"currentTargetDiv"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Registreer de event listener"}),`\r
element.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"event"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(event.",e.jsx(s.span,{className:"hljs-property",children:"currentTarget"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// Het element waarop de event listener is geplaatst"}),`\r
});
`]})}),`
`,e.jsxs(s.h2,{id:"practisch-voorbeeld",children:["Practisch voorbeeld",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#practisch-voorbeeld",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:[`Het verschil tussen en de kracht van\r
`,e.jsx(s.code,{children:".target"})," en ",e.jsx(s.code,{children:".currentTarget"})," wordt duidelijker in het volgende voorbeeld."]}),`
`,e.jsx(s.p,{children:`Je hebt een lijst van producten en je wil wanneer er op een product geklikt wordt,\r
een actie ondernemen. Dan kan je een event listener toevoegen aan elk product in\r
de lijst of je kan een event listener toevoegen aan de lijst zelf.\r
Wanneer je op een product klikt, zal de event listener op de lijst geactiveerd worden en zal je met .target het exacte product kunnen identificeren.`}),`
`,e.jsx(s.p,{children:`Voer eerst de code uit in de console en klik dan op een product in de lijst.\r
Bekijk de console om te zien welk product je hebt aangeklikt.`}),`
`,e.jsxs("div",{className:"inline-dynamic-example text-start",children:[e.jsx("h4",{children:"Boodschappenlijst"}),e.jsxs("ul",{id:"productList",children:[e.jsx("li",{id:"apples",className:"pointer",children:"Appels"}),e.jsx("li",{id:"bread",className:"pointer",children:"Brood"}),e.jsx("li",{id:"milk",className:"pointer",children:"Melk"})]})]}),`
`,e.jsx(s.p,{children:"Zo ziet de html van bovenstaand voorbeeld eruit:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"div"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"h4"}),">"]}),"Boodschappenlijst",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"h4"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"ul"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"productList"'}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"li"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"apples"'}),">"]}),"Appels",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"li"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"li"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"bread"'}),">"]}),"Brood",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"li"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"li"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"milk"'}),">"]}),"Melk",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"li"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"ul"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,e.jsx(s.p,{children:"Pas hierop nu deze JavaScript code toe:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Haal de lijst op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," productList = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"productList"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Registreer de event listener"}),`\r
productList.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"event"}),") =>"]}),` {\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Het element waarop geklikt werd"}),`\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(event.",e.jsx(s.span,{className:"hljs-property",children:"target"}),`);\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// De id van het product"}),`\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsxs(s.span,{className:"hljs-string",children:["`target: ",e.jsx(s.span,{className:"hljs-subst",children:"${event.target.id}"}),"`"]}),`);\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// De id van de lijst"}),`\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(\r
    `,e.jsxs(s.span,{className:"hljs-string",children:["`currentTarget: ",e.jsx(s.span,{className:"hljs-subst",children:"${event.currentTarget.id}"})," is het element waar de event listener aanhangt`"]}),`\r
  );\r
});
`]})}),`
`,e.jsx(s.p,{children:`Op deze manier kan je met één event listener meerdere elementen in de gaten houden en acties\r
ondernemen wanneer er op een element geklikt wordt. Je kan nadien de properties van het target\r
doorgeven aan een andere functie om verdere acties te ondernemen.\r
Zoals bijvoorbeeld het toevoegen van een product aan een winkelmandje.`})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{r as default};
