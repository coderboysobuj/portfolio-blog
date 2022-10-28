import { Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import Layout from "../../../components/Admin/Layout";
import PostList from "../../../components/Admin/Posts/PostList";

const Posts = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <Layout>
      <Flex justify="space-between">
        <Text fontSize="3xl">Posts List</Text>
        <Link href="/admin/posts/create">
          <Button leftIcon={<Icon fontSize="xl" as={FaPlusSquare} />}>
            Create
          </Button>
        </Link>
      </Flex>
      <PostList />
    </Layout>
  );
};

export default Posts;
