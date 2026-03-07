import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/a11y-dark.css";

createRoot(document.getElementById("root")).render(<App />);

// Calculate navbar height dynamically
function updateNavbarHeight() {
  const navbar = document.querySelector("#main-navbar");
  if (navbar) {
    const height = navbar.offsetHeight;
    document.documentElement.style.setProperty(
      "--navbar-height",
      `${height}px`,
    );
  }
}

// Update on load
window.addEventListener("load", updateNavbarHeight);

// Update on resize (in case navbar wraps on smaller screens)
window.addEventListener("resize", updateNavbarHeight);

// Initial call
updateNavbarHeight();

if ("serviceWorker" in navigator) {
  const BASE = (import.meta.env.BASE_URL || "/").replace(/\/?$/, "/");

  navigator.serviceWorker
    .register(`${BASE}sw.js`, { scope: BASE })
    .then(() => console.log("Service Worker registered", { scope: BASE }))
    .catch((err) => console.error("SW registration failed", err));
}
