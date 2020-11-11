import React from "react";
import Chat from "./Chat/Chat";
import Score from "./Score/Score";
import Live from "./Live/Live";
import Poll from "./Poll/Poll";

import "./Channel.css";

const Channel = (props) => {
  return (
    <div className="position">
      <Chat username={props.username} />
      <div className="sidebar">
        <Score />
        <Live />
        <Poll />
      </div>
    </div>
  );
};

export default Channel;
