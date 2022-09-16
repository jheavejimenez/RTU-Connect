import React from "react";
import {Navigate, Outlet} from "react-router-dom";

function PrivateRoutes() {
    let auth = true;
    return auth ? (<Outlet/>) : (<Navigate to={"/login"} />);
}

export default PrivateRoutes;
