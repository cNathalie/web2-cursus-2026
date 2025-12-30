import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://vite.dev/config/

export default defineConfig({
  base: "/web2-cursus-2026/",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "append" }],
      ],
    }),
    // Custom plugin to inject dev-server middleware
    {
      name: "simulate-status-codes",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/simulate500") {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
            res.end("Simulated 500 error");
            return;
          }

          if (req.url === "/simulate404") {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
            res.end("Simulated 404 error");
            return;
          }

          if (req.url === "/simulate200") {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
            res.end("Simulated 200 OK");
            return;
          }

          if (req.url === "/simulate401") {
            res.statusCode = 401;
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
            res.end("Simulated 401 error");
            return;
          }

          next();
        });
      },
    },
  ],
});
