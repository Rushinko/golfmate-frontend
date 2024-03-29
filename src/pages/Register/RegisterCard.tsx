import TextInput from "../../components/Forms/TextInput";
import ButtonBase from "../../components/Buttons/ButtonBase";
import { Link, useNavigate } from "react-router-dom";
import CardBase from "../../components/Card/CardBase";
import { ChangeEvent, useState } from "react";
import { login, register } from "../../api/api";
import { PulseLoader } from "react-spinners";
import { LoginCardBase } from "../../components/Card/LoginCardBase";
import { ErrorMessage } from "../../components/Card/ErrorMessage";

type RegisterCardProps = {
  className?: string;
};

const PASSWORD_MATCH_ERROR = "Passwords do not match";

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
    if (errorMessage === PASSWORD_MATCH_ERROR) {
      setErrorMessage(null);
    }
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const getErrorMessage = (status: number) => {

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
      setErrorMessage(PASSWORD_MATCH_ERROR);
      setIsRegistering(false);
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
        console.error(err.response.status);
        if (err.response.status === 422) {
          setErrorMessage("This email address was already used to register an account")
        }
      })
      .finally(() => {
        setIsRegistering(false);
      });
    return false;
  };

  const title = (
    <span>
      <span className="font-extrabold text-green-700">GOLF</span>MATE
    </span>
  );

  const subtitle = (
    <div className="text-2xl font-sans dark:text-zinc-100">Register</div>
  );

  const footer = (
    <span className="mt-4 mb-2 dark:text-zinc-100">
      Already have an account?{" "}
      <Link to="/login" className="text-green-600 hover:">
        Log in here
      </Link>
    </span>
  );

  return (
    <LoginCardBase
      title={title}
      subtitle={subtitle}
      footer={footer}
      className={className}
    >
      <ErrorMessage message={errorMessage} />
      <form onSubmit={handleRegister}>
        <div className="flex flex-row ">
          <TextInput
            label="First Name"
            onChange={handleFirstNameChange}
            value={firstName}
            name="firstName"
            type="text"
            required
            className="mb-4 w-38 h-12 mr-2" // set border to red when there is an error.
          />
          {/* <div className="w-8" /> */}
          <TextInput
            label="Last Name"
            onChange={handleLastNameChange}
            value={lastName}
            name="lastName"
            type="text"
            required
            className="mb-4 w-38 h-12 ml-2" // set border to red when there is an error.
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
          className={`mb-4 w-80 h-12 `} // set border to red when there is an error.
        />
        <TextInput
          label="Confirm Password"
          onChange={handlePasswordConfirmChange}
          value={passwordConfirm}
          name="confirmPassword"
          type="password"
          required
          error={errorMessage === PASSWORD_MATCH_ERROR}
          className={`mb-10 w-80 h-12 `} // set border to red when there is an error.
        />
        <ButtonBase
          type="submit"
          disabled={isRegistering}
          className="text-lg font-bold w-80 h-12 text-white dark:text-zinc-100 rounded bg-green-700 dark:bg-green-700"
        >
          {isRegistering ? (
            <PulseLoader size={8} color="#ffffff" />
          ) : (
            <p>Register</p>
          )}
        </ButtonBase>
      </form>
    </LoginCardBase>
  );
}
