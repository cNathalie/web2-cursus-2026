export function script() {
  let count = 25;
  const timerElement = document.getElementById("timer");
  const fireworks = document.getElementById("fireworks");

  const interval = setInterval(function () {
    count--;
    timerElement.textContent = count;

    if (count <= 0) {
      clearInterval(interval);
      timerElement.classList.add("hidden");
      fireworks.classList.remove("hidden");
    }
  }, 1000);
}
