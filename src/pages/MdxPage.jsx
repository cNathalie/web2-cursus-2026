import React, { useEffect, useState, useRef } from "react";
import Spinner from "react-bootstrap/Spinner";
import ChapterHeader from "../components/ChapterHeader";
import { observeCodeBlocks } from "../scripts/CopyCode";
import "../styles/MdxPage.css";

// This component dynamically imports an MDX page.
export default function MdxPage({ folder, course, symbol }) {
  const [Content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  // container for MDX-rendered content
  const contentRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

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

  useEffect(() => {
    if (!contentRef.current) return;
    const disconnect = observeCodeBlocks(contentRef.current);
    return () => disconnect();
  }, [Content]); // re-attach observer when MDX module changes

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
    <div ref={contentRef}>
      <ChapterHeader title={course.replaceAll("-", " ")} symbol={symbol} />
      <Content /> 
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
