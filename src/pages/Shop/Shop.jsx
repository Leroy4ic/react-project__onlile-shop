import React, {useEffect, useState} from 'react';
import Card from "../../components/UI/Card";
import Caption from "../../components/UI/Caption";
import {Link} from "react-router-dom";
import useCatalogData from "../../custom-hooks/useCatalogData";
import {useSelector} from "react-redux";

const Shop = () => {

    // const coat = useCatalogData('coat');
    // const coatData = coat?.data;
    // console.log(coat);
    // console.log(coat.data);
    //
    // const cardigan = useCatalogData('cardigan');
    // const cardiganData = cardigan?.data;
    //
    // const sweatshirt = useCatalogData('sweatshirt');
    // const sweatshirtData = sweatshirt?.data;
    //
    // const tolstovki = useCatalogData('tolstovki');
    // const tolstovkiData = tolstovki?.data;


    const value = useSelector( state => state.firebaseData.jsonObj);
    console.log(value);



    const womazing = useCatalogData('womazing');

    console.log(womazing);

    const dataBase = [womazing.cardigan, womazing.coat, womazing.sweatshirt, womazing.tolstovki];

    console.log(dataBase);

    const categories = ['Все', 'Пальто', 'Свитшоты', 'Кардиганы', 'Толстовки'];
    const [status, setStatus] = useState('all');


    const [catalog, setCatalog] = useState(null);

    const hand = (e) => {

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

                {/*КОД ДОЛЖЕН РАБОТАТЬ, НО ВИДИМО ПРОБЛЕМА В ВЛОЖЕННОСТИ ЦИКЛОВ*/}

                {/*{dataBase?.map(elem => {*/}
                {/*    console.log(elem);*/}
                {/*    elem?.data.map(item => {*/}
                {/*        return <Card key={item.id} {...item}/>*/}
                {/*    })*/}
                {/*})}*/}

                {dataBase[0]?.data.map(item => {
                    return <Card key={item.id} {...item}/>
                })}

                {dataBase[1]?.data.map(item => {
                    return <Card key={item.id} {...item}/>
                })}

                {dataBase[2]?.data.map(item => {
                    return <Card key={item.id} {...item}/>
                })}

                {/*ПОСЛЕДНИЙ ПУНКТ НЕ ВЫВОДИТСЯ, ОШИБКА, НЕ ПОЙМУ ИЗ-ЗА ЧЕГО*/}

                {/*{dataBase[3]?.data.map(item => {*/}
                {/*    return <Card key={item.id} {...item}/>*/}
                {/*})}*/}


                {/*СТАРЫЙ КОД*/}

                {/*{coatData?.map(item => {*/}
                {/*    return <Card key={item.id} {...item}/>*/}
                {/*})}*/}

                {/*{cardiganData?.map(item => {*/}
                {/*    return <Card key={item.id} {...item}/>*/}
                {/*})}*/}

                {/*{sweatshirtData?.map(item => {*/}
                {/*    return <Card key={item.id} {...item}/>*/}
                {/*})}*/}

                {/*{tolstovkiData?.map(item => {*/}
                {/*    return <Card key={item.id} {...item}/>*/}
                {/*})}*/}

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