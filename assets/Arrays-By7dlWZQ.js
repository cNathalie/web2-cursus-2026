import{j as e}from"./index-BbjdRKSI.js";const l="/web2-cursus-2026/images/zero-based-fun.png";function a(n){const s={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"Arrays zijn geordende veramelingen van elementen."}),`
`,e.jsx(s.p,{children:"De elementen mogen in JavaScript van een verschillend type zijn."}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"array-declareren",children:["Array declareren",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#array-declareren",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Om een array te declareren, gebruik je de volgende syntax:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Een lege array"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` emptyArray = [];\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Een array met waardes"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," fruits = [",e.jsx(s.span,{className:"hljs-string",children:'"apple"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"banana"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"orange"'}),`];
`]})}),`
`,e.jsx(s.p,{children:"Je kan ook een array declareren met de Array constructor:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," array = ",e.jsx(s.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Array"}),`();\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," fruits = ",e.jsx(s.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Array"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"apple"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"banana"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"orange"'}),`);
`]})}),`
`,e.jsxs(s.p,{children:["JavaScript arrays zijn ",e.jsx(s.strong,{children:"dynamisch"}),". Dit betekend dat je bij het declareren geen grootte hoeft mee te geven en dat de grootte van een array kan veranderen nadat deze is gedeclareerd. Ze kunnen dus groeien en krimpen."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," fruits = [",e.jsx(s.span,{className:"hljs-string",children:'"apple"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"banana"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"orange"'}),`];\r
fruits.`,e.jsx(s.span,{className:"hljs-title function_",children:"push"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"pear"'}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(fruits); ",e.jsx(s.span,{className:"hljs-comment",children:"// ['apple', 'banana', 'orange', 'pear']"}),`
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"index",children:["Index",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#index",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"De elementen in een array worden geïndexeerd. De index van een element is een numerieke waarde die de positie van het element in de array aangeeft."}),`
`,e.jsx(s.p,{children:"De index van een array begint ALTIJD bij 0. Dit betekent dat het eerste element in een array de index 0 heeft, het tweede element de index 1, enzovoort."}),`
`,e.jsxs(s.p,{children:["Index is niet hetzelfde als ",e.jsx(s.code,{children:"length"}),"!"]}),`
`,e.jsx("img",{src:l,alt:"Zero based fun",className:"img-fluid my-3"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[`\r
---\r
\r
## `,e.jsx(s.span,{className:"hljs-title class_",children:"Methodes"}),` voor arrays\r
\r
`,e.jsx(s.span,{className:"hljs-title class_",children:"JavaScript"}),` arrays hebben verschillende methodes die je kan gebruiken om elementen toe te voegen, te verwijderen, te sorteren, te filteren, enzovoort.\r
\r
`,e.jsx(s.span,{className:"hljs-title class_",children:"Hier"})," zijn enkele van de meest gebruikte array ",e.jsx(s.span,{className:"hljs-attr",children:"methodes"}),`:\r
\r
- `,e.jsx(s.span,{className:"hljs-string",children:"`length`"}),": geeft het aantal elementen ",e.jsx(s.span,{className:"hljs-keyword",children:"in"}),` de array terug\r
- `,e.jsx(s.span,{className:"hljs-string",children:"`indexOf`"}),`: geeft de index van een element terug\r
- `,e.jsx(s.span,{className:"hljs-string",children:"`concat`"}),`: voegt twee arrays samen\r
- `,e.jsx(s.span,{className:"hljs-string",children:"`reverse`"}),`: draait de volgorde van de elementen om\r
- `,e.jsx(s.span,{className:"hljs-string",children:"`sort`"}),`: sorteert de elementen van de array\r
\r
`,e.jsx(s.span,{className:"hljs-title class_",children:"Zo"})," gebruik je ze op een ",e.jsx(s.span,{className:"hljs-attr",children:"array"}),`:\r
\r
`,e.jsx(s.span,{className:"hljs-string",children:"``"}),e.jsx(s.span,{className:"hljs-string",children:`\`javascript\r
const fruits = ["apple", "banana", "orange"];\r
\r
// Vraag de lengte op = het aantal elementen in de array\r
console.log(fruits.length);\r
\r
//Vraag de index van een bepaald element op\r
console.log(fruits.indexOf("banana"));\r
\r
const vegetables = ["carrot", "tomato"];\r
\r
// Voeg fruit en groenten samen in één array\r
const food = fruits.concat(vegetables);\r
console.log(food);\r
\r
// Draai de volgorde van de elementen om\r
food.reverse();\r
console.log(food);
`})]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"stack",children:["Stack",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stack",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Een stack is een datastructuur waarin elementen worden toegevoegd en verwijderd volgens het Last In First Out (LIFO) principe. Dit betekent dat het laatste element dat aan de stack wordt toegevoegd, het eerste element is dat wordt verwijderd."}),`
`,e.jsxs(s.p,{children:["Je kan een stack implementeren met een array. De ",e.jsx(s.code,{children:"push()"})," methode voegt een element toe aan het einde van de array en de ",e.jsx(s.code,{children:"pop()"})," methode verwijdert het laatste element van de array."]}),`
`,e.jsx(s.p,{children:"Dit zijn alle stack methodes:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"push()"}),": voegt een element toe aan het einde van de array"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pop()"}),": verwijdert het laatste element van de array en returnt het"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"peek()"}),": geeft het laatste element van de array terug zonder het te verwijderen"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isEmpty()"}),": controleert of de stack leeg is"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"size()"}),": geeft het aantal elementen in de stack terug"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"shift()"}),": verwijdert het eerste element van de array en returnt het"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"unshift()"}),": voegt een element toe aan het begin van de array en returnt de nieuwe lengte van de array"]}),`
`]}),`
`,e.jsx(s.p,{children:"Zo gebruik je ze op een array:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` stack = [];\r
stack.`,e.jsx(s.span,{className:"hljs-title function_",children:"push"}),"(",e.jsx(s.span,{className:"hljs-number",children:"1"}),`);\r
stack.`,e.jsx(s.span,{className:"hljs-title function_",children:"push"}),"(",e.jsx(s.span,{className:"hljs-number",children:"2"}),`);\r
stack.`,e.jsx(s.span,{className:"hljs-title function_",children:"push"}),"(",e.jsx(s.span,{className:"hljs-number",children:"3"}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(stack); ",e.jsx(s.span,{className:"hljs-comment",children:"// [1, 2, 3]"}),`\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," last = stack.",e.jsx(s.span,{className:"hljs-title function_",children:"pop"}),`();\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(last); ",e.jsx(s.span,{className:"hljs-comment",children:"// 3"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(stack); ",e.jsx(s.span,{className:"hljs-comment",children:"// [1, 2]"}),`\r
\r
stack.`,e.jsx(s.span,{className:"hljs-title function_",children:"push"}),"(",e.jsx(s.span,{className:"hljs-number",children:"4"}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(stack); ",e.jsx(s.span,{className:"hljs-comment",children:"// [1, 2, 4]"}),`\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," index = ",e.jsx(s.span,{className:"hljs-number",children:"1"}),`;\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(stack[index]); ",e.jsx(s.span,{className:"hljs-comment",children:"// 2"}),`\r
\r
index = `,e.jsx(s.span,{className:"hljs-number",children:"3"}),`;\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(stack[index]); ",e.jsx(s.span,{className:"hljs-comment",children:"// undefined"}),`\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(stack[stack.",e.jsx(s.span,{className:"hljs-property",children:"length"})," - ",e.jsx(s.span,{className:"hljs-number",children:"1"}),"]); ",e.jsx(s.span,{className:"hljs-comment",children:"// 2"}),`\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," newLength = stack.",e.jsx(s.span,{className:"hljs-title function_",children:"unshift"}),"(",e.jsx(s.span,{className:"hljs-number",children:"0"}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(newLength); ",e.jsx(s.span,{className:"hljs-comment",children:"// 4"}),`\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(stack); ",e.jsx(s.span,{className:"hljs-comment",children:"// [0, 1, 2, 4]"}),`\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," first = stack.",e.jsx(s.span,{className:"hljs-title function_",children:"shift"}),`();\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(first); ",e.jsx(s.span,{className:"hljs-comment",children:"// 0"}),`\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(stack); ",e.jsx(s.span,{className:"hljs-comment",children:"// [1, 2, 4]"}),`
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"multidimensionele-arrays",children:["Multidimensionele arrays",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multidimensionele-arrays",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Een multidimensionele array is een array waarvan de elementen ook arrays zijn. Hiermee kan je complexe datastructuren maken zoals matrices en tabellen."}),`
`,e.jsx(s.p,{children:"Je kan een multidimensionele array declareren door arrays in arrays te nesten:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` multiArray = [\r
  [`,e.jsx(s.span,{className:"hljs-number",children:"1"}),", ",e.jsx(s.span,{className:"hljs-number",children:"2"}),", ",e.jsx(s.span,{className:"hljs-number",children:"3"}),`],\r
  [`,e.jsx(s.span,{className:"hljs-number",children:"4"}),", ",e.jsx(s.span,{className:"hljs-number",children:"5"}),", ",e.jsx(s.span,{className:"hljs-number",children:"6"}),`],\r
  [`,e.jsx(s.span,{className:"hljs-number",children:"7"}),", ",e.jsx(s.span,{className:"hljs-number",children:"8"}),", ",e.jsx(s.span,{className:"hljs-number",children:"9"}),`],\r
];
`]})}),`
`,e.jsx(s.p,{children:"Je kan de elementen van een multidimensionele array benaderen door meerdere indexen te gebruiken:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(multiArray[",e.jsx(s.span,{className:"hljs-number",children:"0"}),"][",e.jsx(s.span,{className:"hljs-number",children:"0"}),"]); ",e.jsx(s.span,{className:"hljs-comment",children:"// 1"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(multiArray[",e.jsx(s.span,{className:"hljs-number",children:"1"}),"][",e.jsx(s.span,{className:"hljs-number",children:"2"}),"]); ",e.jsx(s.span,{className:"hljs-comment",children:"// 6"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(multiArray[",e.jsx(s.span,{className:"hljs-number",children:"2"}),"][",e.jsx(s.span,{className:"hljs-number",children:"1"}),"]); ",e.jsx(s.span,{className:"hljs-comment",children:"// 8"}),`
`]})})]})}function c(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{c as default};
