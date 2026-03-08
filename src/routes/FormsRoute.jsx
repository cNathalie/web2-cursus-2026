import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function FormsRoute() {
  return (
    <>
      <Route
        path="/forms"
        element={
          <Chapter
            chapter="Formulieren"
            links={navigation.formsLinks}
            expand={"lg"}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="JavaScript forms: because trusting users to type things correctly is a dangerous fantasy." />
          }
        />

        {navigation.formsLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/forms/", "")}
            element={
              <MdxPage
                folder="forms"
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
