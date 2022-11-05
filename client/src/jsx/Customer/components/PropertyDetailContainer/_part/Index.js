import React from "react";
import Data from "../../../assets/utilities/bahriaTownProperty.json";
import Banner from "../../Layouts/Banner/Banner";
import { Link } from "react-router-dom";
function Index() {
  return (
    <>
      <Banner />
      <div className="blogsMain">
        <div className="container">
          <div className="row">
            {Data.map((data, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-6 px-2">
                  <div
                    key={index}
                    className="sliderCard mt-3"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <div className="px-2 pt-2 pb-0">
                      <div className="position-relative">
                        <div className="tagsMain d-flex flex-wrap gap-2">
                          {data.tags.map((tag, index) => {
                            return <div className="tagItem">{tag}</div>;
                          })}
                        </div>
                        <img src={data.img} className="w-100" alt="" />
                        <div className="priceMain d-flex justify-content-between align-items-center">
                          <h2>{data.price} RS</h2>
                          <div className="actions d-flex gap-2">
                            <i class="fa-solid fa-heart"></i>
                            <Link to="/property-detail">
                              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <h3 className="mt-3">{data.title}</h3>
                      <p>{data.description}</p>
                      <div className="d-flex gap-2 flex-wrap">
                        <p className="p-2 d-flex gap-1 mb-0 mt-2">
                          <i class="fa-solid fa-bed"></i>
                          <h6 className="tag"> {data.bedrooms}</h6>
                        </p>
                        <p className="p-2 d-flex gap-1 mb-0 mt-2">
                          <i class="fa-solid fa-shower"></i>
                          <h6 className="tag"> {data.bathrooms}</h6>
                        </p>
                        {/* <p className="p-2 d-flex gap-1 mb-0 mt-2">
                          <i class="fa-solid fa-car"></i>
                          <h6 className="tag"> {data.garage}</h6>
                        </p> */}
                        <p className="p-2 d-flex gap-1 mb-0 mt-2">
                          <i class="fa-solid fa-ruler"></i>
                          <h6 className="tag"> {data.house}</h6>
                        </p>
                      </div>
                      <div className="d-flex mt-2 justify-content-between align-items-center">
                        <h5 className="mb-0">{data.category}</h5>
                        <Link to="/property-detail">
                          <button className="detailsBtn">Details</button>
                        </Link>
                      </div>
                      <hr className="mb-0 mt-2" />
                      <p className="px-2 py-3 d-flex gap-2 mb-0 justify-content-between align-items-center">
                        <div className="d-flex gap-1">
                          <i className="fa-solid fa-user"></i>
                          <h6>by {data.author}</h6>
                        </div>
                        <div className="d-flex gap-1">
                          <i class="fa-solid fa-paperclip"></i>
                          <h6>9 months ago</h6>
                        </div>
                      </p>
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
