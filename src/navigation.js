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

  projectLinks: [
    { to: "/project/intro", label: "Introductie" },
    { to: "/project/onderwerp", label: "Onderwerp" },
    { to: "/project/github-classroom", label: "GitHub Classroom" },
    { to: "/project/github-desktop", label: "GitHub Desktop" },
    { to: "/project/startpunt", label: "Startpunt" },
    { to: "/project/practicum-I", label: "Practicum I", symbol: WipSymbol },
    { to: "/project/practicum-II", label: "Practicum II", symbol: WipSymbol },
    { to: "/project/practicum-III", label: "Practicum III", symbol: WipSymbol },
  ],
};
