import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createRoom, createUser } from "../../../../../store/actions/User";
import makeToast from "../../../../../utils/Toaster";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Form from 'react-bootstrap/Form';
import Input from "@mui/material/Input";
import upload from "../../../../../images/user-round.jpg";
import Dummy from "../../../../../images/upload-image.svg";

const EditUserModal = ({ onClick, active, data }) => {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "True", value: "1" },
    { name: "False", value: "2" },
  ];
  const [url, setUrl] = useState("");
  const [name, setname] = useState("");
  const [passcode, setpasscode] = useState("");
  const dispatch = useDispatch();
  const optionsArray = [
    { key: "au", label: "Australia" },
    { key: "ca", label: "Canada" },
    { key: "us", label: "USA" },
    { key: "pl", label: "Poland" },
    { key: "es", label: "Spain" },
    { key: "fr", label: "France" },
  ];
  const [values, setValues] = React.useState({
    first_name: "User",
    idCard: "1234567890",
    phone: "0989763567",
    city: "Lahore",
    address: "Multan Road Lahore",
    role: "saleagent",
    gender: "male",
    designation: "Sale Ex",
    password: "12345678",
    email: "",
  });

  const handleChange = (prop, event) => {
    setValues({ ...values, [prop]: event });
  };
  const refreshState = () => {
    setValues({
      first_name: "User",
      idCard: "1234567890",
      phone: "0989763567",
      city: "Lahore",
      address: "Multan Road Lahore",
      role: "saleagent",
      gender: "male",
      designation: "Sale Ex",
      password: "12345678",
      email: "",
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (values.email && values.password && values.first_name) {
      dispatch(createUser(values, onClick, refreshState));
    } else {
      makeToast("error", "Kindly fill all the fields!");
    }
  };
  const imageUpload = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = (e) => {
      setUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <Modal size="lg" className=" fade" id="aAddDietMenus" show={active}>
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Town Details</Modal.Title>
          <Button
            variant=""
            className="close"
            data-dismiss="modal"
            onClick={() => onClick()}
          >
            <span>×</span>
          </Button>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="appointment-details">
            <form>
              <div className="contaib">
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
                        value={values.first_name}
                      />
                    </div>
                    <div class="form-group">
                      <label for="idcard">Tag Line</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tagline"
                        placeholder="Tag Line"
                      />
                    </div>
                    <div class="form-group whyChooseUS">
                      <label for="WhyChooseUS">Why Choose US</label>
                      <DropdownMultiselect className="form-control" options={optionsArray} name="countries" />
                    </div>
                    <div class="form-group">
                      <label for="OfficeAddress">Office Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="OfficeAddress"
                        aria-describedby="OfficeAddressHelp"
                        placeholder="Office Address"
                      />
                    </div>
                    <div class="form-group">
                      <label for="LocationGuide">Location Guide</label>
                      <input
                        type="text"
                        class="form-control"
                        id="LocationGuide"
                        aria-describedby="emailHelp"
                        placeholder="Location Guide"
                      />
                    </div>
                    <div class="form-group">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        aria-describedby="emailHelp"
                        placeholder="Address"
                      />
                    </div>
                    
                    <div className="form-group multipleImageUpload">
                        <label for="image">Payment Plan Image</label>
                        <div className="text-field">
                          <div className="user-img">
                            {url ? (
                              <>
                                <img src={url} className="uploaded" alt="user" />
                                <label htmlFor="contained-button-file">
                                  <Input
                                    onChange={(e) => imageUpload(e)}
                                    inputProps={{ accept: "image/" }}
                                    id="contained-button-file"
                                    className="d-none"
                                    type="file"
                                    name="image"
                                  />
                                  {/* <img src={Dummy} className="uploadImg" alt="" /> */}
                                  <div className="uploadImage">
                                    <i className="fa fa-plus"></i>
                                  </div>
                                </label>
                              </>
                            ) : (
                              <>
                                <img src={upload} className="uploaded" alt="" />
                                <label htmlFor="contained-button-file">
                                  <Input
                                    onChange={(e) => imageUpload(e)}
                                    inputProps={{ accept: "image/" }}
                                    id="contained-button-file"
                                    className="d-none"
                                    type="file"
                                    name="image"
                                  />
                                  <div className="uploadImage">
                                    <i className="fa fa-plus"></i>
                                  </div>
                                </label>
                              </>
                            )}
                          </div>
                        </div>
                    </div>
                    <div class="form-group">
                      <label for="Action">Active</label>
                      <br />
                      <ButtonGroup className="mb-2 toggleBtns">
                        {radios.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="primary"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="AffordablePaymentPlan">
                        Affordable Payment Plan
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="AffordablePaymentPlan"
                        aria-describedby="emailHelp"
                        placeholder="Affordable Payment Plan"
                      />
                    </div>
                    <div class="form-group">
                      <label for="Block">Block</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Block"
                        aria-describedby="emailHelp"
                        placeholder="Block"
                      />
                    </div>
                    <div class="form-group">
                      <label for="Area">Area</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Area"
                        aria-describedby="emailHelp"
                        placeholder="Area"
                      />
                    </div>
                    <div class="form-group">
                      <label for="City">City</label>
                      <input
                        type="text"
                        class="form-control"
                        id="City"
                        aria-describedby="emailHelp"
                        placeholder="City"
                      />
                    </div>
                    <div class="form-group">
                      <label for="hasBlock">Has Block</label>
                      <input
                        type="text"
                        class="form-control"
                        id="hasBlock"
                        aria-describedby="emailHelp"
                        placeholder="Has Block"
                      />
                    </div>
                    
                    <div className="form-group multipleImageUpload">
                      <label for="image">Gallery</label>
                      <div className="text-field">
                        <div className="user-img">
                          {url ? (
                            <>
                              <img src={url} className="uploaded" alt="user" />
                              <label htmlFor="contained-button-file">
                                <Input
                                  onChange={(e) => imageUpload(e)}
                                  inputProps={{ accept: "image/" }}
                                  id="contained-button-file"
                                  className="d-none"
                                  type="file"
                                  name="image"
                                />
                                {/* <img src={Dummy} className="uploadImg" alt="" /> */}
                                <div className="uploadImage">
                                  <i className="fa fa-plus"></i>
                                </div>
                              </label>
                            </>
                          ) : (
                            <>
                              <img src={upload} className="uploaded" alt="" />
                              <label htmlFor="contained-button-file">
                                <Input
                                  onChange={(e) => imageUpload(e)}
                                  inputProps={{ accept: "image/" }}
                                  id="contained-button-file"
                                  className="d-none"
                                  type="file"
                                  name="image"
                                />
                                <div className="uploadImage">
                                  <i className="fa fa-plus"></i>
                                </div>
                              </label>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="Action">Is On Construction</label>
                      <br />
                      <ButtonGroup className="mb-2 toggleBtns">
                        {radios.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="primary"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button class="btn btn-primary" onClick={handleAdd}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default EditUserModal;
