import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Tech } from "../../utils/types";

interface ITechStackProps {
  techStacks: Tech[];
}

const TechStack: React.FC<ITechStackProps> = ({ techStacks }) => {
  return (
    <Stack spacing={5} marginY="60px">
      <Heading size="md">Tech stack</Heading>
      <Flex flexWrap="wrap" gap="1em">
        {techStacks.map((tech) => (
          <Text
            key={tech.id}
            border="1px solid"
            borderColor="whiteAlpha.100"
            padding="0.5em 1em"
            borderRadius="md"
            align="center"
          >
            {tech.name}
          </Text>
        ))}
      </Flex>
    </Stack>
  );
};

export default TechStack;
