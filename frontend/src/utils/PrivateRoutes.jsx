import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";

function PrivateRoutes() {
    const location = useLocation();

    return auth ? (<Outlet/>) : (<Navigate to={"/login"} replace state={{from: location}}/>);
}

export default PrivateRoutes;
