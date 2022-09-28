import "./index.css";
import {
    Route, Routes, useLocation, useNavigate, 
} from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import CreateHandle from "./pages/CreateProfile";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
    const [wallet, setWallet] = useState({});
    const [authToken, setAuthToken] = useState(false);
    const [lensHub, setLensHub] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    if (location.state?.from) {
        navigate(location.state.from);
    }
    return (
        <>
            <Routes>
                <Route
                    path={"/login"}
                    element={(
                        <Login
                            wallet={wallet}
                            setWallet={setWallet}
                            auth={[authToken, setAuthToken]}
                            setLensHub={setLensHub}
                        />
                    )}
                /> 
                <Route element={<PrivateRoutes authToken={authToken} />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/profile"} element={<Profile />} />
                    <Route path={"/create-handle"} element={<CreateHandle wallet={wallet} />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
