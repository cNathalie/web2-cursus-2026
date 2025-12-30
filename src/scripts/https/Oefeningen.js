const BASE = (import.meta.env.BASE_URL || "/").replace(/\/?$/, "/");

const logStatus = (r) =>
  console.log(`Status: ${r.status} ${r.statusText} | ok=${r.ok}`);
const logError = (e) => console.error("Network error:", e);

export function script() {
  const link1 = document.querySelector("[data-id=link1]");
  const link2 = document.querySelector("[data-id=link2]");
  const link3 = document.querySelector("[data-id=link3]");
  const link4 = document.querySelector("[data-id=link4]");

  if (!link1 || !link2 || !link3 || !link4) return () => {};

  const on200 = () =>
    fetch(`${BASE}simulate200`).then(logStatus).catch(logError);
  const on404 = () =>
    fetch(`${BASE}simulate404`).then(logStatus).catch(logError);
  const on500 = () =>
    fetch(`${BASE}simulate500`).then(logStatus).catch(logError);
  const on401 = () =>
    fetch(`${BASE}simulate401`).then(logStatus).catch(logError);

  link1.addEventListener("click", on200);
  link1.classList.add("fakeLink");
  link2.addEventListener("click", on404);
  link2.classList.add("fakeLink");
  link3.addEventListener("click", on500);
  link3.classList.add("fakeLink");
  link4.addEventListener("click", on401);
  link4.classList.add("fakeLink");

  return () => {
    link1.removeEventListener("click", on200);
    link2.removeEventListener("click", on404);
    link3.removeEventListener("click", on500);
    link4.removeEventListener("click", on401);
  };
}
