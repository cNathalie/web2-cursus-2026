import{j as e}from"./index-3BjEGx3K.js";function l(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.p,{children:["Het type ",e.jsx(s.code,{children:"String"})," in JavaScript wordt gebruikt om tekst te representeren. Een string is een reeks van karakters, zoals letters, cijfers, spaties, leestekens, enzovoort."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"string-declareren",children:["String declareren",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#string-declareren",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Er zijn drie manieren om een String aan te maken:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Met enkele quotes: ",e.jsx(s.code,{children:"'Hello, world!'"})]}),`
`,e.jsxs(s.li,{children:["Met dubbele quotes: ",e.jsx(s.code,{children:'"Hello, world!"'})]}),`
`,e.jsxs(s.li,{children:["Met backticks: ",e.jsx(s.code,{children:"`Hello, world!`"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["Je kan een String ook declareren met de ",e.jsx(s.code,{children:"String"})," constructor:"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Met het new keyword"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," str = ",e.jsx(s.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"String"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Hello, world!"'}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(str);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Zonder het new keyword"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," str2 = ",e.jsx(s.span,{className:"hljs-title class_",children:"String"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Hello, world!"'}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(str2);
`]})}),`
`,e.jsx(s.p,{children:"De simpelste, en aanbevolen manier is het aanmaken van een string literal."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// String literal"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," str3 = ",e.jsx(s.span,{className:"hljs-string",children:'"Hello, world!"'}),`;\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(str3);
`]})}),`
`,e.jsxs(s.h2,{id:"concateneren",children:["Concateneren",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#concateneren",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Soms is het nodig om dynamisch strings op te bouwen. Dit kan je doen door de + operator te gebruiken."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Concateneren met de + operator"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," firstName = ",e.jsx(s.span,{className:"hljs-string",children:'"John"'}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," lastName = ",e.jsx(s.span,{className:"hljs-string",children:'"Doe"'}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," fullName = firstName + ",e.jsx(s.span,{className:"hljs-string",children:'" "'}),` + lastName;\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(fullName);
`]})}),`
`,e.jsx(s.p,{children:"Je kan ook concateneren met de methode concat():"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Concateneren met de concat() methode"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," firstName = ",e.jsx(s.span,{className:"hljs-string",children:'"John"'}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," lastName = ",e.jsx(s.span,{className:"hljs-string",children:'"Doe"'}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," fullName = firstName.",e.jsx(s.span,{className:"hljs-title function_",children:"concat"}),"(",e.jsx(s.span,{className:"hljs-string",children:'" "'}),`, lastName);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(fullName);
`]})}),`
`,e.jsxs(s.p,{children:["Het is gemakkelijker en aanbevolen om een template literal aan te maken met backticks ( ` ... ` ) en variabelen in te voegen met ",e.jsx(s.code,{children:"${myVar}"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Concateneren met template literals"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," firstName = ",e.jsx(s.span,{className:"hljs-string",children:'"John"'}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," lastName = ",e.jsx(s.span,{className:"hljs-string",children:'"Doe"'}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," fullName = ",e.jsxs(s.span,{className:"hljs-string",children:["`",e.jsx(s.span,{className:"hljs-subst",children:"${firstName}"})," ",e.jsx(s.span,{className:"hljs-subst",children:"${lastName}"}),"`"]}),`;\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(fullName);
`]})}),`
`,e.jsx(s.p,{children:`String methodes\r
Strings hebben verschillende methodes die je kan gebruiken om manipulaties uit te voeren. Hier zijn enkele voorbeelden:`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"length"}),": geeft de lengte van de string terug"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"toUpperCase()"}),": zet de string om naar hoofdletters"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"toLowerCase()"}),": zet de string om naar kleine letters"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"trim()"}),": verwijdert spaties aan het begin en einde van de string"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"split()"}),": splitst de string op in een array van substrings, je geeft mee op welk karakter de splitsing moet gebeuren."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"replace()"}),": vervangt een deel van de string door een andere string"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"charAt()"}),": geeft het karakter op een bepaalde index terug"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"indexOf()"}),": geeft de index van een bepaalde substring"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"lastIndexOf()"}),": geeft de laatste index van een bepaalde substring"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"substring()"}),": geeft een deel van de string terug, je geeft de start en eind index mee"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"slice()"}),`: geeft een deel van de string terug, je geeft de start en eind index mee\r
Probeer enkele van deze methodes uit:`]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Een string met veel 'trailing spaces'"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," str = ",e.jsx(s.span,{className:"hljs-string",children:'"Hello, world!     "'}),`;\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// De lengte = het aantal karakters"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(str.",e.jsx(s.span,{className:"hljs-property",children:"length"}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Omzetten naar hoofdletters"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(str.",e.jsx(s.span,{className:"hljs-title function_",children:"toUpperCase"}),`());\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Omzetten naar kleine letters"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(str.",e.jsx(s.span,{className:"hljs-title function_",children:"toLowerCase"}),`());\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Spaties verwijderen"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(str.",e.jsx(s.span,{className:"hljs-title function_",children:"trim"}),`());\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Opsplitsen in een array"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(str.",e.jsx(s.span,{className:"hljs-title function_",children:"split"}),"(",e.jsx(s.span,{className:"hljs-string",children:'","'}),`));\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Vervangen van een deel van de string"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(str.",e.jsx(s.span,{className:"hljs-title function_",children:"replace"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"world"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"John"'}),`));\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Karakter op een bepaalde index"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(str.",e.jsx(s.span,{className:"hljs-title function_",children:"charAt"}),"(",e.jsx(s.span,{className:"hljs-number",children:"0"}),`));\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Index van een bepaalde substring"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(str.",e.jsx(s.span,{className:"hljs-title function_",children:"indexOf"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"world"'}),`));\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Laatste index van een bepaalde substring"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(str.",e.jsx(s.span,{className:"hljs-title function_",children:"lastIndexOf"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"world"'}),`));\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Deel van de string"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(str.",e.jsx(s.span,{className:"hljs-title function_",children:"substring"}),"(",e.jsx(s.span,{className:"hljs-number",children:"0"}),", ",e.jsx(s.span,{className:"hljs-number",children:"5"}),`));\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Deel van de string"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(str.",e.jsx(s.span,{className:"hljs-title function_",children:"slice"}),"(",e.jsx(s.span,{className:"hljs-number",children:"0"}),", ",e.jsx(s.span,{className:"hljs-number",children:"5"}),`));
`]})}),`
`,e.jsxs(s.h2,{id:"speciale-karakters",children:["Speciale karakters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#speciale-karakters",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Strings kunnen speciale karakters bevatten die je niet zomaar kan typen. Om deze karakters te gebruiken, moet je een escape karakter gebruiken: de backslash ()."}),`
`,e.jsx(s.p,{children:"Sommige karakters maken deel uit van de programmeertaal en worden dus niet standaard letterlijk weergegeven in strings. Als je ze dus echt wil zien, moet je ze escapen."}),`
`,e.jsx(s.p,{children:"Hier zijn enkele voorbeelden van speciale karakters:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"\\n : nieuwe lijn"}),`
`,e.jsx(s.li,{children:"\\t : tab"}),`
`,e.jsx(s.li,{children:"' : enkele quote"}),`
`,e.jsx(s.li,{children:'" : dubbele quote'}),`
`,e.jsx(s.li,{children:`\\ : backslash\r
Probeer enkele van deze karakters uit:`}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Nieuwe lijn"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Hello\\nworld!"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Tab"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Hello\\tworld!"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Enkele quote"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:`"Hello'world!"`}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Dubbele quote"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:`'Hello"world!'`}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Backslash"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Hello\\\\world!"'}),`);
`]})}),`
`,e.jsxs(s.h2,{id:"overzicht-van-alle-string-functies",children:["Overzicht van alle String functies",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overzicht-van-alle-string-functies",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Hieronder vind je een overzicht van de belangrijkste en meest gebruikte functies en eigenschappen van het String object in JavaScript:"}),`
`,e.jsxs(s.h3,{id:"string-methodes",children:["String methodes",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#string-methodes",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.length"})," — Geeft de lengte van de string"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.charAt(index)"})," — Geeft het karakter op een bepaalde positie"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.charCodeAt(index)"})," — Geeft de Unicode van het karakter op een bepaalde positie"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.concat(str)"})," — Voegt één of meerdere strings samen"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.includes(search, [start])"})," — Controleert of de string een bepaalde substring bevat"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.endsWith(search, [length])"})," — Controleert of de string eindigt op een bepaalde substring"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.startsWith(search, [start])"})," — Controleert of de string begint met een bepaalde substring"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.indexOf(search, [start])"})," — Geeft de index van de eerste vondst van een substring"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.lastIndexOf(search, [start])"})," — Geeft de index van de laatste vondst van een substring"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.localeCompare(compareString)"})," — Vergelijkt twee strings op basis van de locale"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.match(regexp)"})," — Zoekt naar overeenkomsten met een reguliere expressie"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.matchAll(regexp)"})," — Geeft alle overeenkomsten met een reguliere expressie"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.normalize([form])"})," — Normaliseert Unicode-strings"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.padEnd(targetLength, padString)"})," — Vult de string aan het einde op tot een bepaalde lengte"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.padStart(targetLength, padString)"})," — Vult de string aan het begin op tot een bepaalde lengte"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.repeat(count)"})," — Herhaalt de string een aantal keer"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.replace(search, replacement)"})," — Vervangt een substring door een andere waarde"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.replaceAll(search, replacement)"})," — Vervangt alle voorkomens van een substring"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.search(regexp)"})," — Zoekt naar een match met een reguliere expressie"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.slice(begin, [end])"})," — Geeft een deel van de string terug"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.split(separator, [limit])"})," — Splitst de string op in een array"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.substring(start, [end])"})," — Geeft een deel van de string terug"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.toLowerCase()"})," — Zet de string om naar kleine letters"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.toUpperCase()"})," — Zet de string om naar hoofdletters"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.trim()"})," — Verwijdert spaties aan het begin en einde"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.trimStart()"})," / ",e.jsx(s.code,{children:"trimLeft()"})," — Verwijdert spaties aan het begin"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.trimEnd()"})," / ",e.jsx(s.code,{children:"trimRight()"})," — Verwijdert spaties aan het einde"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"String.prototype.valueOf()"})," — Geeft de primitieve waarde van een String object"]}),`
`]}),`
`,e.jsxs(s.p,{children:["Voor een volledig overzicht zie de ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",children:"MDN String documentatie"}),"."]})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{r as default};
