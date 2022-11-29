import React from "react";
import moment from "moment"

function Details(propertyDetail) {

  const { updated_at, price, status, marla, landArea, builtOn, type, bedRoomCount, bathRoomCount, carGarage } = propertyDetail
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <h4 className="mb-sm-0 mb-2">Details</h4>
        <div className="d-flex gap-2 flex-wrap">
          <i class="fa-solid fa-calendar"></i>
          <p className="timeUpdated">Updated on {moment(updated_at).format("LLL")}</p>
        </div>
      </div>
      <hr />
      <div className="row maps bg-primaryColor rounded-2 mx-0 p-3">
        {/* <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Property ID:</h2>
              <p>22357</p>
            </div>
          </div>
        </div> */}
        <div className="col-sm-6 mt-3">
          <div className="border-bottom" >
            <div className="d-flex w-100 justify-content-between">
              <h2>Bathrooms:</h2>
              <p>{bathRoomCount ?? 0}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Price</h2>
              <p>{price}</p>
            </div>
          </div>
        </div>
        {/* <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Garage:</h2>
              <p>{Number(carGarage)}</p>
            </div>
          </div>
        </div> */}
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Property Size:</h2>
              <p>{marla}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Year Built:</h2>
              <p>{moment(builtOn).format("YYYY")}</p>
            </div>
          </div>
        </div>
        {/* <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Land Area:</h2>
              <p>{marla}</p>
            </div>
          </div>
        </div> */}
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Property Type</h2>
              <p>{type}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Bedrooms:</h2>
              <p>{bedRoomCount ?? 0}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Property Status:</h2>
              <p>For {status === "both" ? `Rent & Sale` : `${status?.[0].toUpperCase()}${status?.slice(1)}`}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Rooms:</h2>
              <p>{bedRoomCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
