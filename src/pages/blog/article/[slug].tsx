import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import AboutAuthor from "../../../components/Blog/Article/AboutAuthor";
import RelatedArticle from "../../../components/Blog/Article/RelatedArticle";
import Layout from "../../../components/Layout";
import { client } from "../../../graphql/apollo-client";
import PostOperations from "../../../graphql/operations/posts";
import { Post } from "../../../utils/types";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { useEffect } from "react";

interface IArticleProps {
  post: Post;
}

const Article: NextPage<IArticleProps> = ({ post }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, [post]);

  return (
    <>
      <Head>
        <title>
          {post.attributes?.title ? post.attributes.title : "Jisan blog"}
        </title>
      </Head>
      <Container maxWidth="700px" marginTop={6} padding={2}>
        <Layout>
          <Stack spacing={12}>
            <Flex justify="space-between">
              <Flex align="center" gap={3}>
                <Avatar src="/images/jisan.jpg" name="Jisan Khan" />
                <Flex direction="column">
                  <Text fontWeight={400} fontSize="xl">
                    Jisan Khan
                  </Text>
                  <Text fontSize="md" color="green.400" fontWeight={400}>
                    1 min read · July 21, 2022
                  </Text>
                </Flex>
              </Flex>
              <Flex align="center" gap={3}>
                <Link href="/">
                  <Icon
                    cursor="pointer"
                    _hover={{
                      color: "blue.500",
                    }}
                    as={FaLinkedin}
                    fontSize="3xl"
                  />
                </Link>
                <Link href="/">
                  <Icon
                    cursor="pointer"
                    _hover={{
                      color: "blue.500",
                    }}
                    as={FaTwitter}
                    fontSize="3xl"
                  />
                </Link>
                <Link href="/">
                  <Icon
                    cursor="pointer"
                    _hover={{
                      color: "blue.500",
                    }}
                    as={FaGithub}
                    fontSize="3xl"
                  />
                </Link>
              </Flex>
            </Flex>
            <article>
              <Flex flexWrap="wrap" gap={3}>
                {post.attributes?.tags &&
                  post.attributes.tags.data.map((t) => (
                    <Text
                      key={t.attributes.name}
                      align="center"
                      bg="whiteAlpha.400"
                      padding="1px 2px"
                      borderRadius="sm"
                      color="blue.300"
                    >
                      #{t.attributes.name}
                    </Text>
                  ))}
              </Flex>
              <Box
                mt={4}
                dangerouslySetInnerHTML={{ __html: post.attributes.body }}
              ></Box>
            </article>
            <Divider />
            <AboutAuthor />
            {/* <RelatedArticle /> */}
          </Stack>
        </Layout>
      </Container>
    </>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: PostOperations.Querys.getAllSlug,
  });
  const paths = data.posts.data?.map((p: any) => {
    return { params: { slug: p.attributes.slug } };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx: any) {
  try {
    const res = await client.query({
      query: PostOperations.Querys.getPostBySlug,
      variables: { slug: ctx.params.slug },
    });

    return {
      props: {
        post: res.data.posts.data[0],
      },
    };
  } catch (error: any) {
    return {
      notFound: true,
    };
  }
}

export default Article;
