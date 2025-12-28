import React, { useEffect, useState } from "react";
import TextViewer from "../components/Textviewer";
import Spinner from "react-bootstrap/Spinner";
import ChapterHeader from "../components/ChapterHeader";

const CoursePage = ({ folder, course, symbol }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    import(`../content/${folder}/${course}.md?raw`)
      .then((mod) => {
        setContent(mod.default || mod);
        setLoading(false);
      })
      .catch((e) => {
        setErr("Kon het hoofdstuk niet laden.");
        {
          {
            console.log(e);
          }
        }
        setLoading(false);
      });
  }, [course]);

  if (loading)
    return (
      <div>
        <p>Bezig met laden…</p>{" "}
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  if (err)
    return (
      <div>
        <p style={{ color: "red" }}>{err}</p>{" "}
        <Spinner animation="grow" variant="warning" />
      </div>
    );

  return (
    <div>
      <ChapterHeader title={course.replace("-", " ")} symbol={symbol} />
      <TextViewer markdown={content} />
      <a
        href="#"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          color: "grey",
        }}
      >
        Terug naar boven
      </a>
    </div>
  );
};

export default CoursePage;
