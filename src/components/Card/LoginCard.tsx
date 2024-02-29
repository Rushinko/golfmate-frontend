import TextInput from "../Forms/TextInput";
import ButtonBase from "../Buttons/ButtonBase";
import { Link, useNavigate } from "react-router-dom";
import CardBase from "./CardBase";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { login } from "../../api/api";
import logo from "../../assets/golfmate.png";
import { PulseLoader } from "react-spinners";

type LoginCardProps = {
  className?: string;
};

export default function LoginCard({ className }: LoginCardProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginError = (res: Response) => {
    if (res.status === 401) {
      // do something
    }
    setErrorMessage(
      "Error with login. Please check your eamil or password"
    );
  }

  const handleLogin = (event: React.MouseEvent<HTMLElement>) => {
    console.log(email, password);
    event.preventDefault();
    setIsLoggingIn(true);
    setErrorMessage(null);
    login(email, password)
      .then((res) => {
        setIsLoggingIn(false);
        if (!res.ok) {
          handleLoginError(res)
          return false;
        }
        setErrorMessage(null);
        navigate('/home')
        // redirect after successful login
      })
      .catch((error: Error) => {
        // handle errors?
        setErrorMessage(error.message);
        console.error(error);
      });
    return false;
  };

  return (
    <CardBase className={className}>
      <div className="text-3xl flex flex-row font-sans mb-4">
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
            className={`mb-10 w-80 h-12 `} // set border to red when there is an error.
          />
          <ButtonBase
            type="submit"
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="text-lg font-bold w-80 h-12 text-white rounded bg-green-600" 
          >
            { isLoggingIn ? <PulseLoader size={8} color="#ffffff"/> : <p>Log In</p>}
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
