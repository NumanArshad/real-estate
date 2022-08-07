import React from "react";

/// Scroll

import LogoutPage from "./Logout";
/// Image
import profile from "../../../images/profile/17.jpg";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left"></div>
            <ul className="navbar-nav header-right">
              <Dropdown as="li" className="nav-item header-profile ">
                <Dropdown.Toggle
                  as="a"
                  to="#"
                  variant=""
                  className="nav-link i-false c-pointer"
                >
                  <img src={profile} width="20" alt="" />
                  {/* <div className="header-info">
									<span>David<i className="fa fa-caret-down ml-3" aria-hidden="true"></i></span>
									</div> */}
                </Dropdown.Toggle>
                <Dropdown.Menu align="right" className="mt-2">
                  <LogoutPage />
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
