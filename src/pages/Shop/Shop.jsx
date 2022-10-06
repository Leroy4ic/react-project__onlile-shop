import React, {useState} from 'react';
import Card from "../../components/UI/Card";
import Caption from "../../components/UI/Caption";
import {Link} from "react-router-dom";
import useCatalogData from "../../custom-hooks/useCatalogData";

const Shop = () => {

    const coat = useCatalogData('coat');
    console.log(coat?.data);

    const coatData = coat?.data;
    console.log(coatData);

    const categories = ['Все', 'Пальто', 'Свитшоты', 'Кардиганы', 'Толстовки'];
    const [status, setStatus] = useState('all');

    const hand = () => {

    }

    return (
        <div className="shop">
            <Caption caption="Магазин"/>
            <ul className="shop__list flex">
                {categories.map(item => {
                    return (
                        <li key={item} className="shop__item" onClick={hand}>{item}</li>
                    )
                })}
            </ul>
            <p>Показано: 9 из 12 товаров</p>
            <div className="cards flex">
                {coatData?.map(item => {
                    return <Card key={item.id} {...item}/>
                })}

            </div>
            <div className="pagination flex">
                <Link to="/page1" className="pagination__number">1</Link>
                <Link to="/page2" className="pagination__number">2</Link>
                {/*<Link to="/next">*/}
                {/*    <Icon name="arrow" color="#000" size="18"/>*/}
                {/*</Link>*/}
            </div>
        </div>
    );
};

export default Shop;