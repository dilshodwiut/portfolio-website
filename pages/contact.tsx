import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/templates/Header/Header";
import Footer from "@/components/templates/Footer/Footer";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dilshod | Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/man.png" />
      </Head>
      <Header />
      <div style={{ flex: "1 0 auto" }}>This section is under development</div>
      <Footer />
    </>
  );
};

export default Contact;
