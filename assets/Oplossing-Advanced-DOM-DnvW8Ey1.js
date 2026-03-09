import{j as e}from"./index-Daelu3Tg.js";function l(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"voorbeeldoplossing-interactieve-todo-list",children:["Voorbeeldoplossing: Interactieve Todo-List",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#voorbeeldoplossing-interactieve-todo-list",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:'Dit is een complete werkende voorbeeldoplossing voor de oefening "Interactieve Todo-List". Bestudeer goed hoe de concepten uit DOM-Tree en Events hier toegepast worden.'}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"javascript-mainjs",children:["JavaScript (",e.jsx(s.code,{children:"main.js"}),")",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#javascript-mainjs",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Window load event (BELANGRIJK!)"}),`\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// We wachten tot het window load event plaatsvindt"}),`\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// zodat alle HTML-elementen volledig geladen zijn"}),`\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// voordat we JavaScript code uitvoeren."}),`\r
\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),`, setup);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Setup functie"}),`\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Dit is de functie die wordt uitgevoerd wanneer"}),`\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// de pagina volledig is geladen."}),`\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"setup"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Pagina geladen, setup gestart!"'}),`);\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Haal alle nodige elementen op uit de DOM"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Hier gebruiken we getElementById() zoals uit"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:'// het hoofdstuk "Elementen opvragen" geleerd'}),`\r
\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," todoList = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"todoList"'}),`);\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," addBtn = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"addBtn"'}),`);\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," newTodoInput = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"newTodoInput"'}),`);\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," counterDisplay = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"counter"'}),`);\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Haal alle checkboxes op met getElementsByClassName()"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Dit geeft een HTMLCollection terug"}),`\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," checkboxes = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"checkbox"'}),`);\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Haal alle delete-buttons op"}),`\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," deleteButtons = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"delete-btn"'}),`);\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Functie: Counter updaten"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Deze functie telt hoeveel items voltooid zijn"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// en update de weergave"}),`\r
\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"updateCounter"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Haal alle items op"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," todoItems = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"todo-item"'}),`);\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:'// Tel hoeveel items de class "completed" hebben'}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"let"})," completedCount = ",e.jsx(s.span,{className:"hljs-number",children:"0"}),`;\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// We loopen door alle items (dit is een andere manier"}),`\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// dan getElementsByClassName, maar werkt hetzelfde)"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"for"})," (",e.jsx(s.span,{className:"hljs-keyword",children:"let"})," i = ",e.jsx(s.span,{className:"hljs-number",children:"0"}),"; i < todoItems.",e.jsx(s.span,{className:"hljs-property",children:"length"}),`; i++) {\r
      `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (todoItems[i].",e.jsx(s.span,{className:"hljs-property",children:"classList"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"contains"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"completed"'}),`)) {\r
        completedCount++;\r
      }\r
    }\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Tel totaal aantal items"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," totalCount = todoItems.",e.jsx(s.span,{className:"hljs-property",children:"length"}),`;\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Update de tekst in de counter"}),`\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Dit gebruiken we textContent (zoals geleerd in het hoofdstuk)"}),`\r
    counterDisplay.`,e.jsx(s.span,{className:"hljs-property",children:"textContent"})," = ",e.jsxs(s.span,{className:"hljs-string",children:["`Voltooide items: ",e.jsx(s.span,{className:"hljs-subst",children:"${completedCount}"}),"/",e.jsx(s.span,{className:"hljs-subst",children:"${totalCount}"}),"`"]}),`;\r
  }\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Functie: Event listeners toevoegen"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Deze functie voegt event listeners toe aan"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// checkboxes en delete-buttons"}),`\r
\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListeners"}),"(",e.jsx(s.span,{className:"hljs-params",children:"checkboxList, buttonList"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Loop door alle checkboxes"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"for"})," (",e.jsx(s.span,{className:"hljs-keyword",children:"let"})," i = ",e.jsx(s.span,{className:"hljs-number",children:"0"}),"; i < checkboxList.",e.jsx(s.span,{className:"hljs-property",children:"length"}),`; i++) {\r
      `,e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` checkbox = checkboxList[i];\r
\r
      `,e.jsx(s.span,{className:"hljs-comment",children:"// Voeg een click event listener toe"}),`\r
      `,e.jsx(s.span,{className:"hljs-comment",children:"// Als de checkbox wordt geklikt, voer handleCheckbox uit"}),`\r
      checkbox.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(s.span,{className:"hljs-keyword",children:"function"})," (",e.jsx(s.span,{className:"hljs-params"}),`) {\r
        `,e.jsx(s.span,{className:"hljs-title function_",children:"handleCheckbox"}),"(",e.jsx(s.span,{className:"hljs-variable language_",children:"this"}),`);\r
      });\r
    }\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Loop door alle delete-buttons"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"for"})," (",e.jsx(s.span,{className:"hljs-keyword",children:"let"})," i = ",e.jsx(s.span,{className:"hljs-number",children:"0"}),"; i < buttonList.",e.jsx(s.span,{className:"hljs-property",children:"length"}),`; i++) {\r
      `,e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` deleteBtn = buttonList[i];\r
\r
      `,e.jsx(s.span,{className:"hljs-comment",children:"// Voeg een click event listener toe"}),`\r
      deleteBtn.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(s.span,{className:"hljs-keyword",children:"function"})," (",e.jsx(s.span,{className:"hljs-params"}),`) {\r
        `,e.jsx(s.span,{className:"hljs-title function_",children:"handleDelete"}),"(",e.jsx(s.span,{className:"hljs-variable language_",children:"this"}),`);\r
      });\r
    }\r
  }\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Functie: Checkbox handler"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Deze functie wordt uitgevoerd wanneer"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// op een checkbox wordt geklikt"}),`\r
\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"handleCheckbox"}),"(",e.jsx(s.span,{className:"hljs-params",children:"checkbox"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Haal het parent <li> element op"}),`\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Hier gebruiken we parentElement (family-tree relatie)"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," todoItem = checkbox.",e.jsx(s.span,{className:"hljs-property",children:"parentElement"}),`;\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:'// Toggle de "completed" class'}),`\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Dit voegt de class toe als hij er niet is,"}),`\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// en verwijdert hem als hij er wel is"}),`\r
    todoItem.`,e.jsx(s.span,{className:"hljs-property",children:"classList"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"toggle"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"completed"'}),`);\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Update de counter"}),`\r
    `,e.jsx(s.span,{className:"hljs-title function_",children:"updateCounter"}),`();\r
  }\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Functie: Delete handler"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Deze functie wordt uitgevoerd wanneer"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// op de delete-button wordt geklikt"}),`\r
\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"handleDelete"}),"(",e.jsx(s.span,{className:"hljs-params",children:"button"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Haal het parent <li> element op"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," todoItem = button.",e.jsx(s.span,{className:"hljs-property",children:"parentElement"}),`;\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Verwijder het element uit de DOM"}),`\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// removeChild() verwijdert een child-node"}),`\r
    todoItem.`,e.jsx(s.span,{className:"hljs-property",children:"parentElement"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"removeChild"}),`(todoItem);\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Update de counter"}),`\r
    `,e.jsx(s.span,{className:"hljs-title function_",children:"updateCounter"}),`();\r
  }\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Functie: Nieuw item toevoegen"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"handleAddTodo"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Haal de waarde uit het input-veld"}),`\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Hier gebruiken we value property van het input element"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," newTodoText = newTodoInput.",e.jsx(s.span,{className:"hljs-property",children:"value"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"trim"}),`();\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Check of het input-veld niet leeg is"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (newTodoText === ",e.jsx(s.span,{className:"hljs-string",children:'""'}),`) {\r
      `,e.jsx(s.span,{className:"hljs-title function_",children:"alert"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Voer alsjeblieft een item in!"'}),`);\r
      `,e.jsx(s.span,{className:"hljs-keyword",children:"return"}),`;\r
    }\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Maak een nieuw <li> element aan"}),`\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// createElement() is een DOM-method om elementen aan te maken"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," newLi = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"createElement"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"li"'}),`);\r
    newLi.`,e.jsx(s.span,{className:"hljs-property",children:"className"})," = ",e.jsx(s.span,{className:"hljs-string",children:'"todo-item"'}),`;\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Stel de innerHTML in van het nieuwe element"}),`\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Dit bevat een checkbox, tekst en delete-button"}),`\r
    newLi.`,e.jsx(s.span,{className:"hljs-property",children:"innerHTML"})," = ",e.jsxs(s.span,{className:"hljs-string",children:[`\`\r
            <input type="checkbox" class="checkbox">\r
            <span class="todo-text">`,e.jsx(s.span,{className:"hljs-subst",children:"${newTodoText}"}),`</span>\r
            <button class="delete-btn">🗑</button>\r
        \``]}),`;\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Voeg het nieuwe element toe aan de todo-list"}),`\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// appendChild() voegt een child-node toe aan het einde"}),`\r
    todoList.`,e.jsx(s.span,{className:"hljs-title function_",children:"appendChild"}),`(newLi);\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Clear het input-veld"}),`\r
    newTodoInput.`,e.jsx(s.span,{className:"hljs-property",children:"value"})," = ",e.jsx(s.span,{className:"hljs-string",children:'""'}),`;\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Haal de checkbox en delete-button van het nieuw toegevoegde element op"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," newCheckbox = newLi.",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'".checkbox"'}),`);\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," newDeleteBtn = newLi.",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'".delete-btn"'}),`);\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Voeg event listeners toe aan het nieuwe element"}),`\r
    newCheckbox.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(s.span,{className:"hljs-keyword",children:"function"})," (",e.jsx(s.span,{className:"hljs-params"}),`) {\r
      `,e.jsx(s.span,{className:"hljs-title function_",children:"handleCheckbox"}),"(",e.jsx(s.span,{className:"hljs-variable language_",children:"this"}),`);\r
    });\r
\r
    newDeleteBtn.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(s.span,{className:"hljs-keyword",children:"function"})," (",e.jsx(s.span,{className:"hljs-params"}),`) {\r
      `,e.jsx(s.span,{className:"hljs-title function_",children:"handleDelete"}),"(",e.jsx(s.span,{className:"hljs-variable language_",children:"this"}),`);\r
    });\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Update de counter"}),`\r
    `,e.jsx(s.span,{className:"hljs-title function_",children:"updateCounter"}),`();\r
  }\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Event listeners instellen"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Voeg event listeners toe aan alle bestaande checkboxes en buttons"}),`\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListeners"}),`(checkboxes, deleteButtons);\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:'// Voeg een event listener toe aan de "Toevoegen" knop'}),`\r
  addBtn.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),`, handleAddTodo);\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Bonus: Maak het mogelijk om met Enter een item toe te voegen"}),`\r
  newTodoInput.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"keypress"'}),", ",e.jsx(s.span,{className:"hljs-keyword",children:"function"})," (",e.jsx(s.span,{className:"hljs-params",children:"event"}),`) {\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Check of de toets die ingedrukt werd Enter is"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (event.",e.jsx(s.span,{className:"hljs-property",children:"key"})," === ",e.jsx(s.span,{className:"hljs-string",children:'"Enter"'}),`) {\r
      `,e.jsx(s.span,{className:"hljs-title function_",children:"handleAddTodo"}),`();\r
    }\r
  });\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Initiële setup"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// ========================================"}),`\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Update de counter bij het laden van de pagina"}),`\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// (omdat het tweede item bij het starten al aangevinkt is)"}),`\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"updateCounter"}),`();\r
\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"Setup voltooid!"'}),`);\r
}
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"stap-voor-stap-uitleg-van-de-code",children:["Stap-voor-stap uitleg van de code",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stap-voor-stap-uitleg-van-de-code",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.h3,{id:"1-window-load-event",children:["1. ",e.jsx(s.strong,{children:"Window Load Event"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-window-load-event",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),`, setup);
`]})}),`
`,e.jsxs(s.p,{children:["Dit zorgt dat onze ",e.jsx(s.code,{children:"setup"})," functie pas wordt uitgevoerd als de pagina volledig geladen is. Dit is belangrijk omdat we elementen uit de DOM moeten ophalen."]}),`
`,e.jsxs(s.h3,{id:"2-elementen-opvragen-dom-tree",children:["2. ",e.jsx(s.strong,{children:"Elementen opvragen (DOM-Tree)"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-elementen-opvragen-dom-tree",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," todoList = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"todoList"'}),`);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," checkboxes = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"checkbox"'}),`);
`]})}),`
`,e.jsx(s.p,{children:'Hier gebruiken we de methodes uit het hoofdstuk "Elementen opvragen" om HTML-elementen op te halen.'}),`
`,e.jsxs(s.h3,{id:"3-event-listeners-toevoegen-events",children:["3. ",e.jsx(s.strong,{children:"Event Listeners toevoegen (Events)"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-event-listeners-toevoegen-events",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:["checkbox.",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),", ",e.jsx(s.span,{className:"hljs-keyword",children:"function"})," (",e.jsx(s.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-title function_",children:"handleCheckbox"}),"(",e.jsx(s.span,{className:"hljs-variable language_",children:"this"}),`);\r
});
`]})}),`
`,e.jsx(s.p,{children:"We voegen event listeners toe aan elementen. Wanneer een event plaatsvindt (click), wordt de functie uitgevoerd."}),`
`,e.jsxs(s.h3,{id:"4-dom-manipulatie",children:["4. ",e.jsx(s.strong,{children:"DOM manipulatie"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-dom-manipulatie",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:["todoItem.",e.jsx(s.span,{className:"hljs-property",children:"classList"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"toggle"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"completed"'}),`);
`]})}),`
`,e.jsxs(s.p,{children:["Met ",e.jsx(s.code,{children:"classList"})," kunnen we classes toevoegen en verwijderen. Dit past de styling aan."]}),`
`,e.jsxs(s.h3,{id:"5-event-handler-functions",children:["5. ",e.jsx(s.strong,{children:"Event Handler Functions"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-event-handler-functions",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"handleCheckbox()"})," en ",e.jsx(s.code,{children:"handleDelete()"})," zijn functies die worden uitgevoerd wanneer bepaalde events plaatsvinden."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"belangrijke-concepten-uit-dom-tree-en-events",children:["Belangrijke concepten uit DOM-Tree en Events",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#belangrijke-concepten-uit-dom-tree-en-events",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Concept"}),e.jsx(s.th,{children:"Voorbeeld in code"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Document opvragen"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"document.getElementById()"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Element Node"}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"<li>"})," elementen"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Parent-Child relatie"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"checkbox.parentElement"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Event Listener"}),e.jsx(s.td,{children:e.jsx(s.code,{children:'addEventListener("click", ...)'})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Event Handler"}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"handleCheckbox()"})," functie"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"DOM manipulatie"}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"appendChild()"}),", ",e.jsx(s.code,{children:"classList.toggle()"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Element ophalen"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"document.getElementsByClassName()"})})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"veelgemaakte-fouten-om-te-vermijden",children:["Veelgemaakte fouten om te vermijden",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#veelgemaakte-fouten-om-te-vermijden",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.h3,{id:"-fout-1-geen-window-load-event",children:["❌ ",e.jsx(s.strong,{children:"Fout 1: Geen window load event"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-fout-1-geen-window-load-event",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-comment",children:"// FOUT - elementen zijn nog niet geladen!"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," todoList = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"todoList"'}),`);
`]})}),`
`,e.jsxs(s.h3,{id:"-correct",children:["✅ ",e.jsx(s.strong,{children:"Correct"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-correct",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-variable language_",children:"window"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"load"'}),`, setup);\r
\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"setup"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," todoList = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"todoList"'}),`);\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Nu zijn alle elementen geladen"}),`\r
}
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"-fout-2-event-listeners-niet-toevoegen-aan-nieuwe-elementen",children:["❌ ",e.jsx(s.strong,{children:"Fout 2: Event listeners niet toevoegen aan nieuwe elementen"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-fout-2-event-listeners-niet-toevoegen-aan-nieuwe-elementen",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-comment",children:"// FOUT - het nieuwe element krijgt geen event listener"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," newLi = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"createElement"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"li"'}),`);\r
dialogList.`,e.jsx(s.span,{className:"hljs-title function_",children:"appendChild"}),`(newLi);\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// De checkbox in newLi werkt niet!"}),`
`]})}),`
`,e.jsxs(s.h3,{id:"-correct-1",children:["✅ ",e.jsx(s.strong,{children:"Correct"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-correct-1",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," newLi = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"createElement"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"li"'}),`);\r
todoList.`,e.jsx(s.span,{className:"hljs-title function_",children:"appendChild"}),`(newLi);\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Event listeners toevoegen aan het nieuw gemaakte element"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," newCheckbox = newLi.",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'".checkbox"'}),`);\r
newCheckbox.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"click"'}),`, handleCheckbox);
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"-fout-3-classlist-method-vergeten",children:["❌ ",e.jsx(s.strong,{children:"Fout 3: classList method vergeten"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-fout-3-classlist-method-vergeten",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-comment",children:"// FOUT - classList.add is de juiste method"}),`\r
todoItem.`,e.jsx(s.span,{className:"hljs-property",children:"classlist"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"add"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"completed"'}),"); ",e.jsx(s.span,{className:"hljs-comment",children:"// classlist bestaat niet!"}),`
`]})}),`
`,e.jsxs(s.h3,{id:"-correct-2",children:["✅ ",e.jsx(s.strong,{children:"Correct"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-correct-2",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:["todoItem.",e.jsx(s.span,{className:"hljs-property",children:"classList"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"add"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"completed"'}),`);\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// of"}),`\r
todoItem.`,e.jsx(s.span,{className:"hljs-property",children:"classList"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"toggle"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"completed"'}),`);
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"bonus-uitgebreide-versie-met-localstorage",children:["Bonus: Uitgebreide versie met localStorage",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bonus-uitgebreide-versie-met-localstorage",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Wil je je todo-list opslaan zodat deze blijft bestaan na een page refresh? Voeg deze code toe:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-comment",children:"// Sla items op in localStorage"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"saveTodos"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," todoItems = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"todo-item"'}),`);\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"}),` todos = [];\r
\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"for"})," (",e.jsx(s.span,{className:"hljs-keyword",children:"let"})," i = ",e.jsx(s.span,{className:"hljs-number",children:"0"}),"; i < todoItems.",e.jsx(s.span,{className:"hljs-property",children:"length"}),`; i++) {\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," text = todoItems[i].",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'".todo-text"'}),").",e.jsx(s.span,{className:"hljs-property",children:"textContent"}),`;\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," completed = todoItems[i].",e.jsx(s.span,{className:"hljs-property",children:"classList"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"contains"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"completed"'}),`);\r
    todos.`,e.jsx(s.span,{className:"hljs-title function_",children:"push"}),`({ text, completed });\r
  }\r
\r
  `,e.jsx(s.span,{className:"hljs-comment",children:"// Sla als JSON op in localStorage"}),`\r
  `,e.jsx(s.span,{className:"hljs-variable language_",children:"localStorage"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"setItem"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"todos"'}),", ",e.jsx(s.span,{className:"hljs-title class_",children:"JSON"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"stringify"}),`(todos));\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Laad items van localStorage"}),`\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"loadTodos"}),"(",e.jsx(s.span,{className:"hljs-params"}),`) {\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," savedTodos = ",e.jsx(s.span,{className:"hljs-variable language_",children:"localStorage"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getItem"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"todos"'}),`);\r
\r
  `,e.jsx(s.span,{className:"hljs-keyword",children:"if"}),` (savedTodos) {\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," todos = ",e.jsx(s.span,{className:"hljs-title class_",children:"JSON"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"parse"}),`(savedTodos);\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Wis huidige lijst"}),`\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," todoList = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"getElementById"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"todoList"'}),`);\r
    todoList.`,e.jsx(s.span,{className:"hljs-property",children:"innerHTML"})," = ",e.jsx(s.span,{className:"hljs-string",children:'""'}),`;\r
\r
    `,e.jsx(s.span,{className:"hljs-comment",children:"// Vul lijst opnieuw in"}),`\r
    todos.`,e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"todo"}),") =>"]}),` {\r
      `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," newLi = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"createElement"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"li"'}),`);\r
      newLi.`,e.jsx(s.span,{className:"hljs-property",children:"className"})," = ",e.jsx(s.span,{className:"hljs-string",children:'"todo-item"'}),`;\r
      `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (todo.",e.jsx(s.span,{className:"hljs-property",children:"completed"}),") newLi.",e.jsx(s.span,{className:"hljs-property",children:"classList"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"add"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"completed"'}),`);\r
\r
      newLi.`,e.jsx(s.span,{className:"hljs-property",children:"innerHTML"})," = ",e.jsxs(s.span,{className:"hljs-string",children:['`\r\n                <input type="checkbox" class="checkbox" ',e.jsxs(s.span,{className:"hljs-subst",children:["${todo.completed ? ",e.jsx(s.span,{className:"hljs-string",children:'"checked"'})," : ",e.jsx(s.span,{className:"hljs-string",children:'""'}),"}"]}),`>\r
                <span class="todo-text">`,e.jsx(s.span,{className:"hljs-subst",children:"${todo.text}"}),`</span>\r
                <button class="delete-btn">🗑</button>\r
            \``]}),`;\r
\r
      todoList.`,e.jsx(s.span,{className:"hljs-title function_",children:"appendChild"}),`(newLi);\r
    });\r
  }\r
}\r
\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// Roep loadTodos() aan in setup()"}),`\r
`,e.jsx(s.span,{className:"hljs-comment",children:"// en saveTodos() na elke wijziging"}),`
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"toets-jezelf",children:["Toets jezelf",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#toets-jezelf",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Begrijp je waarom we ",e.jsx(s.code,{children:'window.addEventListener("load", setup)'})," gebruiken?"]}),`
`,e.jsxs(s.li,{children:["Kun je uitleggen wat het verschil is tussen ",e.jsx(s.code,{children:"textContent"})," en ",e.jsx(s.code,{children:"innerHTML"}),"?"]}),`
`,e.jsx(s.li,{children:"Kun je uitleggen wat event bubbling is en hoe het werkt in deze code?"}),`
`,e.jsxs(s.li,{children:["Snap je hoe ",e.jsx(s.code,{children:"classList.toggle()"})," werkt?"]}),`
`,e.jsx(s.li,{children:"Kunt je zelf een event listener schrijven?"}),`
`]})]})}function c(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{c as default};
