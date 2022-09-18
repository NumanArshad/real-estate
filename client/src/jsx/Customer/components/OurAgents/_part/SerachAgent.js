import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
function SerachAgent({ setAgentsData, agenstData }) {

  const [searchText, setSearchText] = useState('')

  const [initialData, setInitialData] = useState([])
  const handleChangeSearchAgent = event => {
    event.preventDefault()
    const searchValue = event.target.value;

    const formattedSearchValue = String(searchValue).trim().toLowerCase()
    const filteredData = initialData?.filter(({ gender, full_name, phone, email, designation, address }) => {
      const searchableObject = { gender, full_name, phone, email, designation, address }
      return Object.values(searchableObject)?.map((value) => String(value).toLowerCase())?.some((vl) => vl?.includes(formattedSearchValue))
    })
    setAgentsData(searchValue ? filteredData : initialData)
    setSearchText(searchValue)
  }

  useEffect(() => {
    if (!initialData?.length && agenstData?.length) {
      setInitialData(agenstData)
    }
  }, [agenstData, initialData])

  return (
    <>
      <div className="col-12 p-4 findAgentForm">
        <h4>Find Agent</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="search" placeholder="Search Agent" value={searchText} onChange={handleChangeSearchAgent} />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
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
          </Button> */}
        </Form>
      </div>
    </>
  );
}

export default SerachAgent;
