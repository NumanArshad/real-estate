import React from "react";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import { Link } from "react-router-dom";
import AgentData from "./_part/AgentData";
import AboutAgent from "./_part/AboutAgent";
import SerachAgent from "./_part/SerachAgent";
import ContactAgent from "./_part/ContactAgent";
import Listing from "./_part/Listing";
function SingleAgent() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row bg-white my-3">
          <AgentData />
        </div>
        <div className="row">
          <div className="col-md-8 pl-md-0">
            <div className="row bg-white my-3 mx-0">
              <AboutAgent />
            </div>
            <div className="row my-3 mx-0">
              <Listing />
            </div>
          </div>
          <div className="col-md-4 pr-md-0">
            <div className="row bg-white my-3 mx-0">
              <ContactAgent />
            </div>
            <div className="row bg-white my-3 mx-0">
              <SerachAgent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleAgent;
