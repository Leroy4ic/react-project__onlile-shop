import React from 'react';
import Item from '../../images/card-item.jpg';


const Card = (props) => {

    const {name, image, id, price} = props;

    return (
        <div className="cards__card flex-column">
            <div className="cards__image-wrapper">
                <img src={Item}/>
            </div>
            <h2 className="cards__headline">{name}</h2>
            <p className="cards__price">{price}</p>
        </div>
    );
};

export default Card;