import React, { useState } from "react";
import Channel from "./Channel/Channel";
import SignUp from "./SignUp/SignUp";
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
        <SignUp setUsername={setUsername} />
      </Route>
    </Switch>
  );
};

export default Main;
