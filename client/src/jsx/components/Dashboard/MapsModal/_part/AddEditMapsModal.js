import React, { useEffect, useState } from "react";
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
import { getImageUrlByName } from "../../../../../utils/helper";
import { createMapModal, updateMapModal } from "../../../../../store/actions/MapModal";
import request from "../../../../../utils/request";
import { plainObjectToFormData } from "../../../PluginsMenu/Nestable/utils";

const AddEditTownMapsModal = ({ onClick, townOptions, data }) => {
  const [radioValue, setRadioValue] = useState("1");
  const isNew = !data?._id

  const radios = [
    { name: "Yes", value: 1 },
    { name: "No", value: 0 },
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
    town: "",
    image: "",
    isActive: true

  });



  console.log({ townOptions })

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
    if (values.town && (values.file || values.image)) {
      console.log({ values })
      const { createdBy, ...payload } = values;
      if (typeof (values.file) !== "object") {
        // values.file = values.file;
        // payload.profile = image;
        // payload.file = ""

      }
      dispatch((isNew ? createMapModal : updateMapModal)(plainObjectToFormData(payload), onClick, refreshState));

    } else {
      makeToast("error", "Kindly fill all the fields!");
    }
  };
  console.log({ values })

  const imageUpload = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = (e) => {
      setUrl(e.target.result);
    };
    reader.readAsDataURL(file);
    setValues(prev => ({ ...prev, file }))

    // if (isNew) {
    //   setValues(prev => ({ ...prev, file }))
    //   return
    // }
    // setValues(prev => ({ ...prev, file, image: prev.image || prev.file }))
  };



  useEffect(() => {
    if (data?._id) {

      setValues({
        ...data,
        town: data?.town?._id,
        file: data.image,
      })
    }

  }, [data?._id])
  return (
    <div className="appointment-details">
      <form>
        <div className="contaib">
          <div className="row">
            <div className="col-md-12">
              <div class="form-group">
                <label for="name">Town</label>
                {/* <select name="" class="form-control" id="">
                  <option value="">Town 1</option>
                  <option value="">Town 2</option>
                </select> */}

                {isNew ? <select
                  name="town"
                  class="form-control"
                  id=""
                  value={values.town}
                  onChange={(event) => {
                    console.log(
                      "select town",
                      event,
                      event.target.name,
                      event.target.value
                    );
                    const { name, value } = event.target;
                    handleChange(name, value);
                  }}
                >
                  <option value={null}>Select Town</option>
                  {townOptions?.map(({ _id, name }) => (
                    <option value={_id}>{name}</option>
                  ))}
                </select>
                  :
                  <p>{data?.town?.name}</p>
                }


              </div>
              <div className="form-group multipleImageUpload">
                <label for="image">Image</label>
                <div className="text-field">
                  <div className="user-img">
                    {values.file ? (
                      <>
                        <img src={getImageUrlByName(values.file)} className="uploaded" alt="user" />
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
                <label for="Action">Is Active</label>
                <br />
                <ButtonGroup className="mb-2 toggleBtns">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant="light"
                      name="isActive"
                      value={radio.value}
                      checked={values?.isActive === Boolean(radio.value)}
                      onChange={(e) => {
                        handleChange(e.target.name, Boolean(+e.target.value));

                      }}
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
  );
};

export default AddEditTownMapsModal;
