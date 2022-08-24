import React, { useEffect } from "react";
import "../../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import SubHeader from "../SubHeader/Index";
import { useState } from "react";
import request from "../../../../utils/request";
function Index() {
  const [propertiesNameOptions, setPropertiesNameOptions] = useState([])

  useEffect(() => {
    request.get("/properties/propertiesDropdownOptions").then((response) => {
      if (response.status === 200) {
        setPropertiesNameOptions(response.data?.data)
      }
    })
  }, [])

  console.log({ propertiesNameOptions })
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
                    {
                      propertiesNameOptions.map((data, index, array) => (
                        <>
                          <Link to={`properties/${data?._id}`}>{data?.title}</Link>
                          {(index + 1) === array.length && <NavDropdown.Divider />
                          }
                        </>
                      )
                      )
                    }
                    {/* <Link to="/bahria-town">BAHRIA TOWN LAHORE</Link>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">
                      BAHRIA TOWN KARACHI
                    </NavDropdown.Item> */}
                  </NavDropdown>
                </li>

                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/video">Videos</Link>
                </li>
                <li>
                  <Link to="/market-rates">Market Rates</Link>
                </li>
                <li>
                  <Link to="/maps">Maps</Link>
                </li>
                <li>
                  <Link to="/updates">Construction Updates</Link>
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
