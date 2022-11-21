import React, {useEffect, useState} from 'react';
import Caption from '../../components/UI/Caption';
import {NavLink, useLocation, useParams} from "react-router-dom";
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

      setImgUrl(url);

    })
    .catch((error) => {

      // Handle any errors

    });


  return (
    <div>
      <Caption caption = {data.name}/>
      <div className="bread-crumbs">
        <NavLink to="/">Главная</NavLink>
        <span>—</span>
        <NavLink to="/shop">Магазин</NavLink>
        <span>—</span>
        <NavLink to="/shop"
                 // onClick={}
          >{data.category}</NavLink>
        <span>—</span>
        <p>{data.name}</p>
      </div>

      <div className="product flex">
        <img src={data.mainImage ? imgUrl : Item} alt="product"/>

        <div className="optionsOfProduct">
          <h2 className="productPrice">{data.price}</h2>

          <h4>Выберите размер</h4>
          <ul>
            <li></li>
          </ul>

          <h4>Выберите цвет</h4>
          <ul>
            <li></li>
          </ul>
          {/*<div className="colors">*/}
          {/*  <button className="colorBtn">1</button>*/}
          {/*  <button className="colorBtn">2</button>*/}
          {/*  <button className="colorBtn">3</button>*/}
          {/*</div>*/}
          <div className="flex">
            <input type="number" min='1' defaultValue='1'/>
            <button>Добавить в корзину</button>
          </div>

        </div>


      </div>

        <p className="product__description">{data.description}</p>

    </div>
  );
};

export default Product;