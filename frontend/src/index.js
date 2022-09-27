import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";

const API_URL = "https://api-mumbai.lens.dev/";

const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MoralisProvider
            serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
            appId={process.env.REACT_APP_MORALIS_APP_ID}
        >
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <App />
                </ApolloProvider>
            </BrowserRouter>
        </MoralisProvider>
    </React.StrictMode>,
);
