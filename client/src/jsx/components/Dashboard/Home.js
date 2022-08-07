import React, { Fragment, useEffect, useRef, useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllRooms, getAllUsers } from "../../../store/actions/User/index.js";
import { isArrayCheck, NOT_FOUND_IMAGE } from "../../../utils/helper.js";

const Home = () => {
  const { users_listing } = useSelector((state) => state._saleAgent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-md-3 text-center">
          <div className="card">
            <div className="card-body p-4">
              <div className="donut-chart-sale">
                <i className="fa fa-calendar"></i>
              </div>
              <h2 className="fs-24 text-black font-w600 mb-0">
                {isArrayCheck(users_listing) ? users_listing.length : 0}
              </h2>
              <span className="fs-14">SaleAgent/Client</span>
            </div>
          </div>
        </div>
        {/* <div className="col-md-3 text-center">
          <div className="card">
            <div className="card-body p-4">
              <div className="donut-chart-sale donut-chart-sale-1">
                <i className="fa fa-user"></i>
              </div>
              <h2 className="fs-24 text-black font-w600 mb-0">
                {isArrayCheck(users_listing) ? users_listing.length : 0}
              </h2>
              <span className="fs-14">Users</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card">
            <div className="card-body p-4">
              <div className="donut-chart-sale donut-chart-sale-2">
                <i className="fa fa-calendar"></i>
              </div>
              <h2 className="fs-24 text-black font-w600 mb-0">5 Left</h2>
              <span className="fs-14">Dummy Card</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card">
            <div className="card-body p-4">
              <div className="donut-chart-sale donut-chart-sale-3">
                <i className="fa fa-calendar"></i>
              </div>
              <h2 className="fs-24 text-black font-w600 mb-0">8 Hours</h2>
              <span className="fs-14">Dummy Card</span>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="card">
        <div className="card-header">
          <h4 className="card-title">Users Listing</h4>
        </div>
        <div className="card-body">
          <DataTable
            columns={COLUMN_HERADER.user_listing_header}
            data={row}
            defaultSortFieldId={1}
            pagination
            responsive
          />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
