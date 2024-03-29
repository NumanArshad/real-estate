import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createRoom, createUser } from "../../../../../store/actions/User";
import makeToast from "../../../../../utils/Toaster";
import Input from "@mui/material/Input";
import upload from "../../../../../images/user-round.jpg";
import Dummy from "../../../../../images/upload-image.svg";
import { plainObjectToFormData } from "../../../PluginsMenu/Nestable/utils";
import LoaderPulse from "../../../LoaderPulse";

const AddUserModal = ({ onClick, active, data }) => {
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
    password: "12345678",
    email: "",
    isActive: true,
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
      url: "",
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (values.email && values.password && values.first_name) {
      const formData = plainObjectToFormData(values);
      dispatch(createUser(formData, onClick, refreshState));
    } else {
      makeToast("error", "Kindly fill all the fields!");
    }
  };
  const imageUpload = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    setValues((prev) => ({ ...prev, file }));
    reader.onloadend = (e) => {
      setUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <Modal size="lg" className=" fade" id="aAddDietMenus" show={active}>
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Create New Agent</Modal.Title>
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
                  </div>
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
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
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
                  </div>
                  <div className="col-md-6">
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
                      <select
                        name="Role"
                        aria-describedby="emailHelp"
                        placeholder="Enter Role"
                        value={values.role}
                        onChange={(e) => handleChange("role", e.target.value)}
                        class="form-control"
                        id="Role"
                      >
                        <option value="user">User</option>
                        {/* <option value="saab">Saab</option> */}
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="Gender">Gender</label>
                      <select
                        class="form-control"
                        id="Gender"
                        name="Gender"
                        aria-describedby="emailHelp"
                        placeholder="Enter Gender"
                        value={values.gender}
                        onChange={(e) => handleChange("gender", e.target.value)}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
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
                        type="text"
                        class="form-control"
                        id="Designation"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                        value={values.password}
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

export default AddUserModal;
