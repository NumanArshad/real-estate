import React from "react";
import HomeBanner1 from "../../../assets/images/HomeBanner1.jpg";
import HomeBanner2 from "../../../assets/images/HomeBanner2.jpg";
import HomeBanner3 from "../../../assets/images/HomeBanner3.jpg";
import HomeBanner4 from "../../../assets/images/HomeBanner4.jpg";
import HomeBanner5 from "../../../assets/images/HomeBanner5.jpg";
import Carousel from "react-bootstrap/Carousel";
import Search from "../_part/Search";
function Index() {
  return (
    <React.Fragment>
      <div className="homeCarousel">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={HomeBanner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <div data-aos="fade-down" data-aos-duration="1500">
                <h3>Samara's Estate & Builders</h3>
                <p>Bahria Town Lahore</p>
                <button href="">View Project</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={HomeBanner2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div data-aos="fade-down" data-aos-duration="1500">
                <h3>Samara's Estate & Builders</h3>
                <p>Bahria Town Lahore</p>
                <button href="">View Project</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={HomeBanner3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div data-aos="fade-down" data-aos-duration="1500">
                <h3>Samara's Estate & Builders</h3>
                <p>Bahria Town Lahore</p>
                <button href="">View Project</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={HomeBanner4}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div data-aos="fade-down" data-aos-duration="1500">
                <h3>Samara's Estate & Builders</h3>
                <p>Bahria Town Lahore</p>
                <button href="">View Project</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={HomeBanner5}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div data-aos="fade-down" data-aos-duration="1500">
                <h3>Samara's Estate & Builders</h3>
                <p>Bahria Town Lahore</p>
                <button href="">View Project</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <Search /> */}
      </div>
    </React.Fragment>
  );
}

export default Index;
