import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jisan Khan - about</title>
        <meta name="title" content="Jisan Khan Sobuj Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Heading>/about</Heading>
        <Stack marginTop={4} spacing={4}>
          <Text lineHeight={7}>
            My name is Jisan and I am from Manikganj, Dhaka, Bangladesh 🏁.
          </Text>
          <Text lineHeight={7}>
            For about 2 years, I worked full-time frelancer as a web developer,
            mainly using React and Node. I love coding.
          </Text>
        </Stack>

        <Box mt="70px">
          <Heading size="md">Get in contact</Heading>
          <div
            style={{
              display: "block",
              marginBlockStart: "1em",

              marginBlockEnd: "1em",
              marginInlineStart: "0px",
              marginInlineEnd: "0px",
              paddingInlineStart: "40px",
            }}
          >
            <Flex align="center" gap={1} my={1}>
              <Text>{">"}</Text>
              <Link href="/">
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="pointer"
                  color="blue.400"
                >
                  Linkdin
                </Text>
              </Link>
            </Flex>
            <Flex align="center" gap={1} my={1}>
              <Text>{">"}</Text>
              <Link href="/">
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="pointer"
                  color="blue.400"
                >
                  Email
                </Text>
              </Link>
            </Flex>
          </div>
        </Box>
      </Layout>
    </>
  );
};

export default about;
