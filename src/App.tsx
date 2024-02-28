import { RouterProvider } from "react-router-dom";
import { getUser, login } from "./api/api";
import { router } from "./router";

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

  const handleSignIn = async () => {
    login({ email: "user2@example.com", password: "password123" })
      .then((response) => {
        console.log(response.headers.get("Authorization"));
        const authHeader = response.headers.get("Authorization");
        if (authHeader) {
          const jwtToken = authHeader.split(" ")[1];
          localStorage.setItem("jwt", jwtToken);
        } else {
          console.log("No auth header present on response");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGetUser = async () => {
    getUser()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
