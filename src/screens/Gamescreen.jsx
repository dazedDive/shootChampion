import React, { useLayoutEffect, useRef } from 'react';
import { useState } from 'react';
import Weapon from '../components/Weapon';
import BubbleGenerator from '../components/BubbleGenerator';

const Gamescreen = ({modegame,setmodegame}) => {
const scoreScreen = useRef()

  const [magazine, setMagazine] = useState("6");
  const [score, setScore] = useState(0)

  const reload = () => {
    setTimeout(() => {
        setMagazine(6);}, "3001"
    )
  }
  const [colorText, setColorText] = useState("")

  useLayoutEffect(()=>{

      if (score>300 & score<650){
        scoreScreen.current.style.color = "darkmagenta"
        scoreScreen.current.style.fontSize = "40px"
      } else if (score>650 & score <999){
        scoreScreen.current.style.color = "hotpink"
        scoreScreen.current.style.fontSize  = "50px"
      } else if (score>999 & score<1350){
        scoreScreen.current.style.color = "fuchsia"
        scoreScreen.current.style.fontSize  = "70px"
      } else if (score>1350){
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
                <Weapon
                magazine={magazine}/>
                {!magazine &&
                <img src="images/reloadbutton.png" alt="reload icone" className="titleAnim"
                onClick={(e)=>reload()}/>
                }
        </div>
          <div className="col-7" onClick={(e)=>magazine && setMagazine(magazine-1)}>
            <img className="img-fluid backscreen w-100 mt-5 ms-2 me-2" src="images/backpaper.jpg" alt="backscreen"/>
              <div className="container m-1"
              >
                <BubbleGenerator
                modegame={modegame}
                setmodegame={setmodegame}
                style={{position: "relative"}}
                setMagazine={setMagazine}
                magazine={magazine}
                score={score}
                setscore={setScore}
                />
              </div>
          </div>
        <div className="col-2">
          <span className="d-flex justify-content-center">
            <img className="img-fluid" src="images/score.png" alt="scoretext"/>
          </span>
            <h2 className="Kindergarten text-center"
            ref={scoreScreen}>{score}</h2>
        </div>
      </div>
    </div>

  );
}
export default Gamescreen;