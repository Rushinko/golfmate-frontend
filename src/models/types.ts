type TUser = {
  first_name: string,
  last_name: string,
  email: string,
}

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