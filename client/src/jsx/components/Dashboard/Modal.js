import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { formatedDate, formatedTime } from "../../../utils/helper";
import { deleteRoom } from "../../../store/actions/User/index";
const ModalContent = ({ onClick, active, data }) => {
  const dispatch = useDispatch();
  return (
    <Modal className=" fade" id="aAddDietMenus" show={active}>
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Appointment Details</Modal.Title>
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
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Room Name</h5>
              <p className="m-0">{data?.name}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Room Code</h5>
              <p className="m-0">{data?.passcode}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Status</h5>
              <p className="m-0">{data?.isActive ? "Active" : "Expire"}</p>
            </div>
            <div className="d-flex flex-row justify-content-center mt-2">
              <div
                className="btn btn-sm btn-danger"
                onClick={() => {
                  dispatch(deleteRoom({ id: data?._id }, onClick));
                }}
              >
                Remove
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalContent;
