import { Box, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const RelatedArticleCard: React.FC = () => {
  return (
    <Link href="/">
      <Box width="100%" cursor="pointer" height="450px">
        <Image
          src="/images/demo.png"
          width="100%"
          height="40%"
          borderRadius="md"
          objectFit="cover"
        />
        <Stack spacing={2} padding={2}>
          <Text fontWeight={500} fontSize="xl">
            Twitter clone
          </Text>
          <Text fontSize="lg">
            Replica of the original but with extra features! Guess countries,
            flags and capitals.
          </Text>
        </Stack>
      </Box>
    </Link>
  );
};

export default RelatedArticleCard;
