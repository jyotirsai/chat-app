import React from "react";
import Chat from "./Chat/Chat";

import "./Channel.css";

const Channel = () => {
  return (
    <div className="main">
      <div className="chat-box">
        <Chat />
      </div>
    </div>
  );
};

export default Channel;
