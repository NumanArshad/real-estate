import React, { useContext } from "react";
import { homeDataContext } from "../../../../../context/HomeDataContext";
import { IMAGE_BASE_URL } from "../../../../../utils/constants";
import Explore1 from "../../../assets/images/explore1.jpeg";
import ExploreProperty from "../../../assets/utilities/ExploreProperty.json";

function Index() {
  const { propertiesList } = useContext(homeDataContext)
  console.log({ propertiesList })
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
              {propertiesList.map((data) => {
                return (
                  <div key={data.id} className="col-md-6 col-lg-4">
                    <div className="card">
                      <img src={`${IMAGE_BASE_URL}${data?.images[0]}`} alt="property" />
                      <div className="card-body">
                        <h1>{data.title}...</h1>
                        <h3>{data.price}Rs</h3>
                        <p>{data.description}</p>
                        <ul>
                          <li hidden={!data?.bedRoomCount}>
                            <i className="fa-solid fa-bed" ></i> <span>{data?.bedRoomCount}</span>
                          </li>
                          <li hidden={!data?.bathRoomCount}>
                            <i className="fa-solid fa-shower"></i>{" "}
                            <span>{data?.bathRoomCount}</span>
                          </li>
                          <li hidden={!data?.carGarage}>
                            <i className="fa-solid fa-car"></i> <span>1</span>
                          </li>
                          <li >
                            <i className="fa-solid fa-chart-area"></i>{" "}
                            <span>{data?.landArea}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* {isArrayCheck(data) && data.length > 6 ? ( */}
            <div className="loadMore">
              <button className="btn btn-outline-success">Load More</button>
            </div>
            {/* ) : null} */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
