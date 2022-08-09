import React from "react";
import Comments from "../../../assets/utilities/comments.json";
function RecentComments() {
  return (
    <div className="row mt-4">
      {Comments.map((data, index) => {
        return (
          <div className="col-lg-12">
            <h3>{data.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default RecentComments;
