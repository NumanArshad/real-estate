import { API_LOADING } from "../../actions/Action.Constant";

const initial_state = {
  api_loading: false,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case API_LOADING:
      return {
        ...state,
        api_loading: action.payload,
      };

    default:
      return state;
  }
}
