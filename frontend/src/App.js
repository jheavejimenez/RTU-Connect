import "./index.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import CreateProfile from "./pages/CreateProfile";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/new/profile"} element={<CreateProfile />} />
            </Routes>
        </>
    );
}

export default App;
