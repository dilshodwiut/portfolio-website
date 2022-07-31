import * as React from "react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Header from "@/components/templates/Header/Header";
import Footer from "@/components/templates/Footer/Footer";
import Expertise from "@/components/templates/Expertise/Expertise";
import Divider from "@/components/atoms/Divider/Divider";
import Statistics from "@/components/templates/Statistics/Statistics";
import Clients from "@/components/templates/Clients/Clients";
import Practices from "@/components/templates/Practices/Practices";
import Content from "@/components/atoms/Content/Content";
import Projects from "@/components/templates/Projects/Projects";
import dynamic from "next/dynamic";

const Portfolio: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { technologies, stats, projects } = props;

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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/man.png" />
      </Head>
      <Header />
      <Content>
        <Expertise technologies={technologies} />
        <Divider />
        <Statistics stats={stats} />
        <Divider />
        <Delivery />
        <Divider />
        <Clients />
        <Projects projects={projects} />
        <Divider />
        <Practices />
      </Content>
      <Footer />
    </>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps = async (context) => {
  // const projects = await import("@/data/projects.json");
  // const projects = await fetch("@/data/projects.json");
  const [technologies, stats, projects] = await Promise.all([
    fetch(process.env.TECHNOLOGIES_URL),
    fetch(process.env.STATS_URL),
    fetch(process.env.PROJECTS_URL),
  ]);
  const technologiesData = await technologies.json();
  const statsData = await stats.json();
  const projectsData = await projects.json();

  return {
    props: {
      technologies: technologiesData,
      stats: statsData,
      projects: projectsData,
    },
  };
};
