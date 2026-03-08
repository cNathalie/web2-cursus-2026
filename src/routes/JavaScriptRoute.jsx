import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import JSMascot from "../components/JSMascot.jsx";
import { navigation } from "../navigation/navigation.js";

export function JavaScriptRoute() {
  return (
    <>
      <Route
        path="/javascript"
        element={
          <Chapter
            chapter="JavaScript"
            links={navigation.jsLinks}
            expand={false}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover
              mascot={JSMascot}
              title="In JavaScript, truth is subjective, types are negotiable, and sanity is optional."
            />
          }
        />

        {navigation.jsLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/javascript/", "")}
            element={
              <MdxPage
                folder="javascript"
                course={label.replaceAll(" ", "-")}
                symbol={symbol}
              />
            }
          />
        ))}
      </Route>
    </>
  );
}
