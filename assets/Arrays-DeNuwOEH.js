import{j as e}from"./index-DEXPSZA7.js";const l="/web2-cursus-2026/images/zero-based-fun.png";function a(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Arrays zijn geordende veramelingen van elementen."}),`
`,e.jsx(n.p,{children:"De elementen mogen in JavaScript van een verschillend type zijn."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"array-declareren",children:["Array declareren",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#array-declareren",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Om een array te declareren, gebruik je de volgende syntax:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Een lege array"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` emptyArray = [];\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Een array met waardes"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," fruits = [",e.jsx(n.span,{className:"hljs-string",children:'"apple"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"banana"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"orange"'}),`];
`]})}),`
`,e.jsx(n.p,{children:"Je kan ook een array declareren met de Array constructor:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," array = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"Array"}),`();\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," fruits = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"Array"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"apple"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"banana"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"orange"'}),`);
`]})}),`
`,e.jsxs(n.p,{children:["JavaScript arrays zijn ",e.jsx(n.strong,{children:"dynamisch"}),". Dit betekend dat je bij het declareren geen grootte hoeft mee te geven en dat de grootte van een array kan veranderen nadat deze is gedeclareerd. Ze kunnen dus groeien en krimpen."]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," fruits = [",e.jsx(n.span,{className:"hljs-string",children:'"apple"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"banana"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"orange"'}),`];\r
fruits.`,e.jsx(n.span,{className:"hljs-title function_",children:"push"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"pear"'}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(fruits); ",e.jsx(n.span,{className:"hljs-comment",children:"// ['apple', 'banana', 'orange', 'pear']"}),`
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"index",children:["Index",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#index",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"De elementen in een array worden geïndexeerd. De index van een element is een numerieke waarde die de positie van het element in de array aangeeft."}),`
`,e.jsx(n.p,{children:"De index van een array begint ALTIJD bij 0. Dit betekent dat het eerste element in een array de index 0 heeft, het tweede element de index 1, enzovoort."}),`
`,e.jsxs(n.p,{children:["Index is niet hetzelfde als ",e.jsx(n.code,{children:"length"}),"!"]}),`
`,e.jsx("img",{src:l,alt:"Zero based fun",className:"img-fluid my-3"}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"methodes-voor-arrays",children:["Methodes voor arrays",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methodes-voor-arrays",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"JavaScript arrays hebben verschillende methodes die je kan gebruiken om elementen toe te voegen, te verwijderen, te sorteren, te filteren, enzovoort."}),`
`,e.jsx(n.p,{children:"Hier zijn enkele van de meest gebruikte array methodes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"length"}),": geeft het aantal elementen in de array terug"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"indexOf"}),": geeft de index van een element terug"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"concat"}),": voegt twee arrays samen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reverse"}),": draait de volgorde van de elementen om"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sort"}),": sorteert de elementen van de array"]}),`
`]}),`
`,e.jsx(n.p,{children:"Zo gebruik je ze op een array:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," fruits = [",e.jsx(n.span,{className:"hljs-string",children:'"apple"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"banana"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"orange"'}),`];\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Vraag de lengte op = het aantal elementen in de array"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(fruits.",e.jsx(n.span,{className:"hljs-property",children:"length"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"//Vraag de index van een bepaald element op"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(fruits.",e.jsx(n.span,{className:"hljs-title function_",children:"indexOf"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"banana"'}),`));\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," vegetables = [",e.jsx(n.span,{className:"hljs-string",children:'"carrot"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"tomato"'}),`];\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Voeg fruit en groenten samen in één array"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," food = fruits.",e.jsx(n.span,{className:"hljs-title function_",children:"concat"}),`(vegetables);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(food);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Draai de volgorde van de elementen om"}),`\r
food.`,e.jsx(n.span,{className:"hljs-title function_",children:"reverse"}),`();\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(food);
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"stack",children:["Stack",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stack",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Een stack is een datastructuur waarin elementen worden toegevoegd en verwijderd volgens het Last In First Out (LIFO) principe. Dit betekent dat het laatste element dat aan de stack wordt toegevoegd, het eerste element is dat wordt verwijderd."}),`
`,e.jsxs(n.p,{children:["Je kan een stack implementeren met een array. De ",e.jsx(n.code,{children:"push()"})," methode voegt een element toe aan het einde van de array en de ",e.jsx(n.code,{children:"pop()"})," methode verwijdert het laatste element van de array."]}),`
`,e.jsx(n.p,{children:"Dit zijn alle stack methodes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"push()"}),": voegt een element toe aan het einde van de array"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pop()"}),": verwijdert het laatste element van de array en returnt het"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"peek()"}),": geeft het laatste element van de array terug zonder het te verwijderen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isEmpty()"}),": controleert of de stack leeg is"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"size()"}),": geeft het aantal elementen in de stack terug"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"shift()"}),": verwijdert het eerste element van de array en returnt het"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unshift()"}),": voegt een element toe aan het begin van de array en returnt de nieuwe lengte van de array"]}),`
`]}),`
`,e.jsx(n.p,{children:"Zo gebruik je ze op een array:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` stack = [];\r
stack.`,e.jsx(n.span,{className:"hljs-title function_",children:"push"}),"(",e.jsx(n.span,{className:"hljs-number",children:"1"}),`);\r
stack.`,e.jsx(n.span,{className:"hljs-title function_",children:"push"}),"(",e.jsx(n.span,{className:"hljs-number",children:"2"}),`);\r
stack.`,e.jsx(n.span,{className:"hljs-title function_",children:"push"}),"(",e.jsx(n.span,{className:"hljs-number",children:"3"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(stack); ",e.jsx(n.span,{className:"hljs-comment",children:"// [1, 2, 3]"}),`\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," last = stack.",e.jsx(n.span,{className:"hljs-title function_",children:"pop"}),`();\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(last); ",e.jsx(n.span,{className:"hljs-comment",children:"// 3"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(stack); ",e.jsx(n.span,{className:"hljs-comment",children:"// [1, 2]"}),`\r
\r
stack.`,e.jsx(n.span,{className:"hljs-title function_",children:"push"}),"(",e.jsx(n.span,{className:"hljs-number",children:"4"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(stack); ",e.jsx(n.span,{className:"hljs-comment",children:"// [1, 2, 4]"}),`\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"let"})," index = ",e.jsx(n.span,{className:"hljs-number",children:"1"}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(stack[index]); ",e.jsx(n.span,{className:"hljs-comment",children:"// 2"}),`\r
\r
index = `,e.jsx(n.span,{className:"hljs-number",children:"3"}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(stack[index]); ",e.jsx(n.span,{className:"hljs-comment",children:"// undefined"}),`\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(stack[stack.",e.jsx(n.span,{className:"hljs-property",children:"length"})," - ",e.jsx(n.span,{className:"hljs-number",children:"1"}),"]); ",e.jsx(n.span,{className:"hljs-comment",children:"// 2"}),`\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," newLength = stack.",e.jsx(n.span,{className:"hljs-title function_",children:"unshift"}),"(",e.jsx(n.span,{className:"hljs-number",children:"0"}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(newLength); ",e.jsx(n.span,{className:"hljs-comment",children:"// 4"}),`\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(stack); ",e.jsx(n.span,{className:"hljs-comment",children:"// [0, 1, 2, 4]"}),`\r
\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," first = stack.",e.jsx(n.span,{className:"hljs-title function_",children:"shift"}),`();\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(first); ",e.jsx(n.span,{className:"hljs-comment",children:"// 0"}),`\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(stack); ",e.jsx(n.span,{className:"hljs-comment",children:"// [1, 2, 4]"}),`
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"multidimensionele-arrays",children:["Multidimensionele arrays",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multidimensionele-arrays",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Een multidimensionele array is een array waarvan de elementen ook arrays zijn. Hiermee kan je complexe datastructuren maken zoals matrices en tabellen."}),`
`,e.jsx(n.p,{children:"Je kan een multidimensionele array declareren door arrays in arrays te nesten:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` multiArray = [\r
  [`,e.jsx(n.span,{className:"hljs-number",children:"1"}),", ",e.jsx(n.span,{className:"hljs-number",children:"2"}),", ",e.jsx(n.span,{className:"hljs-number",children:"3"}),`],\r
  [`,e.jsx(n.span,{className:"hljs-number",children:"4"}),", ",e.jsx(n.span,{className:"hljs-number",children:"5"}),", ",e.jsx(n.span,{className:"hljs-number",children:"6"}),`],\r
  [`,e.jsx(n.span,{className:"hljs-number",children:"7"}),", ",e.jsx(n.span,{className:"hljs-number",children:"8"}),", ",e.jsx(n.span,{className:"hljs-number",children:"9"}),`],\r
];
`]})}),`
`,e.jsx(n.p,{children:"Je kan de elementen van een multidimensionele array benaderen door meerdere indexen te gebruiken:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(multiArray[",e.jsx(n.span,{className:"hljs-number",children:"0"}),"][",e.jsx(n.span,{className:"hljs-number",children:"0"}),"]); ",e.jsx(n.span,{className:"hljs-comment",children:"// 1"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(multiArray[",e.jsx(n.span,{className:"hljs-number",children:"1"}),"][",e.jsx(n.span,{className:"hljs-number",children:"2"}),"]); ",e.jsx(n.span,{className:"hljs-comment",children:"// 6"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(multiArray[",e.jsx(n.span,{className:"hljs-number",children:"2"}),"][",e.jsx(n.span,{className:"hljs-number",children:"1"}),"]); ",e.jsx(n.span,{className:"hljs-comment",children:"// 8"}),`
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"overzicht-van-alle-array-methodes-en-properties",children:["Overzicht van alle Array methodes en properties",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overzicht-van-alle-array-methodes-en-properties",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Hieronder vind je een overzicht van de belangrijkste en meest gebruikte methodes en properties van het Array object in JavaScript:"}),`
`,e.jsxs(n.h3,{id:"properties",children:["Properties",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"length"})," — Geeft het aantal elementen in de array"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"methodes",children:["Methodes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methodes",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"push(element)"})," — Voegt een element toe aan het einde"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pop()"})," — Verwijdert en retourneert het laatste element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"shift()"})," — Verwijdert en retourneert het eerste element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unshift(element)"})," — Voegt een element toe aan het begin"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"concat(array)"})," — Voegt twee of meer arrays samen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"join(separator)"})," — Maakt een string van alle elementen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"slice(begin, end)"})," — Geeft een deel van de array terug"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"splice(start, deleteCount, ...items)"})," — Voegt elementen toe/verwijdert elementen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"indexOf(element)"})," — Geeft de eerste index van een element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lastIndexOf(element)"})," — Geeft de laatste index van een element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"includes(element)"})," — Controleert of een element voorkomt"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reverse()"})," — Draait de volgorde van de array om"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sort([compareFunction])"})," — Sorteert de array"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"forEach(callback)"})," — Voert een functie uit voor elk element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"map(callback)"})," — Maakt een nieuwe array met het resultaat van de callback"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"filter(callback)"})," — Maakt een nieuwe array met elementen die voldoen aan de callback"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reduce(callback, initialValue)"})," — Reduceert de array tot één waarde"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reduceRight(callback, initialValue)"})," — Reduceert van rechts naar links"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"find(callback)"})," — Geeft het eerste element dat voldoet aan de callback"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"findIndex(callback)"})," — Geeft de index van het eerste element dat voldoet aan de callback"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"some(callback)"})," — Geeft true als minstens één element voldoet"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"every(callback)"})," — Geeft true als alle elementen voldoen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fill(value, start, end)"})," — Vult de array met een waarde"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"copyWithin(target, start, end)"})," — Kopieert een deel van de array naar een andere locatie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"flat([depth])"})," — Maakt een geneste array platter"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"flatMap(callback)"})," — Voert map uit en flat daarna"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"at(index)"})," — Geeft het element op de opgegeven positie (ook negatieve index)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toString()"})," — Zet de array om naar een string"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toLocaleString()"})," — Zet de array om naar een gelokaliseerde string"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"entries()"})," — Geeft een iterator met [index, waarde] paren"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keys()"})," — Geeft een iterator met de indexen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"values()"})," — Geeft een iterator met de waarden"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"from(arrayLike)"})," — Maakt een nieuwe array van een array-achtig object"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isArray(obj)"})," — Controleert of een object een array is"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"of(...elements)"})," — Maakt een nieuwe array van de opgegeven elementen"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Voor een volledig overzicht zie de ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",children:"MDN Array documentatie"}),"."]})]})}function c(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{c as default};
