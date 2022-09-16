import "./index.css"
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoutes from "./utils/PrivateRoutes";


function App() {
    return (
        <div>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
