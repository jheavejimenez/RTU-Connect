import "./index.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import CreateHandle from "./pages/CreateProfile";
import ProtectedRoute from "./utils/ProtectedRoute";
import Explore from "./pages/Explore";
import Comment from "./pages/Comment";

function App() {
    const [wallet, setWallet] = useState({});
    const [lensHub, setLensHub] = useState();
    const [post, setPost] = useState();

    return (
        <>
            <Toaster
                containerStyle={{
                    position: "relative",
                    top: "65px",
                }}
                position={"top-right"}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                }}
            />
            <Routes>
                <Route
                    path={"/login"}
                    element={(
                        <Wallet
                            wallet={wallet}
                            setWallet={setWallet}
                            setLensHub={setLensHub}
                        />
                    )}
                />
                <Route
                    path={"/"}
                    element={(
                        <ProtectedRoute>  
                            <Home setPost={setPost} />
                        </ProtectedRoute>
                    )}
                />
                <Route
                    path={"/explore"}
                    element={(
                        <ProtectedRoute>
                            <Explore wallet={wallet} lensHub={lensHub} />
                        </ProtectedRoute>
                    )}
                />
                <Route
                    path={"/comments/:publicationId"}
                    element={(
                        <ProtectedRoute>
                            <Comment post={post} />
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
                        <CreateHandle />
                    )}
                />
            </Routes>
        </>
    );
}

export default App;
