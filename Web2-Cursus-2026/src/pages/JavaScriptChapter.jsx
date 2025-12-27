// JavaScriptChapter.jsx
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function JavaScriptChapter() {
  const links = [
    { to: "/javascript/introductie", label: "Introductie" },
    { to: "/javascript/variabelen", label: "Variabelen" },
    { to: "/javascript/functies", label: "Functies" },
    { to: "/javascript/objects", label: "Objecten" },
  ];
  const expand = false;
  return (
    <div className="chapter-layout">
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" style={{ minWidth: "60vw" }}>
        <Container fluid>
          <Navbar.Brand href="#">JavaScript</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                JavaScript
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {links.map((link) => (
                  <li className="nav-item" key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " active fw-semibold" : "")
                      }
                      end
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>JavaScript</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {links.map((link) => (
                  <li className="nav-item" key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " active fw-semibold" : "")
                      }
                      end
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}

      {/* Hier rendert de actuele subpagina van het hoofdstuk */}
      <main className="container py-3">
        <Outlet />
      </main>
    </div>
  );
}
