import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  LinkContainer,
} from "../AppRoutes.imports.jsx";
import Disclaimer from "./Disclaimer.jsx";

export default function AppNavbar() {
  return (
    <Navbar
      id="main-navbar"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Disclaimer />

      <Container id="navigation">
        <LinkContainer to="/">
          <Navbar.Brand>Web 2</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/studiewijzer">
            <Nav.Link>Studiewijzer</Nav.Link>
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
          <LinkContainer to="/oefeningen">
            <Nav.Link>Oefeningen</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/project">
            <Nav.Link>Project</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}
