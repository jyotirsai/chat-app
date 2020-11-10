import React from "react";
import Channel from "../Channel/Channel";
import LogIn from "../LogIn/LogIn";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Channel} />
      <Route path="/login" component={LogIn} />
    </Switch>
  );
};

export default Main;
