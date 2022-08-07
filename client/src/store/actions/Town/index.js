import { console_log, isArrayCheck, Log } from "../../../utils/helper";
import request from "../../../utils/request";
import makeToast from "../../../utils/Toaster";
import {
  CALL_DATA,
  CALL_STATUS,
  GET_ALL_TOWN,
  GET_ALL_USERS,
  GET_MY_APOINTMENTS,
  GET_MY_PROFILE,
} from "../Action.Constant";

export const createTown =
  (userData, close, refreshState) => async (dispatch) => {
    console_log("create Town ==>", userData);
    try {
      const res = await request.post("/towns/addTown", userData);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllTowns());
        close();
        refreshState();
      }
    } catch (e) {
      console_log("createTown error", e);

      // makeToast("createTown error", e.message);
    }
  };

export const updateTown =
  (userData, close, message = null) =>
  async (dispatch) => {
    console_log("updateTown", userData);
    try {
      const res = await request.post("/towns/updateTown", userData);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message ? message : "Town Updated Successfully");
        console_log("Data", data);
        close();
        dispatch(getAllTowns());
      }
    } catch (e) {
      console_log("updateTown error", e);

      // makeToast("createUser error", e.message);
    }
  };

export const getAllTowns = () => async (dispatch) => {
  console_log("Call => getAllTowns");
  try {
    const res = await request.get("/towns/getAllTown");
    const { message, status, data } = res.data;
    if (!status === "Success") throw res.data;
    if (status === "Success") {
      console_log("Data", data?.data);
      dispatch({
        type: GET_ALL_TOWN,
        payload: data?.data,
      });
    }
  } catch (e) {
    console_log("getAllTowns error", e);

    // makeToast("getAllUserListing error", e.message);
  }
};
