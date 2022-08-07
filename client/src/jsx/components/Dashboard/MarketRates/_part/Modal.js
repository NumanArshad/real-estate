import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { formatedDate, formatedTime } from "../../../../../utils/helper";
import { updateUser } from "../../../../../store/actions/User/index";
import Dummy from "../../../../../images/1.jpg";
const ModalContent = ({ onClick, active, data }) => {
  const dispatch = useDispatch();
  return (
    <Modal size="lg" className=" fade" id="aAddDietMenus" show={active}>
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Plots Rates Details</Modal.Title>
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
          <div className="agent-details">
          <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Town</h5>
              <p className="m-0">{data?.first_name + " " + data?.last_name}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Plot Name</h5>
              <p className="m-0">
                Aslam
              </p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Plot Type </h5>
              <p className="m-0">{data?.idCard}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Price From</h5>
              <p className="m-0">{data?.phone}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Price To</h5>
              <p className="m-0">{data?.phone}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">IS Active</h5>
              <p className="m-0">{data?.phone}</p>
            </div>
            <hr />
           
            <div className="d-flex flex-row justify-content-center mt-2">
              <div
                className="btn btn-sm btn-danger"
                onClick={() => {
                  dispatch(
                    updateUser(
                      { userId: data?._id, isActive: false },
                      onClick,
                      "Users Deleted Successfully!"
                    )
                  );
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
