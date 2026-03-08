import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function TimersRoute() {
  return (
    <>
      <Route
        path="/timers"
        element={
          <Chapter
            chapter="Timers"
            links={navigation.timersLinks}
            expand={"lg"}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="JavaScript timers: because sometimes your code just needs a moment to think." />
          }
        />

        {navigation.timersLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/timers/", "")}
            element={
              <MdxPage
                folder="timers"
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
