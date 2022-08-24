import React, { useContext } from "react";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import { Link } from "react-router-dom";
import saleAgents from "../../assets/utilities/saleAgents.json";
import SerachAgent from "./_part/SerachAgent";
function OurAgents() {
  return (
    <>
      <Header />

      <div className="container ourAgents py-0">
        <div className="topBanner">
          <div className="container">
            <h1>Our Agents</h1>
          </div>
        </div>
        <div className="bg-white row">
          <SerachAgent />
        </div>
        <div className="row agentCards">
          {saleAgents?.map((data) => (
            <div className="col-md-6 col-lg-4 card mb-0">
              <img src={`${data?.profile}`} alt="agent" />
              <h1>{`${data?.first_name} ${data?.last_name}`}</h1>
              <h2>{data?.designation}</h2>
              <p>{data?.description}</p>
              <Link to="/agent">View Profile</Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurAgents;
