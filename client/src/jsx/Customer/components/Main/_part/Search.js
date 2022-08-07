import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search() {
  return (
    <div className="searchMain">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="All">
          <div className="d-flex gap-2 searchContainer">
            <Form.Select aria-label="Default select example">
              <option>All Cities</option>
              <option value="1">City 1</option>
              <option value="2">City 2</option>
              <option value="3">City 3</option>
            </Form.Select>
            <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Keyword..." />
            </Form.Group>
            <Button>Search</Button>
          </div>
        </Tab>
        <Tab eventKey="profile" title="For Rent">
          <div className="d-flex gap-2 searchContainer">
            <Form.Select aria-label="Default select example">
              <option>All Cities</option>
              <option value="1">City 1</option>
              <option value="2">City 2</option>
              <option value="3">City 3</option>
            </Form.Select>
            <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Keyword..." />
            </Form.Group>
            <Button>Search</Button>
          </div>
        </Tab>
        <Tab eventKey="contact" title="For Sale">
          <div className="d-flex gap-2 searchContainer">
            <Form.Select aria-label="Default select example">
              <option>All Cities</option>
              <option value="1">City 1</option>
              <option value="2">City 2</option>
              <option value="3">City 3</option>
            </Form.Select>
            <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Keyword..." />
            </Form.Group>
            <Button>Search</Button>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Search;
