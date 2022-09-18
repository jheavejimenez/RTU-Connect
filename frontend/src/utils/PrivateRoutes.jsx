import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useMoralis } from "react-moralis";

function PrivateRoutes() {
    const location = useLocation();
    const { isAuthenticated } = useMoralis();
    return isAuthenticated ? (<Outlet />) : (<Navigate to={"/login"} replace state={{ from: location }} />);
}

export default PrivateRoutes;
