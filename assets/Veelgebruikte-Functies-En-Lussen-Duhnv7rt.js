import{j as s}from"./index-3BjEGx3K.js";function a(n){const e={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",p:"p",pre:"pre",span:"span",...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.p,{children:`Deze pagina bespreekt de meest gebruikte JavaScript-functies en lusconstructies.\r
Ze vormen de basis van JavaScript.\r
Door ze goed te beheersen, kun je vlottere, duidelijkere en efficiëntere code schrijven.`}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"for-lus",children:[s.jsx(e.code,{children:"for"}),"-lus",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#for-lus",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"De klassieke lus waarmee je een stuk code een vast aantal keren uitvoert."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(e.span,{className:"hljs-keyword",children:"let"})," i = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),"; i < ",s.jsx(e.span,{className:"hljs-number",children:"3"}),`; i++) {\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(i);\r
}\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Output: 0, 1, 2"}),`
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"while-lus",children:[s.jsx(e.code,{children:"while"}),"-lus",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#while-lus",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Voert code uit zolang de voorwaarde waar (true) is."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," count = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"while"})," (count < ",s.jsx(e.span,{className:"hljs-number",children:"3"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(count);\r
  count++;\r
}
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"dowhile-lus",children:[s.jsx(e.code,{children:"do...while"}),"-lus",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#dowhile-lus",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Voert eerst de code uit en controleert daarna pas de voorwaarde. De code wordt dus minstens één keer uitgevoerd."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," number = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"do"}),` {\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(number);\r
  number++;\r
} `,s.jsx(e.span,{className:"hljs-keyword",children:"while"})," (number < ",s.jsx(e.span,{className:"hljs-number",children:"3"}),`);
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"foreach",children:[s.jsx(e.code,{children:"forEach()"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#foreach",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Een eenvoudige manier om door een array te lopen."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," fruit = [",s.jsx(e.span,{className:"hljs-string",children:'"appel"'}),", ",s.jsx(e.span,{className:"hljs-string",children:'"banaan"'}),", ",s.jsx(e.span,{className:"hljs-string",children:'"sinaasappel"'}),`]; \r
fruit.`,s.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"item"}),") =>"]}),` {\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(item);\r
});
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"map",children:[s.jsx(e.code,{children:"map()"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#map",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Maakt een nieuwe array door elke waarde te transformeren."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," nummers = [",s.jsx(e.span,{className:"hljs-number",children:"1"}),", ",s.jsx(e.span,{className:"hljs-number",children:"2"}),", ",s.jsx(e.span,{className:"hljs-number",children:"3"}),`];\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," verdubbeld = nummers.",s.jsx(e.span,{className:"hljs-title function_",children:"map"}),"(",s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-params",children:"n"})," =>"]})," n * ",s.jsx(e.span,{className:"hljs-number",children:"2"}),`);\r
`,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(verdubbeld);\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Output: [2, 4, 6]"}),`
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"filter",children:[s.jsx(e.code,{children:"filter()"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#filter",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Filtert alle elementen die voldoen aan een bepaalde voorwaarde."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," leeftijden = [",s.jsx(e.span,{className:"hljs-number",children:"12"}),", ",s.jsx(e.span,{className:"hljs-number",children:"18"}),", ",s.jsx(e.span,{className:"hljs-number",children:"25"}),", ",s.jsx(e.span,{className:"hljs-number",children:"8"}),`];\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," volwassenen = leeftijden.",s.jsx(e.span,{className:"hljs-title function_",children:"filter"}),"(",s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-params",children:"l"})," =>"]})," l >= ",s.jsx(e.span,{className:"hljs-number",children:"18"}),`);\r
`,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(volwassenen);\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Output: [18, 25]"}),`
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"reduce",children:[s.jsx(e.code,{children:"reduce()"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reduce",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Reduceert een array tot één waarde, zoals een som."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," waarden = [",s.jsx(e.span,{className:"hljs-number",children:"1"}),", ",s.jsx(e.span,{className:"hljs-number",children:"2"}),", ",s.jsx(e.span,{className:"hljs-number",children:"3"}),", ",s.jsx(e.span,{className:"hljs-number",children:"4"}),`];\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," som = waarden.",s.jsx(e.span,{className:"hljs-title function_",children:"reduce"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"totaal, n"}),") =>"]})," totaal + n, ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`);\r
`,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(som);\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Output: 10"}),`
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"find",children:[s.jsx(e.code,{children:"find()"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#find",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Zoekt het eerste element dat aan een voorwaarde voldoet."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," gebruikers = [{",s.jsx(e.span,{className:"hljs-attr",children:"id"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1"}),"}, {",s.jsx(e.span,{className:"hljs-attr",children:"id"}),": ",s.jsx(e.span,{className:"hljs-number",children:"2"}),"}, {",s.jsx(e.span,{className:"hljs-attr",children:"id"}),": ",s.jsx(e.span,{className:"hljs-number",children:"3"}),`}];\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," gebruiker = gebruikers.",s.jsx(e.span,{className:"hljs-title function_",children:"find"}),"(",s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-params",children:"u"})," =>"]})," u.",s.jsx(e.span,{className:"hljs-property",children:"id"})," === ",s.jsx(e.span,{className:"hljs-number",children:"2"}),`);\r
`,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(gebruiker);\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Output: { id: 2 }"}),`
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"some-en-every",children:[s.jsx(e.code,{children:"some()"})," en ",s.jsx(e.code,{children:"every()"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#some-en-every",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Controleert of ",s.jsx(e.em,{children:"sommige"})," of ",s.jsx(e.em,{children:"alle"})," elementen aan een voorwaarde voldoen."]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," scores = [",s.jsx(e.span,{className:"hljs-number",children:"10"}),", ",s.jsx(e.span,{className:"hljs-number",children:"20"}),", ",s.jsx(e.span,{className:"hljs-number",children:"30"}),`];\r
`,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(scores.",s.jsx(e.span,{className:"hljs-title function_",children:"some"}),"(",s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-params",children:"s"})," =>"]})," s > ",s.jsx(e.span,{className:"hljs-number",children:"25"}),")); ",s.jsx(e.span,{className:"hljs-comment",children:"// true"}),`\r
`,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(scores.",s.jsx(e.span,{className:"hljs-title function_",children:"every"}),"(",s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-params",children:"s"})," =>"]})," s > ",s.jsx(e.span,{className:"hljs-number",children:"5"}),")); ",s.jsx(e.span,{className:"hljs-comment",children:"// true"}),`
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"forof",children:[s.jsx(e.code,{children:"for...of"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forof",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Een nette manier om door lijsten en andere iterables te lopen."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," kleuren = [",s.jsx(e.span,{className:"hljs-string",children:'"rood"'}),", ",s.jsx(e.span,{className:"hljs-string",children:'"groen"'}),", ",s.jsx(e.span,{className:"hljs-string",children:'"blauw"'}),`];\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(e.span,{className:"hljs-keyword",children:"const"})," kleur ",s.jsx(e.span,{className:"hljs-keyword",children:"of"}),` kleuren) {\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(kleur);\r
}
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"forin",children:[s.jsx(e.code,{children:"for...in"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forin",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Wordt gebruikt om door de sleutel-waarde-paren van een object te lopen."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," student = { ",s.jsx(e.span,{className:"hljs-attr",children:"naam"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Alex"'}),", ",s.jsx(e.span,{className:"hljs-attr",children:"leeftijd"}),": ",s.jsx(e.span,{className:"hljs-number",children:"20"}),` };\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(e.span,{className:"hljs-keyword",children:"const"})," sleutel ",s.jsx(e.span,{className:"hljs-keyword",children:"in"}),` student) {\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(sleutel, student[sleutel]);\r
}
`]})})]})}function r(n={}){const{wrapper:e}=n.components||{};return e?s.jsx(e,{...n,children:s.jsx(a,{...n})}):a(n)}export{r as default};
