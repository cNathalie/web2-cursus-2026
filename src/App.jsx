import { BrowserRouter } from "./AppRoutes.imports.jsx";
import AppNavbar from "./components/AppNavbar.jsx";
import AppRoutes from "./components/AppRoutes.jsx";

function App() {
  return (
    <BrowserRouter basename="/web2-cursus-2026">
      <AppNavbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
