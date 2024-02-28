import * as React from "react";
import { TRegisterForm } from "../../models/types";
import { register } from "../../api/api";

export function Register() {
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState<string>('');
  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const user: TRegisterForm = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    };
    console.log(user);
    register(user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  }
  const handleLasttNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
  const handlePasswordConfirmationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(event.target.value);
  }

  return (
    <div className="w-full h-full flex flex-grow-0 items-center justify-center">
      <form
        className="h-80 w-80 rounded bg-gray-400 flex flex-grow-0 justify-center items-center flex-col"
        onSubmit={handleOnSubmit}
      >
        <input
          className="h-10 w-32 p-2"
          name="first_name"
          type="text"
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
        <input
          className="h-10 w-32 p-2"
          name="last_name"
          type="text"
          placeholder="Last Name"
          onChange={handleLasttNameChange}
        />
        <input
          className="h-10 w-32 p-2"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          className="h-10 w-32 p-2"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <input
          className="h-10 w-32 p-2"
          name="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          onChange={handlePasswordConfirmationChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
