import{j as e}from"./index-3BjEGx3K.js";function a(n){const s={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",span:"span",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"We kunnen ook zelf verzonnen attributen toevoegen aan een element door de attribuutnaam en de attribuutwaarde toe te voegen aan het HTML element. De attribuutnaam en de attribuutwaarde worden gescheiden door een '=' teken. De attribuutwaarde moet tussen enkele of dubbele aanhalingstekens staan. De attribuut naam moet altijd met 'data-' beginnen."}),`
`,e.jsx(s.p,{children:"Hier is een voorbeeld van hoe we een attribuut kunnen toevoegen aan een element:"}),`
`,e.jsx("div",{className:"hidden","data-color":"rgb(255,140,255)"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsx(s.span,{className:"hljs-comment",children:"<!-- Een custom data attribuut dat een rgb-string waarde heeft -->"}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"div"})," ",e.jsx(s.span,{className:"hljs-attr",children:"data-color"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"rgb(255,140,255)"'}),">"]}),e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,e.jsx(s.p,{children:"Je kan deze custom data attributen ophalen en uitlezen zoals de andere:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Haal het div element op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," element = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"[data-color]"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Haal de waarde van het data-color attribuut op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," color = element.",e.jsx(s.span,{className:"hljs-title function_",children:"getAttribute"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"data-color"'}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(color);
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"practische-voorbeelden",children:["Practische voorbeelden",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#practische-voorbeelden",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Custom data-attributen (",e.jsx(s.code,{children:"data-*"}),") worden in de praktijk vaak gebruikt om extra informatie aan HTML-elementen toe te voegen zonder dat deze zichtbaar is voor de gebruiker. Hier zijn enkele real-world voorbeelden:"]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. Tooltip tekst opslaan"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"button"})," ",e.jsx(s.span,{className:"hljs-attr",children:"data-tooltip"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"Klik om te verzenden"'}),">"]}),"Verzend",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"button"}),">"]}),`
`]})}),`
`,e.jsxs(s.p,{children:["JavaScript kan het ",e.jsx(s.code,{children:"data-tooltip"})," attribuut uitlezen om een tooltip te tonen wanneer je over de knop hovert."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. Productinformatie in een webshop"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"div"})," ",e.jsx(s.span,{className:"hljs-attr",children:"class"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"product"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"data-product-id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"123"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"data-price"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"19.99"'}),">"]}),"Productnaam",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,e.jsx(s.p,{children:"Hiermee kan JavaScript snel het product-id en de prijs ophalen bij het toevoegen aan een winkelmandje."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. Animatievertragingen instellen"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"div"})," ",e.jsx(s.span,{className:"hljs-attr",children:"class"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"animatie"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"data-delay"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"200"'}),">"]}),e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,e.jsxs(s.p,{children:["Een animatiebibliotheek kan het ",e.jsx(s.code,{children:"data-delay"})," attribuut gebruiken om de animatie met een bepaalde tijd te vertragen."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"4. Toggle functionaliteit"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"button"})," ",e.jsx(s.span,{className:"hljs-attr",children:"data-toggle-target"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"#menu"'}),">"]}),"Menu",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"button"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"nav"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"menu"'}),">"]}),"...",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"nav"}),">"]}),`
`]})}),`
`,e.jsxs(s.p,{children:["Met JavaScript kun je het doel-element ophalen via het ",e.jsx(s.code,{children:"data-toggle-target"})," attribuut en tonen/verbergen wanneer op de knop wordt geklikt."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"5. Meertalige content"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"span"})," ",e.jsx(s.span,{className:"hljs-attr",children:"data-lang-nl"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"Hallo"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"data-lang-en"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"Hello"'}),">"]}),"Hallo",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"span"}),">"]}),`
`]})}),`
`,e.jsx(s.p,{children:"Een script kan de juiste taal tonen op basis van de voorkeur van de gebruiker."}),`
`,e.jsx(s.p,{children:"Custom data-attributen zijn dus erg handig om semantisch correcte, uitbreidbare en makkelijk te onderhouden HTML te schrijven!"}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"compleet-voorbeeld",children:["Compleet voorbeeld",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compleet-voorbeeld",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Hieronder zie je een knop en een blok."}),`
`,e.jsxs("div",{className:"inline-dynamic-example",children:[e.jsx("button",{id:"color-btn","data-color":"rgb(140, 182, 255)",children:e.jsx(s.p,{children:"Verander kleur"})}),e.jsx("div",{id:"color-block",style:{width:"100px",height:"100px",background:"lightgray",margin:"16px 0",borderRadius:"8px",justifySelf:"center"}})]}),`
`,e.jsx(s.p,{children:"De html van bovenstaande oefening ziet er zo uit:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"div"})," ",e.jsx(s.span,{className:"hljs-attr",children:"className"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"inline-dynamic-example"'}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"button"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"color-btn"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"data-color"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"rgb(140, 182, 255)"'}),">"]}),`\r
    Verander kleur\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"button"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"div"}),`\r
    `,e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"color-block"'}),`    \r
  >`]}),e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"div"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,e.jsx(s.p,{children:"Voer onderstaande JS uit in de console van je browser en test daarna het gedrag."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Haal de knop en het blok op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," btn = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"color-btn"'}),`);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," block = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"color-block"'}),`);\r
\r
btn.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Haal de kleur op uit het data-color attribuut"}),`\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," color = btn.",e.jsx(s.span,{className:"hljs-title function_",children:"getAttribute"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"data-color"'}),`);\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Zet de achtergrondkleur van het blok"}),`\r
  block.`,e.jsx(s.span,{className:"hljs-property",children:"style"}),".",e.jsx(s.span,{className:"hljs-property",children:"background"}),` = color;\r
});
`]})}),`
`,e.jsx(s.p,{children:`Je kan het data-color attribuut aanpassen naar elke geldige CSS kleur of rgb string en het werkt meteen!\r
Deze kleur string kan bijvoorbeeld ook uit gebruikersinput komen, of uit een API response.`})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{r as default};
