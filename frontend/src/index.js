import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import ApolloProvider from "./context/ProviderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MoralisProvider
            serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
            appId={process.env.REACT_APP_MORALIS_APP_ID}
        >
            <BrowserRouter>
                <ApolloProvider>
                    <App />
                </ApolloProvider>
            </BrowserRouter>
        </MoralisProvider>
    </React.StrictMode>,
);
