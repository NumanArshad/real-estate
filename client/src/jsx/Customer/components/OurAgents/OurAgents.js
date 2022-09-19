import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import { Link } from "react-router-dom";
import saleAgents from "../../assets/utilities/saleAgents.json";
import SerachAgent from "./_part/SerachAgent";
import request from "../../../../utils/request";
import { getImageUrlByName } from "../../../../utils/helper";
import NoDataLoaderWrapper from "../../../components/noDataLoaderWrapper";
function OurAgents() {

  const [agenstData, setAgentsData] = useState(null)
  useEffect(() => {
    request.get("/saleAgents/activeSaleAgents?all=true").then((response) => {
      const mapResponse = response?.data?.data?.user?.map(({ first_name, last_name, ...rest }) => ({ ...rest, full_name: `${first_name} ${last_name}` }))
      setAgentsData(mapResponse)
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
          <SerachAgent setAgentsData={setAgentsData} agenstData={agenstData} />
        </div>
        <NoDataLoaderWrapper data={agenstData}>
          <div className="row agentCards">
            {agenstData?.map((data) => (
              <div className="col-md-6 col-lg-4 card mb-0">
                <img src={getImageUrlByName(data?.profile)} alt="agent"
                  onError={event => {
                    console.log("image load error")
                    event.target.src = "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg"
                  }} />
                <h1>{data?.full_name}</h1>
                <h2>{data?.designation}</h2>
                <p>{data?.description}</p>
                <Link to={`/agent/${data?._id}`}>View Profile</Link>
              </div>
            ))}
          </div>
        </NoDataLoaderWrapper>
      </div>
      <Footer />
    </>
  );
}

export default OurAgents;
