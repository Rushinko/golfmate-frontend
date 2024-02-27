import { createBrowserRouter } from "react-router-dom";
import Root from './pages/Root';
import { SignUp } from "./pages/SignUp/SignUp";
import Landing from "./pages/Landing/Landing";

const user = localStorage.getItem("user");
const jwt = localStorage.getItem("jwt");

export const router = createBrowserRouter([
  {
    path: '/',
    element: jwt && user ? <Root /> : <Landing />,
  },
  {
    path: '/signup',
    element: <SignUp />
  },
])