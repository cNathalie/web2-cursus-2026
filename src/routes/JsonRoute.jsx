import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function JsonRoute() {
  return (
    <>
      <Route
        path="/json"
        element={
          <Chapter chapter="JSON" links={navigation.jsonLinks} expand={"lg"} />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="In a world of countless frameworks, JSON stays the universal handshake between front and back." />
          }
        />

        {navigation.jsonLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/json/", "")}
            element={
              <MdxPage
                folder="json"
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
