import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function SerachAgent() {
  return (
    <>
      <div className="col-12 p-4 findAgentForm">
        <h4>Find Agent</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search Agent" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select aria-label="Default select example">
              <option>All Categories</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select aria-label="Default select example">
              <option>All Cities</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Search Agents
          </Button>
        </Form>
      </div>
    </>
  );
}

export default SerachAgent;
