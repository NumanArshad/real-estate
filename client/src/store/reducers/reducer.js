import { combineReducers } from "redux";

import Auth from "./Auth/index";
import Blog from "./Blog";
import MapModal from "./MapModal";
import MarketRates from "./MarketRates";
import Property from "./Property";
import SaleAgent from "./SaleAgent";
import Town from "./Town";
import User from "./User";
import Home from "./CustomerReducer/Home";
import Loader from "./Loader";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  _auth: Auth,
  _saleAgent: SaleAgent,
  _town: Town,
  _blog: Blog,
  _mapModal: MapModal,
  _marketRates: MarketRates,
  _property: Property,
  _home: Home,
  _loader: Loader,
});

export default reducer;
