import React, { useState } from "react";
/// React router dom
/// Css
import "../../index.css";
import "../../chart.css";
import "../../step.css";

/// Layout
import Nav from "../../layouts/nav";
import Footer from "../../layouts/Footer";

/// Dashboard

/// Pages

//Scroll To Top
import ScrollToTop from "../../layouts/ScrollToTop";
// import RoomListing from "../../components/Dashboard/Room/Listing";
const AdminLayout = ({ children }) => {
    // let path = window.location.pathname;
    // path = path.split("/");
    // path = path[path.length - 1];
    // let pagePath = path.split("-").includes("page");
    const [activeEvent, setActiveEvent] = useState(true);
    return (
        <>
            <div
                id={"main-wrapper"}
                className="show"
            >
                <Nav
                    onClick={() => setActiveEvent(!activeEvent)}
                    activeEvent={activeEvent}
                    onClick2={() => setActiveEvent(false)}
                    onClick3={() => setActiveEvent(true)}
                />
                <div
                    className={` ${activeEvent ? "rightside-event" : ""} content-body`}>
                    <div
                        className="container-fluid"
                        style={{ minHeight: window.screen.height - 60 }}>
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
            <ScrollToTop />
        </>
    );
};

export default AdminLayout;
