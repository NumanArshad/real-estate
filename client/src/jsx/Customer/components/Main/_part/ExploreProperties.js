import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { homeDataContext } from "../../../../../context/HomeDataContext";
import { getImageUrlByName } from "../../../../../utils/helper";
import NoDataLoaderWrapper from "../../../../components/noDataLoaderWrapper";

function Index() {
  const { propertiesList, setPaginationValue } = useContext(homeDataContext);
  console.log({ propertiesList });

  const history = useHistory();
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
                    ESTABLISHED IN 2021, SAMRAS ESTATE & BUILDERS OFFERS THE
                    BEST INVESTMENT CONSULTANCY IN REAL ESTATE SECTOR.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <NoDataLoaderWrapper data={propertiesList?.data}>
            <div
              className="propertyCards"
              data-aos="zoom-out"
              data-aos-duration="1500"
            >
              <div className="row">
                {propertiesList?.data?.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className="col-md-6 col-lg-4"
                      style={{ cursor: "pointer" }}
                      onClick={(event) => {
                        console.log("thee");
                        history.push(`/properties/${data?._id}`);
                      }}
                    >
                      <div className="card">
                        <img
                          src={getImageUrlByName(data?.images[0])}
                          onError={event => {
                            console.log("image load error")
                            event.target.src = "/imgs/house.jpeg"
                          }}
                          alt="property"
                        />
                        <div className="card-body">
                          <h1>{data.title}...</h1>
                          <h3>{data.price}Rs</h3>
                          <p>{data.description}</p>
                          <ul>
                            <li hidden={!data?.bedRoomCount}>
                              <i className="fa-solid fa-bed"></i>{" "}
                              <span>{data?.bedRoomCount}</span>
                            </li>
                            <li hidden={!data?.bathRoomCount}>
                              <i className="fa-solid fa-shower"></i>{" "}
                              <span>{data?.bathRoomCount}</span>
                            </li>
                            <li hidden={!data?.carGarage}>
                              <i className="fa-solid fa-car"></i> <span>1</span>
                            </li>
                            <li>
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

              {propertiesList?.data?.length < propertiesList?.total ? (
                <div className="loadMore">
                  <button
                    className="btn btn-outline-success"
                    onClick={(event) => {
                      event.preventDefault();
                      setPaginationValue((prev) => ({ page: prev?.page + 1 }));
                    }}
                  >
                    Load More
                  </button>
                </div>
              ) : null}
            </div>
          </NoDataLoaderWrapper>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
