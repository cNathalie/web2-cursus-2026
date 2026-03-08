import {
  Route,
  Routes,
  LandingPage,
  HowToLearn,
  MdxPage,
  NiceToKnowSymbol,
  NeedToKnowSymbol,
  HttpsRoute,
  JavaScriptRoute,
  DomTreeRoute,
  ProjectRoute,
  EventsRoute,
  TypesRoute,
  ElementsRoute,
  FormsRoute,
  TimersRoute,
  AdvancedDomRoute,
  ObjectsRoute,
  FetchApiRoute,
  JsonRoute,
  StorageRoute,
  TypeScriptRoute,
  ExercisesRoute,
} from "../AppRoutes.imports.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/about"
        element={<MdxPage folder="intro" course="Introductie" />}
      />
      <Route
        path="/studiewijzer"
        element={<MdxPage folder="studiewijzer" course="Studiewijzer" />}
      />
      <Route path="/howtolearn" element={<HowToLearn />} />
      <Route
        path="/het-internet"
        element={
          <MdxPage
            folder="internet"
            course="Het-Internet"
            symbol={NiceToKnowSymbol}
          />
        }
      />
      <Route
        path="/developer-tools"
        element={
          <MdxPage
            folder="devtools"
            course="Developer-Tools"
            symbol={NeedToKnowSymbol}
          />
        }
      />
      <Route
        path="/css-manipulatie"
        element={
          <MdxPage
            folder="css-manipulation"
            course="CSS-Manipulatie"
            symbol={NeedToKnowSymbol}
          />
        }
      />

      {HttpsRoute()}
      {JavaScriptRoute()}
      {DomTreeRoute()}
      {ProjectRoute()}
      {EventsRoute()}
      {TypesRoute()}
      {ElementsRoute()}
      {FormsRoute()}
      {TimersRoute()}
      {AdvancedDomRoute()}
      {ObjectsRoute()}
      {FetchApiRoute()}
      {JsonRoute()}
      {StorageRoute()}
      {TypeScriptRoute()}
      {ExercisesRoute()}
    </Routes>
  );
}
