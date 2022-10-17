import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Home: React.FC = () => {
  return (
    <Flex justify="space-between">
      <Stack spacing={5}>
        <Text color="green.300">Hi, my name is</Text>
        <main>
          <Heading size="3xl">Jisan Khan</Heading>
          <Text fontSize="xl">Web design & developer</Text>
        </main>
        <Text color="whiteAlpha.600">
          I am a web developer with 3 years of experience. I love to do coding
          💻.
        </Text>
      </Stack>
      <Image
        src="/images/jisan.jpg"
        width="150px"
        objectFit="cover"
        marginLeft={6}
        height="150px"
        borderRadius="full"
      />
    </Flex>
  );
};

export default Home;
