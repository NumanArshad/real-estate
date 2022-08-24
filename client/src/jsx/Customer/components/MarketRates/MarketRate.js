import React, { Component } from "react";
import RatesData from "../../assets/utilities/marketrates.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
function MarketRate() {
  return (
    <>
      <Header />
      <div className="marketRates">
        <div className="topBanner">
          <div className="container">
            <h1>Lahore Market Rates</h1>
          </div>
        </div>
        <div className="innerPage">
          <div className="container">
            <div className="title">
              <h3>Disclaimer: These Are Bahria Town’s Official Prices.</h3>
            </div>
            <div className="accordionSection">
              <Accordion flush>
                {RatesData.map((data, index) => {
                  return (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>
                        <i class="fa-solid fa-angle-right me-2"></i>
                        {data.name}
                      </Accordion.Header>
                      <Accordion.Body>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Sector</th>
                              <th>From</th>
                              <th>Upto</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.plots.map((tableData, index) => {
                              return (
                                <tr>
                                  <td>{tableData.sector}</td>
                                  <td>{tableData.priceFrom}</td>
                                  <td>{tableData.priceTo}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
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

export default MarketRate;
