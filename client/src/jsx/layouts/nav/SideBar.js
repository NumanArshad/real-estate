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

    const firstItem = (item) => {
      if (item === "dashboard") {
        document.getElementById("dashboard").classList.add("mm-active");
        document.getElementById("sale-agent").classList.remove("mm-active");
        document.getElementById("town").classList.remove("mm-active");
        document.getElementById("blog").classList.remove("mm-active");
        document.getElementById("market-rate").classList.remove("mm-active");
        document.getElementById("maps-modal").classList.remove("mm-active");
        document.getElementById("property-rates").classList.remove("mm-active");
      } else if (item === "sale-agent") {
        document.getElementById("dashboard").classList.remove("mm-active");
        document.getElementById("sale-agent").classList.add("mm-active");
        document.getElementById("town").classList.remove("mm-active");
        document.getElementById("blog").classList.remove("mm-active");
        document.getElementById("market-rate").classList.remove("mm-active");
        document.getElementById("maps-modal").classList.remove("mm-active");
        document.getElementById("property-rates").classList.remove("mm-active");
      } else if (item === "town") {
        document.getElementById("dashboard").classList.remove("mm-active");
        document.getElementById("sale-agent").classList.remove("mm-active");
        document.getElementById("town").classList.add("mm-active");
        document.getElementById("blog").classList.remove("mm-active");
        document.getElementById("market-rate").classList.remove("mm-active");
        document.getElementById("maps-modal").classList.remove("mm-active");
        document.getElementById("property-rates").classList.remove("mm-active");
      } else if (item === "blog") {
        document.getElementById("dashboard").classList.remove("mm-active");
        document.getElementById("sale-agent").classList.remove("mm-active");
        document.getElementById("town").classList.remove("mm-active");
        document.getElementById("blog").classList.add("mm-active");
        document.getElementById("market-rate").classList.remove("mm-active");
        document.getElementById("maps-modal").classList.remove("mm-active");
        document.getElementById("property-rates").classList.remove("mm-active");
      } else if (item === "market-rate") {
        document.getElementById("dashboard").classList.remove("mm-active");
        document.getElementById("sale-agent").classList.remove("mm-active");
        document.getElementById("town").classList.remove("mm-active");
        document.getElementById("blog").classList.remove("mm-active");
        document.getElementById("market-rate").classList.add("mm-active");
        document.getElementById("maps-modal").classList.remove("mm-active");
        document.getElementById("property-rates").classList.remove("mm-active");
      } else if (item === "maps-modal") {
        document.getElementById("dashboard").classList.remove("mm-active");
        document.getElementById("sale-agent").classList.remove("mm-active");
        document.getElementById("town").classList.remove("mm-active");
        document.getElementById("blog").classList.remove("mm-active");
        document.getElementById("market-rate").classList.remove("mm-active");
        document.getElementById("maps-modal").classList.add("mm-active");
        document.getElementById("property-rates").classList.remove("mm-active");
      } else {
        document.getElementById("dashboard").classList.remove("mm-active");
        document.getElementById("sale-agent").classList.remove("mm-active");
        document.getElementById("town").classList.remove("mm-active");
        document.getElementById("blog").classList.remove("mm-active");
        document.getElementById("market-rate").classList.remove("mm-active");
        document.getElementById("maps-modal").classList.remove("mm-active");
        document.getElementById("property-rates").classList.add("mm-active");
      }
      console.log("First", item);
    };

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li
              onClick={() => firstItem("dashboard")}
              id="dashboard"
              className={`${path === "dashboard" ? "mm-active" : ""}`}
            >
              <Link to="/admin/">
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
              {/* <ul>
                <li>
                  <Link className={`${path === "" ? "mm-active" : ""}`} to="/admin/">
                    Dashboard
                  </Link>
                </li>
              </ul> */}
            </li>
            {/* <li className={`${path === "room" ? "mm-active" : ""}`}>
              <Link to="/admin/room">
                <i className="fa fa-calendar"></i>
                <span className="nav-text">Room</span>
              </Link>
            </li> */}

            <li
              onClick={() => firstItem("sale-agent")}
              id="sale-agent"
              className={`${path === "sale-agent" ? "mm-active" : ""}`}
            >
              <Link to="/admin/sale-agent">
                <i class="fa-solid fa-people-group"></i>
                <span className="nav-text">Client/SaleAgent</span>
              </Link>
            </li>
            <li
              onClick={() => firstItem("town")}
              id="town"
              className={`${path === "town" ? "mm-active" : ""}`}
            >
              <Link to="/admin/town">
                <i class="fa-solid fa-house"></i>
                <span className="nav-text">Town</span>
              </Link>
            </li>
            <li
              onClick={() => firstItem("blog")}
              id="blog"
              className={`${path === "blog" ? "mm-active" : ""}`}
            >
              <Link to="/admin/blog">
                <i class="fa-solid fa-blog"></i>
                <span className="nav-text">Blogs</span>
              </Link>
            </li>
            <li
              onClick={() => firstItem("market-rate")}
              id="market-rate"
              className={`${path === "market-rate" ? "mm-active" : ""}`}
            >
              <Link to="/admin/market-rate">
                <i class="fa-solid fa-shop"></i>
                <span className="nav-text">Market Rate</span>
              </Link>
            </li>
            {/* <li className={`${path === "construction-update" ? "mm-active" : ""}`}>
              <Link to="/admin/construction-update">
                <i className="fa fa-calendar"></i>
                <span className="nav-text">Construction Updates</span>
              </Link>
            </li> */}
            <li
              onClick={() => firstItem("maps-modal")}
              id="maps-modal"
              className={`${path === "maps-modal" ? "mm-active" : ""}`}
            >
              <Link to="/admin/maps-modal">
                <i class="fa-solid fa-map-location-dot"></i>
                <span className="nav-text">Maps</span>
              </Link>
            </li>
            <li
              onClick={() => firstItem("property-rates")}
              id="property-rates"
              className={`${path === "property-rates" ? "mm-active" : ""}`}
            >
              <Link to="/admin/property-rates">
                <i class="fa-solid fa-landmark"></i>
                <span className="nav-text">Property</span>
              </Link>
            </li>
          </MM>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
