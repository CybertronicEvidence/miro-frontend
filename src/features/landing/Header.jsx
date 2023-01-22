import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { siteLogo, userIcon } from '../../../constants/assets';
import appUrls from '../../../constants/urls';
import AppContext from '../../../app/context';

const Header = () => {
    const {user} = useContext(AppContext);
    // console.log(user);
    const navigate = useNavigate();
    return (
        <section id='header'>

            <div className='content'>

                <div className='top'>
                    <div className='brand'>
                        <Link to={'/'}>
                            <img 
                                src={siteLogo}
                                alt={"Miro"}
                            />
                        </Link>
                    </div>


                    <div className='user' title={user?.token ? "Clicca per uscire" : "Clicca per accedere"}>
                        <Link to={appUrls.signin}>
                            <img 
                                src={userIcon}
                                alt={"Icona utente"}
                            />                            
                        </Link>

                        <span>{user.username}</span>
                    </div>
                </div>


                <h1 className='grand'>
                    Il tuo assistente digitale
                </h1>

                <div className='tags'>
                    <span>100% Gratuito</span>
                    <span>Risponde in 1 secondo</span>
                    <span>Disponibile 24/7</span>
                    <span>100% Gratuito</span>
                </div>


                <div className='buttin'>
                    <button onClick={()=> navigate('/chat')}>
                        inizia
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Header;
