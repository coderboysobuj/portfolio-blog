import {
  Flex,
  Checkbox,
  IconButton,
  Icon,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

import React from "react";
import { FaEdit } from "react-icons/fa";

const MediaGalleryItem = () => {
  return (
    <Box
      bg="whiteAlpha.100"
      width="100%"
      height="250px"
      cursor="pointer"
      _hover={{ boxShadow: "2xl" }}
      borderRadius="md"
      position="relative"
    >
      <Image
        src={`/images/demo.png`}
        height="75%"
        objectFit="cover"
        borderTopRadius="xl"
        width="100%"
      />
      <Flex
        width="100%"
        height="50%"
        justify="space-between"
        position="absolute"
        left={0}
        padding={4}
        align="flex-start"
        top={0}
        zIndex={9}
      >
        <Checkbox />
        <IconButton aria-label="Edit" icon={<Icon as={FaEdit} />} />
      </Flex>

      <Flex align="center" padding={3} justify="space-between">
        <Flex direction="column" gap={-0.5}>
          <Text fontSize="sm">profle.png</Text>
          <Text fontSize="sm">PNG 340x294</Text>
        </Flex>
        <Text
          fontSize="sm"
          padding="0.5px"
          textTransform="uppercase"
          background="blackAlpha.800"
          borderRadius="sm"
        >
          image
        </Text>
      </Flex>
    </Box>
  );
};

export default MediaGalleryItem;
