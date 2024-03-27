import TextInput from "../../components/Forms/TextInput";
import ButtonBase from "../../components/Buttons/ButtonBase";
import { Link, useNavigate } from "react-router-dom";
import CardBase from "../../components/Card/CardBase";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { handleSuccessfulLogin, login } from "../../api/api";
import logo from "../../assets/golfmate.png";
import { PulseLoader } from "react-spinners";
import { LoginCardBase } from "../../components/Card/LoginCardBase";
import { ErrorMessage } from "../../components/Card/ErrorMessage";
import { AxiosError, AxiosResponse } from "axios";

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

  const handleLoginError = (res: AxiosError) => {
    if (res.status === 401) {
      // do something
    }
    setErrorMessage("Error with login. Please check your eamil or password");
  };

  const handleLogin = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsLoggingIn(true);
    setErrorMessage(null);
    login(email, password)
      .then((res) => {
        setIsLoggingIn(false);
        if (res.status !== 200) {
          return false;
        }
        if (handleSuccessfulLogin(res) !== undefined) {
          // redirect after successful login
          setErrorMessage(null);
          navigate("/home");
        }
      })
      .catch((error: AxiosError) => {
        // handle errors?
        handleLoginError(error);
        setIsLoggingIn(false);
        console.error(error);
      });
    return false;
  };

  const title = (
    <span>
      <span className="font-extrabold text-green-700">GOLF</span>MATE
    </span>
  );
  const subtitle = <div className="text-2xl font-sans">Login</div>;
  const footer = (
    <>
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
    </>
  );

  return (
    <LoginCardBase
      title={title}
      subtitle={subtitle}
      footer={footer}
      className={className}
    >
      <ErrorMessage message={errorMessage} />
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
          className="text-lg font-bold w-80 h-12 text-white rounded bg-green-700"
        >
          {isLoggingIn ? (
            <PulseLoader size={8} color="#ffffff" />
          ) : (
            <p>Log In</p>
          )}
        </ButtonBase>
      </form>
    </LoginCardBase>
  );
}
