import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { isLoading } from "../../../../store/actions/Loader";
import request from "../../../../utils/request";
import makeToast from "../../../../utils/Toaster";
import LoaderPulse from "../../../components/LoaderPulse";
function Contact() {

  const DEFAULT = {
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    message: ""
  }

  const [data, setData] = useState(DEFAULT)
  const { api_loading } = useSelector((state) => state._loader);
  const dispatch = useDispatch()
  const handleSubmit = event => {
    event.preventDefault()
    const payloadObjectValues = Object.values(data)
    if (payloadObjectValues.filter(Boolean).length === payloadObjectValues.length) {
      dispatch(isLoading(true));

      request.post("/contactUs/addContactUs", data).then((response) => {
        console.log("contact us added", response)
        if (response.status === 200) {
          makeToast("success", response.data.message)
          setData(DEFAULT)
        }
      }).finally(() => {
        dispatch(isLoading(false))
      }
      )
    }

    else {
      makeToast("error", "Kindly fill all the fields!");
    }
  }

  console.log({ api_loading })

  const handleChange = event => {
    const { name, value } = event.target
    setData(prev => ({
      ...prev, [name]: value
    }))
    //      makeToast("error", "Kindly fill all the fields!");

  }

  return (
    <div className="contactMain ">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12">
            <h2>Contact Us</h2>
            <p>
              We offer unique services anytime and are available for you when
              you need.
            </p>
          </div>
          <div className="col-md-6">
            <div className="sidebarCard mt-4 rounded-2">
              <p>
                We create the most diverse range of properties so you can have
                an optimal range of choice.
              </p>
              <Form className="contactInformationMain pt-3">
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="font-14">First Name</Form.Label>
                      <Form.Control
                        type="text"

                        placeholder="Enter Your First Name"
                        name="firstName"
                        value={data.firstName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="font-14">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Last Name"
                        name="lastName"
                        value={data.lastName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="font-14">Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="font-14">Contact No</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Mobile Number"
                        name="contactNo"
                        value={data.contactNo}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="font-14">Message</Form.Label>
                      <Form.Control
                        placeholder="Message"
                        as="textarea"
                        name="message"
                        value={data.message}
                        onChange={handleChange}
                        rows={5}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-12 text-center mt-3">
                    <button className="w-100 py-2" onClick={handleSubmit}>    {api_loading ? (
                      <LoaderPulse active={true} color={"#fff"} />
                    ) : (
                      "Submit"
                    )}</button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row mt-4">
              <div className="col-md-6 mb-3 px-2">
                <div className="officeLocation rounded-2">
                  <h2 className="font-16 text-white font-weight-bold">
                    Bahria Town Lahore Office (Head Office)
                  </h2>
                  <p className="text-white mb-2 mt-3 font-14">
                    80-B Commercial, Rafi Block, Bahria Town, Lahore Lahore,
                    Punjab, Pakistan-5400
                  </p>
                  <p className="text-white mb-2 font-14">Mob : 03257111000</p>
                  <p className="text-white mb-0 font-14">UAN: 03257111000</p>
                </div>
              </div>
              <div className="col-md-6 mb-3 px-2">
                <div className="officeLocation rounded-2">
                  <h2 className="font-16 text-white font-weight-bold">
                    Bahria Town Lahore Office (Head Office)
                  </h2>
                  <p className="text-white mb-2 mt-3 font-14">
                    80-B Commercial, Rafi Block, Bahria Town, Lahore Lahore,
                    Punjab, Pakistan-5400
                  </p>
                  <p className="text-white mb-2 font-14">Mob : 03257111000</p>
                  <p className="text-white mb-0 font-14">UAN: 03257111000</p>
                </div>
              </div>
              <div className="col-md-6 mb-3 px-2">
                <div className="officeLocation rounded-2">
                  <h2 className="font-16 text-white font-weight-bold">
                    Bahria Town Lahore Office (Head Office)
                  </h2>
                  <p className="text-white mb-2 mt-3 font-14">
                    80-B Commercial, Rafi Block, Bahria Town, Lahore Lahore,
                    Punjab, Pakistan-5400
                  </p>
                  <p className="text-white mb-2 font-14">Mob : 03257111000</p>
                  <p className="text-white mb-0 font-14">UAN: 03257111000</p>
                </div>
              </div>
              <div className="col-md-6 mb-3 px-2">
                <div className="officeLocation rounded-2">
                  <h2 className="font-16 text-white font-weight-bold">
                    Bahria Town Lahore Office (Head Office)
                  </h2>
                  <p className="text-white mb-2 mt-3 font-14">
                    80-B Commercial, Rafi Block, Bahria Town, Lahore Lahore,
                    Punjab, Pakistan-5400
                  </p>
                  <p className="text-white mb-2 font-14">Mob : 03257111000</p>
                  <p className="text-white mb-0 font-14">UAN: 03257111000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
