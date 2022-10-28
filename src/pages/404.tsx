import { Center, Container, Heading } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Jisan Khan Sobuj - Web developer</title>
        <meta name="title" content="Jisan Khan Sobuj Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Center>
          <Heading size="2xl">404 page not found</Heading>
        </Center>
      </Layout>
    </>
  );
};

export default NotFound;
