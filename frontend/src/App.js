import "./index.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import CreateHandle from "./pages/CreateProfile";

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
                <Route path={"/"} element={<Home />} />
                <Route path={"/profile"} element={<Profile wallet={wallet} />} />
                <Route path={"/create-handle"} element={<CreateHandle wallet={wallet} />} />
            </Routes>
        </>
    );
}

export default App;
