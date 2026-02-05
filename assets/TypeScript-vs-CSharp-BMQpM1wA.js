import{j as s}from"./index-3BjEGx3K.js";function l(n){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.p,{children:["Hoewel ",s.jsx(e.strong,{children:"TypeScript"})," en ",s.jsx(e.strong,{children:"C#"}),` op het eerste gezicht verschillend lijken, delen ze veel ontwerpideeën. Niet toevallig,\r
want beide komen uit de stal van Microsoft. Deze gids is gemaakt voor studenten die `,s.jsx(e.strong,{children:"JavaScript"})," kennen en willen begrijpen hoe TypeScript zich verhoudt tot een klassieke ",s.jsx(e.em,{children:"statisch getypeerde"})," taal zoals C#."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"typesysteem-gradual-vs-statisch",children:["Type‑systeem: ",s.jsx(e.strong,{children:"gradual"})," vs. ",s.jsx(e.strong,{children:"statisch"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#typesysteem-gradual-vs-statisch",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"TypeScript"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.em,{children:"Gradually typed"}),": types zijn ",s.jsx(e.strong,{children:"aanbevolen"}),", niet verplicht."]}),`
`,s.jsx(e.li,{children:"Typecontrole gebeurt bij compilatie; de runtime blijft JavaScript."}),`
`,s.jsx(e.li,{children:"Je kunt probleemloos zonder expliciete types starten en later verfijnen."}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"leeftijd"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"})," = ",s.jsx(e.span,{className:"hljs-number",children:"25"}),";   ",s.jsx(e.span,{className:"hljs-comment",children:"// expliciet"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"let"})," naam = ",s.jsx(e.span,{className:"hljs-string",children:'"Sofia"'}),";          ",s.jsx(e.span,{className:"hljs-comment",children:"// type afgeleid (string)"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"flexibel"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"any"})," = ",s.jsx(e.span,{className:"hljs-number",children:"42"}),";      ",s.jsx(e.span,{className:"hljs-comment",children:"// vermijd indien mogelijk"}),`
`]})}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"C#"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Volledig statisch getypeerd: ",s.jsx(e.strong,{children:"elk"})," symbool heeft een type."]}),`
`,s.jsx(e.li,{children:"Sterke compile-time garanties; fouten worden vroeg gevangen."}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-csharp",children:[s.jsx(e.span,{className:"hljs-built_in",children:"int"})," leeftijd = ",s.jsx(e.span,{className:"hljs-number",children:"25"}),`;\r
`,s.jsx(e.span,{className:"hljs-built_in",children:"string"})," naam = ",s.jsx(e.span,{className:"hljs-string",children:'"Sofia"'}),`;\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// var kan infereren, maar het is nog steeds statisch:"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"var"})," score = ",s.jsx(e.span,{className:"hljs-number",children:"99"}),"; ",s.jsx(e.span,{className:"hljs-comment",children:"// score is int"}),`
`]})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Conclusie:"})," C# ",s.jsx(e.strong,{children:"dwingt"})," types af; TypeScript ",s.jsx(e.strong,{children:"stimuleert"})," types maar verplicht ze niet."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"uitvoeringsplatform",children:["Uitvoeringsplatform",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#uitvoeringsplatform",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"TypeScript"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Compileert naar ",s.jsx(e.strong,{children:"JavaScript"}),"."]}),`
`,s.jsxs(e.li,{children:["Draait in de ",s.jsx(e.strong,{children:"browser"})," en op ",s.jsx(e.strong,{children:"Node.js"}),"."]}),`
`,s.jsxs(e.li,{children:["Voornamelijk voor ",s.jsx(e.strong,{children:"web/front-end"}),", maar ook backend met Node."]}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"C#"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Draait op ",s.jsx(e.strong,{children:".NET"})," (Core/5+)."]}),`
`,s.jsxs(e.li,{children:["Geschikt voor ",s.jsx(e.strong,{children:"backends"})," (ASP.NET), ",s.jsx(e.strong,{children:"desktop"})," (WPF/WinUI), ",s.jsx(e.strong,{children:"games"})," (Unity), ",s.jsx(e.strong,{children:"cloud"}),", ",s.jsx(e.strong,{children:"CLI-tools"}),"."]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Conclusie:"})," TypeScript richt zich op het JavaScript‑ecosysteem; C# bedient een breed spectrum van applicaties op .NET."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"klassen-interfaces-en-oopmodel",children:["Klassen, interfaces en OOP‑model",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#klassen-interfaces-en-oopmodel",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Beide talen ondersteunen ",s.jsx(e.strong,{children:"classes"}),", ",s.jsx(e.strong,{children:"interfaces"}),", ",s.jsx(e.strong,{children:"inheritance"})," en ",s.jsx(e.strong,{children:"generics"}),", maar de diepgang verschilt."]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"TypeScript"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Gebaseerd op ECMAScript‑classes."}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Interfaces"})," bestaan alleen tijdens het ",s.jsx(e.em,{children:"typen"})," (verdwijnen na compilatie)."]}),`
`,s.jsx(e.li,{children:"OOP is minder strikt."}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Student"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"naam"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"leeftijd"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Persoon"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"implements"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Student"}),` {\r
  `,s.jsx(e.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsxs(e.span,{className:"hljs-params",children:[s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-attr",children:"naam"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),", ",s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-attr",children:"leeftijd"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"})]}),`) {}\r
}
`]})}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"C#"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Volwaardig OOP‑model met toegangsniveaus, abstracte klassen, overloading, properties, events, enz."}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-csharp",children:[s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(e.span,{className:"hljs-title",children:"IStudent"}),` {\r
    `,s.jsx(e.span,{className:"hljs-built_in",children:"string"})," Naam { ",s.jsx(e.span,{className:"hljs-keyword",children:"get"}),`; }\r
    `,s.jsx(e.span,{className:"hljs-built_in",children:"int"})," Leeftijd { ",s.jsx(e.span,{className:"hljs-keyword",children:"get"}),`; }\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title",children:"Persoon"})," : ",s.jsx(e.span,{className:"hljs-title",children:"IStudent"}),` {\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-built_in",children:"string"})," Naam { ",s.jsx(e.span,{className:"hljs-keyword",children:"get"}),`; }\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-built_in",children:"int"})," Leeftijd { ",s.jsx(e.span,{className:"hljs-keyword",children:"get"}),`; }\r
\r
    `,s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-title",children:"Persoon"}),"(",s.jsxs(e.span,{className:"hljs-params",children:[s.jsx(e.span,{className:"hljs-built_in",children:"string"})," naam, ",s.jsx(e.span,{className:"hljs-built_in",children:"int"})," leeftijd"]}),")"]}),` {\r
        Naam = naam;\r
        Leeftijd = leeftijd;\r
    }\r
}
`]})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Conclusie:"})," C# biedt een ",s.jsx(e.strong,{children:"volwassener en strenger"})," OOP‑model; TypeScript is ",s.jsx(e.strong,{children:"lichter"})," en JS‑vriendelijk."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"compileertijd-vs-runtime",children:["Compileertijd vs. runtime",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compileertijd-vs-runtime",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"TypeScript"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Types verdwijnen na compilatie; output is ",s.jsx(e.strong,{children:"zuiver JavaScript"}),"."]}),`
`,s.jsx(e.li,{children:"Niet alle fouten zijn op compile‑time detecteerbaar (runtime blijft dynamisch)."}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"C#"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Strikte compile‑time checks."}),`
`,s.jsx(e.li,{children:"IL + JIT (of AOT) zorgen voor voorspelbare runtime‑gedragingen."}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Conclusie:"})," C# geeft ",s.jsx(e.strong,{children:"sterkere garanties"})," bij compileren; TypeScript voegt ",s.jsx(e.strong,{children:"veiligheid"})," toe bovenop JS, maar is niet waterdicht."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"generics",children:["Generics",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#generics",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"TypeScript"})}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"function"})," identiek<T>(",s.jsx(e.span,{className:"hljs-attr",children:"waarde"}),`: T): T {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"return"}),` waarde;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"type"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Box"}),"<T> = { ",s.jsx(e.span,{className:"hljs-attr",children:"value"}),`: T };\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(e.span,{className:"hljs-attr",children:"b"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Box"}),"<",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"> = { ",s.jsx(e.span,{className:"hljs-attr",children:"value"}),": ",s.jsx(e.span,{className:"hljs-number",children:"3"}),` };
`]})}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"C#"})}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-csharp",children:[s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-keyword",children:"public"})," T ",s.jsx(e.span,{className:"hljs-title",children:"Identiek"}),"<",s.jsx(e.span,{className:"hljs-title",children:"T"}),">(",s.jsx(e.span,{className:"hljs-params",children:"T waarde"}),")"]}),` => waarde;\r
\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title",children:"Box"}),"<",s.jsx(e.span,{className:"hljs-title",children:"T"}),`> {\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"public"})," T Value { ",s.jsx(e.span,{className:"hljs-keyword",children:"get"}),"; ",s.jsx(e.span,{className:"hljs-keyword",children:"set"}),`; }\r
}\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"var"})," b = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," Box<",s.jsx(e.span,{className:"hljs-built_in",children:"int"}),"> { Value = ",s.jsx(e.span,{className:"hljs-number",children:"3"}),` };
`]})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Conclusie:"})," De syntaxis is vergelijkbaar; ",s.jsx(e.strong,{children:"C#"})," heeft doorgaans ",s.jsx(e.strong,{children:"rijkere constraints"})," en tooling rondom generics."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"asynchroon-programmeren",children:["Asynchroon programmeren",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#asynchroon-programmeren",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"TypeScript / JavaScript"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Gebaseerd op ",s.jsx(e.strong,{children:"Promises"}),"; ",s.jsx(e.code,{children:"async/await"})," is syntactische suiker."]}),`
`,s.jsx(e.li,{children:"Single‑threaded event loop; voor parallelle workloads gebruik je web workers/Node workers."}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-keyword",children:"async"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"haalData"}),"(",s.jsx(e.span,{className:"hljs-params"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," res = ",s.jsx(e.span,{className:"hljs-keyword",children:"await"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"/api/data"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," json = ",s.jsx(e.span,{className:"hljs-keyword",children:"await"})," res.",s.jsx(e.span,{className:"hljs-title function_",children:"json"}),`();\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"return"}),` json;\r
}
`]})}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"C#"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Task"}),"/",s.jsx(e.code,{children:"ValueTask"})," ecosystem; ",s.jsx(e.code,{children:"async/await"})," met threadpool‑integratie."]}),`
`,s.jsxs(e.li,{children:["Rijke mogelijkheden voor parallellisme (",s.jsx(e.code,{children:"Parallel"}),", ",s.jsx(e.code,{children:"TPL"}),", ",s.jsx(e.code,{children:"IAsyncEnumerable"}),")."]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-csharp",children:[s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"async"})," Task<",s.jsx(e.span,{className:"hljs-built_in",children:"object"}),"> ",s.jsx(e.span,{className:"hljs-title",children:"HaalDataAsync"}),"()"]}),` {\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"var"})," res = ",s.jsx(e.span,{className:"hljs-keyword",children:"await"})," httpClient.GetAsync(",s.jsx(e.span,{className:"hljs-string",children:'"/api/data"'}),`);\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"await"})," res.Content.ReadAsAsync<",s.jsx(e.span,{className:"hljs-built_in",children:"object"}),`>();\r
}
`]})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Conclusie:"})," Concepten lijken op elkaar, maar ",s.jsx(e.strong,{children:"C#"})," heeft ",s.jsx(e.strong,{children:"uitgebreidere"})," ondersteuning voor multithreading en parallelle patronen."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"tooling-en-ecosysteem",children:["Tooling en ecosysteem",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tooling-en-ecosysteem",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"TypeScript"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Uitstekende web‑tooling (VS Code), ",s.jsx(e.strong,{children:"npm"}),"‑ecosysteem."]}),`
`,s.jsx(e.li,{children:"Sterk in front‑end (React, Vue, Angular) en Node.js backends."}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"C#"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Enterprise‑tooling (Visual Studio, Rider), ",s.jsx(e.strong,{children:"NuGet"}),"‑ecosysteem."]}),`
`,s.jsx(e.li,{children:"Sterk in back‑end, cloud (Azure), desktop en games (Unity)."}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Conclusie:"})," TypeScript blinkt uit in ",s.jsx(e.strong,{children:"webproductiviteit"}),"; C# is ",s.jsx(e.strong,{children:"breed inzetbaar"})," in professionele omgevingen."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"minicheatsheet",children:["Mini‑cheatsheet",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#minicheatsheet",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.h3,{id:"typeinferenz",children:["Type‑inferenz",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#typeinferenz",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-comment",children:"// TypeScript"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," x = ",s.jsx(e.span,{className:"hljs-number",children:"42"}),";   ",s.jsx(e.span,{className:"hljs-comment",children:"// number"}),`
`]})}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-csharp",children:[s.jsx(e.span,{className:"hljs-comment",children:"// C#"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"var"})," x = ",s.jsx(e.span,{className:"hljs-number",children:"42"}),";     ",s.jsx(e.span,{className:"hljs-comment",children:"// int (statisch afgeleid)"}),`
`]})}),`
`,s.jsxs(e.h3,{id:"union--discriminated-unions",children:["Union / discriminated unions",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#union--discriminated-unions",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-comment",children:"// TypeScript: unions"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"type"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Result"})," = { ",s.jsx(e.span,{className:"hljs-attr",children:"ok"}),": ",s.jsx(e.span,{className:"hljs-literal",children:"true"}),"; ",s.jsx(e.span,{className:"hljs-attr",children:"value"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"})," } | { ",s.jsx(e.span,{className:"hljs-attr",children:"ok"}),": ",s.jsx(e.span,{className:"hljs-literal",children:"false"}),"; ",s.jsx(e.span,{className:"hljs-attr",children:"error"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),` };
`]})}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-csharp",children:[s.jsx(e.span,{className:"hljs-comment",children:"// C#: pattern matching met records/structs (geen native unions, wel alternatieven)"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"abstract"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"record"})," ",s.jsx(e.span,{className:"hljs-title",children:"Result"}),`;\r
`,s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"record"})," ",s.jsx(e.span,{className:"hljs-title",children:"Ok"}),"(",s.jsxs(e.span,{className:"hljs-params",children:[s.jsx(e.span,{className:"hljs-built_in",children:"string"})," Value"]}),") : Result"]}),`;\r
`,s.jsxs(e.span,{className:"hljs-function",children:[s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"record"})," ",s.jsx(e.span,{className:"hljs-title",children:"Err"}),"(",s.jsxs(e.span,{className:"hljs-params",children:[s.jsx(e.span,{className:"hljs-built_in",children:"string"})," Error"]}),") : Result"]}),`;
`]})}),`
`,s.jsxs(e.h3,{id:"nullveiligheid",children:["Null‑veiligheid",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nullveiligheid",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ts",children:[s.jsx(e.span,{className:"hljs-comment",children:"// TypeScript: strictNullChecks aanzetten"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"let"})," ",s.jsx(e.span,{className:"hljs-attr",children:"naam"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"})," | ",s.jsx(e.span,{className:"hljs-literal",children:"null"})," = ",s.jsx(e.span,{className:"hljs-literal",children:"null"}),`;
`]})}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-csharp",children:[s.jsx(e.span,{className:"hljs-meta",children:"#nullable enable"}),`\r
`,s.jsx(e.span,{className:"hljs-built_in",children:"string"}),"? naam = ",s.jsx(e.span,{className:"hljs-literal",children:"null"}),`;
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"wat-betekent-dit-voor-jou-als-student",children:["Wat betekent dit voor jou als student?",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wat-betekent-dit-voor-jou-als-student",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Kom je van ",s.jsx(e.strong,{children:"JavaScript"}),"? Dan is ",s.jsx(e.strong,{children:"TypeScript"})," een ",s.jsx(e.strong,{children:"logische upgrade"}),": je behoudt de flexibiliteit, maar met extra veiligheid."]}),`
`,s.jsxs(e.li,{children:["Wil je ",s.jsx(e.strong,{children:"klassieke OOP"})," en ",s.jsx(e.strong,{children:"sterke compile‑time garanties"}),"? Dan leert ",s.jsx(e.strong,{children:"C#"})," je discipline en schaalbaarheid."]}),`
`,s.jsxs(e.li,{children:["Concepten zoals ",s.jsx(e.strong,{children:"interfaces, generics, classes en async"})," vertalen vlot tussen beide talen: leren in de ene helpt je in de andere."]}),`
`]})]})}function r(n={}){const{wrapper:e}=n.components||{};return e?s.jsx(e,{...n,children:s.jsx(l,{...n})}):l(n)}export{r as default};
