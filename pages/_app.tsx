/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ScreenSizeProvider from "src/contexts/ScreenSizeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ScreenSizeProvider>
        <Component {...pageProps} />
      </ScreenSizeProvider>
    </>
  );
}

export default MyApp;
