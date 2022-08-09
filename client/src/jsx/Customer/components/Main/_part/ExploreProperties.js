import React from "react";
import { isArrayCheck } from "../../../../../utils/helper";
import Explore1 from "../../../assets/images/explore1.jpeg";
import ExploreProperty from "../../../assets/utilities/ExploreProperty.json";

function Index({ data }) {
  return (
    <React.Fragment>
      <div className="exploreProperty">
        <div className="container">
          <div className="title">
            <div className="row mx-auto">
              <div className="col-md-8 col-lg-6 mx-auto">
                <div
                  className="text-center"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <h1>Explore Properties</h1>
                  <p>
                    ESTABLISHED IN 2000, SAMRAS ESTATE & BUILDERS OFFERS THE
                    BEST INVESTMENT CONSULTANCY IN REAL ESTATE SECTOR.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="propertyCards"
            data-aos="zoom-out"
            data-aos-duration="1500"
          >
            <div className="row">
              {isArrayCheck(data) &&
                data.map((data) => {
                  return (
                    <div key={data.id} className="col-md-6 col-lg-4">
                      <div className="card">
                        <img src={Explore1} alt="property" />
                        <div className="card-body">
                          <h1>{data.title}...</h1>
                          <h3>{data.price}Rs</h3>
                          <p>{data.description}</p>
                          <ul>
                            <li>
                              <i className="fa-solid fa-bed"></i> <span>5</span>
                            </li>
                            <li>
                              <i className="fa-solid fa-shower"></i>{" "}
                              <span>6</span>
                            </li>
                            <li>
                              <i className="fa-solid fa-car"></i> <span>1</span>
                            </li>
                            <li>
                              <i className="fa-solid fa-chart-area"></i>{" "}
                              <span>1</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {isArrayCheck(data) && data.length > 6 ? (
              <div className="loadMore">
                <button className="btn btn-outline-success">Load More</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
