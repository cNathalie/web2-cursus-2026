import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import ChapterCover from "../components/ChapterCover.jsx";
import { navigation } from "../navigation/navigation.js";

export function EventsRoute() {
  return (
    <>
      <Route
        path="/events"
        element={
          <Chapter
            chapter="Events"
            links={navigation.eventsLinks}
            expand={false}
          />
        }
      >
        <Route
          index
          element={
            <ChapterCover title="JavaScript events:  where chaos meets opportunity, and every click is a chance for greatness (or a bug)." />
          }
        />

        {navigation.eventsLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/events/", "")}
            element={
              <MdxPage
                folder="events"
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
