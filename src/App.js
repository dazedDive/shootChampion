import './App.css';
import React from 'react';
import { useState } from 'react';
import Gamescreen from './screens/Gamescreen';
import Loginscreen from './screens/Loginscreen';
import Footer from './components/Footer';

function App() {
  const [startGame, setStartGame] = useState (false);
  const [modeGame, setModeGame]= useState ({});
  const [gameOver, setGameOver] = useState(false);

  return(
    <>
    <div>
      {!startGame &&
      <Loginscreen
      modegame={modeGame}
      setmodegame={setModeGame}
      startgame={startGame}
      setstartgame={setStartGame}/>
      }
      {startGame &&
      <Gamescreen
      modegame={modeGame}
      setmodegame={setModeGame}
      startgame={startGame}
      setstartgame={setStartGame}
      gameover={gameOver}
      setgameover={setGameOver}/>
      }
      <Footer/>
    </div>
    </>
  )
}

export default App;
