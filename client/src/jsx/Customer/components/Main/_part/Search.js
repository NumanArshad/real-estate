import React, { useContext, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search({ onSearch, defaultFilterValue = undefined, customStyle = {} }) {

  const [filter, setFilter] = useState(defaultFilterValue ?? {
    city: "all",
    text: undefined,
    status: "both"
  })

  const handleChange = event => {
    const { name, value } = event.target;
    setFilter(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSearch(filter)
  }

  const filterElement = <div className="d-flex gap-2 searchContainer">
    <Form.Select aria-label="Default select example" name="city" value={filter.city} onChange={handleChange}>
      <option value="all">All Cities</option>
      <option value="Lahore">Lahore</option>
      <option value="Karachi">Karachi</option>
    </Form.Select>
    <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
      <Form.Control type="text" value={filter.text} placeholder="Enter Keyword..." name="text" onChange={handleChange} />
    </Form.Group>
    <Button onClick={handleSubmit}>Search</Button>
  </div>
  return (
    <div className="searchMain" style={customStyle}>
      <Tabs activeKey={filter.status} id="uncontrolled-tab-example" onSelect={event => {
        console.log({ event })
        handleChange({ target: { name: "status", value: event } })

      }}>
        <Tab eventKey="both" title="All">
          {/* <div className="d-flex gap-2 searchContainer">
            <Form.Select aria-label="Default select example" name="city" value={filter.city} onChange={event =>

              console.log(event.target.name, event.target.value)}>
              <option value="all">All Cities</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
            </Form.Select>
            <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" value={filter.text} placeholder="Enter Keyword..." name="text" onChange={handleChange} />
            </Form.Group>
            <Button>Search</Button>
          </div> */}
          {filterElement}
        </Tab>
        <Tab eventKey="rent" title="For Rent">
          {/* <div className="d-flex gap-2 searchContainer">
            <Form.Select aria-label="Default select example">
              <option value="all">All Cities</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
            </Form.Select>
            <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Keyword..." />
            </Form.Group>
            <Button>Search</Button>
          </div> */}
          {filterElement}
        </Tab>
        <Tab eventKey="sale" title="For Sale">
          {/* <div className="d-flex gap-2 searchContainer">
            <Form.Select aria-label="Default select example">
              <option value="all">All Cities</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
            </Form.Select>
            <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Keyword..." />
            </Form.Group>
            <Button>Search</Button>
          </div> */}
          {filterElement}
        </Tab>
      </Tabs>
    </div>
  );
}

export default Search;
