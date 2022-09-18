import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ProviderContext from "../context/ProviderContext";

// const useAuth = () => {
//     const { user } = useContext(ProviderContext);
//     return user && user.loggedIn;
// };

function PrivateRoutes() {
    const location = useLocation();
    const isAuth = true;
    return isAuth ? (<Outlet />) : (<Navigate to={"/login"} replace state={{ from: location }} />);
}

export default PrivateRoutes;
