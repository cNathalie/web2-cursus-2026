import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function ObjectsRoute() {
  return (
    <>
      <Route
        path="/objecten"
        element={
          <Chapter
            chapter="Objecten"
            links={navigation.objectsLinks}
            expand={"lg"}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="JavaScript objects have keys to everything… except your bugs." />
          }
        />

        {navigation.objectsLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/objecten/", "")}
            element={
              <MdxPage
                folder="objecten"
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
