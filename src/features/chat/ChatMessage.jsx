import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../app/context";
import { makeBotRequest } from "../../../app/utils";
import { userIcon, gptIcon } from "../../../constants/assets";

const ChatMessageItem = ({ ai, message: userMessage, responded, hasResponded }) => {
  const [botResponse, setBotReponse] = useState(ai ? "..." : userMessage);

  const { user } = useContext(AppContext);

  const handleFetchBotResponse = async () => {
    if (!ai) return;

    if (responded) return

    const [error, res] = await makeBotRequest(userMessage, user?.token);

    if (error) {
      console.error(error);
      return;
    }

    const { message } = res.data;

    setBotReponse(() => message);
    hasResponded()

  };

  useEffect(() => {
    handleFetchBotResponse();
  }, [botResponse]);

  return (
    <div className="message-item">
      <span className="icon">
        <img src={ai ? gptIcon : userIcon} alt="icon" />
      </span>

      <p>{botResponse}</p>
    </div>
  );
};

const ChatMessage = ({ message, hasResponded }) => {
  //
  return (
    <div className="chat_messages">
      <ChatMessageItem {...message} />
      <ChatMessageItem ai={true} {...message} hasResponded={hasResponded} />
    </div>
  );
};

export default React.memo(ChatMessage);
