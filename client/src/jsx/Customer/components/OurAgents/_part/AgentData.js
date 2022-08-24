import React from "react";

function AgentData() {
  return (
    <div className="col-12 agentData">
      <div className="p-4 row">
        <div className="col-md-4">
          <img src="/imgs/pp.jpg" alt="" />
        </div>
        <div className="col-md-8">
          <h2>Qaiser Afzal</h2>
          <h4>Sales executive</h4>
          <hr />
          <div className="d-flex gap-3">
            <a className="mail" href="mailto:xyx@gmail.com">
              Send email
            </a>
            <a className="number" href="tel:+923224865124">
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentData;
