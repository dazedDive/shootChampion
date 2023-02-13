import { useEffect,useState } from "react"
import Bubble from "./Bubble"

const BubbleGenerator = ({magazine,setMagazine,setscore,score,modegame,setmodegame}) => {
    const [timeCount, setTimeCount] = useState(0)
    switch (modegame.mode) {
        case "normal":
            setmodegame({mode:"normal", speed:"1450", bonus:0});
            break;
        case "nightmare":
            setmodegame({mode:"nightmare", speed:"1000", bonus:10});
            break;
        case "hellfire":
            setmodegame({mode:"hellfire", speed:"750", bonus:25});
            break;
    }
    const generator = () => {
        timeCount!=30 && setTimeout(()=>{setTimeCount(timeCount+1)},modegame.speed)};
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
                />:""}
            </>
    )
}
export default BubbleGenerator