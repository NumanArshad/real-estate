import {
  GET_ALL_BLOGS,
  GET_ALL_MAP_MODAL,
  GET_ALL_MARKET_RATES,
  GET_ALL_TOWN,
} from "../../actions/Action.Constant";

const initial_state = {
  market_rates_listings: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case GET_ALL_MARKET_RATES:
      return {
        ...state,
        market_rates_listings: action.payload,
      };
    default:
      return state;
  }
}
