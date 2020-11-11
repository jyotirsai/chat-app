import React, { useState } from "react";
import Channel from "./Channel/Channel";
import LogIn from "./LogIn/LogIn";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  const [username, setUsername] = useState("");

  console.log(username);
  return (
    <Switch>
      <Route exact path="/">
        <Channel username={username} />
      </Route>
      <Route path="/login">
        <LogIn setUsername={setUsername} />
      </Route>
    </Switch>
  );
};

export default Main;
