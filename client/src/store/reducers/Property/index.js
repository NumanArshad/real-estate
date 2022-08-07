import {
  GET_ALL_PROPERTIES,
  GET_ALL_TOWN,
} from "../../actions/Action.Constant";

const initial_state = {
  properties_listing: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case GET_ALL_PROPERTIES:
      return {
        ...state,
        properties_listing: action.payload,
      };
    default:
      return state;
  }
}
