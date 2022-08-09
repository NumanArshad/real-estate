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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { createBlog } from "../../../../../store/actions/Blog";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";

const AddBlogModal = ({ onClick, active, data }) => {
  const [radioValue, setRadioValue] = useState("pending");

  const radios = [
    { name: "Pending", value: "pending" },
    { name: "Approved", value: "approved" },
  ];
  const [url, setUrl] = useState("");
  const [editorState, seteditorState] = useState("");
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    name: "This is title",
    description: "This is descriptions",
    images: "",
    content: EditorState.createEmpty(),
  });

  const handleChange = (prop, event) => {
    setValues({ ...values, [prop]: event });
  };
  const refreshState = () => {
    setValues({
      name: "This is title",
      description: "This is descriptions",
      images: "",
      content: EditorState.createEmpty(),
      // "<h3>Best Property | Bahria</h3><p>We have 3/5/7/10 marla plots.</p><ul><li>Beautiful Area</li><li>Garden&nbsp;</li><li>Mosque</li></ul>",
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (values.name && values.description) {
      dispatch(
        createBlog({ ...values, isApproved: radioValue }, onClick, refreshState)
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
          <Modal.Title className="modal-title">Create Blog</Modal.Title>
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
                  <div className="col-md-12">
                    <div class="form-group">
                      <label for="idcard">Description</label>
                      <textarea
                        id="tagline"
                        placeholder="Add Description"
                        value={values.description}
                        onChange={(e) =>
                          handleChange("description", e.target.value)
                        }
                        className="w-100 form-control"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div class="form-group whyChooseUS">
                      <label for="idcard">Content</label>
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
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="Action">Is Approved</label>
                      <br />
                      <ButtonGroup className="mb-2 toggleBtns">
                        {radios.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="light"
                            name="radio"
                            className="rounded-0"
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

export default AddBlogModal;
