import React, {useContext} from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {ProviderContext} from "../context/ProviderContext";

function PrivateRoutes() {
    // const {auth} = useContext(ProviderContext);
    const location = useLocation();
    const auth = true;
    return auth ? (<Outlet/>) : (<Navigate to={"/login"} replace state={{from: location}}/>);
}

export default PrivateRoutes;
