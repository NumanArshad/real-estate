import Login from "../jsx/pages/Login";

const AuthRoutes = {
  path: "/",
  element: null,
  children: [
    {
      path: "/",
      element: <Login />,
    },
  ],
};

export default AuthRoutes;
