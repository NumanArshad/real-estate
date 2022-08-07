import { console_log, isArrayCheck, Log } from "../../../utils/helper";
import request from "../../../utils/request";
import makeToast from "../../../utils/Toaster";
import { GET_ALL_MAP_MODAL, GET_ALL_MARKET_RATES } from "../Action.Constant";

export const createMarketRates =
  (userData, close, refreshState) => async (dispatch) => {
    console_log("createMarketRates ==>", userData);
    try {
      const res = await request.post("/market-rates/add", userData);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllMarketRates());
        close();
        refreshState();
      }
    } catch (e) {
      console_log("createMarketRates error", e);

      // makeToast("createMarketRates error", e.message);
    }
  };

export const updateMarketRates =
  (userData, close, message = null) =>
  async (dispatch) => {
    console_log("updateMarketRates", userData);
    try {
      const res = await request.post("/market-rates/update", userData);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message ? message : "Blog Updated Successfully");
        console_log("Data", data);
        close();
        dispatch(getAllMarketRates());
      }
    } catch (e) {
      console_log("updateMarketRates error", e);

      // makeToast("createUser error", e.message);
    }
  };

export const getAllMarketRates = () => async (dispatch) => {
  console_log("Call => getAllMarketRates");
  try {
    const res = await request.get("/market-rates/getAll");
    const { message, status, data } = res.data;
    if (!status === "Success") throw res.data;
    if (status === "Success") {
      console_log("Data", data?.data);
      dispatch({
        type: GET_ALL_MARKET_RATES,
        payload: data?.data,
      });
    }
  } catch (e) {
    console_log("getAllMarketRates error", e);

    // makeToast("getAllUserListing error", e.message);
  }
};
