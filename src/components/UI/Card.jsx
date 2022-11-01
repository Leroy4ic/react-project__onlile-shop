import React from 'react';
import Item from '../../images/cards-img/classic-cotton-raincoat-1.jpg';
import {Link} from "react-router-dom";
import ArrowOnAProduct from '../../images/cards-img/arrowOnAProduct.svg';

import {useState} from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const Card = (props) => {

  const {name, mainImage, id, price} = props;
  // console.log(mainImage);

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

    const [data, setData] = useState({
      name: `${name}`,
      mainImage: `${mainImage}`,
      imgUrl: `${imgUrl}`,
      price: `${price}`,

    });

  // console.log(mainImage);
  // console.log(imgRef);
  return (
    <div className="cards__card flex-column">

      <Link state={{ data: data }} className="cards__image-wrapper imgLink" to={`/product/${id}`}>

        <img src={mainImage ? imgUrl : Item} alt="product"/>

        <span className={"mask"}>
          <img src={ArrowOnAProduct} alt="Arrow On A Product"/>
        </span>

      </Link>
      <h4 className="cards__headline">{name}</h4>
      <p className="cards__price">${price}</p>

    </div>
  );
};

export default Card;