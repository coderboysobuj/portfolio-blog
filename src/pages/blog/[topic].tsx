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
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const Topic: NextPage = () => {
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
                <Link href="/blog/article/how_to">
                  <Box
                    bg="whiteAlpha.100"
                    width="100%"
                    height="450px"
                    cursor="pointer"
                    _hover={{ boxShadow: "2xl" }}
                    borderRadius="xl"
                  >
                    <Image
                      src="/images/demo.png"
                      height="40%"
                      objectFit="cover"
                      borderTopRadius="xl"
                      width="100%"
                    />
                    <Stack padding={4} spacing={4}>
                      <Text color="green.300" fontSize="sm">
                        1 min to read - july 13, 2022
                      </Text>
                      <Text fontWeight={500} fontSize="xl">
                        How to add google analytics to your Next.js application
                      </Text>
                      <Flex flexWrap="wrap" gap={2}>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #nextjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #reactjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #express
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #mongodb
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #redux
                        </Text>
                      </Flex>
                    </Stack>
                  </Box>
                </Link>
                <Link href="/blog/article/how_to">
                  <Box
                    bg="whiteAlpha.100"
                    width="100%"
                    height="450px"
                    cursor="pointer"
                    _hover={{ boxShadow: "2xl" }}
                    borderRadius="xl"
                  >
                    <Image
                      src="/images/demo.png"
                      height="40%"
                      objectFit="cover"
                      borderTopRadius="xl"
                      width="100%"
                    />
                    <Stack padding={4} spacing={4}>
                      <Text color="green.300" fontSize="sm">
                        1 min to read - july 13, 2022
                      </Text>
                      <Text fontWeight={500} fontSize="xl">
                        How to add google analytics to your Next.js application
                      </Text>
                      <Flex flexWrap="wrap" gap={2}>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #nextjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #reactjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #express
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #mongodb
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #redux
                        </Text>
                      </Flex>
                    </Stack>
                  </Box>
                </Link>
                <Link href="/blog/article/how_to">
                  <Box
                    bg="whiteAlpha.100"
                    width="100%"
                    height="450px"
                    cursor="pointer"
                    _hover={{ boxShadow: "2xl" }}
                    borderRadius="xl"
                  >
                    <Image
                      src="/images/demo.png"
                      height="40%"
                      objectFit="cover"
                      borderTopRadius="xl"
                      width="100%"
                    />
                    <Stack padding={4} spacing={4}>
                      <Text color="green.300" fontSize="sm">
                        1 min to read - july 13, 2022
                      </Text>
                      <Text fontWeight={500} fontSize="xl">
                        How to add google analytics to your Next.js application
                      </Text>
                      <Flex flexWrap="wrap" gap={2}>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #nextjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #reactjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #express
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #mongodb
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #redux
                        </Text>
                      </Flex>
                    </Stack>
                  </Box>
                </Link>
                <Link href="/blog/article/how_to">
                  <Box
                    bg="whiteAlpha.100"
                    width="100%"
                    height="450px"
                    cursor="pointer"
                    _hover={{ boxShadow: "2xl" }}
                    borderRadius="xl"
                  >
                    <Image
                      src="/images/demo.png"
                      height="40%"
                      objectFit="cover"
                      borderTopRadius="xl"
                      width="100%"
                    />
                    <Stack padding={4} spacing={4}>
                      <Text color="green.300" fontSize="sm">
                        1 min to read - july 13, 2022
                      </Text>
                      <Text fontWeight={500} fontSize="xl">
                        How to add google analytics to your Next.js application
                      </Text>
                      <Flex flexWrap="wrap" gap={2}>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #nextjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #reactjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #express
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #mongodb
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #redux
                        </Text>
                      </Flex>
                    </Stack>
                  </Box>
                </Link>
                <Link href="/blog/article/how_to">
                  <Box
                    bg="whiteAlpha.100"
                    width="100%"
                    height="450px"
                    cursor="pointer"
                    _hover={{ boxShadow: "2xl" }}
                    borderRadius="xl"
                  >
                    <Image
                      src="/images/demo.png"
                      height="40%"
                      objectFit="cover"
                      borderTopRadius="xl"
                      width="100%"
                    />
                    <Stack padding={4} spacing={4}>
                      <Text color="green.300" fontSize="sm">
                        1 min to read - july 13, 2022
                      </Text>
                      <Text fontWeight={500} fontSize="xl">
                        How to add google analytics to your Next.js application
                      </Text>
                      <Flex flexWrap="wrap" gap={2}>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #nextjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #reactjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #express
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #mongodb
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #redux
                        </Text>
                      </Flex>
                    </Stack>
                  </Box>
                </Link>
                <Link href="/blog/article/how_to">
                  <Box
                    bg="whiteAlpha.100"
                    width="100%"
                    height="450px"
                    cursor="pointer"
                    _hover={{ boxShadow: "2xl" }}
                    borderRadius="xl"
                  >
                    <Image
                      src="/images/demo.png"
                      height="40%"
                      objectFit="cover"
                      borderTopRadius="xl"
                      width="100%"
                    />
                    <Stack padding={4} spacing={4}>
                      <Text color="green.300" fontSize="sm">
                        1 min to read - july 13, 2022
                      </Text>
                      <Text fontWeight={500} fontSize="xl">
                        How to add google analytics to your Next.js application
                      </Text>
                      <Flex flexWrap="wrap" gap={2}>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #nextjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #reactjs
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #express
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #mongodb
                        </Text>
                        <Text
                          align="center"
                          bg="whiteAlpha.400"
                          padding="1px 2px"
                          borderRadius="sm"
                        >
                          #redux
                        </Text>
                      </Flex>
                    </Stack>
                  </Box>
                </Link>
              </SimpleGrid>
            </Box>
          </Stack>
        </Layout>
      </Container>
    </>
  );
};

export default Topic;
