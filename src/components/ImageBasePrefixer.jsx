
import { useEffect } from "react";

export default function ImageBasePrefixer() {
  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    const imgs = Array.from(document.querySelectorAll("img[src]"));

    imgs.forEach(img => {
      const src = img.getAttribute("src") || "";
      const isExternal = /^https?:\/\//i.test(src);
      const isRootRelative = /^\/(?!\/)/.test(src); // starts with single leading slash
      if (!isExternal && isRootRelative && !src.startsWith(base)) {
        // rewrite /images/foo.png -> /<repo>/images/foo.png
        img.setAttribute("src", `${base}${src.slice(1)}`);
      }
    });
  }, []);

  return null;
}