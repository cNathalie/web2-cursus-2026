import{j as e}from"./index-DEXPSZA7.js";function a(n){const s={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"Er zijn verschillende input varianten die je kan gebruiken in een invulformulier."}),`
`,e.jsxs(s.h2,{id:"text-input",children:["Text Input",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#text-input",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsxs(s.p,{children:["Een tekstveld is een van de meest voorkomende input types. Hier kan de gebruiker tekst invoeren. We halen de waarde van een tekstveld op met de ",e.jsx(s.code,{children:".value"})," property."]}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsx("input",{id:"text-input",type:"text",placeholder:"Voer hier tekst in"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"input"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"text-input"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"text"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"placeholder"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"Voer hier tekst in"'})," />"]}),`
`]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," input = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#text-input"'}),`);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," inputValue = input.",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(inputValue);
`]})}),`
`,e.jsxs(s.h2,{id:"password-input",children:["Password Input",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#password-input",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Een wachtwoordveld is een tekstveld waarvan de ingevoerde tekst verborgen wordt.\r
We halen de waarde van een wachtwoordveld op met de .value property.`}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsx("input",{id:"password-input",type:"password",placeholder:"Voer hier je wachtwoord in"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"input"}),`\r
  `,e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"password-input"'}),`\r
  `,e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"password"'}),`\r
  `,e.jsx(s.span,{className:"hljs-attr",children:"placeholder"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"Voer hier je wachtwoord in"'}),`\r
/>`]}),`
`]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," passwordInput = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#password-input"'}),`);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," passwordValue = passwordInput.",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(passwordValue);
`]})}),`
`,e.jsxs(s.h2,{id:"checkbox",children:["Checkbox",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#checkbox",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Een checkbox is een vakje waar de gebruiker een vinkje in kan zetten.\r
We halen de waarde van een checkbox op met de .checked property.`}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsxs(s.p,{children:[e.jsx("input",{id:"checkbox-input",type:"checkbox"})," Ik ga akkoord met de voorwaarden"]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"input"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"checkbox-input"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"checkbox"'})," />"]}),' Ik ga akkoord met de voorwaarden ```\r\n\r\n```js\r\nconst checkbox = document.querySelector("#checkbox-input");\r\nconst isChecked = checkbox.checked;\r\nconsole.log(isChecked);\n']})}),`
`,e.jsxs(s.h2,{id:"radio-buttons",children:["Radio Buttons",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#radio-buttons",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Radio buttons zijn cirkeltjes waar de gebruiker er maar één van kan selecteren binnen een groep.\r
We halen de waarde van een radio button op met de .checked property.`}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsxs(s.p,{children:[e.jsx("input",{id:"radio-input-1",type:"radio",name:"radio-group"}),` Optie 1\r
`,e.jsx("input",{id:"radio-input-2",type:"radio",name:"radio-group"})," Optie 2"]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"input"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"radio-input-1"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"radio"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"name"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"radio-group"'})," />"]}),` Optie 1\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"input"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"radio-input-2"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"type"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"radio"'})," ",e.jsx(s.span,{className:"hljs-attr",children:"name"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"radio-group"'})," />"]}),` Optie 2
`]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," radioButtons = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",e.jsx(s.span,{className:"hljs-string",children:`'input[name="radio-group"]'`}),`);\r
radioButtons.`,e.jsx(s.span,{className:"hljs-title function_",children:"forEach"}),"(",e.jsxs(s.span,{className:"hljs-function",children:["(",e.jsx(s.span,{className:"hljs-params",children:"radio"}),") =>"]}),` {\r
  radio.`,e.jsx(s.span,{className:"hljs-title function_",children:"addEventListener"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"change"'}),", ",e.jsx(s.span,{className:"hljs-function",children:"() =>"}),` {\r
    `,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," selectedValue = radio.",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
    `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(selectedValue);\r
  });\r
});
`]})}),`
`,e.jsxs(s.h2,{id:"select-dropdown",children:["Select Dropdown",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#select-dropdown",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Een select dropdown is een keuzelijst waar de gebruiker één optie uit kan kiezen.\r
We halen de waarde van een select dropdown op met de .value property.`}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsxs("select",{id:"select-input",children:[e.jsx("option",{value:"optie1",children:"Optie 1"}),e.jsx("option",{value:"optie2",children:"Optie 2"}),e.jsx("option",{value:"optie3",children:"Optie 3"})]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"select"})," ",e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"select-input"'}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"option"})," ",e.jsx(s.span,{className:"hljs-attr",children:"value"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"optie1"'}),">"]}),"Optie 1",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"option"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"option"})," ",e.jsx(s.span,{className:"hljs-attr",children:"value"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"optie2"'}),">"]}),"Optie 2",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"option"}),">"]}),`\r
  `,e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"option"})," ",e.jsx(s.span,{className:"hljs-attr",children:"value"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"optie3"'}),">"]}),"Optie 3",e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"option"}),">"]}),`\r
`,e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"select"}),">"]}),`
`]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," select = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#select-input"'}),`);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," selectedValue = select.",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(selectedValue);
`]})}),`
`,e.jsxs(s.h2,{id:"textarea",children:["Textarea",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#textarea",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:`Een textarea is een groter tekstveld waar de gebruiker meerdere regels tekst kan invoeren.\r
We halen de waarde van een textarea op met de .value property.`}),`
`,e.jsx("div",{className:"inline-dynamic-example",children:e.jsx("textarea",{id:"textarea-input",rows:"4",cols:"50",placeholder:"Voer hier je bericht in"})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-html",children:[e.jsxs(s.span,{className:"hljs-tag",children:["<",e.jsx(s.span,{className:"hljs-name",children:"textarea"}),`\r
  `,e.jsx(s.span,{className:"hljs-attr",children:"id"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"textarea-input"'}),`\r
  `,e.jsx(s.span,{className:"hljs-attr",children:"rows"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"4"'}),`\r
  `,e.jsx(s.span,{className:"hljs-attr",children:"cols"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"50"'}),`\r
  `,e.jsx(s.span,{className:"hljs-attr",children:"placeholder"}),"=",e.jsx(s.span,{className:"hljs-string",children:'"Voer hier je bericht in"'}),`\r
>`]}),e.jsxs(s.span,{className:"hljs-tag",children:["</",e.jsx(s.span,{className:"hljs-name",children:"textarea"}),">"]}),`
`]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-js",children:[e.jsx(s.span,{className:"hljs-keyword",children:"const"})," textarea = ",e.jsx(s.span,{className:"hljs-variable language_",children:"document"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"querySelector"}),"(",e.jsx(s.span,{className:"hljs-string",children:'"#textarea-input"'}),`);\r
`,e.jsx(s.span,{className:"hljs-keyword",children:"const"})," textareaValue = textarea.",e.jsx(s.span,{className:"hljs-property",children:"value"}),`;\r
`,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),`(textareaValue);
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h2,{id:"overige-veelgebruikte-formulierelementen",children:["Overige veelgebruikte formulierelementen",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overige-veelgebruikte-formulierelementen",children:e.jsx(s.span,{className:"icon icon-link"})})]}),`
`,e.jsx(s.p,{children:"Hieronder vind je een beknopte lijst van andere elementen die vaak voorkomen in formulieren:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"<label>"})," — label voor een inputveld, verbetert toegankelijkheid"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"<button>"})," — knop om te verzenden of acties uit te voeren"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"<fieldset>"})," — groepeert gerelateerde velden binnen een formulier"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"<legend>"})," — titel/omschrijving voor een fieldset"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"<datalist>"})," — biedt suggesties bij het invullen van een inputveld"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"<output>"})," — toont het resultaat van een berekening of actie"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'<file input type="file">'})," — laat de gebruiker bestanden uploaden"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'<input type="date">'}),", ",e.jsx(s.code,{children:'<input type="time">'}),", ",e.jsx(s.code,{children:'<input type="color">'}),", ",e.jsx(s.code,{children:'<input type="range">'}),", ",e.jsx(s.code,{children:'<input type="email">'}),", ",e.jsx(s.code,{children:'<input type="number">'}),", ... — gespecialiseerde invoervelden voor specifieke soorten data"]}),`
`]}),`
`,e.jsx(s.p,{children:"Deze elementen maken je formulieren gebruiksvriendelijker, toegankelijker en veelzijdiger!"})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{r as default};
