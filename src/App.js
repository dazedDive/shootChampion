import './App.css';
import React from 'react';
import { useState } from 'react';
import Gamescreen from './screens/Gamescreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  const [startGame, setStartGame] = useState(false)
  const [modeGame, setModeGame]=useState({})

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
      setstartgame={setStartGame}/>
      }
    </div>
    </>
  )
}

export default App;
