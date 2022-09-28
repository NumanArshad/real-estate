import React, { useContext } from "react";
import Explore1 from "../../../assets/images/Eiffel_Tower_Bahria_Town_Lahore.jpg";
import Explore2 from "../../../assets/images/sqfamily22-image-asq.jpg";
import Explore3 from "../../../assets/images/ali-saqlain-karachi-apartments.jpg";
import Explore4 from "../../../assets/images/bahriakarachi.jpg";
import Explore5 from "../../../assets/images/sq99mall-shops.jpg";
import Explore6 from "../../../assets/images/golf-city-1.jpg";
import { homeDataContext } from "../../../../../context/HomeDataContext";
import { CircularProgress } from "@mui/material";
import NoDataLoaderWrapper from "../../../../components/noDataLoaderWrapper";
import { useHistory } from "react-router-dom";

function Index() {

  const { propertiesByCategory } = useContext(homeDataContext)

  const { push } = useHistory()
  return (
    <React.Fragment>
      <div className="exploreTown">
        <div className="container">
          <div className="title">
            <div className="row mx-auto">
              <div
                className="col-md-8 col-lg-6 mx-auto"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <div className="text-center">
                  <h1>Explore Bahria Town</h1>
                  <p>
                    THERE ARE DIFFERENT PROPERTY OPTIONS TO CHOOSE FROM, EACH
                    SERVING A PURPOSE TO HELP YOU BUILD A FINISHED SITE.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-auto">
            <div
              className="col-md-9 mx-auto"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <NoDataLoaderWrapper data={propertiesByCategory}>
                <div className="propertyTown">
                  <div className="row">
                    {
                      Array.isArray(propertiesByCategory) && [...propertiesByCategory, ...propertiesByCategory]?.map((data) =>
                        <div className="col-md-6 col-lg-4"
                          style={{ "cursor": "pointer" }}
                          onClick={event => {
                            event.preventDefault()
                            push("/properties")
                          }}>
                          <div className="card">
                            <img src={Explore1} alt="property" />
                            <div className="card-body">
                              <p>{data?.count} Properties</p>
                              <h5>{data?._id}</h5>
                            </div>
                          </div>
                        </div>)
                    }

                  </div>
                </div>
              </NoDataLoaderWrapper>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
