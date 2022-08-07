import { combineReducers } from "redux";

import Auth from "./Auth/index";
import Blog from "./Blog";
import MapModal from "./MapModal";
import MarketRates from "./MarketRates";
import Property from "./Property";
import SaleAgent from "./SaleAgent";
import Town from "./Town";
import User from "./User";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  _auth: Auth,
  _saleAgent: SaleAgent,
  _town: Town,
  _blog: Blog,
  _mapModal: MapModal,
  _marketRates: MarketRates,
  _property: Property,
});

export default reducer;
