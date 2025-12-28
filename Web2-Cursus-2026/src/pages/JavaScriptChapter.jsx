import { Outlet } from "react-router-dom";
import ChapterNavbar from "../components/ChapterNavbar.jsx";

export default function JavaScriptChapter({links}) {
 
  const expand = false;
  return (
    <div className="chapter-layout">
      <ChapterNavbar brand="JavaScript" links={links} expand={expand} />

      {/* Hier rendert de actuele subpagina van het hoofdstuk */}
      <main className="container py-3">
        <Outlet />
      </main>
    </div>
  );
}
