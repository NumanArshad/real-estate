import React from "react";
import Data from "../../../assets/utilities/blogsData.json";
import Banner from "../../Layouts/Banner/Banner";
import { Link } from "react-router-dom";
import moment from "moment";
import { getImageUrlByName, isArrayCheck } from "../../../../../utils/helper";
import NoDataLoaderWrapper from "../../../../components/noDataLoaderWrapper";

//blog list card
function Index({ data }) {
  return (
    <>
      <Banner />
      <div className="blogsMain">
        <div className="container">
          <NoDataLoaderWrapper data={data}>
            <div className="row">
              {isArrayCheck(data)
                ? data?.map((blog, index) => {
                  return (
                    <div className="col-md-4 px-2">
                      <div
                        key={index}
                        className="sliderCard mt-3"
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                      >
                        <div className="p-2 pb-3">
                          <img src={getImageUrlByName(blog?.image)} className="w-100" alt=""
                            onError={event => {
                              console.log("image load error")
                              event.target.src = "/imgs/house.jpeg"
                            }}
                          />
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
                          <Link to={`/blogs/${blog?._id}`}>
                            <span>Continue reading</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
                : Data.map((data, index) => {
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
                          <Link to="/blog-detail">
                            <span>Continue reading</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </NoDataLoaderWrapper>
        </div>
      </div>
    </>
  );
}

export default Index;
