import "./Navbar.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import jojoLogo from "./../../Images/jojo-black.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

export default function JojoNavbar() {
  const navDropdownTitle = (
    <span style={{ color: "white" }}>
      <FontAwesomeIcon className="pad-right-5" icon={faUser} />
      profile
    </span>
  );

  return (
    <div className="jojo-navbar">
      <Navbar expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand style={{ padding: 0, margin: 0 }}>
              <div className="center-jojo">
                <img
                  src={jojoLogo}
                  height="35"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                <span className="jojo-text">Jobs For You.</span>
              </div>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-items">
            <Nav>
              <LinkContainer to="/" style={{ color: "white" }}>
                <Nav.Link className="background-grey">Home</Nav.Link>
              </LinkContainer>

              <LinkContainer style={{ color: "white" }} to="/JobsManager">
                <Nav.Link className="background-grey">Add Jobs</Nav.Link>
              </LinkContainer>

              <LinkContainer style={{ color: "white" }} to="/">
                <Nav.Link className="background-grey">About</Nav.Link>
              </LinkContainer>

              <NavDropdown title={navDropdownTitle} id="basic-nav-dropdown">
                <LinkContainer to="/studentForm">
                  <NavDropdown.Item href="/studentForm">
                    Create
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
