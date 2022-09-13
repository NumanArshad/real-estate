import React from "react";
import Form from "react-bootstrap/Form";
function Contact() {
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
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="font-14">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Last Name"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="font-14">Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Email"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="font-14">Contact No</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Mobile Number"
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
                        rows={5}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-12 text-center mt-3">
                    <button className="w-100 py-2">Submit</button>
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
