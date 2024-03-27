import axios, { AxiosError, AxiosResponse } from "axios";
import { TRegisterForm, TUser } from "../models/types";
import { API_ROUTES } from "../util/constants";
import { getJwtFromStore, remvoeJwtFromStore, setJwt, setUser } from "../store/localStore";
import { useAuthState } from "../store/store";

type loginProps = {
  email: string;
  password: string;
};

const axiosAuthClient = axios.create({
  withCredentials: true,
});

const axiosApiClient = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosApiClient.interceptors.request.use((config) => {
  const token = getJwtFromStore();
  if (token !== null && token !== undefined) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.request.status === 401) {
      if (getJwtFromStore() !== null) {
        remvoeJwtFromStore();
      }
      window.location.pathname = "/login";
    }
  }
);

export async function register(props: TRegisterForm): Promise<Response> {
  return axiosAuthClient({
    url: API_ROUTES.REGISTER,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      user: {
        first_name: props.first_name,
        last_name: props.last_name,
        email: props.email,
        password: props.password,
        password_confirmation: props.password_confirmation,
      },
    },
  });
}

export async function login(
  email: string,
  password: string
): Promise<AxiosResponse> {
  return axiosAuthClient({
    url: API_ROUTES.LOGIN,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      user: {
        email: email,
        password: password,
      },
    },
  });
}

export async function getUser(): Promise<AxiosResponse<TUser>> {
  return axiosApiClient.get<TUser>(API_ROUTES.USER);
}

export async function getAndStoreUser(): Promise<TUser | AxiosError> {
  try {
    const user = (await getUser()).data;
    setUser(user);
    useAuthState.getState().setUser(user);
    return user;
  } catch (err: any) {
    return err;
  }
}

export async function handleSuccessfulLogin(
  res: AxiosResponse
): Promise<TUser | undefined> {
  const token = res.headers.authorization;
  if (token !== null) {
    console.log("Bearer token being set: ", token);
    const jwt = token.split(" ")[1];
    setJwt(jwt);
    useAuthState.getState().setJwt(jwt);
    getUser()
      .then((res) => {
        const user: TUser = res.data;
        setUser(user);
        console.log(user);
        return user;
      })
      .catch((err) => {
        console.error(err);
      });
    return undefined;
  }
}

export async function getGolfCourseImage() {
  const res = await fetch("http://localhost:3000/api/v1/golfcourse_image");
  return res;
}

export async function getGolfCourses() {}
