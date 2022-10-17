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

const Article: NextPage = () => {
  return (
    <>
      <Head>
        <title>How to make</title>
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
                <Text
                  align="center"
                  bg="whiteAlpha.400"
                  padding="1px 2px"
                  borderRadius="sm"
                  color="blue.300"
                >
                  #reactjs
                </Text>
                <Text
                  align="center"
                  bg="whiteAlpha.400"
                  color="blue.300"
                  padding="1px 2px"
                  borderRadius="sm"
                >
                  #nextjs
                </Text>
              </Flex>
              <Box mt={4}>
                <Text>
                  {/* Content */}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur enim aperiam similique libero distinctio
                  repellendus, minus corrupti earum, sapiente optio magnam sunt
                  inventore, perferendis id. Quibusdam atque ex nemo
                  necessitatibus quae ullam vel sint velit ad omnis, minus neque
                  tempora laudantium esse illo repellendus doloremque, ipsam
                  maxime culpa? Excepturi aspernatur dolor neque enim aut
                  architecto consequatur velit qui modi. Nostrum facilis maxime
                  nemo unde dolores deleniti dicta iure! Magni, repellat eum
                  alias totam, quidem culpa assumenda placeat explicabo dolorem
                  vitae excepturi nostrum nobis et deserunt! Veniam, et ut iusto
                  illum voluptas laborum. Quod in, animi atque laborum a alias
                  vitae. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Atque minus dignissimos inventore, sequi earum fuga,
                  dolore repellat deleniti facere nesciunt culpa iure
                  perspiciatis, numquam obcaecati aspernatur? Impedit et
                  delectus, molestias quibusdam aperiam, accusantium iure
                  corrupti adipisci rerum nesciunt eum animi vel reprehenderit
                  est! Aliquam minima hic tempora commodi asperiores maiores
                  perspiciatis amet temporibus cupiditate, inventore vitae, modi
                  odit sunt ipsa odio illo eveniet praesentium accusamus eum qui
                  totam beatae? Facilis temporibus hic nihil debitis quasi odio
                  possimus tempore pariatur aspernatur commodi enim dolorem
                  sapiente in, dicta fuga. Quia, dolor, animi laborum aliquid
                  amet aliquam vel ratione libero quae maxime blanditiis?
                </Text>
              </Box>
            </article>
            <Divider />
            <AboutAuthor />
            <RelatedArticle />
          </Stack>
        </Layout>
      </Container>
    </>
  );
};

export default Article;
