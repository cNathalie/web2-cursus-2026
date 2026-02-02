import{j as e}from"./index-DEXPSZA7.js";function a(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["Alle getallen in JavaScript zijn van het type ",e.jsx(n.code,{children:"Number"}),"."]}),`
`,e.jsx(n.p,{children:"Alle getallen zijn altijd kommagetallen met dubbele precisie. Dit betekent dat JavaScript geen apart type heeft voor gehele getallen."}),`
`,e.jsxs(n.p,{children:["Gehele getallen worden dus ook opgeslagen als kommagetallen. Bijvoorbeeld het gehele getal 42 zal intern opgeslagen worden als 42.00 in het ",e.jsx(n.code,{children:"Number"})," type, omdat JavaScript gebruikmaakt van het IEEE 754-standaard voor dubbele precisie floating-point getallen. Dit betekent dat 42 en 42.00 dezelfde waarde vertegenwoordigen en op dezelfde manier worden behandeld."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"een-voor-allen",children:["Een voor allen",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#een-voor-allen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Gehele getallen worden dus ook opgeslagen als kommagetallen. Bijvoorbeeld het gehele getal 42 zal intern opgeslagen worden als 42.00 in het ",e.jsx(n.code,{children:"Number"})," type, omdat JavaScript gebruikmaakt van het IEEE 754-standaard voor dubbele precisie floating-point getallen. Dit betekent dat 42 en 42.00 dezelfde waarde vertegenwoordigen en op dezelfde manier worden behandeld."]}),`
`,e.jsx(n.p,{children:"De voorstelling van kommagetallen kan verschillen door de regio/taal instellingen van de browser. Soms wordt er een komma gebruikt in plaats van een punt om het decimaal getal te scheiden."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"van-string-naar-number",children:["Van String naar Number",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#van-string-naar-number",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Soms wil je een getal dat in een string staat omzetten naar een ",e.jsx(n.code,{children:"Number"}),". Dit kan je doen met de functie ",e.jsx(n.code,{children:"parseInt()"})," of ",e.jsx(n.code,{children:"parseFloat()"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parseInt()"})," zal een string omzetten naar een geheel getal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parseFloat()"})," zal een string omzetten naar een kommagetal"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Als de string niet omgezet kan worden naar een getal, zal de functie ",e.jsx(n.code,{children:"NaN"})," (= Not a Number) teruggeven."]}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," stringNumber = ",e.jsx(n.span,{className:"hljs-string",children:'"42"'}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` stringNumber);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik parseInt om de string om te zetten naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," number = ",e.jsx(n.span,{className:"hljs-built_in",children:"parseInt"}),`(stringNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` number);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// parseInt met een kommagetal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," float = ",e.jsx(n.span,{className:"hljs-string",children:'"4.2"'}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," floatNumber = ",e.jsx(n.span,{className:"hljs-built_in",children:"parseInt"}),`(float);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(floatNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` floatNumber);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// parseInt met een string die geen getal is"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," notANumber = ",e.jsx(n.span,{className:"hljs-string",children:'"Hello"'}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," nan = ",e.jsx(n.span,{className:"hljs-built_in",children:"parseInt"}),`(notANumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(nan);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` nan);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// parseFloat met een geheel getal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," int = ",e.jsx(n.span,{className:"hljs-string",children:'"42"'}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," intNumber = ",e.jsx(n.span,{className:"hljs-built_in",children:"parseFloat"}),`(int);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(intNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` intNumber);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// parseFloat met een kommagetal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," float2 = ",e.jsx(n.span,{className:"hljs-string",children:'"4.2"'}),`;\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," floatNumber2 = ",e.jsx(n.span,{className:"hljs-built_in",children:"parseFloat"}),`(float2);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(floatNumber2);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` floatNumber2);
`]})}),`
`,e.jsxs(n.h2,{id:"grondtal",children:["Grondtal",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#grondtal",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"JavaScript ondersteunt getallen in verschillende grondtallen. Zo kan je getallen schrijven in decimaal, binair, octaal en hexadecimaal."}),`
`,e.jsx(n.p,{children:"Het grondtal van decimale getallen is 10. Dit betekent dat je getallen kan schrijven van 0 tot 9. Het grondtal van hexadecimaal is 16. Dit betekent dat je getallen kan schrijven van 0 tot 9 en van A tot F."}),`
`,e.jsx(n.p,{children:"Het is best practice om aan de functies parseInt() en parseFloat() het grondtal als tweede argument mee te geven."}),`
`,e.jsx(n.p,{children:"Doorgaans zal je dus voornamelijk het grondtal 10 meegeven, maar het is handig om te weten dat je ook andere grondtallen kan gebruiken. Zo kan je bijvoorbeeld een hexadecimaal getal omzetten naar een decimaal getal door het grondtal 16 mee te geven aan de functie parseInt()."}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een hexadecimale string"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," hex = ",e.jsx(n.span,{className:"hljs-string",children:'"0x1A"'}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-built_in",children:"parseInt"}),"(hex, ",e.jsx(n.span,{className:"hljs-number",children:"16"}),`));\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een octale string"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," oct = ",e.jsx(n.span,{className:"hljs-string",children:'"0o10"'}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-built_in",children:"parseInt"}),"(oct, ",e.jsx(n.span,{className:"hljs-number",children:"8"}),`));\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een binaire string"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," bin = ",e.jsx(n.span,{className:"hljs-string",children:'"0b1010"'}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-built_in",children:"parseInt"}),"(bin, ",e.jsx(n.span,{className:"hljs-number",children:"2"}),`));\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een decimale string"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," dec = ",e.jsx(n.span,{className:"hljs-string",children:'"10"'}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-built_in",children:"parseInt"}),"(dec, ",e.jsx(n.span,{className:"hljs-number",children:"10"}),`));
`]})}),`
`,e.jsx(n.p,{children:"Vanaf nu geven we dus ook altijd een grondtal mee aan de functies parseInt() en parseFloat()."}),`
`,e.jsxs(n.h2,{id:"komma-vs-punt",children:["Komma vs punt",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#komma-vs-punt",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Hoe we kommagetallen schrijven kan verschillen door de regio/taal. In sommige landen wordt een punt gebruikt in plaats van een komma om het decimaal getal te scheiden. Dit kan problemen veroorzaken bij het verwerken van gebruikers-input met JavaScript."}),`
`,e.jsx(n.p,{children:"JavaScript zal een punt gebruiken om het decimaal getal te scheiden. Als je een komma gebruikt, zal JavaScript dit interpreteren als een string karakter."}),`
`,e.jsx(n.p,{children:"Bekijk volgende code:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string met een komma"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," comma = ",e.jsx(n.span,{className:"hljs-string",children:'"4,2"'}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-built_in",children:"parseFloat"}),"(comma, ",e.jsx(n.span,{className:"hljs-number",children:"10"}),`));\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string met een punt"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," point = ",e.jsx(n.span,{className:"hljs-string",children:'"4.2"'}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-built_in",children:"parseFloat"}),"(point, ",e.jsx(n.span,{className:"hljs-number",children:"10"}),`));
`]})}),`
`,e.jsx(n.p,{children:"In onze JavaScript code zullen dus altijd punten gebruiken om kommagetallen te scheiden."}),`
`,e.jsx(n.p,{children:"Reminder: De waarde die uit een inputveld komt zal altijd een string zijn. Gebruik dus de functies parseInt() of parseFloat() om deze om te zetten naar een getal alvorens je deze verder verwerkt."}),`
`,e.jsx(n.p,{children:'Tip: Je kan het type van een input instellen op "number" om enkel getallen toe te laten. Dit zal echter niet verhinderen dat een gebruiker een komma gebruikt in plaats van een punt. Maar de string die je binnen krijgt zal al van de dot-notatie gebruik maken.'}),`
`,e.jsx(n.p,{children:"Vul in onderstaand input veld een kommagetal in gebruik makend van een komma. Voer nadien de code uit en bekijk het resultaat."}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsx("input",{type:"number",id:"number-input",placeholder:"Vul een kommagetal in"})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Haal de waarde van het inputveld op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," inputField = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"number-input"'}),`);\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," inputValue = inputField.",e.jsx(n.span,{className:"hljs-property",children:"value"}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"//Bekijk de string waarde"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(inputValue);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` inputValue);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We kunnen de input meteen omzetten naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," float = ",e.jsx(n.span,{className:"hljs-built_in",children:"parseFloat"}),"(inputValue, ",e.jsx(n.span,{className:"hljs-number",children:"10"}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(float);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` float);
`]})}),`
`,e.jsxs(n.h2,{id:"nan",children:["NaN",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nan",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:'Als een berekening niet kan uitgevoerd worden, zal JavaScript de waarde NaN teruggeven. Dit staat voor "Not a Number".'}),`
`,e.jsx(n.p,{children:"Dit kan gebeuren als je een string die geen getal is probeert om te zetten naar een getal."}),`
`,e.jsxs(n.p,{children:["Met de functie ",e.jsx(n.code,{children:"Number.isNaN()"})," kan je controleren of een waarde NaN is."]}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string die geen getal is"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," notANumber = ",e.jsx(n.span,{className:"hljs-string",children:'"Hello"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Parse de string naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," nan = ",e.jsx(n.span,{className:"hljs-built_in",children:"parseInt"}),"(notANumber, ",e.jsx(n.span,{className:"hljs-number",children:"10"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Controleer of de waarde NaN is"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," isNan = ",e.jsx(n.span,{className:"hljs-title class_",children:"Number"}),".",e.jsx(n.span,{className:"hljs-built_in",children:"isNaN"}),`(nan);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(isNan);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string die wel een geldig getal is"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," aNumber = ",e.jsx(n.span,{className:"hljs-string",children:'"42"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Parse de string naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," number = ",e.jsx(n.span,{className:"hljs-built_in",children:"parseInt"}),"(aNumber, ",e.jsx(n.span,{className:"hljs-number",children:"10"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Controleer of de waarde NaN is"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," isNumber = ",e.jsx(n.span,{className:"hljs-title class_",children:"Number"}),".",e.jsx(n.span,{className:"hljs-built_in",children:"isNaN"}),`(number);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(isNumber);
`]})}),`
`,e.jsx(n.p,{children:`De functie Number.isNaN() geeft dus een boolean waarde terug;\r
true als de waarde NaN is en false als de waarde een getal is.`}),`
`,e.jsxs(n.h2,{id:"number-constructor",children:["Number constructor",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#number-constructor",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`We kunnen ook gebruik maken van de Number constructor om in\r
één stap een string om te zetten naar een Number:`}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," stringNumber = ",e.jsx(n.span,{className:"hljs-string",children:'"42"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik de Number constructor om de string om te zetten naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," number = ",e.jsx(n.span,{className:"hljs-title class_",children:"Number"}),`(stringNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(number);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` number);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string die geen getal is"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," notANumber = ",e.jsx(n.span,{className:"hljs-string",children:'"Hello"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik de Number constructor om de string om te zetten naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," nan = ",e.jsx(n.span,{className:"hljs-title class_",children:"Number"}),`(notANumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(nan);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` nan);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string die een kommagetal is"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," float = ",e.jsx(n.span,{className:"hljs-string",children:'"4.2"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik de Number constructor om de string om te zetten naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," floatNumber = ",e.jsx(n.span,{className:"hljs-title class_",children:"Number"}),`(float);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(floatNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` floatNumber);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string die een kommagetal is met een komma"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," comma = ",e.jsx(n.span,{className:"hljs-string",children:'"4,2"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik de Number constructor om de string om te zetten naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," commaNumber = ",e.jsx(n.span,{className:"hljs-title class_",children:"Number"}),`(comma);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(commaNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` commaNumber);
`]})}),`
`,e.jsx(n.p,{children:"Als de string niet omgezet kan worden naar een getal, zal de functie NaN (= Not a Number) teruggeven."}),`
`,e.jsxs(n.h2,{id:"unary-plus-operator",children:["Unary plus operator",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unary-plus-operator",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Een andere manier om een string om te zetten naar een getal is door gebruik te maken van de unary plus operator +."}),`
`,e.jsx(n.p,{children:"De unary plus operator zal de string omzetten naar een getal. Als de string geen getal is, zal de operator NaN teruggeven."}),`
`,e.jsx(n.p,{children:"Dit werkt zowel voor gehele getallen als kommagetallen."}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," stringNumber = ",e.jsx(n.span,{className:"hljs-string",children:'"42"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik de unary plus operator om de string om te zetten naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` number = +stringNumber;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(number);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` number);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string die geen getal is"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," notANumber = ",e.jsx(n.span,{className:"hljs-string",children:'"Hello"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik de unary plus operator om de string om te zetten naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` nan = +notANumber;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(nan);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` nan);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string die een kommagetal is"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," float = ",e.jsx(n.span,{className:"hljs-string",children:'"4.2"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik de unary plus operator om de string om te zetten naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` floatNumber = +float;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(floatNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` floatNumber);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een string die een kommagetal is met een komma"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," comma = ",e.jsx(n.span,{className:"hljs-string",children:'"4,2"'}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik de unary plus operator om de string om te zetten naar een Number"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` commaNumber = +comma;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(commaNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` commaNumber);
`]})}),`
`,e.jsxs(n.h2,{id:"snel-afronden",children:["Snel afronden",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#snel-afronden",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Je kan ook het aantal cijfers na de komma beperken door gebruik te maken van de .toFixed(n) methode."}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een kommagetal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," float = ",e.jsx(n.span,{className:"hljs-number",children:"123.456789"}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik de toFixed() methode om het aantal cijfers na de komma te beperken"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," roundedFloat = float.",e.jsx(n.span,{className:"hljs-title function_",children:"toFixed"}),"(",e.jsx(n.span,{className:"hljs-number",children:"2"}),`);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(roundedFloat);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` roundedFloat);
`]})}),`
`,e.jsxs(n.h2,{id:"van-number-naar-string",children:["Van Number naar String",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#van-number-naar-string",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Soms wil je een getal omzetten naar een string. Dit kan je doen met de functie toString()."}),`
`,e.jsx(n.p,{children:"Probeer het uit:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een getal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," number = ",e.jsx(n.span,{className:"hljs-number",children:"42"}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik de toString() functie om het getal om te zetten naar een string"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," stringNumber = number.",e.jsx(n.span,{className:"hljs-title function_",children:"toString"}),`();\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(stringNumber);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` stringNumber);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Declareer een kommagetal"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," float = ",e.jsx(n.span,{className:"hljs-number",children:"4.2"}),`;\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Gebruik de toString() functie om het kommagetal om te zetten naar een string"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," stringFloat = float.",e.jsx(n.span,{className:"hljs-title function_",children:"toString"}),`();\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(stringFloat);\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-keyword",children:"typeof"}),` stringFloat);
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"overzicht-van-alle-number-functies",children:["Overzicht van alle Number functies",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overzicht-van-alle-number-functies",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Hieronder vind je een overzicht van de belangrijkste en meest gebruikte functies en eigenschappen van het Number object in JavaScript:"}),`
`,e.jsxs(n.h3,{id:"number-methodes",children:["Number methodes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#number-methodes",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.isNaN(value)"})," — Controleert of de waarde NaN is"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.isFinite(value)"})," — Controleert of de waarde een eindig getal is"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.isInteger(value)"})," — Controleert of de waarde een geheel getal is"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.parseInt(string, [radix])"})," — Zet een string om naar een geheel getal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.parseFloat(string)"})," — Zet een string om naar een kommagetal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.prototype.toFixed(n)"})," — Geeft een string met n cijfers na de komma"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.prototype.toExponential(n)"})," — Geeft een string in exponentiële notatie"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.prototype.toPrecision(n)"})," — Geeft een string met n significante cijfers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.prototype.toString([radix])"})," — Zet een getal om naar een string"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.prototype.valueOf()"})," — Geeft de primitieve waarde van een Number object"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"number-eigenschappen",children:["Number eigenschappen",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#number-eigenschappen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.EPSILON"})," — Kleinste verschil tussen twee representaties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.MAX_SAFE_INTEGER"})," — Grootste veilige geheel getal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.MIN_SAFE_INTEGER"})," — Kleinste veilige geheel getal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.MAX_VALUE"})," — Grootste representatiebare getal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.MIN_VALUE"})," — Kleinste positieve representatiebare getal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.NaN"})," — Not a Number"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.POSITIVE_INFINITY"})," — Oneindig positief"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Number.NEGATIVE_INFINITY"})," — Oneindig negatief"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Voor een volledig overzicht zie de ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",children:"MDN Number documentatie"}),"."]})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{r as default};
