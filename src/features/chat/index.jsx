import React, { useState, useEffect } from "react";
import { CheckAuthModal } from "../../components/Modal";
import ChatMessage from "./ChatMessage";
import ChatSideBar from "./ChatSideBar";
import EmptyState from "./EmptyState";

const ChatArea = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [verifyAuth, setVerifyAuth] = useState(true);
  const [messages, setMessages] = useState([]);

  const updateMessages = (data)=>{
    const {id, message} = data;

    if (!id){ // fresh message
      return setMessages((p) => (
        [
          ...p, 
          { 
            id: new Date().getTime(),
            message, 
            responded:false
          }
        ]
      ));
    }

    return setMessages((p) =>(
      p.map(e=>{
          if (e.id === id) return {...e, ...data}
          return e;
        })  
    ));
    
  }

  useEffect(() => {
    const normalTitle = document.title;

    // Update title
    document.title = `Chiacchierare | ${normalTitle}`;

    return () => {
      document.title = normalTitle;
    };
  },[]);

  useEffect(()=>{
    const input = document.getElementById("chat_input");
    const sendBtn = document.getElementById("send_message");
    const chatSection = document.getElementById("chatSection");

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const value = e.target.textContent;

        if (!value) return;

        updateMessages({message:value})
        e.target.textContent = "";
      }
    });

    sendBtn.addEventListener("click", (e) => {
      const value = input.textContent;

      if (!value) return;

      updateMessages({message:value})
      input.textContent = "";
    });
  });

  return (
    <>
      {verifyAuth && <CheckAuthModal onAuth={() => setVerifyAuth(false)} />}

      <div className="chat__area">
        <span className="toogler" onClick={() => setShowSideBar((p) => !p)}>
          {showSideBar ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </span>

        <ChatSideBar
          show={showSideBar}
          clearChat={() => setMessages((p) => [])}
        />

        <div
          className="chat_content"
          onClick={() => {
            if (!showSideBar) return;

            setShowSideBar(false);
          }}
        >
          <div className="chat_section" id="chatSection">
            {messages.length < 1 ? (
              <EmptyState />
            ) : (
              messages.map((each, i) => (
                <ChatMessage data={each} key={i} hasResponded={updateMessages} />
              ))
            )}
          </div>

          <div className="chat_input">
            <span
              className="textarea"
              role="textbox"
              contentEditable
              id="chat_input"
            ></span>

            <span id="send_message">
              <i className="fa-regular fa-paper-plane"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatArea;
