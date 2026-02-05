import{j as e}from"./index-3BjEGx3K.js";function a(n){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.p,{children:[e.jsx(s.a,{href:"#strings-valideren",children:"Strings valideren"})," - ",e.jsx(s.a,{href:"#objecten-vergelijken",children:"Objecten vergelijken"})]}),`
`,e.jsxs(s.p,{children:["Gebruikersinput moet ",e.jsx(s.strong,{children:"altijd"}),` gevalideerd worden om ervoor te zorgen dat de gegevens correct,\r
compleet en veilig zijn voordat ze verwerkt of opgeslagen worden.\r
Validatie helpt om fouten te voorkomen, de integriteit van de gegevens te waarborgen en\r
beveiligingsrisico's te verminderen.`]}),`
`,e.jsxs(s.h2,{id:"types-validatie",children:["Types validatie",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#types-validatie",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:`Client-side validatie: Dit gebeurt in de browser van de gebruiker voordat het formulier wordt verzonden.\r
Het biedt directe feedback aan de gebruiker en kan helpen om eenvoudige fouten te voorkomen, zoals\r
ontbrekende verplichte velden of onjuiste formaten (bijv. een ongeldig e-mailadres).`}),`
`,e.jsx(s.li,{children:`Server-side validatie: Dit gebeurt op de server nadat het formulier is verzonden.\r
Het is essentieel voor beveiliging, omdat client-side validatie kan worden omzeild.`}),`
`]}),`
`,e.jsx(s.p,{children:"Hier zijn enkele veelvoorkomende methoden voor formuliervalidatie:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"HTML5 ingebouwde validatie"}),": Gebruik van HTML5-attributen."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"JavaScript validatie*"}),": Schrijven van aangepaste JavaScript-functies om de invoer te controleren voordat het formulier wordt verzonden."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Reguliere expressies"}),": Gebruik van regex om complexe patronen te valideren, zoals wachtwoorden of telefoonnummers."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Validatiebibliotheken"}),": Gebruik van bestaande bibliotheken zoals Joi, Yup of Validator.js voor uitgebreide validatie."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Server-side validatie"}),": Implementeren van validatieregels op de server met behulp van backend-talen zoals Node.js, Python, PHP, etc."]}),`
`]}),`
`,e.jsx(s.p,{children:"Het is belangrijk om zowel client-side als server-side validatie te implementeren voor een robuuste en veilige gebruikerservaring."}),`
`,e.jsx(s.p,{children:"Wij focussen op client-side validatie."}),`
`,e.jsxs(s.h2,{id:"html5-ingebouwde-validatie",children:["HTML5 ingebouwde validatie",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#html5-ingebouwde-validatie",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`HTML5 biedt verschillende ingebouwde attributen die je kunt gebruiken om formuliervelden te valideren zonder extra JavaScript-code te schrijven.\r
Hier zijn enkele veelgebruikte HTML5-validatieattributen:`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"required"}),": Zorgt ervoor dat een veld niet leeg mag zijn."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"type"}),": Specificeert het type invoer, zoals ",e.jsx(s.code,{children:"email"}),", ",e.jsx(s.code,{children:"url"}),", ",e.jsx(s.code,{children:"number"}),", etc., wat automatisch de juiste validatie toepast."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"min"})," en ",e.jsx(s.code,{children:"max"}),": Definieert de minimale en maximale waarden voor numerieke invoer."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"minlength"})," en ",e.jsx(s.code,{children:"maxlength"}),": Bepaalt de minimale en maximale lengte van tekstinvoer."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pattern"}),`: Hiermee kun je een reguliere expressie opgeven om de invoer te valideren.\r
Hier is een voorbeeld van een formulier met HTML5-validatieattributen:`]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"form"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"label"})," ",e.jsx(s.span,{className:"hljs-attr",children:"for"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"email"'}),">"]}),"E-mail:",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"label"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"input"})," ",e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"email"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"email"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"name"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"email"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"required"})," />"]}),`\r
\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"label"})," ",e.jsx(s.span,{className:"hljs-attr",children:"for"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"age"'}),">"]}),"Leeftijd:",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"label"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"input"})," ",e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"number"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"age"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"name"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"age"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"min"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"18"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"max"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"99"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"required"})," />"]}),`\r
\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"label"})," ",e.jsx(s.span,{className:"hljs-attr",children:"for"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"username"'}),">"]}),"Gebruikersnaam:",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"label"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"input"}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"text"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"username"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"username"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"minlength"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"4"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"maxlength"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"12"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"required"}),`\r
  />`]}),`\r
\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"button"})," ",e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"submit"'}),">"]}),"Verzenden",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"button"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"form"}),">"]}),`
`]})}),`
`,e.jsx(s.p,{children:"In dit voorbeeld moeten gebruikers een geldig e-mailadres invoeren, een leeftijd tussen 18 en 99, en een gebruikersnaam van 4 tot 12 tekens lang zijn voordat ze het formulier kunnen verzenden."}),`
`,e.jsxs(s.h2,{id:"javascript-validatie",children:["JavaScript validatie",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#javascript-validatie",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Hoewel HTML5-validatie handig is, biedt het niet altijd voldoende controle over de validatieprocessen. Met JavaScript kun je aangepaste validatieregels implementeren en gebruikersfeedback geven.\r
Hier is een voorbeeld van hoe je JavaScript kunt gebruiken om een formulier te valideren:`}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsxs("form",{id:"myForm",children:[e.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Voer je e-mail in",required:!0}),e.jsx("br",{}),e.jsx("input",{type:"number",id:"age",name:"age",placeholder:"Voer je leeftijd in",required:!0}),e.jsx("br",{}),e.jsx("button",{type:"submit",children:"Verzenden"})]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"form"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"myForm"'}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"input"}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"email"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"email"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"email"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"placeholder"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"Voer je e-mail in"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"required"}),`\r
  />`]}),`\r
\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"input"}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"number"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"age"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"name"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"age"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"placeholder"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"Voer je leeftijd in"'}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"required"}),`\r
  />`]}),`\r
\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"button"})," ",e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"submit"'}),">"]}),"Verzenden",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"button"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"form"}),">"]}),`
`]})}),`
`,e.jsx(s.p,{children:"Voer de JS code uit via de console van je browser en test het gedrag van het bovenstaande formulier."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," form = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"myForm"'}),`);\r
form.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"submit"'}),", ",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"event"}),") =>"]}),` {\r
  event.`,e.jsx(s.span,{className:"hljs-title function_",children:"preventDefault"}),"(); ",e.jsx(s.span,{className:"hljs-comment",children:"// Voorkom standaard formulierverzending"}),`\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Haal waarden op"}),`\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," email = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"email"'}),").",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," age = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"age"'}),").",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Eenvoudige validatie"}),`\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"}),` (!email || !age) {\r
    `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Vul alstublieft alle velden in."'}),`);\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"return"}),`;\r
  }\r
\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (age < ",e.jsx(s.span,{className:"hljs-number",children:"18"})," || age > ",e.jsx(s.span,{className:"hljs-number",children:"99"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Leeftijd moet tussen 18 en 99 liggen."'}),`);\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"return"}),`;\r
  }\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Als alles geldig is, kun je het formulier verzenden"}),`\r
  form.`,e.jsx(s.span,{className:"hljs-title function_",children:"submit"}),`();\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Formulier succesvol verzonden!"'}),`);\r
});
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"strings-valideren",children:["Strings valideren",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#strings-valideren",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Bij het verwerken van gebruikersinput is het belangrijk om te controleren of een string geldig is. Hieronder vind je uitleg en voorbeelden van veelvoorkomende stringvalidaties:"}),`
`,e.jsxs(s.h3,{id:"1-lengte-controleren",children:["1. Lengte controleren",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-lengte-controleren",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Je wilt vaak dat een string een minimale of maximale lengte heeft, bijvoorbeeld voor een gebruikersnaam of wachtwoord."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," username = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"username"'}),").",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (username.",e.jsx(s.span,{className:"hljs-property",children:"length"})," < ",e.jsx(s.span,{className:"hljs-number",children:"4"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Gebruikersnaam moet minstens 4 tekens lang zijn."'}),`);\r
}\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (username.",e.jsx(s.span,{className:"hljs-property",children:"length"})," > ",e.jsx(s.span,{className:"hljs-number",children:"12"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Gebruikersnaam mag maximaal 12 tekens zijn."'}),`);\r
}
`]})}),`
`,e.jsxs(s.h3,{id:"2-null-of-lege-string-controleren",children:["2. Null of lege string controleren",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-null-of-lege-string-controleren",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Controleer of een veld niet leeg is:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," input = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"input"'}),").",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"}),` (!input) {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Vul dit veld in."'}),`);\r
}
`]})}),`
`,e.jsxs(s.h3,{id:"3-strings-vergelijken",children:["3. Strings vergelijken",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-strings-vergelijken",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Je kan strings vergelijken met ",e.jsx(s.code,{children:"==="})," of ",e.jsx(s.code,{children:".toLowerCase()"})," voor hoofdletterongevoelige vergelijking:"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," password = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"password"'}),").",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," confirm = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"confirm"'}),").",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"}),` (password !== confirm) {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Wachtwoorden komen niet overeen."'}),`);\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Hoofdletterongevoelig vergelijken"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," email = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"email"'}),").",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (email.",e.jsx(s.span,{className:"hljs-title function_",children:"toLowerCase"}),"() === ",e.jsx(s.span,{className:"hljs-string",children:'"test@example.com"'}),`) {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Dit e-mailadres is niet toegestaan."'}),`);\r
}
`]})}),`
`,e.jsx(s.p,{children:"Hieronder zie je een voorbeeld van hoe je strings kan vergelijken met de .localeCompare() methode:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," string1 = ",e.jsx(s.span,{className:"hljs-string",children:'"apple"'}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," string2 = ",e.jsx(s.span,{className:"hljs-string",children:'"banana"'}),`;\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," result = string1.",e.jsx(s.span,{className:"hljs-title function_",children:"localeCompare"}),`(string2);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (result < ",e.jsx(s.span,{className:"hljs-number",children:"0"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"string1 komt voor string2"'}),`);\r
} `,e.jsx(s.span,{className:"hljs-keyword",children:"else"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (result > ",e.jsx(s.span,{className:"hljs-number",children:"0"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"string1 komt na string2"'}),`);\r
} `,e.jsx(s.span,{className:"hljs-keyword",children:"else"}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"string1 is gelijk aan string2"'}),`);\r
}
`]})}),`
`,e.jsx(s.p,{children:"De methode geeft een getal terug dat aangeeft welke tekst lexicografisch eerst komt:"}),`
`,e.jsx(s.p,{children:`Het resultaat is negatief indien string 1 voor string 2 komt.\r
Het resultaat is positief indien string 1 na string 2 komt.\r
Het resultaat is 0 indien de strings gelijk zijn.`}),`
`,e.jsxs(s.h3,{id:"4-string-omzetten-naar-een-getal",children:["4. String omzetten naar een getal",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-string-omzetten-naar-een-getal",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Soms moet je controleren of een string een geldig getal is, bijvoorbeeld bij een leeftijdsveld:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ageStr = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"age"'}),").",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," age = ",e.jsx(s.span,{className:"hljs-title class_",children:"Number"}),`(ageStr);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (",e.jsx(s.span,{className:"hljs-title class_",children:"Number"}),".",e.jsx(s.span,{className:"hljs-built_in",children:"isNaN"}),`(age)) {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Voer een geldige leeftijd in."'}),`);\r
} `,e.jsx(s.span,{className:"hljs-keyword",children:"else"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (age < ",e.jsx(s.span,{className:"hljs-number",children:"18"})," || age > ",e.jsx(s.span,{className:"hljs-number",children:"99"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Leeftijd moet tussen 18 en 99 liggen."'}),`);\r
}
`]})}),`
`,e.jsxs(s.h3,{id:"5-extra-reguliere-expressies-voor-patronen",children:["5. Extra: Reguliere expressies voor patronen",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-extra-reguliere-expressies-voor-patronen",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"Nice To Know - geen examenleerstof"})}),`
`,e.jsx(s.p,{children:"Voor complexere validatie kun je een regex gebruiken, bijvoorbeeld voor e-mail:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," email = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"email"'}),").",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," emailPattern = ",e.jsx(s.span,{className:"hljs-regexp",children:"/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/"}),`;\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (!emailPattern.",e.jsx(s.span,{className:"hljs-title function_",children:"test"}),`(email)) {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Voer een geldig e-mailadres in."'}),`);\r
}
`]})}),`
`,e.jsxs(s.p,{children:["Meer over reguliere expressies kan je ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions",children:"hier"})," vinden."]}),`
`,e.jsx(s.p,{children:"Door strings goed te valideren voorkom je fouten en zorg je voor betrouwbare en veilige input in je formulieren."}),`
`,e.jsxs(s.h2,{id:"gelijkheid-van-twee-waardes-bepalen",children:["Gelijkheid van twee waardes bepalen",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gelijkheid-van-twee-waardes-bepalen",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Soms wil je controleren of twee waardes gelijk zijn aan elkaar.\r
Dit kan je doen met de === operator. Deze operator controleert of de waardes gelijk zijn en\r
of ze van hetzelfde type zijn. Als je enkel wil controleren of de waardes gelijk zijn,\r
dan kan je de == operator gebruiken.`}),`
`,e.jsx(s.p,{children:`Hieronder staan twee inputvelden, het eerste is van het type text en het tweede is van het type number.\r
Vul zowel in de de tekst-input als in de number-input dezelfde waarde in. Voer daarna de JavaScript-code uit in de Console-tab van de Developer Tools om te zien of de waardes gelijk zijn.`}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsxs(s.p,{children:[e.jsx("input",{type:"text",id:"input1"})," ?= ",e.jsx("input",{type:"number",id:"input2"})]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," input1 = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#input1"'}),`);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," input2 = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#input2"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (input1.",e.jsx(s.span,{className:"hljs-property",children:"value"})," === input2.",e.jsx(s.span,{className:"hljs-property",children:"value"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"De waardes zijn gelijk"'}),`);\r
} `,e.jsx(s.span,{className:"hljs-keyword",children:"else"}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"De waardes zijn niet gelijk"'}),`);\r
}
`]})}),`
`,e.jsx(s.p,{children:"De waardes zijn gelijk als ze van hetzelfde type zijn en dezelfde waarde hebben."}),`
`,e.jsx("div",{style:{border:"solid 2px gold",textAlign:"center"},children:e.jsx(s.p,{children:"Inputvelden geven ALTIJD strings terug, ook wanneer het type number is!"})}),`
`,e.jsx(s.p,{children:`Als we onze number-input waarde echt als een getal willen behandelen,\r
moeten we het dus eerst omzetten naar een Number:`}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," input1 = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#input1"'}),`);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," input2 = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#input2"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Zet de string om naar een Number"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," numberValue = ",e.jsx(s.span,{className:"hljs-title class_",children:"Number"}),"(input2.",e.jsx(s.span,{className:"hljs-property",children:"value"}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (input1.",e.jsx(s.span,{className:"hljs-property",children:"value"}),` === numberValue) {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"De waardes zijn gelijk"'}),`);\r
} `,e.jsx(s.span,{className:"hljs-keyword",children:"else"}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"De waardes zijn niet gelijk"'}),`);\r
}
`]})}),`
`,e.jsx(s.p,{children:"We vergelijken nu dit gedrag, met dat van de == operator:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," input1 = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#input1"'}),`);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," input2 = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#input2"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (input1.",e.jsx(s.span,{className:"hljs-property",children:"value"})," == input2.",e.jsx(s.span,{className:"hljs-property",children:"value"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"De waardes zijn gelijk"'}),`);\r
} `,e.jsx(s.span,{className:"hljs-keyword",children:"else"}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"De waardes zijn niet gelijk"'}),`);\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Zet de string om naar een Number"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," numberValue = ",e.jsx(s.span,{className:"hljs-title class_",children:"Number"}),"(input2.",e.jsx(s.span,{className:"hljs-property",children:"value"}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (input1.",e.jsx(s.span,{className:"hljs-property",children:"value"}),` == numberValue) {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"De waardes zijn gelijk"'}),`);\r
} `,e.jsx(s.span,{className:"hljs-keyword",children:"else"}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"De waardes zijn niet gelijk"'}),`);\r
}
`]})}),`
`,e.jsx(s.p,{children:`We merken op dat de == operator de waardes als gelijk beschouwt, zelfs als ze van verschillende types zijn. Dit is niet altijd wenselijk,\r
dus gebruik de === operator wanneer je zeker wil zijn dat twee waardes écht hetzelfde zijn.`}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"objecten-vergelijken",children:["Objecten vergelijken",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#objecten-vergelijken",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Het vergelijken van objecten in JavaScript werkt anders dan bij primitieve types zoals strings of getallen. Twee objecten zijn alleen gelijk (",e.jsx(s.code,{children:"==="})," of ",e.jsx(s.code,{children:"=="}),") als ze exact hetzelfde referentie-adres in het geheugen delen."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," obj1 = { ",e.jsx(s.span,{className:"hljs-attr",children:"naam"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Jan"'}),` };\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," obj2 = { ",e.jsx(s.span,{className:"hljs-attr",children:"naam"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Jan"'}),` };\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` obj3 = obj1;\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(obj1 === obj2); ",e.jsx(s.span,{className:"hljs-comment",children:"// false"}),`\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(obj1 === obj3); ",e.jsx(s.span,{className:"hljs-comment",children:"// true"}),`
`]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Ook al hebben ",e.jsx(s.code,{children:"obj1"})," en ",e.jsx(s.code,{children:"obj2"})," exact dezelfde inhoud, ze zijn niet gelijk omdat het verschillende objecten zijn in het geheugen. Alleen als je een object direct toewijst (",e.jsx(s.code,{children:"obj3 = obj1"}),"), zijn ze gelijk."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Wil je de inhoud van objecten vergelijken, dan moet je dit zelf doen. Bijvoorbeeld met ",e.jsx(s.code,{children:"JSON.stringify()"})," voor eenvoudige gevallen:"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," obj1 = { ",e.jsx(s.span,{className:"hljs-attr",children:"naam"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Jan"'}),` };\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," obj2 = { ",e.jsx(s.span,{className:"hljs-attr",children:"naam"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Jan"'}),` };\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-title class_",children:"JSON"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"stringify"}),"(obj1) === ",e.jsx(s.span,{className:"hljs-title class_",children:"JSON"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"stringify"}),"(obj2)); ",e.jsx(s.span,{className:"hljs-comment",children:"// true"}),`
`]})}),`
`,e.jsx(s.p,{children:"Let op: deze methode werkt alleen als de volgorde van de properties gelijk is en er geen functies of complexe types in het object zitten."}),`
`,e.jsx(s.p,{children:"Of je kan alle properties handmatig gaan vergelijken:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," obj1 = { ",e.jsx(s.span,{className:"hljs-attr",children:"naam"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Jan"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"leeftijd"}),": ",e.jsx(s.span,{className:"hljs-number",children:"30"}),` };\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," obj2 = { ",e.jsx(s.span,{className:"hljs-attr",children:"naam"}),": ",e.jsx(s.span,{className:"hljs-string",children:'"Jan"'}),", ",e.jsx(s.span,{className:"hljs-attr",children:"leeftijd"}),": ",e.jsx(s.span,{className:"hljs-number",children:"30"}),` };\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (obj1.",e.jsx(s.span,{className:"hljs-property",children:"naam"})," === obj2.",e.jsx(s.span,{className:"hljs-property",children:"naam"})," && obj1.",e.jsx(s.span,{className:"hljs-property",children:"leeftijd"})," === obj2.",e.jsx(s.span,{className:"hljs-property",children:"leeftijd"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"De objecten zijn gelijk"'}),`);\r
} `,e.jsx(s.span,{className:"hljs-keyword",children:"else"}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"De objecten zijn niet gelijk"'}),`);\r
}
`]})}),`
`,e.jsx(s.p,{children:"Voor diepere of complexere vergelijkingen kun je een utility library gebruiken."})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{r as default};
