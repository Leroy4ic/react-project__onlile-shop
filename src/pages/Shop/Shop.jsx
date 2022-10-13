import React, {useEffect, useState} from 'react';
import Card from "../../components/UI/Card";
import Caption from "../../components/UI/Caption";
import {Link} from "react-router-dom";
import useCatalogData from "../../custom-hooks/useCatalogData";

const Shop = () => {

    // const coat = useCatalogData('coat');
    // const coatData = coat?.data;
    //
    // const cardigan = useCatalogData('cardigan');
    // const cardiganData = cardigan?.data;
    //
    // const sweatshirt = useCatalogData('sweatshirt');
    // const sweatshirtData = sweatshirt?.data;
    //
    // const tolstovki = useCatalogData('tolstovki');
    // const tolstovkiData = tolstovki?.data;

    const womazing = useCatalogData('womazing');

    const [dataBase, setDataBase] = useState('');

    useEffect( () => {
        setDataBase(womazing);
    }, [womazing]);



    console.log(womazing);

    const categories = ['Все', 'Пальто', 'Свитшоты', 'Кардиганы', 'Толстовки'];
    const [status, setStatus] = useState('all');

    // const allData = [coatData, cardiganData, sweatshirtData, tolstovkiData];

    const [catalog, setCatalog] = useState(null);

    const hand = (e) => {
        // if(e.target.innerText === 'Все') {
        //     // console.log('hello');
        //     setCatalog(allData);
        //     console.log(catalog);
        // };
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

                {Object.keys(dataBase)?.forEach(data => {
                    data?.map(item => {
                        return <Card key={item.id} {...item}/>
                    })
                })}

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