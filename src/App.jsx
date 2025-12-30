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
import JSMascot from "./components/JSMascot.jsx";
import ChapterCover from "./components/ChapterCover.jsx";
import { navigation } from "./navigation.js";
import Chapter from "./pages/Chapter.jsx";

function App() {
  return (
    <BrowserRouter basename="/web2-cursus-2026">
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Web 2</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Over de cursus</Nav.Link>
            <NavDropdown title="Hoofdstukken">
              <NavDropdown.Item href="/het-internet">
                Het Internet
              </NavDropdown.Item>
              <NavDropdown.Item href="/developer-tools">
                Developer Tools
              </NavDropdown.Item>
              <NavDropdown.Item href="/https">HTTPS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/javascript">
                JavaScript Basis
              </NavDropdown.Item>
              <NavDropdown.Item href="/dom-tree">DOM-Tree</NavDropdown.Item>
              <NavDropdown.Item href="/events">Events</NavDropdown.Item>
              <NavDropdown.Item href="/css-manipulatie">
                CSS-Manipulatie
              </NavDropdown.Item>
              <NavDropdown.Item href="/types">Types</NavDropdown.Item>
              <NavDropdown.Item href="/elementen-en-attributen">
                Elementen en Attributen
              </NavDropdown.Item>
              <NavDropdown.Item href="/forms">Forms</NavDropdown.Item>
              <NavDropdown.Item href="/timers">Timers</NavDropdown.Item>
              <NavDropdown.Item href="/advanced-dom">
                Advanced DOM
              </NavDropdown.Item>
              <NavDropdown.Item href="/types">Objecten</NavDropdown.Item>
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
            <Nav.Link href="/project">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/howtolearn" element={<HowToLearn />} />
        <Route
          path="/het-internet"
          element={
            <CoursePage
              folder="internet"
              course="Het-Internet"
              symbol={NiceToKnowSymbol}
            />
          }
        />
        <Route
          path="/developer-tools"
          element={
            <CoursePage
              folder="devtools"
              course="Developer-Tools"
              symbol={NeedToKnowSymbol}
            />
          }
        />
        <Route
          path="/https"
          element={
            <Chapter
              chapter="HTTPS"
              links={navigation.httpsLinks}
              expand="lg"
            />
          }
        >
          {navigation.httpsLinks.map(({ to, label, symbol }) => (
            <Route
              path={to.replace("/https/", "")}
              element={
                <CoursePage
                  folder="https"
                  course={label.replace(" ", "-")}
                  symbol={symbol}
                />
              }
            />
          ))}
        </Route>

        <Route
          path="/javascript"
          element={
            <Chapter
              chapter="JavaScript"
              links={navigation.jsLinks}
              expand={false}
            />
          }
        >
          <Route
            index
            element={
              <ChapterCover
                mascot={JSMascot}
                title="Welkom bij het JavaScript hoofdstuk."
              />
            }
          />

          {navigation.jsLinks.map(({ to, label, symbol }) => (
            <Route
              path={to.replace("/javascript/", "")}
              element={
                <CoursePage
                  folder="javascript"
                  course={label.replace(" ", "-")}
                  symbol={symbol}
                />
              }
            />
          ))}
        </Route>

        <Route
          path="/project"
          element={
            <Chapter
              chapter="Project"
              links={navigation.projectLinks}
              expand="lg"
            />
          }
        >
          <Route
            index
            element={
              <ChapterCover title="A project begins with an idea, but grows with curiosity, courage, and a lot of debugging." />
            }
          />

          {navigation.projectLinks.map(({ to, label }) => (
            <Route
              path={to.replace("/project/", "")}
              element={
                <CoursePage folder="project" course={label.replace(" ", "-")} />
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
