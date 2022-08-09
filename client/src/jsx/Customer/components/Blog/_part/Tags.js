import React from "react";
import Data from "../../../assets/utilities/tags.json";
function Tags() {
  return (
    <div className="tagMain">
      <h3>Tags</h3>
      <div className="d-flex gap-2">
        {Data.map((data, index) => {
          return (
            <div key={index} className="postTag">
              {data.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tags;
