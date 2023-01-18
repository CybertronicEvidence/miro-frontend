import React, { useEffect } from 'react'
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Landing = () => {
    
    useEffect(()=>{
        const normalTitle = document.title;

        // Update title
        document.title = `Casa | ${normalTitle}`;

        return ()=>{
            document.title = normalTitle;
        }

    });

    return (
        <>

            <Header/>

            <Body/>

            <Footer/>
        </>
    )
}

export default Landing;
