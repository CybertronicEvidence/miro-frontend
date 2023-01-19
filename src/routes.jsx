import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ErrorStates from "./errors/ErrorStates";
import Landing from "./features/landing";
// import Authentcation from './features/authentication';
import Chat from "./features/chat";

import appUrls from '../constants/urls';

const AppRoutes = ()=>{
    return (
        <BrowserRouter>
            <Routes>

                <Route 
                    path={appUrls.home} 
                    element={<Landing/>}
                />
                <Route 
                    path={appUrls.chat} 
                    element={<Chat/>}
                />
                <Route 
                    path={appUrls.signin} 
                    element={<ErrorStates code={402}/>}
                />
                <Route 
                    path={appUrls.signup} 
                    element={<ErrorStates code={402}/>}
                />
                <Route 
                    path={"*"} 
                    element={<ErrorStates code={404}/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
