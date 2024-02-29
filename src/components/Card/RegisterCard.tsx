import TextInput from "../Forms/TextInput";
import ButtonBase from "../Buttons/ButtonBase";
import { Link, useNavigate } from "react-router-dom";
import CardBase from "./CardBase";
import { ChangeEvent, useState } from "react";
import { login, register } from "../../api/api";
import { PulseLoader } from "react-spinners";

type RegisterCardProps = {
  className?: string;
};

export default function RegisterCard({ className }: RegisterCardProps) {
  // const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(event.target.value);
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleLoginError = (res: Response) => {
    if (res.status === 401) {
      // do something
    }
    setErrorMessage("Error with login. Please check your eamil or password");
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage(null);
    setIsRegistering(true);
    event.preventDefault();
    if (password !== passwordConfirm) {
      setErrorMessage("Passwords do not match");
      return false;
    }
    register({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirmation: passwordConfirm,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsRegistering(false);
      })
    return false;
  };

  return (
    <CardBase className={className}>
      <div className="text-3xl flex flex-row font-sans mb-4">
        <span className="font-extrabold">GOLF</span>MATE
      </div>
      <span>
        <div className="text-2xl font-sans">Register</div>
      </span>
      <div className="flex flex-col justify-start items-center mt-8 mb-4">
        {!errorMessage ? (
          <div className="h-10" />
        ) : (
          <div className="text-red-600 text-sm text-center mb-4 h-6">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleRegister}>
          <div className="flex flex-row ">
            <TextInput
              label="First Name"
              onChange={handleFirstNameChange}
              value={firstName}
              name="firstName"
              type="text"
              required
              className="mb-4 w-40 h-12" // set border to red when there is an error.
            />
            {/* <div className="w-8" /> */}
            <TextInput
              label="Last Name"
              onChange={handleLastNameChange}
              value={lastName}
              name="lastName"
              type="text"
              required
              className="mb-4 w-40  h-12" // set border to red when there is an error.
            />
          </div>
          <TextInput
            label="Email Address"
            onChange={handleEmailChange}
            value={email}
            name="email"
            type="email"
            required
            className="mb-4 w-80 h-12" // set border to red when there is an error.
          />
          <TextInput
            label="Password"
            onChange={handlePasswordChange}
            value={password}
            name="password"
            type="password"
            required
            className={`mb-10 w-80 h-12 `} // set border to red when there is an error.
          />
          <TextInput
            label="Confirm Password"
            onChange={handlePasswordConfirmChange}
            value={passwordConfirm}
            name="confirmPassword"
            type="password"
            required
            className={`mb-10 w-80 h-12 `} // set border to red when there is an error.
          />
          <ButtonBase
            type="submit"
            onClick={handleRegister}
            disabled={isRegistering}
            className="text-lg font-bold w-80 h-12 text-white rounded bg-green-600"
          >
            {isRegistering ? (
              <PulseLoader size={8} color="#ffffff" />
            ) : (
              <p>Register</p>
            )}
          </ButtonBase>
        </form>
        <span className="mt-4 mb-2">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 hover:">
            Log in here
          </Link>
        </span>
      </div>
    </CardBase>
  );
}
