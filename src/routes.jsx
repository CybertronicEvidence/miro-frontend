import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ErrorStates from "./errors/ErrorStates";
import Landing from "./features/landing";
import AuthenticationLayout, { Login, SignUp } from './features/authentication';
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

                <Route path={appUrls.auth} element={<AuthenticationLayout />}>
                    <Route path={''} index element={<Login />} />
                    <Route path={'signin'} exact element={<Login />} />
                    <Route path={'signup'} exact element={<SignUp />} />
                </Route>

                {/* <Route 
                    path={appUrls.signin} 
                    element={<ErrorStates code={402}/>}
                />
                <Route 
                    path={appUrls.signup} 
                    element={<ErrorStates code={402}/>}
                /> */}
                <Route 
                    path={"*"} 
                    element={<ErrorStates code={404}/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
