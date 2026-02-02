import{j as e}from"./index-DEXPSZA7.js";function a(n){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",span:"span",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"We zagen al verschillende methodes om elementen op te halen. Maar we hadden het nog niet uitgebreid over welk type deze methodes teruggeven."}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"html-collection",children:["HTML-collection",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#html-collection",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["De methode ",e.jsx(s.code,{children:"getElementsByClassName()"})," geeft een HTML-collection terug."]}),`
`,e.jsxs(s.p,{children:["Een HTML-collection is een array-like object dat alle elementen bevat die voldoen aan de query. Het is belangrijk om te weten dat een HTML-collection geen array is, maar een object. Dit betekent dat je niet zomaar array-methodes kan gebruiken op een HTML-collection. Je kan wel een HTML-collection omzetten naar een array met de ",e.jsx(s.code,{children:"Array.from()"})," methode."]}),`
`,e.jsx(s.p,{children:"Voorbeeld:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// We halen alle ondertitels van deze pagina op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," elements = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"subtitle"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Log de opgehaalde HTML-collection"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(elements);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// We zetten de HTML-collection om naar een array"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," elementsArray = ",e.jsx(s.span,{className:"hljs-title class_",children:"Array"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"from"}),`(elements);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Log de array"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(elementsArray);
`]})}),`
`,e.jsxs(s.h3,{id:"nodelist",children:["NodeList",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nodelist",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"De methode querySelectorAll() geeft een NodeList terug."}),`
`,e.jsx(s.p,{children:"Een NodeList is een array-like object dat alle elementen bevat die voldoen aan de query. Net zoals een HTML-collection is een NodeList geen array, maar een object. Dit betekent dat je niet zomaar array-methodes kan gebruiken op een NodeList. Je kan wel een NodeList omzetten naar een array met de Array.from() methode."}),`
`,e.jsx(s.p,{children:"Voorbeeld:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// We halen alle paragrafen van deze pagina op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," elements = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"p"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Log de opgehaalde NodeList"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(elements);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// We zetten de NodeList om naar een array"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," elementsArray = ",e.jsx(s.span,{className:"hljs-title class_",children:"Array"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"from"}),`(elements);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Log de array"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(elementsArray);
`]})}),`
`,e.jsxs(s.p,{children:["Een NodeList kan je wel gebruiken in een ",e.jsx(s.code,{children:"forEach"}),". Dit is een handige manier om over alle elementen in de NodeList te itereren."]}),`
`,e.jsx(s.p,{children:"Voorbeeld:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// We halen alle paragrafen van deze pagina op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," elements = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"p"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// We loggen de tekst van elke paragraaf"}),`\r
elements.`,e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"element"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(element.",e.jsx(s.span,{className:"hljs-property",children:"textContent"}),`);\r
});
`]})}),`
`,e.jsx(s.p,{children:`Wanneer je voor meerdere elementen in de DOM een bepaalde actie wil uitvoeren,\r
is het dus handig om een NodeList te gebruiken. Je kan dan over alle elementen in de NodeList itereren en de actie uitvoeren,\r
zonder eerst een omzetting naar een array te moeten doen.`}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"praktische-toepassingen-van-nodes-ophalen",children:["Praktische toepassingen van nodes ophalen",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#praktische-toepassingen-van-nodes-ophalen",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Hieronder vind je enkele realistische voorbeelden waar het ophalen van nodes in de praktijk wordt gebruikt:"}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"Deze code voorbeelden werken niet dynamisch in de console en zijn louter ter info."})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"1. Dynamisch een lijst opbouwen"}),`\r
Bijvoorbeeld: je haalt alle `,e.jsx(s.code,{children:"<li>"}),"-elementen op om ze te sorteren, te filteren of dynamisch te stylen."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," items = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"ul#todo-list li"'}),`);\r
items.`,e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"item"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (item.",e.jsx(s.span,{className:"hljs-property",children:"textContent"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"includes"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"belangrijk"'}),`)) {\r
    item.`,e.jsx(s.span,{className:"hljs-property",children:"style"}),".",e.jsx(s.span,{className:"hljs-property",children:"fontWeight"})," = ",e.jsx(s.span,{className:"hljs-string",children:'"bold"'}),`;\r
  }\r
});
`]})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"2. Formulierwaarden verzamelen"}),`\r
Alle inputvelden van een formulier ophalen om de waarden te valideren of te versturen.`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," inputs = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"form input"'}),`);\r
inputs.`,e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"input"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(input.",e.jsx(s.span,{className:"hljs-property",children:"name"}),", input.",e.jsx(s.span,{className:"hljs-property",children:"value"}),`);\r
});
`]})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"3. Interactieve tabbladen of menu's bouwen"}),`\r
Alle tab-knoppen ophalen en er event listeners aan koppelen.`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," tabs = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",e.jsx(s.span,{className:"hljs-string",children:'".tab-button"'}),`);\r
tabs.`,e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"tab"}),") =>"]}),` {\r
  tab.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Toon de juiste content"}),`\r
  });\r
});
`]})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"4. Content dynamisch aanpassen op basis van data"}),`\r
Bijvoorbeeld: alle elementen met een bepaalde class ophalen en hun inhoud aanpassen na een API-call.`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-title function_",children:"fetch"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"/api/nieuws"'}),`)\r
  .`,e.jsx(s.span,{className:"hljs-title function_",children:"then"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"res"}),") =>"]})," res.",e.jsx(s.span,{className:"hljs-title function_",children:"json"}),`())\r
  .`,e.jsx(s.span,{className:"hljs-title function_",children:"then"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"data"}),") =>"]}),` {\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," nieuwsItems = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",e.jsx(s.span,{className:"hljs-string",children:'".nieuws-item"'}),`);\r
    nieuwsItems.`,e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"item, i"}),") =>"]}),` {\r
      item.`,e.jsx(s.span,{className:"hljs-property",children:"textContent"})," = data[i]?.",e.jsx(s.span,{className:"hljs-property",children:"titel"})," || ",e.jsx(s.span,{className:"hljs-string",children:'""'}),`;\r
    });\r
  });
`]})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"5. Toegankelijkheid verbeteren"}),`\r
Alle `,e.jsx(s.code,{children:"<label>"}),"-elementen ophalen en controleren of ze gekoppeld zijn aan een input."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," labels = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"label"'}),`);\r
labels.`,e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"label"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (!label.",e.jsx(s.span,{className:"hljs-property",children:"htmlFor"}),`) {\r
    label.`,e.jsx(s.span,{className:"hljs-property",children:"style"}),".",e.jsx(s.span,{className:"hljs-property",children:"border"})," = ",e.jsx(s.span,{className:"hljs-string",children:'"2px solid red"'}),`;\r
  }\r
});
`]})}),`
`,e.jsx(s.p,{children:"Deze use cases laten zien dat nodes ophalen essentieel is voor dynamische, interactieve en toegankelijke webapplicaties."})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{r as default};
