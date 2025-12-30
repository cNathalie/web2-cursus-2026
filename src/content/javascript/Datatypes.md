JavaScript is een **dynamisch getypeerde taal**, wat betekent dat je niet
moet aangeven welk type gegevens je in een variabele zal opslaan.
JavaScript zal automatisch het type van de gegevens bepalen.

JavaScript heeft een aantal primitieve datatypes, zoals:

- Number
- String
- Boolean
- Undefined
- Null

Er zijn ook objecttypes

- Object
- Array
- Function

#### Number

Numbers zijn getallen. Ze kunnen zowel gehele getallen als
kommagetallen zijn.

Enkele voorbeelden van numbers:

```javascript
const x = 5;
const y = 3.14;
const z = -10;
```

Operatoren:

- \*
- &plus;
- &minus;
- /
- % (modulo)

#### String

Strings zijn teksten. Ze worden gedefinieerd tussen enkele of dubbele
aanhalingstekens of _backticks_.

Enkele voorbeelden van strings:

```javascript
const x = "Hello";
const y = "World";
const z = "42";
const u = `Movie`;
```

De operator '+' kan gebruikt worden om twee strings te concateneren.

```javascript
const greeting = x + " " + y;
console.log(greeting); // "Hello World"
```

Op een variabele van het type string kan je altijd
`.length` oproepen om het aantal karakters te
tellen.

```javascript
const text = "Hello";
console.log(text.length); // 5
```

Je kan ook een number omzetten naar een string met de methode
`.toString()`.

```javascript
const number = 42;
console.log(number);
console.log(typeof number);

const string = number.toString();

console.log(string);
console.log(typeof string);
```

<div class="card paragraph">
<h2 class="subtitle">Boolean</h2>

Booleans zijn waarden die waar of onwaar kunnen zijn. Ze worden
gebruikt om beslissingen te nemen in je code.

Enkele voorbeelden van booleans:

```javascript
const x = true;
const y = false;
```

Booleans worden vaak gebruikt in combinatie met conditionele
statements zoals `if` en `else`.

```javascript
if (x) {
  console.log("Dit wordt uitgevoerd");
} else {
  console.log("Dit wordt niet uitgevoerd");
}
```

Elke waarde heeft ook een boolean equivalent:

- 0 is `false`
- 1 is `true`
- "" is `false`
- "Hello" is `true`
- null is `false`
- undefined is `false`
- NaN is `false`

Zo kan je bevoorbeeld snel controleren of een string variable een
waarde heeft:

```javascript
const text = "";
if (text) {
  console.log("Text heeft een waarde");
} else {
  console.log("Text heeft geen waarde");
}
```

#### Undefined en null

`Undefined` en `null` zijn speciale waarden in JavaScript. `Undefined`
betekent dat een variabele niet is gedefinieerd, terwijl `null` betekent
dat een variabele geen waarde heeft.

Enkele voorbeelden:

```javascript
let z;
console.log(z); // undefined

const y = null;
console.log(y); // null
```

Null staat voor een lege object pointer.
Het type van een variable met de waarde null, is object.

```javascript
console.log(typeof y); // object
```

Maak je geen zorgen, het verschil tussen beide zal naarmate je meer codeert,
duidelijker worden.
