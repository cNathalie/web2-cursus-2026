export function script() {
  const img = document.querySelector("#changing-img");
  if (
    img.getAttribute("src") ==
    "https://upload.wikimedia.org/wikipedia/commons/d/db/Margaret_Hamilton_-_restoration.jpg"
  ) {
    // Verwijder bestaande uitleg als die er al is
    const existing = document.getElementById("margaret-info");
    if (existing) existing.remove();

    // Maak een nieuwe paragraaf met styling
    const info = document.createElement("p");
    info.id = "margaret-info";
    info.innerHTML = `
      <strong style="color: #bfa13a; font-size: 1.1em;">Margaret Hamilton</strong> was een pionier in de computerwetenschap die bekend staat om haar werk aan de <span style="color: #bfa13a; font-weight: bold;">Apollo 11</span> missie. Ze ontwikkelde de onboard software die de <span style="color: #bfa13a; font-weight: bold;">maanlanding</span> mogelijk maakte en wordt vaak erkend als een van de eerste vrouwelijke software-ingenieurs. Op deze afbeelding staat ze naast alle code die ze schreef voor de missie.
    `;
    info.style.border = "2px solid #bfa13a";
    info.style.background = "#fffbe6";
    info.style.borderRadius = "12px";
    info.style.padding = "18px";
    info.style.margin = "24px auto";
    info.style.textAlign = "center";
    info.style.boxShadow = "0 2px 12px rgba(191,161,58,0.08)";
    img.insertAdjacentElement("afterend", info);
  } else {
    // Verwijder uitleg als alt niet meer klopt
    const existing = document.getElementById("margaret-info");
    if (existing) existing.remove();
  }
}
