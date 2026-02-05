import{j as e}from"./index-3BjEGx3K.js";function a(n){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"Browser ondersteunen ook vaak een lokale NoSQL-database."}),`
`,e.jsxs(s.h2,{id:"wat-is-de-indexed-database",children:["Wat is de Indexed Database?",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wat-is-de-indexed-database",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`De Indexed Database API is een manier om gegevens in de browser op te\r
slaan. Het is een NoSQL-database die een krachtige en flexibele\r
manier biedt om gegevens op te slaan en te beheren. Het is\r
ontworpen om grote hoeveelheden gegevens te kunnen verwerken en\r
ondersteunt transacties en indexen.`}),`
`,e.jsxs(s.h2,{id:"indexed-db-bekijken",children:["Indexed db bekijken",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#indexed-db-bekijken",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Je kan de indexeddb terugvinden in de developer tools van je\r
browser. In Chrome kan je dit vinden onder de tab "Application".`}),`
`,e.jsxs(s.h2,{id:"indexed-db-gebruiken",children:["Indexed db gebruiken",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#indexed-db-gebruiken",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Hieronder zie je een voorbeeld van hoe je een Indexed Database kan\r
gebruiken in JavaScript.`}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Haal de browser db op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," indexedDB = ",e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-property",children:"indexedDB"}),`;\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Open/Creëer een nieuwe database"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," myDb = indexedDB.",e.jsx(s.span,{className:"hljs-title function_",children:"open"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"MyDatabase"'}),", ",e.jsx(s.span,{className:"hljs-number",children:"1"}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Maak het db schema aan"}),`\r
myDb.`,e.jsx(s.span,{className:"hljs-property",children:"onupgradeneeded"})," = ",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," db = myDb.",e.jsx(s.span,{className:"hljs-property",children:"result"}),`;\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," store = db.",e.jsx(s.span,{className:"hljs-title function_",children:"createObjectStore"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"MyObjectStore"'}),", { ",e.jsx(s.span,{className:"hljs-attr",children:"keyPath"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"id"'}),` });\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," index = store.",e.jsx(s.span,{className:"hljs-title function_",children:"createIndex"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"NameIndex"'}),", [",e.jsx(s.span,{className:"hljs-string",children:'"name.last"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"name.first"'}),`]);\r
};\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Voeg data toe en lees ze uit in een transactie"}),`\r
myDb.`,e.jsx(s.span,{className:"hljs-property",children:"onsuccess"})," = ",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Start een nieuwe transactie"}),`\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," db = myDb.",e.jsx(s.span,{className:"hljs-property",children:"result"}),`;\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," tx = db.",e.jsx(s.span,{className:"hljs-title function_",children:"transaction"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"MyObjectStore"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"readwrite"'}),`);\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," store = tx.",e.jsx(s.span,{className:"hljs-title function_",children:"objectStore"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"MyObjectStore"'}),`);\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," index = store.",e.jsx(s.span,{className:"hljs-title function_",children:"index"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"NameIndex"'}),`);\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Voeg data toe"}),`\r
  store.`,e.jsx(s.span,{className:"hljs-title function_",children:"put"}),"({ ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),": ",e.jsx(s.span,{className:"hljs-number",children:"12345"}),", ",e.jsx(s.span,{className:"hljs-attr",children:"name"}),": { ",e.jsx(s.span,{className:"hljs-attr",children:"first"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"John"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"last"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Doe"'})," }, ",e.jsx(s.span,{className:"hljs-attr",children:"age"}),": ",e.jsx(s.span,{className:"hljs-number",children:"42"}),` });\r
  store.`,e.jsx(s.span,{className:"hljs-title function_",children:"put"}),"({ ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),": ",e.jsx(s.span,{className:"hljs-number",children:"67890"}),", ",e.jsx(s.span,{className:"hljs-attr",children:"name"}),": { ",e.jsx(s.span,{className:"hljs-attr",children:"first"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Bob"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"last"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Smith"'})," }, ",e.jsx(s.span,{className:"hljs-attr",children:"age"}),": ",e.jsx(s.span,{className:"hljs-number",children:"35"}),` });\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Lees data uit"}),`\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," getJohn = store.",e.jsx(s.span,{className:"hljs-title function_",children:"get"}),"(",e.jsx(s.span,{className:"hljs-number",children:"12345"}),`);\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," getBob = index.",e.jsx(s.span,{className:"hljs-title function_",children:"get"}),"([",e.jsx(s.span,{className:"hljs-string",children:'"Smith"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"Bob"'}),`]);\r
\r
  getJohn.`,e.jsx(s.span,{className:"hljs-property",children:"onsuccess"})," = ",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(getJohn.",e.jsx(s.span,{className:"hljs-property",children:"result"}),".",e.jsx(s.span,{className:"hljs-property",children:"name"}),".",e.jsx(s.span,{className:"hljs-property",children:"first"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:'// => "John"'}),`\r
  };\r
\r
  getBob.`,e.jsx(s.span,{className:"hljs-property",children:"onsuccess"})," = ",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(getBob.",e.jsx(s.span,{className:"hljs-property",children:"result"}),".",e.jsx(s.span,{className:"hljs-property",children:"name"}),".",e.jsx(s.span,{className:"hljs-property",children:"first"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:'// => "Bob"'}),`\r
  };\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Sluit de database wanneer de transactie klaar is"}),`\r
  tx.`,e.jsx(s.span,{className:"hljs-property",children:"oncomplete"})," = ",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
    db.`,e.jsx(s.span,{className:"hljs-title function_",children:"close"}),`();\r
  };\r
};
`]})}),`
`,e.jsx(s.p,{children:`In dit voorbeeld wordt een Indexed Database aangemaakt met de naam\r
"myDatabase". Er wordt een object store aangemaakt met de naam\r
"MyObjectStore" en er wordt een index gemaakt voor het veld name.`}),`
`,e.jsxs(s.h2,{id:"levensduur",children:["Levensduur",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#levensduur",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`De Indexed Database is een lokale database die wordt opgeslagen in de\r
browser. De gegevens blijven bewaard, zelfs als de browser wordt\r
gesloten. De gegevens worden alleen verwijderd als de gebruiker de\r
gegevens verwijdert of als de website de gegevens verwijdert.`})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{r as default};
