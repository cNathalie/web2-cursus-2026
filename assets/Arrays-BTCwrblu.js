const e=`Arrays zijn geordende veramelingen van elementen.\r
\r
De elementen mogen in JavaScript van een verschillend type zijn.\r
\r
---\r
\r
## Array declareren\r
\r
Om een array te declareren, gebruik je de volgende syntax:\r
\r
\`\`\`javascript\r
// Een lege array\r
const emptyArray = [];\r
\r
// Een array met waardes\r
const fruits = ["apple", "banana", "orange"];\r
\`\`\`\r
\r
Je kan ook een array declareren met de Array constructor:\r
\r
\`\`\`javascript\r
const array = new Array();\r
const fruits = new Array("apple", "banana", "orange");\r
\`\`\`\r
\r
JavaScript arrays zijn **dynamisch**. Dit betekend dat je bij het declareren geen grootte hoeft mee te geven en dat de grootte van een array kan veranderen nadat deze is gedeclareerd. Ze kunnen dus groeien en krimpen.\r
\r
\`\`\`javascript\r
const fruits = ["apple", "banana", "orange"];\r
fruits.push("pear");\r
console.log(fruits); // ['apple', 'banana', 'orange', 'pear']\r
\`\`\`\r
\r
---\r
\r
## Index\r
\r
De elementen in een array worden geïndexeerd. De index van een element is een numerieke waarde die de positie van het element in de array aangeeft.\r
\r
De index van een array begint ALTIJD bij 0. Dit betekent dat het eerste element in een array de index 0 heeft, het tweede element de index 1, enzovoort.\r
\r
Index is niet hetzelfde als \`length\`!\r
\r
![Zero based fun](public/images/zero-based-fun.png)\r
\r
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
console.log(food);\r
\`\`\`\r
\r
---\r
\r
## Stack\r
\r
Een stack is een datastructuur waarin elementen worden toegevoegd en verwijderd volgens het Last In First Out (LIFO) principe. Dit betekent dat het laatste element dat aan de stack wordt toegevoegd, het eerste element is dat wordt verwijderd.\r
\r
Je kan een stack implementeren met een array. De \`push()\` methode voegt een element toe aan het einde van de array en de \`pop()\` methode verwijdert het laatste element van de array.\r
\r
Dit zijn alle stack methodes:\r
\r
- \`push()\`: voegt een element toe aan het einde van de array\r
- \`pop()\`: verwijdert het laatste element van de array en returnt het\r
- \`peek()\`: geeft het laatste element van de array terug zonder het te verwijderen\r
- \`isEmpty()\`: controleert of de stack leeg is\r
- \`size()\`: geeft het aantal elementen in de stack terug\r
- \`shift()\`: verwijdert het eerste element van de array en returnt het\r
- \`unshift()\`: voegt een element toe aan het begin van de array en returnt de nieuwe lengte van de array\r
\r
Zo gebruik je ze op een array:\r
\r
\`\`\`javascript\r
const stack = [];\r
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
console.log(stack); // [1, 2, 4]\r
\`\`\`\r
\r
---\r
\r
## Multidimensionele arrays\r
\r
Een multidimensionele array is een array waarvan de elementen ook arrays zijn. Hiermee kan je complexe datastructuren maken zoals matrices en tabellen.\r
\r
Je kan een multidimensionele array declareren door arrays in arrays te nesten:\r
\r
\`\`\`javascript\r
const multiArray = [\r
  [1, 2, 3],\r
  [4, 5, 6],\r
  [7, 8, 9],\r
];\r
\`\`\`\r
\r
Je kan de elementen van een multidimensionele array benaderen door meerdere indexen te gebruiken:\r
\r
\`\`\`javascript\r
console.log(multiArray[0][0]); // 1\r
console.log(multiArray[1][2]); // 6\r
console.log(multiArray[2][1]); // 8\r
\`\`\`\r
`;export{e as default};
