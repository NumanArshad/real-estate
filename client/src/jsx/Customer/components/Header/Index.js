import React from "react";
import "../../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import SubHeader from "../SubHeader/Index";
function Index() {
  return (
    <React.Fragment>
      <SubHeader />
      <Navbar expand="lg" color="#fff">
        <div className="container">
          <Link to="/">
            <Navbar.Brand>
              <img src={Logo} alt="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <NavDropdown title="PROPERTIES" id="navbarScrollingDropdown">
                    <Link to="/bahria-town">BAHRIA TOWN LAHORE</Link>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">
                      BAHRIA TOWN KARACHI
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/video">Videos</Link>
                </li>
                <li>
                  <NavDropdown
                    title="MARKET RATES"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="/lahore-market-rates">
                      BAHRIA MARKET LAHORE
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/karachi-market-rates">
                      BAHRIA MARKET KARACHI
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title="MAPS" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="">BAHRIA LAHORE</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">BAHRIA KARACHI</NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li>
                  <Link to="/updates">construction Updates</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Nav>
            <div className="favourites">
              <NavDropdown
                title={
                  <span>
                    <i className="fa fa-user fa-fw"></i>
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="">BAHRIA LAHORE</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">BAHRIA KARACHI</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default Index;
