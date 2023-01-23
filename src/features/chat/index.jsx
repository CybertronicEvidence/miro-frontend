import React, { useState, useEffect } from "react";
import { CheckAuthModal } from "../../components/Modal";
import ChatMessage from "./ChatMessage";
import ChatSideBar from "./ChatSideBar";
import EmptyState from "./EmptyState";

const ChatArea = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [verifyAuth, setVerifyAuth] = useState(true);
  const [messages, setMessages] = useState([
    {
      message: "Hello world",
    },
  ]);

  useEffect(() => {
    const normalTitle = document.title;

    // Update title
    document.title = `Chiacchierare | ${normalTitle}`;

    const input = document.getElementById("chat_input");
    const sendBtn = document.getElementById("send_message");

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const value = e.target.textContent;

        if (!value) return;

        // console.log(value);
        setMessages((p) => [...p, { message: value }]);
        e.target.textContent = "";
      }
    });

    sendBtn.addEventListener("click", (e) => {
      const value = input.textContent;

      if (!value) return;

      // console.log(value);
      setMessages((p) => [...p, { message: value }]);
      input.textContent = "";
    });

    return () => {
      document.title = normalTitle;
    };
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
          <div className="chat_section">
            {messages.length < 1 ? (
              <EmptyState />
            ) : (
              messages.map((data, i) => (
                <ChatMessage message={data.message} key={i} />
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
