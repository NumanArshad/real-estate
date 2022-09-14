import React, { Component, useState } from "react";
import RatesData from "../../assets/utilities/marketrates.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { isArrayCheck } from "../../../../utils/helper";
import { useEffect } from "react";
import request from "../../../../utils/request";

const data = [
  {
    _id: "62f7c605ed2b76405bd8a3e4",
    town: {
      townInformation: {
        name: "",
        tagLine: "",
        WhyChooseUs: [],
        LocationGuide: [],
        AffordablePaymentPlan: [],
        paymentPlanImage: [],
        gallery: [],
        officeAddress: [],
      },
      _id: "62f7c5dbed2b76405bd8a3dd",
      block: "A",
      name: "Lahore City",
      area: "Lahore Gulberg",
      city: "Lahore",
      hasBlock: false,
      address: "Johar Town Lahore near thokar",
      isOnConstruction: "true",
      isActive: "true",
      createdBy: "62ee8f58024509820bf3712b",
      created_at: "2022-08-13T15:40:11.540Z",
      updated_at: "2022-08-13T15:40:11.540Z",
      __v: 0,
    },
    plot: [
      {
        type: "3 marla",
        priceFrom: 100,
        priceTo: 200,
        _id: "62f7c605ed2b76405bd8a3e5",
      },
      {
        type: "5 marla",
        priceFrom: 200,
        priceTo: 300,
        _id: "62f7c605ed2b76405bd8a3e6",
      },
    ],
    isActive: "true",
    createdBy: {
      _id: "62ee8f58024509820bf3712b",
      email: "admin@gmail.com",
      password: "$2a$10$ihmTOxIjuV2k6RmNAx.COe7uSJIvRJkB2qK4aIAxUv0T..t2GXNWi",
      first_name: "admin",
      last_name: "abc",
      profile:
        "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg",
      designation: "",
      role: "admin",
      forgotPinCode: "",
      phone: "03123456789",
      address: "",
      city: "",
      idCard: "",
      gender: "male",
      changePassword: true,
      isActive: true,
      created_at: "2022-08-06T15:57:12.948Z",
      updated_at: "2022-08-06T15:57:12.948Z",
      __v: 0,
    },
    created_at: "2022-08-13T15:40:53.355Z",
    updated_at: "2022-09-13T20:14:13.575Z",
    __v: 0,
  },
];
function MarketRate() {
  const [dataMarketRates, setData] = useState([]);
  useEffect(() => {
    request.get("market-rates/getAll").then((response) => {
      if (response.status === 200) {
        console.log({ response });
        setData(response?.data?.data);
      }
    });
  }, []);
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
              <h3>Disclaimer: These Are Town’s Official Prices.</h3>
            </div>
            <div className="accordionSection">
              <Accordion flush>
                {isArrayCheck(dataMarketRates)
                  ? dataMarketRates.map((val, index) => {
                      return (
                        <Accordion.Item eventKey={index}>
                          <Accordion.Header>
                            <i class="fa-solid fa-angle-right me-2"></i>
                            {val?.town?.name}
                          </Accordion.Header>
                          <Accordion.Body>
                            <Table responsive>
                              <thead>
                                <tr>
                                  <th>Plot Type</th>
                                  <th>From</th>
                                  <th>Upto</th>
                                </tr>
                              </thead>
                              <tbody>
                                {val.plot.map((tableData, index) => {
                                  return (
                                    <tr>
                                      <td>{tableData.type}</td>
                                      <td>{tableData.priceFrom} Rs</td>
                                      <td>{tableData.priceTo} Rs</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })
                  : isArrayCheck(data) &&
                    data.map((val, index) => {
                      return (
                        <Accordion.Item eventKey={index}>
                          <Accordion.Header>
                            <i class="fa-solid fa-angle-right me-2"></i>
                            {val?.town?.name}
                          </Accordion.Header>
                          <Accordion.Body>
                            <Table responsive>
                              <thead>
                                <tr>
                                  <th>Plot Type</th>
                                  <th>From</th>
                                  <th>Upto</th>
                                </tr>
                              </thead>
                              <tbody>
                                {val.plot.map((tableData, index) => {
                                  return (
                                    <tr>
                                      <td>{tableData.type}</td>
                                      <td>{tableData.priceFrom} Rs</td>
                                      <td>{tableData.priceTo} Rs</td>
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
