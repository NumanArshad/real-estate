import React, { useEffect, useState } from "react";
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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { updateBlog } from "../../../../../store/actions/Blog";
const EditBlogModal = ({ onClick, active, data }) => {
  const [radioValue, setRadioValue] = useState("pending");

  const radios = [
    { name: "Pending", value: "pending" },
    { name: "Approved", value: "approved" },
  ];
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    name: "This is title",
    description: "This is descriptions",
    images: "",
    content:
      "<h3>Best Property | Bahria</h3><p>We have 3/5/7/10 marla plots.</p><ul><li>Beautiful Area</li><li>Garden&nbsp;</li><li>Mosque</li></ul>",
  });
  useEffect(() => {
    if (data) {
      setValues({
        name: data?.name,
        description: data?.description,
        image: data?.image,
        content: data?.content,
      });
      setRadioValue(data?.isApproved);
    }
  }, [data?._id]);

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
    if (values.name && values.description) {
      dispatch(
        updateBlog(
          { ...values, isApproved: radioValue, id: data?._id },
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
          <Modal.Title className="modal-title">Blog Details</Modal.Title>
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
                      <label for="idcard">Description</label>
                       <textarea
                        id="tagline"
                        placeholder="Add Description"
                        value={values.description}
                        onChange={(e) =>
                          handleChange("description", e.target.value)
                        } className="w-100 form-control" rows="5"></textarea>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group multipleImageUpload">
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
                  <div className="col-md-12">
                    <div class="form-group whyChooseUS">
                      <label for="idcard">Content</label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={values.content}
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log({ event, editor, data });
                          handleChange("content", data);
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div class="form-group">
                      <label for="Action">Is Approved</label>
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

export default EditBlogModal;
