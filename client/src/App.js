import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const ENDPOINT = "http://localhost:5000";

function App() {
  useEffect(() => {
    const socket = io(ENDPOINT);
    console.log(socket);

    socket.send("Hello!");

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT]);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
