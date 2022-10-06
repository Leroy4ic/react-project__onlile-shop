import React from 'react';
import Item from '../../images/card-item.jpg';


const Card = (props) => {

    const {name, mainimage, id, price} = props;

    console.log(mainimage);

    const imgPath = '../../images/cards-img/';

    const imageSource = imgPath + mainimage;

    return (
        <div className="cards__card flex-column">
            <div className="cards__image-wrapper">
                <img src={require( `${imageSource}` )}/>
            </div>
            <h2 className="cards__headline">{name}</h2>
            <p className="cards__price">{price}</p>
        </div>
    );
};

export default Card;