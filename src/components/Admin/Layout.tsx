import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

import Sidebar from "./Sidebar";

interface IAdminLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<IAdminLayoutProps> = ({ children }) => {
  return (
    <Flex>
      <Sidebar />

      <main style={{ margin: "15px", padding: "10px", width: "100%" }}>
        {children}
      </main>
    </Flex>
  );
};

export default Layout;
