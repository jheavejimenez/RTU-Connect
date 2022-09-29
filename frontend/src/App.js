import "./index.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import CreateHandle from "./pages/CreateProfile";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
    const [wallet, setWallet] = useState({});
    const [authToken, setAuthToken] = useState(false);
    const [lensHub, setLensHub] = useState();
    return (
        <>
            <Routes>
                <Route
                    path={"/login"}
                    element={(
                        <Wallet
                            wallet={wallet}
                            setWallet={setWallet}
                            auth={[authToken, setAuthToken]}
                            setLensHub={setLensHub}
                        />
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
                            <Profile wallet={wallet} />
                        </ProtectedRoute>
                    )}
                />
                <Route
                    path={"/create-handle"}
                    element={(
                        <ProtectedRoute> 
                            <CreateHandle wallet={wallet} />
                        </ProtectedRoute>
                    )}
                />
            </Routes>
        </>
    );
}

export default App;
