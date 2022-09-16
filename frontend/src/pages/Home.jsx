import React from 'react'
import "../index.css"
import NavBar from "../components/NavBar/NavBar";
import Post from "../components/Post/Post";
import ComposePost from "../components/ComposePost/ComposePost";

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
