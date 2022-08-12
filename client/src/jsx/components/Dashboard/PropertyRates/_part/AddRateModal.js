import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createRoom, createUser } from "../../../../../store/actions/User";
import makeToast from "../../../../../utils/Toaster";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Form from "react-bootstrap/Form";
import Input from "@mui/material/Input";
import upload from "../../../../../images/user-round.jpg";
import Dummy from "../../../../../images/upload-image.svg";
import { createProperty } from "../../../../../store/actions/Property";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { plainObjectToFormData } from "../../../PluginsMenu/Nestable/utils";
import { addMethodArray, isArrayCheck } from "../../../../../utils/helper";

const AddRateModal = ({ onClick, active, data }) => {
  const [carGarageStatus, setcarGarageStatus] = useState(0);
  const [gasAvailableStatus, setgasAvailableStatus] = useState(0);
  const [electricityAvailableStatus, setelectricityAvailableStatus] =
    useState(0);

  console.log("carGarageStatus", carGarageStatus);
  const radios = [
    { name: "Yes", value: 1 },
    { name: "No", value: 0 },
  ];
  const dispatch = useDispatch();
  const [editorState, seteditorState] = useState("");
  const [url, setUrl] = useState("");

  const [values, setValues] = React.useState({
    title: "Rs 10 Thousand",
    bedRoomCount: 1,
    bathRoomCount: 1,
    kitchenCount: 1,
    marla: "3",
    carGarage: false,
    gasAvailable: true,
    electricityAvailable: true,
    area: "Johar Town",
    country: "Pakistan",
    city: "Lahore",
    address: "G1 Market Johar Town,Lahore",
    downPayment: "0.00",
    installmentYear: "0.00",
    tax: "0.00",
    pmi: "0.00",
    status: "both",
    type: "house",
    description: "This is best place to live.",
    price: 10000,
    textPrice: "Ten Thousand Only",
    content: EditorState.createEmpty(),
    files: [],
  });

  const handleChange = (prop, event) => {
    setValues({ ...values, [prop]: event });
  };
  const refreshState = () => {
    setValues({
      title: "Rs 10 Thousand",
      bedRoomCount: 1,
      bathRoomCount: 1,
      kitchenCount: 1,
      marla: "3",
      carGarage: false,
      gasAvailable: true,
      electricityAvailable: true,
      area: "Johar Town",
      country: "Pakistan",
      city: "Lahore",
      address: "G1 Market Johar Town,Lahore",
      downPayment: "0.00",
      installmentYear: "0.00",
      tax: "0.00",
      pmi: "0.00",
      status: "both",
      type: "house",
      description: "This is best place to live.",
      price: 10000,
      textPrice: "Ten Thousand Only",
      content: EditorState.createEmpty(),
      files: [],
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    console.log("Data", {
      ...values,
      carGarage: carGarageStatus,
      gasAvailable: gasAvailableStatus,
      electricityAvailable: electricityAvailableStatus,
      //  files: [],
    });

    if (values) {
      dispatch(
        createProperty(
          plainObjectToFormData({
            ...values,
            carGarage: carGarageStatus,
            gasAvailable: gasAvailableStatus,
            electricityAvailable: electricityAvailableStatus,
          }),
          onClick,
          refreshState
        )
      );
    } else {
      makeToast("error", "Kindly fill all the fields!");
    }
  };
  const imageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setUrl((prev) => [...prev, URL.createObjectURL(file)]);
    setValues((prev) => ({ ...prev, files: [...prev.files, file] }));
  };

  const onEditorStateChange = (editorState) => {
    console.log("editorState", editorState.getCurrentContent());
    seteditorState(editorState);
    handleChange(
      "content",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
    console.log(
      "content",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <Modal size="lg" className=" fade" id="aAddDietMenus" show={active}>
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Add Property</Modal.Title>
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
                    <h6>Details</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="idcard">Title</label>
                      <input
                        type="text"
                        class="form-control"
                        id="title"
                        placeholder="Title"
                        value={values.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="idcard">Bedroom Count</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tagline"
                        placeholder="Bedroom Count"
                        value={values.bedRoomCount}
                        onChange={(e) =>
                          handleChange("bedRoomCount", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="idcard">Bathroom Count</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tagline"
                        placeholder="Bathroom Count"
                        value={values.bathRoomCount}
                        onChange={(e) =>
                          handleChange("bathRoomCount", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="idcard">Kitchen Count</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tagline"
                        placeholder="Kitchen Count"
                        value={values.kitchenCount}
                        onChange={(e) =>
                          handleChange("kitchenCount", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="idcard">Marla</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tagline"
                        placeholder="Marla"
                        value={values.marla}
                        onChange={(e) => handleChange("marla", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    {console.log(
                      "Card Parkingn",
                      carGarageStatus,
                      gasAvailableStatus,
                      electricityAvailableStatus
                    )}
                    <div class="form-group">
                      <label for="Action">Car Parking</label>
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
                            checked={carGarageStatus === radio.value}
                            onChange={(e) => {
                              setcarGarageStatus(Number(e.currentTarget.value));
                            }}
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="Action">Gas Available</label>
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
                            checked={gasAvailableStatus === radio.value}
                            onChange={(e) =>
                              setgasAvailableStatus(
                                Number(e.currentTarget.value)
                              )
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="Action">Electricity Available</label>
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
                            checked={electricityAvailableStatus === radio.value}
                            onChange={(e) =>
                              setelectricityAvailableStatus(
                                Number(e.currentTarget.value)
                              )
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h6>Address</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="idcard">Area</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tagline"
                        placeholder="Area"
                        value={values.area}
                        onChange={(e) => handleChange("area", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="idcard">Location</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tagline"
                        placeholder="Location"
                        // value={values.}
                        // onChange={(e) =>
                        //   handleChange(
                        //     "electricityAvailable",
                        //     e.target.value
                        //   )
                        // }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="idcard">City</label>
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        placeholder="City"
                        value={values.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="idcard">Country</label>
                      <input
                        type="text"
                        class="form-control"
                        id="country"
                        placeholder="Country"
                        value={values.country}
                        onChange={(e) =>
                          handleChange("country", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div class="form-group">
                      <label for="idcard">Complete Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder="Address"
                        value={values.address}
                        onChange={(e) =>
                          handleChange("address", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h6>Finance</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="">Total Price</label>
                      <input
                        type="text"
                        class="form-control"
                        id="price"
                        placeholder="i.e 10000"
                        value={values.price}
                        onChange={(e) => handleChange("price", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="">Price in English</label>
                      <input
                        type="text"
                        class="form-control"
                        id="textPrice"
                        placeholder="i.e Ten Thounsand Only"
                        value={values.textPrice}
                        onChange={(e) =>
                          handleChange("textPrice", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="">Down Payment</label>
                      <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Down Payment"
                        value={values.downPayment}
                        onChange={(e) =>
                          handleChange("downPayment", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="">Installlment Year</label>
                      <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Installlment Year"
                        value={values.installmentYear}
                        onChange={(e) =>
                          handleChange("installmentYear", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="">Tax</label>
                      <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Tax"
                        value={values.tax}
                        onChange={(e) => handleChange("tax", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="">PMI</label>
                      <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="PMI"
                        value={values.pmi}
                        onChange={(e) => handleChange("pmi", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="name">Status</label>
                      <select
                        name=""
                        className="form-control"
                        id=""
                        value={values.status}
                        onChange={(e) => handleChange("status", e.target.value)}
                      >
                        <option value="rent">Rent</option>
                        <option value="sale">Sale</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="name">Type</label>
                      <select
                        name=""
                        className="form-control"
                        id=""
                        value={values.type}
                        onChange={(e) => handleChange("type", e.target.value)}
                      >
                        <option value="office">Office</option>
                        <option value="house">House</option>
                        <option value="shop">Shop</option>
                        <option value="villas">Villas</option>
                        <option value="residential plot">
                          Residental Plots
                        </option>
                        <option value="pent house">Pent House</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-12">
                    <div class="form-group">
                      <label for="idcard">Property Description</label>
                      <textarea
                        className="w-100 form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                        value={values.description}
                        onChange={(e) =>
                          handleChange("description", e.target.value)
                        }
                      ></textarea>
                    </div>
                  </div>
                </div> */}

                <div class="row">
                  <div className="col-md-12">
                    <div className="form-group multipleImageUpload">
                      <label for="image">Images</label>
                      <div className="text-field">
                        <div className="user-img">
                          {isArrayCheck(url) &&
                            url.map((dat) => (
                              <img src={dat} className="uploaded" alt="user" />
                            ))}

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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div class="form-group">
                      <label for="idcard">Property Description</label>
                      <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={onEditorStateChange}
                        toolbar={{
                          options: [
                            "inline",
                            "blockType",
                            "fontSize",
                            "list",
                            "textAlign",
                            "colorPicker",
                            "link",
                            "embedded",
                            "emoji",
                            "remove",
                            "history",
                          ],
                          inline: { inDropdown: true },
                          list: { inDropdown: true },
                          textAlign: { inDropdown: true },
                          link: { inDropdown: true },
                          history: { inDropdown: true },
                          // image: {
                          //     urlEnabled: true,
                          //     uploadEnabled: true,
                          //     uploadCallback: uploadImageCallBack,
                          //     alignmentEnabled: true,
                          //     defaultSize: {
                          //         height: 'auto',
                          //         width: 'auto',
                          //     }
                          // }
                        }}
                      />
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

export default AddRateModal;
