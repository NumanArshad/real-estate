import { console_log, isArrayCheck, Log } from "../../../utils/helper";
import request from "../../../utils/request";
import makeToast from "../../../utils/Toaster";
import { GET_ALL_MAP_MODAL } from "../Action.Constant";

export const createMapModal =
  (userData, close, refreshState) => async (dispatch) => {
    console_log("createMapModal ==>", userData);
    try {
      const res = await request.post("/maps/add", userData);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllMapModal());
        close();
        refreshState();
      }
    } catch (e) {
      console_log("createMapModal error", e);

      // makeToast("createMapModal error", e.message);
    }
  };


export const deleteMapModal =
  (mapId, close) => async (dispatch) => {
    console_log("delete ==>", mapId);
    try {
      const res = await request.delete(`/maps/delete/${mapId}`);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllMapModal());
        close();
      }
    } catch (e) {
      console_log("createMapModal error", e);

      // makeToast("createMapModal error", e.message);
    }
  };

export const updateMapActiveStatus =
  (mapId, isActive, close) => async (dispatch) => {
    console_log("path ==>", mapId);
    try {
      const res = await request.patch(`/maps/updateActiveStatus/${mapId}`, { isActive });
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllMapModal());
        close();
      }
    } catch (e) {
      console_log("updateMap status Modal error", e);

      // makeToast("createMapModal error", e.message);
    }
  };

export const updateMapModal =
  (userData, close, message = null) =>
    async (dispatch) => {
      console_log("updateMapModal", userData);
      try {
        const res = await request.post("/maps/update", userData);
        const { message, status, data } = res.data;
        if (!status === "Success") throw res.data;
        if (status === "Success") {
          makeToast("success", message ? message : "Blog Updated Successfully");
          console_log("Data", data);
          close();
          dispatch(getAllMapModal());
        }
      } catch (e) {
        console_log("updateMapModal error", e);

        // makeToast("createUser error", e.message);
      }
    };

export const getAllMapModal = () => async (dispatch) => {
  console_log("Call => getAllMapModal");
  try {
    const res = await request.get("/maps/getAll");
    const { message, status, data } = res.data;
    if (!status === "Success") throw res.data;
    if (status === "Success") {
      console_log("Data", data?.data);
      dispatch({
        type: GET_ALL_MAP_MODAL,
        payload: data?.data,
      });
    }
  } catch (e) {
    console_log("getAllMapModal error", e);

    // makeToast("getAllUserListing error", e.message);
  }
};
