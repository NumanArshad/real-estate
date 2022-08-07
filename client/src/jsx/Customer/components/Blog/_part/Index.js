import React from "react";
import { data } from "../../../assets/utilities/blogsDetail";
function Index() {
  return (
    <div className="blogsMain">
      <div className="container">
        <div className="row">
              {data.map((data, index) => {
                  return (
                      <div className="col-md-4 px-2">
                      <div
                    key={index}
                    className="sliderCard mt-3"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <div className="p-2 pb-3">
                      <img src={data.img} className="w-100" alt="" />
                      <div className="d-flex gap-3">
                        <p className="p-2 d-flex gap-2 mb-0 mt-2">
                          <i class="fa-solid fa-calendar"></i>
                          <h6> {data.date}</h6>
                        </p>
                        <p className="p-2 d-flex gap-2 mb-0 mt-2">
                          <i class="fa-solid fa-tag"></i>
                          <h6 className="tag"> {data.tag}</h6>
                        </p>
                      </div>
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>
                      <span>Continue reading</span>
                    </div>
          </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Index;
