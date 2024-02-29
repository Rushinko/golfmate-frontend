import { createBrowserRouter } from "react-router-dom";
import Root from './pages/Root';
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

const user = localStorage.getItem("user");
const jwt = localStorage.getItem("jwt");

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path:'home',
        element: <Home />
      }
    ]
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