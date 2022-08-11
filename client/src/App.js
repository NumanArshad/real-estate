import { lazy, Suspense, useEffect, useState } from "react";
/// Components
import Index from "./jsx/index";
import { connect, useDispatch, useSelector } from "react-redux";
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import BahriaTown from "./jsx/Customer/components/BahriaTownProperty/index";
import Detail from "./jsx/Customer/components/Blog/Detail";
import BahriaDetail from "./jsx/Customer/components/BahriaTownProperty/Detail";
import Contact from "./jsx/Customer/components/ContactUs/Index";
import Updates from "./jsx/Customer/components/ConstructionUpdates/Index";
import Homes from "./jsx/Customer/components/ConstructionUpdates/Homes";

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
    localStorage.setItem(
      "user",
      JSON.stringify({
        _id: "62ee8f58024509820bf3712b",
        email: "admin@gmail.com",
        password:
          "$2a$10$ihmTOxIjuV2k6RmNAx.COe7uSJIvRJkB2qK4aIAxUv0T..t2GXNWi",
        first_name: "admin",
        last_name: "abc",
        profile:
          "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg",
        designation: "",
        role: "admin",
        forgotPinCode: "",
        phone: "03123456789",
        address: "",
        city: "",
        idCard: "",
        gender: "male",
        changePassword: true,
        isActive: true,
        created_at: "2022-08-06T15:57:12.948Z",
        updated_at: "2022-08-06T15:57:12.948Z",
        __v: 0,
      })
    );

    localStorage.setItem(
      "jwtToken",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzg1YWM0NGJmZTBiN2NkMWU4OGRiYiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU5OTY2NTc1fQ.xu9y1EmaG1xoimYtR7nh4eQSsKYou04A5ubHVpgC-P0"
    );
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
      <Route exact path="/blog-detail">
        <Detail />
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
      <Route exact path="/bahria-town">
        <BahriaTown />
      </Route>
      <Route exact path="/bahria-town-detail">
        <BahriaDetail />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/updates">
        <Updates />
      </Route>
      <Route exact path="/homes">
        <Homes />
      </Route>
    </Switch>
  );
  if (!isAuthenticated) {
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
