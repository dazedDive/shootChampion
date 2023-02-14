import React, { useState } from 'react';

const Loginscreen = ({startgame, setstartgame, setmodegame}) => {

    const startFunction = (select) =>{
        !startgame && setstartgame(true);
        switch (select) {
            case "normal" :
                setmodegame({mode:select, speed:1222, bonus: 0, malus : 0});
                break;
            case "nightmare" :
                setmodegame({mode:select, speed:999, bonus: 10, malus : 10});
                break;
            case "hellfire" :
                setmodegame({mode:select, speed:666, bonus: 20, malus : 20});
                break;
        }
    }

    return (
        <div className ="container">
            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col-8">
                    <img className="img-fluid w-100 titleAnim" d-flex justify-content-center src="/images/title.png" alt="title"/>
                    <h4 className="Kindergarten text-center">Welcome in the incredible bubble shooter reflex action game, stay relax, select à difficulty
                    and enjoy. Try to beat your personnal score or the world record? First time here? check the rules here </h4>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img className="img-fluid w-80 buttonAnimated" src="/images/normal.png"
                        onClick={()=>startFunction("normal")}/>
                        <p className="Kindergarten"> the normal mode is easy, no score malus.
                        Time of flash bubble is slow. Nice mode for training.</p>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid w-80 buttonAnimated" src="/images/nightmare.png"
                        onClick={()=>startFunction("nightmare")}/>
                        <p className="Kindergarten"> the nightmare mode is hard, malus if you miss your hit.
                        Time of flash bubble is fast. You win a bonus points for scoring</p>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid w-80 buttonAnimated" src="/images/hellefire.png"
                        onClick={()=>startFunction("hellfire")}/>
                        <p className="Kindergarten"> the hellFire mode is very hard, score malus if you miss.
                        Time of flash bubble is very fast. The mode for pro player !</p>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
};

export default Loginscreen;