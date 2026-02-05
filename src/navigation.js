import NiceToKnowSymbol from "./components/NiceToKnowSymbol.jsx";
import NeedToKnowSymbol from "./components/NeedToKnowSymbol.jsx";
import WipSymbol from "./components/WipSymbol.jsx";

export const navigation = {
  httpsLinks: [
    { to: "/https", label: "Introductie", symbol: NeedToKnowSymbol },
    {
      to: "/https/request-methods",
      label: "Request Methods",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/https/status-codes",
      label: "Status Codes",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/https/browser-cache",
      label: "Browser Cache",
      symbol: NeedToKnowSymbol,
    },
    { to: "/https/oefeningen", label: "Oefeningen" },
  ],

  jsLinks: [
    {
      to: "/javascript/introductie",
      label: "Introductie",
      symbol: NiceToKnowSymbol,
    },
    { to: "/javascript/ecma", label: "ECMA", symbol: NeedToKnowSymbol },
    {
      to: "/javascript/js-engine",
      label: "JS-Engine",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/javascript/basics",
      label: "Basisprincipes",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/javascript/variables",
      label: "Variabelen",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/javascript/datatypes",
      label: "Datatypes",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/javascript/objects",
      label: "Objecten",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/javascript/functions",
      label: "Functions",
      symbol: NeedToKnowSymbol,
    },
    { to: "/javascript/arrays", label: "Arrays", symbol: NeedToKnowSymbol },
    { to: "/javascript/fu", label: "Veelgebruikte Functies En Lussen", symbol: NeedToKnowSymbol },
  ],

  domTreeLinks: [
    {
      to: "/dom-tree/intro",
      label: "Dom Tree",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/dom-tree/family-tree",
      label: "Family Tree",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/dom-tree/elementen-opvragen",
      label: "Elementen Opvragen",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/dom-tree/forms",
      label: "Forms",
      symbol: NeedToKnowSymbol,
    },
  ],

  eventsLinks: [
    {
      to: "/events/intro",
      label: "Introductie",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/events/event-listener",
      label: "Event Listener",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/events/event-object",
      label: "Event Object",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/events/methods",
      label: "Methods",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/events/bubbling",
      label: "Event Bubbling",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/events/delegation",
      label: "Event Delegation",
      symbol: NeedToKnowSymbol,
    },
  ],

  typesLinks: [
    {
      to: "/types/intro",
      label: "Introductie",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/types/math",
      label: "Math",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/types/number",
      label: "Number",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/types/string",
      label: "String",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/types/oepsie",
      label: "Oepsie",
      symbol: NiceToKnowSymbol,
    },
  ],

  elementsLinks: [
    {
      to: "/elementen-en-attributen/intro",
      label: "Introductie",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/elementen-en-attributen/query-selector",
      label: "Query Selector",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/elementen-en-attributen/css-selectors",
      label: "CSS Selectors",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/elementen-en-attributen/inner-html",
      label: "InnerHtml",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/elementen-en-attributen/attributen",
      label: "Attributen",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/elementen-en-attributen/custom-data-attributen",
      label: "Custom Data Attributen",
      symbol: NeedToKnowSymbol,
    },
  ],

    formsLinks: [
    {
      to: "/forms/intro",
      label: "Introductie",
      symbol: NiceToKnowSymbol,
    },
    {
      to: "/forms/elementen",
      label: "Elementen",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/forms/Validatie",
      label: "Validatie",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/forms/data-manipulatie",
      label: "Data Manipulatie",
      symbol: NeedToKnowSymbol,
    },
  ],

      timersLinks: [
    {
      to: "/timers/intro",
      label: "Introductie",
      symbol: NiceToKnowSymbol,
    },
    {
      to: "/timers/timeout",
      label: "Time Out",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/timers/interval",
      label: "Interval",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/timers/clear-timer",
      label: "Clear Timer",
      symbol: NeedToKnowSymbol,
    },
  ],

  advDomLinks: [
    {
      to: "/advanced-dom/intro",
      label: "Introductie",
      symbol: NiceToKnowSymbol,
    },
    {
      to: "/advanced-dom/node-types",
      label: "Node Types",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/advanced-dom/nodes-ophalen",
      label: "Nodes Ophalen",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/advanced-dom/node-properties",
      label: "Node Properties",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/advanced-dom/node-navigatie",
      label: "Node Navigatie",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/advanced-dom/node-aanmaken",
      label: "Node Aanmaken",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/advanced-dom/node-toevoegen",
      label: "Node Toevoegen",
      symbol: NeedToKnowSymbol,
    },
  ],

    objectsLinks: [
    {
      to: "/objecten/intro",
      label: "Introductie",
      symbol: NiceToKnowSymbol,
    },
    {
      to: "/objecten/aanmaken",
      label: "Objecten Aanmaken",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/objecten/properties",
      label: "Properties",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/objecten/methodes",
      label: "Object Methodes",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/objecten/date",
      label: "Het Date Object",
      symbol: NeedToKnowSymbol,
    },
  ],

  fetchApiLinks: [
    {
      to: "/fetch-api/intro",
      label: "Introductie",
      symbol: NiceToKnowSymbol,
    },
    {
      to: "/fetch-api/aanmaken",
      label: "GET",
      symbol: NeedToKnowSymbol,
    },
  ],

    jsonLinks: [
    {
      to: "/json/intro",
      label: "Introductie",
      symbol: NiceToKnowSymbol,
    },
    {
      to: "/json/syntax",
      label: "Syntax",
      symbol: NeedToKnowSymbol,
    },{
      to: "/json/parse",
      label: "Parse",
      symbol: NeedToKnowSymbol,
    },{
      to: "/json/stringify",
      label: "Stringify",
      symbol: NeedToKnowSymbol,
    },
  ],

      storageLinks: [
    {
      to: "/storage/intro",
      label: "Introductie",
      symbol: NiceToKnowSymbol,
    },
    {
      to: "/storage/globals",
      label: "Globals",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/storage/local-storage",
      label: "Local Storage",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/storage/session-storage",
      label: "Session Storage",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/storage/cookies",
      label: "Cookies",
      symbol: NeedToKnowSymbol,
    },
    {
      to: "/storage/indexed-db",
      label: "Indexed DB",
      symbol: NiceToKnowSymbol,
    },
  ],

    typeScriptLinks: [
    {
      to: "/typescript/intro",
      label: "Introductie",
      symbol: NiceToKnowSymbol,
    },
    {
      to: "/typescript/types",
      label: "Types",
      symbol: NiceToKnowSymbol,
    },
    {
      to: "/typescript/js-vs-ts",
      label: "JavaScript vs TypeScript",
      symbol: NiceToKnowSymbol,
    }, {
      to: "/typescript/ts-vs-csharp",
      label: "TypeScript vs CSharp",
      symbol: NiceToKnowSymbol,
    },
  ],


  projectLinks: [
    { to: "/project/intro", label: "Introductie" },
    { to: "/project/onderwerp", label: "Onderwerp" },
    { to: "/project/github-classroom", label: "GitHub Classroom" },
    { to: "/project/github-desktop", label: "GitHub Desktop" },
    { to: "/project/startpunt", label: "Startpunt" },
    { to: "/project/practicum-I", label: "Practicum I", symbol: WipSymbol },
    { to: "/project/practicum-II", label: "Practicum II", symbol: WipSymbol },
    { to: "/project/practicum-III", label: "Practicum III", symbol: WipSymbol },
    { to: "/project/hoe-slagen", label: "Hoe Slagen"},
  ],
};
