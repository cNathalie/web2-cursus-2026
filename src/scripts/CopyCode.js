// Adds a copy button to every <pre><code> inside the container
export function enhanceCopyButtons(container) {
  const root = container || document;
  const pres = root.querySelectorAll("pre");

  pres.forEach((pre) => {
    if (pre.querySelector(".copy-btn")) return; // idempotent

    const codeEl = pre.querySelector("code");
    if (!codeEl) return;

    const copyIconUrl = new URL("/icons/copy.svg", import.meta.url).href;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.setAttribute("aria-label", "Copy code");

    const copyIcon = document.createElement("img");
    copyIcon.src = copyIconUrl;
    copyIcon.alt = "";
    copyIcon.width = 20;
    copyIcon.height = 20;

    // Ensure <pre> can host an absolutely positioned child
    if (!pre.style.position) pre.style.position = "relative";
    btn.appendChild(copyIcon);
    pre.appendChild(btn);

    btn.addEventListener("click", async () => {
      const raw = codeEl.textContent || "";
      const cleaned = raw.replace(/[ \t]+\n/g, "\n").replace(/\n+$/, "\n");
      try {
        await navigator.clipboard.writeText(cleaned);
        btn.textContent = "Copied!";
        btn.classList.add("copied");
        console.log("Copied code to clipboard");
        setTimeout(() => {
          btn.textContent = "";
          btn.appendChild(copyIcon);
          btn.classList.remove("copied");
        }, 1200);
      } catch (err) {
        btn.textContent = "Failed";
        setTimeout(() => (btn.textContent = "Copy"), 1200);
      }
    });
  });
}

export function observeCodeBlocks(container) {
  const root = container || document;
  const obs = new MutationObserver(() => {
    enhanceCopyButtons(root); // idempotent: won’t duplicate buttons
  });

  obs.observe(root, { childList: true, subtree: true });
  // Run once for initial content
  enhanceCopyButtons(root);

  return () => obs.disconnect();
}
