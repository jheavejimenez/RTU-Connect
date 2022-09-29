import "./index.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import CreateHandle from "./pages/CreateProfile";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
    // const [wallet, setWallet] = useState({});
    // const [authToken, setAuthToken] = useState(false);
    // const [profile, setProfile] = useState({});
    const [lensHub, setLensHub] = useState();
    return (
        <>
            <Routes>
                <Route
                    path={"/login"}
                    element={(
                        <Wallet />
                    )}
                />
                <Route
                    path={"/"}
                    element={(
                        <ProtectedRoute>  
                            <Home />
                        </ProtectedRoute>
                    )}
                />
                <Route
                    path={"/profile"}
                    element={(
                        <ProtectedRoute> 
                            <Profile />
                        </ProtectedRoute>
                    )}
                />
                <Route
                    path={"/create-handle"}
                    element={(
                        <CreateHandle />
                    )}
                />
            </Routes>
        </>
    );
}

export default App;
