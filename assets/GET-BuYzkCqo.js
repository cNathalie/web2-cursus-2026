import{j as s}from"./index-3BjEGx3K.js";function a(n){const e={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.p,{children:["Met een ",s.jsx(e.strong,{children:"GET request"})," kunnen we data ophalen van een server.",s.jsx(e.br,{}),`
`,"Dit is veruit de meest gebruikte HTTP‑requestmethode."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"fetch-get",children:["Fetch GET",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fetch-get",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Om een GET request te maken met de Fetch API, geven we een URL door aan ",s.jsx(e.code,{children:"fetch()"}),"."]}),`
`,s.jsxs(e.p,{children:["De functie retourneert een ",s.jsx(e.strong,{children:"promise"})," die een ",s.jsx(e.code,{children:"response"})," bevat.",s.jsx(e.br,{}),`
`,"Om hier data uit te halen gebruiken we ",s.jsx(e.code,{children:".json()"}),", dat op zijn beurt opnieuw een promise oplevert."]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-js",children:[s.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s.jsx(e.span,{className:"hljs-string",children:"'https://jsonplaceholder.typicode.com/posts/1'"}),`)\r
  .`,s.jsx(e.span,{className:"hljs-title function_",children:"then"}),"(",s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-params",children:"response"})," =>"]})," response.",s.jsx(e.span,{className:"hljs-title function_",children:"json"}),`())\r
  .`,s.jsx(e.span,{className:"hljs-title function_",children:"then"}),"(",s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-params",children:"data"})," =>"]})," ",s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(data))\r
  .`,s.jsx(e.span,{className:"hljs-title function_",children:"catch"}),"(",s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-params",children:"error"})," =>"]})," ",s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"error"}),`(error));
`]})}),`
`,s.jsxs(e.h2,{id:"async--await",children:["Async / Await",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#async--await",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Fetch werkt ook uitstekend met async/await."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-js",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"fetchData"})," = ",s.jsx(e.span,{className:"hljs-keyword",children:"async"})," (",s.jsx(e.span,{className:"hljs-params"}),`) => {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," response = ",s.jsx(e.span,{className:"hljs-keyword",children:"await"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s.jsx(e.span,{className:"hljs-string",children:"'https://stapi.co/api/v1/rest/character?uid=CHMA0000289509'"}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," data = ",s.jsx(e.span,{className:"hljs-keyword",children:"await"})," response.",s.jsx(e.span,{className:"hljs-title function_",children:"json"}),`();\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(data);\r
};\r
\r
`,s.jsx(e.span,{className:"hljs-title function_",children:"fetchData"}),`();
`]})}),`
`,s.jsxs(e.h3,{id:"uitleg",children:["Uitleg",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#uitleg",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Async Function: de functie retourneert een Promise."}),`
`,s.jsx(e.li,{children:"Await: wacht tot de fetch‑operatie voltooid is."}),`
`,s.jsx(e.li,{children:"JSON Parsing: response.json() wacht ook asynchroon."}),`
`,s.jsx(e.li,{children:"Logging: de verkregen data wordt getoond in de console."}),`
`,s.jsx(e.li,{children:"Functie Aanroepen: start de asynchrone operatie."}),`
`]}),`
`,s.jsxs(e.h2,{id:"errorhandling",children:["Error‑handling",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#errorhandling",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Het is belangrijk om errors af te vangen, zodat de applicatie niet vastloopt."}),`
`,s.jsxs(e.h3,{id:"via-catch-na-then",children:["Via ",s.jsx(e.code,{children:".catch()"})," na ",s.jsx(e.code,{children:".then()"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#via-catch-na-then",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-js",children:[s.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s.jsx(e.span,{className:"hljs-string",children:"'https://stapi.co/api/v1/rest/character'"}),`)\r
  .`,s.jsx(e.span,{className:"hljs-title function_",children:"then"}),"(",s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-params",children:"response"})," =>"]})," response.",s.jsx(e.span,{className:"hljs-title function_",children:"json"}),`())\r
  .`,s.jsx(e.span,{className:"hljs-title function_",children:"catch"}),"(",s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-params",children:"error"})," =>"]})," ",s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"error"}),`(error));
`]})}),`
`,s.jsxs(e.h3,{id:"via-trycatch-met-asyncawait",children:["Via ",s.jsx(e.code,{children:"try"}),"/",s.jsx(e.code,{children:"catch"})," met ",s.jsx(e.code,{children:"async"}),"/",s.jsx(e.code,{children:"await"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#via-trycatch-met-asyncawait",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-js",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"fetchData"})," = ",s.jsx(e.span,{className:"hljs-keyword",children:"async"})," (",s.jsx(e.span,{className:"hljs-params"}),`) => {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"try"}),` {\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," response = ",s.jsx(e.span,{className:"hljs-keyword",children:"await"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s.jsx(e.span,{className:"hljs-string",children:"'https://stapi.co/api/v1/rest/character'"}),`);\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," data = ",s.jsx(e.span,{className:"hljs-keyword",children:"await"})," response.",s.jsx(e.span,{className:"hljs-title function_",children:"json"}),`();\r
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(data);\r
  } `,s.jsx(e.span,{className:"hljs-keyword",children:"catch"}),` (error) {\r
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"error"}),`(error);\r
  }\r
};\r
`,s.jsx(e.span,{className:"hljs-title function_",children:"fetchData"}),`();
`]})}),`
`,s.jsx(e.p,{children:"Deze fetch faalt bewust omdat de API een uid (unique identifier) verwacht."}),`
`,s.jsx(e.p,{children:"Gratis REST API’s om te testen"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Star Trek: ",s.jsx(e.a,{href:"https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml",children:"https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml"})]}),`
`,s.jsxs(e.li,{children:["Star Wars: ",s.jsx(e.a,{href:"https://swapi.dev/",children:"https://swapi.dev/"})]}),`
`,s.jsxs(e.li,{children:["The Cocktail DB: ",s.jsx(e.a,{href:"https://www.thecocktaildb.com/api.php",children:"https://www.thecocktaildb.com/api.php"})]}),`
`,s.jsxs(e.li,{children:["Zippopotam.us: ",s.jsx(e.a,{href:"https://docs.zippopotam.us/",children:"https://docs.zippopotam.us/"})]}),`
`]}),`
`,s.jsxs(e.p,{children:["Je kan deze API’s testen via ",s.jsx(e.a,{href:"https://www.usebruno.com/downloads",children:"Bruno"})," of ",s.jsx(e.a,{href:"https://www.postman.com/downloads/",children:"Postman"}),"."]})]})}function c(n={}){const{wrapper:e}=n.components||{};return e?s.jsx(e,{...n,children:s.jsx(a,{...n})}):a(n)}export{c as default};
