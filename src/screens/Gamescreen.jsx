import React, { useLayoutEffect, useRef } from 'react';
import { useState } from 'react';
import Weapon from '../components/Weapon';
import BubbleGenerator from '../components/BubbleGenerator';
import BangSound from '../sounds/fire.mp3';
import ReloadSound from '../sounds/reload.mp3';
import Empty from '../sounds/empty.mp3';

const Gamescreen = ({modegame, gameover, setgameover, setstartgame}) => {
const scoreScreen = useRef()

  const [magazine, setMagazine] = useState(6);
  const [score, setScore] = useState(0);
  //////////////////////////Import sounds effects/////////////
  const shootSound = new Audio (BangSound);
  const reloadSound = new Audio (ReloadSound);
  const emptySound = new Audio (Empty);

  const reload = () => {
    reloadSound.play();
    setTimeout(() => {
        setMagazine(6);}, "222"
    )
  }

  useLayoutEffect(()=>{

      if (score>300 & score<650){
        scoreScreen.current.style.color = "darkmagenta"
        scoreScreen.current.style.fontSize = "40px"
      } else if (score>650 & score <1350){
        scoreScreen.current.style.color = "hotpink"
        scoreScreen.current.style.fontSize  = "50px"
      } else if (score>1350 & score<2000){
        scoreScreen.current.style.color = "fuchsia"
        scoreScreen.current.style.fontSize  = "70px"
      } else if (score>2000){
        scoreScreen.current.style.color = "deeppink"
        scoreScreen.current.style.fontSize  = "90px"
      } else {
        scoreScreen.current.style.color = "darkviolet"
        scoreScreen.current.style.fontSize  = "30px"
      }
  },[score])

  return (
    <div className="App">
      <div className="row">
        <div className="col-3">
                {!gameover &&
                <Weapon
                magazine={magazine}/>}
                {!magazine &&
                <img src="images/reload.png" alt="reload icone" className="titleAnim ms-1"
                onClick={(e)=>reload()}/>
                }
        </div>
          <div className="col-7"
          style={{position: "relative"}}
          onClick={(e)=>{magazine && setMagazine(magazine-1);
                                                magazine && setScore(c=>c-modegame.malus);
                                                magazine ? shootSound.play() : emptySound.play()}}>
            {!gameover &&
            <img className="img-fluid backscreen w-100 mt-5 ms-2 me-2" src="images/backpaper.jpg" alt="backscreen"
            style={{ userSelect: "none" }}/>}

                <BubbleGenerator
                modegame={modegame}
                style={{position: "relative"}}
                setMagazine={setMagazine}
                magazine={magazine}
                score={score}
                setscore={setScore}
                shootsound={shootSound}
                emptysound={emptySound}
                setgameover={setgameover}
                gameover={gameover}
                setstartgame={setstartgame}
                />

          </div>
        <div className="col-2">
          <span className="d-flex justify-content-center">
            <img className="img-fluid" src="images/score.png" alt="scoretext"
            style={{ userSelect: "none" }}/>
          </span>
            <h2 className="Kindergarten text-center"
            style={{ userSelect: "none" }}
            ref={scoreScreen}>{score}</h2>
        </div>
      </div>

    </div>

  );
}
export default Gamescreen;