import{j as n}from"./index-DAnO9JXN.js";function a(e){const s={code:"code",pre:"pre",span:"span",...e.components};return n.jsx(s.pre,{children:n.jsxs(s.code,{className:"hljs language-js",children:[n.jsx(s.span,{className:"hljs-comment",children:"// 1. Variabelen"}),`\r
`,n.jsx(s.span,{className:"hljs-keyword",children:"const"})," naam = ",n.jsx(s.span,{className:"hljs-string",children:'"Nathalie"'}),`;\r
`,n.jsx(s.span,{className:"hljs-keyword",children:"let"})," leeftijd = ",n.jsx(s.span,{className:"hljs-number",children:"34"}),`;\r
`,n.jsx(s.span,{className:"hljs-keyword",children:"const"})," isStudent = ",n.jsx(s.span,{className:"hljs-literal",children:"false"}),`;\r
`,n.jsx(s.span,{className:"hljs-keyword",children:"const"})," hobbys = [",n.jsx(s.span,{className:"hljs-string",children:'"lezen"'}),", ",n.jsx(s.span,{className:"hljs-string",children:'"programmeren"'}),", ",n.jsx(s.span,{className:"hljs-string",children:'"wandelen"'}),`];\r
`,n.jsx(s.span,{className:"hljs-keyword",children:"const"})," partner = ",n.jsx(s.span,{className:"hljs-literal",children:"null"}),`;\r
`,n.jsx(s.span,{className:"hljs-keyword",children:"let"})," favorieteKleur; ",n.jsx(s.span,{className:"hljs-comment",children:"// undefined"}),`\r
\r
`,n.jsx(s.span,{className:"hljs-comment",children:"// 2. Object"}),`\r
`,n.jsx(s.span,{className:"hljs-keyword",children:"const"}),` persoon = {\r
  `,n.jsx(s.span,{className:"hljs-attr",children:"naam"}),`: naam,\r
  `,n.jsx(s.span,{className:"hljs-attr",children:"leeftijd"}),`: leeftijd,\r
  `,n.jsx(s.span,{className:"hljs-attr",children:"isStudent"}),`: isStudent,\r
  `,n.jsx(s.span,{className:"hljs-attr",children:"hobbys"}),`: hobbys,\r
  `,n.jsx(s.span,{className:"hljs-attr",children:"partner"}),`: partner,\r
  `,n.jsx(s.span,{className:"hljs-attr",children:"favorieteKleur"}),`: favorieteKleur,\r
};\r
\r
`,n.jsx(s.span,{className:"hljs-comment",children:"// 3. Functie beschrijfPersoon"}),`\r
`,n.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",n.jsx(s.span,{className:"hljs-title function_",children:"beschrijfPersoon"}),"(",n.jsx(s.span,{className:"hljs-params",children:"p"}),`) {\r
  `,n.jsx(s.span,{className:"hljs-keyword",children:"return"})," ",n.jsxs(s.span,{className:"hljs-string",children:["`",n.jsx(s.span,{className:"hljs-subst",children:"${p.naam}"})," is ",n.jsx(s.span,{className:"hljs-subst",children:"${p.leeftijd}"})," jaar oud en heeft ",n.jsx(s.span,{className:"hljs-subst",children:"${p.hobbys.length}"})," hobby’s.`"]}),`;\r
}\r
\r
`,n.jsx(s.span,{className:"hljs-comment",children:"// 4. Functie telHobbies"}),`\r
`,n.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",n.jsx(s.span,{className:"hljs-title function_",children:"telHobbys"})," = (",n.jsx(s.span,{className:"hljs-params",children:"lijst"}),") => lijst.",n.jsx(s.span,{className:"hljs-property",children:"length"}),`;\r
\r
`,n.jsx(s.span,{className:"hljs-comment",children:"// 5. Output"}),`\r
`,n.jsx(s.span,{className:"hljs-keyword",children:"const"})," beschrijving = ",n.jsx(s.span,{className:"hljs-title function_",children:"beschrijfPersoon"}),`(persoon);\r
`,n.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",n.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(beschrijving);\r
`,n.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",n.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",n.jsx(s.span,{className:"hljs-string",children:'"Aantal hobby’s:"'}),", ",n.jsx(s.span,{className:"hljs-title function_",children:"telHobbys"}),"(persoon.",n.jsx(s.span,{className:"hljs-property",children:"hobbys"}),`));\r
`,n.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",n.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",n.jsx(s.span,{className:"hljs-string",children:'"Is student:"'}),", persoon.",n.jsx(s.span,{className:"hljs-property",children:"isStudent"}),`);\r
`,n.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",n.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",n.jsx(s.span,{className:"hljs-string",children:'"Partner:"'}),", persoon.",n.jsx(s.span,{className:"hljs-property",children:"partner"}),`);\r
`,n.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",n.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",n.jsx(s.span,{className:"hljs-string",children:'"Favoriete kleur:"'}),", persoon.",n.jsx(s.span,{className:"hljs-property",children:"favorieteKleur"}),`);
`]})})}function r(e={}){const{wrapper:s}=e.components||{};return s?n.jsx(s,{...e,children:n.jsx(a,{...e})}):a(e)}export{r as default};
