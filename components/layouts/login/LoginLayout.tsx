import Head from "next/head";
import React from "react";
import styles from "./LoginLayout.module.css";

export interface ILoginLayout {
  title?: string;
  children?: any;
};

const LoginLayout: React.FC<ILoginLayout> = (args) => {
  return (
    <>
      <Head>{args.title}</Head>
      <main className={styles.main}>{args.children}</main>
    </>
  );
};

export default LoginLayout;