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
            <div className="banner-right">
                <div className="image-wrapper">
                    <img src={banners[currentBanner]} alt='banner'></img>
                </div>
            </div>
        </div>
    );
};

export default Home;