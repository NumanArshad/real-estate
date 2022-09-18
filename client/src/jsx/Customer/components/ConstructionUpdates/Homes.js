import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import request from "../../../../utils/request";
import { getImageUrlByName } from "../../../../utils/helper";
function Homes() {

  const { townId } = useParams()

  const [townDetail, setDetail] = useState(undefined)

  useEffect(() => {
    if (townId) {
      request.get(`/towns/townDetail/${townId}`).then((response) => {
        setDetail(response?.data?.data)
      })
    }
  }, [townId])

  return (
    <div className="homesMain">
      <div className="homesBanner" style={{ "backgroundImage": `url(${townDetail?.townInformation?.gallery[0] ? getImageUrlByName(townDetail?.townInformation?.gallery[0]) : "/imgs/house.jpeg"})` }}>
        <div className="text-center py-5">
          {/* <img src={getImageUrlByName(townDetail?.townInformation?.gallery[0])} width="200px" alt="" /> */}
        </div>
        <h1>{townDetail?.name}</h1>
        <br />
        <p>A Place You Desire!</p>
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-4 details">
            <h1 className="mb-4">Why {townDetail?.name}</h1>
            {townDetail?.townInformation?.WhyChooseUs?.length ? townDetail?.townInformation?.WhyChooseUs?.map((tag) =>
              <div className="d-flex gap-2">
                <i class="fa-solid fa-arrow-right"></i>
                <p>
                  {tag}
                </p>
              </div>) : Array.from({ length: 5 }, () => <div className="d-flex gap-2">
                <i class="fa-solid fa-arrow-right"></i>
                <p>
                  Value of the properties at first-rate location increases at a
                  rapid pace
                </p>
              </div>
              )
            }

          </div>
          <div className="col-md-4 details">
            <h1 className="mb-4">Location of {townDetail?.name}</h1>
            {townDetail?.townInformation?.LocationGuide?.length ? townDetail?.townInformation?.LocationGuide?.map((tag) =>
              <div className="d-flex gap-2">
                <i class="fa-solid fa-location-dot"></i>
                <p>
                  {tag}
                </p>
              </div>) : Array.from({ length: 5 }, () => <div className="d-flex gap-2">
                <i class="fa-solid  fa-location-dot"></i>
                <p>
                  Value of the properties at first-rate location increases at a
                  rapid pace
                </p>
              </div>)}

          </div>
          <div className="col-md-4 details">
            <h1 className="mb-4">Affordable payment Plan</h1>

            {townDetail?.townInformation?.AffordablePaymentPlan?.length ? townDetail?.townInformation?.AffordablePaymentPlan?.map((tag) =>
              <div className="d-flex gap-2">
                <i class="fa-solid  fa-money-bill"></i>
                <p>
                  {tag}
                </p>
              </div>) : Array.from({ length: 5 }, () => <div className="d-flex gap-2">
                <i class="fa-solid  fa-money-bill"></i>
                <p>
                  Value of the properties at first-rate location increases at a
                  rapid pace
                </p>
              </div>
              )
            }

          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 paymentPlans">
            <h1 className="text-center">Payment Plans</h1>
            <div className="container">
              <div className="row">
                <div className="col-12 mt-3">
                  <img src={getImageUrlByName(townDetail?.townInformation?.paymentPlanImage)}
                    className="w-100" alt=""
                    onError={event => {
                      console.log("image load error")
                      event.target.src = "/imgs/payment-plan.png"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <h3 className="text-center mb-3">Floor Plan</h3>
            <img
              src={getImageUrlByName(townDetail?.townInformation?.floorPlanImage)}
              className="w-100 rounded-3"
              onError={event => {
                console.log("image load error")
                event.target.src = "/imgs/floor-plan.jpg"
              }}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-center mb-3">{townDetail?.name} Gallery</h3>
            <div className="row">
              {townDetail?.townInformation?.gallery?.length ?
                townDetail?.townInformation?.gallery?.slice(0, 4).map((galleryImage) =>
                  <div className="col-md-6 px-2 pb-2">
                    <img
                      src={getImageUrlByName(galleryImage)}
                      className="w-100 rounded-3"
                      alt=""
                    />
                  </div>
                ) :
                Array.from({ length: 4 }, (_, index) => <div className="col-md-6 px-2 pb-2">
                  <img
                    src={`/imgs/multi${index + 1}.jpeg`}
                    className="w-100 rounded-3"
                    alt=""
                  />
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
      <footer className="homesFooter">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-white text-center mb-4">HEAD OFFICE</h4>
              <p className="text-white text-center mb-2">
                <i class="fa-solid fa-location-arrow me-2"></i>
                80-B Commercial, Rafi Block, Bahria Town, Lahore Lahore, Punjab,
                Pakistan-5400
              </p>
              <p className="text-white text-center mb-2">
                <i class="fa-solid fa-phone me-2"></i>
                03257111000
              </p>
              <p className="text-white text-center mb-2">
                <a href="" className="text-white">
                  <i class="fa-solid fa-envelope me-2"></i>
                  info@samara.com
                </a>
              </p>
              <h4 className="text-white text-center mb-4 mt-5">
                KARACHI OFFICE
              </h4>
              <p className="text-white text-center mb-2">
                <i class="fa-solid fa-location-arrow me-2"></i>
                80-B Commercial, Rafi Block, Bahria Town, Lahore Lahore, Punjab,
                Pakistan-5400
              </p>
              <p className="text-white text-center mb-2">
                <i class="fa-solid fa-phone me-2"></i>
                03257111000
              </p>
              <p className="text-white text-center mb-2">
                <a href="" className="text-white">
                  <i class="fa-solid fa-envelope me-2"></i>
                  info@samara.com
                </a>
              </p>
            </div>
            <div className="col-md-4 ourLocation">
              <h4 className="text-white text-center mb-4">OUR LOCATION</h4>
              <iframe
                title="AddressMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13633.927582586673!2d74.20333912467973!3d31.318062034266234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391854d3952faf09%3A0xc3bccb8f27ae7114!2sBahria%20Orchard%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1659552685820!5m2!1sen!2s"
                style={{ height: "300px", width: "100%", border: "0px" }}
              ></iframe>
            </div>
            <div className="col-md-4 contactUs">
              <h4 className="text-white text-center mb-4">CONTACT US</h4>
              <Form className="text-center">
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Contact Number" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homes;
