import React from "react";
import { getImageUrlByName } from "../../../../../utils/helper";

function AgentData({ profile, first_name, last_name, phone, email, designation }) {
  return (
    <div className="col-12 agentData">
      <div className="p-4 row">
        <div className="col-md-4">
          <img src={getImageUrlByName(profile)} alt=""
            onError={event => {
              console.log("image load error")
              event.target.src = "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg"
            }} />
        </div>
        <div className="col-md-8">
          <h2>{`${first_name} ${last_name}`}</h2>
          <h4>{designation}</h4>
          <hr />
          <div className="d-flex gap-3">
            <a className="mail" href={`mailto:${email}`}>
              Send email
            </a>
            <a className="number" href={`tel:${phone}`}>
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentData;
