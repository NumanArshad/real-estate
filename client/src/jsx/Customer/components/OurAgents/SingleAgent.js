import React, { useEffect, useState } from "react";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import { Link, useParams } from "react-router-dom";
import AgentData from "./_part/AgentData";
import AboutAgent from "./_part/AboutAgent";
import SerachAgent from "./_part/SerachAgent";
import ContactAgent from "./_part/ContactAgent";
import Listing from "./_part/Listing";
import request from "../../../../utils/request";
function SingleAgent() {


  const [data, setData] = useState({})
  const { id } = useParams()

  console.log({ id })
  useEffect(() => {
    if (id) {
      request.get(`/saleAgents/saleAgentById/${id}`).then((response) => {
        console.log("slae agent dara", response)
        setData(response?.data?.data?.user)
      })


    }
  }, [id])

  console.log(data)
  return (
    <>
      <Header />
      <div className="container">
        <div className="row bg-white my-3">
          <AgentData {...data} />
        </div>
        <div className="row">
          <div className="col-md-8 pl-md-0">
            <div className="row bg-white my-3 mx-0">
              <AboutAgent  {...data} />
            </div>
            <div className="row my-3 mx-0">
              <Listing />
            </div>
          </div>
          <div className="col-md-4 pr-md-0">
            <div className="row bg-white my-3 mx-0">
              <ContactAgent   {...data} />
            </div>
            {/* <div className="row bg-white my-3 mx-0">
              <SerachAgent />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleAgent;
