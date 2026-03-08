import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function FetchApiRoute() {
  return (
    <>
      <Route
        path="/fetch-api"
        element={
          <Chapter
            chapter="Fetch API"
            links={navigation.fetchApiLinks}
            expand={"lg"}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="Fetch is JS's way of saying: 'I got this, brb with your data.'" />
          }
        />

        {navigation.fetchApiLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/fetch-api/", "")}
            element={
              <MdxPage
                folder="fetch-api"
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
