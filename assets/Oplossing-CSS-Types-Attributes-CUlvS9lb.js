import{j as s}from"./index-tKI7b9Q5.js";function a(n){const e={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",span:"span",...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h2,{id:"voorbeeldoplossing-profiel-kaartje",children:["Voorbeeldoplossing: Profiel Kaartje",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#voorbeeldoplossing-profiel-kaartje",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:`Dit is een complete werkende voorbeeldoplossing voor de oefening "Herhalingsoefening na hoofdstukken 'Types', 'Elements-Attributes' en 'CSS-Manipulation'". Bestudeer goed hoe de concepten uit Strings, Elementen toevoegen, Attributen instellen en CSS manipuleren hier toegepast worden.`}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"javascript-scriptjs",children:["JavaScript (",s.jsx(e.code,{children:"script.js"}),")",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#javascript-scriptjs",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-comment",children:"/// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Setup functie"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Dit is de functie die wordt uitgevoerd wanneer"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// de pagina volledig is geladen."}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"setup"})," = (",s.jsx(e.span,{className:"hljs-params"}),`) => {\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Pagina geladen, setup gestart!"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Stap 3: Creëer een div element"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Gebruik insertAdjacentHTML() om een div toe te voegen"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Dit komt uit het hoofdstuk over DOM manipulatie"}),`\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," container = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"container"'}),`);\r
  container.`,s.jsx(e.span,{className:"hljs-title function_",children:"insertAdjacentHTML"}),`(\r
    `,s.jsx(e.span,{className:"hljs-string",children:'"beforeend"'}),`,\r
    `,s.jsx(e.span,{className:"hljs-string",children:`'<div id="profile" class="kaart"></div>'`}),`,\r
  );\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Stap 4: Haal het element op"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Gebruik getElementById() om het element op te halen"}),`\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," profile = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"profile"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Stap 5: Stel attributen in"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Gebruik setAttribute() om data-attributen toe te voegen"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:'// Dit komt uit het hoofdstuk "Attributen"'}),`\r
  profile.`,s.jsx(e.span,{className:"hljs-title function_",children:"setAttribute"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"data-name"'}),", ",s.jsx(e.span,{className:"hljs-string",children:'"John Doe"'}),`);\r
  profile.`,s.jsx(e.span,{className:"hljs-title function_",children:"setAttribute"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"data-age"'}),", ",s.jsx(e.span,{className:"hljs-string",children:'"25"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Stap 6: Manipuleer CSS stijlen"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Gebruik de .style property om CSS eigenschappen te veranderen"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:'// Dit komt uit het hoofdstuk "CSS-Manipulatie"'}),`\r
  profile.`,s.jsx(e.span,{className:"hljs-property",children:"style"}),".",s.jsx(e.span,{className:"hljs-property",children:"backgroundColor"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"lightblue"'}),`;\r
  profile.`,s.jsx(e.span,{className:"hljs-property",children:"style"}),".",s.jsx(e.span,{className:"hljs-property",children:"width"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"300px"'}),`;\r
  profile.`,s.jsx(e.span,{className:"hljs-property",children:"style"}),".",s.jsx(e.span,{className:"hljs-property",children:"height"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"200px"'}),`;\r
  profile.`,s.jsx(e.span,{className:"hljs-property",children:"style"}),".",s.jsx(e.span,{className:"hljs-property",children:"border"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"2px solid black"'}),`;\r
  profile.`,s.jsx(e.span,{className:"hljs-property",children:"style"}),".",s.jsx(e.span,{className:"hljs-property",children:"padding"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"10px"'}),`;\r
  profile.`,s.jsx(e.span,{className:"hljs-property",children:"style"}),".",s.jsx(e.span,{className:"hljs-property",children:"textAlign"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"center"'}),`;\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Stap 7: Voeg tekst toe met strings en data-attributen"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Gebruik getAttribute() om waarden op te halen"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:'// Combineer met string concatenatie uit het hoofdstuk "String"'}),`\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," name = profile.",s.jsx(e.span,{className:"hljs-title function_",children:"getAttribute"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"data-name"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," age = profile.",s.jsx(e.span,{className:"hljs-title function_",children:"getAttribute"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"data-age"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," description = ",s.jsxs(e.span,{className:"hljs-string",children:["` is ",s.jsx(e.span,{className:"hljs-subst",children:"${age}"})," jaar oud en houdt van programmeren.`"]}),`;\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` fullSentence = name + description;\r
  profile.`,s.jsx(e.span,{className:"hljs-property",children:"innerText"}),` = fullSentence;\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Stap 8: Controleer attributen"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Gebruik console.log() om de attributen te tonen"}),`\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Name:"'}),", profile.",s.jsx(e.span,{className:"hljs-title function_",children:"getAttribute"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"data-name"'}),`));\r
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Age:"'}),", profile.",s.jsx(e.span,{className:"hljs-title function_",children:"getAttribute"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"data-age"'}),`));\r
};\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Window load event (BELANGRIJK!)"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// ========================================"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// We wachten tot het window load event plaatsvindt"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// zodat alle HTML-elementen volledig geladen zijn"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// voordat we JavaScript code uitvoeren."}),`\r
`,s.jsx(e.span,{className:"hljs-variable language_",children:"window"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"load"'}),`, setup);
`]})})]})}function r(n={}){const{wrapper:e}=n.components||{};return e?s.jsx(e,{...n,children:s.jsx(a,{...n})}):a(n)}export{r as default};
