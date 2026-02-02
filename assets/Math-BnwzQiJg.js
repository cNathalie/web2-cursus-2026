import{j as e}from"./index-DEXPSZA7.js";function a(s){const n={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:`Het Math object is een ingebouwd object in JavaScript dat je toelaat om wiskundige operaties\r
uit te voeren. Het object bevat verschillende methodes en eigenschappen die je kan gebruiken\r
om berekeningen uit te voeren. We zetten er enkele in de kijker:`}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"random-getallen",children:["Random getallen",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#random-getallen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Met het Math object kan je random getallen genereren. Dit kan je doen met de ",e.jsx(n.code,{children:"Math.random()"})," methode. Deze methode geeft een willekeurig getal tussen 0 en 1 terug."]}),`
`,e.jsxs(n.p,{children:["Door het resultaat van ",e.jsx(n.code,{children:"Math.random()"})," verder te manipuleren, kan je random getallen genereren binnen een bepaald bereik."]}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Een random getal tussen 0 en 1"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," random1 = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"random"}),`();\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(random1);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Een random getal tussen 0 en 10"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," random2 = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"random"}),"() * ",e.jsx(n.span,{className:"hljs-number",children:"10"}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(random2);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Een random getal tussen 5 en 50"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," random3 = ",e.jsx(n.span,{className:"hljs-number",children:"5"})," + ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"random"}),"() * ",e.jsx(n.span,{className:"hljs-number",children:"50"}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(random3);
`]})}),`
`,e.jsxs(n.h2,{id:"afronden-naar-beneden",children:["Afronden naar beneden",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#afronden-naar-beneden",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Je kan getallen afronden naar beneden met de Math.floor() methode. Deze methode rondt een getal af naar het dichtsbijzijnde gehele getal dat kleiner is dan of gelijk is aan het gegeven getal."}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Afronden naar beneden van een positief getal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," number = ",e.jsx(n.span,{className:"hljs-number",children:"12.34"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," rounded = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"floor"}),`(number);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(rounded);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Afronden naar beneden van een negatief getal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," negativeNumber = -",e.jsx(n.span,{className:"hljs-number",children:"12.34"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," negativeRounded = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"floor"}),`(negativeNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(negativeRounded);
`]})}),`
`,e.jsxs(n.h2,{id:"afronden-naar-boven",children:["Afronden naar boven",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#afronden-naar-boven",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Je kan getallen afronden naar boven met de Math.ceil() methode. Deze methode rondt een getal af naar het dichtsbijzijnde gehele getal dat groter is dan of gelijk is aan het gegeven getal."}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Afronden naar boven van een positief getal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," number = ",e.jsx(n.span,{className:"hljs-number",children:"12.34"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," rounded = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"ceil"}),`(number);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(rounded);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Afronden naar boven van een negatief getal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," negativeNumber = -",e.jsx(n.span,{className:"hljs-number",children:"12.34"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," negativeRounded = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"ceil"}),`(negativeNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(negativeRounded);
`]})}),`
`,e.jsxs(n.h2,{id:"afronden-naar-het-dichtstbijzijnde-gehele-getal",children:["Afronden naar het dichtstbijzijnde gehele getal",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#afronden-naar-het-dichtstbijzijnde-gehele-getal",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Je kan getallen afronden naar het dichtstbijzijnde gehele getal met de Math.round() methode. Deze methode rondt een getal af naar het dichtstbijzijnde gehele getal."}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Afronden naar het dichtstbijzijnde gehele getal van een positief getal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," number = ",e.jsx(n.span,{className:"hljs-number",children:"12.34"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," rounded = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"round"}),`(number);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(rounded);\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," number2 = ",e.jsx(n.span,{className:"hljs-number",children:"12.7"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," rounded2 = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"round"}),`(number2);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(rounded2);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Afronden naar het dichtstbijzijnde gehele getal van een negatief getal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," negativeNumber = -",e.jsx(n.span,{className:"hljs-number",children:"12.34"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," negativeRounded = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"round"}),`(negativeNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(negativeRounded);\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," negativeNumber2 = -",e.jsx(n.span,{className:"hljs-number",children:"12.7"}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," negativeRounded2 = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"round"}),`(negativeNumber2);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(negativeRounded2);
`]})}),`
`,e.jsx(n.p,{children:`De Math.round() methode rondt af naar het dichtstbijzijnde gehele getal. Als het getal 0.5 of hoger is, wordt er naar boven afgerond.\r
Als het getal lager is dan 0.5, wordt er naar beneden afgerond.`}),`
`,e.jsxs(n.h2,{id:"maximum-en-minimum",children:["Maximum en minimum",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#maximum-en-minimum",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Je kan het maximum en minimum getal van een reeks getallen bepalen met de Math.max() en Math.min() methodes."}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Maximum getal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," max = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"max"}),"(",e.jsx(n.span,{className:"hljs-number",children:"1"}),", ",e.jsx(n.span,{className:"hljs-number",children:"2"}),", ",e.jsx(n.span,{className:"hljs-number",children:"3"}),", ",e.jsx(n.span,{className:"hljs-number",children:"4"}),", ",e.jsx(n.span,{className:"hljs-number",children:"5"}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(max);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Minimum getal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," min = ",e.jsx(n.span,{className:"hljs-title class_",children:"Math"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"min"}),"(",e.jsx(n.span,{className:"hljs-number",children:"1"}),", ",e.jsx(n.span,{className:"hljs-number",children:"2"}),", ",e.jsx(n.span,{className:"hljs-number",children:"3"}),", ",e.jsx(n.span,{className:"hljs-number",children:"4"}),", ",e.jsx(n.span,{className:"hljs-number",children:"5"}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(min);
`]})}),`
`,e.jsxs(n.h2,{id:"overzicht-van-alle-math-functies",children:["Overzicht van alle Math functies",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overzicht-van-alle-math-functies",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Hieronder vind je een overzicht van de belangrijkste en meest gebruikte functies van het Math object in JavaScript:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.abs(x)"})," — Absolute waarde"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.acos(x)"})," — Arc-cosinus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.acosh(x)"})," — Inverse hyperbolische cosinus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.asin(x)"})," — Arc-sinus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.asinh(x)"})," — Inverse hyperbolische sinus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.atan(x)"})," — Arc-tangens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.atan2(y, x)"})," — Arc-tangens van de quotiënt van zijn argumenten"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.atanh(x)"})," — Inverse hyperbolische tangens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.cbrt(x)"})," — Derde-machtswortel"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.ceil(x)"})," — Afronden naar boven"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.clz32(x)"})," — Aantal leidende nullen in 32-bits binaire representatie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.cos(x)"})," — Cosinus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.cosh(x)"})," — Hyperbolische cosinus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.exp(x)"})," — Exponentiële functie (e^x)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.expm1(x)"})," — e^x - 1"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.floor(x)"})," — Afronden naar beneden"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.fround(x)"})," — Rondt af naar 32-bits float"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.hypot(...args)"})," — Vierkantswortel van de som van kwadraten"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.imul(a, b)"})," — 32-bits gehele getallen vermenigvuldigen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.log(x)"})," — Natuurlijke logaritme"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.log10(x)"})," — Logaritme basis 10"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.log1p(x)"})," — Natuurlijke logaritme van 1 + x"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.log2(x)"})," — Logaritme basis 2"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.max(...args)"})," — Grootste waarde"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.min(...args)"})," — Kleinste waarde"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.pow(x, y)"})," — Macht"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.random()"})," — Willekeurig getal tussen 0 en 1"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.round(x)"})," — Afronden naar dichtstbijzijnde geheel getal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.sign(x)"})," — Voorteken van een getal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.sin(x)"})," — Sinus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.sinh(x)"})," — Hyperbolische sinus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.sqrt(x)"})," — Vierkantswortel"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.tan(x)"})," — Tangens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.tanh(x)"})," — Hyperbolische tangens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.trunc(x)"})," — Verwijdert het decimale deel"]}),`
`]}),`
`,e.jsx(n.p,{children:"Daarnaast zijn er ook enkele handige constanten:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.E"})," — Euler’s getal (≈2.718)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.PI"})," — Pi (≈3.14159)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.LN2"})," — Natuurlijke logaritme van 2"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.LN10"})," — Natuurlijke logaritme van 10"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.LOG2E"})," — Logaritme basis 2 van e"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.LOG10E"})," — Logaritme basis 10 van e"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.SQRT1_2"})," — Vierkantswortel van 1/2"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Math.SQRT2"})," — Vierkantswortel van 2"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Voor een volledig overzicht zie de ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math",children:"MDN Math documentatie"}),"."]})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{r as default};
