import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row mx-0">
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <h2 className="footer-link">Head Office Lahore</h2>
              <ul className="links">
                <li>
                  <div className="d-flex align-items-baseline contc">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>
                      80-B Commercial, Rafi Block, Bahria Town, Lahore Lahore,
                      Punjab, Pakistan-5400
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-baseline contc">
                    <i className="fa-solid fa-phone"></i>
                    <span>
                      <a href="">03257111000</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-baseline contc">
                    <i className="fa-regular fa-envelope"></i>
                    <span>
                      <a href="mailto:info@samarasestate.com">
                        info@samarasestate.com
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <h2 className="footer-link">Karachi Office</h2>
              <ul className="links">
                <li>
                  <div className="d-flex align-items-baseline contc">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Comming Soon</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-baseline contc">
                    <i className="fa-solid fa-phone"></i>
                    <span>
                      <a href="">Comming Soon</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-baseline contc">
                    <i className="fa-regular fa-envelope"></i>
                    <span>
                      <a href="mailto:">Comming Soon</a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <h2 className="footer-link">Important Links</h2>
              <ul className="links">
                <li>
                  <Link to="/property">
                    <span>
                      <i className="fa-solid fa-chevron-right"></i> Properties
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/agent">
                    <span>
                      <i className="fa-solid fa-chevron-right"></i> Our Agents
                    </span>
                  </Link>
                </li>
                <li>
                  <span>
                    <Link className="text-white" to={"/privacy-policy"}>
                      <i className="fa-solid fa-chevron-right"></i> Terms and
                      Conditions
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-duration="1500"
            ></div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="container">
          <div className="d-sm-flex justify-content-sm-between justify-content-center align-items-center">
            <p>
              © Samara's Real Estate & Builders- All rights Reserved | Developed
              by Samara's
            </p>
            <div className="footerSocial d-flex justify-content-center mt-sm-0 mt-3">
              <a href="https://www.facebook.com/samarasestate" target="_blank">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/3257111000" target="_blank">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/samara-s-estate-builders/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://instagram.com/samarasestate_andbuilders?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              {/* <a href="" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
