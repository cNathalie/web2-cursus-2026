import { Route } from "react-router-dom";
import Chapter from "../pages/Chapter.jsx";
import MdxPage from "../pages/MdxPage.jsx";
import { navigation } from "../navigation/navigation.js";

export function HttpsRoute() {
  return (
    <>
      <Route
        path="/https"
        element={
          <Chapter chapter="HTTPS" links={navigation.httpsLinks} expand="lg" />
        }
      >
        {navigation.httpsLinks.map(({ to, label, symbol }) => (
          <Route
            key={to}
            path={to.replace("/https/", "")}
            element={
              <MdxPage
                folder="https"
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
