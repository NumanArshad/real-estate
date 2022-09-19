import { console_log, isArrayCheck, Log } from "../../../utils/helper";
import request from "../../../utils/request";
import makeToast from "../../../utils/Toaster";
import {
  CALL_DATA,
  CALL_STATUS,
  GET_ALL_BLOGS,
  GET_ALL_TOWN,
  GET_ALL_USERS,
  GET_MY_APOINTMENTS,
  GET_MY_PROFILE,
} from "../Action.Constant";

export const createBlog =
  (userData, close, refreshState) => async (dispatch) => {
    console_log("create Blog ==>", userData);
    try {
      const res = await request.post("/blogs/addBlog", userData);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllBlogs());
        close();
        refreshState();
      }
    } catch (e) {
      console_log("createBlog error", e);

      // makeToast("createBlog error", e.message);
    }
  };

export const deleteBlog =
  (blogId, close) => async (dispatch) => {
    console_log("delete ==>", blogId);
    try {
      const res = await request.delete(`/blogs/delete/${blogId}`);
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllBlogs());
        close();
      }
    } catch (e) {
      console_log("deleteblogModal error", e);
    }
  };

export const updateBlogActiveStatus =
  (blogId, isApproved, close) => async (dispatch) => {
    console_log("path ==>", blogId);
    try {
      const res = await request.patch(`/blogs/updateActiveStatus/${blogId}`, { isApproved });
      const { message, status, data } = res.data;
      if (!status === "Success") throw res.data;
      if (status === "Success") {
        makeToast("success", message);
        console_log("Data", data);
        dispatch(getAllBlogs());
        close();
      }
    } catch (e) {
      console_log("update blog status Modal error", e);

      // makeToast("createblogModal error", e.message);
    }
  };

export const updateBlog =
  (userData, close, message = null) =>
    async (dispatch) => {
      console_log("updateBlog", userData.get("isApproved"));
      try {
        const res = await request.post("/blogs/updateBlog", userData);
        const { message, status, data } = res.data;
        if (!status === "Success") throw res.data;
        if (status === "Success") {
          makeToast("success", message ? message : "Blog Updated Successfully");
          console_log("Data", data);
          close();
          dispatch(getAllBlogs());
        }
      } catch (e) {
        console_log("updateBlog error", e);

        // makeToast("createUser error", e.message);
      }
    };

export const getAllBlogs = () => async (dispatch) => {
  console_log("Call => getAllBlogs");
  try {
    const res = await request.get("/blogs/getBlogs");
    const { message, status, data } = res.data;
    if (!status === "Success") throw res.data;
    if (status === "Success") {
      console_log("Response Data", data?.data);
      dispatch({
        type: GET_ALL_BLOGS,
        payload: data?.Blogs,
      });
    }
  } catch (e) {
    console_log("getAllBlogs error", e);

    // makeToast("getAllUserListing error", e.message);
  }
};
