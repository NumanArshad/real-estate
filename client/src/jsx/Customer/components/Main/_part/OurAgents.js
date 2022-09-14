import React, { useContext } from "react";
import { homeDataContext } from "../../../../../context/HomeDataContext";
import Agent1 from "../../../assets/images/agent1.jpg";
import Agent2 from "../../../assets/images/agent2.jpg";
import Agent3 from "../../../assets/images/agent3.jpg";
import { Link, useHistory } from "react-router-dom";
import Data from "../../../assets/utilities/agentsData.json";
import { getImageUrlByName } from "../../../../../utils/helper";
function Index() {
  const { saleAgents } = useContext(homeDataContext);

  const history = useHistory()
  return (
    <React.Fragment>
      <div className="ourAgents">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-12 mx-auto">
              <div className="title">
                <div className="row">
                  <div
                    className="col-md-8 col-lg-8"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    <h1>Meet Our Agents</h1>
                    <p>
                      THE KNOWLEDGE OF OUR PROPERTY AGENTS IS FULL OF CLARITY.
                      THEY ARE CONFIDENT FOR THEY KNOW THEY ARE SELLING
                      WORLD-CLASS AMENITIES IN THE FORM OF APARTMENTS, MALLS,
                      SHOPS AND OFFICES.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="agentCards"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {/* <div className="row">
                  <div className="col-md-6 col-lg-4 card">
                    <img src={Agent1} alt="agent" />
                    <h1>Zaheer Ahmed</h1>
                    <h2>Sales Executive</h2>
                    <p>
                      Mr. Zaheer Ahmed is now on the paved road of unleashing
                      his sales skills...
                    </p>
                    <a href="">View Profile</a>
                  </div>
                  <div className="col-md-6 col-lg-4 card">
                    <img src={Agent2} alt="agent" />
                    <h1>Zaheer Ahmed</h1>
                    <h2>Sales Executive</h2>
                    <p>
                      Mr. Zaheer Ahmed is now on the paved road of unleashing
                      his sales skills...
                    </p>
                    <a href="">View Profile</a>
                  </div>
                  <div className="col-md-6 col-lg-4 card">
                    <img src={Agent3} alt="agent" />
                    <h1>Zaheer Ahmed</h1>
                    <h2>Sales Executive</h2>
                    <p>
                      Mr. Zaheer Ahmed is now on the paved road of unleashing
                      his sales skills...
                    </p>
                    <a href="">View Profile</a>
                  </div>
                </div> */}
                <div className="row d-flex justify-content-center">
                  {saleAgents?.map((data) => (
                    <div className="col-md-6 col-lg-3 card"
                      style={{ "cursor": "pointer" }}
                      onClick={
                        event => {
                          history.push(`/agent/${data?._id}`)
                        }
                      }>
                      <img src={getImageUrlByName(`${data?.profile}`)} onError={event => {
                        console.log("image load error")
                        event.target.src = "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg"
                      }} alt="agent" />
                      <h1>{`${data?.first_name} ${data?.last_name}`}</h1>
                      <h2>{data?.designation}</h2>
                      <p>{data?.description}</p>
                      <Link to="/agent">View Profile</Link>
                    </div>
                  ))}
                </div>
                <div className="loadMore">
                  <Link to="/our-agents">
                    <button className="btn btn-outline-success">
                      View All
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
