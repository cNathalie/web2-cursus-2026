import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function AdvancedDomRoute() {
  return (
    <>
      <Route
        path="/advanced-dom"
        element={
          <Chapter
            chapter="Advanced DOM"
            links={navigation.advDomLinks}
            expand={false}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="Advanced DOM manipulation: basically LEGO, but the bricks complain if you forget a closing tag." />
          }
        />

        {navigation.advDomLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/advanced-dom/", "")}
            element={
              <MdxPage
                folder="advanced-dom"
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
