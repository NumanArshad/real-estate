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

const AddConstructionModal = ({ onClick, active, data }) => {
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
          <Modal.Title className="modal-title">Add Construction Updates</Modal.Title>
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
                  <div className="col-md-12">
                    <div class="form-group">
                      <label for="name">Town</label>
                      <select name="" class="form-control" id="">
                        <option value="">Town 1</option>
                        <option value="">Town 2</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="idcard">Project Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tagline"
                        placeholder="Tag Line"
                      />
                    </div>
                    <div class="form-group whyChooseUS">
                    <label for="idcard">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tagline"
                        placeholder="Tag Line"
                      />
                    </div>
                    <div className="form-group">
                      <label for="image">Image</label>
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
                                <img src={Dummy} className="uploadImg" alt="" />
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
                                <img src={Dummy} className="uploadImg" alt="" />
                              </label>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="Action">Is Active</label>
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

export default AddConstructionModal;
