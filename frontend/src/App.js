import "./index.css"
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import Profile from "./pages/Profile";


function App() {
    return (
        <div>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Home />} />
                    <Route path={"/profile"} element={<Profile />} />
                </Route>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
