import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import RelatedArticleCard from "./RelatedArticleCard";

const RelatedArticle: React.FC = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Stack spacing={4}>
        <Heading size="md">Check out some of related article</Heading>
        <SimpleGrid columns={3} spacing={4}>
          <RelatedArticleCard />
          <RelatedArticleCard />
          <RelatedArticleCard />
          <RelatedArticleCard />
          <RelatedArticleCard />
          <RelatedArticleCard />
        </SimpleGrid>
      </Stack>
    </div>
  );
};

export default RelatedArticle;
