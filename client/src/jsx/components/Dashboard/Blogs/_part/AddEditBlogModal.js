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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { createBlog, updateBlog } from "../../../../../store/actions/Blog";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, convertToRaw, EditorState, convertFromHTML } from "draft-js";
import draftToHtml from "draftjs-to-html";
import LoaderPulse from "../../../LoaderPulse";
import { plainObjectToFormData } from "../../../PluginsMenu/Nestable/utils";
import { getImageUrlByName } from "../../../../../utils/helper";

const AddEditBlogModal = ({ onClick, active, data }) => {
  const [radioValue, setRadioValue] = useState("pending");
  const { api_loading } = useSelector((state) => state._loader);
  const isNew = !data?._id

  const radios = [
    { name: "No", value: "pending" },
    { name: "Yes", value: "approved" },
  ];
  const [url, setUrl] = useState("");
  const [editorState, seteditorState] = useState("");
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    name: "This is title",
    description: "This is descriptions",
    image: "",
    file: "",
    isApproved: "pending",
    content: EditorState.createEmpty(),
  });

  const handleChange = (prop, event) => {
    setValues({ ...values, [prop]: event });
  };
  console.log({ data })
  const refreshState = () => {
    setValues({
      name: "This is title",
      description: "This is descriptions",
      image: "",
      file: "",
      isApproved: "pending",

      content: EditorState.createEmpty(),
      // "<h3>Best Property | Bahria</h3><p>We have 3/5/7/10 marla plots.</p><ul><li>Beautiful Area</li><li>Garden&nbsp;</li><li>Mosque</li></ul>",
    });
  };

  useEffect(() => {
    if (data?._id) {

      setValues({
        ...data, content: EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(data.content))),
        file: data.image,
        image: ""
      })
    }

  }, [data?._id])

  const handleAdd = (e) => {
    e.preventDefault();
    if (values.name && values.description && (values.file || values.image)) {
      const { createdBy, image, ...payload } = values

      if (typeof (values.file) === "object") {
        payload.file = values.file;
        payload.image = image;
      }
      else {
        payload.file = ""
      }

      payload.content = draftToHtml(convertToRaw(payload.content.getCurrentContent()))
      console.log("file", payload)
      dispatch(
        (isNew ? createBlog : updateBlog)(plainObjectToFormData(payload), onClick, refreshState)
      );
    } else {
      makeToast("error", "Kindly fill all the fields!");
    }
  };

  console.log({ values })
  const imageUpload = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    // reader.onloadend = (e) => {
    //   setUrl(e.target.result);
    // };
    // reader.readAsDataURL(file);
    if (isNew) {
      setValues(prev => ({ ...prev, file }))
      return
    }
    setValues(prev => ({ ...prev, file, image: prev.image || prev.file }))

  };


  console.log({ values })
  const onEditorStateChange = (editorState) => {
    console.log("editorState", editorState.getCurrentContent());
    // seteditorState(editorState);
    handleChange(
      "content", editorState)
    console.log(
      "content",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  const handleRemoveImage = removeImage => {

    if (typeof deletedImage === "string" && !isNew) {
      setValues(prev => ({ ...prev, image: removeImage, file: "" }))
    }
    else {
      setValues(prev => ({ ...prev, file: "" }))

    }
  }

  return (
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
                  editorState={values.content}
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
                    {values.file ? (
                      <>
                        <img src={getImageUrlByName(values.file)} className="uploaded" onClick={handleRemoveImage} alt="user" />
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
                <label for="Action">Is Active</label>
                <br />
                <ButtonGroup className="mb-2 toggleBtns">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant="light"
                      name="isApproved"
                      className="rounded-0"
                      value={radio.value}
                      checked={values.isApproved === radio.value}
                      onChange={(e) =>
                        //  setRadioValue(e.currentTarget.value)

                        handleChange(e.target.name, e.target.value)

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

  );
};

export default AddEditBlogModal;
