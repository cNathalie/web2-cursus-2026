import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function ExercisesRoute() {
  return (
    <>
      <Route
        path="/oefeningen"
        element={
          <Chapter
            chapter="Oefeningen"
            links={navigation.excercisesLinks}
            expand={false}
          />
        }
      >
        <Route
          index
          element={<ChapterCover title="Practice makes perfect" />}
        />

        {navigation.excercisesLinks.map(({ to, label, symbol, isActive }) => (
          <Route
            key={to}
            path={to.replace("/oefeningen/", "")}
            element={
              <MdxPage
                folder="oefeningen"
                course={label.replaceAll(" ", "-")}
                symbol={symbol}
                isActive={isActive}
              />
            }
          />
        ))}
      </Route>
    </>
  );
}
