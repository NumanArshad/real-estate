import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { checkAuth, loginUser } from "../../store/actions/Auth";

// image
//import logo from "../../images/logo-text.png";
//import loginbg from "../../images/login-bg-1.jpg";
//import loginbg from "../../images/login-bg-1.jpg";

function Login(props) {
  const [email, setEmail] = useState("");
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { push } = useHistory();

  function onLogin(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }
    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }
    dispatch(loginUser({ email: email, password: password }, push));
  }

  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="mb-4 text-center">
                      <h3 className="dz-title mb-1">Sign in</h3>
                      <p className="">Sign in by entering information below</p>
                    </div>
                    {props.errorMessage && (
                      <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                        {props.errorMessage}
                      </div>
                    )}
                    {props.successMessage && (
                      <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
                        {props.successMessage}
                      </div>
                    )}
                    <form onSubmit={onLogin}>
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Type Your Email Address"
                        />
                        {errors.email && (
                          <div className="text-danger fs-12">
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          placeholder="Type Your Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && (
                          <div className="text-danger fs-12">
                            {errors.password}
                          </div>
                        )}
                      </div>
                      <div className="form-row d-flex justify-content-between mt-4 mb-2">
                        <div className="form-group">
                          <div className="custom-control custom-checkbox ml-1 ">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="basic_checkbox_1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="basic_checkbox_1"
                            >
                              Remember my preference
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                    {/* <div className="new-account mt-3 text-center">
                      <p className="m-0">
                        Don't have an account?{" "}
                        <Link className="text-primary" to="/register">
                          Sign up
                        </Link>
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
