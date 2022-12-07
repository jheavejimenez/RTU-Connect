import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useLocalStorage("lensToken", "");
    const [profile, setProfile] = useLocalStorage("profile", {});
    const [wallets, setWallet] = useLocalStorage("wallet", {});

    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = async (data) => {
        setUser(data);
        console.log("user", profile);
        // before navigating to home, we check if the user has a profile
        // if not, we redirect to the create profile page
        if (!profile.handle) {
            navigate("/create-handle");
        } else {
            navigate("/");
        }
    };

    const profileData = async (data) => {
        setProfile(data);
    };

    const walletsData = async (data) => {
        setWallet(data);
    };
    // call this function to sign out logged-in user
    const logout = () => {
        setUser(null);
        setProfile({});
        navigate("/login", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            profile,
            // wallets,
            profileData,
            // walletsData,
            login,
            logout,
        }),
        [user, profile],
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
