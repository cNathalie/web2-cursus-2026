import{j as e}from"./index-3BjEGx3K.js";function a(s){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"We kunnen JSON omzetten naar een JavaScript object."}),`
`,e.jsxs(n.h2,{id:"jsonparse",children:["JSON.parse()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#jsonparse",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"JSON.parse() is een methode die een JSON-string omzet naar een JavaScript object."}),`
`,e.jsx(n.p,{children:"Voorbeeld:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// We hebben een JSON string"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," json = ",e.jsx(n.span,{className:"hljs-string",children:`'{"naam":"John", "leeftijd":30, "gehuwd":false}'`}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We zetten de JSON string om naar een JavaScript object"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," obj = ",e.jsx(n.span,{className:"hljs-title class_",children:"JSON"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"parse"}),`(json);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We kunnen nu de data manipuleren of gebruiken"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(obj.",e.jsx(n.span,{className:"hljs-property",children:"naam"}),`); 
`]})})]})}function c(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{c as default};
