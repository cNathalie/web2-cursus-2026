import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function TypeScriptRoute() {
  return (
    <>
      <Route
        path="/typescript"
        element={
          <Chapter
            chapter="TypeScript"
            links={navigation.typeScriptLinks}
            expand={"lg"}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="TypeScript - The power of typed programming." />
          }
        />

        {navigation.typeScriptLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/typescript/", "")}
            element={
              <MdxPage
                folder="typescript"
                course={label.replaceAll(" ", "-")}
                {...(symbol ? { symbol } : {})}
              />
            }
          />
        ))}
      </Route>
    </>
  );
}
