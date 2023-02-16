import React, { useEffect, useState } from 'react';

const ModalEndGame = ({setgameover, gameover, score, settimecount, setstartgame, setMagazine}) => {
    const [rank, setRank] = useState({picture : "", text : "", modal:false})

    useEffect(()=>{
        setMagazine(false);
        if (score < 600) {
            setRank({picture:"/images/bronze.png", text:"You are a Noob or maybe your mouse is broken?", modal:true })
        }
        if (score >= 600 & score < 1000) {
            setRank({picture:"/images/silver.png", text:"it's not brillant..try to be better in your life", modal:true  })
        }
        if (score >= 1000 & score < 1500) {
            setRank({picture:"/images/gold.png", text:"You are just a random player, training please", modal:true  })
        }
        if (score >= 1500 & score < 2000) {
            setRank({picture:"/images/diamond.png", text:"not bad, but try a new game, you can do it", modal:true  })
        }
        if (score >= 2000 & score < 2500) {
            setRank({picture:"/images/champion.png", text:"nice score guy! but you can be better", modal:true  })
        }
        if (score >= 2500) {
            setRank({picture:"/images/god.png", text:"impressive! you are a pro gamer now!", modal:true  })
        }
    },[gameover])


    const resetGame =()=>{
        setstartgame(true);
        setgameover(false);
        settimecount(0);
    }

    const goToMenu =()=>{
        setstartgame(false);
        setgameover(false);
        settimecount(0);
    }

    return (
        <>

        <div className="card">
            <div className="col-3"></div>
            <div className="bg-white pop shadow-lg p-3 mb-5 bg-body rounded">
                <h3 className="Kindergarten text-center">Game Over! your score : {score}</h3>
                <img className="card-img-top" src={rank.picture} alt="rank"/>
                <p className="Kindergarten text-center">{rank.text}</p>
                <div className="row">
                    <div className="col-6">
                            <img className="img-fluid buttonAnimated" src="/images/restart.jpg"
                            onClick={(e)=>{e.preventDefault(); resetGame()}}/>
                    </div>
                    <div className="col-6">
                            <img className="img-fluid buttonAnimated" src="/images/menu.jpg"
                            onClick={(e)=>{e.preventDefault();goToMenu()}}/>
                    </div>
                </div>
            </div>
            <div className="col-3"></div>
        </div>

        </>
    );
};

export default ModalEndGame;