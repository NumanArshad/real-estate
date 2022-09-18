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
import { isLoading } from "../Loader";

export const createTown =
  (userData, close, refreshState) => async (dispatch) => {
    console_log("create Town ==>", userData);
    dispatch(isLoading(true));

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
        dispatch(isLoading(false));
      }
    } catch (e) {
      console_log("createTown error", e);
      dispatch(isLoading(false));

      // makeToast("createTown error", e.message);
    }
  };

export const updateTown =
  (userData, close, message = null) =>
    async (dispatch) => {
      console_log("updateTown", userData, userData?._id);
      dispatch(isLoading(true));

      try {
        const res = await request.put("/towns/updateTown", userData);
        const { message, status, data } = res.data;
        if (!status === "Success") throw res.data;
        if (status === "Success") {
          makeToast("success", message ? message : "Town Updated Successfully");
          console_log("Data", data);
          close();
          dispatch(getAllTowns());
          dispatch(isLoading(false));
        }
      } catch (e) {
        console_log("updateTown error", e);
        dispatch(isLoading(false));

        // makeToast("createUser error", e.message);
      }
    };

export const deleteTownModal =
  (mapId, close) => async (dispatch) => {
    console_log("delete ==>", mapId);
    try {
      const res = await request.delete(`/towns/delete/${mapId}`);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllTowns());
        close();
      }
    } catch (e) {
      console_log("deleteTownModal error", e);

      // makeToast("createMapModal error", e.message);
    }
  };

export const updateTownActiveStatus =
  (mapId, isActive, close) => async (dispatch) => {
    console_log("path ==>", mapId);
    try {
      const res = await request.patch(`/towns/updateActiveStatus/${mapId}`, { isActive });
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllTowns());
        close();
      }
    } catch (e) {
      console_log("updateMap status Modal error", e);

      // makeToast("createMapModal error", e.message);
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
