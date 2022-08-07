import {
  AUTH_USER,
  CALL_DATA,
  CALL_STATUS,
  GET_ALL_USERS,
  GET_MY_APOINTMENTS,
  GET_MY_PROFILE,
} from "../../actions/Action.Constant";

const initial_state = {
  users_listing: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users_listing: action.payload,
      };
    default:
      return state;
  }
}
