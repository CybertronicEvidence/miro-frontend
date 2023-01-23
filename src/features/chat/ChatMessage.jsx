import React from "react";
import { userIcon, gptIcon } from "../../../constants/assets";

const ChatMessageItem = ({ ai }) => {
  return (
    <div className="message-item">
      <span className="icon">
        <img src={ai ? gptIcon : userIcon} alt="icon" />
      </span>

      <p>Chat Message</p>
    </div>
  );
};

const ChatMessage = () => {
  return (
    <div className="chat_messages">
      <ChatMessageItem />
      <ChatMessageItem ai={true} />
    </div>
  );
};

export default ChatMessage;
