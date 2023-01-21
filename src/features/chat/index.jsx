import React from 'react';
import ChatSession from './ChatSessions';



const ChatArea = ()=>{
    return (
        <div className='chat__area'>
            <ChatSession/>
            
            <div className='chat_content'>
                <h1>Hello World!</h1>
            </div>
        </div>
        
    )
}


export default ChatArea;
