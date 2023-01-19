import React from 'react';
import Login from './Login';
import SignUp from './Signup';
import { Outlet } from 'react-router-dom';

const AuthenticationLayout = () => {
  return (
    <div>
      <h1>AuthenticationLayout!</h1>

      <Outlet/>
    </div>
  )
}

export default AuthenticationLayout;

export {Login, SignUp};