import{j as e}from"./index-DEXPSZA7.js";const l="/web2-cursus-2026/images/positions.png";function a(s){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",span:"span",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["We zagen eerder al dat we met de ",e.jsx(n.code,{children:"innerHtml"})," property nieuwe HTML elementen kunnen toevoegen aan een bestaand element."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"dure-zaak",children:["Dure zaak",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#dure-zaak",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Bij het opvragen van innerHtml van een element, moet de browser in de DOM-tree alle descendants van het element opvragen. Nadien moet van elke descendant een HTML-tekst voorstelling gemaakt worden. Dit kan een dure zaak zijn, zeker als het element veel descendants heeft."}),`
`,e.jsx(n.p,{children:"Bij het wijzigen van de waarde van innerHtml, moet de browser eerst alle kinderen weggooien en vervolgens de nieuwe HTML-tekst ontleden om de element en hun attributen te vinden. Daarna moet hij de nieuwe DOM-tree nodes maken én toevoegen als descendants. Tot slot moet de volledige pagina layout en styling volledig opnieuw berekend en hertekend worden."}),`
`,e.jsx(n.p,{children:"Het is dus af te raden om innerHtml te gebruiken als je veel elementen 'dynamisch' wil toevoegen aan een bestaand element, omdat dit de performantie van je website sterk negatief kan beïnvloeden."}),`
`,e.jsx(n.p,{children:"Er zijn hiervoor andere methodes die veel performanter zijn."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"insertadjacenthtml",children:[e.jsx(n.code,{children:"insertAdjacentHTML()"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#insertadjacenthtml",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(n.p,{children:["Alle DOM-tree elementen ondersteunen de ",e.jsx(n.code,{children:"insertAdjacentHTML()"})," methode. Deze methode laat toe om HTML-tekst in te voegen op een specifieke plaats in de DOM-tree zonder alles opnieuw te moeten berekenen."]}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.code,{children:"insertAdjacentHTML()"})," methode heeft de volgende syntax:"]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:["element.",e.jsx(n.span,{className:"hljs-title function_",children:"insertAdjacentHTML"}),`(position, text);
`]})}),`
`,e.jsx(n.p,{children:"De position parameter is een string die aangeeft waar de HTML-tekst moet ingevoegd worden. De mogelijke waarden zijn:"}),`
`,e.jsx(n.p,{children:`'beforebegin': voor het element zelf\r
'afterbegin': binnen het element, voor de eerste child\r
'beforeend': binnen het element, na de laatste child\r
'afterend': na het element zelf`}),`
`,e.jsx(n.p,{children:"Hier is een voorbeeld van hoe we de insertAdjacentHTML() methode kunnen gebruiken om een element toe te voegen aan een bestaand element:"}),`
`,e.jsx("div",{className:"inline-dynamic-example text-start",children:e.jsxs("ul",{id:"drinks",children:[e.jsx("li",{children:"Koffie"}),e.jsx("li",{children:"Thee"}),e.jsx("li",{children:"Water"})]})}),`
`," ",`
`,e.jsx(n.p,{children:"Hier is de html van bovenstaande structuur:"}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-html",children:[e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"div"}),">"]}),`\r
  `,e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"ul"})," ",e.jsx(n.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(n.span,{className:"hljs-string",children:'"drinks"'}),">"]}),`\r
    `,e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"li"}),">"]}),"Koffie",e.jsxs(n.span,{className:"hljs-tag",children:["</",e.jsx(n.span,{className:"hljs-name",children:"li"}),">"]}),`\r
    `,e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"li"}),">"]}),"Thee",e.jsxs(n.span,{className:"hljs-tag",children:["</",e.jsx(n.span,{className:"hljs-name",children:"li"}),">"]}),`\r
    `,e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"li"}),">"]}),"Water",e.jsxs(n.span,{className:"hljs-tag",children:["</",e.jsx(n.span,{className:"hljs-name",children:"li"}),">"]}),`\r
  `,e.jsxs(n.span,{className:"hljs-tag",children:["</",e.jsx(n.span,{className:"hljs-name",children:"ul"}),">"]}),`\r
`,e.jsxs(n.span,{className:"hljs-tag",children:["</",e.jsx(n.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// We halen de lijst van drankjes op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," drinks = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"#drinks"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We voegen een nieuw drankje toe aan het einde van de lijst"}),`\r
drinks.`,e.jsx(n.span,{className:"hljs-title function_",children:"insertAdjacentHTML"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"beforeend"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"<li>Limonade</li>"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We voegen een nieuw drankje toe aan het begin van de lijst"}),`\r
drinks.`,e.jsx(n.span,{className:"hljs-title function_",children:"insertAdjacentHTML"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"afterbegin"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"<li>Cola</li>"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We voegen een title toe voor de lijst"}),`\r
drinks.`,e.jsx(n.span,{className:"hljs-title function_",children:"insertAdjacentHTML"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"beforebegin"'}),", ",e.jsx(n.span,{className:"hljs-string",children:'"<h2>Drankjes</h2>"'}),`);\r
\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We voegen een footer toe na de lijst"}),`\r
drinks.`,e.jsx(n.span,{className:"hljs-title function_",children:"insertAdjacentHTML"}),`(\r
  `,e.jsx(n.span,{className:"hljs-string",children:'"afterend"'}),`,\r
  `,e.jsx(n.span,{className:"hljs-string",children:'"<footer>Dit waren alle drankjes</footer>"'}),`\r
);
`]})}),`
`,e.jsxs(n.h2,{id:"een-handig-overzicht-van-de-verschillende-posities",children:["Een handig overzicht van de verschillende posities",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#een-handig-overzicht-van-de-verschillende-posities",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx("img",{src:l,alt:"Insert positions"})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{r as default};
