import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/App/Home";
import { managePagesConfig } from "./pages/Admin/adminPagesConfig";
import { JWT_STORE_KEY, USER_STORE_KEY } from "./util/constants";
import AdminRoot from "./pages/Admin/AdminRoot";

const user = localStorage.getItem(USER_STORE_KEY);
const jwt = localStorage.getItem(JWT_STORE_KEY);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "admin",
        element: <AdminRoot />,
        children: managePagesConfig.map((page) => {
          return {
            path: page.to,
            element: page.component,
          };
        }),
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
