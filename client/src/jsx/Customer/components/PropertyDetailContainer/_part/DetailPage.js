import React from "react";
import Banner from "../../Layouts/Banner/Banner";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Address from "./Address";
import Details from "./Details";
import Features from "./Features";
import MortageCalculator from "./MortageCalculator";
import Contactinformation from "./Contactinformation";
import { getImageUrlByName } from "../../../../../utils/helper";
import ContactAgent from "../../OurAgents/_part/ContactAgent";
function DetailPage({ data }) {
  const { title, description, price, status, city, area, images, type, bedRoomCount, bathRoomCount, carGarage } = data ?? {}


  return (
    <>
      <div className="bg-white p-4">
        <div className="container">
          <div className="mt-5 mb-3">
            <div className="d-flex gap-2 align-items-center breadCrumb">
              <Link t="/">Home</Link>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
              <Link t="/">Commercial</Link>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
              <div className="active">
                {/* New Deal 5 Marla Commercial Plot for Sale in Bahria Orchard
                Lahore */}
                {title}
              </div>
            </div>
          </div>
          <div className="d-flex  jusify-content-between align-items-start propertyDetailMain">
            <h1>{title} </h1>
            <h1 className="ml-auto">Rs{price}</h1>
          </div>
          <div className="tags d-flex gap-2">
            {status === "both" ? <> <div className="tag">For Rent</div>
              <div className="tag">For Sale</div></> :
              <div className="tag">For {status?.[0].toUpperCase()}{status?.slice(1)}</div>
            }
          </div>
          <div className="d-flex gap-2">
            <i class="fa-solid fa-location-dot"></i>
            <p>{area}</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Carousel fade className="detailCarousel">
                {images?.length > 0 ? images?.map((imageName) => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={getImageUrlByName(imageName)}
                      alt="Second slide"
                      onError={event => {
                        console.log("image load error")
                        event.target.src = "/imgs/house.jpeg"
                      }} />
                  </Carousel.Item>
                )) : <img
                  className="d-block w-100"
                  src="/imgs/house.jpeg"

                  alt="first slide"
                />}
                {/* <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/imgs/slide1.jpeg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/imgs/slide2.jpeg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/imgs/slide3.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item> */}
              </Carousel>
              <div className="propertyType mt-4 d-flex flex-wrap justify-content-between align-items-center">
                <div className="seperator"></div>
                <div className="text-center">
                  <strong>{type}</strong>
                  <p className="mb-0">Property Type</p>
                </div>
                <div className="seperator"></div>
                <div className="text-center" hidden={!bedRoomCount}>
                  <div className="d-flex gap-2 justify-content-center">
                    <i class="fa-solid fa-bed"></i>
                    {bedRoomCount}
                  </div>
                  <p className="mb-0">Bedrooms</p>
                </div>
                <div className="seperator"></div>
                <div className="text-center" hidden={!bathRoomCount}>
                  <div className="d-flex gap-2 justify-content-center">
                    <i class="fa-solid fa-shower"></i>
                    {bathRoomCount}
                  </div>
                  <p className="mb-0">Bathrooms</p>
                </div>
                <div className="seperator"></div>

                {/* {carGarage && (
                  <>
                    {" "}
                    <div className="seperator"></div>
                    <div className="text-center">
                      <div className="d-flex gap-2 justify-content-center">
                        <i class="fa-solid fa-car"></i>1
                      </div>
                      <p className="mb-0">Garage</p>
                    </div>
                  </>
                )} */}
                {/* <div className="seperator"></div>
                <div className="text-center">
                  <div className="d-flex gap-2 justify-content-center">
                    <i class="fa-solid fa-ruler"></i>1
                  </div>
                </div>
                <div className="seperator"></div>
                <div className="text-center">
                  <div className="d-flex gap-2 justify-content-center">
                    <i class="fa-solid fa-calendar"></i> <strong>2021</strong>
                  </div>
                  <p className="mb-0">Year Built</p>
                </div>
                <div className="seperator"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blogsMain">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="detailMain rounded-2">
                <div className="p-sm-5 p-3 descriptionMain">
                  <h1 className="px-0">Description</h1>
                  <hr />
                  <p>{description}</p>
                  {/* <p>
                    Samara's REAL ESTATE & BUILDERS offers 1 Kanal Furnished
                    Home for sale. Limited Time Golden opportunity to enjoy
                    international life style of BAHRIA ORCHARD.
                  </p>
                  <div className="propertyDetail">
                    <strong>
                      <h2 className="mb-3 ">Property Detail:</h2>
                    </strong>
                    <p className="mb-0">Block Southern Block</p>
                    <p className="mb-0">Bahria Orchard – Phase 1</p>
                    <p className="mb-0">Size: 1 Kanal</p>
                    <p className="mb-0">Type: Residential Home</p>
                    <p className="mb-0">
                      Feature: Fully Furnished Home, Main Boulevard
                    </p>
                    <p className="mb-0">Total Price PKR.70,000,000 –</p>
                  </div>
                  <div className="propertySpecification mt-3">
                    <strong>
                      <h2 className="mb-3 ">Specifications:</h2>
                    </strong>
                    <p className="mb-0">5 Bed Rooms with Attach Washrooms</p>
                    <p className="mb-0">Fully Tilled Flooring</p>
                    <p className="mb-0">
                      2 Wonderful Designed Kitchens with All Kitchen Accessories
                    </p>
                    <p className="mb-0">Beautiful Designed Walls</p>
                    <p className="mb-0">
                      Location Near to Commercial area, Hospital, Masjid and
                      Park
                    </p>
                  </div>
                  <div className="propertySpecialFeatueres mt-3">
                    <strong>
                      <h2 className="mb-3 ">
                        Special Features Of Bahria Town:
                      </h2>
                    </strong>
                    <p className="mb-0">5 Bed Rooms with Attach Washrooms</p>
                    <p className="mb-0">Fully Tilled Flooring</p>
                    <p className="mb-0">
                      2 Wonderful Designed Kitchens with All Kitchen Accessories
                    </p>
                    <p className="mb-0">Beautiful Designed Walls</p>
                    <p className="mb-0">
                      Location Near to Commercial area, Hospital, Masjid and
                      Park
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="sidebarCard mt-4 rounded-2">
                <Address area={area} city={city} />
              </div>
              <div className="sidebarCard mt-4 rounded-2">
                <Details  {...data} />
              </div>
              <div className="sidebarCard mt-4 rounded-2">
                <Features />
              </div>
              {/* <div className="sidebarCard mt-4 rounded-2">
                <MortageCalculator />
              </div> */}
              {/* <div className="sidebarCard mt-4 rounded-2">
                <Contactinformation {...data?.createdBy} />
              </div> */}
            </div>
            <div className="col-md-4">

              {/* <div className="col-md-4 pr-md-0"> */}
              <div className="row bg-white my-3 mx-0">
                <ContactAgent   {...data?.createdBy} />
              </div>
              {/* <div className="row bg-white my-3 mx-0">
              <SerachAgent />
            </div> */}
              {/* </div> */}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
