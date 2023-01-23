import React from "react";
import { userIcon, gptIcon } from "../../../constants/assets";

const ChatMessageItem = ({ ai, message }) => {
  return (
    <div className="message-item">
      <span className="icon">
        <img src={ai ? gptIcon : userIcon} alt="icon" />
      </span>

      <p>{message}</p>
    </div>
  );
};

const ChatMessage = () => {
  //
  return (
    <div className="chat_messages">
      <ChatMessageItem message={"User message"} />
      <ChatMessageItem ai={true} message={"AI message"} />
    </div>
  );
};

export default ChatMessage;
