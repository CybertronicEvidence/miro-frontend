import React from 'react';
import { useState } from 'react';
import Modal, { CheckAuthModal } from '../../components/Modal';
import ChatSideBar from './ChatSideBar';
import EmptyState from './EmptyState';


const ChatArea = ()=>{
    const [showSideBar, setShowSideBar] = useState(false);
    const [verifyAuth, setVerifyAuth] = useState(false);

    return (
        <>
            {
                verifyAuth && <CheckAuthModal onAuth={()=>setVerifyAuth(true)}/>
            }

            <div className='chat__area'>
                <span className="toogler" onClick={()=>setShowSideBar(p=>!p)}>
                    {
                        showSideBar ? 
                        <i className="fa-solid fa-xmark"></i>
                        :
                        <i className="fa-solid fa-bars"></i>
                    }
                </span>

                <ChatSideBar show={showSideBar}/>
                
                <div className='chat_content' onClick={()=>{
                    if (!showSideBar) return

                    setShowSideBar(false);
                }}>

                    <div className="chat_section">
                        <EmptyState/>
                    </div>

                    <div className="chat_input">
                        <textarea/>
                        <span><i className="fa-regular fa-paper-plane"></i></span>
                    </div>
                </div>
            </div>
        </>
        
    )
}


export default ChatArea;
