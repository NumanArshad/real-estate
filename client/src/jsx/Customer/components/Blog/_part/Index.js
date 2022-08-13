import React from "react";
import Data from "../../../assets/utilities/blogsData.json";
import Banner from "../../Layouts/Banner/Banner";
import { Link } from "react-router-dom";
import moment from "moment";

function Index({ data }) {
  return (
    <>
      <Banner />
      <div className="blogsMain">
        <div className="container">
          <div className="row">
            {data.map((blog, index) => {
              return (
                <div className="col-md-4 px-2">
                  <div
                    key={index}
                    className="sliderCard mt-3"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <div className="p-2 pb-3">
                      <img src={blog?.image} className="w-100" alt="" />
                      <div className="d-flex gap-3">
                        <p className="p-2 d-flex gap-2 mb-0 mt-2">
                          <i class="fa-solid fa-calendar"></i>
                          <h6> {moment(blog.updated_at).format("LLL")}</h6>
                        </p>
                        <p className="p-2 d-flex gap-2 mb-0 mt-2">
                          <i class="fa-solid fa-tag"></i>
                          <h6 className="tag"> {`blog`}</h6>
                        </p>
                      </div>
                      <h3>{blog?.name}</h3>
                      <p>{blog?.description}</p>
                      <Link to="/blog-detail">
                        <span>Continue reading</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
