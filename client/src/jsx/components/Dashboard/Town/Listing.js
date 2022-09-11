import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DataTable from "react-data-table-component";

import { COLUMN_HERADER } from "../../../../utils/Header/index.js";
import { formatedDate, formatedTime } from "../../../../utils/helper.js";
import ModalContent from "./_part/Modal.js";
import { getAllTowns } from "../../../../store/actions/Town/index.js";
import AddEditTownModal from "./_part/AddEditTownModal.js";
import EditTownModal from "./_part/EditTownModal.js";
import CustomModal from "../../modal/CustomModal.jsx";

const TownListing = () => {
  const [ApointmnetDetails, setApointmnetDetails] = useState("");
  const [EditDetails, setEditDetails] = useState("");
  const [open, setopen] = useState(false);
  const [edit, setedit] = useState(false);
  const [openDetails, setopenDetails] = useState(false);
  const { towns_listing } = useSelector((state) => state._town);

  // const towns_listing = [
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

  const [modalData, setModalData] = useState({ data: null, isAddEdit: false, isView: false })
  const handleModalToggle = ({ isAddEdit = false, isView = false, data = null }) => {
    setModalData({ isAddEdit, isView, data })
  }

  useEffect(() => {
    if (towns_listing) {
      makeRow();
    } else {
      dispatch(getAllTowns());
    }
  }, [towns_listing]);
  //  id: 0, designer: 'Salman', price: 100, buyer: 'Jhon', buyerAddress: 'Lahore', status: 'pending'
  console.log("towns_listing", towns_listing);
  const makeRow = () => {
    var data =
      Array.isArray(towns_listing) && towns_listing.length > 0
        ? towns_listing.map((data, id) => ({
          id: id + 1,
          image: (
            <img
              src={data?.profile}
              style={{ width: 50, height: 50, borderRadius: 100, margin: 5 }}
              alt="Dummy"
            />
          ),
          name: data?.name,
          idCard: data?.idCard,
          phone: data?.phone,
          email: data?.email,
          city: data?.city,
          address: data?.address,
          role: data?.role,
          gender: data?.gender,
          designation: data?.designation,
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
            </div>
          ),
        }))
        : [];
    // console.log('Row Data', towns_listing);
    setrow(data);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTowns());
    console.log("Listing Page");
  }, []);

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Town Information</h4>
          <h4
            className="btn btn-primary"
            onClick={handleModalToggle.bind({}, { isAddEdit: true })}

          >
            Add
          </h4>
        </div>
        <div className="card-body">
          <DataTable
            columns={COLUMN_HERADER.town_listing_header}
            // data={[
            //   {
            //     id: 1,
            //     action: (
            //       <div className="d-flex align-items-center">
            //         <button
            //           onClick={() => {
            //             // setApointmnetDetails(data);
            //             setedit(true);
            //           }}
            //           className="btn btn-sm btn-primary rounded-circle detail-btn mx-2"
            //         >
            //           <i className="fa fa-edit"></i>
            //         </button>
            //         <button
            //           onClick={() => {
            //             // setApointmnetDetails(data);
            //             setopenDetails(true);
            //           }}
            //           className="btn btn-sm btn-primary rounded-circle detail-btn mx-2"
            //         >
            //           <i className="fa fa-info"></i>
            //         </button>
            //       </div>
            //     ),
            //   },
            // ]}
            data={row}
            defaultSortFieldId={1}
            pagination
            responsive
          />
        </div>
      </div>
      <CustomModal title={`${modalData.data ? `Edit` : `Add`} Town`}
        handleClose={handleModalToggle.bind({}, { isAddEdit: false })} isActive={modalData.isAddEdit}>
        <AddEditTownModal active={open} onClick={handleModalToggle.bind({}, { isAddEdit: false })} data={modalData.data} />
      </CustomModal>
      <EditTownModal
        active={edit}
        onClick={() => setedit(false)}
        data={ApointmnetDetails}
      />
      <ModalContent
        active={openDetails}
        onClick={() => setopenDetails(false)}
        data={ApointmnetDetails}
      />
    </div>
  );
};

export default TownListing;
