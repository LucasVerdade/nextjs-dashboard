import { createContext, ReactNode, useState } from "react";
import { setCookie } from "nookies";

import { signIn } from "../services/auth";

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: any;
  signInContext: (
    data: SignInData
  ) => Promise<boolean | { error: boolean; status: number; message?: string }>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: ReactNode | JSX.Element;
}) {
  const [user, setUser] = useState<any>(null);

  const isAuthenticated = !!user;

  async function signInContext({ email, password }: SignInData) {
    try {
      const { token, user } = await signIn({
        email,
        password,
      });

      setCookie(undefined, "access_token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      setUser(user);

      return true;
    } catch (error: any) {
      console.error(error);
      return {
        error: true,
        status: error.response.status,
        message: error.response.statusText,
      };
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signInContext: signInContext }}
    >
      {children}
    </AuthContext.Provider>
  );
}
