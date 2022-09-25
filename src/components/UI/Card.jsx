import React from 'react';
import Item from '../../images/card-item.jpg';


const Card = () => {

    // return (
    //     <div className="cards__card flex-column">
    //
    //         {coat.map(item => {
    //             <div className="cards__image-wrapper">
    //                 <img src={item.image}/>
    //                 <h2 className="cards__headline">{item.name}</h2>
    //                 <p className="cards__price">{item.price}</p>
    //             </div>
    //         })}
    //     </div>
    // );

    return (
        <div className="cards__card flex-column">
            <div className="cards__image-wrapper">
                <img src={Item}/>
            </div>
            <h2 className="cards__headline">Name</h2>
            <p className="cards__price">price</p>
        </div>
    );
};

export default Card;