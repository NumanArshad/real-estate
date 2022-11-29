import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { formatedDate, formatedTime, getImageUrlByName } from "../../../../../utils/helper";
import { updateUser } from "../../../../../store/actions/User/index";
import Dummy from "../../../../../images/1.jpg";
import { deleteProperty } from "../../../../../store/actions/Property";
import moment from "moment";
const ModalContent = ({ onClick, active, data }) => {
  const dispatch = useDispatch();
  return (
    <Modal size="lg" className=" fade" id="aAddDietMenus" show={active}>
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Propert Details</Modal.Title>
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
              <h5 className="m-0">Property Description</h5>
              <p className="m-0">{data?.description}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Bedroom Count</h5>
              <p className="m-0">{data?.bedRoomCount}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Bathroom Count </h5>
              <p className="m-0">{data?.bathRoomCount}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Car Parking</h5>
              <p className="m-0">{data?.carGarage}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Status</h5>
              <p className="m-0">For {data?.status === "both" ? `Rent & Sale` : `${data?.status?.[0].toUpperCase()}${data?.status?.slice(1)}`}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Type</h5>
              <p className="m-0">{data?.type}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Area</h5>
              <p className="m-0">{data?.area}</p>
            </div>
            <div className="w-100">
              <h5 className="m-0">Location</h5>
              <p className="m-0">{data?.address}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Updated On</h5>
              <p className="m-0">{moment(data?.updated_at).format("LLL")}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Built On</h5>
              <p className="m-0">{moment(data?.builtOn).format("MMMM DD, YYYY")}</p>

            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Marla</h5>
              <p className="m-0">{data?.marla}</p>
            </div>

            {/* <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Landarea</h5>
              <p className="m-0">0</p>
            </div> */}
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Discount</h5>
              <p className="m-0">{data?.status}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Down Payment</h5>
              <p className="m-0">{data?.status}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Interest Rate</h5>
              <p className="m-0">{data?.status}</p>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Installment Year</h5>
              <p className="m-0">{data?.status}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Tax</h5>
              <p className="m-0">{data?.status}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">PMI</h5>
              <p className="m-0">{data?.status}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Land Area</h5>
              <p className="m-0">{data?.landArea}</p>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">City</h5>
              <p className="m-0">{data?.city}</p>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Country</h5>
              <p className="m-0">{data?.country}</p>
            </div>

            <div className="w-100">
              <h5 className="m-0">Address</h5>
              <p className="m-0">{data?.address}</p>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Price</h5>
              <p className="m-0">{data?.price}</p>
            </div>
            <div className="w-100">
              <h5 className="mb-2 w-100">Images</h5>
              <p className="m-0">   {
                data?.images?.map((dat, index) => (
                  <img

                    src={getImageUrlByName(dat)}
                    className={`uploaded ${index ? `ml-2` : ``}`}
                    alt="user"
                  />
                ))}</p>
            </div>
            <div className="w-100 mt-2 text-center">
              <div
                className="btn btn-sm btn-danger"
                onClick={() => {
                  dispatch(
                    deleteProperty(data?._id,
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
