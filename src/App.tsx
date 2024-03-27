import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { getUser, login } from "./api/api";
import { router } from "./router";
import { AuthHandler } from "./components/Auth/AuthHanlder";
import Root from "./pages/Root";
import AdminRoot from "./pages/Admin/AdminRoot";
import Home from "./pages/App/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  const handleSignUp = async () => {
    fetch("http://localhost:3000/api/v1/users/sign_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: "user5@example.com",
          password: "password123",
          password_confirmation: "password123",
        },
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<AdminRoot />} path="/admin"></Route>
          <Route element={<Root />} path="/"></Route>
          <Route element={<Home />} path="/home" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </BrowserRouter>
      {/* // <RouterProvider router={router}></RouterProvider> */}
    </div>
  );
}

export default App;
