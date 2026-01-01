import{j as e}from"./index-BbjdRKSI.js";function a(s){const n={a:"a",br:"br",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["Met JavaScript kan je ",e.jsx(n.strong,{children:"elementen opvragen"})," uit de DOM-Tree. Dit kan je doen met de document object. Het document object is een object dat de volledige DOM-Tree voorstelt. Met JavaScript kan je elementen opvragen, toevoegen, verwijderen of aanpassen."]}),`
`,e.jsx(n.p,{children:"In de volgende voorbeelden gaan we elementen opvragen uit de DOM-Tree."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"javascript-methodes",children:["JavaScript methodes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#javascript-methodes",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Met JavaScript kan je elementen opvragen uit de DOM-Tree. Dit kan je doen met de volgende methodes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"document.getElementById('id')"})," - Haal een element op met een specifieke id."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"document.getElementsByClassName('class')"})," - Haal een element op met een specifieke class."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:" document.getElementsByTagName('tag')"})," - Haal een element op met een specifieke tag."]}),`
`]}),`
`,e.jsxs(n.h4,{id:"voorbeelden-uitvoerbaar-in-de-console-op-deze-pagina",children:["Voorbeelden uitvoerbaar in de console op deze pagina",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#voorbeelden-uitvoerbaar-in-de-console-op-deze-pagina",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal het element op met de id 'my-element'"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," element = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"my-element"'}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(element);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Haal alle elementen op met de class 'my-class'"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," elements1 = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"my-class"'}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(elements1);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Haal alle elementen op met de tag 'ol'"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," elements2 = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementsByTagName"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"ol"'}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(elements2);
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"opvragen-van-inhoud-tekst-vs-html",children:["Opvragen van inhoud: tekst vs html",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opvragen-van-inhoud-tekst-vs-html",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Met JavaScript kan je de inhoud van een element opvragen. Dit kan je doen met de ",e.jsx(n.code,{children:"textContent"}),", ",e.jsx(n.code,{children:"innerText"})," en ",e.jsx(n.code,{children:"innerHTML"})," properties van een element."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"textContent"})," vraagt de tekst-node op van het element, deze wordt dus niet geparset als HTML maar blijft ‘raw’ tekst.",e.jsx(n.br,{}),`
`,"innerText geeft de tekst van een element terug, terwijl ",e.jsx(n.code,{children:"innerHTML"})," de HTML code van een element teruggeeft."]}),`
`,e.jsxs(n.h4,{id:"probeer-uit-en-zie-het-verschil",children:["Probeer uit en zie het verschil",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#probeer-uit-en-zie-het-verschil",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal het element op met de id 'link'"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," linkText = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"link"'}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(linkText.",e.jsx(n.span,{className:"hljs-property",children:"textContent"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Haal het element op met de id 'txt-demo'"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," element = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"txt-demo"'}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(element.",e.jsx(n.span,{className:"hljs-property",children:"innerText"}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(element.",e.jsx(n.span,{className:"hljs-property",children:"innerHTML"}),`);
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"aanpassen-van-de-inhoud",children:["Aanpassen van de inhoud",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aanpassen-van-de-inhoud",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Met JavaScript kan je de inhoud van een element aanpassen. Dit kan je doen met de ",e.jsx(n.code,{children:"textContent"}),", innerText en ",e.jsx(n.code,{children:"innerHTML"})," properties van een element."]}),`
`,e.jsxs(n.p,{children:["Het voornaamste verschil tussen ",e.jsx(n.code,{children:"textContent"})," en ",e.jsx(n.code,{children:"innerHTML"})," is dat ",e.jsx(n.code,{children:"textContent"})," de tekst van een element als raw tekst aanpast, terwijl ",e.jsx(n.code,{children:"innerHTML"})," de HTML code verwerkt en toepast."]}),`
`,e.jsx("h3",{id:"change-me",className:"inline-dynamic-example",children:e.jsx(n.p,{children:"Ik ben de inhoud van een heading element, change me!"})}),`
`,e.jsxs(n.h4,{id:"pas-de-inhoud-van-bovenstaand-element-aan",children:["Pas de inhoud van bovenstaand element aan",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pas-de-inhoud-van-bovenstaand-element-aan",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal het element op met de id 'change-me'"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," changeMe = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"change-me"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Pas de textContent van het element aan"}),`\r
changeMe.`,e.jsx(n.span,{className:"hljs-property",children:"textContent"}),` =\r
  `,e.jsx(n.span,{className:"hljs-string",children:`'Dit is een <strong style="color:red">nieuwe</strong> tekst'`}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Pas de innerHTML van het element aan"}),`\r
changeMe.`,e.jsx(n.span,{className:"hljs-property",children:"innerHTML"}),` =\r
  `,e.jsx(n.span,{className:"hljs-string",children:`'Dit is een <strong style="color:red">nieuwe</strong> tekst'`}),`;
`]})}),`
`,e.jsxs("div",{hidden:!0,children:[e.jsx("div",{id:"my-element",children:e.jsxs(n.p,{children:["Paragraaf met id ",e.jsx("span",{children:'"my-element"'})]})}),e.jsx("div",{id:"txt-demo",children:e.jsx("a",{id:"link",href:"...",children:e.jsx(n.p,{children:"Dit is een hyperlink waarop je kan klikken"})})}),e.jsx("h1",{className:"my-class",children:'Heading met de class "my-class"'}),e.jsx("h1",{className:"my-class",children:'Nog een heading met de class "my-class"'}),e.jsx("ol",{children:'Ordered list met de tag "ol"'})]})]})}function t(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{t as default};
