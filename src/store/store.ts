import { create } from "zustand";
import {
  getJwtFromStore,
  getUserFromStore,
  removeUserFromStore,
  remvoeJwtFromStore,
} from "./localStore";
import { TUser } from "../models/types";

export type TAuthState = {
  user: TUser | null;
  setUser: (user: TUser) => void;
  removeUser: () => void;
  jwt: string | null;
  setJwt: (jwt: string) => void;
  removeJwt: () => void;
  redirectToLoginFlag: boolean;
  setRedirectToLoginFlag: (to: boolean) => void;
};

export const useAuthState = create<TAuthState>((set) => ({
  user: null,
  setUser: (user) =>
    set(() => ({
      user: user,
    })),
  removeUser: () => {
    removeUserFromStore();
    set(() => ({
      user: null,
    }));
  },
  jwt: null,
  setJwt: (jwt) =>
    set(() => ({
      jwt: jwt,
    })),
  removeJwt: () => {
    remvoeJwtFromStore();
    set(() => ({
      jwt: null,
    }));
  },
  redirectToLoginFlag: false,
  setRedirectToLoginFlag: (to: boolean) => {
    set(() => ({
      redirectToLoginFlag: to,
    }));
  },
}));
