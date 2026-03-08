import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function StorageRoute() {
  return (
    <>
      <Route
        path="/storage"
        element={
          <Chapter
            chapter="Storage"
            links={navigation.storageLinks}
            expand={"lg"}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="Front‑end storage: saving your state, one key‑value pair at a time." />
          }
        />

        {navigation.storageLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/storage/", "")}
            element={
              <MdxPage
                folder="storage"
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
