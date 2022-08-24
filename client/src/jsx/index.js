import React, { useState } from "react";
/// React router dom
import { Switch, Route } from "react-router-dom";
/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";

/// Dashboard
import Home from "./components/Dashboard/Home";

/// Pages
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";

//Scroll To Top
import ScrollToTop from "./layouts/ScrollToTop";
// import RoomListing from "./components/Dashboard/Room/Listing";
import SaleAgentListing from "./components/Dashboard/SaleAgent/Listing";
import TownListing from "./components/Dashboard/Town/Listing";
import BlogListing from "./components/Dashboard/Blogs/Listing";
import MarketRates from "./components/Dashboard/MarketRates/Listing";
import Main from "./Customer/components/Main/Main";
import ConstructionListing from "./components/Dashboard/ConstructionUpdates/Listing";
import MapsListing from "./components/Dashboard/MapsModal/Listing";
import PropertyRates from "./components/Dashboard/PropertyRates/Listing";

const Markup = () => {
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  let pagePath = path.split("-").includes("page");
  const [activeEvent, setActiveEvent] = useState(!path);

  const routes = [
    /// Dashboard
    { url: "", component: Home },
    { url: "dashboard", component: Home },
    // { url: "room", component: RoomListing },
    { url: "sale-agent", component: SaleAgentListing },
    { url: "town", component: TownListing },
    { url: "blog", component: BlogListing },
    { url: "market-rate", component: MarketRates },
    { url: "construction-update", component: ConstructionListing },
    { url: "maps-modal", component: MapsListing },
    { url: "property-rates", component: PropertyRates },

    // { url: "customer", component: Main },

    /// pagesx
    { url: "page-register", component: Registration },
    { url: "page-lock-screen", component: LockScreen },
    { url: "page-login", component: Login },
    { url: "page-error-400", component: Error400 },
    { url: "page-error-403", component: Error403 },
    { url: "page-error-404", component: Error404 },
    { url: "page-error-500", component: Error500 },
    { url: "page-error-503", component: Error503 },
  ];

  return (
    <>
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "mh100vh"}`}
      >
        {!pagePath && (
          <Nav
            onClick={() => setActiveEvent(!activeEvent)}
            activeEvent={activeEvent}
            onClick2={() => setActiveEvent(false)}
            onClick3={() => setActiveEvent(true)}
          />
        )}
        <div
          className={` ${!path && activeEvent ? "rightside-event" : ""} ${
            !pagePath ? "content-body" : ""
          }`}
        >
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{ minHeight: window.screen.height - 60 }}
          >
            <Switch>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  component={data.component}
                />
              ))}
            </Switch>
          </div>
        </div>
        {!pagePath && <Footer />}
      </div>
      <ScrollToTop />
    </>
  );
};

export default Markup;
