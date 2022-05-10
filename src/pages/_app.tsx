import "Styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { UserProvider } from "Context/UserProvider";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
