import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Container from "@/components/atoms/Container/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
