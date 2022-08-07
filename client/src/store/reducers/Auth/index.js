import { AUTH_USER, USER_LOGOUT } from "../../actions/Action.Constant";

const initial_state = {
  isAuthenticated: false,
  user: {},
  role: null,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    // case UPDATE_ROLE:
    //   return {
    //     ...state,
    //     role: action.payload,
    //   };

    // case GET_MY_PROFILE:
    //   return {
    //     ...state,
    //     isAuthenticated: true,
    //     user: action.payload,
    //     role: action.payload.user.role[0],
    //   };
    case USER_LOGOUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
