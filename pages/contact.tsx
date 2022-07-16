import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/organisms/Navbar/Navbar";
import Footer from "@/components/templates/Footer/Footer";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dilshod | Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/man.png" />
      </Head>
      <Navbar />
      <div style={{ flex: "1 0 auto" }}>Contact page</div>
      <Footer backgroundColor="#212121" />
    </>
  );
};

export default Contact;
