import {
  GET_ALL_BLOGS,
  GET_ALL_MAP_MODAL,
  GET_ALL_TOWN,
} from "../../actions/Action.Constant";

const initial_state = {
  map_modal_listing: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case GET_ALL_MAP_MODAL:
      return {
        ...state,
        map_modal_listing: action.payload,
      };
    default:
      return state;
  }
}
