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
    <span style={{ color: "black" }}>
      <FontAwesomeIcon className="pad-right-5" icon={faUser} />
      profile
    </span>
  );

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand style={{ padding: 0, margin: 0 }}>
            <img
              src={jojoLogo}
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/" style={{ color: "black" }}>
              <Nav.Link href="/" className="background-grey">
                <FontAwesomeIcon
                  className="pad-right-5"
                  icon={faHouse}
                  style={{ color: "black" }}
                />
                Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer style={{ color: "black" }} to="/jobs">
              <Nav.Link className="background-grey">
                <FontAwesomeIcon className="pad-right-5" icon={faBriefcase} />
                Jobs
              </Nav.Link>
            </LinkContainer>

            <LinkContainer style={{ color: "black" }} to="/about">
              <Nav.Link className="background-grey">
                <FontAwesomeIcon className="pad-right-5" icon={faUsers} />
                About
              </Nav.Link>
            </LinkContainer>

            <NavDropdown
              title={navDropdownTitle}
              id="basic-nav-dropdown"
              className="background-grey"
            >
              <LinkContainer to="/studentForm">
                <NavDropdown.Item href="/studentForm">Create</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  // return (
  //   <nav className="Navbar-container">
  //     <div className="nav-select">
  //       <div className="inline-block">
  //         <a href="default.asp">
  //           <img src={jojoLogo} className="logo-img"></img>
  //         </a>
  //       </div>

  //       <div className="inline-block">
  //         <ul>
  //           <li>
  //             <a href="default.asp">
  //               Home
  //               <FontAwesomeIcon icon={faChevronDown} className="nav-chevron" />
  //             </a>
  //             <div className="dropdown-menu">
  //               Test Test TestTestTestTestTestTest{" "}
  //             </div>
  //           </li>
  //           <li>
  //             <a href="default.asp">
  //               Find Jobs
  //               <FontAwesomeIcon icon={faChevronDown} className="nav-chevron" />
  //             </a>
  //           </li>
  //           <li>
  //             <a href="default.asp">
  //               Employers
  //               <FontAwesomeIcon icon={faChevronDown} className="nav-chevron" />
  //             </a>
  //           </li>
  //           <li>
  //             <a>
  //               form stuff
  //               <FontAwesomeIcon icon={faChevronDown} className="nav-chevron" />
  //             </a>
  //             <div className="dropdown-menu">
  //               <a href="/studentForm">Student Form</a>
  //             </div>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //     <div className="nav-buttons"></div>
  //   </nav>
  // );
}
