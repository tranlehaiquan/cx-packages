import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink(
  new SubscriptionClient("wss://api.skedulo.com/graphql/subscriptions", {
    connectionParams: {
      Authorization: "Bearer " + import.meta.env.VITE_SKEDULO_TOKEN || ""
    }
  })
);

const httpLink = new HttpLink({
  uri: "https://api.skedulo.com/graphql/graphql",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_SKEDULO_TOKEN || ""}`,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
