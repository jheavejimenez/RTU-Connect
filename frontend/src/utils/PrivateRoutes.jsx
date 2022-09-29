import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function PrivateRoutes() {
    const authToken = true;
    const location = useLocation();
    return authToken ? (
        <Outlet />
    ) : (
        <Navigate to={"/login"} replace state={{ from: location }} />
    );
}

export default PrivateRoutes;
