import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Card from "../../components/UI/Card";
import Quality from "../../images/banner/quality 1.png";
import Speed from "../../images/banner/speed 1.png";
import Responsibility from "../../images/banner/responsibility 1.png";


const Home = () => {
    let banners = [
        require('../../images/banner/first.jpg'),require('../../images/banner/second.jpg'),require('../../images/banner/third.jpg')
    ]

    const [currentBanner, setCurrentBanner] = useState(0);
    const handleSwitch = (bannerIndex) => {
        setCurrentBanner(bannerIndex);
    };

    return (
        <div className="home">

            <div className="home-screens">

                <div className='banner flex'>
                    <div className="banner-left">
                        <h1 className="headline">Новые поступления в этом сезоне</h1>
                        <p className="label">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>

                        <Link to="/shop" className="button">Открыть магазин</Link>

                        <div className='switcher flex'>
                            {banners.map((banner, bannerIndex) => (
                              <div key={bannerIndex} className={`rectangle ${currentBanner === bannerIndex ? 'active' : ''}`} onClick={() => handleSwitch(bannerIndex)}></div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-color-div"></div>

                    <div className="banner-right">
                        <div className="image-wrapper">
                            <img src={banners[currentBanner]} alt='banner'></img>
                        </div>
                    </div>
                </div>

            </div>
            {/*home-screens END*/}

            {/*Новая коллекция*/}
            <div className="banner">
                <h2>Новая коллекция</h2>
                <div className="cards flex">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Link to="/shop" className="button ">Открыть магазин</Link>

            </div>

            {/*Что для нас важно*/}
            <div className="banner">
                <h2>Что для нас важно</h2>

                <div className="flex">
                    <div className="important-for-us">
                        <img src={Quality} alt='Quality'/>
                        <h3>Качество</h3>
                        <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
                    </div>

                    <div className="important-for-us">
                        <img src={Speed} alt={'Speed'}/>
                        <h3>Скорость</h3>
                        <p>Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
                    </div>

                    <div className="important-for-us">
                        <img src={Responsibility} alt={'Responsibility'}/>
                        <h3>Ответственность</h3>
                        <p>Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;