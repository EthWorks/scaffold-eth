import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChainId, DAppProvider } from '@usedapp/core'
import "./index.css";
import App from "./App";

let subgraphUri = "http://localhost:8000/subgraphs/name/scaffold-eth/your-contract"

const client = new ApolloClient({
  uri: subgraphUri,
  cache: new InMemoryCache()
});

const dappConfig = {
  // readOnlyChainId: ChainId.Mainnet,
  // readOnlyUrls: {
  //   [ChainId.Mainnet]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  // },
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <DAppProvider config={dappConfig}>
      <App subgraphUri={subgraphUri}/>
    </DAppProvider>
  </ApolloProvider>,
  document.getElementById("root"),
);
