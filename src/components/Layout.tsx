import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{ padding: "10px", marginTop: "50px", marginBottom: "40px" }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
