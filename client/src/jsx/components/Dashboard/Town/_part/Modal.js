import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { formatedDate, formatedTime, getImageUrlByName } from "../../../../../utils/helper";
import { updateUser } from "../../../../../store/actions/User/index";
import Dummy from "../../../../../images/1.jpg";
import { deleteTownModal } from "../../../../../store/actions/Town";
const ModalContent = ({ onClick, active, data }) => {
  const dispatch = useDispatch();
  console.log({ data })
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
          <div className="threeColumns agent-details">
            <div className="row w-100">
              <div className="col-md-4 mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">Name</h5>
                  <p className="m-0">{data?.name}</p>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">Tag Line</h5>
                  <p className="m-0">{data?.townInformation?.tagLine}</p>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">Block</h5>
                  <p className="m-0">{data?.block}</p>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">Area</h5>
                  <p className="m-0">{data?.area}</p>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">City</h5>
                  <p className="m-0">{data?.city}</p>
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <div className="justify-content-between align-items-center">
                  <h5 className="m-0">Address</h5>
                  <p className="m-0">{data?.city}</p>
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <div className="justify-content-between align-items-center">
                  <h5 className="m-0">Why Choose us </h5>
                  <p className="m-0">{data?.townInformation?.WhyChooseUs?.length ? data?.townInformation?.WhyChooseUs : `No Info Added`}</p>
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <div className="justify-content-between align-items-center">
                  <h5 className="m-0">Official Address</h5>
                  <p className="m-0">
                    {data?.townInformation?.officeAddress[0]?.address}
                  </p>
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <div className=" justify-content-between align-items-center">
                  <h5 className="m-0">Location Guide</h5>
                  <p className="m-0">{data?.townInformation?.LocationGuide?.length ? data?.townInformation?.LocationGuide : `No Location Guide`}</p>
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <div className=" justify-content-between align-items-center">
                  <h5 className="m-0">Affordable Payment Plan</h5>
                  <p className="m-0">
                    {data?.townInformation?.AffordablePaymentPlan?.length ? data?.townInformation?.AffordablePaymentPlan : `No Affordable Plan`}
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">Has Block</h5>
                  <p className="m-0">{data?.hasBlock ? 'Yes' : `No`}</p>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">Active</h5>
                  <p className="m-0">{data?.isActive ? 'Yes' : `No`}</p>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">Is On Construction</h5>
                  <p className="m-0">{data?.isOnConstruction ? 'Yes' : `No`}</p>
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <h5 className="mb-2 w-100">Gallery</h5>
                <p className="m-0 ">   {
                  data?.townInformation?.gallery.map((dat, index) => (
                    <img
                      src={getImageUrlByName(dat)}
                      className={`uploaded ${index ? `ml-2` : ``}`}
                      alt="user"
                    />
                  ))}</p>
              </div>
              {data?.townInformation?.paymentPlanImage && <div className="w-100 mb-2">
                <div className="justify-content-between align-items-center">
                  <h5 className="mb-2 w-100">Payment Plan Image</h5>

                  <p className="m-0"> <img
                    src={getImageUrlByName(data.townInformation?.paymentPlanImage)}
                    className="uploaded"
                    alt="user"
                  /></p>
                </div>
              </div>}
              {data?.townInformation?.floorPlanImage && <div className="col-md-12 mb-2">
                <div className="justify-content-between align-items-center">
                  <h5 className="mb-2 w-100">Floor Plan Image</h5>

                  <p className="m-0"> <img
                    src={getImageUrlByName(data.townInformation?.floorPlanImage)}
                    className="uploaded"
                    alt="user"
                  /></p>
                </div>
              </div>}
            </div>

            <div className="d-flex flex-row justify-content-center mt-2">
              <div
                className="btn btn-sm btn-danger"
                onClick={() => {
                  dispatch(
                    deleteTownModal(data?._id,
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
      </div>
    </Modal>
  );
};

export default ModalContent;
