import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function ElementsRoute() {
  return (
    <>
      <Route
        path="/elementen-en-attributen"
        element={
          <Chapter
            chapter="Elementen en Attributen"
            links={navigation.elementsLinks}
            expand={"lg"}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="Finding elements with JavaScript is basically digital hide‑and‑seek... except the elements never move, and somehow they're still hard to find." />
          }
        />

        {navigation.elementsLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/elementen-en-attributen/", "")}
            element={
              <MdxPage
                folder="elements-attributes"
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
