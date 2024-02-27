import { SignUpForm } from "../models/types";

type signInProps = {
  email: string;
  password: string;
};

export async function singUp(props: SignUpForm): Promise<Response> {
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        first_name: props.first_name,
        last_name: props.last_name,
        email: props.email,
        password: props.password,
        password_confirmation: props.password_confirmation,
      },
    }),
  });
  return res;
}

export async function singIn({
  email,
  password,
}: signInProps): Promise<Response> {
  const res = await fetch("http://localhost:3000/users/sign_in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        email: email,
        password: password,
      },
    }),
  });
  return res;
}

export async function getUser() {
  const res = await fetch("http://localhost:3000/api/v1/users/show", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  return res;
}

export async function getGolfCourseImage() {
  const res = await fetch("http://localhost:3000/api/v1/golfcourse_image")
  return res;
}
