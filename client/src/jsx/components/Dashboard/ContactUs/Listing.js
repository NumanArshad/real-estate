import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DataTable from "react-data-table-component";

import { COLUMN_HERADER } from "../../../../utils/Header/index.js";
import request from "../../../../utils/request.js";

const ContactUs = () => {


  const [row, setrow] = useState([]);


  const [data, setData] = useState([])

  useEffect(() => {
    if (data.length) {
      makeRow();
    } else {
      request.get("/contactUs/allContactList").then((response) => {
        if (response.status === 200) {
          setData(response.data.data)
        }
      })
    }
  }, [data]);
  //  id: 0, designer: 'Salman', price: 100, buyer: 'Jhon', buyerAddress: 'Lahore', status: 'pending'

  const makeRow = () => {
    var rowDataList =
      Array.isArray(data) && data.length > 0
        ? data.map((data, id) => ({
          id: id + 1,
          image: (
            <img
              src={data?.profile}
              style={{ width: 50, height: 50, borderRadius: 100, margin: 5 }}
              alt="Dummy"
            />
          ),
          name: `${data.firstName} ${data.lastName}`,
          email: data?.email,
          contactNo: data?.contactNo,
          message: data?.message

        }))
        : [];
    // console.log('Row Data', properties_listing);
    setrow(rowDataList);
  };



  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Contact Us</h4>
        </div>
        <div className="card-body">
          <DataTable
            columns={COLUMN_HERADER.contact_us_listing_header}
            data={row}
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
            defaultSortFieldId={1}
            pagination
            responsive
          />
        </div>
      </div>

    </div>
  );
};

export default ContactUs;
