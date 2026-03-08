import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function TypesRoute() {
  return (
    <>
      <Route
        path="/types"
        element={
          <Chapter
            chapter="Types"
            links={navigation.typesLinks}
            expand={"lg"}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="JavaScript types are like cats: they do what they want, not what you expect." />
          }
        />

        {navigation.typesLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/types/", "")}
            element={
              <MdxPage
                folder="types"
                course={label.replace(" ", "-")}
                {...(symbol ? { symbol } : {})}
              />
            }
          />
        ))}
      </Route>
    </>
  );
}
