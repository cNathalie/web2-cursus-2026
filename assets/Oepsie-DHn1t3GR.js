import{j as e}from"./index-3BjEGx3K.js";const l="/web2-cursus-2026/images/js-drunk.png";function a(n){const s={blockquote:"blockquote",code:"code",hr:"hr",p:"p",pre:"pre",span:"span",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"JavaScript staat bekend om zijn flexibele (en soms verwarrende) type-conversies. Hier zijn enkele grappige en beruchte voorbeelden waar het mis kan gaan:"}),`
`,e.jsx("img",{src:l,alt:"JavaScript is drunk",style:{maxWidth:"400px",display:"block",margin:"20px auto"}}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. String + Number = String"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"11"'})," + ",e.jsx(s.span,{className:"hljs-number",children:"1"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:'// "111"'}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:'JavaScript ziet een string en een getal. Omdat de + operator ook voor string-concatenatie gebruikt wordt, zet JavaScript het getal 1 om naar een string en plakt deze achter "11". Het resultaat is dus niet 12, maar "111". Dit kan tot onverwachte resultaten leiden als je rekent met strings!'}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. Number - String = Number"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"11"'})," - ",e.jsx(s.span,{className:"hljs-number",children:"1"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// 10"}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:'Hier gebruikt JavaScript de - operator, die alleen werkt met getallen. JavaScript probeert daarom de string "11" om te zetten naar een getal. Dat lukt, dus 11 - 1 = 10. Dit werkt dus wél zoals je verwacht, in tegenstelling tot de + operator.'}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. true + true = 2"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-literal",children:"true"})," + ",e.jsx(s.span,{className:"hljs-literal",children:"true"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// 2"}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["In JavaScript wordt ",e.jsx(s.code,{children:"true"})," omgezet naar het getal 1 als je ermee rekent. Dus true + true is eigenlijk 1 + 1 = 2. Dit kan grappig zijn als je niet verwacht dat booleans als getallen worden behandeld."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"4. false == 0, maar false !== 0"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-literal",children:"false"})," == ",e.jsx(s.span,{className:"hljs-number",children:"0"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// true"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-literal",children:"false"})," === ",e.jsx(s.span,{className:"hljs-number",children:"0"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// false"}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Met ",e.jsx(s.code,{children:"=="})," vergelijkt JavaScript de waarden na type-conversie. ",e.jsx(s.code,{children:"false"})," wordt omgezet naar 0, dus de vergelijking is waar. Met ",e.jsx(s.code,{children:"==="})," vergelijkt JavaScript zonder type-conversie, dus een boolean is niet gelijk aan een getal. Dit verschil tussen == en === is een bron van veel bugs!"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"5. null + 1 = 1"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-literal",children:"null"})," + ",e.jsx(s.span,{className:"hljs-number",children:"1"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// 1"}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:'Als je null optelt bij een getal, wordt null omgezet naar 0. Dus 0 + 1 = 1. Dit is verwarrend, want je zou kunnen denken dat null "niets" betekent, maar JavaScript behandelt het als 0 in deze context.'}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"6. undefined + 1 = NaN"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-literal",children:"undefined"})," + ",e.jsx(s.span,{className:"hljs-number",children:"1"}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// NaN"}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:'undefined betekent "geen waarde". Als je undefined optelt bij een getal, kan JavaScript er geen getal van maken. Het resultaat is NaN (Not a Number). Dit kan lastig zijn als je niet doorhebt dat een variabele undefined is.'}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:'7. "5" - "2" = 3'})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"5"'})," - ",e.jsx(s.span,{className:"hljs-string",children:'"2"'}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// 3"}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Bij de - operator probeert JavaScript beide strings om te zetten naar getallen. Dat lukt, dus 5 - 2 = 3. Dit is anders dan bij de + operator, waar je een string krijgt."}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:e.jsxs(s.strong,{children:["8. [] + ",' = "[object Object]"']})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"([] + {}); ",e.jsx(s.span,{className:"hljs-comment",children:'// "[object Object]"'}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-title function_",children:"typeof"})," ([] + {})); ",e.jsx(s.span,{className:"hljs-comment",children:'// "string"'}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:'Een lege array wordt omgezet naar een lege string, een leeg object naar "[object Object]". Samen krijg je een string. Dit is verwarrend omdat je misschien een object verwacht, maar je krijgt een string terug!'}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:'9. "10" * "2" = 20'})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"10"'})," * ",e.jsx(s.span,{className:"hljs-string",children:'"2"'}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// 20"}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Bij vermenigvuldigen probeert JavaScript beide strings om te zetten naar getallen. Dat lukt, dus 10 * 2 = 20. Dit is handig, maar kan tot bugs leiden als je niet doorhebt dat je met strings werkt."}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"10. [] == ![] // true"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"([] == ![]); ",e.jsx(s.span,{className:"hljs-comment",children:"// true"}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Dit is een van de meest verwarrende JavaScript-vergelijkingen. De lege array wordt omgezet naar een lege string, en ![] is false. [] == false is true door type-conversie. Dit soort vergelijkingen zijn berucht in JavaScript!"}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:"Heb je zelf nog een leuke gevonden?"})]})}function t(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{t as default};
