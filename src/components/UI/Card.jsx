import React from 'react';
import Item from '../../images/cards-img/classic-cotton-raincoat-1.jpg';
import {Link} from "react-router-dom";


// const Card = (props) => {
//
//     const {name, mainImage, id, price} = props;
//
//     console.log(mainImage);
//
//     return (
//         <div className="cards__card flex-column">
//             <div className="cards__image-wrapper">
//                 <img src={require(`../../images/cards-img/${mainImage}`)}/>
//                 {/*<img src={mainImage ? require(`../.  ./images/cards-img/${mainImage}`) : Item}/>*/}
//             </div>
//             <h2 className="cards__headline">{name}</h2>
//             <p className="cards__price">{price}</p>
//         </div>
//     );
// };

const Card = (props) => {

  const {name, mainImage, id, price} = props;

  console.log(mainImage);

  return (
    <div className="cards__card flex-column">

      <Link className="cards__image-wrapper" to={`/product/${id}`}>

        <img src={mainImage ? require(`../../images/cards-img/${mainImage}`) : Item} alt={"product"}/>
        <h2 className="cards__headline">{name}</h2>
        <p className="cards__price">{price}</p>

      </Link>

    </div>
  );
};

export default Card;