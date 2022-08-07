import { GET_ALL_TOWN } from "../../actions/Action.Constant";

const initial_state = {
  towns_listing: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case GET_ALL_TOWN:
      return {
        ...state,
        towns_listing: action.payload,
      };
    default:
      return state;
  }
}
