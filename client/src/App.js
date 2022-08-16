import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
/// Components
import Index from "./jsx/index";
import { connect, useDispatch, useSelector } from "react-redux";
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { Redirect, Route, Switch } from "react-router-dom";
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
import PropertyDetail from "./jsx/Customer/components/PropertyDetailContainer/Detail";

import Contact from "./jsx/Customer/components/ContactUs/Index";
import Updates from "./jsx/Customer/components/ConstructionUpdates/Index";
import Home from "./jsx/components/Dashboard/Home";
import SaleAgentListing from "./jsx/components/Dashboard/SaleAgent/Listing";
import TownListing from "./jsx/components/Dashboard/Town/Listing";
import BlogListing from "./jsx/components/Dashboard/Blogs/Listing";
import MarketRates from "./jsx/components/Dashboard/MarketRates/Listing";
import ConstructionListing from "./jsx/components/Dashboard/ConstructionUpdates/Listing";
import MapsListing from "./jsx/components/Dashboard/MapsModal/Listing";
import PropertyRates from "./jsx/components/Dashboard/PropertyRates/Listing";

///Public
/// Pages
import Registration from "./jsx/pages/Registration";
// import Login from "./jsx/pages/Login";
import LockScreen from "./jsx/pages/LockScreen";
import Error400 from "./jsx/pages/Error400";
import Error403 from "./jsx/pages/Error403";
import Error404 from "./jsx/pages/Error404";
import Error500 from "./jsx/pages/Error500";
import Error503 from "./jsx/pages/Error503";
import AdminLayout from "./jsx/components/adminLayout";
import PublicLayout from "./jsx/components/publicLayout";

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
  }, []);

  const PERMISSION = {
    AUTHORIZED: 0,
    UN_AUTHORIZED: 1,
    EXTERNAL_USER: 2,
  };
  const myRoutes = [
    {
      url: "dashboard",
      component: Home,
      permission: PERMISSION.AUTHORIZED,
      layout: AdminLayout,
    },
    // { url: "room", component: RoomListing },
    {
      url: "sale-agent",
      component: SaleAgentListing,
      permission: PERMISSION.AUTHORIZED,
      layout: AdminLayout,
    },
    {
      url: "town",
      component: TownListing,
      permission: PERMISSION.AUTHORIZED,
      layout: AdminLayout,
    },
    {
      url: "blog",
      component: BlogListing,
      permission: PERMISSION.AUTHORIZED,
      layout: AdminLayout,
    },
    {
      url: "market-rate",
      component: MarketRates,
      permission: PERMISSION.AUTHORIZED,
      layout: AdminLayout,
    },
    {
      url: "construction-update",
      component: ConstructionListing,
      permission: PERMISSION.AUTHORIZED,
      layout: AdminLayout,
    },
    {
      url: "maps-modal",
      component: MapsListing,
      permission: PERMISSION.AUTHORIZED,
      layout: AdminLayout,
    },
    {
      url: "property-rates",
      component: PropertyRates,
      permission: PERMISSION.AUTHORIZED,
      layout: AdminLayout,
    },
    {
      url: "page-register",
      component: Registration,
      permission: PERMISSION.UN_AUTHORIZED,
      layout: PublicLayout,
    },
    {
      url: "page-lock-screen",
      component: LockScreen,
      permission: PERMISSION.UN_AUTHORIZED,
      layout: PublicLayout,
    },
    {
      url: "page-login",
      component: Login,
      permission: PERMISSION.UN_AUTHORIZED,
      layout: PublicLayout,
    },
    {
      url: "page-error-400",
      component: Error400,
      permission: PERMISSION.UN_AUTHORIZED,
      layout: PublicLayout,
    },
    {
      url: "page-error-403",
      component: Error403,
      permission: PERMISSION.UN_AUTHORIZED,
      layout: PublicLayout,
    },
    {
      url: "page-error-404",
      component: Error404,
      permission: PERMISSION.UN_AUTHORIZED,
      layout: PublicLayout,
    },
    {
      url: "page-error-500",
      component: Error500,
      permission: PERMISSION.UN_AUTHORIZED,
      layout: PublicLayout,
    },
    {
      url: "page-error-503",
      component: Error503,
      permission: PERMISSION.UN_AUTHORIZED,
      layout: PublicLayout,
    },
    {
      url: "",
      component: Main,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "customer",
      component: Main,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "about",
      component: About,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "blogs",
      component: Blog,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "blog-detail",
      component: Detail,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "blogs/:id",
      component: Detail,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "video",
      component: Video,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "lahore-market-rates",
      component: LahoreMarketRates,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "karachi-market-rates",
      component: KarachiMarketRates,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "bahria-town",
      component: BahriaTown,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "bahria-town-detail",
      component: BahriaDetail,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "contact",
      component: Contact,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "updates", //construction updates
      component: Updates,
      permission: PERMISSION.EXTERNAL_USER,
    },
    {
      url: "properties/:id",
      component: PropertyDetail,
      permission: PERMISSION.EXTERNAL_USER,
    },
  ];

  const getRouteByPermission = useCallback(
    (routePermission) =>
      myRoutes.filter(({ permission }) => permission === routePermission),
    []
  );

  const routeList = useMemo(() => {
    if (isAuthenticated) {
      return getRouteByPermission(PERMISSION.AUTHORIZED);
    }
    return [
      ...getRouteByPermission(PERMISSION.UN_AUTHORIZED),
      ...getRouteByPermission(PERMISSION.EXTERNAL_USER),
    ];
  }, [isAuthenticated, getRouteByPermission]);

  // let routes = (
  //   <Switch>
  //     <Route exact path="/">
  //       {/* <Loginn /> */}
  //       <Main />
  //     </Route>
  //     <Route exact path="/register">
  //       <Register />
  //     </Route>
  //     <Route exact path="/customer">
  //       <Main />
  //     </Route>
  //     <Route exact path="/about">
  //       <About />
  //     </Route>
  //     <Route exact path="/blog">
  //       <Blog />
  //     </Route>
  //     <Route exact path="/blog-detail">
  //       <Detail />
  //     </Route>
  //     <Route exact path="/video">
  //       <Video />
  //     </Route>
  //     <Route exact path="/lahore-market-rates">
  //       <LahoreMarketRates />
  //     </Route>
  //     <Route exact path="/karachi-market-rates">
  //       <KarachiMarketRates />
  //     </Route>
  //     <Route exact path="/bahria-town">
  //       <BahriaTown />
  //     </Route>
  //     <Route exact path="/bahria-town-detail">
  //       <BahriaDetail />
  //     </Route>
  //     <Route exact path="/contact">
  //       <Contact />
  //     </Route>
  //     <Route exact path="/updates">
  //       <Updates />
  //     </Route>
  //   </Switch>
  // );

  // if (isAuthenticated) {
  //   return (
  //     <>
  //       <Suspense
  //         fallback={
  //           <div id="preloader">
  //             <div className="sk-three-bounce">
  //               <div className="sk-child sk-bounce1"></div>
  //               <div className="sk-child sk-bounce2"></div>
  //               <div className="sk-child sk-bounce3"></div>
  //             </div>
  //           </div>
  //         }
  //       >
  //         <Index />
  //       </Suspense>
  //     </>
  //   );
  // } else {
  //   return (
  //     <div className="vh-100">
  //       <Suspense
  //         fallback={
  //           <div id="preloader">
  //             <div className="sk-three-bounce">
  //               <div className="sk-child sk-bounce1"></div>
  //               <div className="sk-child sk-bounce2"></div>
  //               <div className="sk-child sk-bounce3"></div>
  //             </div>
  //           </div>
  //         }
  //       >
  //         {routes}
  //       </Suspense>
  //     </div>
  //   );
  // }

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
        <Switch>
          {routeList.map(
            (
              { url, component: Component, permission, layout: Layout },
              index
            ) => {
              let routePath = `/${url}`;
              if (permission === PERMISSION.AUTHORIZED) {
                routePath = `/admin${routePath}`;
              }
              if (Layout) {
                return (
                  <Route
                    exact
                    path={routePath}
                    key={index}
                    render={(props) => (
                      <Layout>
                        <Component {...props} />
                      </Layout>
                    )}
                  />
                );
              } else {
                return (
                  <Route
                    exact
                    path={routePath}
                    key={index}
                    component={Component}
                  />
                );
              }
            }
          )}
          {isAuthenticated && <Redirect to="/admin/dashboard" />}
          <Route component={Error400} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
