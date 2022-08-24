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
                      25-26/A Sector C Commercial Area Bahria Town Lahore.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-baseline contc">
                    <i className="fa-solid fa-phone"></i>
                    <span>
                      <a href="">042 111 254 727</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-baseline contc">
                    <i className="fa-regular fa-envelope"></i>
                    <span>
                      <a href="mailto:info@alisaqlain.com">
                        info@alisaqlain.com
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
                    <span>
                      Plot # 1 & 29 Main Jinnah Avenue, Plot # 109, Liberty
                      Commercial, Facing Theme Park, Bahria Town Karachi.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-baseline contc">
                    <i className="fa-solid fa-phone"></i>
                    <span>
                      <a href="">021 111 254 727</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-baseline contc">
                    <i className="fa-regular fa-envelope"></i>
                    <span>
                      <a href="mailto:info@alisaqlain.com">
                        info@alisaqlain.com
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
              <h2 className="footer-link">Important Links</h2>
              <ul className="links">
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i> Bahria Karachi
                    Agents
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i> Bahria Lahore
                    Agents
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i> Karachi Market
                    Rates
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i> Lahore Market
                    Rates
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i> Bahria Karachi
                    Projects
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i> Bahria Lahore
                    Projects
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i> Our Agents
                  </span>
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
              © Ali Saqlain Real Estate & Builders- All rights Reserved |
              Developed by XnRel
            </p>
            <div className="footerSocial d-flex justify-content-center mt-sm-0 mt-3">
              <a href="">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
