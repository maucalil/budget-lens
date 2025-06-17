export interface UserLoginDto {
  email: string;
  password: string;
}

export interface UserCreateDto extends UserLoginDto {
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
