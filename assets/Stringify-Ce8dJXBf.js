import{j as s}from"./index-3BjEGx3K.js";function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.p,{children:"We kunnen een JavaScript object omzetten naar een JSON-string."}),`
`,s.jsxs(n.h2,{id:"jsonstringify",children:["JSON.stringify()",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#jsonstringify",children:s.jsx(n.span,{className:"icon icon-link"})})]}),`
`,s.jsx(n.p,{children:`JSON.stringify() is een methode die een JavaScript object omzet naar\r
een JSON-string.`}),`
`,s.jsx(n.p,{children:"Voorbeeld:"}),`
`,s.jsx(n.pre,{children:s.jsxs(n.code,{className:"hljs language-javascript",children:[s.jsx(n.span,{className:"hljs-comment",children:"// We hebben een JavaScript object"}),`\r
`,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," object = { ",s.jsx(n.span,{className:"hljs-attr",children:"naam"}),": ",s.jsx(n.span,{className:"hljs-string",children:'"John"'}),", ",s.jsx(n.span,{className:"hljs-attr",children:"leeftijd"}),": ",s.jsx(n.span,{className:"hljs-number",children:"30"}),", ",s.jsx(n.span,{className:"hljs-attr",children:"gehuwd"}),": ",s.jsx(n.span,{className:"hljs-literal",children:"false"}),` };\r
\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// We zetten het JavaScript object om naar een JSON string"}),`\r
`,s.jsx(n.span,{className:"hljs-keyword",children:"const"})," json = ",s.jsx(n.span,{className:"hljs-title class_",children:"JSON"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"stringify"}),`(object);\r
\r
`,s.jsx(n.span,{className:"hljs-comment",children:"// De JSON string"}),`\r
`,s.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(json);\r
`,s.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` json);
`]})})]})}function c(e={}){const{wrapper:n}=e.components||{};return n?s.jsx(n,{...e,children:s.jsx(a,{...e})}):a(e)}export{c as default};
