import "./Navbar.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import jojoLogo from "./../../Images/jojo-logo-red.png";

export default function Navbar() {
  return (
    <nav className="Navbar-container">
      <div className="nav-select">
        <div className="inline-block">
          <a href="default.asp">
            <img src={jojoLogo} className="logo-img"></img>
          </a>
        </div>

        <div className="inline-block">
          <ul>
            <li>
              <a href="default.asp">
                Home
                <FontAwesomeIcon icon={faChevronDown} className="nav-chevron" />
              </a>
              <div className="dropdown-menu">
                Test Test TestTestTestTestTestTest{" "}
              </div>
            </li>
            <li>
              <a href="default.asp">
                Find Jobs
                <FontAwesomeIcon icon={faChevronDown} className="nav-chevron" />
              </a>
            </li>
            <li>
              <a href="default.asp">
                Employers
                <FontAwesomeIcon icon={faChevronDown} className="nav-chevron" />
              </a>
            </li>
            <li>
              <a>
                form stuff
                <FontAwesomeIcon icon={faChevronDown} className="nav-chevron" />
              </a>
              <div className="dropdown-menu">
                <a href="/studentform">Student Form</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-buttons"></div>
    </nav>
  );
}
