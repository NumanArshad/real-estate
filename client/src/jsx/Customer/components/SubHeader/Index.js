import React from "react";

function Index() {
  return (
    <React.Fragment>
      <div className="subheader">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="call-email">
                <div className="call">
                  <i class="fa fa-phone"></i>
                  <p>(042/021) 111 254 727</p>
                </div>
                <div className="call">
                  <i class="fa-solid fa-envelope"></i>
                  <p>(042/021) 111 254 727</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="buttons">
                <button href="" className="btn btn-sm btn-outline-light mr-2">
                  Karachi
                </button>
                <button href="" className="btn btn-sm btn-outline-light">
                  Lahore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
