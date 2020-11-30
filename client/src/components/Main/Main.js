import React from "react";
import Channel from "./Channel/Channel";
import Landing from "./Landing/Landing";
import Header from "../Header/Header";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <Switch>
      <Route path="/chat">
        <Header />
        <Channel />
      </Route>
      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
  );
};

export default Main;
