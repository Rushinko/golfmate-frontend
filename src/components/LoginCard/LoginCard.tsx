import TextInput from "../Forms/TextInput";
import ButtonBase from "../Buttons/ButtonBase";
import { Link } from "react-router-dom";
import CardBase from "../Card/CardBase";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { login } from "../../api/api";

type LoginCardProps = {
  className?: string;
};

export default function LoginCard({ className }: LoginCardProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: React.MouseEvent<HTMLElement>) => {
    console.log(email, password);
    event.preventDefault();
    login(email, password)
      .then((res) => {
        if (!res.ok) {
          setErrorMessage(
            "Error with login. Please check your eamil or password"
          );
          return;
        }
        setErrorMessage(null);
        // redirect after successful login
      })
      .catch((error: Error) => {
        console.log(error);
        if (error.message === "401") {
          setErrorMessage(
            "Error with login. Please check your eamil or password"
          );
        }
      });
  };

  return (
    <CardBase className={className}>
      <div className="text-3xl font-sans mb-4">
        <span className="font-extrabold">GOLF</span>MATE
      </div>
      <span>
        <div className="text-2xl font-sans">Login</div>
      </span>
      <div className="flex flex-col justify-start items-center my-8">
        {!errorMessage ? (
          <div className="h-10" />
        ) : (
          <div className="text-red-600 text-sm text-center">{errorMessage}</div>
        )}
        <form>
          <TextInput
            label="Email Address"
            onChange={handleEmailChange}
            value={email}
            name="email"
            type="email"
            className="mb-4 w-80 h-12" // set border to red when there is an error.
          />
          <TextInput
            label="Password"
            onChange={handlePasswordChange}
            value={password}
            name="password"
            type="password"
            className="mb-10 w-80 h-12" // set border to red when there is an error.
          />
          <ButtonBase
            type="submit"
            onClick={handleLogin}
            className="text-lg font-bold w-80 h-12 text-white rounded bg-green-600"
          >
            Log In
          </ButtonBase>
        </form>
        <span className="mt-4 mb-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-700 hover:">
            Register here
          </Link>
        </span>
        <Link
          to="/recover"
          className=" text-green-700 underline font-light text-sm"
        >
          Forgot Your Password?
        </Link>
      </div>
    </CardBase>
  );
}
