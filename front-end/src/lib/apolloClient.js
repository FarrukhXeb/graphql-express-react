import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = () => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:5000/graphql" }),
    cache: new InMemoryCache(),
  });
  return client;
};
export default apolloClient;
