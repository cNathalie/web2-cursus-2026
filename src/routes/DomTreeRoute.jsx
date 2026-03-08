import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function DomTreeRoute() {
  return (
    <>
      <Route
        path="/dom-tree"
        element={
          <Chapter
            chapter="Dom Tree"
            links={navigation.domTreeLinks}
            expand="lg"
          />
        }
      >
        <Route index element={<ChapterCover title="Document Object Model" />} />

        {navigation.domTreeLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/dom-tree/", "")}
            element={
              <MdxPage
                folder="dom-tree"
                course={label.replace(" ", "-")}
                symbol={symbol}
              />
            }
          />
        ))}
      </Route>
    </>
  );
}
