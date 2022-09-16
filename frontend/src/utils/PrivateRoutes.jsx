import React from "react";
import {Navigate, Outlet} from "react-router-dom";

function PrivateRoutes() {
    let auth = false;
    return auth ? (<Outlet/>) : (<Navigate to={"/"} />);
}

export default PrivateRoutes;
