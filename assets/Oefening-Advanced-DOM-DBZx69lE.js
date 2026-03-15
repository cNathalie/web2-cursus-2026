import{j as s}from"./index-DAnO9JXN.js";const l="/web2-cursus-2026/images/todolist.png";function n(a){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h2,{id:"oefening-interactieve-todo-list",children:["Oefening: Interactieve Todo-List",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#oefening-interactieve-todo-list",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["In deze oefening oefen je de concepten uit de hoofdstukken ",s.jsx(e.strong,{children:"DOM-Tree"})," en ",s.jsx(e.strong,{children:"Events"}),". Je gaat een interactieve todo-list bouwen waarbij gebruikers kunnen:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Items toevoegen aan een lijst"}),`
`,s.jsx(e.li,{children:"Items als voltooid markeren"}),`
`,s.jsx(e.li,{children:"Items verwijderen uit de lijst"}),`
`,s.jsx(e.li,{children:"Het aantal voltooide items zien"}),`
`]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"eindresultaat",children:["Eindresultaat",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eindresultaat",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Wanneer je klaar bent, ziet je applicatie er als volgt uit:"}),`
`,s.jsx("img",{src:l,alt:"Todo-List applicatie"}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"stap-1-html-structuur-maken",children:["Stap 1: HTML-structuur maken",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stap-1-html-structuur-maken",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Maak een bestand ",s.jsx(e.code,{children:"todo.html"})," met volgende HTML-structuur:"]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-html",children:[s.jsxs(e.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(e.span,{className:"hljs-keyword",children:"html"}),">"]}),`\r
`,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"html"})," ",s.jsx(e.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"nl"'}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"head"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"meta"})," ",s.jsx(e.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"meta"})," ",s.jsx(e.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"title"}),">"]}),"Todo-List",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"title"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"link"})," ",s.jsx(e.span,{className:"hljs-attr",children:"rel"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"styles.css"'})," />"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"head"}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"body"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"container"'}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"h1"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"title"'}),">"]}),"Mijn Todo-List",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"h1"}),">"]}),`\r
\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"ul"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"todoList"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"todo-list"'}),">"]}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"li"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"todo-item"'}),">"]}),`\r
          `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"input"})," ",s.jsx(e.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"checkbox"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"checkbox"'})," />"]}),`\r
          `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"span"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"todo-text"'}),">"]}),"Huiswerk Wiskunde",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"span"}),">"]}),`\r
          `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"delete-btn"'}),">"]}),"🗑",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"li"}),">"]}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"li"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"todo-item"'}),">"]}),`\r
          `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"input"})," ",s.jsx(e.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"checkbox"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"checkbox"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"checked"})," />"]}),`\r
          `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"span"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"todo-text"'}),">"]}),"Boeken lezen",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"span"}),">"]}),`\r
          `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"delete-btn"'}),">"]}),"🗑",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"li"}),">"]}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"li"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"todo-item"'}),">"]}),`\r
          `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"input"})," ",s.jsx(e.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"checkbox"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"checkbox"'})," />"]}),`\r
          `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"span"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"todo-text"'}),">"]}),"Sporten",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"span"}),">"]}),`\r
          `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"delete-btn"'}),">"]}),"🗑",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"li"}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"ul"}),">"]}),`\r
\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"input-group"'}),">"]}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"input"}),`\r
          `,s.jsx(e.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"text"'}),`\r
          `,s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"newTodoInput"'}),`\r
          `,s.jsx(e.span,{className:"hljs-attr",children:"placeholder"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"Voeg een nieuw item toe..."'}),`\r
        />`]}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"addBtn"'}),">"]}),"Toevoegen",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"p"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"counter"'}),">"]}),s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"p"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"script"})," ",s.jsx(e.span,{className:"hljs-attr",children:"src"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"main.js"'}),">"]}),s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"script"}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"body"}),">"]}),`\r
`,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"stap-2-css-styling",children:["Stap 2: CSS styling",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stap-2-css-styling",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Maak een bestand ",s.jsx(e.code,{children:"styles.css"}),":"]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-css",children:[`* {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"margin"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"box-sizing"}),`: border-box;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-tag",children:"body"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"font-family"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Segoe UI"'}),`, Tahoma, Geneva, Verdana, sans-serif;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"linear-gradient"}),"(",s.jsx(e.span,{className:"hljs-number",children:"135deg"}),", ",s.jsx(e.span,{className:"hljs-number",children:"#667eea"})," ",s.jsx(e.span,{className:"hljs-number",children:"0%"}),", ",s.jsx(e.span,{className:"hljs-number",children:"#764ba2"})," ",s.jsx(e.span,{className:"hljs-number",children:"100%"}),`);\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"min-height"}),": ",s.jsx(e.span,{className:"hljs-number",children:"100vh"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"display"}),`: flex;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"justify-content"}),`: center;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"align-items"}),`: center;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".container"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),`: white;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"2rem"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"10px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"box-shadow"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0"})," ",s.jsx(e.span,{className:"hljs-number",children:"10px"})," ",s.jsx(e.span,{className:"hljs-number",children:"25px"})," ",s.jsx(e.span,{className:"hljs-built_in",children:"rgba"}),"(",s.jsx(e.span,{className:"hljs-number",children:"0"}),", ",s.jsx(e.span,{className:"hljs-number",children:"0"}),", ",s.jsx(e.span,{className:"hljs-number",children:"0"}),", ",s.jsx(e.span,{className:"hljs-number",children:"0.2"}),`);\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"max-width"}),": ",s.jsx(e.span,{className:"hljs-number",children:"500px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"width"}),": ",s.jsx(e.span,{className:"hljs-number",children:"100%"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-tag",children:"h1"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#333"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1.5rem"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"text-align"}),`: center;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".todo-list"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"list-style"}),`: none;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(e.span,{className:"hljs-number",children:"2rem"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".todo-item"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"display"}),`: flex;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"align-items"}),`: center;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1rem"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#f8f9fa"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"5px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0.5rem"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"gap"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0.5rem"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"transition"}),": all ",s.jsx(e.span,{className:"hljs-number",children:"0.3s"}),` ease;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".todo-item"}),s.jsx(e.span,{className:"hljs-selector-pseudo",children:":hover"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#e9ecef"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"transform"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"translateX"}),"(",s.jsx(e.span,{className:"hljs-number",children:"5px"}),`);\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".todo-item"}),s.jsx(e.span,{className:"hljs-selector-class",children:".completed"})," ",s.jsx(e.span,{className:"hljs-selector-class",children:".todo-text"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"text-decoration"}),`: line-through;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#999"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".checkbox"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"width"}),": ",s.jsx(e.span,{className:"hljs-number",children:"20px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"height"}),": ",s.jsx(e.span,{className:"hljs-number",children:"20px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"cursor"}),`: pointer;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".todo-text"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"flex"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#333"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".delete-btn"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#ff6b6b"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border"}),`: none;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0.5rem"})," ",s.jsx(e.span,{className:"hljs-number",children:"1rem"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"5px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"cursor"}),`: pointer;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"transition"}),": background ",s.jsx(e.span,{className:"hljs-number",children:"0.3s"}),` ease;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".delete-btn"}),s.jsx(e.span,{className:"hljs-selector-pseudo",children:":hover"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#ff5252"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".input-group"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"display"}),`: flex;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"gap"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0.5rem"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1.5rem"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#newTodoInput"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"flex"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0.75rem"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border"}),": ",s.jsx(e.span,{className:"hljs-number",children:"2px"})," solid ",s.jsx(e.span,{className:"hljs-number",children:"#ddd"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"5px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1rem"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"transition"}),": border-color ",s.jsx(e.span,{className:"hljs-number",children:"0.3s"}),` ease;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#newTodoInput"}),s.jsx(e.span,{className:"hljs-selector-pseudo",children:":focus"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"outline"}),`: none;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border-color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#667eea"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#addBtn"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0.75rem"})," ",s.jsx(e.span,{className:"hljs-number",children:"1.5rem"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#667eea"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),`: white;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border"}),`: none;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"5px"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"cursor"}),`: pointer;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"font-weight"}),`: bold;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"transition"}),": background ",s.jsx(e.span,{className:"hljs-number",children:"0.3s"}),` ease;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#addBtn"}),s.jsx(e.span,{className:"hljs-selector-pseudo",children:":hover"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#5568d3"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#counter"}),` {\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"text-align"}),`: center;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#666"}),`;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"font-weight"}),`: bold;\r
  `,s.jsx(e.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1.1rem"}),`;\r
}
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"stap-3-javascript-interactiviteit",children:["Stap 3: JavaScript-interactiviteit",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stap-3-javascript-interactiviteit",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Maak een bestand ",s.jsx(e.code,{children:"main.js"})," en implementeer daarin de volgende functies:"]}),`
`,s.jsxs(e.h3,{id:"vereisten",children:["Vereisten:",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vereisten",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Setup-functie"}),": Een ",s.jsx(e.code,{children:"window load"})," event dat een ",s.jsx(e.code,{children:"setup()"})," functie aanroept"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Elementen opvragen"}),": Gebruik ",s.jsx(e.code,{children:"getElementById()"})," en ",s.jsx(e.code,{children:"getElementsByClassName()"})," om alle nodige HTML-elementen op te halen"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Counter updaten"}),": Als een checkbox wordt aangeklikt, update het aantal voltooide items"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Item toevoegen"}),': Bij het klikken op de "Toevoegen"-knop:',`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Lees de input-waarde uit"}),`
`,s.jsx(e.li,{children:"Maak een nieuw list item aan"}),`
`,s.jsx(e.li,{children:"Voeg dit item toe aan de DOM"}),`
`,s.jsx(e.li,{children:"Clear de input-veld"}),`
`,s.jsx(e.li,{children:"Update de counter"}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Item verwijderen"}),": Bij het klikken op de verwijder-knop, verwijder het item en update de counter"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Checkbox styling"}),": Wanneer een checkbox wordt aangeklikt, voeg de ",s.jsx(e.code,{children:"completed"})," class toe aan het li-element"]}),`
`]}),`
`,s.jsxs(e.h3,{id:"tips",children:["Tips:",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tips",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Gebruik ",s.jsx(e.code,{children:"addEventListener()"})," voor het toevoegen van event listeners"]}),`
`,s.jsxs(e.li,{children:["Gebruik ",s.jsx(e.code,{children:"classList.toggle()"})," of ",s.jsx(e.code,{children:"classList.add()"})," voor het toevoegen/verwijderen van classes"]}),`
`,s.jsx(e.li,{children:"Zet event listeners op alle delete-buttons en checkboxes"}),`
`,s.jsxs(e.li,{children:["Gebruik ",s.jsx(e.code,{children:"textContent"})," of ",s.jsx(e.code,{children:"innerHTML"})," om nieuwe elementen te maken met ",s.jsx(e.code,{children:"createElement()"})," en ",s.jsx(e.code,{children:"appendChild()"})]}),`
`,s.jsxs(e.li,{children:["De counter moet het format ",s.jsx(e.code,{children:'"Voltooide items: X/Y"'})," hebben, waar X het aantal voltooide items is en Y het totale aantal"]}),`
`]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"checklist",children:["Checklist",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#checklist",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"HTML-bestand gemaakt met de juiste structuur"}),`
`,s.jsx(e.li,{children:"CSS-bestand gemaakt en gelinkt"}),`
`,s.jsxs(e.li,{children:["JavaScript-bestand met ",s.jsx(e.code,{children:"window load"})," event"]}),`
`,s.jsx(e.li,{children:"Elementen kunnen opgehaald worden via DOM-methodes"}),`
`,s.jsx(e.li,{children:"Checkboxes werken en updaten de counter"}),`
`,s.jsx(e.li,{children:"Nieuwe items kunnen toegevoegd worden"}),`
`,s.jsx(e.li,{children:"Items kunnen verwijderd worden"}),`
`,s.jsx(e.li,{children:"Counter toont het juiste aantal voltooide items"}),`
`,s.jsx(e.li,{children:"Code is proper geformateerd en voorzien van commentaar"}),`
`]})]})}function c(a={}){const{wrapper:e}=a.components||{};return e?s.jsx(e,{...a,children:s.jsx(n,{...a})}):n(a)}export{c as default};
