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
          <Modal.Title className="modal-title">Town Details</Modal.Title>
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
              <h5 className="m-0">Name</h5>
              <p className="m-0">{data?.first_name + " " + data?.last_name}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Tag Line</h5>
              <p className="m-0">
                Aslam
              </p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Why Choose us </h5>
              <p className="m-0">{data?.idCard}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Official Address</h5>
              <p className="m-0">{data?.phone}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Location Guide</h5>
              <p className="m-0">{data?.email}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Address</h5>
              <p className="m-0">{data?.city}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Affordable Payment Plan</h5>
              <p className="m-0">{data?.address}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Block</h5>
              <p className="m-0">{data?.role}</p>
            </div>

            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Area</h5>
              <p className="m-0">{data?.gender}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">City</h5>
              <p className="m-0">{data?.designation}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Has Block</h5>
              <p className="m-0">{data?.designation}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Gallery</h5>
              <p className="m-0">{data?.designation}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Payment Plan Image</h5>
              <p className="m-0">{data?.designation}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Active</h5>
              <p className="m-0">{data?.designation}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Is On Construction</h5>
              <p className="m-0">{data?.designation}</p>
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
