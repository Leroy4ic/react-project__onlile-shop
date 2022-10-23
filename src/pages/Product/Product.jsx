import React, {useEffect, useState} from 'react';
import Caption from '../../components/UI/Caption';
import useCatalogData from "../../custom-hooks/useCatalogData";
import {Link, useLocation, useParams} from "react-router-dom";
import axios from "axios";
import Item from "../../images/cards-img/classic-cotton-raincoat-1.jpg";

const Product = (name, mainImage, id, price) => {


  const womazing = useCatalogData('womazing');
  console.log(womazing);

  // const categories = womazing.map(category => category.data);
  const categories = [...womazing];

  console.log(categories)

  // const {name, mainImage, id, price} = props;
  console.log(name, mainImage, id, price);

  // const location = useLocation()
  // const params = useParams()
  // console.log('location =' + location)
  // console.log('params = ' + params)
  // const [product, setProduct] = useState({})
  //
  // useEffect(() => {
  //   axios(`http://localhost:3000/product/${params.id}`)
  //     .then(({data}) => setProduct(data))
  // }, [])

  return (
    <div>
      <Caption caption = "{name}"/>
      Product

      <div className="cards__card flex-column">

        <img src={mainImage ? require(`../../images/cards-img/${mainImage}`) : Item} alt={"product"}/>

        <p className="cards__price">{price}</p>

      </div>
    </div>
  );
};

export default Product;