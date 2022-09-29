import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children }) {
    const { user } = useAuth();
    if (!user) {
        // user is not authenticated
        return <Navigate to={"/login"} />;
    }
    return children;
}

export default ProtectedRoute;
