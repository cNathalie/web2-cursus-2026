import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ChapterHeader from "../components/ChapterHeader";
import "../styles/MdxPage.css";

// This component dynamically imports an MDX page.
export default function MdxPage({ folder, course, symbol }) {
  const [Content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup;

    setLoading(true);
    setErr(null);
    setContent(null);

    import(`../content/${folder}/${course}.mdx`)
      .then((mod) => {
        if (cancelled) return;
        const Comp = mod.default || mod;
        setContent(() => Comp);
        setLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        console.error(e);
        setErr("Kon het hoofdstuk niet laden.");
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [folder, course]);

  // Custom event to signal that MDX content is ready for script
  useEffect(() => {
    if (!Content) return;
    const id = requestAnimationFrame(() => {
      const evt = new CustomEvent("mdx:ready", {
        detail: { folder, course },
      });
      window.dispatchEvent(evt);
    });
    return () => cancelAnimationFrame(id);
  }, [Content, folder, course]);

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

  if (!Content) return null;

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
