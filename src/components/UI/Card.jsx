import React from 'react';
import Item from '../../images/cards-img/card-item.jpg';


const Card = (props) => {

  const {name, mainImage, id, price} = props;

  // console.log(mainImage);

  return (
    <div className="cards__card flex-column">
      <div className="cards__image-wrapper">
        {/*<img src={require(`../../images/cards-img/${mainImage}`)}/>*/}
        <img src={mainImage ? require(`../../images/cards-img/${mainImage}`) : Item}/>
      </div>
      <h2 className="cards__headline">{name}</h2>
      <p className="cards__price">{price}</p>
    </div>
  );
};

export default Card;