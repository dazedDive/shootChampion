import React, { useEffect, useState } from 'react';

const ModalEndGame = ({setgameover, gameover, score, setscore, settimecount, setmagazine}) => {
    const [rank, setRank] = useState({picture : "", text : "", modal:false})

    useEffect(()=>{
        if (score < 300) {
            setRank({picture:"/images/bronze.png", text:"You are a Noob or maybe your mouse is broken?", modal:true })
        }
        if (score >= 300 & score < 500) {
            setRank({picture:"/images/silver.png", text:"it's not brillant..try to be better in your life", modal:true  })
        }
        if (score >= 500 & score < 777) {
            setRank({picture:"/images/gold.png", text:"You are just a random player, training please", modal:true  })
        }
        if (score >= 777 & score < 1000) {
            setRank({picture:"/images/diamond.png", text:"not bad, but try a new game, you can do it", modal:true  })
        }
        if (score >= 1000 & score < 1300) {
            setRank({picture:"/images/champion.png", text:"nice score guy! but you can be better", modal:true  })
        }
        if (score >= 1300) {
            setRank({picture:"/images/god.png", text:"impressive! you are a pro gamer now!", modal:true  })
        }
    },[gameover])


    const resetGame =()=>{
        setscore(0);
        setgameover(false);
        settimecount(0);
        setmagazine(6);
    }

    const goToMenu =()=>{

    }

    return (
        <>

        <div className="row">
            <div className="col-3"></div>
            <div className="bg-white pop shadow-lg p-3 mb-5 bg-body rounded">
                <p>Game Over! votre score : {score}</p>
                <img className="img-fluid" src={rank.picture} alt="rank"/>
                <p className="Kindergarten">{rank.text}</p>
                <div className="row">
                    <div className="col-6">
                            <img className="img-fluid" src="/images/restart.jpg"
                            onClick={()=>resetGame()}/>
                    </div>
                    <div className="col-6">
                            <img className="img-fluid" src="/images/menu.jpg"
                            onClick={()=>goToMenu()}/>
                    </div>
                </div>
            </div>
            <div className="col-3"></div>
        </div>

        </>
    );
};

export default ModalEndGame;