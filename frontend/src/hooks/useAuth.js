import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useLocalStorage("lensToken", null);
    const [profile, setProfile] = useLocalStorage("profile", {});

    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = async (data) => {
        setUser(data);
        navigate("/");
    };

    const profileData = async (data) => {
        setProfile(data);
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
            profileData,
            login,
            logout,
        }),
        [user, profile],
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
