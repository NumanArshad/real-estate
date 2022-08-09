import { console_log, isArrayCheck, Log } from "../../../utils/helper";
import request from "../../../utils/request";
import makeToast from "../../../utils/Toaster";
import {
  CALL_DATA,
  CALL_STATUS,
  GET_ALL_USERS,
  GET_MY_APOINTMENTS,
  GET_MY_PROFILE,
} from "../Action.Constant";

export const createUser =
  (userData, close, refreshState) => async (dispatch) => {
    console_log("createRoom", userData);
    try {
      const res = await request.post("/users/add", userData);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllUsers());
        close();
        refreshState();
      }
    } catch (e) {
      makeToast("error", e.message);
      console_log("createUser error", e);

      // makeToast("createUser error", e.message);
    }
  };

export const updateUser =
  (userData, close, message = null) =>
  async (dispatch) => {
    console_log("updateUser", userData);
    try {
      const res = await request.post("/users/update", userData);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message ? message : "User Updated Successfully");
        console_log("Data", data);
        close();
        dispatch(getAllUsers());
      }
    } catch (e) {
      console_log("updateUser error", e);

      // makeToast("createUser error", e.message);
    }
  };

export const getAllUsers = () => async (dispatch) => {
  console_log("Call => getAllUsers");
  try {
    const res = await request.get("/users/all");
    const { message, status, data } = res.data;
    if (!status === "Success") throw res.data;
    if (status === "Success") {
      console_log("Data", data?.data);
      dispatch({
        type: GET_ALL_USERS,
        payload: data?.response,
      });
    }
  } catch (e) {
    console_log("getAllUsers error", e);

    // makeToast("getAllUserListing error", e.message);
  }
};
