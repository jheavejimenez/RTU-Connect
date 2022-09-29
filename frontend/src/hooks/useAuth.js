import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useLocalStorage("user", null);
    const [wallet, setWallet] = useLocalStorage("wallet", null);
    const [profile, setProfile] = useLocalStorage("profile", {});
    const [lensHub, setLensHub] = useLocalStorage("lensHub", null);

    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = async (data) => {
        setUser(data);
        navigate("/");
    };

    const walletData = async (data) => {
        setWallet(data);
    };

    const profileData = async (data) => {
        setProfile(data);
    };

    const lensHubData = async (data) => {
        setLensHub(data);
    };

    // call this function to sign out logged-in user
    const logout = () => {
        setUser(null);
        navigate("/login", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            wallet,
            profile,
            lensHub,
            walletData,
            profileData,
            lensHubData,
            login,
            logout,
        }),
        [user, wallet, profile, lensHub],
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
