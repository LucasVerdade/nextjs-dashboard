import axios from "axios";

type SignUpDTO = {
  email: string,
  name: string,
  password: string,
  passwordConfirmation: string,
  profiles: any[]
}

type SignInDTO = {
  email: string,
  password: string
}

type signInResponse = {
  user: {
    id: string;
    email: string;
    role: string;
    status: boolean;
    created: Date;
    modified: Date;
    last_login: Date;
    profiles: any[];
  },
  token: string
}

type signUpResponse = {
  user: {
    email: string,
    name: string,
    role: string,
    status: boolean,
    id: string,
    created: Date,
    modified: Date,
    lastTimeLogin: Date,
  },
  message: string
}

export const authAPIClient = () => {
  const api = axios.create({
    baseURL: "http://localhost:3000/auth/"
  });

  return api;
}

const signUp = async (credentials: SignUpDTO ): Promise<signUpResponse> => {
  const { data } = await authAPIClient().post("signup", credentials);
  return data;
}

const signIn = async (credentials: SignInDTO): Promise<signInResponse> => {
  const { data } = await authAPIClient().post("signin", credentials);
  return data;
}

const api = authAPIClient();

export { signIn, signUp, api };