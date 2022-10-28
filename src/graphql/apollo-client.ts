import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { graphQlUrl } from "../config/config";

const httpLink = new HttpLink({
  uri: graphQlUrl,
  // credentials: "include",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
