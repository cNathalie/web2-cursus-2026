## Inleiding

JavaScript is een programmeertaal die gebruik maakt van variabelen.  
Een variabele is een container waarin je gegevens kan opslaan. Deze gegevens kunnen van verschillende types zijn, zoals een getal, een tekst of een boolean.

JavaScript is een dynamisch getypeerde taal, wat betekent dat je niet moet aangeven welk type gegevens je in een variabele zal opslaan. JavaScript zal automatisch het type van de gegevens bepalen.

---

## Declareren van een variabele met `let`

Om een variabele te declareren, gebruik je het keyword `let`. Daarna geef je de variabele een naam en ken je er een waarde aan toe. Bijvoorbeeld:

```javascript
`let` x = 5;
```

Deze code maakt een variabele x aan en kent er de waarde 5 aan toe.
Je kan ook een variabele declareren zonder er een waarde aan toe te kennen.
Bijvoorbeeld:

```javascript
`let` y;
```

Deze code maakt een variabele y aan zonder er een waarde aan toe te kennen. De waarde van y is nu undefined.

Je kan de waarde van een variabele ook wijzigen. Bijvoorbeeld:

#### Probeer het zelf

Open in dit venster je developer tools Console en probeer de volgende code uit:

- Het declareren met een waarde en aanpassen van de waarde én type:

```javascript
`let` x = 5;
console.log(x);

x = 10;
console.log(x);

x = "Hello";
console.log(x);
```

- Het declareren zonder waarde, geeft undefined terug:

```javascript
`let` y;
console.log(y);
```

## Declareren van een variabele met `const`

Naast variabelen kan je ook constanten declareren. Een constante is een variabele waarvan de waarde niet kan veranderen. Om een constante te declareren, gebruik je het keyword `const`.

Bijvoorbeeld:

```javascript
`const` PI = 3.14;
```

Deze code maakt een constante PI aan en kent er de waarde 3.14 aan toe. Je kan de waarde van een constante niet wijzigen.

Bijvoorbeeld:

```javascript
const PI = 3.14;
PI = 3.14159;
```

Deze code zal een foutmelding geven omdat je de waarde van een constante niet kan wijzigen.

## Declareren van een variabele met `var`

Voor de introductie van ES6 (ECMAScript 2015) was het gebruikelijk om variabelen te declareren met het keyword `var`. Het gebruik van v`var`ar is echter niet meer aangeraden. Het is beter om `let` en `const` te gebruiken. Het gebruik van `var` kan leiden tot onverwachte resultaten.
Bijvoorbeeld:

```javascript
var a = 5;
console.log(a);

var a = 10;
console.log(a);
```

Deze code zal geen foutmelding geven, maar het is beter om `let` of `const` te gebruiken.

#### Waarom gebruik je beter geen `var`?

Declaraties met `var` worden gehoist. Dit betekent dat de declaratie naar boven wordt verplaatst. Dit kan leiden tot onverwachte resultaten.
Declaraties met `var` hebben geen block scope. Dit betekent dat de variabele overal in de functie beschikbaar is.
Wanneer je dus in een functie een variabele declareert met `var`, is deze variabele overal in de functie beschikbaar, zelfs voor de declaratie. Ergens anders in de code kan je deze variabele ook gebruiken, en dus aanpassen. Dit betekent dat je de waarde van de variabele kan aanpassen, zelfs voor de declaratie. Dan kan je onverwachte resultaten krijgen. Of je kan per ongeluk een variabele overschrijven.

Zo kan je ook name clashes krijgen. Dit betekent dat je per ongeluk een variabele kan overschrijven die al bestaat.

Bijvoorbeeld:

```javascript
var a = 5;

function example() {
  var a = 10;
  console.log(a);
}

example();

console.log(a);
```

In dit voorbeeld zal de eerste `console.log(a)` in de functie `example` de waarde 10 weergeven, terwijl de tweede `console.log(a)` buiten de functie de waarde 5 weergeeft. Dit kan verwarrend zijn en leiden tot bugs in je code. Daarom is het beter om `let` en `const` te gebruiken.

Belangrijk!
Het is dus **best practice** om **nooit** `var` te gebruiken.
We spreken dan ook af om in deze cursus vanaf nu **NOOIT** meer `var` te gebruiken.
Wie in opdrachten of evaluaties toch `var` gebruikt, zal **punten verliezen**!

Gebruik `let` en `const` in plaats van `var`.

Het is daarnaast ook aangeraden om in eerste instantie `const` te gebruiken. Wanneer je zeker weet dat de waarde van de variabele zal veranderen, kan je de declaratie nadien nog aanpassen naar `let`. Zo vermijd je onverwachte resultaten en bugs in je code.

![Var](public/images/var-in-prison.jpg)
