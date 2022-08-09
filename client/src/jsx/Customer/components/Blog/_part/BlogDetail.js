import React from "react";
import Data from "../../../assets/utilities/blogsData.json";
import Banner from "../../Layouts/Banner/Banner";
import { Link } from "react-router-dom";
import RelatedPost from "../../../assets/utilities/blogsData.json";

import Tags from "./Tags";
import RecentComments from "./RecentComments";
import Archives from "./Archives";
function BlogDetail() {
  return (
    <>
      <Banner />
      <div className="blogsMain">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="detailMain">
                <div className="p-sm-5 p-3">
                  <h1 className="px-0">
                    Return On Plots In Bahria Town Karachi
                  </h1>
                  <div className="d-flex gap-3 flex-wrap align-items-center mt-3">
                    <h2>by Irfan Ahmad</h2>
                    <p className="p-2 d-flex gap-2 mb-0 mt-2">
                      <i class="fa-solid fa-calendar"></i>
                      <h6> April 26, 2022</h6>
                    </p>
                    <p className="p-2 d-flex gap-2 mb-0 mt-2">
                      <i class="fa-solid fa-tag"></i>
                      <h6 className="tag"> Blog</h6>
                    </p>
                    <p className="p-2 d-flex gap-2 mb-0 mt-2">
                      <i class="fa-regular fa-message"></i>
                      <h6 className="tag">0</h6>
                    </p>
                  </div>
                </div>
                <img className="w-100" src="/imgs/apartment.jpg" alt="" />
                <div className="px-sm-5 px-3 py-3">
                  <h3 className="mb-5">
                    <em>
                      Located in the largest suburb of the country, residential
                      and commercial{" "}
                      <strong>plots in Bahria Town Karachi</strong> yield more
                      profits than any other housing society of the country.
                    </em>
                  </h3>
                  <img className="w-100" src="/imgs/apartment.jpg" alt="" />
                  <h4>Cultural Continuity Of Housing Societies</h4>
                  <p>
                    The culture of housing society finds its roots in the
                    British rule of India. After the partition in 1947, the
                    industry kept on growing. Today,{" "}
                    <strong>plots in Bahria Town Karachi</strong> symbolize the
                    elegance of British initiative.{" "}
                    <strong>Smara's Estate</strong> is the most consulted a
                    company when it comes{" "}
                    <strong>
                      <span className="redText">
                        to buy plot in Bahria Town Lahore.
                      </span>
                    </strong>
                  </p>
                  <p>
                    Why to invest in plots for sale in Bahria Town Karachi and
                    Lahore? Continue reading and you would find the answer!
                  </p>
                  <ul>
                    <li>
                      Exactly 90 percent of the world’s millionaires collect
                      their money from the real estate sector. This is because
                      real estate is the safest investment area.
                    </li>
                    <li>
                      Land, plots, and apartments get their value multiplied at
                      a quicker rate. Therefore, it is easier for investors to
                      put their money into the property market.
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="px-sm-5 px-3 pb-5">
                  <Tags />
                </div>
              </div>
              <h4 className="mt-4">Related Posts</h4>
              <div className="row px-sm-2 px-0">
                {RelatedPost.map((data, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 px-2">
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
            </div>
            <div className="col-md-4">
              <div className="sidebarCard">
                <h4>Recent posts</h4>
                <div className="row mt-4">
                  {RelatedPost.map((data, index) => {
                    return (
                      <div className="col-lg-12">
                        <h3>{data.title}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="sidebarCard mt-5">
                <h4>Recent Comments</h4>
                <RecentComments />
              </div>
              <div className="sidebarCard mt-5">
                <h4>Archives</h4>
                <Archives />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
