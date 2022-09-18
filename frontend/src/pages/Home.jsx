import React from "react";
import "../index.css";
import { Navigate } from "react-router-dom";
import { useMoralis } from "react-moralis";
import NavBar from "../components/NavBar/NavBar";
import ComposePost from "../components/ComposePost/ComposePost";
import Post from "../components/Post/Post";

function Home() {
    const { isAuthenticated } = useMoralis();
    // check if user is authenticated
    // if not, redirect to login page
    // if yes, show home page
    if (!isAuthenticated) {
        return <Navigate to={"/login"} />;
    }
    return (
        <>
            <NavBar />
            <ComposePost />
            <Post />
        </>
    );
}

export default Home;
