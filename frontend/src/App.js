import "./index.css"
import Login from "./pages/Login"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Login/>}/>
            <Route path={"/Home"} element={<Home/>}/>
        </Routes>
    );
}

export default App;
