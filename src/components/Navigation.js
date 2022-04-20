import { Navbar, Nav, Container } from "react-bootstrap";
import devpost from "../assets/devpost.png";
import email from "../assets/email.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="xl"
      sticky="top"
      style={{ position: "fixed", width: "100vw" }}
    >
      <div id="navbarcontainer">
        <Nav>
          <Nav.Link href="/" className="mr-1">
            <div className="logo">
              <h4 className="bold white">ELAINE SABINE</h4>
            </div>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="mr-1">
              <h4 className="bold white">ABOUT ME</h4>
            </Nav.Link>
            <Nav.Link href="/" className="mr-1">
              <h4 className="bold white">EXPERIENCE</h4>
            </Nav.Link>
            <Nav.Link href="/" className="mr-1">
              <h4 className="bold white">PROJECTS</h4>
            </Nav.Link>
            <Nav.Link href="/" className="mr-1">
              <h4 className="bold white">CLUBS</h4>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="elainesabine@gmail.com" className="mr-1">
              <img src={email} className="socials-logo" />
            </Nav.Link>
            <Nav.Link
              href="http://www.linkedin.com/in/elainesabine"
              className="mr-1"
            >
              <img src={linkedin} className="socials-logo" />
            </Nav.Link>
            <Nav.Link href="https://devpost.com/elainesabine" className="mr-1">
              <img src={devpost} className="socials-logo" />
            </Nav.Link>
            <Nav.Link
              href="http://www.github.com/elainesabine"
              className="mr-1"
            >
              <img src={github} className="socials-logo" />
            </Nav.Link>
            <Nav.Link
              href="http://www.instagram.com/elainesabine"
              className="mr-1"
            >
              <img src={instagram} className="socials-logo" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
export default Navigation;
