import React, { useEffect, useState } from 'react';


const Bubble = ({magazine,setMagazine,setscore,score,bonus,opacitybonus,shootsound,emptysound}) => {

const [bubble, setBubble] = useState({});
const [popScore, setPopScore] = useState({visible:false, value:0, right:0, top:0});
////////////BUBBLE PROPERTIES///////////////////////
const colorPalette = ["#BF00E6", "#990066", "#660022", "#4D0040"];
const sizePalette = ["150", "120", "90", "50"];
const indexColor = Math.floor(Math.random() * 4);
const indexSize = Math.floor(Math.random() * 4);
const startPositionX = Math.floor(Math.random() * 80);
const startPositionY = Math.floor(Math.random() * 80);
const opacityValue = Math.floor((Math.random()) * 50);

////////////BUBBLE GENERATOR///////////////////////
useEffect(()=>{
        setBubble({state:true,
                color:colorPalette[indexColor],
                size:sizePalette[indexSize],
                opacity: opacityValue,
                startPointX: startPositionX,
                startPointY: startPositionY,
                value: (opacityValue+12)*(indexSize+1) + bonus})
        },[]);
const hitOk = (addpoint) => {
    setscore(score+addpoint);
    setPopScore({visible:true, value:addpoint, right:bubble.startPointX, top: bubble.startPointY});
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
            , cursor: "crosshair"
            , zIndex:"3"
            , right : bubble.startPointX + "%"
            , top : bubble.startPointY + "%"
            , opacity:(2/(bubble.opacity)) + opacitybonus
            , value: bubble.value}}
            onClick={()=>{magazine && setMagazine(magazine-1)
                ;magazine && hitOk(bubble.value)
                ;magazine && setBubble({state:false})
                magazine ? shootsound.play() : emptysound.play();
                magazine && setPopScore({visible:true})}}
            ></div>
            }
            {popScore.visible &&
            <h2 className="Kindergarten"
            style={{
                position : "absolute",
                zIndex : 8,
                right : popScore.right,
                top : popScore.top,
                color: "deeppink"
                }}>{popScore.value}
            </h2>
            }
        </div>
    );
};

export default Bubble;