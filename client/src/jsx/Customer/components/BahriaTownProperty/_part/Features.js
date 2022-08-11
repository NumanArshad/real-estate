import React from "react";

function Features() {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <h4 className="mb-sm-0 mb-2">Features</h4>
      </div>
      <hr />
      <div className="row maps">
        <div className="col-md-4 mt-3">
          <div className="d-flex gap-2 justify-content-center">
            <i class="fa-solid fa-check-double"></i>
            <p className="mb-0">Air Conditioning</p>
          </div>
        </div>
        <div className="col-md-4 mt-3">
          <div className="d-flex gap-2 justify-content-center">
            <i class="fa-solid fa-check-double"></i>
            <p className="mb-0">CCtv Camera</p>
          </div>
        </div>
        <div className="col-md-4 mt-3">
          <div className="d-flex gap-2 justify-content-center">
            <i class="fa-solid fa-check-double"></i>
            <p className="mb-0">Central Music System</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
