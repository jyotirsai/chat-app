import React, {useState, useEffect} from "react";
import io from "socket.io-client";
import './App.css';
import Chat from './components/Chat/Chat'
import Score from './components/Score/Score'
import Live from './components/Live/Live'
import Poll from './components/Poll/Poll'

const ENDPOINT = "http://localhost:5000"

function App() {

  useEffect(() => {
    const socket = io(ENDPOINT);
    console.log(socket);

    socket.send('Hello!');

    return () => {
      socket.emit('disconnect')
      socket.off();
    }
  }, [ENDPOINT])

  return (
    <div className="App">
      <div className="position">
        <Chat />
        <div className="sidebar">
          <Score/>
          <Live />
          <Poll />
        </div>
      </div>
    </div>
  );
}

export default App;
