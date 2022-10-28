import { Stack, Flex, Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { backendUrl } from "../../config/config";
import { Post } from "../../utils/types";

interface ICardProps {
  post: Post;
}
const Card: React.FC<ICardProps> = ({ post }) => {
  return (
    <Link href={`/blog/article/${post.attributes.slug}`}>
      <Box
        bg="whiteAlpha.100"
        width="100%"
        // height="450px"
        cursor="pointer"
        _hover={{ boxShadow: "2xl" }}
        borderRadius="xl"
      >
        <Image
          src={`${backendUrl}${post.attributes.thumb.data.attributes.url}`}
          height="40%"
          objectFit="cover"
          borderTopRadius="xl"
          width="100%"
        />
        <Stack padding={4} spacing={4}>
          <Text color="green.300" fontSize="sm">
            1 min to read - {post.attributes.publishedAt}
          </Text>
          <Text fontWeight={500} fontSize="xl">
            {post.attributes.title}
          </Text>

          <Flex flexWrap="wrap" gap={2}>
            {post.attributes?.tags &&
              post.attributes.tags.data.map((tag) => (
                <Text
                  key={tag.attributes.name}
                  align="center"
                  bg="whiteAlpha.400"
                  padding="1px 2px"
                  cursor="pointer"
                  borderRadius="sm"
                >
                  #{tag.attributes.name}
                </Text>
              ))}
          </Flex>
        </Stack>
      </Box>
    </Link>
  );
};

export default Card;
