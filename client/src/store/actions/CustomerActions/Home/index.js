import { console_log } from "../../../../utils/helper";
import request from "../../../../utils/request";
import {
  GET_HOME_PAGE_AGENTS,
  GET_HOME_PAGE_DATA,
} from "../../Action.Constant";

export const getHomeProperties = () => async (dispatch) => {
  console_log("Call => getHomeData");
  try {
    const res = await request.get("/properties/activeProperties");
    const { message, status, data } = res.data;
    if (!status === "Success") throw res.data;
    if (status === "Success") {
      console_log("Data", data?.responseData);
      dispatch({
        type: GET_HOME_PAGE_DATA,
        payload: data,
      });
    }
  } catch (e) {
    console_log("getHomeData error", e);

    // makeToast("getAllUserListing error", e.message);
  }
};

export const getHomeSalesAgents = () => async (dispatch) => {
  console_log("Call => getHomeSalesAgents");
  try {
    const res = await request.get("/saleAgents/activeSaleAgents");
    const { message, status, data } = res.data;
    if (!status === "Success") throw res.data;
    if (status === "Success") {
      console_log("Data", data?.responseData);
      dispatch({
        type: GET_HOME_PAGE_AGENTS,
        payload: data?.response,
      });
    }
  } catch (e) {
    console_log("getHomeData error", e);

    // makeToast("getAllUserListing error", e.message);
  }
};
