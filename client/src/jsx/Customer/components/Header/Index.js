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
      <Navbar expand="lg">
        <div className="container">
          <Navbar.Brand href="/">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
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
                    <NavDropdown.Item href="">
                      BAHRIA TOWN LAHORE
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">
                      BAHRIA TOWN KARACHI
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
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
                  <Link to="">construction Updates</Link>
                </li>
                <li>
                  <Link to="">Contact</Link>
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
