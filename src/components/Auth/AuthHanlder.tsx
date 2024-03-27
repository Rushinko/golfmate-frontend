import { useEffect } from "react";
import { TUser } from "../../models/types";
import { getAndStoreUser, getUser } from "../../api/api";
import { USER_STORE_KEY } from "../../util/constants";
import { AxiosError } from "axios";
import { getJwtFromStore, getUserFromStore } from "../../store/localStore";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../store/store";

export function AuthHandler() {
  const navigate = useNavigate();
  const jwt = useAuthState((state) => state.jwt);
  const user = useAuthState((state) => state.user);
  const setJwt = useAuthState((state) => state.setJwt);
  const navigateToLogin = (): void => {
    navigate("/login");
  };

  const checkJwt = async (): Promise<string | void> => {
    console.log(jwt);
    if (jwt) {
      return jwt;
    } else {
      const localStoreJwt = getJwtFromStore();
      if (localStoreJwt !== null) {
        setJwt(localStoreJwt);
      } else {
        navigateToLogin();
      }
    }
  };

  const checkUser = async (): Promise<TUser | void> => {
    if (user) {
      return user;
    } else {
      await getAndStoreUser();
    }
  };

  useEffect(() => {
    console.log('test');
    checkJwt();
    checkUser();
  }, [jwt, user]);

  return null;
}
