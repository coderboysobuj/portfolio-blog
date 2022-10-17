import {
  Box,
  Divider,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "10px", marginBottom: "40px" }}>
      <Divider />
      <SimpleGrid columns={3} spacingX={9} spacingY={4} marginTop={8}>
        <Stack>
          <Text
            cursor="pointer"
            color="brand.100"
            _hover={{ textDecor: "underline" }}
          >
            Home
          </Text>
          <Text
            cursor="pointer"
            color="brand.100"
            _hover={{ textDecor: "underline" }}
          >
            About
          </Text>
          <Text
            cursor="pointer"
            color="brand.100"
            _hover={{ textDecor: "underline" }}
          >
            Blog
          </Text>
        </Stack>
        <Stack>
          <Text
            cursor="pointer"
            color="brand.100"
            _hover={{ textDecor: "underline" }}
          >
            Facebook
          </Text>
          <Text
            cursor="pointer"
            color="brand.100"
            _hover={{ textDecor: "underline" }}
          >
            Linkdin
          </Text>
          <Text
            cursor="pointer"
            color="brand.100"
            _hover={{ textDecor: "underline" }}
          >
            Instagram
          </Text>
        </Stack>
        <Stack>
          <Text
            cursor="pointer"
            color="brand.100"
            _hover={{ textDecor: "underline" }}
          >
            Code
          </Text>
          <Text
            cursor="pointer"
            color="brand.100"
            _hover={{ textDecor: "underline" }}
          >
            Life
          </Text>
          <Text
            cursor="pointer"
            color="brand.100"
            _hover={{ textDecor: "underline" }}
          >
            Music
          </Text>
        </Stack>
      </SimpleGrid>
    </footer>
  );
};

export default Footer;
