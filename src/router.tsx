import { createBrowserRouter } from "react-router-dom";
import Root from './pages/Root';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { pagesConfig } from "./pages/pagesConfig";

const user = localStorage.getItem("user");
const jwt = localStorage.getItem("jwt");

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: pagesConfig.map((page) => {
      return {
        path: page.to,
        element: page.component,
      };
    }),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])