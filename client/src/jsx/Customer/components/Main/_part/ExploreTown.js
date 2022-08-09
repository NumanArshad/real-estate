import React from "react";
import Explore1 from "../../../assets/images/Eiffel_Tower_Bahria_Town_Lahore.jpg";
import Explore2 from "../../../assets/images/sqfamily22-image-asq.jpg";
import Explore3 from "../../../assets/images/ali-saqlain-karachi-apartments.jpg";
import Explore4 from "../../../assets/images/bahriakarachi.jpg";
import Explore5 from "../../../assets/images/sq99mall-shops.jpg";
import Explore6 from "../../../assets/images/golf-city-1.jpg";

function Index() {
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
                    SERVING A PURPOSE TO HELP YOU BUILD A FINISHED SITE.​
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
              <div className="propertyTown">
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img src={Explore1} alt="property" />
                      <div className="card-body">
                        <p>150 Properties</p>
                        <h5>Lahore</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img src={Explore2} alt="property" />
                      <div className="card-body">
                        <p>15 Properties</p>
                        <h5>Shop</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img src={Explore3} alt="property" />
                      <div className="card-body">
                        <p>10 Properties</p>
                        <h5>House</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img src={Explore4} alt="property" />
                      <div className="card-body">
                        <p>8 Properties</p>
                        <h5>Karachi</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img src={Explore5} alt="property" />
                      <div className="card-body">
                        <p>4 Properties</p>
                        <h5>Shop</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card">
                      <img src={Explore6} alt="property" />
                      <div className="card-body">
                        <p>1 Properties</p>
                        <h5>Villas</h5>
                      </div>
                    </div>
                  </div>
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
