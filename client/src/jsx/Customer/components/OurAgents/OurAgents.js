import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import { Link } from "react-router-dom";
import saleAgents from "../../assets/utilities/saleAgents.json";
import SerachAgent from "./_part/SerachAgent";
import request from "../../../../utils/request";
import { getImageUrlByName } from "../../../../utils/helper";
function OurAgents() {

  const [agenstData, setAgentsData] = useState([])
  useEffect(() => {
    request.get("/saleAgents/activeSaleAgents?all=true").then((response) => {
      console.log("our agents data", response)
      setAgentsData(response?.data?.data?.user)
    })
  }, [])

  console.log({ agenstData })
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
          {agenstData?.map((data) => (
            <div className="col-md-6 col-lg-4 card mb-0">
              <img src={getImageUrlByName(data?.profile)} alt="agent"
                onError={event => {
                  console.log("image load error")
                  event.target.src = "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg"
                }} />
              <h1>{`${data?.first_name} ${data?.last_name}`}</h1>
              <h2>{data?.designation}</h2>
              <p>{data?.description}</p>
              <Link to={`/agent/${data?._id}`}>View Profile</Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurAgents;
