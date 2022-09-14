import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createRoom,
  createUser,
  updateUser,
} from "../../../../../store/actions/User";
import makeToast from "../../../../../utils/Toaster";
import Input from "@mui/material/Input";
import upload from "../../../../../images/user-round.jpg";
import Dummy from "../../../../../images/upload-image.svg";
import { image_url } from "../../../../../utils/config";
import LoaderPulse from "../../../LoaderPulse";
const EditUserModal = ({ onClick, active, data }) => {
  const [url, setUrl] = useState("");
  const [name, setname] = useState("");
  const [passcode, setpasscode] = useState("");
  const dispatch = useDispatch();
  const { api_loading } = useSelector((state) => state._loader);

  const [values, setValues] = React.useState({
    first_name: "User",
    idCard: "1234567890",
    phone: "0989763567",
    city: "Lahore",
    address: "Multan Road Lahore",
    role: "saleagent",
    gender: "male",
    designation: "Sale Ex",
    email: "",
    userId: "",
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
    if (values.email && values.first_name) {
      dispatch(updateUser(values, onClick));
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

  useEffect(() => {
    console.log("Useeefect Edit Data", data);
    setValues({
      first_name: data?.first_name,
      idCard: data?.idCard,
      phone: data?.phone,
      city: data?.city,
      address: data?.address,
      role: data?.role,
      gender: data?.gender,
      designation: data?.designation,
      email: data?.email,
      userId: data?._id,
      // url: ,
    });
    setUrl(data?.profile);
  }, [data]);
  return (
    <Modal size="lg" className=" fade" id="aAddDietMenus" show={active}>
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Agent Details</Modal.Title>
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
                    <div className="form-group">
                      <label for="image">Image</label>
                      <div className="text-field">
                        <div className="user-img">
                          {url ? (
                            <>
                              <img
                                src={image_url + url}
                                className="uploaded"
                                alt="user"
                              />
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
                  </div>
                  <div className="col-md-4">
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
                        value={values.first_name}
                        onChange={(e) =>
                          handleChange("first_name", e.target.value)
                        }
                      />
                    </div>
                    <div class="form-group">
                      <label for="idcard">ID Card</label>
                      <input
                        type="text"
                        class="form-control"
                        id="idcard"
                        placeholder="ID Card"
                        value={values.idCard}
                        onChange={(e) => handleChange("idCard", e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="Phone">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Phone"
                        aria-describedby="emailHelp"
                        placeholder="Enter Phone"
                        value={values.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="Email">Email</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        value={values.email}
                        disabled={true}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="form-group">
                      <label for="Address">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Address"
                        aria-describedby="emailHelp"
                        placeholder="Enter Address"
                        value={values.address}
                        onChange={(e) =>
                          handleChange("address", e.target.value)
                        }
                      />
                    </div>
                    <div class="form-group">
                      <label for="Role">Role</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Role"
                        aria-describedby="emailHelp"
                        placeholder="Enter Role"
                        value={values.role}
                        onChange={(e) => handleChange("role", e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="Gender">Gender</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Gender"
                        aria-describedby="emailHelp"
                        placeholder="Enter Gender"
                        value={values.gender}
                        onChange={(e) => handleChange("gender", e.target.value)}
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
                        placeholder="Enter City"
                        value={values.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="Designation">Designation</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Designation"
                        aria-describedby="emailHelp"
                        placeholder="Enter Designation"
                        value={values.designation}
                        onChange={(e) =>
                          handleChange("designation", e.target.value)
                        }
                      />
                    </div>
                    <div class="form-group">
                      <label for="Designation">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="Designation"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                        value={"12345678"}
                        disabled={true}
                        onChange={(e) =>
                          handleChange("password", e.target.value)
                        }
                      />
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

export default EditUserModal;
