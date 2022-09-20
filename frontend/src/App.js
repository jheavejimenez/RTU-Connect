import "./index.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import React from "react";
import { useMoralis } from "react-moralis";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route path={"/login"} element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
