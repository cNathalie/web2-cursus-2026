const link1 = document.querySelector("[data-id=link1]");
link1.addEventListener("click", () => simulate200OK());
link1.classList.add("fakeLink");

const link2 = document.querySelector("[data-id=link2]");
link2.addEventListener("click", () => simulate404Error());
link2.classList.add("fakeLink");

const link3 = document.querySelector("[data-id=link3]");
link3.addEventListener("click", () => simulateClientError());
link3.classList.add("fakeLink");

const link4 = document.querySelector("[data-id=link4]");
link4.addEventListener("click", () => simulateUnauthorized());
link4.classList.add("fakeLink");

const simulate200OK = () => {
  fetch("/simulate200")
    .then((response) => {
      if (response.ok) {
        console.log("Simulated 200 OK:", response.status);
      }
    })
    .catch((error) => console.error("Error:", error));
};

const simulate404Error = () => {
  fetch("/simulate404")
    .then((response) => {
      if (!response.ok) {
        console.log("Simulated 404 error:", response.status);
      }
    })
    .catch((error) => console.error("Error:", error));
};

const simulateClientError = () => {
  fetch("/simulate500")
    .then((response) => {
      if (!response.ok) {
        console.log("Simulated 500 error:", response.status);
      }
    })
    .catch((error) => console.error("Error:", error));
};

const simulateUnauthorized = () => {
  fetch("/simulate401")
    .then((response) => {
      if (!response.ok) {
        console.log("Simulated 401 error:", response.status);
      }
    })
    .catch((error) => console.error("Error:", error));
};
