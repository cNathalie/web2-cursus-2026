import{j as e}from"./index-3BjEGx3K.js";function a(s){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"We kunnen dynamisch nodes aanmaken in de DOM."}),`
`,e.jsxs(n.h2,{id:"createelement",children:["createElement()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#createelement",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Met de createElement() methode kunnen we een nieuwe node aanmaken. Dit is een methode die enkel beschikbaar is op het document object."}),`
`,e.jsx(n.p,{children:"De methode neemt één argument: de naam van het element dat je wil aanmaken. Dit is een string met de naam van het element, bv: 'img', 'div', 'p', 'h1', ..."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// We maken een nieuwe div aan"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," newDiv = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"createElement"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'div'"}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(newDiv);
`]})}),`
`,e.jsxs(n.h2,{id:"createtextnode",children:["createTextNode()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#createtextnode",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Met de createTextNode() methode kunnen we een nieuwe tekstnode aanmaken. Dit is een methode die enkel beschikbaar is op het document object."}),`
`,e.jsx(n.p,{children:"De methode neemt één argument: de tekst die je wil toevoegen aan de tekstnode. Dit is een string met de tekst die je wil toevoegen."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// We maken een nieuwe tekstnode aan"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," newText = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"createTextNode"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'Dit is een nieuwe tekstnode'"}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(newText);
`]})})]})}function l(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{l as default};
