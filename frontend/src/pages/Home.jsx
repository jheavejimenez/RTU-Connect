import React from 'react'
import "../index.css"
import NavBar from "../components/NavBar/NavBar";
import ComposePost from "../components/ComposePost/ComposePost";
import Post from "../components/Post/Post";

function Home() {
    return (
        <>
            <NavBar/>
            <ComposePost/>
            <Post/>
        </>
    )
}

export default Home;
