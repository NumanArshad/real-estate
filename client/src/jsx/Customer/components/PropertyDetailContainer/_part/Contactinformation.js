import React from "react";
import Form from "react-bootstrap/Form";
function Contactinformation(saleAgent) {
  const { first_name, last_name, profile } = saleAgent
  return (
    <div className="contactInformationMain">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <h4 className="mb-sm-0 mb-2">Contact Information</h4>
        <button className="openMap">View Listing</button>
      </div>
      <hr />
      <div className="d-flex gap-3 align-items-center">
        <img src={profile} alt="" />
        <div className="d-flex gap-2">
          <i class="fa-solid fa-user mt-1"></i>
          <p className="mb-0">{`${first_name} ${last_name}`}</p>
        </div>
      </div>
      <p className="mb-0 mt-4">Inquire About the Property</p>
      <hr />
      <Form>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="font-14">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="font-14">Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Phone" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="font-14">Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Email" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="font-14">I'm a</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-md-12">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="font-14">Example textarea</Form.Label>
              <Form.Control
                placeholder="Hello, I am interested in [Luxuries 1 Kanal Furnished House For Sale in Southern Block Orchard]"
                as="textarea"
                rows={5}
              />
            </Form.Group>
          </div>
          <div className="col-md-12">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="By submitting this form I agree to Terms of Use"
              />
            </Form.Group>
          </div>
          <div className="col-md-12 text-center mt-3">
            <button>Request Information</button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Contactinformation;
