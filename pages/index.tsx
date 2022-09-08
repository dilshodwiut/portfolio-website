import * as React from "react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/templates/Hero/Hero";
import Footer from "@/components/templates/Footer/Footer";
import Header from "@/components/templates/Header/Header";
import Content from "@/components/atoms/Content/Content";
import Expertise from "@/components/templates/Expertise/Expertise";
import Divider from "@/components/atoms/Divider/Divider";
import Statistics from "@/components/templates/Statistics/Statistics";
import Clients from "@/components/templates/Clients/Clients";
import Practices from "@/components/templates/Practices/Practices";
import Projects from "@/components/templates/Projects/Projects";
import dynamic from "next/dynamic";

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { technologies, stats, clients, projects } = props;

  const Delivery = dynamic(
    () => import("@/components/templates/Delivery/Delivery"),
    {
      ssr: false,
    }
  );

  return (
    <>
      <Head>
        <title>Dilshod | Frontend Developer</title>
        <meta
          name="description"
          content="Frontend Developer's Portfolio Website"
        />
        <link rel="icon" href="/icons/man.png" />
      </Head>
      <Header />
      <Content>
        <Hero />
        <Divider />
        <Expertise technologies={technologies} />
        <Divider />
        <Statistics stats={stats} />
        <Divider />
        <Delivery />
        <Divider />
        <Clients clients={clients} />
        <Projects projects={projects} />
        <Divider />
        <Practices />
      </Content>
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  // const projects = await import("@/data/projects.json");
  // const projects = await fetch("@/data/projects.json");
  const [technologies, stats, clients, projects] = await Promise.all([
    fetch(process.env.TECHNOLOGIES_URL),
    fetch(process.env.STATS_URL),
    fetch(process.env.CLIENTS_URL),
    fetch(process.env.PROJECTS_URL),
  ]);
  const technologiesData = await technologies.json();
  const statsData = await stats.json();
  const clientsData = await clients.json();
  const projectsData = await projects.json();

  return {
    props: {
      technologies: technologiesData,
      stats: statsData,
      clients: clientsData,
      projects: projectsData,
    },
  };
};
