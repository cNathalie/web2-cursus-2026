import{j as s}from"./index-3BjEGx3K.js";function a(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.p,{children:`In TypeScript kun je types gebruiken om aan te geven welk soort waarde je verwacht. Dit maakt je code voorspelbaarder, overzichtelijker en helpt om fouten vroeger te vinden.\r
Hieronder vind je de belangrijkste types die je als beginner moet kennen.`}),`
`,s.jsxs(e.h2,{id:"primitive-types",children:["Primitive types",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#primitive-types",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Dit zijn de meest basale bouwstenen van TypeScript."}),`
`,s.jsxs(e.h3,{id:"number",children:[s.jsx(e.code,{children:"number"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#number",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Voor alle numerieke waarden (zowel integers als kommagetallen)."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"leeftijd"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"})," = ",s.jsx(e.span,{className:"hljs-number",children:"20"}),`;
`]})}),`
`,s.jsxs(e.h3,{id:"string",children:[s.jsx(e.code,{children:"string"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#string",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Voor tekstwaarden."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"naam"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"Nathalie"'}),`;
`]})}),`
`,s.jsxs(e.h3,{id:"boolean",children:[s.jsx(e.code,{children:"boolean"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#boolean",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Voor true of false."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"isIngelogd"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"boolean"})," = ",s.jsx(e.span,{className:"hljs-literal",children:"true"}),`;
`]})}),`
`,s.jsxs(e.h3,{id:"null--undefined",children:[s.jsx(e.code,{children:"null"})," & ",s.jsx(e.code,{children:"undefined"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#null--undefined",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Meestal gebruikt als expliciete waardes om aan te geven dat iets leeg of afwezig is."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"niets"}),": ",s.jsx(e.span,{className:"hljs-literal",children:"null"})," = ",s.jsx(e.span,{className:"hljs-literal",children:"null"}),`;\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"onbekend"}),": ",s.jsx(e.span,{className:"hljs-literal",children:"undefined"})," = ",s.jsx(e.span,{className:"hljs-literal",children:"undefined"}),`;
`]})}),`
`,s.jsxs(e.h2,{id:"arrays",children:["Arrays",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#arrays",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Je kunt aangeven wat voor soort elementen een array bevat."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"getallen"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"[] = [",s.jsx(e.span,{className:"hljs-number",children:"1"}),", ",s.jsx(e.span,{className:"hljs-number",children:"2"}),", ",s.jsx(e.span,{className:"hljs-number",children:"3"}),`];\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"namen"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),"[] = [",s.jsx(e.span,{className:"hljs-string",children:'"Anna"'}),", ",s.jsx(e.span,{className:"hljs-string",children:'"Tom"'}),`];
`]})}),`
`,s.jsx(e.p,{children:"Alternatieve syntaxis:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"scores"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Array"}),"<",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"> = [",s.jsx(e.span,{className:"hljs-number",children:"10"}),", ",s.jsx(e.span,{className:"hljs-number",children:"20"}),", ",s.jsx(e.span,{className:"hljs-number",children:"30"}),`];
`]})}),`
`,s.jsxs(e.h2,{id:"tuples",children:["Tuples",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tuples",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Een tuple is een array met een vaste lengte en vaste types per positie."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"persoon"}),": [",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),", ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"] = [",s.jsx(e.span,{className:"hljs-string",children:'"Emma"'}),", ",s.jsx(e.span,{className:"hljs-number",children:"25"}),`];
`]})}),`
`,s.jsx(e.p,{children:"Hier moet index 0 een string zijn en index 1 een number."}),`
`,s.jsxs(e.h2,{id:"objects",children:["Objects",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#objects",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Je kunt de structuur van een object vastleggen:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"student"}),": { ",s.jsx(e.span,{className:"hljs-attr",children:"naam"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),"; ",s.jsx(e.span,{className:"hljs-attr",children:"leeftijd"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"})," } = {  ",s.jsx(e.span,{className:"hljs-attr",children:"naam"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Lucas"'}),",  ",s.jsx(e.span,{className:"hljs-attr",children:"leeftijd"}),": ",s.jsx(e.span,{className:"hljs-number",children:"22"}),`};
`]})}),`
`,s.jsxs(e.h2,{id:"any",children:["any",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#any",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Dit type schakelt typechecking uit. Je kunt alles toewijzen."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"willekeurig"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"any"})," = ",s.jsx(e.span,{className:"hljs-number",children:"10"}),`;\r
willekeurig = `,s.jsx(e.span,{className:"hljs-string",children:'"nu een string"'}),`;
`]})}),`
`,s.jsxs(e.p,{children:["⚠️ Gebruik ",s.jsx(e.code,{children:"any"})," zo weinig mogelijk. Het haalt de voordelen van TypeScript weg."]}),`
`,s.jsxs(e.h2,{id:"unknown",children:["unknown",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unknown",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Lijkt op any, maar veiliger: je moet eerst controleren wat het type is."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"input"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"unknown"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"Hallo"'}),`;\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (",s.jsx(e.span,{className:"hljs-keyword",children:"typeof"})," input === ",s.jsx(e.span,{className:"hljs-string",children:'"string"'}),`) {\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(input.",s.jsx(e.span,{className:"hljs-title function_",children:"toUpperCase"}),`());\r
}
`]})}),`
`,s.jsxs(e.h2,{id:"void",children:["void",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#void",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Geeft aan dat een functie niets teruggeeft."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"logBericht"}),"(",s.jsx(e.span,{className:"hljs-params"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Hallo!"'}),`);\r
}
`]})}),`
`,s.jsxs(e.h2,{id:"never",children:["never",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#never",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Geeft aan dat een functie nooit iets teruggeeft (bijvoorbeeld bij een error of een oneindige loop)."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"fout"}),"(",s.jsx(e.span,{className:"hljs-params"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"never"}),` {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"throw"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Error"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Er ging iets mis"'}),`);\r
}
`]})}),`
`,s.jsxs(e.h2,{id:"union-types",children:["Union types",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#union-types",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Met union types kan een variabele meerdere mogelijke types hebben."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"})," | ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),`;\r
id = `,s.jsx(e.span,{className:"hljs-number",children:"100"}),`;\r
id = `,s.jsx(e.span,{className:"hljs-string",children:'"ABC123"'}),`;
`]})}),`
`,s.jsx(e.p,{children:"Heel handig wanneer een waarde flexibel mag zijn."}),`
`,s.jsxs(e.h2,{id:"literal-types",children:["Literal types",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#literal-types",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Je kunt aangeven dat een waarde precies één bepaalde waarde moet zijn."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"richting"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"links"'})," | ",s.jsx(e.span,{className:"hljs-string",children:'"rechts"'}),`;\r
richting = `,s.jsx(e.span,{className:"hljs-string",children:'"links"'}),"; ",s.jsx(e.span,{className:"hljs-comment",children:"// O"}),`\r
richting = `,s.jsx(e.span,{className:"hljs-string",children:'"beneden"'}),"; ",s.jsx(e.span,{className:"hljs-comment",children:"// Fout"}),`
`]})}),`
`,s.jsxs(e.h2,{id:"type-aliases",children:["Type aliases",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#type-aliases",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Je kunt een type een naam geven, handig voor leesbaarheid:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"type"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Student"})," = { ",s.jsx(e.span,{className:"hljs-attr",children:"naam"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),"; ",s.jsx(e.span,{className:"hljs-attr",children:"leeftijd"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),`; };
`]})}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"type"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Student"})," = {  ",s.jsx(e.span,{className:"hljs-attr",children:"naam"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),";  ",s.jsx(e.span,{className:"hljs-attr",children:"leeftijd"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),`;};\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"s1"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Student"})," = { ",s.jsx(e.span,{className:"hljs-attr",children:"naam"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Jens"'}),", ",s.jsx(e.span,{className:"hljs-attr",children:"leeftijd"}),": ",s.jsx(e.span,{className:"hljs-number",children:"21"}),` };
`]})}),`
`,s.jsxs(e.h2,{id:"enums",children:["Enums",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enums",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Enums laten je werken met benoemde waardes."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"enum"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Rol"})," {  ",s.jsx(e.span,{className:"hljs-title class_",children:"Admin"}),",  ",s.jsx(e.span,{className:"hljs-title class_",children:"Student"}),",  ",s.jsx(e.span,{className:"hljs-title class_",children:"Gast"}),`}\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"rol"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Rol"})," = ",s.jsx(e.span,{className:"hljs-title class_",children:"Rol"}),".",s.jsx(e.span,{className:"hljs-property",children:"Student"}),`;
`]})}),`
`,s.jsxs(e.h2,{id:"samenvatting",children:["Samenvatting",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#samenvatting",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"TypeScript helpt je om:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"duidelijkere structuur te geven aan je code,"}),`
`,s.jsx(e.li,{children:"fouten vroeg te detecteren,"}),`
`,s.jsx(e.li,{children:"complexere projecten beter beheersbaar te maken."}),`
`]})]})}function i(n={}){const{wrapper:e}=n.components||{};return e?s.jsx(e,{...n,children:s.jsx(a,{...n})}):a(n)}export{i as default};
