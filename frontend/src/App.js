import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { MoralisProvider, useMoralis } from "react-moralis";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
    return (
        <MoralisProvider
            serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
            appId={process.env.REACT_APP_MORALIS_APP_ID}
        >
            <div>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/profile"} element={<Profile />} />
                    <Route path={"/login"} element={<Login />} />
                </Routes>
            </div>
        </MoralisProvider>
    );
}

export default App;
