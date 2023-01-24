import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../app/context";
import { makeBotRequest } from "../../../app/utils";
import { userIcon, gptIcon } from "../../../constants/assets";

const ChatMessageItem = ({ ai, message:userMessage}) => {

  return (
    <div className="message-item">
      <span className="icon">
        <img src={ai ? gptIcon : userIcon} alt="icon" />
      </span>

      <p>{userMessage}</p>
    </div>
  );
};

const ChatMessage = ({ data, hasResponded }) => {
  const { user } = useContext(AppContext);
  const {message, responded} = data;

  const [response, setResponse] = useState("...");


  const handleFetchBotResponse = async () => {

    if (responded) return

    const [error, res] = await makeBotRequest(message, user?.token);

    if (error) {
      console.error(error);
      return;
    }

    const { message:botResponse } = res.data;

    setResponse(() => botResponse);
    hasResponded({
      ...data,
      responded:true
    });

  };

  useEffect(() => {
    handleFetchBotResponse();
  }, [response]);

  
  return (
    <div className="chat_messages">
      <ChatMessageItem message={message} />
      <ChatMessageItem ai={true} message={response} />
    </div>
  );
};

export default React.memo(ChatMessage);
