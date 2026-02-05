import{j as e}from"./index-3BjEGx3K.js";function l(n){const s={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",span:"span",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"De querySelector methodes zijn een krachtige manier om elementen te selecteren in de DOM."}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"documentqueryselector",children:[e.jsx(s.code,{children:"document.querySelector()"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#documentqueryselector",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["De querySelector methode is een methode die we kunnen gebruiken om een element te selecteren op basis van een CSS selector. De methode geeft het ",e.jsx(s.strong,{children:"eerste element"})," terug dat overeenkomt met de gegeven selector. Als er geen elementen overeenkomen met de gegeven selector, zal de methode ",e.jsx(s.code,{children:"null"})," teruggeven."]}),`
`,e.jsx(s.p,{children:"De querySelector methode heeft de volgende syntax:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"selector"'}),`);
`]})}),`
`,e.jsx(s.p,{children:"Hier is een voorbeeld van hoe we de querySelector methode kunnen gebruiken om een element te selecteren met een bepaalde id:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," element = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#id"'}),`);
`]})}),`
`,e.jsx(s.p,{children:"Hier is een voorbeeld van hoe we de querySelector methode kunnen gebruiken om een element te selecteren met een bepaalde class:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," element = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'".class"'}),`);
`]})}),`
`,e.jsxs(s.h2,{id:"documentqueryselectorall",children:[e.jsx(s.code,{children:"document.querySelectorAll()"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#documentqueryselectorall",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"De querySelectorAll methode is een methode die we kunnen gebruiken om alle elementen te selecteren die overeenkomen met een gegeven CSS selector. De methode geeft een NodeList terug met alle elementen die overeenkomen met de gegeven selector. Als er geen elementen overeenkomen met de gegeven selector, zal de methode een lege NodeList teruggeven."}),`
`,e.jsx(s.p,{children:"De querySelectorAll methode heeft de volgende syntax:"}),`
`,e.jsx(s.p,{children:"Hier is een voorbeeld van hoe we de querySelectorAll methode kunnen gebruiken om alle elementen te selecteren met een bepaalde class:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," elements = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",e.jsx(s.span,{className:"hljs-string",children:'".class"'}),`);
`]})}),`
`,e.jsx(s.p,{children:"Deze geeft een NodeList terug met alle elementen die de class 'class' hebben."}),`
`,e.jsx(s.p,{children:"Probeer het uit op de volgende lijst:"}),`
`,e.jsx("div",{className:"inline-dynamic-example text-start",children:e.jsxs("ul",{children:[e.jsx("li",{className:"selectorAll",children:"Element 1"}),e.jsx("li",{className:"selectorAll",children:"Element 2"}),e.jsx("li",{className:"selectorAll",children:"Element 3"})]})}),`
`,e.jsx(s.p,{children:"Deze ziet er zo uit in html:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"div"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"ul"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"li"})," ",e.jsx(s.span,{className:"hljs-attr",children:"className"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"selectorAll"'}),">"]}),"Element 1",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"li"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"li"})," ",e.jsx(s.span,{className:"hljs-attr",children:"className"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"selectorAll"'}),">"]}),"Element 2",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"li"}),">"]}),`\r
    `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"li"})," ",e.jsx(s.span,{className:"hljs-attr",children:"className"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"selectorAll"'}),">"]}),"Element 3",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"li"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"ul"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Haal alle elementen met de class 'selectorAll' op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," elements = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",e.jsx(s.span,{className:"hljs-string",children:'".selectorAll"'}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(elements);
`]})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Handig"}),": Op een NodeList kan je de ",e.jsx(s.code,{children:"forEach"})," methode gebruiken om over elk element in de NodeList te itereren."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Itereer over alle elementen en log hun textContent"}),`\r
elements.`,e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"element"}),") =>"]}),` {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(element.",e.jsx(s.span,{className:"hljs-property",children:"textContent"}),`);\r
});
`]})}),`
`,e.jsxs(s.h2,{id:"performantie",children:["Performantie",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#performantie",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["De ",e.jsx(s.code,{children:"querySelector"})," methodes zijn performanter dan de andere methodes om elementen te selecteren. Dit komt omdat de querySelector methodes gebruik maken van de browser's interne querySelector engine. Deze engine is geoptimaliseerd voor het selecteren van elementen in de DOM."]}),`
`,e.jsx(s.p,{children:"Je kan het selecteren van elementen nog performanter maken door te zoeken naar kinderen van elementen die we reeds geselecteerd hebben."}),`
`,e.jsx(s.p,{children:"Je kan dus selecteren vanuit het document object, of vanuit een element zelf."}),`
`,e.jsx(s.p,{children:"Probeer het uit op onderstaande oefening:"}),`
`,e.jsx("div",{id:"perf-div",className:"inline-dynamic-example text-start",children:e.jsx("h4",{id:"perf-quote",style:{textAlign:"center"},children:e.jsx(s.p,{children:"Optimize later? Congrats, you’ve just scheduled future misery."})})}),`
`,e.jsx(s.p,{children:"De oefening ziet er in html zo uit:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"div"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"perf-div"'}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"h4"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"perf-quote"'}),">"]}),`\r
    Optimize later? Congrats, you’ve just scheduled future misery.\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"h4"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,e.jsx(s.p,{children:"De heading is dus een element binnenin de div."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Haal deze div op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," element = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#perf-div"'}),`);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Haal het code block in de div op"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," childElement = element.",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#perf-quote"'}),`);\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(childElement);
`]})})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{r as default};
