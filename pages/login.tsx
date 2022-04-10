import LoginLayout from "@/components/layouts/login/LoginLayout";
import { NextPageWithLayout } from "./page";
import Image from "next/image";
import LoginForm from "@/components/forms/login/LoginForm";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Image src="/img/Leaf Main Logo White.png" height={40} width={"100%"}/>
      <hr />
      <LoginForm/>
    </>
  );
};

export default Login;

Login.getLayout = (page) => {
  return (
    <>
      <LoginLayout title="Login">
        {page}
      </LoginLayout>
    </>
  );
};