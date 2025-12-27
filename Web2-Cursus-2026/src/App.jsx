import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About.jsx";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import LandingPage from "./pages/LandingPage.jsx";
import HowToLearn from "./pages/HowToLearn.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Web 2</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Over de cursus</Nav.Link>
            <NavDropdown title="Hoofdstukken" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Het Internet
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Developer Tools
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HTTPS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">JavaScript</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DOM-Tree</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                CSS-Manipulatie
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Fetch API</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">JSON</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Storage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TypeScript</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/howtolearn">
                Hoe te verwerken
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/howtolearn" element={<HowToLearn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
