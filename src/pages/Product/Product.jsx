import React, {useEffect, useState} from 'react';
import Caption from '../../components/UI/Caption';
import {Link, useLocation, useParams} from "react-router-dom";
import Item from "../../images/cards-img/classic-cotton-raincoat-1.jpg";
import {getDownloadURL, getStorage, ref} from "firebase/storage";

const Product = () => {

    const location = useLocation();
    const data = location.state?.data;
    console.log(data);
    console.log(data.mainImage);


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
      <Caption caption = {data.name}/>
      <div className="bread-crumbs">
        <Link to="/">Главная</Link> <span>—</span> <Link to="/shop">Магазин</Link> <span>—</span> <p>{data.name}</p>
      </div>
      <div className="product">

        <img src={data.mainImage ? imgUrl : Item} alt="product"/>

        <div className="optionsOfProduct">
          <h2 className="productPrice">{data.price}</h2>
          <h4>Выберите размер</h4>

          <h4>Выберите цвет</h4>
          <div className="colors">
            <button className="colorBtn">1</button>
            <button className="colorBtn">2</button>
            <button className="colorBtn">3</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;