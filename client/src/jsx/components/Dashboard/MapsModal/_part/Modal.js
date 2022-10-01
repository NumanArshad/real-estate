import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { formatedDate, formatedTime, getImageUrlByName } from "../../../../../utils/helper";
import { updateUser } from "../../../../../store/actions/User/index";
import Dummy from "../../../../../images/1.jpg";
import { deleteMapModal } from "../../../../../store/actions/MapModal";
const ModalContent = ({ onClick, active, data }) => {
  const dispatch = useDispatch();
  return (
    <Modal
      size="lg"
      className="smallWidth fade"
      id="aAddDietMenus"
      show={active}
    >
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Maps Details</Modal.Title>
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
            <div className="w-100">
              <h5 className="mb-2 w-100">Image</h5>
              <p className="m-0">
                <img
                  src={getImageUrlByName(data?.image)}
                  className="imgPreview"
                  alt="Dummy"
                />
              </p>
            </div>
            <div className="w-100">
              <h5 className="m-0">Town</h5>
              <p className="m-0">{data?.town?.name}</p>
            </div>

            <div className="w-100">
              <h5 className="m-0">Address </h5>
              <p className="m-0">{data?.town?.address}</p>
            </div>
            <div className="w-100">
              <h5 className="m-0">Is Active</h5>
              <p className="m-0">{data?.isActive ? `Yes` : `No`}</p>
            </div>

            <div className="ml-auto mr-auto mt-2">
              <div
                className="btn btn-sm btn-danger"
                onClick={() => {
                  dispatch(
                    deleteMapModal(data?._id,
                      onClick,
                    )
                  );
                }}
              >
                Remove
              </div>
            </div>
          </div>
        </Modal.Body>
      </div >
    </Modal >
  );
};

export default ModalContent;
