import ChapterNavbar from "../components/ChapterNavbar";
import { Outlet } from "react-router-dom";

const expand = "lg";
export default function HttpsChapter({links}) {
  return (
    <div>
      <ChapterNavbar brand="HTTPS" links={links} expand={expand} />
      <main className="container py-3">
        <Outlet />
      </main>
    </div>
  );
}
