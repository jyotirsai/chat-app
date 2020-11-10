import React from "react";
import Channel from "../Channel/Channel";
import LogIn from "../LogIn/LogIn";
import { Switch, Route } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Channel />
      </Route>
      <Route>
        <LogIn />
      </Route>
    </Switch>
  );
};

export default Main;
