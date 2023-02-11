import { useEffect,useState } from "react"
import Bubble from "./Bubble"

const BubbleGenerator = ({magazine,setMagazine,setscore,score}) => {
    const [timeCount, setTimeCount] = useState(0)

    const generator = () => {
        timeCount!=30 && setTimeout(()=>{setTimeCount(timeCount+1)},"1222")};
        timeCount==30 && setTimeCount(0);
        useEffect(()=>{generator()},[timeCount]);
        return(
            <>
            {(timeCount%2 & timeCount!=30) ?
                <Bubble
                magazine={magazine}
                setMagazine={setMagazine}
                setscore={setscore}
                score={score}
                />:""}
            </>
    )
}
export default BubbleGenerator