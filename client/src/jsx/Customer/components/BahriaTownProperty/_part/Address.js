import React from "react";

function Address() {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <h4 className="mb-sm-0 mb-2">Address</h4>
        <button className="openMap">
          <i class="fa-solid fa-map me-2"></i>Open on Google Maps
        </button>
      </div>
      <hr />
      <div className="row maps">
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>City</h2>
              <p>Lahore</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Country</h2>
              <p>Pakistan</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="border-bottom">
            <div className="d-flex w-100 justify-content-between">
              <h2>Area</h2>
              <p>Bahria Orchard</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 mt-4">
          <iframe
            title="AddressMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13633.927582586673!2d74.20333912467973!3d31.318062034266234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391854d3952faf09%3A0xc3bccb8f27ae7114!2sBahria%20Orchard%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1659552685820!5m2!1sen!2s"
            style={{ height: "400px", width: "100%", border: "0px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Address;
