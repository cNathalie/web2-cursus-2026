import{j as e}from"./index-DEXPSZA7.js";function l(n){const s={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"types",children:["Types",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#types",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Je kan het type van een node opvragen via de ",e.jsx(s.code,{children:"nodeType"})," property. Deze property geeft een nummer terug dat het type van de node aangeeft. Voorbeeld:"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// We halen deze div op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," node = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#my-div"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// We loggen het type van de node"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(node.",e.jsx(s.span,{className:"hljs-property",children:"nodeType"}),`);
`]})}),`
`,e.jsx(s.p,{children:"Dit zal 1 loggen naar de console, wat het type is van een element node."}),`
`,e.jsx(s.p,{children:"Hier zijn de codes van nodes die wij leerden kennen:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Element node: 1"}),`
`,e.jsx(s.li,{children:"Attribute node: 2"}),`
`,e.jsx(s.li,{children:"Text node: 3"}),`
`,e.jsx(s.li,{children:"Document node: 9"}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"praktische-toepassingen-van-nodetype",children:["Praktische toepassingen van nodeType",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#praktische-toepassingen-van-nodetype",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Hieronder vind je enkele realistische voorbeelden waar ",e.jsx(s.code,{children:"nodeType"})," handig is in de praktijk:"]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. Alleen tekst nodes selecteren uit een element"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," parent = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"my-div"'}),`);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` textNodes = [];\r
parent.`,e.jsx(s.span,{className:"hljs-property",children:"childNodes"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"node"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (node.",e.jsx(s.span,{className:"hljs-property",children:"nodeType"})," === ",e.jsx(s.span,{className:"hljs-number",children:"3"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// 3 = Text node"}),`\r
    textNodes.`,e.jsx(s.span,{className:"hljs-title function_",children:"push"}),`(node);\r
  }\r
});\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(textNodes);
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. Ongewenste whitespace nodes verwijderen"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," parent = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"my-div"'}),`);\r
parent.`,e.jsx(s.span,{className:"hljs-property",children:"childNodes"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"node"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (node.",e.jsx(s.span,{className:"hljs-property",children:"nodeType"})," === ",e.jsx(s.span,{className:"hljs-number",children:"3"})," && !node.",e.jsx(s.span,{className:"hljs-property",children:"textContent"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"trim"}),`()) {\r
    parent.`,e.jsx(s.span,{className:"hljs-title function_",children:"removeChild"}),`(node);\r
  }\r
});
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. Controleren of een node een element is voordat je ermee werkt"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"highlightIfElement"}),"(",e.jsx(s.span,{className:"hljs-params",children:"node"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (node.",e.jsx(s.span,{className:"hljs-property",children:"nodeType"})," === ",e.jsx(s.span,{className:"hljs-number",children:"1"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// 1 = Element node"}),`\r
    node.`,e.jsx(s.span,{className:"hljs-property",children:"style"}),".",e.jsx(s.span,{className:"hljs-property",children:"background"})," = ",e.jsx(s.span,{className:"hljs-string",children:'"yellow"'}),`;\r
  }\r
}
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"4. Dynamisch door een DOM-boom lopen en alleen bepaalde types verwerken"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"printElementNodes"}),"(",e.jsx(s.span,{className:"hljs-params",children:"node"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (node.",e.jsx(s.span,{className:"hljs-property",children:"nodeType"})," === ",e.jsx(s.span,{className:"hljs-number",children:"1"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Element:"'}),", node.",e.jsx(s.span,{className:"hljs-property",children:"tagName"}),`);\r
  }\r
  node.`,e.jsx(s.span,{className:"hljs-property",children:"childNodes"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),`(printElementNodes);\r
}\r
`,e.jsx(s.span,{className:"hljs-title function_",children:"printElementNodes"}),"(",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-property",children:"body"}),`);
`]})}),`
`,e.jsxs(s.p,{children:["Met deze voorbeelden zie je hoe ",e.jsx(s.code,{children:"nodeType"})," je helpt om onderscheid te maken tussen verschillende soorten nodes in de DOM, bijvoorbeeld bij het filteren van tekst, het opschonen van whitespace, of het veilig manipuleren van elementen."]})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{r as default};
