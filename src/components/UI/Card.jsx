import React from 'react';
import Item from '../../images/cards-img/classic-cotton-raincoat-1.jpg';
import {useState} from "react";

import { getStorage, ref, getDownloadURL } from "firebase/storage";


const Card = (props) => {

    const {name, mainImage, id, price} = props;

    const storage = getStorage();
    const imgRef = ref(storage, `${mainImage}`);

    const [imgUrl, setImgUrl] = useState('');

    getDownloadURL(imgRef)
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'

            setImgUrl(url);

            // // This can be downloaded directly:
            // const xhr = new XMLHttpRequest();
            // xhr.responseType = 'blob';
            // xhr.onload = (event) => {
            //     const blob = xhr.response;
            // };
            // xhr.open('GET', url);
            // xhr.send();

            // // Or inserted into an <img> element
            // const img = document.getElementById('myimg');
            // img.setAttribute('src', url);
        })
        .catch((error) => {
            // Handle any errors
        });



    // const imgRef = ref(storage, mainImage);

    // console.log(mainImage);
    // console.log(imgRef);

    return (
        <div className="cards__card flex-column">
            <div className="cards__image-wrapper">
                {/*<img src={require(`../../images/cards-img/${mainImage}`)}/>*/}
                {/*<img src={mainImage ? require(`../../images/cards-img/${mainImage}`) : Item}/>*/}

                <img src={mainImage ? imgUrl : Item}/>


            </div>
            <h2 className="cards__headline">{name}</h2>
            <p className="cards__price">{price}</p>
        </div>
    );
};

export default Card;