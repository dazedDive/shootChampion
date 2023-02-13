import React, { useEffect, useState } from 'react';

const Bubble = ({magazine,setMagazine,setscore,score,bonus}) => {

const [bubble, setBubble] = useState({});
////////////BUBBLE PROPERTIES///////////////////////
const colorPalette = ["#BF00E6", "#990066", "#660022", "#4D0040"];
const sizePalette = ["150", "120", "90", "50"];
const indexColor = Math.floor(Math.random() * 4);
const indexSize = Math.floor(Math.random() * 4);
const startPosition = Math.floor(Math.random() * 80);
const speedValue = Math.floor((Math.random()+3) * 5);

////////////BUBBLE GENERATOR///////////////////////
useEffect(()=>{
        setBubble({state:true,
                color:colorPalette[indexColor],
                size:sizePalette[indexSize],
                speed: speedValue,
                startPoint: startPosition,
                value: (speedValue+1)*(indexSize+1) + bonus});
},[])
const hitOk = (addpoint) => {
    setscore(score+addpoint)
}
////////////JSX///////////////////////////////////

return (
        <div>
            {bubble.state &&
            <div
            style = {{borderStyle : "solid"
            , borderColor : bubble.color
            , background : bubble.color
            , height: bubble.size + "px"
            , width: bubble.size + "px"
            , borderRadius: (bubble.size/2) + "px"
            , position: "absolute"
            , zIndex:"3"
            , right : bubble.startPoint + "%"
            , top : bubble.startPoint + "%"
            , value: bubble.value}}
            onClick={()=>{magazine && setMagazine(magazine-1)
                ;magazine && hitOk(bubble.value)
                ;magazine && setBubble({state:false})}}
            ></div>
            }
        </div>
    );
};

export default Bubble;