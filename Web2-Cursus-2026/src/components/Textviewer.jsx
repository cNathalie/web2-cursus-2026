import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { useEffect, useRef } from "react";

const TextViewer = ({ markdown }) => {
  const containerRef = useRef(null);

  // scripts uitvoeren NA het renderen van de markdown
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    // Roep de loader aan; krijg cleanup terug
    const cleanup = runExternalScripts(root);
    return cleanup;
  }, [markdown]); // opnieuw uitvoeren als de content wijzigt

  return (
    <article ref={containerRef} className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "append" }],
          [rehypeRaw],
          rehypeHighlight,
          [rehypeSanitize, schema],
        ]}
        components={{
          a: ({ href, ...props }) => {
            // 1) Fragment anchors (in-page): laat props ongemoeid
            //    - exact "#"
            //    - of begint met "#..."
            const isFragment =
              typeof href === "string" && href.trim().startsWith("#");

            // 2) mailto:/tel: willen we meestal ook niet forceren naar _blank
            const isMailto =
              typeof href === "string" && href.startsWith("mailto:");
            const isTel = typeof href === "string" && href.startsWith("tel:");

            // 3) Als href ontbreekt (zeldzaam), render een "neutrale" anchor
            if (!href) {
              return <a {...props} />;
            }

            // Opbouwen van de uiteindelijke props
            const finalProps = { ...props, href };

            if (isFragment || isMailto || isTel) {
              // Laat bestaande props intact, GEEN target/rel afdwingen
              return <a {...finalProps} />;
            }

            // 4) Voor alle andere links:
            //    - respecteer bestaande target/rel als die al gezet zijn
            if (!finalProps.target) finalProps.target = "_blank";
            if (!finalProps.rel) finalProps.rel = "noopener noreferrer";

            return <a {...finalProps} />;
          },

          h1: (props) => <h1 className="display-5" {...props} />,
          h2: (props) => <h2 className="display-6" {...props} />,

          img: (props) => {
            const { flags, options } = parseFlags(props);

            // Basis-styling
            let style = {
              display: "block",
              margin: "1.5rem auto",
              maxWidth: "80%",
            };
            let className = "md-image";

            // Condities op basis van flags of options
            if (flags.has("center")) {
              style = {
                ...style,
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              };
            }
            if (flags.has("left")) {
              style = { ...style, marginLeft: 0, marginRight: "auto" };
            }
            if (flags.has("right")) {
              style = { ...style, marginLeft: "auto", marginRight: 0 };
            }
            if (flags.has("rounded")) {
              style = { ...style, borderRadius: "12px" };
            }
            if (flags.has("shadow")) {
              style = { ...style, boxShadow: "0 8px 24px rgba(0,0,0,.12)" };
            }

            // Semantische types (andere default-styling)
            switch (options.type) {
              case "diagram":
                style = { ...style, maxWidth: "70%" };
                className += " md-image--diagram";
                break;
              case "badge":
                style = { ...style, maxWidth: "200px" };
                className += " md-image--badge";
                break;
              case "screenshot":
                style = {
                  ...style,
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  maxWidth: "100%",
                };
                className += " md-image--screenshot";
                break;
              default:
                break;
            }

            // Grootte uit options (bijv. "size:lg" of "width:60%")
            if (options.size === "sm") style = { ...style, maxWidth: "40%" };
            if (options.size === "md") style = { ...style, maxWidth: "65%" };
            if (options.size === "lg") style = { ...style, maxWidth: "90%" };
            if (options.width) style = { ...style, width: options.width };

            return <img {...props} className={className} style={style} />;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
};

export default TextViewer;

// Run external scripts

// runExternalScripts.js
export function runExternalScripts(container) {
  if (!container) return () => {};

  const markers = container.querySelectorAll("[data-script]");
  const created = [];

  markers.forEach((el) => {
    const filename = el.getAttribute("data-script");
    if (!filename) return;

    // Pad opbouwen: standaard public/scripts/<file>
    const url = filename.startsWith("/") ? filename : `/scripts/${filename}`;

    const typeAttr = (el.getAttribute("data-type") || "").toLowerCase();
    const isModule = typeAttr === "module";

    const s = document.createElement("script");
    s.src = url;
    s.type = isModule ? "module" : "text/javascript";
    // eventueel async/defer toestaan via data-attributen
    if (el.hasAttribute("data-async")) s.async = true;
    if (el.hasAttribute("data-defer")) s.defer = true;

    // Optioneel: parameters doorgeven via data-args (JSON) als globale var
    // of via querystring: /scripts/demo.js?args=...
    const args = el.getAttribute("data-args");
    if (args && !isModule) {
      // Voor klassieke scripts kun je vooraf een globale variabele zetten
      // zodat het script ernaar kan kijken:
      const init = document.createElement("script");
      init.textContent = `window.__MD_SCRIPT_ARGS__ = ${args};`;
      document.body.appendChild(init);
      created.push(init);
    }

    document.body.appendChild(s);
    created.push(s);
  });

  // Cleanup bij unmount / re-render
  return () => {
    created.forEach((node) => node.remove());
  };
}

// Helper: parse flags uit alt of title
function parseFlags({ alt = "", title = "" }) {
  // Alt: "Beschrijving | center rounded"
  const [, altFlagsRaw] = alt.split("|").map((s) => s?.trim());
  const altFlags = altFlagsRaw ? altFlagsRaw.split(/\s+/) : [];

  // Title: "type:diagram size:lg shadow"
  const titleTokens = title ? title.split(/\s+/) : [];
  const flags = new Set([...altFlags, ...titleTokens]);

  // Uit de title kunnen we key:value paren halen
  const options = {};
  for (const tok of titleTokens) {
    const m = tok.match(/^(\w+):(.+)$/);
    if (m) options[m[1]] = m[2];
  }
  return { flags, options };
}

// Uitgebreid sanitize schema
const schema = {
  ...defaultSchema,

  attributes: {
    ...defaultSchema.attributes,
    allowDataAttributes: true,
    // Sta className/style toe op pre/code
    pre: [
      ...(defaultSchema.attributes?.pre || []),
      ["className"],
      ["style"],
      ["data-language"],
    ],
    code: [
      ...(defaultSchema.attributes?.code || []),
      ["className"], // bv. language-js, hljs
      ["style"],
      ["data-language"],
    ],
    // Highlight.js voegt <span class="hljs-keyword"> etc. toe
    span: [...(defaultSchema.attributes?.span || []), ["className"], ["style"]],

    p: [
      ...(defaultSchema.attributes?.div || []),
      ["id"],
      ["className"],
      ["style"],
      ["dataScript"], // bv. data-script="demo.js"
      ["data-type"], // bv. data-type="module" | "classic"
      ["data-args"], // optionele JSON of key=value
      ["data-async"], // vlaggen
      ["data-defer"],
    ],

    h2: [
      ...(defaultSchema.attributes?.div || []),
      ["id"],
      ["dataId"],
      ["className"],
      ["style"],
    ],
  },

  // Optioneel: sta className/style ook op div als je wrappers gebruikt
  tagNames: [...(defaultSchema.tagNames || []), "span"],
};
