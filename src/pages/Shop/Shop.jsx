import React, {useState} from 'react';
import Card from "../../components/UI/Card";
import Caption from "../../components/UI/Caption";
import {Link} from "react-router-dom";
import Icon from "../../images/sprites/Icon";

const Shop = () => {
    const categories = ['Все', 'Пальто', 'Свитшоты', 'Кардиганы', 'Толтовки'];
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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="pagination flex">
                <Link to="/page1" className="pagination__number">1</Link>
                <Link to="/page2" className="pagination__number">2</Link>
                <Link to="/next">
                    <Icon name="arrow" color="#000" size="18"/>
                </Link>
            </div>
        </div>
    );
};

export default Shop;