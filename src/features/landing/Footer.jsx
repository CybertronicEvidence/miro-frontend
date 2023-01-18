import React from 'react'
import { googleLogo, openaiLogo, whatsAppLogo } from '../../../constants/assets';

const Footer = () => {
    return (
        <section id="footer">
            <div className='content'>
                <h1>I nostri partner</h1>

                <div className='img-lists'>
                    <img
                        src={openaiLogo}
                        alt={"open ai"}
                    />

                    <img
                        src={googleLogo}
                        alt={"google"}
                    />

                    <img
                        src={whatsAppLogo}
                        alt={"whatsapp"}
                    />
                </div>
            </div>
        </section>
    )
}

export default Footer;
