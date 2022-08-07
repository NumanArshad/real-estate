import { GET_ALL_BLOGS, GET_ALL_TOWN } from "../../actions/Action.Constant";

const initial_state = {
  blogs_listing: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case GET_ALL_BLOGS:
      return {
        ...state,
        blogs_listing: action.payload,
      };
    default:
      return state;
  }
}
