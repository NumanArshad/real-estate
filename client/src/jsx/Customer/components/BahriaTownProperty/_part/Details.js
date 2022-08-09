import React from "react";

function Details() {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <h4 className="mb-sm-0 mb-2">Details</h4>
        <div className="d-flex gap-2 flex-wrap">
          <i class="fa-solid fa-calendar"></i>
          <p className="timeUpdated">Updated on March 26, 2022 at 7:41 pm</p>
        </div>
      </div>
      <hr />
      <div className="row maps bg-primaryColor rounded-2 mx-0 p-3">
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Property ID:</h2>
              <p>22357</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Bathrooms:</h2>
              <p>6</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Price</h2>
              <p>70,000,000</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Garage:</h2>
              <p>1</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Property Size:</h2>
              <p>1</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Year Built:</h2>
              <p>2021</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Land Area:</h2>
              <p>4500</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Property Type</h2>
              <p>House</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Bedrooms:</h2>
              <p>5</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Property Status:</h2>
              <p>For Sale</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Rooms:</h2>
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
