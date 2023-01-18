import React from 'react'
import { Link } from 'react-router-dom';
import { siteLogo, userIcon } from '../../../constants/assets';

const Header = () => {
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


                    <div className='user'>
                        <img 
                            src={userIcon}
                            alt={"Icona utente"}
                        />
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
                    <button>
                        inizia
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Header;
