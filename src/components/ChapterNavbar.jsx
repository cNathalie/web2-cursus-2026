// JavaScriptChapter.jsx
import { useState } from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
export default function ChapterNavbar({brand, links, expand}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isAlwaysCollapsed = expand === false;
  return (
    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" style={{ minWidth: "60vw" }}>
      <Container fluid>
        <Navbar.Brand href="#">{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={isAlwaysCollapsed ? handleShow : undefined} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          show={isAlwaysCollapsed ? show : undefined}
          onHide={isAlwaysCollapsed ? handleClose : undefined}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              {brand}
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
                    onClick={isAlwaysCollapsed ? handleClose : undefined}
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
  );
}