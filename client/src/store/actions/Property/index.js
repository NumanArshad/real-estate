import { console_log, isArrayCheck, Log } from "../../../utils/helper";
import request from "../../../utils/request";
import makeToast from "../../../utils/Toaster";
import {
  CALL_DATA,
  CALL_STATUS,
  GET_ALL_PROPERTIES,
  GET_ALL_USERS,
  GET_MY_APOINTMENTS,
  GET_MY_PROFILE,
} from "../Action.Constant";
import { isLoading } from "../Loader";

export const createProperty =
  (userData, close, refreshState) => async (dispatch) => {
    console_log("createProperty ==>", userData);
    dispatch(isLoading(true));

    try {
      const res = await request.post("/properties/create", userData);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllProperties());
        close();
        refreshState();
        dispatch(isLoading(false));
      }
    } catch (e) {
      console_log("createProperty error", e);
      makeToast("error", e);
      dispatch(isLoading(false));

      // makeToast("createProperty error", e.message);
    }
  };

export const updateProperty =
  (object, close, message = null) =>
  async (dispatch) => {
    console_log("updateProperty", object);
    dispatch(isLoading(true));

    try {
      const res = await request.put(
        "/properties/update/" + object?._id,
        object
      );
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast(
          "success",
          message ? message : "Property Updated Successfully"
        );
        console_log("Data", data);
        close();
        dispatch(getAllProperties());
        dispatch(isLoading(false));
      }
    } catch (e) {
      console_log("updateProperty error", e);
      dispatch(isLoading(false));

      // makeToast("createUser error", e.message);
    }
  };

export const getAllProperties = () => async (dispatch) => {
  console_log("Call => getAllProperties");
  try {
    const res = await request.get("/properties/");
    const { message, status, data } = res.data;
    if (!status === "Success") throw res.data;
    if (status === "Success") {
      console_log("Data", data?.responseData);
      dispatch({
        type: GET_ALL_PROPERTIES,
        payload: data?.responseData,
      });
    }
  } catch (e) {
    console_log("getAllProperties error", e);

    // makeToast("getAllUserListing error", e.message);
  }
};
