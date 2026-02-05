import{j as n,r as d}from"./index-3BjEGx3K.js";const o="/web2-cursus-2026/images/worthy.png";function r(){const a=document.querySelector("#changing-img");if(a.getAttribute("src")=="https://upload.wikimedia.org/wikipedia/commons/d/db/Margaret_Hamilton_-_restoration.jpg"){const e=document.getElementById("margaret-info");e&&e.remove();const s=document.createElement("p");s.id="margaret-info",s.innerHTML=`
      <strong style="color: #bfa13a; font-size: 1.1em;">Margaret Hamilton</strong> was een pionier in de computerwetenschap die bekend staat om haar werk aan de <span style="color: #bfa13a; font-weight: bold;">Apollo 11</span> missie. Ze ontwikkelde de onboard software die de <span style="color: #bfa13a; font-weight: bold;">maanlanding</span> mogelijk maakte en wordt vaak erkend als een van de eerste vrouwelijke software-ingenieurs. Op deze afbeelding staat ze naast alle code die ze schreef voor de missie.
    `,s.style.border="2px solid #bfa13a",s.style.background="#fffbe6",s.style.borderRadius="12px",s.style.padding="18px",s.style.margin="24px auto",s.style.textAlign="center",s.style.boxShadow="0 2px 12px rgba(191,161,58,0.08)",a.insertAdjacentElement("afterend",s)}else{const e=document.getElementById("margaret-info");e&&e.remove()}}function l(a){const e={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",span:"span",...a.components};return n.jsxs(n.Fragment,{children:[(d.useEffect(()=>{const s=document.getElementById("changing-img");if(!s)return;const t=new MutationObserver(()=>{const c=r();return()=>c?.()});t.observe(s,{attributes:!0});const i=r();return()=>{i?.(),t.disconnect()}},[]),null),`
`,n.jsx(e.p,{children:"Attributen zijn stukjes data die we kunnen toevoegen aan HTML elementen. Deze data kunnen we dan gebruiken om elementen te stylen of om ze te manipuleren met JavaScript."}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h2,{id:"gekende-attributen",children:["Gekende attributen",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gekende-attributen",children:n.jsx(e.span,{className:"icon icon-link"})})]}),`
`,n.jsx(e.p,{children:"Er zijn een aantal attributen die we al kennen, zoals de 'id' en 'class' attributen. Deze attributen kunnen we gebruiken om elementen te identificeren of om ze te stylen met CSS."}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h2,{id:"attributen-opvragen",children:["Attributen opvragen",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#attributen-opvragen",children:n.jsx(e.span,{className:"icon icon-link"})})]}),`
`,n.jsxs(e.p,{children:["We kunnen de attributen van een element opvragen met de ",n.jsx(e.code,{children:"getAttribute()"})," methode. Deze methode neemt de naam van het attribuut als argument en geeft de waarde van het attribuut terug."]}),`
`,n.jsxs(e.p,{children:["Hier is een voorbeeld van hoe we de ",n.jsx(e.code,{children:"getAttribute()"})," methode kunnen gebruiken om de waarde van een attribuut op te vragen:"]}),`
`,n.jsx(e.pre,{children:n.jsxs(e.code,{className:"hljs language-js",children:[n.jsx(e.span,{className:"hljs-comment",children:"// Haal de titel van deze div op"}),`\r
`,n.jsx(e.span,{className:"hljs-keyword",children:"const"})," element = ",n.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",n.jsx(e.span,{className:"hljs-title function_",children:"querySelector"}),"(",n.jsx(e.span,{className:"hljs-string",children:'"#sub"'}),`);\r
\r
`,n.jsx(e.span,{className:"hljs-comment",children:"// Haal de waarde van het 'class' attribuut op"}),`\r
`,n.jsx(e.span,{className:"hljs-keyword",children:"const"})," value = element.",n.jsx(e.span,{className:"hljs-title function_",children:"getAttribute"}),"(",n.jsx(e.span,{className:"hljs-string",children:'"class"'}),`);\r
`,n.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",n.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(value);
`]})}),`
`,n.jsx(e.p,{children:`Attributen wijzigen\r
We kunnen de waarde van een attribuut wijzigen met de setAttribute() methode. Deze methode neemt de naam van het attribuut en de nieuwe waarde van het attribuut als argumenten.`}),`
`,n.jsx(e.p,{children:"Hier is een voorbeeld van hoe we de setAttribute() methode kunnen gebruiken om de waarde van een attribuut te wijzigen:"}),`
`,n.jsx(e.pre,{children:n.jsxs(e.code,{className:"hljs language-js",children:[n.jsx(e.span,{className:"hljs-comment",children:"// Haal de titel van deze div op"}),`\r
`,n.jsx(e.span,{className:"hljs-keyword",children:"const"})," element = ",n.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",n.jsx(e.span,{className:"hljs-title function_",children:"querySelector"}),"(",n.jsx(e.span,{className:"hljs-string",children:'"#sub2"'}),`);\r
\r
`,n.jsx(e.span,{className:"hljs-comment",children:"// Wijzig de waarde van het id attribuut"}),`\r
element.`,n.jsx(e.span,{className:"hljs-title function_",children:"setAttribute"}),"(",n.jsx(e.span,{className:"hljs-string",children:'"id"'}),", ",n.jsx(e.span,{className:"hljs-string",children:'"new-id"'}),`);\r
\r
`,n.jsx(e.span,{className:"hljs-comment",children:"// Haal de nieuwe waarde van het id attribuut op"}),`\r
`,n.jsx(e.span,{className:"hljs-keyword",children:"const"})," newId = element.",n.jsx(e.span,{className:"hljs-title function_",children:"getAttribute"}),"(",n.jsx(e.span,{className:"hljs-string",children:'"id"'}),`);\r
`,n.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",n.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(newId);
`]})}),`
`,n.jsx(e.p,{children:"Je kan hier visuele effecten mee maken, zoals een afbeelding die verandert wanneer je erover hovert. Hieronder hebben we een afbeelding staan. Voorlopig is ze gewoon statisch. Voer nu onderstaande code uit in de console van je browser. Hover over de afbeelding en kijk wat er gebeurt."}),`
`,n.jsx("img",{src:o,alt:"Worthy",id:"changing-img",style:{maxWidth:"500px",display:"block",margin:"20px auto",padding:"5px",border:"2px solid black"}}),`
`,n.jsx(e.pre,{children:n.jsxs(e.code,{className:"hljs language-js",children:[n.jsx(e.span,{className:"hljs-comment",children:"// Haal het img element op"}),`\r
`,n.jsx(e.span,{className:"hljs-keyword",children:"const"})," img = ",n.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",n.jsx(e.span,{className:"hljs-title function_",children:"querySelector"}),"(",n.jsx(e.span,{className:"hljs-string",children:'"#changing-img"'}),`);\r
\r
`,n.jsx(e.span,{className:"hljs-comment",children:"// Voeg een event listener toe die de afbeelding verandert wanneer je erover hovert"}),`\r
img.`,n.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",n.jsx(e.span,{className:"hljs-string",children:'"mouseover"'}),", ",n.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {\r
  img.`,n.jsx(e.span,{className:"hljs-title function_",children:"setAttribute"}),`(\r
    `,n.jsx(e.span,{className:"hljs-string",children:'"src"'}),`,\r
    `,n.jsx(e.span,{className:"hljs-string",children:'"https://upload.wikimedia.org/wikipedia/commons/d/db/Margaret_Hamilton_-_restoration.jpg"'}),`\r
  );\r
});
`]})}),`
`,n.jsx(e.p,{children:"Indien de link in het code voorbeeld niet (meer) werkt, kan je hem vervangen met een link naar een afbeelding die zelf kiest."}),`
`,n.jsxs(e.h2,{id:"aanwezigheid-van-een-attribuut-controleren",children:["Aanwezigheid van een attribuut controleren",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aanwezigheid-van-een-attribuut-controleren",children:n.jsx(e.span,{className:"icon icon-link"})})]}),`
`,n.jsx(e.p,{children:"We kunnen controleren of een element een bepaald attribuut heeft met de hasAttribute() methode. Deze methode neemt de naam van het attribuut als argument en geeft true terug als het attribuut aanwezig is, en false als het attribuut niet aanwezig is."}),`
`,n.jsx(e.p,{children:"Hier is een voorbeeld van hoe we de hasAttribute() methode kunnen gebruiken om te controleren of een element een bepaald attribuut heeft:"}),`
`,n.jsx(e.pre,{children:n.jsxs(e.code,{className:"hljs language-js",children:[n.jsx(e.span,{className:"hljs-comment",children:"// Haal de titel van deze div op"}),`\r
`,n.jsx(e.span,{className:"hljs-keyword",children:"const"})," element = ",n.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",n.jsx(e.span,{className:"hljs-title function_",children:"querySelector"}),"(",n.jsx(e.span,{className:"hljs-string",children:'"#sub3"'}),`);\r
\r
`,n.jsx(e.span,{className:"hljs-comment",children:"// Controleer of het class attribuut aanwezig is"}),`\r
`,n.jsx(e.span,{className:"hljs-keyword",children:"const"})," hasClass = element.",n.jsx(e.span,{className:"hljs-title function_",children:"hasAttribute"}),"(",n.jsx(e.span,{className:"hljs-string",children:'"class"'}),`);\r
`,n.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",n.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(hasClass);\r
\r
`,n.jsx(e.span,{className:"hljs-comment",children:"// Controleer of het type attribuut aanwezig is"}),`\r
`,n.jsx(e.span,{className:"hljs-keyword",children:"const"})," hasType = element.",n.jsx(e.span,{className:"hljs-title function_",children:"hasAttribute"}),"(",n.jsx(e.span,{className:"hljs-string",children:'"type"'}),`);\r
`,n.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",n.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(hasType);
`]})})]})}function m(a={}){const{wrapper:e}=a.components||{};return e?n.jsx(e,{...a,children:n.jsx(l,{...a})}):l(a)}export{m as default};
