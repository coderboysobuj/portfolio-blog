import {
  Container,
  Heading,
  Stack,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/Layout";

const blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jisan - Blog</title>
      </Head>
      <Container maxWidth="700px" marginTop={6} marginBottom={4} padding={2}>
        <Layout>
          <Heading>/blog</Heading>
          <Stack marginTop={4} spacing={6}>
            <Heading size="sm">I write about this topic</Heading>
            <SimpleGrid columns={3} spacing={4}>
              <Link href="/blog/code">
                <Box
                  padding="15px 15px"
                  borderRadius="xl"
                  cursor="pointer"
                  _hover={{
                    boxShadow: "2xl",
                  }}
                  border="4px solid"
                  borderColor="whiteAlpha.100"
                >
                  <Text fontSize="2xl" mb={2} fontWeight="bold">
                    code
                  </Text>
                  <Text>
                    Everything related to the tech stacks I use. This includes
                    Angular 2+, Next.js, Node.js, SCSS, Heroku, Vercel, MongoDB
                    etc.
                  </Text>
                </Box>
              </Link>
              <Link href="/blog/code">
                <Box
                  padding="15px 15px"
                  cursor="pointer"
                  borderRadius="xl"
                  _hover={{
                    boxShadow: "2xl",
                  }}
                  border="4px solid"
                  borderColor="whiteAlpha.100"
                >
                  <Text fontSize="2xl" mb={2} fontWeight="bold">
                    life
                  </Text>
                  <Text>
                    About the things going on in my life. This might be tutoring
                    related or about the sports I participate in.
                  </Text>
                </Box>
              </Link>
              <Link href="/blog/code">
                <Box
                  padding="15px 15px"
                  borderRadius="xl"
                  cursor="pointer"
                  _hover={{
                    boxShadow: "2xl",
                  }}
                  border="4px solid"
                  borderColor="whiteAlpha.100"
                >
                  <Text fontSize="2xl" mb={2} fontWeight="bold">
                    misc
                  </Text>
                  <Text>
                    Just random things that come into my head that I have
                    decided to write down.
                  </Text>
                </Box>
              </Link>
            </SimpleGrid>
          </Stack>
        </Layout>
      </Container>
    </>
  );
};

export default blog;
