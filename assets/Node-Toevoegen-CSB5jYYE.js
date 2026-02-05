import{j as e}from"./index-3BjEGx3K.js";function a(s){const n={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Nieuwe nodes moeten toegevoegd worden aan de DOM om zichtbaar te worden."}),`
`,e.jsxs(n.h2,{id:"appendchild",children:["appendChild()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendchild",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Met de appendChild() methode kunnen we een node toevoegen aan een andere node."}),`
`,e.jsx(n.p,{children:"De methode neemt één argument: de node die je wil toevoegen."}),`
`,e.jsx(n.p,{children:"De node die je wil toevoegen wordt als laatste kind toegevoegd aan de node waarop je de appendChild() methode uitvoert."}),`
`,e.jsx(n.p,{children:"Voorbeeld:"}),`
`,e.jsx(n.p,{children:"We maken een nieuwe button aan en voegen die toe net onder deze zin."}),`
`,e.jsx(n.p,{children:"Je ziet (amper) een nieuwe knop verschijnen, maar hij heeft geen tekst in zich."}),`
`,e.jsx(n.p,{children:"We kunnen de tekst van de knop aanpassen door een tekstnode toe te voegen aan de knop."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// We maken een nieuwe knop aan"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," newBtn = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"createElement"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'button'"}),`);\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We halen de lege paragraaf net boven dit blok op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," emptyPara = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'#para'"}),`);\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We voegen de knop toe aan de paragraaf"}),`\r
emptyPara.`,e.jsx(n.span,{className:"hljs-title function_",children:"appendChild"}),`(newBtn);
`]})}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// We maken een nieuwe tekstnode aan"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," btnText = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"createTextNode"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'Klik hier'"}),`);\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We voegen de tekstnode toe aan de knop"}),`\r
newBtn.`,e.jsx(n.span,{className:"hljs-title function_",children:"appendChild"}),`(btnText);
`]})}),`
`,e.jsxs(n.h2,{id:"removechild",children:["removeChild()",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#removechild",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"Met de removeChild() methode kunnen we een node verwijderen uit de DOM."}),`
`,e.jsx(n.p,{children:"De methode neemt één argument: de node die je wil verwijderen."}),`
`,e.jsx(n.p,{children:"Voorbeeld:"}),`
`,e.jsx(n.p,{children:"We verwijderen de knop die we net hebben toegevoegd."}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-comment",children:"// We halen de knop op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," btn = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(n.span,{className:"hljs-string",children:"'button'"}),`);\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We halen de parent node van de knop op"}),`\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," parent = btn.",e.jsx(n.span,{className:"hljs-property",children:"parentNode"}),`;\r
`,e.jsx(n.span,{className:"hljs-comment",children:"// We verwijderen de knop uit de parent node"}),`\r
parent.`,e.jsx(n.span,{className:"hljs-title function_",children:"removeChild"}),`(btn);
`]})}),`
`,e.jsxs(n.h2,{id:"opgelet",children:["Opgelet!",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opgelet",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:"De methodes zijn enkel beschikbaar op de parent node van de node die je wil toevoegen of verwijderen."}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"parent.METHODE(child)"})}),`
`,e.jsx(n.p,{children:"Als je in een div een element wil toevoegen, moet je dus eerst de div ophalen, dan je element aanmaken en dan de appendChild() methode uitvoeren op de div."}),`
`,e.jsxs(n.p,{children:[`De methodes zijn enkel beschikbaar op de parent node van de node die je wil toevoegen of verwijderen.\r
`,e.jsx(n.code,{children:"parent.METHODE(child)"}),` Als je in een div een element wil toevoegen, moet je dus eerst de div ophalen,\r
dan je element aanmaken en dan de `,e.jsx(n.code,{children:"appendChild()"})," methode uitvoeren op de div."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"in-de-praktijk",children:["In de praktijk",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#in-de-praktijk",children:e.jsx(n.span,{className:"icon icon-link"})})]}),`
`,e.jsx(n.p,{children:`n moderne webapps worden nieuwe elementen heel vaak dynamisch aangemaakt—bij formulieren, chatberichten, productkaarten, notificaties, enz.\r
Hier tonen we een praktische case:`}),`
`,e.jsx(n.p,{children:"Een gebruiker vult een tekstveld in en er wordt automatisch een nieuw to‑do item aangemaakt en aan de lijst toegevoegd."}),`
`,e.jsx(n.p,{children:`Dit voorbeeld gebruikt enkel vanilla JavaScript en toont duidelijk hoe\r
createElement(), createTextNode() en appendChild() samen een real‑world component bouwen.`}),`
`,e.jsxs("div",{className:"todo-app inline-dynamic-example",children:[e.jsx("h2",{children:"Mijn Takenlijst"}),e.jsx("input",{id:"todo-input",type:"text",placeholder:"Nieuwe taak..."}),e.jsx("br",{}),e.jsx("button",{id:"add-btn",children:"+ Toevoegen"}),e.jsx("ul",{id:"todo-list"})]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-html",children:[e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"div"})," ",e.jsx(n.span,{className:"hljs-attr",children:"className"}),"=",e.jsx(n.span,{className:"hljs-string",children:'"todo-app inline-dynamic-example"'}),">"]}),`\r
  `,e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"h2"}),">"]}),"Mijn Takenlijst",e.jsxs(n.span,{className:"hljs-tag",children:["</",e.jsx(n.span,{className:"hljs-name",children:"h2"}),">"]}),`\r
\r
  `,e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"input"})," ",e.jsx(n.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(n.span,{className:"hljs-string",children:"'todo-input'"})," ",e.jsx(n.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(n.span,{className:"hljs-string",children:'"text"'})," ",e.jsx(n.span,{className:"hljs-attr",children:"placeholder"}),"=",e.jsx(n.span,{className:"hljs-string",children:'"Nieuwe taak..."'})," />"]}),`\r
  `,e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"br"})," />"]}),`\r
  `,e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"button"})," ",e.jsx(n.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(n.span,{className:"hljs-string",children:'"add-btn"'}),">"]}),"+ Toevoegen",e.jsxs(n.span,{className:"hljs-tag",children:["</",e.jsx(n.span,{className:"hljs-name",children:"button"}),">"]}),`\r
\r
  `,e.jsxs(n.span,{className:"hljs-tag",children:["<",e.jsx(n.span,{className:"hljs-name",children:"ul"})," ",e.jsx(n.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(n.span,{className:"hljs-string",children:'"todo-list"'}),">"]}),e.jsxs(n.span,{className:"hljs-tag",children:["</",e.jsx(n.span,{className:"hljs-name",children:"ul"}),">"]}),`\r
`,e.jsxs(n.span,{className:"hljs-tag",children:["</",e.jsx(n.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`Stap 1 — Gebruiker klikt op “Toevoegen”\r
We lezen de waarde uit het inputveld.`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Stap 2 — We maken dynamisch een nieuwe ",e.jsx(n.code,{children:"<li>"}),` node aan.\r
Deze `,e.jsx(n.code,{children:"<li>"})," bevat:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"een tekstnode (de taak)"}),`
`,e.jsx(n.li,{children:"een verwijder‑knop"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Stap 3 — We voegen het nieuwe item toe aan de ",e.jsx(n.code,{children:"<ul>"})]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsxs(n.code,{className:"hljs language-js",children:[e.jsx(n.span,{className:"hljs-keyword",children:"const"})," input = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"todo-input"'}),`);\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," addBtn = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"add-btn"'}),`);\r
`,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," list = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"todo-list"'}),`);\r
\r
addBtn.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
  `,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," text = input.",e.jsx(n.span,{className:"hljs-property",children:"value"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"trim"}),`();\r
\r
  `,e.jsx(n.span,{className:"hljs-keyword",children:"if"})," (text === ",e.jsx(n.span,{className:"hljs-string",children:'""'}),") ",e.jsx(n.span,{className:"hljs-keyword",children:"return"}),"; ",e.jsx(n.span,{className:"hljs-comment",children:"// niks toevoegen als het leeg is"}),`\r
\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// 1. Maak een nieuwe <li>"}),`\r
  `,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," li = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"createElement"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"li"'}),`);\r
\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// 2. Maak de tekstnode die in het <li> element komt"}),`\r
  `,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," taskText = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"createTextNode"}),`(text);\r
\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// 3. Maak een delete-knop"}),`\r
  `,e.jsx(n.span,{className:"hljs-keyword",children:"const"})," deleteBtn = ",e.jsx(n.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"createElement"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"button"'}),`);\r
  deleteBtn.`,e.jsx(n.span,{className:"hljs-property",children:"textContent"})," = ",e.jsx(n.span,{className:"hljs-string",children:'"(x)"'}),`;\r
  deleteBtn.`,e.jsx(n.span,{className:"hljs-property",children:"classList"}),".",e.jsx(n.span,{className:"hljs-title function_",children:"add"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"delete-btn"'}),`);\r
\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// 4. Voeg tekst en knop toe aan de <li>"}),`\r
  li.`,e.jsx(n.span,{className:"hljs-title function_",children:"appendChild"}),`(taskText);\r
  li.`,e.jsx(n.span,{className:"hljs-title function_",children:"appendChild"}),`(deleteBtn);\r
\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// 5. Voeg het <li> toe aan de todolijst"}),`\r
  list.`,e.jsx(n.span,{className:"hljs-title function_",children:"appendChild"}),`(li);\r
\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// 6. Input leegmaken"}),`\r
  input.`,e.jsx(n.span,{className:"hljs-property",children:"value"})," = ",e.jsx(n.span,{className:"hljs-string",children:'""'}),`;\r
\r
  `,e.jsx(n.span,{className:"hljs-comment",children:"// 7. Delete functionaliteit"}),`\r
  deleteBtn.`,e.jsx(n.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(n.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(n.span,{className:"hljs-function",children:"() =>"}),` {\r
    list.`,e.jsx(n.span,{className:"hljs-title function_",children:"removeChild"}),`(li);\r
  });\r
});
`]})})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{i as default};
