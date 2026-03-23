import{j as s}from"./index-k41auBqi.js";const l="/web2-cursus-2026/images/interactivePhotoalbum.png";function a(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h2,{id:"oefening-interactieve-fotoalbum",children:["Oefening: Interactieve Fotoalbum",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#oefening-interactieve-fotoalbum",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["In deze oefening oefen je ",s.jsx(e.strong,{children:"elementen opvragen"})," en ",s.jsx(e.strong,{children:"event listeners toepassen"}),` zonder dynamisch elementen toe te voegen of te verwijderen.\r
Je maakt deze oefening in een nieuw Visual Studio Code projectje.`]}),`
`,s.jsx(e.p,{children:"Je gaat een eenvoudig interactief fotoalbum bouwen waar bezoekers kunnen:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Door foto's navigeren met knoppen (volgende/vorige)"}),`
`,s.jsx(e.li,{children:"Foto's als favoriet aanduiden door op een ster te klikken"}),`
`,s.jsx(e.li,{children:"Een beschrijving zien/verbergen met een knop"}),`
`,s.jsx(e.li,{children:'Het huidige fotogetal zien (bijv. "Foto 2 van 5")'}),`
`]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"eindresultaat",children:["Eindresultaat",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eindresultaat",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx("img",{src:l,alt:"Eindresultaat van de oefening: een fotoalbum met navigatie, favorieten en beschrijving"}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"stap-1-html-structuur",children:["Stap 1: HTML-structuur",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stap-1-html-structuur",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Maak een bestand ",s.jsx(e.code,{children:"album.html"}),":"]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-html",children:[s.jsxs(e.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(e.span,{className:"hljs-keyword",children:"html"}),">"]}),`\r
`,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"html"})," ",s.jsx(e.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"nl"'}),">"]}),`\r
`,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"head"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"meta"})," ",s.jsx(e.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"UTF-8"'}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"meta"})," ",s.jsx(e.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"title"}),">"]}),"Fotoalbum",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"title"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"link"})," ",s.jsx(e.span,{className:"hljs-attr",children:"rel"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"styles.css"'}),">"]}),`\r
`,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"head"}),">"]}),`\r
`,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"body"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"container"'}),">"]}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"h1"}),">"]}),"Mijn Fotoalbum",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"h1"}),">"]}),`\r
        \r
        `,s.jsx(e.span,{className:"hljs-comment",children:"<!-- Foto-weergave -->"}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"photo-frame"'}),">"]}),`\r
            `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"img"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"photoImage"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"src"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"photo1.jpg"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"alt"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"Foto"'}),">"]}),`\r
            `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"p"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"photoCounter"'}),">"]}),"Foto 1 van 5",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"p"}),">"]}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
        \r
        `,s.jsx(e.span,{className:"hljs-comment",children:"<!-- Foto-titel -->"}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"h2"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"photoTitle"'}),">"]}),"Een mooie zonsondergang",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"h2"}),">"]}),`\r
        \r
        `,s.jsx(e.span,{className:"hljs-comment",children:"<!-- Beschrijving (verborgen) -->"}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"p"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"photoDescription"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"hidden"'}),">"]}),`\r
            Dit is een prachtige foto van een zonsondergang boven het strand. \r
            Genomen op een mooie zomeravond met een professionele camera.\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"p"}),">"]}),`\r
        \r
        `,s.jsx(e.span,{className:"hljs-comment",children:"<!-- Knoppen -->"}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"button-group"'}),">"]}),`\r
            `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"prevBtn"'}),">"]}),"← Vorige",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
            `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"favoriteBtn"'}),">"]}),"★ Favoriet",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
            `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"nextBtn"'}),">"]}),"Volgende →",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
        \r
        `,s.jsx(e.span,{className:"hljs-comment",children:"<!-- Beschrijving knop -->"}),`\r
        `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"toggleDescBtn"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"secondary"'}),">"]}),"Beschrijving tonen",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
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
    `,s.jsx(e.span,{className:"hljs-attribute",children:"font-family"}),": ",s.jsx(e.span,{className:"hljs-string",children:"'Segoe UI'"}),`, Tahoma, Geneva, Verdana, sans-serif;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#f5f5f5"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"20px"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"display"}),`: flex;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"justify-content"}),`: center;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"align-items"}),`: center;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"min-height"}),": ",s.jsx(e.span,{className:"hljs-number",children:"100vh"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".container"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),`: white;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"2rem"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"10px"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"box-shadow"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0"})," ",s.jsx(e.span,{className:"hljs-number",children:"4px"})," ",s.jsx(e.span,{className:"hljs-number",children:"20px"})," ",s.jsx(e.span,{className:"hljs-built_in",children:"rgba"}),"(",s.jsx(e.span,{className:"hljs-number",children:"0"}),", ",s.jsx(e.span,{className:"hljs-number",children:"0"}),", ",s.jsx(e.span,{className:"hljs-number",children:"0"}),", ",s.jsx(e.span,{className:"hljs-number",children:"0.1"}),`);\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"max-width"}),": ",s.jsx(e.span,{className:"hljs-number",children:"600px"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"width"}),": ",s.jsx(e.span,{className:"hljs-number",children:"100%"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-tag",children:"h1"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"text-align"}),`: center;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#333"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(e.span,{className:"hljs-number",children:"2rem"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".photo-frame"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"position"}),`: relative;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#e0e0e0"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"8px"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"overflow"}),`: hidden;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1rem"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"aspect-ratio"}),": ",s.jsx(e.span,{className:"hljs-number",children:"16"})," / ",s.jsx(e.span,{className:"hljs-number",children:"9"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"display"}),`: flex;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"align-items"}),`: center;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"justify-content"}),`: center;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#photoImage"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"width"}),": ",s.jsx(e.span,{className:"hljs-number",children:"100%"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"height"}),": ",s.jsx(e.span,{className:"hljs-number",children:"100%"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"object-fit"}),`: cover;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#photoCounter"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"position"}),`: absolute;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"bottom"}),": ",s.jsx(e.span,{className:"hljs-number",children:"10px"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"right"}),": ",s.jsx(e.span,{className:"hljs-number",children:"10px"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"rgba"}),"(",s.jsx(e.span,{className:"hljs-number",children:"0"}),", ",s.jsx(e.span,{className:"hljs-number",children:"0"}),", ",s.jsx(e.span,{className:"hljs-number",children:"0"}),", ",s.jsx(e.span,{className:"hljs-number",children:"0.7"}),`);\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),`: white;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"5px"})," ",s.jsx(e.span,{className:"hljs-number",children:"10px"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"5px"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0.9rem"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-tag",children:"h2"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#333"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1.3rem"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"margin"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1rem"})," ",s.jsx(e.span,{className:"hljs-number",children:"0"})," ",s.jsx(e.span,{className:"hljs-number",children:"0.5rem"})," ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#photoDescription"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#666"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"line-height"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1.6"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1.5rem"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0.95rem"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".hidden"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"display"}),`: none;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".button-group"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"display"}),`: flex;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"gap"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1rem"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1rem"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"justify-content"}),`: center;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-tag",children:"button"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0.75rem"})," ",s.jsx(e.span,{className:"hljs-number",children:"1.5rem"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1rem"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"border"}),`: none;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(e.span,{className:"hljs-number",children:"5px"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"cursor"}),`: pointer;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"transition"}),": all ",s.jsx(e.span,{className:"hljs-number",children:"0.3s"}),` ease;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"font-weight"}),`: bold;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#prevBtn"}),`,\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#nextBtn"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"flex"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#667eea"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),`: white;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#prevBtn"}),s.jsx(e.span,{className:"hljs-selector-pseudo",children:":hover"}),`,\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#nextBtn"}),s.jsx(e.span,{className:"hljs-selector-pseudo",children:":hover"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#5568d3"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"transform"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"translateY"}),"(-",s.jsx(e.span,{className:"hljs-number",children:"2px"}),`);\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"box-shadow"}),": ",s.jsx(e.span,{className:"hljs-number",children:"0"})," ",s.jsx(e.span,{className:"hljs-number",children:"4px"})," ",s.jsx(e.span,{className:"hljs-number",children:"12px"})," ",s.jsx(e.span,{className:"hljs-built_in",children:"rgba"}),"(",s.jsx(e.span,{className:"hljs-number",children:"102"}),", ",s.jsx(e.span,{className:"hljs-number",children:"126"}),", ",s.jsx(e.span,{className:"hljs-number",children:"234"}),", ",s.jsx(e.span,{className:"hljs-number",children:"0.4"}),`);\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#favoriteBtn"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"flex"}),": ",s.jsx(e.span,{className:"hljs-number",children:"1"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#fff3cd"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#333"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"border"}),": ",s.jsx(e.span,{className:"hljs-number",children:"2px"})," solid ",s.jsx(e.span,{className:"hljs-number",children:"#ffc107"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#favoriteBtn"}),s.jsx(e.span,{className:"hljs-selector-pseudo",children:":hover"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#ffe69c"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"transform"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"translateY"}),"(-",s.jsx(e.span,{className:"hljs-number",children:"2px"}),`);\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-id",children:"#favoriteBtn"}),s.jsx(e.span,{className:"hljs-selector-class",children:".favorite"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#ffc107"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#333"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"font-weight"}),`: bold;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".secondary"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"width"}),": ",s.jsx(e.span,{className:"hljs-number",children:"100%"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#e0e0e0"}),`;\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#333"}),`;\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-selector-class",children:".secondary"}),s.jsx(e.span,{className:"hljs-selector-pseudo",children:":hover"}),` {\r
    `,s.jsx(e.span,{className:"hljs-attribute",children:"background"}),": ",s.jsx(e.span,{className:"hljs-number",children:"#d0d0d0"}),`;\r
}
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"stap-3-javascript",children:["Stap 3: JavaScript",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stap-3-javascript",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Maak een bestand ",s.jsx(e.code,{children:"main.js"}),". ",s.jsx(e.strong,{children:"Lees dit eerst goed door en begrijp elke regel!"})]}),`
`,s.jsxs(e.h3,{id:"vereisten",children:["Vereisten",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vereisten",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Jouw JavaScript moet het volgende bevatten:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Window load event"}),": Wacht tot de pagina volledig is geladen"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Elementen opvragen"}),": Haal alle benodigde elementen op met:",`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"document.getElementById()"})}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"document.getElementsByClassName()"})," (optioneel)"]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Event listeners"}),": Voeg event listeners toe aan:",`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:'De "Vorige" en "Volgende" knoppen (click event)'}),`
`,s.jsx(e.li,{children:'De "Favoriet" knop (click event)'}),`
`,s.jsx(e.li,{children:'De "Beschrijving" knop (click event)'}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"classList manipulatie"}),": Voeg toe/verwijder classes om:",`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Favoriete status te tonen"}),`
`,s.jsx(e.li,{children:"Beschrijving te tonen/verbergen"}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"textContent"}),": Update de tekst van:",`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Fotogetal"}),`
`,s.jsx(e.li,{children:"Knoppen tekst"}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Array gebruiken"}),`: Gebruik een array om de foto-informatie (titel, beschrijving, src) op te slaan\r
en te navigeren tussen foto's.`]}),`
`]}),`
`,s.jsxs(e.h3,{id:"fotos",children:["Foto's",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fotos",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Foto's zonder auteursrechten kan je vinden op ",s.jsx(e.a,{href:"https://pixabay.com/nl/",children:"https://pixabay.com/nl/"}),". Download de foto's en plaats ze in een map ",s.jsx(e.code,{children:"images"})," binnen je project."]}),`
`,s.jsxs(e.h3,{id:"hint-pseudocode",children:["Hint (pseudocode):",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hint-pseudocode",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"setup"})," = (",s.jsx(e.span,{className:"hljs-params"}),`) => {\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// 1. Haal alle elementen op met document.getElementById()"}),`\r
    \r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// 2. Maak een array met foto-informatie"}),`\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"let"})," currentPhoto = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` photos = [\r
        { `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Een mooie zonsondergang"'}),", ",s.jsx(e.span,{className:"hljs-attr",children:"description"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"..."'}),` },\r
        { `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Bergen in de sneeuw"'}),", ",s.jsx(e.span,{className:"hljs-attr",children:"description"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"..."'}),` },\r
        `,s.jsx(e.span,{className:"hljs-comment",children:"// ... meer foto's"}),`\r
    ];\r
    \r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// 3. Maak functies voor:"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// - showPhoto() - update foto info"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// - toggleDescription() - toon/verberg beschrijving"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// - markFavorite() - toggle favoriet status"}),`\r
    \r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// 4. Voeg event listeners toe:"}),`\r
    `,s.jsx(e.span,{className:"hljs-comment",children:'// button.addEventListener("click", functie)'}),`\r
    \r
    `,s.jsx(e.span,{className:"hljs-comment",children:"// 5. Initialiseer de eerste foto met showPhoto()"}),`\r
}\r
\r
`,s.jsx(e.span,{className:"hljs-variable language_",children:"window"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"load"'}),`, setup);
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"data-fotos",children:["Data: Foto's",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#data-fotos",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.p,{children:["Gebruik deze data in je JavaScript. Voeg deze bovenaan je ",s.jsx(e.code,{children:"setup()"})," functie in:"]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-javascript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` photos = [\r
    {\r
        `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Een mooie zonsondergang"'}),`,\r
        `,s.jsx(e.span,{className:"hljs-attr",children:"description"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Dit is een prachtige foto van een zonsondergang boven het strand. Genomen op een mooie zomeravond met een professionele camera."'}),`\r
        src = `,s.jsx(e.span,{className:"hljs-string",children:'"./images/photo1.jpg"'}),`\r
    },\r
    {\r
        `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Bergen in de sneeuw"'}),`,\r
        `,s.jsx(e.span,{className:"hljs-attr",children:"description"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"De bergtoppen bedekt met sneeuw. Een koude winterdag met helder blauwe lucht."'}),`\r
        src = `,s.jsx(e.span,{className:"hljs-string",children:'"./images/photo2.jpg"'}),`\r
    },\r
    {\r
        `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Bloemen in het bos"'}),`,\r
        `,s.jsx(e.span,{className:"hljs-attr",children:"description"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Kleurrijke wilde bloemen groeien tussen de bomen. Een teken dat de lente is aangekomen."'}),`\r
        src = `,s.jsx(e.span,{className:"hljs-string",children:'"./images/photo3.jpg"'}),`\r
    },\r
    {\r
        `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Nacht met sterren"'}),`,\r
        `,s.jsx(e.span,{className:"hljs-attr",children:"description"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Een heeldere nacht waar je duizenden sterren kan zien. Genomen ver weg van de stad."'}),`\r
        src = `,s.jsx(e.span,{className:"hljs-string",children:'"./images/photo4.jpg"'}),`\r
    },\r
    {\r
        `,s.jsx(e.span,{className:"hljs-attr",children:"title"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Strand tijdens zonsopgang"'}),`,\r
        `,s.jsx(e.span,{className:"hljs-attr",children:"description"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"De zon komt op boven het strand. Het water gloeit in oranje en roze kleuren."'}),`\r
        src = `,s.jsx(e.span,{className:"hljs-string",children:'"./images/photo5.jpg"'}),`\r
    }\r
];
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"aanvullende-vragen-om-jezelf-te-testen",children:["Aanvullende vragen om jezelf te testen",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aanvullende-vragen-om-jezelf-te-testen",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Wat is het verschil tussen ",s.jsx(e.code,{children:"getElementById()"})," en ",s.jsx(e.code,{children:"getElementsByClassName()"}),"?"]}),`
`,s.jsxs(e.li,{children:["Waarom gebruiken we ",s.jsx(e.code,{children:'window.addEventListener("load", setup)'}),"?"]}),`
`,s.jsxs(e.li,{children:["Hoe werkt ",s.jsx(e.code,{children:"classList.toggle()"}),"?"]}),`
`,s.jsx(e.li,{children:"Kun je uitleggen hoe je de foto's navigatie zou implementeren?"}),`
`]})]})}function c(n={}){const{wrapper:e}=n.components||{};return e?s.jsx(e,{...n,children:s.jsx(a,{...n})}):a(n)}export{c as default};
