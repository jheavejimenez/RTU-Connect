import React from 'react'
import "../index.css"
import NavBar from "../components/NavBar/NavBar";
import ComposePost from "../components/ComposePost/ComposePost";

function Home() {
    return (
        <div className="Home">
            <NavBar/>
            <ComposePost/>
        </div>
    )
}

export default Home;
