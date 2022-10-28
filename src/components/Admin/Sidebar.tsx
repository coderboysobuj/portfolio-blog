import { Avatar, Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import {
  FaBloggerB,
  FaHome,
  FaSignOutAlt,
  FaUserFriends,
} from "react-icons/fa";
import { MdImage, MdPostAdd, MdSettings } from "react-icons/md";
import SidebarItem from "./SidebarItem";

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      width={{ base: "70px", md: "20%" }}
      height="100vh"
      position="sticky"
      top={0}
      left={0}
      boxShadow="dark-lg"
    >
      <Stack spacing={9}>
        <Flex
          mt={3}
          rounded="md"
          gap={2}
          align="center"
          cursor="pointer"
          padding="10px"
        >
          <Avatar src="/images/jisan.jpg" />
          <Text
            fontSize="xl"
            textTransform="uppercase"
            display={{ base: "none", md: "unset" }}
          >
            Admin
          </Text>
        </Flex>
        <Stack>
          <SidebarItem
            text="Dashboard"
            icon={FaHome}
            link="/admin"
            active={router.asPath === "/admin"}
          />
          <SidebarItem
            text="Posts"
            icon={MdPostAdd}
            link="/admin/posts"
            active={
              router.asPath === "/admin/posts" ||
              router.asPath === "/admin/posts/create"
            }
          />
          <SidebarItem
            text="Users"
            icon={FaUserFriends}
            link="/admin/users"
            active={router.asPath === "/admin/users"}
          />
          <SidebarItem
            text="Settings"
            icon={MdSettings}
            link="/admin/settings"
            active={router.asPath === "/admin/settings"}
          />
          <SidebarItem
            text="Media Library"
            icon={MdImage}
            link="/admin/media"
            active={router.asPath === "/admin/media"}
          />
        </Stack>
        <Flex
          position="absolute"
          width="100%"
          bottom={4}
          left={0}
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
          onClick={() => router.push("/admin/login")}
        >
          <Icon as={FaSignOutAlt} fontSize="3xl" />
          <Text display={{ base: "none", md: "unset" }}>Logout</Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Sidebar;
