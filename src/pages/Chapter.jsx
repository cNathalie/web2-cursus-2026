import ChapterNavbar from "../components/ChapterNavbar";
import { Outlet } from "react-router-dom";

export default function Chapter({chapter, links, expand}) {
  return (
    <div>
      <ChapterNavbar brand={chapter} links={links} expand={expand} />
      <main className="container py-3">
        <Outlet />
      </main>
    </div>
  );
}