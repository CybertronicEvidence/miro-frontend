import React from 'react';
import { Link } from 'react-router-dom';
import {siteLogo} from '../../../constants/assets';
import appUrls from '../../../constants/urls';

const Layout = ({isLogin, children}) => {

    const title = isLogin ? 'Login' : 'Create account';
    const cta = isLogin ? (
        <>
            <Link to={appUrls.signup}>
                Create account
            </Link> instead?
        </>
    )
    :
    (
        <>
            <Link to={appUrls.signin}>
                Sign in
            </Link> instead?
        </>
    )

    return (
        <>
        <div className='header'>
            <div className='himg'>
            <img
                src={siteLogo}
                alt="Miro"
            />
            </div>

            <div className='htxt'>
            <h4>{title}</h4>

            <span>
                {cta}
            </span>
            </div>

        </div>


        <div className='body'>
            {children}
        </div>
        </>
    )
}

export default Layout