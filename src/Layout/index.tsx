import Head from "next/head";
import Footer from "./Footer";
import styles from "./index.module.css";
import type { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
export {Footer, Header}
