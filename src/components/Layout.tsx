import { Container } from "@chakra-ui/react";
import React from "react";
import Header from "./Header/Header";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Container maxWidth="700px" marginTop={6} marginBottom={4} padding={2}>
        <Header />

        <main
          style={{ padding: "10px", marginTop: "50px", marginBottom: "40px" }}
        >
          {children}
        </main>
      </Container>
    </>
  );
};

export default Layout;
