import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    let banners = [
        require('../../images/banner/first.jpg'),require('../../images/banner/second.jpg'),require('../../images/banner/third.jpg')
    ]

    const [currentBanner, setCurrentBanner] = useState(0);

    const handleSwitch = (bannerIndex) => {
        setCurrentBanner(bannerIndex);
    };

    return (
        <div className='banner'>
            <h1>Новые поступления в этом сезоне</h1>
            <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
            <Link to="/shop" className="button">Открыть магазин</Link>
            <div className='switcher'>
                {banners.map((banner, bannerIndex) => (
                    <div key={bannerIndex} className={`rectangle ${currentBanner == bannerIndex ? 'active' : ''}`} onClick={() => handleSwitch(bannerIndex)}></div>
                ))}
            </div>
            <img src={banners[currentBanner]} alt='banner'></img>
        </div>
    );
};

export default Home;