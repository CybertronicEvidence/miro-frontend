import React from 'react';
import Login from './Login';
import SignUp from './Signup';
import { Outlet } from 'react-router-dom';

const AuthenticationLayout = () => {
  return (
    <div className='auth__page'>
      <div className='auth__page--content'>
        <Outlet/>
      </div>
    </div>
  )
}

export default AuthenticationLayout;

export {Login, SignUp};