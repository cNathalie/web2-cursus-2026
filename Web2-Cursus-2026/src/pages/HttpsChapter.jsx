import ChapterNavbar from "../components/ChapterNavbar";
import { Outlet } from "react-router-dom";

const expand = "lg";
export default function HttpsChapter() {
  const links = [
    { to: "/https", label: "Introductie" },
    { to: "/https/request-methods", label: "Request Methods" },
    { to: "/https/status-codes", label: "Status Codes" },
    { to: "/https/browser-cache", label: "Browser Cache" },
    { to: "/https/oefeningen", label: "Oefeningen" },
  ];
  return (
    <div>
      <ChapterNavbar brand="HTTPS" links={links} expand={expand} />
      <main className="container py-3">
        <Outlet />
      </main>
    </div>
  );
}
