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
import { useSelector } from "react-redux";
import {
  addMethodArray,
  isArrayCheck,
  removeMethodArrayMarketingRate,
} from "../../../../../utils/helper";
import { createMarketRates } from "../../../../../store/actions/MarketRates";
import LoaderPulse from "../../../LoaderPulse";

const AddRateModal = ({ onClick, active, data }) => {
  const [radioValue, setRadioValue] = useState("1");
  const { towns_listing } = useSelector((state) => state._town);
  const { api_loading } = useSelector((state) => state._loader);

  const radios = [
    { name: "True", value: "1" },
    { name: "False", value: "2" },
  ];
  const [url, setUrl] = useState("");
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
    town: "",
    type: "",
    priceFrom: "",
    priceTo: "",
    plot: [],
  });

  const handleChange = (prop, event) => {
    setValues({ ...values, [prop]: event });
  };
  const refreshState = () => {
    setValues({
      town: "",
      type: "",
      priceFrom: "",
      priceTo: "",
      plot: [],
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    console.log("town", values);
    // if (values.town && isArrayCheck(values.plot)) {
    dispatch(createMarketRates(values, onClick, refreshState));
    // } else {
    //   makeToast("error", "Kindly fill all the fields!");
    // }
  };
  const handleSave = (e) => {
    e.preventDefault();

    const { priceFrom, priceTo, type } = values;
    const data = addMethodArray(values.plot, {
      priceFrom,
      priceTo,
      type,
    });
    handleChange("plot", data);
  };

  console.log("Plot", values.plot);
  return (
    <Modal size="lg" className=" fade" id="aAddDietMenus" show={active}>
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Add Plot Rate</Modal.Title>
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
                  {isArrayCheck(towns_listing) ? (
                    <div className="col-md-12">
                      <div class="form-group">
                        <label for="name">Town</label>
                        <select
                          name=""
                          className="form-control"
                          id=""
                          onChange={(e) => handleChange("town", e.target.value)}
                        >
                          <option value={""}>{"Select Town"}</option>

                          {isArrayCheck(towns_listing) &&
                            towns_listing.map((data, id) => (
                              <option value={data?._id}>{data?.name}</option>
                            ))}
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="idcard">Plot Type/Size (Marla)</label>
                        <input
                          type="text"
                          class="form-control"
                          id="tagline"
                          placeholder="Plot Type"
                          onChange={(e) => handleChange("type", e.target.value)}
                          value={values.type}
                        />
                      </div>
                    </div>
                  ) : (
                    <label for="idcard">
                      Kindly add town before submitting.
                    </label>
                  )}
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="idcard">Price From</label>
                          <input
                            type="number"
                            class="form-control"
                            id="tagline"
                            placeholder="Price From"
                            onChange={(e) =>
                              handleChange("priceFrom", e.target.value)
                            }
                            value={values.priceFrom}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="idcard">Price To</label>
                          <input
                            type="number"
                            class="form-control"
                            id="tagline"
                            placeholder="Price To"
                            onChange={(e) =>
                              handleChange("priceTo", e.target.value)
                            }
                            value={values.priceTo}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {values.type && (
                    <div className="text-center mt-3">
                      <button class="btn btn-primary" onClick={handleSave}>
                        Save
                      </button>
                    </div>
                  )}

                  {isArrayCheck(values.plot) && (
                    <div className="row mx-2 my-5">
                      <table>
                        <tr>
                          <th>Plot Type</th>
                          <th>Price From</th>
                          <th>Price To</th>
                          <th>Action</th>
                        </tr>
                        {isArrayCheck(values.plot) &&
                          values.plot.map((data, id) => (
                            <tr>
                              <td>{data?.type}</td>
                              <td>{data?.priceFrom}</td>
                              <td>{data?.priceTo}</td>
                              <td>
                                <button
                                  class="btn btn-sm btn-primary"
                                  onClick={() => {
                                    handleChange(
                                      "plot",
                                      removeMethodArrayMarketingRate(
                                        values.plot,
                                        data?.type
                                      )
                                    );
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </table>
                    </div>
                  )}

                  <div className="col-md-12">
                    <div class="form-group">
                      <label for="Action">Is Active</label>
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
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
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

              {isArrayCheck(values.plot) && (
                <div className="text-center">
                  <button class="btn btn-primary" onClick={handleAdd}>
                    {api_loading ? (
                      <LoaderPulse active={true} color={"#fff"} />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default AddRateModal;
