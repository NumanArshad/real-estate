import moment from "moment";
import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useHistory } from "react-router-dom";
import { homeDataContext } from "../../../../../context/HomeDataContext";
import { getImageUrlByName } from "../../../../../utils/helper";
import HomeBanner5 from "../../../assets/images/HomeBanner5.jpg";


function Blogs() {

  const { blogsList } = useContext(homeDataContext)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  console.log({ blogsList })
  const history = useHistory()
  return (
    <div className="blogsMain">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div data-aos="fade-down" data-aos-duration="1500">
              <h2> Blogs & News </h2>
              <p>Our Blogs are Valuable Source of Financial Decision Making </p>
            </div>
            <Carousel responsive={responsive}>
              {blogsList?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="sliderCard mx-2 mt-5"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    style={{ cursor: "pointer" }}

                    onClick={(event) => {
                      console.log("thee");
                      history.push(`/blogs/${data?._id}`);
                    }}
                  >
                    <div className="p-2">
                      <img src={getImageUrlByName(data?.image)} className="w-100" alt=""
                        onError={event => {
                          console.log("image load error")
                          event.target.src = "imgs/house.jpeg"
                        }} />
                      <div className="d-flex gap-3">
                        <p className="p-2 d-flex gap-2 mb-0 mt-2">
                          <i class="fa-solid fa-calendar"></i>
                          <h6> {moment(data?.updated_at).format('LL')}</h6>
                        </p>
                        <p className="p-2 d-flex gap-2 mb-0 mt-2">
                          <i class="fa-solid fa-tag"></i>
                          <h6 className="tag"> {data?.tag ?? `Blog`}</h6>
                        </p>
                      </div>
                      <h3>{data?.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: data?.content }} ></div>
                      {/* <div>{data?.content}</div> */}
                      <span>Continue reading</span>
                    </div>
                    {/* <div className="p-2">
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
                </div> */}
                    <hr className="mb-0 mt-2" />
                    {data?.createdBy && <p className="p-2 d-flex gap-2">
                      <i className="fa-solid fa-user"></i>
                      <h6 >by {`${data?.createdBy?.first_name} ${data?.createdBy?.last_name}`}</h6>
                    </p>}
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
