import './App.css';
import './reset.css';
import Board from './components/Board/Board.js';
import PlayerCard from './components/PlayerCard/PlayerCard.js';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <p className="App__title">Score board</p>
        <Board />
      </div>
      <PlayerCard />
    </div>
  );
}

export default App;
