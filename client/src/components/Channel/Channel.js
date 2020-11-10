import React from "react";
import Chat from "../Chat/Chat";
import Score from "../Score/Score";
import Live from "../Live/Live";
import Poll from "../Poll/Poll";

import "./Channel.css";

const Channel = () => {
  return (
    <div className="position">
      <Chat />
      <div className="sidebar">
        <Score />
        <Live />
        <Poll />
      </div>
    </div>
  );
};

export default Channel;
