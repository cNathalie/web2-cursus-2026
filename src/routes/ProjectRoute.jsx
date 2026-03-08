import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function ProjectRoute() {
  return (
    <>
      <Route
        path="/project"
        element={
          <Chapter
            chapter="Project"
            links={navigation.projectLinks}
            expand={false}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="A project begins with an idea, but grows with curiosity, courage, and a lot of debugging." />
          }
        />

        {navigation.projectLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/project/", "")}
            element={
              <MdxPage
                folder="project"
                course={label.replace(" ", "-")}
                {...(symbol ? { symbol } : {})}
              />
            }
          />
        ))}
      </Route>
    </>
  );
}
