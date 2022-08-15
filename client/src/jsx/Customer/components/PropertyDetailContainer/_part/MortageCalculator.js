import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function MortageCalculator() {
  return (
    <div className="mortageCalculator">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <h4 className="mb-sm-0 mb-2">Mortage Calculator</h4>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <p className="mb-0 font-14">Total Amount</p>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">RS</InputGroup.Text>
            <Form.Control
              aria-label="Total Amount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="col-md-6">
          <p className="mb-0 font-14">Down Payment</p>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">RS</InputGroup.Text>
            <Form.Control
              aria-label="Total Amount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="col-md-6">
          <p className="mb-0 font-14">Interest Rate</p>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
            <Form.Control
              aria-label="Total Amount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="col-md-6">
          <p className="mb-0 font-14">Loan Terms (Years)</p>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <i class="fa-solid fa-calendar"></i>
            </InputGroup.Text>
            <Form.Control
              aria-label="Total Amount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="col-md-6">
          <p className="mb-0 font-14">Property Tax</p>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">RS</InputGroup.Text>
            <Form.Control
              aria-label="Total Amount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="col-md-6">
          <p className="mb-0 font-14">Home Insurance</p>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">RS</InputGroup.Text>
            <Form.Control
              aria-label="Total Amount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="col-md-6">
          <p className="mb-0 font-14">PMI</p>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">RS</InputGroup.Text>
            <Form.Control
              aria-label="Total Amount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="col-md-12 text-center mt-3">
          <button>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default MortageCalculator;
