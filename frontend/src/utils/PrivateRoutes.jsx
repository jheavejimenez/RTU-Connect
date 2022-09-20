import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useMoralis } from "react-moralis";

function PrivateRoutes() {
    const location = useLocation();
    const { isAuthenticated } = useMoralis();
    console.log("isAuthenticated", isAuthenticated);
    return isAuthenticated ? (<Outlet />) : (<Navigate to={"/login"} replace state={{ from: location }} />);
}

export default PrivateRoutes;
