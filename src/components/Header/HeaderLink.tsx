import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface HeaderLinkProps {
  active?: boolean;
  link: string;
  text: string;
}
const HeaderLink: React.FC<HeaderLinkProps> = ({ active, link, text }) => {
  return (
    <Link href={link}>
      <Text
        color={active ? "whiteAlpha.800" : "gray.400"}
        padding="5px 10px"
        borderRadius="md"
        cursor="pointer"
        fontWeight={active ? 600 : 400}
        transition="all 0.3s ease"
        _hover={{ bg: "whiteAlpha.100" }}
      >
        {text}
      </Text>
    </Link>
  );
};

export default HeaderLink;
