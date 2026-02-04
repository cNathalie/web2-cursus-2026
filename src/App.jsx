import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About.jsx";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import LandingPage from "./pages/LandingPage.jsx";
import HowToLearn from "./pages/HowToLearn.jsx";
import NiceToKnowSymbol from "./components/NiceToKnowSymbol.jsx";
import NeedToKnowSymbol from "./components/NeedToKnowSymbol.jsx";
import JSMascot from "./components/JSMascot.jsx";
import ChapterCover from "./components/ChapterCover.jsx";
import { navigation } from "./navigation.js";
import Chapter from "./pages/Chapter.jsx";
import { LinkContainer } from "react-router-bootstrap";
import MdxPage from "./pages/MdxPage.jsx";
import CoverImage from "./components/CoverImage.jsx";

function App() {
  return (
    <BrowserRouter basename="/web2-cursus-2026">
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <span
          style={{
            color: "grey",
            fontStyle: "italic",
            marginLeft: "1rem",
            fontSize: "0.8rem",
            marginBottom: "1rem",
          }}
        >
          © Nathalie Courteaux {new Date().getFullYear()}. Deze cursus mag niet
          worden vermenigvuldigd, verspreid of gebruikt voor commerciële of
          winstgevende doeleinden.
        </span>

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
              <LinkContainer to="/objecten">
                <NavDropdown.Item>Objecten</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/fetch-api">
                <NavDropdown.Item>Fetch API</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/json">
                <NavDropdown.Item>JSON</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/storage">
                <NavDropdown.Item>Storage</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/typescript">
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
        <Route
          path="/about"
          element={<MdxPage folder="intro" course="Introductie" />}
        />
        <Route path="/howtolearn" element={<HowToLearn />} />
        <Route
          path="/het-internet"
          element={
            <MdxPage
              folder="internet"
              course="Het-Internet"
              symbol={NiceToKnowSymbol}
            />
          }
        />
        <Route
          path="/developer-tools"
          element={
            <MdxPage
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
                <MdxPage
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
                <MdxPage
                  folder="javascript"
                  course={label.replace(" ", "-")}
                  symbol={symbol}
                />
              }
            />
          ))}
        </Route>

        <Route
          path="/dom-tree"
          element={
            <Chapter
              chapter="Dom Tree"
              links={navigation.domTreeLinks}
              expand="lg"
            />
          }
        >
          <Route
            index
            element={<ChapterCover title="Document Object Model" />}
          />

          {navigation.domTreeLinks.map(({ to, label, symbol }) => (
            <Route
              path={to.replace("/dom-tree/", "")}
              element={
                <MdxPage
                  folder="dom-tree"
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
              expand={false}
            />
          }
        >
          <Route
            index
            element={
              <ChapterCover title="A project begins with an idea, but grows with curiosity, courage, and a lot of debugging." />
            }
          />

          {navigation.projectLinks.map(({ to, label, symbol }) => (
            <Route
              path={to.replace("/project/", "")}
              element={
                <MdxPage
                  folder="project"
                  course={label.replace(" ", "-")}
                  {...(symbol ? { symbol } : {})}
                />
              }
            />
          ))}
        </Route>

        <Route
          path="/css-manipulatie"
          element={
            <MdxPage
              folder="css-manipulation"
              course="CSS-Manipulatie"
              symbol={NeedToKnowSymbol}
            />
          }
        />

        <Route
          path="/events"
          element={
            <Chapter
              chapter="Events"
              links={navigation.eventsLinks}
              expand={false}
            />
          }
        >
          <Route
            index
            element={
              <ChapterCover title="JavaScript events:  where chaos meets opportunity, and every click is a chance for greatness (or a bug)." />
            }
          />

          {navigation.eventsLinks.map(({ to, label, symbol }) => (
            <Route
              path={to.replace("/events/", "")}
              element={
                <MdxPage
                  folder="events"
                  course={label.replace(" ", "-")}
                  {...(symbol ? { symbol } : {})}
                />
              }
            />
          ))}
        </Route>

        <Route
          path="/types"
          element={
            <Chapter
              chapter="Types"
              links={navigation.typesLinks}
              expand={"lg"}
            />
          }
        >
          <Route
            index
            element={
              <ChapterCover title="JavaScript types are like cats: they do what they want, not what you expect." />
            }
          />

          {navigation.typesLinks.map(({ to, label, symbol }) => (
            <Route
              path={to.replace("/types/", "")}
              element={
                <MdxPage
                  folder="types"
                  course={label.replace(" ", "-")}
                  {...(symbol ? { symbol } : {})}
                />
              }
            />
          ))}
        </Route>

        <Route
          path="/elementen-en-attributen"
          element={
            <Chapter
              chapter="Elementen en Attributen"
              links={navigation.elementsLinks}
              expand={"lg"}
            />
          }
        >
          <Route
            index
            element={
              <ChapterCover title="Finding elements with JavaScript is basically digital hide‑and‑seek... except the elements never move, and somehow they’re still hard to find." />
            }
          />

          {navigation.elementsLinks.map(({ to, label, symbol }) => (
            <Route
              path={to.replace("/elementen-en-attributen/", "")}
              element={
                <MdxPage
                  folder="elements-attributes"
                  course={label.replaceAll(" ", "-")}
                  {...(symbol ? { symbol } : {})}
                />
              }
            />
          ))}
        </Route>

        <Route
          path="/forms"
          element={
            <Chapter
              chapter="Formulieren"
              links={navigation.formsLinks}
              expand={"lg"}
            />
          }
        >
          <Route
            index
            element={
              <ChapterCover title="JavaScript forms: because trusting users to type things correctly is a dangerous fantasy." />
            }
          />

          {navigation.formsLinks.map(({ to, label, symbol }) => (
            <Route
              path={to.replace("/forms/", "")}
              element={
                <MdxPage
                  folder="forms"
                  course={label.replaceAll(" ", "-")}
                  {...(symbol ? { symbol } : {})}
                />
              }
            />
          ))}
        </Route>

        <Route
          path="/timers"
          element={
            <Chapter
              chapter="Timers"
              links={navigation.timersLinks}
              expand={"lg"}
            />
          }
        >
          <Route
            index
            element={
              <ChapterCover title="JavaScript timers: because sometimes your code just needs a moment to think." />
            }
          />

          {navigation.timersLinks.map(({ to, label, symbol }) => (
            <Route
              path={to.replace("/timers/", "")}
              element={
                <MdxPage
                  folder="timers"
                  course={label.replaceAll(" ", "-")}
                  {...(symbol ? { symbol } : {})}
                />
              }
            />
          ))}
        </Route>

        <Route
          path="/advanced-dom"
          element={
            <Chapter
              chapter="Advanced DOM"
              links={navigation.advDomLinks}
              expand={false}
            />
          }
        >
          <Route
            index
            element={
              <ChapterCover title="Advanced DOM manipulation: basically LEGO, but the bricks complain if you forget a closing tag." />
            }
          />

          {navigation.advDomLinks.map(({ to, label, symbol }) => (
            <Route
              path={to.replace("/advanced-dom/", "")}
              element={
                <MdxPage
                  folder="advanced-dom"
                  course={label.replaceAll(" ", "-")}
                  {...(symbol ? { symbol } : {})}
                />
              }
            />
          ))}
        </Route>

          <Route
          path="/objecten"
          element={
            <Chapter
              chapter="Objecten"
              links={navigation.objectsLinks}
              expand={"lg"}
            />
          }
        >
          <Route
            index
            element={
              <ChapterCover title="JavaScript objects have keys to everything… except your bugs." />
            }
          />

          {navigation.objectsLinks.map(({ to, label, symbol }) => (
            <Route
              path={to.replace("/objecten/", "")}
              element={
                <MdxPage
                  folder="objecten"
                  course={label.replaceAll(" ", "-")}
                  {...(symbol ? { symbol } : {})}
                />
              }
            />
          ))}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
