import type { AppProps } from "next/app";
import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/apollo-client";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";

// import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider>
        <Toaster />
        <ChakraProvider theme={theme}>
          <NextNProgress />
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
