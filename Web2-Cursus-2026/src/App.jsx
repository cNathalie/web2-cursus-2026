import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About.jsx";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import LandingPage from "./pages/LandingPage.jsx";
import HowToLearn from "./pages/HowToLearn.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import NiceToKnowSymbol from "./components/NiceToKnowSymbol.jsx";
import NeedToKnowSymbol from "./components/NeedToKnowSymbol.jsx";
import JavaScriptChapter from "./pages/JavaScriptChapter.jsx";
import JSMascot from "./components/JSMascot.jsx";
import ChapterCover from "./components/ChapterCover.jsx";

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
              <NavDropdown.Item href="/het-internet">
                Het Internet
              </NavDropdown.Item>
              <NavDropdown.Item href="/developer-tools">
                Developer Tools
              </NavDropdown.Item>
              <NavDropdown.Item href="/https">HTTPS</NavDropdown.Item>
              <NavDropdown.Item href="/javascript">JavaScript</NavDropdown.Item>
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
        <Route
          path="/het-internet"
          element={<CoursePage slug="Het-Internet" symbol={NiceToKnowSymbol} />}
        />
        <Route
          path="/developer-tools"
          element={
            <CoursePage slug="Developer-Tools" symbol={NeedToKnowSymbol} />
          }
        />
        <Route
          path="/https"
          element={<CoursePage slug="HTTPS" symbol={NeedToKnowSymbol} />}
        />

        <Route path="/javascript" element={<JavaScriptChapter />}>
          <Route
            index
            element={
              <ChapterCover
                mascot={JSMascot}
                title="Welkom bij het JavaScript hoofdstuk."
              />
            }
          />
          <Route
            path="introductie"
            element={
              <CoursePage
                slug="JavaScript-Introductie"
                symbol={NeedToKnowSymbol}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
