import NiceToKnowSymbol from "./components/NiceToKnowSymbol.jsx";
import NeedToKnowSymbol from "./components/NeedToKnowSymbol.jsx";

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
};
