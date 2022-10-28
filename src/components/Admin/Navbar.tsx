import { Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { FaPowerOff } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box
      style={{ width: "100%" }}
      position="sticky"
      top={0}
      left={0}
      boxShadow="dark-lg"
      width="100%"
    >
      <Flex padding="10px" align="center" justify="flex-end">
        <Icon
          fontWeight="bold"
          cursor="pointer"
          fontSize="3xl"
          as={FaPowerOff}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
