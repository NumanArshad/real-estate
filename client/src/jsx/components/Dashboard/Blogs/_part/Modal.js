import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { formatedDate, formatedTime } from "../../../../../utils/helper";
import { updateUser } from "../../../../../store/actions/User/index";
import Dummy from "../../../../../images/1.jpg";
const ModalContent = ({ onClick, active, data }) => {
  const dispatch = useDispatch();
  console.log("Datta", data);
  return (
    <Modal
      size="lg"
      className="smallWidth fade"
      id="aAddDietMenus"
      show={active}
    >
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
          <div className="blogDetail">
            <h1>Blog Post</h1>
            <div className="blogInner">
              <h2>{data?.name}</h2>
              <p>
                Posted on <span>{formatedDate(data?.created_at)}</span> by{" "}
                <span>{data?.createdBy?.first_name}</span>
              </p>
              <hr />
              <p dangerouslySetInnerHTML={{ __html: data?.content }}></p>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalContent;
