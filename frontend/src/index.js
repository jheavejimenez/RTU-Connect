import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ApolloProvider from "./context/ProviderContext";
import { AuthProvider } from "./hooks/useAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ApolloProvider>
                    <App />
                </ApolloProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
