import React from 'react';
import { Link } from 'react-router-dom';
import {siteLogo} from '../../../constants/assets';
import appUrls from '../../../constants/urls';

const Layout = ({isLogin, children}) => {

    const title = isLogin ? 'Accedi' : 'Crea un account';
    const cta = isLogin ? (
        <>
            <Link to={appUrls.signup}>
                Crea un account
            </Link> invece?
        </>
    )
    :
    (
        <>
            <Link to={appUrls.signin}>
                Accedi
            </Link> invece?
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