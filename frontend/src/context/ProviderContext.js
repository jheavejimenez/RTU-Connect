import React from "react";
import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

const API_URL = "https://api-mumbai.lens.dev/";

const httpLink = new HttpLink({
    uri: API_URL,
    fetch,
});

const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem("accessToken");
    console.log("jwt token:", token);

    // Use the setContext method to set the HTTP headers.
    operation.setContext({
        headers: {
            "x-access-token": token ? `Bearer ${token}` : "",
        },
    });

    // Call the next link in the middleware chain.
    return forward(operation);
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function Apollo({ children }) {
    return <ApolloProvider client={client}>{ children }</ApolloProvider>;
}

export default Apollo;
