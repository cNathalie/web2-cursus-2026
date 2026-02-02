import{j as e}from"./index-DEXPSZA7.js";function o(t){const n={a:"a",h2:"h2",hr:"hr",li:"li",p:"p",span:"span",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"In deze module gaan we dieper in op de DOM. We zullen leren hoe we de DOM nog meer kunnen manipuleren en hoe we elementen kunnen toevoegen en verwijderen. We beginnen met een korte herhaling:"}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"wat-is-de-dom",children:["Wat is de DOM?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wat-is-de-dom",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"De DOM, of Document Object Model, is een object georiënteerde representatie van een HTML document. Het is een boomstructuur van nodes die elk een deel van het document voorstellen. De DOM is een manier om een HTML document te representeren zodat we het kunnen manipuleren met JavaScript."}),`
`,e.jsx(n.p,{children:"De DOM bestaat uit verschillende soorten nodes. Een node kan het volgende zijn:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Document"}),": de top node in de DOM-tree. Het heeft het volledige document in zich."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Element nodes"}),": Elke HTML-tag is een element in de boom."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text nodes"}),": De tekstinhoud van een bepaald element is altijd een text-node. Witruimte wordt ook voorgesteld als een text-node!"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Attribute nodes"}),": Een attribuut van een node is bereikbaar via het element, maar wordt niet in de boomstructuur getekend."]}),`
`]})]})}function i(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{i as default};
