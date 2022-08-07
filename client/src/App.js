import { lazy, Suspense, useEffect, useState } from "react";
/// Components
import Index from "./jsx/index";
import { connect, useDispatch, useSelector } from "react-redux";
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import { Route, Switch } from "react-router-dom";
import Register from "./jsx/pages/Registration";

import Loginn from "./jsx/pages/Login";
import { checkAuth } from "./store/actions/Auth";
import makeToast from "./utils/Toaster";
import Main from "./jsx/Customer/components/Main/Main";
import About from "./jsx/Customer/components/About/Index";
import Blog from "./jsx/Customer/components/Blog/Index";
import Video from "./jsx/Customer/components/Video/Index";
import LahoreMarketRates from "./jsx/Customer/components/LahoreMarketRates/Index";
import KarachiMarketRates from "./jsx/Customer/components/KarachiMarketRates/Index";

const SignUp = lazy(() => import("./jsx/pages/Registration"));
const ForgotPassword = lazy(() => import("./jsx/pages/ForgotPassword"));
const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./jsx/pages/Login")), 500);
  });
});

function App(props) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state._auth);

  let timeOut = null;
  useEffect(() => {
    dispatch(checkAuth());
    // localStorage.setItem(
    //   "user",
    //   JSON.stringify({
    //     phone: "",
    //     address: "",
    //     city: "",
    //     idCard: "",
    //     _id: "62c85ac44bfe0b7cd1e88dbb",
    //     email: "admin@gmail.com",
    //     password:
    //       "$2a$10$JvDftI2OWMzRGX7Krk5E6uNLnP2XMGFZ.bfkN4JrOpxD3Dsi/WBT.",
    //     first_name: "zz",
    //     last_name: "",
    //     profile:
    //       "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg",
    //     designation: "",
    //     role: "admin",
    //     forgotPinCode: "",
    //     gender: "male",
    //     changePassword: true,
    //     isActive: true,
    //     created_at: "2022-07-08T16:26:44.456Z",
    //     updated_at: "2022-07-08T16:26:44.456Z",
    //     __v: 0,
    //   })
    // );

    // localStorage.setItem(
    //   "jwtToken",
    //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzg1YWM0NGJmZTBiN2NkMWU4OGRiYiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU3OTkwODAwfQ.Sd7Mlhwh9TphWEP58MBvObxmFwxvXc_EOhB8RPTI1ww"
    // );
  }, []);

  let routes = (
    <Switch>
      <Route exact path="/">
        {/* <Loginn /> */}
        <Main />

      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/customer">
        <Main />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/video">
        <Video />
      </Route>
      <Route exact path="/lahore-market-rates">
        <LahoreMarketRates />
      </Route>
      <Route exact path="/karachi-market-rates">
        <KarachiMarketRates />
      </Route>

    </Switch>
  );
  if (isAuthenticated) {
    return (
      <>
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div>
            </div>
          }
        >
          <Index />
        </Suspense>
      </>
    );
  } else {
    return (
      <div className="vh-100">
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div>
            </div>
          }
        >
          {routes}
        </Suspense>
      </div>
    );
  }
}

export default App;
