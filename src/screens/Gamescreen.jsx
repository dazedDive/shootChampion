import React from 'react';
import { useState } from 'react';
import Weapon from '../components/Weapon';
import BubbleGenerator from '../components/BubbleGenerator';

const Gamescreen = () => {

  const [magazine, setMagazine] = useState("6");
  const [score, setScore] = useState(0)

  const reload = () => {
    setTimeout(() => {
        setMagazine(6);}, "3001"
    )
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-2">
                <Weapon
                magazine={magazine}/>
                {!magazine &&
                <img src="images/reload.png" alt="reload icone"
                onClick={(e)=>reload()}/>
                }
        </div>
          <div className="col-8" onClick={(e)=>magazine && setMagazine(magazine-1)}>
            <img className="img-fluid backscreen mt-5" src="images/backpaper.jpg" alt="backscreen"/>
              <div className="container m-4">
                <BubbleGenerator
                setMagazine={setMagazine}
                magazine={magazine}
                score={score}
                setscore={setScore}
                />
              </div>
          </div>
      <div className="col-2">
      <img src="images/score.png" alt="scoretext"/>
      <h3>{score}</h3>
      </div>
    </div>

    </div>

  );
}
export default Gamescreen;