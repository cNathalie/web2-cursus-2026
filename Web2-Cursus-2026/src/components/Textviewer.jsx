import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

const TextViewer = ({ markdown }) => {
  return (
    <article className="prose max-w-none">
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
          a: (props) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),

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
    // Sta className/style toe op pre/code
    pre: [
      ...(defaultSchema.attributes?.pre || []),
      ['className'],
      ['style'],
      ['data-language'],
    ],
    code: [
      ...(defaultSchema.attributes?.code || []),
      ['className'], // bv. language-js, hljs
      ['style'],
      ['data-language'],
    ],
    // Highlight.js voegt <span class="hljs-keyword"> etc. toe
    span: [
      ...(defaultSchema.attributes?.span || []),
      ['className'],
      ['style'],
    ],
  },
  // Optioneel: sta className/style ook op div als je wrappers gebruikt
  tagNames: [
    ...(defaultSchema.tagNames || []),
    'span',
  ],
};
