import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DataTable from "react-data-table-component";

import { COLUMN_HERADER } from "../../../../utils/Header/index.js";
import { formatedDate, formatedTime } from "../../../../utils/helper.js";
import { getAllUsers } from "../../../../store/actions/User/index.js";
import AddBlogModal from "./_part/AddBlogModal.js";
import EditBlogModal from "./_part/EditBlogModal.js";
import ModalContent from "./_part/Modal.js";
import { getAllBlogs } from "../../../../store/actions/Blog/index.js";

const BlogListing = () => {
  const [ApointmnetDetails, setApointmnetDetails] = useState("");
  const [EditDetails, setEditDetails] = useState("");
  const [open, setopen] = useState(false);
  const [edit, setedit] = useState(false);
  const [openDetails, setopenDetails] = useState(false);
  const { blogs_listing } = useSelector((state) => state._blog);
  // const blogs_listing = [
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

  useEffect(() => {
    if (blogs_listing) {
      makeRow();
    } else {
      dispatch(getAllBlogs());
    }
  }, [blogs_listing]);
  //  id: 0, designer: 'Salman', price: 100, buyer: 'Jhon', buyerAddress: 'Lahore', status: 'pending'

  const makeRow = () => {
    var data =
      Array.isArray(blogs_listing) && blogs_listing.length > 0
        ? blogs_listing.map((data, id) => ({
            id: id + 1,
            name: data?.name,
            description: data?.description,
            action: (
              <div className="d-flex align-items-center">
                <button
                  onClick={() => {
                    setApointmnetDetails(data);
                    setedit(true);
                  }}
                  className="btn btn-sm btn-primary rounded-circle detail-btn mx-2"
                >
                  <i className="fa fa-edit"></i>
                </button>
                <button
                  onClick={() => {
                    setApointmnetDetails(data);
                    setopenDetails(true);
                  }}
                  className="btn btn-sm btn-primary rounded-circle detail-btn mx-2"
                >
                  <i className="fa fa-info"></i>
                </button>
              </div>
            ),
          }))
        : [];
    // console.log('Row Data', blogs_listing);
    setrow(data);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  console.log("Listing Page", blogs_listing);

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Blog Information</h4>
          <h4
            className="btn btn-primary"
            onClick={() => {
              setopen(true);
            }}
          >
            Add
          </h4>
        </div>
        <div className="card-body">
          <DataTable
            columns={COLUMN_HERADER.blog_listing_header}
            data={row}
            defaultSortFieldId={1}
            pagination
            responsive
          />
        </div>
      </div>
      <AddBlogModal active={open} onClick={() => setopen(false)} data={null} />
      <EditBlogModal
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

export default BlogListing;
