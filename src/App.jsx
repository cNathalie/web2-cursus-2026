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
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <BrowserRouter basename="/web2-cursus-2026">
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Web 2</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>Over de cursus</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Hoofdstukken">
              <LinkContainer to="/het-internet">
                <NavDropdown.Item>Het Internet</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/developer-tools">
                <NavDropdown.Item>Developer Tools</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/https">
                <NavDropdown.Item>HTTPS</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/javascript">
                <NavDropdown.Item>JavaScript Basis</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/dom-tree">
                <NavDropdown.Item>DOM-Tree</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/events">
                <NavDropdown.Item>Events</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/css-manipulatie">
                <NavDropdown.Item>CSS-Manipulatie</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/types">
                <NavDropdown.Item>Types</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/elementen-en-attributen">
                <NavDropdown.Item>Elementen en Attributen</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/forms">
                <NavDropdown.Item>Forms</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/timers">
                <NavDropdown.Item>Timers</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/advanced-dom">
                <NavDropdown.Item>Advanced DOM</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/types">
                <NavDropdown.Item>Objecten</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="#action/3.3">
                <NavDropdown.Item>Fetch API</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="#action/3.3">
                <NavDropdown.Item>JSON</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="#action/3.3">
                <NavDropdown.Item>Storage</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="#action/3.3">
                <NavDropdown.Item>TypeScript</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/howtolearn">
                <NavDropdown.Item>Hoe te verwerken</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/project">
              <Nav.Link>Project</Nav.Link>
            </LinkContainer>
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
