import React from 'react';

const Weapon = ({magazine}) => {
return (
        <div>
            <img className="image-fluid" src={`/images/${magazine}bulet.png`} alt="magazine"/>
        </div>
    );
};

export default Weapon;