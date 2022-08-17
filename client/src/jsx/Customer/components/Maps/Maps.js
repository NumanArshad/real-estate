import React, { Component } from "react";
import MapsData from "../../assets/utilities/mapsdata.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import { Link } from "react-router-dom";
function Maps() {
  return (
    <>
      <Header />
      <div className="marketRates">
        <div className="topBanner">
          <div className="container">
            <h1>Maps</h1>
          </div>
        </div>
        <div className="innerPage">
          <div className="container">
            <div className="accordionSection">
              <Accordion flush>
                {MapsData.map((data, index) => {
                  return (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>
                        <i class="fa-solid fa-angle-right me-2"></i>
                        {data.name}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="row">
                          {data.maps.map((mapdata, index2) => {
                            return (
                              <div className="col-md-4 col-sm-6 mapsBlock text-center mb-3">
                                <Link to={mapdata.mapImg}>
                                  <img src={mapdata.mapImg} alt="" />
                                  <h4 className="mt-2">{mapdata.mapName}</h4>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Maps;
