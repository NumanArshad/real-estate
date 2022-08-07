import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
//import logo from '../../images/logo-full.png'
import Loader from "../pages/Loader/Loader";
import { signupUser } from "../../store/actions/Auth";

function Register(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { push } = useHistory();
  function onSignUp(e) {
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

    if (error) return;

    dispatch(
      signupUser(
        {
          email: email,
          password: password,
          first_name: username,
          last_name: "d",
          phone: "0335490390",
          terms: true,
        },
        push
      )
    );
  }
  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  {props.showLoading && <Loader />}
                  <div className="auth-form">
                    <h4 className="text-center mb-4">Sign up your account</h4>
                    {props.errorMessage && (
                      <div className="bg-red-300 text-danger border border-red-900 p-1 my-2">
                        {props.errorMessage}
                      </div>
                    )}
                    {props.successMessage && (
                      <div className="bg-green-300 text-danger text-green-900  p-1 my-2">
                        {props.successMessage}
                      </div>
                    )}
                    <form onSubmit={onSignUp}>
                      <div className="form-group">
                        <label className="mb-1">
                          <strong>Username</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="username"
                          name="name"
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Id"
                        />
                        {errors.email && (
                          <div className="text-danger fs-12">
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label className="mb-1">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      {errors.password && (
                        <div className="text-danger fs-12">
                          {errors.password}
                        </div>
                      )}
                      <div className="text-center mt-4">
                        <input
                          type="submit"
                          className="btn btn-primary btn-block"
                        />
                      </div>
                    </form>
                    <div className="new-account mt-3 text-center">
                      <p className="m-0">
                        Already have an account?
                        <Link className="text-primary" to="/">
                          Sign in
                        </Link>
                      </p>
                    </div>
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

export default Register;
