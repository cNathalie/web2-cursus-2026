
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ChapterHeader from "../components/ChapterHeader";

// NOTE: This component dynamically imports an MDX page.
export default function MdxPage({ folder, course, symbol }) {
  // Store the component TYPE (function), or null while loading
  const [Content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setErr(null);

    // If your path is dynamic, this import will be chunk‑split by Vite/MDX plugin
    import(`../content/${folder}/${course}.mdx`)
      .then((mod) => {
        if (cancelled) return;
        // Ensure we store a component TYPE, not an element.
        const Comp = mod.default || mod;
        setContent(() => Comp);       // <-- note the function form
        setLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        console.error(e);
        setErr("Kon het hoofdstuk niet laden.");
        setLoading(false);
      });

    return () => { cancelled = true };
  }, [folder, course]);                // include folder too

  if (loading) {
    return (
      <div>
        <p>Bezig met laden…</p>
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  }

  if (err) {
    return (
      <div>
        <p style={{ color: "red" }}>{err}</p>
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  }

  if (!Content) return null; // safety

  return (
    <div>
      <ChapterHeader title={course.replace("-", " ")} symbol={symbol} />
      <Content /> {/* render the MDX component */}
      <a
        href="#"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          color: "grey",
        }}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Terug naar boven
      </a>
    </div>
  );
}
