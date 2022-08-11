import React from "react";
import Data from "../../../assets/utilities/archives.json";
function Archives() {
  return (
    <div className="row mt-4">
      {Data.map((data, index) => {
        return (
          <div className="col-lg-12 mt-2">
            <div className="d-flex gap-3">
              <i className="fa fa-angle-right"></i>
              <h3>{data.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Archives;
