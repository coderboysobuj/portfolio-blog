import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "../../components/Blog/Card";
import Layout from "../../components/Layout";
import { client } from "../../graphql/apollo-client";
import PostOperations from "../../graphql/operations/posts";
import CategoryOperations from "../../graphql/operations/category";
import { Post } from "../../utils/types";

interface IPostsByCategoryProps {
  posts: Post[];
}

const PostsByCategory: NextPage<IPostsByCategoryProps> = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Blog/code - Jisan Khan</title>
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
              <Heading size="md">Latest article</Heading>
              <SimpleGrid columns={2} spacing={4} mt={4}>
                {posts.map((post) => (
                  <Card post={post} key={post.id} />
                ))}
              </SimpleGrid>
            </Box>
          </Stack>
        </Layout>
      </Container>
    </>
  );
};

// export async function getStaticPaths() {
//   const { data } = await client.query({
//     query: CategoryOperations.Querys.getAllSlug,
//   });
//   const paths = data.categories.data?.map((c: any) => {
//     return { params: { category: c.attributes.slug } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

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

export default PostsByCategory;
