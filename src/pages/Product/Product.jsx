import React, {useEffect, useState} from 'react';
import Caption from '../../components/UI/Caption';
import {NavLink, useLocation, useParams} from "react-router-dom";
import Item from "../../images/cards-img/classic-cotton-raincoat-1.jpg";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import Card from "../../components/UI/Card";

const Product = () => {

    const location = useLocation();
    const data = location.state?.data;
    console.log(data);
    console.log(data.mainImage);
  console.log(data.price);
  const colors = data.color;
  for (let color in colors) {
    console.log(color)
  }



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
      <Caption caption={data.name}/>
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
      {/*END of bread-crumbs*/}

      <div className="product">
        <div className="product__info flex">
          <img src={data.mainImage ? imgUrl : Item} alt={data.name}/>

          <div className="product__options">
            <h2 className="product__price">{data.price} грн</h2>

            <h4>Размер:</h4>
            <ul className="product__sizes flex">
              {/*{data.size ?*/}
              {/*  <>*/}
              {/*    {data.size.map((size) => (*/}
              {/*      <li className="product__size">{size}</li>*/}
              {/*    ))}*/}
              {/*  </>*/}
              {/*  : */}
              <li className="product__sizes__universal size">Универсальный размер</li>
            </ul>
            {/*}*/}

            {/*{data.color ?*/}
            {/*  <>*/}
            <h4>Цвет:</h4>
            <ul>
                {/*  {data.color.map((color) => (*/}
                {/*    <li className="product__size">{color}</li>*/}
                {/*  ))}*/}

                {/*: */}
              <li className="product__colors__value color">Один цвет</li>

              {/*{*/}
              {/*  for (colorValue in {data.color}) {*/}
              {/*  <li className="product__size">{colorValue}</li>*/}
              {/*}*/}
              {/*}*/}
            </ul>
              {/*</> : '' }*/}
            {/*<div className="colors">*/}
            {/*  <button className="colorBtn">1</button>*/}
            {/*  <button className="colorBtn">2</button>*/}
            {/*  <button className="colorBtn">3</button>*/}
            {/*</div>*/}

            <div className="product__form flex">
              <input className="product__form__input" type="number" min='1' defaultValue='1'/>
              <button className="product__form__btn button">Добавить в корзину</button>
            </div>

          </div>
          {/*END of product__options*/}

        </div>
        {/*END of img & options of product*/}
        <p className="product__description">{data.description}</p>
      </div>
      {/*END of product*/}

      <h2 className="relatedProducts">Связанные товары</h2>
      <div className="flex relatedProducts__cards">
        <Card />
        <Card />
      </div>

    </div>
  );
};

export default Product;