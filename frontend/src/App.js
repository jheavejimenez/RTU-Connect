import "./index.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import CreateHandle from "./pages/CreateProfile";

function App() {
    const [wallet, setWallet] = useState({});
    const [authToken, setAuthToken] = useState(false);
    const [lensHub, setLensHub] = useState();

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route
                    path={"/login"}
                    element={(
                        <Login
                            wallet={wallet}
                            setWallet={setWallet}
                            authToken={authToken}
                            setLensHub={setLensHub}
                        />
                    )}
                />
                <Route path={"/create-handle"} element={<CreateHandle />} />
            </Routes>
        </>
    );
}

export default App;
