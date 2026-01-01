import{j as e}from"./index-DsUoGS6D.js";const l="/web2-cursus-2026/images/timezones.png";function a(s){const n={a:"a",code:"code",h2:"h2",h4:"h4",hr:"hr",p:"p",pre:"pre",span:"span",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"inleiding",children:["Inleiding",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#inleiding",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Een object is een container voor gegevens. Een object kan meerdere waarden bevatten, die we eigenschappen of properties noemen. Een eigenschap bestaat uit een naam en een waarde (key-value pair). De naam van een eigenschap is een string, en de waarde kan van elk type zijn."}),`
`,e.jsx(n.p,{children:"Aangezien de waarde van een property van elk soort type kan zijn, kan het ook een functie zijn. Dan wordt deze property een methode genoemd. Een methode is dus een functie die is opgeslagen als een eigenschap van een object."}),`
`,e.jsxs(n.h4,{id:"een-javascript-object-is-een-variabele-met-meerdere-waardes-in-opgeslagen",children:["Een JavaScript object is een variabele met meerdere waardes in opgeslagen:",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#een-javascript-object-is-een-variabele-met-meerdere-waardes-in-opgeslagen",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` person = {\r
  `,e.jsx(n.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"John"'}),`,\r
  `,e.jsx(n.span,{className:"hljs-attr",children:"age"}),": ",e.jsx(n.span,{className:"hljs-number",children:"30"}),`,\r
  `,e.jsx(n.span,{className:"hljs-attr",children:"isMarried"}),": ",e.jsx(n.span,{className:"hljs-literal",children:"false"}),`,\r
  `,e.jsx(n.span,{className:"hljs-attr",children:"greet"}),": ",e.jsx(n.span,{className:"hljs-keyword",children:"function"})," (",e.jsx(n.span,{className:"hljs-params"}),`) {\r
    `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Hello, my name is "'})," + ",e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"name"}),`);\r
  },\r
};
`]})}),`
`,e.jsxs(n.p,{children:["In dit voorbeeld hebben we een object ",e.jsx(n.code,{children:"person"})," gemaakt met vier eigenschappen: ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"age"}),", ",e.jsx(n.code,{children:"isMarried"})," en ",e.jsx(n.code,{children:"greet"}),". De laatste eigenschap is een methode die een bericht logt naar de console."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"een-object-instantiëren",children:["Een object instantiëren",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#een-object-instantiëren",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Om een object te maken, gebruiken we de object literal syntax. Dit is een set van accolades ",e.jsx(n.code,{children:"{}"})," met daarin de eigenschappen en waarden van het object, zoals in het voorbeeld hierboven."]}),`
`,e.jsxs(n.p,{children:["Je kan ook een object instantiëren met de ",e.jsx(n.code,{children:"new"})," operator en een constructor functie."]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-comment",children:"// Declareer eerst je constructor functie:"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(n.span,{className:"hljs-title function_",children:"Person"}),"(",e.jsx(n.span,{className:"hljs-params",children:"name, age, isMarried"}),`) {\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"name"}),` = name;\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"age"}),` = age;\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"isMarried"}),` = isMarried;\r
  `,e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"greet"})," = ",e.jsx(n.span,{className:"hljs-keyword",children:"function"})," (",e.jsx(n.span,{className:"hljs-params"}),`) {\r
    `,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"Hello, my name is "'})," + ",e.jsx(n.span,{className:"hljs-variable language_",children:"this"}),".",e.jsx(n.span,{className:"hljs-property",children:"name"}),`);\r
  };\r
}\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Roep je functie op met parameters:"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," person = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"Person"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"John"'}),", ",e.jsx(n.span,{className:"hljs-number",children:"30"}),", ",e.jsx(n.span,{className:"hljs-literal",children:"false"}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Roep de methode greet aan:"}),`\r
person.`,e.jsx(n.span,{className:"hljs-title function_",children:"greet"}),`();\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// Log het resultaat:"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(person);
`]})}),`
`,e.jsxs(n.p,{children:["In dit voorbeeld hebben we een constructor functie ",e.jsx(n.code,{children:"Person"})," gemaakt die een nieuw object aanmaakt met de gegeven eigenschappen. We hebben een nieuw object ",e.jsx(n.code,{children:"person"})," aangemaakt met de ",e.jsx(n.code,{children:"new"})," operator en de constructor functie ",e.jsx(n.code,{children:"Person"})," opgeroepen met de parameters ",e.jsx(n.code,{children:"'John'"}),", ",e.jsx(n.code,{children:"30"})," en ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"eigenschappen-en-methoden",children:["Eigenschappen en Methoden",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eigenschappen-en-methoden",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Om de eigenschappen en methoden van een object te benaderen, gebruiken we de dot-notatie of de bracket-notatie."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(person.",e.jsx(n.span,{className:"hljs-property",children:"name"}),"); ",e.jsx(n.span,{className:"hljs-comment",children:"// John"}),`\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(person[",e.jsx(n.span,{className:"hljs-string",children:'"age"'}),"]); ",e.jsx(n.span,{className:"hljs-comment",children:"// 30"}),`\r
person.`,e.jsx(n.span,{className:"hljs-title function_",children:"greet"}),"(); ",e.jsx(n.span,{className:"hljs-comment",children:"// Hello, my name is John"}),`
`]})}),`
`,e.jsxs(n.p,{children:["In dit voorbeeld hebben we de eigenschappen ",e.jsx(n.code,{children:"name"})," en ",e.jsx(n.code,{children:"age"})," benaderd met de dot-notatie en de bracket-notatie. We hebben ook de methode ",e.jsx(n.code,{children:"greet"})," aangeroepen met de dot-notatie en door het toevoegen van de ronde haakjes wordt de functie uitgevoerd."]}),`
`,e.jsxs(n.p,{children:["Wanneer een property niet bestaat in een object, zal de waarde ",e.jsx(n.code,{children:"undefined"})," worden geretourneerd."]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(person.",e.jsx(n.span,{className:"hljs-property",children:"city"}),"); ",e.jsx(n.span,{className:"hljs-comment",children:"// undefined"}),`
`]})}),`
`,e.jsx(n.p,{children:"Je kan ook een property verwijderen uit een object:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"delete"})," person.",e.jsx(n.span,{className:"hljs-property",children:"isMarried"}),`;\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(person);\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// { name: 'John', age: 30, greet: [Function: greet] }"}),`
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"vergelijken-van-objecten",children:["Vergelijken van objecten",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vergelijken-van-objecten",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Objecten worden vergeleken door referentie, niet door waarde. Dit betekent dat twee objecten alleen gelijk zijn als ze naar dezelfde locatie in het geheugen verwijzen."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," person1 = { ",e.jsx(n.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"John"'}),` };\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," person2 = { ",e.jsx(n.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"John"'}),` };\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(person1 === person2); ",e.jsx(n.span,{className:"hljs-comment",children:"// false"}),`
`]})}),`
`,e.jsxs(n.p,{children:["In dit voorbeeld hebben we twee objecten ",e.jsx(n.code,{children:"person1"})," en ",e.jsx(n.code,{children:"person2"})," gemaakt met dezelfde eigenschap ",e.jsx(n.code,{children:"name"}),". Omdat ze naar verschillende locaties in het geheugen verwijzen, zijn ze niet gelijk."]}),`
`,e.jsx(n.p,{children:"Wanneer we person2 gelijk maken aan person1, dan verwijzen ze naar dezelfde locatie in het geheugen en zijn ze wel gelijk:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," person1 = { ",e.jsx(n.span,{className:"hljs-attr",children:"name"}),": ",e.jsx(n.span,{className:"hljs-string",children:'"John"'}),` };\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"}),` person2 = person1;\r
\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),"(person1 === person2); ",e.jsx(n.span,{className:"hljs-comment",children:"// true"}),`
`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"date-objecten",children:["Date objecten",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#date-objecten",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["JavaScript heeft een ingebouwd ",e.jsx(n.code,{children:"Date"})," object dat wordt gebruikt om datums en tijden te representeren. Je kan een nieuw ",e.jsx(n.code,{children:"Date"})," object maken met de ",e.jsx(n.code,{children:"new"})," operator en de constructor functie ",e.jsx(n.code,{children:"Date"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-javascript",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," today = ",e.jsx(n.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(n.span,{className:"hljs-title class_",children:"Date"}),`();\r
`,e.jsx(n.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"log"}),`(today);
`]})}),`
`,e.jsx(n.p,{children:"Dit zal het huidige datum en tijd weergeven in de console. Je kan ook een specifieke datum en tijd instellen door parameters mee te geven aan de constructor functie."}),`
`,e.jsxs(n.p,{children:["Datum en tijd is een complex onderwerp in het ontwikkelen van software. Gelukkig zijn er ook libraries zoals ",e.jsx(n.a,{href:"https://momentjs.com/",children:"Moment.js"})," die je kan gebruiken om met datums en tijden te werken."]}),`
`,e.jsx("img",{src:l,alt:"Timezones",className:"img-fluid my-3"})]})}function c(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{c as default};
