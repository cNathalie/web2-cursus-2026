import{j as s}from"./index-3BjEGx3K.js";function n(a){const e={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",span:"span",...a.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.p,{children:"Een methode is een property van een object dat als waarde een functie heeft."}),`
`,s.jsxs(e.h2,{id:"object-methodes-aanmaken",children:["Object-methodes aanmaken",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#object-methodes-aanmaken",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Een methode is een functie die is opgeslagen als een eigenschap van een object. Je kunt een methode aanmaken door een functie toe te wijzen aan een object property."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-js",children:[s.jsx(e.span,{className:"hljs-comment",children:"// Maak een hondje aan die kan blaffen"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Function keyword"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` dog = {\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Buddy"'}),`,\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"breed"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Golden Retriever"'}),`,\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"age"}),": ",s.jsx(e.span,{className:"hljs-number",children:"5"}),`,\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"bark"}),": ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params"}),`) {\r
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Woof Woof!"'}),`);\r
  },\r
};\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Maak een katje aan dat kan meowen"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Anonieme functie"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` cat = {\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Whiskers"'}),`,\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"breed"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Siamese"'}),`,\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"age"}),": ",s.jsx(e.span,{className:"hljs-number",children:"3"}),`,\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"meow"}),": ",s.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {\r
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Meow Meow!"'}),`);\r
  },\r
};\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Maak een papagaai aan die kan praten"}),`\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Functie met parameter"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` parrot = {\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Polly"'}),`,\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"breed"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"African Grey"'}),`,\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"age"}),": ",s.jsx(e.span,{className:"hljs-number",children:"10"}),`,\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"talk"}),": ",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"phrase"}),") =>"]}),` {\r
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),`(phrase);\r
  },\r
};
`]})}),`
`,s.jsxs(e.h2,{id:"methodes-oproepen",children:["Methodes oproepen",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methodes-oproepen",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Je kunt een methode oproepen door de naam van het object gevolgd door een punt en de naam van de methode te typen."}),`
`,s.jsx(e.p,{children:"Opgelet!Je kan een methode niet oproepen zonder de naam van het object ervoor te typen."}),`
`,s.jsx(e.p,{children:"Opgelet!Om de methode uit te voeren moet je de haakjes()na de naam van de methode typen, anders log je enkel de functie zelf."}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-js",children:[s.jsx(e.span,{className:"hljs-comment",children:"// Roep de methode bark aan van het dog object"}),`\r
dog.`,s.jsx(e.span,{className:"hljs-title function_",children:"bark"}),`();\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Roep de methode meow aan van het cat object"}),`\r
cat.`,s.jsx(e.span,{className:"hljs-title function_",children:"meow"}),`();\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Roep de methode talk aan van het parrot object"}),`\r
parrot.`,s.jsx(e.span,{className:"hljs-title function_",children:"talk"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Polly wants a cracker!"'}),`);
`]})}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.h2,{id:"in-de-praktijk-shoppingcart",children:["In de praktijk: Shoppingcart",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#in-de-praktijk-shoppingcart",children:s.jsx(e.span,{className:"icon icon-link"})})]}),`
`,s.jsx(e.p,{children:"Stel je voor dat je een online winkel hebt en je wilt een shoppingcart object maken dat verschillende methodes heeft om items toe te voegen, te verwijderen en de totale prijs te berekenen."}),`
`,s.jsxs("div",{className:"inline-dynamic-example",children:[s.jsxs("section",{id:"product-list",children:[s.jsx("h1",{children:"Producten"}),s.jsxs("div",{class:"product","data-name":"T-shirt","data-price":"19.99",children:[s.jsx("h2",{children:"T-shirt"}),s.jsx("p",{children:"Prijs: € 19,99"}),s.jsx("button",{children:"Toevoegen aan winkelmand"})]}),s.jsxs("div",{class:"product","data-name":"Jeans","data-price":"49.99",children:[s.jsx("h2",{children:"Jeans"}),s.jsx("p",{children:"Prijs: € 49,99"}),s.jsx("button",{children:"Toevoegen aan winkelmand"})]}),s.jsxs("div",{class:"product","data-name":"Sneakers","data-price":"89.99",children:[s.jsx("h2",{children:"Sneakers"}),s.jsx("p",{children:"Prijs: € 89,99"}),s.jsx("button",{children:"Toevoegen aan winkelmand"})]})]}),s.jsxs("section",{class:"cart",children:[s.jsx("h2",{children:"Winkelmand"}),s.jsx("div",{id:"cart-items"}),s.jsxs("div",{class:"total",children:[s.jsx("span",{children:"Totaal"}),s.jsx("span",{id:"cart-total",children:"€ 0,00"})]})]})]}),`
`,s.jsxs(e.p,{children:["De ",s.jsx(e.code,{children:"html"}),' van bovenstaande "webshop" ziet er zo uit:']}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-html",children:[s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"section"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"product-list"'}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"h1"}),">"]}),"Producten",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"h1"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"product"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"data-name"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"T-shirt"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"data-price"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"19.99"'}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"h2"}),">"]}),"T-shirt",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"h2"}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"p"}),">"]}),"Prijs: € 19,99",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"p"}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),"Toevoegen aan winkelmand",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"product"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"data-name"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"Jeans"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"data-price"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"49.99"'}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"h2"}),">"]}),"Jeans",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"h2"}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"p"}),">"]}),"Prijs: € 49,99",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"p"}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),"Toevoegen aan winkelmand",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"className"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"product"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"data-name"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"Sneakers"'})," ",s.jsx(e.span,{className:"hljs-attr",children:"data-price"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"89.99"'}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"h2"}),">"]}),"Sneakers",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"h2"}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"p"}),">"]}),"Prijs: € 89,99",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"p"}),">"]}),`\r
      `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"button"})," >"]}),"Toevoegen aan winkelmand",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"button"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"section"}),">"]}),`\r
`,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"section"}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"h2"}),">"]}),"Winkelmand",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"h2"}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"cart-items"'}),">"]}),s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"span"}),">"]}),"Totaal",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"span"}),">"]}),`\r
    `,s.jsxs(e.span,{className:"hljs-tag",children:["<",s.jsx(e.span,{className:"hljs-name",children:"span"})," ",s.jsx(e.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(e.span,{className:"hljs-string",children:'"cart-total"'}),">"]}),"€ 0,00",s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"span"}),">"]}),`\r
  `,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`\r
`,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"section"}),">"]}),`\r
`,s.jsxs(e.span,{className:"hljs-tag",children:["</",s.jsx(e.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,s.jsxs(e.p,{children:["Voer nu deze ",s.jsx(e.code,{children:"JS"})," uit in de Console van je browser om de webshop tot leven te brengen."]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-js",children:[s.jsx(e.span,{className:"hljs-comment",children:"// Maak het shoppingcart object met methodes"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` shoppingCart = {\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// De shoppingcart zal alle producten bijhouden in een array"}),`\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"items"}),`: [],\r
  \r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Deze methode voegt een product toe aan de array"}),`\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"addItem"}),": ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params",children:"item"}),`) {\r
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"items"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(item);\r
  },\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Deze methode verwijdert een item uit de array"}),`\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"removeItem"}),": ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params",children:"item"}),`) {\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," index = ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"items"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"indexOf"}),`(item);\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (index > -",s.jsx(e.span,{className:"hljs-number",children:"1"}),`) {\r
      `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"items"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"splice"}),"(index, ",s.jsx(e.span,{className:"hljs-number",children:"1"}),`);\r
    }\r
  },\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Deze methode berekent de totale prijs van alle items in de array"}),`\r
  `,s.jsx(e.span,{className:"hljs-attr",children:"getTotalPrice"}),": ",s.jsx(e.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(e.span,{className:"hljs-params"}),`) {\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"items"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"reduce"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"total, item"}),") =>"]})," total + item.",s.jsx(e.span,{className:"hljs-property",children:"price"}),", ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`);\r
  },\r
};\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Geef alle producten een click eventlistener"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," products = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",s.jsx(e.span,{className:"hljs-string",children:'".product"'}),`);\r
products.`,s.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"product"}),") =>"]}),` {\r
  product.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` item = {\r
      `,s.jsx(e.span,{className:"hljs-attr",children:"name"}),": product.",s.jsx(e.span,{className:"hljs-title function_",children:"getAttribute"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"data-name"'}),`),\r
      `,s.jsx(e.span,{className:"hljs-attr",children:"price"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"parseFloat"}),"(product.",s.jsx(e.span,{className:"hljs-title function_",children:"getAttribute"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"data-price"'}),`)),\r
    };\r
    shoppingCart.`,s.jsx(e.span,{className:"hljs-title function_",children:"addItem"}),`(item);\r
    `,s.jsx(e.span,{className:"hljs-title function_",children:"updateCartDisplay"}),`();\r
  });\r
});\r
\r
`,s.jsx(e.span,{className:"hljs-comment",children:"// Update de winkelmand weergave"}),`\r
`,s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"updateCartDisplay"}),"(",s.jsx(e.span,{className:"hljs-params"}),`) {\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," cartItemsContainer = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"cart-items"'}),`);\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," cartTotalElement = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"cart-total"'}),`);\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Maak de huidige weergave leeg"}),`\r
  cartItemsContainer.`,s.jsx(e.span,{className:"hljs-property",children:"innerHTML"})," = ",s.jsx(e.span,{className:"hljs-string",children:'""'}),`;\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Voeg elk item toe aan de weergave"}),`\r
  shoppingCart.`,s.jsx(e.span,{className:"hljs-property",children:"items"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"item"}),") =>"]}),` {\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," itemElement = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"createElement"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"div"'}),`);\r
    itemElement.`,s.jsx(e.span,{className:"hljs-property",children:"textContent"})," = ",s.jsxs(e.span,{className:"hljs-string",children:["`",s.jsx(e.span,{className:"hljs-subst",children:"${item.name}"})," - € ",s.jsxs(e.span,{className:"hljs-subst",children:["${item.price.toFixed(",s.jsx(e.span,{className:"hljs-number",children:"2"}),")}"]}),"`"]}),`;\r
\r
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," deleteItemBtn = ",s.jsx(e.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"createElement"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"p"'}),`);\r
    deleteItemBtn.`,s.jsx(e.span,{className:"hljs-property",children:"textContent"})," = ",s.jsx(e.span,{className:"hljs-string",children:'"x"'}),`;\r
    deleteItemBtn.`,s.jsx(e.span,{className:"hljs-property",children:"classList"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"add"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"delete-btn"'}),`);\r
    deleteItemBtn.`,s.jsx(e.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(e.span,{className:"hljs-function",children:"() =>"}),` {\r
      shoppingCart.`,s.jsx(e.span,{className:"hljs-title function_",children:"removeItem"}),`(item);\r
      `,s.jsx(e.span,{className:"hljs-title function_",children:"updateCartDisplay"}),`();\r
    });\r
\r
    itemElement.`,s.jsx(e.span,{className:"hljs-title function_",children:"appendChild"}),`(deleteItemBtn);\r
    cartItemsContainer.`,s.jsx(e.span,{className:"hljs-title function_",children:"appendChild"}),`(itemElement);\r
  });\r
\r
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Update de totale prijs"}),`\r
  `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," totalPrice = shoppingCart.",s.jsx(e.span,{className:"hljs-title function_",children:"getTotalPrice"}),`();\r
  cartTotalElement.`,s.jsx(e.span,{className:"hljs-property",children:"textContent"})," = ",s.jsxs(e.span,{className:"hljs-string",children:["`€ ",s.jsxs(e.span,{className:"hljs-subst",children:["${totalPrice.toFixed(",s.jsx(e.span,{className:"hljs-number",children:"2"}),")}"]}),"`"]}),`;\r
}
`]})}),`
`,s.jsx(e.p,{children:"In de realiteit zou de productenlijst uit een API response komen en met JavaScript dynamisch worden opgebouwd."})]})}function c(a={}){const{wrapper:e}=a.components||{};return e?s.jsx(e,{...a,children:s.jsx(n,{...a})}):n(a)}export{c as default};
