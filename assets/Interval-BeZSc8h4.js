import{j as e}from"./index-3BjEGx3K.js";function a(n){const s={a:"a",br:"br",code:"code",em:"em",h2:"h2",hr:"hr",p:"p",pre:"pre",span:"span",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.p,{children:["De tweede timer functie is ",e.jsx(s.code,{children:"setInterval"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"setinterval",children:[e.jsx(s.code,{children:".setInterval()"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setinterval",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Met de ",e.jsx(s.code,{children:"setInterval"})," functie kunnen we een bepaald stukje code herhaaldelijk uitvoeren met een bepaalde interval.",e.jsx(s.br,{}),`
`,"De functie accepteert twee argumenten: een functie die uitgevoerd moet worden en een getal dat aangeeft hoe lang we moeten wachten voordat de functie wordt uitgevoerd. Dit getal wordt uitgedrukt in milliseconden."]}),`
`,e.jsxs(s.p,{children:["In het onderstaande voorbeeld wordt de functie ",e.jsx(s.code,{children:"countdown"})," elke seconde uitgevoerd. De functie verlaagt de waarde van de variabele ",e.jsx(s.code,{children:"time"})," met 1."]}),`
`,e.jsxs("div",{className:"inline-dynamic-example",children:[e.jsx("button",{id:"start",children:"Start countdown"}),e.jsx("p",{id:"time",children:"10"})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"button"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"start"'}),">"]}),"Start countdown",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"button"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"p"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"time"'}),">"]}),"10",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"p"}),">"]}),`
`]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Declareer de variabele die de tijd bijhoudt"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," time = ",e.jsx(s.span,{className:"hljs-number",children:"10"}),`;\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Declareer de functie die de countdown uitvoert"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"countdown"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Verlaag de waarde van time met 1"}),`\r
  time--;\r
  `,e.jsx(s.span,{className:"hljs-comment",children:'// Update de tekst van het element met id "time"'}),`\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"time"'}),").",e.jsx(s.span,{className:"hljs-property",children:"innerText"}),` = time;\r
};\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Declareer de Interval functie"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"intervalFn"})," = (",e.jsx(s.span,{className:"hljs-params"}),`) => {\r
  `,e.jsx(s.span,{className:"hljs-built_in",children:"setInterval"}),"(countdown, ",e.jsx(s.span,{className:"hljs-number",children:"1000"}),`);\r
};\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Haal de knop op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," button = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"start"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Voeg een event listener toe aan de knop"}),`\r
button.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Start de countdown"}),`\r
  intervalId = `,e.jsx(s.span,{className:"hljs-built_in",children:"setInterval"}),"(countdown, ",e.jsx(s.span,{className:"hljs-number",children:"1000"}),`);\r
});
`]})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Merk op dat"}),` de timer niet stopt bij nul.\r
Dit komt natuurlijk omdat je daar geen enkele instructie voor hebt meegegeven.\r
Je kan beide soorten timers de instructie geven om te stoppen met de methode\r
`,e.jsx(s.code,{children:"clearInterval()"}),". We bekijken in het volgende deel hoe."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"praktische-toepassingen-van-setinterval",children:["Praktische toepassingen van setInterval",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#praktische-toepassingen-van-setinterval",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Hieronder vind je enkele realistische voorbeelden van hoe ",e.jsx(s.code,{children:"setInterval"})," in echte projecten wordt gebruikt:"]}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"Deze code voorbeelden werken niet dynamisch in de console en zijn louter ter info."})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. Klok of timer weergeven"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Toon de huidige tijd elke seconde"}),`\r
`,e.jsx(s.span,{className:"hljs-built_in",children:"setInterval"}),"(",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"clock"'}),").",e.jsx(s.span,{className:"hljs-property",children:"textContent"}),` =\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Date"}),"().",e.jsx(s.span,{className:"hljs-title function_",children:"toLocaleTimeString"}),`();\r
}, `,e.jsx(s.span,{className:"hljs-number",children:"1000"}),`);
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. Automatisch afbeeldingen laten wisselen (slideshow)"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," images = [",e.jsx(s.span,{className:"hljs-string",children:'"img1.jpg"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"img2.jpg"'}),", ",e.jsx(s.span,{className:"hljs-string",children:'"img3.jpg"'}),`];\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," index = ",e.jsx(s.span,{className:"hljs-number",children:"0"}),`;\r
`,e.jsx(s.span,{className:"hljs-built_in",children:"setInterval"}),"(",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"slideshow"'}),").",e.jsx(s.span,{className:"hljs-property",children:"src"}),` = images[index];\r
  index = (index + `,e.jsx(s.span,{className:"hljs-number",children:"1"}),") % images.",e.jsx(s.span,{className:"hljs-property",children:"length"}),`;\r
}, `,e.jsx(s.span,{className:"hljs-number",children:"3000"}),`);
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. Periodiek data ophalen (polling)"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Elke 10 seconden nieuwe data ophalen"}),`\r
`,e.jsx(s.span,{className:"hljs-built_in",children:"setInterval"}),"(",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"fetch"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"/api/nieuws"'}),`)\r
    .`,e.jsx(s.span,{className:"hljs-title function_",children:"then"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"res"}),") =>"]})," res.",e.jsx(s.span,{className:"hljs-title function_",children:"json"}),`())\r
    .`,e.jsx(s.span,{className:"hljs-title function_",children:"then"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"data"}),") =>"]}),` {\r
      `,e.jsx(s.span,{className:"hljs-comment",children:"// Update de pagina met nieuwe data"}),`\r
      `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(data);\r
    });\r
}, `,e.jsx(s.span,{className:"hljs-number",children:"10000"}),`);
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"4. Animatie laten lopen"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Laat een blokje bewegen"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," pos = ",e.jsx(s.span,{className:"hljs-number",children:"0"}),`;\r
`,e.jsx(s.span,{className:"hljs-built_in",children:"setInterval"}),"(",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  pos += `,e.jsx(s.span,{className:"hljs-number",children:"5"}),`;\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"block"'}),").",e.jsx(s.span,{className:"hljs-property",children:"style"}),".",e.jsx(s.span,{className:"hljs-property",children:"left"})," = pos + ",e.jsx(s.span,{className:"hljs-string",children:'"px"'}),`;\r
}, `,e.jsx(s.span,{className:"hljs-number",children:"50"}),`);
`]})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"5. Gebruiker periodiek herinneren aan een actie"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Elke minuut een herinnering tonen"}),`\r
`,e.jsx(s.span,{className:"hljs-built_in",children:"setInterval"}),"(",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Vergeet niet je werk op te slaan!"'}),`);\r
}, `,e.jsx(s.span,{className:"hljs-number",children:"60000"}),`);
`]})}),`
`,e.jsxs(s.p,{children:["Deze voorbeelden laten zien hoe ",e.jsx(s.code,{children:"setInterval"})," handig is voor klokken, slideshows, periodiek data ophalen, animaties en reminders in echte webapplicaties."]})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{r as default};
