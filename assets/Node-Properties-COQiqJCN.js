import{j as e}from"./index-3BjEGx3K.js";function l(s){const n={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:`en Node heeft veel properties. Je kan deze bekijken via de Developer Tools in je browser,\r
in het tabblad "Elements" en subtabblad "Properties". We bespreken de meest gebruikte:`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsx("div",{id:"my-div",children:"Hello, world!"})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-html",children:[e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"div"})," ",e.jsx(n.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(n.span,{className:"hljs-string",children:'"my-div"'}),">"]}),"Hello, world!",e.jsxs(n.span,{className:"hljs-tag",children:["</",e.jsx(n.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,e.jsxs(n.h2,{id:"nodename",children:[e.jsx(n.code,{children:"nodeName"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nodename",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"De naam van de node, altijd in hoofdletters."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// We halen deze div op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," node = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"#my-div"'}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(node.",e.jsx(n.span,{className:"hljs-property",children:"nodeName"}),`);
`]})}),`
`,e.jsxs(n.h2,{id:"nodevalue",children:[e.jsx(n.code,{children:"nodeValue"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nodevalue",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"De waarde van de node."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Element nodes: null"}),`
`,e.jsx(n.li,{children:"Attribute nodes: de waarde van de attribute"}),`
`,e.jsx(n.li,{children:"Text nodes: de tekst van de node"}),`
`]}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsx("div",{id:"my-div",children:"Hello, world!"})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-string",children:"``"}),e.jsx(n.span,{className:"hljs-string",children:"` ## `"}),"parentNode",e.jsx(n.span,{className:"hljs-string",children:"` De ouder node van deze node.\r\n\r\n`"}),e.jsx(n.span,{className:"hljs-string",children:"``"}),`js\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We halen deze div op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," node = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"#my-div"'}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(node.",e.jsx(n.span,{className:"hljs-property",children:"parentNode"}),`);
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"praktische-voorbeelden-van-node-properties",children:["Praktische voorbeelden van node properties",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#praktische-voorbeelden-van-node-properties",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Deze code voorbeelden werken niet dynamisch in de console en zijn louter ter info."})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"1. Alleen tekst nodes ophalen en aanpassen"})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," parent = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"my-div"'}),`);\r
parent.`,e.jsx(n.span,{className:"hljs-property",children:"childNodes"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(n.span,{className:"hljs-function",children:["(",e.jsx(n.span,{className:"hljs-params",children:"node"}),") =>"]}),` {\r
  `,e.jsx(n.span,{className:"hljs-keyword",children:"if"})," (node.",e.jsx(n.span,{className:"hljs-property",children:"nodeType"})," === ",e.jsx(n.span,{className:"hljs-number",children:"3"}),`) {\r
    node.`,e.jsx(n.span,{className:"hljs-property",children:"nodeValue"})," = node.",e.jsx(n.span,{className:"hljs-property",children:"nodeValue"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"toUpperCase"}),`();\r
  }\r
});
`]})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"2. De parent van een element stylen"})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," node = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"my-div"'}),`);\r
node.`,e.jsx(n.span,{className:"hljs-property",children:"parentNode"}),".",e.jsx(n.span,{className:"hljs-property",children:"style"}),".",e.jsx(n.span,{className:"hljs-property",children:"background"})," = ",e.jsx(n.span,{className:"hljs-string",children:'"#ffe4b5"'}),`;
`]})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"3. De naam en waarde van een attribuut node loggen"})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," el = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"my-div"'}),`);\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," attr = el.",e.jsx(n.span,{className:"hljs-property",children:"attributes"}),"[",e.jsx(n.span,{className:"hljs-number",children:"0"}),`];\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(attr.",e.jsx(n.span,{className:"hljs-property",children:"nodeName"}),", attr.",e.jsx(n.span,{className:"hljs-property",children:"nodeValue"}),`);
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"volledige-lijst-van-veelgebruikte-node-properties",children:["Volledige lijst van veelgebruikte node properties",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#volledige-lijst-van-veelgebruikte-node-properties",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nodeType"})," — Het type van de node (1 = element, 3 = tekst, ...)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nodeName"})," — De naam van de node (bv. 'DIV', '#text')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nodeValue"})," — De waarde van de node (meestal alleen voor text/attribute nodes)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parentNode"})," — De ouder node"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"childNodes"})," — Een NodeList van alle child nodes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"firstChild"})," — De eerste child node"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lastChild"})," — De laatste child node"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nextSibling"})," — De volgende node op hetzelfde niveau"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"previousSibling"})," — De vorige node op hetzelfde niveau"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ownerDocument"})," — Het document waartoe de node behoort"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"attributes"})," — Een NamedNodeMap van alle attributen (alleen voor element nodes)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"textContent"})," — De tekstinhoud van de node en zijn kinderen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"innerHTML"})," — De HTML-inhoud van de node (alleen voor element nodes)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"outerHTML"})," — De HTML van de node zelf inclusief zijn inhoud"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"baseURI"})," — De absolute URI van de node"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isConnected"})," — Of de node verbonden is met het document"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Voor een volledig overzicht zie de ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node",children:"MDN Node documentatie"}),"."]})]})}function d(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{d as default};
