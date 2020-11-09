import './App.css';
import Chat from './components/Chat/Chat'
import Score from './components/Score/Score'
import Live from './components/Live/Live'
import Poll from './components/Poll/Poll'

function App() {
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
