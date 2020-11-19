import React from "react";
import Chat from "./Chat/Chat";
import Score from "./Score/Score";
import Live from "./Live/Live";
import Poll from "./Poll/Poll";

import "./Channel.css";

const Channel = (props) => {
  return (
    <div className="main">
      <div className="chat-box">
        <Chat username={props.username} />
      </div>
      <div className="side-box">
        <Score />
        <Live />
        <Poll />
      </div>
    </div>
  );
};

export default Channel;
