import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DataTable from "react-data-table-component";

import { COLUMN_HERADER } from "../../../../utils/Header/index.js";
import { formatedDate, formatedTime, getImageUrlByName } from "../../../../utils/helper.js";
import { getAllUsers } from "../../../../store/actions/User/index.js";
import AddEditMapsModal from "./_part/AddEditMapsModal.js";
import EditMapsModal from "./_part/EditMapsModal.js";
import ModalContent from "./_part/Modal.js";
import CustomModal from "../../modal/CustomModal.jsx";
import { getAllMapModal, updateMapActiveStatus } from "../../../../store/actions/MapModal/index.js";
import request from "../../../../utils/request.js";

const MapsListing = () => {
  const [ApointmnetDetails, setApointmnetDetails] = useState("");
  const [EditDetails, setEditDetails] = useState("");
  const [open, setopen] = useState(false);
  const [edit, setedit] = useState(false);
  const [openDetails, setopenDetails] = useState(false);
  const [modalData, setModalData] = useState({ data: null, isAddEdit: false, isView: false })

  const { map_modal_listing } = useSelector((state) =>
    state?._mapModal
  );

  const handleModalToggle = ({ isAddEdit = false, isView = false, data = null }) => {
    setModalData({ isAddEdit, isView, data })
  }


  // const users_listing = [
  //   {
  //     _id: "62c86bf7933609268efc17b3",
  //     email: "user@gmail.io",
  //     password: "$2a$10$ClhEVYPuSoA1rF0xFHEymuPjfTiVy6lGtz9rRRc29R0QJNrOb98ye",
  //     first_name: "User",
  //     last_name: "",
  //     profile:
  //       "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg",
  //     designation: "Sale Ex",
  //     role: "saleagent",
  //     forgotPinCode: "",
  //     phone: "0989763567",
  //     address: "Multan Road Lahore",
  //     city: "Lahore",
  //     idCard: "1234567890",
  //     gender: "male",
  //     changePassword: true,
  //     isActive: true,
  //     created_at: "2022-07-08T17:40:07.168Z",
  //     updated_at: "2022-07-08T17:40:07.168Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "62c85807e653d4b20f82a84a",
  //     email: "abc14@gmail.com",
  //     password: "$2a$10$QrBcPqtDICSLawrMwx72EOUZOZ5DA2ddeZSpu7P8RF7/hHT78/wfm",
  //     first_name: "Jhon",
  //     last_name: "Don",
  //     profile:
  //       "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg",
  //     designation: "Sale Ex.",
  //     role: "user",
  //     forgotPinCode: "",
  //     gender: "male",
  //     changePassword: true,
  //     isActive: true,
  //     created_at: "2022-07-08T16:15:03.259Z",
  //     updated_at: "2022-07-08T17:18:32.532Z",
  //     __v: 0,
  //     phone: "123356789",
  //     address: "Multan Road Lahore",
  //     city: "Lahore",
  //     idCard: "09876543234567",
  //   },
  // ];

  const [row, setrow] = useState([]);


  const [townOptions, setTownOptions] = useState([]);

  useEffect(() => {

    request.get("/towns/activeTownOptions").then((response) => {
      setTownOptions(response?.data?.data);
    });

  }, []);





  useEffect(() => {
    if (map_modal_listing?.length) {
      makeRow();
    } else {
      console.log("maps all getting ...")
      dispatch(getAllMapModal());
    }
  }, [map_modal_listing]);
  //  id: 0, designer: 'Salman', price: 100, buyer: 'Jhon', buyerAddress: 'Lahore', status: 'pending'
  console.log({ map_modal_listing, townOptions })

  const makeRow = () => {
    var data =
      Array.isArray(map_modal_listing) && map_modal_listing.length > 0
        ? map_modal_listing.map((data, id) => ({
          id: id + 1,
          image: (
            <img
              src={getImageUrlByName(data?.image)}
              style={{ width: 50, height: 50, borderRadius: 100, margin: 5 }}
              alt="Dummy"
            />
          ),
          name: data?.town?.name,
          // idCard: data?.idCard,
          // phone: data?.phone,
          // email: data?.email,
          // city: data?.city,
          // address: data?.address,
          // role: data?.role,
          // gender: data?.gender,
          // designation: data?.designation,
          action: (
            <div className="d-flex align-items-center">
              <button
                onClick={handleModalToggle.bind({}, { isAddEdit: true, data })}

                className="btn btn-sm btn-primary rounded-circle detail-btn mx-2"
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                onClick={handleModalToggle.bind({}, { isView: true, data })}

                className="btn btn-sm btn-primary rounded-circle detail-btn mx-2"
              >
                <i className="fa fa-info"></i>
              </button>
              <button
                onClick={event => {
                  dispatch(updateMapActiveStatus(data?._id, !data?.isActive))
                }}
                className="btn btn-sm btn-primary rounded-circle detail-btn mx-2"
              >
                <i className={`fa  fa-toggle-${data?.isActive ? `on` : `off`}`}></i>
              </button>
            </div>
          ),
        }))
        : [];
    // console.log('Row Data', users_listing);
    setrow(data);
  };

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllUsers());
  //   console.log("Listing Page");
  // }, []);


  const filteredTownOptions = useMemo(() => {
    console.log(map_modal_listing)
    const mapListingTownId = map_modal_listing?.map(({ town }) => town?._id)
    return townOptions?.filter(({ _id }) => !mapListingTownId?.includes(_id))

  }, [map_modal_listing, townOptions])

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Maps Modal</h4>
          <h4
            className="btn btn-primary"
            onClick={handleModalToggle.bind({}, { isAddEdit: true })}
            hidden={!filteredTownOptions?.length}
          >
            Add
          </h4>
        </div>
        <div className="card-body">
          <DataTable
            columns={COLUMN_HERADER.maps_listing_header}
            data={row}
            defaultSortFieldId={1}
            pagination
            responsive
          />
        </div>
      </div>
      <CustomModal title={`${modalData.data ? `Edit` : `Create`} Maps Modal`}
        handleClose={handleModalToggle.bind({}, { isAddEdit: false })} isActive={modalData.isAddEdit}>
        <AddEditMapsModal onClick={handleModalToggle.bind({}, { isAddEdit: false })} data={modalData.data}

          townOptions={filteredTownOptions} />
      </CustomModal>
      <EditMapsModal
        active={edit}
        onClick={() => setedit(false)}
        data={ApointmnetDetails}
      />
      <ModalContent
        active={modalData.isView}
        onClick={handleModalToggle.bind({}, { isView: false })}
        data={modalData.data}
      />
    </div>
  );
};

export default MapsListing;
