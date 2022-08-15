import axios from "axios";
import { console_log } from "../../../utils/helper";
import { MESSAGE } from "../../../utils/Message-List";
import request from "../../../utils/request";
import makeToast from "../../../utils/Toaster";
import { AUTH_USER, USER_LOGOUT } from "../Action.Constant";
import { getDoctorDataById } from "../User";

export const loginUser = (userData, navigate) => async (dispatch) => {
  console_log("loginUser", userData);
  try {
    const res = await request.post("/auth/login", userData);
    const { message, status, data } = res.data;

    if (!status) throw res.data;
    if (status) {
      makeToast("success", MESSAGE.loginSuccess);
      console_log("Login Data", data);
      setToken(data.token, data.user);
      dispatch({
        type: AUTH_USER,
        payload: data,
      });
      navigate("/admin/dashboard")
    }
  } catch (e) {
    makeToast("error", e.message);
    // if (e.message === 'User need Approval before login') {
    //     approvedPopup(true);
    // }
  }
};

export const signupUser = (userData, navigate) => async (dispatch) => {
  console_log("signupUser", userData);
  try {
    const res = await request.post("/auth/signup", userData);
    const { message, status, data } = res.data;
    if (!status) throw res.data;
    if (status) {
      makeToast("success", message);
      console_log("Data", data);

      navigate("/admin/dashboard")
    }
  } catch (e) {
    makeToast("error", e.message);
  }
};

// export const getMyProfile = () => async (dispatch) => {
//     try {
//         const res = await request.get('/users');
//         const { message, status, data } = res.data;
//         if (status === 'Fail') throw res.data;
//         if (status === 'Success') {
//             localStorage.setItem('user', JSON.stringify(data?.user));
//             dispatch({
//                 type: GET_MY_PROFILE,
//                 payload: data
//             });
//         }
//     } catch (e) {
//         console_log('getMyProfile', e.message);

//         // makeToast('error', e.message);
//     }
// };

// export const forgotPassword = (inputdata, navigate) => async (dispatch) => {
//     console_log('forgotPassword', inputdata);
//     try {
//         const res = await request.post('/auth/forgotemail', { email: inputdata });
//         const { message, status, data } = res.data;
//         if (status === 'Fail') throw res.data;
//         if (status === 'Success') {
//             localStorage.setItem('forgotToken', data.token);
//             makeToast('success', message);
//             console_log('Data', data);
//             navigate('/verify-pin');
//         }
//     } catch (e) {
//         makeToast('error', e.message);
//     }
// };

// export const changePassword = (inputdata, close) => async (dispatch) => {
//     console_log('changePassword', inputdata);
//     try {
//         const res = await request.post('/auth/forgotemail', inputdata);
//         const { message, status, data } = res.data;
//         if (status === 'Fail') throw res.data;
//         if (status === 'Success') {
//             makeToast('success', message);
//             close();
//         }
//     } catch (e) {
//         makeToast('error', e.message);
//     }
// };

// export const followAndUnFollowDesigner = (inputdata) => async (dispatch) => {
//     console_log('followAndUnFollowDesigner', inputdata);
//     try {
//         const res = await request.post('/users/follow', inputdata);
//         const { message, status, data } = res.data;
//         if (status === 'Fail') throw res.data;
//         if (status === 'Success') {
//             makeToast('success', message);
//             dispatch(getAllUserListing({ isApproved: 'approved', role: 'designer' }));
//         }
//     } catch (e) {
//         makeToast('error', e.message);
//     }
// };
// export const verifyPinCode = async (inputdata, navigate) => {
//     const token = localStorage.getItem('forgotToken');
//     console_log('verifyPinCode', inputdata, localStorage.getItem('forgotToken'));

//     try {
//         const res = await axios.post(server_url + 'auth/verifyforgotpin', { pinCode: inputdata }, { headers: { Authorization: token } });
//         const { message, status, data } = res.data;
//         if (status === 'Fail') throw res.data;
//         if (status === 'Success') {
//             makeToast('success', message);
//             console_log('Data', data);
//             navigate('/reset-password');
//         }
//     } catch (e) {
//         makeToast('error', e.message);
//     }
// };

// export const resetPassword = (inputdata, navigate) => async (dispatch) => {
//     console_log('resetpassword', inputdata);
//     const token = localStorage.getItem('forgotToken');
//     try {
//         const res = await axios.post(server_url + 'auth/resetpassword', { password: inputdata }, { headers: { Authorization: token } });
//         const { message, status, data } = res.data;
//         if (status === 'Fail') throw res.data;
//         if (status === 'Success') {
//             makeToast('success', message);
//             console_log('Data', data);
//             navigate('/dashboard');
//             localStorage.removeItem('forgotToken');
//         }
//     } catch (e) {
//         makeToast('error', e.message);
//     }
// };

const setToken = (token, user) => {
  localStorage.setItem("jwtToken", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const logout = (navigate) => (dispath) => {
  localStorage.clear();
  dispath({
    type: USER_LOGOUT,
  });
  navigate("/");
};

export const checkAuth = () => (dispatch) => {
  console.log("Checking Auth....");
  const token = localStorage.getItem("jwtToken");
  var user = localStorage.getItem("user");
  user = JSON.parse(user);
  if (token) {
    dispatch({
      type: AUTH_USER,
      payload: { token: token, user: user },
    });

    // dispatch(getDoctorDataById({ id: user?._id }));
  }
};

// export const changeRole = (data, navigate, route) => async (dispatch) => {
//     navigate(route);
//     dispatch({
//         type: UPDATE_ROLE,
//         payload: data
//     });
// };

// export const updateUser = (userData) => async (dispatch) => {
//     try {
//         const res = await request.post('/users/updateUser', userData);
//         const { message, status, data } = res.data;
//         if (status === 'Fail') throw res.data;
//         if (status === 'Success') {
//             makeToast('success', message);
//             dispatch(getMyProfile());
//         }
//     } catch (e) {
//         makeToast('error', e.message);
//     }
// };

// export const updateProfile = (userData) => async (dispatch) => {
//     console.log('Imagge Data =>', userData);
//     try {
//         const res = await request.post('/users/updateUserProfilePic', userData);
//         const { message, status, data } = res.data;
//         if (status === 'Fail') throw res.data;
//         if (status === 'Success') {
//             makeToast('success', message);
//             dispatch(getMyProfile());
//         }
//     } catch (e) {
//         makeToast('error', e.message);
//     }
// };
