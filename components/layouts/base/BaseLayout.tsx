import Head from "next/head";
import React from "react";
import styles from "./BaseLayout.module.css";

export interface IBaseLayout {
  title?: string;
  children?: any;
};

const BaseLayout: React.FC<IBaseLayout> = (args) => {
  return (
    <>
      <Head>{args.title}</Head>
      <main className={styles.main}>{args.children}</main>
    </>
  );
};

export default BaseLayout;