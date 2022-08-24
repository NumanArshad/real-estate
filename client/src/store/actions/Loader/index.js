import { API_LOADING } from "../Action.Constant";

export const isLoading = (data) => (dispatch) => {
  dispatch({
    type: API_LOADING,
    payload: data,
  });
};
