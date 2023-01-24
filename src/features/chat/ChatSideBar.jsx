import React from "react";
import { useContext } from "react";
import AppContext from "../../../app/context";
import { useNavigate } from "react-router-dom";
import appUrls from "../../../constants/urls";

const ChatSideBar = ({ show, clearChat }) => {
  const { signOut } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();

    navigate(appUrls.auth);
  };

  return (
    <aside data-show={show}>
      <button className="chat_cta">
        <i className="fa-solid fa-plus"></i>
        <span>New conversation</span>
      </button>

      <div className="sessions_content">
        <ul>
          {/* <li>
            <i className="fa-regular fa-comment-dots"></i>A conversion session
          </li>
          <li>
            <i className="fa-regular fa-comment-dots"></i>A conversion session
          </li>
          <li>
            <i className="fa-regular fa-comment-dots"></i>A conversion session
          </li>
          <li>
            <i className="fa-regular fa-comment-dots"></i>A conversion session
          </li> */}
        </ul>
      </div>

      <div className="cta">
        <button className="chat_cta" onClick={clearChat}>
          <i className="fa-regular fa-trash-can"></i>
          <span>Cancella conversazioni</span>
        </button>
        <button className="chat_cta">
          <i className="fa-solid fa-crown"></i>
          <span>Passa a Pro</span>
        </button>
        <button className="chat_cta" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default ChatSideBar;
