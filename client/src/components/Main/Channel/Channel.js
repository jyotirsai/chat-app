import React from "react";
import Chat from "./Chat/Chat";

import "./Channel.css";

const Channel = (props) => {
  return (
    <div className="main">
      <div className="chat-box">
        <Chat username={props.username} />
      </div>
    </div>
  );
};

export default Channel;
