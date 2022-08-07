// import * as React from "react";
// import Modal from "@material-ui/core/Modal/Modal";
// import { NOT_FOUND_IMAGE } from "../../../utils/helper";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Avatar from "../../../images/avatar/3.jpg";
// import { acceptCall, rejectCall } from "../../../store/actions/User";
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   padding: 25,
//   backgroundColor: "#fff",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   borderRadius: 15,
// };
// export default function CallModal({ visible, setvisible, data }) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const dispatch = useDispatch();
//   const { call_data } = useSelector((state) => state._user);
//   // console.log("Call Data", call_data);
//   const handleClose = () => {
//     setvisible(false);
//     const callData = JSON.parse(call_data?.data);

//     dispatch(
//       rejectCall({
//         isUser: false,
//         call_id: callData?._id,
//       })
//     );
//   };

//   const handleAccept = () => {
//     handleClose();
//     const callData = JSON.parse(call_data?.data);
//     console.log("Call Accept", callData);
//     push("call", { call: JSON.parse(call_data?.data) });
//     dispatch(
//       acceptCall({
//         isUser: false,
//         call_id: callData?._id,
//       })
//     );
//   };
//   const { push } = useHistory();
//   console.log("call popup Data", data?.title);
//   return (
//     <Modal
//       open={visible}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <div style={style}>
//         <img src={Avatar} style={{ width: 65, height: 65, borderRadius: 10 }} />
//         <h5 style={{ marginTop: 10 }}>{call_data?.title}.</h5>
//         <div
//           style={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "space-around",
//             marginTop: 10,
//           }}
//         >
//           <button
//             className="btn btn-sm btn-danger rounded detail-btn mx-2"
//             style={{ width: 100 }}
//             onClick={handleClose}
//           >
//             End <i className="fa fa-ban"></i>
//           </button>
//           <button
//             className="btn btn-sm btn-primary rounded detail-btn mx-2"
//             style={{ width: 100 }}
//             onClick={handleAccept}
//           >
//             Accept <i className="fa fa-phone"></i>
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// }
