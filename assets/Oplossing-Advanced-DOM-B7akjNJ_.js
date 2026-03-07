import{j as s}from"./index-CJDh3CEj.js";function a(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h2,{id:"voorbeeldoplossing-interactieve-todo-list",children:["Voorbeeldoplossing: Interactieve Todo-List",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#voorbeeldoplossing-interactieve-todo-list",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:'Dit is een complete werkende voorbeeldoplossing voor de oefening "Interactieve Todo-List". Bestudeer goed hoe de concepten uit DOM-Tree en Events hier toegepast worden.'}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"html-todohtml",children:["HTML (",s.jsx(e.code,{children:"todo.html"}),")",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#html-todohtml",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
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
`,s.jsxs(e.h2,{id:"css-stylescss",children:["CSS (",s.jsx(e.code,{children:"styles.css"}),")",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#css-stylescss",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
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
`,s.jsxs(e.h2,{id:"javascript-mainjs",children:["JavaScript (",s.jsx(e.code,{children:"main.js"}),")",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#javascript-mainjs",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Window load event (BELANGRIJK!)"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// We wachten tot het window load event plaatsvindt"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// zodat alle HTML-elementen volledig geladen zijn"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// voordat we JavaScript code uitvoeren."}),`\r
\r
`,s.jsx(e.span,{className:"hljs-variable language_",children:"window"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"load"'}),`, setup);\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Setup functie"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Dit is de functie die wordt uitgevoerd wanneer"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// de pagina volledig is geladen."}),`\r
\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"setup"}),"(",s.jsx(e.span,{className:"hljs-params"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Pagina geladen, setup gestart!"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Haal alle nodige elementen op uit de DOM"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Hier gebruiken we getElementById() zoals uit"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:'// het hoofdstuk "Elementen opvragen" geleerd'}),`\r
\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," todoList = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"todoList"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," addBtn = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"addBtn"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," newTodoInput = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"newTodoInput"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," counterDisplay = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"counter"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Haal alle checkboxes op met getElementsByClassName()"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Dit geeft een HTMLCollection terug"}),`\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," checkboxes = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"checkbox"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Haal alle delete-buttons op"}),`\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," deleteButtons = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"delete-btn"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Functie: Counter updaten"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Deze functie telt hoeveel items voltooid zijn"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// en update de weergave"}),`\r
\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"updateCounter"}),"(",s.jsx(e.span,{className:"hljs-params"}),`) {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Haal alle items op"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," todoItems = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"todo-item"'}),`);\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:'// Tel hoeveel items de class "completed" hebben'}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"let"})," completedCount = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// We loopen door alle items (dit is een andere manier"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// dan getElementsByClassName, maar werkt hetzelfde)"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(e.span,{className:"hljs-keyword",children:"let"})," i = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),"; i < todoItems.",s.jsx(e.span,{className:"hljs-property",children:"length"}),`; i++) {\r
      `,s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (todoItems[i].",s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"contains"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"completed"'}),`)) {\r
        completedCount++;\r
      }\r
    }\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Tel totaal aantal items"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," totalCount = todoItems.",s.jsx(e.span,{className:"hljs-property",children:"length"}),`;\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Update de tekst in de counter"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Dit gebruiken we textContent (zoals geleerd in het hoofdstuk)"}),`\r
    counterDisplay.`,s.jsx(e.span,{className:"hljs-property",children:"textContent"})," = ",s.jsxs(e.span,{className:"hljs-string",children:["`Voltooide items: ",s.jsx(e.span,{className:"hljs-subst",children:"${completedCount}"}),"/",s.jsx(e.span,{className:"hljs-subst",children:"${totalCount}"}),"`"]}),`;\r
  }\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Functie: Event listeners toevoegen"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Deze functie voegt event listeners toe aan"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// checkboxes en delete-buttons"}),`\r
\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListeners"}),"(",s.jsx(e.span,{className:"hljs-params",children:"checkboxList, buttonList"}),`) {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Loop door alle checkboxes"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(e.span,{className:"hljs-keyword",children:"let"})," i = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),"; i < checkboxList.",s.jsx(e.span,{className:"hljs-property",children:"length"}),`; i++) {\r
      `,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` checkbox = checkboxList[i];\r
\r
      `,s.jsx(e.span,{className:"hljs-comment",children:"// Voeg een click event listener toe"}),`\r
      `,s.jsx(e.span,{className:"hljs-comment",children:"// Als de checkbox wordt geklikt, voer handleCheckbox uit"}),`\r
      checkbox.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params"}),`) {\r
        `,s.jsx(e.span,{className:"hljs-title function_",children:"handleCheckbox"}),"(",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),`);\r
      });\r
    }\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Loop door alle delete-buttons"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(e.span,{className:"hljs-keyword",children:"let"})," i = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),"; i < buttonList.",s.jsx(e.span,{className:"hljs-property",children:"length"}),`; i++) {\r
      `,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` deleteBtn = buttonList[i];\r
\r
      `,s.jsx(e.span,{className:"hljs-comment",children:"// Voeg een click event listener toe"}),`\r
      deleteBtn.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params"}),`) {\r
        `,s.jsx(e.span,{className:"hljs-title function_",children:"handleDelete"}),"(",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),`);\r
      });\r
    }\r
  }\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Functie: Checkbox handler"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Deze functie wordt uitgevoerd wanneer"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// op een checkbox wordt geklikt"}),`\r
\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"handleCheckbox"}),"(",s.jsx(e.span,{className:"hljs-params",children:"checkbox"}),`) {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Haal het parent <li> element op"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Hier gebruiken we parentElement (family-tree relatie)"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," todoItem = checkbox.",s.jsx(e.span,{className:"hljs-property",children:"parentElement"}),`;\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:'// Toggle de "completed" class'}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Dit voegt de class toe als hij er niet is,"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// en verwijdert hem als hij er wel is"}),`\r
    todoItem.`,s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"toggle"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"completed"'}),`);\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Update de counter"}),`\r
    `,s.jsx(e.span,{className:"hljs-title function_",children:"updateCounter"}),`();\r
  }\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Functie: Delete handler"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Deze functie wordt uitgevoerd wanneer"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// op de delete-button wordt geklikt"}),`\r
\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"handleDelete"}),"(",s.jsx(e.span,{className:"hljs-params",children:"button"}),`) {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Haal het parent <li> element op"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," todoItem = button.",s.jsx(e.span,{className:"hljs-property",children:"parentElement"}),`;\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Verwijder het element uit de DOM"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// removeChild() verwijdert een child-node"}),`\r
    todoItem.`,s.jsx(e.span,{className:"hljs-property",children:"parentElement"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"removeChild"}),`(todoItem);\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Update de counter"}),`\r
    `,s.jsx(e.span,{className:"hljs-title function_",children:"updateCounter"}),`();\r
  }\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Functie: Nieuw item toevoegen"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"handleAddTodo"}),"(",s.jsx(e.span,{className:"hljs-params"}),`) {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Haal de waarde uit het input-veld"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Hier gebruiken we value property van het input element"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," newTodoText = newTodoInput.",s.jsx(e.span,{className:"hljs-property",children:"value"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"trim"}),`();\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Check of het input-veld niet leeg is"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (newTodoText === ",s.jsx(e.span,{className:"hljs-string",children:'""'}),`) {\r
      `,s.jsx(e.span,{className:"hljs-title function_",children:"alert"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Voer alsjeblieft een item in!"'}),`);\r
      `,s.jsx(e.span,{className:"hljs-keyword",children:"return"}),`;\r
    }\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Maak een nieuw <li> element aan"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// createElement() is een DOM-method om elementen aan te maken"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," newLi = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"createElement"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"li"'}),`);\r
    newLi.`,s.jsx(e.span,{className:"hljs-property",children:"className"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"todo-item"'}),`;\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Stel de innerHTML in van het nieuwe element"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Dit bevat een checkbox, tekst en delete-button"}),`\r
    newLi.`,s.jsx(e.span,{className:"hljs-property",children:"innerHTML"})," = ",s.jsxs(e.span,{className:"hljs-string",children:[`\`\r
            <input type="checkbox" class="checkbox">\r
            <span class="todo-text">`,s.jsx(e.span,{className:"hljs-subst",children:"${newTodoText}"}),`</span>\r
            <button class="delete-btn">🗑</button>\r
        \``]}),`;\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Voeg het nieuwe element toe aan de todo-list"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// appendChild() voegt een child-node toe aan het einde"}),`\r
    todoList.`,s.jsx(e.span,{className:"hljs-title function_",children:"appendChild"}),`(newLi);\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Clear het input-veld"}),`\r
    newTodoInput.`,s.jsx(e.span,{className:"hljs-property",children:"value"})," = ",s.jsx(e.span,{className:"hljs-string",children:'""'}),`;\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Haal de checkbox en delete-button van het nieuw toegevoegde element op"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," newCheckbox = newLi.",s.jsx(e.span,{className:"hljs-title function_",children:"querySelector"}),"(",s.jsx(e.span,{className:"hljs-string",children:'".checkbox"'}),`);\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," newDeleteBtn = newLi.",s.jsx(e.span,{className:"hljs-title function_",children:"querySelector"}),"(",s.jsx(e.span,{className:"hljs-string",children:'".delete-btn"'}),`);\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Voeg event listeners toe aan het nieuwe element"}),`\r
    newCheckbox.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params"}),`) {\r
      `,s.jsx(e.span,{className:"hljs-title function_",children:"handleCheckbox"}),"(",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),`);\r
    });\r
\r
    newDeleteBtn.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params"}),`) {\r
      `,s.jsx(e.span,{className:"hljs-title function_",children:"handleDelete"}),"(",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),`);\r
    });\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Update de counter"}),`\r
    `,s.jsx(e.span,{className:"hljs-title function_",children:"updateCounter"}),`();\r
  }\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Event listeners instellen"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Voeg event listeners toe aan alle bestaande checkboxes en buttons"}),`\r
  `,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListeners"}),`(checkboxes, deleteButtons);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:'// Voeg een event listener toe aan de "Toevoegen" knop'}),`\r
  addBtn.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),`, handleAddTodo);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Bonus: Maak het mogelijk om met Enter een item toe te voegen"}),`\r
  newTodoInput.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"keypress"'}),", ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params",children:"event"}),`) {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Check of de toets die ingedrukt werd Enter is"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (event.",s.jsx(e.span,{className:"hljs-property",children:"key"})," === ",s.jsx(e.span,{className:"hljs-string",children:'"Enter"'}),`) {\r
      `,s.jsx(e.span,{className:"hljs-title function_",children:"handleAddTodo"}),`();\r
    }\r
  });\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Initiële setup"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Update de counter bij het laden van de pagina"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// (omdat het tweede item bij het starten al aangevinkt is)"}),`\r
  `,s.jsx(e.span,{className:"hljs-title function_",children:"updateCounter"}),`();\r
\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Setup voltooid!"'}),`);\r
}
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"stap-voor-stap-uitleg-van-de-code",children:["Stap-voor-stap uitleg van de code",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stap-voor-stap-uitleg-van-de-code",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.h3,{id:"1-window-load-event",children:["1. ",s.jsx(e.strong,{children:"Window Load Event"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-window-load-event",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-variable language_",children:"window"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"load"'}),`, setup);
`]})}),`
`,s.jsxs(e.p,{children:["Dit zorgt dat onze ",s.jsx(e.code,{children:"setup"})," functie pas wordt uitgevoerd als de pagina volledig geladen is. Dit is belangrijk omdat we elementen uit de DOM moeten ophalen."]}),`
`,s.jsxs(e.h3,{id:"2-elementen-opvragen-dom-tree",children:["2. ",s.jsx(e.strong,{children:"Elementen opvragen (DOM-Tree)"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-elementen-opvragen-dom-tree",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," todoList = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"todoList"'}),`);\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," checkboxes = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"checkbox"'}),`);
`]})}),`
`,s.jsx(e.p,{children:'Hier gebruiken we de methodes uit het hoofdstuk "Elementen opvragen" om HTML-elementen op te halen.'}),`
`,s.jsxs(e.h3,{id:"3-event-listeners-toevoegen-events",children:["3. ",s.jsx(e.strong,{children:"Event Listeners toevoegen (Events)"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-event-listeners-toevoegen-events",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:["checkbox.",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-title function_",children:"handleCheckbox"}),"(",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),`);\r
});
`]})}),`
`,s.jsx(e.p,{children:"We voegen event listeners toe aan elementen. Wanneer een event plaatsvindt (click), wordt de functie uitgevoerd."}),`
`,s.jsxs(e.h3,{id:"4-dom-manipulatie",children:["4. ",s.jsx(e.strong,{children:"DOM manipulatie"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-dom-manipulatie",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:["todoItem.",s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"toggle"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"completed"'}),`);
`]})}),`
`,s.jsxs(e.p,{children:["Met ",s.jsx(e.code,{children:"classList"})," kunnen we classes toevoegen en verwijderen. Dit past de styling aan."]}),`
`,s.jsxs(e.h3,{id:"5-event-handler-functions",children:["5. ",s.jsx(e.strong,{children:"Event Handler Functions"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-event-handler-functions",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"handleCheckbox()"})," en ",s.jsx(e.code,{children:"handleDelete()"})," zijn functies die worden uitgevoerd wanneer bepaalde events plaatsvinden."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"belangrijke-concepten-uit-dom-tree-en-events",children:["Belangrijke concepten uit DOM-Tree en Events",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#belangrijke-concepten-uit-dom-tree-en-events",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Concept"}),s.jsx(e.th,{children:"Voorbeeld in code"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Document opvragen"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"document.getElementById()"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Element Node"}),s.jsxs(e.td,{children:[s.jsx(e.code,{children:"<li>"})," elementen"]})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Parent-Child relatie"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"checkbox.parentElement"})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Event Listener"}),s.jsx(e.td,{children:s.jsx(e.code,{children:'addEventListener("click", ...)'})})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Event Handler"}),s.jsxs(e.td,{children:[s.jsx(e.code,{children:"handleCheckbox()"})," functie"]})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"DOM manipulatie"}),s.jsxs(e.td,{children:[s.jsx(e.code,{children:"appendChild()"}),", ",s.jsx(e.code,{children:"classList.toggle()"})]})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"Element ophalen"}),s.jsx(e.td,{children:s.jsx(e.code,{children:"document.getElementsByClassName()"})})]})]})]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"veelgemaakte-fouten-om-te-vermijden",children:["Veelgemaakte fouten om te vermijden",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#veelgemaakte-fouten-om-te-vermijden",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.h3,{id:"-fout-1-geen-window-load-event",children:["❌ ",s.jsx(e.strong,{children:"Fout 1: Geen window load event"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-fout-1-geen-window-load-event",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// FOUT - elementen zijn nog niet geladen!"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," todoList = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"todoList"'}),`);
`]})}),`
`,s.jsxs(e.h3,{id:"-correct",children:["✅ ",s.jsx(e.strong,{children:"Correct"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-correct",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-variable language_",children:"window"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"load"'}),`, setup);\r
\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"setup"}),"(",s.jsx(e.span,{className:"hljs-params"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," todoList = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"todoList"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Nu zijn alle elementen geladen"}),`\r
}
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h3,{id:"-fout-2-event-listeners-niet-toevoegen-aan-nieuwe-elementen",children:["❌ ",s.jsx(e.strong,{children:"Fout 2: Event listeners niet toevoegen aan nieuwe elementen"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-fout-2-event-listeners-niet-toevoegen-aan-nieuwe-elementen",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// FOUT - het nieuwe element krijgt geen event listener"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," newLi = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"createElement"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"li"'}),`);\r
dialogList.`,s.jsx(e.span,{className:"hljs-title function_",children:"appendChild"}),`(newLi);\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// De checkbox in newLi werkt niet!"}),`
`]})}),`
`,s.jsxs(e.h3,{id:"-correct-1",children:["✅ ",s.jsx(e.strong,{children:"Correct"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-correct-1",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," newLi = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"createElement"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"li"'}),`);\r
todoList.`,s.jsx(e.span,{className:"hljs-title function_",children:"appendChild"}),`(newLi);\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Event listeners toevoegen aan het nieuw gemaakte element"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," newCheckbox = newLi.",s.jsx(e.span,{className:"hljs-title function_",children:"querySelector"}),"(",s.jsx(e.span,{className:"hljs-string",children:'".checkbox"'}),`);\r
newCheckbox.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),`, handleCheckbox);
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h3,{id:"-fout-3-classlist-method-vergeten",children:["❌ ",s.jsx(e.strong,{children:"Fout 3: classList method vergeten"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-fout-3-classlist-method-vergeten",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// FOUT - classList.add is de juiste method"}),`\r
todoItem.`,s.jsx(e.span,{className:"hljs-property",children:"classlist"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"add"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"completed"'}),"); ",s.jsx(e.span,{className:"hljs-comment",children:"// classlist bestaat niet!"}),`
`]})}),`
`,s.jsxs(e.h3,{id:"-correct-2",children:["✅ ",s.jsx(e.strong,{children:"Correct"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-correct-2",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:["todoItem.",s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"add"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"completed"'}),`);\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// of"}),`\r
todoItem.`,s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"toggle"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"completed"'}),`);
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"bonus-uitgebreide-versie-met-localstorage",children:["Bonus: Uitgebreide versie met localStorage",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bonus-uitgebreide-versie-met-localstorage",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Wil je je todo-list opslaan zodat deze blijft bestaan na een page refresh? Voeg deze code toe:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// Sla items op in localStorage"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"saveTodos"}),"(",s.jsx(e.span,{className:"hljs-params"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," todoItems = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"todo-item"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` todos = [];\r
\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(e.span,{className:"hljs-keyword",children:"let"})," i = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),"; i < todoItems.",s.jsx(e.span,{className:"hljs-property",children:"length"}),`; i++) {\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," text = todoItems[i].",s.jsx(e.span,{className:"hljs-title function_",children:"querySelector"}),"(",s.jsx(e.span,{className:"hljs-string",children:'".todo-text"'}),").",s.jsx(e.span,{className:"hljs-property",children:"textContent"}),`;\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," completed = todoItems[i].",s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"contains"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"completed"'}),`);\r
    todos.`,s.jsx(e.span,{className:"hljs-title function_",children:"push"}),`({ text, completed });\r
  }\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Sla als JSON op in localStorage"}),`\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"localStorage"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"setItem"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"todos"'}),", ",s.jsx(e.span,{className:"hljs-title class_",children:"JSON"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"stringify"}),`(todos));\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Laad items van localStorage"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"loadTodos"}),"(",s.jsx(e.span,{className:"hljs-params"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," savedTodos = ",s.jsx(e.span,{className:"hljs-variable language_",children:"localStorage"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getItem"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"todos"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"if"}),` (savedTodos) {\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," todos = ",s.jsx(e.span,{className:"hljs-title class_",children:"JSON"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"parse"}),`(savedTodos);\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Wis huidige lijst"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," todoList = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"todoList"'}),`);\r
    todoList.`,s.jsx(e.span,{className:"hljs-property",children:"innerHTML"})," = ",s.jsx(e.span,{className:"hljs-string",children:'""'}),`;\r
\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// Vul lijst opnieuw in"}),`\r
    todos.`,s.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"todo"}),") =>"]}),` {\r
      `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," newLi = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"createElement"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"li"'}),`);\r
      newLi.`,s.jsx(e.span,{className:"hljs-property",children:"className"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"todo-item"'}),`;\r
      `,s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (todo.",s.jsx(e.span,{className:"hljs-property",children:"completed"}),") newLi.",s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"add"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"completed"'}),`);\r
\r
      newLi.`,s.jsx(e.span,{className:"hljs-property",children:"innerHTML"})," = ",s.jsxs(e.span,{className:"hljs-string",children:['`\r\n                <input type="checkbox" class="checkbox" ',s.jsxs(e.span,{className:"hljs-subst",children:["${todo.completed ? ",s.jsx(e.span,{className:"hljs-string",children:'"checked"'})," : ",s.jsx(e.span,{className:"hljs-string",children:'""'}),"}"]}),`>\r
                <span class="todo-text">`,s.jsx(e.span,{className:"hljs-subst",children:"${todo.text}"}),`</span>\r
                <button class="delete-btn">🗑</button>\r
            \``]}),`;\r
\r
      todoList.`,s.jsx(e.span,{className:"hljs-title function_",children:"appendChild"}),`(newLi);\r
    });\r
  }\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Roep loadTodos() aan in setup()"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// en saveTodos() na elke wijziging"}),`
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"toets-jezelf",children:["Toets jezelf",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#toets-jezelf",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Begrijp je waarom we ",s.jsx(e.code,{children:'window.addEventListener("load", setup)'})," gebruiken?"]}),`
`,s.jsxs(e.li,{children:["Kun je uitleggen wat het verschil is tussen ",s.jsx(e.code,{children:"textContent"})," en ",s.jsx(e.code,{children:"innerHTML"}),"?"]}),`
`,s.jsx(e.li,{children:"Kun je uitleggen wat event bubbling is en hoe het werkt in deze code?"}),`
`,s.jsxs(e.li,{children:["Snap je hoe ",s.jsx(e.code,{children:"classList.toggle()"})," werkt?"]}),`
`,s.jsx(e.li,{children:"Kunt je zelf een event listener schrijven?"}),`
`]})]})}function c(n={}){const{wrapper:e}=n.components||{};return e?s.jsx(e,{...n,children:s.jsx(a,{...n})}):a(n)}export{c as default};
