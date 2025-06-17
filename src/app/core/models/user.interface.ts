export interface User {
  id: number;
  name: string;
  email: string;
}

export type UserLoginDto = Pick<User, 'email'> & {
  password: string;
};

export type UserCreateDto = UserLoginDto & {
  name: string;
};
