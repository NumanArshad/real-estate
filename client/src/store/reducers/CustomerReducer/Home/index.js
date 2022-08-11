import {
  GET_HOME_PAGE_AGENTS,
  GET_HOME_PAGE_DATA,
} from "../../../actions/Action.Constant";

const initial_state = {
  home_data: null,
  sale_agents: null,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case GET_HOME_PAGE_DATA:
      return {
        ...state,
        home_data: action.payload,
      };

    case GET_HOME_PAGE_AGENTS:
      return {
        ...state,
        sale_agents: action.payload,
      };
    default:
      return state;
  }
}
