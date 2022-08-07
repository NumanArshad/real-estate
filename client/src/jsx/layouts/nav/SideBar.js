import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

///

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    // this.mm("dispose");
    // console.log(this.mm);
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");

    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }

    btn.addEventListener("click", toggleFunc);
  }
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    console.log("Path", path);

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li className={`${path === "" ? "mm-active" : ""}`}>
              <Link to="/">
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
              {/* <ul>
                <li>
                  <Link className={`${path === "" ? "mm-active" : ""}`} to="/">
                    Dashboard
                  </Link>
                </li>
              </ul> */}
            </li>
            {/* <li className={`${path === "room" ? "mm-active" : ""}`}>
              <Link to="/room">
                <i className="fa fa-calendar"></i>
                <span className="nav-text">Room</span>
              </Link>
            </li> */}

            <li className={`${path === "sale-agent" ? "mm-active" : ""}`}>
              <Link to="/sale-agent">
                <i className="fa fa-calendar"></i>
                <span className="nav-text">Client/SaleAgent</span>
              </Link>
            </li>
            <li className={`${path === "town" ? "mm-active" : ""}`}>
              <Link to="/town">
                <i className="fa fa-calendar"></i>
                <span className="nav-text">Town</span>
              </Link>
            </li>
            <li className={`${path === "blog" ? "mm-active" : ""}`}>
              <Link to="/blog">
                <i className="fa fa-calendar"></i>
                <span className="nav-text">Blogs</span>
              </Link>
            </li>
            <li className={`${path === "market-rate" ? "mm-active" : ""}`}>
              <Link to="/market-rate">
                <i className="fa fa-calendar"></i>
                <span className="nav-text">Market Rate</span>
              </Link>
            </li>
            {/* <li className={`${path === "construction-update" ? "mm-active" : ""}`}>
              <Link to="/construction-update">
                <i className="fa fa-calendar"></i>
                <span className="nav-text">Construction Updates</span>
              </Link>
            </li> */}
            <li className={`${path === "maps-modal" ? "mm-active" : ""}`}>
              <Link to="/maps-modal">
                <i className="fa fa-calendar"></i>
                <span className="nav-text">Maps Modal</span>
              </Link>
            </li>
            <li className={`${path === "property-rates" ? "mm-active" : ""}`}>
              <Link to="/property-rates">
                <i className="fa fa-calendar"></i>
                <span className="nav-text">Property Rates</span>
              </Link>
            </li>
          </MM>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
