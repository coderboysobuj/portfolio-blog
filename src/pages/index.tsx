import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import HomeComponent from "../components/Home/Home";
import Projects from "../components/Home/Projects";
import Skils from "../components/Home/Skills";
import TechStack from "../components/Home/TechStack";
import Layout from "../components/Layout";
import { Project, Skill, Tech } from "../utils/types";

const skills: Array<Skill> = [
  {
    id: "1",
    title: "✔️ 3 Years experience with front & backend development.",
  },
  {
    id: "2",
    title: "✔️ Extensive knowledge in API & Database Design.",
  },
  {
    id: "3",
    title: "✔️ Experienced Javascript(React, Next, reduxt).",
  },
];

const techs: Array<Tech> = [
  { id: "1", name: "PHP, JavaScript, NodeJS" },
  { id: "2", name: "Laravel, Express, Graphql, Socket IO" },
  { id: "3", name: "React, Next JS, Redux" },
  { id: "4", name: "Postgres, MongoDB, MySQL, Firebase" },
];

const projects: Array<Project> = [
  { id: "1", title: "🏆 Busniesses website - build website for our team" },
  {
    id: "2",
    title:
      "🏆 Ecommerce platform using paypal and stripe API for payment integration",
  },
  { id: "3", title: "🏆 Social Network - open source project" },
  {
    id: "4",
    title: "🏆 Linkedin Clone (Next, firebase) - open source project",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jisan Khan Sobuj - Web developer</title>
        <meta name="title" content="Jisan Khan Sobuj Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="700px" marginTop={6} marginBottom={4} padding={2}>
        <Layout>
          <HomeComponent />
          <Skils skills={skills} />
          <TechStack techStacks={techs} />
          <Projects projects={projects} />
        </Layout>
      </Container>
    </>
  );
};

export default Home;
