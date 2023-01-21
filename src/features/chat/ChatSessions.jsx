import React from 'react';



const ChatSession = ()=>{
    return (
        <aside>

            <button className='chat_cta'>
                <i class="fa-solid fa-plus"></i>
                <span>New conversation</span>
            </button>

            <div className='sessions_content'>
                <ul>
                    <li>
                        <i class="fa-regular fa-comment-dots"></i>
                        A conversion session
                    </li>
                    <li>
                        <i class="fa-regular fa-comment-dots"></i>
                        A conversion session
                    </li>
                    <li>
                        <i class="fa-regular fa-comment-dots"></i>
                        A conversion session
                    </li>
                    <li>
                        <i class="fa-regular fa-comment-dots"></i>
                        A conversion session
                    </li>
                </ul>
            </div>

            <div className="cta">
                <button className='chat_cta'>
                    <i class="fa-regular fa-trash-can"></i>
                    <span>Cancella conversazioni</span>
                </button>
                <button className='chat_cta'>
                    <i class="fa-solid fa-crown"></i>
                    <span>Passa a Pro</span>
                </button>
                <button className='chat_cta'>
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span>Log out</span>
                </button>
            </div>
        </aside>
    )
}


export default ChatSession;