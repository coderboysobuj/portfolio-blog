import { Flex, Avatar, Stack, Text } from "@chakra-ui/react";
import React from "react";

const AboutAuthor: React.FC = () => {
  return (
    <Flex align="center" gap={8}>
      <Avatar src="/images/jisan.jpg" name="Jisan Khan" size="xl" />
      <Stack spacing={1}>
        <Flex align="center" gap={2}>
          <Text fontSize="xl" fontWeight={500}>
            About the author
          </Text>
          <Text
            padding="2px 2px"
            color="blackAlpha.900"
            fontWeight={400}
            bg="green.200"
            borderRadius="lg"
          >
            Open for work
          </Text>
        </Flex>
        <Text fontSize="lg">
          Hi, I'm Jisan from Manikganj, Dhaka, Bangladesh
        </Text>
        <Text fontSize="lg">
          I am a web design & developer. Full-stack web developer
        </Text>
      </Stack>
    </Flex>
  );
};

export default AboutAuthor;
