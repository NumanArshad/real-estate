import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createRoom, createUser } from "../../../../../store/actions/User";
import makeToast from "../../../../../utils/Toaster";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Form from "react-bootstrap/Form";
import Input from "@mui/material/Input";
import upload from "../../../../../images/user-round.jpg";
import Dummy from "../../../../../images/upload-image.svg";
import { isArrayCheck } from "../../../../../utils/helper";
import LoaderPulse from "../../../LoaderPulse";

const EditTownModal = ({ onClick, active, data }) => {
  const [hasBlockStatus, sethasBlockStatus] = useState("1");
  const [isActive, setisActive] = useState("1");
  const [isOnConstruction, setisOnConstruction] = useState("1");
  const { api_loading } = useSelector((state) => state._loader);

  const radios = [
    { name: "Yes", value: "1" },
    { name: "No", value: "2" },
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
    hasBlock: false,
    block: "",
    name: "",
    area: "",
    city: "",
    country: "",
    address: "",
    isOnConstruction: false,
    isActive: true,
    tagLine: "",
    WhyChooseUs: null,
    LocationGuide: null,
    AffordablePaymentPlan: null,
  });

  const [values2, setValues2] = React.useState({
    address: "",
    email: "",
    phone: "",
    whatsapp: "",
  });

  const handleChange = (prop, event) => {
    setValues({ ...values, [prop]: event });
  };

  const handleChangeOfficeAddress = (prop, event) => {
    setValues2({ ...values2, [prop]: event });
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
    console.log("On Click Add", values, values2);
    // if (values.email && values.password && values.first_name) {
    //   dispatch(createUser(values, onClick, refreshState));
    // } else {
    //   makeToast("error", "Kindly fill all the fields!");
    // }
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

  useEffect(() => {
    console.log("Useeefect Edit Data", data);
    setValues({
      hasBlock: data?.hasBlock,
      block: data?.block,
      name: data?.name,
      area: data?.area,
      city: data?.city,
      country: data?.country,
      address: data?.address,
      isOnConstruction: data?.isOnConstruction,
      isActive: data?.isActive,
      tagLine: data?.tagLine,
      WhyChooseUs: data?.townInformation?.WhyChooseUs,
      LocationGuide: data?.townInformation?.LocationGuide,
      AffordablePaymentPlan: data?.townInformation?.AffordablePaymentPlan,
    });

    if (isArrayCheck(data?.officeAddress)) {
      setValues({
        address: data?.officeAddress[0]?.address,
        email: data?.officeAddress[0]?.email,
        phone: data?.officeAddress[0]?.phone,
        whatsapp: data?.officeAddress[0]?.whatsapp,
      });
    }
  }, [data]);

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
                        value={values.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="idcard">Tag Line</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tagline"
                        placeholder="Tag Line"
                        onChange={(e) =>
                          handleChange("tagLine", e.target.value)
                        }
                        value={values.tagLine}
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="Block">Block</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Block"
                        aria-describedby="emailHelp"
                        placeholder="Block"
                        onChange={(e) => handleChange("block", e.target.value)}
                        value={values.block}
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
                        onChange={(e) => handleChange("city", e.target.value)}
                        value={values.city}
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
                        onChange={(e) =>
                          handleChange("address", e.target.value)
                        }
                        value={values.address}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="Block">Area</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Area"
                        aria-describedby="emailHelp"
                        placeholder="Area"
                        onChange={(e) => handleChange("area", e.target.value)}
                        value={values.area}
                      />
                    </div>

                    <div class="form-group">
                      <label for="Country">Country</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Country"
                        aria-describedby="emailHelp"
                        placeholder="Country"
                        onChange={(e) =>
                          handleChange("country", e.target.value)
                        }
                        value={values.country}
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div className="col-md-6">
                    <div class="form-group whyChooseUS">
                      <label for="WhyChooseUS">Why Choose US</label>

                      {/* <input
                        type="text"
                        class="form-control"
                        id="whyChooseUs"
                        aria-describedby="emailHelp"
                        placeholder="Why Choose Us"
                      /> */}
                      <textarea
                        class="form-control"
                        name="whyChooseUs"
                        id="whyChooseUs"
                        rows="3"
                        placeholder="Why Choose Us"
                        onChange={(e) =>
                          handleChange("WhyChooseUs", e.target.value)
                        }
                        value={values.WhyChooseUs}
                      ></textarea>
                    </div>

                    <div class="form-group">
                      <label for="LocationGuide">Location Guide</label>
                      <textarea
                        class="form-control"
                        name="locationGuide"
                        id="locationGuide"
                        rows="3"
                        placeholder="Location Guide"
                        onChange={(e) =>
                          handleChange("LocationGuide", e.target.value)
                        }
                        value={values.LocationGuide}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="AffordablePaymentPlan">
                        Affordable Payment Plan
                      </label>
                      <textarea
                        class="form-control"
                        placeholder="Affordable Payment Plan"
                        name="paymentPlan"
                        id="paymentPlan"
                        rows="3"
                        onChange={(e) =>
                          handleChange("AffordablePaymentPlan", e.target.value)
                        }
                        value={values.AffordablePaymentPlan}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div className="col-md-6">
                    <div class="form-group whyChooseUS">
                      <label for="WhyChooseUS">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="whyChooseUs"
                        aria-describedby="emailHelp"
                        placeholder="Address"
                        onChange={(e) =>
                          handleChangeOfficeAddress("address", e.target.value)
                        }
                        value={values2.address}
                      />
                    </div>

                    <div class="form-group">
                      <label for="LocationGuide">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        id="LocationGuide"
                        aria-describedby="emailHelp"
                        placeholder="Phone Number"
                        onChange={(e) =>
                          handleChangeOfficeAddress("phone", e.target.value)
                        }
                        value={values2.phone}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="AffordablePaymentPlan">Email Id</label>
                      <input
                        type="text"
                        class="form-control"
                        id="AffordablePaymentPlan"
                        aria-describedby="emailHelp"
                        placeholder="Email Id"
                        onChange={(e) =>
                          handleChangeOfficeAddress("email", e.target.value)
                        }
                        value={values2.email}
                      />
                    </div>

                    <div class="form-group">
                      <label for="AffordablePaymentPlan">Whatsapp No.</label>
                      <input
                        type="text"
                        class="form-control"
                        id="whatsapp"
                        aria-describedby="emailHelp"
                        placeholder="+922349532098"
                        onChange={(e) =>
                          handleChangeOfficeAddress("whatsapp", e.target.value)
                        }
                        value={values2.whatsapp}
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div className="col-md-6">
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
                  </div>

                  <div className="col-md-6">
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
                  </div>
                </div>

                <div class="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="Action">Has Block</label>
                      <br />
                      <ButtonGroup className="mb-2 toggleBtns">
                        {radios.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="light"
                            name="radio"
                            value={radio.value}
                            checked={hasBlockStatus === radio.value}
                            onChange={(e) =>
                              sethasBlockStatus(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="Action">Active</label>
                      <br />
                      <ButtonGroup className="mb-2 toggleBtns">
                        {radios.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="light"
                            name="radio"
                            value={radio.value}
                            checked={isActive === radio.value}
                            onChange={(e) => setisActive(e.currentTarget.value)}
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="Action">is On Construction</label>
                      <br />
                      <ButtonGroup className="mb-2 toggleBtns">
                        {radios.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="light"
                            name="radio"
                            value={radio.value}
                            checked={isOnConstruction === radio.value}
                            onChange={(e) =>
                              setisOnConstruction(e.currentTarget.value)
                            }
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
                  {api_loading ? (
                    <LoaderPulse active={true} color={"#fff"} />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default EditTownModal;
