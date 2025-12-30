import{j as e}from"./index-C0jUBqcl.js";const t="/web2-cursus-2026/images/zero-based-fun.png";function a(r){const n={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Arrays zijn geordende veramelingen van elementen."}),`
`,e.jsx(n.p,{children:"De elementen mogen in JavaScript van een verschillend type zijn."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"array-declareren",children:["Array declareren",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#array-declareren",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Om een array te declareren, gebruik je de volgende syntax:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Een lege array\r
const emptyArray = [];\r
\r
// Een array met waardes\r
const fruits = ["apple", "banana", "orange"];
`})}),`
`,e.jsx(n.p,{children:"Je kan ook een array declareren met de Array constructor:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const array = new Array();\r
const fruits = new Array("apple", "banana", "orange");
`})}),`
`,e.jsxs(n.p,{children:["JavaScript arrays zijn ",e.jsx(n.strong,{children:"dynamisch"}),". Dit betekend dat je bij het declareren geen grootte hoeft mee te geven en dat de grootte van een array kan veranderen nadat deze is gedeclareerd. Ze kunnen dus groeien en krimpen."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const fruits = ["apple", "banana", "orange"];\r
fruits.push("pear");\r
console.log(fruits); // ['apple', 'banana', 'orange', 'pear']
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"index",children:["Index",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#index",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"De elementen in een array worden geïndexeerd. De index van een element is een numerieke waarde die de positie van het element in de array aangeeft."}),`
`,e.jsx(n.p,{children:"De index van een array begint ALTIJD bij 0. Dit betekent dat het eerste element in een array de index 0 heeft, het tweede element de index 1, enzovoort."}),`
`,e.jsxs(n.p,{children:["Index is niet hetzelfde als ",e.jsx(n.code,{children:"length"}),"!"]}),`
`,e.jsx("img",{src:t,alt:"Zero based fun",className:"img-fluid my-3"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`\r
---\r
\r
## Methodes voor arrays\r
\r
JavaScript arrays hebben verschillende methodes die je kan gebruiken om elementen toe te voegen, te verwijderen, te sorteren, te filteren, enzovoort.\r
\r
Hier zijn enkele van de meest gebruikte array methodes:\r
\r
- \`length\`: geeft het aantal elementen in de array terug\r
- \`indexOf\`: geeft de index van een element terug\r
- \`concat\`: voegt twee arrays samen\r
- \`reverse\`: draait de volgorde van de elementen om\r
- \`sort\`: sorteert de elementen van de array\r
\r
Zo gebruik je ze op een array:\r
\r
\`\`\`javascript\r
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
`})}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const stack = [];\r
stack.push(1);\r
stack.push(2);\r
stack.push(3);\r
\r
console.log(stack); // [1, 2, 3]\r
\r
const last = stack.pop();\r
\r
console.log(last); // 3\r
console.log(stack); // [1, 2]\r
\r
stack.push(4);\r
\r
console.log(stack); // [1, 2, 4]\r
\r
let index = 1;\r
console.log(stack[index]); // 2\r
\r
index = 3;\r
console.log(stack[index]); // undefined\r
\r
console.log(stack[stack.length - 1]); // 2\r
\r
const newLength = stack.unshift(0);\r
console.log(newLength); // 4\r
\r
console.log(stack); // [0, 1, 2, 4]\r
\r
const first = stack.shift();\r
console.log(first); // 0\r
\r
console.log(stack); // [1, 2, 4]
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"multidimensionele-arrays",children:["Multidimensionele arrays",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multidimensionele-arrays",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Een multidimensionele array is een array waarvan de elementen ook arrays zijn. Hiermee kan je complexe datastructuren maken zoals matrices en tabellen."}),`
`,e.jsx(n.p,{children:"Je kan een multidimensionele array declareren door arrays in arrays te nesten:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const multiArray = [\r
  [1, 2, 3],\r
  [4, 5, 6],\r
  [7, 8, 9],\r
];
`})}),`
`,e.jsx(n.p,{children:"Je kan de elementen van een multidimensionele array benaderen door meerdere indexen te gebruiken:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`console.log(multiArray[0][0]); // 1\r
console.log(multiArray[1][2]); // 6\r
console.log(multiArray[2][1]); // 8
`})})]})}function i(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{i as default};
