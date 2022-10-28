import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MediaGalleryItem from "./MediaGalleryItem";

const MediaGallery: React.FC = () => {
  return (
    <SimpleGrid columns={4} spacing={4} mt={4}>
      <MediaGalleryItem />
    </SimpleGrid>
  );
};

export default MediaGallery;
