import * as React from "react";
import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ScreenSizeProvider from "src/contexts/ScreenSizeContext";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
  const ScrollTopArrow = dynamic(
    () => import("@/components/atoms/ScrollTopArrow/ScrollTopArrow"),
    { ssr: false }
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="I am a software engineer" />
      </Head>
      <ScreenSizeProvider>
        <Component {...pageProps} />
        <ScrollTopArrow />
      </ScreenSizeProvider>
    </>
  );
}

export default MyApp;
