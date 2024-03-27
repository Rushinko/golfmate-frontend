import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { HomeIcon } from "@radix-ui/react-icons";

export type TUser = {
  created_at: string,
  email: string,
  first_name: string,
  id: number,
  jti: string,
  last_name: string,
  updated_at: string,
  username: string | null,
};

export type TIcon = typeof HomeIcon

export type TPage = {
  name: string,
  to: string,
  icon?: TIcon,
  component: JSX.Element,
};

export type TRegisterForm = {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  password_confirmation: string,
};

export type Image = {
  url: string,
  descriptioin: string,
  author: string,
};