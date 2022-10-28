import React, {useEffect, useState} from 'react';
import Caption from '../../components/UI/Caption';
import useCatalogData from "../../custom-hooks/useCatalogData";
import {Link, useLocation, useParams} from "react-router-dom";
import axios from "axios";
import Item from "../../images/cards-img/classic-cotton-raincoat-1.jpg";
import {getDownloadURL, getStorage, ref} from "firebase/storage";

const Product = (props) => {

    const location = useLocation();
    const data = location.state?.data;
    console.log(data);
    console.log(data.mainImage);
    console.log(props);

  // console.log(props.location.name);
  const {name, mainImage, id, price} = props;

  const storage = getStorage();
  const imgRef = ref(storage, `${data.mainImage}`);

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


  return (
    <div>
      {/*<Caption caption = "{props.}"/>*/}
      <Caption caption = {data.name}/>
      Product

      <div className="cards__card flex-column">

        <img src={data.mainImage ? imgUrl : Item}/>
        <p className="cards__price">{price}</p>

      </div>
    </div>
  );
};

export default Product;