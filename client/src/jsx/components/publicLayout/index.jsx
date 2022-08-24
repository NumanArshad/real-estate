import React from "react";
/// React router dom
/// Css
import "../../index.css";
import "../../chart.css";
import "../../step.css";

/// Layout

/// Dashboard

/// Pages

//Scroll To Top
import ScrollToTop from "../../layouts/ScrollToTop";
// import RoomListing from "../../components/Dashboard/Room/Listing";
const PublicLayout = ({ children }) => {
    // let path = window.location.pathname;
    // path = path.split("/");
    // path = path[path.length - 1];
    // let pagePath = path.split("-").includes("page");
    // const [activeEvent, setActiveEvent] = useState(!path);

    console.log("public called")
    return (
        <>
            <div
                id={``}
                className={"mh100vh"}
            >
                <div>
                    <div
                        style={{ minHeight: window.screen.height - 60 }}
                    >
                        {children}
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </>
    );
};

export default PublicLayout;
