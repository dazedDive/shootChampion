import { useEffect,useState } from "react"
import Bubble from "./Bubble"
import ModalEndGame from "./ModalEndGame";

const BubbleGenerator = ({magazine,setMagazine,setscore,score,modegame,gameover,setgameover,setstartgame}) => {
    const [timeCount, setTimeCount] = useState(0)

    const generator = () => {
        !timeCount && setMagazine(6);
        !timeCount && setscore(0);
        timeCount!=30 && setTimeout(()=>{setTimeCount(timeCount+1)},modegame.speed)};
        timeCount > 29 && setgameover(true);
        useEffect(()=>{generator()},[timeCount]);
        return(
            <>
            {(timeCount%2 & timeCount<=30) ?
                <Bubble
                magazine={magazine}
                setMagazine={setMagazine}
                setscore={setscore}
                score={score}
                bonus={modegame.bonus}
                opacitybonus={modegame.opacityBonus}
                />:""}
            {gameover &&
            <ModalEndGame
            style={{position:"relative",
                    zIndex: "5"}}
            score={score}
            gameover={gameover}
            setgameover={setgameover}
            setstartgame={setstartgame}
            settimecount={setTimeCount}
            />
            }
            </>
    )
}
export default BubbleGenerator