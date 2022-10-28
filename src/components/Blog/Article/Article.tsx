import { Stack, Flex, Box, Image, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { backendUrl } from "../../../config/config";
import { Post } from "../../../utils/types";

interface IArticleProps {
  post: Post;
}
const Article: React.FC<IArticleProps> = ({ post }) => {
  return (
    <Link href={`/blog/article/${post.attributes.slug}`}>
      <Box cursor="pointer">
        <Text _hover={{ textDecoration: "underline" }} fontSize="2xl">
          {post.attributes.title}
        </Text>
        <Text color="green.300" fontSize="sm">
          3 min to read - 23 july 2022
        </Text>
        <Text mt={2}>{post.attributes.shortDescription}</Text>
      </Box>
    </Link>
  );
};

export default Article;
