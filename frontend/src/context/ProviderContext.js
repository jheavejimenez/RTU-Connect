import React from "react";
import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
    ApolloProvider, fromPromise, toPromise,
} from "@apollo/client";
import axios from "axios";
import { refresh } from "../graphQL/mutations";
import { isTokenExpired } from "../utils/helpers";

const API_URL = "https://api-mumbai.lens.dev/";

const httpLink = new HttpLink({
    uri: API_URL,
    fetch,
});

const authLink = new ApolloLink((operation, forward) => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("jwt token:", accessToken);

    if (!accessToken || accessToken === "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return forward(operation);
    }

    const isExpiring = isTokenExpired(accessToken);

    if (!isExpiring) {
        // Use the setContext method to set the HTTP headers.
        operation.setContext({
            headers: {
                "x-access-token": accessToken ? `Bearer ${accessToken}` : "",
            },
        });
        // Call the next link in the middleware chain.
        return forward(operation);
    }
    // this is where we get the new access token
    return fromPromise(
        axios(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({
                query: refresh,
                variables: {
                    request: { refreshToken: localStorage.getItem("refreshToken") },
                },
            }),
        })
            .then(({ data }) => {
                const accessToken = data?.data?.refresh?.accessToken;
                const refreshToken = data?.data?.refresh?.refreshToken;
                operation.setContext({
                    headers: {
                        "x-access-token": `Bearer ${accessToken}`,
                    },
                });
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);

                return toPromise(forward(operation));
            })
            .catch(() => toPromise(forward(operation))),
    );
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

function Apollo({ children }) {
    return <ApolloProvider client={client}>{ children }</ApolloProvider>;
}

export default Apollo;
