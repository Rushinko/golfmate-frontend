import { TUser } from "../models/types";
import { JWT_STORE_KEY, USER_STORE_KEY } from "../util/constants";

export function setUser(user: TUser): void {
  localStorage.setItem(USER_STORE_KEY, JSON.stringify(user));
}

export function getUserFromStore(): TUser | null {
  const userString = localStorage.getItem(USER_STORE_KEY);
  if (userString) {
    const user: TUser = JSON.parse(userString);
    return user;
  }
  return null;
}

export function removeUserFromStore(): void {
  localStorage.removeItem(USER_STORE_KEY);
}

export function setJwt(jwt: string): void {
  localStorage.setItem(JWT_STORE_KEY, jwt);
}

export function getJwtFromStore(): string | null {
  const jwt = localStorage.getItem(JWT_STORE_KEY);
  if (jwt) {
    return jwt;
  }
  return null;
}

export function remvoeJwtFromStore(): void {
  localStorage.removeItem(JWT_STORE_KEY);
}
