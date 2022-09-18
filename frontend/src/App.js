import './index.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoutes from './utils/PrivateRoutes';
import Profile from './pages/Profile';
import ProviderContext from './context/ProviderContext';

function App() {
    const [auth, setAuth] = useState({ auth: '' });
    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <ProviderContext.Provider value={{ auth, setAuth }}>
            <div>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </ProviderContext.Provider>
    );
}

export default App;
