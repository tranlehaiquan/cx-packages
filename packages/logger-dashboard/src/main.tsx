import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

import "./index.css";
import "@skedulo/sked-ui";

import App from "./App";
import apolloClientGraphql from "./apolloClientGraphql";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClientGraphql}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
