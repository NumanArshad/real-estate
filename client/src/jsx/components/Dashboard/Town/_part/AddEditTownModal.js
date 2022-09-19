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
import { MESSAGE } from "../../../../../utils/Message-List";
import { createTown, updateTown } from "../../../../../store/actions/Town";
import { addMethod } from "yup";
import {
  addMethodArray,
  getImageUrlByName,
  isArrayCheck,
  removeMethodArray,
  removeMethodArrayUsingIndex,
  removeMethodArrayUsingStringData,
} from "../../../../../utils/helper";
import { plainObjectToFormData } from "../../../PluginsMenu/Nestable/utils";
import LoaderPulse from "../../../LoaderPulse";

const AddEditTownModal = ({ onClick, active, data }) => {
  const [hasBlockStatus, sethasBlockStatus] = useState(1);
  const [isActive, setisActive] = useState(1);
  const [isOnConstruction, setisOnConstruction] = useState(1);
  const { api_loading } = useSelector((state) => state._loader);
  const isNew = !data?._id;

  console.log({ data });
  const radios = [
    { name: "Yes", value: 1 },
    { name: "No", value: 0 },
  ];
  const [url, setUrl] = useState("");
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const [text3, settext3] = useState("");
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
    block: "A",
    name: "New Town",
    area: "Lahore Gulberg",
    city: "Lahore",
    country: "Pakistan",
    address: "Johar Town Lahore near thokar",
    isOnConstruction: false,
    isActive: true,
    tagLine: "Peace Place to Live",
    WhyChooseUs: null,
    LocationGuide: null,
    AffordablePaymentPlan: null,
    gallery: [],
    paymentPlan: [],
    floorPlan: []
  });

  const [values2, setValues2] = React.useState({
    address: "Joahr Town Lahore",
    email: "new@gmail.com",
    phone: "0924568765431",
    phone2: "0924568765431",
    whatsapp: "+92098736563789",
  });

  const handleChange = (prop, event) => {
    setValues({ ...values, [prop]: event });
  };

  const handleChangeOfficeAddress = (prop, event) => {
    setValues2({ ...values2, [prop]: event });
  };

  console.log({ values });
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
  console.log({ isNew });
  const handleAdd = (e) => {
    e.preventDefault();

    const payload = { ...values }
    payload.gallery = payload.gallery.filter((file) => typeof (file) === "object")
    payload.paymentPlan = payload.paymentPlan.filter((file) => typeof (file) === "object")
    payload.floorPlan = payload.floorPlan.filter((file) => typeof (file) === "object")

    const dataObj = plainObjectToFormData(makeData(payload, values2));
    console.log(
      "Response ==>",
      { dataObj },
      payload,
      makeData(values, values2),
      dataObj.get("townInformation")
    );
    if (
      values.name &&
      values.area &&
      values.block &&
      values.city &&
      values2.address &&
      values2.phone && values?.gallery?.length
    ) {
      dispatch(
        (isNew ? createTown : updateTown)(dataObj, onClick, refreshState)
      );
    } else {
      makeToast("error", MESSAGE.emptyStringValidation);
    }
  };

  useEffect(() => {
    if (data?._id) {
      setValues({
        ...data,
        WhyChooseUs: data?.townInformation?.WhyChooseUs,
        LocationGuide: data?.townInformation?.LocationGuide,
        AffordablePaymentPlan: data?.townInformation?.AffordablePaymentPlan,

        /////images preview
        gallery: data?.townInformation?.gallery,
        paymentPlan: data?.townInformation?.paymentPlanImage ? [data?.townInformation?.paymentPlanImage] : [],
        floorPlan: data?.townInformation?.floorPlanImage ? [data?.townInformation?.floorPlanImage] : [],
      });
    }
  }, [data]);

  // useEffect(() => {
  //   if (data?._id) {

  //     setValues({
  //       ...data,
  //       gallery: data.townInformation?.gallery,
  //       images: ""
  //     })
  //   }

  // }, [data?._id])
  const imageUpload = (e) => {
    e.preventDefault();

    const { name, files } = e.target
    const file = files[0];
    // setUrl((prev) => [...prev, URL.createObjectURL(file)]);
    if (name === "gallery") {
      setValues((prev) => ({ ...prev, [name]: [...prev[name], file] }));
      return
    }
    setValues((prev) => ({ ...prev, [name]: [file] }));

  };

  console.log({ data, values });

  const makeData = (obj1, obj2) => {
    console.log("Make Data 1", obj1);
    console.log("Make Data 2", obj2);
    return {
      ...(!isNew && { _id: obj1._id, }),

      hasBlock: obj1.hasBlock,
      block: obj1.block,
      name: obj1.name,
      tagLine: "Peace Place to Live",
      area: obj1.area,
      city: obj1.city,
      country: obj1.country,
      address: obj1.address,
      isOnConstruction: obj1.isOnConstruction,
      isActive: obj1.isActive,
      WhyChooseUs: obj1?.WhyChooseUs,
      LocationGuide: obj1?.LocationGuide,
      AffordablePaymentPlan: obj1?.AffordablePaymentPlan,
      townInformation: {
        name: obj1.name,
        tagLine: obj1?.tagLine,
        WhyChooseUs: obj1?.WhyChooseUs,
        LocationGuide: obj1?.LocationGuide,
        AffordablePaymentPlan: obj1?.AffordablePaymentPlan,
        ...(!isNew && {
          gallery: obj1.townInformation.gallery,
          paymentPlanImage: obj1.townInformation.paymentPlanImage,
          floorPlanImage: obj1.townInformation.floorPlanImage,
        }),
        // paymentPlanImage: [],
        officeAddress: [obj2],
      },
      gallery: obj1?.gallery,
      paymentPlan: obj1?.paymentPlan,
      floorPlan: obj1?.floorPlan
    };
  };
  return (
    <div className="appointment-details">
      <form>
        <div className="contaib">
          <div className="row">
            <div className="col-md-4">
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
            <div className="col-md-4">
              <div class="form-group">
                <label for="idcard">Tag Line</label>
                <input
                  type="text"
                  class="form-control"
                  id="tagline"
                  placeholder="Tag Line"
                  onChange={(e) => handleChange("tagLine", e.target.value)}
                  value={values.tagLine}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h6>Address</h6>
            </div>
          </div>
          <div class="row">
            <div className="col-md-4">
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
            </div>
            <div className="col-md-4">
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
            </div>
            <div className="col-md-4">
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
            </div>
            <div className="col-md-4">
              <div class="form-group">
                <label for="Country">Country</label>
                <input
                  type="text"
                  class="form-control"
                  id="Country"
                  aria-describedby="emailHelp"
                  placeholder="Country"
                  onChange={(e) => handleChange("country", e.target.value)}
                  value={values.country}
                />
              </div>
            </div>
            <div className="col-12">
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  aria-describedby="emailHelp"
                  placeholder="Address"
                  onChange={(e) => handleChange("address", e.target.value)}
                  value={values.address}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h6>Details</h6>
            </div>
          </div>
          <div class="row">
            <div className="col-md-4">
              <div class="form-group whyChooseUS">
                <label for="WhyChooseUS">Why Choose US</label>
                <textarea
                  class="form-control"
                  name="whyChooseUs"
                  id="whyChooseUs"
                  rows="3"
                  placeholder="Why Choose Us"
                  onChange={
                    (e) => {
                      settext1(e.target.value);
                    }
                    // handleChange("WhyChooseUs", e.target.value)
                  }
                  value={text1}
                ></textarea>

                {text1 && (
                  <button
                    class="btn btn-sm btn-primary rounded bg-dark text-white mx-auto"
                    onClick={(e) => {
                      // e.preventDefault();

                      const data = addMethodArray(values.WhyChooseUs, text1);
                      handleChange("WhyChooseUs", data);
                      settext1("");
                    }}
                  >
                    Add
                  </button>
                )}

                {isArrayCheck(values.WhyChooseUs) && (
                  <div className="tagInput">
                    {values.WhyChooseUs?.map((data, id) => (
                      <div
                        className="tags"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          // e.preventDefault();
                          const arr = removeMethodArrayUsingStringData(
                            values.WhyChooseUs,
                            data
                          );
                          if (arr) {
                            handleChange("WhyChooseUs", arr);
                          }
                        }}
                      >
                        <p>{data}</p>
                        <i className="fa fa-times"></i>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div class="form-group">
                <label for="LocationGuide">Location Guide</label>
                <textarea
                  class="form-control"
                  name="locationGuide"
                  id="locationGuide"
                  rows="3"
                  placeholder="Location Guide"
                  onChange={
                    (e) => {
                      settext2(e.target.value);
                    }
                    // handleChange("LocationGuide", e.target.value)
                  }
                  value={text2}
                ></textarea>

                {text2 && (
                  <button
                    class="btn btn-sm btn-primary rounded bg-dark text-white mx-auto"
                    onClick={(e) => {
                      // e.preventDefault();

                      const data = addMethodArray(values.LocationGuide, text2);
                      handleChange("LocationGuide", data);
                      settext2("");
                    }}
                  >
                    Add
                  </button>
                )}

                {isArrayCheck(values.LocationGuide) && (
                  <div className="tagInput">
                    {values.LocationGuide?.map((data, id) => (
                      <div
                        className="tags"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          // e.preventDefault();
                          const arr = removeMethodArrayUsingStringData(
                            values.LocationGuide,
                            data
                          );
                          if (arr) {
                            handleChange("LocationGuide", arr);
                          }
                        }}
                      >
                        <p>{data}</p>
                        <i className="fa fa-times"></i>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-4">
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
                  onChange={
                    (e) => {
                      settext3(e.target.value);
                    }
                    // handleChange("AffordablePaymentPlan", e.target.value)
                  }
                  value={text3}
                ></textarea>

                {text3 && (
                  <button
                    class="btn btn-sm btn-primary rounded bg-dark text-white mx-auto"
                    onClick={(e) => {
                      // e.preventDefault();

                      const data = addMethodArray(
                        values.AffordablePaymentPlan,
                        text3
                      );
                      handleChange("AffordablePaymentPlan", data);
                      settext3("");
                    }}
                  >
                    Add
                  </button>
                )}

                {isArrayCheck(values.AffordablePaymentPlan) && (
                  <div className="tagInput">
                    {values.AffordablePaymentPlan?.map((data, id) => (
                      <div
                        className="tags"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          // e.preventDefault();
                          const arr = removeMethodArrayUsingStringData(
                            values.AffordablePaymentPlan,
                            data
                          );
                          if (arr) {
                            handleChange("AffordablePaymentPlan", arr);
                          }
                        }}
                      >
                        <p>{data}</p>
                        <i className="fa fa-times"></i>
                      </div>
                    ))}
                  </div>
                )}

                {/* <div className="tagInput">
                        <div className="tags">
                          <p>tag1</p>
                          <i className="fa fa-times"></i>
                        </div>
                        <div className="tags">
                          <p>amazing</p>
                          <i className="fa fa-times"></i>
                        </div>
                        <div className="tags">
                          <p>Fantabulus</p>
                          <i className="fa fa-times"></i>
                        </div>
                        <div className="tags">
                          <p>tag2</p>
                          <i className="fa fa-times"></i>
                        </div>
                      </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h6>Office Address</h6>
            </div>
          </div>
          <div class="row">
            <div className="col-md-4">
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
            </div>
            <div className="col-md-4">
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
            <div className="col-md-4">
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
            <div className="col-md-4">
              <div class="form-group">
                <label for="LocationGuide">Phone 2</label>
                <input
                  type="text"
                  class="form-control"
                  id="LocationGuide"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                  onChange={(e) =>
                    handleChangeOfficeAddress("phone2", e.target.value)
                  }
                  value={values2.phone2}
                />
              </div>
            </div>
            <div className="col-md-12">
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
            </div>
          </div>

          <div class="row">
            <div className="col-md-4">
              <div class="form-group">
                <label for="Action">Active</label>
                <br />
                <ButtonGroup className="mb-2 toggleBtns">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`isActive-${idx}`}
                      type="radio"
                      variant="light"
                      name="isActive"
                      value={radio.value}
                      checked={values.isActive === Boolean(radio.value)}
                      onChange={(e) =>
                        handleChange(e.target.name, Boolean(+e.target.value))
                      }
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
            </div>

            <div className="col-md-4">
              <div class="form-group">
                <label for="Action">is On Construction</label>
                <br />
                <ButtonGroup className="mb-2 toggleBtns">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`isOnConstruction-${idx}`}
                      type="radio"
                      variant="light"
                      name="isOnConstruction"
                      value={radio.value}
                      checked={
                        values.isOnConstruction === Boolean(+radio.value)
                      }
                      onChange={(e) =>
                        // setisOnConstruction(Number(e.currentTarget.value))
                        handleChange(e.target.name, Boolean(+e.target.value))
                      }
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
            </div>
            <div className="col-md-4">
              <div class="form-group">
                <label for="Action">Has Block </label>
                <br />
                <ButtonGroup className="mb-2 toggleBtns">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`hasBlock-${idx}`}
                      type="radio"
                      variant="light"
                      name="hasBlock"
                      value={radio.value}
                      checked={values.hasBlock === Boolean(radio.value)}
                      onChange={(e) =>
                        // setisOnConstruction(Number(e.currentTarget.value))
                        handleChange(e.target.name, Boolean(+e.target.value))
                      }
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
            </div>
          </div>

          <div class="row"></div>

          <div class="row">
            {/* <div className="col-md-4">
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
                  </div> */}

            <div className="col-md-4">
              <div className="form-group multipleImageUpload">
                <label for="image">Gallery</label>
                <div className="text-field">
                  <div className="user-img">
                    {isArrayCheck(values.gallery) &&
                      values.gallery.map((dat) => (
                        <img
                          src={getImageUrlByName(dat)}
                          className="uploaded"
                          alt="user"
                        />
                      ))}

                    <label htmlFor="contained-button-file">
                      <Input
                        onChange={(e) => imageUpload(e)}
                        inputProps={{ accept: "image/" }}
                        id="contained-button-file"
                        className="d-none"
                        type="file"
                        name="gallery"
                      />
                      {/* <img src={Dummy} className="uploadImg" alt="" /> */}
                      <div className="uploadImage">
                        <i className="fa fa-plus"></i>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group multipleImageUpload">
                <label for="image">Payment Plan</label>
                <div className="text-field">
                  <div className="user-img">
                    {isArrayCheck(values.paymentPlan) && values.paymentPlan?.length ?
                      values?.paymentPlan?.map((paymentImg) =>
                        <img
                          src={getImageUrlByName(paymentImg)}
                          className="uploaded"
                          alt="user"
                        />) : null

                    }
                    <label htmlFor="contained-button-file-payment">
                      <Input
                        onChange={(e) => imageUpload(e)}
                        inputProps={{ accept: "image/" }}
                        id="contained-button-file-payment"
                        className="d-none"
                        type="file"
                        name="paymentPlan"
                      />
                      <div className="uploadImage">
                        <i className="fa fa-plus"></i>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group multipleImageUpload">
                <label for="image">Floor Plan</label>
                <div className="text-field">
                  <div className="user-img">
                    {isArrayCheck(values.floorPlan) && values?.floorPlan?.length ?
                      values?.floorPlan?.map((floorPlan) =>
                        <img
                          src={getImageUrlByName(floorPlan)}
                          className="uploaded"
                          alt="user"
                        />) : null

                    }
                    <label htmlFor="contained-button-file-floor">
                      <Input
                        onChange={(e) => imageUpload(e)}
                        inputProps={{ accept: "image/" }}
                        id="contained-button-file-floor"
                        className="d-none"
                        type="file"
                        name="floorPlan"
                      />
                      <div className="uploadImage">
                        <i className="fa fa-plus"></i>
                      </div>
                    </label>
                  </div>
                </div>
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
  );
};

export default AddEditTownModal;
