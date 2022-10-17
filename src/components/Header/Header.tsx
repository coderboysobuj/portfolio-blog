import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FaMoon } from "react-icons/fa";
import HeaderLink from "./HeaderLink";

const Header: React.FC = () => {
  return (
    <Flex align="center" justify="space-between">
      <Flex>
        <HeaderLink text="Home" link="/" active />
        <HeaderLink text="About" link="/about" />
        <HeaderLink text="Blog" link="/blog" />
      </Flex>
      <IconButton icon={<Icon as={FaMoon} />} aria-label={"Dark"} />
    </Flex>
  );
};

export default Header;
