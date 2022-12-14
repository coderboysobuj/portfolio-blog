import {
  Container,
  Heading,
  Stack,
  Text,
  Box,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { client } from "../../graphql/apollo-client";
import PostOperations from "../../graphql/operations/posts";
import Article from "../../components/Blog/Article/Article";

import Layout from "../../components/Layout";
import { Post } from "../../utils/types";

interface IBlogProps {
  posts: Post[];
}

const blog: NextPage<IBlogProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Jisan - Blog</title>
      </Head>
      <Container maxWidth="700px" marginTop={6} marginBottom={4} padding={2}>
        <Layout>
          <Stack spacing={12}>
            <Stack spacing={3}>
              <Heading>/blog/code</Heading>
              <Text>
                Here you can find articles about everything web dev. I like to
                write 'how to's' about specific topics e.g. Angular 2+, Next.js,
                Heroku etc, as well as broader topics about the life of a web
                developer.
              </Text>
              <Flex align="center" gap={2}>
                <Text>You can search </Text>
                <Text cursor="pointer" color="blue.400">
                  {" "}
                  by category.
                </Text>
              </Flex>
            </Stack>
            <Box>
              <Heading size="xl">Latest article</Heading>
              <Stack spacing={5} mt={5}>
                {posts.map((post) => (
                  <Article post={post} key={post.id} />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Layout>
      </Container>
    </>
  );
};
export async function getServerSideProps(ctx: any) {
  try {
    const res = await client.query({
      query: PostOperations.Querys.getAllPost,
    });

    return {
      props: {
        posts: res.data.posts.data,
      },
    };
  } catch (error: any) {
    return {
      notFound: true,
    };
  }
}

export default blog;
