import React, {useEffect} from 'react';
import Caption from '../../components/UI/Caption';
import useCatalogData from "../../custom-hooks/useCatalogData";

const Product = () => {

  const womazing = useCatalogData('womazing');

  console.log(womazing);

  return (
    <div>
      <Caption caption={"Товар"}/>
      Product
    </div>
  );
};

export default Product;