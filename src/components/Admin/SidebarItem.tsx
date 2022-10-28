import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

interface ISidebarItemProps {
  active?: boolean;
  text: string;
  link: string;
  icon: IconType;
}

const SidebarItem: React.FC<ISidebarItemProps> = ({
  text,
  icon,
  active,
  link,
}) => {
  return (
    <Link href={link}>
      <Flex
        rounded="md"
        gap={2}
        align="center"
        cursor="pointer"
        padding="10px"
        transition="0.2s ease"
        _hover={{
          bg: "whiteAlpha.100",
          borderRight: "2px solid",
          borderRightColor: "blue.200",
        }}
        bg={active ? "whiteAlpha.100" : "unset"}
        borderRight={active ? "2px solid" : "unset"}
        borderRightColor="blue.200"
      >
        <Icon color={active ? "blue.300" : "unset"} fontSize="2xl" as={icon} />
        <Text display={{ base: "none", md: "unset" }}>{text}</Text>
      </Flex>
    </Link>
  );
};

export default SidebarItem;
