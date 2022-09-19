import { console_log, isArrayCheck, Log } from "../../../utils/helper";
import request from "../../../utils/request";
import makeToast from "../../../utils/Toaster";
import { GET_ALL_MAP_MODAL, GET_ALL_MARKET_RATES } from "../Action.Constant";
import { isLoading } from "../Loader";

export const createMarketRates =
  (userData, close, refreshState) => async (dispatch) => {
    console_log("createMarketRates ==>", userData);
    dispatch(isLoading(true));

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
        dispatch(isLoading(false));
      }
    } catch (e) {
      console_log("createMarketRates error", e);
      dispatch(isLoading(false));

      // makeToast("createMarketRates error", e.message);
    }
  };

export const updateMarketRates =
  (userData, close, message = null) =>
    async (dispatch) => {
      console_log("updateMarketRates", userData);
      dispatch(isLoading(true));

      try {
        const res = await request.post("/market-rates/update", userData);
        const { message, status, data } = res.data;
        if (!status === "Success") throw res.data;
        if (status === "Success") {
          makeToast("success", message ? message : "Blog Updated Successfully");
          console_log("Data", data);
          close();
          dispatch(getAllMarketRates());
          dispatch(isLoading(false));
        }
      } catch (e) {
        console_log("updateMarketRates error", e);
        dispatch(isLoading(false));

        // makeToast("createUser error", e.message);
      }
    };

export const deleteMarketRatesModal =
  (mapId, close) => async (dispatch) => {
    console_log("delete ==>", mapId);
    try {
      const res = await request.delete(`/market-rates/delete/${mapId}`);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllMarketRates());
        close();
      }
    } catch (e) {
      console_log("delete Market rates Modal error", e);

      // makeToast("createMapModal error", e.message);
    }
  };

export const updateMarketRatesActiveStatus =
  (mapId, isActive, close) => async (dispatch) => {
    console_log("path ==>", mapId);
    try {
      const res = await request.patch(`/market-rates/updateActiveStatus/${mapId}`, { isActive });
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllMarketRates());
        close();
      }
    } catch (e) {
      console_log("update Market rate status Modal error", e);

      // makeToast("createMapModal error", e.message);
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
