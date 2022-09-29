import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import ApolloProvider from "./context/ProviderContext";
import { AuthProvider } from "./hooks/useAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MoralisProvider
            serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
            appId={process.env.REACT_APP_MORALIS_APP_ID}
        >
            <BrowserRouter>
                <AuthProvider>
                    <ApolloProvider>
                        <App />
                    </ApolloProvider>
                </AuthProvider>
            </BrowserRouter>
        </MoralisProvider>
    </React.StrictMode>,
);
