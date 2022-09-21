import React, {useState} from 'react';
import Card from "../../components/UI/Card";
import Caption from "../../components/UI/Caption";

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
                <p>1</p>
                <p>2</p>
            </div>
        </div>
    );
};

export default Shop;