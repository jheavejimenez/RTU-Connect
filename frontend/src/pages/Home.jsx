import React from 'react'
import "../index.css"
import NavBar from "../components/NavBar/NavBar";
import ComposePost from "../components/ComposePost/ComposePost";
import Post from "../components/Post/Post";

function Home() {
    return (
        <div className="Home">
            <NavBar/>
            <ComposePost/>
            <Post/>
        </div>
    )
}

export default Home;
