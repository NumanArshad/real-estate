// import {
//   AUTH_USER,
//   CALL_DATA,
//   CALL_STATUS,
//   GET_ALL_USERS,
//   GET_MY_APOINTMENTS,
//   GET_MY_PROFILE,
// } from "../../actions/Action.Constant";

// const initial_state = {
//   roooms_listing: {},
//   call_status: false,
//   call_data: null,
//   appointments_listing: [],
//   user: null,
// };

// export default function (state = initial_state, action) {
//   switch (action.type) {
//     case GET_ALL_USERS:
//       return {
//         ...state,
//         roooms_listing: action.payload,
//       };
//     case CALL_STATUS:
//       return {
//         ...state,
//         call_status: action.payload,
//       };

//     case CALL_DATA:
//       return {
//         ...state,
//         call_data: action.payload,
//       };
//     case GET_MY_APOINTMENTS:
//       return {
//         ...state,
//         appointments_listing: action.payload,
//       };

//     case GET_MY_PROFILE:
//       return {
//         ...state,
//         user: action.payload,
//       };
//     // case USER_LOGOUT:
//     //   return {
//     //     ...state,
//     //     user: {},
//     //     isAuthenticated: false,
//     //   };

//     default:
//       return state;
//   }
// }
