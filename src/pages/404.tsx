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

      <Container maxWidth="700px" marginTop={6} marginBottom={4} padding={2}>
        <Layout>
          <Center>
            <Heading size="2xl">404 page not found</Heading>
          </Center>
        </Layout>
      </Container>
    </>
  );
};

export default NotFound;
