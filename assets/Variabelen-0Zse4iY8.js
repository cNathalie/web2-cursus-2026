import{j as e}from"./index-C0jUBqcl.js";const i="/web2-cursus-2026/images/var-in-prison.jpg";function r(a){const n={a:"a",br:"br",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"inleiding",children:["Inleiding",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#inleiding",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["JavaScript is een programmeertaal die gebruik maakt van variabelen.",e.jsx(n.br,{}),`
`,"Een variabele is een container waarin je gegevens kan opslaan. Deze gegevens kunnen van verschillende types zijn, zoals een getal, een tekst of een boolean."]}),`
`,e.jsx(n.p,{children:"JavaScript is een dynamisch getypeerde taal, wat betekent dat je niet moet aangeven welk type gegevens je in een variabele zal opslaan. JavaScript zal automatisch het type van de gegevens bepalen."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"declareren-van-een-variabele-met-let",children:["Declareren van een variabele met ",e.jsx(n.code,{children:"let"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#declareren-van-een-variabele-met-let",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Om een variabele te declareren, gebruik je het keyword ",e.jsx(n.code,{children:"let"}),". Daarna geef je de variabele een naam en ken je er een waarde aan toe. Bijvoorbeeld:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:"`let` x = 5;\n"})}),`
`,e.jsx(n.p,{children:`Deze code maakt een variabele x aan en kent er de waarde 5 aan toe.\r
Je kan ook een variabele declareren zonder er een waarde aan toe te kennen.\r
Bijvoorbeeld:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:"`let` y;\n"})}),`
`,e.jsx(n.p,{children:"Deze code maakt een variabele y aan zonder er een waarde aan toe te kennen. De waarde van y is nu undefined."}),`
`,e.jsx(n.p,{children:"Je kan de waarde van een variabele ook wijzigen. Bijvoorbeeld:"}),`
`,e.jsxs(n.h4,{id:"probeer-het-zelf",children:["Probeer het zelf",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#probeer-het-zelf",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Open in dit venster je developer tools Console en probeer de volgende code uit:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Het declareren met een waarde en aanpassen van de waarde én type:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`\`let\` x = 5;\r
console.log(x);\r
\r
x = 10;\r
console.log(x);\r
\r
x = "Hello";\r
console.log(x);
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Het declareren zonder waarde, geeft undefined terug:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:"`let` y;\r\nconsole.log(y);\n"})}),`
`,e.jsxs(n.h2,{id:"declareren-van-een-variabele-met-const",children:["Declareren van een variabele met ",e.jsx(n.code,{children:"const"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#declareren-van-een-variabele-met-const",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Naast variabelen kan je ook constanten declareren. Een constante is een variabele waarvan de waarde niet kan veranderen. Om een constante te declareren, gebruik je het keyword ",e.jsx(n.code,{children:"const"}),"."]}),`
`,e.jsx(n.p,{children:"Bijvoorbeeld:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:"`const` PI = 3.14;\n"})}),`
`,e.jsx(n.p,{children:"Deze code maakt een constante PI aan en kent er de waarde 3.14 aan toe. Je kan de waarde van een constante niet wijzigen."}),`
`,e.jsx(n.p,{children:"Bijvoorbeeld:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const PI = 3.14;\r
PI = 3.14159;
`})}),`
`,e.jsx(n.p,{children:"Deze code zal een foutmelding geven omdat je de waarde van een constante niet kan wijzigen."}),`
`,e.jsxs(n.h2,{id:"declareren-van-een-variabele-met-var",children:["Declareren van een variabele met ",e.jsx(n.code,{children:"var"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#declareren-van-een-variabele-met-var",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Voor de introductie van ES6 (ECMAScript 2015) was het gebruikelijk om variabelen te declareren met het keyword ",e.jsx(n.code,{children:"var"}),". Het gebruik van v",e.jsx(n.code,{children:"var"}),"ar is echter niet meer aangeraden. Het is beter om ",e.jsx(n.code,{children:"let"})," en ",e.jsx(n.code,{children:"const"})," te gebruiken. Het gebruik van ",e.jsx(n.code,{children:"var"}),` kan leiden tot onverwachte resultaten.\r
Bijvoorbeeld:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`var a = 5;\r
console.log(a);\r
\r
var a = 10;\r
console.log(a);
`})}),`
`,e.jsxs(n.p,{children:["Deze code zal geen foutmelding geven, maar het is beter om ",e.jsx(n.code,{children:"let"})," of ",e.jsx(n.code,{children:"const"})," te gebruiken."]}),`
`,e.jsxs(n.h4,{id:"waarom-gebruik-je-beter-geen-var",children:["Waarom gebruik je beter geen ",e.jsx(n.code,{children:"var"}),"?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#waarom-gebruik-je-beter-geen-var",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Declaraties met ",e.jsx(n.code,{children:"var"}),` worden gehoist. Dit betekent dat de declaratie naar boven wordt verplaatst. Dit kan leiden tot onverwachte resultaten.\r
Declaraties met `,e.jsx(n.code,{children:"var"}),` hebben geen block scope. Dit betekent dat de variabele overal in de functie beschikbaar is.\r
Wanneer je dus in een functie een variabele declareert met `,e.jsx(n.code,{children:"var"}),", is deze variabele overal in de functie beschikbaar, zelfs voor de declaratie. Ergens anders in de code kan je deze variabele ook gebruiken, en dus aanpassen. Dit betekent dat je de waarde van de variabele kan aanpassen, zelfs voor de declaratie. Dan kan je onverwachte resultaten krijgen. Of je kan per ongeluk een variabele overschrijven."]}),`
`,e.jsx(n.p,{children:"Zo kan je ook name clashes krijgen. Dit betekent dat je per ongeluk een variabele kan overschrijven die al bestaat."}),`
`,e.jsx(n.p,{children:"Bijvoorbeeld:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`var a = 5;\r
\r
function example() {\r
  var a = 10;\r
  console.log(a);\r
}\r
\r
example();\r
\r
console.log(a);
`})}),`
`,e.jsxs(n.p,{children:["In dit voorbeeld zal de eerste ",e.jsx(n.code,{children:"console.log(a)"})," in de functie ",e.jsx(n.code,{children:"example"})," de waarde 10 weergeven, terwijl de tweede ",e.jsx(n.code,{children:"console.log(a)"})," buiten de functie de waarde 5 weergeeft. Dit kan verwarrend zijn en leiden tot bugs in je code. Daarom is het beter om ",e.jsx(n.code,{children:"let"})," en ",e.jsx(n.code,{children:"const"})," te gebruiken."]}),`
`,e.jsxs(n.p,{children:[`Belangrijk!\r
Het is dus `,e.jsx(n.strong,{children:"best practice"})," om ",e.jsx(n.strong,{children:"nooit"})," ",e.jsx(n.code,{children:"var"}),` te gebruiken.\r
We spreken dan ook af om in deze cursus vanaf nu `,e.jsx(n.strong,{children:"NOOIT"})," meer ",e.jsx(n.code,{children:"var"}),` te gebruiken.\r
Wie in opdrachten of evaluaties toch `,e.jsx(n.code,{children:"var"})," gebruikt, zal ",e.jsx(n.strong,{children:"punten verliezen"}),"!"]}),`
`,e.jsxs(n.p,{children:["Gebruik ",e.jsx(n.code,{children:"let"})," en ",e.jsx(n.code,{children:"const"})," in plaats van ",e.jsx(n.code,{children:"var"}),"."]}),`
`,e.jsxs(n.p,{children:["Het is daarnaast ook aangeraden om in eerste instantie ",e.jsx(n.code,{children:"const"})," te gebruiken. Wanneer je zeker weet dat de waarde van de variabele zal veranderen, kan je de declaratie nadien nog aanpassen naar ",e.jsx(n.code,{children:"let"}),". Zo vermijd je onverwachte resultaten en bugs in je code."]}),`
`,e.jsx("img",{src:i,alt:"Var in Prison",className:"img-fluid my-3"})]})}function s(a={}){const{wrapper:n}=a.components||{};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}export{s as default};
